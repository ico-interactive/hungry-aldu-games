import { $Codec } from "@package/com/mojang/serialization";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Ingredient_, $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $Component } from "@package/net/minecraft/network/chat";
import { $FabricBrewingRecipeRegistryBuilder } from "@package/net/fabricmc/fabric/api/registry";
import { $MobEffectInstance } from "@package/net/minecraft/world/effect";
import { $PotionBrewingAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $FeatureFlag, $FeatureFlagSet, $FeatureElement } from "@package/net/minecraft/world/flag";
import { $List, $List_, $OptionalInt } from "@package/java/util";
import { $Consumer_ } from "@package/java/util/function";
import { $Holder_, $RegistryAccess, $Registry, $Holder } from "@package/net/minecraft/core";
import { $IBrewingRecipe } from "@package/net/neoforged/neoforge/common/brewing";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Iterable_, $Record, $Iterable } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/item/alchemy" {
    export class $PotionBrewing$Builder implements $FabricBrewingRecipeRegistryBuilder {
        build(): $PotionBrewing;
        addRecipe(arg0: $IBrewingRecipe): void;
        addRecipe(arg0: $Ingredient_, arg1: $Ingredient_, arg2: $ItemStack_): void;
        registerItemRecipe(arg0: $Item_, arg1: $Ingredient_, arg2: $Item_): void;
        addContainerRecipe(input: $Item_, reagent: $Item_, result: $Item_): void;
        addStartMix(reagent: $Item_, result: $Holder_<$Potion>): void;
        getEnabledFeatures(): $FeatureFlagSet;
        registerRecipes(arg0: $Ingredient_, arg1: $Holder_<any>): void;
        addContainer(container: $Item_): void;
        addMix(input: $Holder_<$Potion>, reagent: $Item_, result: $Holder_<$Potion>): void;
        registerPotionRecipe(arg0: $Holder_<any>, arg1: $Ingredient_, arg2: $Holder_<any>): void;
        constructor(enabledFeatures: $FeatureFlagSet);
        get enabledFeatures(): $FeatureFlagSet;
    }
    export class $PotionContents extends $Record {
        is(potion: $Holder_<$Potion>): boolean;
        static getColorOptional(effects: $Iterable_<$MobEffectInstance>): $OptionalInt;
        customColor(): (number) | undefined;
        customEffects(): $List<$MobEffectInstance>;
        getAllEffects(): $Iterable<$MobEffectInstance>;
        forEachEffect(action: $Consumer_<$MobEffectInstance>): void;
        addPotionTooltip(tooltipAdder: $Consumer_<$Component>, durationFactor: number, ticksPerSecond: number): void;
        static addPotionTooltip(effects: $Iterable_<$MobEffectInstance>, tooltipAdder: $Consumer_<$Component>, durationFactor: number, ticksPerSecond: number): void;
        withPotion(potion: $Holder_<$Potion>): $PotionContents;
        hasEffects(): boolean;
        potion(): ($Holder<$Potion>) | undefined;
        static getColor(potion: $Holder_<$Potion>): number;
        getColor(): number;
        static getColor(effects: $Iterable_<$MobEffectInstance>): number;
        withEffectAdded(effect: $MobEffectInstance): $PotionContents;
        static createItemStack(item: $Item_, potion: $Holder_<$Potion>): $ItemStack;
        static CODEC: $Codec<$PotionContents>;
        static EMPTY: $PotionContents;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PotionContents>;
        constructor(potion: $Holder_<$Potion>);
        constructor(potion: ($Holder_<$Potion>) | undefined, customColor: (number) | undefined, customEffects: $List_<$MobEffectInstance>);
        get allEffects(): $Iterable<$MobEffectInstance>;
    }
    /**
     * Values that may be interpreted as {@link $PotionContents}.
     */
    export type $PotionContents_ = { potion?: ($Holder_<$Potion>) | undefined, customEffects?: $List_<$MobEffectInstance>, customColor?: (number) | undefined,  } | [potion?: ($Holder_<$Potion>) | undefined, customEffects?: $List_<$MobEffectInstance>, customColor?: (number) | undefined, ];
    /**
     * Defines all of the potion types registered by Minecraft itself.
     * @see net.minecraft.core.Registry#POTION
     */
    export class $Potions {
        static bootstrap(registry: $Registry<$Potion_>): $Holder<$Potion>;
        static SLOWNESS: $Holder<$Potion>;
        static INVISIBILITY: $Holder<$Potion>;
        static STRONG_REGENERATION: $Holder<$Potion>;
        static SLOW_FALLING: $Holder<$Potion>;
        static STRONG_SWIFTNESS: $Holder<$Potion>;
        static LONG_WATER_BREATHING: $Holder<$Potion>;
        static LEAPING: $Holder<$Potion>;
        static WEAKNESS: $Holder<$Potion>;
        static LONG_NIGHT_VISION: $Holder<$Potion>;
        static LUCK: $Holder<$Potion>;
        static FIRE_RESISTANCE: $Holder<$Potion>;
        static LONG_SLOW_FALLING: $Holder<$Potion>;
        static WIND_CHARGED: $Holder<$Potion>;
        static LONG_FIRE_RESISTANCE: $Holder<$Potion>;
        static WATER_BREATHING: $Holder<$Potion>;
        static OOZING: $Holder<$Potion>;
        static LONG_LEAPING: $Holder<$Potion>;
        static STRONG_TURTLE_MASTER: $Holder<$Potion>;
        static LONG_WEAKNESS: $Holder<$Potion>;
        static HARMING: $Holder<$Potion>;
        static STRONG_POISON: $Holder<$Potion>;
        static SWIFTNESS: $Holder<$Potion>;
        static WATER: $Holder<$Potion>;
        static LONG_POISON: $Holder<$Potion>;
        static TURTLE_MASTER: $Holder<$Potion>;
        static AWKWARD: $Holder<$Potion>;
        static REGENERATION: $Holder<$Potion>;
        static INFESTED: $Holder<$Potion>;
        static WEAVING: $Holder<$Potion>;
        static STRENGTH: $Holder<$Potion>;
        static MUNDANE: $Holder<$Potion>;
        static HEALING: $Holder<$Potion>;
        static LONG_SWIFTNESS: $Holder<$Potion>;
        static STRONG_LEAPING: $Holder<$Potion>;
        static STRONG_HEALING: $Holder<$Potion>;
        static LONG_STRENGTH: $Holder<$Potion>;
        static LONG_REGENERATION: $Holder<$Potion>;
        static POISON: $Holder<$Potion>;
        static STRONG_HARMING: $Holder<$Potion>;
        static STRONG_STRENGTH: $Holder<$Potion>;
        static LONG_SLOWNESS: $Holder<$Potion>;
        static LONG_TURTLE_MASTER: $Holder<$Potion>;
        static THICK: $Holder<$Potion>;
        static NIGHT_VISION: $Holder<$Potion>;
        static STRONG_SLOWNESS: $Holder<$Potion>;
        static LONG_INVISIBILITY: $Holder<$Potion>;
        constructor();
    }
    export class $PotionBrewing implements $PotionBrewingAccessor {
        /**
         * @deprecated
         */
        static bootstrap(enabledFeatures: $FeatureFlagSet): $PotionBrewing;
        static bootstrap(arg0: $FeatureFlagSet, arg1: $RegistryAccess): $PotionBrewing;
        mix(potion: $ItemStack_, potionItem: $ItemStack_): $ItemStack;
        isInput(stack: $ItemStack_): boolean;
        hasMix(reagent: $ItemStack_, potionItem: $ItemStack_): boolean;
        isBrewablePotion(potion: $Holder_<$Potion>): boolean;
        isPotionIngredient(stack: $ItemStack_): boolean;
        hasPotionMix(reagent: $ItemStack_, potionItem: $ItemStack_): boolean;
        hasContainerMix(reagent: $ItemStack_, potionItem: $ItemStack_): boolean;
        static addVanillaMixes(builder: $PotionBrewing$Builder): void;
        isIngredient(stack: $ItemStack_): boolean;
        getRecipes(): $List<$IBrewingRecipe>;
        isContainerIngredient(stack: $ItemStack_): boolean;
        create$isContainer(stack: $ItemStack_): boolean;
        create$getPotionMixes(): $List<$PotionBrewing$Mix<$Potion>>;
        create$getContainerMixes(): $List<$PotionBrewing$Mix<$Item>>;
        containerMixes: $List<$PotionBrewing$Mix<$Item>>;
        containers: $List<$Ingredient>;
        static BREWING_TIME_SECONDS: number;
        potionMixes: $List<$PotionBrewing$Mix<$Potion>>;
        static EMPTY: $PotionBrewing;
        constructor(containers: $List_<$Ingredient_>, potionMixes: $List_<$PotionBrewing$Mix_<$Potion_>>, containerMixes: $List_<$PotionBrewing$Mix_<$Item_>>);
        constructor(arg0: $List_<$Ingredient_>, arg1: $List_<$PotionBrewing$Mix_<$Potion_>>, arg2: $List_<$PotionBrewing$Mix_<$Item_>>, arg3: $List_<$IBrewingRecipe>);
        get recipes(): $List<$IBrewingRecipe>;
    }
    export class $PotionBrewing$Mix<T> extends $Record {
        from(): $Holder<T>;
        to(): $Holder<T>;
        ingredient(): $Ingredient;
        constructor(from: $Holder_<T>, ingredient: $Ingredient_, to: $Holder_<T>);
    }
    /**
     * Values that may be interpreted as {@link $PotionBrewing$Mix}.
     */
    export type $PotionBrewing$Mix_<T> = { to?: $Holder_<any>, ingredient?: $Ingredient_, from?: $Holder_<any>,  } | [to?: $Holder_<any>, ingredient?: $Ingredient_, from?: $Holder_<any>, ];
    export interface $Potion extends RegistryMarked<RegistryTypes.PotionTag, RegistryTypes.Potion> {}
    /**
     * Defines a type of potion in the game. These are used to associate one or more effects with items such as the bottled potion or the tipped arrows.
     */
    export class $Potion implements $FeatureElement {
        static getName(potion: ($Holder_<$Potion>) | undefined, descriptionId: string): string;
        /**
         * Checks if the potion contains any instant effects such as instant health or instant damage.
         * @return Whether the potion contained an instant effect.
         */
        hasInstantEffects(): boolean;
        /**
         * Gets the base effects applied by the potion.
         * @return The effects applied by the potion.
         */
        getEffects(): $List<$MobEffectInstance>;
        requiredFeatures(): $FeatureFlagSet;
        requiredFeatures(...requiredFeatures: $FeatureFlag[]): $Potion;
        isEnabled(enabledFeatures: $FeatureFlagSet): boolean;
        static CODEC: $Codec<$Holder<$Potion>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$Potion>>;
        constructor(...effects: $MobEffectInstance[]);
        constructor(name: string | null, ...effects: $MobEffectInstance[]);
        get effects(): $List<$MobEffectInstance>;
    }
    /**
     * Values that may be interpreted as {@link $Potion}.
     */
    export type $Potion_ = RegistryTypes.Potion;
}
