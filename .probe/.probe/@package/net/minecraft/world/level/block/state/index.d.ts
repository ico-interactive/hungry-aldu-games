import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $EntityType_, $EntityType, $LivingEntity, $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlag, $FeatureFlagSet, $FeatureElement } from "@package/net/minecraft/world/flag";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $RandomSource } from "@package/net/minecraft/util";
import { $InteractionResult, $MenuProvider, $InteractionHand_, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $CustomBlockState, $CustomBlock } from "@package/com/moulberry/axiom/custom_blocks";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $IBlockStateExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $ItemAbility_ } from "@package/net/neoforged/neoforge/common";
import { $Item, $DyeColor_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Projectile } from "@package/net/minecraft/world/entity/projectile";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $NoteBlockInstrument, $Property, $NoteBlockInstrument_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $RenderShape, $Mirror_, $SoundType_, $SoundType, $Block, $Block_, $Rotation_, $SupportType_ } from "@package/net/minecraft/world/level/block";
import { $RelativeURL } from "@package/dev/latvian/mods/kubejs/web";
import { $BlockStateKJS, $BlockBehaviourKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $HitResult, $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $FastMap } from "@package/malte0811/ferritecore/fastmap";
import { $TreeConfiguration } from "@package/net/minecraft/world/level/levelgen/feature/configurations";
import { $PhysicsBlockPropertiesDefinition_, $PhysicsBlockPropertyTypes$PhysicsBlockPropertyType_ } from "@package/dev/ryanhcode/sable/physics/config/block_properties";
import { $BlockStateExtension } from "@package/dev/ryanhcode/sable/mixinterface/block_properties";
import { $AbstractBlockSettingsAccessor, $AbstractBlockAccessor } from "@package/net/fabricmc/fabric/mixin/object/builder";
import { $BlockBehaviourAccessor, $StateHolderAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Map, $Map$Entry, $List, $Map_, $Collection_, $Collection } from "@package/java/util";
import { $Supplier_, $Consumer_, $Predicate_, $Function, $BiConsumer_, $ToIntFunction, $Function_, $ToIntFunction_ } from "@package/java/util/function";
import { $Reference2ObjectArrayMap, $Reference2ObjectMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $PathType, $PathType_, $PathComputationType_ } from "@package/net/minecraft/world/level/pathfinder";
import { $ServerPlayer$RespawnPosAngle, $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $HolderSet_, $BlockPos_, $Registry, $Holder_, $Holder, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Enum, $Comparable_, $Comparable, $Object } from "@package/java/lang";
import { $LootTable, $LootParams$Builder } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockAndTintGetter, $Explosion, $LevelAccessor, $LevelReader, $BlockGetter, $SignalGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $FluidState, $Fluid_, $PushReaction_, $PushReaction, $MapColor } from "@package/net/minecraft/world/level/material";
import { $ImmutableList, $Table } from "@package/com/google/common/collect";
import { $Pattern } from "@package/java/util/regex";
import { $FastMapStateHolder, $BlockStateCacheAccess } from "@package/malte0811/ferritecore/ducks";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $StateCache, $IStateCacheAccessor } from "@package/xfacthd/framedblocks/api/block/cache";
import { $RecordCodecBuilder } from "@package/com/mojang/serialization/codecs";
import { $AccessorStateDefinitionBuilder } from "@package/xfacthd/framedblocks/mixin";
import { $BlockBehaviourAccessor as $BlockBehaviourAccessor$1 } from "@package/dev/simulated_team/simulated/mixin/accessor";
import { $BlockEntityType_, $BlockEntity, $BlockEntityTicker } from "@package/net/minecraft/world/level/block/entity";
import { $BubbleColumnDirection } from "@package/net/neoforged/neoforge/common/enums";
export * as pattern from "@package/net/minecraft/world/level/block/state/pattern";
export * as properties from "@package/net/minecraft/world/level/block/state/properties";
export * as predicate from "@package/net/minecraft/world/level/block/state/predicate";

