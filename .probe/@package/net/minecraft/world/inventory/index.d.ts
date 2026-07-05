import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeType_, $Recipe, $RecipeHolder, $CraftingInput, $AbstractCookingRecipe, $CraftingInput$Positioned, $RecipeHolder_, $CraftingRecipe, $SingleRecipeInput, $StonecutterRecipe, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $FeatureFlagSet, $FeatureElement } from "@package/net/minecraft/world/flag";
import { $RecipeBookCategories } from "@package/net/minecraft/client";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $Set_, $OptionalInt, $List, $List_ } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $AbstractHorse } from "@package/net/minecraft/world/entity/animal/horse";
import { $SimpleContainer, $Container } from "@package/net/minecraft/world";
import { $BiFunction, $Predicate_, $Predicate, $BiConsumer_, $BiFunction_ } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Registry, $Holder_, $Holder, $NonNullList } from "@package/net/minecraft/core";
import { $IMenuTypeExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Enum, $Record, $Runnable_, $Object, $Runnable } from "@package/java/lang";
import { $MerchantOffer, $MerchantOffers, $Merchant } from "@package/net/minecraft/world/item/trading";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $TagKey } from "@package/net/minecraft/tags";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $Player, $StackedContents, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $MenuTypeKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $AccessorTransientCraftingContainer } from "@package/xfacthd/framedblocks/mixin";
import { $BlockEntity, $EnderChestBlockEntity, $BannerPattern } from "@package/net/minecraft/world/level/block/entity";
export * as tooltip from "@package/net/minecraft/world/inventory/tooltip";

