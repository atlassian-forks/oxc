// Auto-generated code, DO NOT EDIT DIRECTLY!
// To edit this generated file you have to edit `tasks/ast_tools/src/generators/raw_transfer_lazy_estree.rs`.

import {
  Program,
  constructProgram,
  IdentifierName,
  constructIdentifierName,
  IdentifierReference,
  constructIdentifierReference,
  BindingIdentifier,
  constructBindingIdentifier,
  LabelIdentifier,
  constructLabelIdentifier,
  ThisExpression,
  constructThisExpression,
  ArrayExpression,
  constructArrayExpression,
  constructElision,
  ObjectExpression,
  constructObjectExpression,
  ObjectProperty,
  constructObjectProperty,
  TemplateLiteral,
  constructTemplateLiteral,
  TaggedTemplateExpression,
  constructTaggedTemplateExpression,
  TemplateElement,
  constructTemplateElement,
  ComputedMemberExpression,
  constructComputedMemberExpression,
  StaticMemberExpression,
  constructStaticMemberExpression,
  PrivateFieldExpression,
  constructPrivateFieldExpression,
  CallExpression,
  constructCallExpression,
  NewExpression,
  constructNewExpression,
  constructImportMeta,
  constructNewTarget,
  SpreadElement,
  constructSpreadElement,
  UpdateExpression,
  constructUpdateExpression,
  UnaryExpression,
  constructUnaryExpression,
  BinaryExpression,
  constructBinaryExpression,
  PrivateInExpression,
  constructPrivateInExpression,
  LogicalExpression,
  constructLogicalExpression,
  ConditionalExpression,
  constructConditionalExpression,
  AssignmentExpression,
  constructAssignmentExpression,
  ArrayAssignmentTarget,
  constructArrayAssignmentTarget,
  ObjectAssignmentTarget,
  constructObjectAssignmentTarget,
  AssignmentTargetRest,
  constructAssignmentTargetRest,
  AssignmentTargetWithDefault,
  constructAssignmentTargetWithDefault,
  constructAssignmentTargetPropertyIdentifier,
  AssignmentTargetPropertyProperty,
  constructAssignmentTargetPropertyProperty,
  SequenceExpression,
  constructSequenceExpression,
  Super,
  constructSuper,
  AwaitExpression,
  constructAwaitExpression,
  ChainExpression,
  constructChainExpression,
  constructParenthesizedExpression,
  Directive,
  constructDirective,
  BlockStatement,
  constructBlockStatement,
  VariableDeclaration,
  constructVariableDeclaration,
  VariableDeclarator,
  constructVariableDeclarator,
  EmptyStatement,
  constructEmptyStatement,
  ExpressionStatement,
  constructExpressionStatement,
  IfStatement,
  constructIfStatement,
  DoWhileStatement,
  constructDoWhileStatement,
  WhileStatement,
  constructWhileStatement,
  ForStatement,
  constructForStatement,
  ForInStatement,
  constructForInStatement,
  ForOfStatement,
  constructForOfStatement,
  ContinueStatement,
  constructContinueStatement,
  BreakStatement,
  constructBreakStatement,
  ReturnStatement,
  constructReturnStatement,
  WithStatement,
  constructWithStatement,
  SwitchStatement,
  constructSwitchStatement,
  SwitchCase,
  constructSwitchCase,
  LabeledStatement,
  constructLabeledStatement,
  ThrowStatement,
  constructThrowStatement,
  TryStatement,
  constructTryStatement,
  CatchClause,
  constructCatchClause,
  constructCatchParameter,
  DebuggerStatement,
  constructDebuggerStatement,
  AssignmentPattern,
  constructAssignmentPattern,
  ObjectPattern,
  constructObjectPattern,
  BindingProperty,
  constructBindingProperty,
  ArrayPattern,
  constructArrayPattern,
  BindingRestElement,
  constructBindingRestElement,
  Function,
  constructFunction,
  constructFormalParameters,
  constructFormalParameterRest,
  constructFormalParameter,
  FunctionBody,
  constructFunctionBody,
  ArrowFunctionExpression,
  constructArrowFunctionExpression,
  YieldExpression,
  constructYieldExpression,
  Class,
  constructClass,
  ClassBody,
  constructClassBody,
  MethodDefinition,
  constructMethodDefinition,
  PropertyDefinition,
  constructPropertyDefinition,
  PrivateIdentifier,
  constructPrivateIdentifier,
  StaticBlock,
  constructStaticBlock,
  AccessorProperty,
  constructAccessorProperty,
  ImportExpression,
  constructImportExpression,
  ImportDeclaration,
  constructImportDeclaration,
  ImportSpecifier,
  constructImportSpecifier,
  ImportDefaultSpecifier,
  constructImportDefaultSpecifier,
  ImportNamespaceSpecifier,
  constructImportNamespaceSpecifier,
  constructWithClause,
  ImportAttribute,
  constructImportAttribute,
  ExportDeclaration,
  constructExportDeclaration,
  ExportNamedDeclaration,
  constructExportNamedDeclaration,
  ExportFromDeclaration,
  constructExportFromDeclaration,
  ExportDefaultDeclaration,
  constructExportDefaultDeclaration,
  ExportAllDeclaration,
  constructExportAllDeclaration,
  ExportSpecifier,
  constructExportSpecifier,
  V8IntrinsicExpression,
  constructV8IntrinsicExpression,
  BooleanLiteral,
  constructBooleanLiteral,
  NullLiteral,
  constructNullLiteral,
  NumericLiteral,
  constructNumericLiteral,
  StringLiteral,
  constructStringLiteral,
  BigIntLiteral,
  constructBigIntLiteral,
  RegExpLiteral,
  constructRegExpLiteral,
  JSXElement,
  constructJSXElement,
  JSXOpeningElement,
  constructJSXOpeningElement,
  JSXClosingElement,
  constructJSXClosingElement,
  JSXFragment,
  constructJSXFragment,
  JSXOpeningFragment,
  constructJSXOpeningFragment,
  JSXClosingFragment,
  constructJSXClosingFragment,
  constructJSXElementName,
  JSXNamespacedName,
  constructJSXNamespacedName,
  JSXMemberExpression,
  constructJSXMemberExpression,
  constructJSXMemberExpressionObject,
  JSXExpressionContainer,
  constructJSXExpressionContainer,
  JSXEmptyExpression,
  constructJSXEmptyExpression,
  JSXAttribute,
  constructJSXAttribute,
  JSXSpreadAttribute,
  constructJSXSpreadAttribute,
  JSXIdentifier,
  constructJSXIdentifier,
  JSXSpreadChild,
  constructJSXSpreadChild,
  JSXText,
  constructJSXText,
  TSThisParameter,
  constructTSThisParameter,
  TSEnumDeclaration,
  constructTSEnumDeclaration,
  TSEnumBody,
  constructTSEnumBody,
  TSEnumMember,
  constructTSEnumMember,
  TSTypeAnnotation,
  constructTSTypeAnnotation,
  TSLiteralType,
  constructTSLiteralType,
  TSConditionalType,
  constructTSConditionalType,
  TSUnionType,
  constructTSUnionType,
  TSIntersectionType,
  constructTSIntersectionType,
  constructTSParenthesizedType,
  TSTypeOperator,
  constructTSTypeOperator,
  TSArrayType,
  constructTSArrayType,
  TSIndexedAccessType,
  constructTSIndexedAccessType,
  TSTupleType,
  constructTSTupleType,
  TSNamedTupleMember,
  constructTSNamedTupleMember,
  TSOptionalType,
  constructTSOptionalType,
  TSRestType,
  constructTSRestType,
  TSAnyKeyword,
  constructTSAnyKeyword,
  TSStringKeyword,
  constructTSStringKeyword,
  TSBooleanKeyword,
  constructTSBooleanKeyword,
  TSNumberKeyword,
  constructTSNumberKeyword,
  TSNeverKeyword,
  constructTSNeverKeyword,
  TSIntrinsicKeyword,
  constructTSIntrinsicKeyword,
  TSUnknownKeyword,
  constructTSUnknownKeyword,
  TSNullKeyword,
  constructTSNullKeyword,
  TSUndefinedKeyword,
  constructTSUndefinedKeyword,
  TSVoidKeyword,
  constructTSVoidKeyword,
  TSSymbolKeyword,
  constructTSSymbolKeyword,
  TSThisType,
  constructTSThisType,
  TSObjectKeyword,
  constructTSObjectKeyword,
  TSBigIntKeyword,
  constructTSBigIntKeyword,
  TSTypeReference,
  constructTSTypeReference,
  TSQualifiedName,
  constructTSQualifiedName,
  TSTypeParameterInstantiation,
  constructTSTypeParameterInstantiation,
  TSTypeParameter,
  constructTSTypeParameter,
  TSTypeParameterDeclaration,
  constructTSTypeParameterDeclaration,
  TSTypeAliasDeclaration,
  constructTSTypeAliasDeclaration,
  constructTSClassImplements,
  TSInterfaceDeclaration,
  constructTSInterfaceDeclaration,
  TSInterfaceBody,
  constructTSInterfaceBody,
  TSPropertySignature,
  constructTSPropertySignature,
  TSIndexSignature,
  constructTSIndexSignature,
  TSCallSignatureDeclaration,
  constructTSCallSignatureDeclaration,
  TSMethodSignature,
  constructTSMethodSignature,
  TSConstructSignatureDeclaration,
  constructTSConstructSignatureDeclaration,
  TSIndexSignatureName,
  constructTSIndexSignatureName,
  constructTSInterfaceHeritage,
  TSTypePredicate,
  constructTSTypePredicate,
  constructTSExternalModuleDeclaration,
  constructTSNamespaceDeclaration,
  constructTSGlobalDeclaration,
  TSModuleBlock,
  constructTSModuleBlock,
  TSTypeLiteral,
  constructTSTypeLiteral,
  TSInferType,
  constructTSInferType,
  TSTypeQuery,
  constructTSTypeQuery,
  TSImportType,
  constructTSImportType,
  TSImportTypeQualifiedName,
  constructTSImportTypeQualifiedName,
  TSFunctionType,
  constructTSFunctionType,
  TSConstructorType,
  constructTSConstructorType,
  TSMappedType,
  constructTSMappedType,
  TSTemplateLiteralType,
  constructTSTemplateLiteralType,
  TSAsExpression,
  constructTSAsExpression,
  TSSatisfiesExpression,
  constructTSSatisfiesExpression,
  TSTypeAssertion,
  constructTSTypeAssertion,
  TSImportEqualsDeclaration,
  constructTSImportEqualsDeclaration,
  TSExternalModuleReference,
  constructTSExternalModuleReference,
  TSNonNullExpression,
  constructTSNonNullExpression,
  Decorator,
  constructDecorator,
  TSExportAssignment,
  constructTSExportAssignment,
  TSNamespaceExportDeclaration,
  constructTSNamespaceExportDeclaration,
  TSInstantiationExpression,
  constructTSInstantiationExpression,
  JSDocNullableType,
  constructJSDocNullableType,
  JSDocNonNullableType,
  constructJSDocNonNullableType,
  JSDocUnknownType,
  constructJSDocUnknownType,
} from "./constructors.js";
import { Frame, materializeFrame, visitSynth } from "../../plugins/lazy/support.js";

export function walkRoot(pos, ast, visitors) {
  walkProgram(pos, ast, visitors, null);
}

function walkProgram(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[74];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new Program(pos, ast, null);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructProgram, pos, null);
  walkVecDirective(pos + 88, ast, visitors, frame);
  walkVecStatement(pos + 112, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkExpression(pos, ast, visitors, parentFrame) {
  switch (ast.buffer[pos]) {
    case 0:
      walkBoxBooleanLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 1:
      walkBoxNullLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 2:
      walkBoxNumericLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 3:
      walkBoxBigIntLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 4:
      walkBoxRegExpLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 5:
      walkBoxStringLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 6:
      walkBoxTemplateLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 7:
      walkBoxIdentifierReference(pos + 8, ast, visitors, parentFrame);
      return;
    case 8:
      walkBoxSuper(pos + 8, ast, visitors, parentFrame);
      return;
    case 9:
      walkBoxArrayExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 10:
      walkBoxArrowFunctionExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 11:
      walkBoxAssignmentExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 12:
      walkBoxAwaitExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 13:
      walkBoxBinaryExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 14:
      walkBoxCallExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 15:
      walkBoxChainExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 16:
      walkBoxClass(pos + 8, ast, visitors, parentFrame);
      return;
    case 17:
      walkBoxConditionalExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 18:
      walkBoxFunction(pos + 8, ast, visitors, parentFrame);
      return;
    case 19:
      walkBoxImportExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 20:
      walkBoxLogicalExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 21:
      walkBoxNewExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 22:
      walkBoxObjectExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 23:
      walkBoxParenthesizedExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 24:
      walkBoxSequenceExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 25:
      walkBoxTaggedTemplateExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 26:
      walkBoxThisExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 27:
      walkBoxUnaryExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 28:
      walkBoxUpdateExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 29:
      walkBoxYieldExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 30:
      walkBoxPrivateInExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 31:
      walkBoxImportMeta(pos + 8, ast, visitors, parentFrame);
      return;
    case 32:
      walkBoxNewTarget(pos + 8, ast, visitors, parentFrame);
      return;
    case 33:
      walkBoxJSXElement(pos + 8, ast, visitors, parentFrame);
      return;
    case 34:
      walkBoxJSXFragment(pos + 8, ast, visitors, parentFrame);
      return;
    case 35:
      walkBoxTSAsExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 36:
      walkBoxTSSatisfiesExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 37:
      walkBoxTSTypeAssertion(pos + 8, ast, visitors, parentFrame);
      return;
    case 38:
      walkBoxTSNonNullExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 39:
      walkBoxTSInstantiationExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 40:
      walkBoxV8IntrinsicExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 48:
      walkBoxComputedMemberExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 49:
      walkBoxStaticMemberExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 50:
      walkBoxPrivateFieldExpression(pos + 8, ast, visitors, parentFrame);
      return;
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for Expression`);
  }
}

function walkIdentifierName(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[57];
  if (enterExit !== null) {
    const { enter, exit } = enterExit;
    const node = new IdentifierName(pos, ast, parentFrame);
    if (enter !== null) enter(node);
    if (exit !== null) exit(node);
  }
}

function walkIdentifierReference(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[57];
  if (enterExit !== null) {
    const { enter, exit } = enterExit;
    const node = new IdentifierReference(pos, ast, parentFrame);
    if (enter !== null) enter(node);
    if (exit !== null) exit(node);
  }
}

function walkBindingIdentifier(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[57];
  if (enterExit !== null) {
    const { enter, exit } = enterExit;
    const node = new BindingIdentifier(pos, ast, parentFrame);
    if (enter !== null) enter(node);
    if (exit !== null) exit(node);
  }
}

function walkLabelIdentifier(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[57];
  if (enterExit !== null) {
    const { enter, exit } = enterExit;
    const node = new LabelIdentifier(pos, ast, parentFrame);
    if (enter !== null) enter(node);
    if (exit !== null) exit(node);
  }
}

function walkThisExpression(pos, ast, visitors, parentFrame) {
  const visit = visitors[6];
  if (visit !== null) visit(new ThisExpression(pos, ast, parentFrame));
}

function walkArrayExpression(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[28];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new ArrayExpression(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructArrayExpression, pos, parentFrame);
  walkVecArrayExpressionElement(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkArrayExpressionElement(pos, ast, visitors, parentFrame) {
  switch (ast.buffer[pos]) {
    case 0:
      walkBoxBooleanLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 1:
      walkBoxNullLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 2:
      walkBoxNumericLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 3:
      walkBoxBigIntLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 4:
      walkBoxRegExpLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 5:
      walkBoxStringLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 6:
      walkBoxTemplateLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 7:
      walkBoxIdentifierReference(pos + 8, ast, visitors, parentFrame);
      return;
    case 8:
      walkBoxSuper(pos + 8, ast, visitors, parentFrame);
      return;
    case 9:
      walkBoxArrayExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 10:
      walkBoxArrowFunctionExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 11:
      walkBoxAssignmentExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 12:
      walkBoxAwaitExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 13:
      walkBoxBinaryExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 14:
      walkBoxCallExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 15:
      walkBoxChainExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 16:
      walkBoxClass(pos + 8, ast, visitors, parentFrame);
      return;
    case 17:
      walkBoxConditionalExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 18:
      walkBoxFunction(pos + 8, ast, visitors, parentFrame);
      return;
    case 19:
      walkBoxImportExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 20:
      walkBoxLogicalExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 21:
      walkBoxNewExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 22:
      walkBoxObjectExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 23:
      walkBoxParenthesizedExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 24:
      walkBoxSequenceExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 25:
      walkBoxTaggedTemplateExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 26:
      walkBoxThisExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 27:
      walkBoxUnaryExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 28:
      walkBoxUpdateExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 29:
      walkBoxYieldExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 30:
      walkBoxPrivateInExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 31:
      walkBoxImportMeta(pos + 8, ast, visitors, parentFrame);
      return;
    case 32:
      walkBoxNewTarget(pos + 8, ast, visitors, parentFrame);
      return;
    case 33:
      walkBoxJSXElement(pos + 8, ast, visitors, parentFrame);
      return;
    case 34:
      walkBoxJSXFragment(pos + 8, ast, visitors, parentFrame);
      return;
    case 35:
      walkBoxTSAsExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 36:
      walkBoxTSSatisfiesExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 37:
      walkBoxTSTypeAssertion(pos + 8, ast, visitors, parentFrame);
      return;
    case 38:
      walkBoxTSNonNullExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 39:
      walkBoxTSInstantiationExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 40:
      walkBoxV8IntrinsicExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 48:
      walkBoxComputedMemberExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 49:
      walkBoxStaticMemberExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 50:
      walkBoxPrivateFieldExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 64:
      walkBoxSpreadElement(pos + 8, ast, visitors, parentFrame);
      return;
    case 65:
      walkBoxElision(pos + 8, ast, visitors, parentFrame);
      return;
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ArrayExpressionElement`);
  }
}

