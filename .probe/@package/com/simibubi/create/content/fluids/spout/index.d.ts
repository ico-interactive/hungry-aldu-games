import { $MapCodec } from "@package/com/mojang/serialization";
import { $BlockSpoutingBehaviour } from "@package/com/simibubi/create/api/behaviour/spouting";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $List_ } from "@package/java/util";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $StateDefinition, $BlockState_, $BlockBehaviour$Properties, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Class } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $IHaveGoggleInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $BlockEntityType, $BlockEntityTicker, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/fluids/spout" {
    export class $SpoutBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation {
        addToGoggleTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        containedFluidTooltip(arg0: $List_<$Component_>, arg1: boolean, arg2: $IFluidHandler): boolean;
        getIcon(arg0: boolean): $ItemStack;
        worldPosition: $BlockPos;
        sendSplash: boolean;
        static FILLING_TIME: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        processingTicks: number;
        customProcess: $BlockSpoutingBehaviour;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $SpoutRenderer extends $SafeBlockEntityRenderer<$SpoutBlockEntity> {
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $SpoutBlock extends $Block implements $IWrenchable, $IBE<$SpoutBlockEntity> {
        getBlockEntityType(): $BlockEntityType<$SpoutBlockEntity>;
        getBlockEntityClass(): $Class<$SpoutBlockEntity>;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$SpoutBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$SpoutBlockEntity, $InteractionResult>): $InteractionResult;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($SpoutBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$SpoutBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $SpoutBlockEntity;
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
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$SpoutBlockEntity>;
        get blockEntityClass(): $Class<$SpoutBlockEntity>;
    }
    export class $FillingBySpout {
        static fillItem(arg0: $Level_, arg1: number, arg2: $ItemStack_, arg3: $FluidStack_): $ItemStack;
        static getRequiredAmountForItem(arg0: $Level_, arg1: $ItemStack_, arg2: $FluidStack_): number;
        static canItemBeFilled(arg0: $Level_, arg1: $ItemStack_): boolean;
        constructor();
    }
}
