// Auto-generated code, DO NOT EDIT DIRECTLY!
// To edit this generated file you have to edit `tasks/ast_tools/src/generators/raw_transfer_lazy_estree.rs`.

import {
  TOKEN,
  constructorError,
  Frame,
  NodeArray,
  NodeProto,
  defineOwn,
} from "../../plugins/lazy/support.js";
import { getNodeLoc } from "../../plugins/location.js";
import { tokens, initTokens } from "../../plugins/tokens.js";
import { comments, initComments } from "../../plugins/comments.js";

const textDecoder = new TextDecoder("utf-8", { ignoreBOM: true }),
  decodeStr = textDecoder.decode.bind(textDecoder),
  { fromCodePoint } = String,
  inspectSymbol = Symbol.for("nodejs.util.inspect.custom");

// Resolve `parent` stored in a node's internal state. May be `null`, a node object,
// or a `Frame` (from the walker), which is materialized on demand.
export function resolveParent(internal) {
  const p = internal.parent;
  if (p === null || !(p instanceof Frame)) return p;
  return (internal.parent = p.construct(p.pos, internal.ast, p.parent));
}

export class Program {
  type = "Program";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, $range: void 0, $body: void 0 };
    nodes.set(pos, this);
  }

  get body() {
    const internal = this.#internal;
    if (internal.$body !== void 0) return internal.$body;
    const arr = [];
    arr.push(...constructVecDirective(internal.pos + 88, internal.ast, this));
    arr.push(...constructVecStatement(internal.pos + 112, internal.ast, this));
    return (internal.$body = arr);
  }
  set body(v) {
    this.#internal.$body = v;
  }

  get sourceType() {
    const internal = this.#internal;
    return constructSourceType(internal.pos + 136, internal.ast);
  }
  set sourceType(v) {
    defineOwn(this, "sourceType", v);
  }

  get comments() {
    comments === null && initComments();
    return comments;
  }
  set comments(v) {
    defineOwn(this, "comments", v);
  }

  get tokens() {
    tokens === null && initTokens();
    return tokens;
  }
  set tokens(v) {
    defineOwn(this, "tokens", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 0) >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 0 + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return null;
  }
  set parent(v) {}

  toJSON() {
    return {
      type: "Program",
      body: this.body,
      sourceType: this.sourceType,
      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugProgram.prototype);
  }
}

const DebugProgram = class Program {};

export function constructProgram(pos, ast, parent) {
  return new Program(pos, ast, parent);
}

export function constructExpression(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructBoxBooleanLiteral(pos + 8, ast, parent);
    case 1:
      return constructBoxNullLiteral(pos + 8, ast, parent);
    case 2:
      return constructBoxNumericLiteral(pos + 8, ast, parent);
    case 3:
      return constructBoxBigIntLiteral(pos + 8, ast, parent);
    case 4:
      return constructBoxRegExpLiteral(pos + 8, ast, parent);
    case 5:
      return constructBoxStringLiteral(pos + 8, ast, parent);
    case 6:
      return constructBoxTemplateLiteral(pos + 8, ast, parent);
    case 7:
      return constructBoxIdentifierReference(pos + 8, ast, parent);
    case 8:
      return constructBoxSuper(pos + 8, ast, parent);
    case 9:
      return constructBoxArrayExpression(pos + 8, ast, parent);
    case 10:
      return constructBoxArrowFunctionExpression(pos + 8, ast, parent);
    case 11:
      return constructBoxAssignmentExpression(pos + 8, ast, parent);
    case 12:
      return constructBoxAwaitExpression(pos + 8, ast, parent);
    case 13:
      return constructBoxBinaryExpression(pos + 8, ast, parent);
    case 14:
      return constructBoxCallExpression(pos + 8, ast, parent);
    case 15:
      return constructBoxChainExpression(pos + 8, ast, parent);
    case 16:
      return constructBoxClass(pos + 8, ast, parent);
    case 17:
      return constructBoxConditionalExpression(pos + 8, ast, parent);
    case 18:
      return constructBoxFunction(pos + 8, ast, parent);
    case 19:
      return constructBoxImportExpression(pos + 8, ast, parent);
    case 20:
      return constructBoxLogicalExpression(pos + 8, ast, parent);
    case 21:
      return constructBoxNewExpression(pos + 8, ast, parent);
    case 22:
      return constructBoxObjectExpression(pos + 8, ast, parent);
    case 23:
      return constructBoxParenthesizedExpression(pos + 8, ast, parent);
    case 24:
      return constructBoxSequenceExpression(pos + 8, ast, parent);
    case 25:
      return constructBoxTaggedTemplateExpression(pos + 8, ast, parent);
    case 26:
      return constructBoxThisExpression(pos + 8, ast, parent);
    case 27:
      return constructBoxUnaryExpression(pos + 8, ast, parent);
    case 28:
      return constructBoxUpdateExpression(pos + 8, ast, parent);
    case 29:
      return constructBoxYieldExpression(pos + 8, ast, parent);
    case 30:
      return constructBoxPrivateInExpression(pos + 8, ast, parent);
    case 31:
      return constructBoxImportMeta(pos + 8, ast, parent);
    case 32:
      return constructBoxNewTarget(pos + 8, ast, parent);
    case 33:
      return constructBoxJSXElement(pos + 8, ast, parent);
    case 34:
      return constructBoxJSXFragment(pos + 8, ast, parent);
    case 35:
      return constructBoxTSAsExpression(pos + 8, ast, parent);
    case 36:
      return constructBoxTSSatisfiesExpression(pos + 8, ast, parent);
    case 37:
      return constructBoxTSTypeAssertion(pos + 8, ast, parent);
    case 38:
      return constructBoxTSNonNullExpression(pos + 8, ast, parent);
    case 39:
      return constructBoxTSInstantiationExpression(pos + 8, ast, parent);
    case 40:
      return constructBoxV8IntrinsicExpression(pos + 8, ast, parent);
    case 48:
      return constructBoxComputedMemberExpression(pos + 8, ast, parent);
    case 49:
      return constructBoxStaticMemberExpression(pos + 8, ast, parent);
    case 50:
      return constructBoxPrivateFieldExpression(pos + 8, ast, parent);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for Expression`);
  }
}

export class IdentifierName {
  type = "Identifier";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $decorators: void 0, $name: void 0 };
    nodes.set(pos, this);
  }

  get decorators() {
    const internal = this.#internal;
    if (internal.$decorators !== void 0) return internal.$decorators;
    return (internal.$decorators = []);
  }
  set decorators(v) {
    this.#internal.$decorators = v;
  }

  get name() {
    const internal = this.#internal,
      cached = internal.$name;
    if (cached !== void 0) return cached;
    return (internal.$name = constructStr(internal.pos + 16, internal.ast, this));
  }
  set name(v) {
    this.#internal.$name = v;
  }

  get optional() {
    return false;
  }
  set optional(v) {
    defineOwn(this, "optional", v);
  }

  get typeAnnotation() {
    return null;
  }
  set typeAnnotation(v) {
    defineOwn(this, "typeAnnotation", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "Identifier",
      decorators: this.decorators,
      name: this.name,
      optional: this.optional,
      typeAnnotation: this.typeAnnotation,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugIdentifierName.prototype);
  }
}

const DebugIdentifierName = class IdentifierName {};

export function constructIdentifierName(pos, ast, parent) {
  return new IdentifierName(pos, ast, parent);
}

export class IdentifierReference {
  type = "Identifier";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $decorators: void 0, $name: void 0 };
    nodes.set(pos, this);
  }

  get decorators() {
    const internal = this.#internal;
    if (internal.$decorators !== void 0) return internal.$decorators;
    return (internal.$decorators = []);
  }
  set decorators(v) {
    this.#internal.$decorators = v;
  }

  get name() {
    const internal = this.#internal,
      cached = internal.$name;
    if (cached !== void 0) return cached;
    return (internal.$name = constructStr(internal.pos + 16, internal.ast, this));
  }
  set name(v) {
    this.#internal.$name = v;
  }

  get optional() {
    return false;
  }
  set optional(v) {
    defineOwn(this, "optional", v);
  }

  get typeAnnotation() {
    return null;
  }
  set typeAnnotation(v) {
    defineOwn(this, "typeAnnotation", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "Identifier",
      decorators: this.decorators,
      name: this.name,
      optional: this.optional,
      typeAnnotation: this.typeAnnotation,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugIdentifierReference.prototype);
  }
}

const DebugIdentifierReference = class IdentifierReference {};

export function constructIdentifierReference(pos, ast, parent) {
  return new IdentifierReference(pos, ast, parent);
}

export class BindingIdentifier {
  type = "Identifier";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $decorators: void 0, $name: void 0 };
    nodes.set(pos, this);
  }

  get decorators() {
    const internal = this.#internal;
    if (internal.$decorators !== void 0) return internal.$decorators;
    return (internal.$decorators = []);
  }
  set decorators(v) {
    this.#internal.$decorators = v;
  }

  get name() {
    const internal = this.#internal,
      cached = internal.$name;
    if (cached !== void 0) return cached;
    return (internal.$name = constructStr(internal.pos + 16, internal.ast, this));
  }
  set name(v) {
    this.#internal.$name = v;
  }

  get optional() {
    return false;
  }
  set optional(v) {
    defineOwn(this, "optional", v);
  }

  get typeAnnotation() {
    return null;
  }
  set typeAnnotation(v) {
    defineOwn(this, "typeAnnotation", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "Identifier",
      decorators: this.decorators,
      name: this.name,
      optional: this.optional,
      typeAnnotation: this.typeAnnotation,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugBindingIdentifier.prototype);
  }
}

const DebugBindingIdentifier = class BindingIdentifier {};

export function constructBindingIdentifier(pos, ast, parent) {
  return new BindingIdentifier(pos, ast, parent);
}

export class LabelIdentifier {
  type = "Identifier";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $decorators: void 0, $name: void 0 };
    nodes.set(pos, this);
  }

  get decorators() {
    const internal = this.#internal;
    if (internal.$decorators !== void 0) return internal.$decorators;
    return (internal.$decorators = []);
  }
  set decorators(v) {
    this.#internal.$decorators = v;
  }

  get name() {
    const internal = this.#internal,
      cached = internal.$name;
    if (cached !== void 0) return cached;
    return (internal.$name = constructStr(internal.pos + 16, internal.ast, this));
  }
  set name(v) {
    this.#internal.$name = v;
  }

  get optional() {
    return false;
  }
  set optional(v) {
    defineOwn(this, "optional", v);
  }

  get typeAnnotation() {
    return null;
  }
  set typeAnnotation(v) {
    defineOwn(this, "typeAnnotation", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "Identifier",
      decorators: this.decorators,
      name: this.name,
      optional: this.optional,
      typeAnnotation: this.typeAnnotation,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugLabelIdentifier.prototype);
  }
}

const DebugLabelIdentifier = class LabelIdentifier {};

export function constructLabelIdentifier(pos, ast, parent) {
  return new LabelIdentifier(pos, ast, parent);
}

export class ThisExpression {
  type = "ThisExpression";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "ThisExpression",

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugThisExpression.prototype);
  }
}

const DebugThisExpression = class ThisExpression {};

export function constructThisExpression(pos, ast, parent) {
  return new ThisExpression(pos, ast, parent);
}

export class ArrayExpression {
  type = "ArrayExpression";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $elements: void 0 };
    nodes.set(pos, this);
  }

  get elements() {
    const internal = this.#internal,
      cached = internal.$elements;
    if (cached !== void 0) return cached;
    return (internal.$elements = constructVecArrayExpressionElement(
      internal.pos + 16,
      internal.ast,
      this,
    ));
  }
  set elements(v) {
    this.#internal.$elements = v;
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "ArrayExpression",
      elements: this.elements,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugArrayExpression.prototype);
  }
}

const DebugArrayExpression = class ArrayExpression {};

export function constructArrayExpression(pos, ast, parent) {
  return new ArrayExpression(pos, ast, parent);
}

export function constructArrayExpressionElement(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructBoxBooleanLiteral(pos + 8, ast, parent);
    case 1:
      return constructBoxNullLiteral(pos + 8, ast, parent);
    case 2:
      return constructBoxNumericLiteral(pos + 8, ast, parent);
    case 3:
      return constructBoxBigIntLiteral(pos + 8, ast, parent);
    case 4:
      return constructBoxRegExpLiteral(pos + 8, ast, parent);
    case 5:
      return constructBoxStringLiteral(pos + 8, ast, parent);
    case 6:
      return constructBoxTemplateLiteral(pos + 8, ast, parent);
    case 7:
      return constructBoxIdentifierReference(pos + 8, ast, parent);
    case 8:
      return constructBoxSuper(pos + 8, ast, parent);
    case 9:
      return constructBoxArrayExpression(pos + 8, ast, parent);
    case 10:
      return constructBoxArrowFunctionExpression(pos + 8, ast, parent);
    case 11:
      return constructBoxAssignmentExpression(pos + 8, ast, parent);
    case 12:
      return constructBoxAwaitExpression(pos + 8, ast, parent);
    case 13:
      return constructBoxBinaryExpression(pos + 8, ast, parent);
    case 14:
      return constructBoxCallExpression(pos + 8, ast, parent);
    case 15:
      return constructBoxChainExpression(pos + 8, ast, parent);
    case 16:
      return constructBoxClass(pos + 8, ast, parent);
    case 17:
      return constructBoxConditionalExpression(pos + 8, ast, parent);
    case 18:
      return constructBoxFunction(pos + 8, ast, parent);
    case 19:
      return constructBoxImportExpression(pos + 8, ast, parent);
    case 20:
      return constructBoxLogicalExpression(pos + 8, ast, parent);
    case 21:
      return constructBoxNewExpression(pos + 8, ast, parent);
    case 22:
      return constructBoxObjectExpression(pos + 8, ast, parent);
    case 23:
      return constructBoxParenthesizedExpression(pos + 8, ast, parent);
    case 24:
      return constructBoxSequenceExpression(pos + 8, ast, parent);
    case 25:
      return constructBoxTaggedTemplateExpression(pos + 8, ast, parent);
    case 26:
      return constructBoxThisExpression(pos + 8, ast, parent);
    case 27:
      return constructBoxUnaryExpression(pos + 8, ast, parent);
    case 28:
      return constructBoxUpdateExpression(pos + 8, ast, parent);
    case 29:
      return constructBoxYieldExpression(pos + 8, ast, parent);
    case 30:
      return constructBoxPrivateInExpression(pos + 8, ast, parent);
    case 31:
      return constructBoxImportMeta(pos + 8, ast, parent);
    case 32:
      return constructBoxNewTarget(pos + 8, ast, parent);
    case 33:
      return constructBoxJSXElement(pos + 8, ast, parent);
    case 34:
      return constructBoxJSXFragment(pos + 8, ast, parent);
    case 35:
      return constructBoxTSAsExpression(pos + 8, ast, parent);
    case 36:
      return constructBoxTSSatisfiesExpression(pos + 8, ast, parent);
    case 37:
      return constructBoxTSTypeAssertion(pos + 8, ast, parent);
    case 38:
      return constructBoxTSNonNullExpression(pos + 8, ast, parent);
    case 39:
      return constructBoxTSInstantiationExpression(pos + 8, ast, parent);
    case 40:
      return constructBoxV8IntrinsicExpression(pos + 8, ast, parent);
    case 48:
      return constructBoxComputedMemberExpression(pos + 8, ast, parent);
    case 49:
      return constructBoxStaticMemberExpression(pos + 8, ast, parent);
    case 50:
      return constructBoxPrivateFieldExpression(pos + 8, ast, parent);
    case 64:
      return constructBoxSpreadElement(pos + 8, ast, parent);
    case 65:
      return constructBoxElision(pos + 8, ast, parent);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ArrayExpressionElement`);
  }
}

export function constructElision(pos, ast, parent) {
  return null;
}

export class ObjectExpression {
  type = "ObjectExpression";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $properties: void 0 };
    nodes.set(pos, this);
  }

  get properties() {
    const internal = this.#internal,
      cached = internal.$properties;
    if (cached !== void 0) return cached;
    return (internal.$properties = constructVecObjectPropertyKind(
      internal.pos + 16,
      internal.ast,
      this,
    ));
  }
  set properties(v) {
    this.#internal.$properties = v;
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "ObjectExpression",
      properties: this.properties,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugObjectExpression.prototype);
  }
}

const DebugObjectExpression = class ObjectExpression {};

export function constructObjectExpression(pos, ast, parent) {
  return new ObjectExpression(pos, ast, parent);
}

export function constructObjectPropertyKind(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructBoxObjectProperty(pos + 8, ast, parent);
    case 1:
      return constructBoxSpreadElement(pos + 8, ast, parent);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ObjectPropertyKind`);
  }
}

export class ObjectProperty {
  type = "Property";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get kind() {
    const internal = this.#internal;
    return constructPropertyKind(internal.pos + 12, internal.ast, this);
  }
  set kind(v) {
    defineOwn(this, "kind", v);
  }

  get key() {
    const internal = this.#internal;
    return constructPropertyKey(internal.pos + 16, internal.ast, this);
  }
  set key(v) {
    defineOwn(this, "key", v);
  }

  get value() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 32, internal.ast, this);
  }
  set value(v) {
    defineOwn(this, "value", v);
  }

  get method() {
    const internal = this.#internal;
    return constructBool(internal.pos + 13, internal.ast, this);
  }
  set method(v) {
    defineOwn(this, "method", v);
  }

  get shorthand() {
    const internal = this.#internal;
    return constructBool(internal.pos + 14, internal.ast, this);
  }
  set shorthand(v) {
    defineOwn(this, "shorthand", v);
  }

  get computed() {
    const internal = this.#internal,
      ast = internal.ast,
      pos = internal.pos;

    return ast.buffer[pos + 16] < 64;
  }
  set computed(v) {
    defineOwn(this, "computed", v);
  }

  get optional() {
    return false;
  }
  set optional(v) {
    defineOwn(this, "optional", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "Property",
      kind: this.kind,
      key: this.key,
      value: this.value,
      method: this.method,
      shorthand: this.shorthand,
      computed: this.computed,
      optional: this.optional,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugObjectProperty.prototype);
  }
}

const DebugObjectProperty = class ObjectProperty {};

export function constructObjectProperty(pos, ast, parent) {
  return new ObjectProperty(pos, ast, parent);
}

export function constructPropertyKey(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructBoxBooleanLiteral(pos + 8, ast, parent);
    case 1:
      return constructBoxNullLiteral(pos + 8, ast, parent);
    case 2:
      return constructBoxNumericLiteral(pos + 8, ast, parent);
    case 3:
      return constructBoxBigIntLiteral(pos + 8, ast, parent);
    case 4:
      return constructBoxRegExpLiteral(pos + 8, ast, parent);
    case 5:
      return constructBoxStringLiteral(pos + 8, ast, parent);
    case 6:
      return constructBoxTemplateLiteral(pos + 8, ast, parent);
    case 7:
      return constructBoxIdentifierReference(pos + 8, ast, parent);
    case 8:
      return constructBoxSuper(pos + 8, ast, parent);
    case 9:
      return constructBoxArrayExpression(pos + 8, ast, parent);
    case 10:
      return constructBoxArrowFunctionExpression(pos + 8, ast, parent);
    case 11:
      return constructBoxAssignmentExpression(pos + 8, ast, parent);
    case 12:
      return constructBoxAwaitExpression(pos + 8, ast, parent);
    case 13:
      return constructBoxBinaryExpression(pos + 8, ast, parent);
    case 14:
      return constructBoxCallExpression(pos + 8, ast, parent);
    case 15:
      return constructBoxChainExpression(pos + 8, ast, parent);
    case 16:
      return constructBoxClass(pos + 8, ast, parent);
    case 17:
      return constructBoxConditionalExpression(pos + 8, ast, parent);
    case 18:
      return constructBoxFunction(pos + 8, ast, parent);
    case 19:
      return constructBoxImportExpression(pos + 8, ast, parent);
    case 20:
      return constructBoxLogicalExpression(pos + 8, ast, parent);
    case 21:
      return constructBoxNewExpression(pos + 8, ast, parent);
    case 22:
      return constructBoxObjectExpression(pos + 8, ast, parent);
    case 23:
      return constructBoxParenthesizedExpression(pos + 8, ast, parent);
    case 24:
      return constructBoxSequenceExpression(pos + 8, ast, parent);
    case 25:
      return constructBoxTaggedTemplateExpression(pos + 8, ast, parent);
    case 26:
      return constructBoxThisExpression(pos + 8, ast, parent);
    case 27:
      return constructBoxUnaryExpression(pos + 8, ast, parent);
    case 28:
      return constructBoxUpdateExpression(pos + 8, ast, parent);
    case 29:
      return constructBoxYieldExpression(pos + 8, ast, parent);
    case 30:
      return constructBoxPrivateInExpression(pos + 8, ast, parent);
    case 31:
      return constructBoxImportMeta(pos + 8, ast, parent);
    case 32:
      return constructBoxNewTarget(pos + 8, ast, parent);
    case 33:
      return constructBoxJSXElement(pos + 8, ast, parent);
    case 34:
      return constructBoxJSXFragment(pos + 8, ast, parent);
    case 35:
      return constructBoxTSAsExpression(pos + 8, ast, parent);
    case 36:
      return constructBoxTSSatisfiesExpression(pos + 8, ast, parent);
    case 37:
      return constructBoxTSTypeAssertion(pos + 8, ast, parent);
    case 38:
      return constructBoxTSNonNullExpression(pos + 8, ast, parent);
    case 39:
      return constructBoxTSInstantiationExpression(pos + 8, ast, parent);
    case 40:
      return constructBoxV8IntrinsicExpression(pos + 8, ast, parent);
    case 48:
      return constructBoxComputedMemberExpression(pos + 8, ast, parent);
    case 49:
      return constructBoxStaticMemberExpression(pos + 8, ast, parent);
    case 50:
      return constructBoxPrivateFieldExpression(pos + 8, ast, parent);
    case 64:
      return constructBoxIdentifierName(pos + 8, ast, parent);
    case 65:
      return constructBoxStringLiteral(pos + 8, ast, parent);
    case 66:
      return constructBoxNumericLiteral(pos + 8, ast, parent);
    case 67:
      return constructBoxBigIntLiteral(pos + 8, ast, parent);
    case 68:
      return constructBoxPrivateIdentifier(pos + 8, ast, parent);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for PropertyKey`);
  }
}

export function constructPropertyKind(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return "init";
    case 1:
      return "get";
    case 2:
      return "set";
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for PropertyKind`);
  }
}

export class TemplateLiteral {
  type = "TemplateLiteral";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $quasis: void 0, $expressions: void 0 };
    nodes.set(pos, this);
  }

  get quasis() {
    const internal = this.#internal,
      cached = internal.$quasis;
    if (cached !== void 0) return cached;
    return (internal.$quasis = constructVecTemplateElement(internal.pos + 16, internal.ast, this));
  }
  set quasis(v) {
    this.#internal.$quasis = v;
  }

  get expressions() {
    const internal = this.#internal,
      cached = internal.$expressions;
    if (cached !== void 0) return cached;
    return (internal.$expressions = constructVecExpression(internal.pos + 40, internal.ast, this));
  }
  set expressions(v) {
    this.#internal.$expressions = v;
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TemplateLiteral",
      quasis: this.quasis,
      expressions: this.expressions,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTemplateLiteral.prototype);
  }
}

const DebugTemplateLiteral = class TemplateLiteral {};

export function constructTemplateLiteral(pos, ast, parent) {
  return new TemplateLiteral(pos, ast, parent);
}

export class TaggedTemplateExpression {
  type = "TaggedTemplateExpression";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get tag() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 16, internal.ast, this);
  }
  set tag(v) {
    defineOwn(this, "tag", v);
  }

  get typeArguments() {
    const internal = this.#internal;
    return constructOptionBoxTSTypeParameterInstantiation(internal.pos + 32, internal.ast, this);
  }
  set typeArguments(v) {
    defineOwn(this, "typeArguments", v);
  }

  get quasi() {
    const internal = this.#internal;
    return constructTemplateLiteral(internal.pos + 40, internal.ast, this);
  }
  set quasi(v) {
    defineOwn(this, "quasi", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TaggedTemplateExpression",
      tag: this.tag,
      typeArguments: this.typeArguments,
      quasi: this.quasi,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTaggedTemplateExpression.prototype);
  }
}

const DebugTaggedTemplateExpression = class TaggedTemplateExpression {};

export function constructTaggedTemplateExpression(pos, ast, parent) {
  return new TaggedTemplateExpression(pos, ast, parent);
}

export class TemplateElement {
  type = "TemplateElement";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $value: void 0 };
    nodes.set(pos, this);
  }

  get tail() {
    const internal = this.#internal;
    return internal.ast.buffer[internal.pos + 12] === 1;
  }
  set tail(v) {
    defineOwn(this, "tail", v);
  }

  get value() {
    const internal = this.#internal;
    if (internal.$value !== void 0) return internal.$value;
    return (internal.$value = {
      raw: constructStr(internal.pos + 16, internal.ast),
      cooked: constructOptionJSStr(internal.pos + 32, internal.ast),
    });
  }
  set value(v) {
    this.#internal.$value = v;
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2] - 1;
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2] + 2 - (this.tail ? 1 : 0);
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TemplateElement",
      value: this.value,
      tail: this.tail,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTemplateElement.prototype);
  }
}

const DebugTemplateElement = class TemplateElement {};

export function constructTemplateElement(pos, ast, parent) {
  return new TemplateElement(pos, ast, parent);
}

export function constructMemberExpression(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 48:
      return constructBoxComputedMemberExpression(pos + 8, ast, parent);
    case 49:
      return constructBoxStaticMemberExpression(pos + 8, ast, parent);
    case 50:
      return constructBoxPrivateFieldExpression(pos + 8, ast, parent);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for MemberExpression`);
  }
}

export class ComputedMemberExpression {
  type = "MemberExpression";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get object() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 16, internal.ast, this);
  }
  set object(v) {
    defineOwn(this, "object", v);
  }

  get property() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 32, internal.ast, this);
  }
  set property(v) {
    defineOwn(this, "property", v);
  }

  get optional() {
    const internal = this.#internal;
    return constructBool(internal.pos + 12, internal.ast, this);
  }
  set optional(v) {
    defineOwn(this, "optional", v);
  }

  get computed() {
    return true;
  }
  set computed(v) {
    defineOwn(this, "computed", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "MemberExpression",
      object: this.object,
      property: this.property,
      optional: this.optional,
      computed: this.computed,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugComputedMemberExpression.prototype);
  }
}

const DebugComputedMemberExpression = class ComputedMemberExpression {};

export function constructComputedMemberExpression(pos, ast, parent) {
  return new ComputedMemberExpression(pos, ast, parent);
}

export class StaticMemberExpression {
  type = "MemberExpression";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get object() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 16, internal.ast, this);
  }
  set object(v) {
    defineOwn(this, "object", v);
  }

  get property() {
    const internal = this.#internal;
    return constructIdentifierName(internal.pos + 32, internal.ast, this);
  }
  set property(v) {
    defineOwn(this, "property", v);
  }

  get optional() {
    const internal = this.#internal;
    return constructBool(internal.pos + 12, internal.ast, this);
  }
  set optional(v) {
    defineOwn(this, "optional", v);
  }

  get computed() {
    return false;
  }
  set computed(v) {
    defineOwn(this, "computed", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "MemberExpression",
      object: this.object,
      property: this.property,
      optional: this.optional,
      computed: this.computed,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugStaticMemberExpression.prototype);
  }
}

const DebugStaticMemberExpression = class StaticMemberExpression {};

export function constructStaticMemberExpression(pos, ast, parent) {
  return new StaticMemberExpression(pos, ast, parent);
}

export class PrivateFieldExpression {
  type = "MemberExpression";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get object() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 16, internal.ast, this);
  }
  set object(v) {
    defineOwn(this, "object", v);
  }

  get property() {
    const internal = this.#internal;
    return constructPrivateIdentifier(internal.pos + 32, internal.ast, this);
  }
  set property(v) {
    defineOwn(this, "property", v);
  }

  get optional() {
    const internal = this.#internal;
    return constructBool(internal.pos + 12, internal.ast, this);
  }
  set optional(v) {
    defineOwn(this, "optional", v);
  }

  get computed() {
    return false;
  }
  set computed(v) {
    defineOwn(this, "computed", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "MemberExpression",
      object: this.object,
      property: this.property,
      optional: this.optional,
      computed: this.computed,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugPrivateFieldExpression.prototype);
  }
}

const DebugPrivateFieldExpression = class PrivateFieldExpression {};

export function constructPrivateFieldExpression(pos, ast, parent) {
  return new PrivateFieldExpression(pos, ast, parent);
}

export class CallExpression {
  type = "CallExpression";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $arguments: void 0 };
    nodes.set(pos, this);
  }

  get callee() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 16, internal.ast, this);
  }
  set callee(v) {
    defineOwn(this, "callee", v);
  }

  get typeArguments() {
    const internal = this.#internal;
    return constructOptionBoxTSTypeParameterInstantiation(internal.pos + 32, internal.ast, this);
  }
  set typeArguments(v) {
    defineOwn(this, "typeArguments", v);
  }

  get arguments() {
    const internal = this.#internal,
      cached = internal.$arguments;
    if (cached !== void 0) return cached;
    return (internal.$arguments = constructVecArgument(internal.pos + 40, internal.ast, this));
  }
  set arguments(v) {
    this.#internal.$arguments = v;
  }

  get optional() {
    const internal = this.#internal;
    return constructBool(internal.pos + 12, internal.ast, this);
  }
  set optional(v) {
    defineOwn(this, "optional", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "CallExpression",
      callee: this.callee,
      typeArguments: this.typeArguments,
      arguments: this.arguments,
      optional: this.optional,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugCallExpression.prototype);
  }
}

const DebugCallExpression = class CallExpression {};

export function constructCallExpression(pos, ast, parent) {
  return new CallExpression(pos, ast, parent);
}

export class NewExpression {
  type = "NewExpression";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $arguments: void 0 };
    nodes.set(pos, this);
  }

  get callee() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 16, internal.ast, this);
  }
  set callee(v) {
    defineOwn(this, "callee", v);
  }

  get typeArguments() {
    const internal = this.#internal;
    return constructOptionBoxTSTypeParameterInstantiation(internal.pos + 32, internal.ast, this);
  }
  set typeArguments(v) {
    defineOwn(this, "typeArguments", v);
  }

  get arguments() {
    const internal = this.#internal,
      cached = internal.$arguments;
    if (cached !== void 0) return cached;
    return (internal.$arguments = constructVecArgument(internal.pos + 40, internal.ast, this));
  }
  set arguments(v) {
    this.#internal.$arguments = v;
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "NewExpression",
      callee: this.callee,
      typeArguments: this.typeArguments,
      arguments: this.arguments,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugNewExpression.prototype);
  }
}

const DebugNewExpression = class NewExpression {};

export function constructNewExpression(pos, ast, parent) {
  return new NewExpression(pos, ast, parent);
}

export function constructImportMeta(pos, ast, parent) {
  const cached = ast.nodes.get(pos);
  if (cached !== void 0) return cached;
  const start = ast.buffer.int32[(pos + 0) >> 2],
    end = ast.buffer.int32[(pos + 0 + 4) >> 2];
  const node = Object.create(NodeProto);
  node.type = "MetaProperty";
  node.meta = null;
  node.property = null;
  node.start = start;
  node.end = end;
  node.range = [start, end];
  node.parent = parent;
  ast.nodes.set(pos, node);
  const metaStart = start,
    metaEnd = end === 0 ? 0 : start + 6;
  const meta = Object.create(NodeProto);
  meta.type = "Identifier";
  meta.decorators = [];
  meta.name = "import";
  meta.optional = false;
  meta.typeAnnotation = null;
  meta.start = metaStart;
  meta.end = metaEnd;
  meta.range = [metaStart, metaEnd];
  meta.parent = node;
  const propertyEnd = end,
    propertyStart = propertyEnd === 0 ? 0 : propertyEnd - 4;
  const property = Object.create(NodeProto);
  property.type = "Identifier";
  property.decorators = [];
  property.name = "meta";
  property.optional = false;
  property.typeAnnotation = null;
  property.start = propertyStart;
  property.end = propertyEnd;
  property.range = [propertyStart, propertyEnd];
  property.parent = node;
  node.meta = meta;
  node.property = property;
  return node;
}

export function constructNewTarget(pos, ast, parent) {
  const cached = ast.nodes.get(pos);
  if (cached !== void 0) return cached;
  const start = ast.buffer.int32[(pos + 0) >> 2],
    end = ast.buffer.int32[(pos + 0 + 4) >> 2];
  const node = Object.create(NodeProto);
  node.type = "MetaProperty";
  node.meta = null;
  node.property = null;
  node.start = start;
  node.end = end;
  node.range = [start, end];
  node.parent = parent;
  ast.nodes.set(pos, node);
  const metaStart = start,
    metaEnd = end === 0 ? 0 : start + 3;
  const meta = Object.create(NodeProto);
  meta.type = "Identifier";
  meta.decorators = [];
  meta.name = "new";
  meta.optional = false;
  meta.typeAnnotation = null;
  meta.start = metaStart;
  meta.end = metaEnd;
  meta.range = [metaStart, metaEnd];
  meta.parent = node;
  const propertyEnd = end,
    propertyStart = propertyEnd === 0 ? 0 : propertyEnd - 6;
  const property = Object.create(NodeProto);
  property.type = "Identifier";
  property.decorators = [];
  property.name = "target";
  property.optional = false;
  property.typeAnnotation = null;
  property.start = propertyStart;
  property.end = propertyEnd;
  property.range = [propertyStart, propertyEnd];
  property.parent = node;
  node.meta = meta;
  node.property = property;
  return node;
}

export class SpreadElement {
  type = "SpreadElement";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get argument() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 16, internal.ast, this);
  }
  set argument(v) {
    defineOwn(this, "argument", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "SpreadElement",
      argument: this.argument,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugSpreadElement.prototype);
  }
}

const DebugSpreadElement = class SpreadElement {};

export function constructSpreadElement(pos, ast, parent) {
  return new SpreadElement(pos, ast, parent);
}

