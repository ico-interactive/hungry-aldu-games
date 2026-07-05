import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $TrackTargetingBehaviour } from "@package/com/simibubi/create/content/trains/track";
import { $SingleBlockEntityEdgePoint } from "@package/com/simibubi/create/content/trains/signal";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $UUID } from "@package/java/util";
import { $FilteringBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/filtering";
import { $Train } from "@package/com/simibubi/create/content/trains/entity";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $FilterItemStack } from "@package/com/simibubi/create/content/logistics/filter";
import { $SmartBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $Clearable, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $TrackNodeLocation } from "@package/com/simibubi/create/content/trains/graph";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Class } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Couple } from "@package/net/createmod/catnip/data";
import { $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $AbstractBlockEntityVisual, $SimpleTickableVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $TickableVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/trains/observer" {
    export class $TrackObserverBlock extends $Block implements $IBE<$TrackObserverBlockEntity>, $IWrenchable {
        getBlockEntityType(): $BlockEntityType<$TrackObserverBlockEntity>;
        getBlockEntityClass(): $Class<$TrackObserverBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$TrackObserverBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$TrackObserverBlockEntity, $InteractionResult>): $InteractionResult;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($TrackObserverBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$TrackObserverBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $TrackObserverBlockEntity;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
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
        static POWERED: $BooleanProperty;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$TrackObserverBlockEntity>;
        get blockEntityClass(): $Class<$TrackObserverBlockEntity>;
    }
    export class $TrackObserverVisual extends $AbstractBlockEntityVisual<$TrackObserverBlockEntity> implements $SimpleTickableVisual {
        tick(arg0: $TickableVisual$Context): void;
        planTick(): $Plan<$TickableVisual$Context>;
        constructor(arg0: $VisualizationContext, arg1: $TrackObserverBlockEntity, arg2: number);
    }
    export class $TrackObserverBlockEntity extends $SmartBlockEntity implements $TransformableBlockEntity, $Clearable {
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        getFilter(): $ItemStack;
        createFilter(): $FilteringBehaviour;
        clearContent(): void;
        isBlockPowered(): boolean;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        getObserver(): $TrackObserver;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        passingTrainUUID: $UUID;
        computerBehaviour: $AbstractComputerBehaviour;
        edgePoint: $TrackTargetingBehaviour<$TrackObserver>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get filter(): $ItemStack;
        get blockPowered(): boolean;
        get observer(): $TrackObserver;
    }
    export class $TrackObserver extends $SingleBlockEntityEdgePoint {
        getFilter(): $FilterItemStack;
        keepAlive(arg0: $Train): void;
        isActivated(): boolean;
        setFilterAndNotify(arg0: $Level_, arg1: $ItemStack_): void;
        getCurrentTrain(): $UUID;
        edgeLocation: $Couple<$TrackNodeLocation>;
        blockEntityPos: $BlockPos;
        blockEntityDimension: $ResourceKey<$Level>;
        id: $UUID;
        position: number;
        constructor();
        get filter(): $FilterItemStack;
        get activated(): boolean;
        get currentTrain(): $UUID;
    }
    export class $TrackObserverRenderer extends $SmartBlockEntityRenderer<$TrackObserverBlockEntity> {
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
}
