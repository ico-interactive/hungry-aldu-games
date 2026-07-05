import { $CreativeModeTab_, $CreativeModeTab } from "@package/net/minecraft/world/item";
import { $List } from "@package/java/util";

declare module "@package/net/fabricmc/fabric/api/client/itemgroup/v1" {
    export class $FabricCreativeInventoryScreen {
    }
    export interface $FabricCreativeInventoryScreen {
        getPageCount(): number;
        getCurrentPage(): number;
        getItemGroupsOnPage(arg0: number): $List<$CreativeModeTab>;
        getSelectedItemGroup(): $CreativeModeTab;
        setSelectedItemGroup(arg0: $CreativeModeTab_): boolean;
        switchToPreviousPage(): boolean;
        getPage(arg0: $CreativeModeTab_): number;
        switchToPage(arg0: number): boolean;
        switchToNextPage(): boolean;
        hasAdditionalPages(): boolean;
        get pageCount(): number;
        get currentPage(): number;
    }
}
