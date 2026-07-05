import { $IVanillaCategoryExtensionRegistration, $IRecipeCategoryRegistration, $IRecipeRegistration, $ISubtypeRegistration, $IRecipeCatalystRegistration, $IGuiHandlerRegistration, $IAdvancedRegistration, $IModIngredientRegistration, $IRecipeTransferRegistration } from "@package/mezz/jei/api/registration";
import { $Consumer_ } from "@package/java/util/function";
import { $RecipeType } from "@package/mezz/jei/api/recipe";
import { $CustomJSRecipe, $CustomRecipeCategory, $CustomJSRecipe$CustomRecipeListBuilder, $CustomRecipeCategoryDecorator$DrawDecorator_, $CustomRecipeCategoryDecorator, $CustomRecipeCategoryDecorator$TooltipDecorator_ } from "@package/pie/ilikepiefoo/compat/jei/impl";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $IJeiHelpers } from "@package/mezz/jei/api/helpers";
import { $Record, $Object } from "@package/java/lang";
import { $List, $Map, $List_ } from "@package/java/util";
import { $RecipeCategoryBuilder, $RecipeCategoryWrapperBuilder } from "@package/pie/ilikepiefoo/compat/jei/builder";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $IRecipeCategory } from "@package/mezz/jei/api/recipe/category";
import { $IJeiRuntime } from "@package/mezz/jei/api/runtime";

