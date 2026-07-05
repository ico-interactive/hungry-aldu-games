import { $NumberProvider, $NumberProvider_ } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $LootTableAccessor, $LootPoolAccessor } from "@package/net/fabricmc/fabric/mixin/loot";
import { $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ItemContainerContents, $ChargedProjectiles, $BundleContents } from "@package/net/minecraft/world/item/component";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $LootPoolEntryContainer$Builder, $LootPoolEntryContainer } from "@package/net/minecraft/world/level/storage/loot/entries";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FunctionUserBuilder, $LootItemFunction$Builder, $LootItemFunction$Builder_, $LootItemFunction } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $List, $Map_, $Collection_, $List_, $Map, $Set } from "@package/java/util";
import { $StringRepresentable, $RandomSource, $StringRepresentable$EnumCodec, $ProblemReporter } from "@package/net/minecraft/util";
import { $Container } from "@package/net/minecraft/world";
import { $BiConsumer, $Consumer, $BiConsumer_, $Function_, $Consumer_, $UnaryOperator_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $HolderGetter$Provider, $Holder, $HolderGetter$Provider_, $Registry } from "@package/net/minecraft/core";
import { $FabricLootPoolBuilder as $FabricLootPoolBuilder$1, $FabricLootTableBuilder } from "@package/net/fabricmc/fabric/api/loot/v2";
import { $Stream } from "@package/java/util/stream";
import { $FabricLootPoolBuilder, $FabricLootTableBuilder as $FabricLootTableBuilder$1 } from "@package/net/fabricmc/fabric/api/loot/v3";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LootItemCondition$Builder_, $ConditionUserBuilder, $LootItemCondition$Builder, $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $DataComponentType } from "@package/net/minecraft/core/component";
import { $Iterable_, $Enum, $Record, $Object } from "@package/java/lang";
import { $LootContextParam, $LootContextParamSet } from "@package/net/minecraft/world/level/storage/loot/parameters";
export * as parameters from "@package/net/minecraft/world/level/storage/loot/parameters";
export * as predicates from "@package/net/minecraft/world/level/storage/loot/predicates";
export * as providers from "@package/net/minecraft/world/level/storage/loot/providers";
export * as entries from "@package/net/minecraft/world/level/storage/loot/entries";
export * as functions from "@package/net/minecraft/world/level/storage/loot/functions";

