import { $HTTPPayload, $HTTPResponse } from "@package/dev/latvian/apps/tinyserver/http/response";
import { $DateTimeFormatter } from "@package/java/time/format";
import { $TextureTarget } from "@package/com/mojang/blaze3d/pipeline";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $Minecraft } from "@package/net/minecraft/client";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $UUID, $Map_, $UUID_, $Map } from "@package/java/util";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $ByteBuffer } from "@package/java/nio";
import { $Supplier_ } from "@package/java/util/function";
import { $Holder, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $CachedComponentObject_, $CachedComponentObject } from "@package/dev/latvian/mods/kubejs/util";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Record, $Object } from "@package/java/lang";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $BlockAndTintGetter, $ClipContext, $ClipBlockStateContext, $LightLayer_, $LevelReader, $ChunkPos, $ColorResolver_ } from "@package/net/minecraft/world/level";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $BakedQuad, $ItemTransform } from "@package/net/minecraft/client/renderer/block/model";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexConsumer, $VertexFormatElement_, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $KJSHTTPRequest, $LocalWebServerAPIRegistry_, $LocalWebServerRegistry } from "@package/dev/latvian/mods/kubejs/web";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $AABB_, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Matrix4f, $Vector3f, $Matrix3f } from "@package/org/joml";

declare module "@package/dev/latvian/mods/kubejs/web/local/client" {
    export class $ImageGenerator$RenderImage extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ImageGenerator$RenderImage}.
     */
    export type $ImageGenerator$RenderImage_ = { size?: number, graphics?: $GuiGraphics, mc?: $Minecraft,  } | [size?: number, graphics?: $GuiGraphics, mc?: $Minecraft, ];
    export class $FakeClientWorld implements $BlockAndTintGetter {
        getHeight(): number;
        getLightEngine(): $LevelLightEngine;
        getBlockTint(pos: $BlockPos_, colorResolver: $ColorResolver_): number;
        getShade(direction: $Direction_, shade: boolean): number;
        getBlockState(pos: $BlockPos_): $BlockState;
        getMinBuildHeight(): number;
        getFluidState(pos: $BlockPos_): $FluidState;
        getBlockEntity(pos: $BlockPos_): $BlockEntity;
        getRawBrightness(arg0: $BlockPos_, arg1: number): number;
        getBrightness(arg0: $LightLayer_, arg1: $BlockPos_): number;
        canSeeSky(arg0: $BlockPos_): boolean;
        isBlockInLine(arg0: $ClipBlockStateContext): $BlockHitResult;
        getBlockFloorHeight(arg0: $BlockPos_): number;
        getBlockFloorHeight(arg0: $VoxelShape, arg1: $Supplier_<$VoxelShape>): number;
        getBlockStates(arg0: $AABB_): $Stream<$BlockState>;
        getLightEmission(arg0: $BlockPos_): number;
        getMaxLightLevel(): number;
        clip(arg0: $ClipContext): $BlockHitResult;
        clipWithInteractionOverride(arg0: $Vec3_, arg1: $Vec3_, arg2: $BlockPos_, arg3: $VoxelShape, arg4: $BlockState_): $BlockHitResult;
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>): (T) | undefined;
        getShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
        getSectionIndex(arg0: number): number;
        getMinSection(): number;
        getMaxSection(): number;
        getSectionsCount(): number;
        isOutsideBuildHeight(arg0: $BlockPos_): boolean;
        isOutsideBuildHeight(arg0: number): boolean;
        getMaxBuildHeight(): number;
        getSectionYFromSectionIndex(arg0: number): number;
        getSectionIndexFromSectionY(arg0: number): number;
        getModelData(arg0: $BlockPos_): $ModelData;
        getAuxLightManager(arg0: $ChunkPos): $AuxiliaryLightManager;
        getAuxLightManager(arg0: $BlockPos_): $AuxiliaryLightManager;
        getBiomeFabric(arg0: $BlockPos_): $Holder<$Biome>;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        hasBiomes(): boolean;
        parent: $LevelReader;
        blockState: $BlockState;
        biome: $Biome;
        constructor(parent: $LevelReader, blockState: $BlockState_, biome: $ResourceKey_<$Biome>);
        get height(): number;
        get lightEngine(): $LevelLightEngine;
        get minBuildHeight(): number;
        get maxLightLevel(): number;
        get minSection(): number;
        get maxSection(): number;
        get sectionsCount(): number;
        get maxBuildHeight(): number;
    }
    export class $KubeJSClientWeb {
        static createReverseItemSearch(original: $Map_<$UUID_, $CachedComponentObject_<$Item_, $ItemStack_>>): $Map<$CachedComponentObject<$Item, $ItemStack>, $UUID>;
        static register(registry: $LocalWebServerRegistry): void;
        static registerWithAuth(registry: $LocalWebServerRegistry): void;
        static registerAPIs(registry: $LocalWebServerAPIRegistry_): void;
        static createItemSearch(useSearchTab: boolean): $Map<$UUID, $CachedComponentObject<$Item, $ItemStack>>;
        constructor();
    }
    export class $MovedVertexConsumer extends $Record implements $VertexConsumer {
        parent(): $VertexConsumer;
        setColor(red: number, green: number, blue: number, alpha: number): $VertexConsumer;
        setUv1(u: number, v: number): $VertexConsumer;
        setUv2(u: number, v: number): $VertexConsumer;
        setNormal(normalX: number, normalY: number, normalZ: number): $VertexConsumer;
        addVertex(x: number, y: number, z: number): $VertexConsumer;
        setUv(u: number, v: number): $VertexConsumer;
        pose(): $PoseStack$Pose;
        setColor(arg0: number): $VertexConsumer;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        setLight(arg0: number): $VertexConsumer;
        setNormal(arg0: $PoseStack$Pose, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        setOverlay(arg0: number): $VertexConsumer;
        addVertex(arg0: $Vector3f): $VertexConsumer;
        addVertex(arg0: $PoseStack$Pose, arg1: $Vector3f): $VertexConsumer;
        addVertex(arg0: $PoseStack$Pose, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addVertex(arg0: $Matrix4f, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addVertex(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        setWhiteAlpha(arg0: number): $VertexConsumer;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean): void;
        misc(arg0: $VertexFormatElement_, ...arg1: number[]): $VertexConsumer;
        applyBakedNormals(arg0: $Vector3f, arg1: $ByteBuffer, arg2: $Matrix3f): void;
        applyBakedLighting(arg0: number, arg1: $ByteBuffer): number;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean): void;
        constructor(parent: $VertexConsumer, pose: $PoseStack$Pose);
        set light(value: number);
        set overlay(value: number);
        set whiteAlpha(value: number);
    }
    /**
     * Values that may be interpreted as {@link $MovedVertexConsumer}.
     */
    export type $MovedVertexConsumer_ = { pose?: $PoseStack$Pose, parent?: $VertexConsumer,  } | [pose?: $PoseStack$Pose, parent?: $VertexConsumer, ];
    export class $ImageGenerator$BodyKey extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ImageGenerator$BodyKey}.
     */
    export type $ImageGenerator$BodyKey_ = { bytes?: number[],  } | [bytes?: number[], ];
    export class $ImageGenerator$CachedImage extends $Record {
        pathStr(): string;
        response(): $HTTPResponse;
        constructor(response: $HTTPResponse, pathStr: string);
    }
    /**
     * Values that may be interpreted as {@link $ImageGenerator$CachedImage}.
     */
    export type $ImageGenerator$CachedImage_ = { pathStr?: string, response?: $HTTPResponse,  } | [pathStr?: string, response?: $HTTPResponse, ];
    export class $ImageGenerator$ContentGrabber extends $HTTPPayload {
        static DATE_TIME_FORMATTER: $DateTimeFormatter;
    }
    export class $ImageGenerator {
        static block(req: $KJSHTTPRequest): $HTTPResponse;
        static item(req: $KJSHTTPRequest): $HTTPResponse;
        static itemTag(req: $KJSHTTPRequest): $HTTPResponse;
        static renderFluid(req: $KJSHTTPRequest, stack: $FluidStack_, wildcard: boolean): $ImageGenerator$CachedImage;
        static fluid(req: $KJSHTTPRequest): $HTTPResponse;
        static blockTag(req: $KJSHTTPRequest): $HTTPResponse;
        static renderBlock(req: $KJSHTTPRequest, state: $BlockState_, wildcard: boolean): $ImageGenerator$CachedImage;
        static renderItem(req: $KJSHTTPRequest, imageSize: number, stack: $ItemStack_, wildcard: boolean): $ImageGenerator$CachedImage;
        static fluidTag(req: $KJSHTTPRequest): $HTTPResponse;
        static renderAllItems(req: $KJSHTTPRequest): $HTTPResponse;
        static getCanvas(size: number): $TextureTarget;
        static WILDCARD_TEXTURE: $ResourceLocation;
        static FB_CACHE: $Int2ObjectMap<$TextureTarget>;
        static ROTATED_BLOCK_TRANSFORM: $ItemTransform;
        constructor();
    }
}
