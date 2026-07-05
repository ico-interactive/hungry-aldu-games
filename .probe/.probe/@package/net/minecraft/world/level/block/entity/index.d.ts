import { $StructureTemplatePool } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $Services_ } from "@package/net/minecraft/server";
import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeHolder, $AbstractCookingRecipe, $RecipeHolder_, $CampfireCookingRecipe, $RecipeType_, $CraftingInput, $CraftingInput$Positioned } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture, $Executor, $Executor_ } from "@package/java/util/concurrent";
import { $EntityType_, $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $AttachmentHolder } from "@package/net/neoforged/neoforge/attachment";
import { $FormattedCharSequence, $RandomSource, $StringRepresentable } from "@package/net/minecraft/util";
import { $VaultBlockEntity } from "@package/net/minecraft/world/level/block/entity/vault";
import { $RandomizableContainer, $MenuProvider, $Nameable, $Container, $Clearable, $LockCode_, $WorldlyContainer } from "@package/net/minecraft/world";
import { $CrashReportCategory } from "@package/net/minecraft";
import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $IBlockEntityExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf, $Connection } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $DataComponentMap$Builder, $DataComponentMap, $DataComponentMap_, $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $CraftingContainer, $AbstractContainerMenu, $ContainerData, $StackedContentsCompatible, $RecipeCraftingHolder } from "@package/net/minecraft/world/inventory";
import { $TransactionContext } from "@package/net/fabricmc/fabric/api/transfer/v1/transaction";
import { $Cullable } from "@package/dev/tr7zw/entityculling/versionless/access";
import { $Item, $JukeboxSongPlayer, $Item_, $DyeColor, $DyeColor_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $FilteredText_ } from "@package/net/minecraft/server/network";
import { $Inventory, $Player, $StackedContents } from "@package/net/minecraft/world/entity/player";
import { $SpecialLogicInventory } from "@package/net/fabricmc/fabric/impl/transfer/item";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $StructureMode, $StructureMode_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $VibrationSystem$User, $VibrationSystem$Data, $VibrationSystem, $VibrationSystem$Listener } from "@package/net/minecraft/world/level/gameevent/vibrations";
import { $BlockEntityTypeAccessor } from "@package/net/neoforged/neoforge/mixins";
import { $Mirror_, $Mirror, $Block, $Block_, $Rotation_, $SculkSpreader, $Rotation } from "@package/net/minecraft/world/level/block";
import { $Vec3, $Vec3_, $AABB } from "@package/net/minecraft/world/phys";
import { $Type } from "@package/com/mojang/datafixers/types";
import { $RenderDataBlockEntity } from "@package/net/fabricmc/fabric/api/blockview/v2";
import { $FabricBlockEntityType, $FabricBlockEntityType$Builder } from "@package/net/fabricmc/fabric/api/object/builder/v1/block/entity";
import { $PistonMovingBlockEntity } from "@package/net/minecraft/world/level/block/piston";
import { $GameEventListener, $GameEvent, $GameEventListener$Provider, $PositionSource, $GameEvent$Context_, $GameEventListener$DeliveryMode } from "@package/net/minecraft/world/level/gameevent";
import { $UUID_, $Set_, $Map, $List, $Map_, $List_, $Set, $UUID } from "@package/java/util";
import { $BlockEntityTypeExtension } from "@package/dev/engine_room/flywheel/impl/extension";
import { $ObjIntConsumer_, $UnaryOperator_, $BooleanSupplier_, $Predicate_, $Function_ } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $BlockPos, $BlockPos_, $Holder$Reference, $Vec3i, $HolderLookup$Provider, $Holder, $Direction_, $NonNullList, $Direction, $Registry, $HolderGetter, $Holder_ } from "@package/net/minecraft/core";
import { $RenderAttachmentBlockEntity } from "@package/net/fabricmc/fabric/api/rendering/data/v1";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $ContainerSingleItem$BlockContainerSingleItem } from "@package/net/minecraft/world/ticks";
import { $ItemLike_, $Spawner, $BlockGetter, $BaseCommandBlock, $BaseSpawner, $Level_, $Level } from "@package/net/minecraft/world/level";
import { $TagKey_, $TagKey } from "@package/net/minecraft/tags";
import { $TrialSpawner$StateAccessor, $TrialSpawner, $TrialSpawnerState_, $TrialSpawnerState } from "@package/net/minecraft/world/level/block/entity/trialspawner";
import { $Logger } from "@package/org/slf4j";
import { $BlockEntityVisualizer } from "@package/dev/engine_room/flywheel/api/visualization";
import { $CustomData, $ResolvableProfile_, $ResolvableProfile } from "@package/net/minecraft/world/item/component";
import { $ClientboundBlockEntityDataPacket, $ClientGamePacketListener } from "@package/net/minecraft/network/protocol/game";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as trialspawner from "@package/net/minecraft/world/level/block/entity/trialspawner";
export * as vault from "@package/net/minecraft/world/level/block/entity/vault";

