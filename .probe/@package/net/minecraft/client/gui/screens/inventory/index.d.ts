import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $RecipeUpdateListener, $AbstractFurnaceRecipeBookComponent, $RecipeBookComponent } from "@package/net/minecraft/client/gui/screens/recipebook";
import { $Executor } from "@package/java/util/concurrent";
import { $CreativeModeInventoryScreenExt } from "@package/com/moulberry/axiom/hooks";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $NarratorStatus, $Minecraft } from "@package/net/minecraft/client";
import { $Set, $List, $List_ } from "@package/java/util";
import { $AbstractHorse } from "@package/net/minecraft/world/entity/animal/horse";
import { $SimpleContainer, $InteractionHand_, $Container } from "@package/net/minecraft/world";
import { $Holder, $NonNullList } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $HorseInventoryMenu, $ChestMenu, $FurnaceMenu, $LecternMenu, $ClickType_, $BeaconMenu, $CartographyTableMenu, $StonecutterMenu, $AnvilMenu, $Slot, $ShulkerBoxMenu, $ItemCombinerMenu, $EnchantmentMenu, $CrafterMenu, $CraftingMenu, $SmokerMenu, $BlastFurnaceMenu, $MerchantMenu, $SmithingMenu, $HopperMenu, $GrindstoneMenu, $DispenserMenu, $AbstractContainerMenu, $BrewingStandMenu, $AbstractFurnaceMenu, $InventoryMenu, $LoomMenu, $ContainerListener } from "@package/net/minecraft/world/inventory";
import { $Record } from "@package/java/lang";
import { $FabricCreativeInventoryScreen } from "@package/net/fabricmc/fabric/api/client/itemgroup/v1";
import { $BaseCommandBlock } from "@package/net/minecraft/world/level";
import { $CreativeModeTab, $CreativeModeTab_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $FormattedText, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $CommandSuggestions, $EditBox, $AbstractButton, $WidgetSprites, $Renderable, $CycleButton, $Button, $Button$OnPress_, $Button$CreateNarration } from "@package/net/minecraft/client/gui/components";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $CreativeTabsScreenPage } from "@package/net/neoforged/neoforge/client/gui";
import { $WoodType } from "@package/net/minecraft/world/level/block/state/properties";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $CreativeModeInventoryScreenAccessor } from "@package/dev/simulated_team/simulated/mixin/accessor";
import { $SignBlockEntity, $StructureBlockEntity, $JigsawBlockEntity, $CommandBlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Vector3f, $Quaternionf } from "@package/org/joml";
export * as tooltip from "@package/net/minecraft/client/gui/screens/inventory/tooltip";

