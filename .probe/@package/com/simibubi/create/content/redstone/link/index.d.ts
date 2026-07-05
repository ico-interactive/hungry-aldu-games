import { $MapCodec } from "@package/com/mojang/serialization";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $Map, $Set } from "@package/java/util";
import { $ClipboardCloneable } from "@package/com/simibubi/create/content/equipment/clipboard";
import { $BehaviourType, $BlockEntityBehaviour, $ValueBoxTransform, $ValueBoxTransform$Dual } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $PlayerInteractEvent$RightClickBlock } from "@package/net/neoforged/neoforge/event/entity/player";
import { $Function_, $IntConsumer_, $Consumer_, $IntSupplier_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $SpecialBlockStateGen } from "@package/com/simibubi/create/foundation/data";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $IBE, $WrenchableDirectionalBlock } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Class } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Couple } from "@package/net/createmod/catnip/data";
import { $LevelAccessor, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $FactoryPanelSupportBehaviour } from "@package/com/simibubi/create/content/logistics/factoryBoard";
import { $DirectionProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RedstoneLinkBlockEntityAccessor } from "@package/dev/simulated_team/simulated/mixin/accessor";
export * as controller from "@package/com/simibubi/create/content/redstone/link/controller";

declare module "@package/com/simibubi/create/content/redstone/link" {
    export class $LinkRenderer {
        static tick(): void;
        static renderOnBlockEntity(arg0: $SmartBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        constructor();
    }
    export class $IRedstoneLinkable {
    }
    export interface $IRedstoneLinkable {
        getLocation(): $BlockPos;
        isAlive(): boolean;
        getTransmittedStrength(): number;
        setReceivedStrength(arg0: number): void;
        getNetworkKey(): $Couple<$RedstoneLinkNetworkHandler$Frequency>;
        isListening(): boolean;
        get location(): $BlockPos;
        get alive(): boolean;
        get transmittedStrength(): number;
        set receivedStrength(value: number);
        get networkKey(): $Couple<$RedstoneLinkNetworkHandler$Frequency>;
        get listening(): boolean;
    }
    export class $RedstoneLinkNetworkHandler {
        networksIn(arg0: $LevelAccessor): $Map<$Couple<$RedstoneLinkNetworkHandler$Frequency>, $Set<$IRedstoneLinkable>>;
        onLoadWorld(arg0: $LevelAccessor): void;
        updateNetworkOf(arg0: $LevelAccessor, arg1: $IRedstoneLinkable): void;
        removeFromNetwork(arg0: $LevelAccessor, arg1: $IRedstoneLinkable): void;
        addToNetwork(arg0: $LevelAccessor, arg1: $IRedstoneLinkable): void;
        getNetworkOf(arg0: $LevelAccessor, arg1: $IRedstoneLinkable): $Set<$IRedstoneLinkable>;
        static withinRange(arg0: $IRedstoneLinkable, arg1: $IRedstoneLinkable): boolean;
        onUnloadWorld(arg0: $LevelAccessor): void;
        hasAnyLoadedPower(arg0: $Couple<$RedstoneLinkNetworkHandler$Frequency>): boolean;
        globalPowerVersion: $AtomicInteger;
        constructor();
    }
    export class $LinkBehaviour$SlotPositioning {
        scale(arg0: number): $LinkBehaviour$SlotPositioning;
        constructor(arg0: $Function_<$BlockState, $Pair<$Vec3, $Vec3>>, arg1: $Function_<$BlockState, $Vec3>);
    }
    export class $RedstoneLinkBlock extends $WrenchableDirectionalBlock implements $IBE<$RedstoneLinkBlockEntity> {
        updateTransmittedSignal(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): void;
        getBlockEntityType(): $BlockEntityType<$RedstoneLinkBlockEntity>;
        getBlockEntityClass(): $Class<$RedstoneLinkBlockEntity>;
        toggleMode(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): $InteractionResult;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$RedstoneLinkBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$RedstoneLinkBlockEntity, $InteractionResult>): $InteractionResult;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($RedstoneLinkBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$RedstoneLinkBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $RedstoneLinkBlockEntity;
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
        static RECEIVER: $BooleanProperty;
        soundType: $SoundType;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$WrenchableDirectionalBlock>;
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
        get blockEntityType(): $BlockEntityType<$RedstoneLinkBlockEntity>;
        get blockEntityClass(): $Class<$RedstoneLinkBlockEntity>;
    }
    export class $RedstoneLinkBlockEntity extends $SmartBlockEntity implements $RedstoneLinkBlockEntityAccessor {
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        setSignal(arg0: number): void;
        getReceivedSignal(): number;
        transmit(arg0: number): void;
        getSignal(): number;
        updateSelfAndAttached(arg0: $BlockState_): void;
        getLink(): $LinkBehaviour;
        worldPosition: $BlockPos;
        panelSupport: $FactoryPanelSupportBehaviour;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get receivedSignal(): number;
        get link(): $LinkBehaviour;
    }
    export class $RedstoneLinkFrequencySlot extends $ValueBoxTransform$Dual {
        constructor(arg0: boolean);
    }
    export class $RedstoneLinkNetworkHandler$Frequency {
        static of(arg0: $ItemStack_): $RedstoneLinkNetworkHandler$Frequency;
        getStack(): $ItemStack;
        static EMPTY: $RedstoneLinkNetworkHandler$Frequency;
        get stack(): $ItemStack;
    }
    export class $LinkBehaviour extends $BlockEntityBehaviour implements $IRedstoneLinkable, $ClipboardCloneable {
        static receiver(arg0: $SmartBlockEntity, arg1: $Pair<$ValueBoxTransform, $ValueBoxTransform>, arg2: $IntConsumer_): $LinkBehaviour;
        getLocation(): $BlockPos;
        isAlive(): boolean;
        readFromClipboard(arg0: $HolderLookup$Provider, arg1: $CompoundTag_, arg2: $Player, arg3: $Direction_, arg4: boolean): boolean;
        getClipboardKey(): string;
        writeToClipboard(arg0: $HolderLookup$Provider, arg1: $CompoundTag_, arg2: $Direction_): boolean;
        static transmitter(arg0: $SmartBlockEntity, arg1: $Pair<$ValueBoxTransform, $ValueBoxTransform>, arg2: $IntSupplier_): $LinkBehaviour;
        notifySignalChange(): void;
        copyItemsFrom(arg0: $LinkBehaviour): void;
        setFrequency(arg0: boolean, arg1: $ItemStack_): void;
        testHit(arg0: boolean, arg1: $Vec3_): boolean;
        moveText(arg0: $Vec3_): $LinkBehaviour;
        getTransmittedStrength(): number;
        setReceivedStrength(arg0: number): void;
        getNetworkKey(): $Couple<$RedstoneLinkNetworkHandler$Frequency>;
        isListening(): boolean;
        newPosition: boolean;
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$LinkBehaviour>;
        get location(): $BlockPos;
        get alive(): boolean;
        get clipboardKey(): string;
        get transmittedStrength(): number;
        set receivedStrength(value: number);
        get networkKey(): $Couple<$RedstoneLinkNetworkHandler$Frequency>;
        get listening(): boolean;
    }
    export class $LinkHandler {
        static onBlockActivated(arg0: $PlayerInteractEvent$RightClickBlock): void;
        constructor();
    }
    export class $RedstoneLinkGenerator extends $SpecialBlockStateGen {
        constructor();
    }
    export class $LinkBehaviour$Mode extends $Enum<$LinkBehaviour$Mode> {
    }
    /**
     * Values that may be interpreted as {@link $LinkBehaviour$Mode}.
     */
    export type $LinkBehaviour$Mode_ = "transmit" | "receive";
}
