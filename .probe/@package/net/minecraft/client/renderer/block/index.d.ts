import { $BlockAndTintGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $MultiBufferSource_, $BlockEntityWithoutLevelRenderer, $RenderType } from "@package/net/minecraft/client/renderer";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $BakedModel, $ModelResourceLocation, $ModelManager } from "@package/net/minecraft/client/resources/model";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ResourceManager, $ResourceManagerReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $Map_, $BitSet, $Collection } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BlockColors } from "@package/net/minecraft/client/color/block";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexConsumer, $PoseStack, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Comparable_, $ThreadLocal, $Enum } from "@package/java/lang";
import { $ModelBlockRendererCacheExtension } from "@package/dev/ryanhcode/sable/mixinterface/dynamic_directional_shading";
export * as model from "@package/net/minecraft/client/renderer/block/model";

declare module "@package/net/minecraft/client/renderer/block" {
    export class $ModelBlockRenderer$Cache implements $ModelBlockRendererCacheExtension {
        enable(): void;
        disable(): void;
        getLightColor(state: $BlockState_, level: $BlockAndTintGetter, pos: $BlockPos_): number;
        getShadeBrightness(state: $BlockState_, level: $BlockAndTintGetter, pos: $BlockPos_): number;
        sable$setOnSubLevel(arg0: boolean): void;
        sable$getOnSubLevel(): boolean;
    }
    export class $BlockRenderDispatcher implements $ResourceManagerReloadListener, $IdentifiableResourceReloadListener {
        onResourceManagerReload(resourceManager: $ResourceManager): void;
        renderBreakingTexture(arg0: $BlockState_, arg1: $BlockPos_, arg2: $BlockAndTintGetter, arg3: $PoseStack, arg4: $VertexConsumer, arg5: $ModelData): void;
        /**
         * @deprecated
         */
        renderBreakingTexture(state: $BlockState_, pos: $BlockPos_, level: $BlockAndTintGetter, poseStack: $PoseStack, consumer: $VertexConsumer): void;
        getBlockModel(state: $BlockState_): $BakedModel;
        getLiquidBlockRenderer(): $LiquidBlockRenderer;
        renderBatched(state: $BlockState_, pos: $BlockPos_, level: $BlockAndTintGetter, poseStack: $PoseStack, consumer: $VertexConsumer, checkSides: boolean, random: $RandomSource): void;
        renderBatched(arg0: $BlockState_, arg1: $BlockPos_, arg2: $BlockAndTintGetter, arg3: $PoseStack, arg4: $VertexConsumer, arg5: boolean, arg6: $RandomSource, arg7: $ModelData, arg8: $RenderType): void;
        renderLiquid(pos: $BlockPos_, level: $BlockAndTintGetter, consumer: $VertexConsumer, blockState: $BlockState_, fluidState: $FluidState): void;
        getModelRenderer(): $ModelBlockRenderer;
        renderSingleBlock(arg0: $BlockState_, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: number, arg4: number, arg5: $ModelData, arg6: $RenderType): void;
        /**
         * @deprecated
         */
        renderSingleBlock(state: $BlockState_, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        getFabricId(): $ResourceLocation;
        getBlockModelShaper(): $BlockModelShaper;
        getFabricDependencies(): $Collection<any>;
        wrapMethod$zff000$aeronautics$renderBreakingTexture(arg0: $BlockState_, arg1: $BlockPos_, arg2: $BlockAndTintGetter, arg3: $PoseStack, arg4: $VertexConsumer, arg5: $ModelData, arg6: $Operation_<any>): void;
        reload(preparationBarrier: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        getName(): string;
        modelRenderer: $ModelBlockRenderer;
        constructor(blockModelShaper: $BlockModelShaper, blockEntityRenderer: $BlockEntityWithoutLevelRenderer, blockColors: $BlockColors);
        get liquidBlockRenderer(): $LiquidBlockRenderer;
        get fabricId(): $ResourceLocation;
        get blockModelShaper(): $BlockModelShaper;
        get fabricDependencies(): $Collection<any>;
        get name(): string;
    }
    export class $ModelBlockRenderer$AmbientVertexRemap extends $Enum<$ModelBlockRenderer$AmbientVertexRemap> {
    }
    /**
     * Values that may be interpreted as {@link $ModelBlockRenderer$AmbientVertexRemap}.
     */
    export type $ModelBlockRenderer$AmbientVertexRemap_ = "down" | "up" | "north" | "south" | "west" | "east";
    export class $ModelBlockRenderer$AmbientOcclusionFace {
        calculate(level: $BlockAndTintGetter, state: $BlockState_, pos: $BlockPos_, direction: $Direction_, shape: number[], shapeFlags: $BitSet, shade: boolean): void;
        brightness: number[];
        lightmap: number[];
        constructor();
    }
    export class $ModelBlockRenderer$SizeInfo extends $Enum<$ModelBlockRenderer$SizeInfo> {
    }
    /**
     * Values that may be interpreted as {@link $ModelBlockRenderer$SizeInfo}.
     */
    export type $ModelBlockRenderer$SizeInfo_ = "down" | "up" | "north" | "south" | "west" | "east" | "flip_down" | "flip_up" | "flip_north" | "flip_south" | "flip_west" | "flip_east";
    export class $ModelBlockRenderer {
        static clearCache(): void;
        /**
         * Calculates the shape and corresponding flags for the specified `direction` and `vertices`, storing the resulting shape in the specified `shape` array and the shape flags in `shapeFlags`.
         */
        calculateShape(level: $BlockAndTintGetter, state: $BlockState_, pos: $BlockPos_, vertices: number[], direction: $Direction_, shape: number[] | null, shapeFlags: $BitSet): void;
        static enableCaching(): void;
        tesselateBlock(arg0: $BlockAndTintGetter, arg1: $BakedModel, arg2: $BlockState_, arg3: $BlockPos_, arg4: $PoseStack, arg5: $VertexConsumer, arg6: boolean, arg7: $RandomSource, arg8: number, arg9: number, arg10: $ModelData, arg11: $RenderType): void;
        /**
         * @deprecated
         */
        tesselateBlock(level: $BlockAndTintGetter, model: $BakedModel, state: $BlockState_, pos: $BlockPos_, poseStack: $PoseStack, consumer: $VertexConsumer, checkSides: boolean, random: $RandomSource, seed: number, arg9: number): void;
        wrapOperation$bna000$sable$getShade(arg0: $BlockAndTintGetter, arg1: $Direction_, arg2: boolean, arg3: $Operation_<any>): number;
        renderModel(arg0: $PoseStack$Pose, arg1: $VertexConsumer, arg2: $BlockState_ | null, arg3: $BakedModel, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: $ModelData, arg10: $RenderType): void;
        /**
         * @deprecated
         */
        renderModel(pose: $PoseStack$Pose, consumer: $VertexConsumer, state: $BlockState_ | null, model: $BakedModel, red: number, green: number, blue: number, packedLight: number, packedOverlay: number): void;
        tesselateWithAO(arg0: $BlockAndTintGetter, arg1: $BakedModel, arg2: $BlockState_, arg3: $BlockPos_, arg4: $PoseStack, arg5: $VertexConsumer, arg6: boolean, arg7: $RandomSource, arg8: number, arg9: number, arg10: $ModelData, arg11: $RenderType): void;
        /**
         * @deprecated
         */
        tesselateWithAO(level: $BlockAndTintGetter, model: $BakedModel, state: $BlockState_, pos: $BlockPos_, poseStack: $PoseStack, consumer: $VertexConsumer, checkSides: boolean, random: $RandomSource, seed: number, arg9: number): void;
        /**
         * @deprecated
         */
        tesselateWithoutAO(level: $BlockAndTintGetter, model: $BakedModel, state: $BlockState_, pos: $BlockPos_, poseStack: $PoseStack, consumer: $VertexConsumer, checkSides: boolean, random: $RandomSource, seed: number, arg9: number): void;
        tesselateWithoutAO(arg0: $BlockAndTintGetter, arg1: $BakedModel, arg2: $BlockState_, arg3: $BlockPos_, arg4: $PoseStack, arg5: $VertexConsumer, arg6: boolean, arg7: $RandomSource, arg8: number, arg9: number, arg10: $ModelData, arg11: $RenderType): void;
        static CACHE: $ThreadLocal<$ModelBlockRenderer$Cache>;
        static DIRECTIONS: $Direction[];
        constructor(blockColors: $BlockColors);
    }
    export class $BlockModelShaper {
        getModelManager(): $ModelManager;
        getBlockModel(state: $BlockState_): $BakedModel;
        /**
         * @deprecated
         */
        getParticleIcon(state: $BlockState_): $TextureAtlasSprite;
        static stateToModelLocation(location: $ResourceLocation_, state: $BlockState_): $ModelResourceLocation;
        static stateToModelLocation(state: $BlockState_): $ModelResourceLocation;
        replaceCache(modelByStateCache: $Map_<$BlockState_, $BakedModel>): void;
        getTexture(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): $TextureAtlasSprite;
        static statePropertiesToString(propertyValues: $Map_<$Property<never>, $Comparable_<never>>): string;
        constructor(modelManager: $ModelManager);
        get modelManager(): $ModelManager;
    }
    export class $LiquidBlockRenderer {
        handler$zdn000$fabric_rendering_fluids_v1$onHeadRender(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $VertexConsumer, arg3: $BlockState_, arg4: $FluidState, arg5: $CallbackInfo): void;
        setupSprites(): void;
        tesselate(level: $BlockAndTintGetter, pos: $BlockPos_, buffer: $VertexConsumer, blockState: $BlockState_, fluidState: $FluidState): void;
        static shouldRenderFace(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $FluidState, arg3: $BlockState_, arg4: $Direction_, arg5: $BlockState_): boolean;
        static shouldRenderFace(level: $BlockAndTintGetter, pos: $BlockPos_, fluidState: $FluidState, blockState: $BlockState_, side: $Direction_, neighborFluid: $FluidState): boolean;
        handler$zdn000$fabric_rendering_fluids_v1$onResourceReloadReturn(arg0: $CallbackInfo): void;
        constructor();
    }
    export class $ModelBlockRenderer$AdjacencyInfo extends $Enum<$ModelBlockRenderer$AdjacencyInfo> {
    }
    /**
     * Values that may be interpreted as {@link $ModelBlockRenderer$AdjacencyInfo}.
     */
    export type $ModelBlockRenderer$AdjacencyInfo_ = "down" | "up" | "north" | "south" | "west" | "east";
}
