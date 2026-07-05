import { $TooltipRequirements_, $ItemTooltipData } from "@package/dev/latvian/mods/kubejs/text/tooltip";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Ingredient_, $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $LivingEntity, $Entity, $EquipmentSlotGroup_ } from "@package/net/minecraft/world/entity";
import { $ItemTossEvent } from "@package/net/neoforged/neoforge/event/entity/item";
import { $AttributeModifier, $AttributeModifier_, $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $UUID_, $Map, $Set, $Spliterator, $Iterator, $List, $Map_, $List_, $Collection } from "@package/java/util";
import { $KubePlayerEvent } from "@package/dev/latvian/mods/kubejs/player";
import { $KubeStartupEvent, $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $ClampedItemPropertyFunction_ } from "@package/net/minecraft/client/renderer/item";
import { $PlayerInteractEvent$RightClickItem, $PlayerEvent$ItemSmeltedEvent, $PlayerInteractEvent$LeftClickEmpty, $PlayerInteractEvent$EntityInteract, $PlayerDestroyItemEvent, $PlayerEvent$ItemCraftedEvent, $ItemEntityPickupEvent$Post, $ItemEntityPickupEvent$Pre } from "@package/net/neoforged/neoforge/event/entity/player";
import { $Unit_ } from "@package/net/minecraft/util";
import { $TextActionBuilder } from "@package/dev/latvian/mods/kubejs/text/action";
import { $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $InteractionHand, $InteractionHand_, $Container } from "@package/net/minecraft/world";
import { $Supplier_, $ToIntBiFunction_, $Consumer_, $Predicate_, $Predicate, $Function_, $Supplier, $ToIntFunction_ } from "@package/java/util/function";
import { $RegistryAccess, $Registry, $Holder_ } from "@package/net/minecraft/core";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $TickDuration_, $Lazy } from "@package/dev/latvian/mods/kubejs/util";
import { $ItemEnchantments } from "@package/net/minecraft/world/item/enchantment";
import { DataComponentTypes } from "@special/types";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $DataComponentType_, $DataComponentMap, $DataComponentMap_, $DataComponentPatch_, $DataComponentPatch } from "@package/net/minecraft/core/component";
import { $Iterable, $Record, $Object } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Item_, $Item, $UseAnim_, $Item$Properties, $Rarity_, $JukeboxSong, $TooltipFlag, $ArmorMaterial, $DyeColor_, $Tier_, $ItemStack_, $ItemStack, $Instrument, $ArmorItem$Type_, $Tier, $ArmorMaterial$Layer } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ItemAttributeModifiers, $Fireworks_, $Tool_, $Tool, $FireworkExplosion_, $ItemAttributeModifiers$Entry_ } from "@package/net/minecraft/world/item/component";
import { $KubeColor, $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $MobEffectInstance, $MobEffect_ } from "@package/net/minecraft/world/effect";
import { $Interner } from "@package/com/google/common/collect";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $KubeRayTraceResult, $KubeEntityEvent } from "@package/dev/latvian/mods/kubejs/entity";
import { $Stream } from "@package/java/util/stream";
import { $FoodProperties, $FoodProperties_ } from "@package/net/minecraft/world/food";
import { $PotionContents_, $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ModelledBuilderBase, $BuilderBase } from "@package/dev/latvian/mods/kubejs/registry";
import { $ComponentFunctions, $ItemComponentFunctions } from "@package/dev/latvian/mods/kubejs/component";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $InventoryKJS, $IngredientSupplierKJS } from "@package/dev/latvian/mods/kubejs/core";
export * as custom from "@package/dev/latvian/mods/kubejs/item/custom";
export * as creativetab from "@package/dev/latvian/mods/kubejs/item/creativetab";

