import { $JigsawJunction, $StructurePoolElement } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $MobCategory_, $MobCategory } from "@package/net/minecraft/world/entity";
import { $SavedData, $SavedData$Factory } from "@package/net/minecraft/world/level/saveddata";
import { $Map, $List, $Map_, $List_ } from "@package/java/util";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $Consumer_, $Predicate_, $Predicate, $Consumer, $Function_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos$MutableBlockPos, $HolderSet_, $BlockPos_, $RegistryAccess, $Vec3i, $HolderLookup$Provider, $Holder_, $HolderSet, $Holder, $Direction_, $Direction } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $WeightedRandomList } from "@package/net/minecraft/util/random";
import { $Enum, $Iterable_, $Record } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Heightmap$Types_, $WorldgenRandom, $RandomState, $GenerationStep$Decoration, $GenerationStep$Decoration_ } from "@package/net/minecraft/world/level/levelgen";
import { $StructurePlacement } from "@package/net/minecraft/world/level/levelgen/structure/placement";
import { $ServerLevelAccessor, $LevelAccessor, $LevelReader, $ChunkPos, $BlockGetter, $WorldGenLevel, $LevelHeightAccessor, $Level, $StructureManager } from "@package/net/minecraft/world/level";
import { $NetherFortressStructure, $SwampHutStructure, $OceanRuinStructure, $OceanMonumentStructure, $NetherFossilStructure, $IglooStructure, $StrongholdStructure, $EndCityStructure, $BuriedTreasureStructure, $JungleTempleStructure, $MineshaftStructure, $ShipwreckStructure, $JigsawStructure, $DesertPyramidStructure, $WoodlandMansionStructure, $RuinedPortalStructure } from "@package/net/minecraft/world/level/levelgen/structure/structures";
import { $BiomeSource, $Biome, $MobSpawnSettings$SpawnerData } from "@package/net/minecraft/world/level/biome";
import { $StructureTemplateManager, $StructurePlaceSettings, $LiquidSettings_, $StructureTemplate } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $ChunkGenerator } from "@package/net/minecraft/world/level/chunk";
import { $DimensionDataStorage } from "@package/net/minecraft/world/level/storage";
import { $ChunkScanAccess_ } from "@package/net/minecraft/world/level/chunk/storage";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $StructurePieceType_, $StructurePieceType, $StructurePieceSerializationContext_, $PiecesContainer_, $PiecesContainer, $StructurePiecesBuilder } from "@package/net/minecraft/world/level/levelgen/structure/pieces";
import { $RecordCodecBuilder, $RecordCodecBuilder$Instance } from "@package/com/mojang/serialization/codecs";
import { $Mirror, $Rotation_, $Rotation } from "@package/net/minecraft/world/level/block";
import { $ModifiableStructureInfo } from "@package/net/neoforged/neoforge/common/world";
export * as templatesystem from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
export * as structures from "@package/net/minecraft/world/level/levelgen/structure/structures";
export * as pools from "@package/net/minecraft/world/level/levelgen/structure/pools";
export * as pieces from "@package/net/minecraft/world/level/levelgen/structure/pieces";
export * as placement from "@package/net/minecraft/world/level/levelgen/structure/placement";

