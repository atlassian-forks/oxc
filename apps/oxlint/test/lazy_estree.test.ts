import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { execa } from "execa";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { PACKAGE_ROOT_PATH } from "./utils.ts";

const CLI_PATH = join(PACKAGE_ROOT_PATH, "dist/cli.js");

// A fixture exercising the structural divergences between the oxc AST and ESTree
// which the lazy walker handles specially: runtime-typed nodes, params flattening
// (rest / defaults / TS parameter properties), class heritage, literals, template
// elements, meta properties, JSX names, module declarations, directives.
const FIXTURE = `
'use strict';
import def, { named as aliased } from './x.mjs' with { type: 'json' };
export * as ns from './y.mjs';

const big = 123n;
const re = /ab+c/gi;
const tpl = \`before\${aliased}after\`;
const { a = 1, ...restObj } = def;
const [b, , ...restArr] = [1, 2, 3];

function fn(first, second = 2, ...rest) {
  return first + second + rest.length + import.meta.url.length;
}

const arrow = (x) => x * 2;
const arrowExpr = (y = 1) => y;

class Base {}
class Derived extends Base {
  #priv = 1;
  static s = 'static';
  constructor(readonly) {
    super();
    new.target;
  }
  get value() {
    return this.#priv;
  }
}

label: for (const key in def) {
  if (key === 'stop') break label;
}

try {
  fn(1);
} catch (err) {
  console.warn(err);
}

export default fn;
`;

const TS_FIXTURE = `
namespace Outer.Inner {
  export const x = 1;
}
declare module 'external-mod' {
  const y: number;
}
interface Shape<T> extends Map<string, T> {
  area(): number;
}
class Impl<T> extends Map<string, T> implements Shape<T> {
  constructor(private readonly size: number, flag?: boolean, ...extras: string[]) {
    super();
  }
  area(): number {
    return this.size;
  }
}
enum Direction {
  Up = 1,
  Down,
}
type Fn = (this: Impl<number>, input?: string) => number;
const assertion = { val: 1 } as const;
function generic<T extends { length: number }>(arg: T): T {
  return arg;
}
`;

const JSX_FIXTURE = `
const App = (props) => (
  <outer.Widget size={1} {...props}>
    <this.Item />
    <self-closing />
    text child
    {props.children}
  </outer.Widget>
);
export default App;
`;

// Plugin which records, for every visited node: visit phase, ESTree type, range,
// parent type/range, and (on enter) source text and loc line. This covers walk order,
// node shapes, `parent` resolution, `range`/`loc`, and `getText` under the lazy walker.
const RECORD_PLUGIN = `
const lines = [];
export default {
  meta: { name: 'recorder' },
  rules: {
    record: {
      meta: { messages: { m: '{{data}}' } },
      create(context) {
        const sc = context.sourceCode;
        return {
          '*'(node) {
            const p = node.parent;
            const pInfo = p == null ? 'null' : p.type + ':' + p.range[0] + '-' + p.range[1];
            lines.push(
              node.type + '|' + node.range[0] + '-' + node.range[1] +
              '|parent=' + pInfo +
              '|line=' + node.loc.start.line +
              '|text=' + sc.getText(node).length
            );
          },
          'Program:exit'(node) {
            context.report({ node, messageId: 'm', data: { data: lines.join(';') } });
            lines.length = 0;
          },
        };
      },
    },
  },
};
`;

const SCOPE_PLUGIN = `
export default {
  meta: { name: 'scoper' },
  rules: {
    scopes: {
      meta: { messages: { m: '{{data}}' } },
      create(context) {
        const sc = context.sourceCode;
        return {
          Identifier(node) {
            const scope = sc.getScope(node);
            context.report({ node, messageId: 'm', data: { data: node.name + ':' + scope.type } });
          },
        };
      },
    },
  },
};
`;

const MUTATE_PLUGIN = `
export default {
  meta: { name: 'mutator' },
  rules: {
    mutate: {
      meta: { messages: { m: 'ok' } },
      create(context) {
        return {
          Identifier(node) {
            // Rules in the wild mutate AST nodes; lazy nodes must tolerate it
            node.myCustomProp = 42;
            node.range = [node.range[0], node.range[1]];
            if (node.myCustomProp === 42 && node.name === 'fn') {
              context.report({ node, messageId: 'm' });
            }
          },
        };
      },
    },
  },
};
`;

describe("lazy ESTree walking (OXLINT_JS_PLUGIN_LAZY=1)", () => {
  let cwd: string;

  beforeEach(async () => {
    cwd = await mkdtemp(join(tmpdir(), "oxlint-lazy-estree-"));
    await writeFile(join(cwd, "fixture.js"), FIXTURE);
    await writeFile(join(cwd, "fixture.ts"), TS_FIXTURE);
    await writeFile(join(cwd, "fixture.jsx"), JSX_FIXTURE);
  });

  afterEach(async () => {
    await rm(cwd, { recursive: true, force: true });
  });

  async function setup(pluginSource: string, ruleName: string) {
    await writeFile(join(cwd, "plugin.mjs"), pluginSource);
    await writeFile(
      join(cwd, ".oxlintrc.json"),
      JSON.stringify({
        plugins: [],
        categories: { correctness: "off" },
        jsPlugins: ["./plugin.mjs"],
        rules: { [ruleName]: "error" },
      }),
    );
  }

  function lint(lazy: boolean) {
    return execa(process.execPath, [CLI_PATH, "--threads", "2", "."], {
      cwd,
      reject: false,
      timeout: 20_000,
      env: lazy ? { OXLINT_JS_PLUGIN_LAZY: "1" } : {},
    });
  }

  function normalize(stdout: string): string[] {
    return stdout
      .split("\n")
      .filter(
        (line) =>
          line.includes("recorder(") || line.includes("scoper(") || line.includes("mutator("),
      )
      .sort();
  }

  it("visits identical nodes with identical shapes, parents, ranges, locs and text", async () => {
    await setup(RECORD_PLUGIN, "recorder/record");
    const eager = await lint(false);
    const lazy = await lint(true);
    expect(lazy.stderr).not.toContain("Error running JS plugin");
    const eagerLines = normalize(eager.stdout);
    expect(eagerLines.length).toBeGreaterThan(0);
    expect(normalize(lazy.stdout)).toEqual(eagerLines);
  });

  it("falls back to the eager path for scope-using rules with identical results", async () => {
    await setup(SCOPE_PLUGIN, "scoper/scopes");
    const eager = await lint(false);
    const lazy = await lint(true);
    expect(lazy.stderr).not.toContain("Error running JS plugin");
    const eagerLines = normalize(eager.stdout);
    expect(eagerLines.length).toBeGreaterThan(0);
    expect(normalize(lazy.stdout)).toEqual(eagerLines);
  });

  it("tolerates rules mutating lazy nodes", async () => {
    await setup(MUTATE_PLUGIN, "mutator/mutate");
    const eager = await lint(false);
    const lazy = await lint(true);
    expect(lazy.stderr).not.toContain("Error running JS plugin");
    expect(normalize(lazy.stdout)).toEqual(normalize(eager.stdout));
  });
});
