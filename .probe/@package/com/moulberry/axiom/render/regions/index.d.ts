import { $FabricBlockView } from "@package/net/fabricmc/fabric/api/blockview/v2";
import { $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $AxiomWorldRenderContext_ } from "@package/com/moulberry/axiom/render";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ListTag_ } from "@package/net/minecraft/nbt";
import { $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $RenderTarget } from "@package/com/mojang/blaze3d/pipeline";
import { $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $GameEvent, $GameEvent$Context_ } from "@package/net/minecraft/world/level/gameevent";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $Camera } from "@package/net/minecraft/client";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $List, $UUID_, $List_ } from "@package/java/util";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $Position2ObjectMap, $PositionConsumer_ } from "@package/com/moulberry/axiom/collections";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $RandomSource } from "@package/net/minecraft/util";
import { $WorldBorder } from "@package/net/minecraft/world/level/border";
import { $DifficultyInstance, $Difficulty } from "@package/net/minecraft/world";
import { $Supplier_, $Predicate_ } from "@package/java/util/function";
import { $SoundEvent_, $SoundSource_ } from "@package/net/minecraft/sounds";
import { $BlockPos, $Holder_, $Direction$Axis_, $Holder, $BlockPos_, $Direction_, $RegistryAccess, $Registry, $Holder$Reference, $HolderLookup } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RenderAttachedBlockView } from "@package/net/fabricmc/fabric/api/rendering/data/v1";
import { $ChunkStatus_ } from "@package/net/minecraft/world/level/chunk/status";
import { $TargetingConditions } from "@package/net/minecraft/world/entity/ai/targeting";
import { $Class, $Object, $Iterable } from "@package/java/lang";
import { $Heightmap$Types_ } from "@package/net/minecraft/world/level/levelgen";
import { $EntityTypeTest } from "@package/net/minecraft/world/level/entity";
import { $TickPriority_, $LevelTickAccess } from "@package/net/minecraft/world/ticks";
import { $BlockAndTintGetter, $ClipContext, $LevelAccessor, $ClipBlockStateContext, $LightLayer_, $ChunkPos, $BlockGetter, $EntityGetter, $ColorResolver_, $Level_ } from "@package/net/minecraft/world/level";
import { $Fluid, $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Biome, $BiomeManager } from "@package/net/minecraft/world/level/biome";
import { $ChunkSource, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $LevelData } from "@package/net/minecraft/world/level/storage";
import { $BlockRegion } from "@package/com/moulberry/axiomclientapi/regions";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $AABB_, $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Matrix4f, $Quaternionf } from "@package/org/joml";

