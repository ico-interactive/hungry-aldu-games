import { $Codec } from "@package/com/mojang/serialization";
import { $Recipe, $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $ListTag_, $ListTag, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $HumanoidArm, $Pose_, $EntityDimensions, $Entity$RemovalReason, $LivingEntity, $WalkAnimationState, $HumanoidArm_, $Pose, $PortalProcessor, $Entity } from "@package/net/minecraft/world/entity";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $RandomSource, $SignatureValidator_, $Unit, $SignatureValidator, $OptionEnum } from "@package/net/minecraft/util";
import { $InteractionResult, $MenuProvider, $InteractionHand, $InteractionHand_, $Nameable, $Container } from "@package/net/minecraft/world";
import { $FakePlayer } from "@package/net/neoforged/neoforge/common/util";
import { $PlayerFreezeExtension } from "@package/dev/ryanhcode/sable/mixinterface/player_freezing";
import { $SoundEvent_, $SoundSource_ } from "@package/net/minecraft/sounds";
import { $IPlayerExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $NotificationToastData_, $AttachedData } from "@package/dev/latvian/mods/kubejs/util";
import { $Brain } from "@package/net/minecraft/world/entity/ai";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $PlayerEnderChestContainer, $AbstractContainerMenu, $ClickAction_, $InventoryMenu } from "@package/net/minecraft/world/inventory";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $MerchantOffers } from "@package/net/minecraft/world/item/trading";
import { $Item_, $Item, $ItemCooldowns, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MutableComponent, $Component_, $ThrowingComponent, $Component } from "@package/net/minecraft/network/chat";
import { $FishingHook } from "@package/net/minecraft/world/entity/projectile";
import { $Instant, $Duration_, $Duration } from "@package/java/time";
import { $DamageContainer } from "@package/net/neoforged/neoforge/common/damagesource";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $PlayerTypewriterExtension, $PlayerLaunchedPlungerExtension } from "@package/dev/simulated_team/simulated/mixin_interface";
import { $InventoryKJS, $PlayerKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $AABB_, $Vec3, $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Stat_ } from "@package/net/minecraft/stats";
import { $Vector3dc } from "@package/org/joml";
import { $AttributeSupplier$Builder } from "@package/net/minecraft/world/entity/ai/attributes";
import { $UUID_, $Set_, $Stack, $OptionalInt, $UUID, $List, $Collection_, $List_, $Collection } from "@package/java/util";
import { $PlayerStatsJS, $KubeJSInventoryListener } from "@package/dev/latvian/mods/kubejs/player";
import { $WardenSpawnTracker } from "@package/net/minecraft/world/entity/monster/warden";
import { $AbstractHorse } from "@package/net/minecraft/world/entity/animal/horse";
import { $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $Object2DoubleMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $GlobalPos, $BlockPos_, $GlobalPos_, $Direction_, $NonNullList } from "@package/net/minecraft/core";
import { $Enum, $Record } from "@package/java/lang";
import { $IntList, $Int2IntMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $GameType_, $BaseCommandBlock, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $LaunchedPlungerEntity } from "@package/dev/simulated_team/simulated/content/entities/launched_plunger";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $PrivateKey, $PublicKey } from "@package/java/security";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $EntityDataAccessor, $SynchedEntityData } from "@package/net/minecraft/network/syncher";
import { $Stages } from "@package/dev/latvian/mods/kubejs/stages";
import { $FoodData } from "@package/net/minecraft/world/food";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Scoreboard } from "@package/net/minecraft/world/scores";
import { $SignBlockEntity, $StructureBlockEntity, $JigsawBlockEntity, $CommandBlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/minecraft/world/entity/player" {
    export class $ProfileKeyPair extends $Record {
        privateKey(): $PrivateKey;
        publicKey(): $ProfilePublicKey;
        dueRefresh(): boolean;
        refreshedAfter(): $Instant;
        static CODEC: $Codec<$ProfileKeyPair>;
        constructor(arg0: $PrivateKey, arg1: $ProfilePublicKey_, arg2: $Instant);
    }
    /**
     * Values that may be interpreted as {@link $ProfileKeyPair}.
     */
    export type $ProfileKeyPair_ = { refreshedAfter?: $Instant, publicKey?: $ProfilePublicKey_, privateKey?: $PrivateKey,  } | [refreshedAfter?: $Instant, publicKey?: $ProfilePublicKey_, privateKey?: $PrivateKey, ];
    export class $ProfilePublicKey$Data extends $Record {
        write(buffer: $FriendlyByteBuf): void;
        key(): $PublicKey;
        hasExpired(gracePeriod: $Duration_): boolean;
        hasExpired(): boolean;
        expiresAt(): $Instant;
        keySignature(): number[];
        validateSignature(signatureValidator: $SignatureValidator_, profileId: $UUID_): boolean;
        static CODEC: $Codec<$ProfilePublicKey$Data>;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: $Instant, arg1: $PublicKey, arg2: number[]);
    }
    /**
     * Values that may be interpreted as {@link $ProfilePublicKey$Data}.
     */
    export type $ProfilePublicKey$Data_ = { expiresAt?: $Instant, key?: $PublicKey, keySignature?: number[],  } | [expiresAt?: $Instant, key?: $PublicKey, keySignature?: number[], ];
    export class $Abilities {
        setFlyingSpeed(flyingSpeed: number): void;
        setWalkingSpeed(flyingSpeed: number): void;
        getFlyingSpeed(): number;
        addSaveData(compound: $CompoundTag_): void;
        loadSaveData(compound: $CompoundTag_): void;
        getWalkingSpeed(): number;
        invulnerable: boolean;
        /**
         * @deprecated
         */
        mayfly: boolean;
        instabuild: boolean;
        mayBuild: boolean;
        flying: boolean;
        constructor();
    }
    export class $Inventory implements $Container, $Nameable {
        getName(): $Component;
        /**
         * Reads from the given tag list and fills the slots in the inventory with the correct items.
         */
        load(listTag: $ListTag_): void;
        isEmpty(): boolean;
        /**
         * Adds the stack to the specified slot in the player's inventory. Returns `false` if it's not possible to place the entire stack in the inventory.
         */
        add(slot: number, stack: $ItemStack_): boolean;
        /**
         * Adds the stack to the first empty slot in the player's inventory. Returns `false` if it's not possible to place the entire stack in the inventory.
         */
        add(stack: $ItemStack_): boolean;
        contains(predicate: $Predicate_<$ItemStack>): boolean;
        contains(tag: $TagKey_<$Item>): boolean;
        /**
         * Adds the stack to the first empty slot in the player's inventory. Returns `false` if it's not possible to place the entire stack in the inventory.
         */
        contains(stack: $ItemStack_): boolean;
        /**
         * Writes the inventory out as a list of compound tags. This is where the slot indices are used (+100 for armor, +80 for crafting).
         */
        save(listTag: $ListTag_): $ListTag;
        /**
         * Copy the ItemStack contents from another InventoryPlayer instance
         */
        replaceWith(playerInventory: $Inventory): void;
        /**
         * @return a player armor item (as an `ItemStack`) contained in specified armor slot
         */
        getItem(slot: number): $ItemStack;
        /**
         * Drop all armor and main inventory items.
         */
        tick(): void;
        wrapOperation$cph000$axiom$setPickedItem(instance: $Inventory, itemStack: $ItemStack_, original: $Operation_<any>): number;
        handler$cph000$axiom$swapPaintHead(d: number, ci: $CallbackInfo): void;
        /**
         * This function stores as many items of an ItemStack as possible in a matching slot and returns the quantity of left over items.
         */
        findSlotMatchingUnusedItem(stack: $ItemStack_): number;
        /**
         * This function stores as many items of an ItemStack as possible in a matching slot and returns the quantity of left over items.
         */
        getSlotWithRemainingSpace(stack: $ItemStack_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getSuitableHotbarSlot(): number;
        clearOrCountMatchingItems(stackPredicate: $Predicate_<$ItemStack>, maxCount: number, inventory: $Container): number;
        removeItem(stack: $ItemStack_): void;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(index: number, count: number): $ItemStack;
        /**
         * @return a player armor item (as an `ItemStack`) contained in specified armor slot
         */
        getArmor(slot: number): $ItemStack;
        pickSlot(index: number): void;
        /**
         * Change the selected item in the hotbar after a mouse scroll. Select the slot to the left if `direction` is positive, or to the right if negative.
         */
        swapPaint(direction: number): void;
        placeItemBackInInventory(stack: $ItemStack_, sendPacket: boolean): void;
        placeItemBackInInventory(stack: $ItemStack_): void;
        fillStackedContents(stackedContent: $StackedContents): void;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(index: number, stack: $ItemStack_): void;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        /**
         * Drop all armor and main inventory items.
         */
        dropAll(): void;
        /**
         * Drop all armor and main inventory items.
         */
        setChanged(): void;
        /**
         * Returns the item stack currently held by the player.
         */
        getSelected(): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getTimesChanged(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getFreeSlot(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        static getSelectionSize(): number;
        removeFromSelected(removeStack: boolean): $ItemStack;
        /**
         * Drop all armor and main inventory items.
         */
        clearContent(): void;
        getDestroySpeed(state: $BlockState_): number;
        /**
         * @return a player armor item (as an `ItemStack`) contained in specified armor slot
         */
        removeItemNoUpdate(slot: number): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getContainerSize(): number;
        static isHotbarSlot(index: number): boolean;
        setPickedItem(stack: $ItemStack_): void;
        /**
         * This function stores as many items of an ItemStack as possible in a matching slot and returns the quantity of left over items.
         */
        findSlotMatchingItem(stack: $ItemStack_): number;
        /**
         * This function stores as many items of an ItemStack as possible in a matching slot and returns the quantity of left over items.
         */
        getMaxStackSize(stack: $ItemStack_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getMaxStackSize(): number;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item_): number;
        startOpen(player: $Player): void;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item_>): boolean;
        stopOpen(player: $Player): void;
        /**
         * Adds the stack to the specified slot in the player's inventory. Returns `false` if it's not possible to place the entire stack in the inventory.
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        getDisplayName(): $Component;
        getCustomName(): $Component;
        hasCustomName(): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        getWidth(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getSlots(): number;
        getBlock(level: $Level_): $LevelBlock;
        self(): $Container;
        /**
         * Drop all armor and main inventory items.
         */
        clear(): void;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        /**
         * @return a player armor item (as an `ItemStack`) contained in specified armor slot
         */
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Adds the stack to the specified slot in the player's inventory. Returns `false` if it's not possible to place the entire stack in the inventory.
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        getHeight(): number;
        isMutable(): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(index: number, stack: $ItemStack_): void;
        getSlotLimit(slot: number): number;
        asContainer(): $Container;
        /**
         * Drop all armor and main inventory items.
         */
        setChanged(): void;
        isEmpty(): boolean;
        count(match: $ItemPredicate_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        count(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        find(): number;
        find(match: $ItemPredicate_): number;
        clear(match: $ItemPredicate_): void;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        static NOT_FOUND_INDEX: number;
        armor: $NonNullList<$ItemStack>;
        static INVENTORY_SIZE: number;
        static POP_TIME_DURATION: number;
        static SLOT_OFFHAND: number;
        static ALL_ARMOR_SLOTS: number[];
        items: $NonNullList<$ItemStack>;
        offhand: $NonNullList<$ItemStack>;
        selected: number;
        static HELMET_SLOT_ONLY: number[];
        player: $Player;
        constructor(player: $Player);
        get name(): $Component;
        get suitableHotbarSlot(): number;
        get timesChanged(): number;
        get freeSlot(): number;
        static get selectionSize(): number;
        get containerSize(): number;
        set pickedItem(value: $ItemStack_);
        get displayName(): $Component;
        get customName(): $Component;
        get width(): number;
        get slots(): number;
        get height(): number;
        get mutable(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $PlayerModelPart extends $Enum<$PlayerModelPart> {
        getName(): $Component;
        static values(): $PlayerModelPart[];
        static valueOf(arg0: string): $PlayerModelPart;
        getId(): string;
        getMask(): number;
        getBit(): number;
        static RIGHT_PANTS_LEG: $PlayerModelPart;
        static LEFT_PANTS_LEG: $PlayerModelPart;
        static JACKET: $PlayerModelPart;
        static RIGHT_SLEEVE: $PlayerModelPart;
        static HAT: $PlayerModelPart;
        static LEFT_SLEEVE: $PlayerModelPart;
        static CAPE: $PlayerModelPart;
        get id(): string;
        get mask(): number;
        get bit(): number;
    }
    /**
     * Values that may be interpreted as {@link $PlayerModelPart}.
     */
    export type $PlayerModelPart_ = "cape" | "jacket" | "left_sleeve" | "right_sleeve" | "left_pants_leg" | "right_pants_leg" | "hat";
    export class $StackedContents$RecipePicker {
    }
    export class $ProfilePublicKey extends $Record {
        data(): $ProfilePublicKey$Data;
        static createValidated(signatureValidator: $SignatureValidator_, profileId: $UUID_, data: $ProfilePublicKey$Data_): $ProfilePublicKey;
        createSignatureValidator(): $SignatureValidator;
        static EXPIRED_PROFILE_PUBLIC_KEY: $Component;
        static EXPIRY_GRACE_PERIOD: $Duration;
        static TRUSTED_CODEC: $Codec<$ProfilePublicKey>;
        constructor(arg0: $ProfilePublicKey$Data_);
    }
    /**
     * Values that may be interpreted as {@link $ProfilePublicKey}.
     */
    export type $ProfilePublicKey_ = { data?: $ProfilePublicKey$Data_,  } | [data?: $ProfilePublicKey$Data_, ];
    export class $Player$BedSleepingProblem extends $Enum<$Player$BedSleepingProblem> {
        static values(): $Player$BedSleepingProblem[];
        static valueOf(arg0: string): $Player$BedSleepingProblem;
        getMessage(): $Component;
        static OBSTRUCTED: $Player$BedSleepingProblem;
        static NOT_POSSIBLE_HERE: $Player$BedSleepingProblem;
        static NOT_POSSIBLE_NOW: $Player$BedSleepingProblem;
        static NOT_SAFE: $Player$BedSleepingProblem;
        static OTHER_PROBLEM: $Player$BedSleepingProblem;
        static TOO_FAR_AWAY: $Player$BedSleepingProblem;
        get message(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $Player$BedSleepingProblem}.
     */
    export type $Player$BedSleepingProblem_ = "not_possible_here" | "not_possible_now" | "too_far_away" | "obstructed" | "other_problem" | "not_safe";
    export class $ChatVisiblity extends $Enum<$ChatVisiblity> implements $OptionEnum {
        static values(): $ChatVisiblity[];
        static valueOf(arg0: string): $ChatVisiblity;
        getKey(): string;
        getId(): number;
        static byId(id: number): $ChatVisiblity;
        getCaption(): $Component;
        static SYSTEM: $ChatVisiblity;
        static HIDDEN: $ChatVisiblity;
        static FULL: $ChatVisiblity;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $ChatVisiblity}.
     */
    export type $ChatVisiblity_ = "full" | "system" | "hidden";
    export class $StackedContents {
        put(stackingIndex: number, increment: number): void;
        clear(): void;
        has(stackingIndex: number): boolean;
        static getStackingIndex(stack: $ItemStack_): number;
        take(stackingIndex: number, amount: number): number;
        accountStack(stack: $ItemStack_): void;
        accountStack(stack: $ItemStack_, amount: number): void;
        accountSimpleStack(stack: $ItemStack_): void;
        canCraft(recipe: $Recipe<never>, stackingIndexList: $IntList | null): boolean;
        canCraft(recipe: $Recipe<never>, stackingIndexList: $IntList | null, amount: number): boolean;
        getBiggestCraftableStack(recipe: $RecipeHolder_<never>, stackingIndexList: $IntList | null): number;
        getBiggestCraftableStack(recipe: $RecipeHolder_<never>, amount: number, stackingIndexList: $IntList | null): number;
        static fromStackingIndex(stackingIndex: number): $ItemStack;
        contents: $Int2IntMap;
        constructor();
    }
    export class $ProfilePublicKey$ValidationException extends $ThrowingComponent {
        constructor(arg0: $Component_);
    }
    export class $Player extends $LivingEntity implements $IPlayerExtension, $PlayerTypewriterExtension, $PlayerLaunchedPlungerExtension, $PlayerFreezeExtension, $PlayerKJS {
        /**
         * Creates and drops the provided item. Depending on the dropAround, it will drop the item around the player, instead of dropping the item from where the player is pointing at. Likewise, if includeThrowerName is true, the dropped item entity will have the thrower set as the player.
         */
        drop(droppedItem: $ItemStack_, dropAround: boolean, includeThrowerName: boolean): $ItemEntity;
        /**
         * Drops an item into the world.
         */
        drop(itemStack: $ItemStack_, includeThrowerName: boolean): $ItemEntity;
        causeFoodExhaustion(yaw: number): void;
        blockInteractionRange(): number;
        addItem(stack: $ItemStack_): boolean;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getScore(): number;
        /**
         * Add experience levels to this player.
         */
        setScore(levels: number): void;
        /**
         * Add a stat once
         */
        resetStat(stat: $Stat_<never>): void;
        openMenu(menu: $MenuProvider | null): $OptionalInt;
        /**
         * Attacks for the player the targeted entity with the currently equipped item.  The equipped item has hitEntity called on it. Args: targetEntity
         */
        crit(target: $Entity): void;
        /**
         * Attacks for the player the targeted entity with the currently equipped item.  The equipped item has hitEntity called on it. Args: targetEntity
         */
        magicCrit(target: $Entity): void;
        interactOn(entityToInteractOn: $Entity, hand: $InteractionHand_): $InteractionResult;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isScoping(): boolean;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isHurt(): boolean;
        setMainArm(hand: $HumanoidArm_): void;
        freeAt(pos: $BlockPos_): boolean;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        mayBuild(): boolean;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getLuck(): number;
        /**
         * Returns the player's FoodStats object.
         */
        getFoodData(): $FoodData;
        getPrefixes(): $Collection<$MutableComponent>;
        getCooldowns(): $ItemCooldowns;
        /**
         * Attacks for the player the targeted entity with the currently equipped item.  The equipped item has hitEntity called on it. Args: targetEntity
         */
        attack(target: $Entity): void;
        /**
         * Checks, whether the player is in Creative mode.
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isCreative(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        respawn(): void;
        /**
         * Returns whether this player can modify the block at a certain location with the given stack.
         * 
         * The position being queried is `pos.offset(facing.getOpposite())`.
         * 
         * @return Whether this player may modify the queried location in the current world
         * @see ItemStack#canPlaceOn(Block)
         * @see ItemStack#canEditBlocks()
         * @see PlayerCapabilities#allowEdit
         */
        mayUseItemAt(pos: $BlockPos_, facing: $Direction_, stack: $ItemStack_): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        stopFallFlying(): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        startFallFlying(): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        refreshDisplayName(): void;
        getForcedPose(): $Pose;
        getSuffixes(): $Collection<$MutableComponent>;
        isModelPartShown(part: $PlayerModelPart_): boolean;
        setForcedPose(pose: $Pose_ | null): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        onUpdateAbilities(): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getEnchantmentSeed(): number;
        getScoreboard(): $Scoreboard;
        sable$freezeTo(arg0: $UUID_, arg1: $Vector3dc): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        sable$teleport(): void;
        getStages(): $Stages;
        getInventory(): $InventoryKJS;
        getData(): $AttachedData<any>;
        handler$cjj000$fabric_entity_events_v1$injectElytraCheck(arg0: $CallbackInfoReturnable<any>): void;
        startSleepInBed(bedPos: $BlockPos_): $Either<$Player$BedSleepingProblem, $Unit>;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getSleepTimer(): number;
        awardRecipes(recipes: $Collection_<$RecipeHolder_<never>>): number;
        openTextEdit(signEntity: $SignBlockEntity, isFrontText: boolean): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        sweepAttack(): void;
        openStructureBlock(structureEntity: $StructureBlockEntity): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        hasContainerOpen(): boolean;
        openJigsawBlock(jigsawBlockEntity: $JigsawBlockEntity): void;
        awardRecipesByKey(recipes: $List_<$ResourceLocation_>): void;
        resetRecipes(recipes: $Collection_<$RecipeHolder_<never>>): number;
        getEnchantedDamage(entity: $Entity, damage: number, damageSource: $DamageSource_): number;
        openCommandBlock(commandBlockEntity: $CommandBlockEntity): void;
        sendMerchantOffers(containerId: number, offers: $MerchantOffers, villagerLevel: number, villagerXp: number, showProgress: boolean, canRestock: boolean): void;
        openItemGui(stack: $ItemStack_, hand: $InteractionHand_): void;
        openHorseInventory(horse: $AbstractHorse, inventory: $Container): void;
        getDigSpeed(arg0: $BlockState_, arg1: $BlockPos_ | null): number;
        /**
         * @deprecated
         */
        getDestroySpeed(state: $BlockState_): number;
        playNotifySound(sound: $SoundEvent_, source: $SoundSource_, volume: number, pitch: number): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        doCloseContainer(): void;
        stopSleepInBed(wakeImmediately: boolean, updateLevelForSleepingPlayers: boolean): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        wantsToStopRiding(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        closeMenu(): void;
        static createAttributes(): $AttributeSupplier$Builder;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        updateIsUnderwater(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        updatePlayerPose(): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        disableShield(): void;
        canHarmPlayer(other: $Player): boolean;
        /**
         * Add experience levels to this player.
         */
        increaseScore(levels: number): void;
        wrapOperation$dac000$axiom$tick_isSpectator(instance: $Player, original: $Operation_<any>): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        resetAttackStrengthTicker(): void;
        displayClientMessage(chatComponent: $Component_, actionBar: boolean): void;
        awardStat(statKey: $ResourceLocation_): void;
        awardStat(stat: $ResourceLocation_, increment: number): void;
        /**
         * Add a stat once
         */
        awardStat(stat: $Stat_<never>): void;
        /**
         * Adds a value to a statistic field.
         */
        awardStat(stat: $Stat_<never>, increment: number): void;
        canEat(canAlwaysEat: boolean): boolean;
        handler$dac000$axiom$getFlyingSpeed(cir: $CallbackInfoReturnable<any>): void;
        canPlayerFitWithinBlocksAndEntitiesWhen(pose: $Pose_): boolean;
        handler$dac000$axiom$updatePlayerPose(ci: $CallbackInfo): void;
        redirect$bim000$sable$fixRidingBoundingBox(arg0: $AABB_, arg1: $AABB_): $AABB;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isIgnoringFallDamageFromCurrentImpulse(): boolean;
        setIgnoreFallDamageFromCurrentImpulse(ignoreFallDamageFromCurrentImpulse: boolean): void;
        simulated$getCurrentTypewriter(): $BlockPos;
        simulated$setLaunchedPlunger(arg0: $LaunchedPlungerEntity): void;
        sable$getFrozenToSubLevelAnchor(): $Vector3dc;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        destroyVanishingCursedItems(): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        tryResetCurrentImpulseContext(): void;
        handler$dac000$axiom$travel(movementInput: $Vec3_, ci: $CallbackInfo): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getCurrentItemAttackStrengthDelay(): number;
        simulated$setCurrentTypewriter(pos: $BlockPos_): void;
        simulated$getLaunchedPlunger(): $LaunchedPlungerEntity;
        updateTutorialInventoryAction(carried: $ItemStack_, clicked: $ItemStack_, action: $ClickAction_): void;
        getInventoryChangeListener(): $KubeJSInventoryListener;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isReducedDebugInfo(): boolean;
        getAbilities(): $Abilities;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isLocalPlayer(): boolean;
        /**
         * Returns the GameProfile for this player
         */
        getGameProfile(): $GameProfile;
        getInventory(): $Inventory;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isTextFilteringEnabled(): boolean;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isSleepingLongEnough(): boolean;
        blockActionRestricted(level: $Level_, pos: $BlockPos_, gameMode: $GameType_): boolean;
        triggerRecipeCrafted(recipe: $RecipeHolder_<never>, items: $List_<$ItemStack_>): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        resetCurrentImpulseContext(): void;
        startAutoSpinAttack(ticks: number, damage: number, itemStack: $ItemStack_): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        tryToStartFallFlying(): boolean;
        /**
         * Add experience levels to this player.
         */
        giveExperiencePoints(levels: number): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getXpNeededForNextLevel(): number;
        openMinecartCommandBlock(commandEntity: $BaseCommandBlock): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        removeEntitiesOnShoulder(): void;
        setLastDeathLocation(lastDeathLocation: ($GlobalPos_) | undefined): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isSecondaryUseActive(): boolean;
        createItemCooldowns(): $ItemCooldowns;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isStayingOnGroundSurface(): boolean;
        /**
         * Returns a NBTTagCompound that can be used to store custom data for this entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        getShoulderEntityRight(): $CompoundTag;
        hasCorrectToolForDrops(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        hasCorrectToolForDrops(state: $BlockState_): boolean;
        setShoulderEntityLeft(compound: $CompoundTag_): void;
        getLastDeathLocation(): ($GlobalPos) | undefined;
        /**
         * Returns the percentage of attack power available based on the cooldown (zero to one).
         */
        getAttackStrengthScale(adjustTicks: number): number;
        /**
         * Returns a NBTTagCompound that can be used to store custom data for this entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        getShoulderEntityLeft(): $CompoundTag;
        entityInteractionRange(): number;
        setShoulderEntityRight(compound: $CompoundTag_): void;
        sable$getFrozenToSubLevel(): $UUID;
        canInteractWithBlock(pos: $BlockPos_, distance: number): boolean;
        /**
         * Returns the InventoryEnderChest of this player.
         */
        getEnderChestInventory(): $PlayerEnderChestContainer;
        canInteractWithEntity(entity: $Entity, distance: number): boolean;
        canInteractWithEntity(boundingBox: $AABB_, distance: number): boolean;
        /**
         * Add experience levels to this player.
         */
        giveExperienceLevels(levels: number): void;
        setReducedDebugInfo(ignoreFallDamageFromCurrentImpulse: boolean): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        sable$tickStopFreezing(): void;
        onEnchantmentPerformed(enchantedItem: $ItemStack_, levelCost: number): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        canUseGameMasterBlocks(): boolean;
        getWardenSpawnTracker(): ($WardenSpawnTracker) | undefined;
        setEntityOnShoulder(entityCompound: $CompoundTag_): boolean;
        getCraftingGrid(): $InventoryKJS;
        /**
         * Request to open a GUI on the client, from the server
         * 
         * Refer to `MenuType#create(IContainerFactory)` for creating a `MenuType` that can consume the
         * extra data sent to the client by this method.
         * 
         * The maximum size for #extraDataWriter is 32600 bytes.
         */
        openMenu(menuProvider: $MenuProvider, extraDataWriter: $Consumer_<$RegistryFriendlyByteBuf>): $OptionalInt;
        /**
         * Request to open a GUI on the client, from the server
         * 
         * Refer to `MenuType#create(IContainerFactory)` for creating a `MenuType` that can consume the
         * extra data sent to the client by this method.
         * 
         * Use `FriendlyByteBuf#readBlockPos()` to read the position you pass to this method.
         */
        openMenu(menuProvider: $MenuProvider, pos: $BlockPos_): $OptionalInt;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        mayFly(): boolean;
        isCloseEnough(entity: $Entity, distance: number): boolean;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isFakePlayer(): boolean;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getXp(): number;
        /**
         * Add experience levels to this player.
         */
        addXP(levels: number): void;
        /**
         * Add experience levels to this player.
         */
        setXp(levels: number): void;
        give(stack: $ItemStack_): void;
        notify(title: $Component_, text: $Component_): void;
        notify(builder: $NotificationToastData_): void;
        /**
         * Checks if the player is fake.
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isFake(): this is $FakePlayer;
        addFood(hunger: number, saturation: number): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getSaturation(): number;
        /**
         * Add experience levels to this player.
         */
        setXpLevel(levels: number): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isMiningBlock(): boolean;
        giveInHand(stack: $ItemStack_): void;
        getMouseItem(): $ItemStack;
        setMouseItem(stack: $ItemStack_): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getFoodLevel(): number;
        /**
         * Add experience levels to this player.
         */
        setFoodLevel(levels: number): void;
        getStats(): $PlayerStatsJS;
        setSaturation(yaw: number): void;
        addExhaustion(yaw: number): void;
        /**
         * Add experience levels to this player.
         */
        addXPLevels(levels: number): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getXpLevel(): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        boostElytraFlight(): void;
        /**
         * Add experience levels to this player.
         */
        setSelectedSlot(levels: number): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        sendInventoryUpdate(): void;
        getOpenInventory(): $AbstractContainerMenu;
        addItemCooldown(item: $Item_, ticks: number): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getSelectedSlot(): number;
        sendData(channel: string, data: $CompoundTag_): void;
        sendData(channel: string): void;
        lastHurtByPlayerTime: number;
        autoSpinAttackItemStack: $ItemStack;
        lerpYRot: number;
        static DEFAULT_BASE_GRAVITY: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static ENTITY_COUNTER: $AtomicInteger;
        lerpYHeadRot: number;
        useItem: $ItemStack;
        yHeadRot: number;
        yCloakO: number;
        noPhysics: boolean;
        fallFlyTicks: number;
        autoSpinAttackDmg: number;
        yo: number;
        jumpTriggerTime: number;
        static DATA_LIVING_ENTITY_FLAGS: $EntityDataAccessor<number>;
        yBodyRotO: number;
        static FLAG_ONFIRE: number;
        simulated$currentTypeWriter: $BlockPos;
        removalReason: $Entity$RemovalReason;
        zza: number;
        rotOffs: number;
        swingingArm: $InteractionHand;
        static CRAFTING_SLOT_OFFSET: number;
        static ID_TAG: string;
        static WAKE_UP_DURATION: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        simulated$launchedPlunger: $LaunchedPlungerEntity;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        appliedScale: number;
        static STANDING_DIMENSIONS: $EntityDimensions;
        static DATA_PLAYER_MODE_CUSTOMISATION: $EntityDataAccessor<number>;
        yya: number;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        static DEFAULT_MODEL_CUSTOMIZATION: number;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        static SWIMMING_BB_HEIGHT: number;
        static DEFAULT_ENTITY_INTERACTION_RANGE: number;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        experienceLevel: number;
        hurtDir: number;
        static DEFAULT_BABY_SCALE: number;
        static ATTRIBUTES_FIELD: string;
        static PERSISTED_NBT_TAG: string;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        zCloak: number;
        lerpHeadSteps: number;
        static $assertionsDisabled: boolean;
        flyDist: number;
        currentImpulseImpactPos: $Vec3;
        brain: $Brain<never>;
        static PASSENGERS_TAG: string;
        stringUUID: string;
        xCloakO: number;
        wasOnFire: boolean;
        autoSpinAttackTicks: number;
        attackAnim: number;
        noActionTime: number;
        zOld: number;
        timeOffs: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static LIVING_ENTITY_FLAG_SPIN_ATTACK: number;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        static ENDER_SLOT_OFFSET: number;
        firstTick: boolean;
        damageContainers: $Stack<$DamageContainer>;
        static ARMOR_SLOT_OFFSET: number;
        static SLEEP_DURATION: number;
        static HELD_ITEM_SLOT: number;
        yCloak: number;
        run: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        uuid: $UUID;
        xCloak: number;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        animStepO: number;
        lastHurtByPlayer: $Player;
        static BOARDING_COOLDOWN: number;
        static MAX_HEALTH: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        static DEFAULT_EYE_HEIGHT: number;
        enderChestInventory: $PlayerEnderChestContainer;
        static CROUCH_BB_HEIGHT: number;
        moveDist: number;
        enchantmentSeed: number;
        zCloakO: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        oRun: number;
        bob: number;
        experienceProgress: number;
        totalExperience: number;
        xOld: number;
        wasInPowderSnow: boolean;
        containerMenu: $AbstractContainerMenu;
        hurtTime: number;
        swinging: boolean;
        hurtMarked: boolean;
        attackStrengthTicker: number;
        useItemRemaining: number;
        entityData: $SynchedEntityData;
        static DEFAULT_MAIN_HAND: $HumanoidArm;
        foodData: $FoodData;
        static SLEEPING_DIMENSIONS: $EntityDimensions;
        deathTime: number;
        static DATA_PLAYER_MAIN_HAND: $EntityDataAccessor<number>;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        wasUnderwater: boolean;
        defaultFlySpeed: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DEFAULT_VEHICLE_ATTACHMENT: $Vec3;
        inventoryMenu: $InventoryMenu;
        inventory: $Inventory;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static LIVING_ENTITY_FLAG_OFF_HAND: number;
        random: $RandomSource;
        static DATA_SHOULDER_LEFT: $EntityDataAccessor<$CompoundTag>;
        lerpSteps: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        minorHorizontalCollision: boolean;
        static LIVING_ENTITY_FLAG_IS_USING: number;
        levelCallback: $EntityInLevelCallback;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        lerpX: number;
        lerpZ: number;
        lerpY: number;
        lerpXRot: number;
        fishing: $FishingHook;
        removeArrowTime: number;
        walkDistO: number;
        static SWIMMING_BB_WIDTH: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        animStep: number;
        yBodyRot: number;
        blocksBuilding: boolean;
        takeXpDelay: number;
        deathScore: number;
        static DEFAULT_BLOCK_INTERACTION_RANGE: number;
        oBob: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        static DATA_SHOULDER_RIGHT: $EntityDataAccessor<$CompoundTag>;
        currentExplosionCause: $Entity;
        constructor(level: $Level_, pos: $BlockPos_, yRot: number, gameProfile: $GameProfile);
        get scoping(): boolean;
        get hurt(): boolean;
        set mainArm(value: $HumanoidArm_);
        get luck(): number;
        get prefixes(): $Collection<$MutableComponent>;
        get cooldowns(): $ItemCooldowns;
        get creative(): boolean;
        get suffixes(): $Collection<$MutableComponent>;
        get scoreboard(): $Scoreboard;
        get stages(): $Stages;
        get data(): $AttachedData<any>;
        get sleepTimer(): number;
        get ignoringFallDamageFromCurrentImpulse(): boolean;
        set ignoreFallDamageFromCurrentImpulse(value: boolean);
        get currentItemAttackStrengthDelay(): number;
        get inventoryChangeListener(): $KubeJSInventoryListener;
        get abilities(): $Abilities;
        get localPlayer(): boolean;
        get gameProfile(): $GameProfile;
        get textFilteringEnabled(): boolean;
        get sleepingLongEnough(): boolean;
        get xpNeededForNextLevel(): number;
        get secondaryUseActive(): boolean;
        get stayingOnGroundSurface(): boolean;
        get wardenSpawnTracker(): ($WardenSpawnTracker) | undefined;
        set entityOnShoulder(value: $CompoundTag_);
        get craftingGrid(): $InventoryKJS;
        get fakePlayer(): boolean;
        get fake(): boolean;
        get miningBlock(): boolean;
        get stats(): $PlayerStatsJS;
        get openInventory(): $AbstractContainerMenu;
    }
}