export function constructArgument(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructBoxBooleanLiteral(pos + 8, ast, parent);
    case 1:
      return constructBoxNullLiteral(pos + 8, ast, parent);
    case 2:
      return constructBoxNumericLiteral(pos + 8, ast, parent);
    case 3:
      return constructBoxBigIntLiteral(pos + 8, ast, parent);
    case 4:
      return constructBoxRegExpLiteral(pos + 8, ast, parent);
    case 5:
      return constructBoxStringLiteral(pos + 8, ast, parent);
    case 6:
      return constructBoxTemplateLiteral(pos + 8, ast, parent);
    case 7:
      return constructBoxIdentifierReference(pos + 8, ast, parent);
    case 8:
      return constructBoxSuper(pos + 8, ast, parent);
    case 9:
      return constructBoxArrayExpression(pos + 8, ast, parent);
    case 10:
      return constructBoxArrowFunctionExpression(pos + 8, ast, parent);
    case 11:
      return constructBoxAssignmentExpression(pos + 8, ast, parent);
    case 12:
      return constructBoxAwaitExpression(pos + 8, ast, parent);
    case 13:
      return constructBoxBinaryExpression(pos + 8, ast, parent);
    case 14:
      return constructBoxCallExpression(pos + 8, ast, parent);
    case 15:
      return constructBoxChainExpression(pos + 8, ast, parent);
    case 16:
      return constructBoxClass(pos + 8, ast, parent);
    case 17:
      return constructBoxConditionalExpression(pos + 8, ast, parent);
    case 18:
      return constructBoxFunction(pos + 8, ast, parent);
    case 19:
      return constructBoxImportExpression(pos + 8, ast, parent);
    case 20:
      return constructBoxLogicalExpression(pos + 8, ast, parent);
    case 21:
      return constructBoxNewExpression(pos + 8, ast, parent);
    case 22:
      return constructBoxObjectExpression(pos + 8, ast, parent);
    case 23:
      return constructBoxParenthesizedExpression(pos + 8, ast, parent);
    case 24:
      return constructBoxSequenceExpression(pos + 8, ast, parent);
    case 25:
      return constructBoxTaggedTemplateExpression(pos + 8, ast, parent);
    case 26:
      return constructBoxThisExpression(pos + 8, ast, parent);
    case 27:
      return constructBoxUnaryExpression(pos + 8, ast, parent);
    case 28:
      return constructBoxUpdateExpression(pos + 8, ast, parent);
    case 29:
      return constructBoxYieldExpression(pos + 8, ast, parent);
    case 30:
      return constructBoxPrivateInExpression(pos + 8, ast, parent);
    case 31:
      return constructBoxImportMeta(pos + 8, ast, parent);
    case 32:
      return constructBoxNewTarget(pos + 8, ast, parent);
    case 33:
      return constructBoxJSXElement(pos + 8, ast, parent);
    case 34:
      return constructBoxJSXFragment(pos + 8, ast, parent);
    case 35:
      return constructBoxTSAsExpression(pos + 8, ast, parent);
    case 36:
      return constructBoxTSSatisfiesExpression(pos + 8, ast, parent);
    case 37:
      return constructBoxTSTypeAssertion(pos + 8, ast, parent);
    case 38:
      return constructBoxTSNonNullExpression(pos + 8, ast, parent);
    case 39:
      return constructBoxTSInstantiationExpression(pos + 8, ast, parent);
    case 40:
      return constructBoxV8IntrinsicExpression(pos + 8, ast, parent);
    case 48:
      return constructBoxComputedMemberExpression(pos + 8, ast, parent);
    case 49:
      return constructBoxStaticMemberExpression(pos + 8, ast, parent);
    case 50:
      return constructBoxPrivateFieldExpression(pos + 8, ast, parent);
    case 64:
      return constructBoxSpreadElement(pos + 8, ast, parent);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for Argument`);
  }
}

export class UpdateExpression {
  type = "UpdateExpression";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get operator() {
    const internal = this.#internal;
    return constructUpdateOperator(internal.pos + 12, internal.ast, this);
  }
  set operator(v) {
    defineOwn(this, "operator", v);
  }

  get prefix() {
    const internal = this.#internal;
    return constructBool(internal.pos + 13, internal.ast, this);
  }
  set prefix(v) {
    defineOwn(this, "prefix", v);
  }

  get argument() {
    const internal = this.#internal;
    return constructSimpleAssignmentTarget(internal.pos + 16, internal.ast, this);
  }
  set argument(v) {
    defineOwn(this, "argument", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "UpdateExpression",
      operator: this.operator,
      prefix: this.prefix,
      argument: this.argument,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugUpdateExpression.prototype);
  }
}

const DebugUpdateExpression = class UpdateExpression {};

export function constructUpdateExpression(pos, ast, parent) {
  return new UpdateExpression(pos, ast, parent);
}

export class UnaryExpression {
  type = "UnaryExpression";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get operator() {
    const internal = this.#internal;
    return constructUnaryOperator(internal.pos + 12, internal.ast, this);
  }
  set operator(v) {
    defineOwn(this, "operator", v);
  }

  get argument() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 16, internal.ast, this);
  }
  set argument(v) {
    defineOwn(this, "argument", v);
  }

  get prefix() {
    return true;
  }
  set prefix(v) {
    defineOwn(this, "prefix", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "UnaryExpression",
      operator: this.operator,
      argument: this.argument,
      prefix: this.prefix,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugUnaryExpression.prototype);
  }
}

const DebugUnaryExpression = class UnaryExpression {};

export function constructUnaryExpression(pos, ast, parent) {
  return new UnaryExpression(pos, ast, parent);
}

export class BinaryExpression {
  type = "BinaryExpression";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get left() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 16, internal.ast, this);
  }
  set left(v) {
    defineOwn(this, "left", v);
  }

  get operator() {
    const internal = this.#internal;
    return constructBinaryOperator(internal.pos + 12, internal.ast, this);
  }
  set operator(v) {
    defineOwn(this, "operator", v);
  }

  get right() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 32, internal.ast, this);
  }
  set right(v) {
    defineOwn(this, "right", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "BinaryExpression",
      left: this.left,
      operator: this.operator,
      right: this.right,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugBinaryExpression.prototype);
  }
}

const DebugBinaryExpression = class BinaryExpression {};

export function constructBinaryExpression(pos, ast, parent) {
  return new BinaryExpression(pos, ast, parent);
}

export class PrivateInExpression {
  type = "BinaryExpression";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get left() {
    const internal = this.#internal;
    return constructPrivateIdentifier(internal.pos + 16, internal.ast, this);
  }
  set left(v) {
    defineOwn(this, "left", v);
  }

  get operator() {
    return "in";
  }
  set operator(v) {
    defineOwn(this, "operator", v);
  }

  get right() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 48, internal.ast, this);
  }
  set right(v) {
    defineOwn(this, "right", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "BinaryExpression",
      left: this.left,
      operator: this.operator,
      right: this.right,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugPrivateInExpression.prototype);
  }
}

const DebugPrivateInExpression = class PrivateInExpression {};

export function constructPrivateInExpression(pos, ast, parent) {
  return new PrivateInExpression(pos, ast, parent);
}

export class LogicalExpression {
  type = "LogicalExpression";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get left() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 16, internal.ast, this);
  }
  set left(v) {
    defineOwn(this, "left", v);
  }

  get operator() {
    const internal = this.#internal;
    return constructLogicalOperator(internal.pos + 12, internal.ast, this);
  }
  set operator(v) {
    defineOwn(this, "operator", v);
  }

  get right() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 32, internal.ast, this);
  }
  set right(v) {
    defineOwn(this, "right", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "LogicalExpression",
      left: this.left,
      operator: this.operator,
      right: this.right,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugLogicalExpression.prototype);
  }
}

const DebugLogicalExpression = class LogicalExpression {};

export function constructLogicalExpression(pos, ast, parent) {
  return new LogicalExpression(pos, ast, parent);
}

export class ConditionalExpression {
  type = "ConditionalExpression";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get test() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 16, internal.ast, this);
  }
  set test(v) {
    defineOwn(this, "test", v);
  }

  get consequent() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 32, internal.ast, this);
  }
  set consequent(v) {
    defineOwn(this, "consequent", v);
  }

  get alternate() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 48, internal.ast, this);
  }
  set alternate(v) {
    defineOwn(this, "alternate", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "ConditionalExpression",
      test: this.test,
      consequent: this.consequent,
      alternate: this.alternate,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugConditionalExpression.prototype);
  }
}

const DebugConditionalExpression = class ConditionalExpression {};

export function constructConditionalExpression(pos, ast, parent) {
  return new ConditionalExpression(pos, ast, parent);
}

export class AssignmentExpression {
  type = "AssignmentExpression";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get operator() {
    const internal = this.#internal;
    return constructAssignmentOperator(internal.pos + 12, internal.ast, this);
  }
  set operator(v) {
    defineOwn(this, "operator", v);
  }

  get left() {
    const internal = this.#internal;
    return constructAssignmentTarget(internal.pos + 16, internal.ast, this);
  }
  set left(v) {
    defineOwn(this, "left", v);
  }

  get right() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 32, internal.ast, this);
  }
  set right(v) {
    defineOwn(this, "right", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "AssignmentExpression",
      operator: this.operator,
      left: this.left,
      right: this.right,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugAssignmentExpression.prototype);
  }
}

const DebugAssignmentExpression = class AssignmentExpression {};

export function constructAssignmentExpression(pos, ast, parent) {
  return new AssignmentExpression(pos, ast, parent);
}

export function constructAssignmentTarget(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructBoxIdentifierReference(pos + 8, ast, parent);
    case 1:
      return constructBoxTSAsExpression(pos + 8, ast, parent);
    case 2:
      return constructBoxTSSatisfiesExpression(pos + 8, ast, parent);
    case 3:
      return constructBoxTSNonNullExpression(pos + 8, ast, parent);
    case 4:
      return constructBoxTSTypeAssertion(pos + 8, ast, parent);
    case 8:
      return constructBoxArrayAssignmentTarget(pos + 8, ast, parent);
    case 9:
      return constructBoxObjectAssignmentTarget(pos + 8, ast, parent);
    case 48:
      return constructBoxComputedMemberExpression(pos + 8, ast, parent);
    case 49:
      return constructBoxStaticMemberExpression(pos + 8, ast, parent);
    case 50:
      return constructBoxPrivateFieldExpression(pos + 8, ast, parent);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for AssignmentTarget`);
  }
}

export function constructSimpleAssignmentTarget(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructBoxIdentifierReference(pos + 8, ast, parent);
    case 1:
      return constructBoxTSAsExpression(pos + 8, ast, parent);
    case 2:
      return constructBoxTSSatisfiesExpression(pos + 8, ast, parent);
    case 3:
      return constructBoxTSNonNullExpression(pos + 8, ast, parent);
    case 4:
      return constructBoxTSTypeAssertion(pos + 8, ast, parent);
    case 48:
      return constructBoxComputedMemberExpression(pos + 8, ast, parent);
    case 49:
      return constructBoxStaticMemberExpression(pos + 8, ast, parent);
    case 50:
      return constructBoxPrivateFieldExpression(pos + 8, ast, parent);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for SimpleAssignmentTarget`);
  }
}

export function constructAssignmentTargetPattern(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 8:
      return constructBoxArrayAssignmentTarget(pos + 8, ast, parent);
    case 9:
      return constructBoxObjectAssignmentTarget(pos + 8, ast, parent);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for AssignmentTargetPattern`);
  }
}

export class ArrayAssignmentTarget {
  type = "ArrayPattern";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $decorators: void 0, $elements: void 0 };
    nodes.set(pos, this);
  }

  get decorators() {
    const internal = this.#internal;
    if (internal.$decorators !== void 0) return internal.$decorators;
    return (internal.$decorators = []);
  }
  set decorators(v) {
    this.#internal.$decorators = v;
  }

  get elements() {
    const internal = this.#internal;
    if (internal.$elements !== void 0) return internal.$elements;
    const arr = [];
    arr.push(
      ...constructVecOptionAssignmentTargetMaybeDefault(internal.pos + 16, internal.ast, this),
    );
    {
      const item = constructOptionBoxAssignmentTargetRest(internal.pos + 40, internal.ast, this);
      if (item !== null) arr.push(item);
    }

    return (internal.$elements = arr);
  }
  set elements(v) {
    this.#internal.$elements = v;
  }

  get optional() {
    return false;
  }
  set optional(v) {
    defineOwn(this, "optional", v);
  }

  get typeAnnotation() {
    return null;
  }
  set typeAnnotation(v) {
    defineOwn(this, "typeAnnotation", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "ArrayPattern",
      decorators: this.decorators,
      elements: this.elements,
      optional: this.optional,
      typeAnnotation: this.typeAnnotation,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugArrayAssignmentTarget.prototype);
  }
}

const DebugArrayAssignmentTarget = class ArrayAssignmentTarget {};

export function constructArrayAssignmentTarget(pos, ast, parent) {
  return new ArrayAssignmentTarget(pos, ast, parent);
}

export class ObjectAssignmentTarget {
  type = "ObjectPattern";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $decorators: void 0, $properties: void 0 };
    nodes.set(pos, this);
  }

  get decorators() {
    const internal = this.#internal;
    if (internal.$decorators !== void 0) return internal.$decorators;
    return (internal.$decorators = []);
  }
  set decorators(v) {
    this.#internal.$decorators = v;
  }

  get properties() {
    const internal = this.#internal;
    if (internal.$properties !== void 0) return internal.$properties;
    const arr = [];
    arr.push(...constructVecAssignmentTargetProperty(internal.pos + 16, internal.ast, this));
    {
      const item = constructOptionBoxAssignmentTargetRest(internal.pos + 40, internal.ast, this);
      if (item !== null) arr.push(item);
    }

    return (internal.$properties = arr);
  }
  set properties(v) {
    this.#internal.$properties = v;
  }

  get optional() {
    return false;
  }
  set optional(v) {
    defineOwn(this, "optional", v);
  }

  get typeAnnotation() {
    return null;
  }
  set typeAnnotation(v) {
    defineOwn(this, "typeAnnotation", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "ObjectPattern",
      decorators: this.decorators,
      properties: this.properties,
      optional: this.optional,
      typeAnnotation: this.typeAnnotation,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugObjectAssignmentTarget.prototype);
  }
}

const DebugObjectAssignmentTarget = class ObjectAssignmentTarget {};

export function constructObjectAssignmentTarget(pos, ast, parent) {
  return new ObjectAssignmentTarget(pos, ast, parent);
}

export class AssignmentTargetRest {
  type = "RestElement";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $decorators: void 0 };
    nodes.set(pos, this);
  }

  get decorators() {
    const internal = this.#internal;
    if (internal.$decorators !== void 0) return internal.$decorators;
    return (internal.$decorators = []);
  }
  set decorators(v) {
    this.#internal.$decorators = v;
  }

  get argument() {
    const internal = this.#internal;
    return constructAssignmentTarget(internal.pos + 16, internal.ast, this);
  }
  set argument(v) {
    defineOwn(this, "argument", v);
  }

  get optional() {
    return false;
  }
  set optional(v) {
    defineOwn(this, "optional", v);
  }

  get typeAnnotation() {
    return null;
  }
  set typeAnnotation(v) {
    defineOwn(this, "typeAnnotation", v);
  }

  get value() {
    return null;
  }
  set value(v) {
    defineOwn(this, "value", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "RestElement",
      decorators: this.decorators,
      argument: this.argument,
      optional: this.optional,
      typeAnnotation: this.typeAnnotation,
      value: this.value,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugAssignmentTargetRest.prototype);
  }
}

const DebugAssignmentTargetRest = class AssignmentTargetRest {};

export function constructAssignmentTargetRest(pos, ast, parent) {
  return new AssignmentTargetRest(pos, ast, parent);
}

export function constructAssignmentTargetMaybeDefault(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructBoxIdentifierReference(pos + 8, ast, parent);
    case 1:
      return constructBoxTSAsExpression(pos + 8, ast, parent);
    case 2:
      return constructBoxTSSatisfiesExpression(pos + 8, ast, parent);
    case 3:
      return constructBoxTSNonNullExpression(pos + 8, ast, parent);
    case 4:
      return constructBoxTSTypeAssertion(pos + 8, ast, parent);
    case 8:
      return constructBoxArrayAssignmentTarget(pos + 8, ast, parent);
    case 9:
      return constructBoxObjectAssignmentTarget(pos + 8, ast, parent);
    case 16:
      return constructBoxAssignmentTargetWithDefault(pos + 8, ast, parent);
    case 48:
      return constructBoxComputedMemberExpression(pos + 8, ast, parent);
    case 49:
      return constructBoxStaticMemberExpression(pos + 8, ast, parent);
    case 50:
      return constructBoxPrivateFieldExpression(pos + 8, ast, parent);
    default:
      throw new Error(
        `Unexpected discriminant ${ast.buffer[pos]} for AssignmentTargetMaybeDefault`,
      );
  }
}

export class AssignmentTargetWithDefault {
  type = "AssignmentPattern";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $decorators: void 0 };
    nodes.set(pos, this);
  }

  get decorators() {
    const internal = this.#internal;
    if (internal.$decorators !== void 0) return internal.$decorators;
    return (internal.$decorators = []);
  }
  set decorators(v) {
    this.#internal.$decorators = v;
  }

  get left() {
    const internal = this.#internal;
    return constructAssignmentTarget(internal.pos + 16, internal.ast, this);
  }
  set left(v) {
    defineOwn(this, "left", v);
  }

  get right() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 32, internal.ast, this);
  }
  set right(v) {
    defineOwn(this, "right", v);
  }

  get optional() {
    return false;
  }
  set optional(v) {
    defineOwn(this, "optional", v);
  }

  get typeAnnotation() {
    return null;
  }
  set typeAnnotation(v) {
    defineOwn(this, "typeAnnotation", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "AssignmentPattern",
      decorators: this.decorators,
      left: this.left,
      right: this.right,
      optional: this.optional,
      typeAnnotation: this.typeAnnotation,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugAssignmentTargetWithDefault.prototype);
  }
}

const DebugAssignmentTargetWithDefault = class AssignmentTargetWithDefault {};

export function constructAssignmentTargetWithDefault(pos, ast, parent) {
  return new AssignmentTargetWithDefault(pos, ast, parent);
}

export function constructAssignmentTargetProperty(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructBoxAssignmentTargetPropertyIdentifier(pos + 8, ast, parent);
    case 1:
      return constructBoxAssignmentTargetPropertyProperty(pos + 8, ast, parent);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for AssignmentTargetProperty`);
  }
}

export function constructAssignmentTargetPropertyIdentifier(pos, ast, parent) {
  const cached = ast.nodes.get(pos);
  if (cached !== void 0) return cached;
  const start = ast.buffer.int32[(pos + 0) >> 2],
    end = ast.buffer.int32[(pos + 0 + 4) >> 2];
  const node = Object.create(NodeProto);
  node.type = "Property";
  node.kind = "init";
  node.key = null;
  node.value = null;
  node.method = false;
  node.shorthand = true;
  node.computed = false;
  node.optional = false;
  node.start = start;
  node.end = end;
  node.range = [start, end];
  node.parent = parent;
  ast.nodes.set(pos, node);
  const key = constructIdentifierReference(pos + 16, ast, node);
  let value = Object.create(NodeProto);
  value.type = "Identifier";
  value.decorators = [];
  value.name = key.name;
  value.optional = false;
  value.typeAnnotation = null;
  value.start = key.start;
  value.end = key.end;
  value.range = [key.start, key.end];
  value.parent = node;
  const init = constructOptionExpression(pos + 48, ast, null);
  if (init !== null) {
    const left = value;
    value = Object.create(NodeProto);
    value.type = "AssignmentPattern";
    value.decorators = [];
    value.left = left;
    value.right = init;
    value.optional = false;
    value.typeAnnotation = null;
    value.start = start;
    value.end = end;
    value.range = [start, end];
    value.parent = node;
    left.parent = value;
    init.parent = value;
  }
  node.key = key;
  node.value = value;
  return node;
}

export class AssignmentTargetPropertyProperty {
  type = "Property";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get kind() {
    return "init";
  }
  set kind(v) {
    defineOwn(this, "kind", v);
  }

  get key() {
    const internal = this.#internal;
    return constructPropertyKey(internal.pos + 16, internal.ast, this);
  }
  set key(v) {
    defineOwn(this, "key", v);
  }

  get value() {
    const internal = this.#internal;
    return constructAssignmentTargetMaybeDefault(internal.pos + 32, internal.ast, this);
  }
  set value(v) {
    defineOwn(this, "value", v);
  }

  get method() {
    return false;
  }
  set method(v) {
    defineOwn(this, "method", v);
  }

  get shorthand() {
    return false;
  }
  set shorthand(v) {
    defineOwn(this, "shorthand", v);
  }

  get computed() {
    const internal = this.#internal,
      ast = internal.ast,
      pos = internal.pos;

    return ast.buffer[pos + 16] < 64;
  }
  set computed(v) {
    defineOwn(this, "computed", v);
  }

  get optional() {
    return false;
  }
  set optional(v) {
    defineOwn(this, "optional", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "Property",
      kind: this.kind,
      key: this.key,
      value: this.value,
      method: this.method,
      shorthand: this.shorthand,
      computed: this.computed,
      optional: this.optional,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugAssignmentTargetPropertyProperty.prototype);
  }
}

const DebugAssignmentTargetPropertyProperty = class AssignmentTargetPropertyProperty {};

export function constructAssignmentTargetPropertyProperty(pos, ast, parent) {
  return new AssignmentTargetPropertyProperty(pos, ast, parent);
}

export class SequenceExpression {
  type = "SequenceExpression";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $expressions: void 0 };
    nodes.set(pos, this);
  }

  get expressions() {
    const internal = this.#internal,
      cached = internal.$expressions;
    if (cached !== void 0) return cached;
    return (internal.$expressions = constructVecExpression(internal.pos + 16, internal.ast, this));
  }
  set expressions(v) {
    this.#internal.$expressions = v;
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "SequenceExpression",
      expressions: this.expressions,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugSequenceExpression.prototype);
  }
}

const DebugSequenceExpression = class SequenceExpression {};

export function constructSequenceExpression(pos, ast, parent) {
  return new SequenceExpression(pos, ast, parent);
}

export class Super {
  type = "Super";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "Super",

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugSuper.prototype);
  }
}

const DebugSuper = class Super {};

export function constructSuper(pos, ast, parent) {
  return new Super(pos, ast, parent);
}

export class AwaitExpression {
  type = "AwaitExpression";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get argument() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 16, internal.ast, this);
  }
  set argument(v) {
    defineOwn(this, "argument", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "AwaitExpression",
      argument: this.argument,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugAwaitExpression.prototype);
  }
}

const DebugAwaitExpression = class AwaitExpression {};

export function constructAwaitExpression(pos, ast, parent) {
  return new AwaitExpression(pos, ast, parent);
}

export class ChainExpression {
  type = "ChainExpression";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get expression() {
    const internal = this.#internal;
    return constructChainElement(internal.pos + 16, internal.ast, this);
  }
  set expression(v) {
    defineOwn(this, "expression", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "ChainExpression",
      expression: this.expression,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugChainExpression.prototype);
  }
}

const DebugChainExpression = class ChainExpression {};

export function constructChainExpression(pos, ast, parent) {
  return new ChainExpression(pos, ast, parent);
}

export function constructChainElement(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructBoxCallExpression(pos + 8, ast, parent);
    case 1:
      return constructBoxTSNonNullExpression(pos + 8, ast, parent);
    case 48:
      return constructBoxComputedMemberExpression(pos + 8, ast, parent);
    case 49:
      return constructBoxStaticMemberExpression(pos + 8, ast, parent);
    case 50:
      return constructBoxPrivateFieldExpression(pos + 8, ast, parent);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ChainElement`);
  }
}

export function constructParenthesizedExpression(pos, ast, parent) {
  return constructExpression(pos + 16, ast, parent);
}

export function constructStatement(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructBoxBlockStatement(pos + 8, ast, parent);
    case 1:
      return constructBoxBreakStatement(pos + 8, ast, parent);
    case 2:
      return constructBoxContinueStatement(pos + 8, ast, parent);
    case 3:
      return constructBoxDebuggerStatement(pos + 8, ast, parent);
    case 4:
      return constructBoxDoWhileStatement(pos + 8, ast, parent);
    case 5:
      return constructBoxEmptyStatement(pos + 8, ast, parent);
    case 6:
      return constructBoxExpressionStatement(pos + 8, ast, parent);
    case 7:
      return constructBoxForInStatement(pos + 8, ast, parent);
    case 8:
      return constructBoxForOfStatement(pos + 8, ast, parent);
    case 9:
      return constructBoxForStatement(pos + 8, ast, parent);
    case 10:
      return constructBoxIfStatement(pos + 8, ast, parent);
    case 11:
      return constructBoxLabeledStatement(pos + 8, ast, parent);
    case 12:
      return constructBoxReturnStatement(pos + 8, ast, parent);
    case 13:
      return constructBoxSwitchStatement(pos + 8, ast, parent);
    case 14:
      return constructBoxThrowStatement(pos + 8, ast, parent);
    case 15:
      return constructBoxTryStatement(pos + 8, ast, parent);
    case 16:
      return constructBoxWhileStatement(pos + 8, ast, parent);
    case 17:
      return constructBoxWithStatement(pos + 8, ast, parent);
    case 32:
      return constructBoxVariableDeclaration(pos + 8, ast, parent);
    case 33:
      return constructBoxFunction(pos + 8, ast, parent);
    case 34:
      return constructBoxClass(pos + 8, ast, parent);
    case 35:
      return constructBoxTSTypeAliasDeclaration(pos + 8, ast, parent);
    case 36:
      return constructBoxTSInterfaceDeclaration(pos + 8, ast, parent);
    case 37:
      return constructBoxTSEnumDeclaration(pos + 8, ast, parent);
    case 38:
      return constructBoxTSExternalModuleDeclaration(pos + 8, ast, parent);
    case 39:
      return constructBoxTSNamespaceDeclaration(pos + 8, ast, parent);
    case 40:
      return constructBoxTSGlobalDeclaration(pos + 8, ast, parent);
    case 41:
      return constructBoxTSImportEqualsDeclaration(pos + 8, ast, parent);
    case 64:
      return constructBoxImportDeclaration(pos + 8, ast, parent);
    case 65:
      return constructBoxExportAllDeclaration(pos + 8, ast, parent);
    case 66:
      return constructBoxExportDefaultDeclaration(pos + 8, ast, parent);
    case 67:
      return constructBoxExportDeclaration(pos + 8, ast, parent);
    case 68:
      return constructBoxExportNamedDeclaration(pos + 8, ast, parent);
    case 69:
      return constructBoxExportFromDeclaration(pos + 8, ast, parent);
    case 70:
      return constructBoxTSExportAssignment(pos + 8, ast, parent);
    case 71:
      return constructBoxTSNamespaceExportDeclaration(pos + 8, ast, parent);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for Statement`);
  }
}

export class Directive {
  type = "ExpressionStatement";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $directive: void 0 };
    nodes.set(pos, this);
  }

  get expression() {
    const internal = this.#internal;
    return constructStringLiteral(internal.pos + 16, internal.ast, this);
  }
  set expression(v) {
    defineOwn(this, "expression", v);
  }

  get directive() {
    const internal = this.#internal,
      cached = internal.$directive;
    if (cached !== void 0) return cached;
    return (internal.$directive = constructStr(internal.pos + 64, internal.ast, this));
  }
  set directive(v) {
    this.#internal.$directive = v;
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "ExpressionStatement",
      expression: this.expression,
      directive: this.directive,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugDirective.prototype);
  }
}

const DebugDirective = class Directive {};

export function constructDirective(pos, ast, parent) {
  return new Directive(pos, ast, parent);
}

export class Hashbang {
  type = "Hashbang";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $value: void 0 };
    nodes.set(pos, this);
  }

  get value() {
    const internal = this.#internal,
      cached = internal.$value;
    if (cached !== void 0) return cached;
    return (internal.$value = constructStr(internal.pos + 16, internal.ast, this));
  }
  set value(v) {
    this.#internal.$value = v;
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "Hashbang",
      value: this.value,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugHashbang.prototype);
  }
}

const DebugHashbang = class Hashbang {};

export function constructHashbang(pos, ast, parent) {
  return new Hashbang(pos, ast, parent);
}

export class BlockStatement {
  type = "BlockStatement";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $body: void 0 };
    nodes.set(pos, this);
  }

  get body() {
    const internal = this.#internal,
      cached = internal.$body;
    if (cached !== void 0) return cached;
    return (internal.$body = constructVecStatement(internal.pos + 16, internal.ast, this));
  }
  set body(v) {
    this.#internal.$body = v;
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "BlockStatement",
      body: this.body,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugBlockStatement.prototype);
  }
}

const DebugBlockStatement = class BlockStatement {};

export function constructBlockStatement(pos, ast, parent) {
  return new BlockStatement(pos, ast, parent);
}

export function constructDeclaration(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 32:
      return constructBoxVariableDeclaration(pos + 8, ast, parent);
    case 33:
      return constructBoxFunction(pos + 8, ast, parent);
    case 34:
      return constructBoxClass(pos + 8, ast, parent);
    case 35:
      return constructBoxTSTypeAliasDeclaration(pos + 8, ast, parent);
    case 36:
      return constructBoxTSInterfaceDeclaration(pos + 8, ast, parent);
    case 37:
      return constructBoxTSEnumDeclaration(pos + 8, ast, parent);
    case 38:
      return constructBoxTSExternalModuleDeclaration(pos + 8, ast, parent);
    case 39:
      return constructBoxTSNamespaceDeclaration(pos + 8, ast, parent);
    case 40:
      return constructBoxTSGlobalDeclaration(pos + 8, ast, parent);
    case 41:
      return constructBoxTSImportEqualsDeclaration(pos + 8, ast, parent);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for Declaration`);
  }
}

export class VariableDeclaration {
  type = "VariableDeclaration";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $declarations: void 0 };
    nodes.set(pos, this);
  }

  get kind() {
    const internal = this.#internal;
    return constructVariableDeclarationKind(internal.pos + 12, internal.ast, this);
  }
  set kind(v) {
    defineOwn(this, "kind", v);
  }

  get declarations() {
    const internal = this.#internal,
      cached = internal.$declarations;
    if (cached !== void 0) return cached;
    return (internal.$declarations = constructVecVariableDeclarator(
      internal.pos + 16,
      internal.ast,
      this,
    ));
  }
  set declarations(v) {
    this.#internal.$declarations = v;
  }

  get declare() {
    const internal = this.#internal;
    return constructBool(internal.pos + 13, internal.ast, this);
  }
  set declare(v) {
    defineOwn(this, "declare", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "VariableDeclaration",
      kind: this.kind,
      declarations: this.declarations,
      declare: this.declare,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugVariableDeclaration.prototype);
  }
}

const DebugVariableDeclaration = class VariableDeclaration {};

export function constructVariableDeclaration(pos, ast, parent) {
  return new VariableDeclaration(pos, ast, parent);
}

export function constructVariableDeclarationKind(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return "var";
    case 1:
      return "let";
    case 2:
      return "const";
    case 3:
      return "using";
    case 4:
      return "await using";
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for VariableDeclarationKind`);
  }
}

export class VariableDeclarator {
  type = "VariableDeclarator";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $id: void 0 };
    nodes.set(pos, this);
  }

  get init() {
    const internal = this.#internal;
    return constructOptionExpression(internal.pos + 40, internal.ast, this);
  }
  set init(v) {
    defineOwn(this, "init", v);
  }

  get definite() {
    const internal = this.#internal;
    return constructBool(internal.pos + 12, internal.ast, this);
  }
  set definite(v) {
    defineOwn(this, "definite", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get id() {
    const internal = this.#internal;
    if (internal.$id !== void 0) return internal.$id;
    const pattern = constructBindingPattern(internal.pos + 16, internal.ast, this);
    const typeAnnotation = constructOptionBoxTSTypeAnnotation(
      internal.pos + 32,
      internal.ast,
      pattern,
    );
    if (typeAnnotation !== null) {
      pattern.typeAnnotation = typeAnnotation;
      pattern.end = typeAnnotation.end;
      pattern.range[1] = typeAnnotation.end;
    }
    return (internal.$id = pattern);
  }
  set id(v) {
    this.#internal.$id = v;
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "VariableDeclarator",
      init: this.init,
      definite: this.definite,
      id: this.id,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugVariableDeclarator.prototype);
  }
}

const DebugVariableDeclarator = class VariableDeclarator {};

export function constructVariableDeclarator(pos, ast, parent) {
  return new VariableDeclarator(pos, ast, parent);
}

export class EmptyStatement {
  type = "EmptyStatement";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "EmptyStatement",

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugEmptyStatement.prototype);
  }
}

const DebugEmptyStatement = class EmptyStatement {};

export function constructEmptyStatement(pos, ast, parent) {
  return new EmptyStatement(pos, ast, parent);
}

export class ExpressionStatement {
  type = "ExpressionStatement";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get expression() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 16, internal.ast, this);
  }
  set expression(v) {
    defineOwn(this, "expression", v);
  }

  get directive() {
    return null;
  }
  set directive(v) {
    defineOwn(this, "directive", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "ExpressionStatement",
      expression: this.expression,
      directive: this.directive,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugExpressionStatement.prototype);
  }
}

const DebugExpressionStatement = class ExpressionStatement {};

export function constructExpressionStatement(pos, ast, parent) {
  return new ExpressionStatement(pos, ast, parent);
}

export class IfStatement {
  type = "IfStatement";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get test() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 16, internal.ast, this);
  }
  set test(v) {
    defineOwn(this, "test", v);
  }

  get consequent() {
    const internal = this.#internal;
    return constructStatement(internal.pos + 32, internal.ast, this);
  }
  set consequent(v) {
    defineOwn(this, "consequent", v);
  }

  get alternate() {
    const internal = this.#internal;
    return constructOptionStatement(internal.pos + 48, internal.ast, this);
  }
  set alternate(v) {
    defineOwn(this, "alternate", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "IfStatement",
      test: this.test,
      consequent: this.consequent,
      alternate: this.alternate,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugIfStatement.prototype);
  }
}

const DebugIfStatement = class IfStatement {};

export function constructIfStatement(pos, ast, parent) {
  return new IfStatement(pos, ast, parent);
}

export class DoWhileStatement {
  type = "DoWhileStatement";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get body() {
    const internal = this.#internal;
    return constructStatement(internal.pos + 16, internal.ast, this);
  }
  set body(v) {
    defineOwn(this, "body", v);
  }

  get test() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 32, internal.ast, this);
  }
  set test(v) {
    defineOwn(this, "test", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "DoWhileStatement",
      body: this.body,
      test: this.test,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugDoWhileStatement.prototype);
  }
}

const DebugDoWhileStatement = class DoWhileStatement {};

export function constructDoWhileStatement(pos, ast, parent) {
  return new DoWhileStatement(pos, ast, parent);
}

export class WhileStatement {
  type = "WhileStatement";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get test() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 16, internal.ast, this);
  }
  set test(v) {
    defineOwn(this, "test", v);
  }

  get body() {
    const internal = this.#internal;
    return constructStatement(internal.pos + 32, internal.ast, this);
  }
  set body(v) {
    defineOwn(this, "body", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "WhileStatement",
      test: this.test,
      body: this.body,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugWhileStatement.prototype);
  }
}

const DebugWhileStatement = class WhileStatement {};

export function constructWhileStatement(pos, ast, parent) {
  return new WhileStatement(pos, ast, parent);
}

export class ForStatement {
  type = "ForStatement";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get init() {
    const internal = this.#internal;
    return constructOptionForStatementInit(internal.pos + 16, internal.ast, this);
  }
  set init(v) {
    defineOwn(this, "init", v);
  }

  get test() {
    const internal = this.#internal;
    return constructOptionExpression(internal.pos + 32, internal.ast, this);
  }
  set test(v) {
    defineOwn(this, "test", v);
  }

  get update() {
    const internal = this.#internal;
    return constructOptionExpression(internal.pos + 48, internal.ast, this);
  }
  set update(v) {
    defineOwn(this, "update", v);
  }

  get body() {
    const internal = this.#internal;
    return constructStatement(internal.pos + 64, internal.ast, this);
  }
  set body(v) {
    defineOwn(this, "body", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "ForStatement",
      init: this.init,
      test: this.test,
      update: this.update,
      body: this.body,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugForStatement.prototype);
  }
}

const DebugForStatement = class ForStatement {};

export function constructForStatement(pos, ast, parent) {
  return new ForStatement(pos, ast, parent);
}

export function constructForStatementInit(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructBoxBooleanLiteral(pos + 8, ast, parent);
    case 1:
      return constructBoxNullLiteral(pos + 8, ast, parent);
    case 2:
      return constructBoxNumericLiteral(pos + 8, ast, parent);
    case 3:
      return constructBoxBigIntLiteral(pos + 8, ast, parent);
    case 4:
      return constructBoxRegExpLiteral(pos + 8, ast, parent);
    case 5:
      return constructBoxStringLiteral(pos + 8, ast, parent);
    case 6:
      return constructBoxTemplateLiteral(pos + 8, ast, parent);
    case 7:
      return constructBoxIdentifierReference(pos + 8, ast, parent);
    case 8:
      return constructBoxSuper(pos + 8, ast, parent);
    case 9:
      return constructBoxArrayExpression(pos + 8, ast, parent);
    case 10:
      return constructBoxArrowFunctionExpression(pos + 8, ast, parent);
    case 11:
      return constructBoxAssignmentExpression(pos + 8, ast, parent);
    case 12:
      return constructBoxAwaitExpression(pos + 8, ast, parent);
    case 13:
      return constructBoxBinaryExpression(pos + 8, ast, parent);
    case 14:
      return constructBoxCallExpression(pos + 8, ast, parent);
    case 15:
      return constructBoxChainExpression(pos + 8, ast, parent);
    case 16:
      return constructBoxClass(pos + 8, ast, parent);
    case 17:
      return constructBoxConditionalExpression(pos + 8, ast, parent);
    case 18:
      return constructBoxFunction(pos + 8, ast, parent);
    case 19:
      return constructBoxImportExpression(pos + 8, ast, parent);
    case 20:
      return constructBoxLogicalExpression(pos + 8, ast, parent);
    case 21:
      return constructBoxNewExpression(pos + 8, ast, parent);
    case 22:
      return constructBoxObjectExpression(pos + 8, ast, parent);
    case 23:
      return constructBoxParenthesizedExpression(pos + 8, ast, parent);
    case 24:
      return constructBoxSequenceExpression(pos + 8, ast, parent);
    case 25:
      return constructBoxTaggedTemplateExpression(pos + 8, ast, parent);
    case 26:
      return constructBoxThisExpression(pos + 8, ast, parent);
    case 27:
      return constructBoxUnaryExpression(pos + 8, ast, parent);
    case 28:
      return constructBoxUpdateExpression(pos + 8, ast, parent);
    case 29:
      return constructBoxYieldExpression(pos + 8, ast, parent);
    case 30:
      return constructBoxPrivateInExpression(pos + 8, ast, parent);
    case 31:
      return constructBoxImportMeta(pos + 8, ast, parent);
    case 32:
      return constructBoxNewTarget(pos + 8, ast, parent);
    case 33:
      return constructBoxJSXElement(pos + 8, ast, parent);
    case 34:
      return constructBoxJSXFragment(pos + 8, ast, parent);
    case 35:
      return constructBoxTSAsExpression(pos + 8, ast, parent);
    case 36:
      return constructBoxTSSatisfiesExpression(pos + 8, ast, parent);
    case 37:
      return constructBoxTSTypeAssertion(pos + 8, ast, parent);
    case 38:
      return constructBoxTSNonNullExpression(pos + 8, ast, parent);
    case 39:
      return constructBoxTSInstantiationExpression(pos + 8, ast, parent);
    case 40:
      return constructBoxV8IntrinsicExpression(pos + 8, ast, parent);
    case 48:
      return constructBoxComputedMemberExpression(pos + 8, ast, parent);
    case 49:
      return constructBoxStaticMemberExpression(pos + 8, ast, parent);
    case 50:
      return constructBoxPrivateFieldExpression(pos + 8, ast, parent);
    case 64:
      return constructBoxVariableDeclaration(pos + 8, ast, parent);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ForStatementInit`);
  }
}

