//! Generator for ESTree-shaped lazy deserializer and walker, used by oxlint JS plugins.
//!
//! Unlike `raw_transfer_lazy` (which emits oxc-shaped lazy classes for `napi/parser`),
//! this generator emits classes whose shape matches the eager ESTree deserializer
//! (`apps/oxlint/src-js/generated/deserialize.js`) exactly:
//!
//! * `type` strings use ESTree names (`Identifier`, `Literal`, `Property`...), including
//!   runtime-determined types (`FunctionDeclaration` vs `FunctionExpression`).
//! * Fields follow `#[estree(...)]` renames, ordering, `add_fields`, skips, and concatenation
//!   (`prepend_to` / `append_to`).
//! * Every node has `start`, `end`, `range`, lazy `loc`, and `parent`.
//! * `parent` is resolved lazily through `Frame` objects maintained by the walker,
//!   so ancestors materialize on demand with stable identity (position-keyed cache).
//! * The walker dispatches on oxlint's ESTree node type IDs (shared with `estree_visit`),
//!   so oxlint's compiled visitor plugs in directly.
//!
//! Structural divergences between the oxc AST and ESTree (synthesized nodes, flattened
//! params, module declaration nesting etc.) are handled by hand-written specials in
//! `raw_transfer_lazy_estree_specials.rs`, which port the eager deserializer's logic.
//! Any unhandled divergence panics at codegen time, so new AST changes cannot silently
//! produce wrong shapes.

use std::borrow::Cow;

use cow_utils::CowUtils;

use oxc_index::IndexVec;

use rustc_hash::FxHashMap;

use crate::{
    Codegen, Generator, OXLINT_APP_PATH,
    codegen::DeriveId,
    derives::estree::{
        get_fieldless_variant_value, get_struct_field_name, should_flatten_field,
        should_skip_enum_variant, should_skip_field,
    },
    output::Output,
    schema::{
        Def, EnumDef, FieldDef, Schema, StructDef, TypeDef, TypeId,
        extensions::layout::{GetLayout, GetOffset},
    },
    utils::{format_cow, upper_case_first, write_it},
};

use super::define_generator;
use super::estree_visit::{NodeKeys, get_estree_nodes};
use super::raw_transfer::{
    VEC_LEN_FIELD_OFFSET, VEC_PTR_FIELD_OFFSET, WTF8_DESERIALIZER_BODY,
    get_option_none_condition_and_offset, pos_offset, pos_offset_shift, pos32_offset,
    should_skip_innermost_type,
};
use super::raw_transfer_lazy::{
    CacheKeyOffsets, LocalCacheTypes, STR_DESERIALIZER_BODY, WalkStatus, WalkStatuses,
    is_walked_field,
};

/// Generator for ESTree-shaped lazy deserializer and walker.
pub struct RawTransferLazyESTreeGenerator;

define_generator!(RawTransferLazyESTreeGenerator);

impl Generator for RawTransferLazyESTreeGenerator {
    fn generate_many(&self, schema: &Schema, codegen: &Codegen) -> Vec<Output> {
        let (constructors, walkers) = generate(schema, codegen);

        vec![
            Output::Javascript {
                path: format!("{OXLINT_APP_PATH}/src-js/generated/lazy/constructors.js"),
                code: constructors,
            },
            Output::Javascript {
                path: format!("{OXLINT_APP_PATH}/src-js/generated/lazy/walk.js"),
                code: walkers,
            },
        ]
    }
}

/// Info about an ESTree node type from oxlint's type ID table.
struct EstreeNode {
    id: u32,
    is_leaf: bool,
    keys: Vec<String>,
}

struct State {
    constructors: String,
    walkers: String,
    /// Class / construct function names used by walkers (for import)
    walked_constructor_names: String,
    estree_nodes: FxHashMap<String, EstreeNode>,
    walk_statuses: IndexVec<TypeId, WalkStatus>,
    cache_key_offsets: IndexVec<TypeId, u8>,
    estree_derive_id: DeriveId,
    span_type_id: TypeId,
}

