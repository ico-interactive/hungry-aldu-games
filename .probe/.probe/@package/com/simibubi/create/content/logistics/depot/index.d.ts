import { $MapCodec } from "@package/com/mojang/serialization";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $Entity$RemovalReason, $Pose, $PortalProcessor, $Entity } from "@package/net/minecraft/world/entity";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $RandomSource } from "@package/net/minecraft/util";
import { $SuperByteBufferCache$Compartment } from "@package/net/createmod/catnip/render";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Clearable, $InteractionResult, $InteractionHand_, $ItemInteractionResult, $Container } from "@package/net/minecraft/world";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $StateDefinition, $BlockState_, $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $Item, $Item$Properties, $BlockItem, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $DirectBeltInputBehaviour } from "@package/com/simibubi/create/content/kinetics/belt/behaviour";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockEntityConfigurationPacket } from "@package/com/simibubi/create/foundation/networking";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $SimpleDynamicVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $SoundType, $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BasePacketPayload$PacketTypeProvider, $ServerboundPacketPayload, $ClientboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $TransportedItemStack } from "@package/com/simibubi/create/content/kinetics/belt/transport";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $Random, $Map, $UUID, $List, $List_ } from "@package/java/util";
import { $ServerboundCustomPayloadPacket, $ClientboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $BlockEntityBehaviour, $BehaviourType, $ValueBoxTransform$Sided } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $PlayerInteractEvent$RightClickBlock, $PlayerInteractEvent$LeftClickBlock } from "@package/net/neoforged/neoforge/event/entity/player";
import { $Consumer_, $Predicate_, $Function_ } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Object2DoubleMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $KineticBlockEntity, $ShaftVisual, $HorizontalKineticBlock, $ShaftRenderer } from "@package/com/simibubi/create/content/kinetics/base";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE, $ProperWaterloggedBlock } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Record, $Class } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $LevelAccessor, $BlockGetter, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $FluidState, $Fluid_, $Fluid } from "@package/net/minecraft/world/level/material";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $MovingInteractionBehaviour } from "@package/com/simibubi/create/api/behaviour/interaction";
import { $EntityDataAccessor, $SynchedEntityData } from "@package/net/minecraft/network/syncher";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $BlockEntityType_, $BlockEntity, $BlockEntityTicker, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as storage from "@package/com/simibubi/create/content/logistics/depot/storage";

