import { $Consumer_ } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $FFICIF } from "@package/org/lwjgl/system/libffi";
import { $CLongBuffer, $PointerBuffer } from "@package/org/lwjgl";
import { $CharSequence, $Iterable, $AutoCloseable } from "@package/java/lang";
import { $Spliterator, $Iterator } from "@package/java/util";
import { $DoubleBuffer, $Buffer, $LongBuffer, $ByteBuffer, $IntBuffer, $FloatBuffer, $ShortBuffer } from "@package/java/nio";
export * as libffi from "@package/org/lwjgl/system/libffi";

declare module "@package/org/lwjgl/system" {
    export class $StructBuffer<T extends $Struct<T>, SELF extends $StructBuffer<T, SELF>> extends $CustomBuffer<SELF> implements $Iterable<T> {
        get(arg0: number, arg1: T): SELF;
        get(arg0: T): SELF;
        get(arg0: number): T;
        get(): T;
        put(arg0: number, arg1: T): SELF;
        put(arg0: T): SELF;
        iterator(): $Iterator<T>;
        apply(arg0: number, arg1: $Consumer_<T>): SELF;
        apply(arg0: $Consumer_<T>): SELF;
        stream(): $Stream<T>;
        spliterator(): $Spliterator<T>;
        forEach(arg0: $Consumer_<T>): void;
        parallelStream(): $Stream<T>;
        [Symbol.iterator](): Iterator<T>
    }
    export class $CustomBuffer<SELF extends $CustomBuffer<SELF>> extends $Pointer$Default {
        reset(): SELF;
        put(arg0: SELF): SELF;
        clear(): SELF;
        position(): number;
        position(arg0: number): SELF;
        limit(arg0: number): SELF;
        limit(): number;
        remaining(): number;
        capacity(): number;
        address(arg0: number): number;
        mark(): SELF;
        flip(): SELF;
        rewind(): SELF;
        hasRemaining(): boolean;
        slice(): SELF;
        slice(arg0: number, arg1: number): SELF;
        duplicate(): SELF;
        free(): void;
        compact(): SELF;
        address0(): number;
        sizeof(): number;
    }
    export class $MemoryStack extends $Pointer$Default implements $AutoCloseable {
        getSize(): number;
        UTF16(arg0: $CharSequence): $ByteBuffer;
        UTF16(arg0: $CharSequence, arg1: boolean): $ByteBuffer;
        bytes(arg0: number, arg1: number, arg2: number, arg3: number): $ByteBuffer;
        bytes(arg0: number, arg1: number, arg2: number): $ByteBuffer;
        bytes(...arg0: number[]): $ByteBuffer;
        bytes(arg0: number): $ByteBuffer;
        bytes(arg0: number, arg1: number): $ByteBuffer;
        close(): void;
        static create(): $MemoryStack;
        static create(arg0: $ByteBuffer): $MemoryStack;
        static create(arg0: number): $MemoryStack;
        getAddress(): number;
        nbyte(arg0: number): number;
        ASCII(arg0: $CharSequence): $ByteBuffer;
        ASCII(arg0: $CharSequence, arg1: boolean): $ByteBuffer;
        UTF8(arg0: $CharSequence, arg1: boolean): $ByteBuffer;
        UTF8(arg0: $CharSequence): $ByteBuffer;
        longs(arg0: number, arg1: number, arg2: number): $LongBuffer;
        longs(arg0: number, arg1: number, arg2: number, arg3: number): $LongBuffer;
        longs(...arg0: number[]): $LongBuffer;
        longs(arg0: number, arg1: number): $LongBuffer;
        longs(arg0: number): $LongBuffer;
        push(): $MemoryStack;
        pop(): $MemoryStack;
        ints(arg0: number, arg1: number, arg2: number, arg3: number): $IntBuffer;
        ints(...arg0: number[]): $IntBuffer;
        ints(arg0: number): $IntBuffer;
        ints(arg0: number, arg1: number, arg2: number): $IntBuffer;
        ints(arg0: number, arg1: number): $IntBuffer;
        doubles(...arg0: number[]): $DoubleBuffer;
        doubles(arg0: number, arg1: number, arg2: number, arg3: number): $DoubleBuffer;
        doubles(arg0: number, arg1: number, arg2: number): $DoubleBuffer;
        doubles(arg0: number): $DoubleBuffer;
        doubles(arg0: number, arg1: number): $DoubleBuffer;
        callocInt(arg0: number): $IntBuffer;
        setPointer(arg0: number): void;
        getPointer(): number;
        nUTF8(arg0: $CharSequence, arg1: boolean): number;
        nASCII(arg0: $CharSequence, arg1: boolean): number;
        mallocPointer(arg0: number): $PointerBuffer;
        static stackBytes(...arg0: number[]): $ByteBuffer;
        static stackBytes(arg0: number): $ByteBuffer;
        static stackBytes(arg0: number, arg1: number): $ByteBuffer;
        static stackBytes(arg0: number, arg1: number, arg2: number, arg3: number): $ByteBuffer;
        static stackBytes(arg0: number, arg1: number, arg2: number): $ByteBuffer;
        ASCIISafe(arg0: $CharSequence | null): $ByteBuffer;
        ASCIISafe(arg0: $CharSequence | null, arg1: boolean): $ByteBuffer;
        static stackUTF8(arg0: $CharSequence): $ByteBuffer;
        static stackUTF8(arg0: $CharSequence, arg1: boolean): $ByteBuffer;
        static stackInts(arg0: number, arg1: number, arg2: number): $IntBuffer;
        static stackInts(arg0: number, arg1: number): $IntBuffer;
        static stackInts(arg0: number): $IntBuffer;
        static stackInts(arg0: number, arg1: number, arg2: number, arg3: number): $IntBuffer;
        static stackInts(...arg0: number[]): $IntBuffer;
        shorts(arg0: number): $ShortBuffer;
        shorts(arg0: number, arg1: number, arg2: number): $ShortBuffer;
        shorts(arg0: number, arg1: number): $ShortBuffer;
        shorts(arg0: number, arg1: number, arg2: number, arg3: number): $ShortBuffer;
        shorts(...arg0: number[]): $ShortBuffer;
        UTF16Safe(arg0: $CharSequence | null): $ByteBuffer;
        UTF16Safe(arg0: $CharSequence | null, arg1: boolean): $ByteBuffer;
        nUTF8Safe(arg0: $CharSequence | null, arg1: boolean): number;
        nUTF16Safe(arg0: $CharSequence | null, arg1: boolean): number;
        static stackPop(): $MemoryStack;
        callocLong(arg0: number): $LongBuffer;
        static stackUTF16(arg0: $CharSequence): $ByteBuffer;
        static stackUTF16(arg0: $CharSequence, arg1: boolean): $ByteBuffer;
        nUTF16(arg0: $CharSequence, arg1: boolean): number;
        static stackASCII(arg0: $CharSequence): $ByteBuffer;
        static stackASCII(arg0: $CharSequence, arg1: boolean): $ByteBuffer;
        UTF8Safe(arg0: $CharSequence | null, arg1: boolean): $ByteBuffer;
        UTF8Safe(arg0: $CharSequence | null): $ByteBuffer;
        clongs(arg0: number, arg1: number, arg2: number): $CLongBuffer;
        clongs(arg0: number, arg1: number): $CLongBuffer;
        clongs(arg0: number, arg1: number, arg2: number, arg3: number): $CLongBuffer;
        clongs(...arg0: number[]): $CLongBuffer;
        clongs(arg0: number): $CLongBuffer;
        npointer(arg0: number): number;
        npointer(arg0: $Pointer_): number;
        npointer(arg0: $Buffer): number;
        ndouble(arg0: number): number;
        nASCIISafe(arg0: $CharSequence | null, arg1: boolean): number;
        nclong(arg0: number): number;
        nfloat(arg0: number): number;
        static stackLongs(arg0: number, arg1: number, arg2: number): $LongBuffer;
        static stackLongs(arg0: number): $LongBuffer;
        static stackLongs(arg0: number, arg1: number): $LongBuffer;
        static stackLongs(arg0: number, arg1: number, arg2: number, arg3: number): $LongBuffer;
        static stackLongs(...arg0: number[]): $LongBuffer;
        mallocLong(arg0: number): $LongBuffer;
        floats(arg0: number): $FloatBuffer;
        floats(arg0: number, arg1: number, arg2: number, arg3: number): $FloatBuffer;
        floats(...arg0: number[]): $FloatBuffer;
        floats(arg0: number, arg1: number): $FloatBuffer;
        floats(arg0: number, arg1: number, arg2: number): $FloatBuffer;
        nlong(arg0: number): number;
        nint(arg0: number): number;
        mallocInt(arg0: number): $IntBuffer;
        static ncreate(arg0: number, arg1: number): $MemoryStack;
        nshort(arg0: number): number;
        static stackPush(): $MemoryStack;
        malloc(arg0: number, arg1: number): $ByteBuffer;
        malloc(arg0: number): $ByteBuffer;
        calloc(arg0: number, arg1: number): $ByteBuffer;
        calloc(arg0: number): $ByteBuffer;
        nmalloc(arg0: number, arg1: number): number;
        nmalloc(arg0: number): number;
        static stackGet(): $MemoryStack;
        ncalloc(arg0: number, arg1: number, arg2: number): number;
        mallocFloat(arg0: number): $FloatBuffer;
        static stackCallocCLong(arg0: number): $CLongBuffer;
        static stackDoubles(...arg0: number[]): $DoubleBuffer;
        static stackDoubles(arg0: number, arg1: number, arg2: number): $DoubleBuffer;
        static stackDoubles(arg0: number, arg1: number): $DoubleBuffer;
        static stackDoubles(arg0: number): $DoubleBuffer;
        static stackDoubles(arg0: number, arg1: number, arg2: number, arg3: number): $DoubleBuffer;
        static stackUTF16Safe(arg0: $CharSequence | null): $ByteBuffer;
        static stackUTF16Safe(arg0: $CharSequence | null, arg1: boolean): $ByteBuffer;
        getFrameIndex(): number;
        static stackShorts(arg0: number, arg1: number, arg2: number, arg3: number): $ShortBuffer;
        static stackShorts(arg0: number): $ShortBuffer;
        static stackShorts(arg0: number, arg1: number): $ShortBuffer;
        static stackShorts(arg0: number, arg1: number, arg2: number): $ShortBuffer;
        static stackShorts(...arg0: number[]): $ShortBuffer;
        static stackUTF8Safe(arg0: $CharSequence | null, arg1: boolean): $ByteBuffer;
        static stackUTF8Safe(arg0: $CharSequence | null): $ByteBuffer;
        static stackPointers(arg0: $Pointer_, arg1: $Pointer_, arg2: $Pointer_): $PointerBuffer;
        static stackPointers(arg0: $Pointer_, arg1: $Pointer_): $PointerBuffer;
        static stackPointers(arg0: $Pointer_): $PointerBuffer;
        static stackPointers(arg0: number, arg1: number): $PointerBuffer;
        static stackPointers(arg0: $Pointer_, arg1: $Pointer_, arg2: $Pointer_, arg3: $Pointer_): $PointerBuffer;
        static stackPointers(arg0: number): $PointerBuffer;
        static stackPointers(arg0: number, arg1: number, arg2: number): $PointerBuffer;
        static stackPointers(...arg0: $Pointer_[]): $PointerBuffer;
        static stackPointers(...arg0: number[]): $PointerBuffer;
        static stackPointers(arg0: number, arg1: number, arg2: number, arg3: number): $PointerBuffer;
        static stackMallocInt(arg0: number): $IntBuffer;
        static stackMallocLong(arg0: number): $LongBuffer;
        static nstackMalloc(arg0: number): number;
        static nstackMalloc(arg0: number, arg1: number): number;
        static stackCLongs(arg0: number): $CLongBuffer;
        static stackCLongs(arg0: number, arg1: number, arg2: number, arg3: number): $CLongBuffer;
        static stackCLongs(arg0: number, arg1: number): $CLongBuffer;
        static stackCLongs(arg0: number, arg1: number, arg2: number): $CLongBuffer;
        static stackCLongs(...arg0: number[]): $CLongBuffer;
        static stackFloats(arg0: number, arg1: number): $FloatBuffer;
        static stackFloats(arg0: number, arg1: number, arg2: number, arg3: number): $FloatBuffer;
        static stackFloats(...arg0: number[]): $FloatBuffer;
        static stackFloats(arg0: number): $FloatBuffer;
        static stackFloats(arg0: number, arg1: number, arg2: number): $FloatBuffer;
        static stackMallocPointer(arg0: number): $PointerBuffer;
        callocCLong(arg0: number): $CLongBuffer;
        callocFloat(arg0: number): $FloatBuffer;
        mallocShort(arg0: number): $ShortBuffer;
        static stackMallocCLong(arg0: number): $CLongBuffer;
        static stackCallocFloat(arg0: number): $FloatBuffer;
        callocDouble(arg0: number): $DoubleBuffer;
        static stackMalloc(arg0: number): $ByteBuffer;
        static stackMallocDouble(arg0: number): $DoubleBuffer;
        static nstackCalloc(arg0: number, arg1: number, arg2: number): number;
        static stackCallocDouble(arg0: number): $DoubleBuffer;
        static stackCallocPointer(arg0: number): $PointerBuffer;
        static stackMallocShort(arg0: number): $ShortBuffer;
        callocPointer(arg0: number): $PointerBuffer;
        static stackCallocInt(arg0: number): $IntBuffer;
        static stackASCIISafe(arg0: $CharSequence | null): $ByteBuffer;
        static stackASCIISafe(arg0: $CharSequence | null, arg1: boolean): $ByteBuffer;
        static stackMallocFloat(arg0: number): $FloatBuffer;
        callocShort(arg0: number): $ShortBuffer;
        mallocDouble(arg0: number): $DoubleBuffer;
        static stackCalloc(arg0: number): $ByteBuffer;
        static stackCallocShort(arg0: number): $ShortBuffer;
        pointersOfElements(arg0: $CustomBuffer<never>): $PointerBuffer;
        static stackCallocLong(arg0: number): $LongBuffer;
        mallocCLong(arg0: number): $CLongBuffer;
        getPointerAddress(): number;
        pointers(arg0: number, arg1: number, arg2: number, arg3: number): $PointerBuffer;
        pointers(arg0: $Buffer, arg1: $Buffer, arg2: $Buffer): $PointerBuffer;
        pointers(...arg0: $Buffer[]): $PointerBuffer;
        pointers(arg0: $Buffer, arg1: $Buffer, arg2: $Buffer, arg3: $Buffer): $PointerBuffer;
        pointers(arg0: $Pointer_, arg1: $Pointer_, arg2: $Pointer_, arg3: $Pointer_): $PointerBuffer;
        pointers(arg0: $Pointer_, arg1: $Pointer_, arg2: $Pointer_): $PointerBuffer;
        pointers(arg0: $Pointer_, arg1: $Pointer_): $PointerBuffer;
        pointers(arg0: $Pointer_): $PointerBuffer;
        pointers(arg0: number, arg1: number, arg2: number): $PointerBuffer;
        pointers(...arg0: number[]): $PointerBuffer;
        pointers(arg0: $Buffer, arg1: $Buffer): $PointerBuffer;
        pointers(arg0: $Buffer): $PointerBuffer;
        pointers(arg0: number): $PointerBuffer;
        pointers(arg0: number, arg1: number): $PointerBuffer;
        pointers(...arg0: $Pointer_[]): $PointerBuffer;
        get size(): number;
        get frameIndex(): number;
        get pointerAddress(): number;
    }
    export class $Pointer {
        static POINTER_SIZE: number;
        static CLONG_SIZE: number;
        static CLONG_SHIFT: number;
        static BITS32: boolean;
        static POINTER_SHIFT: number;
        static BITS64: boolean;
    }
    export interface $Pointer {
        address(): number;
    }
    /**
     * Values that may be interpreted as {@link $Pointer}.
     */
    export type $Pointer_ = (() => number);
    export class $NativeResource {
    }
    export interface $NativeResource extends $AutoCloseable {
        close(): void;
        free(): void;
    }
    /**
     * Values that may be interpreted as {@link $NativeResource}.
     */
    export type $NativeResource_ = (() => void);
    export class $Struct<SELF extends $Struct<SELF>> extends $Pointer$Default {
        clear(): void;
        static validate(arg0: number, arg1: number, arg2: number, arg3: $Struct$StructValidation_): void;
        isNull(arg0: number): boolean;
        free(): void;
        sizeof(): number;
    }
    export class $Callback implements $Pointer, $NativeResource {
        static get<T extends $CallbackI>(arg0: number): T;
        address(): number;
        free(): void;
        static free(arg0: number): void;
        static getSafe<T extends $CallbackI>(arg0: number): T;
        close(): void;
    }
    export class $CallbackI {
    }
    export interface $CallbackI extends $Pointer {
        address(): number;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    export class $Pointer$Default implements $Pointer {
        address(): number;
    }
    export class $Struct$StructValidation {
    }
    export interface $Struct$StructValidation {
        validate(arg0: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Struct$StructValidation}.
     */
    export type $Struct$StructValidation_ = ((arg0: number) => void);
}
