import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CraftingBookCategory_, $Ingredient_, $CraftingRecipe } from "@package/net/minecraft/world/item/crafting";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $List, $List_ } from "@package/java/util";

declare module "@package/mezz/jei/api/recipe/vanilla" {
    export class $IVanillaRecipeFactory {
    }
    export interface $IVanillaRecipeFactory {
        createShapedRecipeBuilder(arg0: $CraftingBookCategory_, arg1: $List_<$ItemStack_>): $IJeiShapedRecipeBuilder;
        createGrindstoneRecipe(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>, arg2: $List_<$ItemStack_>, arg3: number, arg4: number, arg5: $ResourceLocation_): $IJeiGrindstoneRecipe;
        /**
         * @deprecated
         */
        createBrewingRecipe(arg0: $List_<$ItemStack_>, arg1: $ItemStack_, arg2: $ItemStack_): $IJeiBrewingRecipe;
        /**
         * @deprecated
         */
        createBrewingRecipe(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>, arg2: $ItemStack_): $IJeiBrewingRecipe;
        createBrewingRecipe(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>, arg2: $ItemStack_, arg3: $ResourceLocation_): $IJeiBrewingRecipe;
        createBrewingRecipe(arg0: $List_<$ItemStack_>, arg1: $ItemStack_, arg2: $ItemStack_, arg3: $ResourceLocation_): $IJeiBrewingRecipe;
        createAnvilRecipe(arg0: $ItemStack_, arg1: $List_<$ItemStack_>, arg2: $List_<$ItemStack_>, arg3: $ResourceLocation_): $IJeiAnvilRecipe;
        createAnvilRecipe(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>, arg2: $List_<$ItemStack_>, arg3: $ResourceLocation_): $IJeiAnvilRecipe;
        /**
         * @deprecated
         */
        createAnvilRecipe(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>, arg2: $List_<$ItemStack_>): $IJeiAnvilRecipe;
        /**
         * @deprecated
         */
        createAnvilRecipe(arg0: $ItemStack_, arg1: $List_<$ItemStack_>, arg2: $List_<$ItemStack_>): $IJeiAnvilRecipe;
    }
    export class $IJeiShapedRecipeBuilder {
    }
    export interface $IJeiShapedRecipeBuilder {
        group(arg0: string): $IJeiShapedRecipeBuilder;
        pattern(arg0: string): $IJeiShapedRecipeBuilder;
        build(): $CraftingRecipe;
        define(arg0: string, arg1: $Ingredient_): $IJeiShapedRecipeBuilder;
    }
    export class $IJeiGrindstoneRecipe {
    }
    export interface $IJeiGrindstoneRecipe {
        getOutputs(): $List<$ItemStack>;
        getMaxXpReward(): number;
        isOutputRenderOnly(): boolean;
        getTopInputs(): $List<$ItemStack>;
        getBottomInputs(): $List<$ItemStack>;
        getMinXpReward(): number;
        getUid(): $ResourceLocation;
        get outputs(): $List<$ItemStack>;
        get maxXpReward(): number;
        get outputRenderOnly(): boolean;
        get topInputs(): $List<$ItemStack>;
        get bottomInputs(): $List<$ItemStack>;
        get minXpReward(): number;
        get uid(): $ResourceLocation;
    }
    export class $IJeiBrewingRecipe {
    }
    export interface $IJeiBrewingRecipe {
        getBrewingSteps(): number;
        getPotionInputs(): $List<$ItemStack>;
        getPotionOutput(): $ItemStack;
        getUid(): $ResourceLocation;
        getIngredients(): $List<$ItemStack>;
        get brewingSteps(): number;
        get potionInputs(): $List<$ItemStack>;
        get potionOutput(): $ItemStack;
        get uid(): $ResourceLocation;
        get ingredients(): $List<$ItemStack>;
    }
    export class $IJeiAnvilRecipe {
    }
    export interface $IJeiAnvilRecipe {
        getOutputs(): $List<$ItemStack>;
        getLeftInputs(): $List<$ItemStack>;
        getRightInputs(): $List<$ItemStack>;
        getUid(): $ResourceLocation;
        get outputs(): $List<$ItemStack>;
        get leftInputs(): $List<$ItemStack>;
        get rightInputs(): $List<$ItemStack>;
        get uid(): $ResourceLocation;
    }
}
