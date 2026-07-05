import { $ChunkPos, $LevelHeightAccessor, $Level } from "@package/net/minecraft/world/level";
import { $IntSet } from "@package/it/unimi/dsi/fastutil/ints";
import { $ByteArrayOutputStream, $DataOutputStream, $InputStream, $DataInputStream, $OutputStream } from "@package/java/io";
import { $PoiManager } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $Codec, $Dynamic, $MapCodec } from "@package/com/mojang/serialization";
import { $NbtException, $StreamTagVisitor, $Tag_, $Tag, $CompoundTag, $ListTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $ProtoChunk, $ChunkGenerator, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $DimensionDataStorage } from "@package/net/minecraft/world/level/storage";
import { $ByteBuffer } from "@package/java/nio";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $Supplier_, $Function_, $BooleanSupplier_ } from "@package/java/util/function";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $DataFixTypes_ } from "@package/net/minecraft/util/datafix";
import { $ReportedException } from "@package/net/minecraft";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $ChunkType } from "@package/net/minecraft/world/level/chunk/status";
import { $Throwable, $Enum, $Record, $AutoCloseable, $Runnable } from "@package/java/lang";
import { $ChunkEntities, $EntityPersistentStorage } from "@package/net/minecraft/world/level/entity";
import { $ShortList } from "@package/it/unimi/dsi/fastutil/shorts";

