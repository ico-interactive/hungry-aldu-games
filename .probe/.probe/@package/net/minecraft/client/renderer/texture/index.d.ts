import { $File_, $Closeable } from "@package/java/io";
import { $Logger } from "@package/org/slf4j";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $FrameSize_ } from "@package/net/minecraft/client/resources/metadata/animation";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $SpriteContentsExt } from "@package/com/moulberry/axiom/hooks";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ResourceManager, $ResourceMetadata_, $PreparableReloadListener$PreparationBarrier_, $PreparableReloadListener, $ResourceMetadata } from "@package/net/minecraft/server/packs/resources";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $ResourceTextureAtlasAccessor } from "@package/foundry/veil/mixin/resource/accessor";
import { $List, $Map_, $Collection_, $List_, $Collection, $Map, $Set } from "@package/java/util";
import { $TextureAtlasExtension, $TextureManagerExtension, $AbstractTextureExtension } from "@package/foundry/veil/ext";
import { $SpriteResourceLoader, $SpriteResourceLoader_ } from "@package/net/minecraft/client/renderer/texture/atlas";
import { $MetadataSectionSerializer } from "@package/net/minecraft/server/packs/metadata";
import { $SpriteFinderImpl$SpriteFinderAccess, $SpriteFinderImpl } from "@package/net/fabricmc/fabric/impl/renderer";
import { $Function_ } from "@package/java/util/function";
import { $IntStream } from "@package/java/util/stream";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $SpriteContentsExtension, $TickerExtension } from "@package/dev/simulated_team/simulated/mixin_interface";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $Record, $RuntimeException, $AutoCloseable, $Runnable_ } from "@package/java/lang";
export * as atlas from "@package/net/minecraft/client/renderer/texture/atlas";

