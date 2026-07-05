import { $Codec } from "@package/com/mojang/serialization";
import { $ArmorMaterial, $Item_, $Item, $ItemStack_, $Item$TooltipContext, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $TooltipProvider } from "@package/net/minecraft/world/item/component";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Map_, $Map } from "@package/java/util";
import { $Consumer_ } from "@package/java/util/function";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $HolderLookup$Provider, $Holder_, $Holder$Reference, $Holder } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/item/armortrim" {
    export class $TrimMaterial extends $Record {
        static create(assetName: string, ingredient: $Item_, itemModelIndex: number, description: $Component_, overrideArmorMaterials: $Map_<$Holder_<$ArmorMaterial>, string>): $TrimMaterial;
        description(): $Component;
        ingredient(): $Holder<$Item>;
        itemModelIndex(): number;
        overrideArmorMaterials(): $Map<$Holder<$ArmorMaterial>, string>;
        assetName(): string;
        static CODEC: $Codec<$Holder<$TrimMaterial>>;
        static DIRECT_CODEC: $Codec<$TrimMaterial>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TrimMaterial>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$TrimMaterial>>;
        constructor(arg0: string, arg1: $Holder_<$Item>, arg2: number, arg3: $Map_<$Holder_<$ArmorMaterial>, string>, arg4: $Component_);
    }
    /**
     * Values that may be interpreted as {@link $TrimMaterial}.
     */
    export type $TrimMaterial_ = RegistryTypes.TrimMaterial | { description?: $Component_, assetName?: string, itemModelIndex?: number, overrideArmorMaterials?: $Map_<$Holder_<$ArmorMaterial>, string>, ingredient?: $Holder_<$Item>,  } | [description?: $Component_, assetName?: string, itemModelIndex?: number, overrideArmorMaterials?: $Map_<$Holder_<$ArmorMaterial>, string>, ingredient?: $Holder_<$Item>, ];
    export class $TrimPattern extends $Record {
        description(): $Component;
        assetId(): $ResourceLocation;
        copyWithStyle(trimMaterial: $Holder_<$TrimMaterial>): $Component;
        templateItem(): $Holder<$Item>;
        decal(): boolean;
        static CODEC: $Codec<$Holder<$TrimPattern>>;
        static DIRECT_CODEC: $Codec<$TrimPattern>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TrimPattern>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$TrimPattern>>;
        constructor(arg0: $ResourceLocation_, arg1: $Holder_<$Item>, arg2: $Component_, arg3: boolean);
    }
    /**
     * Values that may be interpreted as {@link $TrimPattern}.
     */
    export type $TrimPattern_ = RegistryTypes.TrimPattern | { assetId?: $ResourceLocation_, description?: $Component_, templateItem?: $Holder_<$Item>, decal?: boolean,  } | [assetId?: $ResourceLocation_, description?: $Component_, templateItem?: $Holder_<$Item>, decal?: boolean, ];
    export class $TrimPatterns {
        static register(context: $BootstrapContext<$TrimPattern_>, templateItem: $Item_, trimPatternKey: $ResourceKey_<$TrimPattern>): void;
        static bootstrap(context: $BootstrapContext<$TrimPattern_>): void;
        static getFromTemplate(registries: $HolderLookup$Provider, template: $ItemStack_): ($Holder$Reference<$TrimPattern>) | undefined;
        static WAYFINDER: $ResourceKey<$TrimPattern>;
        static WILD: $ResourceKey<$TrimPattern>;
        static COAST: $ResourceKey<$TrimPattern>;
        static SNOUT: $ResourceKey<$TrimPattern>;
        static RAISER: $ResourceKey<$TrimPattern>;
        static SHAPER: $ResourceKey<$TrimPattern>;
        static SILENCE: $ResourceKey<$TrimPattern>;
        static DUNE: $ResourceKey<$TrimPattern>;
        static VEX: $ResourceKey<$TrimPattern>;
        static SPIRE: $ResourceKey<$TrimPattern>;
        static HOST: $ResourceKey<$TrimPattern>;
        static RIB: $ResourceKey<$TrimPattern>;
        static BOLT: $ResourceKey<$TrimPattern>;
        static SENTRY: $ResourceKey<$TrimPattern>;
        static FLOW: $ResourceKey<$TrimPattern>;
        static EYE: $ResourceKey<$TrimPattern>;
        static TIDE: $ResourceKey<$TrimPattern>;
        static WARD: $ResourceKey<$TrimPattern>;
        constructor();
    }
    export interface $TrimMaterial extends RegistryMarked<RegistryTypes.TrimMaterialTag, RegistryTypes.TrimMaterial> {}
    export class $ArmorTrim implements $TooltipProvider {
        pattern(): $Holder<$TrimPattern>;
        addToTooltip(context: $Item$TooltipContext, tooltipAdder: $Consumer_<$Component>, tooltipFlag: $TooltipFlag): void;
        innerTexture(armorMaterial: $Holder_<$ArmorMaterial>): $ResourceLocation;
        outerTexture(armorMaterial: $Holder_<$ArmorMaterial>): $ResourceLocation;
        hasPatternAndMaterial(pattern: $Holder_<$TrimPattern>, material: $Holder_<$TrimMaterial>): boolean;
        material(): $Holder<$TrimMaterial>;
        withTooltip(showInTooltip: boolean): $ArmorTrim;
        static CODEC: $Codec<$ArmorTrim>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ArmorTrim>;
        constructor(material: $Holder_<$TrimMaterial>, pattern: $Holder_<$TrimPattern>);
        constructor(material: $Holder_<$TrimMaterial>, pattern: $Holder_<$TrimPattern>, showInTooltip: boolean);
    }
    export class $TrimMaterials {
        static bootstrap(context: $BootstrapContext<$TrimMaterial_>): void;
        static getFromIngredient(regustries: $HolderLookup$Provider, ingredient: $ItemStack_): ($Holder$Reference<$TrimMaterial>) | undefined;
        static GOLD: $ResourceKey<$TrimMaterial>;
        static EMERALD: $ResourceKey<$TrimMaterial>;
        static AMETHYST: $ResourceKey<$TrimMaterial>;
        static NETHERITE: $ResourceKey<$TrimMaterial>;
        static REDSTONE: $ResourceKey<$TrimMaterial>;
        static DIAMOND: $ResourceKey<$TrimMaterial>;
        static LAPIS: $ResourceKey<$TrimMaterial>;
        static IRON: $ResourceKey<$TrimMaterial>;
        static COPPER: $ResourceKey<$TrimMaterial>;
        static QUARTZ: $ResourceKey<$TrimMaterial>;
        constructor();
    }
    export interface $TrimPattern extends RegistryMarked<RegistryTypes.TrimPatternTag, RegistryTypes.TrimPattern> {}
}
