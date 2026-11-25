// Fallback machinery for lazy AST walking.
//
// While a file is being linted lazily, the eager AST must never be materialized:
// rules receive lazy node objects, and APIs that build the eager object graph
// (`sourceCode.ast`, scope analysis, `getNodeByRangeIndex`) would create a second,
// disjoint graph — node-identity-keyed lookups would silently break.
//
// Instead, `initAst` throws `LazyFallbackError` while a lazy walk is active.
// `lintFile` catches it, resets per-file state, and re-lints the file eagerly,
// so such rules are always correct — they just don't get the lazy speedup.
// After `MAX_FALLBACKS` fallbacks, lazy walking is disabled for the rest of the
// run to avoid repeatedly double-linting.

/** Thrown when the eager AST is demanded during a lazy walk. */
export class LazyFallbackError extends Error {
  constructor() {
    super("eager AST requested during lazy walk");
  }
}

/** `true` while linting a file lazily (set in `lint.ts`, cleared in `resetFile`). */
export let lazyWalkActive = false;

export function setLazyWalkActive(active: boolean): void {
  lazyWalkActive = active;
}

/** `true` once lazy walking is disabled for the remainder of the run. */
export let lazyDisabledForRun = false;

const MAX_FALLBACKS = 20;
let fallbackCount = 0;

/** Record a fallback; disables lazy walking for the run after `MAX_FALLBACKS`. */
export function recordLazyFallback(): void {
  fallbackCount++;
  if (fallbackCount >= MAX_FALLBACKS) lazyDisabledForRun = true;
}
