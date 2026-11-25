// Runtime support for the ESTree-shaped lazy deserializer and walker
// (`apps/oxlint/src-js/generated/lazy/`).

import { getNodeLoc } from "../location.js";
import visitorKeys from "../../generated/keys.js";
import { LEAF_NODE_TYPES_COUNT, NODE_TYPE_IDS_MAP } from "../../generated/type_ids.js";

// Unique token which is not exposed publicly.
// Used to prevent user calling class constructors.
export const TOKEN = {};

/**
 * Throw error when restricted class constructor is called by user code.
 * @throws {Error}
 */
export function constructorError() {
  throw new Error("Constructor is for internal use only");
}

/**
 * Prototype for plain lazy-synthesized nodes, providing a lazy `loc` getter
 * (mirrors the eager deserializer's `NodeProto`).
 */
export const NodeProto = Object.create(Object.prototype, {
  loc: {
    get() {
      return getNodeLoc(this);
    },
    enumerable: true,
  },
});

/**
 * Define an own data property, shadowing a prototype getter.
 * Used by generated setters so rules can mutate lazy nodes like plain objects.
 *
 * @param {Object} obj - Node object
 * @param {string} key - Property name
 * @param {*} value - Value to set
 */
export function defineOwn(obj, key, value) {
  Object.defineProperty(obj, key, {
    value,
    writable: true,
    enumerable: true,
    configurable: true,
  });
}

/**
 * A stack frame of the lazy walker. Each non-leaf node visited pushes one frame;
 * nodes constructed during the walk capture the current frame, and their `parent`
 * getters materialize ancestors on demand (`resolveParent` in generated constructors).
 */
export class Frame {
  constructor(construct, pos, parent) {
    this.construct = construct;
    this.pos = pos;
    this.parent = parent;
  }
}

/**
 * Materialize the node for a frame (or pass through a node / null).
 *
 * @param {Frame|Object|null} parentish - Frame, node, or null
 * @param {Object} ast - AST object
 * @returns {Object|null} - Parent node or null
 */
export function materializeFrame(parentish, ast) {
  if (parentish === null || !(parentish instanceof Frame)) return parentish;
  return parentish.construct(parentish.pos, ast, parentish.parent);
}

/**
 * Generic object-graph walker for synthesized subtrees (nodes the buffer walker cannot
 * traverse positionally: restructured params, qualified-name chains, module declarations...).
 *
 * Dispatches visitors by ESTree node type via `NODE_TYPE_IDS_MAP`, descending through
 * `visitorKeys`. Handles both plain synthesized nodes and lazy class instances
 * (field access materializes lazily).
 *
 * @param {Object|Array|null} node - Node (or array of nodes) to walk
 * @param {Array} visitors - Compiled visitor array, indexed by node type ID
 */
export function visitSynth(node, visitors) {
  if (node == null) return;
  if (Array.isArray(node)) {
    const len = node.length;
    for (let i = 0; i < len; i++) {
      visitSynth(node[i], visitors);
    }
    return;
  }

  const type = node.type;
  if (typeof type !== "string") return;
  const typeId = NODE_TYPE_IDS_MAP.get(type);
  if (typeId === void 0) return;

  if (typeId < LEAF_NODE_TYPES_COUNT) {
    const visit = visitors[typeId];
    if (visit !== null) visit(node);
    return;
  }

  const enterExit = visitors[typeId];
  let enter = null,
    exit = null;
  if (enterExit !== null) ({ enter, exit } = enterExit);
  if (enter !== null) enter(node);

  const keys = visitorKeys[type];
  for (let i = 0; i < keys.length; i++) {
    visitSynth(node[keys[i]], visitors);
  }

  if (exit !== null) exit(node);
}

// ----------------------------------------------------------------------------
// NodeArray — a lazily-deserializing array of AST nodes.
// Port of `napi/parser/src-js/raw-transfer/node-array.js` with `parent` threading:
// elements are constructed with the array's owning node as their parent.
// ----------------------------------------------------------------------------

// Internal symbol to get `NodeArray` from a proxy wrapping a `NodeArray`.
const ARRAY = Symbol();

// Functions to get internal properties of a `NodeArray`. Initialized in class static block below.
let getInternalFromProxy, getLength, getElement;

/**
 * An array of AST nodes where elements are deserialized lazily upon access.
 * Extends `Array` to make `Array.isArray` return `true` for a `NodeArray`.
 */
export class NodeArray extends Array {
  #internal;

  /**
   * @class
   * @param {number} pos - Buffer position of first element
   * @param {number} length - Number of elements
   * @param {number} stride - Element size in bytes
   * @param {Function} construct - Function to deserialize element `(pos, ast, parent)`
   * @param {Object} ast - AST object
   * @param {Object|null} parent - Parent node for elements
   * @returns {Proxy<NodeArray>} - `NodeArray` wrapped in a `Proxy`
   */
  constructor(pos, length, stride, construct, ast, parent) {
    if (ast?.token !== TOKEN) constructorError();

    super();
    this.#internal = { pos, length, ast, stride, construct, parent };
    return new Proxy(this, PROXY_HANDLERS);
  }

  // Allow `arr.filter`, `arr.map` etc.
  static [Symbol.species] = Array;

  values() {
    return new NodeArrayValuesIterator(this);
  }

  keys() {
    return new NodeArrayKeysIterator(this);
  }

  entries() {
    return new NodeArrayEntriesIterator(this);
  }

  // This method is overwritten with reference to `values` method below.
  [Symbol.iterator]() {}

