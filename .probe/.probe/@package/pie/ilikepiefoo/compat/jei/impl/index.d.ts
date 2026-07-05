import { $IRecipeCategoryDecorator } from "@package/mezz/jei/api/recipe/category/extensions";
import { $Codec } from "@package/com/mojang/serialization";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $IDrawable } from "@package/mezz/jei/api/gui/drawable";
import { $ICodecHelper } from "@package/mezz/jei/api/helpers";
import { $IRecipeSlotsView_, $IRecipeSlotDrawable, $IRecipeSlotsView } from "@package/mezz/jei/api/gui/ingredient";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";
import { $List, $List_ } from "@package/java/util";
import { $IRecipeCategory } from "@package/mezz/jei/api/recipe/category";
import { $IRecipeLayoutBuilder, $ITooltipBuilder } from "@package/mezz/jei/api/gui/builder";
import { $IFocusGroup, $IRecipeManager, $RecipeType } from "@package/mezz/jei/api/recipe";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record, $Object } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $IRecipeExtrasBuilder } from "@package/mezz/jei/api/gui/widgets";
import { $RecipeCategoryBuilder } from "@package/pie/ilikepiefoo/compat/jei/builder";

declare module "@package/pie/ilikepiefoo/compat/jei/impl" {
    export class $CustomJSRecipe {
        getData(): $Object;
        getRecipeType(): $RecipeType<$CustomJSRecipe>;
        setRecipeData(arg0: $Object): void;
        getRecipeData(): $Object;
        constructor(arg0: $Object, arg1: $RecipeType<$CustomJSRecipe>);
        get data(): $Object;
        get recipeType(): $RecipeType<$CustomJSRecipe>;
    }
    export class $CustomRecipeCategoryDecorator$DrawDecorator<R> {
    }
    export interface $CustomRecipeCategoryDecorator$DrawDecorator<R> {
        decorate(arg0: R, arg1: $IRecipeCategory<R>, arg2: $IRecipeSlotsView_, arg3: $GuiGraphics, arg4: number, arg5: number): void;
    }
    /**
     * Values that may be interpreted as {@link $CustomRecipeCategoryDecorator$DrawDecorator}.
     */
    export type $CustomRecipeCategoryDecorator$DrawDecorator_<R> = ((arg0: R, arg1: $IRecipeCategory<R>, arg2: $IRecipeSlotsView, arg3: $GuiGraphics, arg4: number, arg5: number) => void);
    export class $CustomRecipeCategoryDecorator$TooltipDecorator<R> {
    }
    export interface $CustomRecipeCategoryDecorator$TooltipDecorator<R> {
        decorate(arg0: $List_<$Component_>, arg1: R, arg2: $IRecipeCategory<R>, arg3: $IRecipeSlotsView_, arg4: number, arg5: number): $List<$Component>;
    }
    /**
     * Values that may be interpreted as {@link $CustomRecipeCategoryDecorator$TooltipDecorator}.
     */
    export type $CustomRecipeCategoryDecorator$TooltipDecorator_<R> = ((arg0: $List<$Component>, arg1: R, arg2: $IRecipeCategory<R>, arg3: $IRecipeSlotsView, arg4: number, arg5: number) => $List_<$Component_>);
    export class $CustomRecipeCategory<T> implements $IRecipeCategory<T> {
        getIcon(): $IDrawable;
        getWidth(): number;
        getHeight(): number;
        getBackground(): $IDrawable;
        setRecipe(arg0: $IRecipeLayoutBuilder, arg1: T, arg2: $IFocusGroup): void;
        isHandled(arg0: T): boolean;
        getRecipeType(): $RecipeType<T>;
        draw(arg0: T, arg1: $IRecipeSlotsView_, arg2: $GuiGraphics, arg3: number, arg4: number): void;
        getTitle(): $Component;
        getRegistryName(arg0: T): $ResourceLocation;
        handleInput(arg0: T, arg1: number, arg2: number, arg3: $InputConstants$Key): boolean;
        getTooltip(arg0: $ITooltipBuilder, arg1: T, arg2: $IRecipeSlotsView_, arg3: number, arg4: number): void;
        getCodec(arg0: $ICodecHelper, arg1: $IRecipeManager): $Codec<T>;
        needsRecipeBorder(): boolean;
        /**
         * @deprecated
         */
        createRecipeExtras(arg0: $IRecipeExtrasBuilder, arg1: T, arg2: $IRecipeSlotsView_, arg3: $IFocusGroup): void;
        createRecipeExtras(arg0: $IRecipeExtrasBuilder, arg1: T, arg2: $IFocusGroup): void;
        /**
         * @deprecated
         */
        getTooltipStrings(arg0: T, arg1: $IRecipeSlotsView_, arg2: number, arg3: number): $List<$Component>;
        onDisplayedIngredientsUpdate(arg0: T, arg1: $List_<$IRecipeSlotDrawable>, arg2: $IFocusGroup): void;
        constructor(arg0: $RecipeCategoryBuilder<T>);
        get icon(): $IDrawable;
        get width(): number;
        get height(): number;
        get background(): $IDrawable;
        get recipeType(): $RecipeType<T>;
        get title(): $Component;
    }
    export class $CustomJSRecipe$CustomRecipeListBuilder {
        add(arg0: $CustomJSRecipe): $CustomJSRecipe$CustomRecipeListBuilder;
        add(arg0: $Object): $CustomJSRecipe$CustomRecipeListBuilder;
        addAll(arg0: $List_<$Object>): $CustomJSRecipe$CustomRecipeListBuilder;
        getRecipeType(): $RecipeType<$CustomJSRecipe>;
        custom(arg0: $Object): $CustomJSRecipe;
        getRecipes(): $List<$CustomJSRecipe>;
        constructor(arg0: $RecipeType<$CustomJSRecipe>);
        get recipeType(): $RecipeType<$CustomJSRecipe>;
        get recipes(): $List<$CustomJSRecipe>;
    }
    export class $CustomRecipeCategoryDecorator<T> extends $Record implements $IRecipeCategoryDecorator<T> {
        draw(): $CustomRecipeCategoryDecorator$DrawDecorator<T>;
        draw(arg0: T, arg1: $IRecipeCategory<T>, arg2: $IRecipeSlotsView_, arg3: $GuiGraphics, arg4: number, arg5: number): void;
        tooltip(): $CustomRecipeCategoryDecorator$TooltipDecorator<T>;
        decorateTooltips(arg0: $ITooltipBuilder, arg1: T, arg2: $IRecipeCategory<T>, arg3: $IRecipeSlotsView_, arg4: number, arg5: number): void;
        /**
         * @deprecated
         */
        decorateExistingTooltips(arg0: $List_<$Component_>, arg1: T, arg2: $IRecipeCategory<T>, arg3: $IRecipeSlotsView_, arg4: number, arg5: number): $List<$Component>;
        constructor(draw: $CustomRecipeCategoryDecorator$DrawDecorator_<T>, tooltip: $CustomRecipeCategoryDecorator$TooltipDecorator_<T>);
    }
    /**
     * Values that may be interpreted as {@link $CustomRecipeCategoryDecorator}.
     */
    export type $CustomRecipeCategoryDecorator_<T> = { draw?: $CustomRecipeCategoryDecorator$DrawDecorator_<any>, tooltip?: $CustomRecipeCategoryDecorator$TooltipDecorator_<any>,  } | [draw?: $CustomRecipeCategoryDecorator$DrawDecorator_<any>, tooltip?: $CustomRecipeCategoryDecorator$TooltipDecorator_<any>, ];
}
