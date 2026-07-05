import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Executor } from "@package/java/util/concurrent";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component } from "@package/net/minecraft/network/chat";
import { $CycleButton, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $AdvancementHolder_, $DisplayInfo, $AdvancementProgress, $AdvancementType_, $AdvancementNode } from "@package/net/minecraft/advancements";
import { $ClientAdvancements, $ClientAdvancements$Listener } from "@package/net/minecraft/client/multiplayer";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/screens/advancements" {
    export class $AdvancementTabType extends $Enum<$AdvancementTabType> {
    }
    /**
     * Values that may be interpreted as {@link $AdvancementTabType}.
     */
    export type $AdvancementTabType_ = "above" | "below" | "left" | "right";
    export class $AdvancementTabType$Sprites extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $AdvancementTabType$Sprites}.
     */
    export type $AdvancementTabType$Sprites_ = { first?: $ResourceLocation_, middle?: $ResourceLocation_, last?: $ResourceLocation_,  } | [first?: $ResourceLocation_, middle?: $ResourceLocation_, last?: $ResourceLocation_, ];
    export class $AdvancementsScreen extends $Screen implements $ClientAdvancements$Listener {
        onUpdateAdvancementProgress(advancement: $AdvancementNode, advancementProgress: $AdvancementProgress): void;
        onAddAdvancementRoot(advancement: $AdvancementNode): void;
        onRemoveAdvancementRoot(advancement: $AdvancementNode): void;
        renderWindow(guiGraphics: $GuiGraphics, offsetX: number, offsetY: number): void;
        getAdvancementWidget(advancement: $AdvancementNode): $AdvancementWidget;
        onSelectedTabChanged(advancement: $AdvancementHolder_ | null): void;
        onAdvancementsCleared(): void;
        onRemoveAdvancementTask(advancement: $AdvancementNode): void;
        onAddAdvancementTask(advancement: $AdvancementNode): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static WINDOW_INSIDE_HEIGHT: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static WINDOW_HEIGHT: number;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static WINDOW_WIDTH: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static WINDOW_INSIDE_WIDTH: number;
        static BACKGROUND_TILE_COUNT_X: number;
        static BACKGROUND_TILE_COUNT_Y: number;
        static BACKGROUND_TILE_WIDTH: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static BACKGROUND_TILE_HEIGHT: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(advancements: $ClientAdvancements);
        constructor(advancements: $ClientAdvancements, lastScreen: $Screen | null);
    }
    export class $AdvancementWidgetType extends $Enum<$AdvancementWidgetType> {
        static values(): $AdvancementWidgetType[];
        static valueOf(arg0: string): $AdvancementWidgetType;
        frameSprite(type: $AdvancementType_): $ResourceLocation;
        boxSprite(): $ResourceLocation;
        static OBTAINED: $AdvancementWidgetType;
        static UNOBTAINED: $AdvancementWidgetType;
    }
    /**
     * Values that may be interpreted as {@link $AdvancementWidgetType}.
     */
    export type $AdvancementWidgetType_ = "obtained" | "unobtained";
    export class $AdvancementTab {
        getType(): $AdvancementTabType;
        static create(minecraft: $Minecraft, screen: $AdvancementsScreen, index: number, rootNode: $AdvancementNode): $AdvancementTab;
        getIndex(): number;
        drawTab(guiGraphics: $GuiGraphics, offsetX: number, offsetY: number, isSelected: boolean): void;
        getWidget(advancement: $AdvancementHolder_): $AdvancementWidget;
        drawIcon(guiGraphics: $GuiGraphics, x: number, y: number): void;
        isMouseOver(offsetX: number, offsetY: number, mouseX: number, arg3: number): boolean;
        scroll(dragX: number, arg1: number): void;
        getRootNode(): $AdvancementNode;
        getTitle(): $Component;
        getScreen(): $AdvancementsScreen;
        drawContents(guiGraphics: $GuiGraphics, x: number, y: number): void;
        drawTooltips(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, width: number, height: number): void;
        addAdvancement(node: $AdvancementNode): void;
        getPage(): number;
        getDisplay(): $DisplayInfo;
        constructor(minecraft: $Minecraft, screen: $AdvancementsScreen, type: $AdvancementTabType_, index: number, rootNode: $AdvancementNode, display: $DisplayInfo);
        constructor(arg0: $Minecraft, arg1: $AdvancementsScreen, arg2: $AdvancementTabType_, arg3: number, arg4: number, arg5: $AdvancementNode, arg6: $DisplayInfo);
        get type(): $AdvancementTabType;
        get index(): number;
        get rootNode(): $AdvancementNode;
        get title(): $Component;
        get screen(): $AdvancementsScreen;
        get page(): number;
        get display(): $DisplayInfo;
    }
    export class $AdvancementWidget {
        drawConnectivity(guiGraphics: $GuiGraphics, x: number, y: number, dropShadow: boolean): void;
        attachToParent(): void;
        setProgress(progress: $AdvancementProgress): void;
        getWidth(): number;
        isMouseOver(x: number, y: number, mouseX: number, mouseY: number): boolean;
        draw(guiGraphics: $GuiGraphics, x: number, y: number): void;
        addChild(advancementWidget: $AdvancementWidget): void;
        getY(): number;
        getX(): number;
        drawHover(guiGraphics: $GuiGraphics, x: number, y: number, fade: number, width: number, height: number): void;
        constructor(tab: $AdvancementTab, minecraft: $Minecraft, advancementNode: $AdvancementNode, display: $DisplayInfo);
        set progress(value: $AdvancementProgress);
        get width(): number;
        get y(): number;
        get x(): number;
    }
}