declare module "@package/net/minecraft/world/inventory" {
    export class $FurnaceFuelSlot extends $Slot {
        static isBucket(stack: $ItemStack_): boolean;
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(furnaceMenu: $AbstractFurnaceMenu, furnaceContainer: $Container, slot: number, xPosition: number, yPosition: number);
    }
    export class $InventoryMenu extends $RecipeBookMenu<$CraftingInput, $CraftingRecipe> {
        getCraftSlots(): $CraftingContainer;
        static isHotbarSlot(index: number): boolean;
        static CRAFT_SLOT_END: number;
        static BLOCK_ATLAS: $ResourceLocation;
        static EMPTY_ARMOR_SLOT_BOOTS: $ResourceLocation;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static USE_ROW_SLOT_START: number;
        static EMPTY_ARMOR_SLOT_CHESTPLATE: $ResourceLocation;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static CRAFT_SLOT_COUNT: number;
        static SHIELD_SLOT: number;
        static ARMOR_SLOT_START: number;
        static ARMOR_SLOT_COUNT: number;
        static INV_SLOT_START: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static CRAFT_SLOT_START: number;
        owner: $Player;
        static EMPTY_ARMOR_SLOT_HELMET: $ResourceLocation;
        active: boolean;
        lastSlots: $NonNullList<$ItemStack>;
        static ARMOR_SLOT_END: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static USE_ROW_SLOT_END: number;
        static EMPTY_ARMOR_SLOT_SHIELD: $ResourceLocation;
        static SLOT_CLICKED_OUTSIDE: number;
        static INV_SLOT_END: number;
        static EMPTY_ARMOR_SLOT_LEGGINGS: $ResourceLocation;
        static CONTAINER_ID: number;
        constructor(playerInventory: $Inventory, active: boolean, owner: $Player);
        get craftSlots(): $CraftingContainer;
    }
    export class $BeaconMenu$PaymentSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
    }
    export class $MerchantResultSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(player: $Player, merchant: $Merchant, slots: $MerchantContainer, slot: number, xPosition: number, yPosition: number);
    }
    export class $SlotRanges {
        static allNames(): $Stream<string>;
        static singleSlotNames(): $Stream<string>;
        static nameToIds(name: string): $SlotRange;
        static CODEC: $Codec<$SlotRange>;
        constructor();
    }
    export class $ArmorSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
    }
    export class $ResultSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(player: $Player, craftSlots: $CraftingContainer, container: $Container, slot: number, xPosition: number, yPosition: number);
    }
    export class $HorseInventoryMenu extends $AbstractContainerMenu {
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        constructor(containerId: number, inventory: $Inventory, horseContainer: $Container, horse: $AbstractHorse, columns: number);
    }
    export class $BrewingStandMenu$IngredientsSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
    }
    export class $SmithingMenu extends $ItemCombinerMenu {
        access: $ContainerLevelAccess;
        static ADDITIONAL_SLOT: number;
        static TEMPLATE_SLOT: number;
        resultSlots: $ResultContainer;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static ADDITIONAL_SLOT_X_PLACEMENT: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        inputSlots: $Container;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static BASE_SLOT_X_PLACEMENT: number;
        static BASE_SLOT: number;
        containerId: number;
        static SLOT_Y_PLACEMENT: number;
        static TEMPLATE_SLOT_X_PLACEMENT: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        player: $Player;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
    }
    export class $MenuType<T extends $AbstractContainerMenu> implements $FeatureElement, $IMenuTypeExtension<T>, $MenuTypeKJS {
        create(containerId: number, playerInventory: $Inventory): T;
        requiredFeatures(): $FeatureFlagSet;
        kjs$getId(): string;
        kjs$getKey(): $ResourceKey<any>;
        isEnabled(enabledFeatures: $FeatureFlagSet): boolean;
        kjs$getRegistry(): $Registry<$MenuType<never>>;
        kjs$getRegistryId(): $ResourceKey<$Registry<$MenuType<never>>>;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getIdLocation(): $ResourceLocation;
        getTagKeys(): $List<$TagKey<T>>;
        getTags(): $List<$ResourceLocation>;
        asHolder(): $Holder<T>;
        hasTag(tag: $ResourceLocation_): boolean;
        getMod(): string;
        create(arg0: number, arg1: $Inventory, arg2: $RegistryFriendlyByteBuf): T;
        static ENCHANTMENT: $MenuType<$EnchantmentMenu>;
        static LOOM: $MenuType<$LoomMenu>;
        static BLAST_FURNACE: $MenuType<$BlastFurnaceMenu>;
        static CARTOGRAPHY_TABLE: $MenuType<$CartographyTableMenu>;
        static BEACON: $MenuType<$BeaconMenu>;
        static MERCHANT: $MenuType<$MerchantMenu>;
        static CRAFTER_3x3: $MenuType<$CrafterMenu>;
        static FURNACE: $MenuType<$FurnaceMenu>;
        static ANVIL: $MenuType<$AnvilMenu>;
        static STONECUTTER: $MenuType<$StonecutterMenu>;
        static GENERIC_3x3: $MenuType<$DispenserMenu>;
        static CRAFTING: $MenuType<$CraftingMenu>;
        static GENERIC_9x1: $MenuType<$ChestMenu>;
        static GENERIC_9x2: $MenuType<$ChestMenu>;
        static GENERIC_9x3: $MenuType<$ChestMenu>;
        static GENERIC_9x4: $MenuType<$ChestMenu>;
        static GENERIC_9x5: $MenuType<$ChestMenu>;
        static GENERIC_9x6: $MenuType<$ChestMenu>;
        static BREWING_STAND: $MenuType<$BrewingStandMenu>;
        static SMOKER: $MenuType<$SmokerMenu>;
        static SMITHING: $MenuType<$SmithingMenu>;
        static HOPPER: $MenuType<$HopperMenu>;
        static LECTERN: $MenuType<$LecternMenu>;
        static GRINDSTONE: $MenuType<$GrindstoneMenu>;
        static SHULKER_BOX: $MenuType<$ShulkerBoxMenu>;
        constructor(_constructor: $MenuType$MenuSupplier_<T>, requiredFeatures: $FeatureFlagSet);
        get idLocation(): $ResourceLocation;
        get tagKeys(): $List<$TagKey<T>>;
        get tags(): $List<$ResourceLocation>;
        get mod(): string;
    }
    /**
     * Values that may be interpreted as {@link $MenuType}.
     */
    export type $MenuType_<T> = RegistryTypes.Menu;
    export class $MerchantContainer implements $Container {
        isEmpty(): boolean;
        /**
         * Returns the stack in the given slot.
         */
        getItem(index: number): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getFutureXp(): number;
        setSelectionHint(currentRecipeIndex: number): void;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        updateSellItem(): void;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(index: number, count: number): $ItemStack;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(index: number, stack: $ItemStack_): void;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        getActiveOffer(): $MerchantOffer;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearContent(): void;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(index: number): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getContainerSize(): number;
        getMaxStackSize(stack: $ItemStack_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getMaxStackSize(): number;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item_): number;
        startOpen(player: $Player): void;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item_>): boolean;
        stopOpen(player: $Player): void;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        getWidth(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getSlots(): number;
        getBlock(level: $Level_): $LevelBlock;
        self(): $Container;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clear(): void;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        /**
         * Returns the stack in the given slot.
         */
        getStackInSlot(index: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        getHeight(): number;
        isMutable(): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(index: number, stack: $ItemStack_): void;
        getSlotLimit(slot: number): number;
        asContainer(): $Container;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        isEmpty(): boolean;
        count(match: $ItemPredicate_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        count(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        find(): number;
        find(match: $ItemPredicate_): number;
        clear(match: $ItemPredicate_): void;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        constructor(merchant: $Merchant);
        get futureXp(): number;
        set selectionHint(value: number);
        get activeOffer(): $MerchantOffer;
        get containerSize(): number;
        get width(): number;
        get slots(): number;
        get height(): number;
        get mutable(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $BeaconMenu extends $AbstractContainerMenu {
        getLevels(): number;
        static encodeEffect(effect: $Holder_<$MobEffect> | null): number;
        getSecondaryEffect(): $Holder<$MobEffect>;
        static decodeEffect(effectId: number): $Holder<$MobEffect>;
        getPrimaryEffect(): $Holder<$MobEffect>;
        updateEffects(primaryEffect: ($Holder_<$MobEffect>) | undefined, secondaryEffect: ($Holder_<$MobEffect>) | undefined): void;
        hasPayment(): boolean;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        constructor(containerId: number, container: $Container);
        constructor(containerId: number, container: $Container, beaconData: $ContainerData, access: $ContainerLevelAccess_);
        get levels(): number;
        get secondaryEffect(): $Holder<$MobEffect>;
        get primaryEffect(): $Holder<$MobEffect>;
    }
    export class $CraftingMenu extends $RecipeBookMenu<$CraftingInput, $CraftingRecipe> {
        static slotChangedCraftingGrid(menu: $AbstractContainerMenu, level: $Level_, player: $Player, craftSlots: $CraftingContainer, resultSlots: $ResultContainer, recipe: $RecipeHolder_<$CraftingRecipe> | null): void;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        player: $Player;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
    }
    export class $CrafterSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(container: $Container, slot: number, x: number, y: number, menu: $CrafterMenu);
    }
    export class $ChestMenu extends $AbstractContainerMenu {
        getRowCount(): number;
        /**
         * Gets the inventory associated with this chest container.
         * 
         * @see #field_75155_e
         */
        getContainer(): $Container;
        static threeRows(containerId: number, playerInventory: $Inventory): $ChestMenu;
        static threeRows(containerId: number, playerInventory: $Inventory, container: $Container): $ChestMenu;
        static oneRow(containerId: number, playerInventory: $Inventory): $ChestMenu;
        static twoRows(containerId: number, playerInventory: $Inventory): $ChestMenu;
        static fourRows(containerId: number, playerInventory: $Inventory): $ChestMenu;
        static sixRows(containerId: number, playerInventory: $Inventory, container: $Container): $ChestMenu;
        static sixRows(containerId: number, playerInventory: $Inventory): $ChestMenu;
        static fiveRows(containerId: number, playerInventory: $Inventory): $ChestMenu;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        constructor(type: $MenuType_<never>, containerId: number, playerInventory: $Inventory, container: $Container, rows: number);
        get rowCount(): number;
        get container(): $Container;
    }
    export class $SmokerMenu extends $AbstractFurnaceMenu {
        level: $Level;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static INGREDIENT_SLOT: number;
        static DATA_COUNT: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static FUEL_SLOT: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, smokerContainer: $Container, smokerData: $ContainerData);
    }
    export class $ClickAction extends $Enum<$ClickAction> {
        static values(): $ClickAction[];
        static valueOf(arg0: string): $ClickAction;
        static SECONDARY: $ClickAction;
        static PRIMARY: $ClickAction;
    }
    /**
     * Values that may be interpreted as {@link $ClickAction}.
     */
    export type $ClickAction_ = "primary" | "secondary";
    export class $BrewingStandMenu extends $AbstractContainerMenu {
        getFuel(): number;
        getBrewingTicks(): number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, brewingStandContainer: $Container, brewingStandData: $ContainerData);
        get fuel(): number;
        get brewingTicks(): number;
    }
    export class $BrewingStandMenu$PotionSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
    }
    export class $MenuType$MenuSupplier<T extends $AbstractContainerMenu> {
    }
    export interface $MenuType$MenuSupplier<T extends $AbstractContainerMenu> {
        create(containerId: number, playerInventory: $Inventory): T;
    }
    /**
     * Values that may be interpreted as {@link $MenuType$MenuSupplier}.
     */
    export type $MenuType$MenuSupplier_<T> = ((arg0: number, arg1: $Inventory) => T);
    export class $LecternMenu extends $AbstractContainerMenu {
        getBook(): $ItemStack;
        getPage(): number;
        static BUTTON_PREV_PAGE: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static BUTTON_PAGE_JUMP_RANGE_START: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static BUTTON_NEXT_PAGE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static BUTTON_TAKE_BOOK: number;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number);
        constructor(containerId: number, lectern: $Container, lecternData: $ContainerData);
        get book(): $ItemStack;
        get page(): number;
    }
    export class $CraftingContainer {
    }
    export interface $CraftingContainer extends $Container, $StackedContentsCompatible {
        getWidth(): number;
        getHeight(): number;
        asPositionedCraftInput(): $CraftingInput$Positioned;
        getItems(): $List<$ItemStack>;
        asCraftInput(): $CraftingInput;
        get width(): number;
        get height(): number;
        get items(): $List<$ItemStack>;
    }
    export class $LoomMenu extends $AbstractContainerMenu {
        getResultSlot(): $Slot;
        getBannerSlot(): $Slot;
        getPatternSlot(): $Slot;
        getSelectablePatterns(): $List<$Holder<$BannerPattern>>;
        registerUpdateListener(listener: $Runnable_): void;
        getSelectedBannerPatternIndex(): number;
        getDyeSlot(): $Slot;
        slotUpdateListener: $Runnable;
        lastSoundTime: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        bannerSlot: $Slot;
        lastSlots: $NonNullList<$ItemStack>;
        dyeSlot: $Slot;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        selectedBannerPatternIndex: $DataSlot;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
        get resultSlot(): $Slot;
        get patternSlot(): $Slot;
        get selectablePatterns(): $List<$Holder<$BannerPattern>>;
    }
    export class $DispenserMenu extends $AbstractContainerMenu {
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, container: $Container);
    }
    export class $StackedContentsCompatible {
    }
    export interface $StackedContentsCompatible {
        fillStackedContents(contents: $StackedContents): void;
    }
    /**
     * Values that may be interpreted as {@link $StackedContentsCompatible}.
     */
    export type $StackedContentsCompatible_ = ((arg0: $StackedContents) => void);
    export class $ShulkerBoxSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(container: $Container, slot: number, x: number, y: number);
    }
    export class $PlayerEnderChestContainer extends $SimpleContainer {
        isActiveChest(enderChest: $EnderChestBlockEntity): boolean;
        setActiveChest(enderChestBlockEntity: $EnderChestBlockEntity): void;
        items: $NonNullList<$ItemStack>;
        constructor();
    }
    export class $ItemCombinerMenuSlotDefinition {
        getSlot(slot: number): $ItemCombinerMenuSlotDefinition$SlotDefinition;
        static create(): $ItemCombinerMenuSlotDefinition$Builder;
        getNumOfInputSlots(): number;
        getResultSlot(): $ItemCombinerMenuSlotDefinition$SlotDefinition;
        getInputSlotIndexes(): $List<number>;
        getSlots(): $List<$ItemCombinerMenuSlotDefinition$SlotDefinition>;
        getResultSlotIndex(): number;
        hasSlot(slot: number): boolean;
        constructor(slots: $List_<$ItemCombinerMenuSlotDefinition$SlotDefinition_>, resultSlot: $ItemCombinerMenuSlotDefinition$SlotDefinition_);
        get numOfInputSlots(): number;
        get resultSlot(): $ItemCombinerMenuSlotDefinition$SlotDefinition;
        get inputSlotIndexes(): $List<number>;
        get slots(): $List<$ItemCombinerMenuSlotDefinition$SlotDefinition>;
        get resultSlotIndex(): number;
    }
    export class $SlotRange {
        static of(name: string, values: $IntList): $SlotRange;
    }
    export interface $SlotRange extends $StringRepresentable {
        size(): number;
        slots(): $IntList;
    }
    export class $MenuConstructor {
    }
    export interface $MenuConstructor {
        createMenu(containerId: number, playerInventory: $Inventory, player: $Player): $AbstractContainerMenu;
    }
    /**
     * Values that may be interpreted as {@link $MenuConstructor}.
     */
    export type $MenuConstructor_ = ((arg0: number, arg1: $Inventory, arg2: $Player) => $AbstractContainerMenu);
    export class $ContainerData {
    }
    export interface $ContainerData {
        get(index: number): number;
        set(index: number, value: number): void;
        getCount(): number;
        get count(): number;
    }
    export class $EnchantmentMenu extends $AbstractContainerMenu {
        getEnchantmentSeed(): number;
        getGoldCount(): number;
        costs: number[];
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static EMPTY_SLOT_LAPIS_LAZULI: $ResourceLocation;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        enchantClue: number[];
        containerId: number;
        levelClue: number[];
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
        get enchantmentSeed(): number;
        get goldCount(): number;
    }
    export class $ContainerLevelAccess {
        static create(level: $Level_, pos: $BlockPos_): $ContainerLevelAccess;
        static NULL: $ContainerLevelAccess;
    }
    export interface $ContainerLevelAccess {
        execute(levelPosConsumer: $BiConsumer_<$Level, $BlockPos>): void;
        evaluate<T>(levelPosConsumer: $BiFunction_<$Level, $BlockPos, T>, defaultValue: T): T;
        evaluate<T>(levelPosConsumer: $BiFunction_<$Level, $BlockPos, T>): (T) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $ContainerLevelAccess}.
     */
    export type $ContainerLevelAccess_ = ((arg0: $BiFunction<$Level, $BlockPos, any>) => (T) | undefined);
    export class $CartographyTableMenu extends $AbstractContainerMenu {
        container: $Container;
        static ADDITIONAL_SLOT: number;
        lastSoundTime: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static MAP_SLOT: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
    }
    export class $ItemCombinerMenu extends $AbstractContainerMenu {
        isValidBlock(state: $BlockState_): boolean;
        getResultSlot(): number;
        /**
         * Called when the Anvil Input Slot changes, calculates the new result and puts it in the output slot.
         */
        createResult(): void;
        mayPickup(player: $Player, hasStack: boolean): boolean;
        onTake(player: $Player, stack: $ItemStack_): void;
        canMoveIntoInputSlots(stack: $ItemStack_): boolean;
        createInputSlotDefinitions(): $ItemCombinerMenuSlotDefinition;
        getSlotToQuickMoveTo(stack: $ItemStack_): number;
        access: $ContainerLevelAccess;
        resultSlots: $ResultContainer;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        inputSlots: $Container;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        player: $Player;
        constructor(type: $MenuType_<never> | null, containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
        get resultSlot(): number;
    }
    export class $ResultContainer implements $Container, $RecipeCraftingHolder {
        isEmpty(): boolean;
        /**
         * Returns the stack in the given slot.
         */
        getItem(index: number): $ItemStack;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(index: number, count: number): $ItemStack;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(index: number, stack: $ItemStack_): void;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        getRecipeUsed(): $RecipeHolder<never>;
        setRecipeUsed(recipe: $RecipeHolder_<never> | null): void;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearContent(): void;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(index: number): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getContainerSize(): number;
        getMaxStackSize(stack: $ItemStack_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getMaxStackSize(): number;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item_): number;
        startOpen(player: $Player): void;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item_>): boolean;
        stopOpen(player: $Player): void;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        awardUsedRecipes(player: $Player, items: $List_<$ItemStack_>): void;
        setRecipeUsed(level: $Level_, players: $ServerPlayer, recipe: $RecipeHolder_<never>): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        getWidth(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getSlots(): number;
        getBlock(level: $Level_): $LevelBlock;
        self(): $Container;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clear(): void;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        /**
         * Returns the stack in the given slot.
         */
        getStackInSlot(index: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        getHeight(): number;
        isMutable(): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(index: number, stack: $ItemStack_): void;
        getSlotLimit(slot: number): number;
        asContainer(): $Container;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        isEmpty(): boolean;
        count(match: $ItemPredicate_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        count(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        find(): number;
        find(match: $ItemPredicate_): number;
        clear(match: $ItemPredicate_): void;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        constructor();
        get containerSize(): number;
        get width(): number;
        get slots(): number;
        get height(): number;
        get mutable(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $FurnaceMenu extends $AbstractFurnaceMenu {
        level: $Level;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static INGREDIENT_SLOT: number;
        static DATA_COUNT: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static FUEL_SLOT: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, furnaceContainer: $Container, furnaceData: $ContainerData);
    }
    export class $AbstractFurnaceMenu extends $RecipeBookMenu<$SingleRecipeInput, $AbstractCookingRecipe> {
        isFuel(stack: $ItemStack_): boolean;
        isLit(): boolean;
        getLitProgress(): number;
        getBurnProgress(): number;
        canSmelt(stack: $ItemStack_): boolean;
        level: $Level;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static INGREDIENT_SLOT: number;
        static DATA_COUNT: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static FUEL_SLOT: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(menuType: $MenuType_<never>, recipeType: $RecipeType_<$AbstractCookingRecipe>, recipeBookType: $RecipeBookType_, containerId: number, playerInventory: $Inventory);
        constructor(menuType: $MenuType_<never>, recipeType: $RecipeType_<$AbstractCookingRecipe>, recipeBookType: $RecipeBookType_, containerId: number, playerInventory: $Inventory, container: $Container, data: $ContainerData);
        get lit(): boolean;
        get litProgress(): number;
        get burnProgress(): number;
    }
    export class $HopperMenu extends $AbstractContainerMenu {
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
        static CONTAINER_SIZE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, container: $Container);
    }
    export class $SimpleContainerData implements $ContainerData {
        get(index: number): number;
        set(index: number, value: number): void;
        getCount(): number;
        constructor(size: number);
        get count(): number;
    }
    export class $StonecutterMenu extends $AbstractContainerMenu {
        /**
         * Reset the drag fields
         */
        setupResultSlot(): void;
        /**
         * Returns the index of the selected recipe.
         */
        getSelectedRecipeIndex(): number;
        registerUpdateListener(listener: $Runnable_): void;
        getRecipes(): $List<$RecipeHolder<$StonecutterRecipe>>;
        hasInputItem(): boolean;
        /**
         * Returns the index of the selected recipe.
         */
        getNumRecipes(): number;
        static INPUT_SLOT: number;
        container: $Container;
        lastSoundTime: number;
        slotUpdateListener: $Runnable;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static RESULT_SLOT: number;
        resultSlot: $Slot;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        inputSlot: $Slot;
        resultContainer: $ResultContainer;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
        get selectedRecipeIndex(): number;
        get recipes(): $List<$RecipeHolder<$StonecutterRecipe>>;
        get numRecipes(): number;
    }
    export class $ShulkerBoxMenu extends $AbstractContainerMenu {
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, container: $Container);
    }
    export class $AbstractContainerMenu {
        getSlot(slotId: number): $Slot;
        getType(): $MenuType<never>;
        /**
         * Called when the container is closed.
         */
        removed(player: $Player): void;
        setData(id: number, data: number): void;
        clicked(slotId: number, button: number, clickType: $ClickType_, player: $Player): void;
        /**
         * Returns `true` if the player can "drag-spilt" items into this slot. Returns `true` by default. Called to check if the slot can be added to a list of Slots to split the held ItemStack across.
         */
        canDragTo(slot: $Slot): boolean;
        /**
         * Adds an item slot to this container
         */
        addSlot(slot: $Slot): $Slot;
        getStateId(): number;
        /**
         * Looks for changes made in the container, sends them to every listener.
         */
        suppressRemoteUpdates(): void;
        static checkContainerDataCount(intArray: $ContainerData, minSize: number): void;
        static isValidQuickcraftType(dragMode: number, player: $Player): boolean;
        /**
         * Checks if it's possible to add the given itemstack to the given slot.
         */
        static canItemQuickReplace(slot: $Slot | null, stack: $ItemStack_, stackSizeMatters: boolean): boolean;
        setRemoteSlotNoCopy(slot: number, stack: $ItemStack_): void;
        static getQuickCraftPlaceCount(slots: $Set_<$Slot>, type: number, stack: $ItemStack_): number;
        /**
         * Called to determine if the current slot is valid for the stack merging (double-click) code. The stack passed in is null for the initial slot that was double-clicked.
         */
        canTakeItemForPickAll(stack: $ItemStack_, slot: $Slot): boolean;
        /**
         * Looks for changes made in the container, sends them to every listener.
         */
        sendAllDataToRemote(): void;
        /**
         * Args : clickedButton, Returns (0 : start drag, 1 : add slot, 2 : end drag)
         */
        static getQuickcraftHeader(clickedButton: number): number;
        /**
         * Looks for changes made in the container, sends them to every listener.
         */
        resumeRemoteUpdates(): void;
        /**
         * Returns a list if `ItemStacks`, for each slot.
         */
        getItems(): $NonNullList<$ItemStack>;
        /**
         * Puts an ItemStack in a slot.
         */
        setItem(slotId: number, stateId: number, stack: $ItemStack_): void;
        static stillValid(access: $ContainerLevelAccess_, player: $Player, targetBlock: $Block_): boolean;
        /**
         * Determines whether supplied player can use this container
         */
        stillValid(player: $Player): boolean;
        getCarried(): $ItemStack;
        setCarried(stack: $ItemStack_): void;
        findSlot(container: $Container, slotIndex: number): $OptionalInt;
        /**
         * Like the version that takes an inventory. If the given BlockEntity is not an Inventory, 0 is returned instead.
         */
        static getRedstoneSignalFromBlockEntity(blockEntity: $BlockEntity | null): number;
        static getRedstoneSignalFromContainer(container: $Container | null): number;
        /**
         * Looks for changes made in the container, sends them to every listener.
         */
        broadcastChanges(): void;
        setSynchronizer(synchronizer: $ContainerSynchronizer): void;
        transferState(menu: $AbstractContainerMenu): void;
        addSlotListener(listener: $ContainerListener): void;
        setRemoteSlot(slot: number, stack: $ItemStack_): void;
        /**
         * Args : clickedButton, Returns (0 : start drag, 1 : add slot, 2 : end drag)
         */
        static getQuickcraftType(clickedButton: number): number;
        clearContainer(player: $Player, container: $Container): void;
        /**
         * Callback for when the crafting matrix is changed.
         */
        slotsChanged(container: $Container): void;
        removeSlotListener(listener: $ContainerListener): void;
        isValidSlotIndex(slotIndex: number): boolean;
        /**
         * Handles the given Button-click on the server, currently only used by enchanting. Name is for legacy.
         */
        clickMenuButton(player: $Player, id: number): boolean;
        initializeContents(stateId: number, items: $List_<$ItemStack_>, carried: $ItemStack_): void;
        addDataSlots(array: $ContainerData): void;
        /**
         * Handle when the stack in slot `index` is shift-clicked. Normally this moves the stack between the player inventory and the other inventory(s).
         */
        quickMoveStack(player: $Player, index: number): $ItemStack;
        incrementStateId(): number;
        static checkContainerSize(container: $Container, minSize: number): void;
        /**
         * Merges provided ItemStack with the first available one in the container/player inventor between minIndex (included) and maxIndex (excluded). Args : stack, minIndex, maxIndex, negativDirection. [!] the Container implementation do not check if the item is valid for the slot
         */
        moveItemStackTo(stack: $ItemStack_, startIndex: number, endIndex: number, reverseDirection: boolean): boolean;
        addDataSlot(intValue: $DataSlot): $DataSlot;
        /**
         * Looks for changes made in the container, sends them to every listener.
         */
        resetQuickCraft(): void;
        setRemoteCarried(stack: $ItemStack_): void;
        static getQuickcraftMask(quickCraftingHeader: number, quickCraftingType: number): number;
        /**
         * Looks for changes made in the container, sends them to every listener.
         */
        broadcastFullState(): void;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        constructor(menuType: $MenuType_<never> | null, containerId: number);
        get type(): $MenuType<never>;
        get stateId(): number;
        get items(): $NonNullList<$ItemStack>;
        set synchronizer(value: $ContainerSynchronizer);
        set remoteCarried(value: $ItemStack_);
    }
    export class $Slot {
        /**
         * Decrease the size of the stack in slot (first int arg) by the amount of the second int arg. Returns the new stack.
         */
        remove(amount: number): $ItemStack;
        set(stack: $ItemStack_): void;
        /**
         * Returns if this slot contains a stack.
         */
        isActive(): boolean;
        /**
         * Helper function to get the stack in the slot.
         */
        getItem(): $ItemStack;
        mayPickup(player: $Player): boolean;
        /**
         * Check if the stack is allowed to be placed in this slot, used for armor slots as well as furnace fuel.
         */
        mayPlace(stack: $ItemStack_): boolean;
        safeInsert(stack: $ItemStack_, increment: number): $ItemStack;
        safeInsert(stack: $ItemStack_): $ItemStack;
        onTake(stack: $Player, arg1: $ItemStack_): void;
        tryRemove(count: number, decrement: number, player: $Player): ($ItemStack) | undefined;
        safeTake(count: number, decrement: number, player: $Player): $ItemStack;
        checkTakeAchievements(stack: $ItemStack_): void;
        allowModification(player: $Player): boolean;
        getMaxStackSize(stack: $ItemStack_): number;
        /**
         * Returns the maximum stack size for a given slot (usually the same as getInventoryStackLimit(), but 1 in the case of armor slots)
         */
        getMaxStackSize(): number;
        /**
         * Returns if this slot contains a stack.
         */
        isFake(): boolean;
        /**
         * Called when the stack in a Slot changes
         */
        setChanged(): void;
        /**
         * Returns if this slot contains a stack.
         */
        hasItem(): boolean;
        getNoItemIcon(): $Pair<$ResourceLocation, $ResourceLocation>;
        isSameInventory(arg0: $Slot): boolean;
        /**
         * Returns if this slot contains a stack.
         */
        isHighlightable(): boolean;
        setBackground(arg0: $ResourceLocation_, arg1: $ResourceLocation_): $Slot;
        /**
         * Returns the maximum stack size for a given slot (usually the same as getInventoryStackLimit(), but 1 in the case of armor slots)
         */
        getSlotIndex(): number;
        /**
         * Returns the maximum stack size for a given slot (usually the same as getInventoryStackLimit(), but 1 in the case of armor slots)
         */
        getContainerSlot(): number;
        /**
         * if par2 has more items than par1, onCrafting(item,countIncrease) is called
         */
        setByPlayer(oldStack: $ItemStack_, newStack: $ItemStack_): void;
        setByPlayer(stack: $ItemStack_): void;
        onSwapCraft(numItemsCrafted: number): void;
        /**
         * Typically increases an internal count, then calls `onCrafting(item)`.
         */
        onQuickCraft(stack: $ItemStack_, amount: number): void;
        /**
         * if par2 has more items than par1, onCrafting(item,countIncrease) is called
         */
        onQuickCraft(oldStack: $ItemStack_, newStack: $ItemStack_): void;
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(container: $Container, slot: number, x: number, y: number);
        get active(): boolean;
        get item(): $ItemStack;
        get fake(): boolean;
        get noItemIcon(): $Pair<$ResourceLocation, $ResourceLocation>;
        get highlightable(): boolean;
        get slotIndex(): number;
        get containerSlot(): number;
    }
    export class $DataSlot {
        get(): number;
        set(value: number): void;
        static shared(data: number[], idx: number): $DataSlot;
        static standalone(): $DataSlot;
        checkAndClearUpdateFlag(): boolean;
        static forContainer(data: $ContainerData, idx: number): $DataSlot;
        constructor();
    }
    export class $BrewingStandMenu$FuelSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
    }
    export class $RecipeBookType extends $Enum<$RecipeBookType> implements $IExtensibleEnum {
        static values(): $RecipeBookType[];
        static valueOf(arg0: string): $RecipeBookType;
        static getExtensionInfo(): $ExtensionInfo;
        static FURNACE: $RecipeBookType;
        static BLAST_FURNACE: $RecipeBookType;
        static SMOKER: $RecipeBookType;
        static CRAFTING: $RecipeBookType;
        static get extensionInfo(): $ExtensionInfo;
    }
    /**
     * Values that may be interpreted as {@link $RecipeBookType}.
     */
    export type $RecipeBookType_ = "crafting" | "furnace" | "blast_furnace" | "smoker";
    export class $ItemCombinerMenuSlotDefinition$SlotDefinition extends $Record {
        x(): number;
        y(): number;
        mayPlace(): $Predicate<$ItemStack>;
        slotIndex(): number;
        static EMPTY: $ItemCombinerMenuSlotDefinition$SlotDefinition;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $Predicate_<$ItemStack>);
    }
    /**
     * Values that may be interpreted as {@link $ItemCombinerMenuSlotDefinition$SlotDefinition}.
     */
    export type $ItemCombinerMenuSlotDefinition$SlotDefinition_ = { x?: number, y?: number, mayPlace?: $Predicate_<$ItemStack>, slotIndex?: number,  } | [x?: number, y?: number, mayPlace?: $Predicate_<$ItemStack>, slotIndex?: number, ];
    export class $ClickType extends $Enum<$ClickType> {
        static values(): $ClickType[];
        static valueOf(arg0: string): $ClickType;
        static QUICK_MOVE: $ClickType;
        static SWAP: $ClickType;
        static PICKUP_ALL: $ClickType;
        static THROW: $ClickType;
        static QUICK_CRAFT: $ClickType;
        static PICKUP: $ClickType;
        static CLONE: $ClickType;
    }
    /**
     * Values that may be interpreted as {@link $ClickType}.
     */
    export type $ClickType_ = "pickup" | "quick_move" | "swap" | "clone" | "throw" | "quick_craft" | "pickup_all";
    export class $TransientCraftingContainer implements $CraftingContainer, $AccessorTransientCraftingContainer {
        isEmpty(): boolean;
        /**
         * Returns the stack in the given slot.
         */
        getItem(slot: number): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getWidth(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getHeight(): number;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(slot: number, amount: number): $ItemStack;
        fillStackedContents(contents: $StackedContents): void;
        getItems(): $List<$ItemStack>;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(slot: number, stack: $ItemStack_): void;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearContent(): void;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(slot: number): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getContainerSize(): number;
        asPositionedCraftInput(): $CraftingInput$Positioned;
        asCraftInput(): $CraftingInput;
        getMaxStackSize(stack: $ItemStack_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getMaxStackSize(): number;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item_): number;
        startOpen(player: $Player): void;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item_>): boolean;
        stopOpen(player: $Player): void;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        getWidth(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getSlots(): number;
        getBlock(level: $Level_): $LevelBlock;
        self(): $Container;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clear(): void;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        /**
         * Returns the stack in the given slot.
         */
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        getHeight(): number;
        isMutable(): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlotLimit(slot: number): number;
        asContainer(): $Container;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        isEmpty(): boolean;
        count(match: $ItemPredicate_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        count(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        find(): number;
        find(match: $ItemPredicate_): number;
        clear(match: $ItemPredicate_): void;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        framedblocks$getItems(): $NonNullList<$ItemStack>;
        menu: $AbstractContainerMenu;
        constructor(menu: $AbstractContainerMenu, width: number, height: number);
        constructor(menu: $AbstractContainerMenu, width: number, height: number, items: $NonNullList<$ItemStack_>);
        get items(): $List<$ItemStack>;
        get containerSize(): number;
        get slots(): number;
        get mutable(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $ContainerSynchronizer {
    }
    export interface $ContainerSynchronizer {
        sendInitialData(container: $AbstractContainerMenu, items: $NonNullList<$ItemStack_>, carriedItem: $ItemStack_, initialData: number[]): void;
        sendSlotChange(container: $AbstractContainerMenu, slot: number, itemStack: $ItemStack_): void;
        sendCarriedChange(containerMenu: $AbstractContainerMenu, stack: $ItemStack_): void;
        sendDataChange(container: $AbstractContainerMenu, id: number, value: number): void;
    }
    export class $MerchantMenu extends $AbstractContainerMenu {
        tryMoveItems(level: number): void;
        canRestock(): boolean;
        showProgressBar(): boolean;
        getFutureTraderXp(): number;
        setMerchantLevel(level: number): void;
        setSelectionHint(level: number): void;
        setShowProgressBar(canRestock: boolean): void;
        getTraderXp(): number;
        setCanRestock(canRestock: boolean): void;
        getTraderLevel(): number;
        getOffers(): $MerchantOffers;
        /**
         * `ClientPacketListener` uses this to set offers for the client side MerchantContainer.
         */
        setOffers(offers: $MerchantOffers): void;
        setXp(level: number): void;
        static PAYMENT2_SLOT: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static PAYMENT1_SLOT: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, trader: $Merchant);
        get futureTraderXp(): number;
        set merchantLevel(value: number);
        set selectionHint(value: number);
        get traderXp(): number;
        get traderLevel(): number;
        set xp(value: number);
    }
    export class $GrindstoneMenu extends $AbstractContainerMenu {
        computeResult(inputItem: $ItemStack_, additionalItem: $ItemStack_): $ItemStack;
        static INPUT_SLOT: number;
        static ADDITIONAL_SLOT: number;
        repairSlots: $Container;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static MAX_NAME_LENGTH: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
    }
    export class $RecipeCraftingHolder {
    }
    export interface $RecipeCraftingHolder {
        awardUsedRecipes(player: $Player, items: $List_<$ItemStack_>): void;
        getRecipeUsed(): $RecipeHolder<never>;
        setRecipeUsed(level: $Level_, players: $ServerPlayer, recipe: $RecipeHolder_<never>): boolean;
        setRecipeUsed(recipe: $RecipeHolder_<never> | null): void;
    }
    export class $RecipeBookMenu<I extends $RecipeInput, R extends $Recipe<I>> extends $AbstractContainerMenu {
        getSize(): number;
        fillCraftSlotsStackedContents(itemHelper: $StackedContents): void;
        /**
         * Reset the drag fields
         */
        clearCraftingContent(): void;
        getRecipeBookCategories(): $List<$RecipeBookCategories>;
        finishPlacingRecipe(recipe: $RecipeHolder_<R>): void;
        shouldMoveToInventory(slotIndex: number): boolean;
        /**
         * Reset the drag fields
         */
        beginPlacingRecipe(): void;
        getGridWidth(): number;
        recipeMatches(recipe: $RecipeHolder_<R>): boolean;
        getResultSlotIndex(): number;
        getGridHeight(): number;
        getRecipeBookType(): $RecipeBookType;
        handlePlacement(placeAll: boolean, recipe: $RecipeHolder_<never>, player: $ServerPlayer): void;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        constructor(menuType: $MenuType_<never>, containerId: number);
        get size(): number;
        get recipeBookCategories(): $List<$RecipeBookCategories>;
        get gridWidth(): number;
        get resultSlotIndex(): number;
        get gridHeight(): number;
        get recipeBookType(): $RecipeBookType;
    }
    export class $CrafterMenu extends $AbstractContainerMenu implements $ContainerListener {
        getContainer(): $Container;
        isPowered(): boolean;
        dataChanged(containerMenu: $AbstractContainerMenu, dataSlotIndex: number, value: number): void;
        /**
         * Sends the contents of an inventory slot to the client-side Container. This doesn't have to match the actual contents of that slot.
         */
        slotChanged(containerToSend: $AbstractContainerMenu, dataSlotIndex: number, stack: $ItemStack_): void;
        setSlotState(slot: number, enabled: boolean): void;
        isSlotDisabled(slot: number): boolean;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, container: $CraftingContainer, containerData: $ContainerData);
        get container(): $Container;
        get powered(): boolean;
    }
    export class $NonInteractiveResultSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(arg0: $Container, arg1: number, arg2: number, arg3: number);
    }
    export class $FurnaceResultSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(player: $Player, container: $Container, slot: number, xPosition: number, yPosition: number);
    }
    export class $BlastFurnaceMenu extends $AbstractFurnaceMenu {
        level: $Level;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static INGREDIENT_SLOT: number;
        static DATA_COUNT: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static FUEL_SLOT: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, blastFurnaceContainer: $Container, blastFurnaceData: $ContainerData);
    }
    export class $AnvilMenu extends $ItemCombinerMenu {
        setItemName(itemName: string): boolean;
        setMaximumCost(arg0: number): void;
        /**
         * Gets the maximum xp cost
         */
        getCost(): number;
        static calculateIncreasedRepairCost(oldRepairCost: number): number;
        static INPUT_SLOT: number;
        repairItemCountCost: number;
        access: $ContainerLevelAccess;
        static ADDITIONAL_SLOT: number;
        resultSlots: $ResultContainer;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static MAX_NAME_LENGTH: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        inputSlots: $Container;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        player: $Player;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
        set itemName(value: string);
        set maximumCost(value: number);
        get cost(): number;
    }
    export interface $MenuType<T> extends RegistryMarked<RegistryTypes.MenuTag, RegistryTypes.Menu> {}
    export class $ContainerListener {
    }
    export interface $ContainerListener {
        dataChanged(containerMenu: $AbstractContainerMenu, dataSlotIndex: number, value: number): void;
        /**
         * Sends the contents of an inventory slot to the client-side Container. This doesn't have to match the actual contents of that slot.
         */
        slotChanged(containerToSend: $AbstractContainerMenu, dataSlotIndex: number, stack: $ItemStack_): void;
    }
    export class $ItemCombinerMenuSlotDefinition$Builder {
        build(): $ItemCombinerMenuSlotDefinition;
        withResultSlot(slotIndex: number, x: number, y: number): $ItemCombinerMenuSlotDefinition$Builder;
        withSlot(slotIndex: number, x: number, y: number, mayPlace: $Predicate_<$ItemStack>): $ItemCombinerMenuSlotDefinition$Builder;
        constructor();
    }
}
