import { $ChunkPos, $WorldGenLevel } from "@package/net/minecraft/world/level";
import { $DimensionPadding, $DimensionPadding_, $StructureTemplatePool } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $Logger } from "@package/org/slf4j";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $MobSpawnSettings$SpawnerData } from "@package/net/minecraft/world/level/biome";
import { $StructureProcessor, $LiquidSettings, $StructureTemplateManager, $LiquidSettings_, $StructureTemplate } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Map, $List, $List_ } from "@package/java/util";
import { $PoolAliasBinding } from "@package/net/minecraft/world/level/levelgen/structure/pools/alias";
import { $HeightProvider } from "@package/net/minecraft/world/level/levelgen/heightproviders";
import { $StringRepresentable, $RandomSource, $StringRepresentable$EnumCodec, $Tuple } from "@package/net/minecraft/util";
import { $BlockPos, $BlockPos_, $Holder_, $Direction_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $StructurePieceType_, $PiecesContainer_, $PiecesContainer } from "@package/net/minecraft/world/level/levelgen/structure/pieces";
import { $WeightedRandomList } from "@package/net/minecraft/util/random";
import { $Mirror_, $Rotation_, $Rotation } from "@package/net/minecraft/world/level/block";
import { $Enum, $Record, $Class } from "@package/java/lang";
import { $Structure$StructureSettings_, $StructurePiece, $SinglePieceStructure, $StructurePiece$BlockSelector, $TemplateStructurePiece, $BoundingBox, $ScatteredFeaturePiece, $StructurePieceAccessor, $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Heightmap$Types_, $Heightmap$Types } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/net/minecraft/world/level/levelgen/structure/structures" {
    export class $IglooPieces$IglooPiece extends $TemplateStructurePiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        templateName: string;
        static CAVE_AIR: $BlockState;
        constructor(structureTemplateManager: $StructureTemplateManager, location: $ResourceLocation_, startPos: $BlockPos_, rotation: $Rotation_, down: number);
        constructor(structureTemplateManager: $StructureTemplateManager, tag: $CompoundTag_);
    }
    export class $OceanMonumentPieces$OceanMonumentDoubleXYRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(direction: $Direction_, room: $OceanMonumentPieces$RoomDefinition);
        constructor(tag: $CompoundTag_);
    }
    export class $JigsawStructure extends $Structure {
        static CODEC: $MapCodec<$JigsawStructure>;
        static DEFAULT_LIQUID_SETTINGS: $LiquidSettings;
        static DEFAULT_DIMENSION_PADDING: $DimensionPadding;
        static MAX_DEPTH: number;
        static MIN_DEPTH: number;
        static DIRECT_CODEC: $Codec<$Structure>;
        static MAX_TOTAL_STRUCTURE_RANGE: number;
        constructor(settings: $Structure$StructureSettings_, startPool: $Holder_<$StructureTemplatePool>, maxDepth: number, startHeight: $HeightProvider, useExpansionHack: boolean, projectStartToHeightmap: $Heightmap$Types_);
        constructor(settings: $Structure$StructureSettings_, startPool: $Holder_<$StructureTemplatePool>, startJigsawName: ($ResourceLocation_) | undefined, maxDepth: number, startHeight: $HeightProvider, useExpansionHack: boolean, projectStartToHeightmap: ($Heightmap$Types_) | undefined, maxDistanceFromCenter: number, poolAliases: $List_<$PoolAliasBinding>, dimensionPadding: $DimensionPadding_, liquidSettings: $LiquidSettings_);
        constructor(settings: $Structure$StructureSettings_, startPool: $Holder_<$StructureTemplatePool>, maxDepth: number, startHeight: $HeightProvider, useExpansionHack: boolean);
    }
    export class $OceanMonumentPieces$MonumentBuilding extends $OceanMonumentPieces$OceanMonumentPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        static BIOME_RANGE_CHECK: number;
        constructor(random: $RandomSource, x: number, z: number, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $OceanMonumentPieces$RoomDefinition {
    }
    export class $OceanMonumentPieces$FitDoubleXYRoom implements $OceanMonumentPieces$MonumentRoomFitter {
    }
    export class $OceanMonumentPieces$FitSimpleTopRoom implements $OceanMonumentPieces$MonumentRoomFitter {
    }
    export class $OceanRuinPieces {
        static addPieces(structureTemplateManager: $StructureTemplateManager, pos: $BlockPos_, rotation: $Rotation_, structurePieceAccessor: $StructurePieceAccessor, random: $RandomSource, structure: $OceanRuinStructure): void;
        static WARM_SUSPICIOUS_BLOCK_PROCESSOR: $StructureProcessor;
        static COLD_SUSPICIOUS_BLOCK_PROCESSOR: $StructureProcessor;
        constructor();
    }
    export class $IglooStructure extends $Structure {
        static CODEC: $MapCodec<$IglooStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(settings: $Structure$StructureSettings_);
    }
    export class $StrongholdStructure extends $Structure {
        static CODEC: $MapCodec<$StrongholdStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(settings: $Structure$StructureSettings_);
    }
    export class $OceanRuinStructure extends $Structure {
        largeProbability: number;
        clusterProbability: number;
        static CODEC: $MapCodec<$OceanRuinStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        biomeTemp: $OceanRuinStructure$Type;
        constructor(settings: $Structure$StructureSettings_, biomeTemp: $OceanRuinStructure$Type_, largeProbability: number, clusterProbability: number);
    }
    export class $JungleTemplePiece extends $ScatteredFeaturePiece {
        heightPosition: number;
        boundingBox: $BoundingBox;
        genDepth: number;
        depth: number;
        static CAVE_AIR: $BlockState;
        width: number;
        static WIDTH: number;
        static DEPTH: number;
        height: number;
        constructor(random: $RandomSource, x: number, z: number);
        constructor(tag: $CompoundTag_);
    }
    export class $OceanMonumentPieces$OceanMonumentDoubleZRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(direction: $Direction_, room: $OceanMonumentPieces$RoomDefinition);
        constructor(tag: $CompoundTag_);
    }
    export class $MineshaftStructure extends $Structure {
        static CODEC: $MapCodec<$MineshaftStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(settings: $Structure$StructureSettings_, type: $MineshaftStructure$Type_);
    }
    export class $MineshaftPieces$MineShaftPiece extends $StructurePiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
    }
    export class $RuinedPortalStructure$Setup extends $Record {
        overgrown(): boolean;
        replaceWithBlackstone(): boolean;
        weight(): number;
        airPocketProbability(): number;
        canBeCold(): boolean;
        vines(): boolean;
        placement(): $RuinedPortalPiece$VerticalPlacement;
        mossiness(): number;
        static CODEC: $Codec<$RuinedPortalStructure$Setup>;
        constructor(arg0: $RuinedPortalPiece$VerticalPlacement_, arg1: number, arg2: number, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean, arg7: number);
    }
    /**
     * Values that may be interpreted as {@link $RuinedPortalStructure$Setup}.
     */
    export type $RuinedPortalStructure$Setup_ = { mossiness?: number, replaceWithBlackstone?: boolean, placement?: $RuinedPortalPiece$VerticalPlacement_, airPocketProbability?: number, overgrown?: boolean, canBeCold?: boolean, vines?: boolean, weight?: number,  } | [mossiness?: number, replaceWithBlackstone?: boolean, placement?: $RuinedPortalPiece$VerticalPlacement_, airPocketProbability?: number, overgrown?: boolean, canBeCold?: boolean, vines?: boolean, weight?: number, ];
    export class $WoodlandMansionPieces {
        static generateMansion(structureTemplateManager: $StructureTemplateManager, pos: $BlockPos_, rotation: $Rotation_, pieces: $List_<$WoodlandMansionPieces$WoodlandMansionPiece>, random: $RandomSource): void;
        constructor();
    }
    export class $StrongholdPieces$FillerCorridor extends $StrongholdPieces$StrongholdPiece {
        static findPieceBox(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_): $BoundingBox;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $OceanMonumentPieces$FitSimpleRoom implements $OceanMonumentPieces$MonumentRoomFitter {
    }
    export class $WoodlandMansionPieces$PlacementData {
    }
    export class $MineshaftStructure$Type extends $Enum<$MineshaftStructure$Type> implements $StringRepresentable {
        getName(): string;
        static values(): $MineshaftStructure$Type[];
        static valueOf(arg0: string): $MineshaftStructure$Type;
        getSerializedName(): string;
        static byId(id: number): $MineshaftStructure$Type;
        getWoodState(): $BlockState;
        getFenceState(): $BlockState;
        getPlanksState(): $BlockState;
        getRemappedEnumConstantName(): string;
        static MESA: $MineshaftStructure$Type;
        static CODEC: $Codec<$MineshaftStructure$Type>;
        static NORMAL: $MineshaftStructure$Type;
        get serializedName(): string;
        get woodState(): $BlockState;
        get fenceState(): $BlockState;
        get planksState(): $BlockState;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $MineshaftStructure$Type}.
     */
    export type $MineshaftStructure$Type_ = "normal" | "mesa";
    export class $NetherFortressPieces$BridgeStraight extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $NetherFortressPieces$BridgeStraight;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $NetherFortressPieces$BridgeCrossing extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $NetherFortressPieces$BridgeCrossing;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(tag: $CompoundTag_);
        constructor(type: $StructurePieceType_, tag: $CompoundTag_);
        constructor(x: number, z: number, orientation: $Direction_);
        constructor(genDepth: number, box: $BoundingBox, orientation: $Direction_);
    }
    export class $EndCityPieces {
        static addPiece(structureTemplateManager: $StructureTemplateManager, piece: $EndCityPieces$EndCityPiece, startPos: $BlockPos_, name: string, rotation: $Rotation_, overwrite: boolean): $EndCityPieces$EndCityPiece;
        static recursiveChildren(structureTemplateManager: $StructureTemplateManager, sectionGenerator: $EndCityPieces$SectionGenerator, counter: number, piece: $EndCityPieces$EndCityPiece, startPos: $BlockPos_, pieces: $List_<$StructurePiece>, random: $RandomSource): boolean;
        static startHouseTower(structureTemplateManager: $StructureTemplateManager, startPos: $BlockPos_, rotation: $Rotation_, pieces: $List_<$StructurePiece>, random: $RandomSource): void;
        static addHelper(pieces: $List_<$StructurePiece>, piece: $EndCityPieces$EndCityPiece): $EndCityPieces$EndCityPiece;
        static TOWER_GENERATOR: $EndCityPieces$SectionGenerator;
        static HOUSE_TOWER_GENERATOR: $EndCityPieces$SectionGenerator;
        static TOWER_BRIDGE_GENERATOR: $EndCityPieces$SectionGenerator;
        static TOWER_BRIDGES: $List<$Tuple<$Rotation, $BlockPos>>;
        static FAT_TOWER_GENERATOR: $EndCityPieces$SectionGenerator;
        static FAT_TOWER_BRIDGES: $List<$Tuple<$Rotation, $BlockPos>>;
        constructor();
    }
    export class $RuinedPortalPiece$Properties {
        overgrown: boolean;
        static CODEC: $Codec<$RuinedPortalPiece$Properties>;
        replaceWithBlackstone: boolean;
        mossiness: number;
        vines: boolean;
        cold: boolean;
        airPocket: boolean;
        constructor();
        constructor(cold: boolean, mossiness: number, airPocket: boolean, overgrown: boolean, vines: boolean, replaceWithBlackstone: boolean);
    }
    export class $RuinedPortalStructure extends $Structure {
        static CODEC: $MapCodec<$RuinedPortalStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(settings: $Structure$StructureSettings_, setups: $List_<$RuinedPortalStructure$Setup_>);
        constructor(settings: $Structure$StructureSettings_, setup: $RuinedPortalStructure$Setup_);
    }
    export class $StrongholdPieces$StartPiece extends $StrongholdPieces$StairsDown {
        previousPiece: $StrongholdPieces$PieceWeight;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        portalRoomPiece: $StrongholdPieces$PortalRoom;
        pendingChildren: $List<$StructurePiece>;
        constructor(random: $RandomSource, x: number, z: number);
        constructor(tag: $CompoundTag_);
    }
    export class $NetherFortressPieces {
        static findAndCreateBridgePieceFactory(weight: $NetherFortressPieces$PieceWeight, pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $NetherFortressPieces$NetherBridgePiece;
        static BRIDGE_PIECE_WEIGHTS: $NetherFortressPieces$PieceWeight[];
        static CASTLE_PIECE_WEIGHTS: $NetherFortressPieces$PieceWeight[];
        static MAGIC_START_Y: number;
        constructor();
    }
    export class $NetherFortressPieces$NetherBridgePiece extends $StructurePiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
    }
    export class $MineshaftPieces$MineShaftStairs extends $MineshaftPieces$MineShaftPiece {
        static findStairs(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, direction: $Direction_): $BoundingBox;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, boundingBox: $BoundingBox, orientation: $Direction_, type: $MineshaftStructure$Type_);
        constructor(tag: $CompoundTag_);
    }
    export class $OceanMonumentPieces$OceanMonumentEntryRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(direction: $Direction_, room: $OceanMonumentPieces$RoomDefinition);
        constructor(tag: $CompoundTag_);
    }
    export class $NetherFortressStructure extends $Structure {
        static FORTRESS_ENEMIES: $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
        static CODEC: $MapCodec<$NetherFortressStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(settings: $Structure$StructureSettings_);
    }
    export class $MineshaftPieces$MineShaftCorridor extends $MineshaftPieces$MineShaftPiece {
        fillPillarDownOrChainUp(level: $WorldGenLevel, state: $BlockState_, x: number, y: number, z: number, box: $BoundingBox): void;
        static findCorridorSize(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, direction: $Direction_): $BoundingBox;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, random: $RandomSource, boundingBox: $BoundingBox, orientation: $Direction_, type: $MineshaftStructure$Type_);
        constructor(tag: $CompoundTag_);
    }
    export class $OceanMonumentPieces {
    }
    export class $OceanMonumentPieces$FitDoubleYRoom implements $OceanMonumentPieces$MonumentRoomFitter {
    }
    export class $StrongholdPieces$Straight extends $StrongholdPieces$StrongholdPiece {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, direction: $Direction_, genDepth: number): $StrongholdPieces$Straight;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $StrongholdPieces$StrongholdPiece$SmallDoorType extends $Enum<$StrongholdPieces$StrongholdPiece$SmallDoorType> {
    }
    /**
     * Values that may be interpreted as {@link $StrongholdPieces$StrongholdPiece$SmallDoorType}.
     */
    export type $StrongholdPieces$StrongholdPiece$SmallDoorType_ = "opening" | "wood_door" | "grates" | "iron_door";
    export class $NetherFortressPieces$CastleCorridorTBalconyPiece extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $NetherFortressPieces$CastleCorridorTBalconyPiece;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $NetherFortressPieces$MonsterThrone extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, x: number, y: number, z: number, genDepth: number, orientation: $Direction_): $NetherFortressPieces$MonsterThrone;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $NetherFortressPieces$CastleSmallCorridorCrossingPiece extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $NetherFortressPieces$CastleSmallCorridorCrossingPiece;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $WoodlandMansionPieces$FloorRoomCollection {
    }
    export class $IglooPieces {
        static addPieces(structureTemplateManager: $StructureTemplateManager, startPos: $BlockPos_, rotation: $Rotation_, pieces: $StructurePieceAccessor, random: $RandomSource): void;
        static OFFSETS: $Map<$ResourceLocation, $BlockPos>;
        static PIVOTS: $Map<$ResourceLocation, $BlockPos>;
        static STRUCTURE_LOCATION_IGLOO: $ResourceLocation;
        static GENERATION_HEIGHT: number;
        constructor();
    }
    export class $EndCityPieces$SectionGenerator {
    }
    export interface $EndCityPieces$SectionGenerator {
    }
    export class $NetherFortressPieces$CastleSmallCorridorLeftTurnPiece extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $NetherFortressPieces$CastleSmallCorridorLeftTurnPiece;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $StrongholdPieces$PrisonHall extends $StrongholdPieces$StrongholdPiece {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $StrongholdPieces$PrisonHall;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        static WIDTH: number;
        static HEIGHT: number;
        static DEPTH: number;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $NetherFossilStructure extends $Structure {
        static CODEC: $MapCodec<$NetherFossilStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        height: $HeightProvider;
        constructor(settings: $Structure$StructureSettings_, height: $HeightProvider);
    }
    export class $OceanMonumentPieces$OceanMonumentDoubleYZRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(direction: $Direction_, room: $OceanMonumentPieces$RoomDefinition);
        constructor(tag: $CompoundTag_);
    }
    export class $OceanMonumentPieces$OceanMonumentPiece extends $StructurePiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
    }
    export class $OceanMonumentPieces$OceanMonumentWingRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(direction: $Direction_, box: $BoundingBox, flag: number);
        constructor(tag: $CompoundTag_);
    }
    export class $MineshaftPieces$MineShaftCrossing extends $MineshaftPieces$MineShaftPiece {
        static findCrossing(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, direction: $Direction_): $BoundingBox;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, boundingBox: $BoundingBox, direction: $Direction_ | null, type: $MineshaftStructure$Type_);
        constructor(tag: $CompoundTag_);
    }
    export class $BuriedTreasurePieces$BuriedTreasurePiece extends $StructurePiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(pos: $BlockPos_);
        constructor(tag: $CompoundTag_);
    }
    export class $NetherFortressPieces$CastleSmallCorridorRightTurnPiece extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $NetherFortressPieces$CastleSmallCorridorRightTurnPiece;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $StrongholdPieces$ChestCorridor extends $StrongholdPieces$StrongholdPiece {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $StrongholdPieces$ChestCorridor;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $OceanMonumentPieces$FitDoubleYZRoom implements $OceanMonumentPieces$MonumentRoomFitter {
    }
    export class $NetherFortressPieces$StartPiece extends $NetherFortressPieces$BridgeCrossing {
        previousPiece: $NetherFortressPieces$PieceWeight;
        availableCastlePieces: $List<$NetherFortressPieces$PieceWeight>;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        availableBridgePieces: $List<$NetherFortressPieces$PieceWeight>;
        pendingChildren: $List<$StructurePiece>;
        constructor(random: $RandomSource, x: number, z: number);
        constructor(tag: $CompoundTag_);
    }
    export class $OceanMonumentPieces$OceanMonumentSimpleTopRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(direction: $Direction_, room: $OceanMonumentPieces$RoomDefinition);
        constructor(tag: $CompoundTag_);
    }
    export class $StrongholdPieces$StairsDown extends $StrongholdPieces$StrongholdPiece {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $StrongholdPieces$StairsDown;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(tag: $CompoundTag_);
        constructor(type: $StructurePieceType_, tag: $CompoundTag_);
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(type: $StructurePieceType_, genDepth: number, x: number, z: number, orientation: $Direction_);
    }
    export class $OceanMonumentPieces$FitDoubleXRoom implements $OceanMonumentPieces$MonumentRoomFitter {
    }
    export class $OceanMonumentPieces$MonumentRoomFitter {
    }
    export interface $OceanMonumentPieces$MonumentRoomFitter {
    }
    export class $NetherFortressPieces$CastleStalkRoom extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $NetherFortressPieces$CastleStalkRoom;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $ShipwreckStructure extends $Structure {
        static CODEC: $MapCodec<$ShipwreckStructure>;
        isBeached: boolean;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(settings: $Structure$StructureSettings_, isBeached: boolean);
    }
    export class $NetherFortressPieces$CastleEntrance extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $NetherFortressPieces$CastleEntrance;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $MineshaftPieces$MineShaftRoom extends $MineshaftPieces$MineShaftPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, random: $RandomSource, x: number, z: number, type: $MineshaftStructure$Type_);
        constructor(tag: $CompoundTag_);
    }
    export class $WoodlandMansionPieces$MansionGrid {
    }
    export class $WoodlandMansionPieces$MansionPiecePlacer {
    }
    export class $BuriedTreasureStructure extends $Structure {
        static CODEC: $MapCodec<$BuriedTreasureStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(settings: $Structure$StructureSettings_);
    }
    export class $StrongholdPieces$StraightStairsDown extends $StrongholdPieces$StrongholdPiece {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $StrongholdPieces$StraightStairsDown;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $WoodlandMansionPieces$SimpleGrid {
    }
    export class $NetherFortressPieces$CastleSmallCorridorPiece extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $NetherFortressPieces$CastleSmallCorridorPiece;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $EndCityPieces$EndCityPiece extends $TemplateStructurePiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        templateName: string;
        static CAVE_AIR: $BlockState;
        constructor(structureTemplateManager: $StructureTemplateManager, name: string, startPos: $BlockPos_, rotation: $Rotation_, overwrite: boolean);
        constructor(structureTemplateManager: $StructureTemplateManager, tag: $CompoundTag_);
    }
    export class $OceanRuinPieces$OceanRuinPiece extends $TemplateStructurePiece {
        static create(structureTemplateManager: $StructureTemplateManager, tag: $CompoundTag_): $OceanRuinPieces$OceanRuinPiece;
        boundingBox: $BoundingBox;
        genDepth: number;
        templateName: string;
        static CAVE_AIR: $BlockState;
        constructor(structureTemplateManager: $StructureTemplateManager, location: $ResourceLocation_, pos: $BlockPos_, rotation: $Rotation_, integrity: number, biomeType: $OceanRuinStructure$Type_, isLarge: boolean);
    }
    export class $OceanMonumentPieces$FitDoubleZRoom implements $OceanMonumentPieces$MonumentRoomFitter {
    }
    export class $StrongholdPieces$Turn extends $StrongholdPieces$StrongholdPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        static WIDTH: number;
        static HEIGHT: number;
        static DEPTH: number;
        constructor(arg0: $StructurePieceType_, arg1: number, arg2: $BoundingBox);
        constructor(arg0: $StructurePieceType_, arg1: $CompoundTag_);
    }
    export class $WoodlandMansionPieces$SecondFloorRoomCollection extends $WoodlandMansionPieces$FloorRoomCollection {
    }
    export class $RuinedPortalPiece$VerticalPlacement extends $Enum<$RuinedPortalPiece$VerticalPlacement> implements $StringRepresentable {
        getName(): string;
        static values(): $RuinedPortalPiece$VerticalPlacement[];
        static valueOf(name: string): $RuinedPortalPiece$VerticalPlacement;
        static byName(name: string): $RuinedPortalPiece$VerticalPlacement;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static UNDERGROUND: $RuinedPortalPiece$VerticalPlacement;
        static ON_LAND_SURFACE: $RuinedPortalPiece$VerticalPlacement;
        static CODEC: $StringRepresentable$EnumCodec<$RuinedPortalPiece$VerticalPlacement>;
        static IN_MOUNTAIN: $RuinedPortalPiece$VerticalPlacement;
        static PARTLY_BURIED: $RuinedPortalPiece$VerticalPlacement;
        static IN_NETHER: $RuinedPortalPiece$VerticalPlacement;
        static ON_OCEAN_FLOOR: $RuinedPortalPiece$VerticalPlacement;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $RuinedPortalPiece$VerticalPlacement}.
     */
    export type $RuinedPortalPiece$VerticalPlacement_ = "on_land_surface" | "partly_buried" | "on_ocean_floor" | "in_mountain" | "underground" | "in_nether";
    export class $SwampHutPiece extends $ScatteredFeaturePiece {
        heightPosition: number;
        boundingBox: $BoundingBox;
        genDepth: number;
        depth: number;
        static CAVE_AIR: $BlockState;
        width: number;
        height: number;
        constructor(random: $RandomSource, x: number, z: number);
        constructor(tag: $CompoundTag_);
    }
    export class $StrongholdPieces$RoomCrossing extends $StrongholdPieces$StrongholdPiece {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $StrongholdPieces$RoomCrossing;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        static WIDTH: number;
        static HEIGHT: number;
        type: number;
        static DEPTH: number;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $StrongholdPieces$LeftTurn extends $StrongholdPieces$Turn {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $StrongholdPieces$LeftTurn;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        static WIDTH: number;
        static HEIGHT: number;
        static DEPTH: number;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $ShipwreckPieces {
        static addRandomPiece(structureTemplateManager: $StructureTemplateManager, pos: $BlockPos_, rotation: $Rotation_, pieces: $StructurePieceAccessor, random: $RandomSource, isBeached: boolean): $ShipwreckPieces$ShipwreckPiece;
        static MARKERS_TO_LOOT: $Map<string, $ResourceKey<$LootTable>>;
        static PIVOT: $BlockPos;
        constructor();
    }
    export class $StrongholdPieces$Library extends $StrongholdPieces$StrongholdPiece {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $StrongholdPieces$Library;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        static WIDTH: number;
        static HEIGHT: number;
        static DEPTH: number;
        static TALL_HEIGHT: number;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $NetherFossilPieces {
        static addPieces(structureManager: $StructureTemplateManager, pieces: $StructurePieceAccessor, random: $RandomSource, pos: $BlockPos_): void;
        constructor();
    }
    export class $OceanMonumentPieces$OceanMonumentDoubleXRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(direction: $Direction_, room: $OceanMonumentPieces$RoomDefinition);
        constructor(tag: $CompoundTag_);
    }
    export class $JungleTempleStructure extends $SinglePieceStructure {
        static CODEC: $MapCodec<$JungleTempleStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(arg0: $Structure$StructureSettings_);
    }
    export class $WoodlandMansionStructure extends $Structure {
        static CODEC: $MapCodec<$WoodlandMansionStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(settings: $Structure$StructureSettings_);
    }
    export class $BuriedTreasurePieces {
        constructor();
    }
    export class $MineshaftPieces {
        static generateAndAddPiece(piece: $StructurePiece, pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, direction: $Direction_, genDepth: number): $MineshaftPieces$MineShaftPiece;
        static MAGIC_START_Y: number;
        static LOGGER: $Logger;
        constructor();
    }
    export class $OceanMonumentPieces$OceanMonumentCoreRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(direction: $Direction_, room: $OceanMonumentPieces$RoomDefinition);
        constructor(tag: $CompoundTag_);
    }
    export class $SwampHutStructure extends $Structure {
        static CODEC: $MapCodec<$SwampHutStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(settings: $Structure$StructureSettings_);
    }
    export class $NetherFortressPieces$PieceWeight {
    }
    export class $StrongholdPieces$RightTurn extends $StrongholdPieces$Turn {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $StrongholdPieces$RightTurn;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        static WIDTH: number;
        static HEIGHT: number;
        static DEPTH: number;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $OceanRuinStructure$Type extends $Enum<$OceanRuinStructure$Type> implements $StringRepresentable {
        getName(): string;
        static values(): $OceanRuinStructure$Type[];
        static valueOf(arg0: string): $OceanRuinStructure$Type;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$OceanRuinStructure$Type>;
        static COLD: $OceanRuinStructure$Type;
        static WARM: $OceanRuinStructure$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $OceanRuinStructure$Type}.
     */
    export type $OceanRuinStructure$Type_ = "warm" | "cold";
    export class $DesertPyramidStructure extends $SinglePieceStructure {
        static CODEC: $MapCodec<$DesertPyramidStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(settings: $Structure$StructureSettings_);
    }
    export class $StrongholdPieces {
        static generateAndAddPiece(piece: $StrongholdPieces$StartPiece, pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, direction: $Direction_ | null, genDepth: number): $StructurePiece;
        static resetPieces(): void;
        static MAGIC_START_Y: number;
        static imposedPiece: $Class<$StrongholdPieces$StrongholdPiece>;
        static SMOOTH_STONE_SELECTOR: $StrongholdPieces$SmoothStoneSelector;
        constructor();
    }
    export class $NetherFortressPieces$BridgeEndFiller extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $NetherFortressPieces$BridgeEndFiller;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $ShipwreckPieces$ShipwreckPiece extends $TemplateStructurePiece {
        calculateBeachedPosition(maxHeight: number, random: $RandomSource): number;
        adjustPositionHeight(height: number): void;
        isTooBigToFitInWorldGenRegion(): boolean;
        boundingBox: $BoundingBox;
        genDepth: number;
        templateName: string;
        static CAVE_AIR: $BlockState;
        constructor(structureTemplateManager: $StructureTemplateManager, location: $ResourceLocation_, pos: $BlockPos_, rotation: $Rotation_, isBeached: boolean);
        constructor(structureTemplateManager: $StructureTemplateManager, tag: $CompoundTag_);
        get tooBigToFitInWorldGenRegion(): boolean;
    }
    export class $WoodlandMansionPieces$WoodlandMansionPiece extends $TemplateStructurePiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        templateName: string;
        static CAVE_AIR: $BlockState;
        constructor(structureTemplateManager: $StructureTemplateManager, tag: $CompoundTag_);
        constructor(structureTemplateManager: $StructureTemplateManager, templateName: string, templatePosition: $BlockPos_, rotation: $Rotation_, mirror: $Mirror_);
        constructor(structureTemplateManager: $StructureTemplateManager, templateName: string, templatePosition: $BlockPos_, rotation: $Rotation_);
    }
    export class $WoodlandMansionPieces$FirstFloorRoomCollection extends $WoodlandMansionPieces$FloorRoomCollection {
    }
    export class $NetherFossilPieces$NetherFossilPiece extends $TemplateStructurePiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        templateName: string;
        static CAVE_AIR: $BlockState;
        constructor(structureManager: $StructureTemplateManager, location: $ResourceLocation_, pos: $BlockPos_, rotation: $Rotation_);
        constructor(structureManager: $StructureTemplateManager, tag: $CompoundTag_);
    }
    export class $NetherFortressPieces$CastleCorridorStairsPiece extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $NetherFortressPieces$CastleCorridorStairsPiece;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $OceanMonumentStructure extends $Structure {
        static regeneratePiecesAfterLoad(chunkPos: $ChunkPos, seed: number, arg2: $PiecesContainer_): $PiecesContainer;
        static CODEC: $MapCodec<$OceanMonumentStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(settings: $Structure$StructureSettings_);
    }
    export class $OceanMonumentPieces$OceanMonumentPenthouse extends $OceanMonumentPieces$OceanMonumentPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(direction: $Direction_, box: $BoundingBox);
        constructor(tag: $CompoundTag_);
    }
    export class $StrongholdPieces$PortalRoom extends $StrongholdPieces$StrongholdPiece {
        static createPiece(pieces: $StructurePieceAccessor, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $StrongholdPieces$PortalRoom;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        static WIDTH: number;
        static HEIGHT: number;
        static DEPTH: number;
        constructor(genDepth: number, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $NetherFortressPieces$StairsRoom extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, x: number, y: number, z: number, genDepth: number, orientation: $Direction_): $NetherFortressPieces$StairsRoom;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $StrongholdPieces$PieceWeight {
    }
    export class $OceanMonumentPieces$OceanMonumentSimpleRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(direction: $Direction_, room: $OceanMonumentPieces$RoomDefinition, random: $RandomSource);
        constructor(tag: $CompoundTag_);
    }
    export class $StrongholdPieces$StrongholdPiece extends $StructurePiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
    }
    export class $OceanMonumentPieces$OceanMonumentDoubleYRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(direction: $Direction_, room: $OceanMonumentPieces$RoomDefinition);
        constructor(tag: $CompoundTag_);
    }
    export class $StrongholdPieces$FiveCrossing extends $StrongholdPieces$StrongholdPiece {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $StrongholdPieces$FiveCrossing;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        static WIDTH: number;
        static HEIGHT: number;
        static DEPTH: number;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $StrongholdPieces$SmoothStoneSelector extends $StructurePiece$BlockSelector {
    }
    export class $WoodlandMansionPieces$ThirdFloorRoomCollection extends $WoodlandMansionPieces$SecondFloorRoomCollection {
    }
    export class $JungleTemplePiece$MossStoneSelector extends $StructurePiece$BlockSelector {
    }
    export class $NetherFortressPieces$RoomCrossing extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $NetherFortressPieces$RoomCrossing;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $DesertPyramidPiece extends $ScatteredFeaturePiece {
        getRandomCollapsedRoofPos(): $BlockPos;
        getPotentialSuspiciousSandWorldPositions(): $List<$BlockPos>;
        heightPosition: number;
        boundingBox: $BoundingBox;
        genDepth: number;
        depth: number;
        static CAVE_AIR: $BlockState;
        width: number;
        static WIDTH: number;
        static DEPTH: number;
        height: number;
        constructor(random: $RandomSource, x: number, z: number);
        constructor(tag: $CompoundTag_);
        get randomCollapsedRoofPos(): $BlockPos;
        get potentialSuspiciousSandWorldPositions(): $List<$BlockPos>;
    }
    export class $RuinedPortalPiece extends $TemplateStructurePiece {
        static getHeightMapType(verticalPlacement: $RuinedPortalPiece$VerticalPlacement_): $Heightmap$Types;
        boundingBox: $BoundingBox;
        genDepth: number;
        templateName: string;
        static CAVE_AIR: $BlockState;
        constructor(structureTemplateManager: $StructureTemplateManager, templatePosition: $BlockPos_, verticalPlacement: $RuinedPortalPiece$VerticalPlacement_, properties: $RuinedPortalPiece$Properties, location: $ResourceLocation_, template: $StructureTemplate, rotation: $Rotation_, mirror: $Mirror_, pivotPos: $BlockPos_);
        constructor(structureTemplateManager: $StructureTemplateManager, tag: $CompoundTag_);
    }
    export class $EndCityStructure extends $Structure {
        static CODEC: $MapCodec<$EndCityStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(settings: $Structure$StructureSettings_);
    }
}
