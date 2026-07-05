import { $Level, $BlockGetter, $LevelAccessor, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $SmartBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $DirectionProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos, $BlockPos_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $BlockPlaceContext } from "@package/net/minecraft/world/item/context";
import { $StateDefinition, $BlockState_, $BlockBehaviour$Properties, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE, $ProperWaterloggedBlock, $WrenchableDirectionalBlock } from "@package/com/simibubi/create/foundation/block";
import { $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $Class } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockEntityType, $BlockEntityTicker, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/redstone/deskBell" {
    export class $DeskBellRenderer extends $SmartBlockEntityRenderer<$DeskBellBlockEntity> {
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $DeskBellBlock extends $WrenchableDirectionalBlock implements $ProperWaterloggedBlock, $IBE<$DeskBellBlockEntity> {
        playSound(arg0: $Player, arg1: $LevelAccessor, arg2: $BlockPos_): void;
        getBlockEntityType(): $BlockEntityType<$DeskBellBlockEntity>;
        getBlockEntityClass(): $Class<$DeskBellBlockEntity>;
        unPress(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): void;
        updateWater(arg0: $LevelAccessor, arg1: $BlockState_, arg2: $BlockPos_): void;
        withWater(arg0: $BlockState_, arg1: $BlockPlaceContext): $BlockState;
        fluidState(arg0: $BlockState_): $FluidState;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$DeskBellBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$DeskBellBlockEntity, $InteractionResult>): $InteractionResult;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($DeskBellBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$DeskBellBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $DeskBellBlockEntity;
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        pickupBlock(arg0: $Player | null, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_): $ItemStack;
        canPlaceLiquid(arg0: $Player | null, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid_): boolean;
        getPickupSound(): ($SoundEvent) | undefined;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
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
        get blockEntityType(): $BlockEntityType<$DeskBellBlockEntity>;
        get blockEntityClass(): $Class<$DeskBellBlockEntity>;
    }
    export class $DeskBellBlockEntity extends $SmartBlockEntity {
        ding(): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        animation: $LerpedFloat;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
}
