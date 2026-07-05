import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $HeaderAndFooterLayout } from "@package/net/minecraft/client/gui/layouts";
import { $Executor } from "@package/java/util/concurrent";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $CycleButton, $AbstractSelectionList, $ContainerObjectSelectionList$Entry, $ContainerObjectSelectionList, $OptionsList, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft, $NarratorStatus, $KeyMapping, $Options } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $Font } from "@package/net/minecraft/client/gui";
import { $OptionsSubScreen } from "@package/net/minecraft/client/gui/screens/options";

declare module "@package/net/minecraft/client/gui/screens/options/controls" {
    export class $KeyBindsList extends $ContainerObjectSelectionList<$KeyBindsList$Entry> {
        static access$000(arg0: $KeyBindsList): $Minecraft;
        static access$300(arg0: $KeyBindsList): number;
        static access$200(arg0: $KeyBindsList): number;
        static access$100(arg0: $KeyBindsList): $Minecraft;
        static access$400(arg0: $KeyBindsList): $Minecraft;
        static access$600(arg0: $KeyBindsList): $Minecraft;
        static access$500(arg0: $KeyBindsList): $Minecraft;
        resetMappingAndUpdateButtons(): void;
        refreshEntries(): void;
        minecraft: $Minecraft;
        visible: boolean;
        keyBindsScreen: $KeyBindsScreen;
        itemHeight: number;
        static SCROLLBAR_WIDTH: number;
        active: boolean;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        centerListVertically: boolean;
        width: number;
        headerHeight: number;
        height: number;
        constructor(keyBindsScreen: $KeyBindsScreen, minecraft: $Minecraft);
    }
    export class $KeyBindsList$Entry extends $ContainerObjectSelectionList$Entry<$KeyBindsList$Entry> {
        refreshEntry(): void;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$KeyBindsList$Entry>;
        constructor();
    }
    export class $ControlsScreen extends $OptionsSubScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static CUBE_MAP: $CubeMap;
        lastScreen: $Screen;
        list: $OptionsList;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        layout: $HeaderAndFooterLayout;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        options: $Options;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(lastScreen: $Screen, options: $Options);
    }
    export class $KeyBindsList$CategoryEntry extends $KeyBindsList$Entry {
        this$0: $KeyBindsList;
        name: $Component;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$KeyBindsList$Entry>;
        constructor(name: $KeyBindsList, arg1: $Component_);
    }
    export class $KeyBindsList$KeyEntry extends $KeyBindsList$Entry {
        this$0: $KeyBindsList;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$KeyBindsList$Entry>;
        constructor(key: $KeyBindsList, name: $KeyMapping, arg2: $Component_);
    }
    export class $KeyBindsScreen extends $OptionsSubScreen {
        selectedKey: $KeyMapping;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static CUBE_MAP: $CubeMap;
        lastScreen: $Screen;
        list: $OptionsList;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        layout: $HeaderAndFooterLayout;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        lastKeySelection: number;
        options: $Options;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(lastScreen: $Screen, options: $Options);
    }
}