export class ForInStatement {
  type = "ForInStatement";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get left() {
    const internal = this.#internal;
    return constructForStatementLeft(internal.pos + 16, internal.ast, this);
  }
  set left(v) {
    defineOwn(this, "left", v);
  }

  get right() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 32, internal.ast, this);
  }
  set right(v) {
    defineOwn(this, "right", v);
  }

  get body() {
    const internal = this.#internal;
    return constructStatement(internal.pos + 48, internal.ast, this);
  }
  set body(v) {
    defineOwn(this, "body", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "ForInStatement",
      left: this.left,
      right: this.right,
      body: this.body,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugForInStatement.prototype);
  }
}

const DebugForInStatement = class ForInStatement {};

export function constructForInStatement(pos, ast, parent) {
  return new ForInStatement(pos, ast, parent);
}

export function constructForStatementLeft(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructBoxIdentifierReference(pos + 8, ast, parent);
    case 1:
      return constructBoxTSAsExpression(pos + 8, ast, parent);
    case 2:
      return constructBoxTSSatisfiesExpression(pos + 8, ast, parent);
    case 3:
      return constructBoxTSNonNullExpression(pos + 8, ast, parent);
    case 4:
      return constructBoxTSTypeAssertion(pos + 8, ast, parent);
    case 8:
      return constructBoxArrayAssignmentTarget(pos + 8, ast, parent);
    case 9:
      return constructBoxObjectAssignmentTarget(pos + 8, ast, parent);
    case 16:
      return constructBoxVariableDeclaration(pos + 8, ast, parent);
    case 48:
      return constructBoxComputedMemberExpression(pos + 8, ast, parent);
    case 49:
      return constructBoxStaticMemberExpression(pos + 8, ast, parent);
    case 50:
      return constructBoxPrivateFieldExpression(pos + 8, ast, parent);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ForStatementLeft`);
  }
}

export class ForOfStatement {
  type = "ForOfStatement";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get await() {
    const internal = this.#internal;
    return constructBool(internal.pos + 64, internal.ast, this);
  }
  set await(v) {
    defineOwn(this, "await", v);
  }

  get left() {
    const internal = this.#internal;
    return constructForStatementLeft(internal.pos + 16, internal.ast, this);
  }
  set left(v) {
    defineOwn(this, "left", v);
  }

  get right() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 32, internal.ast, this);
  }
  set right(v) {
    defineOwn(this, "right", v);
  }

  get body() {
    const internal = this.#internal;
    return constructStatement(internal.pos + 48, internal.ast, this);
  }
  set body(v) {
    defineOwn(this, "body", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "ForOfStatement",
      await: this.await,
      left: this.left,
      right: this.right,
      body: this.body,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugForOfStatement.prototype);
  }
}

const DebugForOfStatement = class ForOfStatement {};

export function constructForOfStatement(pos, ast, parent) {
  return new ForOfStatement(pos, ast, parent);
}

export class ContinueStatement {
  type = "ContinueStatement";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get label() {
    const internal = this.#internal;
    return constructOptionLabelIdentifier(internal.pos + 16, internal.ast, this);
  }
  set label(v) {
    defineOwn(this, "label", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "ContinueStatement",
      label: this.label,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugContinueStatement.prototype);
  }
}

const DebugContinueStatement = class ContinueStatement {};

export function constructContinueStatement(pos, ast, parent) {
  return new ContinueStatement(pos, ast, parent);
}

export class BreakStatement {
  type = "BreakStatement";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get label() {
    const internal = this.#internal;
    return constructOptionLabelIdentifier(internal.pos + 16, internal.ast, this);
  }
  set label(v) {
    defineOwn(this, "label", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "BreakStatement",
      label: this.label,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugBreakStatement.prototype);
  }
}

const DebugBreakStatement = class BreakStatement {};

export function constructBreakStatement(pos, ast, parent) {
  return new BreakStatement(pos, ast, parent);
}

export class ReturnStatement {
  type = "ReturnStatement";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get argument() {
    const internal = this.#internal;
    return constructOptionExpression(internal.pos + 16, internal.ast, this);
  }
  set argument(v) {
    defineOwn(this, "argument", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "ReturnStatement",
      argument: this.argument,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugReturnStatement.prototype);
  }
}

const DebugReturnStatement = class ReturnStatement {};

export function constructReturnStatement(pos, ast, parent) {
  return new ReturnStatement(pos, ast, parent);
}

export class WithStatement {
  type = "WithStatement";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get object() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 16, internal.ast, this);
  }
  set object(v) {
    defineOwn(this, "object", v);
  }

  get body() {
    const internal = this.#internal;
    return constructStatement(internal.pos + 32, internal.ast, this);
  }
  set body(v) {
    defineOwn(this, "body", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "WithStatement",
      object: this.object,
      body: this.body,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugWithStatement.prototype);
  }
}

const DebugWithStatement = class WithStatement {};

export function constructWithStatement(pos, ast, parent) {
  return new WithStatement(pos, ast, parent);
}

export class SwitchStatement {
  type = "SwitchStatement";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $cases: void 0 };
    nodes.set(pos, this);
  }

  get discriminant() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 16, internal.ast, this);
  }
  set discriminant(v) {
    defineOwn(this, "discriminant", v);
  }

  get cases() {
    const internal = this.#internal,
      cached = internal.$cases;
    if (cached !== void 0) return cached;
    return (internal.$cases = constructVecSwitchCase(internal.pos + 32, internal.ast, this));
  }
  set cases(v) {
    this.#internal.$cases = v;
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "SwitchStatement",
      discriminant: this.discriminant,
      cases: this.cases,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugSwitchStatement.prototype);
  }
}

const DebugSwitchStatement = class SwitchStatement {};

export function constructSwitchStatement(pos, ast, parent) {
  return new SwitchStatement(pos, ast, parent);
}

export class SwitchCase {
  type = "SwitchCase";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $consequent: void 0 };
    nodes.set(pos, this);
  }

  get test() {
    const internal = this.#internal;
    return constructOptionExpression(internal.pos + 16, internal.ast, this);
  }
  set test(v) {
    defineOwn(this, "test", v);
  }

  get consequent() {
    const internal = this.#internal,
      cached = internal.$consequent;
    if (cached !== void 0) return cached;
    return (internal.$consequent = constructVecStatement(internal.pos + 32, internal.ast, this));
  }
  set consequent(v) {
    this.#internal.$consequent = v;
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "SwitchCase",
      test: this.test,
      consequent: this.consequent,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugSwitchCase.prototype);
  }
}

const DebugSwitchCase = class SwitchCase {};

export function constructSwitchCase(pos, ast, parent) {
  return new SwitchCase(pos, ast, parent);
}

export class LabeledStatement {
  type = "LabeledStatement";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get label() {
    const internal = this.#internal;
    return constructLabelIdentifier(internal.pos + 16, internal.ast, this);
  }
  set label(v) {
    defineOwn(this, "label", v);
  }

  get body() {
    const internal = this.#internal;
    return constructStatement(internal.pos + 48, internal.ast, this);
  }
  set body(v) {
    defineOwn(this, "body", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "LabeledStatement",
      label: this.label,
      body: this.body,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugLabeledStatement.prototype);
  }
}

const DebugLabeledStatement = class LabeledStatement {};

export function constructLabeledStatement(pos, ast, parent) {
  return new LabeledStatement(pos, ast, parent);
}

export class ThrowStatement {
  type = "ThrowStatement";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get argument() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 16, internal.ast, this);
  }
  set argument(v) {
    defineOwn(this, "argument", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "ThrowStatement",
      argument: this.argument,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugThrowStatement.prototype);
  }
}

const DebugThrowStatement = class ThrowStatement {};

export function constructThrowStatement(pos, ast, parent) {
  return new ThrowStatement(pos, ast, parent);
}

export class TryStatement {
  type = "TryStatement";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get block() {
    const internal = this.#internal;
    return constructBoxBlockStatement(internal.pos + 16, internal.ast, this);
  }
  set block(v) {
    defineOwn(this, "block", v);
  }

  get handler() {
    const internal = this.#internal;
    return constructOptionBoxCatchClause(internal.pos + 24, internal.ast, this);
  }
  set handler(v) {
    defineOwn(this, "handler", v);
  }

  get finalizer() {
    const internal = this.#internal;
    return constructOptionBoxBlockStatement(internal.pos + 32, internal.ast, this);
  }
  set finalizer(v) {
    defineOwn(this, "finalizer", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TryStatement",
      block: this.block,
      handler: this.handler,
      finalizer: this.finalizer,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTryStatement.prototype);
  }
}

const DebugTryStatement = class TryStatement {};

export function constructTryStatement(pos, ast, parent) {
  return new TryStatement(pos, ast, parent);
}

export class CatchClause {
  type = "CatchClause";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get param() {
    const internal = this.#internal;
    return constructOptionCatchParameter(internal.pos + 16, internal.ast, this);
  }
  set param(v) {
    defineOwn(this, "param", v);
  }

  get body() {
    const internal = this.#internal;
    return constructBoxBlockStatement(internal.pos + 56, internal.ast, this);
  }
  set body(v) {
    defineOwn(this, "body", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "CatchClause",
      param: this.param,
      body: this.body,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugCatchClause.prototype);
  }
}

const DebugCatchClause = class CatchClause {};

export function constructCatchClause(pos, ast, parent) {
  return new CatchClause(pos, ast, parent);
}

export function constructCatchParameter(pos, ast, parent) {
  const cached = ast.nodes.get(pos);
  if (cached !== void 0) return cached;
  const pattern = constructBindingPattern(pos + 16, ast, parent);
  ast.nodes.set(pos, pattern);
  const typeAnnotation = constructOptionBoxTSTypeAnnotation(pos + 32, ast, pattern);
  pattern.typeAnnotation = typeAnnotation;
  if (typeAnnotation !== null) {
    pattern.end = typeAnnotation.end;
    pattern.range[1] = typeAnnotation.end;
  }
  return pattern;
}

export class DebuggerStatement {
  type = "DebuggerStatement";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "DebuggerStatement",

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugDebuggerStatement.prototype);
  }
}

const DebugDebuggerStatement = class DebuggerStatement {};

export function constructDebuggerStatement(pos, ast, parent) {
  return new DebuggerStatement(pos, ast, parent);
}

export function constructBindingPattern(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructBoxBindingIdentifier(pos + 8, ast, parent);
    case 1:
      return constructBoxObjectPattern(pos + 8, ast, parent);
    case 2:
      return constructBoxArrayPattern(pos + 8, ast, parent);
    case 3:
      return constructBoxAssignmentPattern(pos + 8, ast, parent);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for BindingPattern`);
  }
}

export class AssignmentPattern {
  type = "AssignmentPattern";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $decorators: void 0 };
    nodes.set(pos, this);
  }

  get decorators() {
    const internal = this.#internal;
    if (internal.$decorators !== void 0) return internal.$decorators;
    return (internal.$decorators = []);
  }
  set decorators(v) {
    this.#internal.$decorators = v;
  }

  get left() {
    const internal = this.#internal;
    return constructBindingPattern(internal.pos + 16, internal.ast, this);
  }
  set left(v) {
    defineOwn(this, "left", v);
  }

  get right() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 32, internal.ast, this);
  }
  set right(v) {
    defineOwn(this, "right", v);
  }

  get optional() {
    return false;
  }
  set optional(v) {
    defineOwn(this, "optional", v);
  }

  get typeAnnotation() {
    return null;
  }
  set typeAnnotation(v) {
    defineOwn(this, "typeAnnotation", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "AssignmentPattern",
      decorators: this.decorators,
      left: this.left,
      right: this.right,
      optional: this.optional,
      typeAnnotation: this.typeAnnotation,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugAssignmentPattern.prototype);
  }
}

const DebugAssignmentPattern = class AssignmentPattern {};

export function constructAssignmentPattern(pos, ast, parent) {
  return new AssignmentPattern(pos, ast, parent);
}

export class ObjectPattern {
  type = "ObjectPattern";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $decorators: void 0, $properties: void 0 };
    nodes.set(pos, this);
  }

  get decorators() {
    const internal = this.#internal;
    if (internal.$decorators !== void 0) return internal.$decorators;
    return (internal.$decorators = []);
  }
  set decorators(v) {
    this.#internal.$decorators = v;
  }

  get properties() {
    const internal = this.#internal;
    if (internal.$properties !== void 0) return internal.$properties;
    const arr = [];
    arr.push(...constructVecBindingProperty(internal.pos + 16, internal.ast, this));
    {
      const item = constructOptionBoxBindingRestElement(internal.pos + 40, internal.ast, this);
      if (item !== null) arr.push(item);
    }

    return (internal.$properties = arr);
  }
  set properties(v) {
    this.#internal.$properties = v;
  }

  get optional() {
    return false;
  }
  set optional(v) {
    defineOwn(this, "optional", v);
  }

  get typeAnnotation() {
    return null;
  }
  set typeAnnotation(v) {
    defineOwn(this, "typeAnnotation", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "ObjectPattern",
      decorators: this.decorators,
      properties: this.properties,
      optional: this.optional,
      typeAnnotation: this.typeAnnotation,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugObjectPattern.prototype);
  }
}

const DebugObjectPattern = class ObjectPattern {};

export function constructObjectPattern(pos, ast, parent) {
  return new ObjectPattern(pos, ast, parent);
}

export class BindingProperty {
  type = "Property";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get kind() {
    return "init";
  }
  set kind(v) {
    defineOwn(this, "kind", v);
  }

  get key() {
    const internal = this.#internal;
    return constructPropertyKey(internal.pos + 16, internal.ast, this);
  }
  set key(v) {
    defineOwn(this, "key", v);
  }

  get value() {
    const internal = this.#internal;
    return constructBindingPattern(internal.pos + 32, internal.ast, this);
  }
  set value(v) {
    defineOwn(this, "value", v);
  }

  get method() {
    return false;
  }
  set method(v) {
    defineOwn(this, "method", v);
  }

  get shorthand() {
    const internal = this.#internal;
    return constructBool(internal.pos + 12, internal.ast, this);
  }
  set shorthand(v) {
    defineOwn(this, "shorthand", v);
  }

  get computed() {
    const internal = this.#internal,
      ast = internal.ast,
      pos = internal.pos;

    return ast.buffer[pos + 16] < 64;
  }
  set computed(v) {
    defineOwn(this, "computed", v);
  }

  get optional() {
    return false;
  }
  set optional(v) {
    defineOwn(this, "optional", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "Property",
      kind: this.kind,
      key: this.key,
      value: this.value,
      method: this.method,
      shorthand: this.shorthand,
      computed: this.computed,
      optional: this.optional,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugBindingProperty.prototype);
  }
}

const DebugBindingProperty = class BindingProperty {};

export function constructBindingProperty(pos, ast, parent) {
  return new BindingProperty(pos, ast, parent);
}

export class ArrayPattern {
  type = "ArrayPattern";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $decorators: void 0, $elements: void 0 };
    nodes.set(pos, this);
  }

  get decorators() {
    const internal = this.#internal;
    if (internal.$decorators !== void 0) return internal.$decorators;
    return (internal.$decorators = []);
  }
  set decorators(v) {
    this.#internal.$decorators = v;
  }

  get elements() {
    const internal = this.#internal;
    if (internal.$elements !== void 0) return internal.$elements;
    const arr = [];
    arr.push(...constructVecOptionBindingPattern(internal.pos + 16, internal.ast, this));
    {
      const item = constructOptionBoxBindingRestElement(internal.pos + 40, internal.ast, this);
      if (item !== null) arr.push(item);
    }

    return (internal.$elements = arr);
  }
  set elements(v) {
    this.#internal.$elements = v;
  }

  get optional() {
    return false;
  }
  set optional(v) {
    defineOwn(this, "optional", v);
  }

  get typeAnnotation() {
    return null;
  }
  set typeAnnotation(v) {
    defineOwn(this, "typeAnnotation", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "ArrayPattern",
      decorators: this.decorators,
      elements: this.elements,
      optional: this.optional,
      typeAnnotation: this.typeAnnotation,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugArrayPattern.prototype);
  }
}

const DebugArrayPattern = class ArrayPattern {};

export function constructArrayPattern(pos, ast, parent) {
  return new ArrayPattern(pos, ast, parent);
}

export class BindingRestElement {
  type = "RestElement";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $decorators: void 0 };
    nodes.set(pos, this);
  }

  get decorators() {
    const internal = this.#internal;
    if (internal.$decorators !== void 0) return internal.$decorators;
    return (internal.$decorators = []);
  }
  set decorators(v) {
    this.#internal.$decorators = v;
  }

  get argument() {
    const internal = this.#internal;
    return constructBindingPattern(internal.pos + 16, internal.ast, this);
  }
  set argument(v) {
    defineOwn(this, "argument", v);
  }

  get optional() {
    return false;
  }
  set optional(v) {
    defineOwn(this, "optional", v);
  }

  get typeAnnotation() {
    return null;
  }
  set typeAnnotation(v) {
    defineOwn(this, "typeAnnotation", v);
  }

  get value() {
    return null;
  }
  set value(v) {
    defineOwn(this, "value", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "RestElement",
      decorators: this.decorators,
      argument: this.argument,
      optional: this.optional,
      typeAnnotation: this.typeAnnotation,
      value: this.value,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugBindingRestElement.prototype);
  }
}

const DebugBindingRestElement = class BindingRestElement {};

export function constructBindingRestElement(pos, ast, parent) {
  return new BindingRestElement(pos, ast, parent);
}

export class Function {
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $params: void 0 };
    nodes.set(pos, this);
  }

  get type() {
    const internal = this.#internal;
    return constructFunctionType(internal.pos + 88, internal.ast, this);
  }
  set type(v) {
    defineOwn(this, "type", v);
  }

  get id() {
    const internal = this.#internal;
    return constructOptionBindingIdentifier(internal.pos + 16, internal.ast, this);
  }
  set id(v) {
    defineOwn(this, "id", v);
  }

  get generator() {
    const internal = this.#internal;
    return constructBool(internal.pos + 89, internal.ast, this);
  }
  set generator(v) {
    defineOwn(this, "generator", v);
  }

  get async() {
    const internal = this.#internal;
    return constructBool(internal.pos + 90, internal.ast, this);
  }
  set async(v) {
    defineOwn(this, "async", v);
  }

  get declare() {
    const internal = this.#internal;
    return constructBool(internal.pos + 91, internal.ast, this);
  }
  set declare(v) {
    defineOwn(this, "declare", v);
  }

  get typeParameters() {
    const internal = this.#internal;
    return constructOptionBoxTSTypeParameterDeclaration(internal.pos + 48, internal.ast, this);
  }
  set typeParameters(v) {
    defineOwn(this, "typeParameters", v);
  }

  get returnType() {
    const internal = this.#internal;
    return constructOptionBoxTSTypeAnnotation(internal.pos + 72, internal.ast, this);
  }
  set returnType(v) {
    defineOwn(this, "returnType", v);
  }

  get body() {
    const internal = this.#internal;
    return constructOptionBoxFunctionBody(internal.pos + 80, internal.ast, this);
  }
  set body(v) {
    defineOwn(this, "body", v);
  }

  get expression() {
    return false;
  }
  set expression(v) {
    defineOwn(this, "expression", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get params() {
    const internal = this.#internal;
    if (internal.$params !== void 0) return internal.$params;
    const params = constructBoxFormalParameters(internal.pos + 64, internal.ast, this);
    const thisParam = constructOptionBoxTSThisParameter(internal.pos + 56, internal.ast, this);
    if (thisParam !== null) params.unshift(thisParam);
    return (internal.$params = params);
  }
  set params(v) {
    this.#internal.$params = v;
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: this.type,
      id: this.id,
      generator: this.generator,
      async: this.async,
      declare: this.declare,
      typeParameters: this.typeParameters,
      returnType: this.returnType,
      body: this.body,
      expression: this.expression,
      params: this.params,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugFunction.prototype);
  }
}

const DebugFunction = class Function {};

export function constructFunction(pos, ast, parent) {
  return new Function(pos, ast, parent);
}

export function constructFunctionType(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return "FunctionDeclaration";
    case 1:
      return "FunctionExpression";
    case 2:
      return "TSDeclareFunction";
    case 3:
      return "TSEmptyBodyFunctionExpression";
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for FunctionType`);
  }
}

export function constructFormalParameters(pos, ast, parent) {
  const params = [...constructVecFormalParameter(pos + 16, ast, parent)];
  if (!(ast.buffer.int32[(pos >> 2) + 10] === 0 && ast.buffer.int32[(pos >> 2) + 11] === 0)) {
    const restPos = ast.buffer.int32[(pos + 40) >> 2];
    params.push(constructFormalParameterRest(restPos, ast, parent));
  }
  return params;
}

export function constructFormalParameter(pos, ast, parent) {
  const cached = ast.nodes.get(pos);
  if (cached !== void 0) return cached;
  const { buffer } = ast;
  const hasInitializer = !(
    ast.buffer.int32[(pos >> 2) + 16] === 0 && ast.buffer.int32[(pos >> 2) + 17] === 0
  );
  const accessibility = constructOptionTSAccessibility(pos + 13, ast);
  const readonly = buffer[pos + 14] === 1;
  const override = buffer[pos + 15] === 1;
  let param;
  if (accessibility === null && !readonly && !override) {
    const optional = buffer[pos + 12] === 1;
    if (hasInitializer) {
      const start = buffer.int32[(pos + 0) >> 2],
        end = buffer.int32[(pos + 0 + 4) >> 2];
      param = Object.create(NodeProto);
      param.type = "AssignmentPattern";
      param.decorators = null;
      param.left = null;
      param.right = null;
      param.optional = optional;
      param.typeAnnotation = null;
      param.start = start;
      param.end = end;
      param.range = [start, end];
      param.parent = parent;
      ast.nodes.set(pos, param);
      param.decorators = [...constructVecDecorator(pos + 16, ast, param)];
      const left = constructBindingPattern(pos + 40, ast, param);
      param.left = left;
      left.decorators = [];
      left.optional = false;
      const leftTypeAnnotation = constructOptionBoxTSTypeAnnotation(pos + 56, ast, left);
      left.typeAnnotation = leftTypeAnnotation;
      if (leftTypeAnnotation !== null) {
        left.end = leftTypeAnnotation.end;
        left.range[1] = leftTypeAnnotation.end;
      }
      param.right = constructOptionBoxExpression(pos + 64, ast, param);
    } else {
      param = constructBindingPattern(pos + 40, ast, parent);
      ast.nodes.set(pos, param);
      param.parent = parent;
      param.decorators = [...constructVecDecorator(pos + 16, ast, param)];
      param.optional = optional;
      const typeAnnotation = constructOptionBoxTSTypeAnnotation(pos + 56, ast, param);
      param.typeAnnotation = typeAnnotation;
      if (typeAnnotation !== null) {
        param.end = typeAnnotation.end;
        param.range[1] = typeAnnotation.end;
      } else if (optional) {
        const end = buffer.int32[(pos + 0 + 4) >> 2];
        param.end = end;
        param.range[1] = end;
      }
    }
  } else {
    const start = buffer.int32[(pos + 0) >> 2],
      end = buffer.int32[(pos + 0 + 4) >> 2];
    param = Object.create(NodeProto);
    param.type = "TSParameterProperty";
    param.accessibility = accessibility;
    param.decorators = null;
    param.override = override;
    param.parameter = null;
    param.readonly = readonly;
    param.static = false;
    param.start = start;
    param.end = end;
    param.range = [start, end];
    param.parent = parent;
    ast.nodes.set(pos, param);
    param.decorators = [...constructVecDecorator(pos + 16, ast, param)];
    if (hasInitializer) {
      const pattern = constructBindingPattern(pos + 40, ast, null);
      const initializer = constructOptionBoxExpression(pos + 64, ast, null);
      const assignParam = Object.create(NodeProto);
      assignParam.type = "AssignmentPattern";
      assignParam.decorators = [];
      assignParam.left = pattern;
      assignParam.right = initializer;
      assignParam.optional = false;
      assignParam.typeAnnotation = null;
      assignParam.start = pattern.start;
      assignParam.end = initializer.end;
      assignParam.range = [assignParam.start, assignParam.end];
      assignParam.parent = param;
      pattern.parent = assignParam;
      pattern.decorators = [];
      pattern.optional = false;
      const patternTypeAnnotation = constructOptionBoxTSTypeAnnotation(pos + 56, ast, pattern);
      pattern.typeAnnotation = patternTypeAnnotation;
      if (patternTypeAnnotation !== null) {
        pattern.end = patternTypeAnnotation.end;
        pattern.range[1] = patternTypeAnnotation.end;
      }
      if (initializer !== null) initializer.parent = assignParam;
      param.parameter = assignParam;
    } else {
      const parameter = constructBindingPattern(pos + 40, ast, param);
      param.parameter = parameter;
      parameter.decorators = [];
      const paramOptional = buffer[pos + 12] === 1;
      parameter.optional = paramOptional;
      const paramTypeAnnotation = constructOptionBoxTSTypeAnnotation(pos + 56, ast, parameter);
      parameter.typeAnnotation = paramTypeAnnotation;
      if (paramTypeAnnotation !== null) {
        parameter.end = paramTypeAnnotation.end;
        parameter.range[1] = paramTypeAnnotation.end;
      } else if (paramOptional) {
        const paramEnd = buffer.int32[(pos + 0 + 4) >> 2];
        parameter.end = paramEnd;
        parameter.range[1] = paramEnd;
      }
    }
  }
  return param;
}

export function constructFormalParameterKind(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return "FormalParameter";
    case 1:
      return "UniqueFormalParameters";
    case 2:
      return "ArrowFormalParameters";
    case 3:
      return "Signature";
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for FormalParameterKind`);
  }
}

export function constructFormalParameterRest(pos, ast, parent) {
  const cached = ast.nodes.get(pos);
  if (cached !== void 0) return cached;
  let start = ast.buffer.int32[(pos + 40) >> 2],
    end = ast.buffer.int32[(pos + 40 + 4) >> 2];
  const node = Object.create(NodeProto);
  node.type = "RestElement";
  node.decorators = null;
  node.argument = null;
  node.optional = false;
  node.typeAnnotation = null;
  node.value = null;
  node.start = start;
  node.end = end;
  node.range = [start, end];
  node.parent = parent;
  ast.nodes.set(pos, node);
  node.argument = constructBindingPattern(pos + 56, ast, node);
  node.decorators = [...constructVecDecorator(pos + 16, ast, node)];
  if (node.decorators.length !== 0) start = node.decorators[0].start;
  node.typeAnnotation = constructOptionBoxTSTypeAnnotation(pos + 72, ast, node);
  if (node.typeAnnotation !== null) end = node.typeAnnotation.end;
  node.start = start;
  node.end = end;
  node.range[0] = start;
  node.range[1] = end;
  return node;
}

export class FunctionBody {
  type = "BlockStatement";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $body: void 0 };
    nodes.set(pos, this);
  }

  get body() {
    const internal = this.#internal;
    if (internal.$body !== void 0) return internal.$body;
    const arr = [];
    arr.push(...constructVecDirective(internal.pos + 16, internal.ast, this));
    arr.push(...constructVecStatement(internal.pos + 40, internal.ast, this));

    return (internal.$body = arr);
  }
  set body(v) {
    this.#internal.$body = v;
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "BlockStatement",
      body: this.body,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugFunctionBody.prototype);
  }
}

const DebugFunctionBody = class FunctionBody {};

export function constructFunctionBody(pos, ast, parent) {
  return new FunctionBody(pos, ast, parent);
}

