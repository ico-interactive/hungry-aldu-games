import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CreateAdvancement } from "@package/com/simibubi/create/foundation/advancement";
import { $FluidStack, $IFluidTank } from "@package/net/neoforged/neoforge/fluids";
import { $IInteractionChecker } from "@package/com/simibubi/create/foundation/utility";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $PartialSafeNBT } from "@package/com/simibubi/create/api/schematic/nbt";
import { $List, $Set_, $List_, $Collection } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $Container } from "@package/net/minecraft/world";
import { $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos, $Direction$Axis_, $BlockPos_, $Direction$Axis, $HolderGetter } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Object } from "@package/java/lang";
import { $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $SpecialBlockEntityItemRequirement } from "@package/com/simibubi/create/api/schematic/requirement";
import { $VirtualBlockEntity } from "@package/net/createmod/ponder/api";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockEntityDataPacket } from "@package/com/simibubi/create/foundation/networking";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as behaviour from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
export * as renderer from "@package/com/simibubi/create/foundation/blockEntity/renderer";

declare module "@package/com/simibubi/create/foundation/blockEntity" {
    export class $ComparatorUtil {
        static levelOfSmartFluidTank(arg0: $BlockGetter, arg1: $BlockPos_): number;
        static fractionToRedstoneLevel(arg0: number): number;
        constructor();
    }
    export class $RemoveBlockEntityPacket extends $BlockEntityDataPacket<$SyncedBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $RemoveBlockEntityPacket>;
        constructor(arg0: $BlockPos_);
    }
    export class $SyncedBlockEntity extends $BlockEntity {
        notifyUpdate(): void;
        sendData(): void;
        readClient(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        writeClient(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $CompoundTag;
        blockHolderGetter(): $HolderGetter<$Block>;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $ItemHandlerContainer implements $Container {
        isEmpty(): boolean;
        getItem(arg0: number): $ItemStack;
        getMaxStackSize(): number;
        removeItem(arg0: number, arg1: number): $ItemStack;
        setItem(arg0: number, arg1: $ItemStack_): void;
        stillValid(arg0: $Player): boolean;
        setChanged(): void;
        clearContent(): void;
        removeItemNoUpdate(arg0: number): $ItemStack;
        getContainerSize(): number;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        getMaxStackSize(arg0: $ItemStack_): number;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        countItem(arg0: $Item_): number;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
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
        constructor(arg0: $IItemHandlerModifiable);
        get containerSize(): number;
        get width(): number;
        get slots(): number;
        get height(): number;
        get mutable(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $CachedRenderBBBlockEntity extends $SyncedBlockEntity {
        getRenderBoundingBox(): $AABB;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get renderBoundingBox(): $AABB;
    }
    export class $IMultiBlockEntityContainer$Fluid {
    }
    export interface $IMultiBlockEntityContainer$Fluid extends $IMultiBlockEntityContainer {
        setTankSize(arg0: number, arg1: number): void;
        getTankSize(arg0: number): number;
        getFluid(arg0: number): $FluidStack;
        getTank(arg0: number): $IFluidTank;
        hasTank(): boolean;
    }
    export class $SmartBlockEntity extends $CachedRenderBBBlockEntity implements $PartialSafeNBT, $IInteractionChecker, $SpecialBlockEntityItemRequirement, $VirtualBlockEntity {
        remove(): void;
        isVirtual(): boolean;
        initialize(): void;
        destroy(): void;
        tick(): void;
        invalidate(): void;
        addBehaviours(arg0: $List_<$BlockEntityBehaviour>): void;
        addBehavioursDeferred(arg0: $List_<$BlockEntityBehaviour>): void;
        attachBehaviourLate(arg0: $BlockEntityBehaviour): void;
        getRequiredItems(arg0: $BlockState_): $ItemRequirement;
        writeSafe(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        lazyTick(): void;
        getBehaviour<T extends $BlockEntityBehaviour>(arg0: $BehaviourType<T>): T;
        sendToMenu(arg0: $RegistryFriendlyByteBuf): void;
        award(arg0: $CreateAdvancement): void;
        removeBehaviour(arg0: $BehaviourType<never>): void;
        awardIfNear(arg0: $CreateAdvancement, arg1: number): void;
        isChunkUnloaded(): boolean;
        markVirtual(): void;
        canPlayerUse(arg0: $Player): boolean;
        getAllBehaviours(): $Collection<$BlockEntityBehaviour>;
        setLazyTickRate(arg0: number): void;
        registerAwardables(arg0: $List_<$BlockEntityBehaviour>, ...arg1: $CreateAdvancement[]): void;
        forEachBehaviour(arg0: $Consumer_<$BlockEntityBehaviour>): void;
        refreshBlockState(): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get virtual(): boolean;
        get chunkUnloaded(): boolean;
        get allBehaviours(): $Collection<$BlockEntityBehaviour>;
        set lazyTickRate(value: number);
    }
    export class $IMultiBlockEntityContainer {
    }
    export interface $IMultiBlockEntityContainer {
        setWidth(arg0: number): void;
        setHeight(arg0: number): void;
        getWidth(): number;
        getHeight(): number;
        setController(arg0: $BlockPos_): void;
        getController(): $BlockPos;
        getLastKnownPos(): $BlockPos;
        getMainAxisOf(arg0: $BlockEntity): $Direction$Axis;
        setExtraData(arg0: $Object): void;
        notifyMultiUpdated(): void;
        modifyExtraData(arg0: $Object): $Object;
        removeController(arg0: boolean): void;
        getExtraData(): $Object;
        getControllerBE<T extends $BlockEntity>(): T;
        getMaxLength(arg0: $Direction$Axis_, arg1: number): number;
        getMainConnectionAxis(): $Direction$Axis;
        preventConnectivityUpdate(): void;
        isController(): boolean;
        getMaxWidth(): number;
        get lastKnownPos(): $BlockPos;
        get controllerBE(): T;
        get mainConnectionAxis(): $Direction$Axis;
        get maxWidth(): number;
    }
    export class $SmartBlockEntityTicker<T extends $BlockEntity> implements $BlockEntityTicker<T> {
        tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: T): void;
        constructor();
    }
    export class $IMultiBlockEntityContainer$Inventory {
    }
    export interface $IMultiBlockEntityContainer$Inventory extends $IMultiBlockEntityContainer {
        hasInventory(): boolean;
    }
    export class $IMergeableBE {
    }
    export interface $IMergeableBE {
        accept(arg0: $BlockEntity): void;
    }
    /**
     * Values that may be interpreted as {@link $IMergeableBE}.
     */
    export type $IMergeableBE_ = ((arg0: $BlockEntity) => void);
}
