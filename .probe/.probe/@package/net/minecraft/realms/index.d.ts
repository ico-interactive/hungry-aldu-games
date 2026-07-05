import { $Logger } from "@package/org/slf4j";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Executor } from "@package/java/util/concurrent";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $CycleButton, $ObjectSelectionList, $ObjectSelectionList$Entry, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft, $GameNarrator, $NarratorStatus } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $RealmsServer } from "@package/com/mojang/realmsclient/dto";
import { $Duration_ } from "@package/java/time";
import { $ServerAddress } from "@package/net/minecraft/client/multiplayer/resolver";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $Connection } from "@package/net/minecraft/network";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/realms" {
    export class $RealmsObjectSelectionList<E extends $ObjectSelectionList$Entry<E>> extends $ObjectSelectionList<E> {
        clear(): void;
        addEntry(entry: E): number;
        selectItem(index: number): void;
        setSelectedItem(index: number): void;
        minecraft: $Minecraft;
        visible: boolean;
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
        constructor(width: number, height: number, y: number, itemHeight: number);
        set selectedItem(value: number);
    }
    export class $RepeatedNarrator$Params {
    }
    export class $RealmsScreen extends $Screen {
        addLabel(label: $RealmsLabel): $RealmsLabel;
        static row(position: number): number;
        createLabelNarration(): $Component;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static SKIN_FACE_SIZE: number;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static COLOR_LINK_HOVER: number;
        static COLOR_DARK_GRAY: number;
        static TITLE_HEIGHT: number;
        static PANORAMA: $PanoramaRenderer;
        static COLOR_GREEN: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        static SIZE_LIMIT: number;
        static COLOR_MEDIUM_GRAY: number;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        static EXPIRATION_NOTIFICATION_DAYS: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        static COLOR_LINK: number;
        font: $Font;
        constructor(title: $Component_);
    }
    export class $RepeatedNarrator {
        narrate(narrator: $GameNarrator, narration: $Component_): void;
        constructor(duration: $Duration_);
    }
    export class $DisconnectedRealmsScreen extends $RealmsScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static SKIN_FACE_SIZE: number;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static COLOR_LINK_HOVER: number;
        static COLOR_DARK_GRAY: number;
        static TITLE_HEIGHT: number;
        static PANORAMA: $PanoramaRenderer;
        static COLOR_GREEN: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        static SIZE_LIMIT: number;
        static COLOR_MEDIUM_GRAY: number;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        static EXPIRATION_NOTIFICATION_DAYS: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        static COLOR_LINK: number;
        font: $Font;
        constructor(parent: $Screen, title: $Component_, reason: $Component_);
    }
    export class $RealmsLabel implements $Renderable {
        getText(): $Component;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        constructor(text: $Component_, x: number, y: number, color: number);
        get text(): $Component;
    }
    export class $RealmsConnect {
        connect(server: $RealmsServer, address: $ServerAddress): void;
        abort(): void;
        tick(): void;
        onlineScreen: $Screen;
        aborted: boolean;
        static LOGGER: $Logger;
        connection: $Connection;
        constructor(onlineScreen: $Screen);
    }
}
