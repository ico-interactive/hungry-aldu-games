import { $PanoramaRenderer, $CubeMap } from "@package/net/minecraft/client/renderer";
import { $Executor } from "@package/java/util/concurrent";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component } from "@package/net/minecraft/network/chat";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $CycleButton, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $BindableTexture } from "@package/net/createmod/catnip/render";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Font } from "@package/net/minecraft/client/gui";
import { $Color } from "@package/net/createmod/catnip/theme";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";
import { $Couple } from "@package/net/createmod/catnip/data";
export * as widget from "@package/net/createmod/catnip/gui/widget";
export * as element from "@package/net/createmod/catnip/gui/element";

declare module "@package/net/createmod/catnip/gui" {
    export class $ILightingSettings {
        static DEFAULT_3D: $ILightingSettings;
        static DEFAULT_FLAT: $ILightingSettings;
    }
    export interface $ILightingSettings {
        applyLighting(): void;
    }
    /**
     * Values that may be interpreted as {@link $ILightingSettings}.
     */
    export type $ILightingSettings_ = (() => void);
    export class $AbstractSimiScreen extends $Screen {
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
    }
    export class $NavigatableSimiScreen extends $AbstractSimiScreen {
        centerScalingOn(arg0: number, arg1: number): void;
        isEquivalentTo(arg0: $NavigatableSimiScreen): boolean;
        shareContextWith(arg0: $NavigatableSimiScreen): void;
        centerScalingOnMouse(): void;
        static isCurrentlyRenderingPreviousScreen(): boolean;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        transition: $LerpedFloat;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static COLOR_NAV_ARROW: $Couple<$Color>;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor();
        static get currentlyRenderingPreviousScreen(): boolean;
    }
    export class $TextureSheetSegment {
    }
    export interface $TextureSheetSegment extends $BindableTexture {
        getWidth(): number;
        getHeight(): number;
        getStartY(): number;
        getStartX(): number;
        get width(): number;
        get height(): number;
        get startY(): number;
        get startX(): number;
    }
    export class $TickableGuiEventListener {
    }
    export interface $TickableGuiEventListener extends $GuiEventListener {
        tick(): void;
    }
}