declare module "@package/net/minecraft/client/renderer/texture" {
    export class $StitcherException extends $RuntimeException {
        getAllSprites(): $Collection<$Stitcher$Entry>;
        constructor(entry: $Stitcher$Entry, allSprites: $Collection_<$Stitcher$Entry>);
        get allSprites(): $Collection<$Stitcher$Entry>;
    }
    export class $Stitcher<T extends $Stitcher$Entry> {
        getWidth(): number;
        getHeight(): number;
        registerSprite(stitcherEntry: T): void;
        static smallestFittingMinTexel(dimension: number, mipLevel: number): number;
        gatherSprites(loader: $Stitcher$SpriteLoader_<T>): void;
        stitch(): void;
        constructor(maxWidth: number, maxHeight: number, mipLevel: number);
        get width(): number;
        get height(): number;
    }
    export class $SpriteTicker {
    }
    export interface $SpriteTicker extends $AutoCloseable {
        close(): void;
        tickAndUpload(x: number, y: number): void;
    }
    export class $AbstractTexture implements $AutoCloseable, $AbstractTextureExtension {
        reset(textureManager: $TextureManager, resourceManager: $ResourceManager, path: $ResourceLocation_, executor: $Executor_): void;
        load(resourceManager: $ResourceManager): void;
        getId(): number;
        close(): void;
        bind(): void;
        releaseId(): void;
        setFilter(blur: boolean, mipmap: boolean): void;
        handler$zkj000$veil$setFilterDSA(arg0: boolean, arg1: boolean, arg2: $CallbackInfo, arg3: number, arg4: number): void;
        setBlurMipmap(blur: boolean, mipmap: boolean): void;
        restoreLastBlurMipmap(): void;
        handler$zkj000$veil$bind(arg0: $CallbackInfo): void;
        getTextureTarget(): number;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        blur: boolean;
        id: number;
        constructor();
        get textureTarget(): number;
    }
    export class $OverlayTexture implements $AutoCloseable {
        static v(hurt: boolean): number;
        close(): void;
        static u(u: number): number;
        static pack(u: number, hurt: boolean): number;
        static pack(u: number, v: number): number;
        setupOverlayColor(): void;
        teardownOverlayColor(): void;
        static NO_WHITE_U: number;
        static WHITE_OVERLAY_V: number;
        static NO_OVERLAY: number;
        static RED_OVERLAY_V: number;
        constructor();
    }
    export class $Dumpable {
    }
    export interface $Dumpable {
        dumpContents(resourceLocation: $ResourceLocation_, path: $Path_): void;
    }
    /**
     * Values that may be interpreted as {@link $Dumpable}.
     */
    export type $Dumpable_ = ((arg0: $ResourceLocation, arg1: $Path) => void);
    export class $HttpTexture extends $SimpleTexture {
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        blur: boolean;
        static LOGGER: $Logger;
        location: $ResourceLocation;
        id: number;
        constructor(file: $File_ | null, urlString: string, location: $ResourceLocation_, processLegacySkin: boolean, onDownloaded: $Runnable_ | null);
    }
    export class $SpriteContents$InterpolationData implements $AutoCloseable {
    }
    export class $SpriteLoader$Preparations extends $Record {
        height(): number;
        width(): number;
        regions(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        mipLevel(): number;
        missing(): $TextureAtlasSprite;
        waitForUpload(): $CompletableFuture<$SpriteLoader$Preparations>;
        readyForUpload(): $CompletableFuture<void>;
        constructor(width: number, height: number, mipLevel: number, missing: $TextureAtlasSprite, regions: $Map_<$ResourceLocation_, $TextureAtlasSprite>, readyForUpload: $CompletableFuture<void>);
    }
    /**
     * Values that may be interpreted as {@link $SpriteLoader$Preparations}.
     */
    export type $SpriteLoader$Preparations_ = { width?: number, missing?: $TextureAtlasSprite, height?: number, regions?: $Map_<$ResourceLocation_, $TextureAtlasSprite>, mipLevel?: number, readyForUpload?: $CompletableFuture<void>,  } | [width?: number, missing?: $TextureAtlasSprite, height?: number, regions?: $Map_<$ResourceLocation_, $TextureAtlasSprite>, mipLevel?: number, readyForUpload?: $CompletableFuture<void>, ];
    export class $Tickable {
    }
    export interface $Tickable {
        tick(): void;
    }
    /**
     * Values that may be interpreted as {@link $Tickable}.
     */
    export type $Tickable_ = (() => void);
    export class $Stitcher$Holder<T extends $Stitcher$Entry> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $Stitcher$Holder}.
     */
    export type $Stitcher$Holder_<T> = { width?: number, height?: number, entry?: $Stitcher$Entry,  } | [width?: number, height?: number, entry?: $Stitcher$Entry, ];
    export class $SpriteLoader {
        static create(atlas: $TextureAtlas): $SpriteLoader;
        loadAndStitch(resouceManager: $ResourceManager, location: $ResourceLocation_, mipLevel: number, executor: $Executor_): $CompletableFuture<$SpriteLoader$Preparations>;
        loadAndStitch(resourceManager: $ResourceManager, location: $ResourceLocation_, mipLevel: number, executor: $Executor_, sectionSerializers: $Collection_<$MetadataSectionSerializer<never>>): $CompletableFuture<$SpriteLoader$Preparations>;
        static runSpriteSuppliers(spriteResourceLoader: $SpriteResourceLoader_, factories: $List_<$Function_<$SpriteResourceLoader, $SpriteContents>>, executor: $Executor_): $CompletableFuture<$List<$SpriteContents>>;
        stitch(contents: $List_<$SpriteContents>, mipLevel: number, executor: $Executor_): $SpriteLoader$Preparations;
        static DEFAULT_METADATA_SECTIONS: $Set<$MetadataSectionSerializer<never>>;
        constructor(location: $ResourceLocation_, maxSupportedTextureSize: number, minWidth: number, minHeight: number);
    }
    export class $Stitcher$SpriteLoader<T extends $Stitcher$Entry> {
    }
    export interface $Stitcher$SpriteLoader<T extends $Stitcher$Entry> {
        load(entry: T, x: number, y: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Stitcher$SpriteLoader}.
     */
    export type $Stitcher$SpriteLoader_<T> = ((arg0: T, arg1: number, arg2: number) => void);
    export class $MissingTextureAtlasSprite {
        static getLocation(): $ResourceLocation;
        static create(): $SpriteContents;
        static getTexture(): $DynamicTexture;
        constructor();
        static get location(): $ResourceLocation;
        static get texture(): $DynamicTexture;
    }
    export class $SpriteContents$FrameInfo {
    }
    export class $Stitcher$Entry {
    }
    export interface $Stitcher$Entry {
        name(): $ResourceLocation;
        height(): number;
        width(): number;
    }
    export class $PreloadedTexture extends $SimpleTexture {
        getFuture(): $CompletableFuture<void>;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        blur: boolean;
        static LOGGER: $Logger;
        location: $ResourceLocation;
        id: number;
        constructor(resourceManager: $ResourceManager, location: $ResourceLocation_, backgroundExecutor: $Executor_);
        get future(): $CompletableFuture<void>;
    }
    export class $SpriteContents$Ticker implements $SpriteTicker, $TickerExtension {
        simulated$setPlaying(arg0: boolean): void;
        simulated$isPlaying(): boolean;
        close(): void;
        tickAndUpload(x: number, y: number): void;
        subFrame: number;
        animationInfo: $SpriteContents$AnimatedTexture;
        frame: number;
        constructor(animationInfo: $SpriteContents, interpolationData: $SpriteContents$AnimatedTexture, arg2: $SpriteContents$InterpolationData | null);
    }
    export class $SpriteContents implements $Stitcher$Entry, $AutoCloseable, $SpriteContentsExtension, $SpriteContentsExt {
        name(): $ResourceLocation;
        close(): void;
        height(): number;
        width(): number;
        metadata(): $ResourceMetadata;
        isTransparent(frame: number, x: number, y: number): boolean;
        upload(x: number, y: number, frameX: number, frameY: number, atlasData: $NativeImage[]): void;
        getOriginalImage(): $NativeImage;
        increaseMipLevel(mipLevel: number): void;
        getUniqueFrames(): $IntStream;
        uploadFirstFrame(x: number, y: number): void;
        axiom$setOpacity(opacity: number, x: number, y: number): void;
        simulated$setTicker(arg0: $SpriteContents$Ticker): void;
        simulated$getTicker(): $SpriteContents$Ticker;
        createTicker(): $SpriteTicker;
        animatedTexture: $SpriteContents$AnimatedTexture;
        byMipLevel: $NativeImage[];
        constructor(name: $ResourceLocation_, frameSize: $FrameSize_, originalImage: $NativeImage, metadata: $ResourceMetadata_);
        get originalImage(): $NativeImage;
        get uniqueFrames(): $IntStream;
    }
    export class $DynamicTexture extends $AbstractTexture implements $Dumpable {
        getPixels(): $NativeImage;
        setPixels(pixels: $NativeImage): void;
        upload(): void;
        dumpContents(resourceLocation: $ResourceLocation_, path: $Path_): void;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        blur: boolean;
        id: number;
        constructor(pixels: $NativeImage);
        constructor(width: number, height: number, useCalloc: boolean);
    }
    export class $SpriteContents$AnimatedTexture {
        getFrameX(frameIndex: number): number;
        getFrameY(frameIndex: number): number;
        getUniqueFrames(): $IntStream;
        uploadFirstFrame(x: number, y: number): void;
        createTicker(): $SpriteTicker;
        uploadFrame(x: number, y: number, frameIndex: number): void;
        frames: $List<$SpriteContents$FrameInfo>;
        this$0: $SpriteContents;
        get uniqueFrames(): $IntStream;
    }
    export class $TextureAtlas extends $AbstractTexture implements $Dumpable, $Tickable, $SpriteFinderImpl$SpriteFinderAccess, $ResourceTextureAtlasAccessor, $TextureAtlasExtension {
        location(): $ResourceLocation;
        tick(): void;
        getWidth(): number;
        getHeight(): number;
        handler$daj000$axiom$cycleAnimationFrames(ci: $CallbackInfo): void;
        maxSupportedTextureSize(): number;
        getTextures(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        upload(preparations: $SpriteLoader$Preparations_): void;
        dumpContents(resourceLocation: $ResourceLocation_, path: $Path_): void;
        getSprite(name: $ResourceLocation_): $TextureAtlasSprite;
        veil$hasTexture(arg0: $ResourceLocation_): boolean;
        updateFilter(preparations: $SpriteLoader$Preparations_): void;
        clearTextureData(): void;
        cycleAnimationFrames(): void;
        fabric_spriteFinder(): $SpriteFinderImpl;
        getMipLevel(): number;
        static NOT_ASSIGNED: number;
        /**
         * @deprecated
         */
        static LOCATION_BLOCKS: $ResourceLocation;
        mipmap: boolean;
        /**
         * @deprecated
         */
        static LOCATION_PARTICLES: $ResourceLocation;
        texturesByName: $Map<$ResourceLocation, $TextureAtlasSprite>;
        blur: boolean;
        id: number;
        constructor(location: $ResourceLocation_);
        get width(): number;
        get height(): number;
        get textures(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        get mipLevel(): number;
    }
    export class $Stitcher$Region<T extends $Stitcher$Entry> {
        walk(spriteLoader: $Stitcher$SpriteLoader_<T>): void;
        add(holder: $Stitcher$Holder_<T>): boolean;
        getY(): number;
        getX(): number;
        constructor(originX: number, originY: number, width: number, height: number);
        get y(): number;
        get x(): number;
    }
    export class $SimpleTexture extends $AbstractTexture {
        getTextureImage(resourceManager: $ResourceManager): $SimpleTexture$TextureImage;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        blur: boolean;
        static LOGGER: $Logger;
        location: $ResourceLocation;
        id: number;
        constructor(location: $ResourceLocation_);
    }
    export class $TextureManager implements $PreparableReloadListener, $Tickable, $AutoCloseable, $IdentifiableResourceReloadListener, $TextureManagerExtension {
        register(name: string, texture: $DynamicTexture): $ResourceLocation;
        register(path: $ResourceLocation_, texture: $AbstractTexture): void;
        close(): void;
        release(path: $ResourceLocation_): void;
        reload(stage: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        tick(): void;
        handler$zjp000$veil$applyLabel(arg0: $ResourceLocation_, arg1: $AbstractTexture, arg2: $CallbackInfo): void;
        veil$registerPreloadedTexture(arg0: $ResourceLocation_, arg1: $AbstractTexture, arg2: $Executor_): $CompletableFuture<any>;
        dumpAllSheets(path: $Path_): void;
        preload(path: $ResourceLocation_, backgroundExecutor: $Executor_): $CompletableFuture<void>;
        bindForSetup(path: $ResourceLocation_): void;
        getTexture(path: $ResourceLocation_, defaultTexture: $AbstractTexture): $AbstractTexture;
        getTexture(path: $ResourceLocation_): $AbstractTexture;
        getFabricId(): $ResourceLocation;
        getFabricDependencies(): $Collection<any>;
        modify$zlg000$veil$wrap(arg0: $AbstractTexture, arg1: $ResourceLocation_): $AbstractTexture;
        getName(): string;
        byPath: $Map<$ResourceLocation, $AbstractTexture>;
        static INTENTIONAL_MISSING_TEXTURE: $ResourceLocation;
        constructor(resourceManager: $ResourceManager);
        get fabricId(): $ResourceLocation;
        get fabricDependencies(): $Collection<any>;
        get name(): string;
    }
    export class $TextureAtlasSprite {
        wrap(consumer: $VertexConsumer): $VertexConsumer;
        contents(): $SpriteContents;
        getUOffset(u: number): number;
        getVOffset(u: number): number;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        uvShrinkRatio(): number;
        getY(): number;
        getX(): number;
        atlasLocation(): $ResourceLocation;
        getPixelRGBA(arg0: number, arg1: number, arg2: number): number;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        getV1(): number;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        getV0(): number;
        getU(u: number): number;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        getU1(): number;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        getU0(): number;
        getV(u: number): number;
        uploadFirstFrame(): void;
        createTicker(): $TextureAtlasSprite$Ticker;
        x: number;
        y: number;
        constructor(atlasLocation: $ResourceLocation_, contents: $SpriteContents, originX: number, originY: number, x: number, y: number);
        get v1(): number;
        get v0(): number;
        get u1(): number;
        get u0(): number;
    }
    export class $SimpleTexture$TextureImage implements $Closeable {
    }
    export class $MipmapGenerator {
        static generateMipLevels(images: $NativeImage[], mipLevel: number): $NativeImage[];
    }
    export class $TextureAtlasSprite$Ticker {
    }
    export interface $TextureAtlasSprite$Ticker extends $AutoCloseable {
        close(): void;
        tickAndUpload(): void;
    }
}
