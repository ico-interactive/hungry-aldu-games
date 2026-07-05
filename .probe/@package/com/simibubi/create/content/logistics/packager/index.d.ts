import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List, $List_, $Map } from "@package/java/util";
import { $PackageOrderWithCrafts, $PackageOrderWithCrafts_ } from "@package/com/simibubi/create/content/logistics/stockTicker";
import { $BigItemStack } from "@package/com/simibubi/create/content/logistics";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $SmartBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $InteractionResult, $Clearable, $ItemInteractionResult, $Container } from "@package/net/minecraft/world";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $SpecialBlockStateGen } from "@package/com/simibubi/create/foundation/data";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE, $WrenchableDirectionalBlock } from "@package/com/simibubi/create/foundation/block";
import { $Record, $Class } from "@package/java/lang";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $IItemHandlerModifiable, $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $TransformedInstance } from "@package/dev/engine_room/flywheel/lib/instance";
import { $DirectionProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $InventoryIdentifier, $InventoryIdentifier_ } from "@package/com/simibubi/create/api/packager";
import { $InvManipulationBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/inventory";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $SimpleDynamicVisual, $AbstractBlockEntityVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $MutableInt, $MutableBoolean } from "@package/org/apache/commons/lang3/mutable";
import { $BlockFace } from "@package/net/createmod/catnip/math";
import { $LogisticallyLinkedBehaviour$RequestType_ } from "@package/com/simibubi/create/content/logistics/packagerLink";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
export * as repackager from "@package/com/simibubi/create/content/logistics/packager/repackager";

declare module "@package/com/simibubi/create/content/logistics/packager" {
    export class $PackagerBlock extends $WrenchableDirectionalBlock implements $IBE<$PackagerBlockEntity>, $IWrenchable {
        getBlockEntityType(): $BlockEntityType<$PackagerBlockEntity>;
        getBlockEntityClass(): $Class<$PackagerBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$PackagerBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$PackagerBlockEntity, $InteractionResult>): $InteractionResult;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($PackagerBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$PackagerBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $PackagerBlockEntity;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        static LINKED: $BooleanProperty;
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
        get blockEntityType(): $BlockEntityType<$PackagerBlockEntity>;
        get blockEntityClass(): $Class<$PackagerBlockEntity>;
    }
    export class $PackagerGenerator extends $SpecialBlockStateGen {
        constructor();
    }
    export class $AllInventoryIdentifiers {
        static fallback(arg0: $Level_, arg1: $BlockState_, arg2: $BlockFace): $InventoryIdentifier;
        static registerDefaults(): void;
        constructor();
    }
    export class $PackagerBlockEntity extends $SmartBlockEntity implements $Clearable {
        isTargetingSameInventory(arg0: $IdentifiedInventory_): boolean;
        recheckIfLinksPresent(): void;
        getAvailableItems(): $InventorySummary;
        updateSignAddress(): void;
        attemptToSend(arg0: $List_<$PackagingRequest_>): void;
        isTooBusyFor(arg0: $LogisticallyLinkedBehaviour$RequestType_): boolean;
        redstoneModeActive(): boolean;
        getTrayOffset(arg0: number): number;
        getRenderedBox(): $ItemStack;
        activate(): void;
        triggerStockCheck(): void;
        flashLink(): void;
        clearContent(): void;
        unwrapBox(arg0: $ItemStack_, arg1: boolean): boolean;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        targetInventory: $InvManipulationBehaviour;
        level: $Level;
        previouslyUnwrapped: $ItemStack;
        queuedExitingPackages: $List<$BigItemStack>;
        customComputerAddress: string;
        static ATTACHMENTS_NBT_KEY: string;
        buttonCooldown: number;
        inventory: $PackagerItemHandler;
        animationTicks: number;
        computerBehaviour: $AbstractComputerBehaviour;
        hasCustomComputerAddress: boolean;
        worldPosition: $BlockPos;
        redstonePowered: boolean;
        heldBox: $ItemStack;
        signBasedAddress: string;
        animationInward: boolean;
        static CYCLE: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get availableItems(): $InventorySummary;
        get renderedBox(): $ItemStack;
    }
    export class $AllUnpackingHandlers {
        static registerDefaults(): void;
        constructor();
    }
    export class $PackagerVisual<T extends $PackagerBlockEntity> extends $AbstractBlockEntityVisual<T> implements $SimpleDynamicVisual {
        beginFrame(arg0: $DynamicVisual$Context): void;
        animate(arg0: number): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        tray: $TransformedInstance;
        hatch: $TransformedInstance;
        lastTrayOffset: number;
        lastHatchPartial: $PartialModel;
        constructor(arg0: $VisualizationContext, arg1: T, arg2: number);
    }
    export class $PackagerItemHandler implements $IItemHandlerModifiable {
        getSlotLimit(arg0: number): number;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        getStackInSlot(arg0: number): $ItemStack;
        getSlots(): number;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        kjs$getBlock(level: $Level_): $LevelBlock;
        kjs$self(): $IItemHandler;
        kjs$isMutable(): boolean;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        getWidth(): number;
        isEmpty(): boolean;
        count(match: $ItemPredicate_): number;
        count(): number;
        find(): number;
        find(match: $ItemPredicate_): number;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        getHeight(): number;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        asContainer(): $Container;
        setChanged(): void;
        getSlots(): number;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        constructor(arg0: $PackagerBlockEntity);
        get width(): number;
        get empty(): boolean;
        get allItems(): $List<$ItemStack>;
        get height(): number;
    }
    export class $IdentifiedInventory extends $Record {
        handler(): $IItemHandler;
        identifier(): $InventoryIdentifier;
        constructor(identifier: $InventoryIdentifier_, handler: $IItemHandler);
    }
    /**
     * Values that may be interpreted as {@link $IdentifiedInventory}.
     */
    export type $IdentifiedInventory_ = { identifier?: $InventoryIdentifier_, handler?: $IItemHandler,  } | [identifier?: $InventoryIdentifier_, handler?: $IItemHandler, ];
    export class $PackagerRenderer extends $SmartBlockEntityRenderer<$PackagerBlockEntity> {
        static getTrayModel(arg0: $BlockState_): $PartialModel;
        static getHatchModel(arg0: $PackagerBlockEntity): $PartialModel;
        static isHatchOpen(arg0: $PackagerBlockEntity): boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $InventorySummary {
        addAllItemStacks(arg0: $List_<$ItemStack_>): void;
        getTotalOfMatching(arg0: $Predicate_<$ItemStack>): number;
        getStacks(): $List<$BigItemStack>;
        isEmpty(): boolean;
        add(arg0: $ItemStack_): void;
        add(arg0: $BigItemStack): void;
        add(arg0: $InventorySummary): void;
        add(arg0: $ItemStack_, arg1: number): void;
        copy(): $InventorySummary;
        erase(arg0: $ItemStack_): boolean;
        divideAndSendTo(arg0: $ServerPlayer, arg1: $BlockPos_): void;
        getCountOf(arg0: $ItemStack_): number;
        getItemMap(): $Map<$Item, $List<$BigItemStack>>;
        getStacksByCount(): $List<$BigItemStack>;
        getTotalCount(): number;
        addAllBigItemStacks(arg0: $List_<$BigItemStack>): void;
        static CODEC: $Codec<$InventorySummary>;
        contributingLinks: number;
        static EMPTY: $InventorySummary;
        constructor();
        get stacks(): $List<$BigItemStack>;
        get empty(): boolean;
        get itemMap(): $Map<$Item, $List<$BigItemStack>>;
        get stacksByCount(): $List<$BigItemStack>;
        get totalCount(): number;
    }
    export class $PackagingRequest extends $Record {
        context(): $PackageOrderWithCrafts;
        isEmpty(): boolean;
        count(): $MutableInt;
        getCount(): number;
        static create(arg0: $ItemStack_, arg1: number, arg2: string, arg3: number, arg4: $MutableBoolean, arg5: number, arg6: number, arg7: $PackageOrderWithCrafts_): $PackagingRequest;
        address(): string;
        item(): $ItemStack;
        subtract(arg0: number): void;
        packageCounter(): $MutableInt;
        finalLink(): $MutableBoolean;
        linkIndex(): number;
        orderId(): number;
        constructor(item: $ItemStack_, count: $MutableInt, address: string, linkIndex: number, finalLink: $MutableBoolean, packageCounter: $MutableInt, orderId: number, context: $PackageOrderWithCrafts_);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PackagingRequest}.
     */
    export type $PackagingRequest_ = { count?: $MutableInt, context?: $PackageOrderWithCrafts_, finalLink?: $MutableBoolean, item?: $ItemStack_, address?: string, packageCounter?: $MutableInt, linkIndex?: number, orderId?: number,  } | [count?: $MutableInt, context?: $PackageOrderWithCrafts_, finalLink?: $MutableBoolean, item?: $ItemStack_, address?: string, packageCounter?: $MutableInt, linkIndex?: number, orderId?: number, ];
}
