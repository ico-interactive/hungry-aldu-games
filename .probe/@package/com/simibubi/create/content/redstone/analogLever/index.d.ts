import { $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $List_ } from "@package/java/util";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Class } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $DirectionProperty, $AttachFace, $EnumProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $IHaveGoggleInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $SimpleDynamicVisual, $AbstractBlockEntityVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $SoundType, $FaceAttachedHorizontalDirectionalBlock, $Block } from "@package/net/minecraft/world/level/block";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/redstone/analogLever" {
    export class $AnalogLeverRenderer extends $SafeBlockEntityRenderer<$AnalogLeverBlockEntity> {
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $AnalogLeverVisual extends $AbstractBlockEntityVisual<$AnalogLeverBlockEntity> implements $SimpleDynamicVisual {
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        constructor(arg0: $VisualizationContext, arg1: $AnalogLeverBlockEntity, arg2: number);
    }
    export class $AnalogLeverBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation {
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        getState(): number;
        addToGoggleTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        changeState(arg0: boolean): void;
        containedFluidTooltip(arg0: $List_<$Component_>, arg1: boolean, arg2: $IFluidHandler): boolean;
        getIcon(arg0: boolean): $ItemStack;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get state(): number;
    }
    export class $AnalogLeverBlock extends $FaceAttachedHorizontalDirectionalBlock implements $IBE<$AnalogLeverBlockEntity> {
        getBlockEntityType(): $BlockEntityType<$AnalogLeverBlockEntity>;
        getBlockEntityClass(): $Class<$AnalogLeverBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$AnalogLeverBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$AnalogLeverBlockEntity, $InteractionResult>): $InteractionResult;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($AnalogLeverBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$AnalogLeverBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $AnalogLeverBlockEntity;
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
        static CODEC: $MapCodec<$AnalogLeverBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        static FACE: $EnumProperty<$AttachFace>;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$AnalogLeverBlockEntity>;
        get blockEntityClass(): $Class<$AnalogLeverBlockEntity>;
    }
}