fn generate(schema: &Schema, codegen: &Codegen) -> (String, String) {
    let estree_derive_id = codegen.get_derive_id_by_name("ESTree");
    let span_type_id = schema.type_names["Span"];

    // Build map of ESTree node name -> (type ID, leaf, keys), same IDs as `estree_visit` emits
    // into `apps/oxlint/src-js/generated/type_ids.ts`.
    let nodes: IndexVec<super::estree_visit::NodeId, NodeKeys> = get_estree_nodes(codegen);
    let mut estree_nodes = FxHashMap::default();
    for (node_id, node) in nodes.iter_enumerated() {
        estree_nodes.insert(
            node.name.clone(),
            EstreeNode {
                id: node_id.raw(),
                is_leaf: node.keys.is_empty(),
                keys: node.keys.clone(),
            },
        );
    }

    let cache_key_offsets = CacheKeyOffsets::calculate(estree_derive_id, span_type_id, schema);
    let (walk_statuses, _leaf_nodes_count) = WalkStatuses::calculate(estree_derive_id, schema);

    let mut state = State {
        constructors: String::new(),
        walkers: String::new(),
        walked_constructor_names: String::new(),
        estree_nodes,
        walk_statuses,
        cache_key_offsets,
        estree_derive_id,
        span_type_id,
    };

    for type_def in &schema.types {
        match type_def {
            TypeDef::Struct(struct_def) => generate_struct(struct_def, &mut state, schema),
            TypeDef::Enum(enum_def) => generate_enum(enum_def, &mut state, schema),
            TypeDef::Primitive(primitive_def) => {
                generate_primitive(primitive_def, &mut state, schema);
            }
            TypeDef::Option(option_def) => generate_option(option_def, &mut state, schema),
            TypeDef::Box(box_def) => generate_box(box_def, &mut state, schema),
            TypeDef::Vec(vec_def) => generate_vec(vec_def, &mut state, schema),
            TypeDef::Cell(_) | TypeDef::Pointer(_) => {}
        }
    }

    // Export every top-level `construct*` function so the walker can import the ones it needs
    let constructors_body = state
        .constructors
        .cow_replace("function construct", "export function construct")
        .into_owned();
    let constructors_body = &constructors_body;
    #[rustfmt::skip]
    let constructors = format!("
        import {{ TOKEN, constructorError, Frame, NodeArray, NodeProto, defineOwn }} from '../../plugins/lazy/support.js';
        import {{ getNodeLoc }} from '../../plugins/location.js';
        import {{ tokens, initTokens }} from '../../plugins/tokens.js';
        import {{ comments, initComments }} from '../../plugins/comments.js';

        const textDecoder = new TextDecoder('utf-8', {{ ignoreBOM: true }}),
            decodeStr = textDecoder.decode.bind(textDecoder),
            {{ fromCodePoint }} = String,
            inspectSymbol = Symbol.for('nodejs.util.inspect.custom');

        // Resolve `parent` stored in a node's internal state. May be `null`, a node object,
        // or a `Frame` (from the walker), which is materialized on demand.
        export function resolveParent(internal) {{
            const p = internal.parent;
            if (p === null || !(p instanceof Frame)) return p;
            return internal.parent = p.construct(p.pos, internal.ast, p.parent);
        }}

        {constructors_body}
    ");

    let walkers_body = &state.walkers;
    let walked_constructor_names = &state.walked_constructor_names;
    #[rustfmt::skip]
    let walkers = format!("
        import {{ {walked_constructor_names} }} from './constructors.js';
        import {{ Frame, materializeFrame, visitSynth }} from '../../plugins/lazy/support.js';

        export function walkRoot(pos, ast, visitors) {{
            walkProgram(pos, ast, visitors, null);
        }}

        {walkers_body}
    ");

    (constructors, walkers)
}

// ----------------------------------------------------------------------------
// Function naming (structs get plain `construct{Name}` functions wrapping
// `new {Name}` so they can be referenced in `Frame`s and `NodeArray`s)
// ----------------------------------------------------------------------------

fn plain_name<'s>(type_def: &'s TypeDef, schema: &'s Schema) -> Cow<'s, str> {
    match type_def {
        TypeDef::Struct(def) => Cow::Borrowed(def.name()),
        TypeDef::Enum(def) => Cow::Borrowed(def.name()),
        TypeDef::Primitive(def) => {
            let type_name = def.name();
            if matches!(type_name, "&str" | "Str" | "Ident") {
                Cow::Borrowed("Str")
            } else if let Some(type_name) = type_name.strip_prefix("NonZero") {
                Cow::Borrowed(type_name)
            } else if let Some(type_name) = type_name.strip_prefix("Atomic") {
                Cow::Borrowed(type_name)
            } else {
                upper_case_first(type_name)
            }
        }
        TypeDef::Option(def) => {
            format_cow!("Option{}", plain_name(def.inner_type(schema), schema))
        }
        TypeDef::Box(def) => format_cow!("Box{}", plain_name(def.inner_type(schema), schema)),
        TypeDef::Vec(def) => format_cow!("Vec{}", plain_name(def.inner_type(schema), schema)),
        TypeDef::Cell(def) => plain_name(def.inner_type(schema), schema),
        TypeDef::Pointer(def) => {
            format_cow!("Box{}", plain_name(def.inner_type(schema), schema))
        }
    }
}

fn construct_name(type_def: &TypeDef, schema: &Schema) -> String {
    format!("construct{}", plain_name(type_def, schema))
}

fn walk_name(type_def: &TypeDef, schema: &Schema) -> String {
    format!("walk{}", plain_name(type_def, schema))
}

fn internal_pos(offset: u32) -> Cow<'static, str> {
    if offset == 0 { Cow::Borrowed("internal.pos") } else { format_cow!("internal.pos + {offset}") }
}

// ----------------------------------------------------------------------------
// Structs
// ----------------------------------------------------------------------------

fn generate_struct(struct_def: &StructDef, state: &mut State, schema: &Schema) {
    let is_estree = struct_def.generates_derive(state.estree_derive_id);
    let is_walked = state.walk_statuses[struct_def.id()] == WalkStatus::Walk;
    if !is_estree && !is_walked {
        return;
    }

    let struct_name = struct_def.name();

    // `Span` needs no class of its own: its fields are always flattened into nodes.
    if struct_def.id() == state.span_type_id {
        return;
    }

    // Full specials: hand-written constructs and walkers
    match special_struct(struct_def, state, schema) {
        SpecialKind::Full { construct, walk, import_names } => {
            state.constructors.push_str(&construct);
            state.walkers.push_str(&walk);
            if !import_names.is_empty() {
                write_it!(state.walked_constructor_names, "{import_names}, ");
            }
            return;
        }
        SpecialKind::WalkOnly(_) | SpecialKind::None => {}
    }

    // Structs which aren't ESTree nodes but are walked through (intermediaries)
    let is_intermediary = !is_estree || struct_def.estree.skip;
    if is_intermediary {
        if is_walked {
            let walk_stmts = intermediary_walk_stmts(struct_def, state, schema);
            #[rustfmt::skip]
            write_it!(state.walkers, "
                function walk{struct_name}(pos, ast, visitors, parentFrame) {{
                    {walk_stmts}
                }}
            ");
        }
        return;
    }

    // ESTree type name
    let estree_type_name = struct_def.estree.rename.as_deref().unwrap_or(struct_name);

    // Determine if the struct has a real `type` field (runtime-determined type)
    let has_type_field = struct_def
        .fields
        .iter()
        .any(|field| !should_skip_field(field, schema) && get_struct_field_name(field) == "type");

    // Generate getters for fields
    let mut class_gen = ClassGenerator::new(&*state, schema);
    class_gen.generate_fields(struct_def, 0);
    let ClassGenerator { getters, to_json, extra_props, .. } = class_gen;

    // `no_type` structs are values, not nodes (e.g. `RegExpPattern`). They get no class;
    // their data is materialized inline by the specials of their owning nodes. If walked,
    // they only pass traversal through to their fields.
    if struct_def.estree.no_type && !has_type_field {
        if is_walked {
            let walk_stmts = intermediary_walk_stmts(struct_def, state, schema);
            #[rustfmt::skip]
            write_it!(state.walkers, "
                function walk{struct_name}(pos, ast, visitors, parentFrame) {{
                    {walk_stmts}
                }}
            ");
        }
        return;
    }

    let type_prop_init =
        if has_type_field { String::new() } else { format!("type = '{estree_type_name}';") };
    let to_json =
        if has_type_field { to_json } else { format!("type: '{estree_type_name}',\n{to_json}") };

    emit_class(struct_def, &type_prop_init, &getters, &to_json, &extra_props, state);

    // Generate walk function
    if !is_walked {
        return;
    }

    if let SpecialKind::WalkOnly(walk) = special_struct(struct_def, state, schema) {
        state.walkers.push_str(&walk);
        write_it!(state.walked_constructor_names, "{struct_name}, construct{struct_name}, ");
        return;
    }

    assert!(
        !has_type_field,
        "Struct `{struct_name}` has a runtime-determined `type` and needs a special walker"
    );

    let Some(estree_node) = state.estree_nodes.get(estree_type_name) else {
        // ESTree-derived type that oxlint's walker never visits (e.g. `Hashbang`, which the
        // eager linter deserializer omits from `Program`). Emit a stub walker so container
        // walk functions referencing it still resolve; it is never reached at runtime.
        #[rustfmt::skip]
        write_it!(state.walkers, "
            function walk{struct_name}(pos, ast, visitors, parentFrame) {{}}
        ");
        return;
    };

    let walk_stmts = mechanical_walk_stmts(struct_def, estree_node, &state.walk_statuses, schema);
    let (node_type_id, is_leaf) = (estree_node.id, estree_node.is_leaf);
    emit_walk_fn(
        &format!("walk{struct_name}"),
        struct_name,
        node_type_id,
        is_leaf,
        &walk_stmts,
        state,
    );

    write_it!(state.walked_constructor_names, "{struct_name}, construct{struct_name}, ");
}

/// Emit a class with the standard boilerplate (cache, range, loc, parent, toJSON).
fn emit_class(
    struct_def: &StructDef,
    type_prop_init: &str,
    getters: &str,
    to_json: &str,
    extra_props: &str,
    state: &mut State,
) {
    let mut out = String::new();
    emit_class_code(struct_def, type_prop_init, getters, to_json, extra_props, state, &mut out);
    state.constructors.push_str(&out);
}

#[cfg(any())]
fn emit_class_unused(struct_def: &StructDef, state: &mut State) {
    let struct_name = struct_def.name();
    let cache_key_offset = state.cache_key_offsets[struct_def.id()];
    let (pos_cache_key, cache_key_comment) = if cache_key_offset == 0 {
        (Cow::Borrowed("pos"), "")
    } else {
        (
            pos_offset(cache_key_offset),
            "\n// `pos` would be same as one of fields, so add offset to ensure unique cache key",
        )
    };

    #[rustfmt::skip]
    write_it!(state.constructors, "
        export class {struct_name} {{
            {type_prop_init}
            #internal;

            constructor(pos, ast, parent) {{
                if (ast?.token !== TOKEN) constructorError();

                const {{ nodes }} = ast; {cache_key_comment}
                const cached = nodes.get({pos_cache_key});
                if (cached !== void 0) return cached;

                this.#internal = {{ pos, ast, parent, $range: void 0 {extra_props} }};
                nodes.set({pos_cache_key}, this);
            }}

            {getters}

            get range() {{
                const internal = this.#internal;
                if (internal.$range === void 0) internal.$range = [this.start, this.end];
                return internal.$range;
            }}
            set range(v) {{ defineOwn(this, 'range', v); }}

            get loc() {{
                return getNodeLoc(this);
            }}
            set loc(v) {{ defineOwn(this, 'loc', v); }}

            get parent() {{
                return resolveParent(this.#internal);
            }}
            set parent(v) {{ this.#internal.parent = v; }}

            toJSON() {{
                return {{
                    {to_json}
                    start: this.start,
                    end: this.end,
                    range: this.range,
                }};
            }}

            [inspectSymbol]() {{
                return Object.setPrototypeOf(this.toJSON(), Debug{struct_name}.prototype);
            }}
        }}

        const Debug{struct_name} = class {struct_name} {{}};

        function construct{struct_name}(pos, ast, parent) {{
            return new {struct_name}(pos, ast, parent);
        }}
    ");
}

/// Emit a walk function for an AST node with a static ESTree type.
fn emit_walk_fn(
    walk_fn_name: &str,
    class_name: &str,
    node_type_id: u32,
    is_leaf: bool,
    walk_stmts: &str,
    state: &mut State,
) {
    if is_leaf {
        assert!(
            walk_stmts.is_empty(),
            "`{class_name}` maps to a leaf ESTree type but has walked children"
        );
        #[rustfmt::skip]
        write_it!(state.walkers, "
            function {walk_fn_name}(pos, ast, visitors, parentFrame) {{
                const visit = visitors[{node_type_id}];
                if (visit !== null) visit(new {class_name}(pos, ast, parentFrame));
            }}
        ");
    } else if walk_stmts.is_empty() {
        #[rustfmt::skip]
        write_it!(state.walkers, "
            function {walk_fn_name}(pos, ast, visitors, parentFrame) {{
                const enterExit = visitors[{node_type_id}];
                if (enterExit !== null) {{
                    const {{ enter, exit }} = enterExit;
                    const node = new {class_name}(pos, ast, parentFrame);
                    if (enter !== null) enter(node);
                    if (exit !== null) exit(node);
                }}
            }}
        ");
    } else {
        #[rustfmt::skip]
        write_it!(state.walkers, "
            function {walk_fn_name}(pos, ast, visitors, parentFrame) {{
                const enterExit = visitors[{node_type_id}];
                let node, enter, exit = null;
                if (enterExit !== null) {{
                    ({{ enter, exit }} = enterExit);
                    node = new {class_name}(pos, ast, parentFrame);
                    if (enter !== null) enter(node);
                }}

                const frame = new Frame(construct{class_name}, pos, parentFrame);
                {walk_stmts}

                if (exit !== null) exit(node);
            }}
        ");
    }
}

/// Generate walk statements for a mechanical struct, in ESTree visitor-keys order.
fn mechanical_walk_stmts(
    struct_def: &StructDef,
    estree_node: &EstreeNode,
    walk_statuses: &IndexVec<TypeId, WalkStatus>,
    schema: &Schema,
) -> String {
    let struct_name = struct_def.name();
    let mut walk_stmts = String::new();
    for key in &estree_node.keys {
        // Find field by ESTree name
        let field = struct_def.fields.iter().find(|field| {
            !should_skip_field(field, schema) && get_struct_field_name(field) == *key
        });
        let Some(field) = field else {
            // Key with no matching field: either an `add_fields` constant (never walked),
            // or a structural divergence that requires a special.
            let is_added = struct_def.estree.add_fields.iter().any(|(name, _)| name == key);
            assert!(
                is_added,
                "Struct `{struct_name}`: ESTree key `{key}` has no matching field; needs a special walker"
            );
            continue;
        };
        if field.estree.prepend_field_index.is_some() || field.estree.append_field_index.is_some() {
            // Concat target: walk all parts in order
            let mut concat_fields: [&FieldDef; 3] = [field; 3];
            let mut concat_field_count = 1;
            if let Some(prepend_field_index) = field.estree.prepend_field_index {
                concat_fields[0] = &struct_def.fields[prepend_field_index];
                concat_fields[1] = field;
                concat_field_count = 2;
            }
            if let Some(append_field_index) = field.estree.append_field_index {
                concat_fields[concat_field_count] = &struct_def.fields[append_field_index];
                concat_field_count += 1;
            }
            for &concat_field in &concat_fields[..concat_field_count] {
                let field_type = concat_field.type_def(schema);
                if walk_statuses[field_type.id()] == WalkStatus::Walk {
                    let inner_walk_fn_name = walk_name(field_type, schema);
                    let pos = pos_offset(concat_field.offset_64());
                    write_it!(walk_stmts, "{inner_walk_fn_name}({pos}, ast, visitors, frame);\n");
                }
            }
            continue;
        }
        let field_type = field.type_def(schema);
        if walk_statuses[field_type.id()] == WalkStatus::Walk {
            let inner_walk_fn_name = walk_name(field_type, schema);
            let pos = pos_offset(field.offset_64());
            write_it!(walk_stmts, "{inner_walk_fn_name}({pos}, ast, visitors, frame);\n");
        }
    }
    walk_stmts
}

/// Generate walk statements for an intermediary struct, in Rust field order
/// (these never produce visited nodes; order only matters for traversal of children).
fn intermediary_walk_stmts(struct_def: &StructDef, state: &State, schema: &Schema) -> String {
    let mut walk_stmts = String::new();
    for field in &struct_def.fields {
        let field_type = field.type_def(schema);
        if is_walked_field(field, schema)
            && state.walk_statuses[field_type.id()] == WalkStatus::Walk
        {
            let inner_walk_fn_name = walk_name(field_type, schema);
            let pos = pos_offset(field.offset_64());
            write_it!(walk_stmts, "{inner_walk_fn_name}({pos}, ast, visitors, parentFrame);\n");
        }
    }
    walk_stmts
}

// ----------------------------------------------------------------------------
// Class getter generation
// ----------------------------------------------------------------------------

struct ClassGenerator<'s> {
    getters: String,
    to_json: String,
    extra_props: String,
    local_cache_types: LocalCacheTypes<'s>,
    span_type_id: TypeId,
    schema: &'s Schema,
    skip_fields: Vec<&'static str>,
}

impl<'s> ClassGenerator<'s> {
    fn new(state: &State, schema: &'s Schema) -> Self {
        Self {
            getters: String::new(),
            to_json: String::new(),
            extra_props: String::new(),
            local_cache_types: LocalCacheTypes::new(schema),
            span_type_id: state.span_type_id,
            schema,
            skip_fields: Vec::new(),
        }
    }

    fn generate_fields(&mut self, struct_def: &StructDef, struct_offset: u32) {
        for &field_index in &struct_def.estree.field_indices {
            let field_index = field_index as usize;
            if let Some(field) = struct_def.fields.get(field_index) {
                self.generate_field(field, struct_def, struct_offset);
            } else {
                let (field_name, converter_name) =
                    &struct_def.estree.add_fields[field_index - struct_def.fields.len()];
                self.generate_converter_getter(
                    field_name,
                    converter_name,
                    struct_def,
                    struct_offset,
                );
            }
        }
    }

    fn generate_field(&mut self, field: &FieldDef, struct_def: &StructDef, struct_offset: u32) {
        let schema = self.schema;

        if should_skip_field(field, schema) {
            return;
        }
        // JS-only fields are excluded from oxlint's AST (IS_TS variant)
        if field.estree.is_js {
            return;
        }

        let field_name = get_struct_field_name(field).to_string();
        if self.skip_fields.iter().any(|skip| *skip == field_name) {
            return;
        }
        let field_offset = struct_offset + field.offset_64();
        let field_type = field.type_def(schema);

        // Flatten (`span: Span` and other flattened structs)
        if should_flatten_field(field, schema) {
            let TypeDef::Struct(field_struct_def) = field_type else {
                panic!("Cannot flatten non-struct field `{}::{}`", struct_def.name(), field.name());
            };
            if field_struct_def.id() == self.span_type_id {
                self.emit_span_getters(field_offset);
            } else {
                self.generate_fields(field_struct_def, field_offset);
            }
            return;
        }

        // Concatenated fields (prepend_to / append_to)
        let mut concat_fields: [&FieldDef; 3] = [field; 3];
        let mut concat_field_count = 1;
        if let Some(prepend_field_index) = field.estree.prepend_field_index {
            concat_fields[0] = &struct_def.fields[prepend_field_index];
            concat_fields[1] = field;
            concat_field_count = 2;
        }
        if let Some(append_field_index) = field.estree.append_field_index {
            concat_fields[concat_field_count] = &struct_def.fields[append_field_index];
            concat_field_count += 1;
        }
        if concat_field_count > 1 {
            let mut body = String::new();
            write_it!(body, "const arr = [];\n");
            for &concat_field in &concat_fields[..concat_field_count] {
                let field_pos = internal_pos(struct_offset + concat_field.offset_64());
                match concat_field.type_def(schema) {
                    TypeDef::Vec(_) => {
                        let fn_name = construct_name(concat_field.type_def(schema), schema);
                        write_it!(
                            body,
                            "arr.push(...{fn_name}({field_pos}, internal.ast, this));\n"
                        );
                    }
                    TypeDef::Option(_) => {
                        let fn_name = construct_name(concat_field.type_def(schema), schema);
                        write_it!(
                            body,
                            "{{ const item = {fn_name}({field_pos}, internal.ast, this); if (item !== null) arr.push(item); }}\n"
                        );
                    }
                    _ => panic!(
                        "Cannot concat field `{}::{}`",
                        struct_def.name(),
                        concat_field.name()
                    ),
                }
            }
            write_it!(self.extra_props, ", ${field_name}: void 0");
            #[rustfmt::skip]
            write_it!(self.getters, "
                get {field_name}() {{
                    const internal = this.#internal;
                    if (internal.${field_name} !== void 0) return internal.${field_name};
                    {body}
                    return internal.${field_name} = arr;
                }}
                set {field_name}(v) {{ this.#internal.${field_name} = v; }}
            ");
            write_it!(self.to_json, "{field_name}: this.{field_name},\n");
            return;
        }

        // `from_span` fields: value is `sourceText.slice(start, end)`
        if field.estree.from_span {
            let prefix = if let TypeDef::Option(option_def) = field_type {
                let inner_type = option_def.inner_type(schema);
                let (none_condition, _) =
                    get_option_none_condition_and_offset(option_def, inner_type, field_offset);
                let none_condition = lazyify_buffer_refs(&none_condition);
                format!("({none_condition}) ? null : ")
            } else {
                String::new()
            };
            #[rustfmt::skip]
            write_it!(self.getters, "
                get {field_name}() {{
                    const internal = this.#internal, ast = internal.ast, pos = internal.pos;
                    return {prefix}ast.sourceText.slice(this.start, this.end);
                }}
                set {field_name}(v) {{ defineOwn(this, '{field_name}', v); }}
            ");
            write_it!(self.to_json, "{field_name}: this.{field_name},\n");
            return;
        }

        // `via` converters
        if let Some(converter_name) = &field.estree.via {
            let converter_name = converter_name.clone();
            self.generate_converter_getter(&field_name, &converter_name, struct_def, struct_offset);
            return;
        }

        // Default: plain constructor call.
        // `Box<FormalParameters>` fields construct a fresh plain array each call,
        // so they must be cached for identity stability.
        let needs_cached_prop = self.local_cache_types.needs_cached_prop(field_type)
            || matches!(
                field_type.innermost_type(schema),
                TypeDef::Struct(inner) if inner.name() == "FormalParameters"
            );
        let value_fn = construct_name(field_type, schema);
        let pos = internal_pos(field_offset);
        if needs_cached_prop {
            write_it!(self.extra_props, ", ${field_name}: void 0");
            #[rustfmt::skip]
            write_it!(self.getters, "
                get {field_name}() {{
                    const internal = this.#internal,
                        cached = internal.${field_name};
                    if (cached !== void 0) return cached;
                    return internal.${field_name} = {value_fn}({pos}, internal.ast, this);
                }}
                set {field_name}(v) {{ this.#internal.${field_name} = v; }}
            ");
        } else {
            #[rustfmt::skip]
            write_it!(self.getters, "
                get {field_name}() {{
                    const internal = this.#internal;
                    return {value_fn}({pos}, internal.ast, this);
                }}
                set {field_name}(v) {{ defineOwn(this, '{field_name}', v); }}
            ");
        }
        write_it!(self.to_json, "{field_name}: this.{field_name},\n");
    }

    fn emit_span_getters(&mut self, span_offset: u32) {
        for (span_field_name, extra) in [("start", 0u32), ("end", 4u32)] {
            let pos = internal_pos(span_offset + extra);
            #[rustfmt::skip]
            write_it!(self.getters, "
                get {span_field_name}() {{
                    const internal = this.#internal;
                    return internal.ast.buffer.int32[({pos}) >> 2];
                }}
                set {span_field_name}(v) {{ defineOwn(this, '{span_field_name}', v); }}
            ");
        }
    }

    fn generate_converter_getter(
        &mut self,
        field_name: &str,
        converter_name: &str,
        struct_def: &StructDef,
        struct_offset: u32,
    ) {
        let schema = self.schema;
        let converter = schema.meta_by_name(converter_name);
        if converter.estree.is_js {
            return;
        }
        let raw_deser = converter
            .estree
            .raw_deser
            .as_deref()
            .unwrap_or_else(|| panic!("Converter `{converter_name}` has no `raw_deser`"));

        // Simple constant templates (e.g. `false`, `null`, `[]`, `'this'`, `'init'`)
        let trimmed = raw_deser.trim();
        let is_constant = !trimmed.contains('\n')
            && !["POS", "DESER", "THIS", "SOURCE_TEXT", "uint8", "int32", "float64"]
                .iter()
                .any(|token| trimmed.contains(token));
        if is_constant {
            if trimmed.contains('[') || trimmed.contains('{') {
                // Object/array constants: cache for identity stability
                write_it!(self.extra_props, ", ${field_name}: void 0");
                #[rustfmt::skip]
                write_it!(self.getters, "
                    get {field_name}() {{
                        const internal = this.#internal;
                        if (internal.${field_name} !== void 0) return internal.${field_name};
                        return internal.${field_name} = {trimmed};
                    }}
                    set {field_name}(v) {{ this.#internal.${field_name} = v; }}
                ");
            } else {
                #[rustfmt::skip]
                write_it!(self.getters, "
                    get {field_name}() {{
                        return {trimmed};
                    }}
                    set {field_name}(v) {{ defineOwn(this, '{field_name}', v); }}
                ");
            }
            write_it!(self.to_json, "{field_name}: this.{field_name},\n");
            return;
        }

        // General template substitution (POS_OFFSET / DESER[..] / THIS.x / SOURCE_TEXT /
        // buffer views). Templates that mutate or reference the eager `node` / `parent`
        // locals can't be expressed as getters and need hand-written specials.
        if let Some(replaced) =
            substitute_lazy_template(raw_deser, struct_def, struct_offset, schema)
        {
            let preamble = replaced_preamble(&replaced).to_string();
            let value = replaced_value(&replaced).to_string();
            if replaced.contains("constructVec") {
                write_it!(self.extra_props, ", ${field_name}: void 0");
                #[rustfmt::skip]
                write_it!(self.getters, "
                    get {field_name}() {{
                        const internal = this.#internal, ast = internal.ast, pos = internal.pos;
                        if (internal.${field_name} !== void 0) return internal.${field_name};
                        {preamble}
                        return internal.${field_name} = {value};
                    }}
                    set {field_name}(v) {{ this.#internal.${field_name} = v; }}
                ");
            } else {
                #[rustfmt::skip]
                write_it!(self.getters, "
                    get {field_name}() {{
                        const internal = this.#internal, ast = internal.ast, pos = internal.pos;
                        {preamble}
                        return {value};
                    }}
                    set {field_name}(v) {{ defineOwn(this, '{field_name}', v); }}
                ");
            }
            write_it!(self.to_json, "{field_name}: this.{field_name},\n");
            return;
        }

        panic!(
            "Struct `{}`: converter `{converter_name}` for field `{field_name}` needs a special class",
            struct_def.name(),
        );
    }
}

/// Split a substituted template into preamble (all but last line) and value (last line).
fn replaced_preamble(replaced: &str) -> &str {
    match replaced.trim().rsplit_once('\n') {
        Some((preamble, _)) => preamble,
        None => "",
    }
}

fn replaced_value(replaced: &str) -> &str {
    match replaced.trim().rsplit_once('\n') {
        Some((_, value)) => value.trim(),
        None => replaced.trim(),
    }
}

/// Check if `token` occurs as a whole word in `text`.
fn contains_word(text: &str, token: &str) -> bool {
    let bytes = text.as_bytes();
    let mut search_start = 0;
    while let Some(idx) = text[search_start..].find(token) {
        let idx = search_start + idx;
        let before_ok = idx == 0 || {
            let b = bytes[idx - 1];
            !b.is_ascii_alphanumeric() && b != b'_' && b != b'.' && b != b'$'
        };
        let after = idx + token.len();
        let after_ok = after >= bytes.len() || {
            let b = bytes[after];
            !b.is_ascii_alphanumeric() && b != b'_'
        };
        if before_ok && after_ok {
            return true;
        }
        search_start = idx + token.len();
    }
    false
}

/// Substitute a converter `raw_deser` template for the lazy getter context, where
/// `pos`, `ast`, and `this` locals are in scope.
///
/// Handles:
/// * `POS_OFFSET<Struct>.a.b [+ n | >> n]` -> `pos + N` / `(pos >> n) + N`
/// * `DESER[Type](args)` -> `construct<Type>(args, ast, this)` (paren-matched)
/// * `THIS.x` -> `this.x`
/// * `SOURCE_TEXT` -> `ast.sourceText`
/// * `uint8[` / `int32[` / `float64[` -> `ast.buffer...[`
///
/// Returns `None` if the template references the eager deserializer's `node` or `parent`
/// locals (those need hand-written specials), or still contains unresolved tokens.
fn substitute_lazy_template(
    template: &str,
    struct_def: &StructDef,
    struct_offset: u32,
    schema: &Schema,
) -> Option<String> {
    // Templates referencing the eager `node` / `parent` locals can't become getters
    if contains_word(template, "node")
        || contains_word(template, "parent")
        || template.contains("Object.defineProperty")
    {
        return None;
    }

    // 1. POS_OFFSET substitution
    let mut out = String::new();
    let mut rest = template;
    while let Some(idx) = rest.find("POS_OFFSET") {
        out.push_str(&rest[..idx]);
        rest = &rest[idx + "POS_OFFSET".len()..];

        // Optional `<Struct>` qualifier
        let target_struct = if let Some(stripped) = rest.strip_prefix('<') {
            let close = stripped.find('>')?;
            let name = &stripped[..close];
            rest = &stripped[close + 1..];
            schema.type_by_name(name).as_struct()?
        } else {
            struct_def
        };

        // `.field(.field)*`
        let mut offset = struct_offset;
        let mut current_struct = target_struct;
        loop {
            let stripped = rest.strip_prefix('.')?;
            let end = stripped
                .find(|c: char| !c.is_ascii_alphanumeric() && c != '_')
                .unwrap_or(stripped.len());
            let field_name = &stripped[..end];
            let field = current_struct.field_by_name(field_name);
            offset += field.offset_64();
            let ftype = field.type_def(schema);
            rest = &stripped[end..];
            if rest.starts_with('.') {
                current_struct = ftype.as_struct()?;
            } else {
                break;
            }
        }

        // Optional ` + n` / ` >> n`
        let trimmed_rest = rest.trim_start();
        if let Some(stripped) = trimmed_rest.strip_prefix(">>") {
            let stripped = stripped.trim_start();
            let end = stripped.find(|c: char| !c.is_ascii_digit()).unwrap_or(stripped.len());
            let right: u32 = stripped[..end].parse().ok()?;
            rest = &stripped[end..];
            if offset == 0 {
                write_it!(out, "pos >> {right}");
            } else {
                let offset_shifted = offset >> right;
                write_it!(out, "(pos >> {right}) + {offset_shifted}");
            }
            continue;
        }
        if let Some(stripped) = trimmed_rest.strip_prefix('+') {
            let stripped = stripped.trim_start();
            if stripped.starts_with(|c: char| c.is_ascii_digit()) {
                let end = stripped.find(|c: char| !c.is_ascii_digit()).unwrap_or(stripped.len());
                let right: u32 = stripped[..end].parse().ok()?;
                offset += right;
                rest = &stripped[end..];
            }
        }
        if offset == 0 {
            out.push_str("pos");
        } else {
            write_it!(out, "pos + {offset}");
        }
    }
    out.push_str(rest);

    // 2. DESER[Type](args) -> construct<Type>(args, ast, this)
    let mut result = String::new();
    let mut rest = out.as_str();
    while let Some(idx) = rest.find("DESER[") {
        result.push_str(&rest[..idx]);
        rest = &rest[idx + "DESER[".len()..];
        let close = rest.find(']')?;
        let type_name = &rest[..close];
        rest = &rest[close + 1..];
        let type_def = schema.type_by_name(type_name);
        let fn_name = construct_name(type_def, schema);
        // Paren-match the argument list
        if !rest.starts_with('(') {
            return None;
        }
        let mut depth = 0usize;
        let mut end = None;
        for (i, b) in rest.bytes().enumerate() {
            if b == b'(' {
                depth += 1;
            } else if b == b')' {
                depth -= 1;
                if depth == 0 {
                    end = Some(i);
                    break;
                }
            }
        }
        let end = end?;
        let args = &rest[1..end];
        rest = &rest[end + 1..];
        write_it!(result, "{fn_name}({args}, ast, this)");
    }
    result.push_str(rest);

    // 3. THIS.x -> this.x; SOURCE_TEXT; buffer views
    let result = result.cow_replace("THIS.", "this.").into_owned();
    let result = result.cow_replace("SOURCE_TEXT", "ast.sourceText").into_owned();
    let result = lazyify_buffer_refs(&result);

    // Check for leftovers
    let still_has_tokens =
        ["POS", "DESER", "THIS", "SOURCE_TEXT"].iter().any(|token| result.contains(token));
    if still_has_tokens { None } else { Some(result) }
}

/// Rewrite eager buffer references (`uint8[...]`, `int32[...]`) for the lazy context,
/// where `pos` and `ast` locals are in scope.
fn lazyify_buffer_refs(condition: &str) -> String {
    condition
        .cow_replace("uint8[", "ast.buffer[")
        .into_owned()
        .cow_replace("int32[", "ast.buffer.int32[")
        .into_owned()
        .cow_replace("float64[", "ast.buffer.float64[")
        .into_owned()
}

// ----------------------------------------------------------------------------
// Enums
// ----------------------------------------------------------------------------

fn generate_enum(enum_def: &EnumDef, state: &mut State, schema: &Schema) {
    let is_walked = state.walk_statuses[enum_def.id()] == WalkStatus::Walk;
    let is_constructed = enum_def.generates_derive(state.estree_derive_id) && !enum_def.estree.skip;
    if !is_constructed && !is_walked {
        return;
    }

    // Specials (JSXElementName / JSXMemberExpressionObject synthesize nodes)
    if let Some(special) = special_enum(enum_def, state, schema) {
        state.constructors.push_str(&special.0);
        state.walkers.push_str(&special.1);
        let construct_fn_name = construct_name(&schema.types[enum_def.id()], schema);
        write_it!(state.walked_constructor_names, "{construct_fn_name}, ");
        return;
    }

    let type_name = enum_def.name();
    let payload_offset = enum_def.layout_64().align;

    let mut variants = enum_def
        .all_variants(schema)
        .filter(|variant| !should_skip_enum_variant(variant))
        .collect::<Vec<_>>();
    variants.sort_by_key(|variant| variant.discriminant);

    let mut construct_cases = String::new();
    let mut walk_cases = String::new();
    for variant in variants {
        write_it!(construct_cases, "case {}: ", variant.discriminant);
        write_it!(walk_cases, "case {}: ", variant.discriminant);

        if let Some(variant_type) = variant.field_type(schema) {
            let payload_pos = pos_offset(payload_offset);
            let variant_construct_fn_name = construct_name(variant_type, schema);
            write_it!(
                construct_cases,
                "return {variant_construct_fn_name}({payload_pos}, ast, parent);"
            );

            if state.walk_statuses[variant_type.id()] == WalkStatus::Walk {
                let variant_walk_fn_name = walk_name(variant_type, schema);
                write_it!(
                    walk_cases,
                    "{variant_walk_fn_name}({payload_pos}, ast, visitors, parentFrame); return;"
                );
            } else {
                write_it!(walk_cases, "return;");
            }
        } else {
            if is_constructed {
                write_it!(
                    construct_cases,
                    "return '{}';",
                    get_fieldless_variant_value(enum_def, variant)
                );
            }
            write_it!(walk_cases, "return;");
        }
    }

    if is_constructed {
        let construct_fn_name = construct_name(&schema.types[enum_def.id()], schema);
        #[rustfmt::skip]
        write_it!(state.constructors, "
            function {construct_fn_name}(pos, ast, parent) {{
                switch (ast.buffer[pos]) {{
                    {construct_cases}
                    default: throw new Error(`Unexpected discriminant ${{ast.buffer[pos]}} for {type_name}`);
                }}
            }}
        ");
    }

    if is_walked {
        let walk_fn_name = walk_name(&schema.types[enum_def.id()], schema);
        #[rustfmt::skip]
        write_it!(state.walkers, "
            function {walk_fn_name}(pos, ast, visitors, parentFrame) {{
                switch (ast.buffer[pos]) {{
                    {walk_cases}
                    default: throw new Error(`Unexpected discriminant ${{ast.buffer[pos]}} for {type_name}`);
                }}
            }}
        ");
    }
}

// ----------------------------------------------------------------------------
// Primitives / Option / Box / Vec
// ----------------------------------------------------------------------------

fn generate_primitive(
    primitive_def: &crate::schema::PrimitiveDef,
    state: &mut State,
    schema: &Schema,
) {
    let js_str_body;
    #[expect(clippy::match_same_arms)]
    let ret = match primitive_def.name() {
        "Str" | "Ident" => return,
        "PointerAlign" => return,
        "bool" => "return ast.buffer[pos] === 1;",
        "u8" => "return ast.buffer[pos];",
        "u32" => "return ast.buffer.int32[pos >> 2] >>> 0;",
        "i32" => "return ast.buffer.int32[pos >> 2];",
        #[rustfmt::skip]
        "u64" => "
            const { int32 } = ast.buffer,
                pos32 = pos >> 2;
            return (int32[pos32] >>> 0)
                + (int32[pos32 + 1] >>> 0) * /* 2^32 */ 4294967296;
        ",
        #[rustfmt::skip]
        "u128" => "
            const { int32 } = ast.buffer,
                pos32 = pos >> 2;
            return (int32[pos32] >>> 0)
                + (int32[pos32 + 1] >>> 0) * /* 2^32 */ 4294967296
                + (int32[pos32 + 2] >>> 0) * /* 2^64 */ 18446744073709551616
                + (int32[pos32 + 3] >>> 0) * /* 2^96 */ 79228162514264337593543950336;
        ",
        "f64" => "return ast.buffer.float64[pos >> 3];",
        "&str" => STR_DESERIALIZER_BODY,
        "JSStr" => {
            js_str_body = format!(
                "
                const {{ buffer }} = ast;
                if (buffer[pos + 12] === 0) return constructStr(pos, ast);
                const {{ int32 }} = buffer;
                {WTF8_DESERIALIZER_BODY}
            "
            );
            &js_str_body
        }
        type_name if type_name.starts_with("NonZero") => return,
        type_name if type_name.starts_with("Atomic") => return,
        type_name => panic!("Cannot generate constructor for primitive `{type_name}`"),
    };

    let construct_fn_name = construct_name(&schema.types[primitive_def.id()], schema);
    #[rustfmt::skip]
    write_it!(state.constructors, "
        function {construct_fn_name}(pos, ast) {{
            {ret}
        }}
    ");
}

fn generate_option(option_def: &crate::schema::OptionDef, state: &mut State, schema: &Schema) {
    let inner_type = option_def.inner_type(schema);
    let is_walked = state.walk_statuses[option_def.id()] == WalkStatus::Walk;
    let is_constructed = !should_skip_innermost_type(inner_type, state.estree_derive_id, schema);
    if !is_constructed && !is_walked {
        return;
    }

    let inner_layout = inner_type.layout_64();
    let (none_condition, payload_pos) = if option_def.layout_64().size == inner_layout.size {
        let niche = inner_layout.niche.clone().unwrap();
        let none_condition = match niche.size {
            1 => format!("ast.buffer[{}] === {}", pos_offset(niche.offset), niche.value()),
            4 => format!(
                "ast.buffer.int32[{}] === {}",
                pos_offset_shift(niche.offset, 2),
                niche.value()
            ),
            8 => {
                let value = niche.value();
                format!(
                    "ast.buffer.int32[{}] === {} && ast.buffer.int32[{}] === {}",
                    pos_offset_shift(niche.offset, 2),
                    value & u128::from(u32::MAX),
                    pos_offset_shift(niche.offset + 4, 2),
                    value >> 32,
                )
            }
            size => panic!("Invalid niche size: {size}"),
        };
        (none_condition, Cow::Borrowed("pos"))
    } else {
        ("ast.buffer[pos] === 0".to_string(), pos_offset(inner_layout.align))
    };

    if is_constructed {
        let construct_fn_name = construct_name(&schema.types[option_def.id()], schema);
        let inner_construct_fn_name = construct_name(inner_type, schema);
        #[rustfmt::skip]
        write_it!(state.constructors, "
            function {construct_fn_name}(pos, ast, parent) {{
                if ({none_condition}) return null;
                return {inner_construct_fn_name}({payload_pos}, ast, parent);
            }}
        ");
    }

    if is_walked {
        let walk_fn_name = walk_name(&schema.types[option_def.id()], schema);
        let inner_walk_fn_name = walk_name(inner_type, schema);
        #[rustfmt::skip]
        write_it!(state.walkers, "
            function {walk_fn_name}(pos, ast, visitors, parentFrame) {{
                if (!({none_condition})) {inner_walk_fn_name}({payload_pos}, ast, visitors, parentFrame);
            }}
        ");
    }
}

fn generate_box(box_def: &crate::schema::BoxDef, state: &mut State, schema: &Schema) {
    let inner_type = box_def.inner_type(schema);
    let is_walked = state.walk_statuses[box_def.id()] == WalkStatus::Walk;
    let is_constructed = !should_skip_innermost_type(inner_type, state.estree_derive_id, schema);
    if !is_constructed && !is_walked {
        return;
    }

    if is_constructed {
        let construct_fn_name = construct_name(&schema.types[box_def.id()], schema);
        let inner_construct_fn_name = construct_name(inner_type, schema);
        #[rustfmt::skip]
        write_it!(state.constructors, "
            function {construct_fn_name}(pos, ast, parent) {{
                return {inner_construct_fn_name}(ast.buffer.int32[pos >> 2], ast, parent);
            }}
        ");
    }

    if is_walked {
        let walk_fn_name = walk_name(&schema.types[box_def.id()], schema);
        let inner_walk_fn_name = walk_name(inner_type, schema);
        #[rustfmt::skip]
        write_it!(state.walkers, "
            function {walk_fn_name}(pos, ast, visitors, parentFrame) {{
                return {inner_walk_fn_name}(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
            }}
        ");
    }
}

fn generate_vec(vec_def: &crate::schema::VecDef, state: &mut State, schema: &Schema) {
    let inner_type = vec_def.inner_type(schema);
    let is_walked = state.walk_statuses[vec_def.id()] == WalkStatus::Walk;
    let is_constructed = !should_skip_innermost_type(inner_type, state.estree_derive_id, schema);
    if !is_constructed && !is_walked {
        return;
    }

    let inner_type_size = inner_type.layout_64().size;
    let ptr_pos32 = pos32_offset(VEC_PTR_FIELD_OFFSET);
    let len_pos32 = pos32_offset(VEC_LEN_FIELD_OFFSET);

    if is_constructed {
        let construct_fn_name = construct_name(&schema.types[vec_def.id()], schema);
        let inner_construct_fn_name = construct_name(inner_type, schema);
        #[rustfmt::skip]
        write_it!(state.constructors, "
            function {construct_fn_name}(pos, ast, parent) {{
                const {{ int32 }} = ast.buffer,
                    pos32 = pos >> 2;
                return new NodeArray(
                    int32[{ptr_pos32}],
                    int32[{len_pos32}],
                    {inner_type_size},
                    {inner_construct_fn_name},
                    ast,
                    parent,
                );
            }}
        ");
    }

    if is_walked {
        let walk_fn_name = walk_name(&schema.types[vec_def.id()], schema);
        let inner_walk_fn_name = walk_name(inner_type, schema);
        #[rustfmt::skip]
        write_it!(state.walkers, "
            function {walk_fn_name}(pos, ast, visitors, parentFrame) {{
                const {{ int32 }} = ast.buffer,
                    pos32 = pos >> 2;
                pos = int32[{ptr_pos32}];
                const endPos = pos + int32[{len_pos32}] * {inner_type_size};
                while (pos < endPos) {{
                    {inner_walk_fn_name}(pos, ast, visitors, parentFrame);
                    pos += {inner_type_size};
                }}
            }}
        ");
    }
}

// ----------------------------------------------------------------------------
// Specials — see `raw_transfer_lazy_estree_specials.rs`
// ----------------------------------------------------------------------------

/// How a struct is handled.
enum SpecialKind {
    /// Not special: fully mechanical
    None,
    /// Class is mechanical, but the walker is hand-written
    /// (e.g. runtime-determined node types)
    WalkOnly(String),
    /// Both construct code and walker are hand-written
    Full {
        construct: String,
        walk: String,
        /// Comma-separated names to add to walker imports
        import_names: String,
    },
}

// Helpers used by specials

fn field_offset(struct_def: &StructDef, field_name: &str) -> u32 {
    struct_def.field_by_name(field_name).offset_64()
}

fn estree_id(state: &State, name: &str) -> u32 {
    state.estree_nodes.get(name).unwrap_or_else(|| panic!("No ESTree node `{name}`")).id
}

include!("raw_transfer_lazy_estree_specials.rs");
