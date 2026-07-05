import { $PanoramaRenderer, $CubeMap } from "@package/net/minecraft/client/renderer";
import { $TitleScreen } from "@package/net/minecraft/client/gui/screens";
import { $WarningScreen } from "@package/net/minecraft/client/gui/screens/multiplayer";
import { $Executor } from "@package/java/util/concurrent";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $CycleButton, $Checkbox, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $Font } from "@package/net/minecraft/client/gui";
import { $ScreenEvent$Init$Post } from "@package/net/neoforged/neoforge/client/event";

declare module "@package/com/simibubi/create/compat/pojav" {
    export class $PojavWarningScreen extends $WarningScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        stopShowing: $Checkbox;
        static QUIT: $Component;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static NARRATION: $Component;
        static CONTINUE: $Component;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        static TITLE: $Component;
        static CONTENT: $Component;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $TitleScreen);
    }
    export class $PojavChecker {
        static init(): void;
        static onScreenInit(arg0: $ScreenEvent$Init$Post): void;
        static IS_PRESENT: boolean;
        constructor();
    }
}
