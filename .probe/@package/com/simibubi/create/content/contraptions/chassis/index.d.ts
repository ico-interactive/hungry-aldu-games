import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $Queue, $List, $Set_ } from "@package/java/util";
import { $BehaviourType } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $StickerBlockEntityExtension } from "@package/dev/ryanhcode/sable/neoforge/mixinterface/compatibility/create";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction$Axis, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE, $WrenchableDirectionalBlock } from "@package/com/simibubi/create/foundation/block";
import { $BlockSubLevelAssemblyListener } from "@package/dev/ryanhcode/sable/api/block";
import { $Class } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $ConnectedTextureBehaviour$Base } from "@package/com/simibubi/create/foundation/block/connected";
import { $Component } from "@package/net/minecraft/network/chat";
import { $DirectionProperty, $EnumProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $SimpleDynamicVisual, $AbstractBlockEntityVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $BulkScrollValueBehaviour, $ScrollValueBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/scrollValue";
import { $RotatedPillarBlock, $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $TransformableBlock } from "@package/com/simibubi/create/api/contraption/transformable";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/contraptions/chassis" {
    export class $LinearChassisBlock$ChassisCTBehaviour extends $ConnectedTextureBehaviour$Base {
        reverseUVs(arg0: $BlockState_, arg1: $Direction_): boolean;
        constructor();
    }
    export class $ChassisRangeDisplay$Entry {
    }
    export class $LinearChassisBlock extends $AbstractChassisBlock {
        static isChassis(arg0: $BlockState_): boolean;
        static sameKind(arg0: $BlockState_, arg1: $BlockState_): boolean;
        explosionResistance: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        drops: $ResourceKey<$LootTable>;
        static STICKY_TOP: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        dynamicShape: boolean;
        static STICKY_BOTTOM: $BooleanProperty;
        soundType: $SoundType;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$RotatedPillarBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        static AXIS: $EnumProperty<$Direction$Axis>;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $AbstractChassisBlock extends $RotatedPillarBlock implements $IWrenchable, $IBE<$ChassisBlockEntity>, $TransformableBlock {
        transform(arg0: $BlockState_, arg1: $StructureTransform): $BlockState;
        getBlockEntityType(): $BlockEntityType<$ChassisBlockEntity>;
        getBlockEntityClass(): $Class<$ChassisBlockEntity>;
        getGlueableSide(arg0: $BlockState_, arg1: $Direction_): $BooleanProperty;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$ChassisBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$ChassisBlockEntity, $InteractionResult>): $InteractionResult;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($ChassisBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$ChassisBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $ChassisBlockEntity;
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
        static CODEC: $MapCodec<$RotatedPillarBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        static AXIS: $EnumProperty<$Direction$Axis>;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$ChassisBlockEntity>;
        get blockEntityClass(): $Class<$ChassisBlockEntity>;
    }
    export class $ChassisBlockEntity$ChassisScrollValueBehaviour extends $BulkScrollValueBehaviour {
        blockEntity: $SmartBlockEntity;
        label: $Component;
        static TYPE: $BehaviourType<$ScrollValueBehaviour>;
        value: number;
    }
    export class $StickerBlockEntity extends $SmartBlockEntity implements $StickerBlockEntityExtension {
        handler$cdl001$sable$write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean, arg3: $CallbackInfo): void;
        handler$cdl001$sable$read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean, arg3: $CallbackInfo): void;
        sable$tickConstraint(): void;
        isBlockStateExtended(): boolean;
        handler$cdl005$sable$tick(arg0: $CallbackInfo): void;
        sable$removeConstraint(): void;
        playSound(arg0: boolean): void;
        isAttachedToBlock(): boolean;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        computerBehaviour: $AbstractComputerBehaviour;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get blockStateExtended(): boolean;
        get attachedToBlock(): boolean;
    }
    export class $StickerRenderer extends $SafeBlockEntityRenderer<$StickerBlockEntity> {
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $ChassisRangeDisplay {
        static display(arg0: $ChassisBlockEntity): void;
        static tick(): void;
        constructor();
    }
    export class $StickerVisual extends $AbstractBlockEntityVisual<$StickerBlockEntity> implements $SimpleDynamicVisual {
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        constructor(arg0: $VisualizationContext, arg1: $StickerBlockEntity, arg2: number);
    }
    export class $ChassisBlockEntity extends $SmartBlockEntity {
        collectChassisGroup(): $List<$ChassisBlockEntity>;
        getIncludedBlockPositions(arg0: $Direction_, arg1: boolean): $List<$BlockPos>;
        addAttachedChasses(arg0: $Queue<$BlockPos_>, arg1: $Set_<$BlockPos_>): boolean;
        getRange(): number;
        worldPosition: $BlockPos;
        level: $Level;
        currentlySelectedRange: number;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get range(): number;
    }
    export class $ChassisRangeDisplay$GroupEntry extends $ChassisRangeDisplay$Entry {
    }
    export class $StickerBlock extends $WrenchableDirectionalBlock implements $IBE<$StickerBlockEntity>, $BlockSubLevelAssemblyListener {
        afterMove(arg0: $ServerLevel, arg1: $ServerLevel, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockPos_): void;
        getBlockEntityType(): $BlockEntityType<$StickerBlockEntity>;
        getBlockEntityClass(): $Class<$StickerBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$StickerBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$StickerBlockEntity, $InteractionResult>): $InteractionResult;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($StickerBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$StickerBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $StickerBlockEntity;
        beforeMove(arg0: $ServerLevel, arg1: $ServerLevel, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockPos_): void;
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
        static CODEC: $MapCodec<$WrenchableDirectionalBlock>;
        static EXTENDED: $BooleanProperty;
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
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$StickerBlockEntity>;
        get blockEntityClass(): $Class<$StickerBlockEntity>;
    }
    export class $RadialChassisBlock extends $AbstractChassisBlock {
        static STICKY_NORTH: $BooleanProperty;
        explosionResistance: number;
        static STICKY_SOUTH: $BooleanProperty;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static UPDATE_NONE: number;
        static STICKY_EAST: $BooleanProperty;
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
        static STICKY_WEST: $BooleanProperty;
        static CODEC: $MapCodec<$RotatedPillarBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        static AXIS: $EnumProperty<$Direction$Axis>;
        constructor(arg0: $BlockBehaviour$Properties);
    }
}
