import { $Long2ObjectFunction_, $Long2ObjectMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $SectionBufferBuilderPack, $RenderBuffers, $SectionBufferBuilderPool, $RenderType, $LevelRenderer } from "@package/net/minecraft/client/renderer";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $TerrainRenderContext } from "@package/net/fabricmc/fabric/impl/client/indigo/renderer/render";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $List, $Set_, $Collection_, $List_, $Map, $Set } from "@package/java/util";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $RenderSectionAccessor } from "@package/dev/ryanhcode/sable/mixin/sublevel_render";
import { $AccessChunkRendererRegion } from "@package/net/fabricmc/fabric/impl/client/indigo/renderer/accessor";
import { $BlockRenderDispatcher } from "@package/net/minecraft/client/renderer/block";
import { $AddSectionGeometryEvent$AdditionalSectionRenderer_ } from "@package/net/neoforged/neoforge/client/event";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Supplier_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos$MutableBlockPos, $Holder, $BlockPos_, $Direction_, $SectionPos } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RenderAttachedBlockView } from "@package/net/fabricmc/fabric/api/rendering/data/v1";
import { $BlockEntityRenderDispatcher } from "@package/net/minecraft/client/renderer/blockentity";
import { $Enum, $Comparable, $Object } from "@package/java/lang";
import { $BlockAndTintGetter, $ClipContext, $ClipBlockStateContext, $LightLayer_, $ChunkPos, $Level, $ColorResolver_, $Level_ } from "@package/net/minecraft/world/level";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $SubLevelContainerHolder } from "@package/dev/ryanhcode/sable/mixinterface/plot";
import { $RenderDataMapConsumer } from "@package/net/fabricmc/fabric/impl/blockview/client";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Stream } from "@package/java/util/stream";
import { $AtomicReference } from "@package/java/util/concurrent/atomic";
import { $MeshData, $MeshData$SortState, $VertexSorting_, $ByteBufferBuilder$Result, $VertexSorting, $VertexBuffer } from "@package/com/mojang/blaze3d/vertex";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $RenderSectionExtension, $RenderSectionExtension$DirtyListener_ } from "@package/dev/ryanhcode/sable/mixinterface/sublevel_render/vanilla";
import { $AABB_, $Vec3, $AABB, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $SubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";

declare module "@package/net/minecraft/client/renderer/chunk" {
    export class $SectionRenderDispatcher$RenderSection implements $RenderSectionAccessor, $RenderSectionExtension {
        createVertexSorting(): $VertexSorting;
        sable$addDirtyListener(arg0: $RenderSectionExtension$DirtyListener_): void;
        isDirty(): boolean;
        getBuffer(renderType: $RenderType): $VertexBuffer;
        cancelTasks(): boolean;
        rebuildSectionAsync(sectionRenderDispatcher: $SectionRenderDispatcher, regionCache: $RenderRegionCache): void;
        updateGlobalBlockEntities(blockEntities: $Collection_<$BlockEntity>): void;
        releaseBuffers(): void;
        setDirty(playerChanged: boolean): void;
        getOrigin(): $BlockPos;
        isAxisAlignedWith(x: number, y: number, z: number): boolean;
        resortTransparency(renderType: $RenderType, sectionRenderDispatcher: $SectionRenderDispatcher): boolean;
        isDirtyFromPlayer(): boolean;
        setNotDirty(): void;
        getCompiled(): $SectionRenderDispatcher$CompiledSection;
        getBoundingBox(): $AABB;
        getRelativeOrigin(direction: $Direction_): $BlockPos;
        hasAllNeighbors(): boolean;
        setOrigin(x: number, y: number, z: number): void;
        compileSync(regionCache: $RenderRegionCache): void;
        getDistToPlayerSqr(): number;
        setCompiled(compiled: $SectionRenderDispatcher$CompiledSection): void;
        createCompileTask(regionCache: $RenderRegionCache): $SectionRenderDispatcher$RenderSection$CompileTask;
        sable$setListening(playerChanged: boolean): void;
        handler$bpg000$sable$setDirty(arg0: boolean, arg1: $CallbackInfo): void;
        getGlobalBlockEntities(): $Set<$BlockEntity>;
        compiled: $AtomicReference<$SectionRenderDispatcher$CompiledSection>;
        static SIZE: number;
        origin: $BlockPos$MutableBlockPos;
        this$0: $SectionRenderDispatcher;
        index: number;
        constructor(index: $SectionRenderDispatcher, originX: number, originY: number, originZ: number, arg4: number);
        get dirtyFromPlayer(): boolean;
        get boundingBox(): $AABB;
        get distToPlayerSqr(): number;
        get globalBlockEntities(): $Set<$BlockEntity>;
    }
    export class $SectionRenderDispatcher {
        uploadSectionIndexBuffer(result: $ByteBufferBuilder$Result, vertexBuffer: $VertexBuffer): $CompletableFuture<void>;
        schedule(task: $SectionRenderDispatcher$RenderSection$CompileTask): void;
        setLevel(level: $ClientLevel): void;
        dispose(): void;
        uploadAllPendingUploads(): void;
        setCamera(camera: $Vec3_): void;
        getStats(): string;
        isQueueEmpty(): boolean;
        rebuildSectionSync(section: $SectionRenderDispatcher$RenderSection, regionCache: $RenderRegionCache): void;
        blockUntilClear(): void;
        getCameraPosition(): $Vec3;
        getToBatchCount(): number;
        getToUpload(): number;
        uploadSectionLayer(meshData: $MeshData, vertexBuffer: $VertexBuffer): $CompletableFuture<void>;
        getFreeBufferCount(): number;
        bufferPool: $SectionBufferBuilderPool;
        renderer: $LevelRenderer;
        sectionCompiler: $SectionCompiler;
        level: $ClientLevel;
        fixedBuffers: $SectionBufferBuilderPack;
        constructor(level: $ClientLevel, renderer: $LevelRenderer, executor: $Executor_, buffers: $RenderBuffers, blockRenderer: $BlockRenderDispatcher, blockEntityRenderer: $BlockEntityRenderDispatcher);
        set camera(value: $Vec3_);
        get stats(): string;
        get queueEmpty(): boolean;
        get cameraPosition(): $Vec3;
        get toBatchCount(): number;
        get toUpload(): number;
        get freeBufferCount(): number;
    }
    export class $RenderRegionCache$ChunkInfo {
        chunk(): $LevelChunk;
        renderChunk(): $RenderChunk;
        constructor(chunk: $LevelChunk);
    }
    export class $RenderChunk {
    }
    export class $SectionRenderDispatcher$CompiledSection {
        isEmpty(renderType: $RenderType): boolean;
        getRenderableBlockEntities(): $List<$BlockEntity>;
        hasNoRenderableLayers(): boolean;
        facesCanSeeEachother(face1: $Direction_, face2: $Direction_): boolean;
        transparencyState: $MeshData$SortState;
        hasBlocks: $Set<$RenderType>;
        visibilitySet: $VisibilitySet;
        static UNCOMPILED: $SectionRenderDispatcher$CompiledSection;
        static EMPTY: $SectionRenderDispatcher$CompiledSection;
        renderableBlockEntities: $List<$BlockEntity>;
        constructor();
    }
    export class $RenderChunkRegion implements $BlockAndTintGetter, $AccessChunkRendererRegion, $RenderDataMapConsumer, $SubLevelContainerHolder, $RenderAttachedBlockView {
        static index(minX: number, minZ: number, x: number, z: number): number;
        getHeight(): number;
        /**
         * Retrieves model data for a block at the given position.
         */
        getModelData(pos: $BlockPos_): $ModelData;
        getLightEngine(): $LevelLightEngine;
        getBlockTint(pos: $BlockPos_, colorResolver: $ColorResolver_): number;
        getBiomeFabric(arg0: $BlockPos_): $Holder<any>;
        /**
         * Get the `AuxiliaryLightManager` of the chunk at the given `ChunkPos`.
         * 
         * The light manager must be used to hold light values controlled by dynamic data from `BlockEntity`s
         * to ensure access to the light data is thread-safe and the data is available during chunk load from disk
         * where `BlockEntity`s are not yet added to the chunk.
         */
        getAuxLightManager(pos: $ChunkPos): $AuxiliaryLightManager;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        hasBiomes(): boolean;
        /**
         * Computes the shade for a given normal.
         * Alternate version of the vanilla method taking in a `Direction`.
         */
        getShade(normalX: number, normalY: number, normalZ: number, shade: boolean): number;
        getShade(direction: $Direction_, shade: boolean): number;
        fabric_acceptRenderDataMap(arg0: $Long2ObjectMap<any>): void;
        getBlockState(pos: $BlockPos_): $BlockState;
        getMinBuildHeight(): number;
        getFluidState(pos: $BlockPos_): $FluidState;
        getBlockEntity(pos: $BlockPos_): $BlockEntity;
        sable$getPlotContainer(): $SubLevelContainer;
        fabric_setRenderer(arg0: $TerrainRenderContext): void;
        fabric_getRenderer(): $TerrainRenderContext;
        getRawBrightness(blockPos: $BlockPos_, amount: number): number;
        getBrightness(lightType: $LightLayer_, blockPos: $BlockPos_): number;
        canSeeSky(pos: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        getBlockEntityRenderAttachment(arg0: $BlockPos_): $Object;
        isBlockInLine(context: $ClipBlockStateContext): $BlockHitResult;
        getBlockFloorHeight(pos: $BlockPos_): number;
        getBlockFloorHeight(shape: $VoxelShape, belowShapeSupplier: $Supplier_<$VoxelShape>): number;
        getBlockStates(area: $AABB_): $Stream<$BlockState>;
        getLightEmission(pos: $BlockPos_): number;
        getMaxLightLevel(): number;
        clip(failContext: $ClipContext): $BlockHitResult;
        clipWithInteractionOverride(startVec: $Vec3_, endVec: $Vec3_, pos: $BlockPos_, shape: $VoxelShape, state: $BlockState_): $BlockHitResult;
        getBlockEntity<T extends $BlockEntity>(pos: $BlockPos_, blockEntityType: $BlockEntityType_<T>): (T) | undefined;
        getSectionIndex(sectionIndex: number): number;
        getMinSection(): number;
        getMaxSection(): number;
        getSectionsCount(): number;
        isOutsideBuildHeight(pos: $BlockPos_): boolean;
        isOutsideBuildHeight(y: number): boolean;
        getMaxBuildHeight(): number;
        getSectionYFromSectionIndex(sectionIndex: number): number;
        getSectionIndexFromSectionY(sectionIndex: number): number;
        /**
         * Get the `AuxiliaryLightManager` of the chunk containing the given `BlockPos`.
         * 
         * The light manager must be used to hold light values controlled by dynamic data from `BlockEntity`s
         * to ensure access to the light data is thread-safe and the data is available during chunk load from disk
         * where `BlockEntity`s are not yet added to the chunk.
         */
        getAuxLightManager(pos: $BlockPos_): $AuxiliaryLightManager;
        static RADIUS: number;
        level: $Level;
        chunks: $RenderChunk[];
        static SIZE: number;
        /**
         * @deprecated
         */
        constructor(level: $Level_, minChunkX: number, minChunkZ: number, chunks: $RenderChunk[]);
        constructor(arg0: $Level_, arg1: number, arg2: number, arg3: $RenderChunk[], arg4: $Long2ObjectFunction_<$ModelData>);
        get height(): number;
        get lightEngine(): $LevelLightEngine;
        get minBuildHeight(): number;
        get maxLightLevel(): number;
        get minSection(): number;
        get maxSection(): number;
        get sectionsCount(): number;
        get maxBuildHeight(): number;
    }
    export class $SectionCompiler {
        compile(arg0: $SectionPos, arg1: $RenderChunkRegion, arg2: $VertexSorting_, arg3: $SectionBufferBuilderPack, arg4: $List_<$AddSectionGeometryEvent$AdditionalSectionRenderer_>): $SectionCompiler$Results;
        compile(sectionPos: $SectionPos, region: $RenderChunkRegion, vertexSorting: $VertexSorting_, sectionBufferBuilderPack: $SectionBufferBuilderPack): $SectionCompiler$Results;
        constructor(blockRenderer: $BlockRenderDispatcher, blockEntityRenderer: $BlockEntityRenderDispatcher);
    }
    export class $SectionRenderDispatcher$RenderSection$CompileTask implements $Comparable<$SectionRenderDispatcher$RenderSection$CompileTask> {
    }
    export class $VisGraph {
        resolve(): $VisibilitySet;
        setOpaque(pos: $BlockPos_): void;
        constructor();
        set opaque(value: $BlockPos_);
    }
    export class $VisibilitySet {
        add(faces: $Set_<$Direction_>): void;
        set(face: $Direction_, otherFace: $Direction_, visible: boolean): void;
        setAll(visible: boolean): void;
        visibilityBetween(face: $Direction_, otherFace: $Direction_): boolean;
        constructor();
        set all(value: boolean);
    }
    export class $RenderRegionCache {
        createRegion(arg0: $Level_, arg1: $SectionPos, arg2: boolean): $RenderChunkRegion;
        createRegion(level: $Level_, sectionPos: $SectionPos): $RenderChunkRegion;
        constructor();
    }
    export class $SectionRenderDispatcher$RenderSection$RebuildTask extends $SectionRenderDispatcher$RenderSection$CompileTask {
    }
    export class $SectionRenderDispatcher$RenderSection$ResortTransparencyTask extends $SectionRenderDispatcher$RenderSection$CompileTask {
    }
    export class $SectionRenderDispatcher$SectionTaskResult extends $Enum<$SectionRenderDispatcher$SectionTaskResult> {
    }
    /**
     * Values that may be interpreted as {@link $SectionRenderDispatcher$SectionTaskResult}.
     */
    export type $SectionRenderDispatcher$SectionTaskResult_ = "successful" | "cancelled";
    export class $SectionCompiler$Results {
        release(): void;
        transparencyState: $MeshData$SortState;
        visibilitySet: $VisibilitySet;
        globalBlockEntities: $List<$BlockEntity>;
        blockEntities: $List<$BlockEntity>;
        renderedLayers: $Map<$RenderType, $MeshData>;
        constructor();
    }
}
