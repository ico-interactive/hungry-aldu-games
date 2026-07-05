import { $CSchematics } from "@package/com/simibubi/create/infrastructure/config";
import { $MenuBase, $AbstractSimiContainerScreen } from "@package/com/simibubi/create/foundation/gui/menu";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Executor } from "@package/java/util/concurrent";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $NarratorStatus, $Minecraft } from "@package/net/minecraft/client";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $Set, $LinkedHashSet, $List } from "@package/java/util";
import { $ServerboundCustomPayloadPacket, $ClientboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $Clearable, $InteractionResult, $MenuProvider, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Object2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $BlockPos_, $HolderGetter, $HolderLookup$Provider, $NonNullList, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $StateDefinition, $BlockState_, $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $BeltBlockEntity$CasingType_, $BeltBlockEntity$CasingType } from "@package/com/simibubi/create/content/kinetics/belt";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Slot, $MenuType_, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Enum, $Record, $Class } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockGetter, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Renderable, $CycleButton } from "@package/net/minecraft/client/gui/components";
import { $IItemHandler, $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $SchematicPrinter } from "@package/com/simibubi/create/content/schematics";
import { $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $AbstractBlockEntityVisual, $SimpleDynamicVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $SoundType, $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Font } from "@package/net/minecraft/client/gui";
import { $BasePacketPayload$PacketTypeProvider, $ServerboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $BlockEntityType_, $BlockEntity, $BlockEntityTicker, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/schematics/cannon" {
    export class $SchematicannonBlockEntity extends $SmartBlockEntity implements $MenuProvider, $Clearable {
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        config(): $CSchematics;
        getDisplayName(): $Component;
        getShotsPerGunpowder(): number;
        findInventories(): void;
        updateChecklist(): void;
        playFiringSound(): void;
        finishedPrinting(): void;
        static stripBeltIfNotLast(arg0: $BlockState_): $BlockState;
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        clearContent(): void;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        shouldCloseCurrentScreen(): boolean;
        flyingBlocks: $List<$LaunchedItem>;
        schematicProgress: number;
        replaceBlockEntities: boolean;
        firstRenderTick: boolean;
        inventory: $SchematicannonInventory;
        previousTarget: $BlockPos;
        missingItem: $ItemStack;
        dontUpdateChecklist: boolean;
        replaceMode: number;
        static NEIGHBOUR_CHECKING: number;
        positionNotLoaded: boolean;
        blocksPlaced: number;
        state: $SchematicannonBlockEntity$State;
        bookPrintingProgress: number;
        blocksToPlace: number;
        skipMissing: boolean;
        defaultYaw: number;
        sendUpdate: boolean;
        level: $Level;
        neighbourCheckCooldown: number;
        printer: $SchematicPrinter;
        static ATTACHMENTS_NBT_KEY: string;
        checklist: $MaterialChecklist;
        remainingFuel: number;
        hasCreativeCrate: boolean;
        worldPosition: $BlockPos;
        static MAX_ANCHOR_DISTANCE: number;
        statusMsg: string;
        attachedInventories: $LinkedHashSet<$IItemHandler>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get displayName(): $Component;
        get shotsPerGunpowder(): number;
    }
    export class $SchematicannonBlockEntity$State extends $Enum<$SchematicannonBlockEntity$State> {
        static values(): $SchematicannonBlockEntity$State[];
        static valueOf(arg0: string): $SchematicannonBlockEntity$State;
        static PAUSED: $SchematicannonBlockEntity$State;
        static RUNNING: $SchematicannonBlockEntity$State;
        static STOPPED: $SchematicannonBlockEntity$State;
    }
    /**
     * Values that may be interpreted as {@link $SchematicannonBlockEntity$State}.
     */
    export type $SchematicannonBlockEntity$State_ = "stopped" | "paused" | "running";
    export class $SchematicannonMenu extends $MenuBase<$SchematicannonBlockEntity> {
        static create(arg0: number, arg1: $Inventory, arg2: $SchematicannonBlockEntity): $SchematicannonMenu;
        playerInventory: $Inventory;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        contentHolder: $SchematicannonBlockEntity;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        player: $Player;
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $RegistryFriendlyByteBuf);
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $SchematicannonBlockEntity);
    }
    export class $LaunchedItem$ForBlockState extends $LaunchedItem {
        stack: $ItemStack;
        data: $CompoundTag;
        totalTicks: number;
        state: $BlockState;
        ticksRemaining: number;
        target: $BlockPos;
        constructor(arg0: $BlockPos_, arg1: $BlockPos_, arg2: $ItemStack_, arg3: $BlockState_, arg4: $CompoundTag_);
    }
    export class $SchematicannonBlockEntity$SchematicannonOptions extends $Record {
        replaceBlockEntities(): boolean;
        skipMissing(): boolean;
        replaceMode(): number;
        static CODEC: $Codec<$SchematicannonBlockEntity$SchematicannonOptions>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $SchematicannonBlockEntity$SchematicannonOptions>;
        constructor(replaceMode: number, skipMissing: boolean, replaceBlockEntities: boolean);
    }
    /**
     * Values that may be interpreted as {@link $SchematicannonBlockEntity$SchematicannonOptions}.
     */
    export type $SchematicannonBlockEntity$SchematicannonOptions_ = { skipMissing?: boolean, replaceMode?: number, replaceBlockEntities?: boolean,  } | [skipMissing?: boolean, replaceMode?: number, replaceBlockEntities?: boolean, ];
    export class $SchematicannonRenderer extends $SafeBlockEntityRenderer<$SchematicannonBlockEntity> {
        shouldRenderOffScreen(arg0: $SchematicannonBlockEntity): boolean;
        static getCannonAngles(arg0: $SchematicannonBlockEntity, arg1: $BlockPos_, arg2: number): number[];
        static getRecoil(arg0: $SchematicannonBlockEntity, arg1: number): number;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $ConfigureSchematicannonPacket$Option extends $Enum<$ConfigureSchematicannonPacket$Option> {
        static values(): $ConfigureSchematicannonPacket$Option[];
        static valueOf(arg0: string): $ConfigureSchematicannonPacket$Option;
        static SKIP_MISSING: $ConfigureSchematicannonPacket$Option;
        static PAUSE: $ConfigureSchematicannonPacket$Option;
        static PLAY: $ConfigureSchematicannonPacket$Option;
        static SKIP_BLOCK_ENTITIES: $ConfigureSchematicannonPacket$Option;
        static STOP: $ConfigureSchematicannonPacket$Option;
        static DONT_REPLACE: $ConfigureSchematicannonPacket$Option;
        static REPLACE_ANY: $ConfigureSchematicannonPacket$Option;
        static REPLACE_EMPTY: $ConfigureSchematicannonPacket$Option;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ConfigureSchematicannonPacket$Option>;
        static REPLACE_SOLID: $ConfigureSchematicannonPacket$Option;
    }
    /**
     * Values that may be interpreted as {@link $ConfigureSchematicannonPacket$Option}.
     */
    export type $ConfigureSchematicannonPacket$Option_ = "dont_replace" | "replace_solid" | "replace_any" | "replace_empty" | "skip_missing" | "skip_block_entities" | "play" | "pause" | "stop";
    export class $LaunchedItem$ForEntity extends $LaunchedItem {
        stack: $ItemStack;
        totalTicks: number;
        entity: $Entity;
        ticksRemaining: number;
        target: $BlockPos;
        constructor(arg0: $BlockPos_, arg1: $BlockPos_, arg2: $ItemStack_, arg3: $Entity);
    }
    export class $LaunchedItem {
        update(arg0: $Level_): boolean;
        static fromNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $HolderGetter<$Block_>): $LaunchedItem;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        stack: $ItemStack;
        totalTicks: number;
        ticksRemaining: number;
        target: $BlockPos;
    }
    export class $MaterialChecklist {
        collect(arg0: $ItemStack_): void;
        createWrittenClipboard(): $ItemStack;
        require(arg0: $ItemRequirement): void;
        createWrittenBook(): $ItemStack;
        getRequiredAmount(arg0: $Item_): number;
        warnBlockNotLoaded(): void;
        blocksNotLoaded: boolean;
        static MAX_ENTRIES_PER_CLIPBOARD_PAGE: number;
        damageRequired: $Object2IntMap<$Item>;
        static MAX_ENTRIES_PER_PAGE: number;
        gathered: $Object2IntMap<$Item>;
        required: $Object2IntMap<$Item>;
        constructor();
    }
    export class $LaunchedItem$ForBelt extends $LaunchedItem$ForBlockState {
        casings: $BeltBlockEntity$CasingType[];
        stack: $ItemStack;
        data: $CompoundTag;
        totalTicks: number;
        length: number;
        state: $BlockState;
        ticksRemaining: number;
        target: $BlockPos;
        constructor();
        constructor(arg0: $BlockPos_, arg1: $BlockPos_, arg2: $ItemStack_, arg3: $BlockState_, arg4: $BeltBlockEntity$CasingType_[]);
    }
    export class $SchematicannonInventory extends $ItemStackHandler {
        constructor(arg0: $SchematicannonBlockEntity);
    }
    export class $SchematicannonVisual extends $AbstractBlockEntityVisual<$SchematicannonBlockEntity> implements $SimpleDynamicVisual {
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        constructor(arg0: $VisualizationContext, arg1: $SchematicannonBlockEntity, arg2: number);
    }
    export class $ConfigureSchematicannonPacket extends $Record implements $ServerboundPacketPayload {
        set(): boolean;
        handle(arg0: $ServerPlayer): void;
        option(): $ConfigureSchematicannonPacket$Option;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ConfigureSchematicannonPacket>;
        constructor(option: $ConfigureSchematicannonPacket$Option_, set: boolean);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ConfigureSchematicannonPacket}.
     */
    export type $ConfigureSchematicannonPacket_ = { option?: $ConfigureSchematicannonPacket$Option_, set?: boolean,  } | [option?: $ConfigureSchematicannonPacket$Option_, set?: boolean, ];
    export class $SchematicannonScreen extends $AbstractSimiContainerScreen<$SchematicannonMenu> {
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
        menu: $SchematicannonMenu;
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
        constructor(arg0: $SchematicannonMenu, arg1: $Inventory, arg2: $Component_);
    }
    export class $SchematicannonBlock extends $Block implements $IBE<$SchematicannonBlockEntity> {
        getBlockEntityType(): $BlockEntityType<$SchematicannonBlockEntity>;
        getBlockEntityClass(): $Class<$SchematicannonBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$SchematicannonBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$SchematicannonBlockEntity, $InteractionResult>): $InteractionResult;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($SchematicannonBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$SchematicannonBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $SchematicannonBlockEntity;
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
        get blockEntityType(): $BlockEntityType<$SchematicannonBlockEntity>;
        get blockEntityClass(): $Class<$SchematicannonBlockEntity>;
    }
}