export function constructArrowFunctionBody(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructBoxBooleanLiteral(pos + 8, ast, parent);
    case 1:
      return constructBoxNullLiteral(pos + 8, ast, parent);
    case 2:
      return constructBoxNumericLiteral(pos + 8, ast, parent);
    case 3:
      return constructBoxBigIntLiteral(pos + 8, ast, parent);
    case 4:
      return constructBoxRegExpLiteral(pos + 8, ast, parent);
    case 5:
      return constructBoxStringLiteral(pos + 8, ast, parent);
    case 6:
      return constructBoxTemplateLiteral(pos + 8, ast, parent);
    case 7:
      return constructBoxIdentifierReference(pos + 8, ast, parent);
    case 8:
      return constructBoxSuper(pos + 8, ast, parent);
    case 9:
      return constructBoxArrayExpression(pos + 8, ast, parent);
    case 10:
      return constructBoxArrowFunctionExpression(pos + 8, ast, parent);
    case 11:
      return constructBoxAssignmentExpression(pos + 8, ast, parent);
    case 12:
      return constructBoxAwaitExpression(pos + 8, ast, parent);
    case 13:
      return constructBoxBinaryExpression(pos + 8, ast, parent);
    case 14:
      return constructBoxCallExpression(pos + 8, ast, parent);
    case 15:
      return constructBoxChainExpression(pos + 8, ast, parent);
    case 16:
      return constructBoxClass(pos + 8, ast, parent);
    case 17:
      return constructBoxConditionalExpression(pos + 8, ast, parent);
    case 18:
      return constructBoxFunction(pos + 8, ast, parent);
    case 19:
      return constructBoxImportExpression(pos + 8, ast, parent);
    case 20:
      return constructBoxLogicalExpression(pos + 8, ast, parent);
    case 21:
      return constructBoxNewExpression(pos + 8, ast, parent);
    case 22:
      return constructBoxObjectExpression(pos + 8, ast, parent);
    case 23:
      return constructBoxParenthesizedExpression(pos + 8, ast, parent);
    case 24:
      return constructBoxSequenceExpression(pos + 8, ast, parent);
    case 25:
      return constructBoxTaggedTemplateExpression(pos + 8, ast, parent);
    case 26:
      return constructBoxThisExpression(pos + 8, ast, parent);
    case 27:
      return constructBoxUnaryExpression(pos + 8, ast, parent);
    case 28:
      return constructBoxUpdateExpression(pos + 8, ast, parent);
    case 29:
      return constructBoxYieldExpression(pos + 8, ast, parent);
    case 30:
      return constructBoxPrivateInExpression(pos + 8, ast, parent);
    case 31:
      return constructBoxImportMeta(pos + 8, ast, parent);
    case 32:
      return constructBoxNewTarget(pos + 8, ast, parent);
    case 33:
      return constructBoxJSXElement(pos + 8, ast, parent);
    case 34:
      return constructBoxJSXFragment(pos + 8, ast, parent);
    case 35:
      return constructBoxTSAsExpression(pos + 8, ast, parent);
    case 36:
      return constructBoxTSSatisfiesExpression(pos + 8, ast, parent);
    case 37:
      return constructBoxTSTypeAssertion(pos + 8, ast, parent);
    case 38:
      return constructBoxTSNonNullExpression(pos + 8, ast, parent);
    case 39:
      return constructBoxTSInstantiationExpression(pos + 8, ast, parent);
    case 40:
      return constructBoxV8IntrinsicExpression(pos + 8, ast, parent);
    case 48:
      return constructBoxComputedMemberExpression(pos + 8, ast, parent);
    case 49:
      return constructBoxStaticMemberExpression(pos + 8, ast, parent);
    case 50:
      return constructBoxPrivateFieldExpression(pos + 8, ast, parent);
    case 64:
      return constructBoxFunctionBody(pos + 8, ast, parent);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ArrowFunctionBody`);
  }
}

export class ArrowFunctionExpression {
  type = "ArrowFunctionExpression";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $params: void 0 };
    nodes.set(pos, this);
  }

  get expression() {
    const internal = this.#internal,
      ast = internal.ast,
      pos = internal.pos;

    return ast.buffer[pos + 40] !== 64;
  }
  set expression(v) {
    defineOwn(this, "expression", v);
  }

  get async() {
    const internal = this.#internal;
    return constructBool(internal.pos + 56, internal.ast, this);
  }
  set async(v) {
    defineOwn(this, "async", v);
  }

  get typeParameters() {
    const internal = this.#internal;
    return constructOptionBoxTSTypeParameterDeclaration(internal.pos + 16, internal.ast, this);
  }
  set typeParameters(v) {
    defineOwn(this, "typeParameters", v);
  }

  get params() {
    const internal = this.#internal,
      cached = internal.$params;
    if (cached !== void 0) return cached;
    return (internal.$params = constructBoxFormalParameters(internal.pos + 24, internal.ast, this));
  }
  set params(v) {
    this.#internal.$params = v;
  }

  get returnType() {
    const internal = this.#internal;
    return constructOptionBoxTSTypeAnnotation(internal.pos + 32, internal.ast, this);
  }
  set returnType(v) {
    defineOwn(this, "returnType", v);
  }

  get body() {
    const internal = this.#internal;
    return constructArrowFunctionBody(internal.pos + 40, internal.ast, this);
  }
  set body(v) {
    defineOwn(this, "body", v);
  }

  get id() {
    return null;
  }
  set id(v) {
    defineOwn(this, "id", v);
  }

  get generator() {
    return false;
  }
  set generator(v) {
    defineOwn(this, "generator", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "ArrowFunctionExpression",
      expression: this.expression,
      async: this.async,
      typeParameters: this.typeParameters,
      params: this.params,
      returnType: this.returnType,
      body: this.body,
      id: this.id,
      generator: this.generator,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugArrowFunctionExpression.prototype);
  }
}

const DebugArrowFunctionExpression = class ArrowFunctionExpression {};

export function constructArrowFunctionExpression(pos, ast, parent) {
  return new ArrowFunctionExpression(pos, ast, parent);
}

export class YieldExpression {
  type = "YieldExpression";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get delegate() {
    const internal = this.#internal;
    return constructBool(internal.pos + 12, internal.ast, this);
  }
  set delegate(v) {
    defineOwn(this, "delegate", v);
  }

  get argument() {
    const internal = this.#internal;
    return constructOptionExpression(internal.pos + 16, internal.ast, this);
  }
  set argument(v) {
    defineOwn(this, "argument", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "YieldExpression",
      delegate: this.delegate,
      argument: this.argument,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugYieldExpression.prototype);
  }
}

const DebugYieldExpression = class YieldExpression {};

export function constructYieldExpression(pos, ast, parent) {
  return new YieldExpression(pos, ast, parent);
}

export class Class {
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $decorators: void 0, $implements: void 0 };
    nodes.set(pos, this);
  }

  get type() {
    const internal = this.#internal;
    return constructClassType(internal.pos + 136, internal.ast, this);
  }
  set type(v) {
    defineOwn(this, "type", v);
  }

  get decorators() {
    const internal = this.#internal,
      cached = internal.$decorators;
    if (cached !== void 0) return cached;
    return (internal.$decorators = constructVecDecorator(internal.pos + 16, internal.ast, this));
  }
  set decorators(v) {
    this.#internal.$decorators = v;
  }

  get id() {
    const internal = this.#internal;
    return constructOptionBindingIdentifier(internal.pos + 40, internal.ast, this);
  }
  set id(v) {
    defineOwn(this, "id", v);
  }

  get typeParameters() {
    const internal = this.#internal;
    return constructOptionBoxTSTypeParameterDeclaration(internal.pos + 72, internal.ast, this);
  }
  set typeParameters(v) {
    defineOwn(this, "typeParameters", v);
  }

  get superClass() {
    const internal = this.#internal,
      ast = internal.ast,
      pos = internal.pos;

    return constructOptionExpression(pos + 80, ast, this);
  }
  set superClass(v) {
    defineOwn(this, "superClass", v);
  }

  get superTypeArguments() {
    const internal = this.#internal,
      ast = internal.ast,
      pos = internal.pos;

    return this.superClass === null
      ? null
      : constructOptionBoxTSTypeParameterInstantiation(pos + 80 + (pos + 16 - pos), ast, this);
  }
  set superTypeArguments(v) {
    defineOwn(this, "superTypeArguments", v);
  }

  get implements() {
    const internal = this.#internal,
      cached = internal.$implements;
    if (cached !== void 0) return cached;
    return (internal.$implements = constructVecTSClassImplements(
      internal.pos + 104,
      internal.ast,
      this,
    ));
  }
  set implements(v) {
    this.#internal.$implements = v;
  }

  get body() {
    const internal = this.#internal;
    return constructBoxClassBody(internal.pos + 128, internal.ast, this);
  }
  set body(v) {
    defineOwn(this, "body", v);
  }

  get abstract() {
    const internal = this.#internal;
    return constructBool(internal.pos + 137, internal.ast, this);
  }
  set abstract(v) {
    defineOwn(this, "abstract", v);
  }

  get declare() {
    const internal = this.#internal;
    return constructBool(internal.pos + 138, internal.ast, this);
  }
  set declare(v) {
    defineOwn(this, "declare", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: this.type,
      decorators: this.decorators,
      id: this.id,
      typeParameters: this.typeParameters,
      superClass: this.superClass,
      superTypeArguments: this.superTypeArguments,
      implements: this.implements,
      body: this.body,
      abstract: this.abstract,
      declare: this.declare,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugClass.prototype);
  }
}

const DebugClass = class Class {};

export function constructClass(pos, ast, parent) {
  return new Class(pos, ast, parent);
}

export function constructClassType(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return "ClassDeclaration";
    case 1:
      return "ClassExpression";
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ClassType`);
  }
}

export class ClassBody {
  type = "ClassBody";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $body: void 0 };
    nodes.set(pos, this);
  }

  get body() {
    const internal = this.#internal,
      cached = internal.$body;
    if (cached !== void 0) return cached;
    return (internal.$body = constructVecClassElement(internal.pos + 16, internal.ast, this));
  }
  set body(v) {
    this.#internal.$body = v;
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "ClassBody",
      body: this.body,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugClassBody.prototype);
  }
}

const DebugClassBody = class ClassBody {};

export function constructClassBody(pos, ast, parent) {
  return new ClassBody(pos, ast, parent);
}

export function constructClassElement(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructBoxStaticBlock(pos + 8, ast, parent);
    case 1:
      return constructBoxMethodDefinition(pos + 8, ast, parent);
    case 2:
      return constructBoxPropertyDefinition(pos + 8, ast, parent);
    case 3:
      return constructBoxAccessorProperty(pos + 8, ast, parent);
    case 4:
      return constructBoxTSIndexSignature(pos + 8, ast, parent);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ClassElement`);
  }
}

export class MethodDefinition {
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $decorators: void 0 };
    nodes.set(pos, this);
  }

  get type() {
    const internal = this.#internal;
    return constructMethodDefinitionType(internal.pos + 12, internal.ast, this);
  }
  set type(v) {
    defineOwn(this, "type", v);
  }

  get decorators() {
    const internal = this.#internal,
      cached = internal.$decorators;
    if (cached !== void 0) return cached;
    return (internal.$decorators = constructVecDecorator(internal.pos + 16, internal.ast, this));
  }
  set decorators(v) {
    this.#internal.$decorators = v;
  }

  get key() {
    const internal = this.#internal;
    return constructPropertyKey(internal.pos + 40, internal.ast, this);
  }
  set key(v) {
    defineOwn(this, "key", v);
  }

  get value() {
    const internal = this.#internal;
    return constructBoxFunction(internal.pos + 56, internal.ast, this);
  }
  set value(v) {
    defineOwn(this, "value", v);
  }

  get kind() {
    const internal = this.#internal;
    return constructMethodDefinitionKind(internal.pos + 13, internal.ast, this);
  }
  set kind(v) {
    defineOwn(this, "kind", v);
  }

  get computed() {
    const internal = this.#internal,
      ast = internal.ast,
      pos = internal.pos;

    return ast.buffer[pos + 40] < 64;
  }
  set computed(v) {
    defineOwn(this, "computed", v);
  }

  get static() {
    const internal = this.#internal;
    return constructBool(internal.pos + 14, internal.ast, this);
  }
  set static(v) {
    defineOwn(this, "static", v);
  }

  get override() {
    const internal = this.#internal;
    return constructBool(internal.pos + 15, internal.ast, this);
  }
  set override(v) {
    defineOwn(this, "override", v);
  }

  get optional() {
    const internal = this.#internal;
    return constructBool(internal.pos + 64, internal.ast, this);
  }
  set optional(v) {
    defineOwn(this, "optional", v);
  }

  get accessibility() {
    const internal = this.#internal;
    return constructOptionTSAccessibility(internal.pos + 65, internal.ast, this);
  }
  set accessibility(v) {
    defineOwn(this, "accessibility", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: this.type,
      decorators: this.decorators,
      key: this.key,
      value: this.value,
      kind: this.kind,
      computed: this.computed,
      static: this.static,
      override: this.override,
      optional: this.optional,
      accessibility: this.accessibility,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugMethodDefinition.prototype);
  }
}

const DebugMethodDefinition = class MethodDefinition {};

export function constructMethodDefinition(pos, ast, parent) {
  return new MethodDefinition(pos, ast, parent);
}

export function constructMethodDefinitionType(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return "MethodDefinition";
    case 1:
      return "TSAbstractMethodDefinition";
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for MethodDefinitionType`);
  }
}

export class PropertyDefinition {
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $decorators: void 0 };
    nodes.set(pos, this);
  }

  get type() {
    const internal = this.#internal;
    return constructPropertyDefinitionType(internal.pos + 12, internal.ast, this);
  }
  set type(v) {
    defineOwn(this, "type", v);
  }

  get decorators() {
    const internal = this.#internal,
      cached = internal.$decorators;
    if (cached !== void 0) return cached;
    return (internal.$decorators = constructVecDecorator(internal.pos + 16, internal.ast, this));
  }
  set decorators(v) {
    this.#internal.$decorators = v;
  }

  get key() {
    const internal = this.#internal;
    return constructPropertyKey(internal.pos + 40, internal.ast, this);
  }
  set key(v) {
    defineOwn(this, "key", v);
  }

  get typeAnnotation() {
    const internal = this.#internal;
    return constructOptionBoxTSTypeAnnotation(internal.pos + 56, internal.ast, this);
  }
  set typeAnnotation(v) {
    defineOwn(this, "typeAnnotation", v);
  }

  get value() {
    const internal = this.#internal;
    return constructOptionExpression(internal.pos + 64, internal.ast, this);
  }
  set value(v) {
    defineOwn(this, "value", v);
  }

  get computed() {
    const internal = this.#internal,
      ast = internal.ast,
      pos = internal.pos;

    return ast.buffer[pos + 40] < 64;
  }
  set computed(v) {
    defineOwn(this, "computed", v);
  }

  get static() {
    const internal = this.#internal;
    return constructBool(internal.pos + 13, internal.ast, this);
  }
  set static(v) {
    defineOwn(this, "static", v);
  }

  get declare() {
    const internal = this.#internal;
    return constructBool(internal.pos + 14, internal.ast, this);
  }
  set declare(v) {
    defineOwn(this, "declare", v);
  }

  get override() {
    const internal = this.#internal;
    return constructBool(internal.pos + 15, internal.ast, this);
  }
  set override(v) {
    defineOwn(this, "override", v);
  }

  get optional() {
    const internal = this.#internal;
    return constructBool(internal.pos + 80, internal.ast, this);
  }
  set optional(v) {
    defineOwn(this, "optional", v);
  }

  get definite() {
    const internal = this.#internal;
    return constructBool(internal.pos + 81, internal.ast, this);
  }
  set definite(v) {
    defineOwn(this, "definite", v);
  }

  get readonly() {
    const internal = this.#internal;
    return constructBool(internal.pos + 82, internal.ast, this);
  }
  set readonly(v) {
    defineOwn(this, "readonly", v);
  }

  get accessibility() {
    const internal = this.#internal;
    return constructOptionTSAccessibility(internal.pos + 83, internal.ast, this);
  }
  set accessibility(v) {
    defineOwn(this, "accessibility", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: this.type,
      decorators: this.decorators,
      key: this.key,
      typeAnnotation: this.typeAnnotation,
      value: this.value,
      computed: this.computed,
      static: this.static,
      declare: this.declare,
      override: this.override,
      optional: this.optional,
      definite: this.definite,
      readonly: this.readonly,
      accessibility: this.accessibility,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugPropertyDefinition.prototype);
  }
}

const DebugPropertyDefinition = class PropertyDefinition {};

export function constructPropertyDefinition(pos, ast, parent) {
  return new PropertyDefinition(pos, ast, parent);
}

export function constructPropertyDefinitionType(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return "PropertyDefinition";
    case 1:
      return "TSAbstractPropertyDefinition";
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for PropertyDefinitionType`);
  }
}

export function constructMethodDefinitionKind(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return "constructor";
    case 1:
      return "method";
    case 2:
      return "get";
    case 3:
      return "set";
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for MethodDefinitionKind`);
  }
}

export class PrivateIdentifier {
  type = "PrivateIdentifier";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $name: void 0 };
    nodes.set(pos, this);
  }

  get name() {
    const internal = this.#internal,
      cached = internal.$name;
    if (cached !== void 0) return cached;
    return (internal.$name = constructStr(internal.pos + 16, internal.ast, this));
  }
  set name(v) {
    this.#internal.$name = v;
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "PrivateIdentifier",
      name: this.name,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugPrivateIdentifier.prototype);
  }
}

const DebugPrivateIdentifier = class PrivateIdentifier {};

export function constructPrivateIdentifier(pos, ast, parent) {
  return new PrivateIdentifier(pos, ast, parent);
}

export class StaticBlock {
  type = "StaticBlock";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $body: void 0 };
    nodes.set(pos, this);
  }

  get body() {
    const internal = this.#internal,
      cached = internal.$body;
    if (cached !== void 0) return cached;
    return (internal.$body = constructVecStatement(internal.pos + 16, internal.ast, this));
  }
  set body(v) {
    this.#internal.$body = v;
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "StaticBlock",
      body: this.body,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugStaticBlock.prototype);
  }
}

const DebugStaticBlock = class StaticBlock {};

export function constructStaticBlock(pos, ast, parent) {
  return new StaticBlock(pos, ast, parent);
}

export function constructModuleDeclaration(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 64:
      return constructBoxImportDeclaration(pos + 8, ast, parent);
    case 65:
      return constructBoxExportAllDeclaration(pos + 8, ast, parent);
    case 66:
      return constructBoxExportDefaultDeclaration(pos + 8, ast, parent);
    case 67:
      return constructBoxExportDeclaration(pos + 8, ast, parent);
    case 68:
      return constructBoxExportNamedDeclaration(pos + 8, ast, parent);
    case 69:
      return constructBoxExportFromDeclaration(pos + 8, ast, parent);
    case 70:
      return constructBoxTSExportAssignment(pos + 8, ast, parent);
    case 71:
      return constructBoxTSNamespaceExportDeclaration(pos + 8, ast, parent);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ModuleDeclaration`);
  }
}

export function constructAccessorPropertyType(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return "AccessorProperty";
    case 1:
      return "TSAbstractAccessorProperty";
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for AccessorPropertyType`);
  }
}

export class AccessorProperty {
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $decorators: void 0 };
    nodes.set(pos, this);
  }

  get type() {
    const internal = this.#internal;
    return constructAccessorPropertyType(internal.pos + 12, internal.ast, this);
  }
  set type(v) {
    defineOwn(this, "type", v);
  }

  get decorators() {
    const internal = this.#internal,
      cached = internal.$decorators;
    if (cached !== void 0) return cached;
    return (internal.$decorators = constructVecDecorator(internal.pos + 16, internal.ast, this));
  }
  set decorators(v) {
    this.#internal.$decorators = v;
  }

  get key() {
    const internal = this.#internal;
    return constructPropertyKey(internal.pos + 40, internal.ast, this);
  }
  set key(v) {
    defineOwn(this, "key", v);
  }

  get typeAnnotation() {
    const internal = this.#internal;
    return constructOptionBoxTSTypeAnnotation(internal.pos + 56, internal.ast, this);
  }
  set typeAnnotation(v) {
    defineOwn(this, "typeAnnotation", v);
  }

  get value() {
    const internal = this.#internal;
    return constructOptionExpression(internal.pos + 64, internal.ast, this);
  }
  set value(v) {
    defineOwn(this, "value", v);
  }

  get computed() {
    const internal = this.#internal,
      ast = internal.ast,
      pos = internal.pos;

    return ast.buffer[pos + 40] < 64;
  }
  set computed(v) {
    defineOwn(this, "computed", v);
  }

  get static() {
    const internal = this.#internal;
    return constructBool(internal.pos + 13, internal.ast, this);
  }
  set static(v) {
    defineOwn(this, "static", v);
  }

  get override() {
    const internal = this.#internal;
    return constructBool(internal.pos + 14, internal.ast, this);
  }
  set override(v) {
    defineOwn(this, "override", v);
  }

  get definite() {
    const internal = this.#internal;
    return constructBool(internal.pos + 15, internal.ast, this);
  }
  set definite(v) {
    defineOwn(this, "definite", v);
  }

  get accessibility() {
    const internal = this.#internal;
    return constructOptionTSAccessibility(internal.pos + 80, internal.ast, this);
  }
  set accessibility(v) {
    defineOwn(this, "accessibility", v);
  }

  get declare() {
    return false;
  }
  set declare(v) {
    defineOwn(this, "declare", v);
  }

  get optional() {
    return false;
  }
  set optional(v) {
    defineOwn(this, "optional", v);
  }

  get readonly() {
    return false;
  }
  set readonly(v) {
    defineOwn(this, "readonly", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: this.type,
      decorators: this.decorators,
      key: this.key,
      typeAnnotation: this.typeAnnotation,
      value: this.value,
      computed: this.computed,
      static: this.static,
      override: this.override,
      definite: this.definite,
      accessibility: this.accessibility,
      declare: this.declare,
      optional: this.optional,
      readonly: this.readonly,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugAccessorProperty.prototype);
  }
}

const DebugAccessorProperty = class AccessorProperty {};

export function constructAccessorProperty(pos, ast, parent) {
  return new AccessorProperty(pos, ast, parent);
}

export class ImportExpression {
  type = "ImportExpression";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get source() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 16, internal.ast, this);
  }
  set source(v) {
    defineOwn(this, "source", v);
  }

  get options() {
    const internal = this.#internal;
    return constructOptionExpression(internal.pos + 32, internal.ast, this);
  }
  set options(v) {
    defineOwn(this, "options", v);
  }

  get phase() {
    const internal = this.#internal;
    return constructOptionImportPhase(internal.pos + 12, internal.ast, this);
  }
  set phase(v) {
    defineOwn(this, "phase", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "ImportExpression",
      source: this.source,
      options: this.options,
      phase: this.phase,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugImportExpression.prototype);
  }
}

const DebugImportExpression = class ImportExpression {};

export function constructImportExpression(pos, ast, parent) {
  return new ImportExpression(pos, ast, parent);
}

export class ImportDeclaration {
  type = "ImportDeclaration";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $specifiers: void 0, $attributes: void 0 };
    nodes.set(pos, this);
  }

  get source() {
    const internal = this.#internal;
    return constructStringLiteral(internal.pos + 40, internal.ast, this);
  }
  set source(v) {
    defineOwn(this, "source", v);
  }

  get phase() {
    const internal = this.#internal;
    return constructOptionImportPhase(internal.pos + 12, internal.ast, this);
  }
  set phase(v) {
    defineOwn(this, "phase", v);
  }

  get importKind() {
    const internal = this.#internal;
    return constructImportOrExportKind(internal.pos + 13, internal.ast, this);
  }
  set importKind(v) {
    defineOwn(this, "importKind", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get specifiers() {
    {
      const internal = this.#internal;
      if (internal.$specifiers !== void 0) return internal.$specifiers;
      const specifiers = constructOptionVecImportDeclarationSpecifier(
        internal.pos + 16,
        internal.ast,
        this,
      );
      return (internal.$specifiers = specifiers === null ? [] : [...specifiers]);
    }
  }
  set specifiers(v) {
    {
      this.#internal.$specifiers = v;
    }
  }

  get attributes() {
    const internal = this.#internal,
      ast = internal.ast,
      pos = internal.pos;
    if (internal.$attributes !== void 0) return internal.$attributes;
    if (ast.buffer.int32[(pos >> 2) + 22] === 0 && ast.buffer.int32[(pos >> 2) + 23] === 0)
      return (internal.$attributes = []);
    const withPos = ast.buffer.int32[(internal.pos + 88) >> 2];
    return (internal.$attributes = [...constructVecImportAttribute(withPos + 16, ast, this)]);
  }
  set attributes(v) {
    this.#internal.$attributes = v;
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "ImportDeclaration",
      source: this.source,
      phase: this.phase,
      importKind: this.importKind,
      specifiers: this.specifiers,
      attributes: this.attributes,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugImportDeclaration.prototype);
  }
}

const DebugImportDeclaration = class ImportDeclaration {};

export function constructImportDeclaration(pos, ast, parent) {
  return new ImportDeclaration(pos, ast, parent);
}

export function constructImportPhase(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return "source";
    case 1:
      return "defer";
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ImportPhase`);
  }
}

export function constructImportDeclarationSpecifier(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructBoxImportSpecifier(pos + 8, ast, parent);
    case 1:
      return constructBoxImportDefaultSpecifier(pos + 8, ast, parent);
    case 2:
      return constructBoxImportNamespaceSpecifier(pos + 8, ast, parent);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ImportDeclarationSpecifier`);
  }
}

export class ImportSpecifier {
  type = "ImportSpecifier";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get imported() {
    const internal = this.#internal;
    return constructModuleExportName(internal.pos + 16, internal.ast, this);
  }
  set imported(v) {
    defineOwn(this, "imported", v);
  }

  get local() {
    const internal = this.#internal;
    return constructBindingIdentifier(internal.pos + 72, internal.ast, this);
  }
  set local(v) {
    defineOwn(this, "local", v);
  }

  get importKind() {
    const internal = this.#internal;
    return constructImportOrExportKind(internal.pos + 12, internal.ast, this);
  }
  set importKind(v) {
    defineOwn(this, "importKind", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "ImportSpecifier",
      imported: this.imported,
      local: this.local,
      importKind: this.importKind,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugImportSpecifier.prototype);
  }
}

const DebugImportSpecifier = class ImportSpecifier {};

export function constructImportSpecifier(pos, ast, parent) {
  return new ImportSpecifier(pos, ast, parent);
}

export class ImportDefaultSpecifier {
  type = "ImportDefaultSpecifier";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get local() {
    const internal = this.#internal;
    return constructBindingIdentifier(internal.pos + 16, internal.ast, this);
  }
  set local(v) {
    defineOwn(this, "local", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "ImportDefaultSpecifier",
      local: this.local,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugImportDefaultSpecifier.prototype);
  }
}

const DebugImportDefaultSpecifier = class ImportDefaultSpecifier {};

export function constructImportDefaultSpecifier(pos, ast, parent) {
  return new ImportDefaultSpecifier(pos, ast, parent);
}

export class ImportNamespaceSpecifier {
  type = "ImportNamespaceSpecifier";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get local() {
    const internal = this.#internal;
    return constructBindingIdentifier(internal.pos + 16, internal.ast, this);
  }
  set local(v) {
    defineOwn(this, "local", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "ImportNamespaceSpecifier",
      local: this.local,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugImportNamespaceSpecifier.prototype);
  }
}

const DebugImportNamespaceSpecifier = class ImportNamespaceSpecifier {};

export function constructImportNamespaceSpecifier(pos, ast, parent) {
  return new ImportNamespaceSpecifier(pos, ast, parent);
}

export function constructWithClause(pos, ast, parent) {
  return { attributes: constructVecImportAttribute(pos + 16, ast, parent) };
}

export class ImportAttribute {
  type = "ImportAttribute";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get key() {
    const internal = this.#internal;
    return constructImportAttributeKey(internal.pos + 16, internal.ast, this);
  }
  set key(v) {
    defineOwn(this, "key", v);
  }

  get value() {
    const internal = this.#internal;
    return constructStringLiteral(internal.pos + 72, internal.ast, this);
  }
  set value(v) {
    defineOwn(this, "value", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "ImportAttribute",
      key: this.key,
      value: this.value,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugImportAttribute.prototype);
  }
}

const DebugImportAttribute = class ImportAttribute {};

export function constructImportAttribute(pos, ast, parent) {
  return new ImportAttribute(pos, ast, parent);
}

export function constructImportAttributeKey(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructIdentifierName(pos + 8, ast, parent);
    case 1:
      return constructStringLiteral(pos + 8, ast, parent);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ImportAttributeKey`);
  }
}

export class ExportDeclaration {
  type = "ExportNamedDeclaration";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $specifiers: void 0, $attributes: void 0 };
    nodes.set(pos, this);
  }

  get declaration() {
    const internal = this.#internal;
    return constructDeclaration(internal.pos + 16, internal.ast, this);
  }
  set declaration(v) {
    defineOwn(this, "declaration", v);
  }

  get specifiers() {
    const internal = this.#internal;
    if (internal.$specifiers !== void 0) return internal.$specifiers;
    return (internal.$specifiers = []);
  }
  set specifiers(v) {
    this.#internal.$specifiers = v;
  }

  get source() {
    return null;
  }
  set source(v) {
    defineOwn(this, "source", v);
  }

  get exportKind() {
    const internal = this.#internal,
      ast = internal.ast,
      pos = internal.pos;

    return this.declaration.declare === true
      || this.declaration.type === "TSTypeAliasDeclaration"
      || this.declaration.type === "TSInterfaceDeclaration"
      ? "type"
      : "value";
  }
  set exportKind(v) {
    defineOwn(this, "exportKind", v);
  }

  get attributes() {
    const internal = this.#internal;
    if (internal.$attributes !== void 0) return internal.$attributes;
    return (internal.$attributes = []);
  }
  set attributes(v) {
    this.#internal.$attributes = v;
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "ExportNamedDeclaration",
      declaration: this.declaration,
      specifiers: this.specifiers,
      source: this.source,
      exportKind: this.exportKind,
      attributes: this.attributes,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugExportDeclaration.prototype);
  }
}

const DebugExportDeclaration = class ExportDeclaration {};

export function constructExportDeclaration(pos, ast, parent) {
  return new ExportDeclaration(pos, ast, parent);
}

export class ExportNamedDeclaration {
  type = "ExportNamedDeclaration";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $specifiers: void 0, $attributes: void 0 };
    nodes.set(pos, this);
  }

  get declaration() {
    return null;
  }
  set declaration(v) {
    defineOwn(this, "declaration", v);
  }

  get specifiers() {
    const internal = this.#internal,
      cached = internal.$specifiers;
    if (cached !== void 0) return cached;
    return (internal.$specifiers = constructVecExportSpecifier(
      internal.pos + 16,
      internal.ast,
      this,
    ));
  }
  set specifiers(v) {
    this.#internal.$specifiers = v;
  }

  get source() {
    return null;
  }
  set source(v) {
    defineOwn(this, "source", v);
  }

  get exportKind() {
    const internal = this.#internal;
    return constructImportOrExportKind(internal.pos + 12, internal.ast, this);
  }
  set exportKind(v) {
    defineOwn(this, "exportKind", v);
  }

  get attributes() {
    const internal = this.#internal;
    if (internal.$attributes !== void 0) return internal.$attributes;
    return (internal.$attributes = []);
  }
  set attributes(v) {
    this.#internal.$attributes = v;
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "ExportNamedDeclaration",
      declaration: this.declaration,
      specifiers: this.specifiers,
      source: this.source,
      exportKind: this.exportKind,
      attributes: this.attributes,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugExportNamedDeclaration.prototype);
  }
}

const DebugExportNamedDeclaration = class ExportNamedDeclaration {};

export function constructExportNamedDeclaration(pos, ast, parent) {
  return new ExportNamedDeclaration(pos, ast, parent);
}

export class ExportFromDeclaration {
  type = "ExportNamedDeclaration";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $specifiers: void 0 };
    nodes.set(pos, this);
  }

  get declaration() {
    return null;
  }
  set declaration(v) {
    defineOwn(this, "declaration", v);
  }

  get specifiers() {
    const internal = this.#internal,
      cached = internal.$specifiers;
    if (cached !== void 0) return cached;
    return (internal.$specifiers = constructVecExportSpecifier(
      internal.pos + 16,
      internal.ast,
      this,
    ));
  }
  set specifiers(v) {
    this.#internal.$specifiers = v;
  }

  get source() {
    const internal = this.#internal;
    return constructStringLiteral(internal.pos + 40, internal.ast, this);
  }
  set source(v) {
    defineOwn(this, "source", v);
  }

  get exportKind() {
    const internal = this.#internal;
    return constructImportOrExportKind(internal.pos + 12, internal.ast, this);
  }
  set exportKind(v) {
    defineOwn(this, "exportKind", v);
  }

  get attributes() {
    const internal = this.#internal,
      ast = internal.ast,
      pos = internal.pos;
    const withClause = constructOptionBoxWithClause(pos + 88, ast, this);
    return withClause === null ? [] : withClause.attributes;
  }
  set attributes(v) {
    defineOwn(this, "attributes", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "ExportNamedDeclaration",
      declaration: this.declaration,
      specifiers: this.specifiers,
      source: this.source,
      exportKind: this.exportKind,
      attributes: this.attributes,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugExportFromDeclaration.prototype);
  }
}

const DebugExportFromDeclaration = class ExportFromDeclaration {};

export function constructExportFromDeclaration(pos, ast, parent) {
  return new ExportFromDeclaration(pos, ast, parent);
}

export class ExportDefaultDeclaration {
  type = "ExportDefaultDeclaration";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get declaration() {
    const internal = this.#internal;
    return constructExportDefaultDeclarationKind(internal.pos + 16, internal.ast, this);
  }
  set declaration(v) {
    defineOwn(this, "declaration", v);
  }

  get exportKind() {
    return "value";
  }
  set exportKind(v) {
    defineOwn(this, "exportKind", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "ExportDefaultDeclaration",
      declaration: this.declaration,
      exportKind: this.exportKind,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugExportDefaultDeclaration.prototype);
  }
}

const DebugExportDefaultDeclaration = class ExportDefaultDeclaration {};

export function constructExportDefaultDeclaration(pos, ast, parent) {
  return new ExportDefaultDeclaration(pos, ast, parent);
}

export class ExportAllDeclaration {
  type = "ExportAllDeclaration";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $attributes: void 0 };
    nodes.set(pos, this);
  }

  get exported() {
    const internal = this.#internal;
    return constructOptionModuleExportName(internal.pos + 16, internal.ast, this);
  }
  set exported(v) {
    defineOwn(this, "exported", v);
  }

  get source() {
    const internal = this.#internal;
    return constructStringLiteral(internal.pos + 72, internal.ast, this);
  }
  set source(v) {
    defineOwn(this, "source", v);
  }

  get exportKind() {
    const internal = this.#internal;
    return constructImportOrExportKind(internal.pos + 12, internal.ast, this);
  }
  set exportKind(v) {
    defineOwn(this, "exportKind", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get attributes() {
    const internal = this.#internal,
      ast = internal.ast,
      pos = internal.pos;
    if (internal.$attributes !== void 0) return internal.$attributes;
    if (ast.buffer.int32[(pos >> 2) + 30] === 0 && ast.buffer.int32[(pos >> 2) + 31] === 0)
      return (internal.$attributes = []);
    const withPos = ast.buffer.int32[(internal.pos + 120) >> 2];
    return (internal.$attributes = [...constructVecImportAttribute(withPos + 16, ast, this)]);
  }
  set attributes(v) {
    this.#internal.$attributes = v;
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "ExportAllDeclaration",
      exported: this.exported,
      source: this.source,
      exportKind: this.exportKind,
      attributes: this.attributes,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugExportAllDeclaration.prototype);
  }
}

const DebugExportAllDeclaration = class ExportAllDeclaration {};

export function constructExportAllDeclaration(pos, ast, parent) {
  return new ExportAllDeclaration(pos, ast, parent);
}

export class ExportSpecifier {
  type = "ExportSpecifier";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get local() {
    const internal = this.#internal;
    return constructModuleExportName(internal.pos + 16, internal.ast, this);
  }
  set local(v) {
    defineOwn(this, "local", v);
  }

  get exported() {
    const internal = this.#internal;
    return constructModuleExportName(internal.pos + 72, internal.ast, this);
  }
  set exported(v) {
    defineOwn(this, "exported", v);
  }

  get exportKind() {
    const internal = this.#internal;
    return constructImportOrExportKind(internal.pos + 12, internal.ast, this);
  }
  set exportKind(v) {
    defineOwn(this, "exportKind", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "ExportSpecifier",
      local: this.local,
      exported: this.exported,
      exportKind: this.exportKind,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugExportSpecifier.prototype);
  }
}

const DebugExportSpecifier = class ExportSpecifier {};

export function constructExportSpecifier(pos, ast, parent) {
  return new ExportSpecifier(pos, ast, parent);
}

export function constructExportDefaultDeclarationKind(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructBoxBooleanLiteral(pos + 8, ast, parent);
    case 1:
      return constructBoxNullLiteral(pos + 8, ast, parent);
    case 2:
      return constructBoxNumericLiteral(pos + 8, ast, parent);
    case 3:
      return constructBoxBigIntLiteral(pos + 8, ast, parent);
    case 4:
      return constructBoxRegExpLiteral(pos + 8, ast, parent);
    case 5:
      return constructBoxStringLiteral(pos + 8, ast, parent);
    case 6:
      return constructBoxTemplateLiteral(pos + 8, ast, parent);
    case 7:
      return constructBoxIdentifierReference(pos + 8, ast, parent);
    case 8:
      return constructBoxSuper(pos + 8, ast, parent);
    case 9:
      return constructBoxArrayExpression(pos + 8, ast, parent);
    case 10:
      return constructBoxArrowFunctionExpression(pos + 8, ast, parent);
    case 11:
      return constructBoxAssignmentExpression(pos + 8, ast, parent);
    case 12:
      return constructBoxAwaitExpression(pos + 8, ast, parent);
    case 13:
      return constructBoxBinaryExpression(pos + 8, ast, parent);
    case 14:
      return constructBoxCallExpression(pos + 8, ast, parent);
    case 15:
      return constructBoxChainExpression(pos + 8, ast, parent);
    case 16:
      return constructBoxClass(pos + 8, ast, parent);
    case 17:
      return constructBoxConditionalExpression(pos + 8, ast, parent);
    case 18:
      return constructBoxFunction(pos + 8, ast, parent);
    case 19:
      return constructBoxImportExpression(pos + 8, ast, parent);
    case 20:
      return constructBoxLogicalExpression(pos + 8, ast, parent);
    case 21:
      return constructBoxNewExpression(pos + 8, ast, parent);
    case 22:
      return constructBoxObjectExpression(pos + 8, ast, parent);
    case 23:
      return constructBoxParenthesizedExpression(pos + 8, ast, parent);
    case 24:
      return constructBoxSequenceExpression(pos + 8, ast, parent);
    case 25:
      return constructBoxTaggedTemplateExpression(pos + 8, ast, parent);
    case 26:
      return constructBoxThisExpression(pos + 8, ast, parent);
    case 27:
      return constructBoxUnaryExpression(pos + 8, ast, parent);
    case 28:
      return constructBoxUpdateExpression(pos + 8, ast, parent);
    case 29:
      return constructBoxYieldExpression(pos + 8, ast, parent);
    case 30:
      return constructBoxPrivateInExpression(pos + 8, ast, parent);
    case 31:
      return constructBoxImportMeta(pos + 8, ast, parent);
    case 32:
      return constructBoxNewTarget(pos + 8, ast, parent);
    case 33:
      return constructBoxJSXElement(pos + 8, ast, parent);
    case 34:
      return constructBoxJSXFragment(pos + 8, ast, parent);
    case 35:
      return constructBoxTSAsExpression(pos + 8, ast, parent);
    case 36:
      return constructBoxTSSatisfiesExpression(pos + 8, ast, parent);
    case 37:
      return constructBoxTSTypeAssertion(pos + 8, ast, parent);
    case 38:
      return constructBoxTSNonNullExpression(pos + 8, ast, parent);
    case 39:
      return constructBoxTSInstantiationExpression(pos + 8, ast, parent);
    case 40:
      return constructBoxV8IntrinsicExpression(pos + 8, ast, parent);
    case 48:
      return constructBoxComputedMemberExpression(pos + 8, ast, parent);
    case 49:
      return constructBoxStaticMemberExpression(pos + 8, ast, parent);
    case 50:
      return constructBoxPrivateFieldExpression(pos + 8, ast, parent);
    case 64:
      return constructBoxFunction(pos + 8, ast, parent);
    case 65:
      return constructBoxClass(pos + 8, ast, parent);
    case 66:
      return constructBoxTSInterfaceDeclaration(pos + 8, ast, parent);
    default:
      throw new Error(
        `Unexpected discriminant ${ast.buffer[pos]} for ExportDefaultDeclarationKind`,
      );
  }
}

export function constructModuleExportName(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructIdentifierName(pos + 8, ast, parent);
    case 1:
      return constructIdentifierReference(pos + 8, ast, parent);
    case 2:
      return constructStringLiteral(pos + 8, ast, parent);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ModuleExportName`);
  }
}