declare module "@package/com/moulberry/axiom/render/regions" {
    export class $ChunkedBlockRegion implements $FabricBlockView, $BlockAndTintGetter, $LevelAccessor, $BlockRegion, $RenderAttachedBlockView {
        min(): $BlockPos;
        max(): $BlockPos;
        clear(): void;
        isEmpty(): boolean;
        count(): number;
        save(list: $ListTag_): void;
        flip(axis: $Direction$Axis_): $ChunkedBlockRegion;
        forEachEntry(consumer: $PositionConsumer_<$BlockState>): void;
        rotate(axis: $Direction$Axis_, count: number): $ChunkedBlockRegion;
        getHeight(types: $Heightmap$Types_, i: number, j: number): number;
        getHeight(): number;
        dimensionType(): $DimensionType;
        getRandom(): $RandomSource;
        scheduleTick(blockPos: $BlockPos_, block: $Block_, i: number): void;
        scheduleTick(blockPos: $BlockPos_, block: $Block_, i: number, tickPriority: $TickPriority_): void;
        scheduleTick(blockPos: $BlockPos_, fluid: $Fluid_, i: number, tickPriority: $TickPriority_): void;
        scheduleTick(blockPos: $BlockPos_, fluid: $Fluid_, i: number): void;
        getSeaLevel(): number;
        getRawBrightness(pos: $BlockPos_, ambientDarkness: number): number;
        getLightEngine(): $LevelLightEngine;
        getBiomeManager(): $BiomeManager;
        isFluidAtPosition(blockPos: $BlockPos_, predicate: $Predicate_<$FluidState>): boolean;
        nextSubTickCount(): number;
        getFluidTicks(): $LevelTickAccess<$Fluid>;
        getBlockTint(pos: $BlockPos_, colorResolver: $ColorResolver_): number;
        getBrightness(type: $LightLayer_, pos: $BlockPos_): number;
        getBlockTicks(): $LevelTickAccess<$Block>;
        getSkyDarken(): number;
        isStateAtPosition(blockPos: $BlockPos_, predicate: $Predicate_<$BlockState>): boolean;
        getUncachedNoiseBiome(i: number, j: number, k: number): $Holder<$Biome>;
        getShade(direction: $Direction_, shaded: boolean): number;
        canSeeSky(pos: $BlockPos_): boolean;
        getEntities<T extends $Entity>(entityTypeTest: $EntityTypeTest<$Entity, T>, aABB: $AABB_, predicate: $Predicate_<T>): $List<T>;
        getEntities(entity: $Entity, aABB: $AABB_, predicate: $Predicate_<$Entity>): $List<$Entity>;
        getLevelData(): $LevelData;
        playSound(player: $Player, blockPos: $BlockPos_, soundEvent: $SoundEvent_, soundSource: $SoundSource_, f: number, g: number): void;
        gameEvent(holder: $Holder_<$GameEvent>, vec3: $Vec3_, context: $GameEvent$Context_): void;
        getCurrentDifficultyAt(blockPos: $BlockPos_): $DifficultyInstance;
        copyBlockData(): $Position2ObjectMap<$BlockState>;
        getBlockStateOrAir(x: number, y: number, z: number): $BlockState;
        dirtyAll(): void;
        forEachChunk(consumer: $PositionConsumer_<$BlockState[]>): void;
        chunkKeySet(): $LongSet;
        getCenter(): $BlockPos;
        setBlock(blockPos: $BlockPos_, blockState: $BlockState_, i: number, j: number): boolean;
        levelEvent(player: $Player, i: number, blockPos: $BlockPos_, j: number): void;
        isClientSide(): boolean;
        render(rc: $AxiomWorldRenderContext_, translation: $Vec3_, rotation: $Quaternionf, blockOpacity: number, outlineOpacity: number): void;
        render(rc: $AxiomWorldRenderContext_, translation: $Vec3_, blockOpacity: number, outlineOpacity: number): void;
        render(camera: $Camera, translation: $Vec3_, matrix: $PoseStack, projection: $Matrix4f, blockOpacity: number, outlineOpacity: number): void;
        render(rc: $AxiomWorldRenderContext_, translation: $Vec3_, rotation: $Quaternionf, blockOpacity: number, outlineOpacity: number, polygonOffset: boolean, renderTarget: $RenderTarget): void;
        render(rc: $AxiomWorldRenderContext_, translation: $Vec3_, rotation: $Quaternionf, blockOpacity: number, outlineOpacity: number, polygonOffset: boolean): void;
        enabledFeatures(): $FeatureFlagSet;
        getWorldBorder(): $WorldBorder;
        /**
         * @deprecated
         */
        unsafeRemoveBlockWithoutDirty(x: number, y: number, z: number): void;
        getBlockState(pos: $BlockPos_): $BlockState;
        addParticle(particleOptions: $ParticleOptions_, d: number, e: number, f: number, g: number, h: number, i: number): void;
        getChunkSource(): $ChunkSource;
        getMinBuildHeight(): number;
        destroyBlock(blockPos: $BlockPos_, bl: boolean, entity: $Entity, i: number): boolean;
        removeBlock(blockPos: $BlockPos_, bl: boolean): boolean;
        getChunk(cx: number, cy: number, cz: number): $BlockState[];
        getChunk(i: number, j: number, chunkStatus: $ChunkStatus_, bl: boolean): $ChunkAccess;
        getServer(): $MinecraftServer;
        addBlock(pos: $BlockPos_, block: $BlockState_): void;
        addBlock(x: number, y: number, z: number, block: $BlockState_): void;
        forEachEntryLowestFirst(consumer: $PositionConsumer_<$BlockState>): void;
        addBlockIfNotPresent(x: number, y: number, z: number, block: $BlockState_): void;
        addBlockWithoutDirty(x: number, y: number, z: number, block: $BlockState_): void;
        getBlockStateOrNull(x: number, y: number, z: number): $BlockState;
        getBlockStateOrDelegate(blockPos: $BlockPos_, level: $Level_): $BlockState;
        getFluidState(pos: $BlockPos_): $FluidState;
        getBlockEntity(pos: $BlockPos_): $BlockEntity;
        registryAccess(): $RegistryAccess;
        getBiomeFabric(arg0: $BlockPos_): $Holder<$Biome>;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        hasBiomes(): boolean;
        blockUpdated(arg0: $BlockPos_, arg1: $Block_): void;
        neighborShapeChanged(arg0: $Direction_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockPos_, arg4: number, arg5: number): void;
        dayTime(): number;
        hasChunk(arg0: number, arg1: number): boolean;
        playSound(arg0: $Player | null, arg1: $BlockPos_, arg2: $SoundEvent_, arg3: $SoundSource_): void;
        gameEvent(arg0: $Holder_<$GameEvent>, arg1: $BlockPos_, arg2: $GameEvent$Context_): void;
        gameEvent(arg0: $Entity | null, arg1: $Holder_<$GameEvent>, arg2: $BlockPos_): void;
        gameEvent(arg0: $Entity | null, arg1: $Holder_<$GameEvent>, arg2: $Vec3_): void;
        gameEvent(arg0: $ResourceKey_<$GameEvent>, arg1: $BlockPos_, arg2: $GameEvent$Context_): void;
        levelEvent(arg0: number, arg1: $BlockPos_, arg2: number): void;
        getDifficulty(): $Difficulty;
        /**
         * @deprecated
         */
        getBlockEntityRenderAttachment(arg0: $BlockPos_): $Object;
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
        isUnobstructed(arg0: $Entity | null, arg1: $VoxelShape): boolean;
        getHeightmapPos(arg0: $Heightmap$Types_, arg1: $BlockPos_): $BlockPos;
        getEntityCollisions(arg0: $Entity | null, arg1: $AABB_): $List<$VoxelShape>;
        getTimeOfDay(arg0: number): number;
        getMoonPhase(): number;
        getMoonBrightness(): number;
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
        getNearbyEntities<T extends $LivingEntity>(arg0: $Class<T>, arg1: $TargetingConditions, arg2: $LivingEntity, arg3: $AABB_): $List<T>;
        getPlayerByUUID(arg0: $UUID_): $Player;
        getNearestEntity<T extends $LivingEntity>(arg0: $Class<T>, arg1: $TargetingConditions, arg2: $LivingEntity | null, arg3: number, arg4: number, arg5: number, arg6: $AABB_): T;
        getNearestEntity<T extends $LivingEntity>(arg0: $List_<T>, arg1: $TargetingConditions, arg2: $LivingEntity | null, arg3: number, arg4: number, arg5: number): T;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): $Player;
        getNearestPlayer(arg0: $TargetingConditions, arg1: $LivingEntity): $Player;
        getNearestPlayer(arg0: $TargetingConditions, arg1: $LivingEntity, arg2: number, arg3: number, arg4: number): $Player;
        getNearestPlayer(arg0: $TargetingConditions, arg1: number, arg2: number, arg3: number): $Player;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Predicate_<$Entity> | null): $Player;
        getNearestPlayer(arg0: $Entity, arg1: number): $Player;
        getNearbyPlayers(arg0: $TargetingConditions, arg1: $LivingEntity, arg2: $AABB_): $List<$Player>;
        hasNearbyAlivePlayer(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getEntities(arg0: $Entity | null, arg1: $AABB_): $List<$Entity>;
        getEntitiesOfClass<T extends $Entity>(arg0: $Class<T>, arg1: $AABB_): $List<T>;
        getEntitiesOfClass<T extends $Entity>(arg0: $Class<T>, arg1: $AABB_, arg2: $Predicate_<T>): $List<T>;
        getBiome(arg0: $BlockPos_): $Holder<$Biome>;
        /**
         * @deprecated
         */
        getLightLevelDependentMagicValue(arg0: $BlockPos_): number;
        isEmptyBlock(arg0: $BlockPos_): boolean;
        getNoiseBiome(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        getMaxLocalRawBrightness(arg0: $BlockPos_): number;
        getMaxLocalRawBrightness(arg0: $BlockPos_, arg1: number): number;
        getChunkForCollisions(arg0: number, arg1: number): $BlockGetter;
        canSeeSkyFromBelowWater(arg0: $BlockPos_): boolean;
        isWaterAt(arg0: $BlockPos_): boolean;
        getBlockStatesIfLoaded(arg0: $AABB_): $Stream<$BlockState>;
        /**
         * @deprecated
         */
        hasChunkAt(arg0: number, arg1: number): boolean;
        /**
         * @deprecated
         */
        hasChunkAt(arg0: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(arg0: $BlockPos_, arg1: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        containsAnyLiquid(arg0: $AABB_): boolean;
        holderLookup<T>(arg0: $ResourceKey_<$Registry<T>>): $HolderLookup<T>;
        getChunk(arg0: number, arg1: number, arg2: $ChunkStatus_): $ChunkAccess;
        getChunk(arg0: number, arg1: number): $ChunkAccess;
        getChunk(arg0: $BlockPos_): $ChunkAccess;
        getPathfindingCostFromLightLevels(arg0: $BlockPos_): number;
        getMcPlayers(): $List<$Player>;
        getMcEntities(): $Iterable<$Entity>;
        getPlayers(): $EntityArrayList;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        self(): $EntityGetter;
        isUnobstructed(arg0: $Entity): boolean;
        isUnobstructed(arg0: $BlockState_, arg1: $BlockPos_, arg2: $CollisionContext): boolean;
        findSupportingBlock(arg0: $Entity, arg1: $AABB_): ($BlockPos) | undefined;
        getBlockCollisions(arg0: $Entity | null, arg1: $AABB_): $Iterable<$VoxelShape>;
        findFreePosition(arg0: $Entity | null, arg1: $VoxelShape, arg2: $Vec3_, arg3: number, arg4: number, arg5: number): ($Vec3) | undefined;
        noCollision(arg0: $Entity | null, arg1: $AABB_): boolean;
        noCollision(arg0: $Entity): boolean;
        noCollision(arg0: $AABB_): boolean;
        noBlockCollision(arg0: $Entity | null, arg1: $AABB_): boolean;
        getCollisions(arg0: $Entity | null, arg1: $AABB_): $Iterable<$VoxelShape>;
        collidesWithSuffocatingBlock(arg0: $Entity | null, arg1: $AABB_): boolean;
        getDirectSignalTo(arg0: $BlockPos_): number;
        hasNeighborSignal(arg0: $BlockPos_): boolean;
        getBestNeighborSignal(arg0: $BlockPos_): number;
        getControlInputSignal(arg0: $BlockPos_, arg1: $Direction_, arg2: boolean): number;
        hasSignal(arg0: $BlockPos_, arg1: $Direction_): boolean;
        getDirectSignal(arg0: $BlockPos_, arg1: $Direction_): number;
        getSignal(arg0: $BlockPos_, arg1: $Direction_): number;
        holder<T>(arg0: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        isAreaLoaded(arg0: $BlockPos_, arg1: number): boolean;
        holderOrThrow<T>(arg0: $ResourceKey_<T>): $Holder<T>;
        setBlock(arg0: $BlockPos_, arg1: $BlockState_, arg2: number): boolean;
        addFreshEntity(arg0: $Entity): boolean;
        destroyBlock(arg0: $BlockPos_, arg1: boolean): boolean;
        destroyBlock(arg0: $BlockPos_, arg1: boolean, arg2: $Entity | null): boolean;
        getEntities(): $EntityArrayList;
        getEntityByNetworkID(id: number): $Entity;
        getEntityByUUID(id: $UUID_): $Entity;
        static SOLID_RENDER_LIMIT: number;
        static TRANSLUCENT_RENDER_LIMIT: number;
        static staticPackReloadIndex: number;
        uniqueBlockState: $BlockState;
        constructor();
        constructor(drawOutlineForNonBlockingMotion: boolean);
        get empty(): boolean;
        get random(): $RandomSource;
        get seaLevel(): number;
        get lightEngine(): $LevelLightEngine;
        get biomeManager(): $BiomeManager;
        get fluidTicks(): $LevelTickAccess<$Fluid>;
        get blockTicks(): $LevelTickAccess<$Block>;
        get skyDarken(): number;
        get levelData(): $LevelData;
        get center(): $BlockPos;
        get clientSide(): boolean;
        get worldBorder(): $WorldBorder;
        get chunkSource(): $ChunkSource;
        get minBuildHeight(): number;
        get server(): $MinecraftServer;
        get difficulty(): $Difficulty;
        get maxLightLevel(): number;
        get moonPhase(): number;
        get moonBrightness(): number;
        get minSection(): number;
        get maxSection(): number;
        get sectionsCount(): number;
        get maxBuildHeight(): number;
        get mcPlayers(): $List<$Player>;
        get mcEntities(): $Iterable<$Entity>;
        get players(): $EntityArrayList;
    }
}