  /**
   * Override `slice` method to return a `NodeArray`.
   *
   * @this {NodeArray}
   * @param {*} start - Start of slice
   * @param {*} end - End of slice
   * @returns {NodeArray} - `NodeArray` containing slice of this one
   */
  slice(start, end) {
    const internal = this[ARRAY].#internal,
      { length } = internal;

    start = toInt(start);
    if (start < 0) {
      start = length + start;
      if (start < 0) start = 0;
    }

    if (end === void 0) {
      end = length;
    } else {
      end = toInt(end);
      if (end < 0) {
        end += length;
        if (end < 0) end = 0;
      } else if (end > length) {
        end = length;
      }
    }

    let sliceLength = end - start;
    if (sliceLength <= 0 || start >= length) {
      start = 0;
      sliceLength = 0;
    }

    const { stride } = internal;
    return new NodeArray(
      internal.pos + start * stride,
      sliceLength,
      stride,
      internal.construct,
      internal.ast,
      internal.parent,
    );
  }

  // Make `console.log` deserialize all elements.
  [Symbol.for("nodejs.util.inspect.custom")]() {
    const values = [...this.values()];
    Object.setPrototypeOf(values, DebugNodeArray.prototype);
    return values;
  }

  static {
    getInternalFromProxy = (proxy) => proxy[ARRAY].#internal;

    getLength = (arr) => arr.#internal.length;

    getElement = (arr, index) => {
      const internal = arr.#internal;
      if (index >= internal.length) return void 0;
      return (0, internal.construct)(
        internal.pos + index * internal.stride,
        internal.ast,
        internal.parent,
      );
    };
  }
}

// oxlint-disable-next-line typescript/unbound-method
NodeArray.prototype[Symbol.iterator] = NodeArray.prototype.values;

/**
 * Iterator over values of a `NodeArray`.
 */
class NodeArrayValuesIterator {
  #internal;

  constructor(proxy) {
    const internal = getInternalFromProxy(proxy),
      { pos, stride } = internal;

    this.#internal = {
      pos,
      endPos: pos + internal.length * stride,
      ast: internal.ast,
      construct: internal.construct,
      stride,
      parent: internal.parent,
    };
  }

  next() {
    const internal = this.#internal,
      { pos } = internal;
    if (pos === internal.endPos) return { done: true, value: null };
    internal.pos = pos + internal.stride;
    return { done: false, value: (0, internal.construct)(pos, internal.ast, internal.parent) };
  }

  [Symbol.iterator]() {
    return this;
  }
}

/**
 * Iterator over keys of a `NodeArray`.
 */
class NodeArrayKeysIterator {
  #internal;

  constructor(proxy) {
    const internal = getInternalFromProxy(proxy);
    this.#internal = { index: 0, length: internal.length };
  }

  next() {
    const internal = this.#internal,
      { index } = internal;
    if (index === internal.length) return { done: true, value: null };
    internal.index = index + 1;
    return { done: false, value: index };
  }

  [Symbol.iterator]() {
    return this;
  }
}

/**
 * Iterator over entries of a `NodeArray`.
 */
class NodeArrayEntriesIterator {
  #internal;

  constructor(proxy) {
    const internal = getInternalFromProxy(proxy);

    this.#internal = {
      index: 0,
      length: internal.length,
      pos: internal.pos,
      ast: internal.ast,
      construct: internal.construct,
      stride: internal.stride,
      parent: internal.parent,
    };
  }

  next() {
    const internal = this.#internal,
      { index } = internal;
    if (index === internal.length) return { done: true, value: null };
    internal.index = index + 1;
    return {
      done: false,
      value: [
        index,
        (0, internal.construct)(
          internal.pos + index * internal.stride,
          internal.ast,
          internal.parent,
        ),
      ],
    };
  }

  [Symbol.iterator]() {
    return this;
  }
}

// Class used for `[Symbol.for('nodejs.util.inspect.custom')]` method (for `console.log`).
const DebugNodeArray = class NodeArray extends Array {};

// Proxy handlers (lazily deserialize elements; block mutation of elements / `length`).
const PROXY_HANDLERS = {
  has(arr, key) {
    const index = toIndex(key);
    if (index !== null) return index < getLength(arr);
    return Reflect.has(arr, key);
  },

  get(arr, key) {
    if (key === ARRAY) return arr;
    if (key === "length") return getLength(arr);
    const index = toIndex(key);
    if (index !== null) return getElement(arr, index);

    return Reflect.get(arr, key);
  },

  getOwnPropertyDescriptor(arr, key) {
    if (key === "length") {
      return { value: getLength(arr), writable: true, enumerable: false, configurable: false };
    }

    const index = toIndex(key);
    if (index !== null) {
      const value = getElement(arr, index);
      if (value === void 0) return void 0;
      return { value, writable: false, enumerable: true, configurable: true };
    }

    return Reflect.getOwnPropertyDescriptor(arr, key);
  },

  defineProperty(arr, key, descriptor) {
    if (key === "length" || toIndex(key) !== null) return false;
    return Reflect.defineProperty(arr, key, descriptor);
  },

  deleteProperty(arr, key) {
    if (toIndex(key) !== null) return false;
    return Reflect.deleteProperty(arr, key);
  },

  ownKeys(arr) {
    const keys = [],
      length = getLength(arr);
    for (let i = 0; i < length; i++) {
      keys.push(i + "");
    }
    keys.push(...Reflect.ownKeys(arr));
    return keys;
  },
};

function toIndex(key) {
  if (typeof key === "string") {
    if (key === "0") return 0;
    if (INDEX_REGEX.test(key)) {
      const index = +key;
      if (index < 4294967295) return index;
    }
  }
  return null;
}

const INDEX_REGEX = /^[1-9]\d*$/;

function toInt(value) {
  value = Math.trunc(+value);
  // `value === 0` check is to convert -0 to 0
  if (value === 0 || Number.isNaN(value)) return 0;
  return value;
}
