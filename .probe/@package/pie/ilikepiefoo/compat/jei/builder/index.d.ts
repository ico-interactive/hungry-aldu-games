import { $IRecipeLayoutBuilder } from "@package/mezz/jei/api/gui/builder";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $IFocusGroup, $RecipeType } from "@package/mezz/jei/api/recipe";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $IDrawable } from "@package/mezz/jei/api/gui/drawable";
import { $IJeiHelpers } from "@package/mezz/jei/api/helpers";
import { $IRecipeSlotsView_, $IRecipeSlotsView } from "@package/mezz/jei/api/gui/ingredient";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $List, $List_ } from "@package/java/util";
import { $IRecipeCategory } from "@package/mezz/jei/api/recipe/category";

declare module "@package/pie/ilikepiefoo/compat/jei/builder" {
    export class $RecipeCategoryBuilder$IsRecipeHandledByCategory<T> {
    }
    export interface $RecipeCategoryBuilder$IsRecipeHandledByCategory<T> {
        isHandled(arg0: T): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RecipeCategoryBuilder$IsRecipeHandledByCategory}.
     */
    export type $RecipeCategoryBuilder$IsRecipeHandledByCategory_<T> = ((arg0: T) => boolean);
    export class $RecipeCategoryBuilder$TooltipHandler<T> {
    }
    export interface $RecipeCategoryBuilder$TooltipHandler<T> {
        getTooltipStrings(arg0: T, arg1: $IRecipeSlotsView_, arg2: number, arg3: number): $List<$Component>;
    }
    /**
     * Values that may be interpreted as {@link $RecipeCategoryBuilder$TooltipHandler}.
     */
    export type $RecipeCategoryBuilder$TooltipHandler_<T> = ((arg0: T, arg1: $IRecipeSlotsView, arg2: number, arg3: number) => $List_<$Component_>);
    export class $RecipeCategoryBuilder$SetRecipeHandler<T> {
    }
    export interface $RecipeCategoryBuilder$SetRecipeHandler<T> {
        setRecipe(arg0: $IRecipeLayoutBuilder, arg1: T, arg2: $IFocusGroup): void;
    }
    /**
     * Values that may be interpreted as {@link $RecipeCategoryBuilder$SetRecipeHandler}.
     */
    export type $RecipeCategoryBuilder$SetRecipeHandler_<T> = ((arg0: $IRecipeLayoutBuilder, arg1: T, arg2: $IFocusGroup) => void);
    export class $RecipeCategoryWrapperBuilder<T> extends $RecipeCategoryBuilder<T> {
        getSourceCategory(): $IRecipeCategory<T>;
        constructor(arg0: $RecipeType<T>, arg1: $IJeiHelpers, arg2: $IRecipeCategory<T>);
        get sourceCategory(): $IRecipeCategory<T>;
    }
    export class $RecipeCategoryBuilder$GetRegisterName<T> {
    }
    export interface $RecipeCategoryBuilder$GetRegisterName<T> {
        getRegistryName(arg0: T): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $RecipeCategoryBuilder$GetRegisterName}.
     */
    export type $RecipeCategoryBuilder$GetRegisterName_<T> = ((arg0: T) => $ResourceLocation_);
    export class $RecipeCategoryBuilder$DrawHandler<T> {
    }
    export interface $RecipeCategoryBuilder$DrawHandler<T> {
        draw(arg0: T, arg1: $IRecipeSlotsView_, arg2: $GuiGraphics, arg3: number, arg4: number): void;
    }
    /**
     * Values that may be interpreted as {@link $RecipeCategoryBuilder$DrawHandler}.
     */
    export type $RecipeCategoryBuilder$DrawHandler_<T> = ((arg0: T, arg1: $IRecipeSlotsView, arg2: $GuiGraphics, arg3: number, arg4: number) => void);
    export class $RecipeCategoryBuilder$InputHandler<T> {
    }
    export interface $RecipeCategoryBuilder$InputHandler<T> {
        handleInput(arg0: T, arg1: number, arg2: number, arg3: $InputConstants$Key): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RecipeCategoryBuilder$InputHandler}.
     */
    export type $RecipeCategoryBuilder$InputHandler_<T> = ((arg0: T, arg1: number, arg2: number, arg3: $InputConstants$Key) => boolean);
    export class $RecipeCategoryBuilder<T> {
        setWidth(arg0: number): $RecipeCategoryBuilder<T>;
        setHeight(arg0: number): $RecipeCategoryBuilder<T>;
        icon(arg0: $IDrawable): $RecipeCategoryBuilder<T>;
        getWidth(): number;
        getHeight(): number;
        onInput(arg0: $RecipeCategoryBuilder$InputHandler_<T>): $RecipeCategoryBuilder<T>;
        getJeiHelpers(): $IJeiHelpers;
        getRecipeType(): $RecipeType<T>;
        background(arg0: $IDrawable): $RecipeCategoryBuilder<T>;
        title(arg0: $Component_): $RecipeCategoryBuilder<T>;
        registryName(arg0: $RecipeCategoryBuilder$GetRegisterName_<T>): $RecipeCategoryBuilder<T>;
        getSetRecipeHandler(): $RecipeCategoryBuilder$SetRecipeHandler<T>;
        setSetRecipeHandler(arg0: $RecipeCategoryBuilder$SetRecipeHandler_<T>): $RecipeCategoryBuilder<T>;
        getCategoryBackground(): $IDrawable;
        withTooltip(arg0: $RecipeCategoryBuilder$TooltipHandler_<T>): $RecipeCategoryBuilder<T>;
        setIsRecipeHandledByCategory(arg0: $RecipeCategoryBuilder$IsRecipeHandledByCategory_<T>): $RecipeCategoryBuilder<T>;
        getIsRecipeHandledByCategory(): $RecipeCategoryBuilder$IsRecipeHandledByCategory<T>;
        setDrawHandler(arg0: $RecipeCategoryBuilder$DrawHandler_<T>): $RecipeCategoryBuilder<T>;
        getInputHandler(): $RecipeCategoryBuilder$InputHandler<T>;
        isRecipeHandled(arg0: $RecipeCategoryBuilder$IsRecipeHandledByCategory_<T>): $RecipeCategoryBuilder<T>;
        getGetRegisterName(): $RecipeCategoryBuilder$GetRegisterName<T>;
        getCategoryIcon(): $IDrawable;
        getCategoryTitle(): $Component;
        getDrawHandler(): $RecipeCategoryBuilder$DrawHandler<T>;
        setGetRegisterName(arg0: $RecipeCategoryBuilder$GetRegisterName_<T>): $RecipeCategoryBuilder<T>;
        handleLookup(arg0: $RecipeCategoryBuilder$SetRecipeHandler_<T>): $RecipeCategoryBuilder<T>;
        getTooltipHandler(): $RecipeCategoryBuilder$TooltipHandler<T>;
        setInputHandler(arg0: $RecipeCategoryBuilder$InputHandler_<T>): $RecipeCategoryBuilder<T>;
        setTooltipHandler(arg0: $RecipeCategoryBuilder$TooltipHandler_<T>): $RecipeCategoryBuilder<T>;
        constructor(arg0: $RecipeType<T>, arg1: $IJeiHelpers);
        get jeiHelpers(): $IJeiHelpers;
        get recipeType(): $RecipeType<T>;
        get categoryBackground(): $IDrawable;
        get categoryIcon(): $IDrawable;
        get categoryTitle(): $Component;
    }
}
