import { $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $TransportedItemStackHandlerBehaviour$TransportedResult } from "@package/com/simibubi/create/content/kinetics/belt/behaviour";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $Container } from "@package/net/minecraft/world";
import { $Function_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BeltBlockEntity } from "@package/com/simibubi/create/content/kinetics/belt";
import { $Enum, $Comparable } from "@package/java/lang";
import { $FanProcessingType } from "@package/com/simibubi/create/content/kinetics/fan/processing";
import { $BeltTunnelBlockEntity } from "@package/com/simibubi/create/content/logistics/tunnel";

declare module "@package/com/simibubi/create/content/kinetics/belt/transport" {
    export class $BeltMovementHandler {
        static transportEntity(arg0: $BeltBlockEntity, arg1: $Entity, arg2: $BeltMovementHandler$TransportedEntityInfo): void;
        static canBeTransported(arg0: $Entity): boolean;
        static shouldIgnoreBlocking(arg0: $Entity, arg1: $Entity): boolean;
        static isRidingOrBeingRiddenBy(arg0: $Entity, arg1: $Entity): boolean;
        constructor();
    }
    export class $BeltTunnelInteractionHandler {
        static getTunnelOnPosition(arg0: $Level_, arg1: $BlockPos_): $BeltTunnelBlockEntity;
        static flapTunnel(arg0: $BeltInventory, arg1: number, arg2: $Direction_, arg3: boolean): void;
        static flapTunnelsAndCheckIfStuck(arg0: $BeltInventory, arg1: $TransportedItemStack, arg2: number): boolean;
        static stuckAtTunnel(arg0: $BeltInventory, arg1: number, arg2: $ItemStack_, arg3: $Direction_): boolean;
        constructor();
    }
    export class $TransportedItemStack implements $Comparable<$TransportedItemStack> {
        compareTo(arg0: $TransportedItemStack): number;
        static read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $TransportedItemStack;
        copy(): $TransportedItemStack;
        clearFanProcessingData(): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        getSimilar(): $TransportedItemStack;
        getTargetSideOffset(): number;
        lockedExternally: boolean;
        stack: $ItemStack;
        beltPosition: number;
        insertedAt: number;
        insertedFrom: $Direction;
        prevSideOffset: number;
        angle: number;
        prevBeltPosition: number;
        sideOffset: number;
        locked: boolean;
        processedBy: $FanProcessingType;
        processingTime: number;
        constructor(arg0: $ItemStack_);
        get similar(): $TransportedItemStack;
        get targetSideOffset(): number;
    }
    export class $BeltFunnelInteractionHandler {
        static checkForFunnels(arg0: $BeltInventory, arg1: $TransportedItemStack, arg2: number): boolean;
        constructor();
    }
    export class $BeltInventory {
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        tick(): void;
        getTransportedItems(): $List<$TransportedItemStack>;
        canInsertAtFromSide(arg0: number, arg1: $Direction_): boolean;
        ejectAll(): void;
        addItem(arg0: $TransportedItemStack): void;
        eject(arg0: $TransportedItemStack): void;
        applyToEachWithin(arg0: number, arg1: number, arg2: $Function_<$TransportedItemStack, $TransportedItemStackHandlerBehaviour$TransportedResult>): void;
        getLazyClientItem(): $TransportedItemStack;
        canInsertAt(arg0: number): boolean;
        getStackAtOffset(arg0: number): $TransportedItemStack;
        constructor(arg0: $BeltBlockEntity);
        get transportedItems(): $List<$TransportedItemStack>;
        get lazyClientItem(): $TransportedItemStack;
    }
    export class $BeltInventory$Ending extends $Enum<$BeltInventory$Ending> {
    }
    /**
     * Values that may be interpreted as {@link $BeltInventory$Ending}.
     */
    export type $BeltInventory$Ending_ = "unresolved" | "eject" | "insert" | "funnel" | "blocked";
    export class $BeltCrusherInteractionHandler {
        static checkForCrushers(arg0: $BeltInventory, arg1: $TransportedItemStack, arg2: number): boolean;
        constructor();
    }
    export class $ItemHandlerBeltSegment implements $IItemHandler {
        getSlotLimit(arg0: number): number;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        getStackInSlot(arg0: number): $ItemStack;
        getSlots(): number;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
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
        constructor(arg0: $BeltInventory, arg1: number);
        get width(): number;
        get empty(): boolean;
        get allItems(): $List<$ItemStack>;
        get height(): number;
    }
    export class $BeltMovementHandler$TransportedEntityInfo {
        tick(): $BeltMovementHandler$TransportedEntityInfo;
        refresh(arg0: $BlockPos_, arg1: $BlockState_): void;
        getTicksSinceLastCollision(): number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get ticksSinceLastCollision(): number;
    }
}
