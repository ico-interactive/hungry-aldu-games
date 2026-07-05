import { $ItemStack_ } from "@package/net/minecraft/world/item";

declare module "@package/net/fabricmc/fabric/mixin/client/indigo/renderer" {
    export class $ItemRendererAccessor {
        static fabric_callUsesDynamicDisplay(arg0: $ItemStack_): boolean;
    }
    export interface $ItemRendererAccessor {
    }
}
