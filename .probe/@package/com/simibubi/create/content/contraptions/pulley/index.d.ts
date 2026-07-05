import { $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $Map, $Set } from "@package/java/util";
import { $WeakReference } from "@package/java/lang/ref";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $SuperByteBufferCache$Compartment, $SuperByteBuffer, $SpriteShiftEntry } from "@package/net/createmod/catnip/render";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $Object2BooleanMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction$Axis, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $TranslatingContraption, $AbstractContraptionEntity } from "@package/com/simibubi/create/content/contraptions";
import { $HorizontalAxisKineticBlock, $KineticBlockEntityRenderer, $KineticBlockEntity, $ShaftVisual } from "@package/com/simibubi/create/content/kinetics/base";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Class } from "@package/java/lang";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $LevelAccessor, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $CollisionList } from "@package/com/simibubi/create/foundation/collision";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $CanLoadBigCannon } from "@package/rbasamoyai/createbigcannons/cannon_loading";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $HasFragileContraption } from "@package/rbasamoyai/createbigcannons/remix";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ThresholdSwitchObservable } from "@package/com/simibubi/create/content/redstone/thresholdSwitch";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $HosePulleyBlockEntity } from "@package/com/simibubi/create/content/fluids/hosePulley";
import { $LinearActuatorBlockEntity } from "@package/com/simibubi/create/content/contraptions/piston";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $SimpleDynamicVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $SimpleWaterloggedBlock, $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/contraptions/pulley" {
    export class $AbstractPulleyVisual<T extends $KineticBlockEntity> extends $ShaftVisual<T> implements $SimpleDynamicVisual {
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        static rainbowMode: boolean;
        constructor(arg0: $VisualizationContext, arg1: T, arg2: number);
    }
    export class $PulleyContraption extends $TranslatingContraption implements $CanLoadBigCannon, $HasFragileContraption {
        getInitialOffset(): number;
        createbigcannons$getAssemblyMovementDirection(arg0: $Level_): $Direction;
        createbigcannons$getOriginalForcedDirection(arg0: $Level_): $Direction;
        createbigcannons$getCannonLoadingColliders(): $Set<any>;
        createbigcannons$toLocalPos(arg0: $BlockPos_): $BlockPos;
        createbigcannons$setBrokenDisassembly(arg0: boolean): void;
        createbigcannons$isBrokenDisassembly(): boolean;
        createbigcannons$fragileDisassemble(): void;
        createbigcannons$getEncounteredBlocks(): $Map<any, any>;
        createbigcannons$shouldCheckFragility(): boolean;
        createbigcannons$blockBreaksDisassembly(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        createbigcannons$getFragileBlockPositions(): $Set<any>;
        hasUniversalCreativeCrate: boolean;
        isLegacy: $Object2BooleanMap<$BlockPos>;
        anchor: $BlockPos;
        stalled: boolean;
        bounds: $AABB;
        simplifiedEntityColliders: $CollisionList;
        disassembled: boolean;
        entity: $AbstractContraptionEntity;
        constructor(arg0: number);
        constructor();
        get initialOffset(): number;
    }
    export class $HosePulleyVisual extends $AbstractPulleyVisual<$HosePulleyBlockEntity> {
        static rainbowMode: boolean;
        constructor(arg0: $VisualizationContext, arg1: $HosePulleyBlockEntity, arg2: number);
    }
    export class $AbstractPulleyRenderer<T extends $KineticBlockEntity> extends $KineticBlockEntityRenderer<T> {
        shouldRenderOffScreen(arg0: T): boolean;
        static renderAt(arg0: $LevelAccessor, arg1: $SuperByteBuffer, arg2: number, arg3: $BlockPos_, arg4: $PoseStack, arg5: $VertexConsumer): void;
        static scrollCoil(arg0: $SuperByteBuffer, arg1: $SpriteShiftEntry, arg2: number, arg3: number): $SuperByteBuffer;
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context, arg1: $PartialModel, arg2: $PartialModel);
    }
    export class $PulleyBlock$RopeBlockBase extends $Block implements $SimpleWaterloggedBlock {
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
    }
    export class $PulleyBlock$MagnetBlock extends $PulleyBlock$RopeBlockBase {
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
    }
    export class $PulleyBlock extends $HorizontalAxisKineticBlock implements $IBE<$PulleyBlockEntity> {
        getBlockEntityType(): $BlockEntityType<$PulleyBlockEntity>;
        getBlockEntityClass(): $Class<$PulleyBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$PulleyBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$PulleyBlockEntity, $InteractionResult>): $InteractionResult;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($PulleyBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$PulleyBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $PulleyBlockEntity;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        explosionResistance: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static HORIZONTAL_AXIS: $Property<$Direction$Axis>;
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
        get blockEntityType(): $BlockEntityType<$PulleyBlockEntity>;
        get blockEntityClass(): $Class<$PulleyBlockEntity>;
    }
    export class $PulleyRenderer extends $AbstractPulleyRenderer<$PulleyBlockEntity> {
        static isPulleyRunning(arg0: $PulleyBlockEntity): boolean;
        static getBlockEntityOffset(arg0: number, arg1: $PulleyBlockEntity): number;
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $PulleyBlockEntity extends $LinearActuatorBlockEntity implements $ThresholdSwitchObservable {
        format(arg0: number): $MutableComponent;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        getAttachedContraption(): $AbstractContraptionEntity;
        startMirroringOther(arg0: $BlockPos_): void;
        notifyMirrorsOfDisassembly(): void;
        getMinValue(): number;
        getMaxValue(): number;
        getCurrentValue(): number;
        getMirrorParent(): $BlockPos;
        animateOffset(arg0: number): void;
        offset: number;
        level: $Level;
        sharedMirrorContraption: $WeakReference<$AbstractContraptionEntity>;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        needsContraption: boolean;
        movedContraption: $AbstractContraptionEntity;
        network: number;
        running: boolean;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        assembleNextTick: boolean;
        updateSpeed: boolean;
        preventSpeedUpdate: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get attachedContraption(): $AbstractContraptionEntity;
        get minValue(): number;
        get maxValue(): number;
        get currentValue(): number;
        get mirrorParent(): $BlockPos;
    }
    export class $AbstractPulleyVisual$LightCache {
    }
    export class $RopePulleyVisual extends $AbstractPulleyVisual<$PulleyBlockEntity> {
        static rainbowMode: boolean;
        constructor(arg0: $VisualizationContext, arg1: $PulleyBlockEntity, arg2: number);
    }
    export class $PulleyBlock$RopeBlock extends $PulleyBlock$RopeBlockBase {
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
    }
}