export class V8IntrinsicExpression {
  type = "V8IntrinsicExpression";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $arguments: void 0 };
    nodes.set(pos, this);
  }

  get name() {
    const internal = this.#internal;
    return constructIdentifierName(internal.pos + 16, internal.ast, this);
  }
  set name(v) {
    defineOwn(this, "name", v);
  }

  get arguments() {
    const internal = this.#internal,
      cached = internal.$arguments;
    if (cached !== void 0) return cached;
    return (internal.$arguments = constructVecArgument(internal.pos + 48, internal.ast, this));
  }
  set arguments(v) {
    this.#internal.$arguments = v;
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "V8IntrinsicExpression",
      name: this.name,
      arguments: this.arguments,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugV8IntrinsicExpression.prototype);
  }
}

const DebugV8IntrinsicExpression = class V8IntrinsicExpression {};

export function constructV8IntrinsicExpression(pos, ast, parent) {
  return new V8IntrinsicExpression(pos, ast, parent);
}

export class BooleanLiteral {
  type = "Literal";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get raw() {
    const internal = this.#internal,
      ast = internal.ast,
      pos = internal.pos;

    return this.start === 0 && this.end === 0 ? null : this.value + "";
  }
  set raw(v) {
    defineOwn(this, "raw", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get value() {
    const internal = this.#internal;
    return internal.ast.buffer[internal.pos + 12] === 1;
  }
  set value(v) {
    defineOwn(this, "value", v);
  }

  get raw() {
    return this.start === 0 && this.end === 0 ? null : this.value ? "true" : "false";
  }
  set raw(v) {
    defineOwn(this, "raw", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "Literal",
      raw: this.raw,
      value: this.value,
      raw: this.raw,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugBooleanLiteral.prototype);
  }
}

const DebugBooleanLiteral = class BooleanLiteral {};

export function constructBooleanLiteral(pos, ast, parent) {
  return new BooleanLiteral(pos, ast, parent);
}

export class NullLiteral {
  type = "Literal";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get value() {
    return null;
  }
  set value(v) {
    defineOwn(this, "value", v);
  }

  get raw() {
    const internal = this.#internal,
      ast = internal.ast,
      pos = internal.pos;

    return this.start === 0 && this.end === 0 ? null : "null";
  }
  set raw(v) {
    defineOwn(this, "raw", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get value() {
    return null;
  }
  set value(v) {
    defineOwn(this, "value", v);
  }

  get raw() {
    return this.start === 0 && this.end === 0 ? null : "null";
  }
  set raw(v) {
    defineOwn(this, "raw", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "Literal",
      value: this.value,
      raw: this.raw,
      value: this.value,
      raw: this.raw,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugNullLiteral.prototype);
  }
}

const DebugNullLiteral = class NullLiteral {};

export function constructNullLiteral(pos, ast, parent) {
  return new NullLiteral(pos, ast, parent);
}

export class NumericLiteral {
  type = "Literal";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get value() {
    const internal = this.#internal;
    return constructF64(internal.pos + 32, internal.ast, this);
  }
  set value(v) {
    defineOwn(this, "value", v);
  }

  get raw() {
    const internal = this.#internal,
      ast = internal.ast,
      pos = internal.pos;
    return ast.buffer.int32[(pos >> 2) + 4] === 0 && ast.buffer.int32[(pos >> 2) + 5] === 0
      ? null
      : ast.sourceText.slice(this.start, this.end);
  }
  set raw(v) {
    defineOwn(this, "raw", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "Literal",
      value: this.value,
      raw: this.raw,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugNumericLiteral.prototype);
  }
}

const DebugNumericLiteral = class NumericLiteral {};

export function constructNumericLiteral(pos, ast, parent) {
  return new NumericLiteral(pos, ast, parent);
}

export class StringLiteral {
  type = "Literal";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $value: void 0 };
    nodes.set(pos, this);
  }

  get value() {
    const internal = this.#internal,
      cached = internal.$value;
    if (cached !== void 0) return cached;
    return (internal.$value = constructJSStr(internal.pos + 16, internal.ast, this));
  }
  set value(v) {
    this.#internal.$value = v;
  }

  get raw() {
    const internal = this.#internal,
      ast = internal.ast,
      pos = internal.pos;
    return ast.buffer.int32[(pos >> 2) + 8] === 0 && ast.buffer.int32[(pos >> 2) + 9] === 0
      ? null
      : ast.sourceText.slice(this.start, this.end);
  }
  set raw(v) {
    defineOwn(this, "raw", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "Literal",
      value: this.value,
      raw: this.raw,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugStringLiteral.prototype);
  }
}

const DebugStringLiteral = class StringLiteral {};

export function constructStringLiteral(pos, ast, parent) {
  return new StringLiteral(pos, ast, parent);
}

export class BigIntLiteral {
  type = "Literal";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $bigint: void 0 };
    nodes.set(pos, this);
  }

  get raw() {
    const internal = this.#internal,
      ast = internal.ast,
      pos = internal.pos;
    return ast.buffer.int32[(pos >> 2) + 8] === 0 && ast.buffer.int32[(pos >> 2) + 9] === 0
      ? null
      : ast.sourceText.slice(this.start, this.end);
  }
  set raw(v) {
    defineOwn(this, "raw", v);
  }

  get bigint() {
    return bigint;
  }
  set bigint(v) {
    defineOwn(this, "bigint", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get bigint() {
    const internal = this.#internal;
    if (internal.$bigint !== void 0) return internal.$bigint;
    return (internal.$bigint = constructStr(internal.pos + 16, internal.ast));
  }
  set bigint(v) {
    this.#internal.$bigint = v;
  }

  get value() {
    return BigInt(this.bigint);
  }
  set value(v) {
    defineOwn(this, "value", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "Literal",
      raw: this.raw,
      bigint: this.bigint,
      value: this.value,
      bigint: this.bigint,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugBigIntLiteral.prototype);
  }
}

const DebugBigIntLiteral = class BigIntLiteral {};

export function constructBigIntLiteral(pos, ast, parent) {
  return new BigIntLiteral(pos, ast, parent);
}

export class RegExpLiteral {
  type = "Literal";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $regex: void 0 };
    nodes.set(pos, this);
  }

  get value() {
    const internal = this.#internal,
      ast = internal.ast,
      pos = internal.pos;
    let value = null;
    try {
      value = new RegExp(this.regex.pattern, this.regex.flags);
    } catch (e) {}
    return value;
  }
  set value(v) {
    defineOwn(this, "value", v);
  }

  get raw() {
    const internal = this.#internal,
      ast = internal.ast,
      pos = internal.pos;
    return ast.buffer.int32[(pos >> 2) + 12] === 0 && ast.buffer.int32[(pos >> 2) + 13] === 0
      ? null
      : ast.sourceText.slice(this.start, this.end);
  }
  set raw(v) {
    defineOwn(this, "raw", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get regex() {
    const internal = this.#internal;
    if (internal.$regex !== void 0) return internal.$regex;
    const flagBits = internal.ast.buffer[internal.pos + 40];
    let flags = "";
    // Alphabetical order
    if (flagBits & 64) flags += "d";
    if (flagBits & 1) flags += "g";
    if (flagBits & 2) flags += "i";
    if (flagBits & 4) flags += "m";
    if (flagBits & 8) flags += "s";
    if (flagBits & 16) flags += "u";
    if (flagBits & 128) flags += "v";
    if (flagBits & 32) flags += "y";
    return (internal.$regex = {
      pattern: constructStr(internal.pos + 16, internal.ast),
      flags,
    });
  }
  set regex(v) {
    this.#internal.$regex = v;
  }

  get value() {
    const regex = this.regex;
    try {
      return new RegExp(regex.pattern, regex.flags);
    } catch {
      return null;
    }
  }
  set value(v) {
    defineOwn(this, "value", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "Literal",
      value: this.value,
      raw: this.raw,
      value: this.value,
      regex: this.regex,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugRegExpLiteral.prototype);
  }
}

const DebugRegExpLiteral = class RegExpLiteral {};

export function constructRegExpLiteral(pos, ast, parent) {
  return new RegExpLiteral(pos, ast, parent);
}

export class JSXElement {
  type = "JSXElement";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = {
      pos,
      ast,
      parent,
      $range: void 0,
      $children: void 0,
      $openingElement: void 0,
    };
    nodes.set(pos, this);
  }

  get children() {
    const internal = this.#internal,
      cached = internal.$children;
    if (cached !== void 0) return cached;
    return (internal.$children = constructVecJSXChild(internal.pos + 24, internal.ast, this));
  }
  set children(v) {
    this.#internal.$children = v;
  }

  get closingElement() {
    const internal = this.#internal;
    return constructOptionBoxJSXClosingElement(internal.pos + 48, internal.ast, this);
  }
  set closingElement(v) {
    defineOwn(this, "closingElement", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get openingElement() {
    const internal = this.#internal,
      ast = internal.ast,
      pos = internal.pos;
    if (internal.$openingElement !== void 0) return internal.$openingElement;
    const opening = constructBoxJSXOpeningElement(pos + 16, ast, this);
    if (ast.buffer.int32[(pos >> 2) + 12] === 0 && ast.buffer.int32[(pos >> 2) + 13] === 0)
      opening.selfClosing = true;
    return (internal.$openingElement = opening);
  }
  set openingElement(v) {
    this.#internal.$openingElement = v;
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "JSXElement",
      children: this.children,
      closingElement: this.closingElement,
      openingElement: this.openingElement,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugJSXElement.prototype);
  }
}

const DebugJSXElement = class JSXElement {};

export function constructJSXElement(pos, ast, parent) {
  return new JSXElement(pos, ast, parent);
}

export class JSXOpeningElement {
  type = "JSXOpeningElement";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $attributes: void 0 };
    nodes.set(pos, this);
  }

  get name() {
    const internal = this.#internal;
    return constructJSXElementName(internal.pos + 16, internal.ast, this);
  }
  set name(v) {
    defineOwn(this, "name", v);
  }

  get typeArguments() {
    const internal = this.#internal;
    return constructOptionBoxTSTypeParameterInstantiation(internal.pos + 32, internal.ast, this);
  }
  set typeArguments(v) {
    defineOwn(this, "typeArguments", v);
  }

  get attributes() {
    const internal = this.#internal,
      cached = internal.$attributes;
    if (cached !== void 0) return cached;
    return (internal.$attributes = constructVecJSXAttributeItem(
      internal.pos + 40,
      internal.ast,
      this,
    ));
  }
  set attributes(v) {
    this.#internal.$attributes = v;
  }

  get selfClosing() {
    return false;
  }
  set selfClosing(v) {
    defineOwn(this, "selfClosing", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "JSXOpeningElement",
      name: this.name,
      typeArguments: this.typeArguments,
      attributes: this.attributes,
      selfClosing: this.selfClosing,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugJSXOpeningElement.prototype);
  }
}

const DebugJSXOpeningElement = class JSXOpeningElement {};

export function constructJSXOpeningElement(pos, ast, parent) {
  return new JSXOpeningElement(pos, ast, parent);
}

export class JSXClosingElement {
  type = "JSXClosingElement";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get name() {
    const internal = this.#internal;
    return constructJSXElementName(internal.pos + 16, internal.ast, this);
  }
  set name(v) {
    defineOwn(this, "name", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "JSXClosingElement",
      name: this.name,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugJSXClosingElement.prototype);
  }
}

const DebugJSXClosingElement = class JSXClosingElement {};

export function constructJSXClosingElement(pos, ast, parent) {
  return new JSXClosingElement(pos, ast, parent);
}

export class JSXFragment {
  type = "JSXFragment";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $children: void 0 };
    nodes.set(pos, this);
  }

  get openingFragment() {
    const internal = this.#internal;
    return constructJSXOpeningFragment(internal.pos + 16, internal.ast, this);
  }
  set openingFragment(v) {
    defineOwn(this, "openingFragment", v);
  }

  get children() {
    const internal = this.#internal,
      cached = internal.$children;
    if (cached !== void 0) return cached;
    return (internal.$children = constructVecJSXChild(internal.pos + 32, internal.ast, this));
  }
  set children(v) {
    this.#internal.$children = v;
  }

  get closingFragment() {
    const internal = this.#internal;
    return constructJSXClosingFragment(internal.pos + 56, internal.ast, this);
  }
  set closingFragment(v) {
    defineOwn(this, "closingFragment", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "JSXFragment",
      openingFragment: this.openingFragment,
      children: this.children,
      closingFragment: this.closingFragment,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugJSXFragment.prototype);
  }
}

const DebugJSXFragment = class JSXFragment {};

export function constructJSXFragment(pos, ast, parent) {
  return new JSXFragment(pos, ast, parent);
}

export class JSXOpeningFragment {
  type = "JSXOpeningFragment";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "JSXOpeningFragment",

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugJSXOpeningFragment.prototype);
  }
}

const DebugJSXOpeningFragment = class JSXOpeningFragment {};

export function constructJSXOpeningFragment(pos, ast, parent) {
  return new JSXOpeningFragment(pos, ast, parent);
}

export class JSXClosingFragment {
  type = "JSXClosingFragment";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "JSXClosingFragment",

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugJSXClosingFragment.prototype);
  }
}

const DebugJSXClosingFragment = class JSXClosingFragment {};

export function constructJSXClosingFragment(pos, ast, parent) {
  return new JSXClosingFragment(pos, ast, parent);
}

export function constructJSXElementName(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructBoxJSXIdentifier(pos + 8, ast, parent);

    case 1: {
      const identPos = ast.buffer.int32[(pos + 8) >> 2];
      const cacheKey = identPos + 2;
      const cached = ast.nodes.get(cacheKey);
      if (cached !== void 0) return cached;
      const ident = constructBoxIdentifierReference(pos + 8, ast, null);
      const node = Object.create(NodeProto);
      node.type = "JSXIdentifier";
      node.name = ident.name;
      node.start = ident.start;
      node.end = ident.end;
      node.range = [ident.start, ident.end];
      node.parent = parent;
      ast.nodes.set(cacheKey, node);
      return node;
    }
    case 2:
      return constructBoxJSXNamespacedName(pos + 8, ast, parent);
    case 3:
      return constructBoxJSXMemberExpression(pos + 8, ast, parent);

    case 4: {
      const identPos = ast.buffer.int32[(pos + 8) >> 2];
      const cacheKey = identPos + 2;
      const cached = ast.nodes.get(cacheKey);
      if (cached !== void 0) return cached;
      const ident = constructBoxThisExpression(pos + 8, ast, null);
      const node = Object.create(NodeProto);
      node.type = "JSXIdentifier";
      node.name = "this";
      node.start = ident.start;
      node.end = ident.end;
      node.range = [ident.start, ident.end];
      node.parent = parent;
      ast.nodes.set(cacheKey, node);
      return node;
    }

    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for JSXElementName`);
  }
}

export class JSXNamespacedName {
  type = "JSXNamespacedName";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get namespace() {
    const internal = this.#internal;
    return constructJSXIdentifier(internal.pos + 16, internal.ast, this);
  }
  set namespace(v) {
    defineOwn(this, "namespace", v);
  }

  get name() {
    const internal = this.#internal;
    return constructJSXIdentifier(internal.pos + 48, internal.ast, this);
  }
  set name(v) {
    defineOwn(this, "name", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "JSXNamespacedName",
      namespace: this.namespace,
      name: this.name,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugJSXNamespacedName.prototype);
  }
}

const DebugJSXNamespacedName = class JSXNamespacedName {};

export function constructJSXNamespacedName(pos, ast, parent) {
  return new JSXNamespacedName(pos, ast, parent);
}

export class JSXMemberExpression {
  type = "JSXMemberExpression";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get object() {
    const internal = this.#internal;
    return constructJSXMemberExpressionObject(internal.pos + 16, internal.ast, this);
  }
  set object(v) {
    defineOwn(this, "object", v);
  }

  get property() {
    const internal = this.#internal;
    return constructJSXIdentifier(internal.pos + 32, internal.ast, this);
  }
  set property(v) {
    defineOwn(this, "property", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "JSXMemberExpression",
      object: this.object,
      property: this.property,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugJSXMemberExpression.prototype);
  }
}

const DebugJSXMemberExpression = class JSXMemberExpression {};

export function constructJSXMemberExpression(pos, ast, parent) {
  return new JSXMemberExpression(pos, ast, parent);
}

export function constructJSXMemberExpressionObject(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0: {
      const identPos = ast.buffer.int32[(pos + 8) >> 2];
      const cacheKey = identPos + 2;
      const cached = ast.nodes.get(cacheKey);
      if (cached !== void 0) return cached;
      const ident = constructBoxIdentifierReference(pos + 8, ast, null);
      const node = Object.create(NodeProto);
      node.type = "JSXIdentifier";
      node.name = ident.name;
      node.start = ident.start;
      node.end = ident.end;
      node.range = [ident.start, ident.end];
      node.parent = parent;
      ast.nodes.set(cacheKey, node);
      return node;
    }
    case 1:
      return constructBoxJSXMemberExpression(pos + 8, ast, parent);

    case 2: {
      const identPos = ast.buffer.int32[(pos + 8) >> 2];
      const cacheKey = identPos + 2;
      const cached = ast.nodes.get(cacheKey);
      if (cached !== void 0) return cached;
      const ident = constructBoxThisExpression(pos + 8, ast, null);
      const node = Object.create(NodeProto);
      node.type = "JSXIdentifier";
      node.name = "this";
      node.start = ident.start;
      node.end = ident.end;
      node.range = [ident.start, ident.end];
      node.parent = parent;
      ast.nodes.set(cacheKey, node);
      return node;
    }

    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for JSXMemberExpressionObject`);
  }
}

export class JSXExpressionContainer {
  type = "JSXExpressionContainer";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get expression() {
    const internal = this.#internal;
    return constructJSXExpression(internal.pos + 16, internal.ast, this);
  }
  set expression(v) {
    defineOwn(this, "expression", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "JSXExpressionContainer",
      expression: this.expression,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugJSXExpressionContainer.prototype);
  }
}

const DebugJSXExpressionContainer = class JSXExpressionContainer {};

export function constructJSXExpressionContainer(pos, ast, parent) {
  return new JSXExpressionContainer(pos, ast, parent);
}

export function constructJSXExpression(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructBoxBooleanLiteral(pos + 8, ast, parent);
    case 1:
      return constructBoxNullLiteral(pos + 8, ast, parent);
    case 2:
      return constructBoxNumericLiteral(pos + 8, ast, parent);
    case 3:
      return constructBoxBigIntLiteral(pos + 8, ast, parent);
    case 4:
      return constructBoxRegExpLiteral(pos + 8, ast, parent);
    case 5:
      return constructBoxStringLiteral(pos + 8, ast, parent);
    case 6:
      return constructBoxTemplateLiteral(pos + 8, ast, parent);
    case 7:
      return constructBoxIdentifierReference(pos + 8, ast, parent);
    case 8:
      return constructBoxSuper(pos + 8, ast, parent);
    case 9:
      return constructBoxArrayExpression(pos + 8, ast, parent);
    case 10:
      return constructBoxArrowFunctionExpression(pos + 8, ast, parent);
    case 11:
      return constructBoxAssignmentExpression(pos + 8, ast, parent);
    case 12:
      return constructBoxAwaitExpression(pos + 8, ast, parent);
    case 13:
      return constructBoxBinaryExpression(pos + 8, ast, parent);
    case 14:
      return constructBoxCallExpression(pos + 8, ast, parent);
    case 15:
      return constructBoxChainExpression(pos + 8, ast, parent);
    case 16:
      return constructBoxClass(pos + 8, ast, parent);
    case 17:
      return constructBoxConditionalExpression(pos + 8, ast, parent);
    case 18:
      return constructBoxFunction(pos + 8, ast, parent);
    case 19:
      return constructBoxImportExpression(pos + 8, ast, parent);
    case 20:
      return constructBoxLogicalExpression(pos + 8, ast, parent);
    case 21:
      return constructBoxNewExpression(pos + 8, ast, parent);
    case 22:
      return constructBoxObjectExpression(pos + 8, ast, parent);
    case 23:
      return constructBoxParenthesizedExpression(pos + 8, ast, parent);
    case 24:
      return constructBoxSequenceExpression(pos + 8, ast, parent);
    case 25:
      return constructBoxTaggedTemplateExpression(pos + 8, ast, parent);
    case 26:
      return constructBoxThisExpression(pos + 8, ast, parent);
    case 27:
      return constructBoxUnaryExpression(pos + 8, ast, parent);
    case 28:
      return constructBoxUpdateExpression(pos + 8, ast, parent);
    case 29:
      return constructBoxYieldExpression(pos + 8, ast, parent);
    case 30:
      return constructBoxPrivateInExpression(pos + 8, ast, parent);
    case 31:
      return constructBoxImportMeta(pos + 8, ast, parent);
    case 32:
      return constructBoxNewTarget(pos + 8, ast, parent);
    case 33:
      return constructBoxJSXElement(pos + 8, ast, parent);
    case 34:
      return constructBoxJSXFragment(pos + 8, ast, parent);
    case 35:
      return constructBoxTSAsExpression(pos + 8, ast, parent);
    case 36:
      return constructBoxTSSatisfiesExpression(pos + 8, ast, parent);
    case 37:
      return constructBoxTSTypeAssertion(pos + 8, ast, parent);
    case 38:
      return constructBoxTSNonNullExpression(pos + 8, ast, parent);
    case 39:
      return constructBoxTSInstantiationExpression(pos + 8, ast, parent);
    case 40:
      return constructBoxV8IntrinsicExpression(pos + 8, ast, parent);
    case 48:
      return constructBoxComputedMemberExpression(pos + 8, ast, parent);
    case 49:
      return constructBoxStaticMemberExpression(pos + 8, ast, parent);
    case 50:
      return constructBoxPrivateFieldExpression(pos + 8, ast, parent);
    case 64:
      return constructBoxJSXEmptyExpression(pos + 8, ast, parent);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for JSXExpression`);
  }
}

export class JSXEmptyExpression {
  type = "JSXEmptyExpression";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "JSXEmptyExpression",

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugJSXEmptyExpression.prototype);
  }
}

const DebugJSXEmptyExpression = class JSXEmptyExpression {};

export function constructJSXEmptyExpression(pos, ast, parent) {
  return new JSXEmptyExpression(pos, ast, parent);
}

export function constructJSXAttributeItem(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructBoxJSXAttribute(pos + 8, ast, parent);
    case 1:
      return constructBoxJSXSpreadAttribute(pos + 8, ast, parent);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for JSXAttributeItem`);
  }
}

export class JSXAttribute {
  type = "JSXAttribute";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get name() {
    const internal = this.#internal;
    return constructJSXAttributeName(internal.pos + 16, internal.ast, this);
  }
  set name(v) {
    defineOwn(this, "name", v);
  }

  get value() {
    const internal = this.#internal;
    return constructOptionJSXAttributeValue(internal.pos + 32, internal.ast, this);
  }
  set value(v) {
    defineOwn(this, "value", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "JSXAttribute",
      name: this.name,
      value: this.value,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugJSXAttribute.prototype);
  }
}

const DebugJSXAttribute = class JSXAttribute {};

export function constructJSXAttribute(pos, ast, parent) {
  return new JSXAttribute(pos, ast, parent);
}

export class JSXSpreadAttribute {
  type = "JSXSpreadAttribute";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get argument() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 16, internal.ast, this);
  }
  set argument(v) {
    defineOwn(this, "argument", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "JSXSpreadAttribute",
      argument: this.argument,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugJSXSpreadAttribute.prototype);
  }
}

const DebugJSXSpreadAttribute = class JSXSpreadAttribute {};

export function constructJSXSpreadAttribute(pos, ast, parent) {
  return new JSXSpreadAttribute(pos, ast, parent);
}

export function constructJSXAttributeName(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructBoxJSXIdentifier(pos + 8, ast, parent);
    case 1:
      return constructBoxJSXNamespacedName(pos + 8, ast, parent);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for JSXAttributeName`);
  }
}

export function constructJSXAttributeValue(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructBoxStringLiteral(pos + 8, ast, parent);
    case 1:
      return constructBoxJSXExpressionContainer(pos + 8, ast, parent);
    case 2:
      return constructBoxJSXElement(pos + 8, ast, parent);
    case 3:
      return constructBoxJSXFragment(pos + 8, ast, parent);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for JSXAttributeValue`);
  }
}

export class JSXIdentifier {
  type = "JSXIdentifier";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $name: void 0 };
    nodes.set(pos, this);
  }

  get name() {
    const internal = this.#internal,
      cached = internal.$name;
    if (cached !== void 0) return cached;
    return (internal.$name = constructStr(internal.pos + 16, internal.ast, this));
  }
  set name(v) {
    this.#internal.$name = v;
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "JSXIdentifier",
      name: this.name,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugJSXIdentifier.prototype);
  }
}

const DebugJSXIdentifier = class JSXIdentifier {};

export function constructJSXIdentifier(pos, ast, parent) {
  return new JSXIdentifier(pos, ast, parent);
}

export function constructJSXChild(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructBoxJSXText(pos + 8, ast, parent);
    case 1:
      return constructBoxJSXElement(pos + 8, ast, parent);
    case 2:
      return constructBoxJSXFragment(pos + 8, ast, parent);
    case 3:
      return constructBoxJSXExpressionContainer(pos + 8, ast, parent);
    case 4:
      return constructBoxJSXSpreadChild(pos + 8, ast, parent);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for JSXChild`);
  }
}

export class JSXSpreadChild {
  type = "JSXSpreadChild";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get expression() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 16, internal.ast, this);
  }
  set expression(v) {
    defineOwn(this, "expression", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "JSXSpreadChild",
      expression: this.expression,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugJSXSpreadChild.prototype);
  }
}

const DebugJSXSpreadChild = class JSXSpreadChild {};

export function constructJSXSpreadChild(pos, ast, parent) {
  return new JSXSpreadChild(pos, ast, parent);
}

export class JSXText {
  type = "JSXText";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $value: void 0 };
    nodes.set(pos, this);
  }

  get value() {
    const internal = this.#internal,
      cached = internal.$value;
    if (cached !== void 0) return cached;
    return (internal.$value = constructStr(internal.pos + 16, internal.ast, this));
  }
  set value(v) {
    this.#internal.$value = v;
  }

  get raw() {
    const internal = this.#internal,
      ast = internal.ast,
      pos = internal.pos;
    return ast.buffer.int32[(pos >> 2) + 8] === 0 && ast.buffer.int32[(pos >> 2) + 9] === 0
      ? null
      : ast.sourceText.slice(this.start, this.end);
  }
  set raw(v) {
    defineOwn(this, "raw", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "JSXText",
      value: this.value,
      raw: this.raw,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugJSXText.prototype);
  }
}

const DebugJSXText = class JSXText {};

export function constructJSXText(pos, ast, parent) {
  return new JSXText(pos, ast, parent);
}

export class TSThisParameter {
  type = "Identifier";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $decorators: void 0 };
    nodes.set(pos, this);
  }

  get decorators() {
    const internal = this.#internal;
    if (internal.$decorators !== void 0) return internal.$decorators;
    return (internal.$decorators = []);
  }
  set decorators(v) {
    this.#internal.$decorators = v;
  }

  get name() {
    return "this";
  }
  set name(v) {
    defineOwn(this, "name", v);
  }

  get optional() {
    return false;
  }
  set optional(v) {
    defineOwn(this, "optional", v);
  }

  get typeAnnotation() {
    const internal = this.#internal;
    return constructOptionBoxTSTypeAnnotation(internal.pos + 24, internal.ast, this);
  }
  set typeAnnotation(v) {
    defineOwn(this, "typeAnnotation", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "Identifier",
      decorators: this.decorators,
      name: this.name,
      optional: this.optional,
      typeAnnotation: this.typeAnnotation,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSThisParameter.prototype);
  }
}

const DebugTSThisParameter = class TSThisParameter {};

export function constructTSThisParameter(pos, ast, parent) {
  return new TSThisParameter(pos, ast, parent);
}

export class TSEnumDeclaration {
  type = "TSEnumDeclaration";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get id() {
    const internal = this.#internal;
    return constructBindingIdentifier(internal.pos + 16, internal.ast, this);
  }
  set id(v) {
    defineOwn(this, "id", v);
  }

  get body() {
    const internal = this.#internal;
    return constructTSEnumBody(internal.pos + 48, internal.ast, this);
  }
  set body(v) {
    defineOwn(this, "body", v);
  }

  get const() {
    const internal = this.#internal;
    return constructBool(internal.pos + 12, internal.ast, this);
  }
  set const(v) {
    defineOwn(this, "const", v);
  }

  get declare() {
    const internal = this.#internal;
    return constructBool(internal.pos + 13, internal.ast, this);
  }
  set declare(v) {
    defineOwn(this, "declare", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSEnumDeclaration",
      id: this.id,
      body: this.body,
      const: this.const,
      declare: this.declare,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSEnumDeclaration.prototype);
  }
}

const DebugTSEnumDeclaration = class TSEnumDeclaration {};

export function constructTSEnumDeclaration(pos, ast, parent) {
  return new TSEnumDeclaration(pos, ast, parent);
}

export class TSEnumBody {
  type = "TSEnumBody";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $members: void 0 };
    nodes.set(pos, this);
  }

  get members() {
    const internal = this.#internal,
      cached = internal.$members;
    if (cached !== void 0) return cached;
    return (internal.$members = constructVecTSEnumMember(internal.pos + 16, internal.ast, this));
  }
  set members(v) {
    this.#internal.$members = v;
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSEnumBody",
      members: this.members,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSEnumBody.prototype);
  }
}

const DebugTSEnumBody = class TSEnumBody {};

export function constructTSEnumBody(pos, ast, parent) {
  return new TSEnumBody(pos, ast, parent);
}

export class TSEnumMember {
  type = "TSEnumMember";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get id() {
    const internal = this.#internal;
    return constructTSEnumMemberName(internal.pos + 16, internal.ast, this);
  }
  set id(v) {
    defineOwn(this, "id", v);
  }

  get initializer() {
    const internal = this.#internal;
    return constructOptionExpression(internal.pos + 32, internal.ast, this);
  }
  set initializer(v) {
    defineOwn(this, "initializer", v);
  }

  get computed() {
    const internal = this.#internal,
      ast = internal.ast,
      pos = internal.pos;

    return constructU8(pos + 16, ast, this) > 1;
  }
  set computed(v) {
    defineOwn(this, "computed", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSEnumMember",
      id: this.id,
      initializer: this.initializer,
      computed: this.computed,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSEnumMember.prototype);
  }
}

const DebugTSEnumMember = class TSEnumMember {};

export function constructTSEnumMember(pos, ast, parent) {
  return new TSEnumMember(pos, ast, parent);
}

export function constructTSEnumMemberName(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructBoxIdentifierName(pos + 8, ast, parent);
    case 1:
      return constructBoxStringLiteral(pos + 8, ast, parent);
    case 2:
      return constructBoxStringLiteral(pos + 8, ast, parent);
    case 3:
      return constructBoxTemplateLiteral(pos + 8, ast, parent);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSEnumMemberName`);
  }
}

export class TSTypeAnnotation {
  type = "TSTypeAnnotation";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get typeAnnotation() {
    const internal = this.#internal;
    return constructTSType(internal.pos + 16, internal.ast, this);
  }
  set typeAnnotation(v) {
    defineOwn(this, "typeAnnotation", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSTypeAnnotation",
      typeAnnotation: this.typeAnnotation,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSTypeAnnotation.prototype);
  }
}

const DebugTSTypeAnnotation = class TSTypeAnnotation {};

export function constructTSTypeAnnotation(pos, ast, parent) {
  return new TSTypeAnnotation(pos, ast, parent);
}

export class TSLiteralType {
  type = "TSLiteralType";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get literal() {
    const internal = this.#internal;
    return constructTSLiteral(internal.pos + 16, internal.ast, this);
  }
  set literal(v) {
    defineOwn(this, "literal", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSLiteralType",
      literal: this.literal,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSLiteralType.prototype);
  }
}

const DebugTSLiteralType = class TSLiteralType {};

