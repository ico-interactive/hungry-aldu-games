import { $AbstractSimiScreen } from "@package/net/createmod/catnip/gui";
import { $MenuBase, $AbstractSimiContainerScreen } from "@package/com/simibubi/create/foundation/gui/menu";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CraftingInput, $CraftingBookCategory_, $CustomRecipe } from "@package/net/minecraft/world/item/crafting";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Executor } from "@package/java/util/concurrent";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $NarratorStatus, $Minecraft, $DeltaTracker } from "@package/net/minecraft/client";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $InteractionResult, $MenuProvider, $Nameable, $ItemInteractionResult, $Container } from "@package/net/minecraft/world";
import { $SmartBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $StateDefinition, $BlockState_, $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $Slot, $MenuType_, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $DyeColor, $DyeColor_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $PlayerMainInvWrapper } from "@package/net/neoforged/neoforge/items/wrapper";
import { $DirectionProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $AbstractBlockEntityVisual, $SimpleDynamicVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $SoundType, $Block, $HorizontalDirectionalBlock, $SimpleWaterloggedBlock } from "@package/net/minecraft/world/level/block";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BasePacketPayload$PacketTypeProvider, $ServerboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $UUID_, $Set, $UUID, $List, $List_, $WeakHashMap } from "@package/java/util";
import { $ServerboundCustomPayloadPacket, $ClientboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Holder$Reference, $HolderLookup$Provider, $NonNullList, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Record, $Class } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $WorldAttached } from "@package/net/createmod/catnip/data";
import { $LevelAccessor, $BlockGetter, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $Renderable, $CycleButton } from "@package/net/minecraft/client/gui/components";
import { $SlotItemHandler, $IItemHandler, $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Font, $LayeredDraw$Layer, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $BlockEntityType_, $BlockEntity, $BlockEntityTicker, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $MountedItemStorageType, $WrapperMountedItemStorage, $MountedItemStorage } from "@package/com/simibubi/create/api/contraption/storage/item";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/equipment/toolbox" {
    export class $ToolboxHandler {
        static distance(arg0: $Vec3_, arg1: $BlockPos_): number;
        static onLoad(arg0: $ToolboxBlockEntity): void;
        static unequip(arg0: $Player, arg1: number, arg2: boolean): void;
        static entityTick(arg0: $Entity, arg1: $Level_): void;
        static withinRange(arg0: $Player, arg1: $ToolboxBlockEntity): boolean;
        static playerLogin(arg0: $Player): void;
        static syncData(arg0: $Player): void;
        static getNearest(arg0: $LevelAccessor, arg1: $Player, arg2: number): $List<$ToolboxBlockEntity>;
        static onUnload(arg0: $ToolboxBlockEntity): void;
        static getMaxRange(arg0: $Player): number;
        static toolboxes: $WorldAttached<$WeakHashMap<$BlockPos, $ToolboxBlockEntity>>;
        constructor();
    }
    export class $ToolBoxVisual extends $AbstractBlockEntityVisual<$ToolboxBlockEntity> implements $SimpleDynamicVisual {
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        constructor(arg0: $VisualizationContext, arg1: $ToolboxBlockEntity, arg2: number);
    }
    export class $ToolboxEquipPacket extends $Record implements $ServerboundPacketPayload {
        slot(): number;
        handle(arg0: $ServerPlayer): void;
        toolboxPos(): $BlockPos;
        hotbarSlot(): number;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ToolboxEquipPacket>;
        constructor(toolboxPos: $BlockPos_, slot: number, hotbarSlot: number);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ToolboxEquipPacket}.
     */
    export type $ToolboxEquipPacket_ = { hotbarSlot?: number, slot?: number, toolboxPos?: $BlockPos_,  } | [hotbarSlot?: number, slot?: number, toolboxPos?: $BlockPos_, ];
    export class $ToolboxSlot extends $SlotItemHandler {
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(arg0: $ToolboxMenu, arg1: $IItemHandler, arg2: number, arg3: number, arg4: number, arg5: boolean);
    }
    export class $ToolboxDyeingRecipe extends $CustomRecipe {
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        constructor(arg0: $CraftingBookCategory_);
    }
    export class $ToolboxBlockEntity extends $SmartBlockEntity implements $MenuProvider, $Nameable {
        getName(): $Component;
        getDisplayName(): $Component;
        setUniqueId(arg0: $UUID_): void;
        unequipTracked(): void;
        readInventory(arg0: $ToolboxInventory): void;
        getUniqueId(): $UUID;
        unequip(arg0: number, arg1: $Player, arg2: number, arg3: boolean): void;
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        connectPlayer(arg0: number, arg1: $Player, arg2: number): void;
        isFullyInitialized(): boolean;
        getColor(): $DyeColor;
        getCustomName(): $Component;
        hasCustomName(): boolean;
        setCustomName(arg0: $Component_): void;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        shouldCloseCurrentScreen(): boolean;
        worldPosition: $BlockPos;
        drawers: $LerpedFloat;
        level: $Level;
        lid: $LerpedFloat;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get name(): $Component;
        get displayName(): $Component;
        get fullyInitialized(): boolean;
        get color(): $DyeColor;
    }
    export class $ToolboxDisposeAllPacket extends $Record implements $ServerboundPacketPayload {
        handle(arg0: $ServerPlayer): void;
        toolboxPos(): $BlockPos;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ToolboxDisposeAllPacket>;
        constructor(toolboxPos: $BlockPos_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ToolboxDisposeAllPacket}.
     */
    export type $ToolboxDisposeAllPacket_ = { toolboxPos?: $BlockPos_,  } | [toolboxPos?: $BlockPos_, ];
    export class $ToolboxInventory extends $ItemStackHandler {
        distributeToCompartment(arg0: $ItemStack_, arg1: number, arg2: boolean): $ItemStack;
        static canItemsShareCompartment(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        takeFromCompartment(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        inLimitedMode(arg0: $Consumer_<$ToolboxInventory>): void;
        settle(arg0: number): void;
        static cleanItemNBT(arg0: $ItemStack_): $ItemStack;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        /**
         * @deprecated
         */
        static BACKWARDS_COMPAT_CODEC: $Codec<$ToolboxInventory>;
        static CODEC: $Codec<$ToolboxInventory>;
        static STACKS_PER_COMPARTMENT: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ToolboxInventory>;
        constructor(arg0: $ToolboxBlockEntity);
        set tle(value: number);
    }
    export class $ToolboxScreen extends $AbstractSimiContainerScreen<$ToolboxMenu> {
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
        menu: $ToolboxMenu;
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
        constructor(arg0: $ToolboxMenu, arg1: $Inventory, arg2: $Component_);
    }
    export class $ToolboxMenu extends $MenuBase<$ToolboxBlockEntity> {
        static create(arg0: number, arg1: $Inventory, arg2: $ToolboxBlockEntity): $ToolboxMenu;
        totalCountInCompartment(arg0: number): number;
        getFilter(arg0: number): $ItemStack;
        playerInventory: $Inventory;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        renderPass: boolean;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        contentHolder: $ToolboxBlockEntity;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        player: $Player;
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $RegistryFriendlyByteBuf);
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $ToolboxBlockEntity);
    }
    export class $RadialToolboxMenu extends $AbstractSimiScreen {
        prevSlot(arg0: number): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $List_<$ToolboxBlockEntity>, arg1: $RadialToolboxMenu$State_, arg2: $ToolboxBlockEntity);
    }
    export class $ToolboxHandlerClient {
        static onKeyInput(arg0: number, arg1: boolean): void;
        static renderOverlay(arg0: $GuiGraphics, arg1: $DeltaTracker): void;
        static onPickItem(): boolean;
        static clientTick(): void;
        static OVERLAY: $LayeredDraw$Layer;
        constructor();
    }
    export class $ItemReturnInvWrapper extends $PlayerMainInvWrapper {
        constructor(arg0: $Inventory);
    }
    export class $RadialToolboxMenu$State extends $Enum<$RadialToolboxMenu$State> {
        static values(): $RadialToolboxMenu$State[];
        static valueOf(arg0: string): $RadialToolboxMenu$State;
        static SELECT_BOX: $RadialToolboxMenu$State;
        static SELECT_ITEM_UNEQUIP: $RadialToolboxMenu$State;
        static DETACH: $RadialToolboxMenu$State;
        static SELECT_ITEM: $RadialToolboxMenu$State;
    }
    /**
     * Values that may be interpreted as {@link $RadialToolboxMenu$State}.
     */
    export type $RadialToolboxMenu$State_ = "select_box" | "select_item" | "select_item_unequip" | "detach";
    export class $ToolboxMountedStorage extends $WrapperMountedItemStorage<$ToolboxInventory> {
        static fromToolbox(arg0: $ToolboxBlockEntity): $ToolboxMountedStorage;
        static fromLegacy(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $ToolboxMountedStorage;
        static CODEC: $MapCodec<$ToolboxMountedStorage>;
        type: $MountedItemStorageType<$MountedItemStorage>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MountedItemStorage>;
    }
    export class $ToolboxMountedStorageType extends $MountedItemStorageType<$ToolboxMountedStorage> {
        mount(arg0: $Level_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockEntity): $ToolboxMountedStorage;
        codec: $MapCodec<$ToolboxMountedStorage>;
        static CODEC: $Codec<$MountedItemStorageType<never>>;
        holder: $Holder$Reference<$MountedItemStorageType<never>>;
        static REGISTRY: $SimpleRegistry<$Block, $MountedItemStorageType<never>>;
        constructor();
    }
    export class $ToolboxBlock extends $HorizontalDirectionalBlock implements $SimpleWaterloggedBlock, $IBE<$ToolboxBlockEntity> {
        getBlockEntityType(): $BlockEntityType<$ToolboxBlockEntity>;
        getBlockEntityClass(): $Class<$ToolboxBlockEntity>;
        getColor(): $DyeColor;
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        pickupBlock(arg0: $Player | null, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_): $ItemStack;
        canPlaceLiquid(arg0: $Player | null, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid_): boolean;
        getPickupSound(): ($SoundEvent) | undefined;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$ToolboxBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$ToolboxBlockEntity, $InteractionResult>): $InteractionResult;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($ToolboxBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$ToolboxBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $ToolboxBlockEntity;
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
        static CODEC: $MapCodec<$ToolboxBlock>;
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
        constructor(arg0: $BlockBehaviour$Properties, arg1: $DyeColor_);
        get blockEntityType(): $BlockEntityType<$ToolboxBlockEntity>;
        get blockEntityClass(): $Class<$ToolboxBlockEntity>;
        get color(): $DyeColor;
    }
    export class $ToolboxRenderer extends $SmartBlockEntityRenderer<$ToolboxBlockEntity> {
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
}