declare module "@package/dev/latvian/mods/kubejs/item" {
    export class $ItemClickedKubeEvent implements $KubePlayerEvent {
        /**
         * The ray trace result of the click.
         */
        getTarget(): $KubeRayTraceResult;
        /**
         * The item that was clicked with.
         */
        getItem(): $ItemStack;
        /**
         * The hand that the item was clicked with.
         */
        getHand(): $InteractionHand;
        getPlayer(): $Player;
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
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
        getEntity(): $LivingEntity;
        constructor(player: $Player, hand: $InteractionHand_, item: $ItemStack_);
        get target(): $KubeRayTraceResult;
        get item(): $ItemStack;
        get hand(): $InteractionHand;
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
        get entity(): $LivingEntity;
    }
    export class $ItemBuilder$HurtEnemyContext extends $Record {
        getTarget(): $LivingEntity;
        getItem(): $ItemStack;
        getAttacker(): $LivingEntity;
        constructor(getItem: $ItemStack_, getTarget: $LivingEntity, getAttacker: $LivingEntity);
        get target(): $LivingEntity;
        get item(): $ItemStack;
        get attacker(): $LivingEntity;
    }
    /**
     * Values that may be interpreted as {@link $ItemBuilder$HurtEnemyContext}.
     */
    export type $ItemBuilder$HurtEnemyContext_ = { getItem?: $ItemStack_, getTarget?: $LivingEntity, getAttacker?: $LivingEntity,  } | [getItem?: $ItemStack_, getTarget?: $LivingEntity, getAttacker?: $LivingEntity, ];
    export class $FoodBuilder {
        build(): $FoodProperties;
        /**
         * Sets whether the food is always edible.
         */
        alwaysEdible(flag: boolean): $FoodBuilder;
        /**
         * Sets the food is always edible.
         */
        alwaysEdible(): $FoodBuilder;
        /**
         * Sets seconds it takes to eat the food.
         */
        eatSeconds(seconds: number): $FoodBuilder;
        /**
         * Adds an effect to the food. Note that the effect duration is in ticks (20 ticks = 1 second).
         * 
         * @param mobEffectId The id of the effect. Can be either a string or a ResourceLocation.
         * @param duration The duration of the effect in ticks.
         * @param amplifier The amplifier of the effect. 0 means level 1, 1 means level 2, etc.
         * @param probability The probability of the effect being applied. 1 = 100%.
         */
        effect(mobEffectId: $ResourceLocation_, duration: number, amplifier: number, probability: number): $FoodBuilder;
        /**
         * Sets the saturation modifier. Note that the saturation restored is hunger * saturation.
         */
        saturation(s: number): $FoodBuilder;
        /**
         * Sets a callback that is called when the food is eaten.
         * 
         * Note: This is currently not having effect in `ItemEvents.modification`,
         * as firing this callback requires an `ItemBuilder` instance in the `Item`.
         */
        eaten(e: $Consumer_<$FoodEatenKubeEvent>): $FoodBuilder;
        usingConvertsTo(stack: $ItemStack_): $FoodBuilder;
        /**
         * Removes an effect from the food.
         */
        removeEffect(mobEffect: $MobEffect_): $FoodBuilder;
        /**
         * Sets the hunger restored.
         */
        nutrition(h: number): $FoodBuilder;
        /**
         * Sets the food is fast to eat (having half of the eating time).
         */
        fastToEat(): $FoodBuilder;
        constructor();
        constructor(properties: $FoodProperties_);
    }
    export class $ItemCraftedKubeEvent implements $KubePlayerEvent {
        /**
         * The item that was crafted.
         */
        getItem(): $ItemStack;
        /**
         * The inventory that the item was crafted in.
         */
        getInventory(): $InventoryKJS;
        getPlayer(): $Player;
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
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
        getEntity(): $LivingEntity;
        constructor(player: $Player, crafted: $ItemStack_, container: $Container);
        get item(): $ItemStack;
        get inventory(): $InventoryKJS;
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
        get entity(): $LivingEntity;
    }
    export class $ModifyItemTooltipsKubeEvent implements $KubeEvent {
        add(filter: $Ingredient_, text: $List_<$Component_>): void;
        add(filter: $Ingredient_, requirements: $TooltipRequirements_, text: $List_<$Component_>): void;
        modify(filter: $Ingredient_, requirements: $TooltipRequirements_, consumer: $Consumer_<$TextActionBuilder>): void;
        modify(filter: $Ingredient_, consumer: $Consumer_<$TextActionBuilder>): void;
        modifyAll(consumer: $Consumer_<$TextActionBuilder>): void;
        modifyAll(requirements: $TooltipRequirements_, consumer: $Consumer_<$TextActionBuilder>): void;
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
        constructor(callback: $Consumer_<$ItemTooltipData>);
    }
    export class $ItemEntityInteractedKubeEvent implements $KubePlayerEvent {
        /**
         * The entity that was interacted with.
         */
        getTarget(): $Entity;
        /**
         * The item that was used to interact with the entity.
         */
        getItem(): $ItemStack;
        /**
         * The hand that was used to interact with the entity.
         */
        getHand(): $InteractionHand;
        getPlayer(): $Player;
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
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
        getEntity(): $LivingEntity;
        constructor(player: $Player, entity: $Entity, hand: $InteractionHand_, item: $ItemStack_);
        get target(): $Entity;
        get item(): $ItemStack;
        get hand(): $InteractionHand;
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
        get entity(): $LivingEntity;
    }
    export class $ItemStackKey {
        static of(stack: $ItemStack_): $ItemStackKey;
        patch: $DataComponentPatch;
        item: $Item;
        static EMPTY: $ItemStackKey;
        constructor(item: $Item_, patch: $DataComponentPatch_);
    }
    export class $ItemModelPropertiesKubeEvent implements $KubeStartupEvent {
        /**
         * Register a model property for an item. Model properties are used to change the appearance of an item in the world.
         * 
         * More about model properties: https://minecraft.wiki/w/Tutorials/Models#Item_predicates
         */
        register(ingredient: $Ingredient_, overwriteId: $ResourceLocation_, callback: $ClampedItemPropertyFunction_): void;
        /**
         * Register a model property for all items.
         */
        registerAll(overwriteId: $ResourceLocation_, callback: $ClampedItemPropertyFunction_): void;
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
        constructor();
    }
    export class $ItemEnchantmentsWrapper {
        static wrap(from: $Object): $ItemEnchantments;
        static MAP_TYPE: $TypeInfo;
        constructor();
    }
    export class $ItemBuilder$FinishUsingCallback {
    }
    export interface $ItemBuilder$FinishUsingCallback {
        finishUsingItem(itemStack: $ItemStack_, level: $Level_, livingEntity: $LivingEntity): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $ItemBuilder$FinishUsingCallback}.
     */
    export type $ItemBuilder$FinishUsingCallback_ = ((itemStack: $ItemStack, level: $Level, livingEntity: $LivingEntity) => $ItemStack_);
    export class $ItemDroppedKubeEvent implements $KubePlayerEvent {
        /**
         * The item that was dropped.
         */
        getItem(): $ItemStack;
        /**
         * The item entity that was spawned when dropping.
         */
        getItemEntity(): $ItemEntity;
        getPlayer(): $Player;
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
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
        getEntity(): $LivingEntity;
        constructor(player: $Player, entity: $ItemEntity);
        get item(): $ItemStack;
        get itemEntity(): $ItemEntity;
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
        get entity(): $LivingEntity;
    }
    export class $ItemSmeltedKubeEvent implements $KubePlayerEvent {
        /**
         * The item that was smelted.
         */
        getItem(): $ItemStack;
        /**
         * The player that smelted the item.
         */
        getEntity(): $Player;
        getPlayer(): $Player;
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
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
        constructor(player: $Player, smelted: $ItemStack_);
        get item(): $ItemStack;
        get entity(): $Player;
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $ArmorMaterialBuilder extends $BuilderBase<$ArmorMaterial> {
        layers(v: $ArmorMaterial$Layer[]): this;
        enchantmentValue(v: number): this;
        repairIngredient(v: $Supplier_<$Ingredient>): this;
        knockbackResistance(v: number): this;
        toughness(v: number): this;
        equipSound(sound: $Holder_<$SoundEvent>): this;
        defense(v: $Map_<$ArmorItem$Type_, number>): this;
        registryKey: $ResourceKey<$Registry<$ArmorMaterial>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(i: $ResourceLocation_);
    }
    export class $RangedWrapper implements $InventoryKJS {
        kjs$getSlots(): number;
        kjs$extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        kjs$getStackInSlot(slot: number): $ItemStack;
        kjs$insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        kjs$isItemValid(slot: number, stack: $ItemStack_): boolean;
        kjs$isMutable(): boolean;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        kjs$getSlotLimit(slot: number): number;
        getWidth(): number;
        getBlock(level: $Level_): $LevelBlock;
        isEmpty(): boolean;
        count(match: $ItemPredicate_): number;
        count(): number;
        find(): number;
        find(match: $ItemPredicate_): number;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        getHeight(): number;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        asContainer(): $Container;
        setChanged(): void;
        constructor(compose: $InventoryKJS, minSlot: number, maxSlotExclusive: number);
        get width(): number;
        get empty(): boolean;
        get allItems(): $List<$ItemStack>;
        get height(): number;
    }
    export class $ItemStackSet implements $Iterable<$ItemStack> {
        remove(stack: $ItemStack_): void;
        size(): number;
        isEmpty(): boolean;
        add(stack: $ItemStack_): void;
        toArray(): $ItemStack[];
        iterator(): $Iterator<$ItemStack>;
        toList(): $List<$ItemStack>;
        stream(): $Stream<$ItemStack>;
        contains(stack: $ItemStack_): boolean;
        addAll(other: $ItemStackSet): void;
        static merge(first: $ItemStackSet, second: $ItemStackSet): $ItemStackSet;
        forEach(action: $Consumer_<$ItemStack>): void;
        getFirst(): $ItemStack;
        addItem(item: $Item_): void;
        spliterator(): $Spliterator<$ItemStack>;
        constructor(...items: $ItemStack_[]);
        constructor();
        constructor(initialSize: number);
        [Symbol.iterator](): Iterator<$ItemStack>
        get empty(): boolean;
        get first(): $ItemStack;
    }
    export class $ItemTintFunction {
        static wrap(o: $Object): $ItemTintFunction;
        static POTION: $ItemTintFunction;
        static TYPE_INFO: $TypeInfo;
        static BLOCK: $ItemTintFunction;
        static DISPLAY_COLOR_NBT: $ItemTintFunction;
        static MAP: $ItemTintFunction;
    }
    export interface $ItemTintFunction {
        getColor(stack: $ItemStack_, index: number): $KubeColor;
    }
    /**
     * Values that may be interpreted as {@link $ItemTintFunction}.
     */
    export type $ItemTintFunction_ = $ItemTintFunction_[] | string | ((stack: $ItemStack, index: number) => $KubeColor_);
    export class $FoodEatenKubeEvent implements $KubeEntityEvent {
        /**
         * The food that was eaten.
         */
        getItem(): $ItemStack;
        /**
         * The entity that ate the food.
         */
        getEntity(): $Entity;
        getLevel(): $Level;
        getPlayer(): $Player;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
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
        constructor(e: $LivingEntity, is: $ItemStack_);
        get item(): $ItemStack;
        get entity(): $Entity;
        get level(): $Level;
        get player(): $Player;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $ItemBuilder$ReleaseUsingCallback {
    }
    export interface $ItemBuilder$ReleaseUsingCallback {
        releaseUsing(itemStack: $ItemStack_, level: $Level_, user: $LivingEntity, tick: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ItemBuilder$ReleaseUsingCallback}.
     */
    export type $ItemBuilder$ReleaseUsingCallback_ = ((itemStack: $ItemStack, level: $Level, user: $LivingEntity, tick: number) => void);
    export class $ItemTintFunction$Mapped implements $ItemTintFunction {
        getColor(stack: $ItemStack_, index: number): $KubeColor;
        map: $Int2ObjectMap<$ItemTintFunction>;
        constructor();
    }
    export class $MutableToolTier implements $Tier {
        getIncorrectBlocksForDrops(): $TagKey<$Block>;
        getVanillaRepairIngredient(): $Ingredient;
        getUses(): number;
        getEnchantmentValue(): number;
        getAttackDamageBonus(): number;
        setSpeed(f: number): void;
        getSpeed(): number;
        setAttackDamageBonus(f: number): void;
        setUses(i: number): void;
        setEnchantmentValue(i: number): void;
        setRepairIngredient(arg0: $Ingredient_): void;
        setIncorrectBlocksForDropsTag(tag: $ResourceLocation_): void;
        getIncorrectBlocksForDropsTag(): $ResourceLocation;
        createToolProperties(arg0: $TagKey_<$Block>): $Tool;
        parent: $Tier;
        constructor(p: $Tier_);
        get incorrectBlocksForDrops(): $TagKey<$Block>;
        get vanillaRepairIngredient(): $Ingredient;
        set repairIngredient(value: $Ingredient_);
    }
    export class $ItemBuilder$NameCallback {
    }
    export interface $ItemBuilder$NameCallback {
        apply(itemStack: $ItemStack_): $Component;
    }
    /**
     * Values that may be interpreted as {@link $ItemBuilder$NameCallback}.
     */
    export type $ItemBuilder$NameCallback_ = ((itemStack: $ItemStack) => $Component_);
    export class $ItemModificationKubeEvent implements $KubeEvent {
        /**
         * Modifies items matching the given ingredient.
         * 
         * **NOTE**: tag ingredients are not supported at this time.
         */
        modify(arg0: $ItemPredicate_, c: $Consumer_<$ItemModificationKubeEvent$ItemModifications>): void;
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
        constructor();
    }
    export class $ItemHandlerUtils {
        static insertItemStacked(inventory: $InventoryKJS, stack: $ItemStack_, simulate: boolean): $ItemStack;
        static insertItem(dest: $InventoryKJS, stack: $ItemStack_, simulate: boolean): $ItemStack;
        static giveItemToPlayer(player: $Player, stack: $ItemStack_, preferredSlot: number): void;
        constructor();
    }
    export class $KubeJSItemStackData {
        chance: number;
        constructor();
    }
    export class $JukeboxSongBuilder extends $BuilderBase<$JukeboxSong> {
        description(description: $Component_): this;
        song(sound: $Holder_<$SoundEvent>, length: number): this;
        comparatorOutput(comparatorOutput: number): this;
        registryKey: $ResourceKey<$Registry<$JukeboxSong>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(id: $ResourceLocation_);
    }
    export class $ItemDestroyedKubeEvent implements $KubePlayerEvent {
        getItem(): $ItemStack;
        getHand(): $InteractionHand;
        getPlayer(): $Player;
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
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
        getEntity(): $LivingEntity;
        constructor(e: $PlayerDestroyItemEvent);
        get item(): $ItemStack;
        get hand(): $InteractionHand;
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
        get entity(): $LivingEntity;
    }
    export class $DynamicItemTooltipsKubeEvent implements $KubeEvent {
        add(text: $List_<$Component_>): void;
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
        item: $ItemStack;
        advanced: boolean;
        ctrl: boolean;
        startup: boolean;
        shift: boolean;
        alt: boolean;
        lines: $List<$Component>;
        creative: boolean;
        constructor(item: $ItemStack_, flags: $TooltipFlag, lines: $List_<$Component_>, startup: boolean);
    }
    export class $ItemBuilder extends $ModelledBuilderBase<$Item> {
        /**
         * Sets the item's name dynamically.
         */
        name(name: $ItemBuilder$NameCallback_): this;
        /**
         * @deprecated
         */
        group(g: string): this;
        /**
         * Colorizes item's texture of the given index. Useful for coloring items, like GT ores ore dusts.
         */
        color(callback: $ItemTintFunction_): this;
        /**
         * Colorizes item's texture of the given index. Index is used when you have multiple layers, e.g. a crushed ore (of rock + ore).
         */
        color(index: number, color: $ItemTintFunction_): this;
        /**
         * Determines if player will start using the item.
         * 
         * For example, when eating food, returning true will make the player start eating the food.
         */
        use(use: $ItemBuilder$UseCallback_): this;
        /**
         * Sets the item's max stack size. Default is 64.
         */
        maxStackSize(v: number): this;
        /**
         * Makes the item fire resistant like netherite tools.
         */
        fireResistant(): this;
        /**
         * Makes the item fire resistant like netherite tools (or not).
         */
        fireResistant(isFireResistant: boolean): this;
        jukeboxPlayable(song: $ResourceKey_<$JukeboxSong>, showInTooltip: boolean): this;
        jukeboxPlayable(song: $ResourceKey_<$JukeboxSong>): this;
        /**
         * Sets the item's container item, e.g. a bucket for a milk bucket.
         */
        containerItem(id: $ResourceLocation_): this;
        /**
         * Sets the item's rarity.
         */
        rarity(v: $Rarity_): this;
        /**
         * Adds a tooltip to the item.
         */
        tooltip(text: $Component_): this;
        /**
         * Makes the item not stackable, equivalent to setting the item's max stack size to 1.
         */
        unstackable(): this;
        disableRepair(): this;
        /**
         * Determines the animation of the item when used, e.g. eating food.
         */
        useAnimation(animation: $UseAnim_): this;
        /**
         * Adds subtypes to the item. The function should return a collection of item stacks, each with a different subtype.
         * 
         * Each subtype will appear as a separate item in JEI and the creative inventory.
         */
        subtypes(fn: $Function_<$ItemStack, $Collection<$ItemStack>>): this;
        transformObject(obj: $Item_): $Item;
        /**
         * The duration when the item is used.
         * 
         * For example, when eating food, this is the time it takes to eat the food.
         * This can change the eating speed, or be used for other things (like making a custom bow).
         */
        useDuration(useDuration: $ToIntBiFunction_<$ItemStack, $LivingEntity>): this;
        /**
         * When players did not finish using the item but released the right mouse button halfway through.
         * 
         * An example is the bow, where the arrow is shot when the player releases the right mouse button.
         * 
         * To ensure the bow won't finish using, Minecraft sets the `useDuration` to a very high number (1h).
         */
        releaseUsing(releaseUsing: $ItemBuilder$ReleaseUsingCallback_): this;
        /**
         * When players finish using the item.
         * 
         * This is called only when `useDuration` ticks have passed.
         * 
         * For example, when eating food, this is called when the player has finished eating the food, so hunger is restored.
         */
        finishUsing(finishUsing: $ItemBuilder$FinishUsingCallback_): this;
        /**
         * Gets called when the item is used to hurt an entity.
         * 
         * For example, when using a sword to hit a mob, this is called.
         */
        hurtEnemy(context: $Predicate_<$ItemBuilder$HurtEnemyContext>): this;
        /**
         * Sets the item's burn time. Default is 0 (Not a fuel).
         */
        burnTime(v: $TickDuration_): this;
        /**
         * Determines the color of the item's durability bar. Defaulted to vanilla behavior.
         */
        barColor(barColor: $Function_<$ItemStack, $KubeColor>): this;
        /**
         * Makes the item glow like enchanted, even if it's not enchanted.
         */
        glow(v: boolean): this;
        /**
         * Determines the width of the item's durability bar. Defaulted to vanilla behavior.
         * 
         * The function should return a value between 0 and 13 (max width of the bar).
         */
        barWidth(barWidth: $ToIntFunction_<$ItemStack>): this;
        /**
         * Sets the item's max damage. Default is 0 (No durability).
         */
        maxDamage(v: number): this;
        /**
         * Set the food properties of the item.
         */
        food(b: $Consumer_<$FoodBuilder>): this;
        /**
         * Set the food nutrition and saturation of the item.
         */
        food(nutrition: number, saturation: number): this;
        createItemProperties(): $Item$Properties;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        registryKey: $ResourceKey<$Registry<$Item>>;
        constructor(id: $ResourceLocation_);
        /**
         * Add a default component to the item. Can be used for attribute modifiers, default enchantments... and so on.
         */
        component<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
    }
    export class $ItemPickedUpKubeEvent implements $KubePlayerEvent {
        /**
         * The item that was picked up.
         */
        getItem(): $ItemStack;
        /**
         * The item entity that was picked up.
         */
        getItemEntity(): $ItemEntity;
        getPlayer(): $Player;
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
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
        getEntity(): $LivingEntity;
        constructor(player: $Player, entity: $ItemEntity, stack: $ItemStack_);
        get item(): $ItemStack;
        get itemEntity(): $ItemEntity;
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
        get entity(): $LivingEntity;
    }
    export class $PlayerMainInvWrapper extends $RangedWrapper {
        getInventoryPlayer(): $Inventory;
        constructor(inv: $Inventory);
        get inventoryPlayer(): $Inventory;
    }
    export class $ItemModificationKubeEvent$ItemModifications extends $Record implements $ItemComponentFunctions {
        item(): $Item;
        getComponentMap(): $DataComponentMap;
        setTier(builder: $Consumer_<$MutableToolTier>): void;
        setNameKey(key: string): void;
        disableRepair(): void;
        setBurnTime(i: $TickDuration_): void;
        setCraftingRemainder(item: $Item_): void;
        setMaxDamage(maxDamage: number): void;
        setRepairCost(repairCost: number): void;
        setFood(nutrition: number, saturation: number): void;
        setFood(foodProperties: $FoodProperties_): void;
        modifyFood(foodBuilder: $Consumer_<$FoodBuilder>): void;
        setTool(tool: $Tool_): void;
        setItemName(component: $Component_): void;
        setUnbreakable(): void;
        setDamage(damage: number): void;
        setInstrument(instrument: $Holder_<$Instrument>): void;
        setFireworks(fireworks: $Fireworks_): void;
        setUnbreakableWithTooltip(): void;
        setFireworkExplosion(explosion: $FireworkExplosion_): void;
        setFireResistant(): void;
        setMapItemColor(color: $KubeColor_): void;
        setChargedProjectiles(items: $List_<$ItemStack_>): void;
        setBundleContents(items: $List_<$ItemStack_>): void;
        setBucketEntityData(tag: $CompoundTag_): void;
        setBlockEntityData(tag: $CompoundTag_): void;
        setNoteBlockSound(id: $ResourceLocation_): void;
        getAttributeModifiers(): $ItemAttributeModifiers;
        setMaxStackSize(size: number): void;
        setCustomModelData(data: number): void;
        resetComponents(): $ComponentFunctions;
        setPotionContents(contents: $PotionContents_): void;
        setGlintOverride(override: boolean): void;
        setTooltipHidden(): void;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>): void;
        getComponentString(): string;
        setBlockStateProperties(properties: $Map_<string, string>): void;
        setDyedColorWithTooltip(color: $KubeColor_): void;
        setAdditionalTooltipHidden(): void;
        setCustomName(name: $Component_): void;
        getCustomData(): $CompoundTag;
        setPotionId(potion: $Holder_<$Potion>): void;
        setCustomData(tag: $CompoundTag_): void;
        getCustomName(): $Component;
        setLockCode(lock: string): void;
        setBaseColor(color: $DyeColor_): void;
        setLore(lines: $List_<$Component_>, styledLines: $List_<$Component_>): void;
        setLore(lines: $List_<$Component_>): void;
        setDyedColor(color: $KubeColor_): void;
        setUnit(component: $DataComponentType_<$Unit_>): $ComponentFunctions;
        setEntityData(tag: $CompoundTag_): void;
        setRarity(rarity: $Rarity_): void;
        setProfile(profile: $GameProfile): void;
        setProfile(name: string, uuid: $UUID_): void;
        remove(type: $DataComponentType_<never>): $ComponentFunctions;
        patch(components: $DataComponentPatch_): $ComponentFunctions;
        /**
         * Sets the attack speed of this item to the given value, **removing** all other modifiers to attack speed.
         * Note that players have a default attack speed of 4.0, so this modifier is added on top of that.
         * (Example: Swords have an attack speed of -2.4, leading to a total value of 1.6 without any other changes.)
         */
        setAttackSpeed(speed: number): void;
        getAttackSpeed(): number;
        setAttributeModifiersWithTooltip(modifiers: $List_<$ItemAttributeModifiers$Entry_>): void;
        addAttributeModifier(attribute: $Holder_<$Attribute>, mod: $AttributeModifier_, slot: $EquipmentSlotGroup_): void;
        /**
         * Overrides the *base* attack speed of this item to be the given value, keeping other modifiers intact.
         * Note that players have a default attack speed of 4.0, so this modifier is added on top of that.
         */
        setBaseAttackSpeed(speed: number): void;
        setAttributeModifiers(modifiers: $List_<$ItemAttributeModifiers$Entry_>): void;
        getBaseAttackDamage(): number;
        getBaseAttackSpeed(): number;
        /**
         * Sets the attack damage of this item to the given value, **removing** all other modifiers to attack damage.
         * Note that since players have a default attack damage of 1.0, total damage will be (dmg + 1.0) before other modifiers.
         * (In practice, this simply means that most weapons have this value set to 1 less than what you might think.)
         */
        setAttackDamage(dmg: number): void;
        getAttackDamage(): number;
        /**
         * Overrides the *base* attack damage of this item to be the given value, keeping other modifiers intact.
         * Note that since players have a default attack damage of 1.0, total damage will be (dmg + 1.0) before other modifiers.
         */
        setBaseAttackDamage(dmg: number): void;
        getAttributeModifier(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): $AttributeModifier;
        hasAttributeModifier(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): boolean;
        constructor(item: $Item_);
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        get componentMap(): $DataComponentMap;
        set tier(value: $Consumer_<$MutableToolTier>);
        set nameKey(value: string);
        set burnTime(value: $TickDuration_);
        set craftingRemainder(value: $Item_);
        set maxDamage(value: number);
        set repairCost(value: number);
        set tool(value: $Tool_);
        set itemName(value: $Component_);
        set damage(value: number);
        set instrument(value: $Holder_<$Instrument>);
        set fireworks(value: $Fireworks_);
        set fireworkExplosion(value: $FireworkExplosion_);
        set mapItemColor(value: $KubeColor_);
        set chargedProjectiles(value: $List_<$ItemStack_>);
        set bundleContents(value: $List_<$ItemStack_>);
        set bucketEntityData(value: $CompoundTag_);
        set blockEntityData(value: $CompoundTag_);
        set noteBlockSound(value: $ResourceLocation_);
        set maxStackSize(value: number);
        set customModelData(value: number);
        set potionContents(value: $PotionContents_);
        set glintOverride(value: boolean);
        get componentString(): string;
        set blockStateProperties(value: $Map_<string, string>);
        set dyedColorWithTooltip(value: $KubeColor_);
        set potionId(value: $Holder_<$Potion>);
        set lockCode(value: string);
        set baseColor(value: $DyeColor_);
        set dyedColor(value: $KubeColor_);
        set unit(value: $DataComponentType_<$Unit_>);
        set entityData(value: $CompoundTag_);
        set rarity(value: $Rarity_);
        set attributeModifiersWithTooltip(value: $List_<$ItemAttributeModifiers$Entry_>);
    }
    /**
     * Values that may be interpreted as {@link $ItemModificationKubeEvent$ItemModifications}.
     */
    export type $ItemModificationKubeEvent$ItemModifications_ = { item?: $Item_,  } | [item?: $Item_, ];
    export class $ItemPredicate {
        static wrap(from: $Object): $ItemPredicate;
        static ALL: $ItemPredicate;
        static TYPE_INFO: $TypeInfo;
        static NONE: $ItemPredicate;
    }
    export interface $ItemPredicate extends $Predicate<$ItemStack>, $IngredientSupplierKJS {
        test(itemStack: $ItemStack_): boolean;
        getDisplayStacks(): $ItemStackSet;
        canBeUsedForMatching(): boolean;
        getStacks(): $ItemStackSet;
        getItemStream(): $Stream<$Item>;
        getFirst(): $ItemStack;
        getItemIds(): $Set<string>;
        getStackArray(): $ItemStack[];
        testItem(item: $Item_): boolean;
        getItemTypes(): $Set<$Item>;
        asIngredient(): $Ingredient;
        isWildcard(): boolean;
        get displayStacks(): $ItemStackSet;
        get stacks(): $ItemStackSet;
        get itemStream(): $Stream<$Item>;
        get first(): $ItemStack;
        get itemIds(): $Set<string>;
        get stackArray(): $ItemStack[];
        get itemTypes(): $Set<$Item>;
        get wildcard(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ItemPredicate}.
     */
    export type $ItemPredicate_ = $Ingredient_ | "*" | "-" | ((item: $Item) => boolean) | ((itemStack: $ItemStack) => boolean);
    export class $ItemBuilder$UseCallback {
    }
    export interface $ItemBuilder$UseCallback {
        use(level: $Level_, player: $Player, interactionHand: $InteractionHand_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ItemBuilder$UseCallback}.
     */
    export type $ItemBuilder$UseCallback_ = ((level: $Level, player: $Player, interactionHand: $InteractionHand) => boolean);
    export class $KubeJSItemProperties extends $Item$Properties {
        itemBuilder: $ItemBuilder;
        craftingRemainingItem: $Item;
        static COMPONENT_INTERNER: $Interner<$DataComponentMap>;
        constructor(itemBuilder: $ItemBuilder);
    }
    export class $ItemTintFunction$Fixed extends $Record implements $ItemTintFunction {
        color(): $KubeColor;
        getColor(stack: $ItemStack_, index: number): $KubeColor;
        constructor(color: $KubeColor_);
    }
    /**
     * Values that may be interpreted as {@link $ItemTintFunction$Fixed}.
     */
    export type $ItemTintFunction$Fixed_ = { color?: $KubeColor_,  } | [color?: $KubeColor_, ];
    export class $ItemToolTiers {
        static wrap(o: $Object): $Tier;
        static ALL: $Lazy<$Map<string, $Tier>>;
        constructor();
    }
    export class $FoodBuilder$EffectSupplier implements $Supplier<$MobEffectInstance> {
    }
    export class $KubeJSItemEventHandler {
        static smelted(event: $PlayerEvent$ItemSmeltedEvent): void;
        static crafted(event: $PlayerEvent$ItemCraftedEvent): void;
        static rightClick(event: $PlayerInteractEvent$RightClickItem): void;
        static entityInteract(event: $PlayerInteractEvent$EntityInteract): void;
        static itemDestroyed(event: $PlayerDestroyItemEvent): void;
        static leftClickEmpty(event: $PlayerInteractEvent$LeftClickEmpty): void;
        static itemPickupPre(event: $ItemEntityPickupEvent$Pre): void;
        static itemPickupPost(event: $ItemEntityPickupEvent$Post): void;
        static itemDrop(event: $ItemTossEvent): void;
        constructor();
    }
}
