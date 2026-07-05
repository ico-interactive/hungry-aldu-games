import { $GlslNewFieldNode, $GlslVariableDeclarationNode, $GlslStructDeclarationNode } from "@package/io/github/ocelot/glslprocessor/api/node/variable";
import { $Stream } from "@package/java/util/stream";
import { $GlslSpecifiedType, $GlslFunctionHeader, $GlslParameterDeclaration, $GlslTypeSpecifier, $GlslTypeSpecifier_ } from "@package/io/github/ocelot/glslprocessor/api/grammar";
import { $Collection_, $List } from "@package/java/util";
import { $GlslNode, $GlslRootNode, $GlslNodeList, $GlslNodeType } from "@package/io/github/ocelot/glslprocessor/api/node";
import { $GlslNodeVisitor } from "@package/io/github/ocelot/glslprocessor/api/visitor";

declare module "@package/io/github/ocelot/glslprocessor/api/node/function" {
    export class $GlslFunctionNode implements $GlslRootNode {
        getParameters(): $List<$GlslParameterDeclaration>;
        getName(): string;
        stream(): $Stream<$GlslNode>;
        getReturnType(): $GlslSpecifiedType;
        setName(arg0: string): $GlslFunctionNode;
        getHeader(): $GlslFunctionHeader;
        visit(arg0: $GlslNodeVisitor): void;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        getNodeType(): $GlslNodeType;
        getBody(): $GlslNodeList;
        setHeader(arg0: $GlslFunctionHeader): void;
        isField(): boolean;
        isFunction(): boolean;
        asStruct(): $GlslStructDeclarationNode;
        asField(): $GlslNewFieldNode;
        asFunction(): $GlslFunctionNode;
        isStruct(): boolean;
        asDeclaration(): $GlslVariableDeclarationNode;
        isDeclaration(): boolean;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        toSourceString(): string;
        setBody(...arg0: $GlslNode[]): boolean;
        constructor(arg0: $GlslFunctionHeader, arg1: $Collection_<$GlslNode>);
        get parameters(): $List<$GlslParameterDeclaration>;
        get returnType(): $GlslSpecifiedType;
        get nodeType(): $GlslNodeType;
        get field(): boolean;
        get function(): boolean;
        get struct(): boolean;
        get declaration(): boolean;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslInvokeFunctionNode implements $GlslNode {
        getParameters(): $List<$GlslNode>;
        stream(): $Stream<$GlslNode>;
        getHeader(): $GlslNode;
        visit(arg0: $GlslNodeVisitor): void;
        getNodeType(): $GlslNodeType;
        setHeader(arg0: $GlslNode): void;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        toSourceString(): string;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        getBody(): $GlslNodeList;
        constructor(arg0: $GlslNode, arg1: $Collection_<$GlslNode>);
        get parameters(): $List<$GlslNode>;
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslPrimitiveConstructorNode implements $GlslNode {
        stream(): $Stream<$GlslNode>;
        visit(arg0: $GlslNodeVisitor): void;
        getNodeType(): $GlslNodeType;
        getPrimitiveType(): $GlslTypeSpecifier;
        setPrimitiveType(arg0: $GlslTypeSpecifier_): void;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        toSourceString(): string;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        getBody(): $GlslNodeList;
        constructor(arg0: $GlslTypeSpecifier_);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
}