declare module "@package/net/minecraft/world/level/block/state" {
    export class $BlockBehaviour$OffsetType extends $Enum<$BlockBehaviour$OffsetType> {
        static values(): $BlockBehaviour$OffsetType[];
        static valueOf(arg0: string): $BlockBehaviour$OffsetType;
        static XZ: $BlockBehaviour$OffsetType;
        static XYZ: $BlockBehaviour$OffsetType;
        static NONE: $BlockBehaviour$OffsetType;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$OffsetType}.
     */
    export type $BlockBehaviour$OffsetType_ = "none" | "xz" | "xyz";
    export class $StateDefinition<O, S extends $StateHolder<O, S>> {
        getProperty(propertyName: string): $Property<never>;
        getProperties(): $Collection<$Property<never>>;
        getOwner(): O;
        any(): S;
        getPossibleStates(): $ImmutableList<S>;
        static NAME_PATTERN: $Pattern;
        constructor(stateValueFunction: $Function_<O, S>, owner: O, valueFunction: $StateDefinition$Factory_<O, S>, propertiesByName: $Map_<string, $Property<never>>);
        get properties(): $Collection<$Property<never>>;
        get owner(): O;
        get possibleStates(): $ImmutableList<S>;
    }
    export class $BlockBehaviour$BlockStateBase$Cache implements $BlockStateCacheAccess {
    }
    export class $StateDefinition$Builder<O, S extends $StateHolder<O, S>> implements $AccessorStateDefinitionBuilder {
        add(...properties: $Property<never>[]): $StateDefinition$Builder<O, S>;
        create(stateValueFunction: $Function_<O, S>, stateFunction: $StateDefinition$Factory_<O, S>): $StateDefinition<O, S>;
        framedblocks$getProperties(): $Map<string, $Property<never>>;
        constructor(owner: O);
    }
    export class $BlockBehaviour implements $FeatureElement, $BlockBehaviourKJS, $BlockBehaviourAccessor$1, $BlockBehaviourAccessor, $AbstractBlockAccessor {
        properties(): $BlockBehaviour$Properties;
        /**
         * Returns the blockstate with the given rotation from the passed blockstate. If inapplicable, returns the passed blockstate.
         */
        rotate(state: $BlockState_, rotation: $Rotation_): $BlockState;
        /**
         * Returns the blockstate with the given mirror of the passed blockstate. If inapplicable, returns the passed blockstate.
         */
        mirror(state: $BlockState_, mirror: $Mirror_): $BlockState;
        getShape(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        /**
         * Performs a random tick on a block.
         */
        tick(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): void;
        /**
         * Return a random long to be passed to `BakedModel#getQuads`, used for random model rotations
         */
        getSeed(state: $BlockState_, pos: $BlockPos_): number;
        updateIndirectNeighbourShapes(arg0: $BlockState_, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: number, arg4: number): void;
        getRenderShape(arg0: $BlockState_): $RenderShape;
        isOcclusionShapeFullBlock(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        propagatesSkylightDown(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        setExplosionResistance(arg0: number): void;
        setRandomTickCallback(callback: $Consumer_<any>): void;
        getBlockSupportShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): $VoxelShape;
        getAnalogOutputSignal(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): number;
        setIsRandomlyTicking(arg0: boolean): void;
        getInteractionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): $VoxelShape;
        isCollisionShapeFullBlock(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        useShapeForLightOcclusion(arg0: $BlockState_): boolean;
        hasAnalogOutputSignal(arg0: $BlockState_): boolean;
        getMaxHorizontalOffset(): number;
        getMaxVerticalOffset(): number;
        asItem(): $Item;
        canBeReplaced(arg0: $BlockState_, arg1: $Fluid_): boolean;
        canBeReplaced(arg0: $BlockState_, arg1: $BlockPlaceContext): boolean;
        codec(): $MapCodec<$Block>;
        onRemove(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        attack(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player): void;
        useItemOn(arg0: $ItemStack_, arg1: $BlockState_, arg2: $Level_, arg3: $BlockPos_, arg4: $Player, arg5: $InteractionHand_, arg6: $BlockHitResult): $ItemInteractionResult;
        isAir(arg0: $BlockState_): boolean;
        requiredFeatures(): $FeatureFlagSet;
        skipRendering(arg0: $BlockState_, arg1: $BlockState_, arg2: $Direction_): boolean;
        getCollisionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
        /**
         * @deprecated
         */
        getSoundType(arg0: $BlockState_): $SoundType;
        static simpleCodec<B extends $Block>(arg0: $Function_<$BlockBehaviour$Properties, B>): $MapCodec<B>;
        isSignalSource(arg0: $BlockState_): boolean;
        setSpeedFactor(arg0: number): void;
        setSoundType(arg0: $SoundType_): void;
        setJumpFactor(arg0: number): void;
        setFriction(arg0: number): void;
        isRandomlyTicking(arg0: $BlockState_): boolean;
        static propertiesCodec<B extends $Block>(): $RecordCodecBuilder<B, $BlockBehaviour$Properties>;
        isPathfindable(arg0: $BlockState_, arg1: $PathComputationType_): boolean;
        defaultMapColor(): $MapColor;
        getVisualShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        getLootTable(): $ResourceKey<$LootTable>;
        getOcclusionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): $VoxelShape;
        spawnAfterBreak(arg0: $BlockState_, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $ItemStack_, arg4: boolean): void;
        triggerEvent(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: number, arg4: number): boolean;
        getLightBlock(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): number;
        neighborChanged(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Block_, arg4: $BlockPos_, arg5: boolean): void;
        getDirectSignal(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): number;
        getMenuProvider(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): $MenuProvider;
        onProjectileHit(arg0: $Level_, arg1: $BlockState_, arg2: $BlockHitResult, arg3: $Projectile): void;
        entityInside(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Entity): void;
        onExplosionHit(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Explosion, arg4: $BiConsumer_<$ItemStack, $BlockPos>): void;
        useWithoutItem(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player, arg4: $BlockHitResult): $InteractionResult;
        getShadeBrightness(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): number;
        getDestroyProgress(arg0: $BlockState_, arg1: $Player, arg2: $BlockGetter, arg3: $BlockPos_): number;
        defaultDestroyTime(): number;
        getDrops(arg0: $BlockState_, arg1: $LootParams$Builder): $List<$ItemStack>;
        asBlock(): $Block;
        onPlace(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        randomTick(arg0: $BlockState_, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $RandomSource): void;
        getSignal(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): number;
        canSurvive(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        getFluidState(arg0: $BlockState_): $FluidState;
        isEnabled(arg0: $FeatureFlagSet): boolean;
        getTypeData(): $Map<string, $Object>;
        getRegistry(): $Registry<$Block>;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        asHolder(): $Holder<$Block>;
        getId(): string;
        getKey(): $ResourceKey<$Block>;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getIdLocation(): $ResourceLocation;
        getTagKeys(): $List<$TagKey<$Block>>;
        getTags(): $List<$ResourceLocation>;
        hasTag(tag: $ResourceLocation_): boolean;
        getMod(): string;
        getProperties(): $BlockBehaviour$Properties;
        getHasCollision(): boolean;
        create$getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        explosionResistance: number;
        drops: $ResourceKey<$LootTable>;
        dynamicShape: boolean;
        static UPDATE_SHAPE_ORDER: $Direction[];
        speedFactor: number;
        hasCollision: boolean;
        soundType: $SoundType;
        friction: number;
        jumpFactor: number;
        constructor(properties: $BlockBehaviour$Properties);
        set randomTickCallback(value: $Consumer_<any>);
        get maxHorizontalOffset(): number;
        get maxVerticalOffset(): number;
        get lootTable(): $ResourceKey<$LootTable>;
        get typeData(): $Map<string, $Object>;
        get registry(): $Registry<$Block>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get id(): string;
        get key(): $ResourceKey<$Block>;
        get idLocation(): $ResourceLocation;
        get tagKeys(): $List<$TagKey<$Block>>;
        get tags(): $List<$ResourceLocation>;
        get mod(): string;
    }
    export class $BlockState extends $BlockBehaviour$BlockStateBase implements $IBlockStateExtension, $BlockStateExtension, $CustomBlockState {
        getProperty(property: $Property<any>): $Comparable<any>;
        getVanillaState(): $BlockState;
        setPropertyUnsafe(property: $Property<any>, value: $Comparable_<any>): $CustomBlockState;
        sable$getProperty(arg0: $PhysicsBlockPropertyTypes$PhysicsBlockPropertyType_<any>): $Object;
        axiomHasProperty(property: $Property<any>): boolean;
        sable$loadProperties(arg0: $StateDefinition<any, any>, arg1: $PhysicsBlockPropertiesDefinition_): void;
        getCustomBlock(): $CustomBlock;
        isEmpty(): boolean;
        rotate(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $Rotation_): $BlockState;
        getBlockPathType(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Mob): $PathType;
        shouldHideAdjacentFluidFace(arg0: $Direction_, arg1: $FluidState): boolean;
        canRedstoneConnectTo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        getBubbleColumnDirection(): $BubbleColumnDirection;
        shouldDisplayFluidOverlay(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $FluidState): boolean;
        getToolModifiedState(arg0: $UseOnContext, arg1: $ItemAbility_, arg2: boolean): $BlockState;
        shouldCheckWeakPower(arg0: $SignalGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        getStateAtViewpoint(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Vec3_): $BlockState;
        getBeaconColorMultiplier(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): number;
        canDropFromExplosion(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Explosion): boolean;
        collisionExtendsVertically(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Entity): boolean;
        supportsExternalFaceHiding(): boolean;
        getExplosionResistance(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Explosion): number;
        hasDynamicLightEmission(): boolean;
        onDestroyedByPlayer(arg0: $Level_, arg1: $BlockPos_, arg2: $Player, arg3: boolean, arg4: $FluidState): boolean;
        onDestroyedByPushReaction(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $FluidState): void;
        getEnchantPowerBonus(arg0: $LevelReader, arg1: $BlockPos_): number;
        getAdjacentBlockPathType(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Mob, arg3: $PathType_): $PathType;
        hidesNeighborFace(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): boolean;
        getWeakChanges(arg0: $LevelReader, arg1: $BlockPos_): boolean;
        getBedDirection(arg0: $LevelReader, arg1: $BlockPos_): $Direction;
        isSlimeBlock(): boolean;
        isStickyBlock(): boolean;
        getFlammability(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): number;
        getFriction(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Entity): number;
        getLightEmission(arg0: $BlockGetter, arg1: $BlockPos_): number;
        canHarvestBlock(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Player): boolean;
        getRespawnPosition(arg0: $EntityType_<never>, arg1: $LevelReader, arg2: $BlockPos_, arg3: number): ($ServerPlayer$RespawnPosAngle) | undefined;
        setBedOccupied(arg0: $Level_, arg1: $BlockPos_, arg2: $LivingEntity, arg3: boolean): void;
        addRunningEffects(arg0: $Level_, arg1: $BlockPos_, arg2: $Entity): boolean;
        canSustainPlant(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_, arg3: $BlockState_): $TriState;
        isConduitFrame(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): boolean;
        addLandingEffects(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: $LivingEntity, arg4: number): boolean;
        isPortalFrame(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        ignitedByLava(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        onNeighborChange(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): void;
        getSoundType(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Entity): $SoundType;
        onBlockStateChange(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_): void;
        canBeHydrated(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $FluidState, arg3: $BlockPos_): boolean;
        isScaffolding(arg0: $LivingEntity): boolean;
        onCaughtFire(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $LivingEntity): void;
        getFireSpreadSpeed(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): number;
        onBlockExploded(arg0: $Level_, arg1: $BlockPos_, arg2: $Explosion): void;
        canEntityDestroy(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Entity): boolean;
        isFlammable(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        getAppearance(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $Direction_, arg3: $BlockState_, arg4: $BlockPos_): $BlockState;
        isFireSource(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Direction_): boolean;
        isBurning(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        isBed(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $LivingEntity): boolean;
        onTreeGrow(arg0: $LevelReader, arg1: $BiConsumer_<$BlockPos, $BlockState>, arg2: $RandomSource, arg3: $BlockPos_, arg4: $TreeConfiguration): boolean;
        isLadder(arg0: $LevelReader, arg1: $BlockPos_, arg2: $LivingEntity): boolean;
        getExpDrop(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockEntity, arg3: $Entity, arg4: $ItemStack_): number;
        isFertile(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        canStickTo(arg0: $BlockState_): boolean;
        getCloneItemStack(arg0: $HitResult, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Player): $ItemStack;
        handler$zdo000$fabric_rendering_fluids_v1$shouldDisplayFluidOverlay(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $FluidState, arg3: $CallbackInfoReturnable<any>): void;
        static PROPERTIES_TAG: string;
        owner: $Block;
        cache: $BlockBehaviour$BlockStateBase$Cache;
        static CODEC: $Codec<$BlockState>;
        static PROPERTY_ENTRY_TO_STRING_FUNCTION: $Function<$Map$Entry<$Property<never>, $Comparable<never>>, string>;
        static NAME_TAG: string;
        propertiesCodec: $MapCodec<$BlockState>;
        constructor(arg0: $Block_, arg1: $Reference2ObjectArrayMap<$Property<never>, $Comparable_<never>>, arg2: $MapCodec_<$BlockState_>);
        get vanillaState(): $BlockState;
        get customBlock(): $CustomBlock;
        get empty(): boolean;
        get bubbleColumnDirection(): $BubbleColumnDirection;
        get slimeBlock(): boolean;
        get stickyBlock(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockState}.
     */
    export type $BlockState_ = $Block_;
    export class $StateDefinition$Factory<O, S> {
    }
    export interface $StateDefinition$Factory<O, S> {
        create(owner: O, values: $Reference2ObjectArrayMap<$Property<never>, $Comparable_<never>>, propertiesCodec: $MapCodec_<S>): S;
    }
    /**
     * Values that may be interpreted as {@link $StateDefinition$Factory}.
     */
    export type $StateDefinition$Factory_<O, S> = ((arg0: O, arg1: $Reference2ObjectArrayMap<$Property<never>, $Comparable<never>>, arg2: $MapCodec<S>) => S);
    export class $BlockBehaviour$BlockStateBase extends $StateHolder<$Block, $BlockState> implements $BlockStateKJS, $IStateCacheAccessor {
        is(block: $Block_): boolean;
        is(block: $ResourceKey_<$Block>): boolean;
        is(tag: $TagKey_<$Block>): boolean;
        is(block: $Holder_<$Block>): boolean;
        is(holder: $HolderSet_<$Block>): boolean;
        is(tag: $TagKey_<$Block>, predicate: $Predicate_<$BlockBehaviour$BlockStateBase>): boolean;
        /**
         * @deprecated
         * @return the blockstate with the given rotation. If inapplicable, returns itself.
         */
        rotate(rotation: $Rotation_): $BlockState;
        getOffset(level: $BlockGetter, pos: $BlockPos_): $Vec3;
        /**
         * @return the blockstate mirrored in the given way. If inapplicable, returns itself.
         */
        mirror(mirror: $Mirror_): $BlockState;
        getShape(level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        getShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        tick(level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): void;
        getBlock(): $Block;
        getSeed(pos: $BlockPos_): number;
        instrument(): $NoteBlockInstrument;
        initCache(): void;
        /**
         * @deprecated
         */
        liquid(): boolean;
        updateIndirectNeighbourShapes(level: $LevelAccessor, pos: $BlockPos_, flags: number): void;
        updateIndirectNeighbourShapes(level: $LevelAccessor, pos: $BlockPos_, flags: number, recursionLeft: number): void;
        hasPostProcess(level: $BlockGetter, pos: $BlockPos_): boolean;
        emissiveRendering(level: $BlockGetter, pos: $BlockPos_): boolean;
        isViewBlocking(level: $BlockGetter, pos: $BlockPos_): boolean;
        isValidSpawn(level: $BlockGetter, pos: $BlockPos_, entityType: $EntityType_<never>): boolean;
        entityCanStandOn(level: $BlockGetter, pos: $BlockPos_, entity: $Entity): boolean;
        getBlockHolder(): $Holder<$Block>;
        hasOffsetFunction(): boolean;
        handleNeighborChanged(level: $Level_, pos: $BlockPos_, block: $Block_, fromPos: $BlockPos_, isMoving: boolean): void;
        framedblocks$initCache(arg0: $StateCache): void;
        /**
         * @return true if the collision box of this state covers the entire upper face of the blockspace
         */
        entityCanStandOnFace(level: $BlockGetter, pos: $BlockPos_, entity: $Entity, face: $Direction_): boolean;
        updateNeighbourShapes(level: $LevelAccessor, pos: $BlockPos_, flags: number, recursionLeft: number): void;
        updateNeighbourShapes(level: $LevelAccessor, pos: $BlockPos_, flags: number): void;
        framedblocks$getCache(): $StateCache;
        hasLargeCollisionShape(): boolean;
        asState(): $BlockState;
        getTicker<T extends $BlockEntity>(level: $Level_, blockEntityType: $BlockEntityType_<T>): $BlockEntityTicker<T>;
        getRenderShape(): $RenderShape;
        getTags(): $Stream<$TagKey<$Block>>;
        propagatesSkylightDown(level: $BlockGetter, pos: $BlockPos_): boolean;
        setRequiresTool(arg0: boolean): void;
        getBlockSupportShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        getAnalogOutputSignal(level: $Level_, pos: $BlockPos_): number;
        setLightEmission(arg0: number): void;
        getInteractionShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        isCollisionShapeFullBlock(level: $BlockGetter, pos: $BlockPos_): boolean;
        useShapeForLightOcclusion(): boolean;
        hasAnalogOutputSignal(): boolean;
        getPistonPushReaction(): $PushReaction;
        setDestroySpeed(arg0: number): void;
        isRedstoneConductor(level: $BlockGetter, pos: $BlockPos_): boolean;
        getFaceOcclusionShape(level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): $VoxelShape;
        isFaceSturdy(level: $BlockGetter, pos: $BlockPos_, face: $Direction_, supportType: $SupportType_): boolean;
        isFaceSturdy(level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): boolean;
        canBeReplaced(useContext: $BlockPlaceContext): boolean;
        canBeReplaced(fluid: $Fluid_): boolean;
        canBeReplaced(): boolean;
        onRemove(level: $Level_, pos: $BlockPos_, oldState: $BlockState_, movedByPiston: boolean): void;
        attack(level: $Level_, pos: $BlockPos_, player: $Player): void;
        useItemOn(stack: $ItemStack_, level: $Level_, player: $Player, hand: $InteractionHand_, hitResult: $BlockHitResult): $ItemInteractionResult;
        isAir(): boolean;
        isSuffocating(level: $BlockGetter, pos: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        blocksMotion(): boolean;
        skipRendering(state: $BlockState_, face: $Direction_): boolean;
        getCollisionShape(level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        getCollisionShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        updateShape(direction: $Direction_, neighborState: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, neighborPos: $BlockPos_): $BlockState;
        /**
         * @deprecated
         */
        getLightEmission(): number;
        /**
         * @deprecated
         */
        ignitedByLava(): boolean;
        /**
         * @deprecated
         */
        getSoundType(): $SoundType;
        isSignalSource(): boolean;
        getMapColor(level: $BlockGetter, pos: $BlockPos_): $MapColor;
        isRandomlyTicking(): boolean;
        isPathfindable(arg0: $PathComputationType_): boolean;
        getVisualShape(level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        getOcclusionShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        spawnAfterBreak(level: $ServerLevel, pos: $BlockPos_, stack: $ItemStack_, dropExperience: boolean): void;
        triggerEvent(level: $Level_, pos: $BlockPos_, id: number, param: number): boolean;
        getLightBlock(level: $BlockGetter, pos: $BlockPos_): number;
        getDestroySpeed(level: $BlockGetter, pos: $BlockPos_): number;
        getDirectSignal(level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): number;
        getMenuProvider(level: $Level_, pos: $BlockPos_): $MenuProvider;
        onProjectileHit(level: $Level_, state: $BlockState_, hit: $BlockHitResult, projectile: $Projectile): void;
        entityInside(level: $Level_, pos: $BlockPos_, entity: $Entity): void;
        isSolidRender(level: $BlockGetter, pos: $BlockPos_): boolean;
        onExplosionHit(level: $Level_, pos: $BlockPos_, explosion: $Explosion, dropConsumer: $BiConsumer_<$ItemStack, $BlockPos>): void;
        useWithoutItem(level: $Level_, player: $Player, hitResult: $BlockHitResult): $InteractionResult;
        getShadeBrightness(level: $BlockGetter, pos: $BlockPos_): number;
        getDestroyProgress(player: $Player, level: $BlockGetter, pos: $BlockPos_): number;
        canOcclude(): boolean;
        getDrops(lootParams: $LootParams$Builder): $List<$ItemStack>;
        /**
         * @deprecated
         */
        isSolid(): boolean;
        onPlace(level: $Level_, pos: $BlockPos_, oldState: $BlockState_, movedByPiston: boolean): void;
        randomTick(level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): void;
        getSignal(level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): number;
        canSurvive(level: $LevelReader, pos: $BlockPos_): boolean;
        handler$ckd000$ferritecore$cacheStateHead(arg0: $CallbackInfo): void;
        modifyReturnValue$dbh001$axiom$getShape(shape: $VoxelShape, context: $CollisionContext): $VoxelShape;
        handler$dbh000$axiom$useWithoutItemHead(level: $Level_, player: $Player, res: $BlockHitResult, cir: $CallbackInfoReturnable<any>): void;
        handler$dbh000$axiom$useWithoutItemReturn(level: $Level_, player: $Player, res: $BlockHitResult, cir: $CallbackInfoReturnable<any>): void;
        handler$dbh000$axiom$updateShapeHead(direction: $Direction_, blockState: $BlockState_, levelAccessor: $LevelAccessor, blockPos: $BlockPos_, blockPos2: $BlockPos_, cir: $CallbackInfoReturnable<any>): void;
        handler$ckd000$ferritecore$cacheStateTail(arg0: $CallbackInfo): void;
        handler$dbh000$axiom$updateShapeRet(direction: $Direction_, blockState: $BlockState_, levelAccessor: $LevelAccessor, blockPos: $BlockPos_, blockPos2: $BlockPos_, cir: $CallbackInfoReturnable<any>): void;
        shouldSpawnTerrainParticles(): boolean;
        requiresCorrectToolForDrops(): boolean;
        getFluidState(): $FluidState;
        hasBlockEntity(): boolean;
        getWebIconURL(size: number): $RelativeURL;
        toString(): string;
        randomTickOverride(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): boolean;
        getRegistry(): $Registry<$Block>;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        asHolder(): $Holder<$Block>;
        getId(): string;
        getKey(): $ResourceKey<$Block>;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getIdLocation(): $ResourceLocation;
        getTagKeys(): $List<$TagKey<$Block>>;
        getTags(): $List<$ResourceLocation>;
        hasTag(tag: $ResourceLocation_): boolean;
        getMod(): string;
        static PROPERTIES_TAG: string;
        owner: $Block;
        cache: $BlockBehaviour$BlockStateBase$Cache;
        static PROPERTY_ENTRY_TO_STRING_FUNCTION: $Function<$Map$Entry<$Property<never>, $Comparable<never>>, string>;
        static NAME_TAG: string;
        propertiesCodec: $MapCodec<$BlockState>;
        constructor(owner: $Block_, values: $Reference2ObjectArrayMap<$Property<never>, $Comparable_<never>>, propertiesCodec: $MapCodec_<$BlockState_>);
        get block(): $Block;
        get blockHolder(): $Holder<$Block>;
        get renderShape(): $RenderShape;
        set requiresTool(value: boolean);
        get pistonPushReaction(): $PushReaction;
        get air(): boolean;
        get soundType(): $SoundType;
        get signalSource(): boolean;
        get randomlyTicking(): boolean;
        get solid(): boolean;
        get fluidState(): $FluidState;
        get registry(): $Registry<$Block>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get id(): string;
        get key(): $ResourceKey<$Block>;
        get idLocation(): $ResourceLocation;
        get tagKeys(): $List<$TagKey<$Block>>;
        get mod(): string;
    }
    export class $BlockBehaviour$OffsetFunction {
    }
    export interface $BlockBehaviour$OffsetFunction {
        evaluate(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): $Vec3;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$OffsetFunction}.
     */
    export type $BlockBehaviour$OffsetFunction_ = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos) => $Vec3_);
    export class $BlockBehaviour$StatePredicate {
    }
    export interface $BlockBehaviour$StatePredicate {
        test(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$StatePredicate}.
     */
    export type $BlockBehaviour$StatePredicate_ = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos) => boolean);
    export class $BlockBehaviour$Properties implements $AbstractBlockSettingsAccessor {
        static of(): $BlockBehaviour$Properties;
        strength(destroyTime: number, explosionResistance: number): $BlockBehaviour$Properties;
        strength(destroyTime: number): $BlockBehaviour$Properties;
        instrument(instrument: $NoteBlockInstrument_): $BlockBehaviour$Properties;
        noLootTable(): $BlockBehaviour$Properties;
        liquid(): $BlockBehaviour$Properties;
        hasPostProcess(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        replaceable(): $BlockBehaviour$Properties;
        forceSolidOn(): $BlockBehaviour$Properties;
        /**
         * @deprecated
         */
        forceSolidOff(): $BlockBehaviour$Properties;
        pushReaction(pushReaction: $PushReaction_): $BlockBehaviour$Properties;
        emissiveRendering(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        isViewBlocking(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        isValidSpawn(isValidSpawn: $BlockBehaviour$StateArgumentPredicate_<$EntityType<never>>): $BlockBehaviour$Properties;
        lightLevel(lightEmission: $ToIntFunction_<$BlockState>): $BlockBehaviour$Properties;
        static ofFullCopy(blockBehaviour: $BlockBehaviour): $BlockBehaviour$Properties;
        isRedstoneConductor(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        explosionResistance(destroyTime: number): $BlockBehaviour$Properties;
        noOcclusion(): $BlockBehaviour$Properties;
        noTerrainParticles(): $BlockBehaviour$Properties;
        randomTicks(): $BlockBehaviour$Properties;
        noCollission(): $BlockBehaviour$Properties;
        /**
         * @deprecated
         */
        static ofLegacyCopy(blockBehaviour: $BlockBehaviour): $BlockBehaviour$Properties;
        /**
         * @deprecated
         */
        dropsLike(block: $Block_): $BlockBehaviour$Properties;
        lootFrom(arg0: $Supplier_<$Block>): $BlockBehaviour$Properties;
        instabreak(): $BlockBehaviour$Properties;
        offsetType(offsetType: $BlockBehaviour$OffsetType_): $BlockBehaviour$Properties;
        sound(soundType: $SoundType_): $BlockBehaviour$Properties;
        requiredFeatures(...requiredFeatures: $FeatureFlag[]): $BlockBehaviour$Properties;
        isSuffocating(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        speedFactor(destroyTime: number): $BlockBehaviour$Properties;
        dynamicShape(): $BlockBehaviour$Properties;
        ignitedByLava(): $BlockBehaviour$Properties;
        destroyTime(destroyTime: number): $BlockBehaviour$Properties;
        friction(destroyTime: number): $BlockBehaviour$Properties;
        jumpFactor(destroyTime: number): $BlockBehaviour$Properties;
        mapColor(mapColor: $DyeColor_): $BlockBehaviour$Properties;
        mapColor(mapColor: $MapColor): $BlockBehaviour$Properties;
        mapColor(mapColor: $Function_<$BlockState, $MapColor>): $BlockBehaviour$Properties;
        air(): $BlockBehaviour$Properties;
        requiresCorrectToolForDrops(): $BlockBehaviour$Properties;
        getLiquid(): boolean;
        getExplosionResistance(): number;
        setRequiresCorrectToolForDrops(arg0: boolean): void;
        isRequiresCorrectToolForDrops(): boolean;
        getDestroyTime(): number;
        getIsValidSpawn(): $BlockBehaviour$StateArgumentPredicate<$EntityType<never>>;
        getIsSuffocating(): $BlockBehaviour$StatePredicate;
        getCanOcclude(): boolean;
        getIsViewBlocking(): $BlockBehaviour$StatePredicate;
        getDynamicShape(): boolean;
        getLuminance(): $ToIntFunction<$BlockState>;
        setForceSolidOn(arg0: boolean): void;
        setReplaceable(arg0: boolean): void;
        getHasPostProcess(): $BlockBehaviour$StatePredicate;
        getReplaceable(): boolean;
        getOffsetFunction(): $BlockBehaviour$OffsetFunction;
        getForceSolidOn(): boolean;
        setMapColor(arg0: $Function_<$BlockState, $MapColor>): void;
        getForceSolidOff(): boolean;
        setOffsetFunction(arg0: $BlockBehaviour$OffsetFunction_): void;
        getInstrument(): $NoteBlockInstrument;
        setIgnitedByLava(arg0: boolean): void;
        getIgnitedByLava(): boolean;
        getPushReaction(): $PushReaction;
        setHasCollision(arg0: boolean): void;
        setForceSolidOff(arg0: boolean): void;
        setCanOcclude(arg0: boolean): void;
        setDynamicShape(arg0: boolean): void;
        setDrops(arg0: $ResourceKey_<$LootTable>): void;
        setLiquid(arg0: boolean): void;
        getIsAir(): boolean;
        setIsAir(arg0: boolean): void;
        getIsRandomlyTicking(): boolean;
        getSpawnTerrainParticles(): boolean;
        setIsRandomlyTicking(arg0: boolean): void;
        setSpawnTerrainParticles(arg0: boolean): void;
        setRequiredFeatures(arg0: $FeatureFlagSet): void;
        getIsRedstoneConductor(): $BlockBehaviour$StatePredicate;
        getRequiredFeatures(): $FeatureFlagSet;
        getEmissiveRendering(): $BlockBehaviour$StatePredicate;
        getSpeedFactor(): number;
        getFriction(): number;
        getJumpFactor(): number;
        getSoundType(): $SoundType;
        getMapColor(): $Function<$BlockState, $MapColor>;
        getHasCollision(): boolean;
        getDrops(): $ResourceKey<$LootTable>;
        offsetFunction: $BlockBehaviour$OffsetFunction;
        canOcclude: boolean;
        lightEmission: $ToIntFunction<$BlockState>;
        drops: $ResourceKey<$LootTable>;
        soundType: $SoundType;
        static CODEC: $Codec<$BlockBehaviour$Properties>;
        isRandomlyTicking: boolean;
        spawnTerrainParticles: boolean;
        isAir: boolean;
        hasCollision: boolean;
        constructor();
        get luminance(): $ToIntFunction<$BlockState>;
    }
    export class $BlockBehaviour$StateArgumentPredicate<A> {
    }
    export interface $BlockBehaviour$StateArgumentPredicate<A> {
        test(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, value: A): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$StateArgumentPredicate}.
     */
    export type $BlockBehaviour$StateArgumentPredicate_<A> = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos, arg3: A) => boolean);
    export class $StateHolder<O, S> implements $StateHolderAccessor<any, any>, $FastMapStateHolder<any> {
        /**
         * @return the value of the given Property for this state
         */
        getValue<T extends $Comparable<T>>(property: $Property<T>): T;
        /**
         * @return an unmodifiable collection of all possible properties.
         */
        getProperties(): $Collection<$Property<never>>;
        setValue<T extends $Comparable<T>, V extends T>(property: $Property<T>, value: V): $Object;
        setNeighborTable(arg0: $Table<any, any, any>): void;
        getStateMap(): $FastMap<any>;
        setStateIndex(arg0: number): void;
        populateNeighbours(possibleStateMap: $Map_<any, any>): void;
        getNeighborTable(): $Table<any, any, any>;
        getOptionalValue<T extends $Comparable<T>>(property: $Property<T>): (T) | undefined;
        getStateIndex(): number;
        setStateMap(arg0: $FastMap<any>): void;
        trySetValue<T extends $Comparable<T>, V extends T>(property: $Property<T>, value: V): $Object;
        static findNextInCollection<T>(collection: $Collection_<T>, value: T): T;
        getVanillaPropertyMap(): $Reference2ObjectMap<any, any>;
        hasProperty<T extends $Comparable<T>>(property: $Property<T>): boolean;
        getValues(): $Map<$Property<never>, $Comparable<never>>;
        static codec<O, S extends $StateHolder<O, S>>(propertyMap: $Codec<O>, holderFunction: $Function_<O, S>): $Codec<S>;
        cycle<T extends $Comparable<T>>(property: $Property<T>): $Object;
        replacePropertyMap(arg0: $Reference2ObjectMap<any, any>): void;
        redirect$cjp000$ferritecore$getNeighborFromFastMap(arg0: $Table<any, any, any>, arg1: $Object, arg2: $Object): $Object;
        getOwner(): $Object;
        static PROPERTIES_TAG: string;
        owner: $Object;
        static PROPERTY_ENTRY_TO_STRING_FUNCTION: $Function<$Map$Entry<$Property<never>, $Comparable<never>>, string>;
        static NAME_TAG: string;
        propertiesCodec: $MapCodec<$Object>;
        constructor(owner: $Object, values: $Reference2ObjectArrayMap<$Property<never>, $Comparable_<never>>, propertiesCodec: $MapCodec_<$Object>);
        get properties(): $Collection<$Property<never>>;
        get vanillaPropertyMap(): $Reference2ObjectMap<any, any>;
        get values(): $Map<$Property<never>, $Comparable<never>>;
    }
}
