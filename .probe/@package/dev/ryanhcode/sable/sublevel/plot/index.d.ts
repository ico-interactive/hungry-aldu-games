import { $MinecraftServer } from "@package/net/minecraft/server";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $GameEvent, $GameEvent$Context_ } from "@package/net/minecraft/world/level/gameevent";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $List, $UUID_, $List_, $Collection, $Map$Entry, $Set } from "@package/java/util";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $RandomSource } from "@package/net/minecraft/util";
import { $WorldBorder } from "@package/net/minecraft/world/level/border";
import { $DifficultyInstance, $Difficulty } from "@package/net/minecraft/world";
import { $Supplier_, $Predicate_ } from "@package/java/util/function";
import { $ChunkHolder, $ChunkResult, $ServerLevel, $ChunkHolder$PlayerProvider_, $ChunkHolder$LevelChangeListener_ } from "@package/net/minecraft/server/level";
import { $SoundEvent_, $SoundSource_ } from "@package/net/minecraft/sounds";
import { $BlockPos, $Holder_, $Holder, $BlockPos_, $Direction_, $RegistryAccess, $Registry, $Holder$Reference, $HolderLookup } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ChunkStatus_ } from "@package/net/minecraft/world/level/chunk/status";
import { $TargetingConditions } from "@package/net/minecraft/world/entity/ai/targeting";
import { $BlockEntitySubLevelReactionWheel, $BlockEntitySubLevelActor } from "@package/dev/ryanhcode/sable/api/block";
import { $Class, $Object, $Iterable } from "@package/java/lang";
import { $Heightmap$Types_ } from "@package/net/minecraft/world/level/levelgen";
import { $EntityTypeTest } from "@package/net/minecraft/world/level/entity";
import { $ServerLevelAccessor, $ClipContext, $ClipBlockStateContext, $LightLayer_, $CommonLevelAccessor, $ChunkPos, $LevelHeightAccessor, $BlockGetter, $EntityGetter, $ColorResolver_, $Level_ } from "@package/net/minecraft/world/level";
import { $TickPriority_, $LevelTickAccess } from "@package/net/minecraft/world/ticks";
import { $BoundingBox3ic } from "@package/dev/ryanhcode/sable/companion/math";
import { $Fluid, $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Biome, $BiomeManager } from "@package/net/minecraft/world/level/biome";
import { $LevelChunk, $ChunkSource, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $LevelData } from "@package/net/minecraft/world/level/storage";
import { $SubLevel, $ClientSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $AABB_, $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $SubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";
import { $Vector3dc } from "@package/org/joml";
export * as heat from "@package/dev/ryanhcode/sable/sublevel/plot/heat";

declare module "@package/dev/ryanhcode/sable/sublevel/plot" {
    export class $ClientLevelPlot extends $LevelPlot {
        plotPos: $ChunkPos;
        constructor(arg0: $SubLevelContainer, arg1: number, arg2: number, arg3: number, arg4: $ClientSubLevel);
    }
    export class $LevelPlot {
        contains(arg0: number, arg1: number): boolean;
        contains(arg0: $Vector3dc): boolean;
        contains(arg0: $ChunkPos): boolean;
        contains(arg0: $Vec3_): boolean;
        getEmbeddedLevelAccessor(): $EmbeddedPlotLevelAccessor;
        tick(): void;
        getBlockEntityReactionWheelMap(): $Set<$Map$Entry<$BlockPos, $BlockEntitySubLevelReactionWheel>>;
        getBlockEntityReactionWheels(): $Collection<$BlockEntitySubLevelReactionWheel>;
        getLightEngine(): $LevelLightEngine;
        getLoadedChunks(): $Collection<$PlotChunkHolder>;
        toLocal(arg0: $ChunkPos): $ChunkPos;
        toGlobal(arg0: $ChunkPos): $ChunkPos;
        getChunkHolder(arg0: $ChunkPos): $PlotChunkHolder;
        onRemove(): void;
        getBlockEntityActors(): $Iterable<$BlockEntitySubLevelActor>;
        setBoundingBox(arg0: $BoundingBox3ic): void;
        updateBoundingBox(): void;
        addChunkHolder(arg0: $ChunkPos, arg1: $PlotChunkHolder, arg2: boolean): void;
        getSubLevel(): $SubLevel;
        getBoundingBox(): $BoundingBox3ic;
        getChunk(arg0: $ChunkPos): $LevelChunk;
        newEmptyChunk(arg0: $ChunkPos): void;
        getCenterChunk(): $ChunkPos;
        getCenterBlock(): $BlockPos;
        expandIfNecessary(arg0: $BlockPos_): void;
        getChunkMin(): $ChunkPos;
        getChunkMax(): $ChunkPos;
        onBlockChange(arg0: $BlockPos_, arg1: $BlockState_): void;
        plotPos: $ChunkPos;
        constructor(arg0: $SubLevelContainer, arg1: number, arg2: number, arg3: number, arg4: $SubLevel);
        get embeddedLevelAccessor(): $EmbeddedPlotLevelAccessor;
        get blockEntityReactionWheelMap(): $Set<$Map$Entry<$BlockPos, $BlockEntitySubLevelReactionWheel>>;
        get blockEntityReactionWheels(): $Collection<$BlockEntitySubLevelReactionWheel>;
        get lightEngine(): $LevelLightEngine;
        get loadedChunks(): $Collection<$PlotChunkHolder>;
        get blockEntityActors(): $Iterable<$BlockEntitySubLevelActor>;
        get subLevel(): $SubLevel;
        get centerChunk(): $ChunkPos;
        get centerBlock(): $BlockPos;
        get chunkMin(): $ChunkPos;
        get chunkMax(): $ChunkPos;
    }
    export class $PlotChunkHolder extends $ChunkHolder {
        static create(arg0: $Level_, arg1: $ChunkPos, arg2: $LevelLightEngine, arg3: $LevelChunk): $PlotChunkHolder;
        getBoundingBox(): $BoundingBox3ic;
        getChunk(): $LevelChunk;
        setHeatSection(arg0: number, arg1: $HeatDataChunkSection): void;
        getHeatSection(arg0: number): $HeatDataChunkSection;
        handleBlockChange(arg0: number, arg1: number, arg2: number, arg3: $BlockState_, arg4: $BlockState_): void;
        currentlyLoading: $LevelChunk;
        pos: $ChunkPos;
        static UNLOADED_CHUNK: $ChunkResult<$ChunkAccess>;
        entityTickingChunkFuture: $CompletableFuture<$ChunkResult<$LevelChunk>>;
        static UNLOADED_LEVEL_CHUNK: $ChunkResult<$LevelChunk>;
        tickingChunkFuture: $CompletableFuture<$ChunkResult<$LevelChunk>>;
        static UNLOADED_CHUNK_FUTURE: $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        fullChunkFuture: $CompletableFuture<$ChunkResult<$LevelChunk>>;
        constructor(arg0: $LevelChunk, arg1: $ChunkPos, arg2: $LevelHeightAccessor, arg3: $LevelLightEngine, arg4: $ChunkHolder$LevelChangeListener_, arg5: $ChunkHolder$PlayerProvider_);
        get boundingBox(): $BoundingBox3ic;
        get chunk(): $LevelChunk;
    }
    export class $HeatDataChunkSection {
        get(arg0: number, arg1: number, arg2: number): number;
        set(arg0: number, arg1: number, arg2: number, arg3: number): void;
        static getIndex(arg0: number, arg1: number, arg2: number): number;
        static SIZE: number;
        constructor();
    }
    export class $EmbeddedPlotLevelAccessor implements $CommonLevelAccessor, $ServerLevelAccessor {
        getHeight(arg0: $Heightmap$Types_, arg1: number, arg2: number): number;
        getLevel(): $ServerLevel;
        dimensionType(): $DimensionType;
        getRandom(): $RandomSource;
        /**
         * @deprecated
         */
        getSeaLevel(): number;
        getLightEngine(): $LevelLightEngine;
        getBiomeManager(): $BiomeManager;
        isFluidAtPosition(arg0: $BlockPos_, arg1: $Predicate_<$FluidState>): boolean;
        nextSubTickCount(): number;
        getFluidTicks(): $LevelTickAccess<$Fluid>;
        getBlockTicks(): $LevelTickAccess<$Block>;
        getSkyDarken(): number;
        isStateAtPosition(arg0: $BlockPos_, arg1: $Predicate_<$BlockState>): boolean;
        getUncachedNoiseBiome(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        hasChunk(arg0: number, arg1: number): boolean;
        getShade(arg0: $Direction_, arg1: boolean): number;
        getEntities(arg0: $Entity, arg1: $AABB_, arg2: $Predicate_<$Entity>): $List<$Entity>;
        getEntities<T extends $Entity>(arg0: $EntityTypeTest<$Entity, T>, arg1: $AABB_, arg2: $Predicate_<T>): $List<T>;
        getLevelData(): $LevelData;
        playSound(arg0: $Player, arg1: $BlockPos_, arg2: $SoundEvent_, arg3: $SoundSource_, arg4: number, arg5: number): void;
        gameEvent(arg0: $Holder_<$GameEvent>, arg1: $Vec3_, arg2: $GameEvent$Context_): void;
        getCurrentDifficultyAt(arg0: $BlockPos_): $DifficultyInstance;
        setBlock(arg0: $BlockPos_, arg1: $BlockState_, arg2: number, arg3: number): boolean;
        levelEvent(arg0: $Player, arg1: number, arg2: $BlockPos_, arg3: number): void;
        isClientSide(): boolean;
        enabledFeatures(): $FeatureFlagSet;
        getWorldBorder(): $WorldBorder;
        getBlockState(arg0: $BlockPos_): $BlockState;
        addParticle(arg0: $ParticleOptions_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        getChunkSource(): $ChunkSource;
        destroyBlock(arg0: $BlockPos_, arg1: boolean, arg2: $Entity, arg3: number): boolean;
        removeBlock(arg0: $BlockPos_, arg1: boolean): boolean;
        getChunk(arg0: number, arg1: number, arg2: $ChunkStatus_, arg3: boolean): $ChunkAccess;
        getServer(): $MinecraftServer;
        getFluidState(arg0: $BlockPos_): $FluidState;
        getBlockEntity(arg0: $BlockPos_): $BlockEntity;
        registryAccess(): $RegistryAccess;
        isUnobstructed(arg0: $Entity | null, arg1: $VoxelShape): boolean;
        getHeightmapPos(arg0: $Heightmap$Types_, arg1: $BlockPos_): $BlockPos;
        getEntityCollisions(arg0: $Entity | null, arg1: $AABB_): $List<$VoxelShape>;
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>): (T) | undefined;
        addFreshEntityWithPassengers(arg0: $Entity): void;
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
        getHeight(): number;
        /**
         * @deprecated
         */
        getLightLevelDependentMagicValue(arg0: $BlockPos_): number;
        isEmptyBlock(arg0: $BlockPos_): boolean;
        getBlockTint(arg0: $BlockPos_, arg1: $ColorResolver_): number;
        getBiomeFabric(arg0: $BlockPos_): $Holder<any>;
        getNoiseBiome(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        getMaxLocalRawBrightness(arg0: $BlockPos_): number;
        getMaxLocalRawBrightness(arg0: $BlockPos_, arg1: number): number;
        getChunkForCollisions(arg0: number, arg1: number): $BlockGetter;
        canSeeSkyFromBelowWater(arg0: $BlockPos_): boolean;
        hasBiomes(): boolean;
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
        getMinBuildHeight(): number;
        containsAnyLiquid(arg0: $AABB_): boolean;
        holderLookup<T>(arg0: $ResourceKey_<$Registry<T>>): $HolderLookup<T>;
        getChunk(arg0: number, arg1: number, arg2: $ChunkStatus_): $ChunkAccess;
        getChunk(arg0: number, arg1: number): $ChunkAccess;
        getChunk(arg0: $BlockPos_): $ChunkAccess;
        getPathfindingCostFromLightLevels(arg0: $BlockPos_): number;
        scheduleTick(arg0: $BlockPos_, arg1: $Block_, arg2: number): void;
        scheduleTick(arg0: $BlockPos_, arg1: $Fluid_, arg2: number, arg3: $TickPriority_): void;
        scheduleTick(arg0: $BlockPos_, arg1: $Block_, arg2: number, arg3: $TickPriority_): void;
        scheduleTick(arg0: $BlockPos_, arg1: $Fluid_, arg2: number): void;
        blockUpdated(arg0: $BlockPos_, arg1: $Block_): void;
        neighborShapeChanged(arg0: $Direction_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockPos_, arg4: number, arg5: number): void;
        dayTime(): number;
        playSound(arg0: $Player | null, arg1: $BlockPos_, arg2: $SoundEvent_, arg3: $SoundSource_): void;
        gameEvent(arg0: $Holder_<$GameEvent>, arg1: $BlockPos_, arg2: $GameEvent$Context_): void;
        gameEvent(arg0: $Entity | null, arg1: $Holder_<$GameEvent>, arg2: $BlockPos_): void;
        gameEvent(arg0: $Entity | null, arg1: $Holder_<$GameEvent>, arg2: $Vec3_): void;
        gameEvent(arg0: $ResourceKey_<$GameEvent>, arg1: $BlockPos_, arg2: $GameEvent$Context_): void;
        levelEvent(arg0: number, arg1: $BlockPos_, arg2: number): void;
        getDifficulty(): $Difficulty;
        getMcPlayers(): $List<$Player>;
        getMcEntities(): $Iterable<$Entity>;
        getPlayers(): $EntityArrayList;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        self(): $EntityGetter;
        getRawBrightness(arg0: $BlockPos_, arg1: number): number;
        getBrightness(arg0: $LightLayer_, arg1: $BlockPos_): number;
        canSeeSky(arg0: $BlockPos_): boolean;
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
        /**
         * @deprecated
         */
        getBlockEntityRenderAttachment(arg0: $BlockPos_): $Object;
        setBlock(arg0: $BlockPos_, arg1: $BlockState_, arg2: number): boolean;
        addFreshEntity(arg0: $Entity): boolean;
        destroyBlock(arg0: $BlockPos_, arg1: boolean): boolean;
        destroyBlock(arg0: $BlockPos_, arg1: boolean, arg2: $Entity | null): boolean;
        getTimeOfDay(arg0: number): number;
        getMoonPhase(): number;
        getMoonBrightness(): number;
        getEntities(): $EntityArrayList;
        getEntityByNetworkID(id: number): $Entity;
        getEntityByUUID(id: $UUID_): $Entity;
        isBlockInLine(arg0: $ClipBlockStateContext): $BlockHitResult;
        getBlockFloorHeight(arg0: $BlockPos_): number;
        getBlockFloorHeight(arg0: $VoxelShape, arg1: $Supplier_<$VoxelShape>): number;
        getBlockStates(arg0: $AABB_): $Stream<$BlockState>;
        getLightEmission(arg0: $BlockPos_): number;
        getMaxLightLevel(): number;
        clip(arg0: $ClipContext): $BlockHitResult;
        clipWithInteractionOverride(arg0: $Vec3_, arg1: $Vec3_, arg2: $BlockPos_, arg3: $VoxelShape, arg4: $BlockState_): $BlockHitResult;
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
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        constructor(arg0: $LevelPlot);
        get level(): $ServerLevel;
        get random(): $RandomSource;
        get seaLevel(): number;
        get lightEngine(): $LevelLightEngine;
        get biomeManager(): $BiomeManager;
        get fluidTicks(): $LevelTickAccess<$Fluid>;
        get blockTicks(): $LevelTickAccess<$Block>;
        get skyDarken(): number;
        get levelData(): $LevelData;
        get clientSide(): boolean;
        get worldBorder(): $WorldBorder;
        get chunkSource(): $ChunkSource;
        get server(): $MinecraftServer;
        get minBuildHeight(): number;
        get difficulty(): $Difficulty;
        get mcPlayers(): $List<$Player>;
        get mcEntities(): $Iterable<$Entity>;
        get players(): $EntityArrayList;
        get moonPhase(): number;
        get moonBrightness(): number;
        get maxLightLevel(): number;
        get minSection(): number;
        get maxSection(): number;
        get sectionsCount(): number;
        get maxBuildHeight(): number;
    }
}
