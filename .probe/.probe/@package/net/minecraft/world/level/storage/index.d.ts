import { $Lifecycle, $Dynamic } from "@package/com/mojang/serialization";
import { $MinecraftServer, $WorldLoader$PackConfig } from "@package/net/minecraft/server";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $DateTimeFormatter } from "@package/java/time/format";
import { $SavedData$Factory_, $SavedData } from "@package/net/minecraft/world/level/saveddata";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $Spliterator, $Iterator, $UUID, $List, $UUID_, $List_, $Set } from "@package/java/util";
import { $EndDragonFight$Data_, $EndDragonFight$Data } from "@package/net/minecraft/world/level/dimension/end";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $DirectoryLock } from "@package/net/minecraft/util";
import { $WorldBorder$Settings } from "@package/net/minecraft/world/level/border";
import { $Difficulty_, $Difficulty } from "@package/net/minecraft/world";
import { $Consumer_ } from "@package/java/util/function";
import { $TimerQueue } from "@package/net/minecraft/world/level/timers";
import { $CrashReportCategory } from "@package/net/minecraft";
import { $HolderLookup$Provider, $BlockPos, $RegistryAccess$Frozen, $BlockPos_, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $Enum, $Record, $RuntimeException, $AutoCloseable, $Comparable, $Iterable } from "@package/java/lang";
import { $WorldDimensions$Complete_, $WorldOptions, $WorldDimensions$Complete } from "@package/net/minecraft/world/level/levelgen";
import { $File, $File_ } from "@package/java/io";
import { $LevelSettings, $GameType, $WorldDataConfiguration, $GameRules, $GameType_, $LevelHeightAccessor, $Level, $WorldDataConfiguration_ } from "@package/net/minecraft/world/level";
import { $Logger } from "@package/org/slf4j";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Instant, $LocalDateTime } from "@package/java/time";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $DataFixTypes_ } from "@package/net/minecraft/util/datafix";
import { $Stream } from "@package/java/util/stream";
import { $PrimaryLevelDataExtension } from "@package/dev/simulated_team/simulated/mixin_interface";
import { $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LevelStem_ } from "@package/net/minecraft/world/level/dimension";
import { $DirectoryValidator } from "@package/net/minecraft/world/level/validation";
export * as loot from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/minecraft/world/level/storage" {
    export class $CommandStorage {
        get(id: $ResourceLocation_): $CompoundTag;
        set(id: $ResourceLocation_, nbt: $CompoundTag_): void;
        keys(): $Stream<$ResourceLocation>;
        constructor(storage: $DimensionDataStorage);
    }
    export class $CommandStorage$Container extends $SavedData {
    }
    export class $LevelStorageSource$LevelDirectory extends $Record {
        path(): $Path;
        directoryName(): string;
        oldDataFile(): $Path;
        lockFile(): $Path;
        corruptedDataFile(dateTime: $LocalDateTime): $Path;
        resourcePath(resource: $LevelResource): $Path;
        dataFile(): $Path;
        iconFile(): $Path;
        rawDataFile(dateTime: $LocalDateTime): $Path;
        constructor(path: $Path_);
    }
    /**
     * Values that may be interpreted as {@link $LevelStorageSource$LevelDirectory}.
     */
    export type $LevelStorageSource$LevelDirectory_ = { path?: $Path_,  } | [path?: $Path_, ];
    export class $LevelDataAndDimensions extends $Record {
        dimensions(): $WorldDimensions$Complete;
        worldData(): $WorldData;
        constructor(arg0: $WorldData, arg1: $WorldDimensions$Complete_);
    }
    /**
     * Values that may be interpreted as {@link $LevelDataAndDimensions}.
     */
    export type $LevelDataAndDimensions_ = { worldData?: $WorldData, dimensions?: $WorldDimensions$Complete_,  } | [worldData?: $WorldData, dimensions?: $WorldDimensions$Complete_, ];
    export class $WorldData {
        static ANVIL_VERSION_ID: number;
        static MCREGION_VERSION_ID: number;
    }
    export interface $WorldData {
        /**
         * Get current world name
         */
        getLevelName(): string;
        getVersion(): number;
        worldGenSettingsLifecycle(): $Lifecycle;
        setDataConfiguration(dataConfiguration: $WorldDataConfiguration_): void;
        setCustomBossEvents(nbt: $CompoundTag_ | null): void;
        getStorageVersionName(storageVersionId: number): string;
        getKnownServerBrands(): $Set<string>;
        getCustomBossEvents(): $CompoundTag;
        getRemovedFeatureFlags(): $Set<string>;
        setDifficultyLocked(locked: boolean): void;
        getDataConfiguration(): $WorldDataConfiguration;
        setEndDragonFightData(endDragonFightData: $EndDragonFight$Data_): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isAllowCommands(): boolean;
        getLoadedPlayerTag(): $CompoundTag;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDebugWorld(): boolean;
        setDifficulty(difficulty: $Difficulty_): void;
        overworldData(): $ServerLevelData;
        getLevelSettings(): $LevelSettings;
        setModdedInfo(name: string, isModded: boolean): void;
        fillCrashReportCategory(category: $CrashReportCategory): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        wasModded(): boolean;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        createTag(registries: $RegistryAccess, hostPlayerNBT: $CompoundTag_ | null): $CompoundTag;
        enabledFeatures(): $FeatureFlagSet;
        setGameType(type: $GameType_): void;
        endDragonFightData(): $EndDragonFight$Data;
        worldGenOptions(): $WorldOptions;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isFlatWorld(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        getDifficulty(): $Difficulty;
        get levelName(): string;
        get version(): number;
        get knownServerBrands(): $Set<string>;
        get removedFeatureFlags(): $Set<string>;
        get allowCommands(): boolean;
        get loadedPlayerTag(): $CompoundTag;
        get debugWorld(): boolean;
        get levelSettings(): $LevelSettings;
        get gameRules(): $GameRules;
        get flatWorld(): boolean;
        get hardcore(): boolean;
    }
    export class $LevelSummary$CorruptedLevelSummary extends $LevelSummary {
        static PLAY_WORLD: $Component;
        constructor(levelId: string, icon: $Path_, lastPlayed: number);
    }
    export class $LevelSummary$SymlinkLevelSummary extends $LevelSummary {
        static PLAY_WORLD: $Component;
        constructor(levelId: string, icon: $Path_);
    }
    export class $DataVersion {
        getVersion(): number;
        isSideSeries(): boolean;
        isCompatible(dataVersion: $DataVersion): boolean;
        getSeries(): string;
        static MAIN_SERIES: string;
        constructor(version: number);
        constructor(version: number, series: string);
        get version(): number;
        get sideSeries(): boolean;
        get series(): string;
    }
    export class $DerivedLevelData implements $ServerLevelData {
        /**
         * Get current world name
         */
        getLevelName(): string;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnChance(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnChance(): number;
        setWanderingTraderSpawnDelay(time: number): void;
        getSpawnPos(): $BlockPos;
        getSpawnAngle(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        getDayTimePerTick(): number;
        setDayTimeFraction(arg0: number): void;
        /**
         * Set current world time
         */
        setGameTime(time: number): void;
        setDayTimePerTick(arg0: number): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isAllowCommands(): boolean;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        /**
         * Sets the initialization status of the World.
         */
        setInitialized(initialized: boolean): void;
        /**
         * Get current world time
         */
        getDayTime(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isInitialized(): boolean;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        getWorldBorder(): $WorldBorder$Settings;
        setGameType(type: $GameType_): void;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        /**
         * Return the number of ticks until rain.
         */
        getThunderTime(): number;
        setRainTime(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getRainTime(): number;
        /**
         * Sets the initialization status of the World.
         */
        setThundering(initialized: boolean): void;
        setThunderTime(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getClearWeatherTime(): number;
        /**
         * Set current world time
         */
        setDayTime(time: number): void;
        /**
         * Sets the initialization status of the World.
         */
        setRaining(initialized: boolean): void;
        setSpawn(spawnPoint: $BlockPos_, angle: number): void;
        setClearWeatherTime(time: number): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        getDayTimeFraction(): number;
        getDifficulty(): $Difficulty;
        /**
         * Get current world time
         */
        getGameTime(): number;
        setWorldBorder(serializer: $WorldBorder$Settings): void;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(id: $UUID_): void;
        constructor(worldData: $WorldData, wrapped: $ServerLevelData);
        get levelName(): string;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
        get allowCommands(): boolean;
        get gameRules(): $GameRules;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get hardcore(): boolean;
        get difficultyLocked(): boolean;
        get difficulty(): $Difficulty;
    }
    export class $LevelStorageException extends $RuntimeException {
        getMessageComponent(): $Component;
        constructor(messageComponent: $Component_);
        get messageComponent(): $Component;
    }
    export class $WritableLevelData {
    }
    export interface $WritableLevelData extends $LevelData {
        setSpawn(spawnPoint: $BlockPos_, spawnAngle: number): void;
    }
    export class $LevelData {
    }
    export interface $LevelData {
        getSpawnPos(): $BlockPos;
        getSpawnAngle(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        /**
         * Get current world time
         */
        getDayTime(): number;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        /**
         * Sets whether it is raining or not.
         */
        setRaining(raining: boolean): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        getDifficulty(): $Difficulty;
        /**
         * Get current world time
         */
        getGameTime(): number;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
        get thundering(): boolean;
        get dayTime(): number;
        get gameRules(): $GameRules;
        get hardcore(): boolean;
        get difficultyLocked(): boolean;
        get difficulty(): $Difficulty;
        get gameTime(): number;
    }
    export class $DimensionDataStorage {
        get<T extends $SavedData>(factory: $SavedData$Factory_<T>, name: string): T;
        set(name: string, savedData: $SavedData): void;
        computeIfAbsent<T extends $SavedData>(factory: $SavedData$Factory_<T>, name: string): T;
        save(): void;
        readTagFromDisk(filename: string, dataFixType: $DataFixTypes_ | null, version: number): $CompoundTag;
        dataFolder: $File;
        constructor(dataFolder: $File_, fixerUpper: $DataFixer, registries: $HolderLookup$Provider);
    }
    export class $LevelSummary$BackupStatus extends $Enum<$LevelSummary$BackupStatus> {
        static values(): $LevelSummary$BackupStatus[];
        static valueOf(arg0: string): $LevelSummary$BackupStatus;
        shouldBackup(): boolean;
        getTranslationKey(): string;
        isSevere(): boolean;
        static UPGRADE_TO_SNAPSHOT: $LevelSummary$BackupStatus;
        static DOWNGRADE: $LevelSummary$BackupStatus;
        static NONE: $LevelSummary$BackupStatus;
        get translationKey(): string;
        get severe(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LevelSummary$BackupStatus}.
     */
    export type $LevelSummary$BackupStatus_ = "none" | "downgrade" | "upgrade_to_snapshot";
    export class $LevelStorageSource$LevelStorageAccess implements $AutoCloseable {
        parent(): $LevelStorageSource;
        close(): void;
        getIconFile(): ($Path) | undefined;
        getSummary(dynamic: $Dynamic<never>): $LevelSummary;
        getDataTag(): $Dynamic<never>;
        safeClose(): void;
        getFileModificationTime(useFallback: boolean): $Instant;
        getLevelDirectory(): $LevelStorageSource$LevelDirectory;
        getDataTagFallback(): $Dynamic<never>;
        renameLevel(saveName: string): void;
        estimateDiskSpace(): number;
        makeWorldBackup(): number;
        getWorldDir(): $Path;
        getDimensionPath(dimensionPath: $ResourceKey_<$Level>): $Path;
        getLevelId(): string;
        hasWorldData(): boolean;
        deleteLevel(): void;
        saveDataTag(registries: $RegistryAccess, serverConfiguration: $WorldData): void;
        saveDataTag(registries: $RegistryAccess, serverConfiguration: $WorldData, hostPlayerNBT: $CompoundTag_ | null): void;
        readAdditionalLevelSaveData(arg0: boolean): void;
        createPlayerStorage(): $PlayerDataStorage;
        renameAndDropPlayer(saveName: string): void;
        restoreLevelDataFromOld(): boolean;
        checkForLowDiskSpace(): boolean;
        getLevelPath(folderName: $LevelResource): $Path;
        levelDirectory: $LevelStorageSource$LevelDirectory;
        this$0: $LevelStorageSource;
        lock: $DirectoryLock;
        constructor(levelId: $LevelStorageSource, levelDir: string, arg2: $Path_);
        get iconFile(): ($Path) | undefined;
        get dataTag(): $Dynamic<never>;
        get dataTagFallback(): $Dynamic<never>;
        get worldDir(): $Path;
        get levelId(): string;
    }
    export class $PlayerDataStorage {
        load(player: $Player): ($CompoundTag) | undefined;
        save(player: $Player): void;
        getPlayerDir(): $File;
        fixerUpper: $DataFixer;
        constructor(levelStorageAccess: $LevelStorageSource$LevelStorageAccess, fixerUpper: $DataFixer);
        get playerDir(): $File;
    }
    export class $ServerLevelData {
    }
    export interface $ServerLevelData extends $WritableLevelData {
        /**
         * Get current world name
         */
        getLevelName(): string;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnChance(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnChance(): number;
        setWanderingTraderSpawnDelay(time: number): void;
        getDayTimePerTick(): number;
        setDayTimeFraction(arg0: number): void;
        /**
         * Set current world time
         */
        setGameTime(time: number): void;
        setDayTimePerTick(arg0: number): void;
        /**
         * Returns `true` if the World is initialized.
         */
        isAllowCommands(): boolean;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        /**
         * Sets the initialization status of the World.
         */
        setInitialized(initialized: boolean): void;
        /**
         * Returns `true` if the World is initialized.
         */
        isInitialized(): boolean;
        getWorldBorder(): $WorldBorder$Settings;
        setGameType(type: $GameType_): void;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        /**
         * Return the number of ticks until rain.
         */
        getThunderTime(): number;
        setRainTime(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getRainTime(): number;
        /**
         * Sets the initialization status of the World.
         */
        setThundering(initialized: boolean): void;
        setThunderTime(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getClearWeatherTime(): number;
        /**
         * Set current world time
         */
        setDayTime(time: number): void;
        setClearWeatherTime(time: number): void;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        getDayTimeFraction(): number;
        setWorldBorder(serializer: $WorldBorder$Settings): void;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(id: $UUID_): void;
        get levelName(): string;
        set gameTime(value: number);
        get allowCommands(): boolean;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        set thundering(value: boolean);
        set dayTime(value: number);
    }
    export class $LevelVersion {
        snapshot(): boolean;
        static parse(nbt: $Dynamic<never>): $LevelVersion;
        minecraftVersionName(): string;
        minecraftVersion(): $DataVersion;
        levelDataVersion(): number;
        lastPlayed(): number;
    }
    export class $LevelStorageSource {
        getName(): string;
        static createDefault(savesDir: $Path_): $LevelStorageSource;
        levelExists(saveName: string): boolean;
        makeLevelSummary(dynamic: $Dynamic<never>, levelDirectory: $LevelStorageSource$LevelDirectory_, locked: boolean): $LevelSummary;
        loadLevelSummaries(candidates: $LevelStorageSource$LevelCandidates_): $CompletableFuture<$List<$LevelSummary>>;
        /**
         * Gets the folder where backups are stored
         */
        getBackupPath(): $Path;
        static getPackConfig(dynamic: $Dynamic<never>, packRepository: $PackRepository, safeMode: boolean): $WorldLoader$PackConfig;
        static readDataConfig(dynamic: $Dynamic<never>): $WorldDataConfiguration;
        static getLevelDataAndDimensions(dynamic: $Dynamic<never>, dataConfiguration: $WorldDataConfiguration_, levelStemRegistry: $Registry<$LevelStem_>, registry: $RegistryAccess$Frozen): $LevelDataAndDimensions;
        findLevelCandidates(): $LevelStorageSource$LevelCandidates;
        static readLevelDataTagRaw(levelPath: $Path_): $CompoundTag;
        static readLevelDataTagFixed(levelPath: $Path_, dataFixer: $DataFixer): $Dynamic<never>;
        static getFileModificationTime(dataFilePath: $Path_): $Instant;
        isNewLevelIdAcceptable(saveName: string): boolean;
        validateAndCreateAccess(saveName: string): $LevelStorageSource$LevelStorageAccess;
        getWorldDirValidator(): $DirectoryValidator;
        /**
         * Gets the folder where backups are stored
         */
        getBaseDir(): $Path;
        static parseValidator(validator: $Path_): $DirectoryValidator;
        createAccess(saveName: string): $LevelStorageSource$LevelStorageAccess;
        getLevelPath(saveName: string): $Path;
        fixerUpper: $DataFixer;
        static ALLOWED_SYMLINKS_CONFIG_NAME: string;
        static FORMATTER: $DateTimeFormatter;
        static LOGGER: $Logger;
        constructor(baseDir: $Path_, backupDir: $Path_, worldDirValidator: $DirectoryValidator, fixerUpper: $DataFixer);
        get name(): string;
        get backupPath(): $Path;
        get worldDirValidator(): $DirectoryValidator;
        get baseDir(): $Path;
    }
    export class $PrimaryLevelData implements $ServerLevelData, $WorldData, $PrimaryLevelDataExtension {
        static parse<T>(tag: $Dynamic<T>, levelSettings: $LevelSettings, specialWorldProperty: $PrimaryLevelData$SpecialWorldProperty_, worldOptions: $WorldOptions, worldGenSettingsLifecycle: $Lifecycle): $PrimaryLevelData;
        /**
         * Get current world name
         */
        getLevelName(): string;
        /**
         * Return the number of ticks until rain.
         */
        getVersion(): number;
        worldGenSettingsLifecycle(): $Lifecycle;
        setDataConfiguration(dataConfiguration: $WorldDataConfiguration_): void;
        setCustomBossEvents(nbt: $CompoundTag_ | null): void;
        getKnownServerBrands(): $Set<string>;
        getCustomBossEvents(): $CompoundTag;
        getRemovedFeatureFlags(): $Set<string>;
        setDifficultyLocked(locked: boolean): void;
        getDataConfiguration(): $WorldDataConfiguration;
        setEndDragonFightData(endDragonFightData: $EndDragonFight$Data_): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnChance(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnChance(): number;
        setWanderingTraderSpawnDelay(time: number): void;
        getSpawnPos(): $BlockPos;
        getSpawnAngle(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        getDayTimePerTick(): number;
        setDayTimeFraction(arg0: number): void;
        /**
         * Set current world time
         */
        setGameTime(time: number): void;
        setDayTimePerTick(arg0: number): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isAllowCommands(): boolean;
        getLoadedPlayerTag(): $CompoundTag;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDebugWorld(): boolean;
        setDifficulty(difficulty: $Difficulty_): void;
        overworldData(): $ServerLevelData;
        getLevelSettings(): $LevelSettings;
        setModdedInfo(name: string, isModded: boolean): void;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        setInitialized(locked: boolean): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        wasModded(): boolean;
        /**
         * Get current world time
         */
        getDayTime(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isInitialized(): boolean;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        createTag(registries: $RegistryAccess, hostPlayerNBT: $CompoundTag_ | null): $CompoundTag;
        getWorldBorder(): $WorldBorder$Settings;
        setGameType(type: $GameType_): void;
        endDragonFightData(): $EndDragonFight$Data;
        worldGenOptions(): $WorldOptions;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        /**
         * Return the number of ticks until rain.
         */
        getThunderTime(): number;
        setRainTime(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getRainTime(): number;
        setThundering(locked: boolean): void;
        setThunderTime(time: number): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isFlatWorld(): boolean;
        /**
         * Return the number of ticks until rain.
         */
        getClearWeatherTime(): number;
        /**
         * Set current world time
         */
        setDayTime(time: number): void;
        setRaining(locked: boolean): void;
        setSpawn(spawnPoint: $BlockPos_, angle: number): void;
        setClearWeatherTime(time: number): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        getDayTimeFraction(): number;
        getDifficulty(): $Difficulty;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        hasConfirmedExperimentalWarning(): boolean;
        /**
         * Get current world time
         */
        getGameTime(): number;
        getPreset(): $ResourceLocation;
        setWorldBorder(serializer: $WorldBorder$Settings): void;
        withConfirmedWarning(arg0: boolean): $PrimaryLevelData;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(id: $UUID_): void;
        setPreset(arg0: $ResourceLocation_): void;
        setEndDragonFight(endDragonFightData: $EndDragonFight$Data_): void;
        getStorageVersionName(storageVersionId: number): string;
        fillCrashReportCategory(category: $CrashReportCategory): void;
        enabledFeatures(): $FeatureFlagSet;
        static PLAYER: string;
        settings: $LevelSettings;
        static WORLD_GEN_SETTINGS: string;
        static LEVEL_NAME: string;
        constructor(settings: $LevelSettings, worldOptions: $WorldOptions, specialWorldProperty: $PrimaryLevelData$SpecialWorldProperty_, worldGenSettingsLifecycle: $Lifecycle);
        get levelName(): string;
        get version(): number;
        get knownServerBrands(): $Set<string>;
        get removedFeatureFlags(): $Set<string>;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
        get allowCommands(): boolean;
        get loadedPlayerTag(): $CompoundTag;
        get debugWorld(): boolean;
        get levelSettings(): $LevelSettings;
        get gameRules(): $GameRules;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get flatWorld(): boolean;
        get hardcore(): boolean;
        set endDragonFight(value: $EndDragonFight$Data_);
    }
    export class $LevelSummary implements $Comparable<$LevelSummary> {
        compareTo(other: $LevelSummary): number;
        isLocked(): boolean;
        /**
         * Returns the file name.
         */
        getLevelName(): string;
        requiresManualConversion(): boolean;
        primaryActionMessage(): $Component;
        getWorldVersionName(): $MutableComponent;
        primaryActionActive(): boolean;
        getIcon(): $Path;
        getInfo(): $Component;
        getSettings(): $LevelSettings;
        isCompatible(): boolean;
        shouldBackup(): boolean;
        getLastPlayed(): number;
        levelVersion(): $LevelVersion;
        hasCommands(): boolean;
        isDowngrade(): boolean;
        canRecreate(): boolean;
        backupStatus(): $LevelSummary$BackupStatus;
        isDisabled(): boolean;
        canUpload(): boolean;
        canEdit(): boolean;
        canDelete(): boolean;
        /**
         * Gets the EnumGameType.
         */
        getGameMode(): $GameType;
        /**
         * Returns the file name.
         */
        getLevelId(): string;
        isHardcore(): boolean;
        isExperimental(): boolean;
        static PLAY_WORLD: $Component;
        constructor(settings: $LevelSettings, levelVersion: $LevelVersion, levelId: string, requiresManualConversion: boolean, locked: boolean, experimental: boolean, icon: $Path_);
        get locked(): boolean;
        get levelName(): string;
        get worldVersionName(): $MutableComponent;
        get icon(): $Path;
        get info(): $Component;
        get settings(): $LevelSettings;
        get compatible(): boolean;
        get lastPlayed(): number;
        get downgrade(): boolean;
        get disabled(): boolean;
        get gameMode(): $GameType;
        get levelId(): string;
        get hardcore(): boolean;
        get experimental(): boolean;
    }
    export class $FileNameDateFormatter {
        static create(): $DateTimeFormatter;
        constructor();
    }
    export class $LevelResource {
        getId(): string;
        static PLAYER_ADVANCEMENTS_DIR: $LevelResource;
        static PLAYER_OLD_DATA_DIR: $LevelResource;
        static GENERATED_DIR: $LevelResource;
        static LEVEL_DATA_FILE: $LevelResource;
        static MAP_RESOURCE_FILE: $LevelResource;
        static ROOT: $LevelResource;
        static ICON_FILE: $LevelResource;
        static LOCK_FILE: $LevelResource;
        static OLD_LEVEL_DATA_FILE: $LevelResource;
        static PLAYER_STATS_DIR: $LevelResource;
        static PLAYER_DATA_DIR: $LevelResource;
        static DATAPACK_DIR: $LevelResource;
        constructor(id: string);
        get id(): string;
    }
    /**
     * @deprecated
     */
    export class $PrimaryLevelData$SpecialWorldProperty extends $Enum<$PrimaryLevelData$SpecialWorldProperty> {
        static values(): $PrimaryLevelData$SpecialWorldProperty[];
        static valueOf(arg0: string): $PrimaryLevelData$SpecialWorldProperty;
        static FLAT: $PrimaryLevelData$SpecialWorldProperty;
        static NONE: $PrimaryLevelData$SpecialWorldProperty;
        static DEBUG: $PrimaryLevelData$SpecialWorldProperty;
    }
    /**
     * Values that may be interpreted as {@link $PrimaryLevelData$SpecialWorldProperty}.
     */
    export type $PrimaryLevelData$SpecialWorldProperty_ = "none" | "flat" | "debug";
    export class $LevelStorageSource$LevelCandidates extends $Record implements $Iterable<$LevelStorageSource$LevelDirectory> {
        isEmpty(): boolean;
        iterator(): $Iterator<$LevelStorageSource$LevelDirectory>;
        levels(): $List<$LevelStorageSource$LevelDirectory>;
        spliterator(): $Spliterator<$LevelStorageSource$LevelDirectory>;
        forEach(arg0: $Consumer_<$LevelStorageSource$LevelDirectory>): void;
        constructor(levels: $List_<$LevelStorageSource$LevelDirectory_>);
        [Symbol.iterator](): Iterator<$LevelStorageSource$LevelDirectory>
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LevelStorageSource$LevelCandidates}.
     */
    export type $LevelStorageSource$LevelCandidates_ = { levels?: $List_<$LevelStorageSource$LevelDirectory_>,  } | [levels?: $List_<$LevelStorageSource$LevelDirectory_>, ];
}