export function constructTSLiteralType(pos, ast, parent) {
  return new TSLiteralType(pos, ast, parent);
}

export function constructTSLiteral(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructBoxBooleanLiteral(pos + 8, ast, parent);
    case 1:
      return constructBoxNumericLiteral(pos + 8, ast, parent);
    case 2:
      return constructBoxBigIntLiteral(pos + 8, ast, parent);
    case 3:
      return constructBoxStringLiteral(pos + 8, ast, parent);
    case 4:
      return constructBoxTemplateLiteral(pos + 8, ast, parent);
    case 5:
      return constructBoxUnaryExpression(pos + 8, ast, parent);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSLiteral`);
  }
}

export function constructTSType(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructBoxTSAnyKeyword(pos + 8, ast, parent);
    case 1:
      return constructBoxTSBigIntKeyword(pos + 8, ast, parent);
    case 2:
      return constructBoxTSBooleanKeyword(pos + 8, ast, parent);
    case 3:
      return constructBoxTSIntrinsicKeyword(pos + 8, ast, parent);
    case 4:
      return constructBoxTSNeverKeyword(pos + 8, ast, parent);
    case 5:
      return constructBoxTSNullKeyword(pos + 8, ast, parent);
    case 6:
      return constructBoxTSNumberKeyword(pos + 8, ast, parent);
    case 7:
      return constructBoxTSObjectKeyword(pos + 8, ast, parent);
    case 8:
      return constructBoxTSStringKeyword(pos + 8, ast, parent);
    case 9:
      return constructBoxTSSymbolKeyword(pos + 8, ast, parent);
    case 10:
      return constructBoxTSThisType(pos + 8, ast, parent);
    case 11:
      return constructBoxTSUndefinedKeyword(pos + 8, ast, parent);
    case 12:
      return constructBoxTSUnknownKeyword(pos + 8, ast, parent);
    case 13:
      return constructBoxTSVoidKeyword(pos + 8, ast, parent);
    case 14:
      return constructBoxTSArrayType(pos + 8, ast, parent);
    case 15:
      return constructBoxTSConditionalType(pos + 8, ast, parent);
    case 16:
      return constructBoxTSConstructorType(pos + 8, ast, parent);
    case 17:
      return constructBoxTSFunctionType(pos + 8, ast, parent);
    case 18:
      return constructBoxTSImportType(pos + 8, ast, parent);
    case 19:
      return constructBoxTSIndexedAccessType(pos + 8, ast, parent);
    case 20:
      return constructBoxTSInferType(pos + 8, ast, parent);
    case 21:
      return constructBoxTSIntersectionType(pos + 8, ast, parent);
    case 22:
      return constructBoxTSLiteralType(pos + 8, ast, parent);
    case 23:
      return constructBoxTSMappedType(pos + 8, ast, parent);
    case 24:
      return constructBoxTSNamedTupleMember(pos + 8, ast, parent);
    case 26:
      return constructBoxTSTemplateLiteralType(pos + 8, ast, parent);
    case 27:
      return constructBoxTSTupleType(pos + 8, ast, parent);
    case 28:
      return constructBoxTSTypeLiteral(pos + 8, ast, parent);
    case 29:
      return constructBoxTSTypeOperator(pos + 8, ast, parent);
    case 30:
      return constructBoxTSTypePredicate(pos + 8, ast, parent);
    case 31:
      return constructBoxTSTypeQuery(pos + 8, ast, parent);
    case 32:
      return constructBoxTSTypeReference(pos + 8, ast, parent);
    case 33:
      return constructBoxTSUnionType(pos + 8, ast, parent);
    case 34:
      return constructBoxTSParenthesizedType(pos + 8, ast, parent);
    case 35:
      return constructBoxJSDocNullableType(pos + 8, ast, parent);
    case 36:
      return constructBoxJSDocNonNullableType(pos + 8, ast, parent);
    case 37:
      return constructBoxJSDocUnknownType(pos + 8, ast, parent);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSType`);
  }
}

export class TSConditionalType {
  type = "TSConditionalType";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get checkType() {
    const internal = this.#internal;
    return constructTSType(internal.pos + 16, internal.ast, this);
  }
  set checkType(v) {
    defineOwn(this, "checkType", v);
  }

  get extendsType() {
    const internal = this.#internal;
    return constructTSType(internal.pos + 32, internal.ast, this);
  }
  set extendsType(v) {
    defineOwn(this, "extendsType", v);
  }

  get trueType() {
    const internal = this.#internal;
    return constructTSType(internal.pos + 48, internal.ast, this);
  }
  set trueType(v) {
    defineOwn(this, "trueType", v);
  }

  get falseType() {
    const internal = this.#internal;
    return constructTSType(internal.pos + 64, internal.ast, this);
  }
  set falseType(v) {
    defineOwn(this, "falseType", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSConditionalType",
      checkType: this.checkType,
      extendsType: this.extendsType,
      trueType: this.trueType,
      falseType: this.falseType,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSConditionalType.prototype);
  }
}

const DebugTSConditionalType = class TSConditionalType {};

export function constructTSConditionalType(pos, ast, parent) {
  return new TSConditionalType(pos, ast, parent);
}

export class TSUnionType {
  type = "TSUnionType";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $types: void 0 };
    nodes.set(pos, this);
  }

  get types() {
    const internal = this.#internal,
      cached = internal.$types;
    if (cached !== void 0) return cached;
    return (internal.$types = constructVecTSType(internal.pos + 16, internal.ast, this));
  }
  set types(v) {
    this.#internal.$types = v;
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSUnionType",
      types: this.types,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSUnionType.prototype);
  }
}

const DebugTSUnionType = class TSUnionType {};

export function constructTSUnionType(pos, ast, parent) {
  return new TSUnionType(pos, ast, parent);
}

export class TSIntersectionType {
  type = "TSIntersectionType";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $types: void 0 };
    nodes.set(pos, this);
  }

  get types() {
    const internal = this.#internal,
      cached = internal.$types;
    if (cached !== void 0) return cached;
    return (internal.$types = constructVecTSType(internal.pos + 16, internal.ast, this));
  }
  set types(v) {
    this.#internal.$types = v;
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSIntersectionType",
      types: this.types,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSIntersectionType.prototype);
  }
}

const DebugTSIntersectionType = class TSIntersectionType {};

export function constructTSIntersectionType(pos, ast, parent) {
  return new TSIntersectionType(pos, ast, parent);
}

export function constructTSParenthesizedType(pos, ast, parent) {
  return constructTSType(pos + 16, ast, parent);
}

export class TSTypeOperator {
  type = "TSTypeOperator";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get operator() {
    const internal = this.#internal;
    return constructTSTypeOperatorOperator(internal.pos + 12, internal.ast, this);
  }
  set operator(v) {
    defineOwn(this, "operator", v);
  }

  get typeAnnotation() {
    const internal = this.#internal;
    return constructTSType(internal.pos + 16, internal.ast, this);
  }
  set typeAnnotation(v) {
    defineOwn(this, "typeAnnotation", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSTypeOperator",
      operator: this.operator,
      typeAnnotation: this.typeAnnotation,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSTypeOperator.prototype);
  }
}

const DebugTSTypeOperator = class TSTypeOperator {};

export function constructTSTypeOperator(pos, ast, parent) {
  return new TSTypeOperator(pos, ast, parent);
}

export function constructTSTypeOperatorOperator(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return "keyof";
    case 1:
      return "unique";
    case 2:
      return "readonly";
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSTypeOperatorOperator`);
  }
}

export class TSArrayType {
  type = "TSArrayType";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get elementType() {
    const internal = this.#internal;
    return constructTSType(internal.pos + 16, internal.ast, this);
  }
  set elementType(v) {
    defineOwn(this, "elementType", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSArrayType",
      elementType: this.elementType,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSArrayType.prototype);
  }
}

const DebugTSArrayType = class TSArrayType {};

export function constructTSArrayType(pos, ast, parent) {
  return new TSArrayType(pos, ast, parent);
}

export class TSIndexedAccessType {
  type = "TSIndexedAccessType";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get objectType() {
    const internal = this.#internal;
    return constructTSType(internal.pos + 16, internal.ast, this);
  }
  set objectType(v) {
    defineOwn(this, "objectType", v);
  }

  get indexType() {
    const internal = this.#internal;
    return constructTSType(internal.pos + 32, internal.ast, this);
  }
  set indexType(v) {
    defineOwn(this, "indexType", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSIndexedAccessType",
      objectType: this.objectType,
      indexType: this.indexType,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSIndexedAccessType.prototype);
  }
}

const DebugTSIndexedAccessType = class TSIndexedAccessType {};

export function constructTSIndexedAccessType(pos, ast, parent) {
  return new TSIndexedAccessType(pos, ast, parent);
}

export class TSTupleType {
  type = "TSTupleType";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $elementTypes: void 0 };
    nodes.set(pos, this);
  }

  get elementTypes() {
    const internal = this.#internal,
      cached = internal.$elementTypes;
    if (cached !== void 0) return cached;
    return (internal.$elementTypes = constructVecTSTupleElement(
      internal.pos + 16,
      internal.ast,
      this,
    ));
  }
  set elementTypes(v) {
    this.#internal.$elementTypes = v;
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSTupleType",
      elementTypes: this.elementTypes,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSTupleType.prototype);
  }
}

const DebugTSTupleType = class TSTupleType {};

export function constructTSTupleType(pos, ast, parent) {
  return new TSTupleType(pos, ast, parent);
}

export class TSNamedTupleMember {
  type = "TSNamedTupleMember";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get label() {
    const internal = this.#internal;
    return constructIdentifierName(internal.pos + 16, internal.ast, this);
  }
  set label(v) {
    defineOwn(this, "label", v);
  }

  get elementType() {
    const internal = this.#internal;
    return constructTSTupleElement(internal.pos + 48, internal.ast, this);
  }
  set elementType(v) {
    defineOwn(this, "elementType", v);
  }

  get optional() {
    const internal = this.#internal;
    return constructBool(internal.pos + 12, internal.ast, this);
  }
  set optional(v) {
    defineOwn(this, "optional", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSNamedTupleMember",
      label: this.label,
      elementType: this.elementType,
      optional: this.optional,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSNamedTupleMember.prototype);
  }
}

const DebugTSNamedTupleMember = class TSNamedTupleMember {};

export function constructTSNamedTupleMember(pos, ast, parent) {
  return new TSNamedTupleMember(pos, ast, parent);
}

export class TSOptionalType {
  type = "TSOptionalType";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get typeAnnotation() {
    const internal = this.#internal;
    return constructTSType(internal.pos + 16, internal.ast, this);
  }
  set typeAnnotation(v) {
    defineOwn(this, "typeAnnotation", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSOptionalType",
      typeAnnotation: this.typeAnnotation,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSOptionalType.prototype);
  }
}

const DebugTSOptionalType = class TSOptionalType {};

export function constructTSOptionalType(pos, ast, parent) {
  return new TSOptionalType(pos, ast, parent);
}

export class TSRestType {
  type = "TSRestType";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get typeAnnotation() {
    const internal = this.#internal;
    return constructTSType(internal.pos + 16, internal.ast, this);
  }
  set typeAnnotation(v) {
    defineOwn(this, "typeAnnotation", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSRestType",
      typeAnnotation: this.typeAnnotation,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSRestType.prototype);
  }
}

const DebugTSRestType = class TSRestType {};

export function constructTSRestType(pos, ast, parent) {
  return new TSRestType(pos, ast, parent);
}

export function constructTSTupleElement(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructBoxTSAnyKeyword(pos + 8, ast, parent);
    case 1:
      return constructBoxTSBigIntKeyword(pos + 8, ast, parent);
    case 2:
      return constructBoxTSBooleanKeyword(pos + 8, ast, parent);
    case 3:
      return constructBoxTSIntrinsicKeyword(pos + 8, ast, parent);
    case 4:
      return constructBoxTSNeverKeyword(pos + 8, ast, parent);
    case 5:
      return constructBoxTSNullKeyword(pos + 8, ast, parent);
    case 6:
      return constructBoxTSNumberKeyword(pos + 8, ast, parent);
    case 7:
      return constructBoxTSObjectKeyword(pos + 8, ast, parent);
    case 8:
      return constructBoxTSStringKeyword(pos + 8, ast, parent);
    case 9:
      return constructBoxTSSymbolKeyword(pos + 8, ast, parent);
    case 10:
      return constructBoxTSThisType(pos + 8, ast, parent);
    case 11:
      return constructBoxTSUndefinedKeyword(pos + 8, ast, parent);
    case 12:
      return constructBoxTSUnknownKeyword(pos + 8, ast, parent);
    case 13:
      return constructBoxTSVoidKeyword(pos + 8, ast, parent);
    case 14:
      return constructBoxTSArrayType(pos + 8, ast, parent);
    case 15:
      return constructBoxTSConditionalType(pos + 8, ast, parent);
    case 16:
      return constructBoxTSConstructorType(pos + 8, ast, parent);
    case 17:
      return constructBoxTSFunctionType(pos + 8, ast, parent);
    case 18:
      return constructBoxTSImportType(pos + 8, ast, parent);
    case 19:
      return constructBoxTSIndexedAccessType(pos + 8, ast, parent);
    case 20:
      return constructBoxTSInferType(pos + 8, ast, parent);
    case 21:
      return constructBoxTSIntersectionType(pos + 8, ast, parent);
    case 22:
      return constructBoxTSLiteralType(pos + 8, ast, parent);
    case 23:
      return constructBoxTSMappedType(pos + 8, ast, parent);
    case 24:
      return constructBoxTSNamedTupleMember(pos + 8, ast, parent);
    case 26:
      return constructBoxTSTemplateLiteralType(pos + 8, ast, parent);
    case 27:
      return constructBoxTSTupleType(pos + 8, ast, parent);
    case 28:
      return constructBoxTSTypeLiteral(pos + 8, ast, parent);
    case 29:
      return constructBoxTSTypeOperator(pos + 8, ast, parent);
    case 30:
      return constructBoxTSTypePredicate(pos + 8, ast, parent);
    case 31:
      return constructBoxTSTypeQuery(pos + 8, ast, parent);
    case 32:
      return constructBoxTSTypeReference(pos + 8, ast, parent);
    case 33:
      return constructBoxTSUnionType(pos + 8, ast, parent);
    case 34:
      return constructBoxTSParenthesizedType(pos + 8, ast, parent);
    case 35:
      return constructBoxJSDocNullableType(pos + 8, ast, parent);
    case 36:
      return constructBoxJSDocNonNullableType(pos + 8, ast, parent);
    case 37:
      return constructBoxJSDocUnknownType(pos + 8, ast, parent);
    case 64:
      return constructBoxTSOptionalType(pos + 8, ast, parent);
    case 65:
      return constructBoxTSRestType(pos + 8, ast, parent);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSTupleElement`);
  }
}

export class TSAnyKeyword {
  type = "TSAnyKeyword";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSAnyKeyword",

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSAnyKeyword.prototype);
  }
}

const DebugTSAnyKeyword = class TSAnyKeyword {};

export function constructTSAnyKeyword(pos, ast, parent) {
  return new TSAnyKeyword(pos, ast, parent);
}

export class TSStringKeyword {
  type = "TSStringKeyword";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSStringKeyword",

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSStringKeyword.prototype);
  }
}

const DebugTSStringKeyword = class TSStringKeyword {};

export function constructTSStringKeyword(pos, ast, parent) {
  return new TSStringKeyword(pos, ast, parent);
}

export class TSBooleanKeyword {
  type = "TSBooleanKeyword";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSBooleanKeyword",

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSBooleanKeyword.prototype);
  }
}

const DebugTSBooleanKeyword = class TSBooleanKeyword {};

export function constructTSBooleanKeyword(pos, ast, parent) {
  return new TSBooleanKeyword(pos, ast, parent);
}

export class TSNumberKeyword {
  type = "TSNumberKeyword";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSNumberKeyword",

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSNumberKeyword.prototype);
  }
}

const DebugTSNumberKeyword = class TSNumberKeyword {};

export function constructTSNumberKeyword(pos, ast, parent) {
  return new TSNumberKeyword(pos, ast, parent);
}

export class TSNeverKeyword {
  type = "TSNeverKeyword";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSNeverKeyword",

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSNeverKeyword.prototype);
  }
}

const DebugTSNeverKeyword = class TSNeverKeyword {};

export function constructTSNeverKeyword(pos, ast, parent) {
  return new TSNeverKeyword(pos, ast, parent);
}

export class TSIntrinsicKeyword {
  type = "TSIntrinsicKeyword";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSIntrinsicKeyword",

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSIntrinsicKeyword.prototype);
  }
}

const DebugTSIntrinsicKeyword = class TSIntrinsicKeyword {};

export function constructTSIntrinsicKeyword(pos, ast, parent) {
  return new TSIntrinsicKeyword(pos, ast, parent);
}

export class TSUnknownKeyword {
  type = "TSUnknownKeyword";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSUnknownKeyword",

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSUnknownKeyword.prototype);
  }
}

const DebugTSUnknownKeyword = class TSUnknownKeyword {};

export function constructTSUnknownKeyword(pos, ast, parent) {
  return new TSUnknownKeyword(pos, ast, parent);
}

export class TSNullKeyword {
  type = "TSNullKeyword";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSNullKeyword",

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSNullKeyword.prototype);
  }
}

const DebugTSNullKeyword = class TSNullKeyword {};

export function constructTSNullKeyword(pos, ast, parent) {
  return new TSNullKeyword(pos, ast, parent);
}

export class TSUndefinedKeyword {
  type = "TSUndefinedKeyword";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSUndefinedKeyword",

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSUndefinedKeyword.prototype);
  }
}

const DebugTSUndefinedKeyword = class TSUndefinedKeyword {};

export function constructTSUndefinedKeyword(pos, ast, parent) {
  return new TSUndefinedKeyword(pos, ast, parent);
}

export class TSVoidKeyword {
  type = "TSVoidKeyword";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSVoidKeyword",

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSVoidKeyword.prototype);
  }
}

const DebugTSVoidKeyword = class TSVoidKeyword {};

export function constructTSVoidKeyword(pos, ast, parent) {
  return new TSVoidKeyword(pos, ast, parent);
}

export class TSSymbolKeyword {
  type = "TSSymbolKeyword";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSSymbolKeyword",

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSSymbolKeyword.prototype);
  }
}

const DebugTSSymbolKeyword = class TSSymbolKeyword {};

export function constructTSSymbolKeyword(pos, ast, parent) {
  return new TSSymbolKeyword(pos, ast, parent);
}

export class TSThisType {
  type = "TSThisType";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSThisType",

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSThisType.prototype);
  }
}

const DebugTSThisType = class TSThisType {};

export function constructTSThisType(pos, ast, parent) {
  return new TSThisType(pos, ast, parent);
}

export class TSObjectKeyword {
  type = "TSObjectKeyword";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSObjectKeyword",

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSObjectKeyword.prototype);
  }
}

const DebugTSObjectKeyword = class TSObjectKeyword {};

export function constructTSObjectKeyword(pos, ast, parent) {
  return new TSObjectKeyword(pos, ast, parent);
}

export class TSBigIntKeyword {
  type = "TSBigIntKeyword";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSBigIntKeyword",

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSBigIntKeyword.prototype);
  }
}

const DebugTSBigIntKeyword = class TSBigIntKeyword {};

export function constructTSBigIntKeyword(pos, ast, parent) {
  return new TSBigIntKeyword(pos, ast, parent);
}

export class TSTypeReference {
  type = "TSTypeReference";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get typeName() {
    const internal = this.#internal;
    return constructTSTypeName(internal.pos + 16, internal.ast, this);
  }
  set typeName(v) {
    defineOwn(this, "typeName", v);
  }

  get typeArguments() {
    const internal = this.#internal;
    return constructOptionBoxTSTypeParameterInstantiation(internal.pos + 32, internal.ast, this);
  }
  set typeArguments(v) {
    defineOwn(this, "typeArguments", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSTypeReference",
      typeName: this.typeName,
      typeArguments: this.typeArguments,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSTypeReference.prototype);
  }
}

const DebugTSTypeReference = class TSTypeReference {};

export function constructTSTypeReference(pos, ast, parent) {
  return new TSTypeReference(pos, ast, parent);
}

export function constructTSTypeName(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructBoxIdentifierReference(pos + 8, ast, parent);
    case 1:
      return constructBoxTSQualifiedName(pos + 8, ast, parent);
    case 2:
      return constructBoxThisExpression(pos + 8, ast, parent);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSTypeName`);
  }
}

export class TSQualifiedName {
  type = "TSQualifiedName";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get left() {
    const internal = this.#internal;
    return constructTSTypeName(internal.pos + 16, internal.ast, this);
  }
  set left(v) {
    defineOwn(this, "left", v);
  }

  get right() {
    const internal = this.#internal;
    return constructIdentifierName(internal.pos + 32, internal.ast, this);
  }
  set right(v) {
    defineOwn(this, "right", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSQualifiedName",
      left: this.left,
      right: this.right,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSQualifiedName.prototype);
  }
}

const DebugTSQualifiedName = class TSQualifiedName {};

export function constructTSQualifiedName(pos, ast, parent) {
  return new TSQualifiedName(pos, ast, parent);
}

export class TSTypeParameterInstantiation {
  type = "TSTypeParameterInstantiation";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $params: void 0 };
    nodes.set(pos, this);
  }

  get params() {
    const internal = this.#internal,
      cached = internal.$params;
    if (cached !== void 0) return cached;
    return (internal.$params = constructVecTSType(internal.pos + 16, internal.ast, this));
  }
  set params(v) {
    this.#internal.$params = v;
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSTypeParameterInstantiation",
      params: this.params,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSTypeParameterInstantiation.prototype);
  }
}

const DebugTSTypeParameterInstantiation = class TSTypeParameterInstantiation {};

export function constructTSTypeParameterInstantiation(pos, ast, parent) {
  return new TSTypeParameterInstantiation(pos, ast, parent);
}

export class TSTypeParameter {
  type = "TSTypeParameter";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get name() {
    const internal = this.#internal;
    return constructBindingIdentifier(internal.pos + 16, internal.ast, this);
  }
  set name(v) {
    defineOwn(this, "name", v);
  }

  get constraint() {
    const internal = this.#internal;
    return constructOptionTSType(internal.pos + 48, internal.ast, this);
  }
  set constraint(v) {
    defineOwn(this, "constraint", v);
  }

  get default() {
    const internal = this.#internal;
    return constructOptionTSType(internal.pos + 64, internal.ast, this);
  }
  set default(v) {
    defineOwn(this, "default", v);
  }

  get in() {
    const internal = this.#internal;
    return constructBool(internal.pos + 12, internal.ast, this);
  }
  set in(v) {
    defineOwn(this, "in", v);
  }

  get out() {
    const internal = this.#internal;
    return constructBool(internal.pos + 13, internal.ast, this);
  }
  set out(v) {
    defineOwn(this, "out", v);
  }

  get const() {
    const internal = this.#internal;
    return constructBool(internal.pos + 14, internal.ast, this);
  }
  set const(v) {
    defineOwn(this, "const", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSTypeParameter",
      name: this.name,
      constraint: this.constraint,
      default: this.default,
      in: this.in,
      out: this.out,
      const: this.const,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSTypeParameter.prototype);
  }
}

const DebugTSTypeParameter = class TSTypeParameter {};

export function constructTSTypeParameter(pos, ast, parent) {
  return new TSTypeParameter(pos, ast, parent);
}

export class TSTypeParameterDeclaration {
  type = "TSTypeParameterDeclaration";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $params: void 0 };
    nodes.set(pos, this);
  }

  get params() {
    const internal = this.#internal,
      cached = internal.$params;
    if (cached !== void 0) return cached;
    return (internal.$params = constructVecTSTypeParameter(internal.pos + 16, internal.ast, this));
  }
  set params(v) {
    this.#internal.$params = v;
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSTypeParameterDeclaration",
      params: this.params,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSTypeParameterDeclaration.prototype);
  }
}

const DebugTSTypeParameterDeclaration = class TSTypeParameterDeclaration {};

export function constructTSTypeParameterDeclaration(pos, ast, parent) {
  return new TSTypeParameterDeclaration(pos, ast, parent);
}

export class TSTypeAliasDeclaration {
  type = "TSTypeAliasDeclaration";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get id() {
    const internal = this.#internal;
    return constructBindingIdentifier(internal.pos + 16, internal.ast, this);
  }
  set id(v) {
    defineOwn(this, "id", v);
  }

  get typeParameters() {
    const internal = this.#internal;
    return constructOptionBoxTSTypeParameterDeclaration(internal.pos + 48, internal.ast, this);
  }
  set typeParameters(v) {
    defineOwn(this, "typeParameters", v);
  }

  get typeAnnotation() {
    const internal = this.#internal;
    return constructTSType(internal.pos + 56, internal.ast, this);
  }
  set typeAnnotation(v) {
    defineOwn(this, "typeAnnotation", v);
  }

  get declare() {
    const internal = this.#internal;
    return constructBool(internal.pos + 72, internal.ast, this);
  }
  set declare(v) {
    defineOwn(this, "declare", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSTypeAliasDeclaration",
      id: this.id,
      typeParameters: this.typeParameters,
      typeAnnotation: this.typeAnnotation,
      declare: this.declare,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSTypeAliasDeclaration.prototype);
  }
}

const DebugTSTypeAliasDeclaration = class TSTypeAliasDeclaration {};

export function constructTSTypeAliasDeclaration(pos, ast, parent) {
  return new TSTypeAliasDeclaration(pos, ast, parent);
}

export function constructTSAccessibility(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return "private";
    case 1:
      return "protected";
    case 2:
      return "public";
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSAccessibility`);
  }
}

export function constructTSClassImplements(pos, ast, parent) {
  const cached = ast.nodes.get(pos);
  if (cached !== void 0) return cached;
  const start = ast.buffer.int32[(pos + 0) >> 2],
    end = ast.buffer.int32[(pos + 0 + 4) >> 2];
  const node = Object.create(NodeProto);
  node.type = "TSClassImplements";
  node.expression = null;
  node.typeArguments = null;
  node.start = start;
  node.end = end;
  node.range = [start, end];
  node.parent = parent;
  ast.nodes.set(pos, node);
  let expression = constructTSTypeName(pos + 16, ast, node);
  if (expression.type === "TSQualifiedName") {
    let object = expression.left;
    const right = expression.right;
    const outerStart = expression.start,
      outerEnd = expression.end;
    let previous = Object.create(NodeProto);
    previous.type = "MemberExpression";
    previous.object = object;
    previous.property = right;
    previous.optional = false;
    previous.computed = false;
    previous.start = outerStart;
    previous.end = outerEnd;
    previous.range = [outerStart, outerEnd];
    previous.parent = node;
    expression = previous;
    right.parent = previous;
    for (;;) {
      if (object.type !== "TSQualifiedName") {
        object.parent = previous;
        break;
      }
      const innerLeft = object.left,
        innerRight = object.right;
      const innerStart = object.start,
        innerEnd = object.end;
      const member = Object.create(NodeProto);
      member.type = "MemberExpression";
      member.object = innerLeft;
      member.property = innerRight;
      member.optional = false;
      member.computed = false;
      member.start = innerStart;
      member.end = innerEnd;
      member.range = [innerStart, innerEnd];
      member.parent = previous;
      previous.object = member;
      previous = member;
      innerRight.parent = previous;
      object = innerLeft;
    }
  }
  node.expression = expression;
  node.typeArguments = constructOptionBoxTSTypeParameterInstantiation(pos + 32, ast, node);
  return node;
}

export class TSInterfaceDeclaration {
  type = "TSInterfaceDeclaration";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $extends: void 0 };
    nodes.set(pos, this);
  }

  get id() {
    const internal = this.#internal;
    return constructBindingIdentifier(internal.pos + 16, internal.ast, this);
  }
  set id(v) {
    defineOwn(this, "id", v);
  }

  get typeParameters() {
    const internal = this.#internal;
    return constructOptionBoxTSTypeParameterDeclaration(internal.pos + 48, internal.ast, this);
  }
  set typeParameters(v) {
    defineOwn(this, "typeParameters", v);
  }

  get extends() {
    const internal = this.#internal,
      cached = internal.$extends;
    if (cached !== void 0) return cached;
    return (internal.$extends = constructVecTSInterfaceHeritage(
      internal.pos + 56,
      internal.ast,
      this,
    ));
  }
  set extends(v) {
    this.#internal.$extends = v;
  }

  get body() {
    const internal = this.#internal;
    return constructBoxTSInterfaceBody(internal.pos + 80, internal.ast, this);
  }
  set body(v) {
    defineOwn(this, "body", v);
  }

  get declare() {
    const internal = this.#internal;
    return constructBool(internal.pos + 88, internal.ast, this);
  }
  set declare(v) {
    defineOwn(this, "declare", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSInterfaceDeclaration",
      id: this.id,
      typeParameters: this.typeParameters,
      extends: this.extends,
      body: this.body,
      declare: this.declare,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSInterfaceDeclaration.prototype);
  }
}

const DebugTSInterfaceDeclaration = class TSInterfaceDeclaration {};

export function constructTSInterfaceDeclaration(pos, ast, parent) {
  return new TSInterfaceDeclaration(pos, ast, parent);
}

export class TSInterfaceBody {
  type = "TSInterfaceBody";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $body: void 0 };
    nodes.set(pos, this);
  }

  get body() {
    const internal = this.#internal,
      cached = internal.$body;
    if (cached !== void 0) return cached;
    return (internal.$body = constructVecTSSignature(internal.pos + 16, internal.ast, this));
  }
  set body(v) {
    this.#internal.$body = v;
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSInterfaceBody",
      body: this.body,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSInterfaceBody.prototype);
  }
}

const DebugTSInterfaceBody = class TSInterfaceBody {};

export function constructTSInterfaceBody(pos, ast, parent) {
  return new TSInterfaceBody(pos, ast, parent);
}

export class TSPropertySignature {
  type = "TSPropertySignature";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get computed() {
    const internal = this.#internal,
      ast = internal.ast,
      pos = internal.pos;

    return ast.buffer[pos + 16] < 64;
  }
  set computed(v) {
    defineOwn(this, "computed", v);
  }

  get optional() {
    const internal = this.#internal;
    return constructBool(internal.pos + 12, internal.ast, this);
  }
  set optional(v) {
    defineOwn(this, "optional", v);
  }

  get readonly() {
    const internal = this.#internal;
    return constructBool(internal.pos + 13, internal.ast, this);
  }
  set readonly(v) {
    defineOwn(this, "readonly", v);
  }

  get key() {
    const internal = this.#internal;
    return constructPropertyKey(internal.pos + 16, internal.ast, this);
  }
  set key(v) {
    defineOwn(this, "key", v);
  }

  get typeAnnotation() {
    const internal = this.#internal;
    return constructOptionBoxTSTypeAnnotation(internal.pos + 32, internal.ast, this);
  }
  set typeAnnotation(v) {
    defineOwn(this, "typeAnnotation", v);
  }

  get accessibility() {
    return null;
  }
  set accessibility(v) {
    defineOwn(this, "accessibility", v);
  }

  get static() {
    return false;
  }
  set static(v) {
    defineOwn(this, "static", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSPropertySignature",
      computed: this.computed,
      optional: this.optional,
      readonly: this.readonly,
      key: this.key,
      typeAnnotation: this.typeAnnotation,
      accessibility: this.accessibility,
      static: this.static,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSPropertySignature.prototype);
  }
}

const DebugTSPropertySignature = class TSPropertySignature {};

export function constructTSPropertySignature(pos, ast, parent) {
  return new TSPropertySignature(pos, ast, parent);
}

export function constructTSSignature(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructBoxTSIndexSignature(pos + 8, ast, parent);
    case 1:
      return constructBoxTSPropertySignature(pos + 8, ast, parent);
    case 2:
      return constructBoxTSCallSignatureDeclaration(pos + 8, ast, parent);
    case 3:
      return constructBoxTSConstructSignatureDeclaration(pos + 8, ast, parent);
    case 4:
      return constructBoxTSMethodSignature(pos + 8, ast, parent);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSSignature`);
  }
}

export class TSIndexSignature {
  type = "TSIndexSignature";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $parameters: void 0 };
    nodes.set(pos, this);
  }

  get typeAnnotation() {
    const internal = this.#internal;
    return constructBoxTSTypeAnnotation(internal.pos + 56, internal.ast, this);
  }
  set typeAnnotation(v) {
    defineOwn(this, "typeAnnotation", v);
  }

  get readonly() {
    const internal = this.#internal;
    return constructBool(internal.pos + 12, internal.ast, this);
  }
  set readonly(v) {
    defineOwn(this, "readonly", v);
  }

  get static() {
    const internal = this.#internal;
    return constructBool(internal.pos + 13, internal.ast, this);
  }
  set static(v) {
    defineOwn(this, "static", v);
  }

  get accessibility() {
    return null;
  }
  set accessibility(v) {
    defineOwn(this, "accessibility", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get parameters() {
    const internal = this.#internal;
    if (internal.$parameters !== void 0) return internal.$parameters;
    return (internal.$parameters = [
      constructTSIndexSignatureName(internal.pos + 16, internal.ast, this),
    ]);
  }
  set parameters(v) {
    this.#internal.$parameters = v;
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSIndexSignature",
      typeAnnotation: this.typeAnnotation,
      readonly: this.readonly,
      static: this.static,
      accessibility: this.accessibility,
      parameters: this.parameters,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSIndexSignature.prototype);
  }
}

const DebugTSIndexSignature = class TSIndexSignature {};

export function constructTSIndexSignature(pos, ast, parent) {
  return new TSIndexSignature(pos, ast, parent);
}

export class TSCallSignatureDeclaration {
  type = "TSCallSignatureDeclaration";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $params: void 0 };
    nodes.set(pos, this);
  }

  get typeParameters() {
    const internal = this.#internal;
    return constructOptionBoxTSTypeParameterDeclaration(internal.pos + 16, internal.ast, this);
  }
  set typeParameters(v) {
    defineOwn(this, "typeParameters", v);
  }

  get returnType() {
    const internal = this.#internal;
    return constructOptionBoxTSTypeAnnotation(internal.pos + 40, internal.ast, this);
  }
  set returnType(v) {
    defineOwn(this, "returnType", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get params() {
    const internal = this.#internal;
    if (internal.$params !== void 0) return internal.$params;
    const params = constructBoxFormalParameters(internal.pos + 32, internal.ast, this);
    const thisParam = constructOptionBoxTSThisParameter(internal.pos + 24, internal.ast, this);
    if (thisParam !== null) params.unshift(thisParam);
    return (internal.$params = params);
  }
  set params(v) {
    this.#internal.$params = v;
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSCallSignatureDeclaration",
      typeParameters: this.typeParameters,
      returnType: this.returnType,
      params: this.params,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSCallSignatureDeclaration.prototype);
  }
}

const DebugTSCallSignatureDeclaration = class TSCallSignatureDeclaration {};

export function constructTSCallSignatureDeclaration(pos, ast, parent) {
  return new TSCallSignatureDeclaration(pos, ast, parent);
}

export function constructTSMethodSignatureKind(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return "method";
    case 1:
      return "get";
    case 2:
      return "set";
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSMethodSignatureKind`);
  }
}

