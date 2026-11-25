// Hand-written specials for the ESTree-shaped lazy generator.
//
// Each function here ports the corresponding logic from the eager ESTree deserializer
// (`apps/oxlint/src-js/generated/deserialize.js`) to the lazy world. Buffer offsets are
// computed from the schema, never hard-coded, so layout changes can't silently break them.
//
// This file is `include!`d into `raw_transfer_lazy_estree.rs` (same module).

/// Dispatch for struct specials.
fn special_struct(struct_def: &StructDef, state: &State, schema: &Schema) -> SpecialKind {
    match struct_def.name() {
        "Program" => special_program(struct_def, state, schema),
        "Function" => special_function(struct_def, state, schema),
        "FormalParameters" => special_formal_parameters(struct_def, state, schema),
        "FormalParameter" => special_formal_parameter(struct_def, state, schema),
        "FormalParameterRest" => special_formal_parameter_rest(struct_def, state, schema),
        "Class" => special_runtime_type_walk(
            struct_def,
            state,
            schema,
            &["ClassDeclaration", "ClassExpression"],
        ),
        "MethodDefinition" => special_runtime_type_walk(
            struct_def,
            state,
            schema,
            &["MethodDefinition", "TSAbstractMethodDefinition"],
        ),
        "PropertyDefinition" => special_runtime_type_walk(
            struct_def,
            state,
            schema,
            &["PropertyDefinition", "TSAbstractPropertyDefinition"],
        ),
        "AccessorProperty" => special_runtime_type_walk(
            struct_def,
            state,
            schema,
            &["AccessorProperty", "TSAbstractAccessorProperty"],
        ),
        "ParenthesizedExpression" => special_passthrough(struct_def, "expression", schema),
        "TSParenthesizedType" => special_passthrough(struct_def, "type_annotation", schema),
        "CatchParameter" => special_catch_parameter(struct_def, schema),
        "Elision" => SpecialKind::Full {
            construct: "
                function constructElision(pos, ast, parent) { return null; }
            "
            .to_string(),
            walk: "
                function walkElision(pos, ast, visitors, parentFrame) {}
            "
            .to_string(),
            import_names: "constructElision".to_string(),
        },
        "BooleanLiteral" => special_boolean_literal(struct_def, state, schema),
        "NullLiteral" => special_null_literal(struct_def, state, schema),
        "BigIntLiteral" => special_bigint_literal(struct_def, state, schema),
        "RegExpLiteral" => special_regexp_literal(struct_def, state, schema),
        // Materialized inline by `RegExpLiteral`; no standalone output
        "RegExp" | "RegExpFlags" | "TemplateElementValue" => SpecialKind::Full {
            construct: String::new(),
            walk: String::new(),
            import_names: String::new(),
        },
        "TemplateElement" => special_template_element(struct_def, state, schema),
        "ImportMeta" => special_meta_property(struct_def, state, schema, "import", "meta"),
        "NewTarget" => special_meta_property(struct_def, state, schema, "new", "target"),
        "AssignmentTargetPropertyIdentifier" => {
            special_assignment_target_property_identifier(struct_def, state, schema)
        }
        "ImportDeclaration" => special_import_declaration(struct_def, state, schema),
        "TSClassImplements" | "TSInterfaceHeritage" => {
            special_ts_heritage(struct_def, state, schema)
        }
        "WithClause" => special_with_clause_struct(struct_def, state, schema),
        "VariableDeclarator" => special_variable_declarator(struct_def, state, schema),
        "TSFunctionType" | "TSCallSignatureDeclaration" | "TSMethodSignature" => {
            special_params_with_this(struct_def, state, schema)
        }
        "TSIndexSignature" => special_ts_index_signature(struct_def, state, schema),
        "TSMappedType" => special_ts_mapped_type(struct_def, state, schema),
        "JSXElement" => special_jsx_element(struct_def, state, schema),
        "ExportAllDeclaration" | "ExportNamedDeclaration" => {
            special_export_with_clause(struct_def, state, schema)
        }
        "TSNamespaceDeclaration" => special_ts_namespace(struct_def, state, schema),
        "TSExternalModuleDeclaration" => special_ts_external_module(struct_def, state, schema),
        "TSGlobalDeclaration" => special_ts_global(struct_def, state, schema),
        _ => SpecialKind::None,
    }
}

/// Dispatch for enum specials. Returns `(construct, walk)`.
fn special_enum(enum_def: &EnumDef, state: &State, schema: &Schema) -> Option<(String, String)> {
    match enum_def.name() {
        "JSXElementName" | "JSXMemberExpressionObject" => {
            Some(special_jsx_name_enum(enum_def, state, schema))
        }
        _ => None,
    }
}

// ----------------------------------------------------------------------------
// Program
// ----------------------------------------------------------------------------

