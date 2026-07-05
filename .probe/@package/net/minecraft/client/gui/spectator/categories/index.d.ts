import { $PlayerInfo } from "@package/net/minecraft/client/multiplayer";
import { $SpectatorMenuItem, $SpectatorMenu, $SpectatorMenuCategory } from "@package/net/minecraft/client/gui/spectator";
import { $Component } from "@package/net/minecraft/network/chat";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $List_, $Collection_, $List } from "@package/java/util";

declare module "@package/net/minecraft/client/gui/spectator/categories" {
    export class $SpectatorPage {
        getItem(index: number): $SpectatorMenuItem;
        getSelectedSlot(): number;
        static NO_SELECTION: number;
        constructor(items: $List_<$SpectatorMenuItem>, selection: number);
        get selectedSlot(): number;
    }
    export class $TeleportToPlayerMenuCategory implements $SpectatorMenuCategory, $SpectatorMenuItem {
        getName(): $Component;
        isEnabled(): boolean;
        selectItem(menu: $SpectatorMenu): void;
        renderIcon(guiGraphics: $GuiGraphics, shadeColor: number, alpha: number): void;
        getPrompt(): $Component;
        getItems(): $List<$SpectatorMenuItem>;
        constructor();
        constructor(players: $Collection_<$PlayerInfo>);
        get name(): $Component;
        get enabled(): boolean;
        get prompt(): $Component;
        get items(): $List<$SpectatorMenuItem>;
    }
    export class $TeleportToTeamMenuCategory$TeamSelectionItem implements $SpectatorMenuItem {
    }
    export class $TeleportToTeamMenuCategory implements $SpectatorMenuCategory, $SpectatorMenuItem {
        getName(): $Component;
        isEnabled(): boolean;
        selectItem(menu: $SpectatorMenu): void;
        renderIcon(guiGraphics: $GuiGraphics, shadeColor: number, alpha: number): void;
        getPrompt(): $Component;
        getItems(): $List<$SpectatorMenuItem>;
        constructor();
        get name(): $Component;
        get enabled(): boolean;
        get prompt(): $Component;
        get items(): $List<$SpectatorMenuItem>;
    }
}
