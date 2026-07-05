import { $Long2ObjectLinkedOpenHashMap, $Long2ObjectOpenHashMap, $LongSet, $Long2ByteMap, $Long2ObjectMap, $Long2LongMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $PlayerAdvancements, $MinecraftServer } from "@package/net/minecraft/server";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $VeilPacketManager$PacketSink } from "@package/foundry/veil/api/network";
import { $ServerLevelExt, $ServerPlayerExt, $ThreadedLevelLightEngineExt } from "@package/com/moulberry/axiom/hooks";
import { $EntityDimensions, $WalkAnimationState, $HumanoidArm_, $PortalProcessor, $Entity, $Entity$RemovalReason_, $HumanoidArm, $Entity$RemovalReason, $LivingEntity, $Mob, $Pose, $ReputationEventHandler_ } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $CustomPacketPayload_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $WorldBorder } from "@package/net/minecraft/world/level/border";
import { $PlayerFreezeExtension } from "@package/dev/ryanhcode/sable/mixinterface/player_freezing";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $IServerChunkCacheExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Brain } from "@package/net/minecraft/world/entity/ai";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $ServerLevelSceneExtension } from "@package/dev/ryanhcode/sable/mixinterface/physics";
import { $BoundingBox, $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $OutgoingChatMessage, $RemoteChatSession, $RemoteChatSession_, $Component_, $ChatType$Bound_, $Component } from "@package/net/minecraft/network/chat";
import { $PartEntity } from "@package/net/neoforged/neoforge/entity";
import { $ServerPlayerRespawnExtension } from "@package/dev/ryanhcode/sable/mixinterface/respawn_point";
import { $LevelChunk, $ImposterProtoChunk, $ChunkGeneratorStructureState, $LightChunkGetter, $ChunkSource, $ChunkGenerator, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $FishingHook } from "@package/net/minecraft/world/entity/projectile";
import { $DimensionDataStorage, $LevelStorageSource$LevelStorageAccess, $LevelData, $WritableLevelData, $ServerLevelData } from "@package/net/minecraft/world/level/storage";
import { $BlockDestructionProgressExtension } from "@package/com/simibubi/create/foundation/block/render";
import { $Duration_ } from "@package/java/time";
import { $DamageContainer } from "@package/net/neoforged/neoforge/common/damagesource";
import { $BlockableEventLoop, $ProcessorHandle, $ProcessorMailbox } from "@package/net/minecraft/util/thread";
import { $LevelStem_, $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $ServerStatsCounter, $ServerRecipeBook } from "@package/net/minecraft/stats";
import { $ICapabilityInvalidationListener_ } from "@package/net/neoforged/neoforge/capabilities";
import { $PacketAndPayloadAcceptor } from "@package/net/neoforged/neoforge/network/bundle";
import { $ServerStatus_ } from "@package/net/minecraft/network/protocol/status";
import { $ChestMenuData } from "@package/dev/latvian/mods/kubejs/gui/chest";
import { $GameEvent, $GameEvent$Context_ } from "@package/net/minecraft/world/level/gameevent";
import { $ServerLevelAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $UUID_, $Set_, $ArrayList, $Stack, $List, $List_, $Collection, $Queue, $Comparator, $Set, $UUID } from "@package/java/util";
import { $BlockPos, $BlockPos_, $Holder$Reference, $Holder, $Direction_, $HolderLookup, $RegistryAccess, $Registry, $Holder_, $SectionPos } from "@package/net/minecraft/core";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $BlockApiCacheImpl, $ServerWorldCache } from "@package/net/fabricmc/fabric/impl/lookup/block";
import { $Throwable, $IllegalStateException, $Runnable, $Enum, $Comparable, $Iterable, $Thread, $Record, $AutoCloseable, $Class, $Runnable_, $Object } from "@package/java/lang";
import { $Writer } from "@package/java/io";
import { $CustomSpawner_, $Explosion, $LightLayer_, $ChunkPos, $BlockGetter, $Level$ExplosionInteraction_, $ColorResolver_, $ExplosionDamageCalculator, $Level_, $GameType, $GameType_, $EntityGetter, $ClipContext, $ClipBlockStateContext, $WorldGenLevel, $NaturalSpawner$SpawnState, $LevelHeightAccessor, $Level, $StructureManager } from "@package/net/minecraft/world/level";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $LaunchedPlungerEntity } from "@package/dev/simulated_team/simulated/content/entities/launched_plunger";
import { $FluidState, $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $WaterOcclusionContainerHolder } from "@package/dev/ryanhcode/sable/mixinterface/water_occlusion";
import { $SynchedEntityData, $EntityDataAccessor } from "@package/net/minecraft/network/syncher";
import { $FoodData } from "@package/net/minecraft/world/food";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_ } from "@package/net/minecraft/resources";
import { $ServerWorldPropertiesRegistry } from "@package/com/moulberry/axiom/world_properties/server";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $DimensionTransition$PostDimensionTransition_, $PortalForcer, $DimensionTransition } from "@package/net/minecraft/world/level/portal";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
import { $WaterOcclusionContainer } from "@package/dev/ryanhcode/sable/sublevel/water_occlusion";
import { $Codec } from "@package/com/mojang/serialization";
import { $Either, $Pair as $Pair$1 } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture, $Executor, $Executor_ } from "@package/java/util/concurrent";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $ServerChunkCacheAccessor } from "@package/dev/ryanhcode/sable/mixin/level_accelerator";
import { $RandomSource, $ProgressListener, $StaticCache2D, $Unit, $SortedArraySet } from "@package/net/minecraft/util";
import { $BossEvent$BossBarColor, $BossEvent$BossBarOverlay_, $InteractionResult, $BossEvent$BossBarOverlay, $InteractionHand_, $Container, $BossEvent, $RandomSequences, $DifficultyInstance, $BossEvent$BossBarColor_, $InteractionHand, $Difficulty } from "@package/net/minecraft/world";
import { $ReportedException } from "@package/net/minecraft";
import { $SoundSource_, $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $AbstractContainerMenu, $InventoryMenu, $PlayerEnderChestContainer } from "@package/net/minecraft/world/inventory";
import { $TargetingConditions } from "@package/net/minecraft/world/entity/ai/targeting";
import { $NeighborUpdater } from "@package/net/minecraft/world/level/redstone";
import { $PersistentEntitySectionManager, $EntityInLevelCallback, $EntityTypeTest, $LevelCallback, $EntityTickList, $ChunkStatusUpdateListener_ } from "@package/net/minecraft/world/level/entity";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $KubeJSGUI } from "@package/dev/latvian/mods/kubejs/gui";
import { $Biome, $BiomeManager } from "@package/net/minecraft/world/level/biome";
import { $ReputationEventType } from "@package/net/minecraft/world/entity/ai/village";
import { $TextFilter, $ServerGamePacketListenerImpl } from "@package/net/minecraft/server/network";
import { $StructureTemplateManager } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Inventory, $ChatVisiblity, $Player, $ChatVisiblity_ } from "@package/net/minecraft/world/entity/player";
import { $SubLevelContainerHolder } from "@package/dev/ryanhcode/sable/mixinterface/plot";
import { $Pair } from "@package/it/unimi/dsi/fastutil";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $ChunkScanAccess, $ChunkStorage } from "@package/net/minecraft/world/level/chunk/storage";
import { $IntProvider } from "@package/net/minecraft/util/valueproviders";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $InventoryKJS, $ServerLevelKJS, $ServerPlayerKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $AABB_, $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $SubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";
import { $EnderDragon } from "@package/net/minecraft/world/entity/boss/enderdragon";
import { $ServerChunkLoadingManagerAccessor, $EntityTrackerAccessor } from "@package/net/fabricmc/fabric/mixin/networking/accessor";
import { $EndDragonFight } from "@package/net/minecraft/world/level/dimension/end";
import { $DynamicGraphMinFixedPoint, $LightEngine, $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $ChunkProgressListener } from "@package/net/minecraft/server/level/progress";
import { $Supplier_, $Function, $IntConsumer_, $BooleanSupplier_, $Supplier, $Consumer_, $Predicate_, $IntSupplier_, $IntConsumer, $IntSupplier, $Function_ } from "@package/java/util/function";
import { $PathTypeCache } from "@package/net/minecraft/world/level/pathfinder";
import { $Object2DoubleMap, $ObjectSet } from "@package/it/unimi/dsi/fastutil/objects";
import { $Path_ } from "@package/java/nio/file";
import { $ChunkStep_, $ChunkStatus, $ChunkStatus_ } from "@package/net/minecraft/world/level/chunk/status";
import { $Heightmap$Types_, $RandomState } from "@package/net/minecraft/world/level/levelgen";
import { $LevelTickAccess, $LevelTicks, $TickPriority_ } from "@package/net/minecraft/world/ticks";
import { $ChunkLevelTypeEventTracker } from "@package/net/fabricmc/fabric/impl/event/lifecycle";
import { $TagKey_, $TagKey } from "@package/net/minecraft/tags";
import { $PoiManager } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $Logger } from "@package/org/slf4j";
import { $EntityAnchorArgument$Anchor_ } from "@package/net/minecraft/commands/arguments";
import { $ServerboundPlayerActionPacket$Action_, $CommonPlayerSpawnInfo, $ClientGamePacketListener } from "@package/net/minecraft/network/protocol/game";
import { $Raid, $Raids } from "@package/net/minecraft/world/entity/raid";
import { $Stream } from "@package/java/util/stream";
import { $BlockEntityType_, $BlockEntity, $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as progress from "@package/net/minecraft/server/level/progress";

declare module "@package/net/minecraft/server/level" {
    export class $ChunkTrackingView$Positioned extends $Record implements $ChunkTrackingView {
        contains(x: number, z: number, includeOuterChunksAdjacentToViewBorder: boolean): boolean;
        forEach(action: $Consumer_<$ChunkPos>): void;
        minX(): number;
        /**
         * Determines if another `ChunkTrackingView`'s bounds intersects with its own
         */
        squareIntersects(other: $ChunkTrackingView$Positioned_): boolean;
        minZ(): number;
        maxZ(): number;
        center(): $ChunkPos;
        maxX(): number;
        viewDistance(): number;
        contains(x: number, z: number): boolean;
        contains(chunkPos: $ChunkPos): boolean;
        isInViewDistance(x: number, z: number): boolean;
        constructor(arg0: $ChunkPos, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $ChunkTrackingView$Positioned}.
     */
    export type $ChunkTrackingView$Positioned_ = { center?: $ChunkPos, viewDistance?: number,  } | [center?: $ChunkPos, viewDistance?: number, ];
    export class $PlayerRespawnLogic {
        static getOverworldRespawnPos(level: $ServerLevel, x: number, z: number): $BlockPos;
        static getSpawnPosInChunk(level: $ServerLevel, chunkPos: $ChunkPos): $BlockPos;
        constructor();
    }
    export class $Ticket<T> implements $Comparable<$Ticket<never>> {
        compareTo(other: $Ticket<never>): number;
        getType(): $TicketType<$Ticket<never>>;
        getTicketLevel(): number;
        timedOut(currentTime: number): boolean;
        setCreatedTick(timestamp: number): void;
        isForceTicks(): boolean;
        constructor(type: $TicketType<$Ticket<never>>, ticketLevel: number, key: $Ticket<never>);
        constructor(arg0: $TicketType<$Ticket<never>>, arg1: number, arg2: $Ticket<never>, arg3: boolean);
        get type(): $TicketType<$Ticket<never>>;
        get ticketLevel(): number;
        set createdTick(value: number);
        get forceTicks(): boolean;
    }
    export class $TicketType<T> {
        static create<T>(name: string, comparator: $Comparator<T>): $TicketType<T>;
        static create<T>(name: string, comparator: $Comparator<T>, lifespan: number): $TicketType<T>;
        timeout(): number;
        getComparator(): $Comparator<T>;
        static PLAYER: $TicketType<$ChunkPos>;
        static POST_TELEPORT: $TicketType<number>;
        static DRAGON: $TicketType<$Unit>;
        static START: $TicketType<$Unit>;
        static FORCED: $TicketType<$ChunkPos>;
        static UNKNOWN: $TicketType<$ChunkPos>;
        static PORTAL: $TicketType<$BlockPos>;
        constructor(name: string, comparator: $Comparator<T>, timeout: number);
        get comparator(): $Comparator<T>;
    }
    export class $ChunkHolder$PlayerProvider {
    }
    export interface $ChunkHolder$PlayerProvider {
        /**
         * Returns the players tracking the given chunk.
         */
        getPlayers(pos: $ChunkPos, boundaryOnly: boolean): $List<$ServerPlayer>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkHolder$PlayerProvider}.
     */
    export type $ChunkHolder$PlayerProvider_ = ((arg0: $ChunkPos, arg1: boolean) => $List_<$ServerPlayer>);
    export class $ServerBossEvent extends $BossEvent {
        removeAllPlayers(): void;
        /**
         * Makes the boss visible to the given player.
         */
        removePlayer(player: $ServerPlayer): void;
        isVisible(): boolean;
        /**
         * The returned collection is unmodifiable
         */
        getPlayers(): $Collection<$ServerPlayer>;
        /**
         * Makes the boss visible to the given player.
         */
        addPlayer(player: $ServerPlayer): void;
        setVisible(visible: boolean): void;
        darkenScreen: boolean;
        playBossMusic: boolean;
        color: $BossEvent$BossBarColor;
        overlay: $BossEvent$BossBarOverlay;
        name: $Component;
        progress: number;
        createWorldFog: boolean;
        constructor(name: $Component_, color: $BossEvent$BossBarColor_, overlay: $BossEvent$BossBarOverlay_);
        get players(): $Collection<$ServerPlayer>;
    }
    export class $ChunkHolder$LevelChangeListener {
    }
    export interface $ChunkHolder$LevelChangeListener {
        onLevelChange(chunkPos: $ChunkPos, queueLevelGetter: $IntSupplier_, ticketLevel: number, queueLevelSetter: $IntConsumer_): void;
    }
    /**
     * Values that may be interpreted as {@link $ChunkHolder$LevelChangeListener}.
     */
    export type $ChunkHolder$LevelChangeListener_ = ((arg0: $ChunkPos, arg1: $IntSupplier, arg2: number, arg3: $IntConsumer) => void);
    export class $ChunkHolder extends $GenerationChunkHolder implements $ChunkLevelTypeEventTracker {
        fabric_setCurrentEventLevelType(arg0: $FullChunkStatus_): void;
        fabric_getCurrentEventLevelType(): $FullChunkStatus;
        getTickingChunk(): $LevelChunk;
        getFullChunkFuture(): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        wasAccessibleSinceLastSave(): boolean;
        refreshAccessibility(): void;
        getTickingChunkFuture(): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        sectionLightChanged(type: $LightLayer_, sectionY: number): void;
        blockChanged(pos: $BlockPos_): void;
        broadcastChanges(chunk: $LevelChunk): void;
        getEntityTickingChunkFuture(): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        setTicketLevel(queueLevel: number): void;
        getSaveSyncFuture(): $CompletableFuture<never>;
        isReadyForSaving(): boolean;
        getChunkToSend(): $LevelChunk;
        addSendDependency(dependency: $CompletableFuture<never>): void;
        getSendSyncFuture(): $CompletableFuture<never>;
        updateFutures(chunkMap: $ChunkMap, executor: $Executor_): void;
        currentlyLoading: $LevelChunk;
        pos: $ChunkPos;
        static UNLOADED_CHUNK: $ChunkResult<$ChunkAccess>;
        entityTickingChunkFuture: $CompletableFuture<$ChunkResult<$LevelChunk>>;
        static UNLOADED_LEVEL_CHUNK: $ChunkResult<$LevelChunk>;
        tickingChunkFuture: $CompletableFuture<$ChunkResult<$LevelChunk>>;
        static UNLOADED_CHUNK_FUTURE: $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        fullChunkFuture: $CompletableFuture<$ChunkResult<$LevelChunk>>;
        constructor(pos: $ChunkPos, ticketLevel: number, levelHeightAccessor: $LevelHeightAccessor, lightEngine: $LevelLightEngine, onLevelChange: $ChunkHolder$LevelChangeListener_, playerProvider: $ChunkHolder$PlayerProvider_);
        get tickingChunk(): $LevelChunk;
        set ticketLevel(value: number);
        get saveSyncFuture(): $CompletableFuture<never>;
        get readyForSaving(): boolean;
        get chunkToSend(): $LevelChunk;
        get sendSyncFuture(): $CompletableFuture<never>;
    }
    export class $WorldGenRegion implements $WorldGenLevel {
        getHeight(): number;
        getHeight(heightmapType: $Heightmap$Types_, x: number, z: number): number;
        /**
         * Gets the random world seed.
         */
        getSeed(): number;
        /**
         * @deprecated
         */
        getLevel(): $ServerLevel;
        dimensionType(): $DimensionType;
        getRandom(): $RandomSource;
        setCurrentlyGenerating(currentlyGenerating: $Supplier_<string> | null): void;
        getSeaLevel(): number;
        getLightEngine(): $LevelLightEngine;
        getBiomeManager(): $BiomeManager;
        isFluidAtPosition(pos: $BlockPos_, predicate: $Predicate_<$FluidState>): boolean;
        /**
         * Gets the random world seed.
         */
        nextSubTickCount(): number;
        getFluidTicks(): $LevelTickAccess<$Fluid>;
        getBlockTicks(): $LevelTickAccess<$Block>;
        getNearestPlayer(x: number, arg1: number, y: number, arg3: number, z: $Predicate_<$Entity>): $Player;
        getSkyDarken(): number;
        isStateAtPosition(pos: $BlockPos_, predicate: $Predicate_<$BlockState>): boolean;
        getUncachedNoiseBiome(x: number, y: number, z: number): $Holder<$Biome>;
        hasChunk(chunkX: number, chunkZ: number): boolean;
        getShade(direction: $Direction_, shade: boolean): number;
        getEntities<T extends $Entity>(entityTypeTest: $EntityTypeTest<$Entity, T>, bounds: $AABB_, predicate: $Predicate_<T>): $List<T>;
        /**
         * Gets all entities within the specified AABB excluding the one passed into it.
         */
        getEntities(entity: $Entity | null, boundingBox: $AABB_, predicate: $Predicate_<$Entity> | null): $List<$Entity>;
        /**
         * Returns the world's WorldInfo object
         */
        getLevelData(): $LevelData;
        /**
         * Plays a sound. On the server, the sound is broadcast to all nearby *except* the given player. On the client, the sound only plays if the given player is the client player. Thus, this method is intended to be called from code running on both sides. The client plays it locally and the server plays it for everyone else.
         */
        playSound(player: $Player | null, pos: $BlockPos_, sound: $SoundEvent_, category: $SoundSource_, volume: number, pitch: number): void;
        gameEvent(gameEvent: $Holder_<$GameEvent>, pos: $Vec3_, context: $GameEvent$Context_): void;
        getCurrentDifficultyAt(pos: $BlockPos_): $DifficultyInstance;
        getCenter(): $ChunkPos;
        setBlock(pos: $BlockPos_, state: $BlockState_, flags: number, recursionLeft: number): boolean;
        levelEvent(player: $Player | null, type: number, pos: $BlockPos_, data: number): void;
        addFreshEntity(entity: $Entity): boolean;
        isClientSide(): boolean;
        enabledFeatures(): $FeatureFlagSet;
        getWorldBorder(): $WorldBorder;
        ensureCanWrite(pos: $BlockPos_): boolean;
        getBlockState(pos: $BlockPos_): $BlockState;
        addParticle(particleData: $ParticleOptions_, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number): void;
        /**
         * Gets the world's chunk provider
         */
        getChunkSource(): $ChunkSource;
        getMinBuildHeight(): number;
        destroyBlock(pos: $BlockPos_, dropBlock: boolean, entity: $Entity | null, recursionLeft: number): boolean;
        removeBlock(pos: $BlockPos_, isMoving: boolean): boolean;
        getChunk(x: number, z: number, chunkStatus: $ChunkStatus_, requireChunk: boolean): $ChunkAccess;
        getChunk(chunkX: number, chunkZ: number): $ChunkAccess;
        getServer(): $MinecraftServer;
        getFluidState(pos: $BlockPos_): $FluidState;
        getBlockEntity(pos: $BlockPos_): $BlockEntity;
        registryAccess(): $RegistryAccess;
        isOldChunkAround(pos: $ChunkPos, radius: number): boolean;
        addFreshEntityWithPassengers(entity: $Entity): void;
        scheduleTick(pos: $BlockPos_, block: $Block_, delay: number): void;
        scheduleTick(pos: $BlockPos_, fluid: $Fluid_, delay: number, priority: $TickPriority_): void;
        scheduleTick(pos: $BlockPos_, block: $Block_, delay: number, priority: $TickPriority_): void;
        scheduleTick(pos: $BlockPos_, fluid: $Fluid_, delay: number): void;
        blockUpdated(pos: $BlockPos_, block: $Block_): void;
        neighborShapeChanged(direction: $Direction_, queried: $BlockState_, pos: $BlockPos_, offsetPos: $BlockPos_, flags: number, recursionLevel: number): void;
        /**
         * Gets the random world seed.
         */
        dayTime(): number;
        playSound(player: $Player | null, pos: $BlockPos_, sound: $SoundEvent_, source: $SoundSource_): void;
        gameEvent(gameEvent: $Holder_<$GameEvent>, pos: $BlockPos_, context: $GameEvent$Context_): void;
        gameEvent(entity: $Entity | null, gameEvent: $Holder_<$GameEvent>, pos: $BlockPos_): void;
        gameEvent(entity: $Entity | null, gameEvent: $Holder_<$GameEvent>, pos: $Vec3_): void;
        gameEvent(gameEvent: $ResourceKey_<$GameEvent>, pos: $BlockPos_, context: $GameEvent$Context_): void;
        levelEvent(type: number, pos: $BlockPos_, data: number): void;
        getDifficulty(): $Difficulty;
        isUnobstructed(entity: $Entity | null, shape: $VoxelShape): boolean;
        getHeightmapPos(heightmapType: $Heightmap$Types_, pos: $BlockPos_): $BlockPos;
        /**
         * Will get all entities within the specified AABB excluding the one passed into it. Args: entityToExclude, aabb
         */
        getEntityCollisions(entity: $Entity | null, area: $AABB_): $List<$VoxelShape>;
        getBlockEntity<T extends $BlockEntity>(pos: $BlockPos_, blockEntityType: $BlockEntityType_<T>): (T) | undefined;
        getTimeOfDay(partialTick: number): number;
        getMoonPhase(): number;
        getMoonBrightness(): number;
        getNearbyEntities<T extends $LivingEntity>(entityClazz: $Class<T>, entityPredicate: $TargetingConditions, entity: $LivingEntity, area: $AABB_): $List<T>;
        getPlayerByUUID(uniqueId: $UUID_): $Player;
        getNearestEntity<T extends $LivingEntity>(entityClazz: $Class<T>, conditions: $TargetingConditions, target: $LivingEntity | null, x: number, arg4: number, y: number, arg6: $AABB_): T;
        getNearestEntity<T extends $LivingEntity>(entities: $List_<T>, predicate: $TargetingConditions, target: $LivingEntity | null, x: number, arg4: number, y: number): T;
        getNearestPlayer(x: number, arg1: number, y: number, arg3: number, z: boolean): $Player;
        getNearestPlayer(predicate: $TargetingConditions, target: $LivingEntity): $Player;
        getNearestPlayer(predicate: $TargetingConditions, target: $LivingEntity, x: number, arg3: number, y: number): $Player;
        getNearestPlayer(predicate: $TargetingConditions, x: number, arg2: number, y: number): $Player;
        getNearestPlayer(entity: $Entity, distance: number): $Player;
        getNearbyPlayers(predicate: $TargetingConditions, target: $LivingEntity, area: $AABB_): $List<$Player>;
        hasNearbyAlivePlayer(x: number, arg1: number, y: number, arg3: number): boolean;
        /**
         * Will get all entities within the specified AABB excluding the one passed into it. Args: entityToExclude, aabb
         */
        getEntities(entity: $Entity | null, area: $AABB_): $List<$Entity>;
        getEntitiesOfClass<T extends $Entity>(entityClass: $Class<T>, area: $AABB_): $List<T>;
        getEntitiesOfClass<T extends $Entity>(clazz: $Class<T>, area: $AABB_, filter: $Predicate_<T>): $List<T>;
        getBiome(pos: $BlockPos_): $Holder<$Biome>;
        /**
         * @deprecated
         */
        getLightLevelDependentMagicValue(pos: $BlockPos_): number;
        isEmptyBlock(pos: $BlockPos_): boolean;
        getBlockTint(blockPos: $BlockPos_, colorResolver: $ColorResolver_): number;
        getBiomeFabric(pos: $BlockPos_): $Holder<any>;
        getNoiseBiome(x: number, y: number, z: number): $Holder<$Biome>;
        getMaxLocalRawBrightness(pos: $BlockPos_): number;
        getMaxLocalRawBrightness(pos: $BlockPos_, amount: number): number;
        getChunkForCollisions(chunkX: number, chunkZ: number): $BlockGetter;
        canSeeSkyFromBelowWater(pos: $BlockPos_): boolean;
        hasBiomes(): boolean;
        isWaterAt(pos: $BlockPos_): boolean;
        getBlockStatesIfLoaded(aabb: $AABB_): $Stream<$BlockState>;
        /**
         * @deprecated
         */
        hasChunkAt(chunkX: number, chunkZ: number): boolean;
        /**
         * @deprecated
         */
        hasChunkAt(pos: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(fromX: number, fromZ: number, toX: number, toZ: number): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(from: $BlockPos_, to: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(fromX: number, fromY: number, fromZ: number, toX: number, toY: number, toZ: number): boolean;
        containsAnyLiquid(collisionBox: $AABB_): boolean;
        holderLookup<T>(registryKey: $ResourceKey_<$Registry<T>>): $HolderLookup<T>;
        getChunk(chunkX: number, chunkZ: number, chunkStatus: $ChunkStatus_): $ChunkAccess;
        getChunk(pos: $BlockPos_): $ChunkAccess;
        getPathfindingCostFromLightLevels(pos: $BlockPos_): number;
        getMcPlayers(): $List<$Player>;
        getMcEntities(): $Iterable<$Entity>;
        getPlayers(): $EntityArrayList;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        self(): $EntityGetter;
        getRawBrightness(pos: $BlockPos_, amount: number): number;
        getBrightness(lightType: $LightLayer_, blockPos: $BlockPos_): number;
        canSeeSky(pos: $BlockPos_): boolean;
        isUnobstructed(entity: $Entity): boolean;
        isUnobstructed(state: $BlockState_, pos: $BlockPos_, context: $CollisionContext): boolean;
        findSupportingBlock(entity: $Entity, box: $AABB_): ($BlockPos) | undefined;
        getBlockCollisions(entity: $Entity | null, collisionBox: $AABB_): $Iterable<$VoxelShape>;
        findFreePosition(entity: $Entity | null, shape: $VoxelShape, pos: $Vec3_, x: number, arg4: number, y: number): ($Vec3) | undefined;
        noCollision(entity: $Entity | null, boundingBox: $AABB_): boolean;
        noCollision(entity: $Entity): boolean;
        noCollision(collisionBox: $AABB_): boolean;
        noBlockCollision(entity: $Entity | null, boundingBox: $AABB_): boolean;
        getCollisions(entity: $Entity | null, collisionBox: $AABB_): $Iterable<$VoxelShape>;
        collidesWithSuffocatingBlock(entity: $Entity | null, boundingBox: $AABB_): boolean;
        getDirectSignalTo(pos: $BlockPos_): number;
        hasNeighborSignal(pos: $BlockPos_): boolean;
        getBestNeighborSignal(pos: $BlockPos_): number;
        /**
         * Returns the control signal emitted from the given position in the given direction.
         * If `diodesOnly` is `true`, this method returns the direct signal emitted if
         * and only if this position is occupied by a diode (i.e. a repeater or comparator).
         * Otherwise, if this position is occupied by a
         * redstone block,
         * this method will return the redstone signal emitted by it. If not, this method will
         * return the direct signal emitted from this position in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        getControlInputSignal(pos: $BlockPos_, direction: $Direction_, diodesOnly: boolean): number;
        /**
         * Returns whether a redstone signal is emitted from the given position in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        hasSignal(pos: $BlockPos_, direction: $Direction_): boolean;
        /**
         * Returns the direct redstone signal emitted from the given position in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        getDirectSignal(pos: $BlockPos_, direction: $Direction_): number;
        /**
         * Returns the direct redstone signal emitted from the given position in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        getSignal(pos: $BlockPos_, direction: $Direction_): number;
        /**
         * Shortcut method to get an optional holder from a ResourceKey.
         * see `IHolderLookupProviderExtension`
         */
        holder<T>(key: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        isAreaLoaded(center: $BlockPos_, range: number): boolean;
        /**
         * Shortcut method to get a holder from a ResourceKey.
         * see `IHolderLookupProviderExtension`
         */
        holderOrThrow<T>(key: $ResourceKey_<T>): $Holder<T>;
        /**
         * @deprecated
         */
        getBlockEntityRenderAttachment(arg0: $BlockPos_): $Object;
        /**
         * Sets a block state into this world.Flags are as follows:
         * 1 will cause a block update.
         * 2 will send the change to clients.
         * 4 will prevent the block from being re-rendered.
         * 8 will force any re-renders to run on the main thread instead
         * 16 will prevent neighbor reactions (e.g. fences connecting, observers pulsing).
         * 32 will prevent neighbor reactions from spawning drops.
         * 64 will signify the block is being moved.
         * Flags can be OR-ed
         */
        setBlock(pos: $BlockPos_, newState: $BlockState_, flags: number): boolean;
        destroyBlock(pos: $BlockPos_, isMoving: boolean): boolean;
        destroyBlock(pos: $BlockPos_, dropBlock: boolean, entity: $Entity | null): boolean;
        getEntities(): $EntityArrayList;
        getEntityByNetworkID(id: number): $Entity;
        getEntityByUUID(id: $UUID_): $Entity;
        isBlockInLine(context: $ClipBlockStateContext): $BlockHitResult;
        getBlockFloorHeight(pos: $BlockPos_): number;
        getBlockFloorHeight(shape: $VoxelShape, belowShapeSupplier: $Supplier_<$VoxelShape>): number;
        getBlockStates(aabb: $AABB_): $Stream<$BlockState>;
        getLightEmission(pos: $BlockPos_): number;
        getMaxLightLevel(): number;
        /**
         * Checks if there's block between `from` and `to` of context.
         * This uses the collision shape of provided block.
         */
        clip(context: $ClipContext): $BlockHitResult;
        clipWithInteractionOverride(startVec: $Vec3_, endVec: $Vec3_, pos: $BlockPos_, shape: $VoxelShape, state: $BlockState_): $BlockHitResult;
        /**
         * Computes the shade for a given normal.
         * Alternate version of the vanilla method taking in a `Direction`.
         */
        getShade(normalX: number, normalY: number, normalZ: number, shade: boolean): number;
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
         * Retrieves model data for a block at the given position.
         */
        getModelData(pos: $BlockPos_): $ModelData;
        /**
         * Get the `AuxiliaryLightManager` of the chunk at the given `ChunkPos`.
         * 
         * The light manager must be used to hold light values controlled by dynamic data from `BlockEntity`s
         * to ensure access to the light data is thread-safe and the data is available during chunk load from disk
         * where `BlockEntity`s are not yet added to the chunk.
         */
        getAuxLightManager(pos: $ChunkPos): $AuxiliaryLightManager;
        /**
         * Get the `AuxiliaryLightManager` of the chunk containing the given `BlockPos`.
         * 
         * The light manager must be used to hold light values controlled by dynamic data from `BlockEntity`s
         * to ensure access to the light data is thread-safe and the data is available during chunk load from disk
         * where `BlockEntity`s are not yet added to the chunk.
         */
        getAuxLightManager(pos: $BlockPos_): $AuxiliaryLightManager;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        constructor(level: $ServerLevel, cache: $StaticCache2D<$GenerationChunkHolder>, generatingStep: $ChunkStep_, center: $ChunkAccess);
        get seed(): number;
        get level(): $ServerLevel;
        get random(): $RandomSource;
        set currentlyGenerating(value: $Supplier_<string> | null);
        get seaLevel(): number;
        get lightEngine(): $LevelLightEngine;
        get biomeManager(): $BiomeManager;
        get fluidTicks(): $LevelTickAccess<$Fluid>;
        get blockTicks(): $LevelTickAccess<$Block>;
        get skyDarken(): number;
        get levelData(): $LevelData;
        get center(): $ChunkPos;
        get clientSide(): boolean;
        get worldBorder(): $WorldBorder;
        get chunkSource(): $ChunkSource;
        get minBuildHeight(): number;
        get server(): $MinecraftServer;
        get difficulty(): $Difficulty;
        get moonPhase(): number;
        get moonBrightness(): number;
        get mcPlayers(): $List<$Player>;
        get mcEntities(): $Iterable<$Entity>;
        get players(): $EntityArrayList;
        get maxLightLevel(): number;
        get minSection(): number;
        get maxSection(): number;
        get sectionsCount(): number;
        get maxBuildHeight(): number;
    }
    export class $ChunkTrackingView {
        static of(center: $ChunkPos, viewDistance: number): $ChunkTrackingView;
        /**
         * Calculates the chunks that the player needs to drop in the `oldChunkTrackingView` and the chunks that need to be sent for the `newChunkTrackingView`. The chunks that overlap in both views can be kept.
         */
        static difference(oldChunkTrackingView: $ChunkTrackingView, newChunkTrackingView: $ChunkTrackingView, chunkMarker: $Consumer_<$ChunkPos>, chunkDropper: $Consumer_<$ChunkPos>): void;
        static isInViewDistance(centerX: number, centerZ: number, viewDistance: number, x: number, z: number): boolean;
        /**
         * Check if a chunk `(x,z)` is within a `viewDistance` which is centered on `(centerX, centerZ)`
         */
        static isWithinDistance(centerX: number, centerZ: number, viewDistance: number, x: number, z: number, includeOuterChunksAdjacentToViewBorder: boolean): boolean;
        static EMPTY: $ChunkTrackingView;
    }
    export interface $ChunkTrackingView {
        contains(x: number, z: number, includeOuterChunksAdjacentToViewBorder: boolean): boolean;
        contains(x: number, z: number): boolean;
        contains(chunkPos: $ChunkPos): boolean;
        forEach(action: $Consumer_<$ChunkPos>): void;
        isInViewDistance(x: number, z: number): boolean;
    }
    export class $GenerationChunkHolder {
        scheduleChunkGenerationTask(targetStatus: $ChunkStatus_, chunkMap: $ChunkMap): $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        applyStep(step: $ChunkStep_, chunkMap: $GeneratingChunkMap, cache: $StaticCache2D<$GenerationChunkHolder>): $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        getFullStatus(): $FullChunkStatus;
        getChunkIfPresent(status: $ChunkStatus_): $ChunkAccess;
        getGenerationRefCount(): number;
        decreaseGenerationRefCount(): void;
        increaseGenerationRefCount(): void;
        updateHighestAllowedStatus(chunkMap: $ChunkMap): void;
        rescheduleChunkTask(chunkMap: $ChunkMap, targetStatus: $ChunkStatus_ | null): void;
        replaceProtoChunk(chunk: $ImposterProtoChunk): void;
        getTicketLevel(): number;
        removeTask(task: $ChunkGenerationTask): void;
        getPos(): $ChunkPos;
        getChunkIfPresentUnchecked(status: $ChunkStatus_): $ChunkAccess;
        getLatestChunk(): $ChunkAccess;
        getAllFutures(): $List<$Pair$1<$ChunkStatus, $CompletableFuture<$ChunkResult<$ChunkAccess>>>>;
        getLatestStatus(): $ChunkStatus;
        getQueueLevel(): number;
        getPersistedStatus(): $ChunkStatus;
        currentlyLoading: $LevelChunk;
        pos: $ChunkPos;
        static UNLOADED_CHUNK: $ChunkResult<$ChunkAccess>;
        static UNLOADED_CHUNK_FUTURE: $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        constructor(pos: $ChunkPos);
        get fullStatus(): $FullChunkStatus;
        get generationRefCount(): number;
        get ticketLevel(): number;
        get latestChunk(): $ChunkAccess;
        get allFutures(): $List<$Pair$1<$ChunkStatus, $CompletableFuture<$ChunkResult<$ChunkAccess>>>>;
        get latestStatus(): $ChunkStatus;
        get queueLevel(): number;
        get persistedStatus(): $ChunkStatus;
    }
    export class $ChunkResult<T> {
        static of<T>(value: T): $ChunkResult<T>;
        static orElse<R>(chunkResult: $ChunkResult<R>, orElse: R | null): R;
        static error<T>(errorSupplier: $Supplier_<string>): $ChunkResult<T>;
        static error<T>(error: string): $ChunkResult<T>;
    }
    export interface $ChunkResult<T> {
        map<R>(mappingFunction: $Function_<T, R>): $ChunkResult<R>;
        orElse(value: T | null): T;
        orElseThrow<E extends $Throwable>(exceptionSupplier: $Supplier_<E>): T;
        ifSuccess(action: $Consumer_<T>): $ChunkResult<T>;
        getError(): string;
        isSuccess(): boolean;
        get success(): boolean;
    }
    export class $ServerChunkCache$ChunkAndHolder extends $Record {
        holder(): $ChunkHolder;
        chunk(): $LevelChunk;
        constructor(chunk: $LevelChunk, holder: $ChunkHolder);
    }
    /**
     * Values that may be interpreted as {@link $ServerChunkCache$ChunkAndHolder}.
     */
    export type $ServerChunkCache$ChunkAndHolder_ = { holder?: $ChunkHolder, chunk?: $LevelChunk,  } | [holder?: $ChunkHolder, chunk?: $LevelChunk, ];
    export class $ServerChunkCache extends $ChunkSource implements $IServerChunkCacheExtension, $ServerChunkCacheAccessor {
        save(flush: boolean): void;
        move(player: $ServerPlayer): void;
        broadcast(entity: $Entity, packet: $Packet<never>): void;
        pollTask(): boolean;
        getLightEngine(): $ThreadedLevelLightEngine;
        getChunkDebugData(chunkPos: $ChunkPos): string;
        getPendingTasksCount(): number;
        getChunkFuture(x: number, z: number, chunkStatus: $ChunkStatus_, requireChunk: boolean): $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        setViewDistance(simulationDistance: number): void;
        runDistanceManagerUpdates(): boolean;
        handler$bkn000$sable$init(arg0: $ServerLevel, arg1: $LevelStorageSource$LevelStorageAccess, arg2: $DataFixer, arg3: $StructureTemplateManager, arg4: $Executor_, arg5: $ChunkGenerator, arg6: number, arg7: number, arg8: boolean, arg9: $ChunkProgressListener, arg10: $ChunkStatusUpdateListener_, arg11: $Supplier_<any>, arg12: $CallbackInfo): void;
        removeEntity(entity: $Entity): void;
        getGenerator(): $ChunkGenerator;
        getDataStorage(): $DimensionDataStorage;
        getGeneratorState(): $ChunkGeneratorStructureState;
        chunkScanner(): $ChunkScanAccess;
        randomState(): $RandomState;
        blockChanged(pos: $BlockPos_): void;
        getPoiManager(): $PoiManager;
        isPositionTicking(chunkPos: number): boolean;
        removeRegionTicket<T>(type: $TicketType<T>, pos: $ChunkPos, distance: number, value: T): void;
        removeRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T, arg4: boolean): void;
        getLastSpawnState(): $NaturalSpawner$SpawnState;
        addEntity(entity: $Entity): void;
        addRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T, arg4: boolean): void;
        addRegionTicket<T>(type: $TicketType<T>, pos: $ChunkPos, distance: number, value: T): void;
        broadcastAndSend(entity: $Entity, packet: $Packet<never>): void;
        removeTicketsOnClosing(): void;
        getTickingGenerated(): number;
        setSimulationDistance(simulationDistance: number): void;
        self(): $ServerChunkCache;
        /**
         * Sends a payload to all players watching the given entity.
         * 
         * If the entity is a player, the payload will not be sent to that player.
         */
        broadcast(entity: $Entity, payload: $CustomPacketPayload_): void;
        /**
         * Sends a payload to all players watching the given entity.
         * 
         * If the entity is a player, the payload will not be sent to that player.
         */
        broadcastAndSend(entity: $Entity, payload: $CustomPacketPayload_): void;
        invokeGetVisibleChunkIfPresent(chunkPos: number): $ChunkHolder;
        mainThread: $Thread;
        level: $ServerLevel;
        lightEngine: $ThreadedLevelLightEngine;
        chunkMap: $ChunkMap;
        constructor(level: $ServerLevel, levelStorageAccess: $LevelStorageSource$LevelStorageAccess, fixerUpper: $DataFixer, structureManager: $StructureTemplateManager, dispatcher: $Executor_, generator: $ChunkGenerator, viewDistance: number, simulationDistance: number, sync: boolean, progressListener: $ChunkProgressListener, chunkStatusListener: $ChunkStatusUpdateListener_, overworldDataStorage: $Supplier_<$DimensionDataStorage>);
        get pendingTasksCount(): number;
        set viewDistance(value: number);
        get generator(): $ChunkGenerator;
        get dataStorage(): $DimensionDataStorage;
        get generatorState(): $ChunkGeneratorStructureState;
        get poiManager(): $PoiManager;
        get lastSpawnState(): $NaturalSpawner$SpawnState;
        get tickingGenerated(): number;
        set simulationDistance(value: number);
    }
    export class $ChunkResult$Success<T> extends $Record implements $ChunkResult<T> {
        value(): T;
        map<R>(arg0: $Function_<T, R>): $ChunkResult<R>;
        orElse(arg0: T | null): T;
        orElseThrow<E extends $Throwable>(arg0: $Supplier_<E>): T;
        ifSuccess(arg0: $Consumer_<T>): $ChunkResult<T>;
        getError(): string;
        isSuccess(): boolean;
        constructor(arg0: T);
        get success(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ChunkResult$Success}.
     */
    export type $ChunkResult$Success_<T> = { value?: any,  } | [value?: any, ];
    export class $PlayerMap {
        ignored(player: $ServerPlayer): boolean;
        removePlayer(player: $ServerPlayer): void;
        addPlayer(player: $ServerPlayer, skipPlayer: boolean): void;
        unIgnorePlayer(player: $ServerPlayer): void;
        getAllPlayers(): $Set<$ServerPlayer>;
        ignoredOrUnknown(player: $ServerPlayer): boolean;
        ignorePlayer(player: $ServerPlayer): void;
        constructor();
        get allPlayers(): $Set<$ServerPlayer>;
    }
    export class $ChunkLevel {
        static isLoaded(level: number): boolean;
        static getStatusAroundFullChunk(distance: number, chunkStatus: $ChunkStatus_ | null): $ChunkStatus;
        static getStatusAroundFullChunk(level: number): $ChunkStatus;
        static isBlockTicking(level: number): boolean;
        static generationStatus(level: number): $ChunkStatus;
        static isEntityTicking(level: number): boolean;
        static byStatus(status: $FullChunkStatus_): number;
        static byStatus(status: $ChunkStatus_): number;
        static fullStatus(level: number): $FullChunkStatus;
        static RADIUS_AROUND_FULL_CHUNK: number;
        static ENTITY_TICKING_LEVEL: number;
        static MAX_LEVEL: number;
        static BLOCK_TICKING_LEVEL: number;
        constructor();
    }
    export class $ServerEntity {
        removePairing(player: $ServerPlayer): void;
        sendChanges(): void;
        getLastSentMovement(): $Vec3;
        addPairing(player: $ServerPlayer): void;
        getLastSentYHeadRot(): number;
        sendPairingData(arg0: $ServerPlayer, arg1: $PacketAndPayloadAcceptor<$ClientGamePacketListener>): void;
        getPositionBase(): $Vec3;
        getLastSentYRot(): number;
        getLastSentXRot(): number;
        static FORCED_POS_UPDATE_PERIOD: number;
        constructor(level: $ServerLevel, entity: $Entity, updateInterval: number, trackDelta: boolean, broadcast: $Consumer_<$Packet<never>>);
        get lastSentMovement(): $Vec3;
        get lastSentYHeadRot(): number;
        get positionBase(): $Vec3;
        get lastSentYRot(): number;
        get lastSentXRot(): number;
    }
    export class $GeneratingChunkMap {
    }
    export interface $GeneratingChunkMap {
        applyStep(chunk: $GenerationChunkHolder, step: $ChunkStep_, cache: $StaticCache2D<$GenerationChunkHolder>): $CompletableFuture<$ChunkAccess>;
        runGenerationTasks(): void;
        scheduleGenerationTask(targetStatus: $ChunkStatus_, pos: $ChunkPos): $ChunkGenerationTask;
        acquireGeneration(chunkPos: number): $GenerationChunkHolder;
        releaseGeneration(chunk: $GenerationChunkHolder): void;
    }
    export class $ColumnPos extends $Record {
        toChunkPos(): $ChunkPos;
        x(): number;
        z(): number;
        toLong(): number;
        static getX(pos: number): number;
        static getZ(pos: number): number;
        static asLong(x: number, z: number): number;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $ColumnPos}.
     */
    export type $ColumnPos_ = { x?: number, z?: number,  } | [x?: number, z?: number, ];
    export class $ChunkTaskPriorityQueue<T> {
        release(chunkPos: number, arg1: boolean): void;
        pop(): $Stream<$Either<T, $Runnable>>;
        submit(task: (T) | undefined, chunkPos: number, arg2: number): void;
        resortChunkTasks(queueLevel: number, chunkPos: $ChunkPos, ticketLevel: number): void;
        getAcquired(): $LongSet;
        hasWork(): boolean;
        static PRIORITY_LEVEL_COUNT: number;
        constructor(name: string, maxTasks: number);
        get acquired(): $LongSet;
    }
    export class $ChunkGenerationTask {
        static create(chunkMap: $GeneratingChunkMap, targetStatus: $ChunkStatus_, pos: $ChunkPos): $ChunkGenerationTask;
        markForCancellation(): void;
        getCenter(): $GenerationChunkHolder;
        runUntilWait(): $CompletableFuture<never>;
        targetStatus: $ChunkStatus;
        get center(): $GenerationChunkHolder;
    }
    export class $ServerChunkCache$MainThreadExecutor extends $BlockableEventLoop<$Runnable> {
        this$0: $ServerChunkCache;
        constructor(level: $ServerChunkCache, arg1: $Level_);
    }
    export class $BlockDestructionProgress implements $Comparable<$BlockDestructionProgress>, $BlockDestructionProgressExtension {
        compareTo(other: $BlockDestructionProgress): number;
        /**
         * Retrieves the 'date' at which the PartiallyDestroyedBlock was created.
         */
        getId(): number;
        /**
         * Inserts damage value into this partially destroyed Block. -1 causes client renderer to delete it, otherwise ranges from 1 to 10.
         */
        setProgress(damage: number): void;
        create$setExtraPositions(arg0: $Set_<any>): void;
        create$getExtraPositions(): $Set<any>;
        /**
         * Retrieves the 'date' at which the PartiallyDestroyedBlock was created.
         */
        getUpdatedRenderTick(): number;
        /**
         * Inserts damage value into this partially destroyed Block. -1 causes client renderer to delete it, otherwise ranges from 1 to 10.
         */
        updateTick(damage: number): void;
        getPos(): $BlockPos;
        /**
         * Retrieves the 'date' at which the PartiallyDestroyedBlock was created.
         */
        getProgress(): number;
        constructor(id: number, pos: $BlockPos_);
        get id(): number;
        get updatedRenderTick(): number;
        get pos(): $BlockPos;
    }
    export class $TickingTracker extends $ChunkTracker {
        getLevel(chunkPos: $ChunkPos): number;
        runAllUpdates(): void;
        getTicketDebugString(chunkPos: number): string;
        replacePlayerTicketsLevel(ticketLevel: number): void;
        removeTicket<T>(type: $TicketType<T>, chunkPos: $ChunkPos, ticketLevel: number, key: T): void;
        removeTicket(chunkPos: number, arg1: $Ticket<never>): void;
        addTicket(chunkPos: number, arg1: $Ticket<never>): void;
        addTicket<T>(type: $TicketType<T>, chunkPos: $ChunkPos, ticketLevel: number, key: T): void;
        levelCount: number;
        chunks: $Long2ByteMap;
        static SOURCE: number;
        static MAX_LEVEL: number;
        constructor();
    }
    export class $ThreadedLevelLightEngine extends $LevelLightEngine implements $AutoCloseable, $ThreadedLevelLightEngineExt {
        close(): void;
        axiom$checkSectionBlocks(cx: number, cy: number, cz: number, array: number[]): void;
        axiom$waitForPendingTasks(x: number, z: number): $CompletableFuture<any>;
        waitForPendingTasks(x: number, z: number): $CompletableFuture<never>;
        lightChunk(chunk: $ChunkAccess, lightEnabled: boolean): $CompletableFuture<$ChunkAccess>;
        tryScheduleUpdate(): void;
        updateChunkStatus(chunkPos: $ChunkPos): void;
        runUpdate(): void;
        initializeLight(chunk: $ChunkAccess, lightEnabled: boolean): $CompletableFuture<$ChunkAccess>;
        static DEFAULT_BATCH_SIZE: number;
        static LIGHT_SECTION_PADDING: number;
        skyEngine: $LightEngine<never, never>;
        levelHeightAccessor: $LevelHeightAccessor;
        blockEngine: $LightEngine<never, never>;
        constructor(lightChunk: $LightChunkGetter, chunkMap: $ChunkMap, skyLight: boolean, taskMailbox: $ProcessorMailbox<$Runnable_>, sorterMailbox: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<$Runnable_>>);
    }
    export class $ThreadedLevelLightEngine$TaskType extends $Enum<$ThreadedLevelLightEngine$TaskType> {
        static values(): $ThreadedLevelLightEngine$TaskType[];
        static valueOf(arg0: string): $ThreadedLevelLightEngine$TaskType;
        static PRE_UPDATE: $ThreadedLevelLightEngine$TaskType;
        static POST_UPDATE: $ThreadedLevelLightEngine$TaskType;
    }
    /**
     * Values that may be interpreted as {@link $ThreadedLevelLightEngine$TaskType}.
     */
    export type $ThreadedLevelLightEngine$TaskType_ = "pre_update" | "post_update";
    export class $ChunkTaskPriorityQueueSorter$Release {
        task: $Runnable;
        pos: number;
        clearQueue: boolean;
        constructor(task: $Runnable_, pos: number, arg2: boolean);
    }
    export class $DistanceManager$FixedPlayerDistanceChunkTracker extends $ChunkTracker {
        levelCount: number;
        static SOURCE: number;
    }
    export class $DistanceManager$PlayerTicketTracker extends $DistanceManager$FixedPlayerDistanceChunkTracker {
        levelCount: number;
        static SOURCE: number;
    }
    export class $DemoMode extends $ServerPlayerGameMode {
        static DEMO_DAYS: number;
        static TOTAL_PLAY_TICKS: number;
        isDestroyingBlock: boolean;
        level: $ServerLevel;
        player: $ServerPlayer;
        constructor(player: $ServerPlayer);
    }
    export class $ChunkTracker extends $DynamicGraphMinFixedPoint {
        update(pos: number, arg1: number, level: boolean): void;
        getLevelFromSource(pos: number): number;
        levelCount: number;
        static SOURCE: number;
        constructor(firstQueuedLevel: number, width: number, height: number);
    }
    export class $ChunkResult$Fail<T> extends $Record implements $ChunkResult<T> {
        map<R>(arg0: $Function_<T, R>): $ChunkResult<R>;
        orElse(arg0: T | null): T;
        orElseThrow<E extends $Throwable>(arg0: $Supplier_<E>): T;
        error(): $Supplier<string>;
        ifSuccess(arg0: $Consumer_<T>): $ChunkResult<T>;
        getError(): string;
        isSuccess(): boolean;
        constructor(arg0: $Supplier_<string>);
        get success(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ChunkResult$Fail}.
     */
    export type $ChunkResult$Fail_<T> = { error?: $Supplier_<string>,  } | [error?: $Supplier_<string>, ];
    export class $ChunkTaskPriorityQueueSorter$Message<T> {
        task: $Function<$ProcessorHandle<$Unit>, T>;
        pos: number;
        level: $IntSupplier;
        constructor(task: $Function_<$ProcessorHandle<$Unit>, T>, pos: number, arg2: $IntSupplier_);
    }
    export class $FullChunkStatus extends $Enum<$FullChunkStatus> {
        static values(): $FullChunkStatus[];
        static valueOf(arg0: string): $FullChunkStatus;
        isOrAfter(status: $FullChunkStatus_): boolean;
        static ENTITY_TICKING: $FullChunkStatus;
        static INACCESSIBLE: $FullChunkStatus;
        static FULL: $FullChunkStatus;
        static BLOCK_TICKING: $FullChunkStatus;
    }
    /**
     * Values that may be interpreted as {@link $FullChunkStatus}.
     */
    export type $FullChunkStatus_ = "inaccessible" | "full" | "block_ticking" | "entity_ticking";
    export class $ServerLevel$EntityCallbacks implements $LevelCallback<$Entity> {
    }
    export class $ClientInformation extends $Record {
        write(buffer: $FriendlyByteBuf): void;
        language(): string;
        static createDefault(): $ClientInformation;
        chatColors(): boolean;
        mainHand(): $HumanoidArm;
        textFilteringEnabled(): boolean;
        allowsListing(): boolean;
        modelCustomisation(): number;
        viewDistance(): number;
        chatVisibility(): $ChatVisiblity;
        static MAX_LANGUAGE_LENGTH: number;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: string, arg1: number, arg2: $ChatVisiblity_, arg3: boolean, arg4: number, arg5: $HumanoidArm_, arg6: boolean, arg7: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ClientInformation}.
     */
    export type $ClientInformation_ = { viewDistance?: number, modelCustomisation?: number, textFilteringEnabled?: boolean, mainHand?: $HumanoidArm_, chatColors?: boolean, chatVisibility?: $ChatVisiblity_, allowsListing?: boolean, language?: string,  } | [viewDistance?: number, modelCustomisation?: number, textFilteringEnabled?: boolean, mainHand?: $HumanoidArm_, chatColors?: boolean, chatVisibility?: $ChatVisiblity_, allowsListing?: boolean, language?: string, ];
    export class $ChunkMap extends $ChunkStorage implements $ChunkHolder$PlayerProvider, $GeneratingChunkMap, $ServerChunkLoadingManagerAccessor {
        anyPlayerCloseEnoughForSpawning(chunkPos: $ChunkPos): boolean;
        size(): number;
        generator(): $ChunkGenerator;
        move(player: $ServerPlayer): void;
        onFullChunkStatusChange(chunkPos: $ChunkPos, fullChunkStatus: $FullChunkStatus_): void;
        applyStep(chunk: $GenerationChunkHolder, step: $ChunkStep_, cache: $StaticCache2D<$GenerationChunkHolder>): $CompletableFuture<$ChunkAccess>;
        tick(hasMoreTime: $BooleanSupplier_): void;
        tick(): void;
        broadcast(entity: $Entity, packet: $Packet<never>): void;
        debugFuturesAndCreateReportedException(exception: $IllegalStateException, details: string): $ReportedException;
        getLightEngine(): $ThreadedLevelLightEngine;
        getStorageName(): string;
        promoteChunkMap(): boolean;
        getChunkDebugData(pos: $ChunkPos): string;
        runGenerationTasks(): void;
        getPlayersWatching(arg0: $Entity): $List<$ServerPlayer>;
        prepareAccessibleChunk(holder: $ChunkHolder): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        /**
         * Sets level and loads/unloads chunk.
         */
        updateChunkScheduling(chunkPos: number, arg1: number, newLevel: $ChunkHolder | null, holder: number): $ChunkHolder;
        getPlayerViewDistance(player: $ServerPlayer): number;
        getUpdatingChunkIfPresent(chunkPos: number): $ChunkHolder;
        prepareEntityTickingChunk(holder: $ChunkHolder): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        prepareTickingChunk(holder: $ChunkHolder): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        getPlayersCloseForSpawning(chunkPos: $ChunkPos): $List<$ServerPlayer>;
        scheduleGenerationTask(targetStatus: $ChunkStatus_, pos: $ChunkPos): $ChunkGenerationTask;
        resendBiomesForChunks(chunks: $List_<$ChunkAccess>): void;
        getChunkQueueLevel(chunkPos: number): $IntSupplier;
        /**
         * Gets an unmodifiable iterable of all loaded chunks in the chunk manager
         */
        getChunks(): $Iterable<$ChunkHolder>;
        setServerViewDistance(viewDistance: number): void;
        getVisibleChunkIfPresent(chunkPos: number): $ChunkHolder;
        generatorState(): $ChunkGeneratorStructureState;
        removeEntity(entity: $Entity): void;
        randomState(): $RandomState;
        getDistanceManager(): $DistanceManager;
        getPoiManager(): $PoiManager;
        /**
         * Returns the players tracking the given chunk.
         */
        getPlayers(pos: $ChunkPos, boundaryOnly: boolean): $List<$ServerPlayer>;
        addEntity(entity: $Entity): void;
        dumpChunks(writer: $Writer): void;
        hasWork(): boolean;
        broadcastAndSend(entity: $Entity, packet: $Packet<never>): void;
        scheduleOnMainThreadMailbox(arg0: $ChunkTaskPriorityQueueSorter$Message<$Runnable_>): void;
        acquireGeneration(chunkPos: number): $GenerationChunkHolder;
        saveChunkIfNeeded(holder: $ChunkHolder): boolean;
        scheduleUnload(chunkPos: number, arg1: $ChunkHolder): void;
        getChunkToSend(chunkPos: number): $LevelChunk;
        /**
         * Checks if a chunk is on the edge of the player's view distance.
         */
        isChunkTracked(player: $ServerPlayer, x: number, z: number): boolean;
        releaseGeneration(chunk: $GenerationChunkHolder): void;
        updatePlayerStatus(player: $ServerPlayer, track: boolean): void;
        saveAllChunks(flush: boolean): void;
        getTickingGenerated(): number;
        waitForLightBeforeSending(chunkPos: $ChunkPos, range: number): void;
        getEntityMap(): $Int2ObjectMap<$EntityTrackerAccessor>;
        fixerUpper: $DataFixer;
        toDrop: $LongSet;
        level: $ServerLevel;
        updatingChunkMap: $Long2ObjectLinkedOpenHashMap<$ChunkHolder>;
        static $assertionsDisabled: boolean;
        static MAX_VIEW_DISTANCE: number;
        static LAST_MONOLYTH_STRUCTURE_DATA_VERSION: number;
        unloadQueue: $Queue<$Runnable>;
        static MIN_VIEW_DISTANCE: number;
        visibleChunkMap: $Long2ObjectLinkedOpenHashMap<$ChunkHolder>;
        modified: boolean;
        static FORCED_TICKET_LEVEL: number;
        chunkSaveCooldowns: $Long2LongMap;
        constructor(level: $ServerLevel, levelStorageAccess: $LevelStorageSource$LevelStorageAccess, fixerUpper: $DataFixer, structureManager: $StructureTemplateManager, dispatcher: $Executor_, mainThreadExecutor: $BlockableEventLoop<$Runnable_>, lightChunk: $LightChunkGetter, generator: $ChunkGenerator, progressListener: $ChunkProgressListener, chunkStatusListener: $ChunkStatusUpdateListener_, overworldDataStorage: $Supplier_<$DimensionDataStorage>, viewDistance: number, sync: boolean);
        get lightEngine(): $ThreadedLevelLightEngine;
        get storageName(): string;
        get chunks(): $Iterable<$ChunkHolder>;
        set serverViewDistance(value: number);
        get distanceManager(): $DistanceManager;
        get poiManager(): $PoiManager;
        get tickingGenerated(): number;
        get entityMap(): $Int2ObjectMap<$EntityTrackerAccessor>;
    }
    export class $ServerPlayerGameMode {
        /**
         * Sets the world instance.
         */
        setLevel(serverLevel: $ServerLevel): void;
        tick(): void;
        /**
         * Get if we are in creative game mode.
         */
        isSurvival(): boolean;
        handleBlockBreakAction(pos: $BlockPos_, action: $ServerboundPlayerActionPacket$Action_, face: $Direction_, maxBuildHeight: number, sequence: number): void;
        useItem(player: $ServerPlayer, level: $Level_, stack: $ItemStack_, hand: $InteractionHand_): $InteractionResult;
        useItemOn(player: $ServerPlayer, level: $Level_, stack: $ItemStack_, hand: $InteractionHand_, hitResult: $BlockHitResult): $InteractionResult;
        /**
         * Get if we are in creative game mode.
         */
        isCreative(): boolean;
        changeGameModeForPlayer(gameModeForPlayer: $GameType_): boolean;
        getGameModeForPlayer(): $GameType;
        setGameModeForPlayer(gameModeForPlayer: $GameType_, previousGameModeForPlayer: $GameType_ | null): void;
        /**
         * Attempts to harvest a block
         */
        destroyBlock(pos: $BlockPos_): boolean;
        getPreviousGameModeForPlayer(): $GameType;
        destroyAndAck(pos: $BlockPos_, sequence: number, message: string): void;
        isDestroyingBlock: boolean;
        level: $ServerLevel;
        player: $ServerPlayer;
        constructor(player: $ServerPlayer);
        get survival(): boolean;
        get creative(): boolean;
        get previousGameModeForPlayer(): $GameType;
    }
    export class $ChunkMap$DistanceManager extends $DistanceManager {
        ticketThrottlerInput: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<$Runnable>>;
        ticketsToRelease: $LongSet;
        chunksToUpdateFutures: $Set<$ChunkHolder>;
        tickets: $Long2ObjectOpenHashMap<$SortedArraySet<$Ticket<never>>>;
        ticketThrottler: $ChunkTaskPriorityQueueSorter;
        this$0: $ChunkMap;
        playersPerChunk: $Long2ObjectMap<$ObjectSet<$ServerPlayer>>;
        static LOGGER: $Logger;
        mainThreadExecutor: $Executor;
        ticketThrottlerReleaser: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Release>;
        static PLAYER_TICKET_LEVEL: number;
        tickingTicketsTracker: $TickingTracker;
        constructor(dispatcher: $ChunkMap, mainThreadExecutor: $Executor_, arg2: $Executor_);
    }
    export class $ServerPlayer$RespawnPosAngle extends $Record {
        position(): $Vec3;
        static of(position: $Vec3_, towardsPos: $BlockPos_): $ServerPlayer$RespawnPosAngle;
        yaw(): number;
        constructor(position: $Vec3_, yaw: number);
    }
    /**
     * Values that may be interpreted as {@link $ServerPlayer$RespawnPosAngle}.
     */
    export type $ServerPlayer$RespawnPosAngle_ = { position?: $Vec3_, yaw?: number,  } | [position?: $Vec3_, yaw?: number, ];
    export class $DistanceManager {
        removePlayer(sectionPos: $SectionPos, player: $ServerPlayer): void;
        inEntityTickingRange(chunkPos: number): boolean;
        /**
         * Returns the number of chunks taken into account when calculating the mob cap
         */
        getNaturalSpawnChunkCount(): number;
        runAllUpdates(chunkMap: $ChunkMap): boolean;
        purgeStaleTickets(): void;
        shouldForceTicks(chunkPos: number): boolean;
        updateChunkScheduling(chunkPos: number, arg1: number, newLevel: $ChunkHolder | null, holder: number): $ChunkHolder;
        updatePlayerTickets(viewDistance: number): void;
        getTicketDebugString(chunkPos: number): string;
        hasTickets(): boolean;
        updateSimulationDistance(viewDistance: number): void;
        removeTicket(chunkPos: number, arg1: $Ticket<never>): void;
        removeTicket<T>(type: $TicketType<T>, pos: $ChunkPos, distance: number, value: T): void;
        removeRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T, arg4: boolean): void;
        removeRegionTicket<T>(type: $TicketType<T>, pos: $ChunkPos, distance: number, value: T): void;
        updateChunkForced(pos: $ChunkPos, add: boolean): void;
        getDebugStatus(): string;
        addPlayer(sectionPos: $SectionPos, player: $ServerPlayer): void;
        addTicket(chunkPos: number, arg1: $Ticket<never>): void;
        addTicket<T>(type: $TicketType<T>, pos: $ChunkPos, distance: number, value: T): void;
        inBlockTickingRange(chunkPos: number): boolean;
        addRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T, arg4: boolean): void;
        addRegionTicket<T>(type: $TicketType<T>, pos: $ChunkPos, distance: number, value: T): void;
        getChunk(chunkPos: number): $ChunkHolder;
        tickingTracker(): $TickingTracker;
        hasPlayersNearby(chunkPos: number): boolean;
        isChunkToRemove(chunkPos: number): boolean;
        removeTicketsOnClosing(): void;
        ticketThrottlerInput: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<$Runnable>>;
        ticketsToRelease: $LongSet;
        chunksToUpdateFutures: $Set<$ChunkHolder>;
        tickets: $Long2ObjectOpenHashMap<$SortedArraySet<$Ticket<never>>>;
        ticketThrottler: $ChunkTaskPriorityQueueSorter;
        playersPerChunk: $Long2ObjectMap<$ObjectSet<$ServerPlayer>>;
        static LOGGER: $Logger;
        mainThreadExecutor: $Executor;
        ticketThrottlerReleaser: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Release>;
        static PLAYER_TICKET_LEVEL: number;
        tickingTicketsTracker: $TickingTracker;
        constructor(dispatcher: $Executor_, mainThreadExecutor: $Executor_);
        get naturalSpawnChunkCount(): number;
        get debugStatus(): string;
    }
    export class $ServerPlayer extends $Player implements $ServerPlayerKJS, $VeilPacketManager$PacketSink, $PlayerFreezeExtension, $ServerPlayerRespawnExtension, $ServerPlayerExt {
        /**
         * Gets the player's IP address. Used in /banip.
         */
        getLanguage(): string;
        drop(bypassHiddenChat: boolean): boolean;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        disconnect(): void;
        updateOptions(clientInformation: $ClientInformation_): void;
        teleportTo(newLevel: $ServerLevel, x: number, arg2: number, y: number, arg4: number, z: number): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        doTick(): void;
        /**
         * Attacks for the player the targeted entity with the currently equipped item.  The equipped item has hitEntity called on it. Args: targetEntity
         */
        setCamera(targetEntity: $Entity | null): void;
        getCamera(): $Entity;
        sendPacket(arg0: $Packet<any>): void;
        getStatsCounter(): $ServerStatsCounter;
        restoreFrom(that: $ServerPlayer, keepEverything: boolean): void;
        handler$bhm002$sable$tick(arg0: $CallbackInfo): void;
        checkRidingStatistics(dx: number, arg1: number, dy: number): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        requestedViewDistance(): number;
        /**
         * Add experience levels to this player.
         */
        setExperiencePoints(levels: number): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        trackStartFallingPosition(): void;
        /**
         * Add experience levels to this player.
         */
        setExperienceLevels(levels: number): void;
        /**
         * Returns if other players can attack this player
         */
        isChangingDimension(): boolean;
        getRespawnDimension(): $ResourceKey<$Level>;
        createCommonSpawnInfo(level: $ServerLevel): $CommonPlayerSpawnInfo;
        checkMovementStatistics(dx: number, arg1: number, dy: number): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        clearRaidOmenPosition(): void;
        getRaidOmenPosition(): $BlockPos;
        getChunkTrackingView(): $ChunkTrackingView;
        /**
         * Returns null which indicates the tab list should just display the player's name, return a different value to display the specified text instead of the player's name
         */
        getTabListDisplayName(): $Component;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        hasChangedDimension(): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        resetLastActionTime(): void;
        sable$takeQueuedFreezeFrom(player: $ServerPlayer): void;
        shouldFilterMessageTo(player: $ServerPlayer): boolean;
        axiom$setNoPhysicalTrigger(spawnExtraParticlesOnFall: boolean): void;
        setRaidOmenPosition(raidOmenPosition: $BlockPos_): void;
        sable$getQueuedFreeze(): $Pair<any, any>;
        copyRespawnPosition(player: $ServerPlayer): void;
        sable$getRespawnPoint(): $UUID;
        /**
         * Returns if other players can attack this player
         */
        axiom$isNoPhysicalTrigger(): boolean;
        setChunkTrackingView(chunkTrackingView: $ChunkTrackingView): void;
        setTabListHeaderFooter(arg0: $Component_, arg1: $Component_): void;
        /**
         * Returns if other players can attack this player
         */
        allowsListing(): boolean;
        sendChatMessage(message: $OutgoingChatMessage, filtered: boolean, boundType: $ChatType$Bound_): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        initInventoryMenu(): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        showEndCredits(): void;
        /**
         * Gets the player's IP address. Used in /banip.
         */
        getIpAddress(): string;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getRespawnAngle(): number;
        setServerLevel(level: $ServerLevel): void;
        doCheckFallDamage(movementX: number, arg1: number, movementY: number, arg3: boolean): void;
        /**
         * Returns if other players can attack this player
         */
        isRespawnForced(): boolean;
        /**
         * Returns if other players can attack this player
         */
        hasDisconnected(): boolean;
        setPlayerInput(strafe: number, forward: number, jumping: boolean, sneaking: boolean): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        resetSentInfo(): void;
        /**
         * Changes the player's gamemode.
         * 
         * @param gameMode One of: `'survival'`, `'creative'`, `'adventure'`, `'spectator'`.
         */
        setGameMode(gameMode: $GameType_): boolean;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        refreshTabListName(): void;
        getChatSession(): $RemoteChatSession;
        getTextFilter(): $TextFilter;
        setRespawnPosition(dimension: $ResourceKey_<$Level>, position: $BlockPos_ | null, angle: number, forced: boolean, sendMessage: boolean): void;
        setKnownMovement(knownMovement: $Vec3_): void;
        /**
         * Returns null which indicates the tab list should just display the player's name, return a different value to display the specified text instead of the player's name
         */
        getTabListFooter(): $Component;
        setChatSession(chatSession: $RemoteChatSession_): void;
        clientInformation(): $ClientInformation;
        getRecipeBook(): $ServerRecipeBook;
        /**
         * Returns if other players can attack this player
         */
        canChatInColor(): boolean;
        /**
         * Returns null which indicates the tab list should just display the player's name, return a different value to display the specified text instead of the player's name
         */
        getTabListHeader(): $Component;
        getLastSectionPos(): $SectionPos;
        loadGameTypes(compound: $CompoundTag_ | null): void;
        setTabListFooter(component: $Component_): void;
        sendServerStatus(serverStatus: $ServerStatus_): void;
        setTabListHeader(component: $Component_): void;
        setLastSectionPos(sectionPos: $SectionPos): void;
        getChatVisibility(): $ChatVisiblity;
        getLastActionTime(): number;
        getRespawnPosition(): $BlockPos;
        serverLevel(): $ServerLevel;
        sendSystemMessage(chatComponent: $Component_, actionBar: boolean): void;
        handler$com000$axiom$isInvulnerableTo(cir: $CallbackInfoReturnable<any>): void;
        findRespawnPositionAndUseSpawnBlock(keepInventory: boolean, postDimensionTransition: $DimensionTransition$PostDimensionTransition_): $DimensionTransition;
        setSpawnExtraParticlesOnFall(spawnExtraParticlesOnFall: boolean): void;
        static findRespawnAndUseSpawnBlock(level: $ServerLevel, pos: $BlockPos_, angle: number, forced: boolean, keepInventory: boolean): ($ServerPlayer$RespawnPosAngle) | undefined;
        wrapMethod$bjn000$sable$teleportTo(arg0: $ServerLevel, arg1: number, arg2: number, arg3: number, arg4: $Set_<any>, arg5: number, arg6: number, arg7: $Operation_<any>): boolean;
        wrapMethod$bjn000$sable$teleportTo(arg0: number, arg1: number, arg2: number, arg3: $Operation_<any>): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        trackEnteredOrExitedLavaOnVehicle(): void;
        lookAt(fromAnchor: $EntityAnchorArgument$Anchor_, entity: $Entity, toAnchor: $EntityAnchorArgument$Anchor_): void;
        getAdvancements(): $PlayerAdvancements;
        /**
         * Checks, whether the player is a server operator.
         * Returns if other players can attack this player
         */
        isOp(): boolean;
        /**
         * Kicks the player from the server with the provided reason.
         * 
         * @param reason A text component, containing the kick reason. It may be a string, which will be implicitly wrapped into a text component.
         */
        kick(component: $Component_): void;
        /**
         * Kicks the player from the server with a generic reason.
         * Sets the current crafting inventory back to the 2x2 square.
         */
        kick(): void;
        /**
         * Bans the player from the server.
         * 
         * @param banner A string, that specifies who/what banned the player.
         * @param reason A string, that contains the ban reason.
         * @param banDuration Duration of a ban. Negative durations will result in a 10-year ban.
         */
        ban(banner: string, reason: string, banDuration: $Duration_): void;
        /**
         * Heals the player to full, and fully restores hunger and saturation.
         * Sets the current crafting inventory back to the 2x2 square.
         */
        heal(): void;
        getSpawnLocation(): $LevelBlock;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_, columns: number, rows: number): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_, columns: number): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_): void;
        isAdvancementDone(id: $ResourceLocation_): boolean;
        captureInventory(autoRestore: boolean): $Container;
        /**
         * Switches the player's gamemode between Creative and Survival.
         * To change the player's gamemode to a mode other than Creative or Survival, use `setGameMode`.
         * 
         * @param mode `true` to change the player's gamemode to Creative.
         * `false` to change the player's gamemode to Survival.
         */
        setCreativeMode(spawnExtraParticlesOnFall: boolean): void;
        revokeAdvancement(statKey: $ResourceLocation_): void;
        unlockAdvancement(statKey: $ResourceLocation_): void;
        setSpawnLocation(c: $LevelBlock): void;
        openChestGUI(title: $Component_, rows: number, gui: $Consumer_<$ChestMenuData>): void;
        openChestGUI(gui: $Consumer_<$KubeJSGUI>): void;
        sendPacket(...arg0: $CustomPacketPayload_[]): void;
        lastHurtByPlayerTime: number;
        autoSpinAttackItemStack: $ItemStack;
        lerpYRot: number;
        static DEFAULT_BASE_GRAVITY: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static ENTITY_COUNTER: $AtomicInteger;
        lerpYHeadRot: number;
        useItem: $ItemStack;
        yHeadRot: number;
        yCloakO: number;
        noPhysics: boolean;
        fallFlyTicks: number;
        autoSpinAttackDmg: number;
        yo: number;
        connection: $ServerGamePacketListenerImpl;
        jumpTriggerTime: number;
        static DATA_LIVING_ENTITY_FLAGS: $EntityDataAccessor<number>;
        yBodyRotO: number;
        static FLAG_ONFIRE: number;
        simulated$currentTypeWriter: $BlockPos;
        removalReason: $Entity$RemovalReason;
        zza: number;
        rotOffs: number;
        swingingArm: $InteractionHand;
        static CRAFTING_SLOT_OFFSET: number;
        static INTERACTION_DISTANCE_VERIFICATION_BUFFER: number;
        static ID_TAG: string;
        static WAKE_UP_DURATION: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        simulated$launchedPlunger: $LaunchedPlungerEntity;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        wonGame: boolean;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        gameMode: $ServerPlayerGameMode;
        appliedScale: number;
        object: $Object;
        static STANDING_DIMENSIONS: $EntityDimensions;
        static DATA_PLAYER_MODE_CUSTOMISATION: $EntityDataAccessor<number>;
        yya: number;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        server: $MinecraftServer;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        static DEFAULT_MODEL_CUSTOMIZATION: number;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        static SWIMMING_BB_HEIGHT: number;
        static DEFAULT_ENTITY_INTERACTION_RANGE: number;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        experienceLevel: number;
        hurtDir: number;
        static DEFAULT_BABY_SCALE: number;
        static ATTRIBUTES_FIELD: string;
        static PERSISTED_NBT_TAG: string;
        static DEFAULT_BB_HEIGHT: number;
        seenCredits: boolean;
        xxa: number;
        zCloak: number;
        lerpHeadSteps: number;
        static $assertionsDisabled: boolean;
        flyDist: number;
        currentImpulseImpactPos: $Vec3;
        brain: $Brain<never>;
        static PASSENGERS_TAG: string;
        stringUUID: string;
        xCloakO: number;
        wasOnFire: boolean;
        autoSpinAttackTicks: number;
        attackAnim: number;
        noActionTime: number;
        zOld: number;
        timeOffs: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static LIVING_ENTITY_FLAG_SPIN_ATTACK: number;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        static ENDER_SLOT_OFFSET: number;
        firstTick: boolean;
        damageContainers: $Stack<$DamageContainer>;
        static ARMOR_SLOT_OFFSET: number;
        static SLEEP_DURATION: number;
        static HELD_ITEM_SLOT: number;
        yCloak: number;
        run: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        uuid: $UUID;
        xCloak: number;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        animStepO: number;
        lastHurtByPlayer: $Player;
        static BOARDING_COOLDOWN: number;
        static MAX_HEALTH: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        static DEFAULT_EYE_HEIGHT: number;
        enderChestInventory: $PlayerEnderChestContainer;
        static CROUCH_BB_HEIGHT: number;
        moveDist: number;
        enchantmentSeed: number;
        zCloakO: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        oRun: number;
        bob: number;
        experienceProgress: number;
        totalExperience: number;
        xOld: number;
        wasInPowderSnow: boolean;
        containerMenu: $AbstractContainerMenu;
        hurtTime: number;
        swinging: boolean;
        hurtMarked: boolean;
        attackStrengthTicker: number;
        useItemRemaining: number;
        entityData: $SynchedEntityData;
        static DEFAULT_MAIN_HAND: $HumanoidArm;
        foodData: $FoodData;
        static SLEEPING_DIMENSIONS: $EntityDimensions;
        deathTime: number;
        static DATA_PLAYER_MAIN_HAND: $EntityDataAccessor<number>;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        wasUnderwater: boolean;
        defaultFlySpeed: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DEFAULT_VEHICLE_ATTACHMENT: $Vec3;
        inventoryMenu: $InventoryMenu;
        inventory: $Inventory;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static LIVING_ENTITY_FLAG_OFF_HAND: number;
        random: $RandomSource;
        static DATA_SHOULDER_LEFT: $EntityDataAccessor<$CompoundTag>;
        lerpSteps: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        minorHorizontalCollision: boolean;
        static LIVING_ENTITY_FLAG_IS_USING: number;
        levelCallback: $EntityInLevelCallback;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        lerpX: number;
        lerpZ: number;
        lerpY: number;
        lerpXRot: number;
        fishing: $FishingHook;
        removeArrowTime: number;
        walkDistO: number;
        static SWIMMING_BB_WIDTH: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        animStep: number;
        yBodyRot: number;
        blocksBuilding: boolean;
        takeXpDelay: number;
        deathScore: number;
        static DEFAULT_BLOCK_INTERACTION_RANGE: number;
        oBob: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        static DATA_SHOULDER_RIGHT: $EntityDataAccessor<$CompoundTag>;
        currentExplosionCause: $Entity;
        constructor(server: $MinecraftServer, level: $ServerLevel, gameProfile: $GameProfile, clientInformation: $ClientInformation_);
        get language(): string;
        get statsCounter(): $ServerStatsCounter;
        set experiencePoints(value: number);
        set experienceLevels(value: number);
        get changingDimension(): boolean;
        get respawnDimension(): $ResourceKey<$Level>;
        get tabListDisplayName(): $Component;
        get ipAddress(): string;
        get respawnAngle(): number;
        get respawnForced(): boolean;
        get textFilter(): $TextFilter;
        set knownMovement(value: $Vec3_);
        get recipeBook(): $ServerRecipeBook;
        get chatVisibility(): $ChatVisiblity;
        get lastActionTime(): number;
        set spawnExtraParticlesOnFall(value: boolean);
        get advancements(): $PlayerAdvancements;
        get op(): boolean;
        set creativeMode(value: boolean);
    }
    export class $ChunkTaskPriorityQueueSorter implements $ChunkHolder$LevelChangeListener, $AutoCloseable {
        static message<T>(chunk: $GenerationChunkHolder, task: $Function_<$ProcessorHandle<$Unit>, T>): $ChunkTaskPriorityQueueSorter$Message<T>;
        static message(chunk: $GenerationChunkHolder, task: $Runnable_): $ChunkTaskPriorityQueueSorter$Message<$Runnable>;
        static message(task: $Runnable_, pos: number, arg2: $IntSupplier_): $ChunkTaskPriorityQueueSorter$Message<$Runnable>;
        static message<T>(task: $Function_<$ProcessorHandle<$Unit>, T>, pos: number, arg2: $IntSupplier_): $ChunkTaskPriorityQueueSorter$Message<T>;
        close(): void;
        static release(task: $Runnable_, pos: number, arg2: boolean): $ChunkTaskPriorityQueueSorter$Release;
        getProcessor<T>(processor: $ProcessorHandle<T>, flush: boolean): $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<T>>;
        getReleaseProcessor(processor: $ProcessorHandle<$Runnable_>): $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Release>;
        getDebugStatus(): string;
        hasWork(): boolean;
        onLevelChange(chunkPos: $ChunkPos, queueLevelGetter: $IntSupplier_, ticketLevel: number, queueLevelSetter: $IntConsumer_): void;
        constructor(queues: $List_<$ProcessorHandle<never>>, task: $Executor_, maxTasks: number);
        get debugStatus(): string;
    }
    export class $ServerLevel extends $Level implements $WorldGenLevel, $ServerLevelKJS, $VeilPacketManager$PacketSink, $ServerWorldCache, $ServerLevelAccessor, $ServerLevelSceneExtension, $SubLevelContainerHolder, $WaterOcclusionContainerHolder, $ServerLevelExt {
        save(progress: $ProgressListener | null, flush: boolean, skipSave: boolean): void;
        unload(chunk: $LevelChunk): void;
        /**
         * Runs a single tick for the world
         */
        tick(hasTimeLeft: $BooleanSupplier_): void;
        /**
         * Gets the random world seed.
         */
        getSeed(): number;
        getLevel(): $ServerLevel;
        axiom$getWorldProperties(): $ServerWorldPropertiesRegistry;
        axiom$markChunkDirty(cx: number, cz: number): void;
        fabric_invalidateCache(blockPos: $BlockPos_): void;
        registerCapabilityListener(arg0: $BlockPos_, arg1: $ICapabilityInvalidationListener_): void;
        fabric_registerCache(arg0: $BlockPos_, arg1: $BlockApiCacheImpl<any, any>): void;
        findNearestMapStructure(structureTag: $TagKey_<$Structure>, pos: $BlockPos_, radius: number, skipExistingChunks: boolean): $BlockPos;
        onStructureStartsAvailable(chunk: $ChunkAccess): void;
        isPositionEntityTicking(pos: $BlockPos_): boolean;
        isNaturalSpawningAllowed(chunkPos: $ChunkPos): boolean;
        isNaturalSpawningAllowed(pos: $BlockPos_): boolean;
        addWorldGenChunkEntities(entities: $Stream<$Entity>): void;
        addLegacyChunkEntities(entities: $Stream<$Entity>): void;
        getFluidTicks(): $LevelTicks<$Fluid>;
        getEntities<T extends $Entity>(typeTest: $EntityTypeTest<$Entity, T>, predicate: $Predicate_<T>, output: $List_<T>): void;
        getEntities<T extends $Entity>(typeTest: $EntityTypeTest<$Entity, T>, predicate: $Predicate_<T>, output: $List_<T>, maxResults: number): void;
        getEntities<T extends $Entity>(typeTest: $EntityTypeTest<$Entity, T>, predicate: $Predicate_<T>): $List<T>;
        isFlat(): boolean;
        /**
         * Resets the updateEntityTick field to 0
         */
        tickTime(): void;
        sendPacket(packet: $Packet<any>): void;
        axiom$getPendingLightUpdates(cx: number, cy: number, cz: number): number[];
        handler$bko000$sable$saveSubLevels(arg0: $ProgressListener, arg1: boolean, arg2: boolean, arg3: $CallbackInfo): void;
        /**
         * Called when an entity is spawned in the world. This includes players.
         */
        tryAddFreshEntityWithPassengers(entity: $Entity): boolean;
        sable$getWaterOcclusionContainer(): $WaterOcclusionContainer<any>;
        handler$bib000$sable$kickEntity(arg0: $Entity, arg1: $CallbackInfoReturnable<any>): void;
        axiom$relightChunkStarlight(cx: number, cz: number): void;
        handler$col000$axiom$afterInit(ci: $CallbackInfo): void;
        wrapMethod$bkb000$sable$preExplode(arg0: $Entity, arg1: $DamageSource_, arg2: $ExplosionDamageCalculator, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: $Level$ExplosionInteraction_, arg9: $ParticleOptions_, arg10: $ParticleOptions_, arg11: $Holder_<any>, arg12: $Operation_<any>): $Explosion;
        /**
         * Resets the updateEntityTick field to 0
         */
        cleanCapabilityListenerReferences(): void;
        getStructureManager(): $StructureTemplateManager;
        getDataStorage(): $DimensionDataStorage;
        structureManager(): $StructureManager;
        tickNonPassenger(entity: $Entity): void;
        isHandlingTick(): boolean;
        getPortalForcer(): $PortalForcer;
        /**
         * @deprecated
         * Returns the Entity with the given ID, or null if it doesn't exist in this World.
         */
        getEntityOrPart(id: number): $Entity;
        getRandomPlayer(): $ServerPlayer;
        /**
         * @deprecated
         */
        setDragonFight(dragonFight: $EndDragonFight | null): void;
        tickPrecipitation(blockPos: $BlockPos_): void;
        tickCustomSpawners(spawnEnemies: boolean, spawnFriendlies: boolean): void;
        addRespawnedPlayer(player: $ServerPlayer): void;
        getLogicalHeight(): number;
        addNewPlayer(player: $ServerPlayer): void;
        getPoiManager(): $PoiManager;
        /**
         * Resets the updateEntityTick field to 0
         */
        resetWeatherCycle(): void;
        sable$getSceneID(): number;
        sable$setSceneID(timeFlash: number): void;
        sectionsToVillage(pos: $SectionPos): number;
        getDragonFight(): $EndDragonFight;
        startTickingChunk(chunk: $LevelChunk): void;
        getRandomSequence(location: $ResourceLocation_): $RandomSource;
        setDefaultSpawnPos(pos: $BlockPos_, angle: number): void;
        /**
         * Gets an unmodifiable iterator of all loaded entities in the world.
         */
        getAllEntities(): $Iterable<$Entity>;
        /**
         * Returns the name of the current chunk provider, by calling chunkprovider.makeString()
         */
        getWatchdogStats(): string;
        findClosestBiome3d(biomePredicate: $Predicate_<$Holder<$Biome>>, pos: $BlockPos_, radius: number, horizontalStep: number, verticalStep: number): $Pair$1<$BlockPos, $Holder<$Biome>>;
        saveDebugReport(path: $Path_): void;
        getRandomSequences(): $RandomSequences;
        setChunkForced(chunkX: number, chunkZ: number, add: boolean): boolean;
        isCloseToVillage(pos: $BlockPos_, sections: number): boolean;
        clearBlockEvents(boundingBox: $BoundingBox): void;
        getPathTypeCache(): $PathTypeCache;
        getForcedChunks(): $LongSet;
        areEntitiesLoaded(chunkPos: number): boolean;
        onReputationEvent(type: $ReputationEventType, target: $Entity, host: $ReputationEventHandler_): void;
        getDragons(): $List<$EnderDragon>;
        getPlayers(predicate: $Predicate_<$ServerPlayer>): $List<$ServerPlayer>;
        getPlayers(predicate: $Predicate_<$ServerPlayer>, maxResults: number): $List<$ServerPlayer>;
        tickChunk(chunk: $LevelChunk, randomTickSpeed: number): void;
        setDayTime(time: number): void;
        isVillage(pos: $SectionPos): boolean;
        isVillage(pos: $BlockPos_): boolean;
        getRaidAt(pos: $BlockPos_): $Raid;
        isRaided(pos: $BlockPos_): boolean;
        getRaids(): $Raids;
        findLightningTargetAround(pos: $BlockPos_): $BlockPos;
        setWeatherParameters(clearTime: number, weatherTime: number, isRaining: boolean, isThundering: boolean): void;
        /**
         * Resets the updateEntityTick field to 0
         */
        axiom$processTasks(): void;
        /**
         * Resets the updateEntityTick field to 0
         */
        resetEmptyTime(): void;
        addDuringTeleport(entity: $Entity): void;
        getPersistentData(): $CompoundTag;
        removePlayerImmediately(player: $ServerPlayer, reason: $Entity$RemovalReason_): void;
        canSleepThroughNights(): boolean;
        /**
         * Called when an entity is spawned in the world. This includes players.
         */
        addWithUUID(entity: $Entity): boolean;
        /**
         * Gets the world's chunk provider
         */
        getChunkSource(): $ServerChunkCache;
        sendParticles<T extends $ParticleOptions>(type: T, posX: number, arg2: number, posY: number, arg4: number, posZ: number, arg6: number, particleCount: number, xOffset: number): number;
        sendParticles(player: $ServerPlayer, longDistance: boolean, posX: number, arg3: number, posY: number, arg5: $Packet<never>): boolean;
        sendParticles<T extends $ParticleOptions>(player: $ServerPlayer, type: T, longDistance: boolean, posX: number, arg4: number, posY: number, arg6: number, posZ: number, arg8: number, particleCount: number, xOffset: number): boolean;
        handler$col000$axiom$onPlayerJoinedWorld(serverPlayer: $ServerPlayer, ci: $CallbackInfo): void;
        sable$getPlotContainer(): $SubLevelContainer;
        /**
         * Resets the updateEntityTick field to 0
         */
        updateSleepingPlayerList(): void;
        setCurrentlyGenerating(currentlyGenerating: $Supplier_<string> | null): void;
        ensureCanWrite(pos: $BlockPos_): boolean;
        self(): $EntityGetter;
        sendPacket(...arg0: $CustomPacketPayload_[]): void;
        addFreshEntityWithPassengers(entity: $Entity): void;
        create$getEntityTickList(): $EntityTickList;
        getChunk(chunkX: number, chunkZ: number): $ChunkAccess;
        restoringBlockSnapshots: boolean;
        neighborUpdater: $NeighborUpdater;
        static LONG_PARTICLE_CLIP_RANGE: number;
        static RAIN_DELAY: $IntProvider;
        randValue: number;
        levelData: $WritableLevelData;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        navigatingMobs: $Set<$Mob>;
        static MAX_BRIGHTNESS: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        entityTickList: $EntityTickList;
        raids: $Raids;
        rainLevel: number;
        dragonParts: $Int2ObjectMap<$PartEntity<never>>;
        oThunderLevel: number;
        static THUNDER_DURATION: $IntProvider;
        static RAIN_DURATION: $IntProvider;
        players: $List<$ServerPlayer>;
        static $assertionsDisabled: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        isUpdatingNavigations: boolean;
        addend: number;
        entityManager: $PersistentEntitySectionManager<$Entity>;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        oRainLevel: number;
        static END_SPAWN_POINT: $BlockPos;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        blockEntityTickers: $List<$TickingBlockEntity>;
        captureBlockSnapshots: boolean;
        constructor(server: $MinecraftServer, dispatcher: $Executor_, levelStorageAccess: $LevelStorageSource$LevelStorageAccess, serverLevelData: $ServerLevelData, dimension: $ResourceKey_<$Level>, levelStem: $LevelStem_, progressListener: $ChunkProgressListener, isDebug: boolean, biomeZoomSeed: number, arg9: $List_<$CustomSpawner_>, customSpawners: boolean, tickTime: $RandomSequences | null);
        get seed(): number;
        get level(): $ServerLevel;
        get fluidTicks(): $LevelTicks<$Fluid>;
        get flat(): boolean;
        get dataStorage(): $DimensionDataStorage;
        get handlingTick(): boolean;
        get portalForcer(): $PortalForcer;
        get randomPlayer(): $ServerPlayer;
        get logicalHeight(): number;
        get poiManager(): $PoiManager;
        get allEntities(): $Iterable<$Entity>;
        get watchdogStats(): string;
        get randomSequences(): $RandomSequences;
        get pathTypeCache(): $PathTypeCache;
        get forcedChunks(): $LongSet;
        get dragons(): $List<$EnderDragon>;
        get persistentData(): $CompoundTag;
        get chunkSource(): $ServerChunkCache;
        set currentlyGenerating(value: $Supplier_<string> | null);
    }
    export class $SectionTracker extends $DynamicGraphMinFixedPoint {
        update(pos: number, arg1: number, level: boolean): void;
        getLevelFromSource(pos: number): number;
        levelCount: number;
        static SOURCE: number;
        constructor(firstQueuedLevel: number, width: number, height: number);
    }
    export class $ChunkMap$TrackedEntity implements $EntityTrackerAccessor {
    }
    export class $DistanceManager$ChunkTicketTracker extends $ChunkTracker {
        levelCount: number;
        static SOURCE: number;
    }
}