declare module "@package/com/simibubi/create/content/logistics/depot" {
    export class $DepotBlock extends $Block implements $IBE<$DepotBlockEntity>, $IWrenchable, $ProperWaterloggedBlock {
        getBlockEntityType(): $BlockEntityType<$DepotBlockEntity>;
        getBlockEntityClass(): $Class<$DepotBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$DepotBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$DepotBlockEntity, $InteractionResult>): $InteractionResult;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($DepotBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$DepotBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $DepotBlockEntity;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        updateWater(arg0: $LevelAccessor, arg1: $BlockState_, arg2: $BlockPos_): void;
        withWater(arg0: $BlockState_, arg1: $BlockPlaceContext): $BlockState;
        fluidState(arg0: $BlockState_): $FluidState;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        pickupBlock(arg0: $Player | null, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_): $ItemStack;
        canPlaceLiquid(arg0: $Player | null, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid_): boolean;
        getPickupSound(): ($SoundEvent) | undefined;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
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
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$DepotBlockEntity>;
        get blockEntityClass(): $Class<$DepotBlockEntity>;
    }
    export class $EntityLauncher {
        clamp(arg0: number): void;
        x(arg0: number): number;
        set(arg0: number, arg1: number): void;
        y(arg0: number): number;
        dy(arg0: number): number;
        dx(arg0: number): number;
        getHorizontalDistance(): number;
        applyMotion(arg0: $Entity, arg1: $Direction_): void;
        getGlobalPos(arg0: number, arg1: $Direction_, arg2: $BlockPos_): $Vec3;
        getGlobalVelocity(arg0: number, arg1: $Direction_, arg2: $BlockPos_): $Vec3;
        getTotalFlyingTicks(): number;
        getVerticalDistance(): number;
        constructor(arg0: number, arg1: number);
        get horizontalDistance(): number;
        get totalFlyingTicks(): number;
        get verticalDistance(): number;
    }
    export class $EjectorBlockEntity$State extends $Enum<$EjectorBlockEntity$State> {
        static values(): $EjectorBlockEntity$State[];
        static valueOf(arg0: string): $EjectorBlockEntity$State;
        static LAUNCHING: $EjectorBlockEntity$State;
        static CHARGED: $EjectorBlockEntity$State;
        static RETRACTING: $EjectorBlockEntity$State;
    }
    /**
     * Values that may be interpreted as {@link $EjectorBlockEntity$State}.
     */
    export type $EjectorBlockEntity$State_ = "charged" | "launching" | "retracting";
    export class $EjectorBlockEntity$EjectorSlot extends $ValueBoxTransform$Sided {
    }
    export class $EjectorBlockEntity extends $KineticBlockEntity {
        getState(): $EjectorBlockEntity$State;
        setTarget(arg0: number, arg1: number): void;
        handler$cbe000$sable$launchSubLevels(arg0: $CallbackInfo): void;
        activate(): void;
        getTargetPosition(): $BlockPos;
        updateSignal(): void;
        activateDeferred(): void;
        dropFlyingItems(): void;
        getTargetOpenInv(): $DirectBeltInputBehaviour;
        getLidProgress(arg0: number): number;
        deployElytra(arg0: $Player): void;
        getWindUpSpeed(): number;
        wrapOperation$cbe000$sable$setPos(arg0: $Entity, arg1: number, arg2: number, arg3: number, arg4: $Operation_<any>): void;
        getLaunchedItemMotion(arg0: number): $Vec3;
        handler$cbe003$sable$tick(arg0: $CallbackInfo): void;
        getLaunchedItemLocation(arg0: number): $Vec3;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        level: $Level;
        updateSpeed: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        preventSpeedUpdate: number;
        network: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get state(): $EjectorBlockEntity$State;
        get targetPosition(): $BlockPos;
        get targetOpenInv(): $DirectBeltInputBehaviour;
        get windUpSpeed(): number;
    }
    export class $EjectorBlock extends $HorizontalKineticBlock implements $IBE<$EjectorBlockEntity>, $ProperWaterloggedBlock {
        getBlockEntityType(): $BlockEntityType<$EjectorBlockEntity>;
        redirect$cbf000$sable$setPos$mixinextras$bridge$23(arg0: $Vec3_, arg1: $Vec3_, arg2: $LocalRef<any>): $Vec3;
        getBlockEntityClass(): $Class<$EjectorBlockEntity>;
        redirect$cbf000$sable$setPos(arg0: $Vec3_, arg1: $Vec3_, arg2: $Entity): $Vec3;
        redirect$cbf000$sable$distanceTo(arg0: $Vec3_, arg1: $Vec3_, arg2: $Entity): number;
        redirect$cbf000$sable$distanceTo$mixinextras$bridge$22(arg0: $Vec3_, arg1: $Vec3_, arg2: $LocalRef<any>): number;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$EjectorBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$EjectorBlockEntity, $InteractionResult>): $InteractionResult;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($EjectorBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$EjectorBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $EjectorBlockEntity;
        updateWater(arg0: $LevelAccessor, arg1: $BlockState_, arg2: $BlockPos_): void;
        withWater(arg0: $BlockState_, arg1: $BlockPlaceContext): $BlockState;
        fluidState(arg0: $BlockState_): $FluidState;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        pickupBlock(arg0: $Player | null, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_): $ItemStack;
        canPlaceLiquid(arg0: $Player | null, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid_): boolean;
        getPickupSound(): ($SoundEvent) | undefined;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
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
        static HORIZONTAL_FACING: $Property<$Direction>;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$EjectorBlockEntity>;
        get blockEntityClass(): $Class<$EjectorBlockEntity>;
    }
    export class $EjectorTriggerPacket extends $BlockEntityConfigurationPacket<$EjectorBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $EjectorTriggerPacket>;
        constructor(arg0: $BlockPos_);
    }
    export class $DepotBehaviour extends $BlockEntityBehaviour implements $Clearable {
        isOutputEmpty(): boolean;
        getRemainingSpace(): number;
        insert(arg0: $TransportedItemStack, arg1: boolean): $ItemStack;
        isEmpty(): boolean;
        isItemValid(arg0: $ItemStack_): boolean;
        getHeldItemStack(): $ItemStack;
        canMergeItems(): boolean;
        setHeldItem(arg0: $TransportedItemStack): void;
        removeHeldItem(): void;
        enableMerging(): void;
        addSubBehaviours(arg0: $List_<$BlockEntityBehaviour>): void;
        onlyAccepts(arg0: $Predicate_<$ItemStack>): $DepotBehaviour;
        clearContent(): void;
        withCallback(arg0: $Consumer_<$ItemStack>): $DepotBehaviour;
        getPresentStackSize(): number;
        setCenteredHeldItem(arg0: $TransportedItemStack): void;
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$DepotBehaviour>;
        itemHandler: $DepotItemHandler;
        constructor(arg0: $SmartBlockEntity);
        get outputEmpty(): boolean;
        get remainingSpace(): number;
        get empty(): boolean;
        get heldItemStack(): $ItemStack;
        set heldItem(value: $TransportedItemStack);
        get presentStackSize(): number;
        set centeredHeldItem(value: $TransportedItemStack);
    }
    export class $EjectorRenderer extends $ShaftRenderer<$EjectorBlockEntity> {
        shouldRenderOffScreen(arg0: $EjectorBlockEntity): boolean;
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $EjectorAwardPacket extends $BlockEntityConfigurationPacket<$EjectorBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $EjectorAwardPacket>;
        constructor(arg0: $BlockPos_);
    }
    export class $SharedDepotBlockMethods {
        static onUse(arg0: $ItemStack_, arg1: $BlockState_, arg2: $Level_, arg3: $BlockPos_, arg4: $Player, arg5: $InteractionHand_, arg6: $BlockHitResult): $ItemInteractionResult;
        static onLanded(arg0: $BlockGetter, arg1: $Entity): void;
        static getComparatorInputOverride(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): number;
        constructor();
    }
    export class $EjectorElytraPacket extends $Record implements $ServerboundPacketPayload {
        pos(): $BlockPos;
        handle(arg0: $ServerPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $EjectorElytraPacket>;
        constructor(pos: $BlockPos_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $EjectorElytraPacket}.
     */
    export type $EjectorElytraPacket_ = { pos?: $BlockPos_,  } | [pos?: $BlockPos_, ];
    export class $DepotRenderer extends $SafeBlockEntityRenderer<$DepotBlockEntity> {
        static renderItemsOf(arg0: $SmartBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number, arg6: $DepotBehaviour): void;
        static renderItem(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: number, arg4: $ItemStack_, arg5: number, arg6: $Random, arg7: $Vec3_, arg8: boolean): void;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $EjectorBlockEntity$EntityHack extends $Entity {
        firstTick: boolean;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
    }
    export class $EjectorPlacementPacket$ClientBoundRequest extends $Record implements $ClientboundPacketPayload {
        pos(): $BlockPos;
        handle(arg0: $LocalPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $EjectorPlacementPacket$ClientBoundRequest>;
        constructor(pos: $BlockPos_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $EjectorPlacementPacket$ClientBoundRequest}.
     */
    export type $EjectorPlacementPacket$ClientBoundRequest_ = { pos?: $BlockPos_,  } | [pos?: $BlockPos_, ];
    export class $EjectorVisual extends $ShaftVisual<$EjectorBlockEntity> implements $SimpleDynamicVisual {
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        static rainbowMode: boolean;
        constructor(arg0: $VisualizationContext, arg1: $EjectorBlockEntity, arg2: number);
    }
    export class $MountedDepotInteractionBehaviour extends $MovingInteractionBehaviour {
        static REGISTRY: $SimpleRegistry<$Block, $MovingInteractionBehaviour>;
        constructor();
    }
    export class $DepotBlockEntity extends $SmartBlockEntity implements $Clearable {
        setHeldItem(arg0: $ItemStack_): void;
        clearContent(): void;
        getHeldItem(): $ItemStack;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $DepotItemHandler implements $IItemHandler {
        getSlotLimit(arg0: number): number;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        getStackInSlot(arg0: number): $ItemStack;
        getSlots(): number;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
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
        constructor(arg0: $DepotBehaviour);
        get width(): number;
        get empty(): boolean;
        get allItems(): $List<$ItemStack>;
        get height(): number;
    }
    export class $EjectorPlacementPacket extends $Record implements $ServerboundPacketPayload {
        h(): number;
        v(): number;
        pos(): $BlockPos;
        handle(arg0: $ServerPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        facing(): $Direction;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $EjectorPlacementPacket>;
        constructor(h: number, v: number, pos: $BlockPos_, facing: $Direction_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $EjectorPlacementPacket}.
     */
    export type $EjectorPlacementPacket_ = { h?: number, facing?: $Direction_, pos?: $BlockPos_, v?: number,  } | [h?: number, facing?: $Direction_, pos?: $BlockPos_, v?: number, ];
    export class $EjectorTargetHandler {
        static tick(): void;
        static drawOutline(arg0: $BlockPos_): void;
        static flushSettings(arg0: $BlockPos_): void;
        static rightClickingBlocksSelectsThem(arg0: $PlayerInteractEvent$RightClickBlock): void;
        static leftClickingBlocksDeselectsThem(arg0: $PlayerInteractEvent$LeftClickBlock): void;
        static getValidTargetDirection(arg0: $BlockPos_): $Direction;
        constructor();
    }
    export class $EjectorItem extends $BlockItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Block_, arg1: $Item$Properties);
    }
}
