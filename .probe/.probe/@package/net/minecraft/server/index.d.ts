import { $RecipeManager } from "@package/net/minecraft/world/item/crafting";
import { $DynamicOps } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Either, $Pair } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture, $Executor_ } from "@package/java/util/concurrent";
import { $VeilPacketManager$PacketSink } from "@package/foundry/veil/api/network";
import { $CommandDispatcher } from "@package/com/mojang/brigadier";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $CustomPacketPayload_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $CloseableResourceManager, $ResourceManager, $PreparableReloadListener$PreparationBarrier_, $PreparableReloadListener, $SimpleJsonResourceReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $ModCheck, $SignatureValidator } from "@package/net/minecraft/util";
import { $AdvancementHolder, $AdvancementProgress, $AdvancementNode, $AdvancementHolder_, $AdvancementTree } from "@package/net/minecraft/advancements";
import { $Difficulty_, $TickRateManager } from "@package/net/minecraft/world";
import { $SystemReport, $CrashReport } from "@package/net/minecraft";
import { $ScheduledEvents$Callback_, $ScheduledEvents$ScheduledEvent, $ScheduledEvents, $TickDuration_, $AttachedData } from "@package/dev/latvian/mods/kubejs/util";
import { $Proxy, $URI } from "@package/java/net";
import { $GameProfileRepository_, $GameProfileRepository, $GameProfile } from "@package/com/mojang/authlib";
import { $MinecraftServerAccessor } from "@package/net/createmod/ponder/mixin/accessor";
import { $ChatDecorator, $Component_, $ChatType$Bound_, $Component } from "@package/net/minecraft/network/chat";
import { $TextFilter, $ServerConnectionListener } from "@package/net/minecraft/server/network";
import { $StructureTemplateManager } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ServerScriptManager } from "@package/dev/latvian/mods/kubejs/server";
import { $MinecraftServerExtension } from "@package/foundry/veil/ext";
import { $WorldData, $LevelStorageSource$LevelStorageAccess, $CommandStorage, $PlayerDataStorage, $LevelResource } from "@package/net/minecraft/world/level/storage";
import { $CommandSource, $Commands, $Commands$CommandSelection_, $Commands$CommandSelection, $CommandSourceStack } from "@package/net/minecraft/commands";
import { $ChunkIOErrorReporter, $RegionStorageInfo_ } from "@package/net/minecraft/world/level/chunk/storage";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $RemoteDebugSampleType_, $SampleLogger } from "@package/net/minecraft/util/debugchart";
import { $AtomicLong } from "@package/java/util/concurrent/atomic";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $CommandFunction } from "@package/net/minecraft/commands/functions";
import { $PlayerSelector_, $ReloadableServerResourcesKJS, $MinecraftServerKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $AABB_ } from "@package/net/minecraft/world/phys";
import { $MinecraftSessionService } from "@package/com/mojang/authlib/minecraft";
import { $JsonElement_ } from "@package/com/google/gson";
import { $ServerStatus } from "@package/net/minecraft/network/protocol/status";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $SavedData$Factory } from "@package/net/minecraft/world/level/saveddata";
import { $UUID_, $Map, $List, $Map_, $Collection_, $List_, $Collection, $Set, $UUID } from "@package/java/util";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $Supplier_, $BooleanSupplier_, $Consumer_, $Function_ } from "@package/java/util/function";
import { $ChunkProgressListenerFactory_, $ChunkProgressListener } from "@package/net/minecraft/server/level/progress";
import { $HolderGetter$Provider, $HolderLookup$RegistryLookup, $BlockPos_, $Holder$Reference, $HolderLookup$Provider, $RegistryAccess$Frozen, $Holder, $LayeredRegistryAccess, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $ServerPlayerGameMode, $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Path_, $Path } from "@package/java/nio/file";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $ICondition$IContext } from "@package/net/neoforged/neoforge/common/conditions";
import { $Exception, $Throwable, $Runnable, $Enum, $RuntimeException, $Iterable, $Thread, $Record, $AutoCloseable, $Runnable_ } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $OutputStream, $PrintStream, $File_, $IOException } from "@package/java/io";
import { $GameRules, $ChunkPos, $WorldDataConfiguration_, $Level_, $GameType, $WorldDataConfiguration, $GameType_, $LevelSettings, $Level } from "@package/net/minecraft/world/level";
import { $TagManager } from "@package/net/minecraft/tags";
import { $ProfilerFiller, $ProfileResults } from "@package/net/minecraft/util/profiling";
import { $PlayerList, $GameProfileCache } from "@package/net/minecraft/server/players";
import { $KeyPair } from "@package/java/security";
import { $TemporalAmount_ } from "@package/java/time/temporal";
import { $CustomBossEvents } from "@package/net/minecraft/server/bossevents";
import { $ServicesKeySet, $ServicesKeySet_, $YggdrasilAuthenticationService } from "@package/com/mojang/authlib/yggdrasil";
import { $Stream } from "@package/java/util/stream";
import { $DedicatedServerProperties } from "@package/net/minecraft/server/dedicated";
import { $PotionBrewing } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceKey, $RegistryOps, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $TickTaskSchedulerImpl } from "@package/foundry/veil/impl";
import { $FabricOriginalKnownPacksGetter } from "@package/net/fabricmc/fabric/impl/resource/loader";
import { $Scoreboard, $Objective, $ScoreboardSaveData } from "@package/net/minecraft/world/scores";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as players from "@package/net/minecraft/server/players";
export * as packs from "@package/net/minecraft/server/packs";
export * as level from "@package/net/minecraft/server/level";
export * as commands from "@package/net/minecraft/server/commands";
export * as network from "@package/net/minecraft/server/network";
export * as advancements from "@package/net/minecraft/server/advancements";
export * as rcon from "@package/net/minecraft/server/rcon";
export * as chase from "@package/net/minecraft/server/chase";
export * as bossevents from "@package/net/minecraft/server/bossevents";
export * as dedicated from "@package/net/minecraft/server/dedicated";
export * as gui from "@package/net/minecraft/server/gui";

