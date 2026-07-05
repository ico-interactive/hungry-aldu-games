import { $Level_ } from "@package/net/minecraft/world/level";
import { $Container } from "@package/net/minecraft/world";
import { $Predicate_ } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStack, $Item_, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $DataComponentPatch, $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $Record } from "@package/java/lang";
import { $Set_, $List, $Set } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";

declare module "@package/dev/simulated_team/simulated/multiloader/inventory" {
    export class $AbstractContainer {
    }
    export interface $AbstractContainer extends $NBTSerializable, $Container {
        isEmpty(): boolean;
        getItem(arg0: number): $ItemStack;
        getMaxStackSize(): number;
        removeItem(arg0: number, arg1: number): $ItemStack;
        getPopulatedSlots(): $Set<$ContainerSlot>;
        commonExtract(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot, arg2: number, arg3: boolean): number;
        insertGeneral(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        canInsertItem(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot): boolean;
        getInventoryAsList(): $List<$ContainerSlot>;
        commonInsert(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot, arg2: number, arg3: boolean): number;
        extractGeneral(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        populateFields(arg0: $ContainerSlot): void;
        extractSlot(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        onStackItemChange(arg0: $ContainerSlot, arg1: $ItemStack_, arg2: $ItemStack_): void;
        canExtractFromSlot(arg0: $ContainerSlot): boolean;
        setItem(arg0: number, arg1: $ItemStack_): void;
        stillValid(arg0: $Player): boolean;
        setChanged(): void;
        insertSlot(arg0: $ItemStack_, arg1: number, arg2: boolean): $ItemStack;
        clearContent(): void;
        removeItemNoUpdate(arg0: number): $ItemStack;
        getContainerSize(): number;
        get empty(): boolean;
        get maxStackSize(): number;
        get populatedSlots(): $Set<$ContainerSlot>;
        get inventoryAsList(): $List<$ContainerSlot>;
        get containerSize(): number;
    }
    export class $SingleSlotContainer implements $AbstractContainer {
        isEmpty(): boolean;
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        read(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getItem(arg0: number): $ItemStack;
        getMaxStackSize(): number;
        getPopulatedSlots(): $Set<$ContainerSlot>;
        insertGeneral(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        canInsertItem(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot): boolean;
        canInsertItem(arg0: $ItemInfoWrapper_): boolean;
        getInventoryAsList(): $List<$ContainerSlot>;
        extractGeneral(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        extractSlot(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        onStackItemChange(arg0: $ContainerSlot, arg1: $ItemStack_, arg2: $ItemStack_): void;
        setItem(arg0: number, arg1: $ItemStack_): void;
        setChanged(): void;
        insertSlot(arg0: $ItemStack_, arg1: number, arg2: boolean): $ItemStack;
        clearContent(): void;
        getContainerSize(): number;
        removeItem(arg0: number, arg1: number): $ItemStack;
        commonExtract(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot, arg2: number, arg3: boolean): number;
        commonInsert(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot, arg2: number, arg3: boolean): number;
        populateFields(arg0: $ContainerSlot): void;
        canExtractFromSlot(arg0: $ContainerSlot): boolean;
        stillValid(arg0: $Player): boolean;
        removeItemNoUpdate(arg0: number): $ItemStack;
        getMaxStackSize(arg0: $ItemStack_): number;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        countItem(arg0: $Item_): number;
        startOpen(arg0: $Player): void;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        stopOpen(arg0: $Player): void;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        getWidth(): number;
        getSlots(): number;
        getBlock(level: $Level_): $LevelBlock;
        self(): $Container;
        clear(): void;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getHeight(): number;
        isMutable(): boolean;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlotLimit(slot: number): number;
        asContainer(): $Container;
        setChanged(): void;
        isEmpty(): boolean;
        count(match: $ItemPredicate_): number;
        count(): number;
        find(): number;
        find(match: $ItemPredicate_): number;
        clear(match: $ItemPredicate_): void;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        maxStackSize: number;
        slot: $ContainerSlot;
        constructor(arg0: number);
        get populatedSlots(): $Set<$ContainerSlot>;
        get inventoryAsList(): $List<$ContainerSlot>;
        get containerSize(): number;
        get width(): number;
        get slots(): number;
        get height(): number;
        get mutable(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $NBTSerializable {
    }
    export interface $NBTSerializable {
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        read(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
    }
    export class $ItemInfoWrapper extends $Record {
        type(): $Item;
        static generateFromInfo(arg0: $ItemInfoWrapper_): $ItemStack;
        static generateFromStack(arg0: $ItemStack_): $ItemInfoWrapper;
        patchMap(): $DataComponentPatch;
        constructor(type: $Item_, patchMap: $DataComponentPatch_);
    }
    /**
     * Values that may be interpreted as {@link $ItemInfoWrapper}.
     */
    export type $ItemInfoWrapper_ = { patchMap?: $DataComponentPatch_, type?: $Item_,  } | [patchMap?: $DataComponentPatch_, type?: $Item_, ];
    export class $ContainerSlot implements $NBTSerializable {
        clear(): void;
        isEmpty(): boolean;
        static of(arg0: number, arg1: $Item_, arg2: $AbstractContainer): $ContainerSlot;
        static of(arg0: number, arg1: $ItemStack_, arg2: $AbstractContainer): $ContainerSlot;
        getParent(): $AbstractContainer;
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        read(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getType(): $Item;
        getIndex(): number;
        getStack(): $ItemStack;
        extractStack(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        insertStack(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        setStack(arg0: $ItemStack_): void;
        canExtract(): boolean;
        canInsert(arg0: $ItemInfoWrapper_): boolean;
        shrink(arg0: number): void;
        static EMPTY: $ContainerSlot;
        constructor();
        constructor(arg0: number, arg1: $ItemStack_, arg2: $Item_, arg3: $AbstractContainer);
        get empty(): boolean;
        get parent(): $AbstractContainer;
        get type(): $Item;
        get index(): number;
    }
}
