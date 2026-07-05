import { $MinecraftServer } from "@package/net/minecraft/server";
import { $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $Recipe, $RecipeHolder, $Ingredient, $Ingredient_, $RecipeSerializer, $RecipeHolder_, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $Tag_, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityType_, $EquipmentSlot_, $EntityType, $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $KeyMapping, $Minecraft } from "@package/net/minecraft/client";
import { $IoSupplier, $IoSupplier_ } from "@package/net/minecraft/server/packs/resources";
import { $ExplosionProperties_, $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $ItemPredicate_, $ItemPredicate, $ItemBuilder, $ItemStackKey, $ItemStackSet } from "@package/dev/latvian/mods/kubejs/item";
import { $RandomSource } from "@package/net/minecraft/util";
import { $DisplayInfo, $AdvancementNode } from "@package/net/minecraft/advancements";
import { $InteractionHand_, $Container } from "@package/net/minecraft/world";
import { $FakePlayer } from "@package/net/neoforged/neoforge/common/util";
import { $ScheduledEvents$ScheduledEvent, $SlotFilter_, $WrappedJS, $ScheduledEvents, $NotificationToastData_, $ScheduledEvents$Callback_, $WithCodec, $TickDuration_, $AttachedData } from "@package/dev/latvian/mods/kubejs/util";
import { DataComponentTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $SpecialEquality, $ToStringJS } from "@package/dev/latvian/mods/rhino/util";
import { $DataComponentMap_ } from "@package/net/minecraft/core/component";
import { $RecipeMatchContext } from "@package/dev/latvian/mods/kubejs/recipe/filter";
import { $MenuType, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $ScriptType, $ScriptTypeHolder } from "@package/dev/latvian/mods/kubejs/script";
import { $SizedIngredient } from "@package/net/neoforged/neoforge/common/crafting";
import { $KubeAnimatedParticle, $KubeSessionData } from "@package/dev/latvian/mods/kubejs/client";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $KubeJSGUI } from "@package/dev/latvian/mods/kubejs/gui";
import { $SpriteSet } from "@package/net/minecraft/client/particle";
import { $MutableComponent, $Component_, $ClickEvent_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ServerScriptManager } from "@package/dev/latvian/mods/kubejs/server";
import { $Duration_ } from "@package/java/time";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $SoundType_, $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $RelativeURL } from "@package/dev/latvian/mods/kubejs/web";
import { $AABB_, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $JsonElement } from "@package/com/google/gson";
import { $ChestMenuData } from "@package/dev/latvian/mods/kubejs/gui/chest";
import { $AttributeModifier$Operation_, $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $ItemFrame } from "@package/net/minecraft/world/entity/decoration";
import { $UUID_, $Map, $Set, $UUID, $List, $Map_, $List_ } from "@package/java/util";
import { $EntityArrayList, $PlayerStatsJS, $KubeJSInventoryListener } from "@package/dev/latvian/mods/kubejs/player";
import { $SizedFluidIngredient, $FluidIngredient, $FluidIngredient_ } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $Consumer_, $Predicate_, $Function, $Supplier } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos_, $Registry, $Holder_, $Holder, $Direction } from "@package/net/minecraft/core";
import { $Enchantment, $ItemEnchantments_, $ItemEnchantments } from "@package/net/minecraft/world/item/enchantment";
import { $ItemMatch, $FluidMatch, $Replaceable, $ReplacementMatchInfo_ } from "@package/dev/latvian/mods/kubejs/recipe/match";
import { $RecipeSchema } from "@package/dev/latvian/mods/kubejs/recipe/schema";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Iterable, $Iterable_, $Record, $Object, $IllegalStateException } from "@package/java/lang";
import { $RandomTickCallback } from "@package/dev/latvian/mods/kubejs/block/callback";
import { $InputStream } from "@package/java/io";
import { $Explosion, $ItemLike_, $EntityGetter, $GameRules$Value, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $TagManager, $TagKey, $TagLoader$EntryWithSource_, $TagKey_ } from "@package/net/minecraft/tags";
import { $BlockBuilder } from "@package/dev/latvian/mods/kubejs/block";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $Fireworks_ } from "@package/net/minecraft/world/item/component";
import { AbstractClientPlayer, $AbstractClientPlayer, LocalPlayer } from "@package/net/minecraft/client/player";
import { $FluidLike } from "@package/dev/latvian/mods/kubejs/fluid";
import { $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $BufferedImage } from "@package/java/awt/image";
import { $TemporalAmount_ } from "@package/java/time/temporal";
import { $EntityPotionEffectsJS, $KubeRayTraceResult } from "@package/dev/latvian/mods/kubejs/entity";
import { $Stages } from "@package/dev/latvian/mods/kubejs/stages";
import { $Stream } from "@package/java/util/stream";
import { $FoodProperties_ } from "@package/net/minecraft/world/food";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $MutableDataComponentHolderFunctions, $ItemComponentFunctions } from "@package/dev/latvian/mods/kubejs/component";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
export * as mixin from "@package/dev/latvian/mods/kubejs/core/mixin";

