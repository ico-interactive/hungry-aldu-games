import { $Logger } from "@package/org/slf4j";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $List, $Set_, $Collection_, $List_, $Collection, $Set } from "@package/java/util";
import { $InclusiveRange, $InclusiveRange_ } from "@package/net/minecraft/util";
import { $Consumer, $BiConsumer_, $Function_, $Consumer_, $UnaryOperator_, $Predicate_, $Function, $UnaryOperator } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $PackSelectionConfig_, $PackResources, $PackType_, $PackLocationInfo, $PackLocationInfo_, $VanillaPackResources, $PackSelectionConfig } from "@package/net/minecraft/server/packs";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $FabricResourcePackProfile } from "@package/net/fabricmc/fabric/impl/resource/loader";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Enum, $Record } from "@package/java/lang";
import { $PackMetadataSection_ } from "@package/net/minecraft/server/packs/metadata/pack";
import { $DirectoryValidator, $ForbiddenSymlinkInfo_ } from "@package/net/minecraft/world/level/validation";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/server/packs/repository" {
    export class $Pack$Position extends $Enum<$Pack$Position> {
        static values(): $Pack$Position[];
        insert<T>(list: $List_<T>, element: T, packFactory: $Function_<T, $PackSelectionConfig>, flipPosition: boolean): number;
        static valueOf(arg0: string): $Pack$Position;
        opposite(): $Pack$Position;
        static TOP: $Pack$Position;
        static BOTTOM: $Pack$Position;
    }
    /**
     * Values that may be interpreted as {@link $Pack$Position}.
     */
    export type $Pack$Position_ = "top" | "bottom";
    export class $PackSource {
        static create(decorator: $UnaryOperator_<$Component>, shouldAddAutomatically: boolean): $PackSource;
        static BUILT_IN: $PackSource;
        static SERVER: $PackSource;
        static FEATURE: $PackSource;
        static NO_DECORATION: $UnaryOperator<$Component>;
        static WORLD: $PackSource;
        static DEFAULT: $PackSource;
    }
    export interface $PackSource {
        decorate(name: $Component_): $Component;
        shouldAddAutomatically(): boolean;
    }
    export class $Pack$ResourcesSupplier {
    }
    export interface $Pack$ResourcesSupplier {
        openFull(location: $PackLocationInfo_, metadata: $Pack$Metadata_): $PackResources;
        openPrimary(location: $PackLocationInfo_): $PackResources;
    }
    export class $FolderRepositorySource implements $RepositorySource {
        loadPacks(onLoad: $Consumer_<$Pack>): void;
        static discoverPacks(folder: $Path_, validator: $DirectoryValidator, output: $BiConsumer_<$Path, $Pack$ResourcesSupplier>): void;
        packSource: $PackSource;
        static LOGGER: $Logger;
        constructor(folder: $Path_, packType: $PackType_, packSource: $PackSource, validator: $DirectoryValidator);
    }
    export class $PackRepository {
        reload(): void;
        isAvailable(id: string): boolean;
        openAllSelected(): $List<$PackResources>;
        setSelected(ids: $Collection_<string>): void;
        /**
         * Gets all known packs, including those that are not enabled.
         */
        getSelectedPacks(): $Collection<$Pack>;
        removePack(id: string): boolean;
        addPack(id: string): boolean;
        getPack(id: string): $Pack;
        /**
         * Gets all known packs, including those that are not enabled.
         */
        getSelectedIds(): $Collection<string>;
        /**
         * Gets all known packs, including those that are not enabled.
         */
        getAvailablePacks(): $Collection<$Pack>;
        /**
         * Gets all known packs, including those that are not enabled.
         */
        getAvailableIds(): $Collection<string>;
        addPackFinder(arg0: $RepositorySource_): void;
        rebuildSelected(ids: $Collection_<string>): $List<$Pack>;
        getRequestedFeatureFlags(): $FeatureFlagSet;
        static displayPackList(packs: $Collection_<$Pack>): string;
        handler$zfk000$fabric_resource_loader_v0$construct(arg0: $RepositorySource_[], arg1: $CallbackInfo): void;
        sources: $Set<$RepositorySource>;
        constructor(...sources: $RepositorySource_[]);
        set selected(value: $Collection_<string>);
        get selectedPacks(): $Collection<$Pack>;
        get selectedIds(): $Collection<string>;
        get availablePacks(): $Collection<$Pack>;
        get availableIds(): $Collection<string>;
        get requestedFeatureFlags(): $FeatureFlagSet;
    }
    export class $KnownPack extends $Record {
        version(): string;
        id(): string;
        static vanilla(name: string): $KnownPack;
        namespace(): string;
        isVanilla(): boolean;
        static VANILLA_NAMESPACE: string;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $KnownPack>;
        constructor(arg0: string, arg1: string, arg2: string);
    }
    /**
     * Values that may be interpreted as {@link $KnownPack}.
     */
    export type $KnownPack_ = { namespace?: string, id?: string, version?: string,  } | [namespace?: string, id?: string, version?: string, ];
    export class $FolderRepositorySource$FolderPackDetector extends $PackDetector<$Pack$ResourcesSupplier> {
    }
    export class $PackDetector<T> {
        detectPackResources(path: $Path_, forbiddenSymlinkInfos: $List_<$ForbiddenSymlinkInfo_>): T;
        createZipPack(path: $Path_): T;
        createDirectoryPack(path: $Path_): T;
        constructor(validator: $DirectoryValidator);
    }
    export class $ServerPacksSource extends $BuiltInPackSource {
        static createVanillaPackSource(): $VanillaPackResources;
        static createVanillaTrustedRepository(): $PackRepository;
        static createPackRepository(folder: $Path_, validator: $DirectoryValidator): $PackRepository;
        static createPackRepository(level: $LevelStorageSource$LevelStorageAccess): $PackRepository;
        static VANILLA_ID: string;
        static CORE_PACK_INFO: $KnownPack;
        constructor(validator: $DirectoryValidator);
    }
    export class $Pack$Metadata extends $Record {
        isHidden(): boolean;
        requestedFeatures(): $FeatureFlagSet;
        description(): $Component;
        compatibility(): $PackCompatibility;
        overlays(): $List<string>;
        /**
         * @deprecated
         */
        constructor(arg0: $Component_, arg1: $PackCompatibility_, arg2: $FeatureFlagSet, arg3: $List_<string>);
        constructor(description: $Component_, compatibility: $PackCompatibility_, requestedFeatures: $FeatureFlagSet, overlays: $List_<string>, isHidden: boolean);
        get hidden(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Pack$Metadata}.
     */
    export type $Pack$Metadata_ = { description?: $Component_, overlays?: $List_<string>, compatibility?: $PackCompatibility_, isHidden?: boolean, requestedFeatures?: $FeatureFlagSet,  } | [description?: $Component_, overlays?: $List_<string>, compatibility?: $PackCompatibility_, isHidden?: boolean, requestedFeatures?: $FeatureFlagSet, ];
    export class $PackCompatibility extends $Enum<$PackCompatibility> {
        static values(): $PackCompatibility[];
        static valueOf(arg0: string): $PackCompatibility;
        getConfirmation(): $Component;
        getDescription(): $Component;
        isCompatible(): boolean;
        static forVersion(range: $InclusiveRange_<number>, version: number): $PackCompatibility;
        static TOO_OLD: $PackCompatibility;
        static COMPATIBLE: $PackCompatibility;
        static TOO_NEW: $PackCompatibility;
        get confirmation(): $Component;
        get description(): $Component;
        get compatible(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PackCompatibility}.
     */
    export type $PackCompatibility_ = "too_old" | "too_new" | "compatible";
    export class $RepositorySource {
    }
    export interface $RepositorySource {
        loadPacks(onLoad: $Consumer_<$Pack>): void;
    }
    /**
     * Values that may be interpreted as {@link $RepositorySource}.
     */
    export type $RepositorySource_ = ((arg0: $Consumer<$Pack>) => void);
    export class $Pack implements $FabricResourcePackProfile {
        isHidden(): boolean;
        location(): $PackLocationInfo;
        getId(): string;
        open(): $PackResources;
        getChildren(): $List<$Pack>;
        fabric_isHidden(): boolean;
        withChildren(arg0: $List_<$Pack>): $Pack;
        getChatLink(green: boolean): $Component;
        getDescription(): $Component;
        fabric_setParentsPredicate(arg0: $Predicate_<any>): void;
        getPackSource(): $PackSource;
        selectionConfig(): $PackSelectionConfig;
        getDefaultPosition(): $Pack$Position;
        static getDeclaredPackVersions(id: string, metadata: $PackMetadataSection_): $InclusiveRange<number>;
        static readPackMetadata(location: $PackLocationInfo_, resources: $Pack$ResourcesSupplier, version: number): $Pack$Metadata;
        fabric_parentsEnabled(arg0: $Set_<any>): boolean;
        streamSelfAndChildren(): $Stream<$Pack>;
        getRequestedFeatures(): $FeatureFlagSet;
        hidden(): $Pack;
        getTitle(): $Component;
        isRequired(): boolean;
        getCompatibility(): $PackCompatibility;
        static readMetaAndCreate(location: $PackLocationInfo_, resources: $Pack$ResourcesSupplier, packType: $PackType_, selectionConfig: $PackSelectionConfig_): $Pack;
        isFixedPosition(): boolean;
        constructor(location: $PackLocationInfo_, resources: $Pack$ResourcesSupplier, metadata: $Pack$Metadata_, selectionConfig: $PackSelectionConfig_);
        get id(): string;
        get children(): $List<$Pack>;
        get description(): $Component;
        get packSource(): $PackSource;
        get defaultPosition(): $Pack$Position;
        get requestedFeatures(): $FeatureFlagSet;
        get title(): $Component;
        get required(): boolean;
        get compatibility(): $PackCompatibility;
        get fixedPosition(): boolean;
    }
    export class $BuiltInPackSource implements $RepositorySource {
        discoverPacksInPath(directoryPath: $Path_ | null, packGetter: $BiConsumer_<string, $Function<string, $Pack>>): void;
        static fromName(arg0: $Function_<$PackLocationInfo, $PackResources>): $Pack$ResourcesSupplier;
        loadPacks(packConsumer: $Consumer_<$Pack>): void;
        getVanillaPack(): $VanillaPackResources;
        getPackTitle(id: string): $Component;
        createBuiltinPack(id: string, resources: $Pack$ResourcesSupplier, title: $Component_): $Pack;
        static fixedResources(resources: $PackResources): $Pack$ResourcesSupplier;
        populatePackList(populator: $BiConsumer_<string, $Function<string, $Pack>>): void;
        createVanillaPack(resources: $PackResources): $Pack;
        handler$con000$axiom$loadPacks(consumer: $Consumer_<any>, ci: $CallbackInfo): void;
        static VANILLA_ID: string;
        static CORE_PACK_INFO: $KnownPack;
        constructor(packType: $PackType_, vanillaPack: $VanillaPackResources, packDir: $ResourceLocation_, validator: $DirectoryValidator);
        get vanillaPack(): $VanillaPackResources;
    }
}
