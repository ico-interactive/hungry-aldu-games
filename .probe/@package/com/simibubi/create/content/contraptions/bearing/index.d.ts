import { $MapCodec } from "@package/com/mojang/serialization";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ActorVisual, $ContraptionMatrices } from "@package/com/simibubi/create/content/contraptions/render";
import { $IControlContraptionExtension } from "@package/dev/simulated_team/simulated/mixin_interface/create_assembly";
import { $SuperByteBufferCache$Compartment } from "@package/net/createmod/catnip/render";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $IControlContraption, $ControlledContraptionEntity, $AbstractContraptionEntity, $Contraption, $AssemblyException, $IDisplayAssemblyExceptions } from "@package/com/simibubi/create/content/contraptions";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $StateDefinition, $BlockState_, $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $BlockSubLevelLiftProvider$LiftProviderContext_, $BlockSubLevelCustomCenterOfMass, $BlockSubLevelLiftProvider$LiftProviderGroup, $BlockSubLevelLiftProvider } from "@package/dev/ryanhcode/sable/api/block";
import { $VirtualRenderWorld } from "@package/com/simibubi/create/foundation/virtualWorld";
import { $Item, $Item$Properties, $DyeColor, $DyeColor_, $BlockItem, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $StructureTemplate$StructureBlockInfo_ } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $DirectionProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $PlacementOffset, $IPlacementHelper } from "@package/net/createmod/catnip/placement";
import { $SimpleDynamicVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $INamedIconOptions } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/scrollValue";
import { $SoundType, $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $Vec3, $AABB, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $Vector3dc, $Vector3d } from "@package/org/joml";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $Map, $List_ } from "@package/java/util";
import { $ValueBoxTransform } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $Object2BooleanMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $HolderLookup$Provider, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $KineticBlockEntityRenderer, $KineticBlockEntity, $GeneratingKineticBlockEntity, $OrientedRotatingVisual, $DirectionalKineticBlock } from "@package/com/simibubi/create/content/kinetics/base";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $BearingContraptionExtension } from "@package/dev/eriksonn/aeronautics/content/blocks/propeller/bearing/propeller_bearing";
import { $IBE, $WrenchableDirectionalBlock } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Class } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockGetter, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $CollisionList } from "@package/com/simibubi/create/foundation/collision";
import { $Pose3d } from "@package/dev/ryanhcode/sable/companion/math";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $MovementBehaviour } from "@package/com/simibubi/create/api/behaviour/movement";
import { $ServerSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $MovementContext } from "@package/com/simibubi/create/content/contraptions/behaviour";
import { $AllIcons } from "@package/com/simibubi/create/foundation/gui";
import { $BlockEntityType_, $BlockEntity, $BlockEntityTicker, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/contraptions/bearing" {
    export class $StabilizedBearingMovementBehaviour implements $MovementBehaviour {
        disableBlockEntityRendering(): boolean;
        canBeDisabledVia(arg0: $MovementContext): $ItemStack;
        createVisual(arg0: $VisualizationContext, arg1: $VirtualRenderWorld, arg2: $MovementContext): $ActorVisual;
        renderInContraption(arg0: $MovementContext, arg1: $VirtualRenderWorld, arg2: $ContraptionMatrices, arg3: $MultiBufferSource_): void;
        isActive(arg0: $MovementContext): boolean;
        tick(arg0: $MovementContext): void;
        cancelStall(arg0: $MovementContext): void;
        startMoving(arg0: $MovementContext): void;
        collectOrDropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        writeExtraData(arg0: $MovementContext): void;
        onSpeedChanged(arg0: $MovementContext, arg1: $Vec3_, arg2: $Vec3_): void;
        visitNewPosition(arg0: $MovementContext, arg1: $BlockPos_): void;
        getActiveAreaOffset(arg0: $MovementContext): $Vec3;
        onDisabledByControls(arg0: $MovementContext): void;
        mustTickWhileDisabled(): boolean;
        /**
         * @deprecated
         */
        dropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        stopMoving(arg0: $MovementContext): void;
        constructor();
    }
    export class $IBearingBlockEntity {
    }
    export interface $IBearingBlockEntity extends $IControlContraption {
        getMovementModeSlot(): $ValueBoxTransform;
        getInterpolatedAngle(arg0: number): number;
        isWoodenTop(): boolean;
        setAngle(arg0: number): void;
        get movementModeSlot(): $ValueBoxTransform;
        get woodenTop(): boolean;
        set angle(value: number);
    }
    export class $SailBlock$PlacementHelper implements $IPlacementHelper {
        getOffset(arg0: $Player, arg1: $Level_, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockHitResult, arg5: $ItemStack_): $PlacementOffset;
        matchesState(arg0: $BlockState_): boolean;
        displayGhost(arg0: $PlacementOffset): void;
        renderAt(arg0: $BlockPos_, arg1: $BlockState_, arg2: $BlockHitResult, arg3: $PlacementOffset): void;
        matchesItem(arg0: $ItemStack_): boolean;
    }
    export class $SailBlock extends $WrenchableDirectionalBlock implements $BlockSubLevelLiftProvider, $BlockSubLevelCustomCenterOfMass {
        static frame(arg0: $BlockBehaviour$Properties): $SailBlock;
        isFrame(): boolean;
        sable$getNormal(arg0: $BlockState_): $Direction;
        getCenterOfMass(arg0: $BlockGetter, arg1: $BlockState_): $Vector3dc;
        getColor(): $DyeColor;
        applyDye(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Vec3_, arg4: $DyeColor_): void;
        static withCanvas(arg0: $BlockBehaviour$Properties, arg1: $DyeColor_): $SailBlock;
        sable$getLiftScalar(): number;
        sable$getDirectionlessDragScalar(): number;
        sable$getParallelDragScalar(): number;
        sable$contributeLiftAndDrag(arg0: $BlockSubLevelLiftProvider$LiftProviderContext_, arg1: $ServerSubLevel, arg2: $Pose3d, arg3: number, arg4: $Vector3dc, arg5: $Vector3dc, arg6: $Vector3d, arg7: $Vector3d, arg8: $BlockSubLevelLiftProvider$LiftProviderGroup): void;
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
        static CODEC: $MapCodec<$WrenchableDirectionalBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        get color(): $DyeColor;
    }
    export class $MechanicalBearingBlock extends $BearingBlock implements $IBE<$MechanicalBearingBlockEntity> {
        getBlockEntityType(): $BlockEntityType<$MechanicalBearingBlockEntity>;
        getBlockEntityClass(): $Class<$MechanicalBearingBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$MechanicalBearingBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$MechanicalBearingBlockEntity, $InteractionResult>): $InteractionResult;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($MechanicalBearingBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$MechanicalBearingBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $MechanicalBearingBlockEntity;
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
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$MechanicalBearingBlockEntity>;
        get blockEntityClass(): $Class<$MechanicalBearingBlockEntity>;
    }
    export class $ClockworkContraption extends $Contraption {
        static assembleClockworkAt(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): $Pair<$ClockworkContraption, $ClockworkContraption>;
        offset: number;
        hasUniversalCreativeCrate: boolean;
        isLegacy: $Object2BooleanMap<$BlockPos>;
        anchor: $BlockPos;
        stalled: boolean;
        bounds: $AABB;
        simplifiedEntityColliders: $CollisionList;
        handType: $ClockworkContraption$HandType;
        disassembled: boolean;
        entity: $AbstractContraptionEntity;
        constructor();
    }
    export class $ClockworkBearingBlockEntity extends $KineticBlockEntity implements $IBearingBlockEntity, $IDisplayAssemblyExceptions, $IControlContraptionExtension {
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        attach(arg0: $ControlledContraptionEntity): void;
        isValid(): boolean;
        assemble(): void;
        getLastAssemblyException(): $AssemblyException;
        getInterpolatedAngle(arg0: number): number;
        disassemble(): void;
        getHourArmSpeed(): number;
        getMinuteArmSpeed(): number;
        getAngularSpeed(): number;
        isWoodenTop(): boolean;
        isAttachedTo(arg0: $AbstractContraptionEntity): boolean;
        sable$disassemble(): void;
        onStall(): void;
        setAngle(arg0: number): void;
        isRunning(): boolean;
        getBlockPosition(): $BlockPos;
        getMovementModeSlot(): $ValueBoxTransform;
        addExceptionToTooltip(arg0: $List_<$Component_>): boolean;
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
        get valid(): boolean;
        get lastAssemblyException(): $AssemblyException;
        get hourArmSpeed(): number;
        get minuteArmSpeed(): number;
        get angularSpeed(): number;
        get woodenTop(): boolean;
        set angle(value: number);
        get running(): boolean;
        get blockPosition(): $BlockPos;
        get movementModeSlot(): $ValueBoxTransform;
    }
    export class $BearingBlock extends $DirectionalKineticBlock {
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
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $BearingContraption extends $Contraption implements $BearingContraptionExtension {
        getSailBlocks(): number;
        getFacing(): $Direction;
        aeronautics$setPropeller(): void;
        addBlock(arg0: $Level_, arg1: $BlockPos_, arg2: $Pair<$StructureTemplate$StructureBlockInfo_, $BlockEntity>): void;
        hasUniversalCreativeCrate: boolean;
        isLegacy: $Object2BooleanMap<$BlockPos>;
        anchor: $BlockPos;
        stalled: boolean;
        bounds: $AABB;
        simplifiedEntityColliders: $CollisionList;
        disassembled: boolean;
        entity: $AbstractContraptionEntity;
        constructor();
        constructor(arg0: boolean, arg1: $Direction_);
        get sailBlocks(): number;
        get facing(): $Direction;
    }
    export class $ClockworkContraption$HandType extends $Enum<$ClockworkContraption$HandType> {
        static values(): $ClockworkContraption$HandType[];
        static valueOf(arg0: string): $ClockworkContraption$HandType;
        static HOUR: $ClockworkContraption$HandType;
        static MINUTE: $ClockworkContraption$HandType;
    }
    /**
     * Values that may be interpreted as {@link $ClockworkContraption$HandType}.
     */
    export type $ClockworkContraption$HandType_ = "hour" | "minute";
    export class $StabilizedBearingVisual extends $ActorVisual {
        constructor(arg0: $VisualizationContext, arg1: $VirtualRenderWorld, arg2: $MovementContext);
    }
    export class $WindmillBearingBlock extends $BearingBlock implements $IBE<$WindmillBearingBlockEntity> {
        getBlockEntityType(): $BlockEntityType<$WindmillBearingBlockEntity>;
        getBlockEntityClass(): $Class<$WindmillBearingBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$WindmillBearingBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$WindmillBearingBlockEntity, $InteractionResult>): $InteractionResult;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($WindmillBearingBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$WindmillBearingBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $WindmillBearingBlockEntity;
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
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$WindmillBearingBlockEntity>;
        get blockEntityClass(): $Class<$WindmillBearingBlockEntity>;
    }
    export class $MechanicalBearingBlockEntity extends $GeneratingKineticBlockEntity implements $IBearingBlockEntity, $IDisplayAssemblyExceptions, $IControlContraptionExtension {
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        attach(arg0: $ControlledContraptionEntity): void;
        isValid(): boolean;
        assemble(): void;
        getLastAssemblyException(): $AssemblyException;
        getMovedContraption(): $ControlledContraptionEntity;
        getInterpolatedAngle(arg0: number): number;
        disassemble(): void;
        getAngularSpeed(): number;
        isWoodenTop(): boolean;
        isAttachedTo(arg0: $AbstractContraptionEntity): boolean;
        sable$disassemble(): void;
        isNearInitialAngle(): boolean;
        onStall(): void;
        setAngle(arg0: number): void;
        isRunning(): boolean;
        getBlockPosition(): $BlockPos;
        wrapMethod$zbc001$createbigcannons$tick(arg0: $Operation_<any>): void;
        getMovementModeSlot(): $ValueBoxTransform;
        addExceptionToTooltip(arg0: $List_<$Component_>): boolean;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        level: $Level;
        updateSpeed: boolean;
        reActivateSource: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        preventSpeedUpdate: number;
        network: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get valid(): boolean;
        get lastAssemblyException(): $AssemblyException;
        get movedContraption(): $ControlledContraptionEntity;
        get angularSpeed(): number;
        get woodenTop(): boolean;
        get nearInitialAngle(): boolean;
        set angle(value: number);
        get running(): boolean;
        get blockPosition(): $BlockPos;
        get movementModeSlot(): $ValueBoxTransform;
    }
    export class $BlankSailBlockItem extends $BlockItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Block_, arg1: $Item$Properties);
    }
    export class $ClockworkBearingBlockEntity$ClockHands extends $Enum<$ClockworkBearingBlockEntity$ClockHands> implements $INamedIconOptions {
    }
    /**
     * Values that may be interpreted as {@link $ClockworkBearingBlockEntity$ClockHands}.
     */
    export type $ClockworkBearingBlockEntity$ClockHands_ = "hour_first" | "minute_first" | "hour_first_24";
    export class $WindmillBearingBlockEntity$RotationDirection extends $Enum<$WindmillBearingBlockEntity$RotationDirection> implements $INamedIconOptions {
        static values(): $WindmillBearingBlockEntity$RotationDirection[];
        static valueOf(arg0: string): $WindmillBearingBlockEntity$RotationDirection;
        getIcon(): $AllIcons;
        getTranslationKey(): string;
        static COUNTER_CLOCKWISE: $WindmillBearingBlockEntity$RotationDirection;
        static CLOCKWISE: $WindmillBearingBlockEntity$RotationDirection;
        get icon(): $AllIcons;
        get translationKey(): string;
    }
    /**
     * Values that may be interpreted as {@link $WindmillBearingBlockEntity$RotationDirection}.
     */
    export type $WindmillBearingBlockEntity$RotationDirection_ = "clockwise" | "counter_clockwise";
    export class $BearingRenderer<T extends $KineticBlockEntity> extends $KineticBlockEntityRenderer<T> {
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $WindmillBearingBlockEntity extends $MechanicalBearingBlockEntity {
        disassembleForMovement(): void;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        level: $Level;
        updateSpeed: boolean;
        reActivateSource: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        preventSpeedUpdate: number;
        network: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $StabilizedContraption extends $Contraption {
        getFacing(): $Direction;
        hasUniversalCreativeCrate: boolean;
        isLegacy: $Object2BooleanMap<$BlockPos>;
        anchor: $BlockPos;
        stalled: boolean;
        bounds: $AABB;
        simplifiedEntityColliders: $CollisionList;
        disassembled: boolean;
        entity: $AbstractContraptionEntity;
        constructor();
        constructor(arg0: $Direction_);
        get facing(): $Direction;
    }
    export class $ClockworkBearingBlock extends $BearingBlock implements $IBE<$ClockworkBearingBlockEntity> {
        getBlockEntityType(): $BlockEntityType<$ClockworkBearingBlockEntity>;
        getBlockEntityClass(): $Class<$ClockworkBearingBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$ClockworkBearingBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$ClockworkBearingBlockEntity, $InteractionResult>): $InteractionResult;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($ClockworkBearingBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$ClockworkBearingBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $ClockworkBearingBlockEntity;
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
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$ClockworkBearingBlockEntity>;
        get blockEntityClass(): $Class<$ClockworkBearingBlockEntity>;
    }
    export class $BearingVisual<B extends $KineticBlockEntity> extends $OrientedRotatingVisual<B> implements $SimpleDynamicVisual {
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        constructor(arg0: $VisualizationContext, arg1: B, arg2: number);
    }
}