declare module "@package/net/minecraft/world/level/levelgen/structure" {
    export class $LegacyStructureDataHandler {
        removeIndex(packedChunkPos: number): void;
        static getLegacyStructureHandler(level: $ResourceKey_<$Level>, storage: $DimensionDataStorage | null): $LegacyStructureDataHandler;
        updateFromLegacy(tag: $CompoundTag_): $CompoundTag;
        constructor(storage: $DimensionDataStorage | null, legacyKeys: $List_<string>, currentKeys: $List_<string>);
    }
    export class $StructureType<S extends $Structure> {
        static STRONGHOLD: $StructureType<$StrongholdStructure>;
        static RUINED_PORTAL: $StructureType<$RuinedPortalStructure>;
        static MINESHAFT: $StructureType<$MineshaftStructure>;
        static NETHER_FOSSIL: $StructureType<$NetherFossilStructure>;
        static IGLOO: $StructureType<$IglooStructure>;
        static SHIPWRECK: $StructureType<$ShipwreckStructure>;
        static SWAMP_HUT: $StructureType<$SwampHutStructure>;
        static JIGSAW: $StructureType<$JigsawStructure>;
        static JUNGLE_TEMPLE: $StructureType<$JungleTempleStructure>;
        static FORTRESS: $StructureType<$NetherFortressStructure>;
        static OCEAN_MONUMENT: $StructureType<$OceanMonumentStructure>;
        static DESERT_PYRAMID: $StructureType<$DesertPyramidStructure>;
        static END_CITY: $StructureType<$EndCityStructure>;
        static WOODLAND_MANSION: $StructureType<$WoodlandMansionStructure>;
        static BURIED_TREASURE: $StructureType<$BuriedTreasureStructure>;
        static OCEAN_RUIN: $StructureType<$OceanRuinStructure>;
    }
    export interface $StructureType<S extends $Structure> {
        codec(): $MapCodec<S>;
    }
    /**
     * Values that may be interpreted as {@link $StructureType}.
     */
    export type $StructureType_<S> = RegistryTypes.WorldgenStructureType | (() => $MapCodec_<S>);
    export class $Structure {
        type(): $StructureType<never>;
        step(): $GenerationStep$Decoration;
        generate(registryAccess: $RegistryAccess, chunkGenerator: $ChunkGenerator, biomeSource: $BiomeSource, randomState: $RandomState, structureTemplateManager: $StructureTemplateManager, seed: number, arg6: $ChunkPos, chunkPos: number, references: $LevelHeightAccessor, heightAccessor: $Predicate_<$Holder<$Biome>>): $StructureStart;
        findValidGenerationPoint(context: $Structure$GenerationContext_): ($Structure$GenerationStub) | undefined;
        static getMeanFirstOccupiedHeight(context: $Structure$GenerationContext_, minX: number, minZ: number, maxX: number, maxZ: number): number;
        modifiableStructureInfo(): $ModifiableStructureInfo;
        findGenerationPoint(context: $Structure$GenerationContext_): ($Structure$GenerationStub) | undefined;
        getModifiedStructureSettings(): $Structure$StructureSettings;
        biomes(): $HolderSet<$Biome>;
        static simpleCodec<S extends $Structure>(factory: $Function_<$Structure$StructureSettings, S>): $MapCodec<S>;
        afterPlace(level: $WorldGenLevel, structureManager: $StructureManager, chunkGenerator: $ChunkGenerator, random: $RandomSource, boundingBox: $BoundingBox, chunkPos: $ChunkPos, pieces: $PiecesContainer_): void;
        static getLowestY(context: $Structure$GenerationContext_, maxX: number, maxZ: number): number;
        static getLowestY(context: $Structure$GenerationContext_, minX: number, minZ: number, maxX: number, maxZ: number): number;
        /**
         * @deprecated
         */
        getLowestYIn5by5BoxOffset7Blocks(context: $Structure$GenerationContext_, rotation: $Rotation_): $BlockPos;
        static onTopOfChunkCenter(context: $Structure$GenerationContext_, heightmapTypes: $Heightmap$Types_, generator: $Consumer_<$StructurePiecesBuilder>): ($Structure$GenerationStub) | undefined;
        terrainAdaptation(): $TerrainAdjustment;
        static settingsCodec<S extends $Structure>(instance: $RecordCodecBuilder$Instance<S>): $RecordCodecBuilder<S, $Structure$StructureSettings>;
        spawnOverrides(): $Map<$MobCategory, $StructureSpawnOverride>;
        adjustBoundingBox(boundingBox: $BoundingBox): $BoundingBox;
        static CODEC: $Codec<$Holder<$Structure>>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(settings: $Structure$StructureSettings_);
        get modifiedStructureSettings(): $Structure$StructureSettings;
        static set tingsCodec(value: $RecordCodecBuilder$Instance<S>);
    }
    /**
     * Values that may be interpreted as {@link $Structure}.
     */
    export type $Structure_ = RegistryTypes.WorldgenStructure;
    export class $ScatteredFeaturePiece extends $StructurePiece {
        updateHeightPositionToLowestGroundHeight(level: $LevelAccessor, height: number): boolean;
        updateAverageGroundHeight(level: $LevelAccessor, bounds: $BoundingBox, height: number): boolean;
        heightPosition: number;
        boundingBox: $BoundingBox;
        genDepth: number;
        depth: number;
        static CAVE_AIR: $BlockState;
        width: number;
        height: number;
        constructor(type: $StructurePieceType_, x: number, y: number, z: number, width: number, height: number, depth: number, orientation: $Direction_);
        constructor(type: $StructurePieceType_, tag: $CompoundTag_);
    }
    export class $Structure$GenerationStub extends $Record {
        position(): $BlockPos;
        generator(): $Either<$Consumer<$StructurePiecesBuilder>, $StructurePiecesBuilder>;
        getPiecesBuilder(): $StructurePiecesBuilder;
        constructor(position: $BlockPos_, generator: $Consumer_<$StructurePiecesBuilder>);
        constructor(position: $BlockPos_, generator: $Either<$Consumer_<$StructurePiecesBuilder>, $StructurePiecesBuilder>);
        get piecesBuilder(): $StructurePiecesBuilder;
    }
    /**
     * Values that may be interpreted as {@link $Structure$GenerationStub}.
     */
    export type $Structure$GenerationStub_ = { position?: $BlockPos_, generator?: $Either<$Consumer_<$StructurePiecesBuilder>, $StructurePiecesBuilder>,  } | [position?: $BlockPos_, generator?: $Either<$Consumer_<$StructurePiecesBuilder>, $StructurePiecesBuilder>, ];
    export class $StructurePieceAccessor {
    }
    export interface $StructurePieceAccessor {
        addPiece(piece: $StructurePiece): void;
        findCollisionPiece(box: $BoundingBox): $StructurePiece;
    }
    export class $StructurePiece {
        getType(): $StructurePieceType;
        move(x: number, y: number, z: number): void;
        getMirror(): $Mirror;
        getBlock(level: $BlockGetter, x: number, y: number, z: number, box: $BoundingBox): $BlockState;
        getGenDepth(): number;
        generateUpperHalfSphere(level: $WorldGenLevel, box: $BoundingBox, minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number, state: $BlockState_, excludeAir: boolean): void;
        isReplaceableByStructures(state: $BlockState_): boolean;
        canBeReplaced(level: $LevelReader, x: number, y: number, z: number, box: $BoundingBox): boolean;
        createTag(context: $StructurePieceSerializationContext_): $CompoundTag;
        isInterior(level: $LevelReader, x: number, y: number, z: number, box: $BoundingBox): boolean;
        postProcess(level: $WorldGenLevel, structureManager: $StructureManager, generator: $ChunkGenerator, random: $RandomSource, box: $BoundingBox, chunkPos: $ChunkPos, pos: $BlockPos_): void;
        getBoundingBox(): $BoundingBox;
        static makeBoundingBox(x: number, y: number, z: number, direction: $Direction_, offsetX: number, offsetY: number, offsetZ: number): $BoundingBox;
        static reorient(level: $BlockGetter, pos: $BlockPos_, state: $BlockState_): $BlockState;
        getWorldZ(x: number, z: number): number;
        getWorldY(y: number): number;
        getWorldX(x: number, z: number): number;
        placeBlock(level: $WorldGenLevel, state: $BlockState_, x: number, y: number, z: number, box: $BoundingBox): void;
        static getRandomHorizontalDirection(random: $RandomSource): $Direction;
        getRotation(): $Rotation;
        addAdditionalSaveData(context: $StructurePieceSerializationContext_, tag: $CompoundTag_): void;
        createChest(level: $ServerLevelAccessor, box: $BoundingBox, random: $RandomSource, pos: $BlockPos_, lootTable: $ResourceKey_<$LootTable>, state: $BlockState_ | null): boolean;
        createChest(level: $WorldGenLevel, box: $BoundingBox, random: $RandomSource, x: number, y: number, z: number, lootTable: $ResourceKey_<$LootTable>): boolean;
        getOrientation(): $Direction;
        generateAirBox(level: $WorldGenLevel, box: $BoundingBox, minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number): void;
        getWorldPos(x: number, y: number, z: number): $BlockPos$MutableBlockPos;
        setOrientation(orientation: $Direction_ | null): void;
        addChildren(piece: $StructurePiece, pieces: $StructurePieceAccessor, random: $RandomSource): void;
        setGenDepth(genDepth: number): void;
        generateMaybeBox(level: $WorldGenLevel, box: $BoundingBox, random: $RandomSource, chance: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, edgeState: $BlockState_, state: $BlockState_, requireNonAir: boolean, requireSkylight: boolean): void;
        fillColumnDown(level: $WorldGenLevel, state: $BlockState_, x: number, y: number, z: number, box: $BoundingBox): void;
        createDispenser(level: $WorldGenLevel, box: $BoundingBox, random: $RandomSource, x: number, y: number, z: number, facing: $Direction_, lootTable: $ResourceKey_<$LootTable>): boolean;
        static createBoundingBox(pieces: $Stream<$StructurePiece>): $BoundingBox;
        static findCollisionPiece(pieces: $List_<$StructurePiece>, boundingBox: $BoundingBox): $StructurePiece;
        isCloseToChunk(chunkPos: $ChunkPos, distance: number): boolean;
        getLocatorPosition(): $BlockPos;
        maybeGenerateBlock(level: $WorldGenLevel, box: $BoundingBox, random: $RandomSource, chance: number, x: number, y: number, z: number, state: $BlockState_): void;
        generateBox(level: $WorldGenLevel, boundingBox: $BoundingBox, box: $BoundingBox, boundaryBlockState: $BlockState_, insideBlockState: $BlockState_, existingOnly: boolean): void;
        generateBox(level: $WorldGenLevel, boundingBox: $BoundingBox, box: $BoundingBox, alwaysReplace: boolean, random: $RandomSource, blockSelector: $StructurePiece$BlockSelector): void;
        generateBox(level: $WorldGenLevel, box: $BoundingBox, minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number, alwaysReplace: boolean, random: $RandomSource, blockSelector: $StructurePiece$BlockSelector): void;
        /**
         * Fill the given area with the selected blocks
         */
        generateBox(level: $WorldGenLevel, box: $BoundingBox, xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number, boundaryBlockState: $BlockState_, insideBlockState: $BlockState_, existingOnly: boolean): void;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(type: $StructurePieceType_, genDepth: number, boundingBox: $BoundingBox);
        constructor(type: $StructurePieceType_, tag: $CompoundTag_);
        get type(): $StructurePieceType;
        get mirror(): $Mirror;
        get rotation(): $Rotation;
        get locatorPosition(): $BlockPos;
    }
    export class $BuiltinStructureSets {
        static JUNGLE_TEMPLES: $ResourceKey<$StructureSet>;
        static NETHER_FOSSILS: $ResourceKey<$StructureSet>;
        static NETHER_COMPLEXES: $ResourceKey<$StructureSet>;
        static BURIED_TREASURES: $ResourceKey<$StructureSet>;
        static END_CITIES: $ResourceKey<$StructureSet>;
        static PILLAGER_OUTPOSTS: $ResourceKey<$StructureSet>;
        static STRONGHOLDS: $ResourceKey<$StructureSet>;
        static SHIPWRECKS: $ResourceKey<$StructureSet>;
        static VILLAGES: $ResourceKey<$StructureSet>;
        static DESERT_PYRAMIDS: $ResourceKey<$StructureSet>;
        static SWAMP_HUTS: $ResourceKey<$StructureSet>;
        static OCEAN_MONUMENTS: $ResourceKey<$StructureSet>;
        static MINESHAFTS: $ResourceKey<$StructureSet>;
        static RUINED_PORTALS: $ResourceKey<$StructureSet>;
        static WOODLAND_MANSIONS: $ResourceKey<$StructureSet>;
        static ANCIENT_CITIES: $ResourceKey<$StructureSet>;
        static TRAIL_RUINS: $ResourceKey<$StructureSet>;
        static IGLOOS: $ResourceKey<$StructureSet>;
        static OCEAN_RUINS: $ResourceKey<$StructureSet>;
        static TRIAL_CHAMBERS: $ResourceKey<$StructureSet>;
    }
    export interface $BuiltinStructureSets {
    }
    export class $Structure$StructureSettings extends $Record {
        step(): $GenerationStep$Decoration;
        biomes(): $HolderSet<$Biome>;
        terrainAdaptation(): $TerrainAdjustment;
        spawnOverrides(): $Map<$MobCategory, $StructureSpawnOverride>;
        static CODEC: $MapCodec<$Structure$StructureSettings>;
        static DEFAULT: $Structure$StructureSettings;
        constructor(biomes: $HolderSet_<$Biome>);
        constructor(biomes: $HolderSet_<$Biome>, spawnOverrides: $Map_<$MobCategory_, $StructureSpawnOverride_>, step: $GenerationStep$Decoration_, terrainAdaptation: $TerrainAdjustment_);
    }
    /**
     * Values that may be interpreted as {@link $Structure$StructureSettings}.
     */
    export type $Structure$StructureSettings_ = { terrainAdaptation?: $TerrainAdjustment_, biomes?: $HolderSet_<$Biome>, step?: $GenerationStep$Decoration_, spawnOverrides?: $Map_<$MobCategory_, $StructureSpawnOverride_>,  } | [terrainAdaptation?: $TerrainAdjustment_, biomes?: $HolderSet_<$Biome>, step?: $GenerationStep$Decoration_, spawnOverrides?: $Map_<$MobCategory_, $StructureSpawnOverride_>, ];
    export interface $StructureType<S> extends RegistryMarked<RegistryTypes.WorldgenStructureTypeTag, RegistryTypes.WorldgenStructureType> {}
    export class $PostPlacementProcessor {
        static NONE: $PostPlacementProcessor;
    }
    export interface $PostPlacementProcessor {
        afterPlace(level: $WorldGenLevel, structureManager: $StructureManager, generator: $ChunkGenerator, random: $RandomSource, box: $BoundingBox, chunkPos: $ChunkPos, pieces: $PiecesContainer_): void;
    }
    /**
     * Values that may be interpreted as {@link $PostPlacementProcessor}.
     */
    export type $PostPlacementProcessor_ = ((arg0: $WorldGenLevel, arg1: $StructureManager, arg2: $ChunkGenerator, arg3: $RandomSource, arg4: $BoundingBox, arg5: $ChunkPos, arg6: $PiecesContainer) => void);
    export class $SinglePieceStructure$PieceConstructor {
    }
    export interface $SinglePieceStructure$PieceConstructor {
    }
    /**
     * Values that may be interpreted as {@link $SinglePieceStructure$PieceConstructor}.
     */
    export type $SinglePieceStructure$PieceConstructor_ = (() => void);
    export class $SinglePieceStructure extends $Structure {
        static CODEC: $Codec<$Holder<$Structure>>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(_constructor: $SinglePieceStructure$PieceConstructor_, width: number, depth: number, settings: $Structure$StructureSettings_);
    }
    export class $StructureCheck {
        incrementReference(pos: $ChunkPos, structure: $Structure_): void;
        onStructureLoad(chunkPos: $ChunkPos, chunkStarts: $Map_<$Structure_, $StructureStart>): void;
        checkStart(chunkPos: $ChunkPos, structure: $Structure_, placement: $StructurePlacement, skipKnownStructures: boolean): $StructureCheckResult;
        constructor(storageAccess: $ChunkScanAccess_, registryAccess: $RegistryAccess, structureTemplateManager: $StructureTemplateManager, dimension: $ResourceKey_<$Level>, chunkGenerator: $ChunkGenerator, randomState: $RandomState, heightAccessor: $LevelHeightAccessor, biomeSource: $BiomeSource, seed: number, arg9: $DataFixer);
    }
    export class $TerrainAdjustment extends $Enum<$TerrainAdjustment> implements $StringRepresentable {
        static values(): $TerrainAdjustment[];
        static valueOf(arg0: string): $TerrainAdjustment;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static ENCAPSULATE: $TerrainAdjustment;
        static CODEC: $Codec<$TerrainAdjustment>;
        static BURY: $TerrainAdjustment;
        static NONE: $TerrainAdjustment;
        static BEARD_BOX: $TerrainAdjustment;
        static BEARD_THIN: $TerrainAdjustment;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $TerrainAdjustment}.
     */
    export type $TerrainAdjustment_ = "none" | "bury" | "beard_thin" | "beard_box" | "encapsulate";
    export class $TemplateStructurePiece extends $StructurePiece {
        makeTemplateLocation(): $ResourceLocation;
        template(): $StructureTemplate;
        handleDataMarker(name: string, pos: $BlockPos_, level: $ServerLevelAccessor, random: $RandomSource, box: $BoundingBox): void;
        templatePosition(): $BlockPos;
        placeSettings(): $StructurePlaceSettings;
        boundingBox: $BoundingBox;
        genDepth: number;
        templateName: string;
        static CAVE_AIR: $BlockState;
        constructor(type: $StructurePieceType_, genDepth: number, structureTemplateManager: $StructureTemplateManager, location: $ResourceLocation_, templateName: string, placeSettings: $StructurePlaceSettings, templatePosition: $BlockPos_);
        constructor(type: $StructurePieceType_, tag: $CompoundTag_, structureTemplateManager: $StructureTemplateManager, placeSettingsFactory: $Function_<$ResourceLocation, $StructurePlaceSettings>);
    }
    export class $StructureSpawnOverride$BoundingBoxType extends $Enum<$StructureSpawnOverride$BoundingBoxType> implements $StringRepresentable {
        static values(): $StructureSpawnOverride$BoundingBoxType[];
        static valueOf(arg0: string): $StructureSpawnOverride$BoundingBoxType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$StructureSpawnOverride$BoundingBoxType>;
        static STRUCTURE: $StructureSpawnOverride$BoundingBoxType;
        static PIECE: $StructureSpawnOverride$BoundingBoxType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $StructureSpawnOverride$BoundingBoxType}.
     */
    export type $StructureSpawnOverride$BoundingBoxType_ = "piece" | "full";
    export class $Structure$StructureSettings$Builder {
        build(): $Structure$StructureSettings;
        generationStep(generationStep: $GenerationStep$Decoration_): $Structure$StructureSettings$Builder;
        terrainAdapation(terrainAdaptation: $TerrainAdjustment_): $Structure$StructureSettings$Builder;
        spawnOverrides(spawnOverrides: $Map_<$MobCategory_, $StructureSpawnOverride_>): $Structure$StructureSettings$Builder;
        constructor(biomes: $HolderSet_<$Biome>);
    }
    export class $StructureCheckResult extends $Enum<$StructureCheckResult> {
        static values(): $StructureCheckResult[];
        static valueOf(arg0: string): $StructureCheckResult;
        static CHUNK_LOAD_NEEDED: $StructureCheckResult;
        static START_NOT_PRESENT: $StructureCheckResult;
        static START_PRESENT: $StructureCheckResult;
    }
    /**
     * Values that may be interpreted as {@link $StructureCheckResult}.
     */
    export type $StructureCheckResult_ = "start_present" | "start_not_present" | "chunk_load_needed";
    export interface $StructureSet extends RegistryMarked<RegistryTypes.WorldgenStructureSetTag, RegistryTypes.WorldgenStructureSet> {}
    export interface $Structure extends RegistryMarked<RegistryTypes.WorldgenStructureTag, RegistryTypes.WorldgenStructure> {}
    export class $StructureFeatureIndexSavedData extends $SavedData {
        static load(tag: $CompoundTag_, registries: $HolderLookup$Provider): $StructureFeatureIndexSavedData;
        static factory(): $SavedData$Factory<$StructureFeatureIndexSavedData>;
        hasStartIndex(index: number): boolean;
        hasUnhandledIndex(index: number): boolean;
        getAll(): $LongSet;
        removeIndex(index: number): void;
        addIndex(index: number): void;
        constructor();
        get all(): $LongSet;
    }
    export class $StructureSet$StructureSelectionEntry extends $Record {
        weight(): number;
        structure(): $Holder<$Structure>;
        static CODEC: $Codec<$StructureSet$StructureSelectionEntry>;
        constructor(arg0: $Holder_<$Structure>, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $StructureSet$StructureSelectionEntry}.
     */
    export type $StructureSet$StructureSelectionEntry_ = { weight?: number, structure?: $Holder_<$Structure>,  } | [weight?: number, structure?: $Holder_<$Structure>, ];
    export class $PoolElementStructurePiece extends $StructurePiece {
        getElement(): $StructurePoolElement;
        getPosition(): $BlockPos;
        getGroundLevelDelta(): number;
        place(level: $WorldGenLevel, structureManager: $StructureManager, generator: $ChunkGenerator, random: $RandomSource, box: $BoundingBox, pos: $BlockPos_, keepJigsaws: boolean): void;
        getJunctions(): $List<$JigsawJunction>;
        addJunction(junction: $JigsawJunction): void;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        rotation: $Rotation;
        position: $BlockPos;
        element: $StructurePoolElement;
        constructor(structureTemplateManager: $StructureTemplateManager, element: $StructurePoolElement, position: $BlockPos_, groundLevelDelta: number, rotation: $Rotation_, boundingBox: $BoundingBox, liquidSettings: $LiquidSettings_);
        constructor(context: $StructurePieceSerializationContext_, tag: $CompoundTag_);
        get groundLevelDelta(): number;
        get junctions(): $List<$JigsawJunction>;
    }
    export class $StructureSpawnOverride extends $Record {
        boundingBox(): $StructureSpawnOverride$BoundingBoxType;
        spawns(): $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
        static CODEC: $Codec<$StructureSpawnOverride>;
        constructor(arg0: $StructureSpawnOverride$BoundingBoxType_, arg1: $WeightedRandomList<$MobSpawnSettings$SpawnerData>);
    }
    /**
     * Values that may be interpreted as {@link $StructureSpawnOverride}.
     */
    export type $StructureSpawnOverride_ = { spawns?: $WeightedRandomList<$MobSpawnSettings$SpawnerData>, boundingBox?: $StructureSpawnOverride$BoundingBoxType_,  } | [spawns?: $WeightedRandomList<$MobSpawnSettings$SpawnerData>, boundingBox?: $StructureSpawnOverride$BoundingBoxType_, ];
    export class $BuiltinStructures {
        static MINESHAFT_MESA: $ResourceKey<$Structure>;
        static STRONGHOLD: $ResourceKey<$Structure>;
        static MINESHAFT: $ResourceKey<$Structure>;
        static VILLAGE_SAVANNA: $ResourceKey<$Structure>;
        static RUINED_PORTAL_MOUNTAIN: $ResourceKey<$Structure>;
        static PILLAGER_OUTPOST: $ResourceKey<$Structure>;
        static SWAMP_HUT: $ResourceKey<$Structure>;
        static FORTRESS: $ResourceKey<$Structure>;
        static VILLAGE_SNOWY: $ResourceKey<$Structure>;
        static RUINED_PORTAL_NETHER: $ResourceKey<$Structure>;
        static END_CITY: $ResourceKey<$Structure>;
        static RUINED_PORTAL_STANDARD: $ResourceKey<$Structure>;
        static VILLAGE_DESERT: $ResourceKey<$Structure>;
        static WOODLAND_MANSION: $ResourceKey<$Structure>;
        static RUINED_PORTAL_SWAMP: $ResourceKey<$Structure>;
        static TRAIL_RUINS: $ResourceKey<$Structure>;
        static OCEAN_RUIN_COLD: $ResourceKey<$Structure>;
        static TRIAL_CHAMBERS: $ResourceKey<$Structure>;
        static NETHER_FOSSIL: $ResourceKey<$Structure>;
        static IGLOO: $ResourceKey<$Structure>;
        static SHIPWRECK: $ResourceKey<$Structure>;
        static OCEAN_RUIN_WARM: $ResourceKey<$Structure>;
        static BASTION_REMNANT: $ResourceKey<$Structure>;
        static JUNGLE_TEMPLE: $ResourceKey<$Structure>;
        static OCEAN_MONUMENT: $ResourceKey<$Structure>;
        static VILLAGE_PLAINS: $ResourceKey<$Structure>;
        static DESERT_PYRAMID: $ResourceKey<$Structure>;
        static RUINED_PORTAL_JUNGLE: $ResourceKey<$Structure>;
        static SHIPWRECK_BEACHED: $ResourceKey<$Structure>;
        static VILLAGE_TAIGA: $ResourceKey<$Structure>;
        static BURIED_TREASURE: $ResourceKey<$Structure>;
        static ANCIENT_CITY: $ResourceKey<$Structure>;
        static RUINED_PORTAL_OCEAN: $ResourceKey<$Structure>;
        static RUINED_PORTAL_DESERT: $ResourceKey<$Structure>;
    }
    export interface $BuiltinStructures {
    }
    export class $StructurePiece$BlockSelector {
        next(random: $RandomSource, x: number, y: number, z: number, wall: boolean): void;
        getNext(): $BlockState;
        constructor();
    }
    export class $Structure$GenerationContext extends $Record {
        seed(): number;
        random(): $WorldgenRandom;
        structureTemplateManager(): $StructureTemplateManager;
        randomState(): $RandomState;
        chunkPos(): $ChunkPos;
        validBiome(): $Predicate<$Holder<$Biome>>;
        registryAccess(): $RegistryAccess;
        chunkGenerator(): $ChunkGenerator;
        heightAccessor(): $LevelHeightAccessor;
        biomeSource(): $BiomeSource;
        constructor(registryAccess: $RegistryAccess, chunkGenerator: $ChunkGenerator, biomeSource: $BiomeSource, randomState: $RandomState, structureTemplateManager: $StructureTemplateManager, seed: number, arg6: $ChunkPos, chunkPos: $LevelHeightAccessor, heightAccessor: $Predicate_<$Holder<$Biome>>);
        constructor(registryAccess: $RegistryAccess, chunkGenerator: $ChunkGenerator, biomeSource: $BiomeSource, randomState: $RandomState, structureTemplateManager: $StructureTemplateManager, random: $WorldgenRandom, seed: number, chunkPos: $ChunkPos, heightAccessor: $LevelHeightAccessor, validBiome: $Predicate_<$Holder<$Biome>>);
    }
    /**
     * Values that may be interpreted as {@link $Structure$GenerationContext}.
     */
    export type $Structure$GenerationContext_ = { validBiome?: $Predicate_<$Holder<$Biome>>, seed?: number, registryAccess?: $RegistryAccess, heightAccessor?: $LevelHeightAccessor, chunkGenerator?: $ChunkGenerator, structureTemplateManager?: $StructureTemplateManager, biomeSource?: $BiomeSource, randomState?: $RandomState, chunkPos?: $ChunkPos, random?: $WorldgenRandom,  } | [validBiome?: $Predicate_<$Holder<$Biome>>, seed?: number, registryAccess?: $RegistryAccess, heightAccessor?: $LevelHeightAccessor, chunkGenerator?: $ChunkGenerator, structureTemplateManager?: $StructureTemplateManager, biomeSource?: $BiomeSource, randomState?: $RandomState, chunkPos?: $ChunkPos, random?: $WorldgenRandom, ];
    export class $StructureStart {
        getMaxReferences(): number;
        isValid(): boolean;
        static loadStaticStart(context: $StructurePieceSerializationContext_, tag: $CompoundTag_, seed: number): $StructureStart;
        addReference(): void;
        getStructure(): $Structure;
        createTag(context: $StructurePieceSerializationContext_, chunkPos: $ChunkPos): $CompoundTag;
        getBoundingBox(): $BoundingBox;
        getReferences(): number;
        placeInChunk(level: $WorldGenLevel, structureManager: $StructureManager, generator: $ChunkGenerator, random: $RandomSource, box: $BoundingBox, chunkPos: $ChunkPos): void;
        getChunkPos(): $ChunkPos;
        canBeReferenced(): boolean;
        getPieces(): $List<$StructurePiece>;
        static INVALID_START: $StructureStart;
        static INVALID_START_ID: string;
        constructor(structure: $Structure_, chunkPos: $ChunkPos, references: number, pieceContainer: $PiecesContainer_);
        get maxReferences(): number;
        get valid(): boolean;
        get structure(): $Structure;
        get boundingBox(): $BoundingBox;
        get references(): number;
        get chunkPos(): $ChunkPos;
        get pieces(): $List<$StructurePiece>;
    }
    export class $StructureSet extends $Record {
        static entry(structure: $Holder_<$Structure>): $StructureSet$StructureSelectionEntry;
        static entry(structure: $Holder_<$Structure>, weight: number): $StructureSet$StructureSelectionEntry;
        structures(): $List<$StructureSet$StructureSelectionEntry>;
        placement(): $StructurePlacement;
        static CODEC: $Codec<$Holder<$StructureSet>>;
        static DIRECT_CODEC: $Codec<$StructureSet>;
        constructor(structure: $Holder_<$Structure>, placement: $StructurePlacement);
        constructor(arg0: $List_<$StructureSet$StructureSelectionEntry_>, arg1: $StructurePlacement);
    }
    /**
     * Values that may be interpreted as {@link $StructureSet}.
     */
    export type $StructureSet_ = RegistryTypes.WorldgenStructureSet | { structures?: $List_<$StructureSet$StructureSelectionEntry_>, placement?: $StructurePlacement,  } | [structures?: $List_<$StructureSet$StructureSelectionEntry_>, placement?: $StructurePlacement, ];
    /**
     * A simple three-dimensional mutable integer bounding box.
     * Note that this box is both mutable, and has an implementation of `hashCode()` and `equals()`.
     * This can be used as `HashMap` keys for example, if the user can ensure the instances themselves are not modified.
     */
    export class $BoundingBox {
        /**
         * Returns a vector describing the dimensions of this bounding box.
         * Note that unlike `getXSpan()`, `getYSpan()`, and `getZSpan()`, the length is interpreted here as the difference in coordinates. So a box over a 1x1x1 area, which still contains a single point, will report length zero.
         */
        getLength(): $Vec3i;
        /**
         * @return `true` if this bounding box intersects the horizontal x/z region described by the min and max parameters.
         */
        intersects(minX: number, minZ: number, maxX: number, maxZ: number): boolean;
        /**
         * @return `true` if `box` intersects this box.
         */
        intersects(box: $BoundingBox): boolean;
        /**
         * @deprecated
         * Translates this box by the given vector, modifying the current box.
         */
        move(vector: $Vec3i): $BoundingBox;
        /**
         * @deprecated
         */
        move(x: number, y: number, z: number): $BoundingBox;
        /**
         * @return The length of this bounding box along the x-axis.
         */
        minX(): number;
        /**
         * @return The length of this bounding box along the x-axis.
         */
        minY(): number;
        /**
         * Create a bounding box with the specified dimensions and rotate it. Used to project a possible new component Bounding Box - to check if it would cut anything already spawned.
         */
        static orientBox(structureMinX: number, structureMinY: number, structureMinZ: number, xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number, facing: $Direction_): $BoundingBox;
        static infinite(): $BoundingBox;
        /**
         * @return The length of this bounding box along the x-axis.
         */
        minZ(): number;
        /**
         * @return The length of this bounding box along the x-axis.
         */
        maxY(): number;
        /**
         * @return The length of this bounding box along the x-axis.
         */
        maxZ(): number;
        moved(x: number, y: number, z: number): $BoundingBox;
        /**
         * @return The center of this bounding box. Note in even-sized dimensions the center position will be offset in the positive direction.
         */
        getCenter(): $BlockPos;
        intersectingChunks(): $Stream<$ChunkPos>;
        /**
         * @return The length of this bounding box along the x-axis.
         */
        maxX(): number;
        /**
         * @return `true` if the bounding box contains the `vector`.
         */
        isInside(vector: $Vec3i): boolean;
        isInside(x: number, y: number, z: number): boolean;
        /**
         * @return The length of this bounding box along the x-axis.
         */
        getYSpan(): number;
        /**
         * @return The length of this bounding box along the x-axis.
         */
        getXSpan(): number;
        /**
         * @return The length of this bounding box along the x-axis.
         */
        getZSpan(): number;
        inflatedBy(x: number, y: number, z: number): $BoundingBox;
        /**
         * Expands this box by a fixed `value` in all directions.
         */
        inflatedBy(value: number): $BoundingBox;
        /**
         * @deprecated
         * Expands this box to be at least large enough to contain `pos`.
         */
        encapsulate(pos: $BlockPos_): $BoundingBox;
        /**
         * @deprecated
         * Expands this box to be at least large enough to contain `box`.
         */
        encapsulate(box: $BoundingBox): $BoundingBox;
        static encapsulatingPositions(boxes: $Iterable_<$BlockPos>): ($BoundingBox) | undefined;
        static fromCorners(first: $Vec3i, second: $Vec3i): $BoundingBox;
        forAllCorners(pos: $Consumer_<$BlockPos>): void;
        static encapsulatingBoxes(boxes: $Iterable_<$BoundingBox>): ($BoundingBox) | undefined;
        static CODEC: $Codec<$BoundingBox>;
        constructor(pos: $BlockPos_);
        constructor(minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number);
        get length(): $Vec3i;
        get center(): $BlockPos;
        get YSpan(): number;
        get XSpan(): number;
        get ZSpan(): number;
    }
}