declare module "@package/net/minecraft/world/level/chunk/storage" {
    /**
     * This class handles a single region (or anvil) file and all files for single chunks at chunk positions for that one region file.
     */
    export class $RegionFile implements $AutoCloseable {
        clear(chunkPos: $ChunkPos): void;
        flush(): void;
        write(chunkPos: $ChunkPos, chunkData: $ByteBuffer): void;
        close(): void;
        getPath(): $Path;
        hasChunk(chunkPos: $ChunkPos): boolean;
        getChunkDataInputStream(chunkPos: $ChunkPos): $DataInputStream;
        /**
         * Creates a new `InputStream` for a chunk stored in a separate file.
         */
        getChunkDataOutputStream(chunkPos: $ChunkPos): $DataOutputStream;
        doesChunkExist(chunkPos: $ChunkPos): boolean;
        usedSectors: $RegionBitmap;
        version: $RegionFileVersion;
        static SECTOR_INTS: number;
        info: $RegionStorageInfo;
        constructor(info: $RegionStorageInfo_, path: $Path_, externalFileDir: $Path_, version: $RegionFileVersion, sync: boolean);
        constructor(info: $RegionStorageInfo_, path: $Path_, externalFileDir: $Path_, sync: boolean);
        get path(): $Path;
    }
    /**
     * Handles reading and writing the region files for a `Level`.
     */
    export class $RegionFileStorage implements $AutoCloseable {
        flush(): void;
        info(): $RegionStorageInfo;
        write(chunkPos: $ChunkPos, chunkData: $CompoundTag_ | null): void;
        read(chunkPos: $ChunkPos): $CompoundTag;
        close(): void;
        scanChunk(chunkPos: $ChunkPos, visitor: $StreamTagVisitor): void;
        static ANVIL_EXTENSION: string;
        constructor(info: $RegionStorageInfo_, folder: $Path_, sync: boolean);
    }
    export class $ChunkStorage implements $AutoCloseable {
        write(chunkPos: $ChunkPos, data: $CompoundTag_): $CompletableFuture<void>;
        read(chunkPos: $ChunkPos): $CompletableFuture<($CompoundTag) | undefined>;
        close(): void;
        static getVersion(chunkData: $CompoundTag_): number;
        static injectDatafixingContext(chunkData: $CompoundTag_, levelKey: $ResourceKey_<$Level>, chunkGeneratorKey: ($ResourceKey_<$MapCodec<$ChunkGenerator>>) | undefined): void;
        handleLegacyStructureIndex(chunkPos: $ChunkPos): void;
        chunkScanner(): $ChunkScanAccess;
        flushWorker(): void;
        upgradeChunkTag(levelKey: $ResourceKey_<$Level>, storage: $Supplier_<$DimensionDataStorage>, chunkData: $CompoundTag_, chunkGeneratorKey: ($ResourceKey_<$MapCodec<$ChunkGenerator>>) | undefined): $CompoundTag;
        storageInfo(): $RegionStorageInfo;
        isOldChunkAround(pos: $ChunkPos, radius: number): boolean;
        fixerUpper: $DataFixer;
        static LAST_MONOLYTH_STRUCTURE_DATA_VERSION: number;
        constructor(info: $RegionStorageInfo_, folder: $Path_, fixerUpper: $DataFixer, sync: boolean);
    }
    export class $RegionStorageInfo extends $Record {
        type(): string;
        level(): string;
        dimension(): $ResourceKey<$Level>;
        withTypeSuffix(suffix: string): $RegionStorageInfo;
        constructor(arg0: string, arg1: $ResourceKey_<$Level>, arg2: string);
    }
    /**
     * Values that may be interpreted as {@link $RegionStorageInfo}.
     */
    export type $RegionStorageInfo_ = { type?: string, level?: string, dimension?: $ResourceKey_<$Level>,  } | [type?: string, level?: string, dimension?: $ResourceKey_<$Level>, ];
    export class $IOWorker implements $ChunkScanAccess, $AutoCloseable {
        store(chunkPos: $ChunkPos, chunkData: $CompoundTag_ | null): $CompletableFuture<void>;
        close(): void;
        scanChunk(chunkPos: $ChunkPos, visitor: $StreamTagVisitor): $CompletableFuture<void>;
        synchronize(flushStorage: boolean): $CompletableFuture<void>;
        loadAsync(chunkPos: $ChunkPos): $CompletableFuture<($CompoundTag) | undefined>;
        storageInfo(): $RegionStorageInfo;
        isOldChunkAround(chunkPos: $ChunkPos, radius: number): boolean;
        constructor(info: $RegionStorageInfo_, folder: $Path_, sync: boolean);
    }
    export class $ChunkSerializer {
        static write(level: $ServerLevel, chunk: $ChunkAccess): $CompoundTag;
        static read(level: $ServerLevel, poiManager: $PoiManager, regionStorageInfo: $RegionStorageInfo_, pos: $ChunkPos, tag: $CompoundTag_): $ProtoChunk;
        static packOffsets(list: $ShortList[]): $ListTag;
        static getChunkTypeFromTag(tag: $CompoundTag_ | null): $ChunkType;
        static SKY_LIGHT_TAG: string;
        static Z_POS_TAG: string;
        static SECTIONS_TAG: string;
        static IS_LIGHT_ON_TAG: string;
        static X_POS_TAG: string;
        static HEIGHTMAPS_TAG: string;
        static BLOCK_LIGHT_TAG: string;
        constructor();
    }
    export class $RecreatingSimpleRegionStorage extends $SimpleRegionStorage {
        constructor(info: $RegionStorageInfo_, folder: $Path_, writeInfo: $RegionStorageInfo_, writeFolder: $Path_, fixerUpper: $DataFixer, sync: boolean, dataFixType: $DataFixTypes_);
    }
    export class $IOWorker$PendingStore {
    }
    export class $ChunkIOErrorReporter {
        static createMisplacedChunkReport(pos: $ChunkPos, expectedPos: $ChunkPos): $ReportedException;
    }
    export interface $ChunkIOErrorReporter {
        reportChunkLoadFailure(throwable: $Throwable, regionStorageInfo: $RegionStorageInfo_, chunkPos: $ChunkPos): void;
        reportMisplacedChunk(pos: $ChunkPos, expectedPos: $ChunkPos, regionStorageInfo: $RegionStorageInfo_): void;
        reportChunkSaveFailure(throwable: $Throwable, regionStorageInfo: $RegionStorageInfo_, chunkPos: $ChunkPos): void;
    }
    export class $ChunkScanAccess {
    }
    export interface $ChunkScanAccess {
        scanChunk(chunkPos: $ChunkPos, visitor: $StreamTagVisitor): $CompletableFuture<void>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkScanAccess}.
     */
    export type $ChunkScanAccess_ = ((arg0: $ChunkPos, arg1: $StreamTagVisitor) => $CompletableFuture<void>);
    export class $SectionStorage<R> implements $AutoCloseable {
        remove(sectionKey: number): void;
        get(sectionKey: number): (R) | undefined;
        flush(chunkPos: $ChunkPos): void;
        close(): void;
        getOrCreate(sectionKey: number): R;
        tick(aheadOfTime: $BooleanSupplier_): void;
        onSectionLoad(sectionKey: number): void;
        outsideStoredRange(sectionKey: number): boolean;
        setDirty(sectionKey: number): void;
        hasWork(): boolean;
        getOrLoad(sectionKey: number): (R) | undefined;
        levelHeightAccessor: $LevelHeightAccessor;
        constructor(simpleRegionStorage: $SimpleRegionStorage, codec: $Function_<$Runnable, $Codec<R>>, factory: $Function_<$Runnable, R>, registryAccess: $RegistryAccess, errorReporter: $ChunkIOErrorReporter, levelHeightAccessor: $LevelHeightAccessor);
        set dirty(value: number);
    }
    export class $ChunkSerializer$ChunkReadException extends $NbtException {
        constructor(message: string);
    }
    export class $RegionFile$CommitOp {
    }
    export interface $RegionFile$CommitOp {
    }
    /**
     * Values that may be interpreted as {@link $RegionFile$CommitOp}.
     */
    export type $RegionFile$CommitOp_ = (() => void);
    export class $RecreatingChunkStorage extends $ChunkStorage {
        fixerUpper: $DataFixer;
        static LAST_MONOLYTH_STRUCTURE_DATA_VERSION: number;
        constructor(info: $RegionStorageInfo_, folder: $Path_, writeInfo: $RegionStorageInfo_, writeFolder: $Path_, fixerUpper: $DataFixer, sync: boolean);
    }
    /**
     * A decorator for input and output streams used to read and write the chunk data from region files. This exists as there are different ways of compressing the chunk data inside a region file.
     * @see net.minecraft.world.level.chunk.storage.RegionFileVersion#VERSION_GZIP
     * @see net.minecraft.world.level.chunk.storage.RegionFileVersion#VERSION_DEFLATE
     * @see net.minecraft.world.level.chunk.storage.RegionFileVersion#VERSION_NONE
     */
    export class $RegionFileVersion {
        wrap(outputWrapper: $OutputStream): $OutputStream;
        wrap(inputWrapper: $InputStream): $InputStream;
        getId(): number;
        static isValidVersion(id: number): boolean;
        static configure(optionValue: string): void;
        static getSelected(): $RegionFileVersion;
        static fromId(id: number): $RegionFileVersion;
        static VERSION_GZIP: $RegionFileVersion;
        static VERSION_LZ4: $RegionFileVersion;
        static VERSION_DEFLATE: $RegionFileVersion;
        static VERSION_NONE: $RegionFileVersion;
        static VERSION_CUSTOM: $RegionFileVersion;
        static DEFAULT: $RegionFileVersion;
        get id(): number;
        static get selected(): $RegionFileVersion;
    }
    /**
     * Keeps track of which parts of a region file are used and which parts are free.
     */
    export class $RegionBitmap {
        /**
         * Marks a range of 4 KiB sectors relative to the region file as used.
         */
        free(sectorOffset: number, sectorCount: number): void;
        /**
         * Gets a valid offset inside the region file with enough space to store the given amount of sectors and marks that space as used.
         */
        allocate(sectorCount: number): number;
        /**
         * Marks a range of 4 KiB sectors relative to the region file as used.
         */
        force(sectorOffset: number, sectorCount: number): void;
        getUsed(): $IntSet;
        constructor();
        get used(): $IntSet;
    }
    export class $SimpleRegionStorage implements $AutoCloseable {
        write(chunkPos: $ChunkPos, data: $CompoundTag_ | null): $CompletableFuture<void>;
        read(chunkPos: $ChunkPos): $CompletableFuture<($CompoundTag) | undefined>;
        close(): void;
        synchronize(flushStorage: boolean): $CompletableFuture<void>;
        upgradeChunkTag(tag: $Dynamic<$Tag_>, version: number): $Dynamic<$Tag>;
        upgradeChunkTag(tag: $CompoundTag_, version: number): $CompoundTag;
        storageInfo(): $RegionStorageInfo;
        constructor(info: $RegionStorageInfo_, folder: $Path_, fixerUpper: $DataFixer, sync: boolean, dataFixType: $DataFixTypes_);
    }
    export class $EntityStorage implements $EntityPersistentStorage<$Entity> {
        flush(synchronize: boolean): void;
        close(): void;
        loadEntities(pos: $ChunkPos): $CompletableFuture<$ChunkEntities<$Entity>>;
        storeEntities(entities: $ChunkEntities<$Entity>): void;
        constructor(simpleRegionStorage: $SimpleRegionStorage, level: $ServerLevel, executor: $Executor_);
    }
    export class $RegionFileVersion$StreamWrapper<O> {
    }
    export interface $RegionFileVersion$StreamWrapper<O> {
    }
    /**
     * Values that may be interpreted as {@link $RegionFileVersion$StreamWrapper}.
     */
    export type $RegionFileVersion$StreamWrapper_<O> = (() => void);
    export class $IOWorker$Priority extends $Enum<$IOWorker$Priority> {
    }
    /**
     * Values that may be interpreted as {@link $IOWorker$Priority}.
     */
    export type $IOWorker$Priority_ = "foreground" | "background" | "shutdown";
    export class $RegionFile$ChunkBuffer extends $ByteArrayOutputStream {
    }
}
