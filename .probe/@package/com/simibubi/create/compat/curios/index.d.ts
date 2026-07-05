import { $IEventBus } from "@package/net/neoforged/bus/api";

declare module "@package/com/simibubi/create/compat/curios" {
    export class $Curios {
        static init(arg0: $IEventBus): void;
        constructor();
    }
    export class $CuriosRenderers {
    }
}
