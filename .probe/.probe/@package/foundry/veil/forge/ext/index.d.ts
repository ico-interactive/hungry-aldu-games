import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $Function, $Supplier_, $Function_ } from "@package/java/util/function";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";

declare module "@package/foundry/veil/forge/ext" {
    export class $DeferredRegisterExtensions<T> {
    }
    export interface $DeferredRegisterExtensions<T> {
        register<I extends T>(arg0: $ResourceLocation_, arg1: $Supplier_<I>): $DeferredHolder<T, I>;
        register<I extends T>(arg0: $ResourceLocation_, arg1: $Function_<$ResourceLocation, I>): $DeferredHolder<T, I>;
    }
    /**
     * Values that may be interpreted as {@link $DeferredRegisterExtensions}.
     */
    export type $DeferredRegisterExtensions_<T> = ((arg0: $ResourceLocation, arg1: $Function<$ResourceLocation, any>) => $DeferredHolder<T, any>);
}
