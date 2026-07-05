import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $AbstractSimiContainerScreen, $GhostItemMenu } from "@package/com/simibubi/create/foundation/gui/menu";
import { $Executor } from "@package/java/util/concurrent";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $List, $List_, $Map, $Set } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $StockCheckingBlockEntity, $PackageOrderWithCrafts, $PackageOrderWithCrafts_, $StockTickerBlockEntity } from "@package/com/simibubi/create/content/logistics/stockTicker";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $MenuProvider, $ItemInteractionResult, $Container } from "@package/net/minecraft/world";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction$Axis, $NonNullList, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $MenuType_, $AbstractContainerMenu, $Slot } from "@package/net/minecraft/world/inventory";
import { $Record, $Class } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $Item, $ItemStack_, $ItemStack, $Item$Properties } from "@package/net/minecraft/world/item";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $CycleButton, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $SlotItemHandler, $IItemHandler, $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $BlockEntityConfigurationPacket } from "@package/com/simibubi/create/foundation/networking";
import { $EnumProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_, $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Font } from "@package/net/minecraft/client/gui";
import { $LogisticallyLinkedBlockItem, $LogisticallyLinkedBehaviour } from "@package/com/simibubi/create/content/logistics/packagerLink";
import { $ClientboundPacketPayload, $BasePacketPayload$PacketTypeProvider } from "@package/net/createmod/catnip/net/base";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/logistics/redstoneRequester" {
    export class $RedstoneRequesterMenu extends $GhostItemMenu<$RedstoneRequesterBlockEntity> {
        static create(arg0: number, arg1: $Inventory, arg2: $RedstoneRequesterBlockEntity): $RedstoneRequesterMenu;
        playerInventory: $Inventory;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        ghostInventory: $ItemStackHandler;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        contentHolder: $RedstoneRequesterBlockEntity;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        player: $Player;
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $RedstoneRequesterBlockEntity);
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $RegistryFriendlyByteBuf);
    }
    export class $RedstoneRequesterEffectPacket extends $Record implements $ClientboundPacketPayload {
        pos(): $BlockPos;
        handle(arg0: $LocalPlayer): void;
        success(): boolean;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $RedstoneRequesterEffectPacket>;
        constructor(pos: $BlockPos_, success: boolean);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $RedstoneRequesterEffectPacket}.
     */
    export type $RedstoneRequesterEffectPacket_ = { pos?: $BlockPos_, success?: boolean,  } | [pos?: $BlockPos_, success?: boolean, ];
    export class $AutoRequestData extends $Record {
        isValid(): boolean;
        encodedTargetAddress(): string;
        static readFromItem(arg0: $Level_, arg1: $Player, arg2: $BlockPos_, arg3: $ItemStack_): $AutoRequestData;
        writeToItem(arg0: $BlockPos_, arg1: $ItemStack_): void;
        encodedRequest(): $PackageOrderWithCrafts;
        targetDim(): string;
        targetOffset(): $BlockPos;
        static CODEC: $Codec<$AutoRequestData>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AutoRequestData>;
        constructor();
        constructor(encodedRequest: $PackageOrderWithCrafts_, encodedTargetAddress: string, targetOffset: $BlockPos_, targetDim: string, isValid: boolean);
        get valid(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $AutoRequestData}.
     */
    export type $AutoRequestData_ = { targetOffset?: $BlockPos_, encodedTargetAddress?: string, encodedRequest?: $PackageOrderWithCrafts_, targetDim?: string, isValid?: boolean,  } | [targetOffset?: $BlockPos_, encodedTargetAddress?: string, encodedRequest?: $PackageOrderWithCrafts_, targetDim?: string, isValid?: boolean, ];
    export class $RedstoneRequesterBlockEntity extends $StockCheckingBlockEntity implements $MenuProvider {
        use(arg0: $Player): $InteractionResult;
        getDisplayName(): $Component;
        triggerRequest(): void;
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        playEffect(arg0: boolean): void;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        shouldCloseCurrentScreen(): boolean;
        worldPosition: $BlockPos;
        encodedTargetAdress: string;
        level: $Level;
        encodedRequest: $PackageOrderWithCrafts;
        static ATTACHMENTS_NBT_KEY: string;
        behaviour: $LogisticallyLinkedBehaviour;
        lastRequestSucceeded: boolean;
        computerBehaviour: $AbstractComputerBehaviour;
        allowPartialRequests: boolean;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get displayName(): $Component;
    }
    export class $RedstoneRequesterBlock extends $Block implements $IBE<$RedstoneRequesterBlockEntity>, $IWrenchable {
        static appendRequesterTooltip(arg0: $ItemStack_, arg1: $List_<$Component_>): void;
        static programRequester(arg0: $ServerPlayer, arg1: $StockTickerBlockEntity, arg2: $PackageOrderWithCrafts_, arg3: string): void;
        getBlockEntityType(): $BlockEntityType<$RedstoneRequesterBlockEntity>;
        getBlockEntityClass(): $Class<$RedstoneRequesterBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$RedstoneRequesterBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$RedstoneRequesterBlockEntity, $InteractionResult>): $InteractionResult;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($RedstoneRequesterBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$RedstoneRequesterBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $RedstoneRequesterBlockEntity;
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
        static AXIS: $EnumProperty<$Direction$Axis>;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$RedstoneRequesterBlockEntity>;
        get blockEntityClass(): $Class<$RedstoneRequesterBlockEntity>;
    }
    export class $RedstoneRequesterScreen extends $AbstractSimiContainerScreen<$RedstoneRequesterMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static PANORAMA: $PanoramaRenderer;
        static INVENTORY_LOCATION: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: $RedstoneRequesterMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(arg0: $RedstoneRequesterMenu, arg1: $Inventory, arg2: $Component_);
    }
    export class $RedstoneRequesterConfigurationPacket extends $BlockEntityConfigurationPacket<$RedstoneRequesterBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $RedstoneRequesterConfigurationPacket>;
        constructor(arg0: $BlockPos_, arg1: string, arg2: boolean, arg3: $List_<number>);
    }
    export class $RedstoneRequesterMenu$SorterProofSlot extends $SlotItemHandler {
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(arg0: $IItemHandler, arg1: number, arg2: number, arg3: number);
    }
    export class $AutoRequestData$Mutable {
        toImmutable(): $AutoRequestData;
        targetDim: string;
        encodedRequest: $PackageOrderWithCrafts;
        isValid: boolean;
        encodedTargetAddress: string;
        targetOffset: $BlockPos;
        constructor();
        constructor(arg0: $AutoRequestData_);
    }
    export class $RedstoneRequesterBlockItem extends $LogisticallyLinkedBlockItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Block_, arg1: $Item$Properties);
    }
}
