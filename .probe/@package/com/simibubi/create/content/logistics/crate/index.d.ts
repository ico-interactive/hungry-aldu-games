import { $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $FilteringBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/filtering";
import { $Supplier_, $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $Clearable, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $DirectionProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos, $BlockPos_, $Holder$Reference, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $IBE, $WrenchableDirectionalBlock } from "@package/com/simibubi/create/foundation/block";
import { $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $Class } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $MountedItemStorageType, $MountedItemStorage } from "@package/com/simibubi/create/api/contraption/storage/item";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/logistics/crate" {
    export class $BottomlessItemHandler extends $ItemStackHandler {
        constructor(arg0: $Supplier_<$ItemStack>);
    }
    export class $CreativeCrateMountedStorageType extends $MountedItemStorageType<$CreativeCrateMountedStorage> {
        mount(arg0: $Level_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockEntity): $CreativeCrateMountedStorage;
        codec: $MapCodec<$CreativeCrateMountedStorage>;
        static CODEC: $Codec<$MountedItemStorageType<never>>;
        holder: $Holder$Reference<$MountedItemStorageType<never>>;
        static REGISTRY: $SimpleRegistry<$Block, $MountedItemStorageType<never>>;
        constructor();
    }
    export class $CrateBlockEntity extends $SmartBlockEntity {
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $CreativeCrateBlockEntity extends $CrateBlockEntity implements $Clearable {
        createFilter(): $FilteringBehaviour;
        clearContent(): void;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $CrateBlock extends $WrenchableDirectionalBlock implements $IWrenchable {
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
        static CODEC: $MapCodec<$CrateBlock>;
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
    export class $CreativeCrateMountedStorage extends $MountedItemStorage {
        static CODEC: $MapCodec<$CreativeCrateMountedStorage>;
        type: $MountedItemStorageType<$MountedItemStorage>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MountedItemStorage>;
        constructor(arg0: $ItemStack_);
    }
    export class $CreativeCrateBlock extends $CrateBlock implements $IBE<$CreativeCrateBlockEntity> {
        getBlockEntityType(): $BlockEntityType<$CreativeCrateBlockEntity>;
        getBlockEntityClass(): $Class<$CreativeCrateBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$CreativeCrateBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$CreativeCrateBlockEntity, $InteractionResult>): $InteractionResult;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($CreativeCrateBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$CreativeCrateBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $CreativeCrateBlockEntity;
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
        static CODEC: $MapCodec<$CrateBlock>;
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
        get blockEntityType(): $BlockEntityType<$CreativeCrateBlockEntity>;
        get blockEntityClass(): $Class<$CreativeCrateBlockEntity>;
    }
}