declare module "@package/net/minecraft/world/level/block/entity" {
    export class $BeehiveBlockEntity$BeeReleaseStatus extends $Enum<$BeehiveBlockEntity$BeeReleaseStatus> {
        static values(): $BeehiveBlockEntity$BeeReleaseStatus[];
        static valueOf(arg0: string): $BeehiveBlockEntity$BeeReleaseStatus;
        static BEE_RELEASED: $BeehiveBlockEntity$BeeReleaseStatus;
        static EMERGENCY: $BeehiveBlockEntity$BeeReleaseStatus;
        static HONEY_DELIVERED: $BeehiveBlockEntity$BeeReleaseStatus;
    }
    /**
     * Values that may be interpreted as {@link $BeehiveBlockEntity$BeeReleaseStatus}.
     */
    export type $BeehiveBlockEntity$BeeReleaseStatus_ = "honey_delivered" | "bee_released" | "emergency";
    export class $SculkCatalystBlockEntity extends $BlockEntity implements $GameEventListener$Provider<$SculkCatalystBlockEntity$CatalystListener> {
        getListener(): $SculkCatalystBlockEntity$CatalystListener;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, sculkCatalyst: $SculkCatalystBlockEntity): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get listener(): $SculkCatalystBlockEntity$CatalystListener;
    }
    export class $HopperBlockEntity extends $RandomizableContainerBlockEntity implements $Hopper {
        setCooldown(cooldownTime: number): void;
        /**
         * @return `false` if the `container` has any room to place items in
         */
        static isFullContainer(container: $Container, direction: $Direction_): boolean;
        isGridAligned(): boolean;
        getLastUpdateTime(): number;
        isOnCustomCooldown(): boolean;
        static suckInItems(level: $Level_, hopper: $Hopper): boolean;
        static getItemsAtAndAbove(level: $Level_, hopper: $Hopper): $List<$ItemEntity>;
        /**
         * @return the x position for this hopper.
         */
        getLevelY(): number;
        /**
         * @return the x position for this hopper.
         */
        getLevelX(): number;
        /**
         * @return the x position for this hopper.
         */
        getLevelZ(): number;
        static addItem(container: $Container, item: $ItemEntity): boolean;
        /**
         * Attempts to place the passed stack in the container, using as many slots as required.
         * @return any leftover stack
         */
        static addItem(source: $Container | null, destination: $Container, stack: $ItemStack_, direction: $Direction_ | null): $ItemStack;
        static getContainerAt(level: $Level_, pos: $BlockPos_): $Container;
        static pushItemsTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $HopperBlockEntity): void;
        static entityInside(level: $Level_, pos: $BlockPos_, state: $BlockState_, entity: $Entity, blockEntity: $HopperBlockEntity): void;
        getSuckAabb(): $AABB;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        level: $Level;
        static MOVE_ITEM_SPEED: number;
        static ATTACHMENTS_NBT_KEY: string;
        static HOPPER_CONTAINER_SIZE: number;
        lootTableSeed: number;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        set cooldown(value: number);
        get gridAligned(): boolean;
        get lastUpdateTime(): number;
        get onCustomCooldown(): boolean;
        get levelY(): number;
        get levelX(): number;
        get levelZ(): number;
        get suckAabb(): $AABB;
    }
    export interface $DecoratedPotPattern extends RegistryMarked<RegistryTypes.DecoratedPotPatternTag, RegistryTypes.DecoratedPotPattern> {}
    export class $BlockEntityTicker<T extends $BlockEntity> {
    }
    export interface $BlockEntityTicker<T extends $BlockEntity> {
        tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: T): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityTicker}.
     */
    export type $BlockEntityTicker_<T> = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: T) => void);
    export class $SkullBlockEntity extends $BlockEntity {
        static clear(): void;
        static setup(services: $Services_, mainThreadExecutor: $Executor_): void;
        setOwner(owner: $ResolvableProfile_ | null): void;
        static fetchProfileById(id: $UUID_, services: $Services_, cacheUninitialized: $BooleanSupplier_): $CompletableFuture<($GameProfile) | undefined>;
        static fetchProfileByName(name: string, services: $Services_): $CompletableFuture<($GameProfile) | undefined>;
        getAnimation(partialTick: number): number;
        getOwnerProfile(): $ResolvableProfile;
        static fetchGameProfile(profileUuid: $UUID_): $CompletableFuture<($GameProfile) | undefined>;
        static fetchGameProfile(profileName: string): $CompletableFuture<($GameProfile) | undefined>;
        static animation(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $SkullBlockEntity): void;
        getNoteBlockSound(): $ResourceLocation;
        worldPosition: $BlockPos;
        static CHECKED_MAIN_THREAD_EXECUTOR: $Executor;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        set owner(value: $ResolvableProfile_ | null);
        get ownerProfile(): $ResolvableProfile;
        get noteBlockSound(): $ResourceLocation;
    }
    export class $LidBlockEntity {
    }
    export interface $LidBlockEntity {
        getOpenNess(partialTicks: number): number;
    }
    /**
     * Values that may be interpreted as {@link $LidBlockEntity}.
     */
    export type $LidBlockEntity_ = ((arg0: number) => number);
    export class $ComparatorBlockEntity extends $BlockEntity {
        getOutputSignal(): number;
        setOutputSignal(output: number): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $DecoratedPotPattern extends $Record {
        assetId(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $DecoratedPotPattern}.
     */
    export type $DecoratedPotPattern_ = RegistryTypes.DecoratedPotPattern | { assetId?: $ResourceLocation_,  } | [assetId?: $ResourceLocation_, ];
    export class $JigsawBlockEntity$JointType extends $Enum<$JigsawBlockEntity$JointType> implements $StringRepresentable {
        static values(): $JigsawBlockEntity$JointType[];
        static valueOf(arg0: string): $JigsawBlockEntity$JointType;
        static byName(name: string): ($JigsawBlockEntity$JointType) | undefined;
        getTranslatedName(): $Component;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static ROLLABLE: $JigsawBlockEntity$JointType;
        static ALIGNED: $JigsawBlockEntity$JointType;
        get translatedName(): $Component;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $JigsawBlockEntity$JointType}.
     */
    export type $JigsawBlockEntity$JointType_ = "rollable" | "aligned";
    export class $CommandBlockEntity$Mode extends $Enum<$CommandBlockEntity$Mode> {
        static values(): $CommandBlockEntity$Mode[];
        static valueOf(arg0: string): $CommandBlockEntity$Mode;
        static AUTO: $CommandBlockEntity$Mode;
        static REDSTONE: $CommandBlockEntity$Mode;
        static SEQUENCE: $CommandBlockEntity$Mode;
    }
    /**
     * Values that may be interpreted as {@link $CommandBlockEntity$Mode}.
     */
    export type $CommandBlockEntity$Mode_ = "sequence" | "auto" | "redstone";
    export class $ChestLidController {
        tickLid(): void;
        getOpenness(partialTicks: number): number;
        shouldBeOpen(shouldBeOpen: boolean): void;
        constructor();
    }
    export class $BlockEntity$DataComponentInput {
    }
    export interface $BlockEntity$DataComponentInput {
    }
    export class $BeehiveBlockEntity$BeeData {
    }
    export class $BeaconBlockEntity extends $BlockEntity implements $MenuProvider, $Nameable {
        getName(): $Component;
        getDisplayName(): $Component;
        static tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $BeaconBlockEntity): void;
        static filterEffect(effect: $Holder_<$MobEffect> | null): $Holder<$MobEffect>;
        getBeamSections(): $List<$BeaconBlockEntity$BeaconBeamSection>;
        static playSound(level: $Level_, pos: $BlockPos_, sound: $SoundEvent_): void;
        createMenu(containerId: number, playerInventory: $Inventory, player: $Player): $AbstractContainerMenu;
        getCustomName(): $Component;
        /**
         * Sets the custom name for this beacon.
         */
        setCustomName(name: $Component_ | null): void;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        hasCustomName(): boolean;
        /**
         * Allows the menu provider to write additional data to be read by `IContainerFactory#create(int, Inventory, RegistryFriendlyByteBuf)`
         * when the menu is created on the client-side.
         */
        writeClientSideData(menu: $AbstractContainerMenu, buffer: $RegistryFriendlyByteBuf): void;
        shouldCloseCurrentScreen(): boolean;
        primaryPower: $Holder<$MobEffect>;
        static BEACON_EFFECTS: $List<$List<$Holder<$MobEffect>>>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        beamSections: $List<$BeaconBlockEntity$BeaconBeamSection>;
        worldPosition: $BlockPos;
        secondaryPower: $Holder<$MobEffect>;
        static DATA_SECONDARY: number;
        static NUM_DATA_VALUES: number;
        static DATA_LEVELS: number;
        levels: number;
        static DATA_PRIMARY: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get name(): $Component;
        get displayName(): $Component;
    }
    export class $SculkShriekerBlockEntity$VibrationUser implements $VibrationSystem$User {
        canTriggerAvoidVibration(): boolean;
        calculateTravelTimeInTicks(arg0: number): number;
        getListenableEvents(): $TagKey<$GameEvent>;
        isValidVibration(arg0: $Holder_<$GameEvent>, arg1: $GameEvent$Context_): boolean;
        onDataChanged(): void;
        requiresAdjacentChunksToBeTicking(): boolean;
        get listenableEvents(): $TagKey<$GameEvent>;
    }
    export class $SignText {
        getMessage(index: number, isFiltered: boolean): $Component;
        setColor(color: $DyeColor_): $SignText;
        setHasGlowingText(hasGlowingText: boolean): $SignText;
        hasGlowingText(): boolean;
        hasMessage(player: $Player): boolean;
        hasAnyClickCommands(player: $Player): boolean;
        getRenderMessages(renderMessagesFiltered: boolean, formatter: $Function_<$Component, $FormattedCharSequence>): $FormattedCharSequence[];
        setMessage(index: number, text: $Component_): $SignText;
        setMessage(index: number, text: $Component_, filteredText: $Component_): $SignText;
        getMessages(isFiltered: boolean): $Component[];
        getColor(): $DyeColor;
        static DIRECT_CODEC: $Codec<$SignText>;
        static LINES: number;
        constructor();
        constructor(messages: $Component_[], filteredMessages: $Component_[], color: $DyeColor_, hasGlowingText: boolean);
    }
    export class $BedBlockEntity extends $BlockEntity {
        setColor(color: $DyeColor_): void;
        getColor(): $DyeColor;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_, color: $DyeColor_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $TrappedChestBlockEntity extends $ChestBlockEntity {
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        lootTableSeed: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityType<T extends $BlockEntity> implements $BlockEntityTypeAccessor, $BlockEntityTypeExtension<any>, $FabricBlockEntityType {
        static getKey(blockEntityType: $BlockEntityType_<never>): $ResourceLocation;
        create(pos: $BlockPos_, state: $BlockState_): $Object;
        isValid(state: $BlockState_): boolean;
        flywheel$getVisualizer(): $BlockEntityVisualizer<any>;
        flywheel$setVisualizer(visualizer: $BlockEntityVisualizer<any>): void;
        builtInRegistryHolder(): $Holder$Reference<$BlockEntityType<never>>;
        getValidBlocks(): $Set<$Block>;
        addSupportedBlock(arg0: $Block_): void;
        getBlockEntity(level: $BlockGetter, pos: $BlockPos_): $Object;
        neoforge$setValidBlocks(validBlocks: $Set_<$Block_>): void;
        static BLAST_FURNACE: $BlockEntityType<$BlastFurnaceBlockEntity>;
        static HANGING_SIGN: $BlockEntityType<$HangingSignBlockEntity>;
        static COMPARATOR: $BlockEntityType<$ComparatorBlockEntity>;
        static VAULT: $BlockEntityType<$VaultBlockEntity>;
        static SKULL: $BlockEntityType<$SkullBlockEntity>;
        static CHISELED_BOOKSHELF: $BlockEntityType<$ChiseledBookShelfBlockEntity>;
        static JIGSAW: $BlockEntityType<$JigsawBlockEntity>;
        static DECORATED_POT: $BlockEntityType<$DecoratedPotBlockEntity>;
        static BEACON: $BlockEntityType<$BeaconBlockEntity>;
        static CRAFTER: $BlockEntityType<$CrafterBlockEntity>;
        validBlocks: $Set<$Block>;
        static FURNACE: $BlockEntityType<$FurnaceBlockEntity>;
        static BEEHIVE: $BlockEntityType<$BeehiveBlockEntity>;
        static PISTON: $BlockEntityType<$PistonMovingBlockEntity>;
        static TRAPPED_CHEST: $BlockEntityType<$TrappedChestBlockEntity>;
        static END_PORTAL: $BlockEntityType<$TheEndPortalBlockEntity>;
        static ENDER_CHEST: $BlockEntityType<$EnderChestBlockEntity>;
        static COMMAND_BLOCK: $BlockEntityType<$CommandBlockEntity>;
        static SIGN: $BlockEntityType<$SignBlockEntity>;
        static STRUCTURE_BLOCK: $BlockEntityType<$StructureBlockEntity>;
        static BELL: $BlockEntityType<$BellBlockEntity>;
        static ENCHANTING_TABLE: $BlockEntityType<$EnchantingTableBlockEntity>;
        static BREWING_STAND: $BlockEntityType<$BrewingStandBlockEntity>;
        static BED: $BlockEntityType<$BedBlockEntity>;
        static MOB_SPAWNER: $BlockEntityType<$SpawnerBlockEntity>;
        static CALIBRATED_SCULK_SENSOR: $BlockEntityType<$CalibratedSculkSensorBlockEntity>;
        static SCULK_CATALYST: $BlockEntityType<$SculkCatalystBlockEntity>;
        static CONDUIT: $BlockEntityType<$ConduitBlockEntity>;
        static CAMPFIRE: $BlockEntityType<$CampfireBlockEntity>;
        static END_GATEWAY: $BlockEntityType<$TheEndGatewayBlockEntity>;
        static SMOKER: $BlockEntityType<$SmokerBlockEntity>;
        static DISPENSER: $BlockEntityType<$DispenserBlockEntity>;
        static SCULK_SHRIEKER: $BlockEntityType<$SculkShriekerBlockEntity>;
        static HOPPER: $BlockEntityType<$HopperBlockEntity>;
        static CHEST: $BlockEntityType<$ChestBlockEntity>;
        static DAYLIGHT_DETECTOR: $BlockEntityType<$DaylightDetectorBlockEntity>;
        static BANNER: $BlockEntityType<$BannerBlockEntity>;
        static SCULK_SENSOR: $BlockEntityType<$SculkSensorBlockEntity>;
        static TRIAL_SPAWNER: $BlockEntityType<$TrialSpawnerBlockEntity>;
        static LECTERN: $BlockEntityType<$LecternBlockEntity>;
        static SHULKER_BOX: $BlockEntityType<$ShulkerBoxBlockEntity>;
        static BRUSHABLE_BLOCK: $BlockEntityType<$BrushableBlockEntity>;
        static JUKEBOX: $BlockEntityType<$JukeboxBlockEntity>;
        static BARREL: $BlockEntityType<$BarrelBlockEntity>;
        static DROPPER: $BlockEntityType<$DropperBlockEntity>;
        constructor(factory: $BlockEntityType$BlockEntitySupplier_<$Object>, validBlocks: $Set_<$Block_>, dataType: $Type<never>);
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityType}.
     */
    export type $BlockEntityType_<T> = RegistryTypes.BlockEntityType;
    export class $SmokerBlockEntity extends $AbstractFurnaceBlockEntity {
        dataAccess: $ContainerData;
        static DATA_LIT_DURATION: number;
        level: $Level;
        cookingTotalTime: number;
        static SLOT_INPUT: number;
        static DATA_COOKING_PROGRESS: number;
        static ATTACHMENTS_NBT_KEY: string;
        static BURN_COOL_SPEED: number;
        remove: boolean;
        cookingProgress: number;
        litDuration: number;
        worldPosition: $BlockPos;
        static DATA_COOKING_TOTAL_TIME: number;
        static BURN_TIME_STANDARD: number;
        static SLOT_RESULT: number;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        items: $NonNullList<$ItemStack>;
        static SLOT_FUEL: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $CampfireBlockEntity extends $BlockEntity implements $Clearable {
        placeFood(entity: $LivingEntity | null, food: $ItemStack_, cookTime: number): boolean;
        /**
         * @return the items currently held in this campfire
         */
        getItems(): $NonNullList<$ItemStack>;
        static cookTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $CampfireBlockEntity): void;
        clearContent(): void;
        static cooldownTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $CampfireBlockEntity): void;
        getCookableRecipe(stack: $ItemStack_): ($RecipeHolder<$CampfireCookingRecipe>) | undefined;
        static particleTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $CampfireBlockEntity): void;
        dowse(): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get items(): $NonNullList<$ItemStack>;
    }
    export class $BarrelBlockEntity extends $RandomizableContainerBlockEntity {
        playSound(state: $BlockState_, sound: $SoundEvent_): void;
        updateBlockState(state: $BlockState_, open: boolean): void;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        recheckOpen(): void;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        lootTableSeed: number;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BeaconBlockEntity$BeaconBeamSection {
        increaseHeight(): void;
        getHeight(): number;
        getColor(): number;
        color: number;
        constructor(color: number);
        get height(): number;
    }
    export class $SculkSensorBlockEntity$VibrationUser implements $VibrationSystem$User {
        canTriggerAvoidVibration(): boolean;
        calculateTravelTimeInTicks(distance: number): number;
        getListenableEvents(): $TagKey<$GameEvent>;
        isValidVibration(gameEvent: $Holder_<$GameEvent>, context: $GameEvent$Context_): boolean;
        onDataChanged(): void;
        requiresAdjacentChunksToBeTicking(): boolean;
        get listenableEvents(): $TagKey<$GameEvent>;
    }
    export class $PotDecorations extends $Record {
        static load(tag: $CompoundTag_ | null): $PotDecorations;
        save(tag: $CompoundTag_): $CompoundTag;
        left(): ($Item) | undefined;
        right(): ($Item) | undefined;
        front(): ($Item) | undefined;
        back(): ($Item) | undefined;
        ordered(): $List<$Item>;
        static CODEC: $Codec<$PotDecorations>;
        static EMPTY: $PotDecorations;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PotDecorations>;
        constructor(arg0: ($Item_) | undefined, arg1: ($Item_) | undefined, arg2: ($Item_) | undefined, arg3: ($Item_) | undefined);
        constructor(back: $Item_, left: $Item_, right: $Item_, front: $Item_);
    }
    /**
     * Values that may be interpreted as {@link $PotDecorations}.
     */
    export type $PotDecorations_ = { left?: ($Item_) | undefined, back?: ($Item_) | undefined, front?: ($Item_) | undefined, right?: ($Item_) | undefined,  } | [left?: ($Item_) | undefined, back?: ($Item_) | undefined, front?: ($Item_) | undefined, right?: ($Item_) | undefined, ];
    export class $BannerPatternLayers extends $Record {
        layers(): $List<$BannerPatternLayers$Layer>;
        removeLast(): $BannerPatternLayers;
        static CODEC: $Codec<$BannerPatternLayers>;
        static LOGGER: $Logger;
        static EMPTY: $BannerPatternLayers;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BannerPatternLayers>;
        constructor(arg0: $List_<$BannerPatternLayers$Layer_>);
    }
    /**
     * Values that may be interpreted as {@link $BannerPatternLayers}.
     */
    export type $BannerPatternLayers_ = { layers?: $List_<$BannerPatternLayers$Layer_>,  } | [layers?: $List_<$BannerPatternLayers$Layer_>, ];
    export class $ChestBlockEntity extends $RandomizableContainerBlockEntity implements $LidBlockEntity {
        static playSound(level: $Level_, pos: $BlockPos_, state: $BlockState_, sound: $SoundEvent_): void;
        getOpenNess(partialTicks: number): number;
        static swapContents(chest: $ChestBlockEntity, otherChest: $ChestBlockEntity): void;
        signalOpenCount(level: $Level_, pos: $BlockPos_, state: $BlockState_, eventId: number, eventParam: number): void;
        static lidAnimateTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $ChestBlockEntity): void;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        recheckOpen(): void;
        static getOpenCount(level: $BlockGetter, pos: $BlockPos_): number;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        lootTableSeed: number;
        remove: boolean;
        constructor(type: $BlockEntityType_<never>, pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BeehiveBlockEntity$Occupant extends $Record {
        static of(entity: $Entity): $BeehiveBlockEntity$Occupant;
        static create(ticksInHive: number): $BeehiveBlockEntity$Occupant;
        minTicksInHive(): number;
        ticksInHive(): number;
        createEntity(level: $Level_, pos: $BlockPos_): $Entity;
        entityData(): $CustomData;
        static CODEC: $Codec<$BeehiveBlockEntity$Occupant>;
        static LIST_CODEC: $Codec<$List<$BeehiveBlockEntity$Occupant>>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BeehiveBlockEntity$Occupant>;
        constructor(arg0: $CustomData, arg1: number, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $BeehiveBlockEntity$Occupant}.
     */
    export type $BeehiveBlockEntity$Occupant_ = { minTicksInHive?: number, ticksInHive?: number, entityData?: $CustomData,  } | [minTicksInHive?: number, ticksInHive?: number, entityData?: $CustomData, ];
    export class $CalibratedSculkSensorBlockEntity extends $SculkSensorBlockEntity {
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BlockEntity extends $AttachmentHolder implements $IBlockEntityExtension, $RenderDataBlockEntity, $Cullable, $RenderAttachmentBlockEntity {
        getType(): $BlockEntityType<never>;
        setLevel(level: $Level_): void;
        getLevel(): $Level;
        saveWithFullMetadata(registries: $HolderLookup$Provider): $CompoundTag;
        static parseCustomNameSafe(customName: string, registries: $HolderLookup$Provider): $Component;
        saveWithoutMetadata(registries: $HolderLookup$Provider): $CompoundTag;
        applyImplicitComponents(componentInput: $BlockEntity$DataComponentInput): void;
        collectImplicitComponents(components: $DataComponentMap$Builder): void;
        getRenderAttachmentData(): $Object;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isOutOfCamera(): boolean;
        setOutOfCamera(value: boolean): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isForcedVisible(): boolean;
        getRenderData(): $Object;
        /**
         * @deprecated
         */
        setBlockState(blockState: $BlockState_): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        hasLevel(): boolean;
        fillCrashReportCategory(reportCategory: $CrashReportCategory): void;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        setChanged(): void;
        static setChanged(level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        components(): $DataComponentMap;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        setTimeout(): void;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        setRemoved(): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isRemoved(): boolean;
        getBlockPos(): $BlockPos;
        getBlockState(): $BlockState;
        /**
         * Gets a `CompoundTag` that can be used to store custom data for this block entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        getPersistentData(): $CompoundTag;
        getUpdatePacket(): $Packet<$ClientGamePacketListener>;
        saveCustomOnly(registries: $HolderLookup$Provider): $CompoundTag;
        loadAdditional(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        applyComponentsFromItemStack(stack: $ItemStack_): void;
        triggerEvent(id: number, type: number): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        onlyOpCanSetNbt(): boolean;
        static addEntityType(tag: $CompoundTag_, entityType: $BlockEntityType_<never>): void;
        setComponents(components: $DataComponentMap_): void;
        saveWithId(registries: $HolderLookup$Provider): $CompoundTag;
        static loadStatic(pos: $BlockPos_, state: $BlockState_, tag: $CompoundTag_, registries: $HolderLookup$Provider): $BlockEntity;
        static getPosFromTag(tag: $CompoundTag_): $BlockPos;
        isValidBlockState(arg0: $BlockState_): boolean;
        loadCustomOnly(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        clearRemoved(): void;
        loadWithComponents(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        saveAdditional(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        getUpdateTag(registries: $HolderLookup$Provider): $CompoundTag;
        setCulled(value: boolean): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isCulled(): boolean;
        saveToItem(stack: $ItemStack_, registries: $HolderLookup$Provider): void;
        collectComponents(): $DataComponentMap;
        applyComponents(components: $DataComponentMap_, patch: $DataComponentPatch_): void;
        /**
         * @deprecated
         */
        removeComponentsFromTag(tag: $CompoundTag_): void;
        saveCustomAndMetadata(registries: $HolderLookup$Provider): $CompoundTag;
        /**
         * Allows you to return additional model data.
         * This data can be used to provide additional functionality in your `BakedModel`.
         * You need to schedule a refresh of you model data via `#requestModelDataUpdate()` if the result of this function changes.
         * 
         * This method is always called on the main client thread.
         */
        getModelData(): $ModelData;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        requestModelDataUpdate(): void;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        invalidateCapabilities(): void;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        onLoad(): void;
        /**
         * Returns whether this `BlockEntity` has custom outline rendering behavior.
         */
        hasCustomOutlineRendering(player: $Player): boolean;
        /**
         * Called when you receive a TileEntityData packet for the location this
         * TileEntity is currently in. On the client, the NetworkManager will always
         * be the remote server. On the server, it will be whomever is responsible for
         * sending the packet.
         */
        onDataPacket(net: $Connection, pkt: $ClientboundBlockEntityDataPacket, lookupProvider: $HolderLookup$Provider): void;
        handleUpdateTag(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        onChunkUnloaded(): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(type: $BlockEntityType_<never>, pos: $BlockPos_, blockState: $BlockState_);
        get type(): $BlockEntityType<never>;
        get renderAttachmentData(): $Object;
        get forcedVisible(): boolean;
        get renderData(): $Object;
        get blockPos(): $BlockPos;
        get persistentData(): $CompoundTag;
        get updatePacket(): $Packet<$ClientGamePacketListener>;
        get modelData(): $ModelData;
    }
    export class $ShulkerBoxBlockEntity$AnimationStatus extends $Enum<$ShulkerBoxBlockEntity$AnimationStatus> {
        static values(): $ShulkerBoxBlockEntity$AnimationStatus[];
        static valueOf(arg0: string): $ShulkerBoxBlockEntity$AnimationStatus;
        static CLOSED: $ShulkerBoxBlockEntity$AnimationStatus;
        static CLOSING: $ShulkerBoxBlockEntity$AnimationStatus;
        static OPENING: $ShulkerBoxBlockEntity$AnimationStatus;
        static OPENED: $ShulkerBoxBlockEntity$AnimationStatus;
    }
    /**
     * Values that may be interpreted as {@link $ShulkerBoxBlockEntity$AnimationStatus}.
     */
    export type $ShulkerBoxBlockEntity$AnimationStatus_ = "closed" | "opening" | "opened" | "closing";
    export class $ShulkerBoxBlockEntity extends $RandomizableContainerBlockEntity implements $WorldlyContainer {
        static tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $ShulkerBoxBlockEntity): void;
        isClosed(): boolean;
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canPlaceItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_ | null): boolean;
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canTakeItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_): boolean;
        getSlotsForFace(side: $Direction_): number[];
        getColor(): $DyeColor;
        loadFromTag(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        getBoundingBox(state: $BlockState_): $AABB;
        getAnimationStatus(): $ShulkerBoxBlockEntity$AnimationStatus;
        getProgress(partialTicks: number): number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        static EVENT_SET_OPEN_COUNT: number;
        static CONTAINER_SIZE: number;
        static COLUMNS: number;
        static OPENING_TICK_LENGTH: number;
        static MAX_LID_HEIGHT: number;
        static MAX_LID_ROTATION: number;
        lootTableSeed: number;
        static ROWS: number;
        constructor(color: $DyeColor_ | null, pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get closed(): boolean;
        get color(): $DyeColor;
        get animationStatus(): $ShulkerBoxBlockEntity$AnimationStatus;
    }
    export class $DecoratedPotBlockEntity$WobbleStyle extends $Enum<$DecoratedPotBlockEntity$WobbleStyle> {
        static values(): $DecoratedPotBlockEntity$WobbleStyle[];
        static valueOf(arg0: string): $DecoratedPotBlockEntity$WobbleStyle;
        duration: number;
        static POSITIVE: $DecoratedPotBlockEntity$WobbleStyle;
        static NEGATIVE: $DecoratedPotBlockEntity$WobbleStyle;
    }
    /**
     * Values that may be interpreted as {@link $DecoratedPotBlockEntity$WobbleStyle}.
     */
    export type $DecoratedPotBlockEntity$WobbleStyle_ = "positive" | "negative";
    export interface $BannerPattern extends RegistryMarked<RegistryTypes.BannerPatternTag, RegistryTypes.BannerPattern> {}
    export class $BlockEntity$ComponentHelper {
    }
    export class $BrushableBlockEntity extends $BlockEntity {
        getItem(): $ItemStack;
        checkReset(): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        brush(startTick: number, arg1: $Player, player: $Direction_): boolean;
        getHitDirection(): $Direction;
        setLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        unpackLootTable(player: $Player): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get item(): $ItemStack;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get hitDirection(): $Direction;
    }
    export class $EnderChestBlockEntity extends $BlockEntity implements $LidBlockEntity {
        stillValid(player: $Player): boolean;
        getOpenNess(partialTicks: number): number;
        static lidAnimateTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $EnderChestBlockEntity): void;
        recheckOpen(): void;
        startOpen(player: $Player): void;
        stopOpen(player: $Player): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BaseContainerBlockEntity extends $BlockEntity implements $Container, $MenuProvider, $Nameable, $SpecialLogicInventory {
        getName(): $Component;
        isEmpty(): boolean;
        getDisplayName(): $Component;
        /**
         * Returns the stack in the given slot.
         */
        getItem(slot: number): $ItemStack;
        canOpen(player: $Player): boolean;
        fabric_onFinalCommit(arg0: number, arg1: $ItemStack_, arg2: $ItemStack_): void;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(slot: number, amount: number): $ItemStack;
        getItems(): $NonNullList<$ItemStack>;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(slot: number, stack: $ItemStack_): void;
        stillValid(player: $Player): boolean;
        createMenu(containerId: number, playerInventory: $Inventory, player: $Player): $AbstractContainerMenu;
        createMenu(containerId: number, inventory: $Inventory): $AbstractContainerMenu;
        setItems(items: $NonNullList<$ItemStack_>): void;
        getCustomName(): $Component;
        clearContent(): void;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(slot: number): $ItemStack;
        static canUnlock(player: $Player, code: $LockCode_, displayName: $Component_): boolean;
        getDefaultName(): $Component;
        fabric_setSuppress(arg0: boolean): void;
        wrapOperation$zze000$fabric_transfer_api_v1$fabric_redirectMarkDirty(arg0: $BaseContainerBlockEntity, arg1: $Operation_<any>): void;
        getMaxStackSize(stack: $ItemStack_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
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
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        hasCustomName(): boolean;
        fabric_onTransfer(arg0: number, arg1: $TransactionContext): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getWidth(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getSlots(): number;
        getBlock(level: $Level_): $LevelBlock;
        self(): $Container;
        clear(): void;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        /**
         * Returns the stack in the given slot.
         */
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getHeight(): number;
        isMutable(): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlotLimit(slot: number): number;
        asContainer(): $Container;
        setChanged(): void;
        /**
         * Allows the menu provider to write additional data to be read by `IContainerFactory#create(int, Inventory, RegistryFriendlyByteBuf)`
         * when the menu is created on the client-side.
         */
        writeClientSideData(menu: $AbstractContainerMenu, buffer: $RegistryFriendlyByteBuf): void;
        shouldCloseCurrentScreen(): boolean;
        isEmpty(): boolean;
        count(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        count(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        find(): number;
        find(match: $ItemPredicate_): number;
        clear(match: $ItemPredicate_): void;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(type: $BlockEntityType_<never>, pos: $BlockPos_, blockState: $BlockState_);
        get name(): $Component;
        get displayName(): $Component;
        get customName(): $Component;
        get defaultName(): $Component;
        get width(): number;
        get slots(): number;
        get height(): number;
        get mutable(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $BlockEntityType$Builder<T extends $BlockEntity> implements $FabricBlockEntityType$Builder<any> {
        static of<T extends $BlockEntity>(factory: $BlockEntityType$BlockEntitySupplier_<T>, ...validBlocks: $Block_[]): $BlockEntityType$Builder<T>;
        build(): $BlockEntityType<any>;
        build(dataType: $Type<never>): $BlockEntityType<$Object>;
        validBlocks: $Set<$Block>;
    }
    export class $CommandBlockEntity extends $BlockEntity {
        isAutomatic(): boolean;
        onModeSwitch(): void;
        getMode(): $CommandBlockEntity$Mode;
        setPowered(auto: boolean): void;
        isPowered(): boolean;
        getCommandBlock(): $BaseCommandBlock;
        setAutomatic(auto: boolean): void;
        markConditionMet(): boolean;
        wasConditionMet(): boolean;
        isConditional(): boolean;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get mode(): $CommandBlockEntity$Mode;
        get commandBlock(): $BaseCommandBlock;
        get conditional(): boolean;
    }
    export class $DecoratedPotPatterns {
        static bootstrap(registry: $Registry<$DecoratedPotPattern_>): $DecoratedPotPattern;
        static getPatternFromItem(item: $Item_): $ResourceKey<$DecoratedPotPattern>;
        static GUSTER: $ResourceKey<$DecoratedPotPattern>;
        static MINER: $ResourceKey<$DecoratedPotPattern>;
        static SNORT: $ResourceKey<$DecoratedPotPattern>;
        static DANGER: $ResourceKey<$DecoratedPotPattern>;
        static ARMS_UP: $ResourceKey<$DecoratedPotPattern>;
        static FRIEND: $ResourceKey<$DecoratedPotPattern>;
        static SHEAF: $ResourceKey<$DecoratedPotPattern>;
        static ANGLER: $ResourceKey<$DecoratedPotPattern>;
        static SKULL: $ResourceKey<$DecoratedPotPattern>;
        static BREWER: $ResourceKey<$DecoratedPotPattern>;
        static SCRAPE: $ResourceKey<$DecoratedPotPattern>;
        static ARCHER: $ResourceKey<$DecoratedPotPattern>;
        static FLOW: $ResourceKey<$DecoratedPotPattern>;
        static BURN: $ResourceKey<$DecoratedPotPattern>;
        static HEART: $ResourceKey<$DecoratedPotPattern>;
        static BLANK: $ResourceKey<$DecoratedPotPattern>;
        static EXPLORER: $ResourceKey<$DecoratedPotPattern>;
        static SHELTER: $ResourceKey<$DecoratedPotPattern>;
        static PLENTY: $ResourceKey<$DecoratedPotPattern>;
        static BLADE: $ResourceKey<$DecoratedPotPattern>;
        static HEARTBREAK: $ResourceKey<$DecoratedPotPattern>;
        static HOWL: $ResourceKey<$DecoratedPotPattern>;
        static MOURNER: $ResourceKey<$DecoratedPotPattern>;
        static PRIZE: $ResourceKey<$DecoratedPotPattern>;
        constructor();
    }
    export class $StructureBlockEntity$UpdateType extends $Enum<$StructureBlockEntity$UpdateType> {
        static values(): $StructureBlockEntity$UpdateType[];
        static valueOf(arg0: string): $StructureBlockEntity$UpdateType;
        static UPDATE_DATA: $StructureBlockEntity$UpdateType;
        static SAVE_AREA: $StructureBlockEntity$UpdateType;
        static LOAD_AREA: $StructureBlockEntity$UpdateType;
        static SCAN_AREA: $StructureBlockEntity$UpdateType;
    }
    /**
     * Values that may be interpreted as {@link $StructureBlockEntity$UpdateType}.
     */
    export type $StructureBlockEntity$UpdateType_ = "update_data" | "save_area" | "load_area" | "scan_area";
    export class $SculkCatalystBlockEntity$CatalystListener implements $GameEventListener {
        getDeliveryMode(): $GameEventListener$DeliveryMode;
        handleGameEvent(level: $ServerLevel, gameEvent: $Holder_<$GameEvent>, context: $GameEvent$Context_, pos: $Vec3_): boolean;
        /**
         * Gets the position of the listener itself.
         */
        getListenerSource(): $PositionSource;
        /**
         * Gets the listening radius of the listener. Events within this radius will notify the listener when broadcasted.
         */
        getListenerRadius(): number;
        getSculkSpreader(): $SculkSpreader;
        static PULSE_TICKS: number;
        sculkSpreader: $SculkSpreader;
        constructor(blockState: $BlockState_, positionSource: $PositionSource);
        get deliveryMode(): $GameEventListener$DeliveryMode;
        get listenerSource(): $PositionSource;
        get listenerRadius(): number;
    }
    export class $DaylightDetectorBlockEntity extends $BlockEntity {
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export interface $BlockEntityType<T> extends RegistryMarked<RegistryTypes.BlockEntityTypeTag, RegistryTypes.BlockEntityType> {}
    export class $CrafterBlockEntity extends $RandomizableContainerBlockEntity implements $CraftingContainer {
        /**
         * Returns the number of slots in the inventory.
         */
        getWidth(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getHeight(): number;
        fillStackedContents(contents: $StackedContents): void;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, crafter: $CrafterBlockEntity): void;
        setCraftingTicksRemaining(craftingTicksRemaining: number): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getRedstoneSignal(): number;
        setTriggered(triggered: boolean): void;
        setSlotState(slot: number, state: boolean): void;
        isTriggered(): boolean;
        isSlotDisabled(slot: number): boolean;
        asPositionedCraftInput(): $CraftingInput$Positioned;
        asCraftInput(): $CraftingInput;
        getItems(): $List<$ItemStack>;
        static CONTAINER_WIDTH: number;
        level: $Level;
        static SLOT_ENABLED: number;
        static SLOT_DISABLED: number;
        static ATTACHMENTS_NBT_KEY: string;
        static NUM_DATA: number;
        remove: boolean;
        static CONTAINER_HEIGHT: number;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        static DATA_TRIGGERED: number;
        static CONTAINER_SIZE: number;
        containerData: $ContainerData;
        lootTableSeed: number;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get width(): number;
        get height(): number;
        set craftingTicksRemaining(value: number);
        get redstoneSignal(): number;
        get items(): $List<$ItemStack>;
    }
    export class $HangingSignBlockEntity extends $SignBlockEntity {
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BellBlockEntity$ResonationEndAction {
    }
    export interface $BellBlockEntity$ResonationEndAction {
    }
    /**
     * Values that may be interpreted as {@link $BellBlockEntity$ResonationEndAction}.
     */
    export type $BellBlockEntity$ResonationEndAction_ = (() => void);
    export class $BrewingStandBlockEntity extends $BaseContainerBlockEntity implements $WorldlyContainer {
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canPlaceItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_ | null): boolean;
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canTakeItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_): boolean;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $BrewingStandBlockEntity): void;
        getSlotsForFace(side: $Direction_): number[];
        static DATA_BREW_TIME: number;
        dataAccess: $ContainerData;
        worldPosition: $BlockPos;
        static DATA_FUEL_USES: number;
        level: $Level;
        fuel: number;
        brewTime: number;
        static ATTACHMENTS_NBT_KEY: string;
        static NUM_DATA_VALUES: number;
        static FUEL_USES: number;
        remove: boolean;
        constructor(pos: $BlockPos_, state: $BlockState_);
    }
    export class $StructureBlockEntity extends $BlockEntity {
        getMirror(): $Mirror;
        setSeed(seed: number): void;
        getSeed(): number;
        usedBy(player: $Player): boolean;
        createdBy(author: $LivingEntity): void;
        setMode(mode: $StructureMode_): void;
        getMode(): $StructureMode;
        setPowered(ignoreEntities: boolean): void;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        isPowered(): boolean;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        placeStructure(level: $ServerLevel): void;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        saveStructure(): boolean;
        /**
         * Saves the template, either updating the local version or writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        saveStructure(writeToDisk: boolean): boolean;
        unloadStructure(): void;
        placeStructureIfSameSize(level: $ServerLevel): boolean;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        isStructureLoadable(): boolean;
        getRotation(): $Rotation;
        setShowAir(ignoreEntities: boolean): void;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        getShowAir(): boolean;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        detectSize(): boolean;
        setMirror(mirror: $Mirror_): void;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        hasStructureName(): boolean;
        setStructureSize(structureSize: $Vec3i): void;
        setRotation(rotation: $Rotation_): void;
        getMetaData(): string;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        isIgnoreEntities(): boolean;
        getIntegrity(): number;
        setStructurePos(structurePos: $BlockPos_): void;
        static createRandom(seed: number): $RandomSource;
        setIntegrity(integrity: number): void;
        loadStructureInfo(level: $ServerLevel): boolean;
        setMetaData(metaData: string): void;
        getStructureName(): string;
        getStructureSize(): $Vec3i;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        getShowBoundingBox(): boolean;
        setShowBoundingBox(ignoreEntities: boolean): void;
        setStructureName(structureName: $ResourceLocation_ | null): void;
        setStructureName(metaData: string | null): void;
        getStructurePos(): $BlockPos;
        setIgnoreEntities(ignoreEntities: boolean): void;
        worldPosition: $BlockPos;
        level: $Level;
        static AUTHOR_TAG: string;
        static MAX_OFFSET_PER_AXIS: number;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        static MAX_SIZE_PER_AXIS: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get structureLoadable(): boolean;
    }
    export class $AbstractFurnaceBlockEntity extends $BaseContainerBlockEntity implements $WorldlyContainer, $RecipeCraftingHolder, $StackedContentsCompatible, $SpecialLogicInventory, $Clearable {
        static add(map: $Map_<$Item_, number>, itemTag: $TagKey_<$Item>, burnTime: number): void;
        static add(map: $Map_<$Item_, number>, item: $ItemLike_, burnTime: number): void;
        handler$zza000$fabric_transfer_api_v1$setStackSuppressUpdate(arg0: number, arg1: $ItemStack_, arg2: $CallbackInfo): void;
        static isFuel(stack: $ItemStack_): boolean;
        /**
         * @deprecated
         */
        static getFuel(): $Map<$Item, number>;
        static buildFuels(arg0: $ObjIntConsumer_<$Either<$Item, $TagKey<$Item>>>): void;
        fillStackedContents(helper: $StackedContents): void;
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canPlaceItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_ | null): boolean;
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canTakeItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_): boolean;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $AbstractFurnaceBlockEntity): void;
        awardUsedRecipes(player: $Player, items: $List_<$ItemStack_>): void;
        getRecipeUsed(): $RecipeHolder<never>;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        static invalidateCache(): void;
        getSlotsForFace(side: $Direction_): number[];
        getBurnDuration(fuel: $ItemStack_): number;
        awardUsedRecipesAndPopExperience(player: $ServerPlayer): void;
        getRecipesToAwardAndPopExperience(level: $ServerLevel, popVec: $Vec3_): $List<$RecipeHolder<never>>;
        setRecipeUsed(recipe: $RecipeHolder_<never> | null): void;
        setRecipeUsed(level: $Level_, players: $ServerPlayer, recipe: $RecipeHolder_<never>): boolean;
        dataAccess: $ContainerData;
        static DATA_LIT_DURATION: number;
        level: $Level;
        cookingTotalTime: number;
        static SLOT_INPUT: number;
        static DATA_COOKING_PROGRESS: number;
        static ATTACHMENTS_NBT_KEY: string;
        static BURN_COOL_SPEED: number;
        remove: boolean;
        cookingProgress: number;
        litDuration: number;
        worldPosition: $BlockPos;
        static DATA_COOKING_TOTAL_TIME: number;
        static BURN_TIME_STANDARD: number;
        static SLOT_RESULT: number;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        items: $NonNullList<$ItemStack>;
        static SLOT_FUEL: number;
        constructor(type: $BlockEntityType_<never>, pos: $BlockPos_, blockState: $BlockState_, recipeType: $RecipeType_<$AbstractCookingRecipe>);
    }
    export class $EnchantingTableBlockEntity extends $BlockEntity implements $Nameable {
        getName(): $Component;
        getCustomName(): $Component;
        static bookAnimationTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, enchantingTable: $EnchantingTableBlockEntity): void;
        setCustomName(customName: $Component_ | null): void;
        getDisplayName(): $Component;
        hasCustomName(): boolean;
        oFlip: number;
        flipA: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        worldPosition: $BlockPos;
        rot: number;
        tRot: number;
        flipT: number;
        oOpen: number;
        time: number;
        oRot: number;
        flip: number;
        open: number;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get name(): $Component;
        get displayName(): $Component;
    }
    export class $BeehiveBlockEntity extends $BlockEntity {
        isEmpty(): boolean;
        isSedated(): boolean;
        storeBee(occupant: $BeehiveBlockEntity$Occupant_): void;
        isFull(): boolean;
        emptyAllLivingFromHive(player: $Player | null, state: $BlockState_, releaseStatus: $BeehiveBlockEntity$BeeReleaseStatus_): void;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, beehive: $BeehiveBlockEntity): void;
        getOccupantCount(): number;
        isFireNearby(): boolean;
        addOccupant(occupant: $Entity): void;
        static getHoneyLevel(state: $BlockState_): number;
        static IGNORED_BEE_TAGS: $List<string>;
        worldPosition: $BlockPos;
        level: $Level;
        static MIN_OCCUPATION_TICKS_NECTARLESS: number;
        static MAX_OCCUPANTS: number;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get empty(): boolean;
        get sedated(): boolean;
        get full(): boolean;
        get occupantCount(): number;
        get fireNearby(): boolean;
    }
    export class $TickingBlockEntity {
    }
    export interface $TickingBlockEntity {
        getType(): string;
        tick(): void;
        getPos(): $BlockPos;
        isRemoved(): boolean;
        get type(): string;
        get pos(): $BlockPos;
        get removed(): boolean;
    }
    export class $SpawnerBlockEntity extends $BlockEntity implements $Spawner {
        getSpawner(): $BaseSpawner;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $SpawnerBlockEntity): void;
        static clientTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $SpawnerBlockEntity): void;
        setEntityId(type: $EntityType_<never>, random: $RandomSource): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get spawner(): $BaseSpawner;
    }
    export class $BellBlockEntity extends $BlockEntity {
        onHit(direction: $Direction_): void;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $BellBlockEntity): void;
        static clientTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $BellBlockEntity): void;
        worldPosition: $BlockPos;
        ticks: number;
        level: $Level;
        clickDirection: $Direction;
        static ATTACHMENTS_NBT_KEY: string;
        shaking: boolean;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $DropperBlockEntity extends $DispenserBlockEntity {
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        level: $Level;
        static CONTAINER_SIZE: number;
        static ATTACHMENTS_NBT_KEY: string;
        lootTableSeed: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $SignBlockEntity extends $BlockEntity {
        static tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, sign: $SignBlockEntity): void;
        setText(text: $SignText, isFrontText: boolean): boolean;
        setWaxed(isWaxed: boolean): boolean;
        updateText(updater: $UnaryOperator_<$SignText>, isFrontText: boolean): boolean;
        getMaxTextLineWidth(): number;
        playerIsTooFarAwayToEdit(uuid: $UUID_): boolean;
        createDefaultSignText(): $SignText;
        getText(isFrontText: boolean): $SignText;
        updateSignText(player: $Player, isFrontText: boolean, filteredText: $List_<$FilteredText_>): void;
        getFrontText(): $SignText;
        getBackText(): $SignText;
        getTextLineHeight(): number;
        executeClickCommandsIfPresent(player: $Player, level: $Level_, pos: $BlockPos_, frontText: boolean): boolean;
        getSignInteractionFailedSoundEvent(): $SoundEvent;
        isWaxed(): boolean;
        isFacingFrontText(player: $Player): boolean;
        setAllowedPlayerEditor(playWhoMayEdit: $UUID_ | null): void;
        getPlayerWhoMayEdit(): $UUID;
        canExecuteClickCommands(isFrontText: boolean, player: $Player): boolean;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        constructor(type: $BlockEntityType_<any>, pos: $BlockPos_, blockState: $BlockState_);
        get maxTextLineWidth(): number;
        get frontText(): $SignText;
        get backText(): $SignText;
        get textLineHeight(): number;
        get signInteractionFailedSoundEvent(): $SoundEvent;
        set allowedPlayerEditor(value: $UUID_ | null);
        get playerWhoMayEdit(): $UUID;
    }
    export class $JukeboxBlockEntity extends $BlockEntity implements $Clearable, $ContainerSingleItem$BlockContainerSingleItem, $SpecialLogicInventory {
        static tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, jukebox: $JukeboxBlockEntity): void;
        fabric_onFinalCommit(arg0: number, arg1: $ItemStack_, arg2: $ItemStack_): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getMaxStackSize(): number;
        setSongItemWithoutPlaying(stack: $ItemStack_): void;
        getContainerBlockEntity(): $BlockEntity;
        onSongChanged(): void;
        splitTheItem(amount: number): $ItemStack;
        tryForcePlaySong(): void;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        popOutTheItem(): void;
        getSongPlayer(): $JukeboxSongPlayer;
        setTheItem(stack: $ItemStack_): void;
        getTheItem(): $ItemStack;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getComparatorOutput(): number;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        fabric_setSuppress(hasRecord: boolean): void;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        fabric_onTransfer(arg0: number, arg1: $TransactionContext): void;
        isEmpty(): boolean;
        getItem(amount: number): $ItemStack;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(slot: number, amount: number): $ItemStack;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(slot: number, stack: $ItemStack_): void;
        removeTheItem(): $ItemStack;
        removeItemNoUpdate(amount: number): $ItemStack;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getContainerSize(): number;
        getMaxStackSize(stack: $ItemStack_): number;
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
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getWidth(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getSlots(): number;
        getBlock(level: $Level_): $LevelBlock;
        self(): $Container;
        clear(): void;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getStackInSlot(amount: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getHeight(): number;
        isMutable(): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlotLimit(slot: number): number;
        asContainer(): $Container;
        setChanged(): void;
        isEmpty(): boolean;
        count(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        count(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        find(): number;
        find(match: $ItemPredicate_): number;
        clear(match: $ItemPredicate_): void;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        worldPosition: $BlockPos;
        static SONG_ITEM_TAG_ID: string;
        level: $Level;
        static TICKS_SINCE_SONG_STARTED_TAG_ID: string;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        set songItemWithoutPlaying(value: $ItemStack_);
        get containerBlockEntity(): $BlockEntity;
        get songPlayer(): $JukeboxSongPlayer;
        get comparatorOutput(): number;
        get containerSize(): number;
        get width(): number;
        get slots(): number;
        get height(): number;
        get mutable(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $BlockEntityType$BlockEntitySupplier<T extends $BlockEntity> {
    }
    export interface $BlockEntityType$BlockEntitySupplier<T extends $BlockEntity> {
        create(pos: $BlockPos_, state: $BlockState_): T;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityType$BlockEntitySupplier}.
     */
    export type $BlockEntityType$BlockEntitySupplier_<T> = ((arg0: $BlockPos, arg1: $BlockState) => T);
    export class $TheEndPortalBlockEntity extends $BlockEntity {
        shouldRenderFace(face: $Direction_): boolean;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(type: $BlockEntityType_<never>, pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BannerPatternLayers$Builder {
        /**
         * @deprecated
         */
        addIfRegistered(patterns: $HolderGetter<$BannerPattern_>, patternKey: $ResourceKey_<$BannerPattern>, color: $DyeColor_): $BannerPatternLayers$Builder;
        add(layer: $BannerPatternLayers$Layer_): $BannerPatternLayers$Builder;
        add(pattern: $Holder_<$BannerPattern>, color: $DyeColor_): $BannerPatternLayers$Builder;
        addAll(layers: $BannerPatternLayers_): $BannerPatternLayers$Builder;
        build(): $BannerPatternLayers;
        constructor();
    }
    export class $SculkSensorBlockEntity extends $BlockEntity implements $GameEventListener$Provider<$VibrationSystem$Listener>, $VibrationSystem {
        setLastVibrationFrequency(lastVibrationFrequency: number): void;
        createVibrationUser(): $VibrationSystem$User;
        getVibrationUser(): $VibrationSystem$User;
        getLastVibrationFrequency(): number;
        getVibrationData(): $VibrationSystem$Data;
        getListener(): $VibrationSystem$Listener;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(type: $BlockEntityType_<never>, pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get vibrationUser(): $VibrationSystem$User;
        get vibrationData(): $VibrationSystem$Data;
        get listener(): $VibrationSystem$Listener;
    }
    export class $TrialSpawnerBlockEntity extends $BlockEntity implements $Spawner, $TrialSpawner$StateAccessor {
        getState(): $TrialSpawnerState;
        setState(level: $Level_, state: $TrialSpawnerState_): void;
        markUpdated(): void;
        setEntityId(entityType: $EntityType_<never>, random: $RandomSource): void;
        getTrialSpawner(): $TrialSpawner;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get trialSpawner(): $TrialSpawner;
    }
    export class $DispenserBlockEntity extends $RandomizableContainerBlockEntity {
        insertItem(stack: $ItemStack_): $ItemStack;
        getRandomSlot(random: $RandomSource): number;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        level: $Level;
        static CONTAINER_SIZE: number;
        static ATTACHMENTS_NBT_KEY: string;
        lootTableSeed: number;
        remove: boolean;
        constructor(type: $BlockEntityType_<never>, pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $TheEndGatewayBlockEntity extends $TheEndPortalBlockEntity {
        static portalTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $TheEndGatewayBlockEntity): void;
        getCooldownPercent(partialTicks: number): number;
        setExitPosition(exitPortal: $BlockPos_, exactTeleport: boolean): void;
        getSpawnPercent(partialTicks: number): number;
        getPortalPosition(level: $ServerLevel, pos: $BlockPos_): $Vec3;
        static triggerCooldown(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $TheEndGatewayBlockEntity): void;
        isCoolingDown(): boolean;
        static beamAnimationTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $TheEndGatewayBlockEntity): void;
        getParticleAmount(): number;
        isSpawning(): boolean;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get coolingDown(): boolean;
        get particleAmount(): number;
        get spawning(): boolean;
    }
    export class $FurnaceBlockEntity extends $AbstractFurnaceBlockEntity {
        dataAccess: $ContainerData;
        static DATA_LIT_DURATION: number;
        level: $Level;
        cookingTotalTime: number;
        static SLOT_INPUT: number;
        static DATA_COOKING_PROGRESS: number;
        static ATTACHMENTS_NBT_KEY: string;
        static BURN_COOL_SPEED: number;
        remove: boolean;
        cookingProgress: number;
        litDuration: number;
        worldPosition: $BlockPos;
        static DATA_COOKING_TOTAL_TIME: number;
        static BURN_TIME_STANDARD: number;
        static SLOT_RESULT: number;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        items: $NonNullList<$ItemStack>;
        static SLOT_FUEL: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BannerPatterns {
        static register(context: $BootstrapContext<$BannerPattern_>, resourceKey: $ResourceKey_<$BannerPattern>): void;
        static bootstrap(context: $BootstrapContext<$BannerPattern_>): void;
        static GUSTER: $ResourceKey<$BannerPattern>;
        static STRIPE_BOTTOM: $ResourceKey<$BannerPattern>;
        static GLOBE: $ResourceKey<$BannerPattern>;
        static SQUARE_TOP_RIGHT: $ResourceKey<$BannerPattern>;
        static STRIPE_MIDDLE: $ResourceKey<$BannerPattern>;
        static TRIANGLE_TOP: $ResourceKey<$BannerPattern>;
        static HALF_HORIZONTAL_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_TOP: $ResourceKey<$BannerPattern>;
        static DIAGONAL_RIGHT_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_CENTER: $ResourceKey<$BannerPattern>;
        static STRAIGHT_CROSS: $ResourceKey<$BannerPattern>;
        static SQUARE_BOTTOM_LEFT: $ResourceKey<$BannerPattern>;
        static SKULL: $ResourceKey<$BannerPattern>;
        static RHOMBUS_MIDDLE: $ResourceKey<$BannerPattern>;
        static CIRCLE_MIDDLE: $ResourceKey<$BannerPattern>;
        static HALF_HORIZONTAL: $ResourceKey<$BannerPattern>;
        static GRADIENT: $ResourceKey<$BannerPattern>;
        static FLOW: $ResourceKey<$BannerPattern>;
        static BASE: $ResourceKey<$BannerPattern>;
        static HALF_VERTICAL_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_RIGHT: $ResourceKey<$BannerPattern>;
        static CREEPER: $ResourceKey<$BannerPattern>;
        static STRIPE_LEFT: $ResourceKey<$BannerPattern>;
        static BRICKS: $ResourceKey<$BannerPattern>;
        static TRIANGLES_BOTTOM: $ResourceKey<$BannerPattern>;
        static SQUARE_TOP_LEFT: $ResourceKey<$BannerPattern>;
        static FLOWER: $ResourceKey<$BannerPattern>;
        static STRIPE_SMALL: $ResourceKey<$BannerPattern>;
        static TRIANGLE_BOTTOM: $ResourceKey<$BannerPattern>;
        static CURLY_BORDER: $ResourceKey<$BannerPattern>;
        static TRIANGLES_TOP: $ResourceKey<$BannerPattern>;
        static DIAGONAL_RIGHT: $ResourceKey<$BannerPattern>;
        static STRIPE_DOWNLEFT: $ResourceKey<$BannerPattern>;
        static DIAGONAL_LEFT_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_DOWNRIGHT: $ResourceKey<$BannerPattern>;
        static PIGLIN: $ResourceKey<$BannerPattern>;
        static GRADIENT_UP: $ResourceKey<$BannerPattern>;
        static DIAGONAL_LEFT: $ResourceKey<$BannerPattern>;
        static BORDER: $ResourceKey<$BannerPattern>;
        static MOJANG: $ResourceKey<$BannerPattern>;
        static HALF_VERTICAL: $ResourceKey<$BannerPattern>;
        static CROSS: $ResourceKey<$BannerPattern>;
        static SQUARE_BOTTOM_RIGHT: $ResourceKey<$BannerPattern>;
        constructor();
    }
    export class $RandomizableContainerBlockEntity extends $BaseContainerBlockEntity implements $RandomizableContainer {
        getLootTableSeed(): number;
        getLootTable(): $ResourceKey<$LootTable>;
        setLootTable(lootTable: $ResourceKey_<$LootTable> | null): void;
        setLootTableSeed(seed: number): void;
        tryLoadLootTable(tag: $CompoundTag_): boolean;
        setLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        trySaveLootTable(tag: $CompoundTag_): boolean;
        unpackLootTable(player: $Player | null): void;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        lootTableSeed: number;
        remove: boolean;
        constructor(type: $BlockEntityType_<never>, pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BlastFurnaceBlockEntity extends $AbstractFurnaceBlockEntity {
        dataAccess: $ContainerData;
        static DATA_LIT_DURATION: number;
        level: $Level;
        cookingTotalTime: number;
        static SLOT_INPUT: number;
        static DATA_COOKING_PROGRESS: number;
        static ATTACHMENTS_NBT_KEY: string;
        static BURN_COOL_SPEED: number;
        remove: boolean;
        cookingProgress: number;
        litDuration: number;
        worldPosition: $BlockPos;
        static DATA_COOKING_TOTAL_TIME: number;
        static BURN_TIME_STANDARD: number;
        static SLOT_RESULT: number;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        items: $NonNullList<$ItemStack>;
        static SLOT_FUEL: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BannerPattern extends $Record {
        assetId(): $ResourceLocation;
        translationKey(): string;
        static CODEC: $Codec<$Holder<$BannerPattern>>;
        static DIRECT_CODEC: $Codec<$BannerPattern>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BannerPattern>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$BannerPattern>>;
        constructor(arg0: $ResourceLocation_, arg1: string);
    }
    /**
     * Values that may be interpreted as {@link $BannerPattern}.
     */
    export type $BannerPattern_ = RegistryTypes.BannerPattern | { translationKey?: string, assetId?: $ResourceLocation_,  } | [translationKey?: string, assetId?: $ResourceLocation_, ];
    export class $LecternBlockEntity extends $BlockEntity implements $Clearable, $MenuProvider {
        getDisplayName(): $Component;
        /**
         * Sets the ItemStack in this lectern. Note that this does not update the block state, use `LecternBlock#tryPlaceBook` for that.
         */
        setBook(stack: $ItemStack_, player: $Player | null): void;
        /**
         * Sets the ItemStack in this lectern. Note that this does not update the block state, use `LecternBlock#tryPlaceBook` for that.
         */
        setBook(stack: $ItemStack_): void;
        getBook(): $ItemStack;
        createMenu(containerId: number, playerInventory: $Inventory, player: $Player): $AbstractContainerMenu;
        onBookItemRemove(): void;
        clearContent(): void;
        getRedstoneSignal(): number;
        getPage(): number;
        /**
         * @return whether the ItemStack in this lectern is a book or written book
         */
        hasBook(): boolean;
        setPage(page: number): void;
        /**
         * @return whether the ItemStack in this lectern is a book or written book
         */
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        /**
         * Allows the menu provider to write additional data to be read by `IContainerFactory#create(int, Inventory, RegistryFriendlyByteBuf)`
         * when the menu is created on the client-side.
         */
        writeClientSideData(menu: $AbstractContainerMenu, buffer: $RegistryFriendlyByteBuf): void;
        /**
         * @return whether the ItemStack in this lectern is a book or written book
         */
        shouldCloseCurrentScreen(): boolean;
        worldPosition: $BlockPos;
        static NUM_SLOTS: number;
        static DATA_PAGE: number;
        level: $Level;
        book: $ItemStack;
        static ATTACHMENTS_NBT_KEY: string;
        page: number;
        static SLOT_BOOK: number;
        static NUM_DATA: number;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get displayName(): $Component;
        get redstoneSignal(): number;
    }
    export class $BannerBlockEntity extends $BlockEntity implements $Nameable {
        getName(): $Component;
        getItem(): $ItemStack;
        getPatterns(): $BannerPatternLayers;
        getBaseColor(): $DyeColor;
        fromItem(stack: $ItemStack_, color: $DyeColor_): void;
        getCustomName(): $Component;
        getDisplayName(): $Component;
        hasCustomName(): boolean;
        static MAX_PATTERNS: number;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_, baseColor: $DyeColor_);
        get name(): $Component;
        get item(): $ItemStack;
        get patterns(): $BannerPatternLayers;
        get baseColor(): $DyeColor;
        get customName(): $Component;
        get displayName(): $Component;
    }
    export class $Hopper {
        static SUCK_AABB: $AABB;
    }
    export interface $Hopper extends $Container {
        isGridAligned(): boolean;
        getSuckAabb(): $AABB;
        /**
         * @return the x position for this hopper.
         */
        getLevelY(): number;
        /**
         * @return the x position for this hopper.
         */
        getLevelX(): number;
        /**
         * @return the x position for this hopper.
         */
        getLevelZ(): number;
        get gridAligned(): boolean;
        get suckAabb(): $AABB;
        get levelY(): number;
        get levelX(): number;
        get levelZ(): number;
    }
    export class $ChiseledBookShelfBlockEntity extends $BlockEntity implements $Container {
        isEmpty(): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        count(): number;
        /**
         * Returns the stack in the given slot.
         */
        getItem(slot: number): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getMaxStackSize(): number;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(slot: number, amount: number): $ItemStack;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(slot: number, stack: $ItemStack_): void;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        clearContent(): void;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(slot: number): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getContainerSize(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getLastInteractedSlot(): number;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        getMaxStackSize(stack: $ItemStack_): number;
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
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
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
        clear(): void;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        /**
         * Returns the stack in the given slot.
         */
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
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
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlotLimit(slot: number): number;
        asContainer(): $Container;
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
        worldPosition: $BlockPos;
        static MAX_BOOKS_IN_STORAGE: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get containerSize(): number;
        get lastInteractedSlot(): number;
        get width(): number;
        get slots(): number;
        get height(): number;
        get mutable(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $ConduitBlockEntity extends $BlockEntity {
        isActive(): boolean;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $ConduitBlockEntity): void;
        static clientTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $ConduitBlockEntity): void;
        getActiveRotation(partialTick: number): number;
        isHunting(): boolean;
        worldPosition: $BlockPos;
        tickCount: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get active(): boolean;
        get hunting(): boolean;
    }
    export class $ContainerOpenersCounter {
        onClose(level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        openerCountChanged(level: $Level_, pos: $BlockPos_, state: $BlockState_, count: number, openCount: number): void;
        isOwnContainer(player: $Player): boolean;
        incrementOpeners(player: $Player, level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        decrementOpeners(player: $Player, level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        getOpenerCount(): number;
        recheckOpeners(level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        onOpen(level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        constructor();
        get openerCount(): number;
    }
    export class $JigsawBlockEntity extends $BlockEntity {
        getName(): $ResourceLocation;
        setName(name: $ResourceLocation_): void;
        getPool(): $ResourceKey<$StructureTemplatePool>;
        getTarget(): $ResourceLocation;
        setTarget(name: $ResourceLocation_): void;
        generate(level: $ServerLevel, maxDepth: number, keepJigsaws: boolean): void;
        setPlacementPriority(placementPriority: number): void;
        setSelectionPriority(placementPriority: number): void;
        getSelectionPriority(): number;
        getPlacementPriority(): number;
        setPool(pool: $ResourceKey_<$StructureTemplatePool>): void;
        setJoint(joint: $JigsawBlockEntity$JointType_): void;
        getJoint(): $JigsawBlockEntity$JointType;
        setFinalState(finalState: string): void;
        getFinalState(): string;
        static TARGET: string;
        worldPosition: $BlockPos;
        level: $Level;
        static FINAL_STATE: string;
        static SELECTION_PRIORITY: string;
        static POOL: string;
        static PLACEMENT_PRIORITY: string;
        static ATTACHMENTS_NBT_KEY: string;
        static JOINT: string;
        remove: boolean;
        static NAME: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $CalibratedSculkSensorBlockEntity$VibrationUser extends $SculkSensorBlockEntity$VibrationUser {
    }
    export class $BannerPatternLayers$Layer extends $Record {
        pattern(): $Holder<$BannerPattern>;
        color(): $DyeColor;
        description(): $MutableComponent;
        static CODEC: $Codec<$BannerPatternLayers$Layer>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BannerPatternLayers$Layer>;
        constructor(arg0: $Holder_<$BannerPattern>, arg1: $DyeColor_);
    }
    /**
     * Values that may be interpreted as {@link $BannerPatternLayers$Layer}.
     */
    export type $BannerPatternLayers$Layer_ = { pattern?: $Holder_<$BannerPattern>, color?: $DyeColor_,  } | [pattern?: $Holder_<$BannerPattern>, color?: $DyeColor_, ];
    export class $DecoratedPotBlockEntity extends $BlockEntity implements $RandomizableContainer, $ContainerSingleItem$BlockContainerSingleItem {
        static createDecoratedPotItem(decorations: $PotDecorations_): $ItemStack;
        getContainerBlockEntity(): $BlockEntity;
        wobble(style: $DecoratedPotBlockEntity$WobbleStyle_): void;
        splitTheItem(amount: number): $ItemStack;
        getLootTableSeed(): number;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        setTheItem(item: $ItemStack_): void;
        getTheItem(): $ItemStack;
        getPotAsItem(): $ItemStack;
        getLootTable(): $ResourceKey<$LootTable>;
        getDirection(): $Direction;
        getDecorations(): $PotDecorations;
        setLootTable(lootTable: $ResourceKey_<$LootTable> | null): void;
        setLootTableSeed(seed: number): void;
        setFromItem(item: $ItemStack_): void;
        tryLoadLootTable(tag: $CompoundTag_): boolean;
        setLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        trySaveLootTable(tag: $CompoundTag_): boolean;
        unpackLootTable(player: $Player | null): void;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        getMaxStackSize(stack: $ItemStack_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
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
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        removeTheItem(): $ItemStack;
        clearContent(): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getWidth(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getSlots(): number;
        getBlock(level: $Level_): $LevelBlock;
        self(): $Container;
        clear(): void;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getStackInSlot(amount: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getHeight(): number;
        isMutable(): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlotLimit(slot: number): number;
        asContainer(): $Container;
        setChanged(): void;
        isEmpty(): boolean;
        count(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        count(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        find(): number;
        find(match: $ItemPredicate_): number;
        clear(match: $ItemPredicate_): void;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        static TAG_SHERDS: string;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        lastWobbleStyle: $DecoratedPotBlockEntity$WobbleStyle;
        static TAG_ITEM: string;
        level: $Level;
        wobbleStartedAtTick: number;
        static ATTACHMENTS_NBT_KEY: string;
        static EVENT_POT_WOBBLES: number;
        lootTableSeed: number;
        remove: boolean;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get containerBlockEntity(): $BlockEntity;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get potAsItem(): $ItemStack;
        get direction(): $Direction;
        get decorations(): $PotDecorations;
        set fromItem(value: $ItemStack_);
        get width(): number;
        get slots(): number;
        get height(): number;
        get mutable(): boolean;
        get empty(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $SculkShriekerBlockEntity extends $BlockEntity implements $GameEventListener$Provider<$VibrationSystem$Listener>, $VibrationSystem {
        getVibrationUser(): $VibrationSystem$User;
        static tryGetPlayer(entity: $Entity | null): $ServerPlayer;
        getVibrationData(): $VibrationSystem$Data;
        tryRespond(level: $ServerLevel): void;
        tryShriek(level: $ServerLevel, player: $ServerPlayer | null): void;
        getListener(): $VibrationSystem$Listener;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get vibrationUser(): $VibrationSystem$User;
        get vibrationData(): $VibrationSystem$Data;
        get listener(): $VibrationSystem$Listener;
    }
}