fn special_program(struct_def: &StructDef, state: &State, schema: &Schema) -> SpecialKind {
    let directives_off = field_offset(struct_def, "directives");
    let body_off = field_offset(struct_def, "body");
    let span_off = field_offset(struct_def, "span");
    let source_type_field = struct_def.field_by_name("source_type");
    let source_type_fn = construct_name(source_type_field.type_def(schema), schema);
    let source_type_off = source_type_field.offset_64();
    let program_id = estree_id(state, "Program");

    #[rustfmt::skip]
    let construct = format!("
        export class Program {{
            type = 'Program';
            #internal;

            constructor(pos, ast, parent) {{
                if (ast?.token !== TOKEN) constructorError();

                const {{ nodes }} = ast;
                const cached = nodes.get(pos);
                if (cached !== void 0) return cached;

                this.#internal = {{ pos, ast, $range: void 0, $body: void 0 }};
                nodes.set(pos, this);
            }}

            get body() {{
                const internal = this.#internal;
                if (internal.$body !== void 0) return internal.$body;
                const arr = [];
                arr.push(...constructVecDirective(internal.pos + {directives_off}, internal.ast, this));
                arr.push(...constructVecStatement(internal.pos + {body_off}, internal.ast, this));
                return internal.$body = arr;
            }}
            set body(v) {{ this.#internal.$body = v; }}

            get sourceType() {{
                const internal = this.#internal;
                return {source_type_fn}(internal.pos + {source_type_off}, internal.ast);
            }}
            set sourceType(v) {{ defineOwn(this, 'sourceType', v); }}

            get comments() {{
                comments === null && initComments();
                return comments;
            }}
            set comments(v) {{ defineOwn(this, 'comments', v); }}

            get tokens() {{
                tokens === null && initTokens();
                return tokens;
            }}
            set tokens(v) {{ defineOwn(this, 'tokens', v); }}

            get start() {{
                const internal = this.#internal;
                return internal.ast.buffer.int32[(internal.pos + {span_off}) >> 2];
            }}
            set start(v) {{ defineOwn(this, 'start', v); }}

            get end() {{
                const internal = this.#internal;
                return internal.ast.buffer.int32[(internal.pos + {span_off} + 4) >> 2];
            }}
            set end(v) {{ defineOwn(this, 'end', v); }}

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
                return null;
            }}
            set parent(v) {{}}

            toJSON() {{
                return {{
                    type: 'Program',
                    body: this.body,
                    sourceType: this.sourceType,
                    start: this.start,
                    end: this.end,
                    range: this.range,
                }};
            }}

            [inspectSymbol]() {{
                return Object.setPrototypeOf(this.toJSON(), DebugProgram.prototype);
            }}
        }}

        const DebugProgram = class Program {{}};

        function constructProgram(pos, ast, parent) {{
            return new Program(pos, ast, parent);
        }}
    ");

    #[rustfmt::skip]
    let walk = format!("
        function walkProgram(pos, ast, visitors, parentFrame) {{
            const enterExit = visitors[{program_id}];
            let node, enter, exit = null;
            if (enterExit !== null) {{
                ({{ enter, exit }} = enterExit);
                node = new Program(pos, ast, null);
                if (enter !== null) enter(node);
            }}

            const frame = new Frame(constructProgram, pos, null);
            walkVecDirective({}, ast, visitors, frame);
            walkVecStatement({}, ast, visitors, frame);

            if (exit !== null) exit(node);
        }}
    ", pos_offset(directives_off), pos_offset(body_off));

    SpecialKind::Full { construct, walk, import_names: "Program, constructProgram".to_string() }
}

// ----------------------------------------------------------------------------
// Functions and parameters
// ----------------------------------------------------------------------------

fn special_function(struct_def: &StructDef, state: &State, schema: &Schema) -> SpecialKind {
    let struct_name = struct_def.name();
    let type_off = field_offset(struct_def, "type");
    let this_param_field = struct_def.field_by_name("this_param");
    let this_param_fn = construct_name(this_param_field.type_def(schema), schema);
    let this_param_walk = walk_name(this_param_field.type_def(schema), schema);
    let this_param_off = this_param_field.offset_64();
    let params_field = struct_def.field_by_name("params");
    let params_fn = construct_name(params_field.type_def(schema), schema);
    let params_walk = walk_name(params_field.type_def(schema), schema);
    let params_off = params_field.offset_64();

    // Mechanical getters for everything except `params` / `this_param`
    let mut class_gen = ClassGenerator::new(state, schema);
    class_gen.skip_fields = vec!["params"];
    class_gen.generate_fields(struct_def, 0);
    let getters_mech = class_gen.getters.clone();
    let to_json = class_gen.to_json.clone();
    let extra_props = class_gen.extra_props.clone();

    #[rustfmt::skip]
    let params_getter = format!("
        get params() {{
            const internal = this.#internal;
            if (internal.$params !== void 0) return internal.$params;
            const params = {params_fn}(internal.pos + {params_off}, internal.ast, this);
            const thisParam = {this_param_fn}(internal.pos + {this_param_off}, internal.ast, this);
            if (thisParam !== null) params.unshift(thisParam);
            return internal.$params = params;
        }}
        set params(v) {{ this.#internal.$params = v; }}
    ");
    let getters = format!("{getters_mech}\n{params_getter}");
    let extra_props = format!("{extra_props}, $params: void 0");
    let to_json = format!("{to_json}params: this.params,\n");

    let mut construct = String::new();
    emit_class_code(
        struct_def,
        "",
        &getters,
        &to_json,
        &extra_props,
        state,
        &mut construct,
    );

    // Walker: runtime type ID from the `type` discriminant byte
    let ids: Vec<u32> = [
        "FunctionDeclaration",
        "FunctionExpression",
        "TSDeclareFunction",
        "TSEmptyBodyFunctionExpression",
    ]
    .iter()
    .map(|name| estree_id(state, name))
    .collect();
    let (id0, id1, id2, id3) = (ids[0], ids[1], ids[2], ids[3]);

    // Children in ESTree visitor-keys order: id, typeParameters, params (thisParam + items + rest),
    // returnType, body
    let mut child_stmts = String::new();
    for name in ["id", "type_parameters"] {
        let field = struct_def.field_by_name(name);
        let field_type = field.type_def(schema);
        if state.walk_statuses[field_type.id()] == WalkStatus::Walk {
            let walk_fn = walk_name(field_type, schema);
            let pos = pos_offset(field.offset_64());
            write_it!(child_stmts, "{walk_fn}({pos}, ast, visitors, frame);\n");
        }
    }
    write_it!(child_stmts, "{this_param_walk}({}, ast, visitors, frame);\n", pos_offset(this_param_off));
    write_it!(child_stmts, "{params_walk}({}, ast, visitors, frame);\n", pos_offset(params_off));
    for name in ["return_type", "body"] {
        let field = struct_def.field_by_name(name);
        let field_type = field.type_def(schema);
        if state.walk_statuses[field_type.id()] == WalkStatus::Walk {
            let walk_fn = walk_name(field_type, schema);
            let pos = pos_offset(field.offset_64());
            write_it!(child_stmts, "{walk_fn}({pos}, ast, visitors, frame);\n");
        }
    }

    #[rustfmt::skip]
    let walk = format!("
        function walk{struct_name}(pos, ast, visitors, parentFrame) {{
            let nodeTypeId;
            switch (ast.buffer[{}]) {{
                case 0: nodeTypeId = {id0}; break;
                case 1: nodeTypeId = {id1}; break;
                case 2: nodeTypeId = {id2}; break;
                default: nodeTypeId = {id3}; break;
            }}
            const enterExit = visitors[nodeTypeId];
            let node, enter, exit = null;
            if (enterExit !== null) {{
                ({{ enter, exit }} = enterExit);
                node = new {struct_name}(pos, ast, parentFrame);
                if (enter !== null) enter(node);
            }}

            const frame = new Frame(construct{struct_name}, pos, parentFrame);
            {child_stmts}

            if (exit !== null) exit(node);
        }}
    ", pos_offset(type_off));

    SpecialKind::Full {
        construct,
        walk,
        import_names: format!("{struct_name}, construct{struct_name}"),
    }
}

/// Runtime-typed node whose class is mechanical but walker needs a type-ID switch.
/// Discriminant values map to `estree_names` in order.
fn special_runtime_type_walk(
    struct_def: &StructDef,
    state: &State,
    schema: &Schema,
    estree_names: &[&str],
) -> SpecialKind {
    let struct_name = struct_def.name();
    let type_off = field_offset(struct_def, "type");

    let mut cases = String::new();
    for (index, name) in estree_names.iter().enumerate() {
        let id = estree_id(state, name);
        if index == estree_names.len() - 1 {
            write_it!(cases, "default: nodeTypeId = {id}; break;\n");
        } else {
            write_it!(cases, "case {index}: nodeTypeId = {id}; break;\n");
        }
    }

    // Children: all walked fields in ESTree visitor-keys order of the first variant
    // (all variants share the same keys).
    let estree_node = state.estree_nodes.get(estree_names[0]).unwrap_or_else(|| {
        panic!("No ESTree node `{}`", estree_names[0])
    });
    let mut walk_stmts = String::new();
    for key in &estree_node.keys {
        // `superClass` + `superTypeArguments` both come from the skipped `heritage` field
        // (an intermediary `ClassHeritage`), which walks expression then type arguments.
        if key == "superClass" {
            let heritage_field = struct_def.field_by_name("heritage");
            let heritage_walk = walk_name(heritage_field.type_def(schema), schema);
            write_it!(
                walk_stmts,
                "{heritage_walk}({}, ast, visitors, frame);\n",
                pos_offset(heritage_field.offset_64())
            );
            continue;
        }
        if key == "superTypeArguments" {
            continue;
        }
        let field = struct_def.fields.iter().find(|field| {
            !should_skip_field(field, schema) && get_struct_field_name(field) == *key
        });
        if let Some(field) = field {
            let field_type = field.type_def(schema);
            if state.walk_statuses[field_type.id()] == WalkStatus::Walk {
                let inner_walk_fn_name = walk_name(field_type, schema);
                let pos = pos_offset(field.offset_64());
                write_it!(walk_stmts, "{inner_walk_fn_name}({pos}, ast, visitors, frame);\n");
            }
        } else {
            let is_added = struct_def.estree.add_fields.iter().any(|(name, _)| name == key);
            assert!(
                is_added,
                "Struct `{}`: ESTree key `{key}` has no matching field in runtime-type walker",
                struct_def.name()
            );
        }
    }
    let walk_stmts = walk_stmts;

    #[rustfmt::skip]
    let walk = format!("
        function walk{struct_name}(pos, ast, visitors, parentFrame) {{
            let nodeTypeId;
            switch (ast.buffer[{}]) {{
                {cases}
            }}
            const enterExit = visitors[nodeTypeId];
            let node, enter, exit = null;
            if (enterExit !== null) {{
                ({{ enter, exit }} = enterExit);
                node = new {struct_name}(pos, ast, parentFrame);
                if (enter !== null) enter(node);
            }}

            const frame = new Frame(construct{struct_name}, pos, parentFrame);
            {walk_stmts}

            if (exit !== null) exit(node);
        }}
    ", pos_offset(type_off));

    SpecialKind::WalkOnly(walk)
}

fn special_formal_parameters(struct_def: &StructDef, state: &State, schema: &Schema) -> SpecialKind {
    let items_field = struct_def.field_by_name("items");
    let items_fn = construct_name(items_field.type_def(schema), schema);
    let items_walk = walk_name(items_field.type_def(schema), schema);
    let items_off = items_field.offset_64();

    let rest_field = struct_def.field_by_name("rest");
    let rest_off = rest_field.offset_64();
    // rest: Option<Box<FormalParameterRest>> — niche is the pointer (8 bytes)
    let TypeDef::Option(rest_option) = rest_field.type_def(schema) else {
        panic!("FormalParameters::rest must be an Option");
    };
    let rest_inner = rest_option.inner_type(schema);
    let (rest_none_condition, _) =
        get_option_none_condition_and_offset(rest_option, rest_inner, rest_off);
    let rest_none_condition = lazyify_buffer_refs(&rest_none_condition);
    let _ = state;

    #[rustfmt::skip]
    let construct = format!("
        function constructFormalParameters(pos, ast, parent) {{
            const params = [...{items_fn}({}, ast, parent)];
            if (!({rest_none_condition})) {{
                const restPos = ast.buffer.int32[({}) >> 2];
                params.push(constructFormalParameterRest(restPos, ast, parent));
            }}
            return params;
        }}
    ", pos_offset(items_off), pos_offset(rest_off));

    #[rustfmt::skip]
    let walk = format!("
        function walkFormalParameters(pos, ast, visitors, parentFrame) {{
            {items_walk}({}, ast, visitors, parentFrame);
            if (!({rest_none_condition})) {{
                const restPos = ast.buffer.int32[({}) >> 2];
                visitSynth(constructFormalParameterRest(restPos, ast, materializeFrame(parentFrame, ast)), visitors);
            }}
        }}
    ", pos_offset(items_off), pos_offset(rest_off));

    SpecialKind::Full {
        construct,
        walk,
        import_names: "constructFormalParameters, constructFormalParameterRest".to_string(),
    }
}

fn special_formal_parameter_rest(
    struct_def: &StructDef,
    state: &State,
    schema: &Schema,
) -> SpecialKind {
    let _ = state;
    let decorators_field = struct_def.field_by_name("decorators");
    let decorators_fn = construct_name(decorators_field.type_def(schema), schema);
    let decorators_off = decorators_field.offset_64();
    // `rest: BindingRestElement` — the synthesized ESTree RestElement takes its span from
    // the inner rest element, and its `argument` from the inner element's pattern.
    let rest_field = struct_def.field_by_name("rest");
    let rest_off = rest_field.offset_64();
    let TypeDef::Struct(inner_rest) = rest_field.type_def(schema) else {
        panic!("FormalParameterRest::rest must be a struct");
    };
    let span_off = rest_off + inner_rest.field_by_name("span").offset_64();
    let argument_field = inner_rest.field_by_name("argument");
    let pattern_fn = construct_name(argument_field.type_def(schema), schema);
    let pattern_off = rest_off + argument_field.offset_64();
    let type_annotation_field = struct_def.field_by_name("type_annotation");
    let type_annotation_fn = construct_name(type_annotation_field.type_def(schema), schema);
    let type_annotation_off = type_annotation_field.offset_64();

    #[rustfmt::skip]
    let construct = format!("
        function constructFormalParameterRest(pos, ast, parent) {{
            const cached = ast.nodes.get(pos);
            if (cached !== void 0) return cached;
            let start = ast.buffer.int32[(pos + {span_off}) >> 2],
                end = ast.buffer.int32[(pos + {span_off} + 4) >> 2];
            const node = Object.create(NodeProto);
            node.type = 'RestElement';
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
            node.argument = {pattern_fn}(pos + {pattern_off}, ast, node);
            node.decorators = [...{decorators_fn}(pos + {decorators_off}, ast, node)];
            if (node.decorators.length !== 0) start = node.decorators[0].start;
            node.typeAnnotation = {type_annotation_fn}(pos + {type_annotation_off}, ast, node);
            if (node.typeAnnotation !== null) end = node.typeAnnotation.end;
            node.start = start;
            node.end = end;
            node.range[0] = start;
            node.range[1] = end;
            return node;
        }}
    ");

    SpecialKind::Full { construct, walk: String::new(), import_names: String::new() }
}

fn special_formal_parameter(
    struct_def: &StructDef,
    state: &State,
    schema: &Schema,
) -> SpecialKind {
    let _ = state;
    let span_off = field_offset(struct_def, "span");
    let decorators_field = struct_def.field_by_name("decorators");
    let decorators_fn = construct_name(decorators_field.type_def(schema), schema);
    let decorators_off = decorators_field.offset_64();
    let pattern_field = struct_def.field_by_name("pattern");
    let pattern_fn = construct_name(pattern_field.type_def(schema), schema);
    let pattern_off = pattern_field.offset_64();

    // `pattern` is a `BindingPattern` enum; `typeAnnotation` / `optional` semantics come from
    // sibling fields of `FormalParameter` itself (the eager deserializer reads them at
    // FormalParameter offsets).
    let optional_off = field_offset(struct_def, "optional");
    let accessibility_off = field_offset(struct_def, "accessibility");
    let readonly_off = field_offset(struct_def, "readonly");
    let override_off = field_offset(struct_def, "override");
    let type_annotation_field = struct_def.field_by_name("type_annotation");
    let type_annotation_fn = construct_name(type_annotation_field.type_def(schema), schema);
    let type_annotation_off = type_annotation_field.offset_64();
    let initializer_field = struct_def.field_by_name("initializer");
    let initializer_fn = construct_name(initializer_field.type_def(schema), schema);
    let initializer_off = initializer_field.offset_64();
    let TypeDef::Option(initializer_option) = initializer_field.type_def(schema) else {
        panic!("FormalParameter::initializer must be an Option");
    };
    let initializer_inner = initializer_option.inner_type(schema);
    let (initializer_none, _) =
        get_option_none_condition_and_offset(initializer_option, initializer_inner, initializer_off);
    let initializer_none = lazyify_buffer_refs(&initializer_none);
    let accessibility_field = struct_def.field_by_name("accessibility");
    let accessibility_fn = construct_name(accessibility_field.type_def(schema), schema);

    #[rustfmt::skip]
    let construct = format!("
        function constructFormalParameter(pos, ast, parent) {{
            const cached = ast.nodes.get(pos);
            if (cached !== void 0) return cached;
            const {{ buffer }} = ast;
            const hasInitializer = !({initializer_none});
            const accessibility = {accessibility_fn}(pos + {accessibility_off}, ast);
            const readonly = buffer[pos + {readonly_off}] === 1;
            const override = buffer[pos + {override_off}] === 1;
            let param;
            if (accessibility === null && !readonly && !override) {{
                const optional = buffer[pos + {optional_off}] === 1;
                if (hasInitializer) {{
                    const start = buffer.int32[(pos + {span_off}) >> 2],
                        end = buffer.int32[(pos + {span_off} + 4) >> 2];
                    param = Object.create(NodeProto);
                    param.type = 'AssignmentPattern';
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
                    param.decorators = [...{decorators_fn}(pos + {decorators_off}, ast, param)];
                    const left = {pattern_fn}(pos + {pattern_off}, ast, param);
                    param.left = left;
                    left.decorators = [];
                    left.optional = false;
                    const leftTypeAnnotation = {type_annotation_fn}(pos + {type_annotation_off}, ast, left);
                    left.typeAnnotation = leftTypeAnnotation;
                    if (leftTypeAnnotation !== null) {{
                        left.end = leftTypeAnnotation.end;
                        left.range[1] = leftTypeAnnotation.end;
                    }}
                    param.right = {initializer_fn}(pos + {initializer_off}, ast, param);
                }} else {{
                    param = {pattern_fn}(pos + {pattern_off}, ast, parent);
                    ast.nodes.set(pos, param);
                    param.parent = parent;
                    param.decorators = [...{decorators_fn}(pos + {decorators_off}, ast, param)];
                    param.optional = optional;
                    const typeAnnotation = {type_annotation_fn}(pos + {type_annotation_off}, ast, param);
                    param.typeAnnotation = typeAnnotation;
                    if (typeAnnotation !== null) {{
                        param.end = typeAnnotation.end;
                        param.range[1] = typeAnnotation.end;
                    }} else if (optional) {{
                        const end = buffer.int32[(pos + {span_off} + 4) >> 2];
                        param.end = end;
                        param.range[1] = end;
                    }}
                }}
            }} else {{
                const start = buffer.int32[(pos + {span_off}) >> 2],
                    end = buffer.int32[(pos + {span_off} + 4) >> 2];
                param = Object.create(NodeProto);
                param.type = 'TSParameterProperty';
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
                param.decorators = [...{decorators_fn}(pos + {decorators_off}, ast, param)];
                if (hasInitializer) {{
                    const pattern = {pattern_fn}(pos + {pattern_off}, ast, null);
                    const initializer = {initializer_fn}(pos + {initializer_off}, ast, null);
                    const assignParam = Object.create(NodeProto);
                    assignParam.type = 'AssignmentPattern';
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
                    const patternTypeAnnotation = {type_annotation_fn}(pos + {type_annotation_off}, ast, pattern);
                    pattern.typeAnnotation = patternTypeAnnotation;
                    if (patternTypeAnnotation !== null) {{
                        pattern.end = patternTypeAnnotation.end;
                        pattern.range[1] = patternTypeAnnotation.end;
                    }}
                    if (initializer !== null) initializer.parent = assignParam;
                    param.parameter = assignParam;
                }} else {{
                    const parameter = {pattern_fn}(pos + {pattern_off}, ast, param);
                    param.parameter = parameter;
                    parameter.decorators = [];
                    const paramOptional = buffer[pos + {optional_off}] === 1;
                    parameter.optional = paramOptional;
                    const paramTypeAnnotation = {type_annotation_fn}(pos + {type_annotation_off}, ast, parameter);
                    parameter.typeAnnotation = paramTypeAnnotation;
                    if (paramTypeAnnotation !== null) {{
                        parameter.end = paramTypeAnnotation.end;
                        parameter.range[1] = paramTypeAnnotation.end;
                    }} else if (paramOptional) {{
                        const paramEnd = buffer.int32[(pos + {span_off} + 4) >> 2];
                        parameter.end = paramEnd;
                        parameter.range[1] = paramEnd;
                    }}
                }}
            }}
            return param;
        }}
    ");

    #[rustfmt::skip]
    let walk = "
        function walkFormalParameter(pos, ast, visitors, parentFrame) {
            visitSynth(constructFormalParameter(pos, ast, materializeFrame(parentFrame, ast)), visitors);
        }
    ".to_string();

    SpecialKind::Full {
        construct,
        walk,
        import_names: "constructFormalParameter".to_string(),
    }
}

// ----------------------------------------------------------------------------
// Pass-throughs
// ----------------------------------------------------------------------------

fn special_passthrough(struct_def: &StructDef, field_name: &str, schema: &Schema) -> SpecialKind {
    let struct_name = struct_def.name();
    let field = struct_def.field_by_name(field_name);
    let inner_fn = construct_name(field.type_def(schema), schema);
    let inner_walk = walk_name(field.type_def(schema), schema);
    let off = field.offset_64();

    #[rustfmt::skip]
    let construct = format!("
        function construct{struct_name}(pos, ast, parent) {{
            return {inner_fn}({}, ast, parent);
        }}
    ", pos_offset(off));

    #[rustfmt::skip]
    let walk = format!("
        function walk{struct_name}(pos, ast, visitors, parentFrame) {{
            {inner_walk}({}, ast, visitors, parentFrame);
        }}
    ", pos_offset(off));

    SpecialKind::Full { construct, walk, import_names: format!("construct{struct_name}") }
}

fn special_catch_parameter(struct_def: &StructDef, schema: &Schema) -> SpecialKind {
    let pattern_field = struct_def.field_by_name("pattern");
    let pattern_fn = construct_name(pattern_field.type_def(schema), schema);
    let pattern_off = pattern_field.offset_64();
    let type_annotation_field = struct_def.field_by_name("type_annotation");
    let type_annotation_fn = construct_name(type_annotation_field.type_def(schema), schema);
    let type_annotation_off = type_annotation_field.offset_64();

    #[rustfmt::skip]
    let construct = format!("
        function constructCatchParameter(pos, ast, parent) {{
            const cached = ast.nodes.get(pos);
            if (cached !== void 0) return cached;
            const pattern = {pattern_fn}({}, ast, parent);
            ast.nodes.set(pos, pattern);
            const typeAnnotation = {type_annotation_fn}({}, ast, pattern);
            pattern.typeAnnotation = typeAnnotation;
            if (typeAnnotation !== null) {{
                pattern.end = typeAnnotation.end;
                pattern.range[1] = typeAnnotation.end;
            }}
            return pattern;
        }}
    ", pos_offset(pattern_off), pos_offset(type_annotation_off));

    #[rustfmt::skip]
    let walk = "
        function walkCatchParameter(pos, ast, visitors, parentFrame) {
            visitSynth(constructCatchParameter(pos, ast, materializeFrame(parentFrame, ast)), visitors);
        }
    ".to_string();

    SpecialKind::Full { construct, walk, import_names: "constructCatchParameter".to_string() }
}

// ----------------------------------------------------------------------------
// Literals
// ----------------------------------------------------------------------------

fn literal_walk(struct_name: &str, state: &State) -> String {
    let literal_id = estree_id(state, "Literal");
    format!(
        "
        function walk{struct_name}(pos, ast, visitors, parentFrame) {{
            const visit = visitors[{literal_id}];
            if (visit !== null) visit(new {struct_name}(pos, ast, parentFrame));
        }}
    "
    )
}

fn special_boolean_literal(struct_def: &StructDef, state: &State, schema: &Schema) -> SpecialKind {
    let struct_name = struct_def.name();
    let value_field = struct_def.field_by_name("value");
    let value_off = value_field.offset_64();

    let getters = format!(
        "
        get value() {{
            const internal = this.#internal;
            return internal.ast.buffer[{}] === 1;
        }}
        set value(v) {{ defineOwn(this, 'value', v); }}

        get raw() {{
            return (this.start === 0 && this.end === 0) ? null : (this.value ? 'true' : 'false');
        }}
        set raw(v) {{ defineOwn(this, 'raw', v); }}
    ",
        internal_pos(value_off)
    );
    let mut class_gen = ClassGenerator::new(state, schema);
    class_gen.skip_fields = vec!["value", "raw"];
    class_gen.generate_fields(struct_def, 0);
    let getters = format!("{}{getters}", class_gen.getters);
    let to_json = format!("type: 'Literal',\n{}value: this.value,\nraw: this.raw,\n", class_gen.to_json);

    let mut construct = String::new();
    emit_class_code(
        struct_def,
        "type = 'Literal';",
        &getters,
        &to_json,
        &class_gen.extra_props.clone(),
        state,
        &mut construct,
    );
    let walk = literal_walk(struct_name, state);
    SpecialKind::Full { construct, walk, import_names: format!("{struct_name}, construct{struct_name}") }
}

fn special_null_literal(struct_def: &StructDef, state: &State, schema: &Schema) -> SpecialKind {
    let struct_name = struct_def.name();
    let getters = "
        get value() {
            return null;
        }
        set value(v) { defineOwn(this, 'value', v); }

        get raw() {
            return (this.start === 0 && this.end === 0) ? null : 'null';
        }
        set raw(v) { defineOwn(this, 'raw', v); }
    "
    .to_string();
    let mut class_gen = ClassGenerator::new(state, schema);
    class_gen.skip_fields = vec!["value", "raw"];
    class_gen.generate_fields(struct_def, 0);
    let getters = format!("{}{getters}", class_gen.getters);
    let to_json = format!("type: 'Literal',\n{}value: this.value,\nraw: this.raw,\n", class_gen.to_json);

    let mut construct = String::new();
    emit_class_code(
        struct_def,
        "type = 'Literal';",
        &getters,
        &to_json,
        &class_gen.extra_props.clone(),
        state,
        &mut construct,
    );
    let walk = literal_walk(struct_name, state);
    SpecialKind::Full { construct, walk, import_names: format!("{struct_name}, construct{struct_name}") }
}

fn special_bigint_literal(struct_def: &StructDef, state: &State, schema: &Schema) -> SpecialKind {
    let struct_name = struct_def.name();
    // Rust field `value: Atom` is renamed `bigint` in ESTree; `value` is `BigInt(bigint)`
    let value_field = struct_def.field_by_name("value");
    let value_fn = construct_name(value_field.type_def(schema), schema);
    let value_off = value_field.offset_64();

    let getters = format!(
        "
        get bigint() {{
            const internal = this.#internal;
            if (internal.$bigint !== void 0) return internal.$bigint;
            return internal.$bigint = {value_fn}({}, internal.ast);
        }}
        set bigint(v) {{ this.#internal.$bigint = v; }}

        get value() {{
            return BigInt(this.bigint);
        }}
        set value(v) {{ defineOwn(this, 'value', v); }}
    ",
        internal_pos(value_off)
    );

    let mut class_gen = ClassGenerator::new(state, schema);
    class_gen.skip_fields = vec!["bigint", "value"];
    class_gen.generate_fields(struct_def, 0);
    let getters = format!("{}{getters}", class_gen.getters);
    let to_json = format!(
        "type: 'Literal',\n{}value: this.value,\nbigint: this.bigint,\n",
        class_gen.to_json
    );
    let extra_props = format!("{}, $bigint: void 0", class_gen.extra_props);

    let mut construct = String::new();
    emit_class_code(
        struct_def,
        "type = 'Literal';",
        &getters,
        &to_json,
        &extra_props,
        state,
        &mut construct,
    );
    let walk = literal_walk(struct_name, state);
    SpecialKind::Full { construct, walk, import_names: format!("{struct_name}, construct{struct_name}") }
}

fn special_regexp_literal(struct_def: &StructDef, state: &State, schema: &Schema) -> SpecialKind {
    let struct_name = struct_def.name();
    let regex_field = struct_def.field_by_name("regex");
    let regex_off = regex_field.offset_64();
    let TypeDef::Struct(regex_struct) = regex_field.type_def(schema) else {
        panic!("RegExpLiteral::regex must be a struct");
    };
    let pattern_field = regex_struct.field_by_name("pattern");
    let pattern_off = regex_off + pattern_field.offset_64();
    // `pattern` may itself be a struct (`RegExpPattern`) with a `text` field, or a Str
    let (pattern_fn, pattern_total_off) = match pattern_field.type_def(schema) {
        TypeDef::Struct(pattern_struct) => {
            let text_field = pattern_struct
                .fields
                .iter()
                .find(|field| {
                    matches!(
                        field.type_def(schema).innermost_type(schema),
                        TypeDef::Primitive(p) if matches!(p.name(), "&str" | "Str" | "Ident")
                    )
                })
                .unwrap_or_else(|| panic!("RegExpPattern: no text field"));
            (
                construct_name(text_field.type_def(schema), schema),
                pattern_off + text_field.offset_64(),
            )
        }
        _ => (construct_name(pattern_field.type_def(schema), schema), pattern_off),
    };
    let flags_field = regex_struct.field_by_name("flags");
    let flags_off = regex_off + flags_field.offset_64();

    let getters = format!(
        "
        get regex() {{
            const internal = this.#internal;
            if (internal.$regex !== void 0) return internal.$regex;
            const flagBits = internal.ast.buffer[{flags_pos}];
            let flags = '';
            // Alphabetical order
            if (flagBits & 64) flags += 'd';
            if (flagBits & 1) flags += 'g';
            if (flagBits & 2) flags += 'i';
            if (flagBits & 4) flags += 'm';
            if (flagBits & 8) flags += 's';
            if (flagBits & 16) flags += 'u';
            if (flagBits & 128) flags += 'v';
            if (flagBits & 32) flags += 'y';
            return internal.$regex = {{
                pattern: {pattern_fn}({pattern_pos}, internal.ast),
                flags,
            }};
        }}
        set regex(v) {{ this.#internal.$regex = v; }}

        get value() {{
            const regex = this.regex;
            try {{
                return new RegExp(regex.pattern, regex.flags);
            }} catch {{
                return null;
            }}
        }}
        set value(v) {{ defineOwn(this, 'value', v); }}
    ",
        flags_pos = internal_pos(flags_off),
        pattern_pos = internal_pos(pattern_total_off),
    );

    let mut class_gen = ClassGenerator::new(state, schema);
    class_gen.skip_fields = vec!["regex", "value"];
    class_gen.generate_fields(struct_def, 0);
    let getters = format!("{}{getters}", class_gen.getters);
    let to_json = format!(
        "type: 'Literal',\n{}value: this.value,\nregex: this.regex,\n",
        class_gen.to_json
    );
    let extra_props = format!("{}, $regex: void 0", class_gen.extra_props);

    let mut construct = String::new();
    emit_class_code(
        struct_def,
        "type = 'Literal';",
        &getters,
        &to_json,
        &extra_props,
        state,
        &mut construct,
    );
    let walk = literal_walk(struct_name, state);
    SpecialKind::Full { construct, walk, import_names: format!("{struct_name}, construct{struct_name}") }
}

fn special_template_element(struct_def: &StructDef, state: &State, schema: &Schema) -> SpecialKind {
    let struct_name = struct_def.name();
    let span_off = field_offset(struct_def, "span");
    let tail_off = field_offset(struct_def, "tail");
    let value_field = struct_def.field_by_name("value");
    let value_off = value_field.offset_64();
    let TypeDef::Struct(value_struct) = value_field.type_def(schema) else {
        panic!("TemplateElement::value must be a struct");
    };
    let raw_field = value_struct.field_by_name("raw");
    let raw_fn = construct_name(raw_field.type_def(schema), schema);
    let raw_off = value_off + raw_field.offset_64();
    let cooked_field = value_struct.field_by_name("cooked");
    let cooked_fn = construct_name(cooked_field.type_def(schema), schema);
    let cooked_off = value_off + cooked_field.offset_64();

    let node_type_id = estree_id(state, "TemplateElement");

    let getters = format!(
        "
        get tail() {{
            const internal = this.#internal;
            return internal.ast.buffer[{tail_pos}] === 1;
        }}
        set tail(v) {{ defineOwn(this, 'tail', v); }}

        get value() {{
            const internal = this.#internal;
            if (internal.$value !== void 0) return internal.$value;
            return internal.$value = {{
                raw: {raw_fn}({raw_pos}, internal.ast),
                cooked: {cooked_fn}({cooked_pos}, internal.ast),
            }};
        }}
        set value(v) {{ this.#internal.$value = v; }}

        get start() {{
            const internal = this.#internal;
            return internal.ast.buffer.int32[({span_pos}) >> 2] - 1;
        }}
        set start(v) {{ defineOwn(this, 'start', v); }}

        get end() {{
            const internal = this.#internal;
            return internal.ast.buffer.int32[({span_end_pos}) >> 2] + 2 - (this.tail ? 1 : 0);
        }}
        set end(v) {{ defineOwn(this, 'end', v); }}
    ",
        tail_pos = internal_pos(tail_off),
        raw_pos = internal_pos(raw_off),
        cooked_pos = internal_pos(cooked_off),
        span_pos = internal_pos(span_off),
        span_end_pos = internal_pos(span_off + 4),
    );
    let to_json = "type: 'TemplateElement',\nvalue: this.value,\ntail: this.tail,\n".to_string();
    let extra_props = ", $value: void 0".to_string();

    let mut construct = String::new();
    emit_class_code(
        struct_def,
        "type = 'TemplateElement';",
        &getters,
        &to_json,
        &extra_props,
        state,
        &mut construct,
    );

    #[rustfmt::skip]
    let walk = format!("
        function walk{struct_name}(pos, ast, visitors, parentFrame) {{
            const visit = visitors[{node_type_id}];
            if (visit !== null) visit(new {struct_name}(pos, ast, parentFrame));
        }}
    ");

    SpecialKind::Full { construct, walk, import_names: format!("{struct_name}, construct{struct_name}") }
}

// ----------------------------------------------------------------------------
// MetaProperty (import.meta / new.target)
// ----------------------------------------------------------------------------

fn special_meta_property(
    struct_def: &StructDef,
    state: &State,
    schema: &Schema,
    meta_name: &str,
    property_name: &str,
) -> SpecialKind {
    let _ = schema;
    let struct_name = struct_def.name();
    let span_off = field_offset(struct_def, "span");
    let node_type_id = estree_id(state, "MetaProperty");
    let meta_len = meta_name.len();
    let property_len = property_name.len();

    // Spans: meta = start .. start + len(meta_name); property = end - len(property) .. end
    // (matches the eager deserializer, including the all-zero span edge case)
    #[rustfmt::skip]
    let construct = format!("
        function construct{struct_name}(pos, ast, parent) {{
            const cached = ast.nodes.get(pos);
            if (cached !== void 0) return cached;
            const start = ast.buffer.int32[(pos + {span_off}) >> 2],
                end = ast.buffer.int32[(pos + {span_off} + 4) >> 2];
            const node = Object.create(NodeProto);
            node.type = 'MetaProperty';
            node.meta = null;
            node.property = null;
            node.start = start;
            node.end = end;
            node.range = [start, end];
            node.parent = parent;
            ast.nodes.set(pos, node);
            const metaStart = start,
                metaEnd = end === 0 ? 0 : start + {meta_len};
            const meta = Object.create(NodeProto);
            meta.type = 'Identifier';
            meta.decorators = [];
            meta.name = '{meta_name}';
            meta.optional = false;
            meta.typeAnnotation = null;
            meta.start = metaStart;
            meta.end = metaEnd;
            meta.range = [metaStart, metaEnd];
            meta.parent = node;
            const propertyEnd = end,
                propertyStart = propertyEnd === 0 ? 0 : propertyEnd - {property_len};
            const property = Object.create(NodeProto);
            property.type = 'Identifier';
            property.decorators = [];
            property.name = '{property_name}';
            property.optional = false;
            property.typeAnnotation = null;
            property.start = propertyStart;
            property.end = propertyEnd;
            property.range = [propertyStart, propertyEnd];
            property.parent = node;
            node.meta = meta;
            node.property = property;
            return node;
        }}
    ");

    #[rustfmt::skip]
    let walk = format!("
        function walk{struct_name}(pos, ast, visitors, parentFrame) {{
            const enterExit = visitors[{node_type_id}];
            const node = construct{struct_name}(pos, ast, materializeFrame(parentFrame, ast));
            let enter = null, exit = null;
            if (enterExit !== null) {{
                ({{ enter, exit }} = enterExit);
                if (enter !== null) enter(node);
            }}
            visitSynth(node.meta, visitors);
            visitSynth(node.property, visitors);
            if (exit !== null) exit(node);
        }}
    ");

    SpecialKind::Full { construct, walk, import_names: format!("construct{struct_name}") }
}

// ----------------------------------------------------------------------------
// AssignmentTargetPropertyIdentifier ({ a = 1 } = obj  ->  Property shorthand)
// ----------------------------------------------------------------------------

fn special_assignment_target_property_identifier(
    struct_def: &StructDef,
    state: &State,
    schema: &Schema,
) -> SpecialKind {
    let struct_name = struct_def.name();
    let span_off = field_offset(struct_def, "span");
    let binding_field = struct_def.field_by_name("binding");
    let binding_fn = construct_name(binding_field.type_def(schema), schema);
    let binding_off = binding_field.offset_64();
    let init_field = struct_def.field_by_name("init");
    let init_fn = construct_name(init_field.type_def(schema), schema);
    let init_off = init_field.offset_64();
    let property_id = estree_id(state, "Property");

    #[rustfmt::skip]
    let construct = format!("
        function construct{struct_name}(pos, ast, parent) {{
            const cached = ast.nodes.get(pos);
            if (cached !== void 0) return cached;
            const start = ast.buffer.int32[(pos + {span_off}) >> 2],
                end = ast.buffer.int32[(pos + {span_off} + 4) >> 2];
            const node = Object.create(NodeProto);
            node.type = 'Property';
            node.kind = 'init';
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
            const key = {binding_fn}(pos + {binding_off}, ast, node);
            let value = Object.create(NodeProto);
            value.type = 'Identifier';
            value.decorators = [];
            value.name = key.name;
            value.optional = false;
            value.typeAnnotation = null;
            value.start = key.start;
            value.end = key.end;
            value.range = [key.start, key.end];
            value.parent = node;
            const init = {init_fn}(pos + {init_off}, ast, null);
            if (init !== null) {{
                const left = value;
                value = Object.create(NodeProto);
                value.type = 'AssignmentPattern';
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
            }}
            node.key = key;
            node.value = value;
            return node;
        }}
    ");

    #[rustfmt::skip]
    let walk = format!("
        function walk{struct_name}(pos, ast, visitors, parentFrame) {{
            const enterExit = visitors[{property_id}];
            const node = construct{struct_name}(pos, ast, materializeFrame(parentFrame, ast));
            let enter = null, exit = null;
            if (enterExit !== null) {{
                ({{ enter, exit }} = enterExit);
                if (enter !== null) enter(node);
            }}
            visitSynth(node.key, visitors);
            visitSynth(node.value, visitors);
            if (exit !== null) exit(node);
        }}
    ");

    SpecialKind::Full { construct, walk, import_names: format!("construct{struct_name}") }
}

// ----------------------------------------------------------------------------
// ImportDeclaration (attributes from WithClause) and WithClause
// ----------------------------------------------------------------------------

fn special_import_declaration(
    struct_def: &StructDef,
    state: &State,
    schema: &Schema,
) -> SpecialKind {
    let struct_name = struct_def.name();
    // `with_clause: Option<Box<WithClause>>` -> `attributes`
    let with_clause_field = struct_def.field_by_name("with_clause");
    let with_clause_off = with_clause_field.offset_64();
    let TypeDef::Option(with_option) = with_clause_field.type_def(schema) else {
        panic!("ImportDeclaration::with_clause must be an Option");
    };
    let with_inner = with_option.inner_type(schema);
    let (with_none, _) =
        get_option_none_condition_and_offset(with_option, with_inner, with_clause_off);
    let with_none = lazyify_buffer_refs(&with_none);
    // WithClause's attributes Vec
    let TypeDef::Box(with_box) = with_inner else {
        panic!("ImportDeclaration::with_clause inner must be a Box");
    };
    let TypeDef::Struct(with_struct) = with_box.inner_type(schema) else {
        panic!("WithClause must be a struct");
    };
    let attributes_field = with_struct.field_by_name("with_entries");
    let attributes_fn = construct_name(attributes_field.type_def(schema), schema);
    let attributes_off = attributes_field.offset_64();

    // Mechanical getters for everything except attributes (with_clause)
    let mut class_gen = ClassGenerator::new(state, schema);
    class_gen.skip_fields = vec!["attributes", "specifiers"];
    class_gen.generate_fields(struct_def, 0);

    let specifiers_field_c = struct_def.field_by_name("specifiers");
    let specifiers_fn = construct_name(specifiers_field_c.type_def(schema), schema);
    let specifiers_off_c = specifiers_field_c.offset_64();
    let specifiers_getter = format!(
        "
        get specifiers() {{{{
            const internal = this.#internal;
            if (internal.$specifiers !== void 0) return internal.$specifiers;
            const specifiers = {specifiers_fn}({specifiers_pos}, internal.ast, this);
            return internal.$specifiers = specifiers === null ? [] : [...specifiers];
        }}}}
        set specifiers(v) {{{{ this.#internal.$specifiers = v; }}}}
    ",
        specifiers_pos = internal_pos(specifiers_off_c),
    );

    let attributes_getter = format!(
        "
        get attributes() {{
            const internal = this.#internal, ast = internal.ast, pos = internal.pos;
            if (internal.$attributes !== void 0) return internal.$attributes;
            if ({with_none}) return internal.$attributes = [];
            const withPos = ast.buffer.int32[({with_pos}) >> 2];
            return internal.$attributes = [...{attributes_fn}(withPos + {attributes_off}, ast, this)];
        }}
        set attributes(v) {{ this.#internal.$attributes = v; }}
    ",
        with_pos = internal_pos(with_clause_off),
    );

    let getters = format!("{}{specifiers_getter}{attributes_getter}", class_gen.getters);
    let to_json = format!(
        "type: '{struct_name}',\n{}specifiers: this.specifiers,\nattributes: this.attributes,\n",
        class_gen.to_json
    );
    let extra_props = format!("{}, $specifiers: void 0, $attributes: void 0", class_gen.extra_props);

    let mut construct = String::new();
    emit_class_code(struct_def, &format!("type = '{struct_name}';"), &getters, &to_json, &extra_props, state, &mut construct);

    // Walker: keys are [specifiers, source, attributes]
    let node_type_id = estree_id(state, struct_name);
    let specifiers_field = struct_def.field_by_name("specifiers");
    let specifiers_walk = walk_name(specifiers_field.type_def(schema), schema);
    let specifiers_off = specifiers_field.offset_64();
    let source_field = struct_def.field_by_name("source");
    let source_walk = walk_name(source_field.type_def(schema), schema);
    let source_off = source_field.offset_64();
    let attributes_walk = walk_name(attributes_field.type_def(schema), schema);

    #[rustfmt::skip]
    let walk = format!("
        function walk{struct_name}(pos, ast, visitors, parentFrame) {{
            const enterExit = visitors[{node_type_id}];
            let node, enter, exit = null;
            if (enterExit !== null) {{
                ({{ enter, exit }} = enterExit);
                node = new {struct_name}(pos, ast, parentFrame);
                if (enter !== null) enter(node);
            }}

            const frame = new Frame(construct{struct_name}, pos, parentFrame);
            {specifiers_walk}({}, ast, visitors, frame);
            {source_walk}({}, ast, visitors, frame);
            if (!({with_none})) {{
                const withPos = ast.buffer.int32[({}) >> 2];
                {attributes_walk}(withPos + {attributes_off}, ast, visitors, frame);
            }}

            if (exit !== null) exit(node);
        }}
    ", pos_offset(specifiers_off), pos_offset(source_off), pos_offset(with_clause_off));

    SpecialKind::Full {
        construct,
        walk,
        import_names: format!("{struct_name}, construct{struct_name}"),
    }
}

// ----------------------------------------------------------------------------
// TS heritage (TSClassImplements / TSInterfaceHeritage): TSQualifiedName ->
// MemberExpression chain synthesis
// ----------------------------------------------------------------------------

fn special_ts_heritage(struct_def: &StructDef, state: &State, schema: &Schema) -> SpecialKind {
    let struct_name = struct_def.name();
    let span_off = field_offset(struct_def, "span");
    let expression_field = struct_def
        .fields
        .iter()
        .find(|field| matches!(field.name(), "expression" | "type_name"))
        .unwrap_or_else(|| panic!("{}: no expression field", struct_def.name()));
    let expression_fn = construct_name(expression_field.type_def(schema), schema);
    let expression_off = expression_field.offset_64();
    let type_args_field = struct_def.field_by_name("type_arguments");
    let type_args_fn = construct_name(type_args_field.type_def(schema), schema);
    let type_args_walk = walk_name(type_args_field.type_def(schema), schema);
    let type_args_off = type_args_field.offset_64();
    let node_type_id = estree_id(state, struct_name);

    #[rustfmt::skip]
    let construct = format!("
        function construct{struct_name}(pos, ast, parent) {{
            const cached = ast.nodes.get(pos);
            if (cached !== void 0) return cached;
            const start = ast.buffer.int32[(pos + {span_off}) >> 2],
                end = ast.buffer.int32[(pos + {span_off} + 4) >> 2];
            const node = Object.create(NodeProto);
            node.type = '{struct_name}';
            node.expression = null;
            node.typeArguments = null;
            node.start = start;
            node.end = end;
            node.range = [start, end];
            node.parent = parent;
            ast.nodes.set(pos, node);
            let expression = {expression_fn}(pos + {expression_off}, ast, node);
            if (expression.type === 'TSQualifiedName') {{
                let object = expression.left;
                const right = expression.right;
                const outerStart = expression.start, outerEnd = expression.end;
                let previous = Object.create(NodeProto);
                previous.type = 'MemberExpression';
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
                for (;;) {{
                    if (object.type !== 'TSQualifiedName') {{
                        object.parent = previous;
                        break;
                    }}
                    const innerLeft = object.left, innerRight = object.right;
                    const innerStart = object.start, innerEnd = object.end;
                    const member = Object.create(NodeProto);
                    member.type = 'MemberExpression';
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
                }}
            }}
            node.expression = expression;
            node.typeArguments = {type_args_fn}(pos + {type_args_off}, ast, node);
            return node;
        }}
    ");

    #[rustfmt::skip]
    let walk = format!("
        function walk{struct_name}(pos, ast, visitors, parentFrame) {{
            const enterExit = visitors[{node_type_id}];
            const node = construct{struct_name}(pos, ast, materializeFrame(parentFrame, ast));
            let enter = null, exit = null;
            if (enterExit !== null) {{
                ({{ enter, exit }} = enterExit);
                if (enter !== null) enter(node);
            }}
            visitSynth(node.expression, visitors);
            {type_args_walk}({}, ast, visitors, new Frame(construct{struct_name}, pos, parentFrame));
            if (exit !== null) exit(node);
        }}
    ", pos_offset(type_args_off));

    SpecialKind::Full { construct, walk, import_names: format!("construct{struct_name}") }
}

// ----------------------------------------------------------------------------
// TS module declarations
// ----------------------------------------------------------------------------

fn special_ts_namespace(struct_def: &StructDef, state: &State, schema: &Schema) -> SpecialKind {
    let struct_name = struct_def.name();
    let span_off = field_offset(struct_def, "span");
    let id_field = struct_def.field_by_name("id");
    let id_fn = construct_name(id_field.type_def(schema), schema);
    let id_off = id_field.offset_64();
    let body_field = struct_def.field_by_name("body");
    let body_fn = construct_name(body_field.type_def(schema), schema);
    let body_off = body_field.offset_64();
    let kind_field = struct_def.field_by_name("kind");
    let kind_fn = construct_name(kind_field.type_def(schema), schema);
    let kind_off = kind_field.offset_64();
    let declare_off = field_offset(struct_def, "declare");
    let node_type_id = estree_id(state, "TSModuleDeclaration");

    #[rustfmt::skip]
    let construct = format!("
        function construct{struct_name}(pos, ast, parent) {{
            const cached = ast.nodes.get(pos);
            if (cached !== void 0) return cached;
            const start = ast.buffer.int32[(pos + {span_off}) >> 2],
                end = ast.buffer.int32[(pos + {span_off} + 4) >> 2];
            const node = Object.create(NodeProto);
            node.type = 'TSModuleDeclaration';
            node.id = null;
            node.body = null;
            node.kind = {kind_fn}(pos + {kind_off}, ast);
            node.declare = ast.buffer[pos + {declare_off}] === 1;
            node.global = false;
            node.start = start;
            node.end = end;
            node.range = [start, end];
            node.parent = parent;
            ast.nodes.set(pos, node);
            let body = {body_fn}(pos + {body_off}, ast, node);
            const id = {id_fn}(pos + {id_off}, ast, node);
            if (body.type === 'TSModuleBlock') {{
                node.id = id;
                node.body = body;
                body.parent = node;
            }} else {{
                let innerId = body.id;
                if (innerId.type === 'Identifier') {{
                    const qStart = id.start, qEnd = innerId.end;
                    const outerId = Object.create(NodeProto);
                    outerId.type = 'TSQualifiedName';
                    outerId.left = id;
                    outerId.right = innerId;
                    outerId.start = qStart;
                    outerId.end = qEnd;
                    outerId.range = [qStart, qEnd];
                    outerId.parent = node;
                    node.id = outerId;
                    id.parent = outerId;
                    innerId.parent = outerId;
                }} else {{
                    node.id = innerId;
                    innerId.parent = node;
                    const qStart = id.start;
                    for (;;) {{
                        innerId.start = qStart;
                        innerId.range[0] = qStart;
                        if (innerId.left.type === 'Identifier') break;
                        innerId = innerId.left;
                    }}
                    const right = innerId.left;
                    const inner = Object.create(NodeProto);
                    inner.type = 'TSQualifiedName';
                    inner.left = id;
                    inner.right = right;
                    inner.start = qStart;
                    inner.end = right.end;
                    inner.range = [qStart, right.end];
                    inner.parent = innerId;
                    innerId.left = inner;
                    id.parent = inner;
                    right.parent = inner;
                }}
                body = body.body;
                node.body = body;
                if (body != null) body.parent = node;
            }}
            return node;
        }}
    ");

    #[rustfmt::skip]
    let walk = format!("
        function walk{struct_name}(pos, ast, visitors, parentFrame) {{
            const enterExit = visitors[{node_type_id}];
            const node = construct{struct_name}(pos, ast, materializeFrame(parentFrame, ast));
            let enter = null, exit = null;
            if (enterExit !== null) {{
                ({{ enter, exit }} = enterExit);
                if (enter !== null) enter(node);
            }}
            visitSynth(node.id, visitors);
            visitSynth(node.body, visitors);
            if (exit !== null) exit(node);
        }}
    ");

    SpecialKind::Full { construct, walk, import_names: format!("construct{struct_name}") }
}

fn special_ts_external_module(
    struct_def: &StructDef,
    state: &State,
    schema: &Schema,
) -> SpecialKind {
    let struct_name = struct_def.name();
    let span_off = field_offset(struct_def, "span");
    let id_field = struct_def.field_by_name("id");
    let id_fn = construct_name(id_field.type_def(schema), schema);
    let id_off = id_field.offset_64();
    let body_field = struct_def.field_by_name("body");
    let body_fn = construct_name(body_field.type_def(schema), schema);
    let body_off = body_field.offset_64();
    let declare_off = field_offset(struct_def, "declare");
    let node_type_id = estree_id(state, "TSModuleDeclaration");

    #[rustfmt::skip]
    let construct = format!("
        function construct{struct_name}(pos, ast, parent) {{
            const cached = ast.nodes.get(pos);
            if (cached !== void 0) return cached;
            const start = ast.buffer.int32[(pos + {span_off}) >> 2],
                end = ast.buffer.int32[(pos + {span_off} + 4) >> 2];
            const node = Object.create(NodeProto);
            node.type = 'TSModuleDeclaration';
            node.id = null;
            const body = {body_fn}(pos + {body_off}, ast, null);
            if (body !== null) node.body = body;
            node.kind = 'module';
            node.declare = ast.buffer[pos + {declare_off}] === 1;
            node.global = false;
            node.start = start;
            node.end = end;
            node.range = [start, end];
            node.parent = parent;
            ast.nodes.set(pos, node);
            node.id = {id_fn}(pos + {id_off}, ast, node);
            if (body !== null) body.parent = node;
            return node;
        }}
    ");

    #[rustfmt::skip]
    let walk = format!("
        function walk{struct_name}(pos, ast, visitors, parentFrame) {{
            const enterExit = visitors[{node_type_id}];
            const node = construct{struct_name}(pos, ast, materializeFrame(parentFrame, ast));
            let enter = null, exit = null;
            if (enterExit !== null) {{
                ({{ enter, exit }} = enterExit);
                if (enter !== null) enter(node);
            }}
            visitSynth(node.id, visitors);
            if (node.body != null) visitSynth(node.body, visitors);
            if (exit !== null) exit(node);
        }}
    ");

    SpecialKind::Full { construct, walk, import_names: format!("construct{struct_name}") }
}

fn special_ts_global(struct_def: &StructDef, state: &State, schema: &Schema) -> SpecialKind {
    let struct_name = struct_def.name();
    let span_off = field_offset(struct_def, "span");
    // `global` keyword span is stored as a `Span` field
    let keyword_field = struct_def
        .fields
        .iter()
        .find(|field| field.name() != "span" && field.type_id == state.span_type_id)
        .unwrap_or_else(|| panic!("TSGlobalDeclaration: no keyword span field"));
    let keyword_off = keyword_field.offset_64();
    let body_field = struct_def.field_by_name("body");
    let body_fn = construct_name(body_field.type_def(schema), schema);
    let body_off = body_field.offset_64();
    let declare_off = field_offset(struct_def, "declare");
    let node_type_id = estree_id(state, "TSModuleDeclaration");

    #[rustfmt::skip]
    let construct = format!("
        function construct{struct_name}(pos, ast, parent) {{
            const cached = ast.nodes.get(pos);
            if (cached !== void 0) return cached;
            const start = ast.buffer.int32[(pos + {span_off}) >> 2],
                end = ast.buffer.int32[(pos + {span_off} + 4) >> 2];
            const node = Object.create(NodeProto);
            node.type = 'TSModuleDeclaration';
            node.id = null;
            node.body = null;
            node.kind = 'global';
            node.declare = ast.buffer[pos + {declare_off}] === 1;
            node.global = true;
            node.start = start;
            node.end = end;
            node.range = [start, end];
            node.parent = parent;
            ast.nodes.set(pos, node);
            const keywordStart = ast.buffer.int32[(pos + {keyword_off}) >> 2],
                keywordEnd = ast.buffer.int32[(pos + {keyword_off} + 4) >> 2];
            const id = Object.create(NodeProto);
            id.type = 'Identifier';
            id.decorators = [];
            id.name = 'global';
            id.optional = false;
            id.typeAnnotation = null;
            id.start = keywordStart;
            id.end = keywordEnd;
            id.range = [keywordStart, keywordEnd];
            id.parent = node;
            node.id = id;
            node.body = {body_fn}(pos + {body_off}, ast, node);
            return node;
        }}
    ");

    #[rustfmt::skip]
    let walk = format!("
        function walk{struct_name}(pos, ast, visitors, parentFrame) {{
            const enterExit = visitors[{node_type_id}];
            const node = construct{struct_name}(pos, ast, materializeFrame(parentFrame, ast));
            let enter = null, exit = null;
            if (enterExit !== null) {{
                ({{ enter, exit }} = enterExit);
                if (enter !== null) enter(node);
            }}
            visitSynth(node.id, visitors);
            visitSynth(node.body, visitors);
            if (exit !== null) exit(node);
        }}
    ");

    SpecialKind::Full { construct, walk, import_names: format!("construct{struct_name}") }
}

// ----------------------------------------------------------------------------
// JSX name enums (IdentifierReference / ThisExpression -> JSXIdentifier)
// ----------------------------------------------------------------------------

fn special_jsx_name_enum(
    enum_def: &EnumDef,
    state: &State,
    schema: &Schema,
) -> (String, String) {
    let type_name = enum_def.name();
    let payload_offset = enum_def.layout_64().align;
    let jsx_identifier_id = estree_id(state, "JSXIdentifier");

    let mut variants = enum_def
        .all_variants(schema)
        .filter(|variant| !should_skip_enum_variant(variant))
        .collect::<Vec<_>>();
    variants.sort_by_key(|variant| variant.discriminant);

    let mut construct_cases = String::new();
    let mut walk_cases = String::new();
    for variant in variants {
        let discriminant = variant.discriminant;
        let variant_type = variant.field_type(schema).unwrap_or_else(|| {
            panic!("`{type_name}` variant without payload")
        });
        let payload_pos = pos_offset(payload_offset);
        let variant_name = variant.name();
        let inner_name = plain_name(variant_type, schema);
        if variant_name == "IdentifierReference" || variant_name == "ThisExpression" {
            // Synthesize a JSXIdentifier from the inner node
            let name_expr = if variant_name == "ThisExpression" {
                "'this'".to_string()
            } else {
                "ident.name".to_string()
            };
            let inner_fn = construct_name(variant_type, schema);
            #[rustfmt::skip]
            write_it!(construct_cases, "
                case {discriminant}: {{
                    const identPos = ast.buffer.int32[({payload_pos}) >> 2];
                    const cacheKey = identPos + 2;
                    const cached = ast.nodes.get(cacheKey);
                    if (cached !== void 0) return cached;
                    const ident = {inner_fn}({payload_pos}, ast, null);
                    const node = Object.create(NodeProto);
                    node.type = 'JSXIdentifier';
                    node.name = {name_expr};
                    node.start = ident.start;
                    node.end = ident.end;
                    node.range = [ident.start, ident.end];
                    node.parent = parent;
                    ast.nodes.set(cacheKey, node);
                    return node;
                }}
            ");
            #[rustfmt::skip]
            write_it!(walk_cases, "
                case {discriminant}: {{
                    const visit = visitors[{jsx_identifier_id}];
                    if (visit !== null) visit({construct_fn}(pos, ast, materializeFrame(parentFrame, ast)));
                    return;
                }}
            ", construct_fn = construct_name(&schema.types[enum_def.id()], schema));
        } else {
            let variant_construct_fn_name = construct_name(variant_type, schema);
            write_it!(
                construct_cases,
                "case {discriminant}: return {variant_construct_fn_name}({payload_pos}, ast, parent);\n"
            );
            if state.walk_statuses[variant_type.id()] == WalkStatus::Walk {
                let variant_walk_fn_name = walk_name(variant_type, schema);
                write_it!(
                    walk_cases,
                    "case {discriminant}: {variant_walk_fn_name}({payload_pos}, ast, visitors, parentFrame); return;\n"
                );
            } else {
                write_it!(walk_cases, "case {discriminant}: return;\n");
            }
        }
        let _ = inner_name;
    }

    let construct_fn_name = construct_name(&schema.types[enum_def.id()], schema);
    let walk_fn_name = walk_name(&schema.types[enum_def.id()], schema);

    #[rustfmt::skip]
    let construct = format!("
        function {construct_fn_name}(pos, ast, parent) {{
            switch (ast.buffer[pos]) {{
                {construct_cases}
                default: throw new Error(`Unexpected discriminant ${{ast.buffer[pos]}} for {type_name}`);
            }}
        }}
    ");

    #[rustfmt::skip]
    let walk = format!("
        function {walk_fn_name}(pos, ast, visitors, parentFrame) {{
            switch (ast.buffer[pos]) {{
                {walk_cases}
                default: throw new Error(`Unexpected discriminant ${{ast.buffer[pos]}} for {type_name}`);
            }}
        }}
    ");

    (construct, walk)
}

// ----------------------------------------------------------------------------
// Shared helpers for specials
// ----------------------------------------------------------------------------

/// Emit a class with the standard boilerplate into `out` (same as `emit_class` but
/// writing to an arbitrary buffer, for Full specials).
fn emit_class_code(
    struct_def: &StructDef,
    type_prop_init: &str,
    getters: &str,
    to_json: &str,
    extra_props: &str,
    state: &State,
    out: &mut String,
) {
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
    write_it!(out, "
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

// ----------------------------------------------------------------------------
// VariableDeclarator (id: BindingPattern + merged typeAnnotation)
// ----------------------------------------------------------------------------

fn special_variable_declarator(
    struct_def: &StructDef,
    state: &State,
    schema: &Schema,
) -> SpecialKind {
    let struct_name = struct_def.name();
    let id_field = struct_def.field_by_name("id");
    let id_fn = construct_name(id_field.type_def(schema), schema);
    let id_off = id_field.offset_64();
    let type_annotation_field = struct_def.field_by_name("type_annotation");
    let type_annotation_fn = construct_name(type_annotation_field.type_def(schema), schema);
    let type_annotation_off = type_annotation_field.offset_64();

    let mut class_gen = ClassGenerator::new(state, schema);
    class_gen.skip_fields = vec!["id"];
    class_gen.generate_fields(struct_def, 0);

    let id_getter = format!(
        "
        get id() {{
            const internal = this.#internal;
            if (internal.$id !== void 0) return internal.$id;
            const pattern = {id_fn}({id_pos}, internal.ast, this);
            const typeAnnotation = {type_annotation_fn}({ta_pos}, internal.ast, pattern);
            if (typeAnnotation !== null) {{
                pattern.typeAnnotation = typeAnnotation;
                pattern.end = typeAnnotation.end;
                pattern.range[1] = typeAnnotation.end;
            }}
            return internal.$id = pattern;
        }}
        set id(v) {{ this.#internal.$id = v; }}
    ",
        id_pos = internal_pos(id_off),
        ta_pos = internal_pos(type_annotation_off),
    );

    let getters = format!("{}{id_getter}", class_gen.getters);
    let to_json = format!("type: '{struct_name}',\n{}id: this.id,\n", class_gen.to_json);
    let extra_props = format!("{}, $id: void 0", class_gen.extra_props);

    let mut construct = String::new();
    emit_class_code(
        struct_def,
        &format!("type = '{struct_name}';"),
        &getters,
        &to_json,
        &extra_props,
        state,
        &mut construct,
    );

    // Walker: keys are [id, init]. The merged `id` subtree is object-walked;
    // `init` (the potentially large side) stays buffer-walked.
    let node_type_id = estree_id(state, struct_name);
    let init_field = struct_def.field_by_name("init");
    let init_walk = walk_name(init_field.type_def(schema), schema);
    let init_off = init_field.offset_64();

    #[rustfmt::skip]
    let walk = format!("
        function walk{struct_name}(pos, ast, visitors, parentFrame) {{
            const enterExit = visitors[{node_type_id}];
            let node, enter, exit = null;
            if (enterExit !== null) {{
                ({{ enter, exit }} = enterExit);
                node = new {struct_name}(pos, ast, parentFrame);
                if (enter !== null) enter(node);
            }}

            const frame = new Frame(construct{struct_name}, pos, parentFrame);
            visitSynth((node !== void 0 ? node : new {struct_name}(pos, ast, parentFrame)).id, visitors);
            {init_walk}({init_pos}, ast, visitors, frame);

            if (exit !== null) exit(node);
        }}
    ", init_pos = pos_offset(init_off));

    SpecialKind::Full {
        construct,
        walk,
        import_names: format!("{struct_name}, construct{struct_name}"),
    }
}

// ----------------------------------------------------------------------------
// TS signature types with `params` = thisParam + FormalParameters
// ----------------------------------------------------------------------------

fn special_params_with_this(
    struct_def: &StructDef,
    state: &State,
    schema: &Schema,
) -> SpecialKind {
    let struct_name = struct_def.name();
    let this_param_field = struct_def.field_by_name("this_param");
    let this_param_fn = construct_name(this_param_field.type_def(schema), schema);
    let this_param_walk = walk_name(this_param_field.type_def(schema), schema);
    let this_param_off = this_param_field.offset_64();
    let params_field = struct_def.field_by_name("params");
    let params_fn = construct_name(params_field.type_def(schema), schema);
    let params_walk = walk_name(params_field.type_def(schema), schema);
    let params_off = params_field.offset_64();

    let mut class_gen = ClassGenerator::new(state, schema);
    class_gen.skip_fields = vec!["params"];
    class_gen.generate_fields(struct_def, 0);

    #[rustfmt::skip]
    let params_getter = format!("
        get params() {{
            const internal = this.#internal;
            if (internal.$params !== void 0) return internal.$params;
            const params = {params_fn}(internal.pos + {params_off}, internal.ast, this);
            const thisParam = {this_param_fn}(internal.pos + {this_param_off}, internal.ast, this);
            if (thisParam !== null) params.unshift(thisParam);
            return internal.$params = params;
        }}
        set params(v) {{ this.#internal.$params = v; }}
    ");

    let getters = format!("{}{params_getter}", class_gen.getters);
    let to_json = format!("type: '{struct_name}',\n{}params: this.params,\n", class_gen.to_json);
    let extra_props = format!("{}, $params: void 0", class_gen.extra_props);

    let mut construct = String::new();
    emit_class_code(
        struct_def,
        &format!("type = '{struct_name}';"),
        &getters,
        &to_json,
        &extra_props,
        state,
        &mut construct,
    );

    // Walker: mechanical keys, with `params` expanded to thisParam + params
    let estree_node = state.estree_nodes.get(struct_name).unwrap_or_else(|| {
        panic!("No ESTree node `{struct_name}`")
    });
    let mut walk_stmts = String::new();
    for key in &estree_node.keys {
        if key == "params" {
            write_it!(
                walk_stmts,
                "{this_param_walk}({}, ast, visitors, frame);\n",
                pos_offset(this_param_off)
            );
            write_it!(
                walk_stmts,
                "{params_walk}({}, ast, visitors, frame);\n",
                pos_offset(params_off)
            );
            continue;
        }
        let field = struct_def.fields.iter().find(|field| {
            !should_skip_field(field, schema) && get_struct_field_name(field) == *key
        });
        if let Some(field) = field {
            let field_type = field.type_def(schema);
            if state.walk_statuses[field_type.id()] == WalkStatus::Walk {
                let inner_walk_fn_name = walk_name(field_type, schema);
                let pos = pos_offset(field.offset_64());
                write_it!(walk_stmts, "{inner_walk_fn_name}({pos}, ast, visitors, frame);\n");
            }
        }
    }

    let mut walk = String::new();
    let node_type_id = estree_node.id;
    #[rustfmt::skip]
    write_it!(walk, "
        function walk{struct_name}(pos, ast, visitors, parentFrame) {{
            const enterExit = visitors[{node_type_id}];
            let node, enter, exit = null;
            if (enterExit !== null) {{
                ({{ enter, exit }} = enterExit);
                node = new {struct_name}(pos, ast, parentFrame);
                if (enter !== null) enter(node);
            }}

            const frame = new Frame(construct{struct_name}, pos, parentFrame);
            {walk_stmts}

            if (exit !== null) exit(node);
        }}
    ");

    SpecialKind::Full {
        construct,
        walk,
        import_names: format!("{struct_name}, construct{struct_name}"),
    }
}

// ----------------------------------------------------------------------------
// TSIndexSignature (parameters = [TSIndexSignatureName])
// ----------------------------------------------------------------------------

fn special_ts_index_signature(
    struct_def: &StructDef,
    state: &State,
    schema: &Schema,
) -> SpecialKind {
    let struct_name = struct_def.name();
    let parameter_field = struct_def.field_by_name("parameter");
    let parameter_fn = construct_name(parameter_field.type_def(schema), schema);
    let parameter_walk = walk_name(parameter_field.type_def(schema), schema);
    let parameter_off = parameter_field.offset_64();

    let mut class_gen = ClassGenerator::new(state, schema);
    class_gen.skip_fields = vec!["parameters"];
    class_gen.generate_fields(struct_def, 0);

    #[rustfmt::skip]
    let parameters_getter = format!("
        get parameters() {{
            const internal = this.#internal;
            if (internal.$parameters !== void 0) return internal.$parameters;
            return internal.$parameters = [{parameter_fn}(internal.pos + {parameter_off}, internal.ast, this)];
        }}
        set parameters(v) {{ this.#internal.$parameters = v; }}
    ");

    let getters = format!("{}{parameters_getter}", class_gen.getters);
    let to_json =
        format!("type: '{struct_name}',\n{}parameters: this.parameters,\n", class_gen.to_json);
    let extra_props = format!("{}, $parameters: void 0", class_gen.extra_props);

    let mut construct = String::new();
    emit_class_code(
        struct_def,
        &format!("type = '{struct_name}';"),
        &getters,
        &to_json,
        &extra_props,
        state,
        &mut construct,
    );

    let estree_node = &state.estree_nodes[struct_name];
    let mut walk_stmts = String::new();
    for key in &estree_node.keys {
        if key == "parameters" {
            write_it!(
                walk_stmts,
                "{parameter_walk}({}, ast, visitors, frame);\n",
                pos_offset(parameter_off)
            );
            continue;
        }
        let field = struct_def.fields.iter().find(|field| {
            !should_skip_field(field, schema) && get_struct_field_name(field) == *key
        });
        if let Some(field) = field {
            let field_type = field.type_def(schema);
            if state.walk_statuses[field_type.id()] == WalkStatus::Walk {
                let inner_walk_fn_name = walk_name(field_type, schema);
                let pos = pos_offset(field.offset_64());
                write_it!(walk_stmts, "{inner_walk_fn_name}({pos}, ast, visitors, frame);\n");
            }
        }
    }

    let node_type_id = estree_node.id;
    let mut walk = String::new();
    #[rustfmt::skip]
    write_it!(walk, "
        function walk{struct_name}(pos, ast, visitors, parentFrame) {{
            const enterExit = visitors[{node_type_id}];
            let node, enter, exit = null;
            if (enterExit !== null) {{
                ({{ enter, exit }} = enterExit);
                node = new {struct_name}(pos, ast, parentFrame);
                if (enter !== null) enter(node);
            }}

            const frame = new Frame(construct{struct_name}, pos, parentFrame);
            {walk_stmts}

            if (exit !== null) exit(node);
        }}
    ");

    SpecialKind::Full {
        construct,
        walk,
        import_names: format!("{struct_name}, construct{struct_name}"),
    }
}

// ----------------------------------------------------------------------------
// TSMappedType (`optional` defaults to false)
// ----------------------------------------------------------------------------

fn special_ts_mapped_type(
    struct_def: &StructDef,
    state: &State,
    schema: &Schema,
) -> SpecialKind {
    let optional_field = struct_def.field_by_name("optional");
    let optional_fn = construct_name(optional_field.type_def(schema), schema);
    let optional_off = optional_field.offset_64();

    let mut class_gen = ClassGenerator::new(state, schema);
    class_gen.skip_fields = vec!["optional"];
    class_gen.generate_fields(struct_def, 0);

    #[rustfmt::skip]
    let optional_getter = format!("
        get optional() {{
            const internal = this.#internal;
            const optional = {optional_fn}(internal.pos + {optional_off}, internal.ast);
            return optional === null ? false : optional;
        }}
        set optional(v) {{ defineOwn(this, 'optional', v); }}
    ");

    let struct_name = struct_def.name();
    let getters = format!("{}{optional_getter}", class_gen.getters);
    let to_json = format!("type: '{struct_name}',\n{}optional: this.optional,\n", class_gen.to_json);
    let extra_props = class_gen.extra_props.clone();

    let mut construct = String::new();
    emit_class_code(
        struct_def,
        &format!("type = '{struct_name}';"),
        &getters,
        &to_json,
        &extra_props,
        state,
        &mut construct,
    );

    let estree_node = &state.estree_nodes[struct_name];
    let walk_stmts = mechanical_walk_stmts(struct_def, estree_node, &state.walk_statuses, schema);
    let mut walk_state_proxy = String::new();
    let node_type_id = estree_node.id;
    #[rustfmt::skip]
    write_it!(walk_state_proxy, "
        function walk{struct_name}(pos, ast, visitors, parentFrame) {{
            const enterExit = visitors[{node_type_id}];
            let node, enter, exit = null;
            if (enterExit !== null) {{
                ({{ enter, exit }} = enterExit);
                node = new {struct_name}(pos, ast, parentFrame);
                if (enter !== null) enter(node);
            }}

            const frame = new Frame(construct{struct_name}, pos, parentFrame);
            {walk_stmts}

            if (exit !== null) exit(node);
        }}
    ");

    SpecialKind::Full {
        construct,
        walk: walk_state_proxy,
        import_names: format!("{struct_name}, construct{struct_name}"),
    }
}

// ----------------------------------------------------------------------------
// JSXElement (openingElement.selfClosing derived from closingElement)
// ----------------------------------------------------------------------------

fn special_jsx_element(struct_def: &StructDef, state: &State, schema: &Schema) -> SpecialKind {
    let struct_name = struct_def.name();
    let opening_field = struct_def.field_by_name("opening_element");
    let opening_fn = construct_name(opening_field.type_def(schema), schema);
    let opening_walk = walk_name(opening_field.type_def(schema), schema);
    let opening_off = opening_field.offset_64();
    let closing_field = struct_def.field_by_name("closing_element");
    let closing_fn = construct_name(closing_field.type_def(schema), schema);
    let closing_walk = walk_name(closing_field.type_def(schema), schema);
    let closing_off = closing_field.offset_64();
    let children_field = struct_def.field_by_name("children");
    let children_walk = walk_name(children_field.type_def(schema), schema);
    let children_off = children_field.offset_64();
    let TypeDef::Option(closing_option) = closing_field.type_def(schema) else {
        panic!("JSXElement::closing_element must be an Option");
    };
    let closing_inner = closing_option.inner_type(schema);
    let (closing_none, _) =
        get_option_none_condition_and_offset(closing_option, closing_inner, closing_off);
    let closing_none = lazyify_buffer_refs(&closing_none);

    let mut class_gen = ClassGenerator::new(state, schema);
    class_gen.skip_fields = vec!["openingElement"];
    class_gen.generate_fields(struct_def, 0);

    #[rustfmt::skip]
    let opening_getter = format!("
        get openingElement() {{
            const internal = this.#internal, ast = internal.ast, pos = internal.pos;
            if (internal.$openingElement !== void 0) return internal.$openingElement;
            const opening = {opening_fn}(pos + {opening_off}, ast, this);
            if ({closing_none}) opening.selfClosing = true;
            return internal.$openingElement = opening;
        }}
        set openingElement(v) {{ this.#internal.$openingElement = v; }}
    ");

    let getters = format!("{}{opening_getter}", class_gen.getters);
    let to_json = format!(
        "type: '{struct_name}',\n{}openingElement: this.openingElement,\n",
        class_gen.to_json
    );
    let extra_props = format!("{}, $openingElement: void 0", class_gen.extra_props);

    let mut construct = String::new();
    emit_class_code(
        struct_def,
        &format!("type = '{struct_name}';"),
        &getters,
        &to_json,
        &extra_props,
        state,
        &mut construct,
    );

    let node_type_id = estree_id(state, struct_name);
    #[rustfmt::skip]
    let walk = format!("
        function walk{struct_name}(pos, ast, visitors, parentFrame) {{
            const enterExit = visitors[{node_type_id}];
            let node, enter, exit = null;
            if (enterExit !== null) {{
                ({{ enter, exit }} = enterExit);
                node = new {struct_name}(pos, ast, parentFrame);
                if (enter !== null) enter(node);
            }}

            const frame = new Frame(construct{struct_name}, pos, parentFrame);
            if ({closing_none}) {{
                // Opening element's `selfClosing` is derived from the absence of a closing
                // element; materialize it (shallow) so visitors observe the correct value.
                const element = new {struct_name}(pos, ast, parentFrame);
                element.openingElement;
            }}
            {opening_walk}({opening_pos}, ast, visitors, frame);
            {children_walk}({children_pos}, ast, visitors, frame);
            {closing_walk}({closing_pos}, ast, visitors, frame);

            if (exit !== null) exit(node);
        }}
    ",
        opening_pos = pos_offset(opening_off),
        children_pos = pos_offset(children_off),
        closing_pos = pos_offset(closing_off),
    );
    let _ = closing_fn;

    SpecialKind::Full {
        construct,
        walk,
        import_names: format!("{struct_name}, construct{struct_name}"),
    }
}

// ----------------------------------------------------------------------------
// Export declarations with `attributes` from a WithClause
// ----------------------------------------------------------------------------

fn special_export_with_clause(
    struct_def: &StructDef,
    state: &State,
    schema: &Schema,
) -> SpecialKind {
    let struct_name = struct_def.name();
    let Some(with_clause_field) =
        struct_def.fields.iter().find(|field| field.name() == "with_clause")
    else {
        // No with_clause (e.g. plain ExportNamedDeclaration variants): fully mechanical
        return SpecialKind::None;
    };
    let with_clause_off = with_clause_field.offset_64();
    let TypeDef::Option(with_option) = with_clause_field.type_def(schema) else {
        panic!("{struct_name}::with_clause must be an Option");
    };
    let with_inner = with_option.inner_type(schema);
    let (with_none, _) =
        get_option_none_condition_and_offset(with_option, with_inner, with_clause_off);
    let with_none = lazyify_buffer_refs(&with_none);
    let TypeDef::Box(with_box) = with_inner else {
        panic!("{struct_name}::with_clause inner must be a Box");
    };
    let TypeDef::Struct(with_struct) = with_box.inner_type(schema) else {
        panic!("WithClause must be a struct");
    };
    let attributes_field = with_struct.field_by_name("with_entries");
    let attributes_fn = construct_name(attributes_field.type_def(schema), schema);
    let attributes_walk = walk_name(attributes_field.type_def(schema), schema);
    let attributes_off = attributes_field.offset_64();

    let mut class_gen = ClassGenerator::new(state, schema);
    class_gen.skip_fields = vec!["attributes"];
    class_gen.generate_fields(struct_def, 0);

    let attributes_getter = format!(
        "
        get attributes() {{
            const internal = this.#internal, ast = internal.ast, pos = internal.pos;
            if (internal.$attributes !== void 0) return internal.$attributes;
            if ({with_none}) return internal.$attributes = [];
            const withPos = ast.buffer.int32[({with_pos}) >> 2];
            return internal.$attributes = [...{attributes_fn}(withPos + {attributes_off}, ast, this)];
        }}
        set attributes(v) {{ this.#internal.$attributes = v; }}
    ",
        with_pos = internal_pos(with_clause_off),
    );

    let getters = format!("{}{attributes_getter}", class_gen.getters);
    let to_json = format!(
        "type: '{struct_name}',\n{}attributes: this.attributes,\n",
        class_gen.to_json
    );
    let extra_props = format!("{}, $attributes: void 0", class_gen.extra_props);

    let mut construct = String::new();
    emit_class_code(
        struct_def,
        &format!("type = '{struct_name}';"),
        &getters,
        &to_json,
        &extra_props,
        state,
        &mut construct,
    );

    // Walker: mechanical keys, with `attributes` walking through the with-clause
    let estree_node = &state.estree_nodes[struct_name];
    let mut walk_stmts = String::new();
    for key in &estree_node.keys {
        if key == "attributes" {
            #[rustfmt::skip]
            write_it!(walk_stmts, "
                if (!({with_none})) {{
                    const withPos = ast.buffer.int32[({}) >> 2];
                    {attributes_walk}(withPos + {attributes_off}, ast, visitors, frame);
                }}
            ", pos_offset(with_clause_off));
            continue;
        }
        let field = struct_def.fields.iter().find(|field| {
            !should_skip_field(field, schema) && get_struct_field_name(field) == *key
        });
        if let Some(field) = field {
            let field_type = field.type_def(schema);
            if state.walk_statuses[field_type.id()] == WalkStatus::Walk {
                let inner_walk_fn_name = walk_name(field_type, schema);
                let pos = pos_offset(field.offset_64());
                write_it!(walk_stmts, "{inner_walk_fn_name}({pos}, ast, visitors, frame);\n");
            }
        }
    }

    let node_type_id = estree_node.id;
    let mut walk = String::new();
    #[rustfmt::skip]
    write_it!(walk, "
        function walk{struct_name}(pos, ast, visitors, parentFrame) {{
            const enterExit = visitors[{node_type_id}];
            let node, enter, exit = null;
            if (enterExit !== null) {{
                ({{ enter, exit }} = enterExit);
                node = new {struct_name}(pos, ast, parentFrame);
                if (enter !== null) enter(node);
            }}

            const frame = new Frame(construct{struct_name}, pos, parentFrame);
            {walk_stmts}

            if (exit !== null) exit(node);
        }}
    ");

    SpecialKind::Full {
        construct,
        walk,
        import_names: format!("{struct_name}, construct{struct_name}"),
    }
}

// ----------------------------------------------------------------------------
// WithClause (pass-through `{ attributes }` object; attribute access is inlined
// by the import/export declaration specials)
// ----------------------------------------------------------------------------

fn special_with_clause_struct(
    struct_def: &StructDef,
    state: &State,
    schema: &Schema,
) -> SpecialKind {
    let _ = state;
    let attributes_field = struct_def.field_by_name("with_entries");
    let attributes_fn = construct_name(attributes_field.type_def(schema), schema);
    let attributes_walk = walk_name(attributes_field.type_def(schema), schema);
    let attributes_off = attributes_field.offset_64();

    let construct = format!(
        "
        function constructWithClause(pos, ast, parent) {{
            return {{ attributes: {attributes_fn}({attributes_pos}, ast, parent) }};
        }}
    ",
        attributes_pos = pos_offset(attributes_off),
    );

    let walk = format!(
        "
        function walkWithClause(pos, ast, visitors, parentFrame) {{
            {attributes_walk}({attributes_pos}, ast, visitors, parentFrame);
        }}
    ",
        attributes_pos = pos_offset(attributes_off),
    );

    SpecialKind::Full { construct, walk, import_names: "constructWithClause".to_string() }
}