export class TSMethodSignature {
  type = "TSMethodSignature";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $params: void 0 };
    nodes.set(pos, this);
  }

  get key() {
    const internal = this.#internal;
    return constructPropertyKey(internal.pos + 16, internal.ast, this);
  }
  set key(v) {
    defineOwn(this, "key", v);
  }

  get computed() {
    const internal = this.#internal,
      ast = internal.ast,
      pos = internal.pos;

    return ast.buffer[pos + 16] < 64;
  }
  set computed(v) {
    defineOwn(this, "computed", v);
  }

  get optional() {
    const internal = this.#internal;
    return constructBool(internal.pos + 64, internal.ast, this);
  }
  set optional(v) {
    defineOwn(this, "optional", v);
  }

  get kind() {
    const internal = this.#internal;
    return constructTSMethodSignatureKind(internal.pos + 65, internal.ast, this);
  }
  set kind(v) {
    defineOwn(this, "kind", v);
  }

  get typeParameters() {
    const internal = this.#internal;
    return constructOptionBoxTSTypeParameterDeclaration(internal.pos + 32, internal.ast, this);
  }
  set typeParameters(v) {
    defineOwn(this, "typeParameters", v);
  }

  get returnType() {
    const internal = this.#internal;
    return constructOptionBoxTSTypeAnnotation(internal.pos + 56, internal.ast, this);
  }
  set returnType(v) {
    defineOwn(this, "returnType", v);
  }

  get accessibility() {
    return null;
  }
  set accessibility(v) {
    defineOwn(this, "accessibility", v);
  }

  get readonly() {
    return false;
  }
  set readonly(v) {
    defineOwn(this, "readonly", v);
  }

  get static() {
    return false;
  }
  set static(v) {
    defineOwn(this, "static", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get params() {
    const internal = this.#internal;
    if (internal.$params !== void 0) return internal.$params;
    const params = constructBoxFormalParameters(internal.pos + 48, internal.ast, this);
    const thisParam = constructOptionBoxTSThisParameter(internal.pos + 40, internal.ast, this);
    if (thisParam !== null) params.unshift(thisParam);
    return (internal.$params = params);
  }
  set params(v) {
    this.#internal.$params = v;
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSMethodSignature",
      key: this.key,
      computed: this.computed,
      optional: this.optional,
      kind: this.kind,
      typeParameters: this.typeParameters,
      returnType: this.returnType,
      accessibility: this.accessibility,
      readonly: this.readonly,
      static: this.static,
      params: this.params,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSMethodSignature.prototype);
  }
}

const DebugTSMethodSignature = class TSMethodSignature {};

export function constructTSMethodSignature(pos, ast, parent) {
  return new TSMethodSignature(pos, ast, parent);
}

export class TSConstructSignatureDeclaration {
  type = "TSConstructSignatureDeclaration";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $params: void 0 };
    nodes.set(pos, this);
  }

  get typeParameters() {
    const internal = this.#internal;
    return constructOptionBoxTSTypeParameterDeclaration(internal.pos + 16, internal.ast, this);
  }
  set typeParameters(v) {
    defineOwn(this, "typeParameters", v);
  }

  get params() {
    const internal = this.#internal,
      cached = internal.$params;
    if (cached !== void 0) return cached;
    return (internal.$params = constructBoxFormalParameters(internal.pos + 24, internal.ast, this));
  }
  set params(v) {
    this.#internal.$params = v;
  }

  get returnType() {
    const internal = this.#internal;
    return constructOptionBoxTSTypeAnnotation(internal.pos + 32, internal.ast, this);
  }
  set returnType(v) {
    defineOwn(this, "returnType", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSConstructSignatureDeclaration",
      typeParameters: this.typeParameters,
      params: this.params,
      returnType: this.returnType,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSConstructSignatureDeclaration.prototype);
  }
}

const DebugTSConstructSignatureDeclaration = class TSConstructSignatureDeclaration {};

export function constructTSConstructSignatureDeclaration(pos, ast, parent) {
  return new TSConstructSignatureDeclaration(pos, ast, parent);
}

export class TSIndexSignatureName {
  type = "Identifier";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $decorators: void 0, $name: void 0 };
    nodes.set(pos, this);
  }

  get decorators() {
    const internal = this.#internal;
    if (internal.$decorators !== void 0) return internal.$decorators;
    return (internal.$decorators = []);
  }
  set decorators(v) {
    this.#internal.$decorators = v;
  }

  get name() {
    const internal = this.#internal,
      cached = internal.$name;
    if (cached !== void 0) return cached;
    return (internal.$name = constructStr(internal.pos + 16, internal.ast, this));
  }
  set name(v) {
    this.#internal.$name = v;
  }

  get optional() {
    return false;
  }
  set optional(v) {
    defineOwn(this, "optional", v);
  }

  get typeAnnotation() {
    const internal = this.#internal;
    return constructBoxTSTypeAnnotation(internal.pos + 32, internal.ast, this);
  }
  set typeAnnotation(v) {
    defineOwn(this, "typeAnnotation", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "Identifier",
      decorators: this.decorators,
      name: this.name,
      optional: this.optional,
      typeAnnotation: this.typeAnnotation,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSIndexSignatureName.prototype);
  }
}

const DebugTSIndexSignatureName = class TSIndexSignatureName {};

export function constructTSIndexSignatureName(pos, ast, parent) {
  return new TSIndexSignatureName(pos, ast, parent);
}

export function constructTSInterfaceHeritage(pos, ast, parent) {
  const cached = ast.nodes.get(pos);
  if (cached !== void 0) return cached;
  const start = ast.buffer.int32[(pos + 0) >> 2],
    end = ast.buffer.int32[(pos + 0 + 4) >> 2];
  const node = Object.create(NodeProto);
  node.type = "TSInterfaceHeritage";
  node.expression = null;
  node.typeArguments = null;
  node.start = start;
  node.end = end;
  node.range = [start, end];
  node.parent = parent;
  ast.nodes.set(pos, node);
  let expression = constructTSTypeName(pos + 16, ast, node);
  if (expression.type === "TSQualifiedName") {
    let object = expression.left;
    const right = expression.right;
    const outerStart = expression.start,
      outerEnd = expression.end;
    let previous = Object.create(NodeProto);
    previous.type = "MemberExpression";
    previous.object = object;
    previous.property = right;
    previous.optional = false;
    previous.computed = false;
    previous.start = outerStart;
    previous.end = outerEnd;
    previous.range = [outerStart, outerEnd];
    previous.parent = node;
    expression = previous;
    right.parent = previous;
    for (;;) {
      if (object.type !== "TSQualifiedName") {
        object.parent = previous;
        break;
      }
      const innerLeft = object.left,
        innerRight = object.right;
      const innerStart = object.start,
        innerEnd = object.end;
      const member = Object.create(NodeProto);
      member.type = "MemberExpression";
      member.object = innerLeft;
      member.property = innerRight;
      member.optional = false;
      member.computed = false;
      member.start = innerStart;
      member.end = innerEnd;
      member.range = [innerStart, innerEnd];
      member.parent = previous;
      previous.object = member;
      previous = member;
      innerRight.parent = previous;
      object = innerLeft;
    }
  }
  node.expression = expression;
  node.typeArguments = constructOptionBoxTSTypeParameterInstantiation(pos + 32, ast, node);
  return node;
}

export class TSTypePredicate {
  type = "TSTypePredicate";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get parameterName() {
    const internal = this.#internal;
    return constructTSTypePredicateName(internal.pos + 16, internal.ast, this);
  }
  set parameterName(v) {
    defineOwn(this, "parameterName", v);
  }

  get asserts() {
    const internal = this.#internal;
    return constructBool(internal.pos + 12, internal.ast, this);
  }
  set asserts(v) {
    defineOwn(this, "asserts", v);
  }

  get typeAnnotation() {
    const internal = this.#internal;
    return constructOptionBoxTSTypeAnnotation(internal.pos + 32, internal.ast, this);
  }
  set typeAnnotation(v) {
    defineOwn(this, "typeAnnotation", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSTypePredicate",
      parameterName: this.parameterName,
      asserts: this.asserts,
      typeAnnotation: this.typeAnnotation,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSTypePredicate.prototype);
  }
}

const DebugTSTypePredicate = class TSTypePredicate {};

export function constructTSTypePredicate(pos, ast, parent) {
  return new TSTypePredicate(pos, ast, parent);
}

export function constructTSTypePredicateName(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructBoxIdentifierName(pos + 8, ast, parent);
    case 1:
      return constructBoxTSThisType(pos + 8, ast, parent);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSTypePredicateName`);
  }
}

export function constructTSExternalModuleDeclaration(pos, ast, parent) {
  const cached = ast.nodes.get(pos);
  if (cached !== void 0) return cached;
  const start = ast.buffer.int32[(pos + 0) >> 2],
    end = ast.buffer.int32[(pos + 0 + 4) >> 2];
  const node = Object.create(NodeProto);
  node.type = "TSModuleDeclaration";
  node.id = null;
  const body = constructOptionBoxTSModuleBlock(pos + 64, ast, null);
  if (body !== null) node.body = body;
  node.kind = "module";
  node.declare = ast.buffer[pos + 72] === 1;
  node.global = false;
  node.start = start;
  node.end = end;
  node.range = [start, end];
  node.parent = parent;
  ast.nodes.set(pos, node);
  node.id = constructStringLiteral(pos + 16, ast, node);
  if (body !== null) body.parent = node;
  return node;
}

export function constructTSNamespaceDeclaration(pos, ast, parent) {
  const cached = ast.nodes.get(pos);
  if (cached !== void 0) return cached;
  const start = ast.buffer.int32[(pos + 0) >> 2],
    end = ast.buffer.int32[(pos + 0 + 4) >> 2];
  const node = Object.create(NodeProto);
  node.type = "TSModuleDeclaration";
  node.id = null;
  node.body = null;
  node.kind = constructTSNamespaceDeclarationKind(pos + 64, ast);
  node.declare = ast.buffer[pos + 65] === 1;
  node.global = false;
  node.start = start;
  node.end = end;
  node.range = [start, end];
  node.parent = parent;
  ast.nodes.set(pos, node);
  let body = constructTSNamespaceDeclarationBody(pos + 48, ast, node);
  const id = constructBindingIdentifier(pos + 16, ast, node);
  if (body.type === "TSModuleBlock") {
    node.id = id;
    node.body = body;
    body.parent = node;
  } else {
    let innerId = body.id;
    if (innerId.type === "Identifier") {
      const qStart = id.start,
        qEnd = innerId.end;
      const outerId = Object.create(NodeProto);
      outerId.type = "TSQualifiedName";
      outerId.left = id;
      outerId.right = innerId;
      outerId.start = qStart;
      outerId.end = qEnd;
      outerId.range = [qStart, qEnd];
      outerId.parent = node;
      node.id = outerId;
      id.parent = outerId;
      innerId.parent = outerId;
    } else {
      node.id = innerId;
      innerId.parent = node;
      const qStart = id.start;
      for (;;) {
        innerId.start = qStart;
        innerId.range[0] = qStart;
        if (innerId.left.type === "Identifier") break;
        innerId = innerId.left;
      }
      const right = innerId.left;
      const inner = Object.create(NodeProto);
      inner.type = "TSQualifiedName";
      inner.left = id;
      inner.right = right;
      inner.start = qStart;
      inner.end = right.end;
      inner.range = [qStart, right.end];
      inner.parent = innerId;
      innerId.left = inner;
      id.parent = inner;
      right.parent = inner;
    }
    body = body.body;
    node.body = body;
    if (body != null) body.parent = node;
  }
  return node;
}

export function constructTSNamespaceDeclarationKind(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return "module";
    case 1:
      return "namespace";
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSNamespaceDeclarationKind`);
  }
}

export function constructTSNamespaceDeclarationBody(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructBoxTSNamespaceDeclaration(pos + 8, ast, parent);
    case 1:
      return constructBoxTSModuleBlock(pos + 8, ast, parent);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSNamespaceDeclarationBody`);
  }
}

export function constructTSGlobalDeclaration(pos, ast, parent) {
  const cached = ast.nodes.get(pos);
  if (cached !== void 0) return cached;
  const start = ast.buffer.int32[(pos + 0) >> 2],
    end = ast.buffer.int32[(pos + 0 + 4) >> 2];
  const node = Object.create(NodeProto);
  node.type = "TSModuleDeclaration";
  node.id = null;
  node.body = null;
  node.kind = "global";
  node.declare = ast.buffer[pos + 88] === 1;
  node.global = true;
  node.start = start;
  node.end = end;
  node.range = [start, end];
  node.parent = parent;
  ast.nodes.set(pos, node);
  const keywordStart = ast.buffer.int32[(pos + 16) >> 2],
    keywordEnd = ast.buffer.int32[(pos + 16 + 4) >> 2];
  const id = Object.create(NodeProto);
  id.type = "Identifier";
  id.decorators = [];
  id.name = "global";
  id.optional = false;
  id.typeAnnotation = null;
  id.start = keywordStart;
  id.end = keywordEnd;
  id.range = [keywordStart, keywordEnd];
  id.parent = node;
  node.id = id;
  node.body = constructTSModuleBlock(pos + 24, ast, node);
  return node;
}

export class TSModuleBlock {
  type = "TSModuleBlock";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $body: void 0 };
    nodes.set(pos, this);
  }

  get body() {
    const internal = this.#internal;
    if (internal.$body !== void 0) return internal.$body;
    const arr = [];
    arr.push(...constructVecDirective(internal.pos + 16, internal.ast, this));
    arr.push(...constructVecStatement(internal.pos + 40, internal.ast, this));

    return (internal.$body = arr);
  }
  set body(v) {
    this.#internal.$body = v;
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSModuleBlock",
      body: this.body,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSModuleBlock.prototype);
  }
}

const DebugTSModuleBlock = class TSModuleBlock {};

export function constructTSModuleBlock(pos, ast, parent) {
  return new TSModuleBlock(pos, ast, parent);
}

export class TSTypeLiteral {
  type = "TSTypeLiteral";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $members: void 0 };
    nodes.set(pos, this);
  }

  get members() {
    const internal = this.#internal,
      cached = internal.$members;
    if (cached !== void 0) return cached;
    return (internal.$members = constructVecTSSignature(internal.pos + 16, internal.ast, this));
  }
  set members(v) {
    this.#internal.$members = v;
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSTypeLiteral",
      members: this.members,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSTypeLiteral.prototype);
  }
}

const DebugTSTypeLiteral = class TSTypeLiteral {};

export function constructTSTypeLiteral(pos, ast, parent) {
  return new TSTypeLiteral(pos, ast, parent);
}

export class TSInferType {
  type = "TSInferType";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get typeParameter() {
    const internal = this.#internal;
    return constructBoxTSTypeParameter(internal.pos + 16, internal.ast, this);
  }
  set typeParameter(v) {
    defineOwn(this, "typeParameter", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSInferType",
      typeParameter: this.typeParameter,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSInferType.prototype);
  }
}

const DebugTSInferType = class TSInferType {};

export function constructTSInferType(pos, ast, parent) {
  return new TSInferType(pos, ast, parent);
}

export class TSTypeQuery {
  type = "TSTypeQuery";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get exprName() {
    const internal = this.#internal;
    return constructTSTypeQueryExprName(internal.pos + 16, internal.ast, this);
  }
  set exprName(v) {
    defineOwn(this, "exprName", v);
  }

  get typeArguments() {
    const internal = this.#internal;
    return constructOptionBoxTSTypeParameterInstantiation(internal.pos + 32, internal.ast, this);
  }
  set typeArguments(v) {
    defineOwn(this, "typeArguments", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSTypeQuery",
      exprName: this.exprName,
      typeArguments: this.typeArguments,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSTypeQuery.prototype);
  }
}

const DebugTSTypeQuery = class TSTypeQuery {};

export function constructTSTypeQuery(pos, ast, parent) {
  return new TSTypeQuery(pos, ast, parent);
}

export function constructTSTypeQueryExprName(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructBoxIdentifierReference(pos + 8, ast, parent);
    case 1:
      return constructBoxTSQualifiedName(pos + 8, ast, parent);
    case 2:
      return constructBoxThisExpression(pos + 8, ast, parent);
    case 3:
      return constructBoxTSImportType(pos + 8, ast, parent);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSTypeQueryExprName`);
  }
}

export class TSImportType {
  type = "TSImportType";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get source() {
    const internal = this.#internal;
    return constructStringLiteral(internal.pos + 16, internal.ast, this);
  }
  set source(v) {
    defineOwn(this, "source", v);
  }

  get options() {
    const internal = this.#internal;
    return constructOptionBoxObjectExpression(internal.pos + 64, internal.ast, this);
  }
  set options(v) {
    defineOwn(this, "options", v);
  }

  get qualifier() {
    const internal = this.#internal;
    return constructOptionTSImportTypeQualifier(internal.pos + 72, internal.ast, this);
  }
  set qualifier(v) {
    defineOwn(this, "qualifier", v);
  }

  get typeArguments() {
    const internal = this.#internal;
    return constructOptionBoxTSTypeParameterInstantiation(internal.pos + 88, internal.ast, this);
  }
  set typeArguments(v) {
    defineOwn(this, "typeArguments", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSImportType",
      source: this.source,
      options: this.options,
      qualifier: this.qualifier,
      typeArguments: this.typeArguments,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSImportType.prototype);
  }
}

const DebugTSImportType = class TSImportType {};

export function constructTSImportType(pos, ast, parent) {
  return new TSImportType(pos, ast, parent);
}

export function constructTSImportTypeQualifier(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructBoxIdentifierName(pos + 8, ast, parent);
    case 1:
      return constructBoxTSImportTypeQualifiedName(pos + 8, ast, parent);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSImportTypeQualifier`);
  }
}

export class TSImportTypeQualifiedName {
  type = "TSQualifiedName";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get left() {
    const internal = this.#internal;
    return constructTSImportTypeQualifier(internal.pos + 16, internal.ast, this);
  }
  set left(v) {
    defineOwn(this, "left", v);
  }

  get right() {
    const internal = this.#internal;
    return constructIdentifierName(internal.pos + 32, internal.ast, this);
  }
  set right(v) {
    defineOwn(this, "right", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSQualifiedName",
      left: this.left,
      right: this.right,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSImportTypeQualifiedName.prototype);
  }
}

const DebugTSImportTypeQualifiedName = class TSImportTypeQualifiedName {};

export function constructTSImportTypeQualifiedName(pos, ast, parent) {
  return new TSImportTypeQualifiedName(pos, ast, parent);
}

export class TSFunctionType {
  type = "TSFunctionType";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $params: void 0 };
    nodes.set(pos, this);
  }

  get typeParameters() {
    const internal = this.#internal;
    return constructOptionBoxTSTypeParameterDeclaration(internal.pos + 16, internal.ast, this);
  }
  set typeParameters(v) {
    defineOwn(this, "typeParameters", v);
  }

  get returnType() {
    const internal = this.#internal;
    return constructBoxTSTypeAnnotation(internal.pos + 40, internal.ast, this);
  }
  set returnType(v) {
    defineOwn(this, "returnType", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get params() {
    const internal = this.#internal;
    if (internal.$params !== void 0) return internal.$params;
    const params = constructBoxFormalParameters(internal.pos + 32, internal.ast, this);
    const thisParam = constructOptionBoxTSThisParameter(internal.pos + 24, internal.ast, this);
    if (thisParam !== null) params.unshift(thisParam);
    return (internal.$params = params);
  }
  set params(v) {
    this.#internal.$params = v;
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSFunctionType",
      typeParameters: this.typeParameters,
      returnType: this.returnType,
      params: this.params,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSFunctionType.prototype);
  }
}

const DebugTSFunctionType = class TSFunctionType {};

export function constructTSFunctionType(pos, ast, parent) {
  return new TSFunctionType(pos, ast, parent);
}

export class TSConstructorType {
  type = "TSConstructorType";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $params: void 0 };
    nodes.set(pos, this);
  }

  get abstract() {
    const internal = this.#internal;
    return constructBool(internal.pos + 40, internal.ast, this);
  }
  set abstract(v) {
    defineOwn(this, "abstract", v);
  }

  get typeParameters() {
    const internal = this.#internal;
    return constructOptionBoxTSTypeParameterDeclaration(internal.pos + 16, internal.ast, this);
  }
  set typeParameters(v) {
    defineOwn(this, "typeParameters", v);
  }

  get params() {
    const internal = this.#internal,
      cached = internal.$params;
    if (cached !== void 0) return cached;
    return (internal.$params = constructBoxFormalParameters(internal.pos + 24, internal.ast, this));
  }
  set params(v) {
    this.#internal.$params = v;
  }

  get returnType() {
    const internal = this.#internal;
    return constructBoxTSTypeAnnotation(internal.pos + 32, internal.ast, this);
  }
  set returnType(v) {
    defineOwn(this, "returnType", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSConstructorType",
      abstract: this.abstract,
      typeParameters: this.typeParameters,
      params: this.params,
      returnType: this.returnType,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSConstructorType.prototype);
  }
}

const DebugTSConstructorType = class TSConstructorType {};

export function constructTSConstructorType(pos, ast, parent) {
  return new TSConstructorType(pos, ast, parent);
}

export class TSMappedType {
  type = "TSMappedType";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get key() {
    const internal = this.#internal;
    return constructBindingIdentifier(internal.pos + 16, internal.ast, this);
  }
  set key(v) {
    defineOwn(this, "key", v);
  }

  get constraint() {
    const internal = this.#internal;
    return constructTSType(internal.pos + 48, internal.ast, this);
  }
  set constraint(v) {
    defineOwn(this, "constraint", v);
  }

  get nameType() {
    const internal = this.#internal;
    return constructOptionTSType(internal.pos + 64, internal.ast, this);
  }
  set nameType(v) {
    defineOwn(this, "nameType", v);
  }

  get typeAnnotation() {
    const internal = this.#internal;
    return constructOptionTSType(internal.pos + 80, internal.ast, this);
  }
  set typeAnnotation(v) {
    defineOwn(this, "typeAnnotation", v);
  }

  get readonly() {
    const internal = this.#internal;
    return constructOptionTSMappedTypeModifierOperator(internal.pos + 97, internal.ast, this);
  }
  set readonly(v) {
    defineOwn(this, "readonly", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get optional() {
    const internal = this.#internal;
    const optional = constructOptionTSMappedTypeModifierOperator(internal.pos + 96, internal.ast);
    return optional === null ? false : optional;
  }
  set optional(v) {
    defineOwn(this, "optional", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSMappedType",
      key: this.key,
      constraint: this.constraint,
      nameType: this.nameType,
      typeAnnotation: this.typeAnnotation,
      readonly: this.readonly,
      optional: this.optional,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSMappedType.prototype);
  }
}

const DebugTSMappedType = class TSMappedType {};

export function constructTSMappedType(pos, ast, parent) {
  return new TSMappedType(pos, ast, parent);
}

export function constructTSMappedTypeModifierOperator(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return "true";
    case 1:
      return "+";
    case 2:
      return "-";
    default:
      throw new Error(
        `Unexpected discriminant ${ast.buffer[pos]} for TSMappedTypeModifierOperator`,
      );
  }
}

export class TSTemplateLiteralType {
  type = "TSTemplateLiteralType";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0, $quasis: void 0, $types: void 0 };
    nodes.set(pos, this);
  }

  get quasis() {
    const internal = this.#internal,
      cached = internal.$quasis;
    if (cached !== void 0) return cached;
    return (internal.$quasis = constructVecTemplateElement(internal.pos + 16, internal.ast, this));
  }
  set quasis(v) {
    this.#internal.$quasis = v;
  }

  get types() {
    const internal = this.#internal,
      cached = internal.$types;
    if (cached !== void 0) return cached;
    return (internal.$types = constructVecTSType(internal.pos + 40, internal.ast, this));
  }
  set types(v) {
    this.#internal.$types = v;
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSTemplateLiteralType",
      quasis: this.quasis,
      types: this.types,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSTemplateLiteralType.prototype);
  }
}

const DebugTSTemplateLiteralType = class TSTemplateLiteralType {};

export function constructTSTemplateLiteralType(pos, ast, parent) {
  return new TSTemplateLiteralType(pos, ast, parent);
}

export class TSAsExpression {
  type = "TSAsExpression";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get expression() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 16, internal.ast, this);
  }
  set expression(v) {
    defineOwn(this, "expression", v);
  }

  get typeAnnotation() {
    const internal = this.#internal;
    return constructTSType(internal.pos + 32, internal.ast, this);
  }
  set typeAnnotation(v) {
    defineOwn(this, "typeAnnotation", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSAsExpression",
      expression: this.expression,
      typeAnnotation: this.typeAnnotation,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSAsExpression.prototype);
  }
}

const DebugTSAsExpression = class TSAsExpression {};

export function constructTSAsExpression(pos, ast, parent) {
  return new TSAsExpression(pos, ast, parent);
}

export class TSSatisfiesExpression {
  type = "TSSatisfiesExpression";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get expression() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 16, internal.ast, this);
  }
  set expression(v) {
    defineOwn(this, "expression", v);
  }

  get typeAnnotation() {
    const internal = this.#internal;
    return constructTSType(internal.pos + 32, internal.ast, this);
  }
  set typeAnnotation(v) {
    defineOwn(this, "typeAnnotation", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSSatisfiesExpression",
      expression: this.expression,
      typeAnnotation: this.typeAnnotation,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSSatisfiesExpression.prototype);
  }
}

const DebugTSSatisfiesExpression = class TSSatisfiesExpression {};

export function constructTSSatisfiesExpression(pos, ast, parent) {
  return new TSSatisfiesExpression(pos, ast, parent);
}

export class TSTypeAssertion {
  type = "TSTypeAssertion";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get typeAnnotation() {
    const internal = this.#internal;
    return constructTSType(internal.pos + 16, internal.ast, this);
  }
  set typeAnnotation(v) {
    defineOwn(this, "typeAnnotation", v);
  }

  get expression() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 32, internal.ast, this);
  }
  set expression(v) {
    defineOwn(this, "expression", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSTypeAssertion",
      typeAnnotation: this.typeAnnotation,
      expression: this.expression,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSTypeAssertion.prototype);
  }
}

const DebugTSTypeAssertion = class TSTypeAssertion {};

export function constructTSTypeAssertion(pos, ast, parent) {
  return new TSTypeAssertion(pos, ast, parent);
}

export class TSImportEqualsDeclaration {
  type = "TSImportEqualsDeclaration";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get id() {
    const internal = this.#internal;
    return constructBindingIdentifier(internal.pos + 16, internal.ast, this);
  }
  set id(v) {
    defineOwn(this, "id", v);
  }

  get moduleReference() {
    const internal = this.#internal;
    return constructTSModuleReference(internal.pos + 48, internal.ast, this);
  }
  set moduleReference(v) {
    defineOwn(this, "moduleReference", v);
  }

  get importKind() {
    const internal = this.#internal;
    return constructImportOrExportKind(internal.pos + 12, internal.ast, this);
  }
  set importKind(v) {
    defineOwn(this, "importKind", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSImportEqualsDeclaration",
      id: this.id,
      moduleReference: this.moduleReference,
      importKind: this.importKind,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSImportEqualsDeclaration.prototype);
  }
}

const DebugTSImportEqualsDeclaration = class TSImportEqualsDeclaration {};

export function constructTSImportEqualsDeclaration(pos, ast, parent) {
  return new TSImportEqualsDeclaration(pos, ast, parent);
}

export function constructTSModuleReference(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructBoxTSExternalModuleReference(pos + 8, ast, parent);
    case 1:
      return constructBoxIdentifierReference(pos + 8, ast, parent);
    case 2:
      return constructBoxTSQualifiedName(pos + 8, ast, parent);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSModuleReference`);
  }
}

export class TSExternalModuleReference {
  type = "TSExternalModuleReference";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get expression() {
    const internal = this.#internal;
    return constructStringLiteral(internal.pos + 16, internal.ast, this);
  }
  set expression(v) {
    defineOwn(this, "expression", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSExternalModuleReference",
      expression: this.expression,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSExternalModuleReference.prototype);
  }
}

const DebugTSExternalModuleReference = class TSExternalModuleReference {};

export function constructTSExternalModuleReference(pos, ast, parent) {
  return new TSExternalModuleReference(pos, ast, parent);
}

export class TSNonNullExpression {
  type = "TSNonNullExpression";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get expression() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 16, internal.ast, this);
  }
  set expression(v) {
    defineOwn(this, "expression", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSNonNullExpression",
      expression: this.expression,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSNonNullExpression.prototype);
  }
}

const DebugTSNonNullExpression = class TSNonNullExpression {};

export function constructTSNonNullExpression(pos, ast, parent) {
  return new TSNonNullExpression(pos, ast, parent);
}

export class Decorator {
  type = "Decorator";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get expression() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 16, internal.ast, this);
  }
  set expression(v) {
    defineOwn(this, "expression", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "Decorator",
      expression: this.expression,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugDecorator.prototype);
  }
}

const DebugDecorator = class Decorator {};

export function constructDecorator(pos, ast, parent) {
  return new Decorator(pos, ast, parent);
}

export class TSExportAssignment {
  type = "TSExportAssignment";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get expression() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 16, internal.ast, this);
  }
  set expression(v) {
    defineOwn(this, "expression", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSExportAssignment",
      expression: this.expression,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSExportAssignment.prototype);
  }
}

const DebugTSExportAssignment = class TSExportAssignment {};

export function constructTSExportAssignment(pos, ast, parent) {
  return new TSExportAssignment(pos, ast, parent);
}

export class TSNamespaceExportDeclaration {
  type = "TSNamespaceExportDeclaration";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get id() {
    const internal = this.#internal;
    return constructIdentifierName(internal.pos + 16, internal.ast, this);
  }
  set id(v) {
    defineOwn(this, "id", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSNamespaceExportDeclaration",
      id: this.id,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSNamespaceExportDeclaration.prototype);
  }
}

const DebugTSNamespaceExportDeclaration = class TSNamespaceExportDeclaration {};

export function constructTSNamespaceExportDeclaration(pos, ast, parent) {
  return new TSNamespaceExportDeclaration(pos, ast, parent);
}

export class TSInstantiationExpression {
  type = "TSInstantiationExpression";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get expression() {
    const internal = this.#internal;
    return constructExpression(internal.pos + 16, internal.ast, this);
  }
  set expression(v) {
    defineOwn(this, "expression", v);
  }

  get typeArguments() {
    const internal = this.#internal;
    return constructBoxTSTypeParameterInstantiation(internal.pos + 32, internal.ast, this);
  }
  set typeArguments(v) {
    defineOwn(this, "typeArguments", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSInstantiationExpression",
      expression: this.expression,
      typeArguments: this.typeArguments,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugTSInstantiationExpression.prototype);
  }
}

const DebugTSInstantiationExpression = class TSInstantiationExpression {};

export function constructTSInstantiationExpression(pos, ast, parent) {
  return new TSInstantiationExpression(pos, ast, parent);
}

export function constructImportOrExportKind(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return "value";
    case 1:
      return "type";
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ImportOrExportKind`);
  }
}

export class JSDocNullableType {
  type = "TSJSDocNullableType";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get typeAnnotation() {
    const internal = this.#internal;
    return constructTSType(internal.pos + 16, internal.ast, this);
  }
  set typeAnnotation(v) {
    defineOwn(this, "typeAnnotation", v);
  }

  get postfix() {
    const internal = this.#internal;
    return constructBool(internal.pos + 12, internal.ast, this);
  }
  set postfix(v) {
    defineOwn(this, "postfix", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSJSDocNullableType",
      typeAnnotation: this.typeAnnotation,
      postfix: this.postfix,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugJSDocNullableType.prototype);
  }
}

const DebugJSDocNullableType = class JSDocNullableType {};

export function constructJSDocNullableType(pos, ast, parent) {
  return new JSDocNullableType(pos, ast, parent);
}

export class JSDocNonNullableType {
  type = "TSJSDocNonNullableType";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get typeAnnotation() {
    const internal = this.#internal;
    return constructTSType(internal.pos + 16, internal.ast, this);
  }
  set typeAnnotation(v) {
    defineOwn(this, "typeAnnotation", v);
  }

  get postfix() {
    const internal = this.#internal;
    return constructBool(internal.pos + 12, internal.ast, this);
  }
  set postfix(v) {
    defineOwn(this, "postfix", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSJSDocNonNullableType",
      typeAnnotation: this.typeAnnotation,
      postfix: this.postfix,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugJSDocNonNullableType.prototype);
  }
}

const DebugJSDocNonNullableType = class JSDocNonNullableType {};

export function constructJSDocNonNullableType(pos, ast, parent) {
  return new JSDocNonNullableType(pos, ast, parent);
}

export class JSDocUnknownType {
  type = "TSJSDocUnknownType";
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: "TSJSDocUnknownType",

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugJSDocUnknownType.prototype);
  }
}

const DebugJSDocUnknownType = class JSDocUnknownType {};

export function constructJSDocUnknownType(pos, ast, parent) {
  return new JSDocUnknownType(pos, ast, parent);
}

export function constructCommentKind(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return "Line";
    case 1:
      return "Block";
    case 2:
      return "Block";
    case 3:
      return "Line";
    case 4:
      return "Line";
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for CommentKind`);
  }
}

export class Comment {
  #internal;

  constructor(pos, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    const { nodes } = ast;
    const cached = nodes.get(pos);
    if (cached !== void 0) return cached;

    this.#internal = { pos, ast, parent, $range: void 0 };
    nodes.set(pos, this);
  }

  get type() {
    const internal = this.#internal;
    return constructCommentKind(internal.pos + 17, internal.ast, this);
  }
  set type(v) {
    defineOwn(this, "type", v);
  }

  get value() {
    const internal = this.#internal,
      ast = internal.ast,
      pos = internal.pos;
    // HTML comment discriminants equal their delimiter lengths (3 or 4).
    const kind = constructU8(pos + 17, ast, this);
    return ast.sourceText.slice(
      this.start + (kind < 3 ? 2 : kind),
      this.end - (this.type === "Line" ? 0 : 2),
    );
  }
  set value(v) {
    defineOwn(this, "value", v);
  }

  get start() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[internal.pos >> 2];
  }
  set start(v) {
    defineOwn(this, "start", v);
  }

  get end() {
    const internal = this.#internal;
    return internal.ast.buffer.int32[(internal.pos + 4) >> 2];
  }
  set end(v) {
    defineOwn(this, "end", v);
  }

  get range() {
    const internal = this.#internal;
    if (internal.$range === void 0) internal.$range = [this.start, this.end];
    return internal.$range;
  }
  set range(v) {
    defineOwn(this, "range", v);
  }

  get loc() {
    return getNodeLoc(this);
  }
  set loc(v) {
    defineOwn(this, "loc", v);
  }

  get parent() {
    return resolveParent(this.#internal);
  }
  set parent(v) {
    this.#internal.parent = v;
  }

  toJSON() {
    return {
      type: this.type,
      value: this.value,

      start: this.start,
      end: this.end,
      range: this.range,
    };
  }

  [inspectSymbol]() {
    return Object.setPrototypeOf(this.toJSON(), DebugComment.prototype);
  }
}

const DebugComment = class Comment {};

