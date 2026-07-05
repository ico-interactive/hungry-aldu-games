import { $MinecraftServer } from "@package/net/minecraft/server";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Recipe, $RecipeHolder, $Ingredient_, $Ingredient, $RecipeSerializer, $RecipeHolder_, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ActorVisual, $ContraptionMatrices } from "@package/com/simibubi/create/content/contraptions/render";
import { $HumanoidArm, $EntityDimensions, $Entity$RemovalReason, $WalkAnimationState, $Pose, $PortalProcessor, $Entity } from "@package/net/minecraft/world/entity";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Clearable, $InteractionResult, $InteractionHand, $InteractionHand_, $ItemInteractionResult, $Container } from "@package/net/minecraft/world";
import { $BlockSnapshot, $FakePlayer } from "@package/net/neoforged/neoforge/common/util";
import { $Brain } from "@package/net/minecraft/world/entity/ai";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $StateDefinition, $BlockState_, $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $AllRecipeTypes_ } from "@package/com/simibubi/create";
import { $PlayerEnderChestContainer, $AbstractContainerMenu, $InventoryMenu } from "@package/net/minecraft/world/inventory";
import { $NeighborUpdater } from "@package/net/minecraft/world/level/redstone";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $VirtualRenderWorld } from "@package/com/simibubi/create/foundation/virtualWorld";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $BeltProcessingBehaviour, $BeltProcessingBehaviour$ProcessingResult, $TransportedItemStackHandlerBehaviour } from "@package/com/simibubi/create/content/kinetics/belt/behaviour";
import { $ServerGamePacketListenerImpl } from "@package/net/minecraft/server/network";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $FishingHook } from "@package/net/minecraft/world/entity/projectile";
import { $WritableLevelData } from "@package/net/minecraft/world/level/storage";
import { $DamageContainer } from "@package/net/neoforged/neoforge/common/damagesource";
import { $RecipeWrapper } from "@package/net/neoforged/neoforge/items/wrapper";
import { $BooleanProperty, $DirectionProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $PlacementOffset, $IPlacementHelper } from "@package/net/createmod/catnip/placement";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $SimpleDynamicVisual, $SimpleTickableVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $EntityEvent$Size } from "@package/net/neoforged/neoforge/event/entity";
import { $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $TransportedItemStack } from "@package/com/simibubi/create/content/kinetics/belt/transport";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $UUID_, $Set_, $ArrayList, $Stack, $Map, $UUID, $List, $List_ } from "@package/java/util";
import { $ValueBoxTransform$Sided } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $PlayerInteractEvent$RightClickBlock } from "@package/net/neoforged/neoforge/event/entity/player";
import { $SizedFluidIngredient } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $Supplier_, $Consumer_, $Function_, $Supplier } from "@package/java/util/function";
import { $Object2DoubleMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerPlayerGameMode, $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $HolderLookup$Provider, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $KineticBlockEntity, $ShaftVisual, $DirectionalAxisKineticBlock } from "@package/com/simibubi/create/content/kinetics/base";
import { $SequencedAssemblySubCategory } from "@package/com/simibubi/create/compat/jei/category/sequencedAssembly";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Class, $Object } from "@package/java/lang";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $IAssemblyRecipe } from "@package/com/simibubi/create/content/processing/sequenced";
import { $ServerLevelAccessor, $ItemLike_, $BlockGetter, $EntityGetter, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $LaunchedPlungerEntity } from "@package/dev/simulated_team/simulated/content/entities/launched_plunger";
import { $ICancellableEvent, $Event } from "@package/net/neoforged/bus/api";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $IItemHandlerModifiable, $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $MovementBehaviour } from "@package/com/simibubi/create/api/behaviour/movement";
import { $MovingInteractionBehaviour } from "@package/com/simibubi/create/api/behaviour/interaction";
import { $ProcessingRecipe$Factory, $ProcessingRecipeBuilder, $ProcessingRecipeParams, $ProcessingOutput, $ProcessingRecipe, $ProcessingRecipe$Factory_ } from "@package/com/simibubi/create/content/processing/recipe";
import { $EntityDataAccessor, $SynchedEntityData } from "@package/net/minecraft/network/syncher";
import { $FoodData } from "@package/net/minecraft/world/food";
import { $ResourceKey, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $MovementContext } from "@package/com/simibubi/create/content/contraptions/behaviour";
import { $WrappedLevel } from "@package/net/createmod/catnip/levelWrappers";
import { $LivingDropsEvent, $LivingExperienceDropEvent, $LivingChangeTargetEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $BlockEntityType_, $BlockEntity, $TickingBlockEntity, $BlockEntityTicker, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/kinetics/deployer" {
    export class $DeployerBlock$PlacementHelper implements $IPlacementHelper {
        getOffset(arg0: $Player, arg1: $Level_, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockHitResult, arg5: $ItemStack_): $PlacementOffset;
        matchesState(arg0: $BlockState_): boolean;
        displayGhost(arg0: $PlacementOffset): void;
        renderAt(arg0: $BlockPos_, arg1: $BlockState_, arg2: $BlockHitResult, arg3: $PlacementOffset): void;
        matchesItem(arg0: $ItemStack_): boolean;
    }
    export class $DeployerApplicationRecipe extends $ItemApplicationRecipe implements $IAssemblyRecipe {
        static convert(arg0: $RecipeHolder_<never>): $RecipeHolder<$DeployerApplicationRecipe>;
        getJEISubCategory(): $Supplier<$Supplier<$SequencedAssemblySubCategory>>;
        addAssemblyIngredients(arg0: $List_<$Ingredient_>): void;
        getDescriptionForAssembly(): $Component;
        addRequiredMachines(arg0: $Set_<$ItemLike_>): void;
        addAssemblyFluidIngredients(arg0: $List_<$SizedFluidIngredient>): void;
        supportsAssembly(): boolean;
        constructor(arg0: $ItemApplicationRecipeParams);
        get JEISubCategory(): $Supplier<$Supplier<$SequencedAssemblySubCategory>>;
        get descriptionForAssembly(): $Component;
    }
    export class $DeployerRenderer extends $SafeBlockEntityRenderer<$DeployerBlockEntity> {
        static renderInContraption(arg0: $MovementContext, arg1: $VirtualRenderWorld, arg2: $ContraptionMatrices, arg3: $MultiBufferSource_): void;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $DeployerItemHandler implements $IItemHandlerModifiable {
        set(arg0: $ItemStack_): void;
        getSlotLimit(arg0: number): number;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        getStackInSlot(arg0: number): $ItemStack;
        getSlots(): number;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        getHeld(): $ItemStack;
        kjs$getBlock(level: $Level_): $LevelBlock;
        kjs$self(): $IItemHandler;
        kjs$isMutable(): boolean;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        getWidth(): number;
        isEmpty(): boolean;
        count(match: $ItemPredicate_): number;
        count(): number;
        find(): number;
        find(match: $ItemPredicate_): number;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        getHeight(): number;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        asContainer(): $Container;
        setChanged(): void;
        getSlots(): number;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        constructor(arg0: $DeployerBlockEntity);
        get held(): $ItemStack;
        get width(): number;
        get empty(): boolean;
        get allItems(): $List<$ItemStack>;
        get height(): number;
    }
    export class $DeployerMovingInteraction extends $MovingInteractionBehaviour {
        static REGISTRY: $SimpleRegistry<$Block, $MovingInteractionBehaviour>;
        constructor();
    }
    export class $BeltDeployerCallbacks {
        static onItemReceived(arg0: $TransportedItemStack, arg1: $TransportedItemStackHandlerBehaviour, arg2: $DeployerBlockEntity): $BeltProcessingBehaviour$ProcessingResult;
        static whenItemHeld(arg0: $TransportedItemStack, arg1: $TransportedItemStackHandlerBehaviour, arg2: $DeployerBlockEntity): $BeltProcessingBehaviour$ProcessingResult;
        static activate(arg0: $TransportedItemStack, arg1: $TransportedItemStackHandlerBehaviour, arg2: $DeployerBlockEntity, arg3: $Recipe<never>): void;
        constructor();
    }
    export class $DeployerHandler {
        static tryHarvestBlock(arg0: $ServerPlayer, arg1: $ServerPlayerGameMode, arg2: $BlockPos_): boolean;
        static safeOnUse(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player, arg4: $InteractionHand_, arg5: $BlockHitResult): $InteractionResult;
        static CAPTURED_BLOCK_DROPS_VIEW: $Map<$BlockPos, $List<$ItemEntity>>;
        constructor();
    }
    export class $DeployerBlockEntity extends $KineticBlockEntity implements $Clearable {
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        getHandPose(): $PartialModel;
        redstoneUpdate(): void;
        discardPlayer(): void;
        changeMode(): void;
        clearContent(): void;
        startFistBump(arg0: $Direction_): boolean;
        getHandOffset(arg0: number): number;
        setAnimatedOffset(arg0: number): void;
        triggerFistBump(): void;
        getPlayer(): $DeployerFakePlayer;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        getRecipe(arg0: $ItemStack_): $RecipeHolder<$Recipe<$RecipeInput>>;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        level: $Level;
        updateSpeed: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        processingBehaviour: $BeltProcessingBehaviour;
        preventSpeedUpdate: number;
        network: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get handPose(): $PartialModel;
        set animatedOffset(value: number);
        get player(): $DeployerFakePlayer;
    }
    export class $DeployerRecipeSearchEvent extends $Event implements $ICancellableEvent {
        addRecipe(arg0: $Supplier_<($RecipeHolder<$Recipe<$RecipeInput>>) | undefined>, arg1: number): void;
        shouldAddRecipeWithPriority(arg0: number): boolean;
        getBlockEntity(): $DeployerBlockEntity;
        getInventory(): $RecipeWrapper;
        getRecipe(): $RecipeHolder<$Recipe<$RecipeInput>>;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $DeployerBlockEntity, arg1: $RecipeWrapper);
        get blockEntity(): $DeployerBlockEntity;
        get inventory(): $RecipeWrapper;
        get recipe(): $RecipeHolder<$Recipe<$RecipeInput>>;
    }
    export class $ItemApplicationRecipeParams extends $ProcessingRecipeParams {
        static CODEC: $MapCodec<$ItemApplicationRecipeParams>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemApplicationRecipeParams>;
        constructor();
    }
    export class $DeployerMovementBehaviour implements $MovementBehaviour {
        tick(arg0: $MovementContext): void;
        disableBlockEntityRendering(): boolean;
        cancelStall(arg0: $MovementContext): void;
        writeExtraData(arg0: $MovementContext): void;
        createVisual(arg0: $VisualizationContext, arg1: $VirtualRenderWorld, arg2: $MovementContext): $ActorVisual;
        visitNewPosition(arg0: $MovementContext, arg1: $BlockPos_): void;
        activate(arg0: $MovementContext, arg1: $BlockPos_, arg2: $DeployerFakePlayer, arg3: $DeployerBlockEntity$Mode_): void;
        renderInContraption(arg0: $MovementContext, arg1: $VirtualRenderWorld, arg2: $ContraptionMatrices, arg3: $MultiBufferSource_): void;
        getActiveAreaOffset(arg0: $MovementContext): $Vec3;
        stopMoving(arg0: $MovementContext): void;
        isActive(arg0: $MovementContext): boolean;
        canBeDisabledVia(arg0: $MovementContext): $ItemStack;
        startMoving(arg0: $MovementContext): void;
        collectOrDropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        onSpeedChanged(arg0: $MovementContext, arg1: $Vec3_, arg2: $Vec3_): void;
        onDisabledByControls(arg0: $MovementContext): void;
        mustTickWhileDisabled(): boolean;
        /**
         * @deprecated
         */
        dropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        constructor();
    }
    export class $DeployerHandler$ItemUseWorld extends $WrappedLevel implements $ServerLevelAccessor {
        addFreshEntityWithPassengers(arg0: $Entity): void;
        self(): $EntityGetter;
        restoringBlockSnapshots: boolean;
        neighborUpdater: $NeighborUpdater;
        static LONG_PARTICLE_CLIP_RANGE: number;
        randValue: number;
        levelData: $WritableLevelData;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        static MAX_BRIGHTNESS: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        rainLevel: number;
        oThunderLevel: number;
        static ATTACHMENTS_NBT_KEY: string;
        addend: number;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        oRainLevel: number;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        blockEntityTickers: $List<$TickingBlockEntity>;
        captureBlockSnapshots: boolean;
    }
    export class $DeployerActorVisual extends $ActorVisual {
        constructor(arg0: $VisualizationContext, arg1: $VirtualRenderWorld, arg2: $MovementContext);
    }
    export class $DeployerVisual extends $ShaftVisual<$DeployerBlockEntity> implements $SimpleDynamicVisual, $SimpleTickableVisual {
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        static rainbowMode: boolean;
        constructor(arg0: $VisualizationContext, arg1: $DeployerBlockEntity, arg2: number);
    }
    export class $ItemApplicationRecipe$Builder<R extends $ItemApplicationRecipe> extends $ProcessingRecipeBuilder<$ItemApplicationRecipeParams, R, $ItemApplicationRecipe$Builder<R>> {
        self(): $ItemApplicationRecipe$Builder<R>;
        toolNotConsumed(): $ItemApplicationRecipe$Builder<R>;
        constructor(arg0: $ItemApplicationRecipe$Factory_<R>, arg1: $ResourceLocation_);
    }
    export class $ManualApplicationRecipe extends $ItemApplicationRecipe {
        transformBlock(arg0: $BlockState_, arg1: $RandomSource): $BlockState;
        getRollableResultsExceptBlock(): $List<$ProcessingOutput>;
        testBlock(arg0: $BlockState_): boolean;
        static asDeploying(arg0: $RecipeHolder_<never>): $RecipeHolder<$DeployerApplicationRecipe>;
        static manualApplicationRecipesApplyInWorld(arg0: $PlayerInteractEvent$RightClickBlock): void;
        constructor(arg0: $ItemApplicationRecipeParams);
        get rollableResultsExceptBlock(): $List<$ProcessingOutput>;
    }
    export class $DeployerFilterSlot extends $ValueBoxTransform$Sided {
        constructor();
    }
    export class $ItemApplicationRecipe$Factory<R extends $ItemApplicationRecipe> {
    }
    export interface $ItemApplicationRecipe$Factory<R extends $ItemApplicationRecipe> extends $ProcessingRecipe$Factory<$ItemApplicationRecipeParams, R> {
        create(arg0: $ItemApplicationRecipeParams): R;
    }
    /**
     * Values that may be interpreted as {@link $ItemApplicationRecipe$Factory}.
     */
    export type $ItemApplicationRecipe$Factory_<R> = ((arg0: $ItemApplicationRecipeParams) => R);
    export class $DeployerFakePlayer$DeployerGameProfile extends $GameProfile {
    }
    export class $DeployerBlock extends $DirectionalAxisKineticBlock implements $IBE<$DeployerBlockEntity> {
        getBlockEntityType(): $BlockEntityType<$DeployerBlockEntity>;
        getBlockEntityClass(): $Class<$DeployerBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$DeployerBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$DeployerBlockEntity, $InteractionResult>): $InteractionResult;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($DeployerBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$DeployerBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $DeployerBlockEntity;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        explosionResistance: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        drops: $ResourceKey<$LootTable>;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        dynamicShape: boolean;
        soundType: $SoundType;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static AXIS_ALONG_FIRST_COORDINATE: $BooleanProperty;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$DeployerBlockEntity>;
        get blockEntityClass(): $Class<$DeployerBlockEntity>;
    }
    export class $ItemApplicationRecipe$Serializer<R extends $ItemApplicationRecipe> implements $RecipeSerializer<R> {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, R>;
        codec(): $MapCodec<R>;
        constructor(arg0: $ProcessingRecipe$Factory_<$ItemApplicationRecipeParams, R>);
    }
    export class $DeployerFakePlayer extends $FakePlayer {
        static deployerCollectsDropsFromKilledEntities(arg0: $LivingDropsEvent): void;
        static deployerKillsDoNotSpawnXP(arg0: $LivingExperienceDropEvent): void;
        static deployerHasEyesOnHisFeet(arg0: $EntityEvent$Size): void;
        static entitiesDontRetaliate(arg0: $LivingChangeTargetEvent): void;
        lerpYRot: number;
        static USE_ITEM_INTERVAL: number;
        lerpYHeadRot: number;
        useItem: $ItemStack;
        jumpTriggerTime: number;
        static DATA_LIVING_ENTITY_FLAGS: $EntityDataAccessor<number>;
        yBodyRotO: number;
        simulated$currentTypeWriter: $BlockPos;
        removalReason: $Entity$RemovalReason;
        swingingArm: $InteractionHand;
        static CRAFTING_SLOT_OFFSET: number;
        static ID_TAG: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        boardingCooldown: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        onMinecartContraption: boolean;
        walkDist: number;
        noCulling: boolean;
        gameMode: $ServerPlayerGameMode;
        appliedScale: number;
        object: $Object;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        static UUID_TAG: string;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        static DEFAULT_ENTITY_INTERACTION_RANGE: number;
        dead: boolean;
        verticalCollision: boolean;
        hurtDir: number;
        static DEFAULT_BABY_SCALE: number;
        static DEFAULT_BB_HEIGHT: number;
        seenCredits: boolean;
        flyDist: number;
        currentImpulseImpactPos: $Vec3;
        wasOnFire: boolean;
        autoSpinAttackTicks: number;
        noActionTime: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        damageContainers: $Stack<$DamageContainer>;
        static ARMOR_SLOT_OFFSET: number;
        static SLEEP_DURATION: number;
        yCloak: number;
        run: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        xCloak: number;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        animStepO: number;
        static BOARDING_COOLDOWN: number;
        static MAX_HEALTH: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static BASE_JUMP_POWER: number;
        static DEFAULT_EYE_HEIGHT: number;
        static CROUCH_BB_HEIGHT: number;
        moveDist: number;
        enchantmentSeed: number;
        static FLAG_FALL_FLYING: number;
        xOld: number;
        containerMenu: $AbstractContainerMenu;
        hurtTime: number;
        swinging: boolean;
        attackStrengthTicker: number;
        static DEFAULT_MAIN_HAND: $HumanoidArm;
        deathTime: number;
        invulnerableTime: number;
        wasUnderwater: boolean;
        fallDistance: number;
        static DEFAULT_VEHICLE_ATTACHMENT: $Vec3;
        inventory: $Inventory;
        random: $RandomSource;
        lerpSteps: number;
        yOld: number;
        static HAND_SLOTS: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        levelCallback: $EntityInLevelCallback;
        lerpXRot: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        animStep: number;
        blocksBuilding: boolean;
        takeXpDelay: number;
        deathScore: number;
        oBob: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        lastHurtByPlayerTime: number;
        autoSpinAttackItemStack: $ItemStack;
        static DEFAULT_BASE_GRAVITY: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        yHeadRot: number;
        yCloakO: number;
        noPhysics: boolean;
        fallFlyTicks: number;
        autoSpinAttackDmg: number;
        yo: number;
        connection: $ServerGamePacketListenerImpl;
        static FLAG_ONFIRE: number;
        zza: number;
        rotOffs: number;
        static INTERACTION_DISTANCE_VERIFICATION_BUFFER: number;
        placedTracks: boolean;
        static WAKE_UP_DURATION: number;
        xRotO: number;
        simulated$launchedPlunger: $LaunchedPlungerEntity;
        zo: number;
        wonGame: boolean;
        lastHurt: number;
        walkAnimation: $WalkAnimationState;
        static STANDING_DIMENSIONS: $EntityDimensions;
        static DATA_PLAYER_MODE_CUSTOMISATION: $EntityDataAccessor<number>;
        yya: number;
        server: $MinecraftServer;
        oAttackAnim: number;
        yHeadRotO: number;
        static DEFAULT_MODEL_CUSTOMIZATION: number;
        hurtDuration: number;
        static SWIMMING_BB_HEIGHT: number;
        verticalCollisionBelow: boolean;
        experienceLevel: number;
        static ATTRIBUTES_FIELD: string;
        static PERSISTED_NBT_TAG: string;
        xxa: number;
        zCloak: number;
        lerpHeadSteps: number;
        static $assertionsDisabled: boolean;
        static fallbackID: $UUID;
        brain: $Brain<never>;
        static PASSENGERS_TAG: string;
        stringUUID: string;
        xCloakO: number;
        attackAnim: number;
        zOld: number;
        timeOffs: number;
        static LIVING_ENTITY_FLAG_SPIN_ATTACK: number;
        rotA: number;
        static ENDER_SLOT_OFFSET: number;
        firstTick: boolean;
        static HELD_ITEM_SLOT: number;
        uuid: $UUID;
        lastHurtByPlayer: $Player;
        static SWING_DURATION: number;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        enderChestInventory: $PlayerEnderChestContainer;
        zCloakO: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        oRun: number;
        bob: number;
        experienceProgress: number;
        totalExperience: number;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        useItemRemaining: number;
        entityData: $SynchedEntityData;
        foodData: $FoodData;
        static SLEEPING_DIMENSIONS: $EntityDimensions;
        static DATA_PLAYER_MAIN_HAND: $EntityDataAccessor<number>;
        static EQUIPMENT_SLOT_OFFSET: number;
        defaultFlySpeed: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        inventoryMenu: $InventoryMenu;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static LIVING_ENTITY_FLAG_OFF_HAND: number;
        static DATA_SHOULDER_LEFT: $EntityDataAccessor<$CompoundTag>;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        static LIVING_ENTITY_FLAG_IS_USING: number;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        lerpX: number;
        lerpZ: number;
        lerpY: number;
        fishing: $FishingHook;
        static SWIMMING_BB_WIDTH: number;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        static DEFAULT_BLOCK_INTERACTION_RANGE: number;
        static TOTAL_AIR_SUPPLY: number;
        static FLAG_GLOWING: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static DATA_SHOULDER_RIGHT: $EntityDataAccessor<$CompoundTag>;
        currentExplosionCause: $Entity;
        constructor(arg0: $ServerLevel, arg1: $UUID_);
    }
    export class $ItemApplicationRecipe extends $ProcessingRecipe<$RecipeWrapper, $ItemApplicationRecipeParams> {
        matches(arg0: $RecipeWrapper, arg1: $Level_): boolean;
        getProcessedItem(): $Ingredient;
        shouldKeepHeldItem(): boolean;
        getRequiredHeldItem(): $Ingredient;
        constructor(arg0: $AllRecipeTypes_, arg1: $ItemApplicationRecipeParams);
        get processedItem(): $Ingredient;
        get requiredHeldItem(): $Ingredient;
    }
    export class $DeployerBlockEntity$State extends $Enum<$DeployerBlockEntity$State> {
    }
    /**
     * Values that may be interpreted as {@link $DeployerBlockEntity$State}.
     */
    export type $DeployerBlockEntity$State_ = "waiting" | "expanding" | "retracting" | "dumping";
    export class $DeployerBlockEntity$Mode extends $Enum<$DeployerBlockEntity$Mode> {
    }
    /**
     * Values that may be interpreted as {@link $DeployerBlockEntity$Mode}.
     */
    export type $DeployerBlockEntity$Mode_ = "punch" | "use";
}