declare module "@package/dev/latvian/mods/kubejs/core" {
    export class $EntityKJS {
    }
    export interface $EntityKJS extends $WithPersistentData, $MessageSenderKJS, $ScriptTypeHolder {
        spawn(): void;
        setNbt(nbt: $CompoundTag_): void;
        /**
         * Checks if the entity is an item entity.
         */
        isItem(): this is $ItemEntity;
        setZ(z: number): void;
        /**
         * Damages an entity by a given amount of HP dealing a specific type of damage.
         * 
         * @param hp The amount of damage to deal.
         * @param source The damage source. It may be a string specifying a damage source, like `'minecraft:cramming'`.
         */
        damage(hp: number, source: $DamageSource_): boolean;
        /**
         * Damages an entity by a given amount of HP dealing generic damage.
         * 
         * @param hp The amount of damage to deal.
         */
        damage(hp: number): boolean;
        getNbt(): $CompoundTag;
        setX(x: number): void;
        /**
         * @deprecated
         * Replaced by `entity.damage(hp, damageSource)`
         */
        attack(source: $DamageSource_, hp: number): boolean;
        /**
         * @deprecated
         * Replaced by `entity.damage(hp)`
         */
        attack(hp: number): boolean;
        /**
         * Checks, whether the entity is a reference to yourself - that is - the client player you are controlling.
         */
        isSelf(): this is LocalPlayer;
        setY(y: number): void;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        /**
         * Checks if the entity is an ambient creature.
         */
        isAmbientCreature(): boolean;
        /**
         * Checks if the entity is a peaceful creature (not a monster).
         */
        isPeacefulCreature(): boolean;
        /**
         * Teleports an entity to a specified `ServerLevel`, to specified coordinates and rotation.
         * 
         * @param level A `ServerLevel` to teleport the entity to.
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportToLevel(level: $ServerLevel, x: number, y: number, z: number, yaw: number, pitch: number): boolean;
        /**
         * Measures the distance of entity to block at specified `BlockPos`.
         */
        distanceToBlock(pos: $BlockPos_): number;
        /**
         * Checks, whether the entity is part of any team.
         */
        isOnScoreboardTeam(): boolean;
        /**
         * Checks, whether the entity is part of a team called `teamName`.
         * 
         * @param teamName The name of the team to check.
         */
        isOnScoreboardTeam(teamName: string): boolean;
        /**
         * Checks if the entity is a water creature.
         */
        isWaterCreature(): boolean;
        /**
         * Measures the **square** of a distance of entity to the block at specified `BlockPos`.
         */
        distanceToBlockSqr(pos: $BlockPos_): number;
        /**
         * If the entity is a player, gets the player's profile, otherwise returns `null`.
         */
        getProfile(): $GameProfile;
        /**
         * Gets the entity's custom name, or entity ID if entity has no custom name.
         */
        getUsername(): string;
        /**
         * Checks if the entity is a player entity.
         */
        isPlayer(): this is $Player;
        /**
         * @deprecated
         * Replaced by `entity.getTeamName()`
         */
        getTeamId(): string;
        /**
         * Gets the entity's facing direction.
         * If the entity faces more than 45 degrees up or down, the resulting facing direction is respectively `up` or `down`.
         * Otherwise, the resulting facing direction is determined by whichever cardinal direction is closer to entity's yaw.
         */
        getFacing(): $Direction;
        /**
         * @deprecated
         * Replaced by `entity.distanceToSqr(x, y, z)`.
         */
        getDistanceSq(x: number, y: number, z: number): number;
        /**
         * @deprecated
         * Replaced by `entity.distanceToBlockSqr(pos)`.
         */
        getDistanceSq(pos: $BlockPos_): number;
        /**
         * @deprecated
         * Replaced by `entity.distanceTo(x, y, z)`.
         */
        getDistance(x: number, y: number, z: number): number;
        /**
         * Gets the name of the team entity is in, or `''` (empty string) if the entity is not part of any team
         */
        getTeamName(): string;
        /**
         * Checks if the entity is an animal.
         */
        isAnimal(): boolean;
        /**
         * Checks if the entity is a monster.
         */
        isMonster(): boolean;
        getMotionZ(): number;
        /**
         * Gets a list of all passengers of the entity.
         */
        getPassengers(): $EntityArrayList;
        mergeNbt(tag: $CompoundTag_): $Entity;
        setPosition(block: $LevelBlock): void;
        setPosition(x: number, y: number, z: number): void;
        /**
         * Checks if the entity is a `LivingEntity`.
         */
        isLiving(): this is $LivingEntity;
        getServer(): $MinecraftServer;
        rayTraceEntity(distance: number, filter: $Predicate_<$Entity>): $Entity;
        /**
         * Checks if the entity is a server-side player.
         */
        isServerPlayer(): this is $ServerPlayer;
        /**
         * Checks if the entity is an item frame entity.
         */
        isFrame(): this is $ItemFrame;
        getMotionY(): number;
        setMotionY(y: number): void;
        /**
         * Checks if the entity is a client-side player.
         */
        isClientPlayer(): this is AbstractClientPlayer;
        getLevel(): $Level;
        setRotation(yaw: number, pitch: number): void;
        getType(): string;
        rayTrace(distance: number): $KubeRayTraceResult;
        rayTrace(distance: number, fluids: boolean): $KubeRayTraceResult;
        /**
         * Teleports an entity to a dimension of specified ID, to specified coordinates and rotation.
         * 
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportTo(x: number, y: number, z: number, yaw: number, pitch: number): void;
        /**
         * Teleports an entity to specified coordinates.
         * 
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         */
        teleportTo(x: number, y: number, z: number): void;
        /**
         * Teleports an entity to a dimension of specified ID, to specified coordinates and rotation.
         * 
         * @param dimension A `ResourceLocation` of the target dimension. It can be a string representing the dimension ID.
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportTo(dimension: $ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): boolean;
        setMotionX(x: number): void;
        getScriptType(): $ScriptType;
        /**
         * Gets the item stack corresponding to either:
         * - the item contained in the item entity,
         * - the item in the item frame.
         * Will be `null` if the entity is neither an item entity nor an item frame.
         */
        getItem(): $ItemStack;
        setMotionZ(z: number): void;
        /**
         * Measures the distance of entity to the point at specified 3D position vector.
         */
        distanceTo(position: $Vec3_): number;
        /**
         * Measures the distance of entity to the point at specified `x`, `y` and `z`.
         */
        distanceTo(x: number, y: number, z: number): number;
        getMotionX(): number;
        /**
         * Gets a block at the position of the entity.
         */
        getBlock(): $LevelBlock;
        /**
         * Sends a message in chat to the entity.
         * 
         * @param message A text component. It may be a string, which will be implicitly wrapped into a text component.
         */
        tell(message: $Component_): void;
        /**
         * Runs the specified console command with permission level of the entity.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getName(): $Component;
        getDisplayName(): $Component;
        /**
         * Runs the specified console command with permission level of the entity. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        set z(value: number);
        set x(value: number);
        get self(): boolean;
        set y(value: number);
        get ambientCreature(): boolean;
        get peacefulCreature(): boolean;
        get waterCreature(): boolean;
        get profile(): $GameProfile;
        get username(): string;
        get player(): boolean;
        get teamId(): string;
        get facing(): $Direction;
        get teamName(): string;
        get animal(): boolean;
        get monster(): boolean;
        get passengers(): $EntityArrayList;
        get living(): boolean;
        get server(): $MinecraftServer;
        get serverPlayer(): boolean;
        get frame(): boolean;
        get clientPlayer(): boolean;
        get level(): $Level;
        get type(): string;
        get scriptType(): $ScriptType;
        get block(): $LevelBlock;
        get name(): $Component;
        get displayName(): $Component;
    }
    export class $IngredientSupplierKJS {
    }
    export interface $IngredientSupplierKJS {
        kjs$asIngredient(): $Ingredient;
    }
    export class $FluidStackKJS {
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
    }
    export interface $FluidStackKJS extends $Replaceable, $SpecialEquality, $WithCodec, $FluidLike, $FluidMatch, $MutableDataComponentHolderFunctions, $RegistryObjectKJS<$Fluid> {
        getCodec(): $Codec<never>;
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, ingredient: $FluidIngredient_, exact: boolean): boolean;
        specialEquals(o: $Object, shallow: boolean): boolean;
        kjs$getWebIconURL(ops: $DynamicOps<$Tag_>, size: number): $RelativeURL;
        kjs$getRegistry(): $Registry<$Fluid>;
        kjs$getIdLocation(): $ResourceLocation;
        kjs$getRegistryId(): $ResourceKey<$Registry<$Fluid>>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        kjs$asHolder(): $Holder<$Fluid>;
        kjs$getAmount(): number;
        kjs$getFluid(): $Fluid;
        kjs$isEmpty(): boolean;
        kjs$getId(): string;
        kjs$getMod(): string;
        kjs$copy(amount: number): $FluidLike;
        kjs$getKey(): $ResourceKey<$Fluid>;
        kjs$self(): $FluidStack;
        kjs$equalsIgnoringCount(stack: $FluidStack_): boolean;
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        get codec(): $Codec<never>;
    }
    export class $EntityGetterKJS {
    }
    export interface $EntityGetterKJS extends $EntityCollectionKJS {
        getMcPlayers(): $List<$Player>;
        getMcEntities(): $Iterable<$Entity>;
        getPlayers(): $EntityArrayList;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        self(): $EntityGetter;
        get mcPlayers(): $List<$Player>;
        get mcEntities(): $Iterable<$Entity>;
        get players(): $EntityArrayList;
    }
    export class $SizedIngredientKJS {
    }
    export interface $SizedIngredientKJS extends $Replaceable, $IngredientSupplierKJS, $ItemMatch {
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, item: $ItemStack_, exact: boolean): boolean;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        kjs$asIngredient(): $Ingredient;
        kjs$self(): $SizedIngredient;
        kjs$toNestedJson(): $JsonElement;
        kjs$toFlatJson(): $JsonElement;
    }
    export class $RegistryObjectKJS<T> {
    }
    export interface $RegistryObjectKJS<T> extends $SpecialEquality {
        specialEquals(o: $Object, shallow: boolean): boolean;
        getRegistry(): $Registry<T>;
        getIdLocation(): $ResourceLocation;
        getRegistryId(): $ResourceKey<$Registry<T>>;
        getTagKeys(): $List<$TagKey<T>>;
        getTags(): $List<$ResourceLocation>;
        asHolder(): $Holder<T>;
        getId(): string;
        hasTag(tag: $ResourceLocation_): boolean;
        getMod(): string;
        getKey(): $ResourceKey<T>;
        get registry(): $Registry<T>;
        get idLocation(): $ResourceLocation;
        get registryId(): $ResourceKey<$Registry<T>>;
        get tagKeys(): $List<$TagKey<T>>;
        get tags(): $List<$ResourceLocation>;
        get id(): string;
        get mod(): string;
        get key(): $ResourceKey<T>;
    }
    export class $DiggerItemKJS {
    }
    export interface $DiggerItemKJS {
        kjs$getMineableTag(): $TagKey<$Block>;
    }
    /**
     * Values that may be interpreted as {@link $DiggerItemKJS}.
     */
    export type $DiggerItemKJS_ = (() => $TagKey_<$Block>);
    export class $EntityCollectionKJS {
    }
    export interface $EntityCollectionKJS {
        getEntities(): $EntityArrayList;
        getMcPlayers(): $List<$Player>;
        getMcEntities(): $Iterable<$Entity>;
        getPlayers(): $EntityArrayList;
        getEntityByNetworkID(id: number): $Entity;
        getEntityByUUID(id: $UUID_): $Entity;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        get entities(): $EntityArrayList;
        get mcPlayers(): $List<$Player>;
        get mcEntities(): $Iterable<$Entity>;
        get players(): $EntityArrayList;
    }
    /**
     * Values that may be interpreted as {@link $EntityCollectionKJS}.
     */
    export type $EntityCollectionKJS_ = (() => $Iterable_<$Entity>);
    export class $CreativeModeTabKJS {
    }
    export interface $CreativeModeTabKJS {
        kjs$setDisplayName(component: $Component_): void;
        kjs$setIcon(icon: $ItemStack_): void;
    }
    export class $WithPersistentData {
    }
    export interface $WithPersistentData extends $MessageSenderKJS {
        getPersistentData(): $CompoundTag;
        get persistentData(): $CompoundTag;
    }
    export class $TagLoaderKJS<T> {
    }
    export interface $TagLoaderKJS<T> {
        kjs$customTags(kjs$resources: $ReloadableServerResourcesKJS, map: $Map_<$ResourceLocation_, $List_<$TagLoader$EntryWithSource_>>): void;
        kjs$init(resources: $ReloadableServerResourcesKJS, registry: $Registry<T>): void;
        kjs$getRegistry(): $Registry<T>;
        kjs$getResources(): $ReloadableServerResourcesKJS;
    }
    export class $ItemFrameEntityKJS {
    }
    export interface $ItemFrameEntityKJS extends $EntityKJS {
        /**
         * Checks if the entity is an item frame entity.
         */
        isFrame(): this is $ItemFrame;
        /**
         * Gets the item stack corresponding to the item in the item frame.
         * Will be `null` if the contained stack is empty.
         */
        getItem(): $ItemStack;
        get frame(): boolean;
        get item(): $ItemStack;
    }
    export class $BlockProviderKJS {
    }
    export interface $BlockProviderKJS extends $RegistryObjectKJS<$Block> {
        getTypeData(): $Map<string, $Object>;
        getBlock(): $Block;
        getRegistry(): $Registry<$Block>;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        asHolder(): $Holder<$Block>;
        getId(): string;
        getKey(): $ResourceKey<$Block>;
        get typeData(): $Map<string, $Object>;
        get block(): $Block;
        get registry(): $Registry<$Block>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get id(): string;
        get key(): $ResourceKey<$Block>;
    }
    /**
     * Values that may be interpreted as {@link $BlockProviderKJS}.
     */
    export type $BlockProviderKJS_ = (() => $Block_);
    export class $LivingEntityKJS {
        static KJS_PLAYER_CUSTOM_SPEED: $ResourceLocation;
    }
    export interface $LivingEntityKJS extends $EntityKJS {
        swing(): void;
        swing(hand: $InteractionHand_): void;
        removeAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): void;
        setEquipment(slot: $EquipmentSlot_, item: $ItemStack_): void;
        getEquipment(slot: $EquipmentSlot_): $ItemStack;
        isLiving(): this is $LivingEntity;
        setOffHandItem(item: $ItemStack_): void;
        rayTraceEntity(filter: $Predicate_<$Entity>): $Entity;
        damageHeldItem(hand: $InteractionHand_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        damageHeldItem(hand: $InteractionHand_, amount: number): void;
        damageHeldItem(): void;
        setHeldItem(hand: $InteractionHand_, item: $ItemStack_): void;
        getOffHandItem(): $ItemStack;
        rayTrace(): $KubeRayTraceResult;
        foodEaten(eatenStack: $ItemStack_, food: $FoodProperties_): void;
        /**
         * Sets the entity's maximum health to specified HP.
         * 
         * @param hp The new maximum health of the entity.
         */
        setMaxHealth(hp: number): void;
        isUndead(): boolean;
        getHeldItem(hand: $InteractionHand_): $ItemStack;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        setTotalMovementSpeedMultiplier(speed: number): void;
        setDefaultMovementSpeed(speed: number): void;
        setMovementSpeedAddition(speed: number): void;
        getDefaultMovementSpeed(): number;
        damageEquipment(slot: $EquipmentSlot_): void;
        damageEquipment(slot: $EquipmentSlot_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        damageEquipment(slot: $EquipmentSlot_, amount: number): void;
        getReachDistance(): number;
        getPotionEffects(): $EntityPotionEffectsJS;
        getMainHandItem(): $ItemStack;
        setHeadArmorItem(item: $ItemStack_): void;
        getChestArmorItem(): $ItemStack;
        setChestArmorItem(item: $ItemStack_): void;
        setMainHandItem(item: $ItemStack_): void;
        getHeadArmorItem(): $ItemStack;
        getAttributeTotalValue(attribute: $Holder_<$Attribute>): number;
        getAttributeBaseValue(attribute: $Holder_<$Attribute>): number;
        setAttributeBaseValue(attribute: $Holder_<$Attribute>, value: number): void;
        modifyAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_, amount: number, operation: $AttributeModifier$Operation_): void;
        getLegsArmorItem(): $ItemStack;
        setFeetArmorItem(item: $ItemStack_): void;
        isHoldingInAnyHand(itemPredicate: $ItemPredicate_): boolean;
        setLegsArmorItem(item: $ItemStack_): void;
        getFeetArmorItem(): $ItemStack;
        getTotalMovementSpeed(): number;
        canEntityBeSeen(entity: $LivingEntity): boolean;
        get living(): boolean;
        set maxHealth(value: number);
        get undead(): boolean;
        set defaultMovementSpeedMultiplier(value: number);
        set totalMovementSpeedMultiplier(value: number);
        set movementSpeedAddition(value: number);
        get reachDistance(): number;
        get potionEffects(): $EntityPotionEffectsJS;
        get totalMovementSpeed(): number;
    }
    export class $ServerLevelKJS {
    }
    export interface $ServerLevelKJS extends $LevelKJS, $WithPersistentData {
        spawnParticles(options: $ParticleOptions_, overrideLimiter: boolean, x: number, y: number, z: number, vx: number, vy: number, vz: number, count: number, speed: number): void;
        self(): $EntityGetter;
    }
    /**
     * Values that may be interpreted as {@link $ServerLevelKJS}.
     */
    export type $ServerLevelKJS_ = (() => void);
    export class $ClientPacketListenerKJS {
    }
    export interface $ClientPacketListenerKJS {
        kjs$sessionData(): $KubeSessionData;
    }
    export class $TagManagerKJS {
    }
    export interface $TagManagerKJS extends $ReloadableServerResourceHolderKJS {
    }
    export class $MinecraftServerKJS {
    }
    export interface $MinecraftServerKJS extends $WithAttachedData<$MinecraftServer>, $WithPersistentData, $DataSenderKJS, $MinecraftEnvironmentKJS, $EntityCollectionKJS {
        getOverworld(): $ServerLevel;
        getMcPlayers(): $List<$Player>;
        getMcEntities(): $Iterable<$Entity>;
        getPlayers(): $EntityArrayList;
        getEntityByNetworkID(id: number): $Entity;
        getEntityByUUID(id: $UUID_): $Entity;
        getPlayer(selector: $PlayerSelector_): $ServerPlayer;
        restoreInventories(): $Map<$UUID, $Map<number, $ItemStack>>;
        sendData(channel: string, data: $CompoundTag_): void;
        getLevel(dimension: $ResourceLocation_): $ServerLevel;
        getAdvancement(id: $ResourceLocation_): $AdvancementNode;
        tell(message: $Component_): void;
        self(): $MinecraftServer;
        /**
         * Runs the specified console command.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getName(): $Component;
        setStatusMessage(message: $Component_): void;
        /**
         * Runs the specified console command. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        get overworld(): $ServerLevel;
        get mcPlayers(): $List<$Player>;
        get mcEntities(): $Iterable<$Entity>;
        get players(): $EntityArrayList;
        get name(): $Component;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
    }
    export class $MenuTypeKJS {
    }
    export interface $MenuTypeKJS extends $RegistryObjectKJS<$MenuType<never>> {
        kjs$getRegistry(): $Registry<$MenuType<never>>;
        kjs$getRegistryId(): $ResourceKey<$Registry<$MenuType<never>>>;
    }
    export class $DataSenderKJS {
    }
    export interface $DataSenderKJS {
        sendData(channel: string, data: $CompoundTag_): void;
        sendData(channel: string): void;
    }
    export class $RecipeLikeKJS {
    }
    export interface $RecipeLikeKJS {
        getTypeKey(): $ResourceKey<$RecipeSerializer<never>>;
        getSerializer(): $RecipeSerializer<never>;
        getGroup(): string;
        setGroup(group: string): void;
        replaceOutput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        getOrCreateId(): $ResourceLocation;
        getSchema(): $RecipeSchema;
        replaceInput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        hasInput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        hasOutput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        getType(): $ResourceLocation;
        getMod(): string;
        get typeKey(): $ResourceKey<$RecipeSerializer<never>>;
        get serializer(): $RecipeSerializer<never>;
        get orCreateId(): $ResourceLocation;
        get schema(): $RecipeSchema;
        get type(): $ResourceLocation;
        get mod(): string;
    }
    export class $LevelKJS {
    }
    export interface $LevelKJS extends $WithAttachedData<$Level>, $ScriptTypeHolder, $EntityGetterKJS {
        spawnLightning(x: number, y: number, z: number, visualOnly: boolean): void;
        spawnLightning(x: number, y: number, z: number, visualOnly: boolean, cause: $ServerPlayer): void;
        spawnFireworks(x: number, y: number, z: number, fireworks: $Fireworks_, lifetime: number): void;
        spawnParticles(options: $ParticleOptions_, overrideLimiter: boolean, x: number, y: number, z: number, vx: number, vy: number, vz: number, count: number, speed: number): void;
        getDimension(): $ResourceLocation;
        explode(x: number, y: number, z: number, properties: $ExplosionProperties_): $Explosion;
        isOverworld(): boolean;
        setTime(time: number): void;
        createEntity(type: $EntityType_<never>): $Entity;
        spawnEntity(type: $EntityType_<never>, callback: $Consumer_<$Entity>): void;
        getSide(): $ScriptType;
        getBlock(entity: $BlockEntity): $LevelBlock;
        getBlock(x: number, y: number, z: number): $LevelBlock;
        getBlock(pos: $BlockPos_): $LevelBlock;
        tell(message: $Component_): void;
        self(): $EntityGetter;
        /**
         * Each player in the level (world) runs the specified console command with their permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getName(): $Component;
        setStatusMessage(message: $Component_): void;
        /**
         * Each player in the level (world) runs the specified console command with their permission level. The command won't output any logs in chat nor console
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        get dimension(): $ResourceLocation;
        get overworld(): boolean;
        set time(value: number);
        get side(): $ScriptType;
        get name(): $Component;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $LevelKJS}.
     */
    export type $LevelKJS_ = (() => void);
    export class $FluidIngredientKJS {
    }
    export interface $FluidIngredientKJS extends $WithCodec, $FluidMatch {
        getCodec(): $Codec<never>;
        matches(cx: $RecipeMatchContext, arg1: $FluidIngredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        self(): $FluidIngredient;
        withAmount(amount: number): $SizedFluidIngredient;
        get codec(): $Codec<never>;
    }
    export class $WindowKJS$KJSScaledIconProvider extends $Record implements $Supplier<number[]> {
        target(): number;
        original(): $BufferedImage;
        get(): number[];
        constructor(original: $BufferedImage, target: number);
    }
    /**
     * Values that may be interpreted as {@link $WindowKJS$KJSScaledIconProvider}.
     */
    export type $WindowKJS$KJSScaledIconProvider_ = { original?: $BufferedImage, target?: number,  } | [original?: $BufferedImage, target?: number, ];
    export class $PlayerSelector {
        static name(name: string): $PlayerSelector;
        static wrap(o: $Object): $PlayerSelector;
        static identity(player: $ServerPlayer): $PlayerSelector;
        static uuid(uuid: $UUID_): $PlayerSelector;
        static fuzzyName(name: string): $PlayerSelector;
        static TYPE_INFO: $TypeInfo;
    }
    export interface $PlayerSelector {
        or(fallback: $PlayerSelector_): $PlayerSelector;
        getPlayer(server: $MinecraftServer): $ServerPlayer;
    }
    /**
     * Values that may be interpreted as {@link $PlayerSelector}.
     */
    export type $PlayerSelector_ = ((server: $MinecraftServer) => $ServerPlayer);
    export class $LocalClientPlayerKJS {
    }
    export interface $LocalClientPlayerKJS extends $ClientPlayerKJS {
        notify(notification: $NotificationToastData_): void;
        /**
         * Checks, whether the entity is a reference to yourself - that is - the client player you are controlling.
         */
        isSelf(): this is LocalPlayer;
        getMinecraft(): $Minecraft;
        /**
         * Checks, whether the player is currently mining a block.
         */
        isMiningBlock(): boolean;
        getStats(): $PlayerStatsJS;
        sendData(channel: string, data: $CompoundTag_): void;
        /**
         * Runs the specified console command client-side with the player's permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        /**
         * Runs the specified console command client-side with the player's permission level. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        get self(): boolean;
        get minecraft(): $Minecraft;
        get miningBlock(): boolean;
        get stats(): $PlayerStatsJS;
        set activePostShader(value: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $LocalClientPlayerKJS}.
     */
    export type $LocalClientPlayerKJS_ = (() => void);
    export class $WithAttachedData<T> {
    }
    export interface $WithAttachedData<T> extends $MessageSenderKJS {
        getData(): $AttachedData<T>;
        get data(): $AttachedData<T>;
    }
    /**
     * Values that may be interpreted as {@link $WithAttachedData}.
     */
    export type $WithAttachedData_<T> = (() => $AttachedData<T>);
    export class $LazyComponentKJS {
    }
    export interface $LazyComponentKJS extends $Supplier<$Component> {
        get(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $LazyComponentKJS}.
     */
    export type $LazyComponentKJS_ = (() => $Component_);
    export class $CustomIngredientKJS {
    }
    export interface $CustomIngredientKJS extends $ItemPredicate {
        kjs$getDisplayStacks(): $ItemStackSet;
        kjs$canBeUsedForMatching(): boolean;
        kjs$getStackArray(): $ItemStack[];
        getItems(): $Stream<$ItemStack>;
        kjs$asIngredient(): $Ingredient;
        get items(): $Stream<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $CustomIngredientKJS}.
     */
    export type $CustomIngredientKJS_ = (() => void);
    export class $FluidKJS {
    }
    export interface $FluidKJS extends $RegistryObjectKJS<$Fluid>, $FluidLike {
        getRegistry(): $Registry<$Fluid>;
        getRegistryId(): $ResourceKey<$Registry<$Fluid>>;
        getAmount(): number;
        getFluid(): $Fluid;
        isEmpty(): boolean;
        get registry(): $Registry<$Fluid>;
        get registryId(): $ResourceKey<$Registry<$Fluid>>;
        get amount(): number;
        get fluid(): $Fluid;
        get empty(): boolean;
    }
    export class $GameRulesKJS {
    }
    export interface $GameRulesKJS {
        kjs$getInt(rule: string): number;
        kjs$getString(rule: string): string;
        kjs$getBoolean(rule: string): boolean;
        kjs$get(rule: string): $GameRules$Value<never>;
        kjs$set(rule: string, value: string): void;
    }
    export class $PlayerKJS {
    }
    export interface $PlayerKJS extends $LivingEntityKJS, $DataSenderKJS, $WithAttachedData<$Player> {
        getXp(): number;
        addXP(xp: number): void;
        setXp(xp: number): void;
        give(item: $ItemStack_): void;
        notify(title: $Component_, text: $Component_): void;
        notify(builder: $NotificationToastData_): void;
        /**
         * Checks if the player is fake.
         */
        isFake(): this is $FakePlayer;
        spawn(): void;
        addFood(hunger: number, saturation: number): void;
        getSaturation(): number;
        setXpLevel(levels: number): void;
        isMiningBlock(): boolean;
        /**
         * Gets the player's profile.
         */
        getProfile(): $GameProfile;
        giveInHand(item: $ItemStack_): void;
        getStages(): $Stages;
        getMouseItem(): $ItemStack;
        setMouseItem(item: $ItemStack_): void;
        getFoodLevel(): number;
        setFoodLevel(foodLevel: number): void;
        getInventory(): $InventoryKJS;
        getStats(): $PlayerStatsJS;
        /**
         * Gets the player's username.
         */
        getUsername(): string;
        /**
         * Checks if the entity is a player entity.
         */
        isPlayer(): this is $Player;
        setSaturation(saturation: number): void;
        addExhaustion(exhaustion: number): void;
        addXPLevels(levels: number): void;
        getXpLevel(): number;
        getInventoryChangeListener(): $KubeJSInventoryListener;
        setStatusMessage(message: $Component_): void;
        boostElytraFlight(): void;
        setSelectedSlot(index: number): void;
        getCraftingGrid(): $InventoryKJS;
        sendInventoryUpdate(): void;
        getOpenInventory(): $AbstractContainerMenu;
        addItemCooldown(item: $Item_, ticks: number): void;
        getSelectedSlot(): number;
        get fake(): boolean;
        get miningBlock(): boolean;
        get profile(): $GameProfile;
        get stages(): $Stages;
        get inventory(): $InventoryKJS;
        get stats(): $PlayerStatsJS;
        get username(): string;
        get player(): boolean;
        get inventoryChangeListener(): $KubeJSInventoryListener;
        set statusMessage(value: $Component_);
        get craftingGrid(): $InventoryKJS;
        get openInventory(): $AbstractContainerMenu;
    }
    /**
     * Values that may be interpreted as {@link $PlayerKJS}.
     */
    export type $PlayerKJS_ = (() => void);
    export class $FireworkRocketEntityKJS {
    }
    export interface $FireworkRocketEntityKJS {
        setLifetimeKJS(lifetime: number): void;
        set lifetimeKJS(value: number);
    }
    /**
     * Values that may be interpreted as {@link $FireworkRocketEntityKJS}.
     */
    export type $FireworkRocketEntityKJS_ = ((lifetime: number) => void);
    export class $SizedFluidIngredientKJS {
    }
    export interface $SizedFluidIngredientKJS extends $Replaceable, $FluidMatch {
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, arg1: $FluidIngredient_, exact: boolean): boolean;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        self(): $SizedFluidIngredient;
        toNestedJson(): $JsonElement;
        toFlatJson(): $JsonElement;
    }
    export class $RecipeHolderKJS {
    }
    export interface $RecipeHolderKJS extends $RecipeLikeKJS {
        getTypeKey(): $ResourceKey<$RecipeSerializer<never>>;
        getSerializer(): $RecipeSerializer<never>;
        getRecipe(): $Recipe<never>;
        getGroup(): string;
        setGroup(group: string): void;
        replaceOutput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        getOrCreateId(): $ResourceLocation;
        getSchema(): $RecipeSchema;
        replaceInput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        hasInput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        hasOutput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        self(): $RecipeHolder<never>;
        get typeKey(): $ResourceKey<$RecipeSerializer<never>>;
        get serializer(): $RecipeSerializer<never>;
        get recipe(): $Recipe<never>;
        get orCreateId(): $ResourceLocation;
        get schema(): $RecipeSchema;
    }
    export class $ReloadableServerResourcesKJS {
    }
    export interface $ReloadableServerResourcesKJS {
        kjs$getServerScriptManager(): $ServerScriptManager;
        kjs$getTagManager(): $TagManager;
    }
    export class $MessageSenderKJS {
    }
    export interface $MessageSenderKJS {
        /**
         * Sends a message in chat to something.
         * 
         * @param message A text component. It may be a string, which will be implicitly wrapped into a text component.
         */
        tell(message: $Component_): void;
        /**
         * Runs the specified console command.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getName(): $Component;
        getDisplayName(): $Component;
        setStatusMessage(message: $Component_): void;
        /**
         * Runs the specified console command. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        get name(): $Component;
        get displayName(): $Component;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
    }
    export class $AdvancementNodeKJS {
    }
    export interface $AdvancementNodeKJS {
        getId(): $ResourceLocation;
        self(): $AdvancementNode;
        getTitle(): $Component;
        getDescription(): $Component;
        getDisplay(): $DisplayInfo;
        hasDisplay(): boolean;
        getParent(): $AdvancementNode;
        getDisplayText(): $Component;
        addChild(a: $AdvancementNode): void;
        getChildren(): $Set<$AdvancementNode>;
        get id(): $ResourceLocation;
        get title(): $Component;
        get description(): $Component;
        get display(): $DisplayInfo;
        get parent(): $AdvancementNode;
        get displayText(): $Component;
        get children(): $Set<$AdvancementNode>;
    }
    export class $BlockBuilderProvider {
    }
    export interface $BlockBuilderProvider {
        getBlockBuilder(): $BlockBuilder;
        get blockBuilder(): $BlockBuilder;
    }
    export class $RecipeInputKJS {
    }
    export interface $RecipeInputKJS {
        find(filter: $SlotFilter_): $ItemStack;
        find(filter: $SlotFilter_, skip: number): $ItemStack;
        self(): $RecipeInput;
        findAll(filter: $SlotFilter_): $List<$ItemStack>;
        findAll(): $List<$ItemStack>;
    }
    export class $InventoryKJS {
    }
    export interface $InventoryKJS {
        getWidth(): number;
        getSlots(): number;
        getBlock(level: $Level_): $LevelBlock;
        isEmpty(): boolean;
        count(match: $ItemPredicate_): number;
        count(): number;
        find(): number;
        find(match: $ItemPredicate_): number;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        getAllItems(): $List<$ItemStack>;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getHeight(): number;
        isMutable(): boolean;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlotLimit(slot: number): number;
        asContainer(): $Container;
        setChanged(): void;
        get width(): number;
        get slots(): number;
        get empty(): boolean;
        get allItems(): $List<$ItemStack>;
        get height(): number;
        get mutable(): boolean;
    }
    export class $BlockKJS {
    }
    export interface $BlockKJS extends $BlockBuilderProvider, $BlockBehaviourKJS, $Replaceable {
        setRequiresTool(v: boolean): void;
        setLightEmission(v: number): void;
        setDestroySpeed(v: number): void;
        setBlockBuilder(b: $BlockBuilder): void;
        getBlock(): $Block;
        setNameKey(key: string): void;
        getBlockStates(): $List<$BlockState>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        set requiresTool(value: boolean);
        set lightEmission(value: number);
        set destroySpeed(value: number);
        set blockBuilder(value: $BlockBuilder);
        get block(): $Block;
        set nameKey(value: string);
        get blockStates(): $List<$BlockState>;
    }
    export class $EntityTypeKJS {
    }
    export interface $EntityTypeKJS extends $RegistryObjectKJS<$EntityType<never>> {
        kjs$getRegistry(): $Registry<$EntityType<never>>;
        kjs$getRegistryId(): $ResourceKey<$Registry<$EntityType<never>>>;
    }
    export class $ServerPlayerKJS {
    }
    export interface $ServerPlayerKJS extends $PlayerKJS {
        /**
         * Checks, whether the player is a server operator.
         */
        isOp(): boolean;
        /**
         * Kicks the player from the server with the provided reason.
         * 
         * @param reason A text component, containing the kick reason. It may be a string, which will be implicitly wrapped into a text component.
         */
        kick(reason: $Component_): void;
        /**
         * Kicks the player from the server with a generic reason.
         */
        kick(): void;
        /**
         * Bans the player from the server.
         * 
         * @param banner A string, that specifies who/what banned the player.
         * @param reason A string, that contains the ban reason.
         * @param banDuration Duration of a ban. Negative durations will result in a 10-year ban.
         */
        ban(banner: string, reason: string, banDuration: $Duration_): void;
        /**
         * Heals the player to full, and fully restores hunger and saturation.
         */
        heal(): void;
        notify(builder: $NotificationToastData_): void;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        getSpawnLocation(): $LevelBlock;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_, columns: number, rows: number): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_, columns: number): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_): void;
        isAdvancementDone(id: $ResourceLocation_): boolean;
        captureInventory(autoRestore: boolean): $Container;
        /**
         * Switches the player's gamemode between Creative and Survival.
         * To change the player's gamemode to a mode other than Creative or Survival, use `setGameMode`.
         * 
         * @param mode `true` to change the player's gamemode to Creative.
         * `false` to change the player's gamemode to Survival.
         */
        setCreativeMode(mode: boolean): void;
        revokeAdvancement(id: $ResourceLocation_): void;
        unlockAdvancement(id: $ResourceLocation_): void;
        setSpawnLocation(c: $LevelBlock): void;
        /**
         * Checks, whether the player is currently mining a block.
         */
        isMiningBlock(): boolean;
        setMouseItem(item: $ItemStack_): void;
        getStats(): $PlayerStatsJS;
        sendData(channel: string, data: $CompoundTag_): void;
        /**
         * Checks if the entity is a server-side player.
         */
        isServerPlayer(): this is $ServerPlayer;
        openChestGUI(title: $Component_, rows: number, gui: $Consumer_<$ChestMenuData>): void;
        openChestGUI(gui: $Consumer_<$KubeJSGUI>): void;
        setActivePostShader(id: $ResourceLocation_): void;
        setSelectedSlot(index: number): void;
        get op(): boolean;
        set creativeMode(value: boolean);
        get miningBlock(): boolean;
        set mouseItem(value: $ItemStack_);
        get stats(): $PlayerStatsJS;
        get serverPlayer(): boolean;
        set activePostShader(value: $ResourceLocation_);
        set selectedSlot(value: number);
    }
    /**
     * Values that may be interpreted as {@link $ServerPlayerKJS}.
     */
    export type $ServerPlayerKJS_ = (() => void);
    export class $BlockStateKJS {
    }
    export interface $BlockStateKJS extends $RegistryObjectKJS<$Block>, $Replaceable {
        getWebIconURL(size: number): $RelativeURL;
        toString(): string;
        randomTickOverride(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): boolean;
        setRequiresTool(v: boolean): void;
        setLightEmission(v: number): void;
        setDestroySpeed(v: number): void;
        getRegistry(): $Registry<$Block>;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        asHolder(): $Holder<$Block>;
        getId(): string;
        getKey(): $ResourceKey<$Block>;
        set requiresTool(value: boolean);
        set lightEmission(value: number);
        set destroySpeed(value: number);
        get registry(): $Registry<$Block>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get id(): string;
        get key(): $ResourceKey<$Block>;
    }
    export class $MinecraftEnvironmentKJS {
    }
    export interface $MinecraftEnvironmentKJS extends $MessageSenderKJS {
        scheduleRepeating(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeatingInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        schedule(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        getScheduledEvents(): $ScheduledEvents;
        get scheduledEvents(): $ScheduledEvents;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftEnvironmentKJS}.
     */
    export type $MinecraftEnvironmentKJS_ = (() => $ScheduledEvents);
    export class $ClientLevelKJS {
    }
    export interface $ClientLevelKJS extends $LevelKJS {
        kubeParticle(x: number, y: number, z: number, spriteSet: $SpriteSet): $KubeAnimatedParticle;
        self(): $EntityGetter;
    }
    /**
     * Values that may be interpreted as {@link $ClientLevelKJS}.
     */
    export type $ClientLevelKJS_ = (() => void);
    export class $BlockBehaviourKJS {
    }
    export interface $BlockBehaviourKJS extends $BlockProviderKJS {
        setHasCollision(v: boolean): void;
        setExplosionResistance(v: number): void;
        setRandomTickCallback(callback: $Consumer_<$RandomTickCallback>): void;
        setIsRandomlyTicking(v: boolean): void;
        setSpeedFactor(v: number): void;
        setSoundType(v: $SoundType_): void;
        setJumpFactor(v: number): void;
        setFriction(v: number): void;
        set hasCollision(value: boolean);
        set explosionResistance(value: number);
        set randomTickCallback(value: $Consumer_<$RandomTickCallback>);
        set isRandomlyTicking(value: boolean);
        set speedFactor(value: number);
        set soundType(value: $SoundType_);
        set jumpFactor(value: number);
        set friction(value: number);
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviourKJS}.
     */
    export type $BlockBehaviourKJS_ = (() => void);
    export class $ItemKJS {
    }
    export interface $ItemKJS extends $IngredientSupplierKJS, $RegistryObjectKJS<$Item> {
        getTypeData(): $Map<string, $Object>;
        setNameKey(key: string): void;
        getRegistry(): $Registry<$Item>;
        getRegistryId(): $ResourceKey<$Registry<$Item>>;
        setItemBuilder(b: $ItemBuilder): void;
        setCanRepair(repairable: boolean): void;
        getItemBuilder(): $ItemBuilder;
        getItem(): $Item;
        setCraftingRemainder(i: $Item_): void;
        getTypeItemStackKey(): $ItemStackKey;
        get typeData(): $Map<string, $Object>;
        set nameKey(value: string);
        get registry(): $Registry<$Item>;
        get registryId(): $ResourceKey<$Registry<$Item>>;
        set canRepair(value: boolean);
        get item(): $Item;
        set craftingRemainder(value: $Item_);
        get typeItemStackKey(): $ItemStackKey;
    }
    export class $ComponentKJS {
    }
    export interface $ComponentKJS extends $Component, $WithCodec, $WrappedJS {
        getCodec(): $Codec<never>;
        forEach(action: $Consumer_<$Component>): void;
        /**
         * @deprecated
         */
        rawCopy(): $MutableComponent;
        darkGray(): $MutableComponent;
        noColor(): $MutableComponent;
        darkAqua(): $MutableComponent;
        hasStyle(): boolean;
        clickOpenUrl(url: string): $MutableComponent;
        /**
         * @deprecated
         */
        component(): $Component;
        lightPurple(): $MutableComponent;
        asIterable(): $Iterable<$Component>;
        clickCopy(text: string): $MutableComponent;
        darkGreen(): $MutableComponent;
        darkRed(): $MutableComponent;
        darkPurple(): $MutableComponent;
        insertion(s: string): $MutableComponent;
        clickOpenFile(path: string): $MutableComponent;
        strikethrough(value: boolean): $MutableComponent;
        strikethrough(): $MutableComponent;
        hasSiblings(): boolean;
        /**
         * @deprecated
         */
        rawComponent(): $MutableComponent;
        isEmpty(): boolean;
        darkBlue(): $MutableComponent;
        obfuscated(value: boolean): $MutableComponent;
        obfuscated(): $MutableComponent;
        underlined(value: boolean): $MutableComponent;
        underlined(): $MutableComponent;
        aqua(): $MutableComponent;
        color(c: $KubeColor_): $MutableComponent;
        white(): $MutableComponent;
        gray(): $MutableComponent;
        yellow(): $MutableComponent;
        black(): $MutableComponent;
        green(): $MutableComponent;
        red(): $MutableComponent;
        bold(value: boolean): $MutableComponent;
        bold(): $MutableComponent;
        font(s: $ResourceLocation_): $MutableComponent;
        hover(s: $Component_): $MutableComponent;
        gold(): $MutableComponent;
        blue(): $MutableComponent;
        click(s: $ClickEvent_): $MutableComponent;
        italic(): $MutableComponent;
        italic(value: boolean): $MutableComponent;
        self(): $MutableComponent;
        clickRunCommand(command: string): $MutableComponent;
        clickChangePage(page: string): $MutableComponent;
        clickSuggestCommand(command: string): $MutableComponent;
        get codec(): $Codec<never>;
    }
    export class $MinecraftClientKJS {
    }
    export interface $MinecraftClientKJS extends $MinecraftEnvironmentKJS {
        getParticleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        tell(message: $Component_): void;
        self(): $Minecraft;
        setTitle(t: string): void;
        /**
         * Runs the specified console command client-side with the player's permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        isKeyDown(keyName: string): boolean;
        isKeyDown(key: number): boolean;
        getName(): $Component;
        getTitle(): string;
        isKeyBindDown(id: string): boolean;
        isCtrlDown(): boolean;
        isShiftDown(): boolean;
        isAltDown(): boolean;
        setStatusMessage(message: $Component_): void;
        /**
         * Runs the specified console command client-side with the player's permission level. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        setCurrentScreen(gui: $Screen): void;
        getKeyBindPressedTicks(id: string): number;
        getCurrentScreen(): $Screen;
        getBlockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        getCurrentWorldName(): string;
        isKeyMappingDown(key: $KeyMapping): boolean;
        get particleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        get name(): $Component;
        get ctrlDown(): boolean;
        get shiftDown(): boolean;
        get altDown(): boolean;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get blockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        get currentWorldName(): string;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftClientKJS}.
     */
    export type $MinecraftClientKJS_ = (() => void);
    export class $WindowKJS {
    }
    export interface $WindowKJS {
        kjs$loadIcons(original: $List_<$IoSupplier_<$InputStream>>): $List<$IoSupplier<$InputStream>>;
    }
    export class $RecipeManagerKJS {
    }
    export interface $RecipeManagerKJS extends $ReloadableServerResourceHolderKJS {
        kjs$getRecipeIdMap(): $Map<$ResourceLocation, $RecipeHolder<never>>;
        kjs$replaceRecipes(byName: $Map_<$ResourceLocation_, $RecipeHolder_<never>>): void;
    }
    export class $ContainerKJS {
    }
    export interface $ContainerKJS extends $InventoryKJS {
        getWidth(): number;
        getSlots(): number;
        getBlock(level: $Level_): $LevelBlock;
        self(): $Container;
        clear(): void;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getHeight(): number;
        isMutable(): boolean;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlotLimit(slot: number): number;
        asContainer(): $Container;
        setChanged(): void;
        get width(): number;
        get slots(): number;
        get height(): number;
        get mutable(): boolean;
    }
    export class $IngredientKJS {
    }
    export interface $IngredientKJS extends $ItemPredicate, $Replaceable, $WithCodec, $ItemMatch {
        getCodec(): $Codec<never>;
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, item: $ItemStack_, exact: boolean): boolean;
        withCount(count: number): $SizedIngredient;
        toIngredientString(ops: $DynamicOps<$Tag_>): string;
        except(subtracted: $Ingredient_): $Ingredient;
        and(ingredient: $Ingredient_): $Ingredient;
        or(ingredient: $Ingredient_): $Ingredient;
        getTagKey(): $TagKey<$Item>;
        asStack(): $SizedIngredient;
        getStackArray(): $ItemStack[];
        containsAnyTag(): boolean;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        asIngredient(): $Ingredient;
        self(): $Ingredient;
        isWildcard(): boolean;
        get codec(): $Codec<never>;
        get tagKey(): $TagKey<$Item>;
        get stackArray(): $ItemStack[];
        get wildcard(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IngredientKJS}.
     */
    export type $IngredientKJS_ = (() => void);
    export class $ItemEntityKJS {
    }
    export interface $ItemEntityKJS extends $EntityKJS {
        setDefaultPickUpDelay(): void;
        getTicksUntilDespawn(): number;
        setTicksUntilDespawn(ticks: number): void;
        setNoPickUpDelay(): void;
        setInfinitePickUpDelay(): void;
        isItem(): this is $ItemEntity;
        setNoDespawn(): void;
        getLifespan(): number;
        setLifespan(lifespan: number): void;
        /**
         * Gets the item stack corresponding to the item contained in the item entity.
         * Will be `null` if the contained stack is empty.
         */
        getItem(): $ItemStack;
    }
    export class $NoMixinException extends $IllegalStateException {
        constructor();
    }
    export class $ReloadableServerResourceHolderKJS {
    }
    export interface $ReloadableServerResourceHolderKJS {
        kjs$getResources(): $ReloadableServerResourcesKJS;
        kjs$setResources(resources: $ReloadableServerResourcesKJS): void;
    }
    export class $ItemStackKJS {
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
    }
    export interface $ItemStackKJS extends $SpecialEquality, $WithCodec, $IngredientSupplierKJS, $ToStringJS, $Replaceable, $ItemComponentFunctions, $MutableDataComponentHolderFunctions, $ItemMatch, $RegistryObjectKJS<$Item> {
        getCodec(): $Codec<$ItemStack>;
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, itemLike: $ItemLike_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, s: $ItemStack_, exact: boolean): boolean;
        withCount(c: number): this;
        areItemsEqual(other: $ItemStack_): boolean;
        toItemString0(dynamicOps: $DynamicOps<$Tag_>): string;
        /**
         * @deprecated
         */
        withChance(chance: number): $ItemStack;
        withCustomName(name: $Component_): this;
        withLore(lines: $Component_[], styledLines: $Component_[]): this;
        withLore(lines: $Component_[]): this;
        hasEnchantment(enchantment: $Holder_<$Enchantment>, level: number): boolean;
        enchant(enchantment: $Holder_<$Enchantment>, level: number): this;
        enchant(enchantments: $ItemEnchantments_): this;
        toItemString(): string;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getComponentString(): string;
        getWebIconURL(ops: $DynamicOps<$Tag_>, size: number): $RelativeURL;
        getTypeData(): $Map<string, $Object>;
        getBlock(): $Block;
        getRegistry(): $Registry<$Item>;
        getIdLocation(): $ResourceLocation;
        getRegistryId(): $ResourceKey<$Registry<$Item>>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        asHolder(): $Holder<$Item>;
        asIngredient(): $Ingredient;
        getId(): string;
        getMod(): string;
        toStringJS(): string;
        getKey(): $ResourceKey<$Item>;
        self(): $ItemStack;
        getEnchantments(): $ItemEnchantments;
        equalsIgnoringCount(stack: $ItemStack_): boolean;
        getHarvestSpeed(): number;
        getHarvestSpeed(block: $LevelBlock): number;
        areComponentsEqual(other: $ItemStack_): boolean;
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        get codec(): $Codec<$ItemStack>;
        get componentString(): string;
        get typeData(): $Map<string, $Object>;
        get block(): $Block;
        get registry(): $Registry<$Item>;
        get idLocation(): $ResourceLocation;
        get registryId(): $ResourceKey<$Registry<$Item>>;
        get id(): string;
        get mod(): string;
        get key(): $ResourceKey<$Item>;
        get enchantments(): $ItemEnchantments;
    }
    export class $ClientPlayerKJS {
    }
    export interface $ClientPlayerKJS extends $PlayerKJS {
        notify(notification: $NotificationToastData_): void;
        isMiningBlock(): boolean;
        getStats(): $PlayerStatsJS;
        sendData(channel: string, data: $CompoundTag_): void;
        /**
         * Checks if the entity is a client-side player.
         */
        isClientPlayer(): this is $AbstractClientPlayer;
        get miningBlock(): boolean;
        get stats(): $PlayerStatsJS;
        get clientPlayer(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientPlayerKJS}.
     */
    export type $ClientPlayerKJS_ = (() => void);
}
