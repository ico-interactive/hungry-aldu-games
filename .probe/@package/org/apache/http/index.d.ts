import { $OutputStream, $InputStream } from "@package/java/io";
export * as entity from "@package/org/apache/http/entity";

declare module "@package/org/apache/http" {
    export class $HttpEntity {
    }
    export interface $HttpEntity {
        isRepeatable(): boolean;
        isStreaming(): boolean;
        /**
         * @deprecated
         */
        consumeContent(): void;
        getContent(): $InputStream;
        getContentLength(): number;
        writeTo(arg0: $OutputStream): void;
        getContentType(): $Header;
        getContentEncoding(): $Header;
        isChunked(): boolean;
        get repeatable(): boolean;
        get streaming(): boolean;
        get content(): $InputStream;
        get contentLength(): number;
        get contentType(): $Header;
        get contentEncoding(): $Header;
        get chunked(): boolean;
    }
    export class $HeaderElement {
    }
    export interface $HeaderElement {
        getParameters(): $NameValuePair[];
        getName(): string;
        getValue(): string;
        getParameterCount(): number;
        getParameter(arg0: number): $NameValuePair;
        getParameterByName(arg0: string): $NameValuePair;
        get parameters(): $NameValuePair[];
        get name(): string;
        get value(): string;
        get parameterCount(): number;
    }
    export class $Header {
    }
    export interface $Header extends $NameValuePair {
        getElements(): $HeaderElement[];
        get elements(): $HeaderElement[];
    }
    export class $NameValuePair {
    }
    export interface $NameValuePair {
        getName(): string;
        getValue(): string;
        get name(): string;
        get value(): string;
    }
}