function walkElision(pos, ast, visitors, parentFrame) {}

function walkObjectExpression(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[71];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new ObjectExpression(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructObjectExpression, pos, parentFrame);
  walkVecObjectPropertyKind(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkObjectPropertyKind(pos, ast, visitors, parentFrame) {
  switch (ast.buffer[pos]) {
    case 0:
      walkBoxObjectProperty(pos + 8, ast, visitors, parentFrame);
      return;
    case 1:
      walkBoxSpreadElement(pos + 8, ast, visitors, parentFrame);
      return;
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ObjectPropertyKind`);
  }
}

function walkObjectProperty(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[75];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new ObjectProperty(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructObjectProperty, pos, parentFrame);
  walkPropertyKey(pos + 16, ast, visitors, frame);
  walkExpression(pos + 32, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkPropertyKey(pos, ast, visitors, parentFrame) {
  switch (ast.buffer[pos]) {
    case 0:
      walkBoxBooleanLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 1:
      walkBoxNullLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 2:
      walkBoxNumericLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 3:
      walkBoxBigIntLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 4:
      walkBoxRegExpLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 5:
      walkBoxStringLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 6:
      walkBoxTemplateLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 7:
      walkBoxIdentifierReference(pos + 8, ast, visitors, parentFrame);
      return;
    case 8:
      walkBoxSuper(pos + 8, ast, visitors, parentFrame);
      return;
    case 9:
      walkBoxArrayExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 10:
      walkBoxArrowFunctionExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 11:
      walkBoxAssignmentExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 12:
      walkBoxAwaitExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 13:
      walkBoxBinaryExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 14:
      walkBoxCallExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 15:
      walkBoxChainExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 16:
      walkBoxClass(pos + 8, ast, visitors, parentFrame);
      return;
    case 17:
      walkBoxConditionalExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 18:
      walkBoxFunction(pos + 8, ast, visitors, parentFrame);
      return;
    case 19:
      walkBoxImportExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 20:
      walkBoxLogicalExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 21:
      walkBoxNewExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 22:
      walkBoxObjectExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 23:
      walkBoxParenthesizedExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 24:
      walkBoxSequenceExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 25:
      walkBoxTaggedTemplateExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 26:
      walkBoxThisExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 27:
      walkBoxUnaryExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 28:
      walkBoxUpdateExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 29:
      walkBoxYieldExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 30:
      walkBoxPrivateInExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 31:
      walkBoxImportMeta(pos + 8, ast, visitors, parentFrame);
      return;
    case 32:
      walkBoxNewTarget(pos + 8, ast, visitors, parentFrame);
      return;
    case 33:
      walkBoxJSXElement(pos + 8, ast, visitors, parentFrame);
      return;
    case 34:
      walkBoxJSXFragment(pos + 8, ast, visitors, parentFrame);
      return;
    case 35:
      walkBoxTSAsExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 36:
      walkBoxTSSatisfiesExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 37:
      walkBoxTSTypeAssertion(pos + 8, ast, visitors, parentFrame);
      return;
    case 38:
      walkBoxTSNonNullExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 39:
      walkBoxTSInstantiationExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 40:
      walkBoxV8IntrinsicExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 48:
      walkBoxComputedMemberExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 49:
      walkBoxStaticMemberExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 50:
      walkBoxPrivateFieldExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 64:
      walkBoxIdentifierName(pos + 8, ast, visitors, parentFrame);
      return;
    case 65:
      walkBoxStringLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 66:
      walkBoxNumericLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 67:
      walkBoxBigIntLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 68:
      walkBoxPrivateIdentifier(pos + 8, ast, visitors, parentFrame);
      return;
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for PropertyKey`);
  }
}

function walkTemplateLiteral(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[85];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TemplateLiteral(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTemplateLiteral, pos, parentFrame);
  walkVecTemplateElement(pos + 16, ast, visitors, frame);
  walkVecExpression(pos + 40, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTaggedTemplateExpression(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[84];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TaggedTemplateExpression(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTaggedTemplateExpression, pos, parentFrame);
  walkExpression(pos + 16, ast, visitors, frame);
  walkOptionBoxTSTypeParameterInstantiation(pos + 32, ast, visitors, frame);
  walkTemplateLiteral(pos + 40, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTemplateElement(pos, ast, visitors, parentFrame) {
  const visit = visitors[5];
  if (visit !== null) visit(new TemplateElement(pos, ast, parentFrame));
}

function walkComputedMemberExpression(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[67];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new ComputedMemberExpression(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructComputedMemberExpression, pos, parentFrame);
  walkExpression(pos + 16, ast, visitors, frame);
  walkExpression(pos + 32, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkStaticMemberExpression(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[67];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new StaticMemberExpression(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructStaticMemberExpression, pos, parentFrame);
  walkExpression(pos + 16, ast, visitors, frame);
  walkIdentifierName(pos + 32, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkPrivateFieldExpression(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[67];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new PrivateFieldExpression(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructPrivateFieldExpression, pos, parentFrame);
  walkExpression(pos + 16, ast, visitors, frame);
  walkPrivateIdentifier(pos + 32, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkCallExpression(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[37];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new CallExpression(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructCallExpression, pos, parentFrame);
  walkExpression(pos + 16, ast, visitors, frame);
  walkOptionBoxTSTypeParameterInstantiation(pos + 32, ast, visitors, frame);
  walkVecArgument(pos + 40, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkNewExpression(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[70];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new NewExpression(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructNewExpression, pos, parentFrame);
  walkExpression(pos + 16, ast, visitors, frame);
  walkOptionBoxTSTypeParameterInstantiation(pos + 32, ast, visitors, frame);
  walkVecArgument(pos + 40, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkImportMeta(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[68];
  const node = constructImportMeta(pos, ast, materializeFrame(parentFrame, ast));
  let enter = null,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    if (enter !== null) enter(node);
  }
  visitSynth(node.meta, visitors);
  visitSynth(node.property, visitors);
  if (exit !== null) exit(node);
}

function walkNewTarget(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[68];
  const node = constructNewTarget(pos, ast, materializeFrame(parentFrame, ast));
  let enter = null,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    if (enter !== null) enter(node);
  }
  visitSynth(node.meta, visitors);
  visitSynth(node.property, visitors);
  if (exit !== null) exit(node);
}

function walkSpreadElement(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[80];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new SpreadElement(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructSpreadElement, pos, parentFrame);
  walkExpression(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkArgument(pos, ast, visitors, parentFrame) {
  switch (ast.buffer[pos]) {
    case 0:
      walkBoxBooleanLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 1:
      walkBoxNullLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 2:
      walkBoxNumericLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 3:
      walkBoxBigIntLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 4:
      walkBoxRegExpLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 5:
      walkBoxStringLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 6:
      walkBoxTemplateLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 7:
      walkBoxIdentifierReference(pos + 8, ast, visitors, parentFrame);
      return;
    case 8:
      walkBoxSuper(pos + 8, ast, visitors, parentFrame);
      return;
    case 9:
      walkBoxArrayExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 10:
      walkBoxArrowFunctionExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 11:
      walkBoxAssignmentExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 12:
      walkBoxAwaitExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 13:
      walkBoxBinaryExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 14:
      walkBoxCallExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 15:
      walkBoxChainExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 16:
      walkBoxClass(pos + 8, ast, visitors, parentFrame);
      return;
    case 17:
      walkBoxConditionalExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 18:
      walkBoxFunction(pos + 8, ast, visitors, parentFrame);
      return;
    case 19:
      walkBoxImportExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 20:
      walkBoxLogicalExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 21:
      walkBoxNewExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 22:
      walkBoxObjectExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 23:
      walkBoxParenthesizedExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 24:
      walkBoxSequenceExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 25:
      walkBoxTaggedTemplateExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 26:
      walkBoxThisExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 27:
      walkBoxUnaryExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 28:
      walkBoxUpdateExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 29:
      walkBoxYieldExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 30:
      walkBoxPrivateInExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 31:
      walkBoxImportMeta(pos + 8, ast, visitors, parentFrame);
      return;
    case 32:
      walkBoxNewTarget(pos + 8, ast, visitors, parentFrame);
      return;
    case 33:
      walkBoxJSXElement(pos + 8, ast, visitors, parentFrame);
      return;
    case 34:
      walkBoxJSXFragment(pos + 8, ast, visitors, parentFrame);
      return;
    case 35:
      walkBoxTSAsExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 36:
      walkBoxTSSatisfiesExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 37:
      walkBoxTSTypeAssertion(pos + 8, ast, visitors, parentFrame);
      return;
    case 38:
      walkBoxTSNonNullExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 39:
      walkBoxTSInstantiationExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 40:
      walkBoxV8IntrinsicExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 48:
      walkBoxComputedMemberExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 49:
      walkBoxStaticMemberExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 50:
      walkBoxPrivateFieldExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 64:
      walkBoxSpreadElement(pos + 8, ast, visitors, parentFrame);
      return;
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for Argument`);
  }
}

function walkUpdateExpression(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[89];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new UpdateExpression(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructUpdateExpression, pos, parentFrame);
  walkSimpleAssignmentTarget(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkUnaryExpression(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[88];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new UnaryExpression(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructUnaryExpression, pos, parentFrame);
  walkExpression(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkBinaryExpression(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[34];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new BinaryExpression(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructBinaryExpression, pos, parentFrame);
  walkExpression(pos + 16, ast, visitors, frame);
  walkExpression(pos + 32, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkPrivateInExpression(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[34];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new PrivateInExpression(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructPrivateInExpression, pos, parentFrame);
  walkPrivateIdentifier(pos + 16, ast, visitors, frame);
  walkExpression(pos + 48, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkLogicalExpression(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[66];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new LogicalExpression(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructLogicalExpression, pos, parentFrame);
  walkExpression(pos + 16, ast, visitors, frame);
  walkExpression(pos + 32, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkConditionalExpression(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[43];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new ConditionalExpression(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructConditionalExpression, pos, parentFrame);
  walkExpression(pos + 16, ast, visitors, frame);
  walkExpression(pos + 32, ast, visitors, frame);
  walkExpression(pos + 48, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkAssignmentExpression(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[31];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new AssignmentExpression(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructAssignmentExpression, pos, parentFrame);
  walkAssignmentTarget(pos + 16, ast, visitors, frame);
  walkExpression(pos + 32, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkAssignmentTarget(pos, ast, visitors, parentFrame) {
  switch (ast.buffer[pos]) {
    case 0:
      walkBoxIdentifierReference(pos + 8, ast, visitors, parentFrame);
      return;
    case 1:
      walkBoxTSAsExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 2:
      walkBoxTSSatisfiesExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 3:
      walkBoxTSNonNullExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 4:
      walkBoxTSTypeAssertion(pos + 8, ast, visitors, parentFrame);
      return;
    case 8:
      walkBoxArrayAssignmentTarget(pos + 8, ast, visitors, parentFrame);
      return;
    case 9:
      walkBoxObjectAssignmentTarget(pos + 8, ast, visitors, parentFrame);
      return;
    case 48:
      walkBoxComputedMemberExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 49:
      walkBoxStaticMemberExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 50:
      walkBoxPrivateFieldExpression(pos + 8, ast, visitors, parentFrame);
      return;
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for AssignmentTarget`);
  }
}

function walkSimpleAssignmentTarget(pos, ast, visitors, parentFrame) {
  switch (ast.buffer[pos]) {
    case 0:
      walkBoxIdentifierReference(pos + 8, ast, visitors, parentFrame);
      return;
    case 1:
      walkBoxTSAsExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 2:
      walkBoxTSSatisfiesExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 3:
      walkBoxTSNonNullExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 4:
      walkBoxTSTypeAssertion(pos + 8, ast, visitors, parentFrame);
      return;
    case 48:
      walkBoxComputedMemberExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 49:
      walkBoxStaticMemberExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 50:
      walkBoxPrivateFieldExpression(pos + 8, ast, visitors, parentFrame);
      return;
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for SimpleAssignmentTarget`);
  }
}

function walkArrayAssignmentTarget(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[29];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new ArrayAssignmentTarget(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructArrayAssignmentTarget, pos, parentFrame);
  walkVecOptionAssignmentTargetMaybeDefault(pos + 16, ast, visitors, frame);
  walkOptionBoxAssignmentTargetRest(pos + 40, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkObjectAssignmentTarget(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[72];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new ObjectAssignmentTarget(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructObjectAssignmentTarget, pos, parentFrame);
  walkVecAssignmentTargetProperty(pos + 16, ast, visitors, frame);
  walkOptionBoxAssignmentTargetRest(pos + 40, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkAssignmentTargetRest(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[77];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new AssignmentTargetRest(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructAssignmentTargetRest, pos, parentFrame);
  walkAssignmentTarget(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkAssignmentTargetMaybeDefault(pos, ast, visitors, parentFrame) {
  switch (ast.buffer[pos]) {
    case 0:
      walkBoxIdentifierReference(pos + 8, ast, visitors, parentFrame);
      return;
    case 1:
      walkBoxTSAsExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 2:
      walkBoxTSSatisfiesExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 3:
      walkBoxTSNonNullExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 4:
      walkBoxTSTypeAssertion(pos + 8, ast, visitors, parentFrame);
      return;
    case 8:
      walkBoxArrayAssignmentTarget(pos + 8, ast, visitors, parentFrame);
      return;
    case 9:
      walkBoxObjectAssignmentTarget(pos + 8, ast, visitors, parentFrame);
      return;
    case 16:
      walkBoxAssignmentTargetWithDefault(pos + 8, ast, visitors, parentFrame);
      return;
    case 48:
      walkBoxComputedMemberExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 49:
      walkBoxStaticMemberExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 50:
      walkBoxPrivateFieldExpression(pos + 8, ast, visitors, parentFrame);
      return;
    default:
      throw new Error(
        `Unexpected discriminant ${ast.buffer[pos]} for AssignmentTargetMaybeDefault`,
      );
  }
}

function walkAssignmentTargetWithDefault(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[32];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new AssignmentTargetWithDefault(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructAssignmentTargetWithDefault, pos, parentFrame);
  walkAssignmentTarget(pos + 16, ast, visitors, frame);
  walkExpression(pos + 32, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkAssignmentTargetProperty(pos, ast, visitors, parentFrame) {
  switch (ast.buffer[pos]) {
    case 0:
      walkBoxAssignmentTargetPropertyIdentifier(pos + 8, ast, visitors, parentFrame);
      return;
    case 1:
      walkBoxAssignmentTargetPropertyProperty(pos + 8, ast, visitors, parentFrame);
      return;
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for AssignmentTargetProperty`);
  }
}

function walkAssignmentTargetPropertyIdentifier(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[75];
  const node = constructAssignmentTargetPropertyIdentifier(
    pos,
    ast,
    materializeFrame(parentFrame, ast),
  );
  let enter = null,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    if (enter !== null) enter(node);
  }
  visitSynth(node.key, visitors);
  visitSynth(node.value, visitors);
  if (exit !== null) exit(node);
}

function walkAssignmentTargetPropertyProperty(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[75];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new AssignmentTargetPropertyProperty(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructAssignmentTargetPropertyProperty, pos, parentFrame);
  walkPropertyKey(pos + 16, ast, visitors, frame);
  walkAssignmentTargetMaybeDefault(pos + 32, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkSequenceExpression(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[79];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new SequenceExpression(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructSequenceExpression, pos, parentFrame);
  walkVecExpression(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkSuper(pos, ast, visitors, parentFrame) {
  const visit = visitors[4];
  if (visit !== null) visit(new Super(pos, ast, parentFrame));
}

function walkAwaitExpression(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[33];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new AwaitExpression(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructAwaitExpression, pos, parentFrame);
  walkExpression(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkChainExpression(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[39];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new ChainExpression(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructChainExpression, pos, parentFrame);
  walkChainElement(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkChainElement(pos, ast, visitors, parentFrame) {
  switch (ast.buffer[pos]) {
    case 0:
      walkBoxCallExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 1:
      walkBoxTSNonNullExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 48:
      walkBoxComputedMemberExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 49:
      walkBoxStaticMemberExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 50:
      walkBoxPrivateFieldExpression(pos + 8, ast, visitors, parentFrame);
      return;
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ChainElement`);
  }
}

function walkParenthesizedExpression(pos, ast, visitors, parentFrame) {
  walkExpression(pos + 16, ast, visitors, parentFrame);
}

function walkStatement(pos, ast, visitors, parentFrame) {
  switch (ast.buffer[pos]) {
    case 0:
      walkBoxBlockStatement(pos + 8, ast, visitors, parentFrame);
      return;
    case 1:
      walkBoxBreakStatement(pos + 8, ast, visitors, parentFrame);
      return;
    case 2:
      walkBoxContinueStatement(pos + 8, ast, visitors, parentFrame);
      return;
    case 3:
      walkBoxDebuggerStatement(pos + 8, ast, visitors, parentFrame);
      return;
    case 4:
      walkBoxDoWhileStatement(pos + 8, ast, visitors, parentFrame);
      return;
    case 5:
      walkBoxEmptyStatement(pos + 8, ast, visitors, parentFrame);
      return;
    case 6:
      walkBoxExpressionStatement(pos + 8, ast, visitors, parentFrame);
      return;
    case 7:
      walkBoxForInStatement(pos + 8, ast, visitors, parentFrame);
      return;
    case 8:
      walkBoxForOfStatement(pos + 8, ast, visitors, parentFrame);
      return;
    case 9:
      walkBoxForStatement(pos + 8, ast, visitors, parentFrame);
      return;
    case 10:
      walkBoxIfStatement(pos + 8, ast, visitors, parentFrame);
      return;
    case 11:
      walkBoxLabeledStatement(pos + 8, ast, visitors, parentFrame);
      return;
    case 12:
      walkBoxReturnStatement(pos + 8, ast, visitors, parentFrame);
      return;
    case 13:
      walkBoxSwitchStatement(pos + 8, ast, visitors, parentFrame);
      return;
    case 14:
      walkBoxThrowStatement(pos + 8, ast, visitors, parentFrame);
      return;
    case 15:
      walkBoxTryStatement(pos + 8, ast, visitors, parentFrame);
      return;
    case 16:
      walkBoxWhileStatement(pos + 8, ast, visitors, parentFrame);
      return;
    case 17:
      walkBoxWithStatement(pos + 8, ast, visitors, parentFrame);
      return;
    case 32:
      walkBoxVariableDeclaration(pos + 8, ast, visitors, parentFrame);
      return;
    case 33:
      walkBoxFunction(pos + 8, ast, visitors, parentFrame);
      return;
    case 34:
      walkBoxClass(pos + 8, ast, visitors, parentFrame);
      return;
    case 35:
      walkBoxTSTypeAliasDeclaration(pos + 8, ast, visitors, parentFrame);
      return;
    case 36:
      walkBoxTSInterfaceDeclaration(pos + 8, ast, visitors, parentFrame);
      return;
    case 37:
      walkBoxTSEnumDeclaration(pos + 8, ast, visitors, parentFrame);
      return;
    case 38:
      walkBoxTSExternalModuleDeclaration(pos + 8, ast, visitors, parentFrame);
      return;
    case 39:
      walkBoxTSNamespaceDeclaration(pos + 8, ast, visitors, parentFrame);
      return;
    case 40:
      walkBoxTSGlobalDeclaration(pos + 8, ast, visitors, parentFrame);
      return;
    case 41:
      walkBoxTSImportEqualsDeclaration(pos + 8, ast, visitors, parentFrame);
      return;
    case 64:
      walkBoxImportDeclaration(pos + 8, ast, visitors, parentFrame);
      return;
    case 65:
      walkBoxExportAllDeclaration(pos + 8, ast, visitors, parentFrame);
      return;
    case 66:
      walkBoxExportDefaultDeclaration(pos + 8, ast, visitors, parentFrame);
      return;
    case 67:
      walkBoxExportDeclaration(pos + 8, ast, visitors, parentFrame);
      return;
    case 68:
      walkBoxExportNamedDeclaration(pos + 8, ast, visitors, parentFrame);
      return;
    case 69:
      walkBoxExportFromDeclaration(pos + 8, ast, visitors, parentFrame);
      return;
    case 70:
      walkBoxTSExportAssignment(pos + 8, ast, visitors, parentFrame);
      return;
    case 71:
      walkBoxTSNamespaceExportDeclaration(pos + 8, ast, visitors, parentFrame);
      return;
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for Statement`);
  }
}

function walkDirective(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[51];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new Directive(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructDirective, pos, parentFrame);
  walkStringLiteral(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkHashbang(pos, ast, visitors, parentFrame) {}

function walkBlockStatement(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[35];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new BlockStatement(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructBlockStatement, pos, parentFrame);
  walkVecStatement(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkDeclaration(pos, ast, visitors, parentFrame) {
  switch (ast.buffer[pos]) {
    case 32:
      walkBoxVariableDeclaration(pos + 8, ast, visitors, parentFrame);
      return;
    case 33:
      walkBoxFunction(pos + 8, ast, visitors, parentFrame);
      return;
    case 34:
      walkBoxClass(pos + 8, ast, visitors, parentFrame);
      return;
    case 35:
      walkBoxTSTypeAliasDeclaration(pos + 8, ast, visitors, parentFrame);
      return;
    case 36:
      walkBoxTSInterfaceDeclaration(pos + 8, ast, visitors, parentFrame);
      return;
    case 37:
      walkBoxTSEnumDeclaration(pos + 8, ast, visitors, parentFrame);
      return;
    case 38:
      walkBoxTSExternalModuleDeclaration(pos + 8, ast, visitors, parentFrame);
      return;
    case 39:
      walkBoxTSNamespaceDeclaration(pos + 8, ast, visitors, parentFrame);
      return;
    case 40:
      walkBoxTSGlobalDeclaration(pos + 8, ast, visitors, parentFrame);
      return;
    case 41:
      walkBoxTSImportEqualsDeclaration(pos + 8, ast, visitors, parentFrame);
      return;
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for Declaration`);
  }
}

function walkVariableDeclaration(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[91];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new VariableDeclaration(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructVariableDeclaration, pos, parentFrame);
  walkVecVariableDeclarator(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkVariableDeclarator(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[92];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new VariableDeclarator(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructVariableDeclarator, pos, parentFrame);
  visitSynth((node !== void 0 ? node : new VariableDeclarator(pos, ast, parentFrame)).id, visitors);
  walkOptionExpression(pos + 40, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkEmptyStatement(pos, ast, visitors, parentFrame) {
  const visit = visitors[1];
  if (visit !== null) visit(new EmptyStatement(pos, ast, parentFrame));
}

function walkExpressionStatement(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[51];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new ExpressionStatement(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructExpressionStatement, pos, parentFrame);
  walkExpression(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkIfStatement(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[58];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new IfStatement(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructIfStatement, pos, parentFrame);
  walkExpression(pos + 16, ast, visitors, frame);
  walkStatement(pos + 32, ast, visitors, frame);
  walkOptionStatement(pos + 48, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkDoWhileStatement(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[46];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new DoWhileStatement(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructDoWhileStatement, pos, parentFrame);
  walkStatement(pos + 16, ast, visitors, frame);
  walkExpression(pos + 32, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkWhileStatement(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[93];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new WhileStatement(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructWhileStatement, pos, parentFrame);
  walkExpression(pos + 16, ast, visitors, frame);
  walkStatement(pos + 32, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkForStatement(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[54];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new ForStatement(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructForStatement, pos, parentFrame);
  walkOptionForStatementInit(pos + 16, ast, visitors, frame);
  walkOptionExpression(pos + 32, ast, visitors, frame);
  walkOptionExpression(pos + 48, ast, visitors, frame);
  walkStatement(pos + 64, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkForStatementInit(pos, ast, visitors, parentFrame) {
  switch (ast.buffer[pos]) {
    case 0:
      walkBoxBooleanLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 1:
      walkBoxNullLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 2:
      walkBoxNumericLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 3:
      walkBoxBigIntLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 4:
      walkBoxRegExpLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 5:
      walkBoxStringLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 6:
      walkBoxTemplateLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 7:
      walkBoxIdentifierReference(pos + 8, ast, visitors, parentFrame);
      return;
    case 8:
      walkBoxSuper(pos + 8, ast, visitors, parentFrame);
      return;
    case 9:
      walkBoxArrayExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 10:
      walkBoxArrowFunctionExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 11:
      walkBoxAssignmentExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 12:
      walkBoxAwaitExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 13:
      walkBoxBinaryExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 14:
      walkBoxCallExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 15:
      walkBoxChainExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 16:
      walkBoxClass(pos + 8, ast, visitors, parentFrame);
      return;
    case 17:
      walkBoxConditionalExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 18:
      walkBoxFunction(pos + 8, ast, visitors, parentFrame);
      return;
    case 19:
      walkBoxImportExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 20:
      walkBoxLogicalExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 21:
      walkBoxNewExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 22:
      walkBoxObjectExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 23:
      walkBoxParenthesizedExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 24:
      walkBoxSequenceExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 25:
      walkBoxTaggedTemplateExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 26:
      walkBoxThisExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 27:
      walkBoxUnaryExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 28:
      walkBoxUpdateExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 29:
      walkBoxYieldExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 30:
      walkBoxPrivateInExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 31:
      walkBoxImportMeta(pos + 8, ast, visitors, parentFrame);
      return;
    case 32:
      walkBoxNewTarget(pos + 8, ast, visitors, parentFrame);
      return;
    case 33:
      walkBoxJSXElement(pos + 8, ast, visitors, parentFrame);
      return;
    case 34:
      walkBoxJSXFragment(pos + 8, ast, visitors, parentFrame);
      return;
    case 35:
      walkBoxTSAsExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 36:
      walkBoxTSSatisfiesExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 37:
      walkBoxTSTypeAssertion(pos + 8, ast, visitors, parentFrame);
      return;
    case 38:
      walkBoxTSNonNullExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 39:
      walkBoxTSInstantiationExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 40:
      walkBoxV8IntrinsicExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 48:
      walkBoxComputedMemberExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 49:
      walkBoxStaticMemberExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 50:
      walkBoxPrivateFieldExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 64:
      walkBoxVariableDeclaration(pos + 8, ast, visitors, parentFrame);
      return;
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ForStatementInit`);
  }
}

function walkForInStatement(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[52];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new ForInStatement(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructForInStatement, pos, parentFrame);
  walkForStatementLeft(pos + 16, ast, visitors, frame);
  walkExpression(pos + 32, ast, visitors, frame);
  walkStatement(pos + 48, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkForStatementLeft(pos, ast, visitors, parentFrame) {
  switch (ast.buffer[pos]) {
    case 0:
      walkBoxIdentifierReference(pos + 8, ast, visitors, parentFrame);
      return;
    case 1:
      walkBoxTSAsExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 2:
      walkBoxTSSatisfiesExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 3:
      walkBoxTSNonNullExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 4:
      walkBoxTSTypeAssertion(pos + 8, ast, visitors, parentFrame);
      return;
    case 8:
      walkBoxArrayAssignmentTarget(pos + 8, ast, visitors, parentFrame);
      return;
    case 9:
      walkBoxObjectAssignmentTarget(pos + 8, ast, visitors, parentFrame);
      return;
    case 16:
      walkBoxVariableDeclaration(pos + 8, ast, visitors, parentFrame);
      return;
    case 48:
      walkBoxComputedMemberExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 49:
      walkBoxStaticMemberExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 50:
      walkBoxPrivateFieldExpression(pos + 8, ast, visitors, parentFrame);
      return;
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ForStatementLeft`);
  }
}

function walkForOfStatement(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[53];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new ForOfStatement(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructForOfStatement, pos, parentFrame);
  walkForStatementLeft(pos + 16, ast, visitors, frame);
  walkExpression(pos + 32, ast, visitors, frame);
  walkStatement(pos + 48, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkContinueStatement(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[44];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new ContinueStatement(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructContinueStatement, pos, parentFrame);
  walkOptionLabelIdentifier(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkBreakStatement(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[36];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new BreakStatement(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructBreakStatement, pos, parentFrame);
  walkOptionLabelIdentifier(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkReturnStatement(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[78];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new ReturnStatement(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructReturnStatement, pos, parentFrame);
  walkOptionExpression(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkWithStatement(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[94];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new WithStatement(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructWithStatement, pos, parentFrame);
  walkExpression(pos + 16, ast, visitors, frame);
  walkStatement(pos + 32, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkSwitchStatement(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[83];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new SwitchStatement(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructSwitchStatement, pos, parentFrame);
  walkExpression(pos + 16, ast, visitors, frame);
  walkVecSwitchCase(pos + 32, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkSwitchCase(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[82];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new SwitchCase(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructSwitchCase, pos, parentFrame);
  walkOptionExpression(pos + 16, ast, visitors, frame);
  walkVecStatement(pos + 32, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkLabeledStatement(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[65];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new LabeledStatement(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructLabeledStatement, pos, parentFrame);
  walkLabelIdentifier(pos + 16, ast, visitors, frame);
  walkStatement(pos + 48, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkThrowStatement(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[86];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new ThrowStatement(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructThrowStatement, pos, parentFrame);
  walkExpression(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTryStatement(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[87];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TryStatement(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTryStatement, pos, parentFrame);
  walkBoxBlockStatement(pos + 16, ast, visitors, frame);
  walkOptionBoxCatchClause(pos + 24, ast, visitors, frame);
  walkOptionBoxBlockStatement(pos + 32, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkCatchClause(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[38];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new CatchClause(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructCatchClause, pos, parentFrame);
  walkOptionCatchParameter(pos + 16, ast, visitors, frame);
  walkBoxBlockStatement(pos + 56, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkCatchParameter(pos, ast, visitors, parentFrame) {
  visitSynth(constructCatchParameter(pos, ast, materializeFrame(parentFrame, ast)), visitors);
}

function walkDebuggerStatement(pos, ast, visitors, parentFrame) {
  const visit = visitors[0];
  if (visit !== null) visit(new DebuggerStatement(pos, ast, parentFrame));
}

function walkBindingPattern(pos, ast, visitors, parentFrame) {
  switch (ast.buffer[pos]) {
    case 0:
      walkBoxBindingIdentifier(pos + 8, ast, visitors, parentFrame);
      return;
    case 1:
      walkBoxObjectPattern(pos + 8, ast, visitors, parentFrame);
      return;
    case 2:
      walkBoxArrayPattern(pos + 8, ast, visitors, parentFrame);
      return;
    case 3:
      walkBoxAssignmentPattern(pos + 8, ast, visitors, parentFrame);
      return;
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for BindingPattern`);
  }
}

function walkAssignmentPattern(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[32];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new AssignmentPattern(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructAssignmentPattern, pos, parentFrame);
  walkBindingPattern(pos + 16, ast, visitors, frame);
  walkExpression(pos + 32, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkObjectPattern(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[72];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new ObjectPattern(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructObjectPattern, pos, parentFrame);
  walkVecBindingProperty(pos + 16, ast, visitors, frame);
  walkOptionBoxBindingRestElement(pos + 40, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkBindingProperty(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[75];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new BindingProperty(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructBindingProperty, pos, parentFrame);
  walkPropertyKey(pos + 16, ast, visitors, frame);
  walkBindingPattern(pos + 32, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkArrayPattern(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[29];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new ArrayPattern(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructArrayPattern, pos, parentFrame);
  walkVecOptionBindingPattern(pos + 16, ast, visitors, frame);
  walkOptionBoxBindingRestElement(pos + 40, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkBindingRestElement(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[77];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new BindingRestElement(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructBindingRestElement, pos, parentFrame);
  walkBindingPattern(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkFunction(pos, ast, visitors, parentFrame) {
  let nodeTypeId;
  switch (ast.buffer[pos + 88]) {
    case 0:
      nodeTypeId = 55;
      break;
    case 1:
      nodeTypeId = 56;
      break;
    case 2:
      nodeTypeId = 116;
      break;
    default:
      nodeTypeId = 117;
      break;
  }
  const enterExit = visitors[nodeTypeId];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new Function(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructFunction, pos, parentFrame);
  walkOptionBindingIdentifier(pos + 16, ast, visitors, frame);
  walkOptionBoxTSTypeParameterDeclaration(pos + 48, ast, visitors, frame);
  walkOptionBoxTSThisParameter(pos + 56, ast, visitors, frame);
  walkBoxFormalParameters(pos + 64, ast, visitors, frame);
  walkOptionBoxTSTypeAnnotation(pos + 72, ast, visitors, frame);
  walkOptionBoxFunctionBody(pos + 80, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkFormalParameters(pos, ast, visitors, parentFrame) {
  walkVecFormalParameter(pos + 16, ast, visitors, parentFrame);
  if (!(ast.buffer.int32[(pos >> 2) + 10] === 0 && ast.buffer.int32[(pos >> 2) + 11] === 0)) {
    const restPos = ast.buffer.int32[(pos + 40) >> 2];
    visitSynth(
      constructFormalParameterRest(restPos, ast, materializeFrame(parentFrame, ast)),
      visitors,
    );
  }
}

function walkFormalParameter(pos, ast, visitors, parentFrame) {
  visitSynth(constructFormalParameter(pos, ast, materializeFrame(parentFrame, ast)), visitors);
}

function walkFunctionBody(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[35];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new FunctionBody(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructFunctionBody, pos, parentFrame);
  walkVecDirective(pos + 16, ast, visitors, frame);
  walkVecStatement(pos + 40, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkArrowFunctionBody(pos, ast, visitors, parentFrame) {
  switch (ast.buffer[pos]) {
    case 0:
      walkBoxBooleanLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 1:
      walkBoxNullLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 2:
      walkBoxNumericLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 3:
      walkBoxBigIntLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 4:
      walkBoxRegExpLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 5:
      walkBoxStringLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 6:
      walkBoxTemplateLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 7:
      walkBoxIdentifierReference(pos + 8, ast, visitors, parentFrame);
      return;
    case 8:
      walkBoxSuper(pos + 8, ast, visitors, parentFrame);
      return;
    case 9:
      walkBoxArrayExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 10:
      walkBoxArrowFunctionExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 11:
      walkBoxAssignmentExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 12:
      walkBoxAwaitExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 13:
      walkBoxBinaryExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 14:
      walkBoxCallExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 15:
      walkBoxChainExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 16:
      walkBoxClass(pos + 8, ast, visitors, parentFrame);
      return;
    case 17:
      walkBoxConditionalExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 18:
      walkBoxFunction(pos + 8, ast, visitors, parentFrame);
      return;
    case 19:
      walkBoxImportExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 20:
      walkBoxLogicalExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 21:
      walkBoxNewExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 22:
      walkBoxObjectExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 23:
      walkBoxParenthesizedExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 24:
      walkBoxSequenceExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 25:
      walkBoxTaggedTemplateExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 26:
      walkBoxThisExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 27:
      walkBoxUnaryExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 28:
      walkBoxUpdateExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 29:
      walkBoxYieldExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 30:
      walkBoxPrivateInExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 31:
      walkBoxImportMeta(pos + 8, ast, visitors, parentFrame);
      return;
    case 32:
      walkBoxNewTarget(pos + 8, ast, visitors, parentFrame);
      return;
    case 33:
      walkBoxJSXElement(pos + 8, ast, visitors, parentFrame);
      return;
    case 34:
      walkBoxJSXFragment(pos + 8, ast, visitors, parentFrame);
      return;
    case 35:
      walkBoxTSAsExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 36:
      walkBoxTSSatisfiesExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 37:
      walkBoxTSTypeAssertion(pos + 8, ast, visitors, parentFrame);
      return;
    case 38:
      walkBoxTSNonNullExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 39:
      walkBoxTSInstantiationExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 40:
      walkBoxV8IntrinsicExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 48:
      walkBoxComputedMemberExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 49:
      walkBoxStaticMemberExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 50:
      walkBoxPrivateFieldExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 64:
      walkBoxFunctionBody(pos + 8, ast, visitors, parentFrame);
      return;
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ArrowFunctionBody`);
  }
}

function walkArrowFunctionExpression(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[30];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new ArrowFunctionExpression(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructArrowFunctionExpression, pos, parentFrame);
  walkOptionBoxTSTypeParameterDeclaration(pos + 16, ast, visitors, frame);
  walkBoxFormalParameters(pos + 24, ast, visitors, frame);
  walkOptionBoxTSTypeAnnotation(pos + 32, ast, visitors, frame);
  walkArrowFunctionBody(pos + 40, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkYieldExpression(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[95];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new YieldExpression(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructYieldExpression, pos, parentFrame);
  walkOptionExpression(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkClass(pos, ast, visitors, parentFrame) {
  let nodeTypeId;
  switch (ast.buffer[pos + 136]) {
    case 0:
      nodeTypeId = 41;
      break;
    default:
      nodeTypeId = 42;
      break;
  }
  const enterExit = visitors[nodeTypeId];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new Class(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructClass, pos, parentFrame);
  walkVecDecorator(pos + 16, ast, visitors, frame);
  walkOptionBindingIdentifier(pos + 40, ast, visitors, frame);
  walkOptionBoxTSTypeParameterDeclaration(pos + 72, ast, visitors, frame);
  walkOptionClassHeritage(pos + 80, ast, visitors, frame);
  walkVecTSClassImplements(pos + 104, ast, visitors, frame);
  walkBoxClassBody(pos + 128, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkClassHeritage(pos, ast, visitors, parentFrame) {
  walkExpression(pos, ast, visitors, parentFrame);
  walkOptionBoxTSTypeParameterInstantiation(pos + 16, ast, visitors, parentFrame);
}

function walkClassBody(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[40];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new ClassBody(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructClassBody, pos, parentFrame);
  walkVecClassElement(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkClassElement(pos, ast, visitors, parentFrame) {
  switch (ast.buffer[pos]) {
    case 0:
      walkBoxStaticBlock(pos + 8, ast, visitors, parentFrame);
      return;
    case 1:
      walkBoxMethodDefinition(pos + 8, ast, visitors, parentFrame);
      return;
    case 2:
      walkBoxPropertyDefinition(pos + 8, ast, visitors, parentFrame);
      return;
    case 3:
      walkBoxAccessorProperty(pos + 8, ast, visitors, parentFrame);
      return;
    case 4:
      walkBoxTSIndexSignature(pos + 8, ast, visitors, parentFrame);
      return;
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ClassElement`);
  }
}

function walkMethodDefinition(pos, ast, visitors, parentFrame) {
  let nodeTypeId;
  switch (ast.buffer[pos + 12]) {
    case 0:
      nodeTypeId = 69;
      break;
    default:
      nodeTypeId = 107;
      break;
  }
  const enterExit = visitors[nodeTypeId];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new MethodDefinition(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructMethodDefinition, pos, parentFrame);
  walkVecDecorator(pos + 16, ast, visitors, frame);
  walkPropertyKey(pos + 40, ast, visitors, frame);
  walkBoxFunction(pos + 56, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkPropertyDefinition(pos, ast, visitors, parentFrame) {
  let nodeTypeId;
  switch (ast.buffer[pos + 12]) {
    case 0:
      nodeTypeId = 76;
      break;
    default:
      nodeTypeId = 108;
      break;
  }
  const enterExit = visitors[nodeTypeId];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new PropertyDefinition(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructPropertyDefinition, pos, parentFrame);
  walkVecDecorator(pos + 16, ast, visitors, frame);
  walkPropertyKey(pos + 40, ast, visitors, frame);
  walkOptionBoxTSTypeAnnotation(pos + 56, ast, visitors, frame);
  walkOptionExpression(pos + 64, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkPrivateIdentifier(pos, ast, visitors, parentFrame) {
  const visit = visitors[3];
  if (visit !== null) visit(new PrivateIdentifier(pos, ast, parentFrame));
}

function walkStaticBlock(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[81];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new StaticBlock(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructStaticBlock, pos, parentFrame);
  walkVecStatement(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkAccessorProperty(pos, ast, visitors, parentFrame) {
  let nodeTypeId;
  switch (ast.buffer[pos + 12]) {
    case 0:
      nodeTypeId = 27;
      break;
    default:
      nodeTypeId = 106;
      break;
  }
  const enterExit = visitors[nodeTypeId];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new AccessorProperty(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructAccessorProperty, pos, parentFrame);
  walkVecDecorator(pos + 16, ast, visitors, frame);
  walkPropertyKey(pos + 40, ast, visitors, frame);
  walkOptionBoxTSTypeAnnotation(pos + 56, ast, visitors, frame);
  walkOptionExpression(pos + 64, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkImportExpression(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[62];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new ImportExpression(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructImportExpression, pos, parentFrame);
  walkExpression(pos + 16, ast, visitors, frame);
  walkOptionExpression(pos + 32, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkImportDeclaration(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[60];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new ImportDeclaration(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructImportDeclaration, pos, parentFrame);
  walkOptionVecImportDeclarationSpecifier(pos + 16, ast, visitors, frame);
  walkStringLiteral(pos + 40, ast, visitors, frame);
  if (!(ast.buffer.int32[(pos >> 2) + 22] === 0 && ast.buffer.int32[(pos >> 2) + 23] === 0)) {
    const withPos = ast.buffer.int32[(pos + 88) >> 2];
    walkVecImportAttribute(withPos + 16, ast, visitors, frame);
  }

  if (exit !== null) exit(node);
}

function walkImportDeclarationSpecifier(pos, ast, visitors, parentFrame) {
  switch (ast.buffer[pos]) {
    case 0:
      walkBoxImportSpecifier(pos + 8, ast, visitors, parentFrame);
      return;
    case 1:
      walkBoxImportDefaultSpecifier(pos + 8, ast, visitors, parentFrame);
      return;
    case 2:
      walkBoxImportNamespaceSpecifier(pos + 8, ast, visitors, parentFrame);
      return;
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ImportDeclarationSpecifier`);
  }
}

function walkImportSpecifier(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[64];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new ImportSpecifier(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructImportSpecifier, pos, parentFrame);
  walkModuleExportName(pos + 16, ast, visitors, frame);
  walkBindingIdentifier(pos + 72, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkImportDefaultSpecifier(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[61];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new ImportDefaultSpecifier(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructImportDefaultSpecifier, pos, parentFrame);
  walkBindingIdentifier(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkImportNamespaceSpecifier(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[63];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new ImportNamespaceSpecifier(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructImportNamespaceSpecifier, pos, parentFrame);
  walkBindingIdentifier(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkWithClause(pos, ast, visitors, parentFrame) {
  walkVecImportAttribute(pos + 16, ast, visitors, parentFrame);
}

function walkImportAttribute(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[59];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new ImportAttribute(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructImportAttribute, pos, parentFrame);
  walkImportAttributeKey(pos + 16, ast, visitors, frame);
  walkStringLiteral(pos + 72, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkImportAttributeKey(pos, ast, visitors, parentFrame) {
  switch (ast.buffer[pos]) {
    case 0:
      walkIdentifierName(pos + 8, ast, visitors, parentFrame);
      return;
    case 1:
      walkStringLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ImportAttributeKey`);
  }
}

function walkExportDeclaration(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[49];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new ExportDeclaration(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructExportDeclaration, pos, parentFrame);
  walkDeclaration(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkExportNamedDeclaration(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[49];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new ExportNamedDeclaration(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructExportNamedDeclaration, pos, parentFrame);
  walkVecExportSpecifier(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkExportFromDeclaration(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[49];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new ExportFromDeclaration(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructExportFromDeclaration, pos, parentFrame);
  walkVecExportSpecifier(pos + 16, ast, visitors, frame);
  walkStringLiteral(pos + 40, ast, visitors, frame);
  walkOptionBoxWithClause(pos + 88, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkExportDefaultDeclaration(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[48];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new ExportDefaultDeclaration(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructExportDefaultDeclaration, pos, parentFrame);
  walkExportDefaultDeclarationKind(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkExportAllDeclaration(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[47];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new ExportAllDeclaration(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructExportAllDeclaration, pos, parentFrame);
  walkOptionModuleExportName(pos + 16, ast, visitors, frame);
  walkStringLiteral(pos + 72, ast, visitors, frame);

  if (!(ast.buffer.int32[(pos >> 2) + 30] === 0 && ast.buffer.int32[(pos >> 2) + 31] === 0)) {
    const withPos = ast.buffer.int32[(pos + 120) >> 2];
    walkVecImportAttribute(withPos + 16, ast, visitors, frame);
  }

  if (exit !== null) exit(node);
}

function walkExportSpecifier(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[50];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new ExportSpecifier(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructExportSpecifier, pos, parentFrame);
  walkModuleExportName(pos + 16, ast, visitors, frame);
  walkModuleExportName(pos + 72, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkExportDefaultDeclarationKind(pos, ast, visitors, parentFrame) {
  switch (ast.buffer[pos]) {
    case 0:
      walkBoxBooleanLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 1:
      walkBoxNullLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 2:
      walkBoxNumericLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 3:
      walkBoxBigIntLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 4:
      walkBoxRegExpLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 5:
      walkBoxStringLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 6:
      walkBoxTemplateLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 7:
      walkBoxIdentifierReference(pos + 8, ast, visitors, parentFrame);
      return;
    case 8:
      walkBoxSuper(pos + 8, ast, visitors, parentFrame);
      return;
    case 9:
      walkBoxArrayExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 10:
      walkBoxArrowFunctionExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 11:
      walkBoxAssignmentExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 12:
      walkBoxAwaitExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 13:
      walkBoxBinaryExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 14:
      walkBoxCallExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 15:
      walkBoxChainExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 16:
      walkBoxClass(pos + 8, ast, visitors, parentFrame);
      return;
    case 17:
      walkBoxConditionalExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 18:
      walkBoxFunction(pos + 8, ast, visitors, parentFrame);
      return;
    case 19:
      walkBoxImportExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 20:
      walkBoxLogicalExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 21:
      walkBoxNewExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 22:
      walkBoxObjectExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 23:
      walkBoxParenthesizedExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 24:
      walkBoxSequenceExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 25:
      walkBoxTaggedTemplateExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 26:
      walkBoxThisExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 27:
      walkBoxUnaryExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 28:
      walkBoxUpdateExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 29:
      walkBoxYieldExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 30:
      walkBoxPrivateInExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 31:
      walkBoxImportMeta(pos + 8, ast, visitors, parentFrame);
      return;
    case 32:
      walkBoxNewTarget(pos + 8, ast, visitors, parentFrame);
      return;
    case 33:
      walkBoxJSXElement(pos + 8, ast, visitors, parentFrame);
      return;
    case 34:
      walkBoxJSXFragment(pos + 8, ast, visitors, parentFrame);
      return;
    case 35:
      walkBoxTSAsExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 36:
      walkBoxTSSatisfiesExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 37:
      walkBoxTSTypeAssertion(pos + 8, ast, visitors, parentFrame);
      return;
    case 38:
      walkBoxTSNonNullExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 39:
      walkBoxTSInstantiationExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 40:
      walkBoxV8IntrinsicExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 48:
      walkBoxComputedMemberExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 49:
      walkBoxStaticMemberExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 50:
      walkBoxPrivateFieldExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 64:
      walkBoxFunction(pos + 8, ast, visitors, parentFrame);
      return;
    case 65:
      walkBoxClass(pos + 8, ast, visitors, parentFrame);
      return;
    case 66:
      walkBoxTSInterfaceDeclaration(pos + 8, ast, visitors, parentFrame);
      return;
    default:
      throw new Error(
        `Unexpected discriminant ${ast.buffer[pos]} for ExportDefaultDeclarationKind`,
      );
  }
}

function walkModuleExportName(pos, ast, visitors, parentFrame) {
  switch (ast.buffer[pos]) {
    case 0:
      walkIdentifierName(pos + 8, ast, visitors, parentFrame);
      return;
    case 1:
      walkIdentifierReference(pos + 8, ast, visitors, parentFrame);
      return;
    case 2:
      walkStringLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ModuleExportName`);
  }
}

function walkV8IntrinsicExpression(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[90];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new V8IntrinsicExpression(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructV8IntrinsicExpression, pos, parentFrame);
  walkIdentifierName(pos + 16, ast, visitors, frame);
  walkVecArgument(pos + 48, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkBooleanLiteral(pos, ast, visitors, parentFrame) {
  const visit = visitors[2];
  if (visit !== null) visit(new BooleanLiteral(pos, ast, parentFrame));
}

function walkNullLiteral(pos, ast, visitors, parentFrame) {
  const visit = visitors[2];
  if (visit !== null) visit(new NullLiteral(pos, ast, parentFrame));
}

function walkNumericLiteral(pos, ast, visitors, parentFrame) {
  const visit = visitors[2];
  if (visit !== null) visit(new NumericLiteral(pos, ast, parentFrame));
}

function walkStringLiteral(pos, ast, visitors, parentFrame) {
  const visit = visitors[2];
  if (visit !== null) visit(new StringLiteral(pos, ast, parentFrame));
}

function walkBigIntLiteral(pos, ast, visitors, parentFrame) {
  const visit = visitors[2];
  if (visit !== null) visit(new BigIntLiteral(pos, ast, parentFrame));
}

function walkRegExpLiteral(pos, ast, visitors, parentFrame) {
  const visit = visitors[2];
  if (visit !== null) visit(new RegExpLiteral(pos, ast, parentFrame));
}

function walkJSXElement(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[98];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new JSXElement(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructJSXElement, pos, parentFrame);
  if (ast.buffer.int32[(pos >> 2) + 12] === 0 && ast.buffer.int32[(pos >> 2) + 13] === 0) {
    // Opening element's `selfClosing` is derived from the absence of a closing
    // element; materialize it (shallow) so visitors observe the correct value.
    const element = new JSXElement(pos, ast, parentFrame);
    element.openingElement;
  }
  walkBoxJSXOpeningElement(pos + 16, ast, visitors, frame);
  walkVecJSXChild(pos + 24, ast, visitors, frame);
  walkOptionBoxJSXClosingElement(pos + 48, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkJSXOpeningElement(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[103];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new JSXOpeningElement(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructJSXOpeningElement, pos, parentFrame);
  walkJSXElementName(pos + 16, ast, visitors, frame);
  walkOptionBoxTSTypeParameterInstantiation(pos + 32, ast, visitors, frame);
  walkVecJSXAttributeItem(pos + 40, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkJSXClosingElement(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[97];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new JSXClosingElement(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructJSXClosingElement, pos, parentFrame);
  walkJSXElementName(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkJSXFragment(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[100];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new JSXFragment(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructJSXFragment, pos, parentFrame);
  walkJSXOpeningFragment(pos + 16, ast, visitors, frame);
  walkVecJSXChild(pos + 32, ast, visitors, frame);
  walkJSXClosingFragment(pos + 56, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkJSXOpeningFragment(pos, ast, visitors, parentFrame) {
  const visit = visitors[10];
  if (visit !== null) visit(new JSXOpeningFragment(pos, ast, parentFrame));
}

function walkJSXClosingFragment(pos, ast, visitors, parentFrame) {
  const visit = visitors[7];
  if (visit !== null) visit(new JSXClosingFragment(pos, ast, parentFrame));
}

function walkJSXElementName(pos, ast, visitors, parentFrame) {
  switch (ast.buffer[pos]) {
    case 0:
      walkBoxJSXIdentifier(pos + 8, ast, visitors, parentFrame);
      return;

    case 1: {
      const visit = visitors[9];
      if (visit !== null)
        visit(constructJSXElementName(pos, ast, materializeFrame(parentFrame, ast)));
      return;
    }
    case 2:
      walkBoxJSXNamespacedName(pos + 8, ast, visitors, parentFrame);
      return;
    case 3:
      walkBoxJSXMemberExpression(pos + 8, ast, visitors, parentFrame);
      return;

    case 4: {
      const visit = visitors[9];
      if (visit !== null)
        visit(constructJSXElementName(pos, ast, materializeFrame(parentFrame, ast)));
      return;
    }

    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for JSXElementName`);
  }
}

function walkJSXNamespacedName(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[102];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new JSXNamespacedName(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructJSXNamespacedName, pos, parentFrame);
  walkJSXIdentifier(pos + 16, ast, visitors, frame);
  walkJSXIdentifier(pos + 48, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkJSXMemberExpression(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[101];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new JSXMemberExpression(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructJSXMemberExpression, pos, parentFrame);
  walkJSXMemberExpressionObject(pos + 16, ast, visitors, frame);
  walkJSXIdentifier(pos + 32, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkJSXMemberExpressionObject(pos, ast, visitors, parentFrame) {
  switch (ast.buffer[pos]) {
    case 0: {
      const visit = visitors[9];
      if (visit !== null)
        visit(constructJSXMemberExpressionObject(pos, ast, materializeFrame(parentFrame, ast)));
      return;
    }
    case 1:
      walkBoxJSXMemberExpression(pos + 8, ast, visitors, parentFrame);
      return;

    case 2: {
      const visit = visitors[9];
      if (visit !== null)
        visit(constructJSXMemberExpressionObject(pos, ast, materializeFrame(parentFrame, ast)));
      return;
    }

    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for JSXMemberExpressionObject`);
  }
}

function walkJSXExpressionContainer(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[99];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new JSXExpressionContainer(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructJSXExpressionContainer, pos, parentFrame);
  walkJSXExpression(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkJSXExpression(pos, ast, visitors, parentFrame) {
  switch (ast.buffer[pos]) {
    case 0:
      walkBoxBooleanLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 1:
      walkBoxNullLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 2:
      walkBoxNumericLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 3:
      walkBoxBigIntLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 4:
      walkBoxRegExpLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 5:
      walkBoxStringLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 6:
      walkBoxTemplateLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 7:
      walkBoxIdentifierReference(pos + 8, ast, visitors, parentFrame);
      return;
    case 8:
      walkBoxSuper(pos + 8, ast, visitors, parentFrame);
      return;
    case 9:
      walkBoxArrayExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 10:
      walkBoxArrowFunctionExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 11:
      walkBoxAssignmentExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 12:
      walkBoxAwaitExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 13:
      walkBoxBinaryExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 14:
      walkBoxCallExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 15:
      walkBoxChainExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 16:
      walkBoxClass(pos + 8, ast, visitors, parentFrame);
      return;
    case 17:
      walkBoxConditionalExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 18:
      walkBoxFunction(pos + 8, ast, visitors, parentFrame);
      return;
    case 19:
      walkBoxImportExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 20:
      walkBoxLogicalExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 21:
      walkBoxNewExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 22:
      walkBoxObjectExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 23:
      walkBoxParenthesizedExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 24:
      walkBoxSequenceExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 25:
      walkBoxTaggedTemplateExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 26:
      walkBoxThisExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 27:
      walkBoxUnaryExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 28:
      walkBoxUpdateExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 29:
      walkBoxYieldExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 30:
      walkBoxPrivateInExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 31:
      walkBoxImportMeta(pos + 8, ast, visitors, parentFrame);
      return;
    case 32:
      walkBoxNewTarget(pos + 8, ast, visitors, parentFrame);
      return;
    case 33:
      walkBoxJSXElement(pos + 8, ast, visitors, parentFrame);
      return;
    case 34:
      walkBoxJSXFragment(pos + 8, ast, visitors, parentFrame);
      return;
    case 35:
      walkBoxTSAsExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 36:
      walkBoxTSSatisfiesExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 37:
      walkBoxTSTypeAssertion(pos + 8, ast, visitors, parentFrame);
      return;
    case 38:
      walkBoxTSNonNullExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 39:
      walkBoxTSInstantiationExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 40:
      walkBoxV8IntrinsicExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 48:
      walkBoxComputedMemberExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 49:
      walkBoxStaticMemberExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 50:
      walkBoxPrivateFieldExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 64:
      walkBoxJSXEmptyExpression(pos + 8, ast, visitors, parentFrame);
      return;
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for JSXExpression`);
  }
}

function walkJSXEmptyExpression(pos, ast, visitors, parentFrame) {
  const visit = visitors[8];
  if (visit !== null) visit(new JSXEmptyExpression(pos, ast, parentFrame));
}

function walkJSXAttributeItem(pos, ast, visitors, parentFrame) {
  switch (ast.buffer[pos]) {
    case 0:
      walkBoxJSXAttribute(pos + 8, ast, visitors, parentFrame);
      return;
    case 1:
      walkBoxJSXSpreadAttribute(pos + 8, ast, visitors, parentFrame);
      return;
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for JSXAttributeItem`);
  }
}

function walkJSXAttribute(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[96];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new JSXAttribute(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructJSXAttribute, pos, parentFrame);
  walkJSXAttributeName(pos + 16, ast, visitors, frame);
  walkOptionJSXAttributeValue(pos + 32, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkJSXSpreadAttribute(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[104];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new JSXSpreadAttribute(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructJSXSpreadAttribute, pos, parentFrame);
  walkExpression(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkJSXAttributeName(pos, ast, visitors, parentFrame) {
  switch (ast.buffer[pos]) {
    case 0:
      walkBoxJSXIdentifier(pos + 8, ast, visitors, parentFrame);
      return;
    case 1:
      walkBoxJSXNamespacedName(pos + 8, ast, visitors, parentFrame);
      return;
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for JSXAttributeName`);
  }
}

function walkJSXAttributeValue(pos, ast, visitors, parentFrame) {
  switch (ast.buffer[pos]) {
    case 0:
      walkBoxStringLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 1:
      walkBoxJSXExpressionContainer(pos + 8, ast, visitors, parentFrame);
      return;
    case 2:
      walkBoxJSXElement(pos + 8, ast, visitors, parentFrame);
      return;
    case 3:
      walkBoxJSXFragment(pos + 8, ast, visitors, parentFrame);
      return;
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for JSXAttributeValue`);
  }
}

function walkJSXIdentifier(pos, ast, visitors, parentFrame) {
  const visit = visitors[9];
  if (visit !== null) visit(new JSXIdentifier(pos, ast, parentFrame));
}

function walkJSXChild(pos, ast, visitors, parentFrame) {
  switch (ast.buffer[pos]) {
    case 0:
      walkBoxJSXText(pos + 8, ast, visitors, parentFrame);
      return;
    case 1:
      walkBoxJSXElement(pos + 8, ast, visitors, parentFrame);
      return;
    case 2:
      walkBoxJSXFragment(pos + 8, ast, visitors, parentFrame);
      return;
    case 3:
      walkBoxJSXExpressionContainer(pos + 8, ast, visitors, parentFrame);
      return;
    case 4:
      walkBoxJSXSpreadChild(pos + 8, ast, visitors, parentFrame);
      return;
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for JSXChild`);
  }
}

function walkJSXSpreadChild(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[105];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new JSXSpreadChild(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructJSXSpreadChild, pos, parentFrame);
  walkExpression(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkJSXText(pos, ast, visitors, parentFrame) {
  const visit = visitors[11];
  if (visit !== null) visit(new JSXText(pos, ast, parentFrame));
}

function walkTSThisParameter(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[57];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSThisParameter(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSThisParameter, pos, parentFrame);
  walkOptionBoxTSTypeAnnotation(pos + 24, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSEnumDeclaration(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[119];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSEnumDeclaration(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSEnumDeclaration, pos, parentFrame);
  walkBindingIdentifier(pos + 16, ast, visitors, frame);
  walkTSEnumBody(pos + 48, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSEnumBody(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[118];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSEnumBody(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSEnumBody, pos, parentFrame);
  walkVecTSEnumMember(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSEnumMember(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[120];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSEnumMember(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSEnumMember, pos, parentFrame);
  walkTSEnumMemberName(pos + 16, ast, visitors, frame);
  walkOptionExpression(pos + 32, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSEnumMemberName(pos, ast, visitors, parentFrame) {
  switch (ast.buffer[pos]) {
    case 0:
      walkBoxIdentifierName(pos + 8, ast, visitors, parentFrame);
      return;
    case 1:
      walkBoxStringLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 2:
      walkBoxStringLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 3:
      walkBoxTemplateLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSEnumMemberName`);
  }
}

function walkTSTypeAnnotation(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[154];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSTypeAnnotation(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSTypeAnnotation, pos, parentFrame);
  walkTSType(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSLiteralType(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[136];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSLiteralType(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSLiteralType, pos, parentFrame);
  walkTSLiteral(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSLiteral(pos, ast, visitors, parentFrame) {
  switch (ast.buffer[pos]) {
    case 0:
      walkBoxBooleanLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 1:
      walkBoxNumericLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 2:
      walkBoxBigIntLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 3:
      walkBoxStringLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 4:
      walkBoxTemplateLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 5:
      walkBoxUnaryExpression(pos + 8, ast, visitors, parentFrame);
      return;
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSLiteral`);
  }
}

function walkTSType(pos, ast, visitors, parentFrame) {
  switch (ast.buffer[pos]) {
    case 0:
      walkBoxTSAnyKeyword(pos + 8, ast, visitors, parentFrame);
      return;
    case 1:
      walkBoxTSBigIntKeyword(pos + 8, ast, visitors, parentFrame);
      return;
    case 2:
      walkBoxTSBooleanKeyword(pos + 8, ast, visitors, parentFrame);
      return;
    case 3:
      walkBoxTSIntrinsicKeyword(pos + 8, ast, visitors, parentFrame);
      return;
    case 4:
      walkBoxTSNeverKeyword(pos + 8, ast, visitors, parentFrame);
      return;
    case 5:
      walkBoxTSNullKeyword(pos + 8, ast, visitors, parentFrame);
      return;
    case 6:
      walkBoxTSNumberKeyword(pos + 8, ast, visitors, parentFrame);
      return;
    case 7:
      walkBoxTSObjectKeyword(pos + 8, ast, visitors, parentFrame);
      return;
    case 8:
      walkBoxTSStringKeyword(pos + 8, ast, visitors, parentFrame);
      return;
    case 9:
      walkBoxTSSymbolKeyword(pos + 8, ast, visitors, parentFrame);
      return;
    case 10:
      walkBoxTSThisType(pos + 8, ast, visitors, parentFrame);
      return;
    case 11:
      walkBoxTSUndefinedKeyword(pos + 8, ast, visitors, parentFrame);
      return;
    case 12:
      walkBoxTSUnknownKeyword(pos + 8, ast, visitors, parentFrame);
      return;
    case 13:
      walkBoxTSVoidKeyword(pos + 8, ast, visitors, parentFrame);
      return;
    case 14:
      walkBoxTSArrayType(pos + 8, ast, visitors, parentFrame);
      return;
    case 15:
      walkBoxTSConditionalType(pos + 8, ast, visitors, parentFrame);
      return;
    case 16:
      walkBoxTSConstructorType(pos + 8, ast, visitors, parentFrame);
      return;
    case 17:
      walkBoxTSFunctionType(pos + 8, ast, visitors, parentFrame);
      return;
    case 18:
      walkBoxTSImportType(pos + 8, ast, visitors, parentFrame);
      return;
    case 19:
      walkBoxTSIndexedAccessType(pos + 8, ast, visitors, parentFrame);
      return;
    case 20:
      walkBoxTSInferType(pos + 8, ast, visitors, parentFrame);
      return;
    case 21:
      walkBoxTSIntersectionType(pos + 8, ast, visitors, parentFrame);
      return;
    case 22:
      walkBoxTSLiteralType(pos + 8, ast, visitors, parentFrame);
      return;
    case 23:
      walkBoxTSMappedType(pos + 8, ast, visitors, parentFrame);
      return;
    case 24:
      walkBoxTSNamedTupleMember(pos + 8, ast, visitors, parentFrame);
      return;
    case 26:
      walkBoxTSTemplateLiteralType(pos + 8, ast, visitors, parentFrame);
      return;
    case 27:
      walkBoxTSTupleType(pos + 8, ast, visitors, parentFrame);
      return;
    case 28:
      walkBoxTSTypeLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 29:
      walkBoxTSTypeOperator(pos + 8, ast, visitors, parentFrame);
      return;
    case 30:
      walkBoxTSTypePredicate(pos + 8, ast, visitors, parentFrame);
      return;
    case 31:
      walkBoxTSTypeQuery(pos + 8, ast, visitors, parentFrame);
      return;
    case 32:
      walkBoxTSTypeReference(pos + 8, ast, visitors, parentFrame);
      return;
    case 33:
      walkBoxTSUnionType(pos + 8, ast, visitors, parentFrame);
      return;
    case 34:
      walkBoxTSParenthesizedType(pos + 8, ast, visitors, parentFrame);
      return;
    case 35:
      walkBoxJSDocNullableType(pos + 8, ast, visitors, parentFrame);
      return;
    case 36:
      walkBoxJSDocNonNullableType(pos + 8, ast, visitors, parentFrame);
      return;
    case 37:
      walkBoxJSDocUnknownType(pos + 8, ast, visitors, parentFrame);
      return;
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSType`);
  }
}

function walkTSConditionalType(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[113];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSConditionalType(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSConditionalType, pos, parentFrame);
  walkTSType(pos + 16, ast, visitors, frame);
  walkTSType(pos + 32, ast, visitors, frame);
  walkTSType(pos + 48, ast, visitors, frame);
  walkTSType(pos + 64, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSUnionType(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[164];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSUnionType(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSUnionType, pos, parentFrame);
  walkVecTSType(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSIntersectionType(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[133];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSIntersectionType(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSIntersectionType, pos, parentFrame);
  walkVecTSType(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSParenthesizedType(pos, ast, visitors, parentFrame) {
  walkTSType(pos + 16, ast, visitors, parentFrame);
}

function walkTSTypeOperator(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[157];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSTypeOperator(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSTypeOperator, pos, parentFrame);
  walkTSType(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSArrayType(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[109];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSArrayType(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSArrayType, pos, parentFrame);
  walkTSType(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSIndexedAccessType(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[127];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSIndexedAccessType(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSIndexedAccessType, pos, parentFrame);
  walkTSType(pos + 16, ast, visitors, frame);
  walkTSType(pos + 32, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSTupleType(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[152];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSTupleType(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSTupleType, pos, parentFrame);
  walkVecTSTupleElement(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSNamedTupleMember(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[141];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSNamedTupleMember(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSNamedTupleMember, pos, parentFrame);
  walkIdentifierName(pos + 16, ast, visitors, frame);
  walkTSTupleElement(pos + 48, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSOptionalType(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[144];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSOptionalType(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSOptionalType, pos, parentFrame);
  walkTSType(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSRestType(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[149];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSRestType(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSRestType, pos, parentFrame);
  walkTSType(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSTupleElement(pos, ast, visitors, parentFrame) {
  switch (ast.buffer[pos]) {
    case 0:
      walkBoxTSAnyKeyword(pos + 8, ast, visitors, parentFrame);
      return;
    case 1:
      walkBoxTSBigIntKeyword(pos + 8, ast, visitors, parentFrame);
      return;
    case 2:
      walkBoxTSBooleanKeyword(pos + 8, ast, visitors, parentFrame);
      return;
    case 3:
      walkBoxTSIntrinsicKeyword(pos + 8, ast, visitors, parentFrame);
      return;
    case 4:
      walkBoxTSNeverKeyword(pos + 8, ast, visitors, parentFrame);
      return;
    case 5:
      walkBoxTSNullKeyword(pos + 8, ast, visitors, parentFrame);
      return;
    case 6:
      walkBoxTSNumberKeyword(pos + 8, ast, visitors, parentFrame);
      return;
    case 7:
      walkBoxTSObjectKeyword(pos + 8, ast, visitors, parentFrame);
      return;
    case 8:
      walkBoxTSStringKeyword(pos + 8, ast, visitors, parentFrame);
      return;
    case 9:
      walkBoxTSSymbolKeyword(pos + 8, ast, visitors, parentFrame);
      return;
    case 10:
      walkBoxTSThisType(pos + 8, ast, visitors, parentFrame);
      return;
    case 11:
      walkBoxTSUndefinedKeyword(pos + 8, ast, visitors, parentFrame);
      return;
    case 12:
      walkBoxTSUnknownKeyword(pos + 8, ast, visitors, parentFrame);
      return;
    case 13:
      walkBoxTSVoidKeyword(pos + 8, ast, visitors, parentFrame);
      return;
    case 14:
      walkBoxTSArrayType(pos + 8, ast, visitors, parentFrame);
      return;
    case 15:
      walkBoxTSConditionalType(pos + 8, ast, visitors, parentFrame);
      return;
    case 16:
      walkBoxTSConstructorType(pos + 8, ast, visitors, parentFrame);
      return;
    case 17:
      walkBoxTSFunctionType(pos + 8, ast, visitors, parentFrame);
      return;
    case 18:
      walkBoxTSImportType(pos + 8, ast, visitors, parentFrame);
      return;
    case 19:
      walkBoxTSIndexedAccessType(pos + 8, ast, visitors, parentFrame);
      return;
    case 20:
      walkBoxTSInferType(pos + 8, ast, visitors, parentFrame);
      return;
    case 21:
      walkBoxTSIntersectionType(pos + 8, ast, visitors, parentFrame);
      return;
    case 22:
      walkBoxTSLiteralType(pos + 8, ast, visitors, parentFrame);
      return;
    case 23:
      walkBoxTSMappedType(pos + 8, ast, visitors, parentFrame);
      return;
    case 24:
      walkBoxTSNamedTupleMember(pos + 8, ast, visitors, parentFrame);
      return;
    case 26:
      walkBoxTSTemplateLiteralType(pos + 8, ast, visitors, parentFrame);
      return;
    case 27:
      walkBoxTSTupleType(pos + 8, ast, visitors, parentFrame);
      return;
    case 28:
      walkBoxTSTypeLiteral(pos + 8, ast, visitors, parentFrame);
      return;
    case 29:
      walkBoxTSTypeOperator(pos + 8, ast, visitors, parentFrame);
      return;
    case 30:
      walkBoxTSTypePredicate(pos + 8, ast, visitors, parentFrame);
      return;
    case 31:
      walkBoxTSTypeQuery(pos + 8, ast, visitors, parentFrame);
      return;
    case 32:
      walkBoxTSTypeReference(pos + 8, ast, visitors, parentFrame);
      return;
    case 33:
      walkBoxTSUnionType(pos + 8, ast, visitors, parentFrame);
      return;
    case 34:
      walkBoxTSParenthesizedType(pos + 8, ast, visitors, parentFrame);
      return;
    case 35:
      walkBoxJSDocNullableType(pos + 8, ast, visitors, parentFrame);
      return;
    case 36:
      walkBoxJSDocNonNullableType(pos + 8, ast, visitors, parentFrame);
      return;
    case 37:
      walkBoxJSDocUnknownType(pos + 8, ast, visitors, parentFrame);
      return;
    case 64:
      walkBoxTSOptionalType(pos + 8, ast, visitors, parentFrame);
      return;
    case 65:
      walkBoxTSRestType(pos + 8, ast, visitors, parentFrame);
      return;
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSTupleElement`);
  }
}

function walkTSAnyKeyword(pos, ast, visitors, parentFrame) {
  const visit = visitors[12];
  if (visit !== null) visit(new TSAnyKeyword(pos, ast, parentFrame));
}

function walkTSStringKeyword(pos, ast, visitors, parentFrame) {
  const visit = visitors[21];
  if (visit !== null) visit(new TSStringKeyword(pos, ast, parentFrame));
}

function walkTSBooleanKeyword(pos, ast, visitors, parentFrame) {
  const visit = visitors[14];
  if (visit !== null) visit(new TSBooleanKeyword(pos, ast, parentFrame));
}

function walkTSNumberKeyword(pos, ast, visitors, parentFrame) {
  const visit = visitors[19];
  if (visit !== null) visit(new TSNumberKeyword(pos, ast, parentFrame));
}

function walkTSNeverKeyword(pos, ast, visitors, parentFrame) {
  const visit = visitors[17];
  if (visit !== null) visit(new TSNeverKeyword(pos, ast, parentFrame));
}

function walkTSIntrinsicKeyword(pos, ast, visitors, parentFrame) {
  const visit = visitors[15];
  if (visit !== null) visit(new TSIntrinsicKeyword(pos, ast, parentFrame));
}

function walkTSUnknownKeyword(pos, ast, visitors, parentFrame) {
  const visit = visitors[25];
  if (visit !== null) visit(new TSUnknownKeyword(pos, ast, parentFrame));
}

function walkTSNullKeyword(pos, ast, visitors, parentFrame) {
  const visit = visitors[18];
  if (visit !== null) visit(new TSNullKeyword(pos, ast, parentFrame));
}

function walkTSUndefinedKeyword(pos, ast, visitors, parentFrame) {
  const visit = visitors[24];
  if (visit !== null) visit(new TSUndefinedKeyword(pos, ast, parentFrame));
}

function walkTSVoidKeyword(pos, ast, visitors, parentFrame) {
  const visit = visitors[26];
  if (visit !== null) visit(new TSVoidKeyword(pos, ast, parentFrame));
}

function walkTSSymbolKeyword(pos, ast, visitors, parentFrame) {
  const visit = visitors[22];
  if (visit !== null) visit(new TSSymbolKeyword(pos, ast, parentFrame));
}

function walkTSThisType(pos, ast, visitors, parentFrame) {
  const visit = visitors[23];
  if (visit !== null) visit(new TSThisType(pos, ast, parentFrame));
}

function walkTSObjectKeyword(pos, ast, visitors, parentFrame) {
  const visit = visitors[20];
  if (visit !== null) visit(new TSObjectKeyword(pos, ast, parentFrame));
}

function walkTSBigIntKeyword(pos, ast, visitors, parentFrame) {
  const visit = visitors[13];
  if (visit !== null) visit(new TSBigIntKeyword(pos, ast, parentFrame));
}

function walkTSTypeReference(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[163];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSTypeReference(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSTypeReference, pos, parentFrame);
  walkTSTypeName(pos + 16, ast, visitors, frame);
  walkOptionBoxTSTypeParameterInstantiation(pos + 32, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSTypeName(pos, ast, visitors, parentFrame) {
  switch (ast.buffer[pos]) {
    case 0:
      walkBoxIdentifierReference(pos + 8, ast, visitors, parentFrame);
      return;
    case 1:
      walkBoxTSQualifiedName(pos + 8, ast, visitors, parentFrame);
      return;
    case 2:
      walkBoxThisExpression(pos + 8, ast, visitors, parentFrame);
      return;
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSTypeName`);
  }
}

function walkTSQualifiedName(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[148];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSQualifiedName(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSQualifiedName, pos, parentFrame);
  walkTSTypeName(pos + 16, ast, visitors, frame);
  walkIdentifierName(pos + 32, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSTypeParameterInstantiation(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[160];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSTypeParameterInstantiation(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSTypeParameterInstantiation, pos, parentFrame);
  walkVecTSType(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSTypeParameter(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[158];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSTypeParameter(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSTypeParameter, pos, parentFrame);
  walkBindingIdentifier(pos + 16, ast, visitors, frame);
  walkOptionTSType(pos + 48, ast, visitors, frame);
  walkOptionTSType(pos + 64, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSTypeParameterDeclaration(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[159];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSTypeParameterDeclaration(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSTypeParameterDeclaration, pos, parentFrame);
  walkVecTSTypeParameter(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSTypeAliasDeclaration(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[153];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSTypeAliasDeclaration(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSTypeAliasDeclaration, pos, parentFrame);
  walkBindingIdentifier(pos + 16, ast, visitors, frame);
  walkOptionBoxTSTypeParameterDeclaration(pos + 48, ast, visitors, frame);
  walkTSType(pos + 56, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSClassImplements(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[112];
  const node = constructTSClassImplements(pos, ast, materializeFrame(parentFrame, ast));
  let enter = null,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    if (enter !== null) enter(node);
  }
  visitSynth(node.expression, visitors);
  walkOptionBoxTSTypeParameterInstantiation(
    pos + 32,
    ast,
    visitors,
    new Frame(constructTSClassImplements, pos, parentFrame),
  );
  if (exit !== null) exit(node);
}

function walkTSInterfaceDeclaration(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[131];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSInterfaceDeclaration(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSInterfaceDeclaration, pos, parentFrame);
  walkBindingIdentifier(pos + 16, ast, visitors, frame);
  walkOptionBoxTSTypeParameterDeclaration(pos + 48, ast, visitors, frame);
  walkVecTSInterfaceHeritage(pos + 56, ast, visitors, frame);
  walkBoxTSInterfaceBody(pos + 80, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSInterfaceBody(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[130];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSInterfaceBody(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSInterfaceBody, pos, parentFrame);
  walkVecTSSignature(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSPropertySignature(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[147];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSPropertySignature(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSPropertySignature, pos, parentFrame);
  walkPropertyKey(pos + 16, ast, visitors, frame);
  walkOptionBoxTSTypeAnnotation(pos + 32, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSSignature(pos, ast, visitors, parentFrame) {
  switch (ast.buffer[pos]) {
    case 0:
      walkBoxTSIndexSignature(pos + 8, ast, visitors, parentFrame);
      return;
    case 1:
      walkBoxTSPropertySignature(pos + 8, ast, visitors, parentFrame);
      return;
    case 2:
      walkBoxTSCallSignatureDeclaration(pos + 8, ast, visitors, parentFrame);
      return;
    case 3:
      walkBoxTSConstructSignatureDeclaration(pos + 8, ast, visitors, parentFrame);
      return;
    case 4:
      walkBoxTSMethodSignature(pos + 8, ast, visitors, parentFrame);
      return;
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSSignature`);
  }
}

function walkTSIndexSignature(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[126];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSIndexSignature(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSIndexSignature, pos, parentFrame);
  walkTSIndexSignatureName(pos + 16, ast, visitors, frame);
  walkBoxTSTypeAnnotation(pos + 56, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSCallSignatureDeclaration(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[111];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSCallSignatureDeclaration(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSCallSignatureDeclaration, pos, parentFrame);
  walkOptionBoxTSTypeParameterDeclaration(pos + 16, ast, visitors, frame);
  walkOptionBoxTSThisParameter(pos + 24, ast, visitors, frame);
  walkBoxFormalParameters(pos + 32, ast, visitors, frame);
  walkOptionBoxTSTypeAnnotation(pos + 40, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSMethodSignature(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[138];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSMethodSignature(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSMethodSignature, pos, parentFrame);
  walkPropertyKey(pos + 16, ast, visitors, frame);
  walkOptionBoxTSTypeParameterDeclaration(pos + 32, ast, visitors, frame);
  walkOptionBoxTSThisParameter(pos + 40, ast, visitors, frame);
  walkBoxFormalParameters(pos + 48, ast, visitors, frame);
  walkOptionBoxTSTypeAnnotation(pos + 56, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSConstructSignatureDeclaration(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[114];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSConstructSignatureDeclaration(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSConstructSignatureDeclaration, pos, parentFrame);
  walkOptionBoxTSTypeParameterDeclaration(pos + 16, ast, visitors, frame);
  walkBoxFormalParameters(pos + 24, ast, visitors, frame);
  walkOptionBoxTSTypeAnnotation(pos + 32, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSIndexSignatureName(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[57];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSIndexSignatureName(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSIndexSignatureName, pos, parentFrame);
  walkBoxTSTypeAnnotation(pos + 32, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSInterfaceHeritage(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[132];
  const node = constructTSInterfaceHeritage(pos, ast, materializeFrame(parentFrame, ast));
  let enter = null,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    if (enter !== null) enter(node);
  }
  visitSynth(node.expression, visitors);
  walkOptionBoxTSTypeParameterInstantiation(
    pos + 32,
    ast,
    visitors,
    new Frame(constructTSInterfaceHeritage, pos, parentFrame),
  );
  if (exit !== null) exit(node);
}

function walkTSTypePredicate(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[161];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSTypePredicate(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSTypePredicate, pos, parentFrame);
  walkTSTypePredicateName(pos + 16, ast, visitors, frame);
  walkOptionBoxTSTypeAnnotation(pos + 32, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSTypePredicateName(pos, ast, visitors, parentFrame) {
  switch (ast.buffer[pos]) {
    case 0:
      walkBoxIdentifierName(pos + 8, ast, visitors, parentFrame);
      return;
    case 1:
      walkBoxTSThisType(pos + 8, ast, visitors, parentFrame);
      return;
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSTypePredicateName`);
  }
}

function walkTSExternalModuleDeclaration(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[140];
  const node = constructTSExternalModuleDeclaration(pos, ast, materializeFrame(parentFrame, ast));
  let enter = null,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    if (enter !== null) enter(node);
  }
  visitSynth(node.id, visitors);
  if (node.body != null) visitSynth(node.body, visitors);
  if (exit !== null) exit(node);
}

function walkTSNamespaceDeclaration(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[140];
  const node = constructTSNamespaceDeclaration(pos, ast, materializeFrame(parentFrame, ast));
  let enter = null,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    if (enter !== null) enter(node);
  }
  visitSynth(node.id, visitors);
  visitSynth(node.body, visitors);
  if (exit !== null) exit(node);
}

function walkTSNamespaceDeclarationBody(pos, ast, visitors, parentFrame) {
  switch (ast.buffer[pos]) {
    case 0:
      walkBoxTSNamespaceDeclaration(pos + 8, ast, visitors, parentFrame);
      return;
    case 1:
      walkBoxTSModuleBlock(pos + 8, ast, visitors, parentFrame);
      return;
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSNamespaceDeclarationBody`);
  }
}

function walkTSGlobalDeclaration(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[140];
  const node = constructTSGlobalDeclaration(pos, ast, materializeFrame(parentFrame, ast));
  let enter = null,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    if (enter !== null) enter(node);
  }
  visitSynth(node.id, visitors);
  visitSynth(node.body, visitors);
  if (exit !== null) exit(node);
}

function walkTSModuleBlock(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[139];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSModuleBlock(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSModuleBlock, pos, parentFrame);
  walkVecDirective(pos + 16, ast, visitors, frame);
  walkVecStatement(pos + 40, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSTypeLiteral(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[156];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSTypeLiteral(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSTypeLiteral, pos, parentFrame);
  walkVecTSSignature(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSInferType(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[128];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSInferType(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSInferType, pos, parentFrame);
  walkBoxTSTypeParameter(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSTypeQuery(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[162];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSTypeQuery(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSTypeQuery, pos, parentFrame);
  walkTSTypeQueryExprName(pos + 16, ast, visitors, frame);
  walkOptionBoxTSTypeParameterInstantiation(pos + 32, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSTypeQueryExprName(pos, ast, visitors, parentFrame) {
  switch (ast.buffer[pos]) {
    case 0:
      walkBoxIdentifierReference(pos + 8, ast, visitors, parentFrame);
      return;
    case 1:
      walkBoxTSQualifiedName(pos + 8, ast, visitors, parentFrame);
      return;
    case 2:
      walkBoxThisExpression(pos + 8, ast, visitors, parentFrame);
      return;
    case 3:
      walkBoxTSImportType(pos + 8, ast, visitors, parentFrame);
      return;
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSTypeQueryExprName`);
  }
}

function walkTSImportType(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[125];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSImportType(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSImportType, pos, parentFrame);
  walkStringLiteral(pos + 16, ast, visitors, frame);
  walkOptionBoxObjectExpression(pos + 64, ast, visitors, frame);
  walkOptionTSImportTypeQualifier(pos + 72, ast, visitors, frame);
  walkOptionBoxTSTypeParameterInstantiation(pos + 88, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSImportTypeQualifier(pos, ast, visitors, parentFrame) {
  switch (ast.buffer[pos]) {
    case 0:
      walkBoxIdentifierName(pos + 8, ast, visitors, parentFrame);
      return;
    case 1:
      walkBoxTSImportTypeQualifiedName(pos + 8, ast, visitors, parentFrame);
      return;
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSImportTypeQualifier`);
  }
}

function walkTSImportTypeQualifiedName(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[148];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSImportTypeQualifiedName(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSImportTypeQualifiedName, pos, parentFrame);
  walkTSImportTypeQualifier(pos + 16, ast, visitors, frame);
  walkIdentifierName(pos + 32, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSFunctionType(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[123];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSFunctionType(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSFunctionType, pos, parentFrame);
  walkOptionBoxTSTypeParameterDeclaration(pos + 16, ast, visitors, frame);
  walkOptionBoxTSThisParameter(pos + 24, ast, visitors, frame);
  walkBoxFormalParameters(pos + 32, ast, visitors, frame);
  walkBoxTSTypeAnnotation(pos + 40, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSConstructorType(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[115];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSConstructorType(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSConstructorType, pos, parentFrame);
  walkOptionBoxTSTypeParameterDeclaration(pos + 16, ast, visitors, frame);
  walkBoxFormalParameters(pos + 24, ast, visitors, frame);
  walkBoxTSTypeAnnotation(pos + 32, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSMappedType(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[137];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSMappedType(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSMappedType, pos, parentFrame);
  walkBindingIdentifier(pos + 16, ast, visitors, frame);
  walkTSType(pos + 48, ast, visitors, frame);
  walkOptionTSType(pos + 64, ast, visitors, frame);
  walkOptionTSType(pos + 80, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSTemplateLiteralType(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[151];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSTemplateLiteralType(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSTemplateLiteralType, pos, parentFrame);
  walkVecTemplateElement(pos + 16, ast, visitors, frame);
  walkVecTSType(pos + 40, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSAsExpression(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[110];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSAsExpression(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSAsExpression, pos, parentFrame);
  walkExpression(pos + 16, ast, visitors, frame);
  walkTSType(pos + 32, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSSatisfiesExpression(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[150];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSSatisfiesExpression(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSSatisfiesExpression, pos, parentFrame);
  walkExpression(pos + 16, ast, visitors, frame);
  walkTSType(pos + 32, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSTypeAssertion(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[155];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSTypeAssertion(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSTypeAssertion, pos, parentFrame);
  walkTSType(pos + 16, ast, visitors, frame);
  walkExpression(pos + 32, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSImportEqualsDeclaration(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[124];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSImportEqualsDeclaration(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSImportEqualsDeclaration, pos, parentFrame);
  walkBindingIdentifier(pos + 16, ast, visitors, frame);
  walkTSModuleReference(pos + 48, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSModuleReference(pos, ast, visitors, parentFrame) {
  switch (ast.buffer[pos]) {
    case 0:
      walkBoxTSExternalModuleReference(pos + 8, ast, visitors, parentFrame);
      return;
    case 1:
      walkBoxIdentifierReference(pos + 8, ast, visitors, parentFrame);
      return;
    case 2:
      walkBoxTSQualifiedName(pos + 8, ast, visitors, parentFrame);
      return;
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSModuleReference`);
  }
}

function walkTSExternalModuleReference(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[122];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSExternalModuleReference(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSExternalModuleReference, pos, parentFrame);
  walkStringLiteral(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSNonNullExpression(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[143];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSNonNullExpression(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSNonNullExpression, pos, parentFrame);
  walkExpression(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkDecorator(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[45];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new Decorator(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructDecorator, pos, parentFrame);
  walkExpression(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSExportAssignment(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[121];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSExportAssignment(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSExportAssignment, pos, parentFrame);
  walkExpression(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSNamespaceExportDeclaration(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[142];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSNamespaceExportDeclaration(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSNamespaceExportDeclaration, pos, parentFrame);
  walkIdentifierName(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkTSInstantiationExpression(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[129];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new TSInstantiationExpression(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructTSInstantiationExpression, pos, parentFrame);
  walkExpression(pos + 16, ast, visitors, frame);
  walkBoxTSTypeParameterInstantiation(pos + 32, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkJSDocNullableType(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[135];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new JSDocNullableType(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructJSDocNullableType, pos, parentFrame);
  walkTSType(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkJSDocNonNullableType(pos, ast, visitors, parentFrame) {
  const enterExit = visitors[134];
  let node,
    enter,
    exit = null;
  if (enterExit !== null) {
    ({ enter, exit } = enterExit);
    node = new JSDocNonNullableType(pos, ast, parentFrame);
    if (enter !== null) enter(node);
  }

  const frame = new Frame(constructJSDocNonNullableType, pos, parentFrame);
  walkTSType(pos + 16, ast, visitors, frame);

  if (exit !== null) exit(node);
}

function walkJSDocUnknownType(pos, ast, visitors, parentFrame) {
  const visit = visitors[16];
  if (visit !== null) visit(new JSDocUnknownType(pos, ast, parentFrame));
}

function walkOptionHashbang(pos, ast, visitors, parentFrame) {
  if (!(ast.buffer.int32[(pos >> 2) + 4] === 0 && ast.buffer.int32[(pos >> 2) + 5] === 0))
    walkHashbang(pos, ast, visitors, parentFrame);
}

function walkVecDirective(pos, ast, visitors, parentFrame) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  pos = int32[pos32];
  const endPos = pos + int32[pos32 + 2] * 80;
  while (pos < endPos) {
    walkDirective(pos, ast, visitors, parentFrame);
    pos += 80;
  }
}

function walkVecStatement(pos, ast, visitors, parentFrame) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  pos = int32[pos32];
  const endPos = pos + int32[pos32 + 2] * 16;
  while (pos < endPos) {
    walkStatement(pos, ast, visitors, parentFrame);
    pos += 16;
  }
}

function walkBoxBooleanLiteral(pos, ast, visitors, parentFrame) {
  return walkBooleanLiteral(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxNullLiteral(pos, ast, visitors, parentFrame) {
  return walkNullLiteral(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxNumericLiteral(pos, ast, visitors, parentFrame) {
  return walkNumericLiteral(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxBigIntLiteral(pos, ast, visitors, parentFrame) {
  return walkBigIntLiteral(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxRegExpLiteral(pos, ast, visitors, parentFrame) {
  return walkRegExpLiteral(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxStringLiteral(pos, ast, visitors, parentFrame) {
  return walkStringLiteral(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTemplateLiteral(pos, ast, visitors, parentFrame) {
  return walkTemplateLiteral(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxIdentifierReference(pos, ast, visitors, parentFrame) {
  return walkIdentifierReference(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxSuper(pos, ast, visitors, parentFrame) {
  return walkSuper(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxArrayExpression(pos, ast, visitors, parentFrame) {
  return walkArrayExpression(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxArrowFunctionExpression(pos, ast, visitors, parentFrame) {
  return walkArrowFunctionExpression(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxAssignmentExpression(pos, ast, visitors, parentFrame) {
  return walkAssignmentExpression(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxAwaitExpression(pos, ast, visitors, parentFrame) {
  return walkAwaitExpression(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxBinaryExpression(pos, ast, visitors, parentFrame) {
  return walkBinaryExpression(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxCallExpression(pos, ast, visitors, parentFrame) {
  return walkCallExpression(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxChainExpression(pos, ast, visitors, parentFrame) {
  return walkChainExpression(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxClass(pos, ast, visitors, parentFrame) {
  return walkClass(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxConditionalExpression(pos, ast, visitors, parentFrame) {
  return walkConditionalExpression(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxFunction(pos, ast, visitors, parentFrame) {
  return walkFunction(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxImportExpression(pos, ast, visitors, parentFrame) {
  return walkImportExpression(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxLogicalExpression(pos, ast, visitors, parentFrame) {
  return walkLogicalExpression(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxNewExpression(pos, ast, visitors, parentFrame) {
  return walkNewExpression(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxObjectExpression(pos, ast, visitors, parentFrame) {
  return walkObjectExpression(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxParenthesizedExpression(pos, ast, visitors, parentFrame) {
  return walkParenthesizedExpression(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxSequenceExpression(pos, ast, visitors, parentFrame) {
  return walkSequenceExpression(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTaggedTemplateExpression(pos, ast, visitors, parentFrame) {
  return walkTaggedTemplateExpression(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxThisExpression(pos, ast, visitors, parentFrame) {
  return walkThisExpression(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxUnaryExpression(pos, ast, visitors, parentFrame) {
  return walkUnaryExpression(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxUpdateExpression(pos, ast, visitors, parentFrame) {
  return walkUpdateExpression(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxYieldExpression(pos, ast, visitors, parentFrame) {
  return walkYieldExpression(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxPrivateInExpression(pos, ast, visitors, parentFrame) {
  return walkPrivateInExpression(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxImportMeta(pos, ast, visitors, parentFrame) {
  return walkImportMeta(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxNewTarget(pos, ast, visitors, parentFrame) {
  return walkNewTarget(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxJSXElement(pos, ast, visitors, parentFrame) {
  return walkJSXElement(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxJSXFragment(pos, ast, visitors, parentFrame) {
  return walkJSXFragment(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSAsExpression(pos, ast, visitors, parentFrame) {
  return walkTSAsExpression(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSSatisfiesExpression(pos, ast, visitors, parentFrame) {
  return walkTSSatisfiesExpression(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSTypeAssertion(pos, ast, visitors, parentFrame) {
  return walkTSTypeAssertion(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSNonNullExpression(pos, ast, visitors, parentFrame) {
  return walkTSNonNullExpression(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSInstantiationExpression(pos, ast, visitors, parentFrame) {
  return walkTSInstantiationExpression(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxV8IntrinsicExpression(pos, ast, visitors, parentFrame) {
  return walkV8IntrinsicExpression(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkVecArrayExpressionElement(pos, ast, visitors, parentFrame) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  pos = int32[pos32];
  const endPos = pos + int32[pos32 + 2] * 16;
  while (pos < endPos) {
    walkArrayExpressionElement(pos, ast, visitors, parentFrame);
    pos += 16;
  }
}

function walkBoxSpreadElement(pos, ast, visitors, parentFrame) {
  return walkSpreadElement(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxElision(pos, ast, visitors, parentFrame) {
  return walkElision(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkVecObjectPropertyKind(pos, ast, visitors, parentFrame) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  pos = int32[pos32];
  const endPos = pos + int32[pos32 + 2] * 16;
  while (pos < endPos) {
    walkObjectPropertyKind(pos, ast, visitors, parentFrame);
    pos += 16;
  }
}

function walkBoxObjectProperty(pos, ast, visitors, parentFrame) {
  return walkObjectProperty(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxIdentifierName(pos, ast, visitors, parentFrame) {
  return walkIdentifierName(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxPrivateIdentifier(pos, ast, visitors, parentFrame) {
  return walkPrivateIdentifier(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkVecTemplateElement(pos, ast, visitors, parentFrame) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  pos = int32[pos32];
  const endPos = pos + int32[pos32 + 2] * 48;
  while (pos < endPos) {
    walkTemplateElement(pos, ast, visitors, parentFrame);
    pos += 48;
  }
}

function walkVecExpression(pos, ast, visitors, parentFrame) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  pos = int32[pos32];
  const endPos = pos + int32[pos32 + 2] * 16;
  while (pos < endPos) {
    walkExpression(pos, ast, visitors, parentFrame);
    pos += 16;
  }
}

function walkBoxTSTypeParameterInstantiation(pos, ast, visitors, parentFrame) {
  return walkTSTypeParameterInstantiation(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkOptionBoxTSTypeParameterInstantiation(pos, ast, visitors, parentFrame) {
  if (!(ast.buffer.int32[pos >> 2] === 0 && ast.buffer.int32[(pos >> 2) + 1] === 0))
    walkBoxTSTypeParameterInstantiation(pos, ast, visitors, parentFrame);
}

function walkBoxComputedMemberExpression(pos, ast, visitors, parentFrame) {
  return walkComputedMemberExpression(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxStaticMemberExpression(pos, ast, visitors, parentFrame) {
  return walkStaticMemberExpression(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxPrivateFieldExpression(pos, ast, visitors, parentFrame) {
  return walkPrivateFieldExpression(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkVecArgument(pos, ast, visitors, parentFrame) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  pos = int32[pos32];
  const endPos = pos + int32[pos32 + 2] * 16;
  while (pos < endPos) {
    walkArgument(pos, ast, visitors, parentFrame);
    pos += 16;
  }
}

function walkBoxArrayAssignmentTarget(pos, ast, visitors, parentFrame) {
  return walkArrayAssignmentTarget(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxObjectAssignmentTarget(pos, ast, visitors, parentFrame) {
  return walkObjectAssignmentTarget(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkOptionAssignmentTargetMaybeDefault(pos, ast, visitors, parentFrame) {
  if (!(ast.buffer[pos] === 255)) walkAssignmentTargetMaybeDefault(pos, ast, visitors, parentFrame);
}

function walkVecOptionAssignmentTargetMaybeDefault(pos, ast, visitors, parentFrame) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  pos = int32[pos32];
  const endPos = pos + int32[pos32 + 2] * 16;
  while (pos < endPos) {
    walkOptionAssignmentTargetMaybeDefault(pos, ast, visitors, parentFrame);
    pos += 16;
  }
}

function walkBoxAssignmentTargetRest(pos, ast, visitors, parentFrame) {
  return walkAssignmentTargetRest(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkOptionBoxAssignmentTargetRest(pos, ast, visitors, parentFrame) {
  if (!(ast.buffer.int32[pos >> 2] === 0 && ast.buffer.int32[(pos >> 2) + 1] === 0))
    walkBoxAssignmentTargetRest(pos, ast, visitors, parentFrame);
}

function walkVecAssignmentTargetProperty(pos, ast, visitors, parentFrame) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  pos = int32[pos32];
  const endPos = pos + int32[pos32 + 2] * 16;
  while (pos < endPos) {
    walkAssignmentTargetProperty(pos, ast, visitors, parentFrame);
    pos += 16;
  }
}

function walkBoxAssignmentTargetWithDefault(pos, ast, visitors, parentFrame) {
  return walkAssignmentTargetWithDefault(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxAssignmentTargetPropertyIdentifier(pos, ast, visitors, parentFrame) {
  return walkAssignmentTargetPropertyIdentifier(
    ast.buffer.int32[pos >> 2],
    ast,
    visitors,
    parentFrame,
  );
}

function walkBoxAssignmentTargetPropertyProperty(pos, ast, visitors, parentFrame) {
  return walkAssignmentTargetPropertyProperty(
    ast.buffer.int32[pos >> 2],
    ast,
    visitors,
    parentFrame,
  );
}

function walkOptionExpression(pos, ast, visitors, parentFrame) {
  if (!(ast.buffer[pos] === 255)) walkExpression(pos, ast, visitors, parentFrame);
}

function walkBoxBlockStatement(pos, ast, visitors, parentFrame) {
  return walkBlockStatement(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxBreakStatement(pos, ast, visitors, parentFrame) {
  return walkBreakStatement(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxContinueStatement(pos, ast, visitors, parentFrame) {
  return walkContinueStatement(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxDebuggerStatement(pos, ast, visitors, parentFrame) {
  return walkDebuggerStatement(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxDoWhileStatement(pos, ast, visitors, parentFrame) {
  return walkDoWhileStatement(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxEmptyStatement(pos, ast, visitors, parentFrame) {
  return walkEmptyStatement(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxExpressionStatement(pos, ast, visitors, parentFrame) {
  return walkExpressionStatement(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxForInStatement(pos, ast, visitors, parentFrame) {
  return walkForInStatement(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxForOfStatement(pos, ast, visitors, parentFrame) {
  return walkForOfStatement(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxForStatement(pos, ast, visitors, parentFrame) {
  return walkForStatement(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxIfStatement(pos, ast, visitors, parentFrame) {
  return walkIfStatement(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxLabeledStatement(pos, ast, visitors, parentFrame) {
  return walkLabeledStatement(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxReturnStatement(pos, ast, visitors, parentFrame) {
  return walkReturnStatement(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxSwitchStatement(pos, ast, visitors, parentFrame) {
  return walkSwitchStatement(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxThrowStatement(pos, ast, visitors, parentFrame) {
  return walkThrowStatement(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTryStatement(pos, ast, visitors, parentFrame) {
  return walkTryStatement(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxWhileStatement(pos, ast, visitors, parentFrame) {
  return walkWhileStatement(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxWithStatement(pos, ast, visitors, parentFrame) {
  return walkWithStatement(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxVariableDeclaration(pos, ast, visitors, parentFrame) {
  return walkVariableDeclaration(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSTypeAliasDeclaration(pos, ast, visitors, parentFrame) {
  return walkTSTypeAliasDeclaration(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSInterfaceDeclaration(pos, ast, visitors, parentFrame) {
  return walkTSInterfaceDeclaration(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSEnumDeclaration(pos, ast, visitors, parentFrame) {
  return walkTSEnumDeclaration(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSExternalModuleDeclaration(pos, ast, visitors, parentFrame) {
  return walkTSExternalModuleDeclaration(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSNamespaceDeclaration(pos, ast, visitors, parentFrame) {
  return walkTSNamespaceDeclaration(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSGlobalDeclaration(pos, ast, visitors, parentFrame) {
  return walkTSGlobalDeclaration(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSImportEqualsDeclaration(pos, ast, visitors, parentFrame) {
  return walkTSImportEqualsDeclaration(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkVecVariableDeclarator(pos, ast, visitors, parentFrame) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  pos = int32[pos32];
  const endPos = pos + int32[pos32 + 2] * 56;
  while (pos < endPos) {
    walkVariableDeclarator(pos, ast, visitors, parentFrame);
    pos += 56;
  }
}

function walkBoxTSTypeAnnotation(pos, ast, visitors, parentFrame) {
  return walkTSTypeAnnotation(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkOptionBoxTSTypeAnnotation(pos, ast, visitors, parentFrame) {
  if (!(ast.buffer.int32[pos >> 2] === 0 && ast.buffer.int32[(pos >> 2) + 1] === 0))
    walkBoxTSTypeAnnotation(pos, ast, visitors, parentFrame);
}

function walkOptionStatement(pos, ast, visitors, parentFrame) {
  if (!(ast.buffer[pos] === 255)) walkStatement(pos, ast, visitors, parentFrame);
}

function walkOptionForStatementInit(pos, ast, visitors, parentFrame) {
  if (!(ast.buffer[pos] === 255)) walkForStatementInit(pos, ast, visitors, parentFrame);
}

function walkOptionLabelIdentifier(pos, ast, visitors, parentFrame) {
  if (!(ast.buffer.int32[(pos >> 2) + 4] === 0 && ast.buffer.int32[(pos >> 2) + 5] === 0))
    walkLabelIdentifier(pos, ast, visitors, parentFrame);
}

function walkVecSwitchCase(pos, ast, visitors, parentFrame) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  pos = int32[pos32];
  const endPos = pos + int32[pos32 + 2] * 56;
  while (pos < endPos) {
    walkSwitchCase(pos, ast, visitors, parentFrame);
    pos += 56;
  }
}

function walkBoxCatchClause(pos, ast, visitors, parentFrame) {
  return walkCatchClause(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkOptionBoxCatchClause(pos, ast, visitors, parentFrame) {
  if (!(ast.buffer.int32[pos >> 2] === 0 && ast.buffer.int32[(pos >> 2) + 1] === 0))
    walkBoxCatchClause(pos, ast, visitors, parentFrame);
}

function walkOptionBoxBlockStatement(pos, ast, visitors, parentFrame) {
  if (!(ast.buffer.int32[pos >> 2] === 0 && ast.buffer.int32[(pos >> 2) + 1] === 0))
    walkBoxBlockStatement(pos, ast, visitors, parentFrame);
}

function walkOptionCatchParameter(pos, ast, visitors, parentFrame) {
  if (!(ast.buffer[pos + 16] === 255)) walkCatchParameter(pos, ast, visitors, parentFrame);
}

function walkBoxBindingIdentifier(pos, ast, visitors, parentFrame) {
  return walkBindingIdentifier(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxObjectPattern(pos, ast, visitors, parentFrame) {
  return walkObjectPattern(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxArrayPattern(pos, ast, visitors, parentFrame) {
  return walkArrayPattern(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxAssignmentPattern(pos, ast, visitors, parentFrame) {
  return walkAssignmentPattern(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkVecBindingProperty(pos, ast, visitors, parentFrame) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  pos = int32[pos32];
  const endPos = pos + int32[pos32 + 2] * 48;
  while (pos < endPos) {
    walkBindingProperty(pos, ast, visitors, parentFrame);
    pos += 48;
  }
}

function walkBoxBindingRestElement(pos, ast, visitors, parentFrame) {
  return walkBindingRestElement(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkOptionBoxBindingRestElement(pos, ast, visitors, parentFrame) {
  if (!(ast.buffer.int32[pos >> 2] === 0 && ast.buffer.int32[(pos >> 2) + 1] === 0))
    walkBoxBindingRestElement(pos, ast, visitors, parentFrame);
}

function walkOptionBindingPattern(pos, ast, visitors, parentFrame) {
  if (!(ast.buffer[pos] === 255)) walkBindingPattern(pos, ast, visitors, parentFrame);
}

function walkVecOptionBindingPattern(pos, ast, visitors, parentFrame) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  pos = int32[pos32];
  const endPos = pos + int32[pos32 + 2] * 16;
  while (pos < endPos) {
    walkOptionBindingPattern(pos, ast, visitors, parentFrame);
    pos += 16;
  }
}

function walkOptionBindingIdentifier(pos, ast, visitors, parentFrame) {
  if (!(ast.buffer.int32[(pos >> 2) + 4] === 0 && ast.buffer.int32[(pos >> 2) + 5] === 0))
    walkBindingIdentifier(pos, ast, visitors, parentFrame);
}

function walkBoxTSTypeParameterDeclaration(pos, ast, visitors, parentFrame) {
  return walkTSTypeParameterDeclaration(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkOptionBoxTSTypeParameterDeclaration(pos, ast, visitors, parentFrame) {
  if (!(ast.buffer.int32[pos >> 2] === 0 && ast.buffer.int32[(pos >> 2) + 1] === 0))
    walkBoxTSTypeParameterDeclaration(pos, ast, visitors, parentFrame);
}

function walkBoxTSThisParameter(pos, ast, visitors, parentFrame) {
  return walkTSThisParameter(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkOptionBoxTSThisParameter(pos, ast, visitors, parentFrame) {
  if (!(ast.buffer.int32[pos >> 2] === 0 && ast.buffer.int32[(pos >> 2) + 1] === 0))
    walkBoxTSThisParameter(pos, ast, visitors, parentFrame);
}

function walkBoxFormalParameters(pos, ast, visitors, parentFrame) {
  return walkFormalParameters(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxFunctionBody(pos, ast, visitors, parentFrame) {
  return walkFunctionBody(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkOptionBoxFunctionBody(pos, ast, visitors, parentFrame) {
  if (!(ast.buffer.int32[pos >> 2] === 0 && ast.buffer.int32[(pos >> 2) + 1] === 0))
    walkBoxFunctionBody(pos, ast, visitors, parentFrame);
}

function walkVecFormalParameter(pos, ast, visitors, parentFrame) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  pos = int32[pos32];
  const endPos = pos + int32[pos32 + 2] * 72;
  while (pos < endPos) {
    walkFormalParameter(pos, ast, visitors, parentFrame);
    pos += 72;
  }
}

function walkBoxFormalParameterRest(pos, ast, visitors, parentFrame) {
  return walkFormalParameterRest(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkOptionBoxFormalParameterRest(pos, ast, visitors, parentFrame) {
  if (!(ast.buffer.int32[pos >> 2] === 0 && ast.buffer.int32[(pos >> 2) + 1] === 0))
    walkBoxFormalParameterRest(pos, ast, visitors, parentFrame);
}

function walkVecDecorator(pos, ast, visitors, parentFrame) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  pos = int32[pos32];
  const endPos = pos + int32[pos32 + 2] * 32;
  while (pos < endPos) {
    walkDecorator(pos, ast, visitors, parentFrame);
    pos += 32;
  }
}

function walkBoxExpression(pos, ast, visitors, parentFrame) {
  return walkExpression(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkOptionBoxExpression(pos, ast, visitors, parentFrame) {
  if (!(ast.buffer.int32[pos >> 2] === 0 && ast.buffer.int32[(pos >> 2) + 1] === 0))
    walkBoxExpression(pos, ast, visitors, parentFrame);
}

function walkOptionClassHeritage(pos, ast, visitors, parentFrame) {
  if (!(ast.buffer[pos] === 255)) walkClassHeritage(pos, ast, visitors, parentFrame);
}

function walkVecTSClassImplements(pos, ast, visitors, parentFrame) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  pos = int32[pos32];
  const endPos = pos + int32[pos32 + 2] * 40;
  while (pos < endPos) {
    walkTSClassImplements(pos, ast, visitors, parentFrame);
    pos += 40;
  }
}

function walkBoxClassBody(pos, ast, visitors, parentFrame) {
  return walkClassBody(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkVecClassElement(pos, ast, visitors, parentFrame) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  pos = int32[pos32];
  const endPos = pos + int32[pos32 + 2] * 16;
  while (pos < endPos) {
    walkClassElement(pos, ast, visitors, parentFrame);
    pos += 16;
  }
}

function walkBoxStaticBlock(pos, ast, visitors, parentFrame) {
  return walkStaticBlock(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxMethodDefinition(pos, ast, visitors, parentFrame) {
  return walkMethodDefinition(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxPropertyDefinition(pos, ast, visitors, parentFrame) {
  return walkPropertyDefinition(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxAccessorProperty(pos, ast, visitors, parentFrame) {
  return walkAccessorProperty(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSIndexSignature(pos, ast, visitors, parentFrame) {
  return walkTSIndexSignature(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxImportDeclaration(pos, ast, visitors, parentFrame) {
  return walkImportDeclaration(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxExportAllDeclaration(pos, ast, visitors, parentFrame) {
  return walkExportAllDeclaration(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxExportDefaultDeclaration(pos, ast, visitors, parentFrame) {
  return walkExportDefaultDeclaration(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxExportDeclaration(pos, ast, visitors, parentFrame) {
  return walkExportDeclaration(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxExportNamedDeclaration(pos, ast, visitors, parentFrame) {
  return walkExportNamedDeclaration(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxExportFromDeclaration(pos, ast, visitors, parentFrame) {
  return walkExportFromDeclaration(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSExportAssignment(pos, ast, visitors, parentFrame) {
  return walkTSExportAssignment(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSNamespaceExportDeclaration(pos, ast, visitors, parentFrame) {
  return walkTSNamespaceExportDeclaration(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkVecImportDeclarationSpecifier(pos, ast, visitors, parentFrame) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  pos = int32[pos32];
  const endPos = pos + int32[pos32 + 2] * 16;
  while (pos < endPos) {
    walkImportDeclarationSpecifier(pos, ast, visitors, parentFrame);
    pos += 16;
  }
}

function walkOptionVecImportDeclarationSpecifier(pos, ast, visitors, parentFrame) {
  if (!(ast.buffer.int32[pos >> 2] === 0 && ast.buffer.int32[(pos >> 2) + 1] === 0))
    walkVecImportDeclarationSpecifier(pos, ast, visitors, parentFrame);
}

function walkBoxWithClause(pos, ast, visitors, parentFrame) {
  return walkWithClause(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkOptionBoxWithClause(pos, ast, visitors, parentFrame) {
  if (!(ast.buffer.int32[pos >> 2] === 0 && ast.buffer.int32[(pos >> 2) + 1] === 0))
    walkBoxWithClause(pos, ast, visitors, parentFrame);
}

function walkBoxImportSpecifier(pos, ast, visitors, parentFrame) {
  return walkImportSpecifier(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxImportDefaultSpecifier(pos, ast, visitors, parentFrame) {
  return walkImportDefaultSpecifier(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxImportNamespaceSpecifier(pos, ast, visitors, parentFrame) {
  return walkImportNamespaceSpecifier(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkVecImportAttribute(pos, ast, visitors, parentFrame) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  pos = int32[pos32];
  const endPos = pos + int32[pos32 + 2] * 120;
  while (pos < endPos) {
    walkImportAttribute(pos, ast, visitors, parentFrame);
    pos += 120;
  }
}

function walkVecExportSpecifier(pos, ast, visitors, parentFrame) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  pos = int32[pos32];
  const endPos = pos + int32[pos32 + 2] * 128;
  while (pos < endPos) {
    walkExportSpecifier(pos, ast, visitors, parentFrame);
    pos += 128;
  }
}

function walkOptionModuleExportName(pos, ast, visitors, parentFrame) {
  if (!(ast.buffer[pos] === 255)) walkModuleExportName(pos, ast, visitors, parentFrame);
}

function walkBoxJSXOpeningElement(pos, ast, visitors, parentFrame) {
  return walkJSXOpeningElement(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkVecJSXChild(pos, ast, visitors, parentFrame) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  pos = int32[pos32];
  const endPos = pos + int32[pos32 + 2] * 16;
  while (pos < endPos) {
    walkJSXChild(pos, ast, visitors, parentFrame);
    pos += 16;
  }
}

function walkBoxJSXClosingElement(pos, ast, visitors, parentFrame) {
  return walkJSXClosingElement(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkOptionBoxJSXClosingElement(pos, ast, visitors, parentFrame) {
  if (!(ast.buffer.int32[pos >> 2] === 0 && ast.buffer.int32[(pos >> 2) + 1] === 0))
    walkBoxJSXClosingElement(pos, ast, visitors, parentFrame);
}

function walkVecJSXAttributeItem(pos, ast, visitors, parentFrame) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  pos = int32[pos32];
  const endPos = pos + int32[pos32 + 2] * 16;
  while (pos < endPos) {
    walkJSXAttributeItem(pos, ast, visitors, parentFrame);
    pos += 16;
  }
}

function walkBoxJSXIdentifier(pos, ast, visitors, parentFrame) {
  return walkJSXIdentifier(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxJSXNamespacedName(pos, ast, visitors, parentFrame) {
  return walkJSXNamespacedName(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxJSXMemberExpression(pos, ast, visitors, parentFrame) {
  return walkJSXMemberExpression(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxJSXEmptyExpression(pos, ast, visitors, parentFrame) {
  return walkJSXEmptyExpression(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxJSXAttribute(pos, ast, visitors, parentFrame) {
  return walkJSXAttribute(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxJSXSpreadAttribute(pos, ast, visitors, parentFrame) {
  return walkJSXSpreadAttribute(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkOptionJSXAttributeValue(pos, ast, visitors, parentFrame) {
  if (!(ast.buffer[pos] === 255)) walkJSXAttributeValue(pos, ast, visitors, parentFrame);
}

function walkBoxJSXExpressionContainer(pos, ast, visitors, parentFrame) {
  return walkJSXExpressionContainer(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxJSXText(pos, ast, visitors, parentFrame) {
  return walkJSXText(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxJSXSpreadChild(pos, ast, visitors, parentFrame) {
  return walkJSXSpreadChild(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkVecTSEnumMember(pos, ast, visitors, parentFrame) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  pos = int32[pos32];
  const endPos = pos + int32[pos32 + 2] * 48;
  while (pos < endPos) {
    walkTSEnumMember(pos, ast, visitors, parentFrame);
    pos += 48;
  }
}

function walkBoxTSAnyKeyword(pos, ast, visitors, parentFrame) {
  return walkTSAnyKeyword(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSBigIntKeyword(pos, ast, visitors, parentFrame) {
  return walkTSBigIntKeyword(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSBooleanKeyword(pos, ast, visitors, parentFrame) {
  return walkTSBooleanKeyword(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSIntrinsicKeyword(pos, ast, visitors, parentFrame) {
  return walkTSIntrinsicKeyword(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSNeverKeyword(pos, ast, visitors, parentFrame) {
  return walkTSNeverKeyword(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSNullKeyword(pos, ast, visitors, parentFrame) {
  return walkTSNullKeyword(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSNumberKeyword(pos, ast, visitors, parentFrame) {
  return walkTSNumberKeyword(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSObjectKeyword(pos, ast, visitors, parentFrame) {
  return walkTSObjectKeyword(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSStringKeyword(pos, ast, visitors, parentFrame) {
  return walkTSStringKeyword(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSSymbolKeyword(pos, ast, visitors, parentFrame) {
  return walkTSSymbolKeyword(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSUndefinedKeyword(pos, ast, visitors, parentFrame) {
  return walkTSUndefinedKeyword(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSUnknownKeyword(pos, ast, visitors, parentFrame) {
  return walkTSUnknownKeyword(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSVoidKeyword(pos, ast, visitors, parentFrame) {
  return walkTSVoidKeyword(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSArrayType(pos, ast, visitors, parentFrame) {
  return walkTSArrayType(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSConditionalType(pos, ast, visitors, parentFrame) {
  return walkTSConditionalType(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSConstructorType(pos, ast, visitors, parentFrame) {
  return walkTSConstructorType(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSFunctionType(pos, ast, visitors, parentFrame) {
  return walkTSFunctionType(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSImportType(pos, ast, visitors, parentFrame) {
  return walkTSImportType(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSIndexedAccessType(pos, ast, visitors, parentFrame) {
  return walkTSIndexedAccessType(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSInferType(pos, ast, visitors, parentFrame) {
  return walkTSInferType(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSIntersectionType(pos, ast, visitors, parentFrame) {
  return walkTSIntersectionType(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSLiteralType(pos, ast, visitors, parentFrame) {
  return walkTSLiteralType(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSMappedType(pos, ast, visitors, parentFrame) {
  return walkTSMappedType(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSNamedTupleMember(pos, ast, visitors, parentFrame) {
  return walkTSNamedTupleMember(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSTemplateLiteralType(pos, ast, visitors, parentFrame) {
  return walkTSTemplateLiteralType(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSThisType(pos, ast, visitors, parentFrame) {
  return walkTSThisType(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSTupleType(pos, ast, visitors, parentFrame) {
  return walkTSTupleType(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSTypeLiteral(pos, ast, visitors, parentFrame) {
  return walkTSTypeLiteral(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSTypeOperator(pos, ast, visitors, parentFrame) {
  return walkTSTypeOperator(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSTypePredicate(pos, ast, visitors, parentFrame) {
  return walkTSTypePredicate(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSTypeQuery(pos, ast, visitors, parentFrame) {
  return walkTSTypeQuery(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSTypeReference(pos, ast, visitors, parentFrame) {
  return walkTSTypeReference(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSUnionType(pos, ast, visitors, parentFrame) {
  return walkTSUnionType(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSParenthesizedType(pos, ast, visitors, parentFrame) {
  return walkTSParenthesizedType(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxJSDocNullableType(pos, ast, visitors, parentFrame) {
  return walkJSDocNullableType(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxJSDocNonNullableType(pos, ast, visitors, parentFrame) {
  return walkJSDocNonNullableType(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxJSDocUnknownType(pos, ast, visitors, parentFrame) {
  return walkJSDocUnknownType(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkVecTSType(pos, ast, visitors, parentFrame) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  pos = int32[pos32];
  const endPos = pos + int32[pos32 + 2] * 16;
  while (pos < endPos) {
    walkTSType(pos, ast, visitors, parentFrame);
    pos += 16;
  }
}

function walkVecTSTupleElement(pos, ast, visitors, parentFrame) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  pos = int32[pos32];
  const endPos = pos + int32[pos32 + 2] * 16;
  while (pos < endPos) {
    walkTSTupleElement(pos, ast, visitors, parentFrame);
    pos += 16;
  }
}

function walkBoxTSOptionalType(pos, ast, visitors, parentFrame) {
  return walkTSOptionalType(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSRestType(pos, ast, visitors, parentFrame) {
  return walkTSRestType(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSQualifiedName(pos, ast, visitors, parentFrame) {
  return walkTSQualifiedName(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkOptionTSType(pos, ast, visitors, parentFrame) {
  if (!(ast.buffer[pos] === 255)) walkTSType(pos, ast, visitors, parentFrame);
}

function walkVecTSTypeParameter(pos, ast, visitors, parentFrame) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  pos = int32[pos32];
  const endPos = pos + int32[pos32 + 2] * 80;
  while (pos < endPos) {
    walkTSTypeParameter(pos, ast, visitors, parentFrame);
    pos += 80;
  }
}

function walkVecTSInterfaceHeritage(pos, ast, visitors, parentFrame) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  pos = int32[pos32];
  const endPos = pos + int32[pos32 + 2] * 40;
  while (pos < endPos) {
    walkTSInterfaceHeritage(pos, ast, visitors, parentFrame);
    pos += 40;
  }
}

function walkBoxTSInterfaceBody(pos, ast, visitors, parentFrame) {
  return walkTSInterfaceBody(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkVecTSSignature(pos, ast, visitors, parentFrame) {
  const { int32 } = ast.buffer,
    pos32 = pos >> 2;
  pos = int32[pos32];
  const endPos = pos + int32[pos32 + 2] * 16;
  while (pos < endPos) {
    walkTSSignature(pos, ast, visitors, parentFrame);
    pos += 16;
  }
}

function walkBoxTSPropertySignature(pos, ast, visitors, parentFrame) {
  return walkTSPropertySignature(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSCallSignatureDeclaration(pos, ast, visitors, parentFrame) {
  return walkTSCallSignatureDeclaration(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSConstructSignatureDeclaration(pos, ast, visitors, parentFrame) {
  return walkTSConstructSignatureDeclaration(
    ast.buffer.int32[pos >> 2],
    ast,
    visitors,
    parentFrame,
  );
}

function walkBoxTSMethodSignature(pos, ast, visitors, parentFrame) {
  return walkTSMethodSignature(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSModuleBlock(pos, ast, visitors, parentFrame) {
  return walkTSModuleBlock(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkOptionBoxTSModuleBlock(pos, ast, visitors, parentFrame) {
  if (!(ast.buffer.int32[pos >> 2] === 0 && ast.buffer.int32[(pos >> 2) + 1] === 0))
    walkBoxTSModuleBlock(pos, ast, visitors, parentFrame);
}

function walkBoxTSTypeParameter(pos, ast, visitors, parentFrame) {
  return walkTSTypeParameter(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkOptionBoxObjectExpression(pos, ast, visitors, parentFrame) {
  if (!(ast.buffer.int32[pos >> 2] === 0 && ast.buffer.int32[(pos >> 2) + 1] === 0))
    walkBoxObjectExpression(pos, ast, visitors, parentFrame);
}

function walkOptionTSImportTypeQualifier(pos, ast, visitors, parentFrame) {
  if (!(ast.buffer[pos] === 2)) walkTSImportTypeQualifier(pos, ast, visitors, parentFrame);
}

function walkBoxTSImportTypeQualifiedName(pos, ast, visitors, parentFrame) {
  return walkTSImportTypeQualifiedName(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}

function walkBoxTSExternalModuleReference(pos, ast, visitors, parentFrame) {
  return walkTSExternalModuleReference(ast.buffer.int32[pos >> 2], ast, visitors, parentFrame);
}