declare module "@package/net/minecraft/client/gui/screens/inventory" {
    export class $SmithingScreen extends $ItemCombinerScreen<$SmithingMenu> {
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
        menu: $SmithingMenu;
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
        constructor(menu: $SmithingMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $EnchantmentScreen extends $AbstractContainerScreen<$EnchantmentMenu> {
        tickBook(): void;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        oFlip: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        flipT: number;
        oOpen: number;
        static PANORAMA: $PanoramaRenderer;
        flip: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        slotColor: number;
        flipA: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: $EnchantmentMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        time: number;
        screenExecutor: $Executor;
        topPos: number;
        open: number;
        font: $Font;
        constructor(menu: $EnchantmentMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $BookViewScreen$BookAccess extends $Record {
        static fromItem(stack: $ItemStack_): $BookViewScreen$BookAccess;
        /**
         * Returns the size of the book
         */
        getPageCount(): number;
        pages(): $List<$Component>;
        getPage(page: number): $FormattedText;
        constructor(arg0: $List_<$Component_>);
        get pageCount(): number;
    }
    /**
     * Values that may be interpreted as {@link $BookViewScreen$BookAccess}.
     */
    export type $BookViewScreen$BookAccess_ = { pages?: $List_<$Component_>,  } | [pages?: $List_<$Component_>, ];
    export class $BeaconScreen$BeaconPowerButton extends $BeaconScreen$BeaconScreenButton {
        static SPRITES: $WidgetSprites;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        active: boolean;
        static TEXT_MARGIN: number;
        height: number;
    }
    export class $CyclingSlotBackground {
        tick(icons: $List_<$ResourceLocation_>): void;
        render(containerMenu: $AbstractContainerMenu, guiGraphics: $GuiGraphics, partialTick: number, x: number, y: number): void;
        constructor(slotIndex: number);
    }
    export class $ShulkerBoxScreen extends $AbstractContainerScreen<$ShulkerBoxMenu> {
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
        menu: $ShulkerBoxMenu;
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
        constructor(menu: $ShulkerBoxMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $CreativeModeInventoryScreen$SlotWrapper extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
    }
    export class $CommandBlockEditScreen extends $AbstractCommandBlockEditScreen {
        updateGui(): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        previousEdit: $EditBox;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        doneButton: $Button;
        narratorButton: $CycleButton<$NarratorStatus>;
        cancelButton: $Button;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        outputButton: $CycleButton<boolean>;
        commandEdit: $EditBox;
        commandSuggestions: $CommandSuggestions;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(autoCommandBlock: $CommandBlockEntity);
    }
    export class $BrewingStandScreen extends $AbstractContainerScreen<$BrewingStandMenu> {
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
        menu: $BrewingStandMenu;
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
        constructor(menu: $BrewingStandMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $CreativeModeInventoryScreen extends $EffectRenderingInventoryScreen<$CreativeModeInventoryScreen$ItemPickerMenu> implements $FabricCreativeInventoryScreen, $CreativeModeInventoryScreenExt {
        /**
         * Returns (if you are not on the inventoryTab) and (the flag isn't set) and (you have more than 1 page of items).
         */
        isInventoryOpen(): boolean;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getPageCount(): number;
        static handleHotbarLoadOrSave(client: $Minecraft, index: number, load: boolean, save: boolean): void;
        getCurrentPage(): $CreativeTabsScreenPage;
        handler$cpe005$axiom$init(ci: $CallbackInfo): void;
        getItemGroupsOnPage(arg0: number): $List<any>;
        getSelectedItemGroup(): $CreativeModeTab;
        axiom$checkTabHovering(guiGraphics: $GuiGraphics, creativeModeTab: $CreativeModeTab_, mouseX: number, mouseY: number): boolean;
        setSelectedItemGroup(arg0: $CreativeModeTab_): boolean;
        axiom$checkTabClicked(creativeModeTab: $CreativeModeTab_, relativeMouseX: number, mouseY: number): boolean;
        /**
         * Returns (if you are not on the inventoryTab) and (the flag isn't set) and (you have more than 1 page of items).
         */
        switchToPreviousPage(): boolean;
        axiom$renderTabButton(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, creativeModeTab: $CreativeModeTab_, forceDeselected: boolean): void;
        getPage(tab: $CreativeModeTab_): number;
        handler$cpe000$axiom$keyPressed(key: number, j: number, k: number, cir: $CallbackInfoReturnable<any>): void;
        handler$cpe001$axiom$render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number, ci: $CallbackInfo): void;
        checkTabHovering(guiGraphics: $GuiGraphics, creativeModeTab: $CreativeModeTab_, mouseX: number, mouseY: number): boolean;
        renderTabButton(guiGraphics: $GuiGraphics, creativeModeTab: $CreativeModeTab_): void;
        /**
         * Sets the current creative tab, restructuring the GUI as needed.
         */
        axiom$selectTab(tab: $CreativeModeTab_): void;
        switchToPage(keyCode: number): boolean;
        insideScrollbar(mouseX: number, arg1: number): boolean;
        /**
         * Returns (if you are not on the inventoryTab) and (the flag isn't set) and (you have more than 1 page of items).
         */
        switchToNextPage(): boolean;
        setCurrentPage(arg0: $CreativeTabsScreenPage): void;
        checkTabClicked(creativeModeTab: $CreativeModeTab_, relativeMouseX: number, arg2: number): boolean;
        /**
         * Returns (if you are not on the inventoryTab) and (the flag isn't set) and (you have more than 1 page of items).
         */
        hasAdditionalPages(): boolean;
        wrapOperation$cpe000$axiom$renderTabButton_selectedTab(original: $Operation_<any>): $CreativeModeTab;
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
        menu: $CreativeModeInventoryScreen$ItemPickerMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        static CONTAINER: $SimpleContainer;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(player: $LocalPlayer, enabledFeatures: $FeatureFlagSet, displayOperatorCreativeTab: boolean);
        get inventoryOpen(): boolean;
        get pageCount(): number;
    }
    export class $AbstractCommandBlockEditScreen extends $Screen {
        updatePreviousOutput(trackOutput: boolean): void;
        populateAndSendPacket(commandBlock: $BaseCommandBlock): void;
        getCommandBlock(): $BaseCommandBlock;
        onDone(): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getPreviousY(): number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        previousEdit: $EditBox;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        doneButton: $Button;
        narratorButton: $CycleButton<$NarratorStatus>;
        cancelButton: $Button;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        outputButton: $CycleButton<boolean>;
        commandEdit: $EditBox;
        commandSuggestions: $CommandSuggestions;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor();
        get commandBlock(): $BaseCommandBlock;
        get previousY(): number;
    }
    export class $EffectRenderingInventoryScreen<T extends $AbstractContainerMenu> extends $AbstractContainerScreen<T> {
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        canSeeEffects(): boolean;
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
        menu: T;
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
        constructor(menu: T, playerInventory: $Inventory, title: $Component_);
    }
    export class $DispenserScreen extends $AbstractContainerScreen<$DispenserMenu> {
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
        menu: $DispenserMenu;
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
        constructor(menu: $DispenserMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $CreativeModeInventoryScreen$CustomCreativeSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
    }
    export class $BookViewScreen extends $Screen {
        getClickedComponentStyleAt(mouseX: number, arg1: number): $Style;
        /**
         * Moves the display back one page
         */
        pageForward(): void;
        /**
         * Moves the display back one page
         */
        createMenuControls(): void;
        /**
         * Moves the display back one page
         */
        closeScreen(): void;
        setBookAccess(bookAccess: $BookViewScreen$BookAccess_): void;
        /**
         * I'm not sure why this exists. The function it calls is public and does all the work.
         */
        setPage(pageNum: number): boolean;
        /**
         * Moves the display back one page
         */
        createPageControlButtons(): void;
        /**
         * Moves the display back one page
         */
        pageBack(): void;
        /**
         * I'm not sure why this exists. The function it calls is public and does all the work.
         */
        forcePage(pageNum: number): boolean;
        static BOOK_LOCATION: $ResourceLocation;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static TEXT_HEIGHT: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static PAGE_TEXT_X_OFFSET: number;
        static PAGE_TEXT_Y_OFFSET: number;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static TEXT_WIDTH: number;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static IMAGE_HEIGHT: number;
        static PANORAMA: $PanoramaRenderer;
        static IMAGE_WIDTH: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        static PAGE_INDICATOR_TEXT_Y_OFFSET: number;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static EMPTY_ACCESS: $BookViewScreen$BookAccess;
        narratorButton: $CycleButton<$NarratorStatus>;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        font: $Font;
        constructor();
        constructor(bookAccess: $BookViewScreen$BookAccess_);
        set bookAccess(value: $BookViewScreen$BookAccess_);
        set page(value: number);
    }
    export class $BeaconScreen extends $AbstractContainerScreen<$BeaconMenu> {
        static access$000(arg0: $BeaconScreen): $Minecraft;
        static access$200(arg0: $BeaconScreen): $Minecraft;
        static access$100(arg0: $BeaconScreen): $Minecraft;
        updateButtons(): void;
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
        static CANCEL_SPRITE: $ResourceLocation;
        static CONFIRM_SPRITE: $ResourceLocation;
        static INVENTORY_LOCATION: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        static BUTTON_SELECTED_SPRITE: $ResourceLocation;
        inventoryLabelY: number;
        static BUTTON_DISABLED_SPRITE: $ResourceLocation;
        inventoryLabelX: number;
        menu: $BeaconMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        secondary: $Holder<$MobEffect>;
        narratorButton: $CycleButton<$NarratorStatus>;
        static BUTTON_SPRITE: $ResourceLocation;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        static BUTTON_HIGHLIGHTED_SPRITE: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        topPos: number;
        primary: $Holder<$MobEffect>;
        font: $Font;
        constructor(menu: $BeaconMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $ContainerScreen extends $AbstractContainerScreen<$ChestMenu> implements $MenuAccess<$ChestMenu> {
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
        menu: $ChestMenu;
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
        constructor(menu: $ChestMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $BeaconScreen$BeaconCancelButton extends $BeaconScreen$BeaconSpriteScreenButton {
        static SPRITES: $WidgetSprites;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        active: boolean;
        static TEXT_MARGIN: number;
        height: number;
    }
    export class $InventoryScreen extends $EffectRenderingInventoryScreen<$InventoryMenu> implements $RecipeUpdateListener {
        static renderEntityInInventoryFollowsMouse(guiGraphics: $GuiGraphics, x1: number, y1: number, x2: number, y2: number, scale: number, yOffset: number, mouseX: number, mouseY: number, entity: $LivingEntity): void;
        static renderEntityInInventoryFollowsAngle(guiGraphics: $GuiGraphics, x1: number, y1: number, x2: number, y2: number, scale: number, yOffset: number, mouseX: number, mouseY: number, entity: $LivingEntity): void;
        getRecipeBookComponent(): $RecipeBookComponent;
        static renderEntityInInventory(guiGraphics: $GuiGraphics, x: number, y: number, scale: number, translate: $Vector3f, pose: $Quaternionf, cameraOrientation: $Quaternionf | null, entity: $LivingEntity): void;
        recipesUpdated(): void;
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
        menu: $InventoryMenu;
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
        constructor(player: $Player);
        get recipeBookComponent(): $RecipeBookComponent;
    }
    export class $HopperScreen extends $AbstractContainerScreen<$HopperMenu> {
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
        menu: $HopperMenu;
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
        constructor(menu: $HopperMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $BookEditScreen$DisplayCache {
    }
    export class $FurnaceScreen extends $AbstractFurnaceScreen<$FurnaceMenu> {
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
        menu: $FurnaceMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        recipeBookComponent: $AbstractFurnaceRecipeBookComponent;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $FurnaceMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $MerchantScreen$TradeOfferButton extends $Button {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        width: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
    }
    export class $CartographyTableScreen extends $AbstractContainerScreen<$CartographyTableMenu> {
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
        menu: $CartographyTableMenu;
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
        constructor(menu: $CartographyTableMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $LoomScreen extends $AbstractContainerScreen<$LoomMenu> {
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
        menu: $LoomMenu;
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
        constructor(menu: $LoomMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $AbstractFurnaceScreen<T extends $AbstractFurnaceMenu> extends $AbstractContainerScreen<T> implements $RecipeUpdateListener {
        getRecipeBookComponent(): $RecipeBookComponent;
        recipesUpdated(): void;
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
        menu: T;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        recipeBookComponent: $AbstractFurnaceRecipeBookComponent;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: T, recipeBookComponent: $AbstractFurnaceRecipeBookComponent, playerInventory: $Inventory, title: $Component_, texture: $ResourceLocation_, listProgressSprite: $ResourceLocation_, burnProgressSprite: $ResourceLocation_);
    }
    export class $SmokerScreen extends $AbstractFurnaceScreen<$SmokerMenu> {
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
        menu: $SmokerMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        recipeBookComponent: $AbstractFurnaceRecipeBookComponent;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $SmokerMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $EnchantmentNames {
        static getInstance(): $EnchantmentNames;
        getRandomName(fontRenderer: $Font, maxWidth: number): $FormattedText;
        /**
         * Resets the underlying random number generator using a given seed.
         */
        initSeed(seed: number): void;
        static get instance(): $EnchantmentNames;
    }
    export class $AbstractContainerScreen<T extends $AbstractContainerMenu> extends $Screen implements $MenuAccess<T>, $CreativeModeInventoryScreenAccessor {
        containerTick(): void;
        renderLabels(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number): void;
        renderBg(guiGraphics: $GuiGraphics, partialTick: number, mouseX: number, mouseY: number): void;
        getTooltipFromContainerItem(stack: $ItemStack_): $List<$Component>;
        static renderSlotHighlight(guiGraphics: $GuiGraphics, x: number, y: number, blitOffset: number): void;
        renderSlotHighlight(arg0: $GuiGraphics, arg1: $Slot, arg2: number, arg3: number, arg4: number): void;
        static renderSlotHighlight(guiGraphics: $GuiGraphics, x: number, y: number, width: number, height: number): void;
        handleSlotStateChanged(slotId: number, containerId: number, newState: boolean): void;
        checkHotbarKeyPressed(keyCode: number, scanCode: number): boolean;
        renderTooltip(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getYSize(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getXSize(): number;
        getSlotColor(arg0: number): number;
        hasClickedOutside(mouseX: number, arg1: number, mouseY: number, arg3: number, guiLeft: number): boolean;
        /**
         * Called when the mouse is clicked over a slot or outside the gui.
         */
        slotClicked(slot: $Slot, slotId: number, mouseButton: number, type: $ClickType_): void;
        renderSlotContents(arg0: $GuiGraphics, arg1: $ItemStack_, arg2: $Slot, arg3: string | null): void;
        getSlotUnderMouse(): $Slot;
        clearDraggingState(): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getGuiTop(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getGuiLeft(): number;
        getMenu(): T;
        isHovering(x: number, y: number, width: number, height: number, mouseX: number, arg5: number): boolean;
        renderSlot(guiGraphics: $GuiGraphics, slot: $Slot): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getLeftPos(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getTopPos(): number;
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
        menu: T;
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
        constructor(menu: T, playerInventory: $Inventory, title: $Component_);
        get YSize(): number;
        get XSize(): number;
        get slotUnderMouse(): $Slot;
        get guiTop(): number;
        get guiLeft(): number;
    }
    export class $CreativeInventoryListener implements $ContainerListener {
        dataChanged(containerMenu: $AbstractContainerMenu, dataSlotIndex: number, value: number): void;
        /**
         * Sends the contents of an inventory slot to the client-side Container. This doesn't have to match the actual contents of that slot.
         */
        slotChanged(containerToSend: $AbstractContainerMenu, slotInd: number, stack: $ItemStack_): void;
        constructor(minecraft: $Minecraft);
    }
    export class $BlastFurnaceScreen extends $AbstractFurnaceScreen<$BlastFurnaceMenu> {
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
        menu: $BlastFurnaceMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        recipeBookComponent: $AbstractFurnaceRecipeBookComponent;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $BlastFurnaceMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $CrafterScreen extends $AbstractContainerScreen<$CrafterMenu> {
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
        menu: $CrafterMenu;
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
        constructor(menu: $CrafterMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $HorseInventoryScreen extends $AbstractContainerScreen<$HorseInventoryMenu> {
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
        menu: $HorseInventoryMenu;
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
        constructor(menu: $HorseInventoryMenu, inventory: $Inventory, horse: $AbstractHorse, inventoryColumns: number);
    }
    export class $BeaconScreen$BeaconConfirmButton extends $BeaconScreen$BeaconSpriteScreenButton {
        static SPRITES: $WidgetSprites;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        active: boolean;
        static TEXT_MARGIN: number;
        height: number;
    }
    export class $BeaconScreen$BeaconUpgradePowerButton extends $BeaconScreen$BeaconPowerButton {
        static SPRITES: $WidgetSprites;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        active: boolean;
        static TEXT_MARGIN: number;
        height: number;
    }
    export class $MinecartCommandBlockEditScreen extends $AbstractCommandBlockEditScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        previousEdit: $EditBox;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        doneButton: $Button;
        narratorButton: $CycleButton<$NarratorStatus>;
        cancelButton: $Button;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        outputButton: $CycleButton<boolean>;
        commandEdit: $EditBox;
        commandSuggestions: $CommandSuggestions;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(commandBlock: $BaseCommandBlock);
    }
    export class $ItemCombinerScreen<T extends $ItemCombinerMenu> extends $AbstractContainerScreen<T> implements $ContainerListener {
        dataChanged(containerMenu: $AbstractContainerMenu, dataSlotIndex: number, value: number): void;
        /**
         * Sends the contents of an inventory slot to the client-side Container. This doesn't have to match the actual contents of that slot.
         */
        slotChanged(containerToSend: $AbstractContainerMenu, slotInd: number, stack: $ItemStack_): void;
        renderErrorIcon(guiGraphics: $GuiGraphics, x: number, y: number): void;
        subInit(): void;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        renderFg(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
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
        menu: T;
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
        constructor(menu: T, playerInventory: $Inventory, title: $Component_, menuResource: $ResourceLocation_);
    }
    export class $LecternScreen extends $BookViewScreen implements $MenuAccess<$LecternMenu> {
        /**
         * Moves the display back one page
         */
        pageChanged(): void;
        /**
         * Moves the display back one page
         */
        bookChanged(): void;
        getMenu(): $LecternMenu;
        static BOOK_LOCATION: $ResourceLocation;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static TEXT_HEIGHT: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static PAGE_TEXT_X_OFFSET: number;
        static PAGE_TEXT_Y_OFFSET: number;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static TEXT_WIDTH: number;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static IMAGE_HEIGHT: number;
        static PANORAMA: $PanoramaRenderer;
        static IMAGE_WIDTH: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        static PAGE_INDICATOR_TEXT_Y_OFFSET: number;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static EMPTY_ACCESS: $BookViewScreen$BookAccess;
        narratorButton: $CycleButton<$NarratorStatus>;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        font: $Font;
        constructor(menu: $LecternMenu, playerInventory: $Inventory, title: $Component_);
        get menu(): $LecternMenu;
    }
    export class $SignEditScreen extends $AbstractSignEditScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        woodType: $WoodType;
        static MAGIC_TEXT_SCALE: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        static MAGIC_SCALE_NUMBER: number;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $SignBlockEntity, arg1: boolean, arg2: boolean);
    }
    export class $CraftingScreen extends $AbstractContainerScreen<$CraftingMenu> implements $RecipeUpdateListener {
        getRecipeBookComponent(): $RecipeBookComponent;
        recipesUpdated(): void;
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
        menu: $CraftingMenu;
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
        constructor(menu: $CraftingMenu, playerInventory: $Inventory, title: $Component_);
        get recipeBookComponent(): $RecipeBookComponent;
    }
    export class $MerchantScreen extends $AbstractContainerScreen<$MerchantMenu> {
        static access$000(arg0: $MerchantScreen): $Font;
        static access$200(arg0: $MerchantScreen): $Font;
        static access$100(arg0: $MerchantScreen): $Font;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        scrollOff: number;
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
        menu: $MerchantMenu;
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
        constructor(menu: $MerchantMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $BeaconScreen$BeaconSpriteScreenButton extends $BeaconScreen$BeaconScreenButton {
        static SPRITES: $WidgetSprites;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        active: boolean;
        static TEXT_MARGIN: number;
        height: number;
    }
    export class $BookEditScreen$Pos2i {
    }
    export class $JigsawBlockEditScreen extends $Screen {
        static isValidResourceLocation(location: string): boolean;
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
        levels: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(jigsawEntity: $JigsawBlockEntity);
    }
    export class $BeaconScreen$BeaconScreenButton extends $AbstractButton implements $BeaconScreen$BeaconButton {
        static SPRITES: $WidgetSprites;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        active: boolean;
        static TEXT_MARGIN: number;
        height: number;
    }
    export class $CreativeModeInventoryScreen$ItemPickerMenu extends $AbstractContainerMenu {
        calculateRowCount(): number;
        canScroll(): boolean;
        /**
         * Updates the gui slot's ItemStacks based on scroll position.
         */
        scrollTo(pos: number): void;
        subtractInputFromScroll(scrollOffs: number, input: number): number;
        getScrollForRowIndex(rowIndex: number): number;
        getRowIndexForScroll(scrollOffs: number): number;
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
        containerId: number;
        items: $NonNullList<$ItemStack>;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(player: $Player);
    }
    export class $BookEditScreen$LineInfo {
    }
    export class $BeaconScreen$BeaconButton {
    }
    export interface $BeaconScreen$BeaconButton {
    }
    /**
     * Values that may be interpreted as {@link $BeaconScreen$BeaconButton}.
     */
    export type $BeaconScreen$BeaconButton_ = (() => void);
    export class $BookEditScreen extends $Screen {
        static findLineFromPos(lineStarts: number[], find: number): number;
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
        constructor(owner: $Player, book: $ItemStack_, hand: $InteractionHand_);
    }
    export class $HangingSignEditScreen extends $AbstractSignEditScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static MAGIC_BACKGROUND_SCALE: number;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        woodType: $WoodType;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $SignBlockEntity, arg1: boolean, arg2: boolean);
    }
    export class $StonecutterScreen extends $AbstractContainerScreen<$StonecutterMenu> {
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getOffscreenRows(): number;
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
        menu: $StonecutterMenu;
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
        constructor(menu: $StonecutterMenu, playerInventory: $Inventory, title: $Component_);
        get offscreenRows(): number;
    }
    export class $MenuAccess<T extends $AbstractContainerMenu> {
    }
    export interface $MenuAccess<T extends $AbstractContainerMenu> {
        getMenu(): T;
        get menu(): T;
    }
    /**
     * Values that may be interpreted as {@link $MenuAccess}.
     */
    export type $MenuAccess_<T> = (() => T);
    export class $AnvilScreen extends $ItemCombinerScreen<$AnvilMenu> {
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
        menu: $AnvilMenu;
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
        constructor(menu: $AnvilMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $AbstractSignEditScreen extends $Screen {
        renderSignBackground(guiGraphics: $GuiGraphics, state: $BlockState_): void;
        offsetSign(guiGraphics: $GuiGraphics, state: $BlockState_): void;
        getSignTextScale(): $Vector3f;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        woodType: $WoodType;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(sign: $SignBlockEntity, isFrontText: boolean, isFiltered: boolean);
        constructor(sign: $SignBlockEntity, isFrontText: boolean, isFiltered: boolean, title: $Component_);
        get signTextScale(): $Vector3f;
    }
    export class $GrindstoneScreen extends $AbstractContainerScreen<$GrindstoneMenu> {
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
        menu: $GrindstoneMenu;
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
        constructor(menu: $GrindstoneMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $PageButton extends $Button {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        width: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(x: number, y: number, isForward: boolean, onPress: $Button$OnPress_, playTurnSound: boolean);
    }
    export class $StructureBlockEditScreen extends $Screen {
        static access$000(arg0: $StructureBlockEditScreen, arg1: string, arg2: string, arg3: number): boolean;
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
        constructor(structure: $StructureBlockEntity);
    }
}
