import { $MapCodec } from "@package/com/mojang/serialization";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $ActorVisual, $ContraptionMatrices } from "@package/com/simibubi/create/content/contraptions/render";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $SmartBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $InteractionResult, $Clearable, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistrateItemModelProvider, $DataGenContext } from "@package/com/tterrag/registrate/providers";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $VirtualRenderWorld } from "@package/com/simibubi/create/foundation/virtualWorld";
import { $BlockItem, $Item, $ItemStack_, $ItemStack, $Item$Properties } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockEntityDataPacket } from "@package/com/simibubi/create/foundation/networking";
import { $NonNullBiConsumer } from "@package/com/tterrag/registrate/util/nullness";
import { $DirectionProperty, $EnumProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IHaveHoveringInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $SimpleDynamicVisual, $AbstractBlockEntityVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $Block_, $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $List_, $Map } from "@package/java/util";
import { $ValueBoxTransform$Sided } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $PlayerInteractEvent$RightClickBlock } from "@package/net/neoforged/neoforge/event/entity/player";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $BlockEntry } from "@package/com/tterrag/registrate/util/entry";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $SpecialBlockStateGen } from "@package/com/simibubi/create/foundation/data";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $ProperWaterloggedBlock, $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Class } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $LevelAccessor, $LevelReader, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $SpecialBlockItemRequirement } from "@package/com/simibubi/create/api/schematic/requirement";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $MovementBehaviour } from "@package/com/simibubi/create/api/behaviour/movement";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $ItemHelper$ExtractionCountMode } from "@package/com/simibubi/create/foundation/item";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $MovementContext } from "@package/com/simibubi/create/content/contraptions/behaviour";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/logistics/funnel" {
    export class $BeltFunnelGenerator extends $SpecialBlockStateGen {
        constructor(arg0: string);
    }
    export class $AbstractFunnelBlock extends $Block implements $IBE<$FunnelBlockEntity>, $IWrenchable, $ProperWaterloggedBlock {
        static getFunnelFacing(arg0: $BlockState_): $Direction;
        static tryInsert(arg0: $Level_, arg1: $BlockPos_, arg2: $ItemStack_, arg3: boolean): $ItemStack;
        getBlockEntityType(): $BlockEntityType<$FunnelBlockEntity>;
        getBlockEntityClass(): $Class<$FunnelBlockEntity>;
        static isFunnel(arg0: $BlockState_): boolean;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$FunnelBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$FunnelBlockEntity, $InteractionResult>): $InteractionResult;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($FunnelBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$FunnelBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $FunnelBlockEntity;
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
        static POWERED: $BooleanProperty;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        get blockEntityType(): $BlockEntityType<$FunnelBlockEntity>;
        get blockEntityClass(): $Class<$FunnelBlockEntity>;
    }
    export class $FunnelMovementBehaviour implements $MovementBehaviour {
        visitNewPosition(arg0: $MovementContext, arg1: $BlockPos_): void;
        static andesite(): $FunnelMovementBehaviour;
        static brass(): $FunnelMovementBehaviour;
        getActiveAreaOffset(arg0: $MovementContext): $Vec3;
        isActive(arg0: $MovementContext): boolean;
        tick(arg0: $MovementContext): void;
        disableBlockEntityRendering(): boolean;
        canBeDisabledVia(arg0: $MovementContext): $ItemStack;
        cancelStall(arg0: $MovementContext): void;
        startMoving(arg0: $MovementContext): void;
        collectOrDropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        writeExtraData(arg0: $MovementContext): void;
        createVisual(arg0: $VisualizationContext, arg1: $VirtualRenderWorld, arg2: $MovementContext): $ActorVisual;
        onSpeedChanged(arg0: $MovementContext, arg1: $Vec3_, arg2: $Vec3_): void;
        renderInContraption(arg0: $MovementContext, arg1: $VirtualRenderWorld, arg2: $ContraptionMatrices, arg3: $MultiBufferSource_): void;
        onDisabledByControls(arg0: $MovementContext): void;
        mustTickWhileDisabled(): boolean;
        /**
         * @deprecated
         */
        dropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        stopMoving(arg0: $MovementContext): void;
    }
    export class $FunnelBlockEntity$Mode extends $Enum<$FunnelBlockEntity$Mode> {
    }
    /**
     * Values that may be interpreted as {@link $FunnelBlockEntity$Mode}.
     */
    export type $FunnelBlockEntity$Mode_ = "invalid" | "paused" | "collect" | "pushing_to_belt" | "taking_from_belt" | "extract";
    export class $AbstractHorizontalFunnelBlock extends $AbstractFunnelBlock {
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
        static HORIZONTAL_FACING: $DirectionProperty;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static POWERED: $BooleanProperty;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
    }
    export class $AbstractDirectionalFunnelBlock extends $AbstractFunnelBlock {
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
        static POWERED: $BooleanProperty;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
    }
    export class $FunnelBlockEntity extends $SmartBlockEntity implements $IHaveHoveringInformation, $Clearable {
        flap(arg0: boolean): void;
        getFlapOffset(): number;
        getModeToExtract(): $ItemHelper$ExtractionCountMode;
        getAmountToExtract(): number;
        onTransfer(arg0: $ItemStack_): void;
        hasFlap(): boolean;
        clearContent(): void;
        addToTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        getIcon(arg0: boolean): $ItemStack;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get flapOffset(): number;
        get modeToExtract(): $ItemHelper$ExtractionCountMode;
        get amountToExtract(): number;
    }
    export class $FunnelGenerator extends $SpecialBlockStateGen {
        static itemModel(arg0: string): $NonNullBiConsumer<$DataGenContext<$Item, $FunnelItem>, $RegistrateItemModelProvider>;
        constructor(arg0: string, arg1: boolean);
    }
    export class $BeltFunnelBlock extends $AbstractHorizontalFunnelBlock implements $SpecialBlockItemRequirement {
        isOfSameType(arg0: $FunnelBlock): boolean;
        static isOnValidBelt(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        static getShapeForPosition(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_, arg3: boolean): $BeltFunnelBlock$Shape;
        getRequiredItems(arg0: $BlockState_, arg1: $BlockEntity): $ItemRequirement;
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
        static HORIZONTAL_FACING: $DirectionProperty;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static POWERED: $BooleanProperty;
        static SHAPE: $EnumProperty<$BeltFunnelBlock$Shape>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockEntry<$FunnelBlock>, arg1: $BlockBehaviour$Properties);
    }
    export class $BeltFunnelBlock$Shape extends $Enum<$BeltFunnelBlock$Shape> implements $StringRepresentable {
        static values(): $BeltFunnelBlock$Shape[];
        static valueOf(arg0: string): $BeltFunnelBlock$Shape;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static EXTENDED: $BeltFunnelBlock$Shape;
        static RETRACTED: $BeltFunnelBlock$Shape;
        static PUSHING: $BeltFunnelBlock$Shape;
        static PULLING: $BeltFunnelBlock$Shape;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $BeltFunnelBlock$Shape}.
     */
    export type $BeltFunnelBlock$Shape_ = "retracted" | "extended" | "pushing" | "pulling";
    export class $FunnelBlock extends $AbstractDirectionalFunnelBlock {
        getEquivalentBeltFunnel(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): $BlockState;
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
        static POWERED: $BooleanProperty;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static EXTRACTING: $BooleanProperty;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $FunnelVisual extends $AbstractBlockEntityVisual<$FunnelBlockEntity> implements $SimpleDynamicVisual {
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        constructor(arg0: $VisualizationContext, arg1: $FunnelBlockEntity, arg2: number);
    }
    export class $FunnelRenderer extends $SmartBlockEntityRenderer<$FunnelBlockEntity> {
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $FunnelFlapPacket extends $BlockEntityDataPacket<$FunnelBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $FunnelFlapPacket>;
        constructor(arg0: $FunnelBlockEntity, arg1: boolean);
    }
    export class $FunnelFilterSlotPositioning extends $ValueBoxTransform$Sided {
        constructor();
    }
    export class $AndesiteFunnelBlock extends $FunnelBlock {
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
        static POWERED: $BooleanProperty;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static EXTRACTING: $BooleanProperty;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $BrassFunnelBlock extends $FunnelBlock {
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
        static POWERED: $BooleanProperty;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static EXTRACTING: $BooleanProperty;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $FunnelItem extends $BlockItem {
        static funnelItemAlwaysPlacesWhenUsed(arg0: $PlayerInteractEvent$RightClickBlock): void;
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