export function constructComment(pos, ast, parent) {
  return new Comment(pos, ast, parent);
}

export function constructModuleKind(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return "script";
    case 1:
      return "module";
    case 3:
      return "commonjs";
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ModuleKind`);
  }
}

export function constructImportImportName(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructNameSpan(pos + 8, ast, parent);
    case 1:
      return "namespaceObject";
    case 2:
      return constructSpan(pos + 8, ast, parent);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ImportImportName`);
  }
}

export function constructExportImportName(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructNameSpan(pos + 8, ast, parent);
    case 1:
      return "all";
    case 2:
      return "allButDefault";
    case 3:
      return "null";
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ExportImportName`);
  }
}

export function constructExportExportName(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructNameSpan(pos + 8, ast, parent);
    case 1:
      return constructSpan(pos + 8, ast, parent);
    case 2:
      return "null";
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ExportExportName`);
  }
}

export function constructExportLocalName(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return constructNameSpan(pos + 8, ast, parent);
    case 1:
      return constructNameSpan(pos + 8, ast, parent);
    case 2:
      return "null";
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ExportLocalName`);
  }
}

export function constructAssignmentOperator(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return "=";
    case 1:
      return "+=";
    case 2:
      return "-=";
    case 3:
      return "*=";
    case 4:
      return "/=";
    case 5:
      return "%=";
    case 6:
      return "**=";
    case 7:
      return "<<=";
    case 8:
      return ">>=";
    case 9:
      return ">>>=";
    case 10:
      return "|=";
    case 11:
      return "^=";
    case 12:
      return "&=";
    case 13:
      return "||=";
    case 14:
      return "&&=";
    case 15:
      return "??=";
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for AssignmentOperator`);
  }
}

export function constructBinaryOperator(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return "==";
    case 1:
      return "!=";
    case 2:
      return "===";
    case 3:
      return "!==";
    case 4:
      return "<";
    case 5:
      return "<=";
    case 6:
      return ">";
    case 7:
      return ">=";
    case 8:
      return "+";
    case 9:
      return "-";
    case 10:
      return "*";
    case 11:
      return "/";
    case 12:
      return "%";
    case 13:
      return "**";
    case 14:
      return "<<";
    case 15:
      return ">>";
    case 16:
      return ">>>";
    case 17:
      return "|";
    case 18:
      return "^";
    case 19:
      return "&";
    case 20:
      return "in";
    case 21:
      return "instanceof";
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for BinaryOperator`);
  }
}

export function constructLogicalOperator(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return "||";
    case 1:
      return "&&";
    case 2:
      return "??";
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for LogicalOperator`);
  }
}

export function constructUnaryOperator(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return "+";
    case 1:
      return "-";
    case 2:
      return "!";
    case 3:
      return "~";
    case 4:
      return "typeof";
    case 5:
      return "void";
    case 6:
      return "delete";
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for UnaryOperator`);
  }
}

export function constructUpdateOperator(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return "++";
    case 1:
      return "--";
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for UpdateOperator`);
  }
}

export function constructErrorSeverity(pos, ast, parent) {
  switch (ast.buffer[pos]) {
    case 0:
      return "Error";
    case 1:
      return "Warning";
    case 2:
      return "Advice";
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ErrorSeverity`);
  }
}

export function constructStr(pos, ast) {
  const pos32 = pos >> 2,
    { buffer } = ast,
    { int32 } = buffer,
    len = int32[pos32 + 2];
  if (len === 0) return "";

  pos = int32[pos32];
  if (ast.sourceIsAscii) {
    const { sourceStartPos } = ast;
    if (pos >= sourceStartPos) return ast.sourceText.substr(pos - sourceStartPos, len);
  }

  // Longer strings use `TextDecoder`
  // TODO: Find best switch-over point
  const end = pos + len;
  if (len > 50) return decodeStr(buffer.subarray(pos, end));

  // Shorter strings decode by hand to avoid native call
  let out = "",
    c;
  do {
    c = buffer[pos++];
    if (c < 0x80) {
      out += fromCodePoint(c);
    } else {
      out += decodeStr(buffer.subarray(pos - 1, end));
      break;
    }
  } while (pos < end);

  return out;
}

export function constructVecComment(pos, ast, parent) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  return new NodeArray(int32[pos32], int32[pos32 + 2], 24, constructComment, ast, parent);
}

export function constructOptionHashbang(pos, ast, parent) {
  if (ast.buffer.int32[(pos >> 2) + 4] === 0 && ast.buffer.int32[(pos >> 2) + 5] === 0) return null;
  return constructHashbang(pos, ast, parent);
}

export function constructVecDirective(pos, ast, parent) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  return new NodeArray(int32[pos32], int32[pos32 + 2], 80, constructDirective, ast, parent);
}

export function constructVecStatement(pos, ast, parent) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  return new NodeArray(int32[pos32], int32[pos32 + 2], 16, constructStatement, ast, parent);
}

export function constructBoxBooleanLiteral(pos, ast, parent) {
  return constructBooleanLiteral(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxNullLiteral(pos, ast, parent) {
  return constructNullLiteral(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxNumericLiteral(pos, ast, parent) {
  return constructNumericLiteral(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxBigIntLiteral(pos, ast, parent) {
  return constructBigIntLiteral(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxRegExpLiteral(pos, ast, parent) {
  return constructRegExpLiteral(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxStringLiteral(pos, ast, parent) {
  return constructStringLiteral(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTemplateLiteral(pos, ast, parent) {
  return constructTemplateLiteral(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxIdentifierReference(pos, ast, parent) {
  return constructIdentifierReference(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxSuper(pos, ast, parent) {
  return constructSuper(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxArrayExpression(pos, ast, parent) {
  return constructArrayExpression(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxArrowFunctionExpression(pos, ast, parent) {
  return constructArrowFunctionExpression(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxAssignmentExpression(pos, ast, parent) {
  return constructAssignmentExpression(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxAwaitExpression(pos, ast, parent) {
  return constructAwaitExpression(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxBinaryExpression(pos, ast, parent) {
  return constructBinaryExpression(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxCallExpression(pos, ast, parent) {
  return constructCallExpression(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxChainExpression(pos, ast, parent) {
  return constructChainExpression(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxClass(pos, ast, parent) {
  return constructClass(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxConditionalExpression(pos, ast, parent) {
  return constructConditionalExpression(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxFunction(pos, ast, parent) {
  return constructFunction(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxImportExpression(pos, ast, parent) {
  return constructImportExpression(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxLogicalExpression(pos, ast, parent) {
  return constructLogicalExpression(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxNewExpression(pos, ast, parent) {
  return constructNewExpression(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxObjectExpression(pos, ast, parent) {
  return constructObjectExpression(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxParenthesizedExpression(pos, ast, parent) {
  return constructParenthesizedExpression(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxSequenceExpression(pos, ast, parent) {
  return constructSequenceExpression(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTaggedTemplateExpression(pos, ast, parent) {
  return constructTaggedTemplateExpression(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxThisExpression(pos, ast, parent) {
  return constructThisExpression(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxUnaryExpression(pos, ast, parent) {
  return constructUnaryExpression(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxUpdateExpression(pos, ast, parent) {
  return constructUpdateExpression(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxYieldExpression(pos, ast, parent) {
  return constructYieldExpression(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxPrivateInExpression(pos, ast, parent) {
  return constructPrivateInExpression(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxImportMeta(pos, ast, parent) {
  return constructImportMeta(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxNewTarget(pos, ast, parent) {
  return constructNewTarget(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxJSXElement(pos, ast, parent) {
  return constructJSXElement(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxJSXFragment(pos, ast, parent) {
  return constructJSXFragment(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSAsExpression(pos, ast, parent) {
  return constructTSAsExpression(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSSatisfiesExpression(pos, ast, parent) {
  return constructTSSatisfiesExpression(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSTypeAssertion(pos, ast, parent) {
  return constructTSTypeAssertion(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSNonNullExpression(pos, ast, parent) {
  return constructTSNonNullExpression(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSInstantiationExpression(pos, ast, parent) {
  return constructTSInstantiationExpression(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxV8IntrinsicExpression(pos, ast, parent) {
  return constructV8IntrinsicExpression(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructVecArrayExpressionElement(pos, ast, parent) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  return new NodeArray(
    int32[pos32],
    int32[pos32 + 2],
    16,
    constructArrayExpressionElement,
    ast,
    parent,
  );
}

export function constructBoxSpreadElement(pos, ast, parent) {
  return constructSpreadElement(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxElision(pos, ast, parent) {
  return constructElision(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructVecObjectPropertyKind(pos, ast, parent) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  return new NodeArray(
    int32[pos32],
    int32[pos32 + 2],
    16,
    constructObjectPropertyKind,
    ast,
    parent,
  );
}

export function constructBoxObjectProperty(pos, ast, parent) {
  return constructObjectProperty(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBool(pos, ast) {
  return ast.buffer[pos] === 1;
}

export function constructBoxIdentifierName(pos, ast, parent) {
  return constructIdentifierName(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxPrivateIdentifier(pos, ast, parent) {
  return constructPrivateIdentifier(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructVecTemplateElement(pos, ast, parent) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  return new NodeArray(int32[pos32], int32[pos32 + 2], 48, constructTemplateElement, ast, parent);
}

export function constructVecExpression(pos, ast, parent) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  return new NodeArray(int32[pos32], int32[pos32 + 2], 16, constructExpression, ast, parent);
}

export function constructBoxTSTypeParameterInstantiation(pos, ast, parent) {
  return constructTSTypeParameterInstantiation(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructOptionBoxTSTypeParameterInstantiation(pos, ast, parent) {
  if (ast.buffer.int32[pos >> 2] === 0 && ast.buffer.int32[(pos >> 2) + 1] === 0) return null;
  return constructBoxTSTypeParameterInstantiation(pos, ast, parent);
}

export function constructJSStr(pos, ast) {
  const { buffer } = ast;
  if (buffer[pos + 12] === 0) return constructStr(pos, ast);
  const { int32 } = buffer;

  const pos32 = pos >> 2,
    len = int32[pos32 + 2];
  pos = int32[pos32];
  const end = pos + len;
  let out = "";
  while (pos < end) {
    const first = buffer[pos++];
    let codePoint;
    if (first < 0x80) {
      codePoint = first;
    } else if (first < 0xe0) {
      codePoint = ((first & 0x1f) << 6) | (buffer[pos++] & 0x3f);
    } else if (first < 0xf0) {
      codePoint = ((first & 0x0f) << 12) | ((buffer[pos++] & 0x3f) << 6) | (buffer[pos++] & 0x3f);
    } else {
      codePoint =
        ((first & 7) << 18)
        | ((buffer[pos++] & 0x3f) << 12)
        | ((buffer[pos++] & 0x3f) << 6)
        | (buffer[pos++] & 0x3f);
    }
    // Unlike UTF-8 decoders, `fromCodePoint` preserves surrogate code points
    out += String.fromCodePoint(codePoint);
  }
  return out;
}

export function constructOptionJSStr(pos, ast, parent) {
  if (ast.buffer[pos + 12] === 2) return null;
  return constructJSStr(pos, ast, parent);
}

export function constructBoxComputedMemberExpression(pos, ast, parent) {
  return constructComputedMemberExpression(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxStaticMemberExpression(pos, ast, parent) {
  return constructStaticMemberExpression(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxPrivateFieldExpression(pos, ast, parent) {
  return constructPrivateFieldExpression(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructVecArgument(pos, ast, parent) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  return new NodeArray(int32[pos32], int32[pos32 + 2], 16, constructArgument, ast, parent);
}

export function constructBoxArrayAssignmentTarget(pos, ast, parent) {
  return constructArrayAssignmentTarget(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxObjectAssignmentTarget(pos, ast, parent) {
  return constructObjectAssignmentTarget(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructOptionAssignmentTargetMaybeDefault(pos, ast, parent) {
  if (ast.buffer[pos] === 255) return null;
  return constructAssignmentTargetMaybeDefault(pos, ast, parent);
}

export function constructVecOptionAssignmentTargetMaybeDefault(pos, ast, parent) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  return new NodeArray(
    int32[pos32],
    int32[pos32 + 2],
    16,
    constructOptionAssignmentTargetMaybeDefault,
    ast,
    parent,
  );
}

export function constructBoxAssignmentTargetRest(pos, ast, parent) {
  return constructAssignmentTargetRest(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructOptionBoxAssignmentTargetRest(pos, ast, parent) {
  if (ast.buffer.int32[pos >> 2] === 0 && ast.buffer.int32[(pos >> 2) + 1] === 0) return null;
  return constructBoxAssignmentTargetRest(pos, ast, parent);
}

export function constructVecAssignmentTargetProperty(pos, ast, parent) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  return new NodeArray(
    int32[pos32],
    int32[pos32 + 2],
    16,
    constructAssignmentTargetProperty,
    ast,
    parent,
  );
}

export function constructBoxAssignmentTargetWithDefault(pos, ast, parent) {
  return constructAssignmentTargetWithDefault(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxAssignmentTargetPropertyIdentifier(pos, ast, parent) {
  return constructAssignmentTargetPropertyIdentifier(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxAssignmentTargetPropertyProperty(pos, ast, parent) {
  return constructAssignmentTargetPropertyProperty(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructOptionExpression(pos, ast, parent) {
  if (ast.buffer[pos] === 255) return null;
  return constructExpression(pos, ast, parent);
}

export function constructBoxBlockStatement(pos, ast, parent) {
  return constructBlockStatement(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxBreakStatement(pos, ast, parent) {
  return constructBreakStatement(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxContinueStatement(pos, ast, parent) {
  return constructContinueStatement(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxDebuggerStatement(pos, ast, parent) {
  return constructDebuggerStatement(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxDoWhileStatement(pos, ast, parent) {
  return constructDoWhileStatement(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxEmptyStatement(pos, ast, parent) {
  return constructEmptyStatement(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxExpressionStatement(pos, ast, parent) {
  return constructExpressionStatement(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxForInStatement(pos, ast, parent) {
  return constructForInStatement(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxForOfStatement(pos, ast, parent) {
  return constructForOfStatement(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxForStatement(pos, ast, parent) {
  return constructForStatement(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxIfStatement(pos, ast, parent) {
  return constructIfStatement(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxLabeledStatement(pos, ast, parent) {
  return constructLabeledStatement(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxReturnStatement(pos, ast, parent) {
  return constructReturnStatement(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxSwitchStatement(pos, ast, parent) {
  return constructSwitchStatement(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxThrowStatement(pos, ast, parent) {
  return constructThrowStatement(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTryStatement(pos, ast, parent) {
  return constructTryStatement(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxWhileStatement(pos, ast, parent) {
  return constructWhileStatement(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxWithStatement(pos, ast, parent) {
  return constructWithStatement(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxVariableDeclaration(pos, ast, parent) {
  return constructVariableDeclaration(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSTypeAliasDeclaration(pos, ast, parent) {
  return constructTSTypeAliasDeclaration(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSInterfaceDeclaration(pos, ast, parent) {
  return constructTSInterfaceDeclaration(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSEnumDeclaration(pos, ast, parent) {
  return constructTSEnumDeclaration(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSExternalModuleDeclaration(pos, ast, parent) {
  return constructTSExternalModuleDeclaration(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSNamespaceDeclaration(pos, ast, parent) {
  return constructTSNamespaceDeclaration(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSGlobalDeclaration(pos, ast, parent) {
  return constructTSGlobalDeclaration(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSImportEqualsDeclaration(pos, ast, parent) {
  return constructTSImportEqualsDeclaration(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructVecVariableDeclarator(pos, ast, parent) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  return new NodeArray(
    int32[pos32],
    int32[pos32 + 2],
    56,
    constructVariableDeclarator,
    ast,
    parent,
  );
}

export function constructBoxTSTypeAnnotation(pos, ast, parent) {
  return constructTSTypeAnnotation(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructOptionBoxTSTypeAnnotation(pos, ast, parent) {
  if (ast.buffer.int32[pos >> 2] === 0 && ast.buffer.int32[(pos >> 2) + 1] === 0) return null;
  return constructBoxTSTypeAnnotation(pos, ast, parent);
}

export function constructOptionStatement(pos, ast, parent) {
  if (ast.buffer[pos] === 255) return null;
  return constructStatement(pos, ast, parent);
}

export function constructOptionForStatementInit(pos, ast, parent) {
  if (ast.buffer[pos] === 255) return null;
  return constructForStatementInit(pos, ast, parent);
}

export function constructOptionLabelIdentifier(pos, ast, parent) {
  if (ast.buffer.int32[(pos >> 2) + 4] === 0 && ast.buffer.int32[(pos >> 2) + 5] === 0) return null;
  return constructLabelIdentifier(pos, ast, parent);
}

export function constructVecSwitchCase(pos, ast, parent) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  return new NodeArray(int32[pos32], int32[pos32 + 2], 56, constructSwitchCase, ast, parent);
}

export function constructBoxCatchClause(pos, ast, parent) {
  return constructCatchClause(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructOptionBoxCatchClause(pos, ast, parent) {
  if (ast.buffer.int32[pos >> 2] === 0 && ast.buffer.int32[(pos >> 2) + 1] === 0) return null;
  return constructBoxCatchClause(pos, ast, parent);
}

export function constructOptionBoxBlockStatement(pos, ast, parent) {
  if (ast.buffer.int32[pos >> 2] === 0 && ast.buffer.int32[(pos >> 2) + 1] === 0) return null;
  return constructBoxBlockStatement(pos, ast, parent);
}

export function constructOptionCatchParameter(pos, ast, parent) {
  if (ast.buffer[pos + 16] === 255) return null;
  return constructCatchParameter(pos, ast, parent);
}

export function constructBoxBindingIdentifier(pos, ast, parent) {
  return constructBindingIdentifier(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxObjectPattern(pos, ast, parent) {
  return constructObjectPattern(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxArrayPattern(pos, ast, parent) {
  return constructArrayPattern(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxAssignmentPattern(pos, ast, parent) {
  return constructAssignmentPattern(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructVecBindingProperty(pos, ast, parent) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  return new NodeArray(int32[pos32], int32[pos32 + 2], 48, constructBindingProperty, ast, parent);
}

export function constructBoxBindingRestElement(pos, ast, parent) {
  return constructBindingRestElement(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructOptionBoxBindingRestElement(pos, ast, parent) {
  if (ast.buffer.int32[pos >> 2] === 0 && ast.buffer.int32[(pos >> 2) + 1] === 0) return null;
  return constructBoxBindingRestElement(pos, ast, parent);
}

export function constructOptionBindingPattern(pos, ast, parent) {
  if (ast.buffer[pos] === 255) return null;
  return constructBindingPattern(pos, ast, parent);
}

export function constructVecOptionBindingPattern(pos, ast, parent) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  return new NodeArray(
    int32[pos32],
    int32[pos32 + 2],
    16,
    constructOptionBindingPattern,
    ast,
    parent,
  );
}

export function constructOptionBindingIdentifier(pos, ast, parent) {
  if (ast.buffer.int32[(pos >> 2) + 4] === 0 && ast.buffer.int32[(pos >> 2) + 5] === 0) return null;
  return constructBindingIdentifier(pos, ast, parent);
}

export function constructBoxTSTypeParameterDeclaration(pos, ast, parent) {
  return constructTSTypeParameterDeclaration(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructOptionBoxTSTypeParameterDeclaration(pos, ast, parent) {
  if (ast.buffer.int32[pos >> 2] === 0 && ast.buffer.int32[(pos >> 2) + 1] === 0) return null;
  return constructBoxTSTypeParameterDeclaration(pos, ast, parent);
}

export function constructBoxTSThisParameter(pos, ast, parent) {
  return constructTSThisParameter(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructOptionBoxTSThisParameter(pos, ast, parent) {
  if (ast.buffer.int32[pos >> 2] === 0 && ast.buffer.int32[(pos >> 2) + 1] === 0) return null;
  return constructBoxTSThisParameter(pos, ast, parent);
}

export function constructBoxFormalParameters(pos, ast, parent) {
  return constructFormalParameters(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxFunctionBody(pos, ast, parent) {
  return constructFunctionBody(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructOptionBoxFunctionBody(pos, ast, parent) {
  if (ast.buffer.int32[pos >> 2] === 0 && ast.buffer.int32[(pos >> 2) + 1] === 0) return null;
  return constructBoxFunctionBody(pos, ast, parent);
}

export function constructVecFormalParameter(pos, ast, parent) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  return new NodeArray(int32[pos32], int32[pos32 + 2], 72, constructFormalParameter, ast, parent);
}

export function constructVecDecorator(pos, ast, parent) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  return new NodeArray(int32[pos32], int32[pos32 + 2], 32, constructDecorator, ast, parent);
}

export function constructBoxExpression(pos, ast, parent) {
  return constructExpression(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructOptionBoxExpression(pos, ast, parent) {
  if (ast.buffer.int32[pos >> 2] === 0 && ast.buffer.int32[(pos >> 2) + 1] === 0) return null;
  return constructBoxExpression(pos, ast, parent);
}

export function constructOptionTSAccessibility(pos, ast, parent) {
  if (ast.buffer[pos] === 255) return null;
  return constructTSAccessibility(pos, ast, parent);
}

export function constructVecTSClassImplements(pos, ast, parent) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  return new NodeArray(int32[pos32], int32[pos32 + 2], 40, constructTSClassImplements, ast, parent);
}

export function constructBoxClassBody(pos, ast, parent) {
  return constructClassBody(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructVecClassElement(pos, ast, parent) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  return new NodeArray(int32[pos32], int32[pos32 + 2], 16, constructClassElement, ast, parent);
}

export function constructBoxStaticBlock(pos, ast, parent) {
  return constructStaticBlock(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxMethodDefinition(pos, ast, parent) {
  return constructMethodDefinition(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxPropertyDefinition(pos, ast, parent) {
  return constructPropertyDefinition(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxAccessorProperty(pos, ast, parent) {
  return constructAccessorProperty(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSIndexSignature(pos, ast, parent) {
  return constructTSIndexSignature(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxImportDeclaration(pos, ast, parent) {
  return constructImportDeclaration(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxExportAllDeclaration(pos, ast, parent) {
  return constructExportAllDeclaration(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxExportDefaultDeclaration(pos, ast, parent) {
  return constructExportDefaultDeclaration(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxExportDeclaration(pos, ast, parent) {
  return constructExportDeclaration(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxExportNamedDeclaration(pos, ast, parent) {
  return constructExportNamedDeclaration(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxExportFromDeclaration(pos, ast, parent) {
  return constructExportFromDeclaration(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSExportAssignment(pos, ast, parent) {
  return constructTSExportAssignment(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSNamespaceExportDeclaration(pos, ast, parent) {
  return constructTSNamespaceExportDeclaration(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructOptionImportPhase(pos, ast, parent) {
  if (ast.buffer[pos] === 2) return null;
  return constructImportPhase(pos, ast, parent);
}

export function constructVecImportDeclarationSpecifier(pos, ast, parent) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  return new NodeArray(
    int32[pos32],
    int32[pos32 + 2],
    16,
    constructImportDeclarationSpecifier,
    ast,
    parent,
  );
}

export function constructOptionVecImportDeclarationSpecifier(pos, ast, parent) {
  if (ast.buffer.int32[pos >> 2] === 0 && ast.buffer.int32[(pos >> 2) + 1] === 0) return null;
  return constructVecImportDeclarationSpecifier(pos, ast, parent);
}

export function constructBoxWithClause(pos, ast, parent) {
  return constructWithClause(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructOptionBoxWithClause(pos, ast, parent) {
  if (ast.buffer.int32[pos >> 2] === 0 && ast.buffer.int32[(pos >> 2) + 1] === 0) return null;
  return constructBoxWithClause(pos, ast, parent);
}

export function constructBoxImportSpecifier(pos, ast, parent) {
  return constructImportSpecifier(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxImportDefaultSpecifier(pos, ast, parent) {
  return constructImportDefaultSpecifier(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxImportNamespaceSpecifier(pos, ast, parent) {
  return constructImportNamespaceSpecifier(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructVecImportAttribute(pos, ast, parent) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  return new NodeArray(int32[pos32], int32[pos32 + 2], 120, constructImportAttribute, ast, parent);
}

export function constructVecExportSpecifier(pos, ast, parent) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  return new NodeArray(int32[pos32], int32[pos32 + 2], 128, constructExportSpecifier, ast, parent);
}

export function constructOptionModuleExportName(pos, ast, parent) {
  if (ast.buffer[pos] === 255) return null;
  return constructModuleExportName(pos, ast, parent);
}

export function constructF64(pos, ast) {
  return ast.buffer.float64[pos >> 3];
}

export function constructOptionStr(pos, ast, parent) {
  if (ast.buffer.int32[pos >> 2] === 0 && ast.buffer.int32[(pos >> 2) + 1] === 0) return null;
  return constructStr(pos, ast, parent);
}

export function constructU8(pos, ast) {
  return ast.buffer[pos];
}

export function constructBoxJSXOpeningElement(pos, ast, parent) {
  return constructJSXOpeningElement(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructVecJSXChild(pos, ast, parent) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  return new NodeArray(int32[pos32], int32[pos32 + 2], 16, constructJSXChild, ast, parent);
}

export function constructBoxJSXClosingElement(pos, ast, parent) {
  return constructJSXClosingElement(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructOptionBoxJSXClosingElement(pos, ast, parent) {
  if (ast.buffer.int32[pos >> 2] === 0 && ast.buffer.int32[(pos >> 2) + 1] === 0) return null;
  return constructBoxJSXClosingElement(pos, ast, parent);
}

export function constructVecJSXAttributeItem(pos, ast, parent) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  return new NodeArray(int32[pos32], int32[pos32 + 2], 16, constructJSXAttributeItem, ast, parent);
}

export function constructBoxJSXIdentifier(pos, ast, parent) {
  return constructJSXIdentifier(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxJSXNamespacedName(pos, ast, parent) {
  return constructJSXNamespacedName(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxJSXMemberExpression(pos, ast, parent) {
  return constructJSXMemberExpression(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxJSXEmptyExpression(pos, ast, parent) {
  return constructJSXEmptyExpression(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxJSXAttribute(pos, ast, parent) {
  return constructJSXAttribute(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxJSXSpreadAttribute(pos, ast, parent) {
  return constructJSXSpreadAttribute(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructOptionJSXAttributeValue(pos, ast, parent) {
  if (ast.buffer[pos] === 255) return null;
  return constructJSXAttributeValue(pos, ast, parent);
}

export function constructBoxJSXExpressionContainer(pos, ast, parent) {
  return constructJSXExpressionContainer(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxJSXText(pos, ast, parent) {
  return constructJSXText(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxJSXSpreadChild(pos, ast, parent) {
  return constructJSXSpreadChild(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructVecTSEnumMember(pos, ast, parent) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  return new NodeArray(int32[pos32], int32[pos32 + 2], 48, constructTSEnumMember, ast, parent);
}

export function constructBoxTSAnyKeyword(pos, ast, parent) {
  return constructTSAnyKeyword(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSBigIntKeyword(pos, ast, parent) {
  return constructTSBigIntKeyword(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSBooleanKeyword(pos, ast, parent) {
  return constructTSBooleanKeyword(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSIntrinsicKeyword(pos, ast, parent) {
  return constructTSIntrinsicKeyword(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSNeverKeyword(pos, ast, parent) {
  return constructTSNeverKeyword(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSNullKeyword(pos, ast, parent) {
  return constructTSNullKeyword(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSNumberKeyword(pos, ast, parent) {
  return constructTSNumberKeyword(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSObjectKeyword(pos, ast, parent) {
  return constructTSObjectKeyword(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSStringKeyword(pos, ast, parent) {
  return constructTSStringKeyword(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSSymbolKeyword(pos, ast, parent) {
  return constructTSSymbolKeyword(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSUndefinedKeyword(pos, ast, parent) {
  return constructTSUndefinedKeyword(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSUnknownKeyword(pos, ast, parent) {
  return constructTSUnknownKeyword(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSVoidKeyword(pos, ast, parent) {
  return constructTSVoidKeyword(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSArrayType(pos, ast, parent) {
  return constructTSArrayType(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSConditionalType(pos, ast, parent) {
  return constructTSConditionalType(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSConstructorType(pos, ast, parent) {
  return constructTSConstructorType(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSFunctionType(pos, ast, parent) {
  return constructTSFunctionType(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSImportType(pos, ast, parent) {
  return constructTSImportType(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSIndexedAccessType(pos, ast, parent) {
  return constructTSIndexedAccessType(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSInferType(pos, ast, parent) {
  return constructTSInferType(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSIntersectionType(pos, ast, parent) {
  return constructTSIntersectionType(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSLiteralType(pos, ast, parent) {
  return constructTSLiteralType(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSMappedType(pos, ast, parent) {
  return constructTSMappedType(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSNamedTupleMember(pos, ast, parent) {
  return constructTSNamedTupleMember(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSTemplateLiteralType(pos, ast, parent) {
  return constructTSTemplateLiteralType(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSThisType(pos, ast, parent) {
  return constructTSThisType(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSTupleType(pos, ast, parent) {
  return constructTSTupleType(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSTypeLiteral(pos, ast, parent) {
  return constructTSTypeLiteral(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSTypeOperator(pos, ast, parent) {
  return constructTSTypeOperator(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSTypePredicate(pos, ast, parent) {
  return constructTSTypePredicate(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSTypeQuery(pos, ast, parent) {
  return constructTSTypeQuery(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSTypeReference(pos, ast, parent) {
  return constructTSTypeReference(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSUnionType(pos, ast, parent) {
  return constructTSUnionType(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSParenthesizedType(pos, ast, parent) {
  return constructTSParenthesizedType(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxJSDocNullableType(pos, ast, parent) {
  return constructJSDocNullableType(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxJSDocNonNullableType(pos, ast, parent) {
  return constructJSDocNonNullableType(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxJSDocUnknownType(pos, ast, parent) {
  return constructJSDocUnknownType(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructVecTSType(pos, ast, parent) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  return new NodeArray(int32[pos32], int32[pos32 + 2], 16, constructTSType, ast, parent);
}

export function constructVecTSTupleElement(pos, ast, parent) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  return new NodeArray(int32[pos32], int32[pos32 + 2], 16, constructTSTupleElement, ast, parent);
}

export function constructBoxTSOptionalType(pos, ast, parent) {
  return constructTSOptionalType(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSRestType(pos, ast, parent) {
  return constructTSRestType(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSQualifiedName(pos, ast, parent) {
  return constructTSQualifiedName(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructOptionTSType(pos, ast, parent) {
  if (ast.buffer[pos] === 255) return null;
  return constructTSType(pos, ast, parent);
}

export function constructVecTSTypeParameter(pos, ast, parent) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  return new NodeArray(int32[pos32], int32[pos32 + 2], 80, constructTSTypeParameter, ast, parent);
}

export function constructVecTSInterfaceHeritage(pos, ast, parent) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  return new NodeArray(
    int32[pos32],
    int32[pos32 + 2],
    40,
    constructTSInterfaceHeritage,
    ast,
    parent,
  );
}

export function constructBoxTSInterfaceBody(pos, ast, parent) {
  return constructTSInterfaceBody(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructVecTSSignature(pos, ast, parent) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  return new NodeArray(int32[pos32], int32[pos32 + 2], 16, constructTSSignature, ast, parent);
}

export function constructBoxTSPropertySignature(pos, ast, parent) {
  return constructTSPropertySignature(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSCallSignatureDeclaration(pos, ast, parent) {
  return constructTSCallSignatureDeclaration(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSConstructSignatureDeclaration(pos, ast, parent) {
  return constructTSConstructSignatureDeclaration(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSMethodSignature(pos, ast, parent) {
  return constructTSMethodSignature(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructBoxTSModuleBlock(pos, ast, parent) {
  return constructTSModuleBlock(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructOptionBoxTSModuleBlock(pos, ast, parent) {
  if (ast.buffer.int32[pos >> 2] === 0 && ast.buffer.int32[(pos >> 2) + 1] === 0) return null;
  return constructBoxTSModuleBlock(pos, ast, parent);
}

export function constructBoxTSTypeParameter(pos, ast, parent) {
  return constructTSTypeParameter(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructOptionBoxObjectExpression(pos, ast, parent) {
  if (ast.buffer.int32[pos >> 2] === 0 && ast.buffer.int32[(pos >> 2) + 1] === 0) return null;
  return constructBoxObjectExpression(pos, ast, parent);
}

export function constructOptionTSImportTypeQualifier(pos, ast, parent) {
  if (ast.buffer[pos] === 2) return null;
  return constructTSImportTypeQualifier(pos, ast, parent);
}

export function constructBoxTSImportTypeQualifiedName(pos, ast, parent) {
  return constructTSImportTypeQualifiedName(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructOptionTSMappedTypeModifierOperator(pos, ast, parent) {
  if (ast.buffer[pos] === 255) return null;
  return constructTSMappedTypeModifierOperator(pos, ast, parent);
}

export function constructBoxTSExternalModuleReference(pos, ast, parent) {
  return constructTSExternalModuleReference(ast.buffer.int32[pos >> 2], ast, parent);
}

export function constructU32(pos, ast) {
  return ast.buffer.int32[pos >> 2] >>> 0;
}

export function constructU64(pos, ast) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  return (int32[pos32] >>> 0) + (int32[pos32 + 1] >>> 0) * /* 2^32 */ 4294967296;
}

export function constructOptionU64(pos, ast, parent) {
  if (ast.buffer[pos] === 0) return null;
  return constructU64(pos + 8, ast, parent);
}

export function constructI32(pos, ast) {
  return ast.buffer.int32[pos >> 2];
}

export function constructOptionNameSpan(pos, ast, parent) {
  if (ast.buffer.int32[(pos >> 2) + 2] === 0 && ast.buffer.int32[(pos >> 2) + 3] === 0) return null;
  return constructNameSpan(pos, ast, parent);
}

export function constructVecError(pos, ast, parent) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  return new NodeArray(int32[pos32], int32[pos32 + 2], 80, constructError, ast, parent);
}

export function constructVecErrorLabel(pos, ast, parent) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  return new NodeArray(int32[pos32], int32[pos32 + 2], 24, constructErrorLabel, ast, parent);
}

export function constructVecStaticImport(pos, ast, parent) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  return new NodeArray(int32[pos32], int32[pos32 + 2], 56, constructStaticImport, ast, parent);
}

export function constructVecStaticExport(pos, ast, parent) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  return new NodeArray(int32[pos32], int32[pos32 + 2], 32, constructStaticExport, ast, parent);
}

export function constructVecDynamicImport(pos, ast, parent) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  return new NodeArray(int32[pos32], int32[pos32 + 2], 16, constructDynamicImport, ast, parent);
}

export function constructVecSpan(pos, ast, parent) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  return new NodeArray(int32[pos32], int32[pos32 + 2], 8, constructSpan, ast, parent);
}

export function constructVecImportEntry(pos, ast, parent) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  return new NodeArray(int32[pos32], int32[pos32 + 2], 96, constructImportEntry, ast, parent);
}

export function constructVecExportEntry(pos, ast, parent) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  return new NodeArray(int32[pos32], int32[pos32 + 2], 144, constructExportEntry, ast, parent);
}
