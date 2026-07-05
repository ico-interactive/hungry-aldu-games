import { $Consumer_ } from "@package/java/util/function";
import { $GridLayout } from "@package/net/minecraft/client/gui/layouts";
import { $NarratableEntry$NarrationPriority, $NarratableEntry, $NarrationElementOutput } from "@package/net/minecraft/client/gui/narration";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $ScreenRectangle_ } from "@package/net/minecraft/client/gui/navigation";
import { $AbstractWidget, $TabButton, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Iterable_ } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $AbstractContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/net/minecraft/client/gui/components/tabs" {
    /**
     * Builder class for creating a TabNavigationBar instance.
     */
    export class $TabNavigationBar$Builder {
        /**
         * Builds and returns a new TabNavigationBar instance.
         * 
         * @return a new TabNavigationBar instance.
         */
        build(): $TabNavigationBar;
        /**
         * Adds multiple tabs to the TabNavigationBar.
         * 
         * @return the `Builder` instance.
         */
        addTabs(...tabs: $Tab[]): $TabNavigationBar$Builder;
        constructor(tabManager: $TabManager, width: number);
    }
    export class $TabManager {
        setCurrentTab(tab: $Tab, playClickSound: boolean): void;
        getCurrentTab(): $Tab;
        setTabArea(tabArea: $ScreenRectangle_): void;
        constructor(addWidget: $Consumer_<$AbstractWidget>, removeWidget: $Consumer_<$AbstractWidget>);
        set tabArea(value: $ScreenRectangle_);
    }
    export class $Tab {
    }
    export interface $Tab {
        getTabTitle(): $Component;
        visitChildren(consumer: $Consumer_<$AbstractWidget>): void;
        doLayout(rectangle: $ScreenRectangle_): void;
        get tabTitle(): $Component;
    }
    export class $GridLayoutTab implements $Tab {
        getTabTitle(): $Component;
        visitChildren(consumer: $Consumer_<$AbstractWidget>): void;
        doLayout(rectangle: $ScreenRectangle_): void;
        layout: $GridLayout;
        constructor(title: $Component_);
        get tabTitle(): $Component;
    }
    export class $TabNavigationBar extends $AbstractContainerEventHandler implements $Renderable, $NarratableEntry {
        setWidth(width: number): void;
        static builder(tabManager: $TabManager, width: number): $TabNavigationBar$Builder;
        /**
         * Handles key pressed events.
         * 
         * @return `true` if the key press was handled, `false` otherwise.
         */
        keyPressed(keycode: number): boolean;
        /**
         * @return the narration priority
         */
        narrationPriority(): $NarratableEntry$NarrationPriority;
        /**
         * Updates the narration output with the current narration information.
         */
        updateNarration(narrationElementOutput: $NarrationElementOutput): void;
        /**
         * Arranges the elements within the tabbed layout.
         */
        arrangeElements(): void;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        narrateListElementPosition(tabButton: $NarrationElementOutput, arg1: $TabButton): void;
        /**
         * Selects the tab at the specified index.
         */
        selectTab(index: number, playClickSound: boolean): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        isActive(): boolean;
        constructor(width: number, tabManager: $TabManager, tabs: $Iterable_<$Tab>);
        set width(value: number);
        get active(): boolean;
    }
}