declare module "@package/pie/ilikepiefoo/compat/jei/events" {
    export class $RegisterVanillaCategoryExtensionsEventJS extends $JEIEventJS {
        data: $IVanillaCategoryExtensionRegistration;
        static JEI_HELPERS: $IJeiHelpers;
        static overriddenRecipeTypes: $Map<$ResourceLocation, $RecipeType<any>>;
        static customRecipeTypes: $Map<$ResourceLocation, $RecipeType<$CustomJSRecipe>>;
        constructor(arg0: $IVanillaCategoryExtensionRegistration);
    }
    export class $RegisterIngredientsEventJS extends $JEIEventJS {
        data: $IModIngredientRegistration;
        static JEI_HELPERS: $IJeiHelpers;
        static overriddenRecipeTypes: $Map<$ResourceLocation, $RecipeType<any>>;
        static customRecipeTypes: $Map<$ResourceLocation, $RecipeType<$CustomJSRecipe>>;
        constructor(arg0: $IModIngredientRegistration);
    }
    export class $OnRuntimeAvailableEventJS extends $JEIEventJS {
        data: $IJeiRuntime;
        static JEI_HELPERS: $IJeiHelpers;
        static overriddenRecipeTypes: $Map<$ResourceLocation, $RecipeType<any>>;
        static customRecipeTypes: $Map<$ResourceLocation, $RecipeType<$CustomJSRecipe>>;
        constructor(arg0: $IJeiRuntime);
    }
    export class $RegisterRecipeTransferHandlersEventJS extends $Record implements $KubeEvent {
        data(): $IRecipeTransferRegistration;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(data: $IRecipeTransferRegistration);
    }
    /**
     * Values that may be interpreted as {@link $RegisterRecipeTransferHandlersEventJS}.
     */
    export type $RegisterRecipeTransferHandlersEventJS_ = { data?: $IRecipeTransferRegistration,  } | [data?: $IRecipeTransferRegistration, ];
    export class $JEIEventJS implements $KubeEvent {
        static removeOverriddenRecipeType(arg0: $ResourceLocation_): void;
        static getCustomRecipeType(arg0: $ResourceLocation_): $RecipeType<$CustomJSRecipe>;
        static clearCustomRecipeTypes(): void;
        static getOverriddenRecipeType(arg0: $ResourceLocation_): $RecipeType<never>;
        static removeCustomRecipeType(arg0: $ResourceLocation_): void;
        static clearOverriddenRecipeTypes(): void;
        static getOrCreateCustomOverriddenRecipeType<T>(arg0: $ResourceLocation_, arg1: $RecipeType<T>): $RecipeType<T>;
        static getOrCreateCustomRecipeType(arg0: $ResourceLocation_): $RecipeType<$CustomJSRecipe>;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        static JEI_HELPERS: $IJeiHelpers;
        static overriddenRecipeTypes: $Map<$ResourceLocation, $RecipeType<any>>;
        static customRecipeTypes: $Map<$ResourceLocation, $RecipeType<$CustomJSRecipe>>;
        constructor();
    }
    export class $RegisterRecipeCatalystsEventJS extends $JEIEventJS {
        data: $IRecipeCatalystRegistration;
        static JEI_HELPERS: $IJeiHelpers;
        static overriddenRecipeTypes: $Map<$ResourceLocation, $RecipeType<any>>;
        static customRecipeTypes: $Map<$ResourceLocation, $RecipeType<$CustomJSRecipe>>;
        constructor(arg0: $IRecipeCatalystRegistration);
    }
    export class $RegisterItemSubtypeEventJS extends $JEIEventJS {
        data: $ISubtypeRegistration;
        static JEI_HELPERS: $IJeiHelpers;
        static overriddenRecipeTypes: $Map<$ResourceLocation, $RecipeType<any>>;
        static customRecipeTypes: $Map<$ResourceLocation, $RecipeType<$CustomJSRecipe>>;
        constructor(arg0: $ISubtypeRegistration);
    }
    export class $RegisterRecipesEventJS extends $JEIEventJS {
        register<T>(arg0: $RecipeType<T>, arg1: $List_<T>): void;
        custom(arg0: $ResourceLocation_): $CustomJSRecipe$CustomRecipeListBuilder;
        data: $IRecipeRegistration;
        static JEI_HELPERS: $IJeiHelpers;
        customRecipeListBuilders: $List<$CustomJSRecipe$CustomRecipeListBuilder>;
        static overriddenRecipeTypes: $Map<$ResourceLocation, $RecipeType<any>>;
        static customRecipeTypes: $Map<$ResourceLocation, $RecipeType<$CustomJSRecipe>>;
        constructor(arg0: $IRecipeRegistration);
    }
    export class $RegisterFluidSubtypeEventJS extends $JEIEventJS {
        data: $ISubtypeRegistration;
        static JEI_HELPERS: $IJeiHelpers;
        static overriddenRecipeTypes: $Map<$ResourceLocation, $RecipeType<any>>;
        static customRecipeTypes: $Map<$ResourceLocation, $RecipeType<$CustomJSRecipe>>;
        constructor(arg0: $ISubtypeRegistration);
    }
    export class $RegisterAdvancedEventJS extends $JEIEventJS {
        categoryDecorator<T>(arg0: $CustomRecipeCategoryDecorator$DrawDecorator_<T>): $CustomRecipeCategoryDecorator<T>;
        categoryDecorator<T>(arg0: $CustomRecipeCategoryDecorator$DrawDecorator_<T>, arg1: $CustomRecipeCategoryDecorator$TooltipDecorator_<T>): $CustomRecipeCategoryDecorator<T>;
        data: $IAdvancedRegistration;
        static JEI_HELPERS: $IJeiHelpers;
        static overriddenRecipeTypes: $Map<$ResourceLocation, $RecipeType<any>>;
        static customRecipeTypes: $Map<$ResourceLocation, $RecipeType<$CustomJSRecipe>>;
        constructor(arg0: $IAdvancedRegistration);
    }
    export class $RegisterGUIHandlersEventJS extends $JEIEventJS {
        data: $IGuiHandlerRegistration;
        static JEI_HELPERS: $IJeiHelpers;
        static overriddenRecipeTypes: $Map<$ResourceLocation, $RecipeType<any>>;
        static customRecipeTypes: $Map<$ResourceLocation, $RecipeType<$CustomJSRecipe>>;
        constructor(arg0: $IGuiHandlerRegistration);
    }
    export class $RegisterCategoriesEventJS extends $JEIEventJS {
        wrap<T>(arg0: $RecipeType<T>, arg1: $IRecipeCategory<T>, arg2: $Consumer_<$RecipeCategoryWrapperBuilder<T>>): $CustomRecipeCategory<T>;
        register<T>(arg0: $RecipeType<T>, arg1: $Consumer_<$RecipeCategoryBuilder<T>>): $CustomRecipeCategory<T>;
        custom(arg0: $ResourceLocation_, arg1: $Consumer_<$RecipeCategoryBuilder<$CustomJSRecipe>>): $CustomRecipeCategory<never>;
        data: $IRecipeCategoryRegistration;
        static JEI_HELPERS: $IJeiHelpers;
        static overriddenRecipeTypes: $Map<$ResourceLocation, $RecipeType<any>>;
        static customRecipeTypes: $Map<$ResourceLocation, $RecipeType<$CustomJSRecipe>>;
        constructor(arg0: $IRecipeCategoryRegistration);
    }
}
