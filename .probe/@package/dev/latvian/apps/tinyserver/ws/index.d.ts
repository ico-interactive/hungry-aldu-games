import { $Supplier_ } from "@package/java/util/function";
import { $StatusCode_, $HTTPConnection, $StatusCode } from "@package/dev/latvian/apps/tinyserver";
import { $HTTPRequest, $HTTPUpgrade } from "@package/dev/latvian/apps/tinyserver/http";
import { $Throwable, $Enum, $Record, $Iterable } from "@package/java/lang";
import { $Spliterator, $Iterator, $UUID, $Map_, $Map, $UUID_ } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";

declare module "@package/dev/latvian/apps/tinyserver/ws" {
    export class $FrameInfo extends $Record {
        mask(): boolean;
        size(): number;
        put(buf: $ByteBuffer): void;
        bytes(): number;
        static read(connection: $HTTPConnection<any>): $FrameInfo;
        opcode(): $Opcode;
        fin(): boolean;
        applyMask(payload: number[]): void;
        rsv2(): boolean;
        rsv1(): boolean;
        maskKey(): number;
        rsv3(): boolean;
        maskZero(): boolean;
        constructor(opcode: $Opcode_, mask: boolean, fin: boolean, rsv1: boolean, rsv2: boolean, rsv3: boolean, maskKey: number, size: number);
    }
    /**
     * Values that may be interpreted as {@link $FrameInfo}.
     */
    export type $FrameInfo_ = { rsv2?: boolean, rsv3?: boolean, opcode?: $Opcode_, mask?: boolean, size?: number, maskKey?: number, fin?: boolean, rsv1?: boolean,  } | [rsv2?: boolean, rsv3?: boolean, opcode?: $Opcode_, mask?: boolean, size?: number, maskKey?: number, fin?: boolean, rsv1?: boolean, ];
    export class $WSSessionFactory<REQ extends $HTTPRequest, WSS extends $WSSession<REQ>> {
        static DEFAULT: $WSSessionFactory<$HTTPRequest, $WSSession<$HTTPRequest>>;
    }
    export interface $WSSessionFactory<REQ extends $HTTPRequest, WSS extends $WSSession<REQ>> {
        create(): WSS;
    }
    /**
     * Values that may be interpreted as {@link $WSSessionFactory}.
     */
    export type $WSSessionFactory_<REQ, WSS> = (() => WSS);
    export class $Frame extends $Record {
        payload(): number[];
        info(): $FrameInfo;
        appendTo(previous: $Frame_): $Frame;
        static text(text: string): $Frame;
        static binary(buffer: number[]): $Frame;
        static simple(opcode: $Opcode_, mask: number, payload: number[]): $Frame;
        static ping(buffer: number[]): $Frame;
        applyMask(): void;
        constructor(info: $FrameInfo_, payload: number[]);
    }
    /**
     * Values that may be interpreted as {@link $Frame}.
     */
    export type $Frame_ = { payload?: number[], info?: $FrameInfo_,  } | [payload?: number[], info?: $FrameInfo_, ];
    export class $WSCloseStatus extends $Enum<$WSCloseStatus> {
        static values(): $WSCloseStatus[];
        static valueOf(name: string): $WSCloseStatus;
        static CLOSED: $WSCloseStatus;
        static GOING_AWAY: $WSCloseStatus;
        static UNSUPPORTED_DATA: $WSCloseStatus;
        static PROTOCOL_ERROR: $WSCloseStatus;
        statusCode: $StatusCode;
    }
    /**
     * Values that may be interpreted as {@link $WSCloseStatus}.
     */
    export type $WSCloseStatus_ = "closed" | "going_away" | "protocol_error" | "unsupported_data";
    export class $WSSession<REQ extends $HTTPRequest> implements $HTTPUpgrade<REQ> {
        id(): $UUID;
        start(req: REQ): void;
        close(status: $WSCloseStatus_, reason: string): void;
        protocol(): string;
        onClose(reason: $StatusCode_, remote: boolean): void;
        isClosed(): boolean;
        onBinaryMessage(message: number[]): void;
        onTextMessage(message: string): void;
        send(frame: $Frame_): void;
        onError(error: $Throwable): void;
        onOpen(req: REQ): void;
        sendPing(payload: number[]): void;
        sendBinary(payload: number[]): void;
        onPing(payload: number[]): void;
        sendText(payload: string): void;
        onPong(payload: number[]): void;
        constructor();
        get closed(): boolean;
    }
    export class $Opcode extends $Enum<$Opcode> {
        static get(opcode: number): $Opcode;
        static values(): $Opcode[];
        static valueOf(name: string): $Opcode;
        static CLOSING: $Opcode;
        static PING: $Opcode;
        static BINARY: $Opcode;
        static TEXT: $Opcode;
        opcode: number;
        static CONTINUOUS: $Opcode;
        static PONG: $Opcode;
    }
    /**
     * Values that may be interpreted as {@link $Opcode}.
     */
    export type $Opcode_ = "continuous" | "text" | "binary" | "closing" | "ping" | "pong";
    export class $WSHandler<REQ extends $HTTPRequest, WSS extends $WSSession<REQ>> {
        static empty<REQ extends $HTTPRequest, WSS extends $WSSession<REQ>>(): $WSHandler<REQ, WSS>;
        [Symbol.iterator](): Iterator<WSS>
    }
    export interface $WSHandler<REQ extends $HTTPRequest, WSS extends $WSSession<REQ>> extends $Iterable<WSS> {
        iterator(): $Iterator<WSS>;
        spliterator(): $Spliterator<WSS>;
        broadcast(frame: $Frame_): void;
        broadcastText(payload: $Supplier_<string>): void;
        broadcastText(payload: string): void;
        broadcastBinary(payload: $Supplier_<number[]>): void;
        broadcastBinary(payload: number[]): void;
        broadcastPing(payload: number[]): void;
        broadcastPing(payload: $Supplier_<number[]>): void;
        sessions(): $Map<$UUID, WSS>;
        [Symbol.iterator](): Iterator<WSS>
    }
    /**
     * Values that may be interpreted as {@link $WSHandler}.
     */
    export type $WSHandler_<REQ, WSS> = (() => $Map_<$UUID_, WSS>);
}