declare module "@package/net/minecraft/world/level/storage/loot" {
    export class $IntRange$IntLimiter {
    }
    export interface $IntRange$IntLimiter {
    }
    /**
     * Values that may be interpreted as {@link $IntRange$IntLimiter}.
     */
    export type $IntRange$IntLimiter_ = (() => void);
    export class $LootParams$Builder {
        create(params: $LootContextParamSet): $LootParams;
        getLevel(): $ServerLevel;
        getOptionalParameter<T>(parameter: $LootContextParam<T>): T;
        withLuck(luck: number): $LootParams$Builder;
        getParameter<T>(parameter: $LootContextParam<T>): T;
        withOptionalParameter<T>(parameter: $LootContextParam<T>, value: T | null): $LootParams$Builder;
        withDynamicDrop(name: $ResourceLocation_, dynamicDrop: $LootParams$DynamicDrop_): $LootParams$Builder;
        withParameter<T>(parameter: $LootContextParam<T>, value: T): $LootParams$Builder;
        constructor(level: $ServerLevel);
        get level(): $ServerLevel;
    }
    export class $LootTable$Builder implements $FunctionUserBuilder<$LootTable$Builder>, $FabricLootTableBuilder, $FabricLootTableBuilder$1 {
        apply(functionBuilder: $LootItemFunction$Builder_): $LootTable$Builder;
        apply(arg0: $LootItemFunction): $LootTable$Builder;
        apply(arg0: $Collection_<any>): $LootTable$Builder;
        pool(arg0: $LootPool): $LootTable$Builder;
        build(): $LootTable;
        pools(arg0: $Collection_<any>): $LootTable$Builder;
        modifyPools(arg0: $Consumer_<any>): $LootTable$Builder;
        setRandomSequence(randomSequence: $ResourceLocation_): $LootTable$Builder;
        setParamSet(parameterSet: $LootContextParamSet): $LootTable$Builder;
        withPool(lootPool: $LootPool$Builder): $LootTable$Builder;
        apply<E>(builderSources: E[], toBuilderFunction: $Function_<E, $LootItemFunction$Builder>): $LootTable$Builder;
        apply<E>(builderSources: $Iterable_<E>, toBuilderFunction: $Function_<E, $LootItemFunction$Builder>): $LootTable$Builder;
        unwrap(): $LootTable$Builder;
        constructor();
        set randomSequence(value: $ResourceLocation_);
        set paramSet(value: $LootContextParamSet);
    }
    export class $LootPool$Builder implements $FunctionUserBuilder<$LootPool$Builder>, $ConditionUserBuilder<$LootPool$Builder>, $FabricLootPoolBuilder$1, $FabricLootPoolBuilder {
        name(arg0: string): $LootPool$Builder;
        add(entriesBuilder: $LootPoolEntryContainer$Builder<never>): $LootPool$Builder;
        apply(functionBuilder: $LootItemFunction$Builder_): $LootPool$Builder;
        apply(arg0: $LootItemFunction): $LootPool$Builder;
        apply(arg0: $Collection_<any>): $LootPool$Builder;
        "with"(arg0: $LootPoolEntryContainer): $LootPool$Builder;
        "with"(arg0: $Collection_<any>): $LootPool$Builder;
        unwrap(): $LootPool$Builder;
        build(): $LootPool;
        when(conditionBuilder: $LootItemCondition$Builder_): $LootPool$Builder;
        setRolls(bonusRolls: $NumberProvider_): $LootPool$Builder;
        setBonusRolls(bonusRolls: $NumberProvider_): $LootPool$Builder;
        conditionally(arg0: $LootItemCondition): $LootPool$Builder;
        conditionally(arg0: $Collection_<any>): $LootPool$Builder;
        apply<E>(builderSources: E[], toBuilderFunction: $Function_<E, $LootItemFunction$Builder>): $LootPool$Builder;
        apply<E>(builderSources: $Iterable_<E>, toBuilderFunction: $Function_<E, $LootItemFunction$Builder>): $LootPool$Builder;
        when<E>(builderSources: $Iterable_<E>, toBuilderFunction: $Function_<E, $LootItemCondition$Builder>): $LootPool$Builder;
        constructor();
        set rolls(value: $NumberProvider_);
        set bonusRolls(value: $NumberProvider_);
    }
    /**
     * Represents a type of entity that can be looked up in a `LootContext` using a `LootContextParam`.
     */
    export class $LootContext$EntityTarget extends $Enum<$LootContext$EntityTarget> implements $StringRepresentable {
        getName(): string;
        static values(): $LootContext$EntityTarget[];
        static valueOf(name: string): $LootContext$EntityTarget;
        static getByName(name: string): $LootContext$EntityTarget;
        getParam(): $LootContextParam<$Entity>;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static DIRECT_ATTACKER: $LootContext$EntityTarget;
        static CODEC: $StringRepresentable$EnumCodec<$LootContext$EntityTarget>;
        static ATTACKER: $LootContext$EntityTarget;
        static ATTACKING_PLAYER: $LootContext$EntityTarget;
        static THIS: $LootContext$EntityTarget;
        get param(): $LootContextParam<$Entity>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $LootContext$EntityTarget}.
     */
    export type $LootContext$EntityTarget_ = "this" | "attacker" | "direct_attacker" | "attacking_player" | string;
    export class $LootDataType<T> extends $Record {
        static values(): $Stream<$LootDataType<never>>;
        defaultValue(): T;
        deserialize<V>(resourceLocation: $ResourceLocation_, ops: $DynamicOps<V>, value: V): (T) | undefined;
        validator(): $LootDataType$Validator<T>;
        registryKey(): $ResourceKey<$Registry<T>>;
        codec(): $Codec<T>;
        handler$cmd000$probejs$apply(resourceLocation: $ResourceLocation_, ops: $DynamicOps<any>, value: $Object, cir: $CallbackInfoReturnable<any>): void;
        conditionalCodec(): $Codec<(T) | undefined>;
        runValidation(context: $ValidationContext, key: $ResourceKey_<T>, value: T): void;
        idSetter(): $BiConsumer<T, $ResourceLocation>;
        static TABLE: $LootDataType<$LootTable>;
        static MODIFIER: $LootDataType<$LootItemFunction>;
        static PREDICATE: $LootDataType<$LootItemCondition>;
        constructor(registryKey: $ResourceKey_<$Registry<T>>, codec: $Codec<T>, validator: $LootDataType$Validator_<T>, defaultValue: T, conditionalCodec: $Codec<(T) | undefined>, idSetter: $BiConsumer_<T, $ResourceLocation>);
    }
    /**
     * Values that may be interpreted as {@link $LootDataType}.
     */
    export type $LootDataType_<T> = { registryKey?: $ResourceKey_<$Registry<any>>, validator?: $LootDataType$Validator_<any>, idSetter?: $BiConsumer_<any, $ResourceLocation>, conditionalCodec?: $Codec<(T) | undefined>, defaultValue?: any, codec?: $Codec<any>,  } | [registryKey?: $ResourceKey_<$Registry<any>>, validator?: $LootDataType$Validator_<any>, idSetter?: $BiConsumer_<any, $ResourceLocation>, conditionalCodec?: $Codec<(T) | undefined>, defaultValue?: any, codec?: $Codec<any>, ];
    /**
     * LootContext stores various context information for loot generation.
     * This includes the Level as well as any known `LootContextParam`s.
     */
    export class $LootContext {
        /**
         * Get the value of the given parameter.
         * 
         * @throws NoSuchElementException if the parameter is not present in this context
         */
        getParam<T>(param: $LootContextParam<T>): T;
        /**
         * Check whether the given parameter is present in this context.
         */
        hasParam(parameter: $LootContextParam<never>): boolean;
        getLevel(): $ServerLevel;
        /**
         * Add the dynamic drops for the given dynamic drops name to the given consumer.
         * If no dynamic drops provider for the given name has been registered to this LootContext, nothing is generated.
         * 
         * @see DynamicDrops
         */
        addDynamicDrops(name: $ResourceLocation_, consumer: $Consumer_<$ItemStack>): void;
        hasVisitedElement(element: $LootContext$VisitedEntry_<never>): boolean;
        /**
         * Get the value of the given parameter.
         * 
         * @throws NoSuchElementException if the parameter is not present in this context
         */
        getParamOrNull<T>(param: $LootContextParam<T>): T;
        popVisitedElement(element: $LootContext$VisitedEntry_<never>): void;
        getRandom(): $RandomSource;
        getResolver(): $HolderGetter$Provider;
        /**
         * The luck value for this loot context. This is usually just the player's luck value, however it may be modified depending on the context of the looting.
         * When fishing for example it is increased based on the Luck of the Sea enchantment.
         */
        getLuck(): number;
        setQueriedLootTableId(arg0: $ResourceLocation_): void;
        pushVisitedElement(element: $LootContext$VisitedEntry_<never>): boolean;
        static createVisitedEntry(modifier: $LootItemFunction): $LootContext$VisitedEntry<$LootItemFunction>;
        static createVisitedEntry(predicate: $LootItemCondition): $LootContext$VisitedEntry<$LootItemCondition>;
        static createVisitedEntry(lootTable: $LootTable): $LootContext$VisitedEntry<$LootTable>;
        getQueriedLootTableId(): $ResourceLocation;
        constructor(params: $LootParams, random: $RandomSource, lootDataResolver: $HolderGetter$Provider_);
        get level(): $ServerLevel;
        get random(): $RandomSource;
        get resolver(): $HolderGetter$Provider;
        get luck(): number;
    }
    /**
     * Context for validating loot tables. Loot tables are validated recursively by checking that all functions, conditions, etc. (implementing `LootContextUser`) are valid according to their LootTable's `LootContextParamSet`.
     */
    export class $ValidationContext {
        /**
         * Validate the given LootContextUser.
         */
        validateUser(lootContextUser: $LootContextUser): void;
        resolver(): $HolderGetter$Provider;
        reporter(): $ProblemReporter;
        /**
         * Create a new ValidationContext with the given LootContextParamSet.
         */
        setParams(params: $LootContextParamSet): $ValidationContext;
        hasVisitedElement(key: $ResourceKey_<never>): boolean;
        /**
         * Report a problem to this ValidationContext.
         */
        reportProblem(problem: string): void;
        allowsReferences(): boolean;
        enterElement(name: string, key: $ResourceKey_<never>): $ValidationContext;
        /**
         * Create a new ValidationContext with `childName` being added to the context.
         */
        forChild(childName: string): $ValidationContext;
        constructor(reporter: $ProblemReporter, params: $LootContextParamSet);
        constructor(reporter: $ProblemReporter, params: $LootContextParamSet, resolver: $HolderGetter$Provider_);
        set params(value: $LootContextParamSet);
    }
    /**
     * An object that will use some parameters from a LootContext. Used for validation purposes to validate that the correct parameters are present.
     */
    export class $LootContextUser {
    }
    export interface $LootContextUser {
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * A possibly unbounded range of integers based on `LootContext`. Minimum and maximum are given in the form of `NumberProvider`s.
     * Minimum and maximum are both optional. If given, they are both inclusive.
     */
    export class $IntRange {
        /**
         * Check whether the given value falls within this IntRange.
         */
        test(lootContext: $LootContext, value: number): boolean;
        /**
         * Clamp the given value so that it falls within this IntRange.
         */
        clamp(lootContext: $LootContext, value: number): number;
        /**
         * Create an IntRange that contains only exactly the given value.
         */
        static exact(exactValue: number): $IntRange;
        /**
         * Create an IntRange that ranges from `min` to `max`, both inclusive.
         */
        static range(min: number, max: number): $IntRange;
        /**
         * Create an IntRange that contains only exactly the given value.
         */
        static lowerBound(exactValue: number): $IntRange;
        /**
         * Create an IntRange that contains only exactly the given value.
         */
        static upperBound(exactValue: number): $IntRange;
        /**
         * The LootContextParams required for this IntRange.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static CODEC: $Codec<$IntRange>;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $LootDataType$Validator<T> {
    }
    export interface $LootDataType$Validator<T> {
        run(context: $ValidationContext, key: $ResourceKey_<T>, value: T): void;
    }
    /**
     * Values that may be interpreted as {@link $LootDataType$Validator}.
     */
    export type $LootDataType$Validator_<T> = ((arg0: $ValidationContext, arg1: $ResourceKey<T>, arg2: T) => void);
    export class $LootParams$DynamicDrop {
    }
    export interface $LootParams$DynamicDrop {
        add(output: $Consumer_<$ItemStack>): void;
    }
    /**
     * Values that may be interpreted as {@link $LootParams$DynamicDrop}.
     */
    export type $LootParams$DynamicDrop_ = ((arg0: $Consumer<$ItemStack>) => void);
    export class $ContainerComponentManipulators {
        static ALL_MANIPULATORS: $Map<$DataComponentType<never>, $ContainerComponentManipulator<never>>;
        static CODEC: $Codec<$ContainerComponentManipulator<never>>;
        static CHARGED_PROJECTILES: $ContainerComponentManipulator<$ChargedProjectiles>;
        static CONTAINER: $ContainerComponentManipulator<$ItemContainerContents>;
        static BUNDLE_CONTENTS: $ContainerComponentManipulator<$BundleContents>;
    }
    export interface $ContainerComponentManipulators {
    }
    export class $LootParams {
        hasParam(param: $LootContextParam<never>): boolean;
        getLevel(): $ServerLevel;
        addDynamicDrops(location: $ResourceLocation_, consumer: $Consumer_<$ItemStack>): void;
        getParamOrNull<T>(param: $LootContextParam<T>): T;
        getOptionalParameter<T>(param: $LootContextParam<T>): T;
        getLuck(): number;
        getParameter<T>(param: $LootContextParam<T>): T;
        constructor(level: $ServerLevel, params: $Map_<$LootContextParam<never>, $Object>, dynamicDrops: $Map_<$ResourceLocation_, $LootParams$DynamicDrop_>, luck: number);
        get level(): $ServerLevel;
        get luck(): number;
    }
    export class $ContainerComponentManipulator<T> {
    }
    export interface $ContainerComponentManipulator<T> {
        type(): $DataComponentType<T>;
        empty(): T;
        getContents(contents: T): $Stream<$ItemStack>;
        modifyItems(stack: $ItemStack_, modifier: $UnaryOperator_<$ItemStack>): void;
        setContents(stack: $ItemStack_, items: $Stream<$ItemStack_>): void;
        setContents(stack: $ItemStack_, contents: T, items: $Stream<$ItemStack_>): void;
        setContents(contents: T, items: $Stream<$ItemStack_>): T;
    }
    export class $LootTable implements $LootTableAccessor {
        fill(container: $Container, params: $LootParams, seed: number): void;
        /**
         * Validate this LootTable using the given ValidationContext.
         */
        validate(validator: $ValidationContext): void;
        getPool(arg0: string): $LootPool;
        isFrozen(): boolean;
        freeze(): void;
        addPool(arg0: $LootPool): void;
        removePool(arg0: string): $LootPool;
        setLootTableId(arg0: $ResourceLocation_): void;
        getLootTableId(): $ResourceLocation;
        /**
         * @deprecated
         * Generate random items to the given Consumer, ensuring they do not exceed their maximum stack size.
         */
        getRandomItemsRaw(contextData: $LootContext, output: $Consumer_<$ItemStack>): void;
        /**
         * @deprecated
         */
        getRandomItemsRaw(params: $LootParams, output: $Consumer_<$ItemStack>): void;
        /**
         * Get the parameter set for this LootTable.
         */
        getParamSet(): $LootContextParamSet;
        getRandomItems(params: $LootParams, output: $Consumer_<$ItemStack>): void;
        getRandomItems(params: $LootParams): $ObjectArrayList<$ItemStack>;
        getRandomItems(params: $LootParams, seed: number): $ObjectArrayList<$ItemStack>;
        getRandomItems(params: $LootParams, random: $RandomSource): $ObjectArrayList<$ItemStack>;
        getRandomItems(params: $LootParams, seed: number, arg2: $Consumer_<$ItemStack>): void;
        /**
         * Generate random items to the given Consumer, ensuring they do not exceed their maximum stack size.
         */
        getRandomItems(contextData: $LootContext, output: $Consumer_<$ItemStack>): void;
        static lootTable(): $LootTable$Builder;
        static createStackSplitter(level: $ServerLevel, output: $Consumer_<$ItemStack>): $Consumer<$ItemStack>;
        fabric_getPools(): $List<$LootPool>;
        fabric_getRandomSequenceId(): ($ResourceLocation) | undefined;
        fabric_getFunctions(): $List<$LootItemFunction>;
        static CODEC: $Codec<$Holder<$LootTable>>;
        static DEFAULT_PARAM_SET: $LootContextParamSet;
        static DIRECT_CODEC: $Codec<$LootTable>;
        static RANDOMIZE_SEED: number;
        static EMPTY: $LootTable;
        constructor(paramSet: $LootContextParamSet, randomSequence: ($ResourceLocation_) | undefined, pools: $List_<$LootPool>, functions: $List_<$LootItemFunction>);
        get frozen(): boolean;
        get paramSet(): $LootContextParamSet;
    }
    export class $LootPool implements $LootPoolAccessor {
        getName(): string;
        /**
         * Validate this LootPool according to the given context.
         */
        validate(context: $ValidationContext): void;
        setName(arg0: string): void;
        isFrozen(): boolean;
        freeze(): void;
        setRolls(arg0: $NumberProvider_): void;
        getRolls(): $NumberProvider;
        static lootPool(): $LootPool$Builder;
        getBonusRolls(): $NumberProvider;
        setBonusRolls(arg0: $NumberProvider_): void;
        addRandomItems(stackConsumer: $Consumer_<$ItemStack>, context: $LootContext): void;
        fabric_getRolls(): $NumberProvider;
        fabric_getEntries(): $List<$LootPoolEntryContainer>;
        fabric_getFunctions(): $List<$LootItemFunction>;
        fabric_getBonusRolls(): $NumberProvider;
        fabric_getConditions(): $List<$LootItemCondition>;
        entries: $List<$LootPoolEntryContainer>;
        static CODEC: $Codec<$LootPool>;
        functions: $List<$LootItemFunction>;
        conditions: $List<$LootItemCondition>;
        rolls: $NumberProvider;
        bonusRolls: $NumberProvider;
        constructor(arg0: $List_<$LootPoolEntryContainer>, arg1: $List_<$LootItemCondition>, arg2: $List_<$LootItemFunction>, arg3: $NumberProvider_, arg4: $NumberProvider_, arg5: (string) | undefined);
        get frozen(): boolean;
    }
    export class $IntRange$IntChecker {
    }
    export interface $IntRange$IntChecker {
    }
    /**
     * Values that may be interpreted as {@link $IntRange$IntChecker}.
     */
    export type $IntRange$IntChecker_ = (() => void);
    export class $LootContext$Builder {
        create(sequence: ($ResourceLocation_) | undefined): $LootContext;
        getLevel(): $ServerLevel;
        withOptionalRandomSeed(seed: number): $LootContext$Builder;
        withOptionalRandomSource(random: $RandomSource): $LootContext$Builder;
        withQueriedLootTableId(arg0: $ResourceLocation_): $LootContext$Builder;
        constructor(params: $LootParams);
        constructor(arg0: $LootContext);
        get level(): $ServerLevel;
    }
    export class $LootContext$VisitedEntry<T> extends $Record {
        type(): $LootDataType<T>;
        value(): T;
        constructor(type: $LootDataType_<T>, value: T);
    }
    /**
     * Values that may be interpreted as {@link $LootContext$VisitedEntry}.
     */
    export type $LootContext$VisitedEntry_<T> = { value?: any, type?: $LootDataType_<any>,  } | [value?: any, type?: $LootDataType_<any>, ];
    /**
     * Stores IDs for built in loot tables, i.e. loot tables which are not based directly on a block or entity ID.
     */
    export class $BuiltInLootTables {
        static all(): $Set<$ResourceKey<$LootTable>>;
        static PANDA_SNEEZE: $ResourceKey<$LootTable>;
        static ANCIENT_CITY_ICE_BOX: $ResourceKey<$LootTable>;
        static PILLAGER_OUTPOST: $ResourceKey<$LootTable>;
        static SHEEP_CYAN: $ResourceKey<$LootTable>;
        static DESERT_WELL_ARCHAEOLOGY: $ResourceKey<$LootTable>;
        static CLERIC_GIFT: $ResourceKey<$LootTable>;
        static SHEEP_PURPLE: $ResourceKey<$LootTable>;
        static VILLAGE_SHEPHERD: $ResourceKey<$LootTable>;
        static STRONGHOLD_LIBRARY: $ResourceKey<$LootTable>;
        static SPAWNER_OMINOUS_TRIAL_CHAMBER_CONSUMABLES: $ResourceKey<$LootTable>;
        static BASTION_OTHER: $ResourceKey<$LootTable>;
        static SHEEP_BLACK: $ResourceKey<$LootTable>;
        static UNDERWATER_RUIN_BIG: $ResourceKey<$LootTable>;
        static OCEAN_RUIN_WARM_ARCHAEOLOGY: $ResourceKey<$LootTable>;
        static SHEEP_LIGHT_GRAY: $ResourceKey<$LootTable>;
        static RUINED_PORTAL: $ResourceKey<$LootTable>;
        static VILLAGE_TOOLSMITH: $ResourceKey<$LootTable>;
        static VILLAGE_BUTCHER: $ResourceKey<$LootTable>;
        static VILLAGE_WEAPONSMITH: $ResourceKey<$LootTable>;
        static SHEEP_LIGHT_BLUE: $ResourceKey<$LootTable>;
        static UNDERWATER_RUIN_SMALL: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_REWARD_RARE: $ResourceKey<$LootTable>;
        static BURIED_TREASURE: $ResourceKey<$LootTable>;
        static EQUIPMENT_TRIAL_CHAMBER_RANGED: $ResourceKey<$LootTable>;
        static SHIPWRECK_SUPPLY: $ResourceKey<$LootTable>;
        static SHEEP_YELLOW: $ResourceKey<$LootTable>;
        static ABANDONED_MINESHAFT: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_INTERSECTION_BARREL: $ResourceKey<$LootTable>;
        static FISHING_JUNK: $ResourceKey<$LootTable>;
        static SHEEP_GRAY: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_WATER_DISPENSER: $ResourceKey<$LootTable>;
        static SHEEP_PINK: $ResourceKey<$LootTable>;
        static SPAWNER_TRIAL_CHAMBER_KEY: $ResourceKey<$LootTable>;
        static VILLAGE_SAVANNA_HOUSE: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_REWARD_UNIQUE: $ResourceKey<$LootTable>;
        static VILLAGE_MASON: $ResourceKey<$LootTable>;
        static FISHING: $ResourceKey<$LootTable>;
        static FISHERMAN_GIFT: $ResourceKey<$LootTable>;
        static BASTION_TREASURE: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_CORRIDOR: $ResourceKey<$LootTable>;
        static BUTCHER_GIFT: $ResourceKey<$LootTable>;
        static CAT_MORNING_GIFT: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_REWARD_OMINOUS_COMMON: $ResourceKey<$LootTable>;
        static VILLAGE_TANNERY: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_REWARD: $ResourceKey<$LootTable>;
        static TRAIL_RUINS_ARCHAEOLOGY_RARE: $ResourceKey<$LootTable>;
        static TRAIL_RUINS_ARCHAEOLOGY_COMMON: $ResourceKey<$LootTable>;
        static BOGGED_SHEAR: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_CORRIDOR_DISPENSER: $ResourceKey<$LootTable>;
        static DESERT_PYRAMID: $ResourceKey<$LootTable>;
        static SHEEP_BLUE: $ResourceKey<$LootTable>;
        static CARTOGRAPHER_GIFT: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_ENTRANCE: $ResourceKey<$LootTable>;
        static EQUIPMENT_TRIAL_CHAMBER_MELEE: $ResourceKey<$LootTable>;
        static STRONGHOLD_CROSSING: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_REWARD_OMINOUS_UNIQUE: $ResourceKey<$LootTable>;
        static SHEEP_MAGENTA: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_CHAMBER_DISPENSER: $ResourceKey<$LootTable>;
        static SPAWNER_TRIAL_ITEMS_TO_DROP_WHEN_OMINOUS: $ResourceKey<$LootTable>;
        static DESERT_PYRAMID_ARCHAEOLOGY: $ResourceKey<$LootTable>;
        static SHEEP_RED: $ResourceKey<$LootTable>;
        static ARMORER_GIFT: $ResourceKey<$LootTable>;
        static MASON_GIFT: $ResourceKey<$LootTable>;
        static SHIPWRECK_TREASURE: $ResourceKey<$LootTable>;
        static FISHING_TREASURE: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_REWARD_OMINOUS_RARE: $ResourceKey<$LootTable>;
        static VILLAGE_ARMORER: $ResourceKey<$LootTable>;
        static SIMPLE_DUNGEON: $ResourceKey<$LootTable>;
        static NETHER_BRIDGE: $ResourceKey<$LootTable>;
        static JUNGLE_TEMPLE_DISPENSER: $ResourceKey<$LootTable>;
        static EQUIPMENT_TRIAL_CHAMBER: $ResourceKey<$LootTable>;
        static VILLAGE_CARTOGRAPHER: $ResourceKey<$LootTable>;
        static FARMER_GIFT: $ResourceKey<$LootTable>;
        static END_CITY_TREASURE: $ResourceKey<$LootTable>;
        static JUNGLE_TEMPLE: $ResourceKey<$LootTable>;
        static FISHING_FISH: $ResourceKey<$LootTable>;
        static ANCIENT_CITY: $ResourceKey<$LootTable>;
        static SNIFFER_DIGGING: $ResourceKey<$LootTable>;
        static SPAWNER_TRIAL_CHAMBER_CONSUMABLES: $ResourceKey<$LootTable>;
        static FLETCHER_GIFT: $ResourceKey<$LootTable>;
        static SHEEP_GREEN: $ResourceKey<$LootTable>;
        static SHEEP_ORANGE: $ResourceKey<$LootTable>;
        static BASTION_BRIDGE: $ResourceKey<$LootTable>;
        static OCEAN_RUIN_COLD_ARCHAEOLOGY: $ResourceKey<$LootTable>;
        static WOODLAND_MANSION: $ResourceKey<$LootTable>;
        static PIGLIN_BARTERING: $ResourceKey<$LootTable>;
        static SPAWN_BONUS_CHEST: $ResourceKey<$LootTable>;
        static SHEEP_BROWN: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_SUPPLY: $ResourceKey<$LootTable>;
        static VILLAGE_DESERT_HOUSE: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_REWARD_OMINOUS: $ResourceKey<$LootTable>;
        static EMPTY: $ResourceKey<$LootTable>;
        static SHIPWRECK_MAP: $ResourceKey<$LootTable>;
        static SHEPHERD_GIFT: $ResourceKey<$LootTable>;
        static STRONGHOLD_CORRIDOR: $ResourceKey<$LootTable>;
        static LIBRARIAN_GIFT: $ResourceKey<$LootTable>;
        static BASTION_HOGLIN_STABLE: $ResourceKey<$LootTable>;
        static VILLAGE_FLETCHER: $ResourceKey<$LootTable>;
        static VILLAGE_TEMPLE: $ResourceKey<$LootTable>;
        static SHEEP_LIME: $ResourceKey<$LootTable>;
        static IGLOO_CHEST: $ResourceKey<$LootTable>;
        static SHEEP_WHITE: $ResourceKey<$LootTable>;
        static TOOLSMITH_GIFT: $ResourceKey<$LootTable>;
        static WEAPONSMITH_GIFT: $ResourceKey<$LootTable>;
        static VILLAGE_SNOWY_HOUSE: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_REWARD_COMMON: $ResourceKey<$LootTable>;
        static SPAWNER_OMINOUS_TRIAL_CHAMBER_KEY: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_CORRIDOR_POT: $ResourceKey<$LootTable>;
        static VILLAGE_TAIGA_HOUSE: $ResourceKey<$LootTable>;
        static VILLAGE_FISHER: $ResourceKey<$LootTable>;
        static VILLAGE_PLAINS_HOUSE: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_INTERSECTION: $ResourceKey<$LootTable>;
        static LEATHERWORKER_GIFT: $ResourceKey<$LootTable>;
        constructor();
    }
}