declare module "@package/net/minecraft/server" {
    export class $LoggedPrintStream extends $PrintStream {
        logLine(string: string | null): void;
        name: string;
        constructor(name: string, out: $OutputStream);
    }
    export class $PlayerAdvancements {
        save(): void;
        reload(manager: $ServerAdvancementManager): void;
        stopListening(): void;
        revoke(advancement: $AdvancementHolder_, criterionKey: string): boolean;
        flushDirty(serverPlayer: $ServerPlayer): void;
        setPlayer(serverPlayer: $ServerPlayer): void;
        getOrStartProgress(advancement: $AdvancementHolder_): $AdvancementProgress;
        award(advancement: $AdvancementHolder_, criterionKey: string): boolean;
        setSelectedTab(advancement: $AdvancementHolder_ | null): void;
        handler$cnk000$fabric_events_interaction_v0$preventOwnerOverride(arg0: $ServerPlayer, arg1: $CallbackInfo): void;
        handler$cnk000$fabric_events_interaction_v0$preventGrantCriterion(arg0: $AdvancementHolder_, arg1: string, arg2: $CallbackInfoReturnable<any>): void;
        constructor(dataFixer: $DataFixer, playerList: $PlayerList, manager: $ServerAdvancementManager, playerSavePath: $Path_, player: $ServerPlayer);
        set player(value: $ServerPlayer);
        set selectedTab(value: $AdvancementHolder_ | null);
    }
    export class $WorldLoader$DataLoadOutput<D> extends $Record {
        cookie(): D;
        finalDimensions(): $RegistryAccess$Frozen;
        constructor(cookie: D, finalDimensions: $RegistryAccess$Frozen);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$DataLoadOutput}.
     */
    export type $WorldLoader$DataLoadOutput_<D> = { cookie?: any, finalDimensions?: $RegistryAccess$Frozen,  } | [cookie?: any, finalDimensions?: $RegistryAccess$Frozen, ];
    export class $ConsoleInput {
        msg: string;
        source: $CommandSourceStack;
        constructor(msg: string, source: $CommandSourceStack);
    }
    export class $MinecraftServer$ReloadableResources extends $Record implements $AutoCloseable {
        close(): void;
        resourceManager(): $CloseableResourceManager;
        managers(): $ReloadableServerResources;
        constructor(resourceManager: $CloseableResourceManager, managers: $ReloadableServerResources);
    }
    /**
     * Values that may be interpreted as {@link $MinecraftServer$ReloadableResources}.
     */
    export type $MinecraftServer$ReloadableResources_ = { managers?: $ReloadableServerResources, resourceManager?: $CloseableResourceManager,  } | [managers?: $ReloadableServerResources, resourceManager?: $CloseableResourceManager, ];
    export class $ServerAdvancementManager extends $SimpleJsonResourceReloadListener implements $IdentifiableResourceReloadListener {
        get(location: $ResourceLocation_): $AdvancementHolder;
        apply(object: $Map_<$ResourceLocation_, $JsonElement_>, resourceManager: $ResourceManager, profiler: $ProfilerFiller): void;
        tree(): $AdvancementTree;
        getAllAdvancements(): $Collection<$AdvancementHolder>;
        getFabricId(): $ResourceLocation;
        getFabricDependencies(): $Collection<any>;
        constructor(registries: $HolderLookup$Provider);
        get allAdvancements(): $Collection<$AdvancementHolder>;
        get fabricId(): $ResourceLocation;
        get fabricDependencies(): $Collection<any>;
    }
    export class $ServerInfo {
    }
    export interface $ServerInfo {
        getPlayerCount(): number;
        getMaxPlayers(): number;
        getServerVersion(): string;
        getMotd(): string;
        get playerCount(): number;
        get maxPlayers(): number;
        get serverVersion(): string;
        get motd(): string;
    }
    export class $ServerLinks$KnownLinkType extends $Enum<$ServerLinks$KnownLinkType> {
        static values(): $ServerLinks$KnownLinkType[];
        static valueOf(arg0: string): $ServerLinks$KnownLinkType;
        create(uri: $URI): $ServerLinks$Entry;
        static SUPPORT: $ServerLinks$KnownLinkType;
        static FORUMS: $ServerLinks$KnownLinkType;
        static STATUS: $ServerLinks$KnownLinkType;
        static ANNOUNCEMENTS: $ServerLinks$KnownLinkType;
        static COMMUNITY: $ServerLinks$KnownLinkType;
        static BUG_REPORT: $ServerLinks$KnownLinkType;
        static NEWS: $ServerLinks$KnownLinkType;
        static COMMUNITY_GUIDELINES: $ServerLinks$KnownLinkType;
        static FEEDBACK: $ServerLinks$KnownLinkType;
        static WEBSITE: $ServerLinks$KnownLinkType;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerLinks$KnownLinkType>;
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks$KnownLinkType}.
     */
    export type $ServerLinks$KnownLinkType_ = "bug_report" | "community_guidelines" | "support" | "status" | "feedback" | "community" | "website" | "forums" | "news" | "announcements";
    export class $ReloadableServerResources$MissingTagAccessPolicy extends $Enum<$ReloadableServerResources$MissingTagAccessPolicy> {
    }
    /**
     * Values that may be interpreted as {@link $ReloadableServerResources$MissingTagAccessPolicy}.
     */
    export type $ReloadableServerResources$MissingTagAccessPolicy_ = "create_new" | "fail";
    export class $ServerTickRateManager extends $TickRateManager {
        stopSprinting(): boolean;
        stepGameIfPaused(sprintTime: number): boolean;
        stopStepping(): boolean;
        endTickWork(): void;
        updateJoiningPlayer(player: $ServerPlayer): void;
        requestGameToSprint(sprintTime: number): boolean;
        isSprinting(): boolean;
        checkShouldSprintThisTick(): boolean;
        static MIN_TICKRATE: number;
        runGameElements: boolean;
        constructor(server: $MinecraftServer);
        get sprinting(): boolean;
    }
    export class $PlayerAdvancements$Data extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PlayerAdvancements$Data}.
     */
    export type $PlayerAdvancements$Data_ = { map?: $Map_<$ResourceLocation_, $AdvancementProgress>,  } | [map?: $Map_<$ResourceLocation_, $AdvancementProgress>, ];
    export class $ServerLinks extends $Record {
        isEmpty(): boolean;
        entries(): $List<$ServerLinks$Entry>;
        findKnownType(type: $ServerLinks$KnownLinkType_): ($ServerLinks$Entry) | undefined;
        untrust(): $List<$ServerLinks$UntrustedEntry>;
        static UNTRUSTED_LINKS_STREAM_CODEC: $StreamCodec<$ByteBuf, $List<$ServerLinks$UntrustedEntry>>;
        static TYPE_STREAM_CODEC: $StreamCodec<$ByteBuf, $Either<$ServerLinks$KnownLinkType, $Component>>;
        static EMPTY: $ServerLinks;
        constructor(arg0: $List_<$ServerLinks$Entry_>);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks}.
     */
    export type $ServerLinks_ = { entries?: $List_<$ServerLinks$Entry_>,  } | [entries?: $List_<$ServerLinks$Entry_>, ];
    export class $DebugLoggedPrintStream extends $LoggedPrintStream {
        name: string;
        constructor(name: string, out: $OutputStream);
    }
    export class $WorldLoader$PackConfig extends $Record {
        initMode(): boolean;
        safeMode(): boolean;
        packRepository(): $PackRepository;
        createResourceManager(): $Pair<$WorldDataConfiguration, $CloseableResourceManager>;
        initialDataConfig(): $WorldDataConfiguration;
        constructor(packRepository: $PackRepository, initialDataConfig: $WorldDataConfiguration_, safeMode: boolean, initMode: boolean);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$PackConfig}.
     */
    export type $WorldLoader$PackConfig_ = { safeMode?: boolean, initialDataConfig?: $WorldDataConfiguration_, packRepository?: $PackRepository, initMode?: boolean,  } | [safeMode?: boolean, initialDataConfig?: $WorldDataConfiguration_, packRepository?: $PackRepository, initMode?: boolean, ];
    export class $ChainedJsonException$Entry {
        getFilename(): string;
        getJsonKeys(): string;
        addJsonKey(key: string): void;
        filename: string;
        constructor();
        get jsonKeys(): string;
    }
    export class $RunningOnDifferentThreadException extends $RuntimeException {
        static RUNNING_ON_DIFFERENT_THREAD: $RunningOnDifferentThreadException;
    }
    export class $ServerScoreboard$Method extends $Enum<$ServerScoreboard$Method> {
        static values(): $ServerScoreboard$Method[];
        static valueOf(arg0: string): $ServerScoreboard$Method;
        static REMOVE: $ServerScoreboard$Method;
        static CHANGE: $ServerScoreboard$Method;
    }
    /**
     * Values that may be interpreted as {@link $ServerScoreboard$Method}.
     */
    export type $ServerScoreboard$Method_ = "change" | "remove";
    export class $ReloadableServerRegistries {
        static reload(registries: $LayeredRegistryAccess<$RegistryLayer_>, resourceManager: $ResourceManager, backgroundExecutor: $Executor_): $CompletableFuture<$LayeredRegistryAccess<$RegistryLayer>>;
        constructor();
    }
    export class $ReloadableServerRegistries$EmptyTagLookupWrapper implements $HolderLookup$Provider {
        lookup<T>(registryKey: $ResourceKey_<$Registry<T>>): ($HolderLookup$RegistryLookup<T>) | undefined;
        listRegistries(): $Stream<$ResourceKey<$Registry<never>>>;
        createSerializationContext<V>(ops: $DynamicOps<V>): $RegistryOps<V>;
        asGetterLookup(): $HolderGetter$Provider;
        lookupOrThrow<T>(registryKey: $ResourceKey_<$Registry<T>>): $HolderLookup$RegistryLookup<T>;
        holder<T>(registryKey: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        /**
         * Shortcut method to get a holder from a ResourceKey.
         */
        holderOrThrow<T>(key: $ResourceKey_<T>): $Holder<T>;
        constructor(registryAccess: $RegistryAccess);
    }
    export class $WorldLoader$WorldDataSupplier<D> {
    }
    export interface $WorldLoader$WorldDataSupplier<D> {
        get(context: $WorldLoader$DataLoadContext_): $WorldLoader$DataLoadOutput<D>;
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$WorldDataSupplier}.
     */
    export type $WorldLoader$WorldDataSupplier_<D> = ((arg0: $WorldLoader$DataLoadContext) => $WorldLoader$DataLoadOutput_<D>);
    export class $Bootstrap {
        /**
         * Registers blocks, items, stats, etc.
         */
        static validate(): void;
        static realStdoutPrintln(message: string): void;
        /**
         * Registers blocks, items, stats, etc.
         */
        static bootStrap(): void;
        static getMissingTranslations(): $Set<string>;
        static checkBootstrapCalled(callSite: $Supplier_<string>): void;
        static STDOUT: $PrintStream;
        static bootstrapDuration: $AtomicLong;
        constructor();
        static get missingTranslations(): $Set<string>;
    }
    export class $ChainedJsonException extends $IOException {
        setFilenameAndFlush(message: string): void;
        prependJsonKey(message: string): void;
        static forException(exception: $Exception): $ChainedJsonException;
        constructor(message: string);
        constructor(message: string, cause: $Throwable);
        set filenameAndFlush(value: string);
    }
    export class $WorldLoader$ResultFactory<D, R> {
    }
    export interface $WorldLoader$ResultFactory<D, R> {
        create(manager: $CloseableResourceManager, resources: $ReloadableServerResources, registryAccess: $LayeredRegistryAccess<$RegistryLayer_>, cookie: D): R;
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$ResultFactory}.
     */
    export type $WorldLoader$ResultFactory_<D, R> = ((arg0: $CloseableResourceManager, arg1: $ReloadableServerResources, arg2: $LayeredRegistryAccess<$RegistryLayer>, arg3: D) => R);
    export class $MinecraftServer$TimeProfiler {
    }
    export class $RegistryLayer extends $Enum<$RegistryLayer> {
        static values(): $RegistryLayer[];
        static valueOf(arg0: string): $RegistryLayer;
        static createRegistryAccess(): $LayeredRegistryAccess<$RegistryLayer>;
        static WORLDGEN: $RegistryLayer;
        static DIMENSIONS: $RegistryLayer;
        static RELOADABLE: $RegistryLayer;
        static STATIC: $RegistryLayer;
    }
    /**
     * Values that may be interpreted as {@link $RegistryLayer}.
     */
    export type $RegistryLayer_ = "static" | "worldgen" | "dimensions" | "reloadable";
    export class $ReloadableServerResources$ConfigurableRegistryLookup implements $HolderLookup$Provider {
        createSerializationContext<V>(ops: $DynamicOps<V>): $RegistryOps<V>;
        asGetterLookup(): $HolderGetter$Provider;
        lookupOrThrow<T>(registryKey: $ResourceKey_<$Registry<T>>): $HolderLookup$RegistryLookup<T>;
        holder<T>(registryKey: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        /**
         * Shortcut method to get a holder from a ResourceKey.
         */
        holderOrThrow<T>(key: $ResourceKey_<T>): $Holder<T>;
    }
    export class $Eula {
        hasAgreedToEULA(): boolean;
        constructor(file: $Path_);
    }
    export class $WorldLoader {
        static load<D, R>(initConfig: $WorldLoader$InitConfig_, worldDataSupplier: $WorldLoader$WorldDataSupplier_<D>, resultFactory: $WorldLoader$ResultFactory_<D, R>, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<R>;
        constructor();
    }
    export class $ReloadableServerRegistries$Holder {
        get(): $RegistryAccess$Frozen;
        lookup(): $HolderGetter$Provider;
        getKeys(registryKey: $ResourceKey_<$Registry<never>>): $Collection<$ResourceLocation>;
        getLootTable(lootTableKey: $ResourceKey_<$LootTable>): $LootTable;
        constructor(registries: $RegistryAccess$Frozen);
    }
    export class $WorldLoader$DataLoadContext extends $Record {
        resources(): $ResourceManager;
        dataConfiguration(): $WorldDataConfiguration;
        datapackDimensions(): $RegistryAccess$Frozen;
        datapackWorldgen(): $RegistryAccess$Frozen;
        constructor(resources: $ResourceManager, dataConfiguration: $WorldDataConfiguration_, datapackWorldgen: $RegistryAccess$Frozen, datapackDimensions: $RegistryAccess$Frozen);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$DataLoadContext}.
     */
    export type $WorldLoader$DataLoadContext_ = { datapackDimensions?: $RegistryAccess$Frozen, datapackWorldgen?: $RegistryAccess$Frozen, dataConfiguration?: $WorldDataConfiguration_, resources?: $ResourceManager,  } | [datapackDimensions?: $RegistryAccess$Frozen, datapackWorldgen?: $RegistryAccess$Frozen, dataConfiguration?: $WorldDataConfiguration_, resources?: $ResourceManager, ];
    export class $ServerInterface {
    }
    export interface $ServerInterface extends $ServerInfo {
        getProperties(): $DedicatedServerProperties;
        /**
         * Returns an array of the usernames of all the connected players.
         */
        getPlayerNames(): string[];
        /**
         * Handle a command received by an RCon instance
         */
        runCommand(command: string): string;
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getServerName(): string;
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getLevelIdName(): string;
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getServerIp(): string;
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getPluginNames(): string;
        /**
         * Never used, but "getServerPort" is already taken.
         */
        getServerPort(): number;
        get properties(): $DedicatedServerProperties;
        get playerNames(): string[];
        get serverName(): string;
        get levelIdName(): string;
        get serverIp(): string;
        get pluginNames(): string;
        get serverPort(): number;
    }
    export class $ServerFunctionLibrary implements $PreparableReloadListener, $IdentifiableResourceReloadListener {
        getAvailableTags(): $Iterable<$ResourceLocation>;
        getFunction(location: $ResourceLocation_): ($CommandFunction<$CommandSourceStack>) | undefined;
        getTag(location: $ResourceLocation_): $Collection<$CommandFunction<$CommandSourceStack>>;
        reload(stage: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        getFunctions(): $Map<$ResourceLocation, $CommandFunction<$CommandSourceStack>>;
        getFabricId(): $ResourceLocation;
        getFabricDependencies(): $Collection<any>;
        getName(): string;
        static TYPE_KEY: $ResourceKey<$Registry<$CommandFunction<$CommandSourceStack>>>;
        constructor(functionCompilationLevel: number, dispatcher: $CommandDispatcher<$CommandSourceStack>);
        get availableTags(): $Iterable<$ResourceLocation>;
        get functions(): $Map<$ResourceLocation, $CommandFunction<$CommandSourceStack>>;
        get fabricId(): $ResourceLocation;
        get fabricDependencies(): $Collection<any>;
        get name(): string;
    }
    export class $MinecraftServer extends $ReentrantBlockableEventLoop<$TickTask> implements $ServerInfo, $ChunkIOErrorReporter, $CommandSource, $AutoCloseable, $FabricOriginalKnownPacksGetter, $MinecraftServerKJS, $VeilPacketManager$PacketSink, $MinecraftServerExtension, $MinecraftServerAccessor {
        shouldRun(runnable: $TickTask): boolean;
        /**
         * Initialises the server and starts it.
         */
        isPaused(): boolean;
        getFile(path: string): $Path;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getPort(): number;
        /**
         * Initialises the server and starts it.
         */
        isShutdown(): boolean;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        halt(waitForServer: boolean): void;
        getConnection(): $ServerConnectionListener;
        getCustomBossEvents(): $CustomBossEvents;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setDifficultyLocked(waitForServer: boolean): void;
        /**
         * Gets the worldServer by the given dimension.
         */
        getLevel(dimension: $ResourceKey_<$Level>): $ServerLevel;
        getCommandStorage(): $CommandStorage;
        veil$getScheduler(): $TickTaskSchedulerImpl;
        getOverworld(): $ServerLevel;
        getTickTimesNanos(): number[];
        /**
         * Sets the game type for all worlds.
         */
        setDefaultGameType(gameMode: $GameType_): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        startTimeProfiler(): void;
        setPlayerList(list: $PlayerList): void;
        getNextTickTime(): number;
        /**
         * Replaces currently selected list of datapacks, reloads them, and sends new data to players.
         */
        reloadResources(selectedIds: $Collection_<string>): $CompletableFuture<void>;
        logChatMessage(content: $Component_, boundChatType: $ChatType$Bound_, header: string | null): void;
        stopTimeProfiler(): $ProfileResults;
        /**
         * Initialises the server and starts it.
         */
        acceptsTransfers(): boolean;
        /**
         * Initialises the server and starts it.
         */
        repliesToStatus(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isFlightAllowed(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isEpollEnabled(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isEnforceWhitelist(): boolean;
        /**
         * @deprecated
         */
        forgeGetWorldMap(): $Map<$ResourceKey<$Level>, $ServerLevel>;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        invalidateStatus(): void;
        publishServer(gameMode: $GameType_ | null, commands: boolean, port: number): boolean;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setFlightAllowed(waitForServer: boolean): void;
        /**
         * Initialises the server and starts it.
         */
        isSpawningMonsters(): boolean;
        /**
         * @deprecated
         * Directly calls System.exit(0), instantly killing the program.
         */
        markWorldsDirty(): void;
        /**
         * Initialises the server and starts it.
         */
        isRecordingMetrics(): boolean;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setPvpAllowed(waitForServer: boolean): void;
        getWorldPath(levelResource: $LevelResource): $Path;
        /**
         * Initialises the server and starts it.
         */
        isCurrentlySaving(): boolean;
        /**
         * Initialises the server and starts it.
         */
        usesAuthentication(): boolean;
        getSessionService(): $MinecraftSessionService;
        getPackRepository(): $PackRepository;
        getProxy(): $Proxy;
        handler$zln000$veil$stopServer(arg0: $CallbackInfo): void;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getOperatorUserPermissionLevel(): number;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getFunctionCompilationLevel(): number;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        forceTimeSynchronization(): void;
        isUnderSpawnProtection(level: $ServerLevel, pos: $BlockPos_, player: $Player): boolean;
        potionBrewing(): $PotionBrewing;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getStatusJson(): string;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        onServerExit(): void;
        /**
         * Drive the executor until the given BooleanSupplier returns true
         */
        tickChildren(isDone: $BooleanSupplier_): void;
        /**
         * Initialises the server and starts it.
         */
        hidesOnlinePlayers(): boolean;
        addTickable(tickable: $Runnable_): void;
        /**
         * Returns an array of the usernames of all the connected players.
         */
        getPlayerNames(): string[];
        getTickTimeLogger(): $SampleLogger;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        onTickRateChanged(): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        initializeKeyPair(): void;
        static setFatalException(fatalException: $RuntimeException): void;
        getServerDirectory(): $Path;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getPlayerCount(): number;
        /**
         * Called on exit from the main run() loop.
         */
        onServerCrash(report: $CrashReport): void;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getMaxPlayers(): number;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getServerVersion(): string;
        saveEverything(suppressLog: boolean, flush: boolean, forced: boolean): boolean;
        /**
         * Initialises the server and starts it.
         */
        static throwIfFatalException(): boolean;
        getWorldScreenshotFile(): ($Path) | undefined;
        /**
         * Initialises the server and starts it.
         */
        getPreventProxyConnections(): boolean;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setPreventProxyConnections(waitForServer: boolean): void;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getPlayerIdleTimeout(): number;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getSpawnProtectionRadius(): number;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getCompressionThreshold(): number;
        getAverageTickTimeNanos(): number;
        static configurePackRepository(packRepository: $PackRepository, initialDataConfig: $WorldDataConfiguration_, initMode: boolean, safeMode: boolean): $WorldDataConfiguration;
        /**
         * Initialises the server and starts it.
         */
        isTickTimeLoggingEnabled(): boolean;
        setPlayerIdleTimeout(idleTimeout: number): void;
        getScaledTrackingDistance(trackingDistance: number): number;
        setSingleplayerProfile(singleplayerProfile: $GameProfile | null): void;
        getProfileRepository(): $GameProfileRepository;
        kickUnlistedPlayers(commandSource: $CommandSourceStack): void;
        /**
         * Initialises the server and starts it.
         */
        isResourcePackRequired(): boolean;
        fillServerSystemReport(report: $SystemReport): $SystemReport;
        getSingleplayerProfile(): $GameProfile;
        getServerResourcePack(): ($MinecraftServer$ServerResourcePackInfo) | undefined;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setEnforceWhitelist(waitForServer: boolean): void;
        /**
         * Initialises the server and starts it.
         */
        enforceSecureProfile(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isPublished(): boolean;
        /**
         * Initialises the server and starts it.
         */
        initServer(): boolean;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        stop(): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        loadLevel(): void;
        setLocalIp(serverId: string): void;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getLocalIp(): string;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        runServer(): void;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setDemo(waitForServer: boolean): void;
        levelKeys(): $Set<$ResourceKey<$Level>>;
        setMotd(serverId: string): void;
        /**
         * Initialises the server and starts it.
         */
        hasGui(): boolean;
        /**
         * Gets KeyPair instanced in MinecraftServer.
         */
        getKeyPair(): $KeyPair;
        setDifficulty(difficulty: $Difficulty_, forced: boolean): void;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getTickCount(): number;
        getProfiler(): $ProfilerFiller;
        reloadableRegistries(): $ReloadableServerRegistries$Holder;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getMotd(): string;
        /**
         * Initialises the server and starts it.
         */
        isStopped(): boolean;
        overworld(): $ServerLevel;
        sendPacket(arg0: $Packet<any>): void;
        setPort(idleTimeout: number): void;
        setId(serverId: string): void;
        getStatus(): $ServerStatus;
        getChatDecorator(): $ChatDecorator;
        getAllLevels(): $Iterable<$ServerLevel>;
        getFunctions(): $ServerFunctionManager;
        /**
         * Drive the executor until the given BooleanSupplier returns true
         */
        tickServer(isDone: $BooleanSupplier_): void;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getMaxChainedNeighborUpdates(): number;
        /**
         * Initialises the server and starts it.
         */
        isRunning(): boolean;
        getGameRules(): $GameRules;
        /**
         * Initialises the server and starts it.
         */
        forceSynchronousWrites(): boolean;
        getStructureManager(): $StructureTemplateManager;
        getWorldData(): $WorldData;
        tickRateManager(): $ServerTickRateManager;
        fillSystemReport(report: $SystemReport): $SystemReport;
        /**
         * Initialises the server and starts it.
         */
        isDedicated(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isSpawningAnimals(): boolean;
        /**
         * Initialises the server and starts it.
         */
        areNpcsEnabled(): boolean;
        getProfileCache(): $GameProfileCache;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getAbsoluteMaxWorldSize(): number;
        static spin<S extends $MinecraftServer>(threadFunction: $Function_<$Thread, S>): S;
        /**
         * Initialises the server and starts it.
         */
        isDemo(): boolean;
        registries(): $LayeredRegistryAccess<$RegistryLayer>;
        /**
         * Initialises the server and starts it.
         */
        isReady(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isHardcore(): boolean;
        /**
         * Initialises the server and starts it.
         */
        logIPs(): boolean;
        reportChunkLoadFailure(throwable: $Throwable, regionStorageInfo: $RegionStorageInfo_, chunkPos: $ChunkPos): void;
        /**
         * Initialises the server and starts it.
         */
        isTimeProfilerRunning(): boolean;
        veil$getOrCreateScheduler(): $TickTaskSchedulerImpl;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        stopRecordingMetrics(): void;
        reportChunkSaveFailure(throwable: $Throwable, regionStorageInfo: $RegionStorageInfo_, chunkPos: $ChunkPos): void;
        getCurrentSmoothedTickTime(): number;
        isSingleplayerOwner(profile: $GameProfile): boolean;
        dumpServerProperties(path: $Path_): void;
        subscribeToDebugSample(player: $ServerPlayer, sampleType: $RemoteDebugSampleType_): void;
        getServerResources(): $MinecraftServer$ReloadableResources;
        isLevelEnabled(level: $Level_): boolean;
        /**
         * Initialises the server and starts it.
         */
        acceptsSuccess(): boolean;
        /**
         * Initialises the server and starts it.
         */
        acceptsFailure(): boolean;
        /**
         * Initialises the server and starts it.
         */
        shouldInformAdmins(): boolean;
        createCommandSourceStack(): $CommandSourceStack;
        getPersistentData(): $CompoundTag;
        createGameModeForPlayer(player: $ServerPlayer): $ServerPlayerGameMode;
        createTextFilterForPlayer(player: $ServerPlayer): $TextFilter;
        getProfilePermissions(profile: $GameProfile): number;
        restoreInventories(): $Map<any, any>;
        getScoreboard(): $ServerScoreboard;
        getData(): $AttachedData<any>;
        getCommands(): $Commands;
        getSpawnRadius(level: $ServerLevel | null): number;
        getRecipeManager(): $RecipeManager;
        /**
         * Initialises the server and starts it.
         */
        isPvpAllowed(): boolean;
        getForcedGameType(): $GameType;
        getDefaultGameType(): $GameType;
        getTickTime(arg0: $ResourceKey_<$Level>): number[];
        /**
         * Initialises the server and starts it.
         */
        isCommandBlockEnabled(): boolean;
        getPlayerList(): $PlayerList;
        sendSystemMessage(component: $Component_): void;
        startRecordingMetrics(output: $Consumer_<$ProfileResults>, onMetricsRecordingFinished: $Consumer_<$Path>): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        finishRecordingMetrics(): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        cancelRecordingMetrics(): void;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setUsesAuthentication(waitForServer: boolean): void;
        getProfileKeySignatureValidator(): $SignatureValidator;
        fabric_getOriginalKnownPacks(): $List<any>;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getRateLimitPacketsPerSecond(): number;
        serverLinks(): $ServerLinks;
        doRunTask(task: $TickTask): void;
        wrapRunnable(runnable: $Runnable_): $TickTask;
        getFixerUpper(): $DataFixer;
        /**
         * Initialises the server and starts it.
         */
        isSingleplayer(): boolean;
        getResourceManager(): $ResourceManager;
        registryAccess(): $RegistryAccess$Frozen;
        getAdvancements(): $ServerAdvancementManager;
        getScheduledEvents(): $ScheduledEvents;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        waitUntilNextTick(): void;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getServerModName(): string;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        forceDifficulty(): void;
        getModdedStatus(): $ModCheck;
        createLevels(listener: $ChunkProgressListener): void;
        saveAllChunks(suppressLog: boolean, flush: boolean, forced: boolean): boolean;
        /**
         * Initialises the server and starts it.
         */
        shouldRconBroadcast(): boolean;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        endMetricsRecordingTick(): void;
        reportMisplacedChunk(pos: $ChunkPos, expectedPos: $ChunkPos, regionStorageInfo: $RegionStorageInfo_): void;
        /**
         * Initialises the server and starts it.
         */
        alwaysAccepts(): boolean;
        getMcPlayers(): $List<$Player>;
        getMcEntities(): $Iterable<$Entity>;
        getPlayers(): $EntityArrayList;
        getEntityByNetworkID(id: number): $Entity;
        getEntityByUUID(id: $UUID_): $Entity;
        getPlayer(selector: $PlayerSelector_): $ServerPlayer;
        sendData(channel: string, data: $CompoundTag_): void;
        getLevel(dimension: $ResourceLocation_): $ServerLevel;
        getAdvancement(id: $ResourceLocation_): $AdvancementNode;
        tell(component: $Component_): void;
        self(): $MinecraftServer;
        /**
         * Runs the specified console command.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(serverId: string): void;
        getName(): $Component;
        setStatusMessage(component: $Component_): void;
        /**
         * Runs the specified console command. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(serverId: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        sendPacket(...arg0: $CustomPacketPayload_[]): void;
        sendData(serverId: string): void;
        scheduleRepeating(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeatingInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        schedule(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        getEntities(): $EntityArrayList;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        getDisplayName(): $Component;
        catnip$getStorageSource(): $LevelStorageSource$LevelStorageAccess;
        static VANILLA_BRAND: string;
        proxy: $Proxy;
        static ANONYMOUS_PLAYER_PROFILE: $GameProfile;
        nextTickTimeNanos: number;
        worldData: $WorldData;
        services: $Services;
        storageSource: $LevelStorageSource$LevelStorageAccess;
        static ABSOLUTE_MAX_WORLD_SIZE: number;
        static DEMO_SETTINGS: $LevelSettings;
        playerDataStorage: $PlayerDataStorage;
        constructor(serverThread: $Thread, storageSource: $LevelStorageSource$LevelStorageAccess, packRepository: $PackRepository, worldStem: $WorldStem_, proxy: $Proxy, fixerUpper: $DataFixer, services: $Services_, progressListenerFactory: $ChunkProgressListenerFactory_);
        get paused(): boolean;
        get shutdown(): boolean;
        get connection(): $ServerConnectionListener;
        get customBossEvents(): $CustomBossEvents;
        set difficultyLocked(value: boolean);
        get commandStorage(): $CommandStorage;
        get tickTimesNanos(): number[];
        get nextTickTime(): number;
        get epollEnabled(): boolean;
        get spawningMonsters(): boolean;
        get recordingMetrics(): boolean;
        get currentlySaving(): boolean;
        get sessionService(): $MinecraftSessionService;
        get packRepository(): $PackRepository;
        get operatorUserPermissionLevel(): number;
        get functionCompilationLevel(): number;
        get statusJson(): string;
        get playerNames(): string[];
        get tickTimeLogger(): $SampleLogger;
        static set fatalException(value: $RuntimeException);
        get serverDirectory(): $Path;
        get playerCount(): number;
        get maxPlayers(): number;
        get serverVersion(): string;
        get worldScreenshotFile(): ($Path) | undefined;
        get spawnProtectionRadius(): number;
        get compressionThreshold(): number;
        get averageTickTimeNanos(): number;
        get tickTimeLoggingEnabled(): boolean;
        get profileRepository(): $GameProfileRepository;
        get resourcePackRequired(): boolean;
        get serverResourcePack(): ($MinecraftServer$ServerResourcePackInfo) | undefined;
        get published(): boolean;
        get keyPair(): $KeyPair;
        get tickCount(): number;
        get profiler(): $ProfilerFiller;
        get stopped(): boolean;
        set id(value: string);
        get status(): $ServerStatus;
        get chatDecorator(): $ChatDecorator;
        get allLevels(): $Iterable<$ServerLevel>;
        get functions(): $ServerFunctionManager;
        get maxChainedNeighborUpdates(): number;
        get running(): boolean;
        get gameRules(): $GameRules;
        get structureManager(): $StructureTemplateManager;
        get dedicated(): boolean;
        get spawningAnimals(): boolean;
        get profileCache(): $GameProfileCache;
        get absoluteMaxWorldSize(): number;
        get ready(): boolean;
        get hardcore(): boolean;
        get timeProfilerRunning(): boolean;
        get currentSmoothedTickTime(): number;
        get serverResources(): $MinecraftServer$ReloadableResources;
        get persistentData(): $CompoundTag;
        get scoreboard(): $ServerScoreboard;
        get data(): $AttachedData<any>;
        get commands(): $Commands;
        get recipeManager(): $RecipeManager;
        get forcedGameType(): $GameType;
        get commandBlockEnabled(): boolean;
        get profileKeySignatureValidator(): $SignatureValidator;
        get rateLimitPacketsPerSecond(): number;
        get fixerUpper(): $DataFixer;
        get singleplayer(): boolean;
        get resourceManager(): $ResourceManager;
        get advancements(): $ServerAdvancementManager;
        get scheduledEvents(): $ScheduledEvents;
        get serverModName(): string;
        get moddedStatus(): $ModCheck;
        get mcPlayers(): $List<$Player>;
        get mcEntities(): $Iterable<$Entity>;
        get players(): $EntityArrayList;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get entities(): $EntityArrayList;
        get displayName(): $Component;
    }
    export class $WorldStem extends $Record implements $AutoCloseable {
        close(): void;
        resourceManager(): $CloseableResourceManager;
        registries(): $LayeredRegistryAccess<$RegistryLayer>;
        worldData(): $WorldData;
        dataPackResources(): $ReloadableServerResources;
        constructor(arg0: $CloseableResourceManager, arg1: $ReloadableServerResources, arg2: $LayeredRegistryAccess<$RegistryLayer_>, arg3: $WorldData);
    }
    /**
     * Values that may be interpreted as {@link $WorldStem}.
     */
    export type $WorldStem_ = { resourceManager?: $CloseableResourceManager, dataPackResources?: $ReloadableServerResources, registries?: $LayeredRegistryAccess<$RegistryLayer_>, worldData?: $WorldData,  } | [resourceManager?: $CloseableResourceManager, dataPackResources?: $ReloadableServerResources, registries?: $LayeredRegistryAccess<$RegistryLayer_>, worldData?: $WorldData, ];
    export class $ServerScoreboard extends $Scoreboard {
        startTrackingObjective(objective: $Objective): void;
        getStartTrackingPackets(objective: $Objective): $List<$Packet<never>>;
        stopTrackingObjective(objective: $Objective): void;
        getStopTrackingPackets(objective: $Objective): $List<$Packet<never>>;
        setDirty(): void;
        addDirtyListener(runnable: $Runnable_): void;
        dataFactory(): $SavedData$Factory<$ScoreboardSaveData>;
        getObjectiveDisplaySlotCount(objective: $Objective): number;
        static HIDDEN_SCORE_PREFIX: string;
        constructor(server: $MinecraftServer);
    }
    export class $ReloadableServerResources implements $ReloadableServerResourcesKJS {
        listeners(): $List<$PreparableReloadListener>;
        updateRegistryTags(): void;
        static loadResources(resourceManager: $ResourceManager, registries: $LayeredRegistryAccess<$RegistryLayer_>, enabledFeatures: $FeatureFlagSet, commandSelection: $Commands$CommandSelection_, functionCompilationLevel: number, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<$ReloadableServerResources>;
        getRegistryLookup(): $HolderLookup$Provider;
        kjs$getServerScriptManager(): $ServerScriptManager;
        getConditionContext(): $ICondition$IContext;
        getCommands(): $Commands;
        getRecipeManager(): $RecipeManager;
        fullRegistries(): $ReloadableServerRegistries$Holder;
        getAdvancements(): $ServerAdvancementManager;
        getFunctionLibrary(): $ServerFunctionLibrary;
        kjs$getTagManager(): $TagManager;
        get registryLookup(): $HolderLookup$Provider;
        get conditionContext(): $ICondition$IContext;
        get commands(): $Commands;
        get recipeManager(): $RecipeManager;
        get advancements(): $ServerAdvancementManager;
        get functionLibrary(): $ServerFunctionLibrary;
    }
    export class $WorldLoader$InitConfig extends $Record {
        packConfig(): $WorldLoader$PackConfig;
        functionCompilationLevel(): number;
        commandSelection(): $Commands$CommandSelection;
        constructor(packConfig: $WorldLoader$PackConfig_, commandSelection: $Commands$CommandSelection_, functionCompilationLevel: number);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$InitConfig}.
     */
    export type $WorldLoader$InitConfig_ = { packConfig?: $WorldLoader$PackConfig_, commandSelection?: $Commands$CommandSelection_, functionCompilationLevel?: number,  } | [packConfig?: $WorldLoader$PackConfig_, commandSelection?: $Commands$CommandSelection_, functionCompilationLevel?: number, ];
    export class $TickTask implements $Runnable {
        run(): void;
        /**
         * Get the server time when this task was scheduled
         */
        getTick(): number;
        constructor(tick: number, runnable: $Runnable_);
        get tick(): number;
    }
    export class $ServerLinks$Entry extends $Record {
        type(): $Either<$ServerLinks$KnownLinkType, $Component>;
        displayName(): $Component;
        link(): $URI;
        static custom(type: $Component_, link: $URI): $ServerLinks$Entry;
        static knownType(type: $ServerLinks$KnownLinkType_, link: $URI): $ServerLinks$Entry;
        constructor(arg0: $Either<$ServerLinks$KnownLinkType_, $Component_>, arg1: $URI);
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks$Entry}.
     */
    export type $ServerLinks$Entry_ = { link?: $URI, type?: $Either<$ServerLinks$KnownLinkType_, $Component_>,  } | [link?: $URI, type?: $Either<$ServerLinks$KnownLinkType_, $Component_>, ];
    export class $MinecraftServer$ServerResourcePackInfo extends $Record {
        hash(): string;
        url(): string;
        id(): $UUID;
        prompt(): $Component;
        isRequired(): boolean;
        constructor(id: $UUID_, url: string, hash: string, isRequired: boolean, prompt: $Component_ | null);
        get required(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftServer$ServerResourcePackInfo}.
     */
    export type $MinecraftServer$ServerResourcePackInfo_ = { prompt?: $Component_, isRequired?: boolean, url?: string, hash?: string, id?: $UUID_,  } | [prompt?: $Component_, isRequired?: boolean, url?: string, hash?: string, id?: $UUID_, ];
    export class $Main {
        static main(args: string[]): void;
        constructor();
    }
    export class $ServerLinks$UntrustedEntry extends $Record {
        type(): $Either<$ServerLinks$KnownLinkType, $Component>;
        link(): string;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerLinks$UntrustedEntry>;
        constructor(arg0: $Either<$ServerLinks$KnownLinkType_, $Component_>, arg1: string);
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks$UntrustedEntry}.
     */
    export type $ServerLinks$UntrustedEntry_ = { link?: string, type?: $Either<$ServerLinks$KnownLinkType_, $Component_>,  } | [link?: string, type?: $Either<$ServerLinks$KnownLinkType_, $Component_>, ];
    export class $Services extends $Record {
        static create(authenticationService: $YggdrasilAuthenticationService, profileRepository: $File_): $Services;
        sessionService(): $MinecraftSessionService;
        profileRepository(): $GameProfileRepository;
        servicesKeySet(): $ServicesKeySet;
        profileKeySignatureValidator(): $SignatureValidator;
        profileCache(): $GameProfileCache;
        canValidateProfileKeys(): boolean;
        constructor(arg0: $MinecraftSessionService, arg1: $ServicesKeySet_, arg2: $GameProfileRepository_, arg3: $GameProfileCache);
    }
    /**
     * Values that may be interpreted as {@link $Services}.
     */
    export type $Services_ = { sessionService?: $MinecraftSessionService, servicesKeySet?: $ServicesKeySet_, profileCache?: $GameProfileCache, profileRepository?: $GameProfileRepository_,  } | [sessionService?: $MinecraftSessionService, servicesKeySet?: $ServicesKeySet_, profileCache?: $GameProfileCache, profileRepository?: $GameProfileRepository_, ];
    export class $ServerFunctionManager {
        getFunctionNames(): $Iterable<$ResourceLocation>;
        get(functionIdentifier: $ResourceLocation_): ($CommandFunction<$CommandSourceStack>) | undefined;
        execute(_function: $CommandFunction<$CommandSourceStack>, source: $CommandSourceStack): void;
        getTag(functionTagIdentifier: $ResourceLocation_): $Collection<$CommandFunction<$CommandSourceStack>>;
        tick(): void;
        getDispatcher(): $CommandDispatcher<$CommandSourceStack>;
        replaceLibrary(reloader: $ServerFunctionLibrary): void;
        getTagNames(): $Iterable<$ResourceLocation>;
        getGameLoopSender(): $CommandSourceStack;
        constructor(server: $MinecraftServer, library: $ServerFunctionLibrary);
        get functionNames(): $Iterable<$ResourceLocation>;
        get dispatcher(): $CommandDispatcher<$CommandSourceStack>;
        get tagNames(): $Iterable<$ResourceLocation>;
        get gameLoopSender(): $CommandSourceStack;
    }
}
