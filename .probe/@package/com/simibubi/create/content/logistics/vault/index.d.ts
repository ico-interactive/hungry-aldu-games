import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity, $IMultiBlockEntityContainer$Inventory } from "@package/com/simibubi/create/foundation/blockEntity";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $Map } from "@package/java/util";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $Clearable, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $Direction$Axis_, $BlockPos_, $Direction_, $Direction$Axis, $Holder$Reference, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Class, $Object } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $ConnectedTextureBehaviour$Base } from "@package/com/simibubi/create/foundation/block/connected";
import { $BlockItem, $Item, $Item$Properties } from "@package/net/minecraft/world/item";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $Property, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $InventoryIdentifier } from "@package/com/simibubi/create/api/packager";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_, $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $MountedItemStorageType, $MountedItemStorage, $WrapperMountedItemStorage } from "@package/com/simibubi/create/api/contraption/storage/item";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/logistics/vault" {
    export class $ItemVaultBlock extends $Block implements $IWrenchable, $IBE<$ItemVaultBlockEntity> {
        static isLarge(arg0: $BlockState_): boolean;
        getBlockEntityType(): $BlockEntityType<$ItemVaultBlockEntity>;
        static getVaultBlockAxis(arg0: $BlockState_): $Direction$Axis;
        getBlockEntityClass(): $Class<$ItemVaultBlockEntity>;
        static isVault(arg0: $BlockState_): boolean;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$ItemVaultBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$ItemVaultBlockEntity, $InteractionResult>): $InteractionResult;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($ItemVaultBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$ItemVaultBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $ItemVaultBlockEntity;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        explosionResistance: number;
        static SILENCED_METAL: $SoundType;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static HORIZONTAL_AXIS: $Property<$Direction$Axis>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        drops: $ResourceKey<$LootTable>;
        static LARGE: $BooleanProperty;
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
        get blockEntityType(): $BlockEntityType<$ItemVaultBlockEntity>;
        get blockEntityClass(): $Class<$ItemVaultBlockEntity>;
    }
    export class $ItemVaultMountedStorage extends $WrapperMountedItemStorage<$ItemStackHandler> {
        static fromVault(arg0: $ItemVaultBlockEntity): $ItemVaultMountedStorage;
        static fromLegacy(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $ItemVaultMountedStorage;
        static CODEC: $MapCodec<$ItemVaultMountedStorage>;
        type: $MountedItemStorageType<$MountedItemStorage>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MountedItemStorage>;
    }
    export class $ItemVaultMountedStorageType extends $MountedItemStorageType<$ItemVaultMountedStorage> {
        mount(arg0: $Level_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockEntity): $ItemVaultMountedStorage;
        codec: $MapCodec<$ItemVaultMountedStorage>;
        static CODEC: $Codec<$MountedItemStorageType<never>>;
        holder: $Holder$Reference<$MountedItemStorageType<never>>;
        static REGISTRY: $SimpleRegistry<$Block, $MountedItemStorageType<never>>;
        constructor();
    }
    export class $ItemVaultCTBehaviour extends $ConnectedTextureBehaviour$Base {
        constructor();
    }
    export class $ItemVaultItem extends $BlockItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Block_, arg1: $Item$Properties);
    }
    export class $ItemVaultBlockEntity extends $SmartBlockEntity implements $IMultiBlockEntityContainer$Inventory, $Clearable {
        setWidth(arg0: number): void;
        setHeight(arg0: number): void;
        getWidth(): number;
        getHeight(): number;
        setController(arg0: $BlockPos_): void;
        getController(): $BlockPos;
        getLastKnownPos(): $BlockPos;
        notifyMultiUpdated(): void;
        removeController(arg0: boolean): void;
        static getMaxLength(arg0: number): number;
        getMaxLength(arg0: $Direction$Axis_, arg1: number): number;
        applyInventoryToBlock(arg0: $ItemStackHandler): void;
        getInventoryOfBlock(): $ItemStackHandler;
        getMainConnectionAxis(): $Direction$Axis;
        preventConnectivityUpdate(): void;
        hasInventory(): boolean;
        isController(): boolean;
        getMaxWidth(): number;
        clearContent(): void;
        getInvId(): $InventoryIdentifier;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        getMainAxisOf(arg0: $BlockEntity): $Direction$Axis;
        setExtraData(arg0: $Object): void;
        modifyExtraData(arg0: $Object): $Object;
        getExtraData(): $Object;
        getControllerBE<T extends $BlockEntity>(): T;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get lastKnownPos(): $BlockPos;
        get inventoryOfBlock(): $ItemStackHandler;
        get mainConnectionAxis(): $Direction$Axis;
        get maxWidth(): number;
        get invId(): $InventoryIdentifier;
        get controllerBE(): T;
    }
}
