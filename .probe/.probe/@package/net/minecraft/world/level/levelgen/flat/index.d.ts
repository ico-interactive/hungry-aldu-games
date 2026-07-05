import { $Codec } from "@package/com/mojang/serialization";
import { $Item } from "@package/net/minecraft/world/item";
import { $Biome_, $BiomeGenerationSettings, $Biome } from "@package/net/minecraft/world/level/biome";
import { $List, $List_ } from "@package/java/util";
import { $PlacedFeature, $PlacedFeature_ } from "@package/net/minecraft/world/level/levelgen/placement";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $Holder_, $HolderSet, $HolderSet_, $Holder, $HolderGetter } from "@package/net/minecraft/core";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $StructureSet_, $StructureSet } from "@package/net/minecraft/world/level/levelgen/structure";

declare module "@package/net/minecraft/world/level/levelgen/flat" {
    export class $FlatLevelGeneratorPresets$Bootstrap {
    }
    export interface $FlatLevelGeneratorPreset extends RegistryMarked<RegistryTypes.WorldgenFlatLevelGeneratorPresetTag, RegistryTypes.WorldgenFlatLevelGeneratorPreset> {}
    export class $FlatLevelGeneratorSettings {
        /**
         * Return the biome used on this preset.
         */
        getBiome(): $Holder<$Biome>;
        static getDefault(biomes: $HolderGetter<$Biome_>, structureSetGetter: $HolderGetter<$StructureSet_>, placedFeatureGetter: $HolderGetter<$PlacedFeature_>): $FlatLevelGeneratorSettings;
        adjustGenerationSettings(biome: $Holder_<$Biome>): $BiomeGenerationSettings;
        /**
         * Return the list of layers on this preset.
         */
        getLayers(): $List<$BlockState>;
        updateLayers(): void;
        setDecoration(): void;
        setAddLakes(): void;
        static getDefaultBiome(biomes: $HolderGetter<$Biome_>): $Holder<$Biome>;
        structureOverrides(): ($HolderSet<$StructureSet>) | undefined;
        /**
         * Return the list of layers on this preset.
         */
        getLayersInfo(): $List<$FlatLayerInfo>;
        static createLakesList(placedFEatureGetter: $HolderGetter<$PlacedFeature_>): $List<$Holder<$PlacedFeature>>;
        withBiomeAndLayers(layerInfos: $List_<$FlatLayerInfo>, structureSets: ($HolderSet_<$StructureSet>) | undefined, biome: $Holder_<$Biome>): $FlatLevelGeneratorSettings;
        static CODEC: $Codec<$FlatLevelGeneratorSettings>;
        constructor(structureOverrides: ($HolderSet_<$StructureSet>) | undefined, biome: $Holder_<$Biome>, lakes: $List_<$Holder_<$PlacedFeature>>);
        get biome(): $Holder<$Biome>;
        get layers(): $List<$BlockState>;
        get layersInfo(): $List<$FlatLayerInfo>;
    }
    export class $FlatLevelGeneratorPreset extends $Record {
        settings(): $FlatLevelGeneratorSettings;
        displayItem(): $Holder<$Item>;
        static CODEC: $Codec<$Holder<$FlatLevelGeneratorPreset>>;
        static DIRECT_CODEC: $Codec<$FlatLevelGeneratorPreset>;
        constructor(arg0: $Holder_<$Item>, arg1: $FlatLevelGeneratorSettings);
    }
    /**
     * Values that may be interpreted as {@link $FlatLevelGeneratorPreset}.
     */
    export type $FlatLevelGeneratorPreset_ = RegistryTypes.WorldgenFlatLevelGeneratorPreset | { displayItem?: $Holder_<$Item>, settings?: $FlatLevelGeneratorSettings,  } | [displayItem?: $Holder_<$Item>, settings?: $FlatLevelGeneratorSettings, ];
    export class $FlatLevelGeneratorPresets {
        static bootstrap(context: $BootstrapContext<$FlatLevelGeneratorPreset_>): void;
        static OVERWORLD: $ResourceKey<$FlatLevelGeneratorPreset>;
        static WATER_WORLD: $ResourceKey<$FlatLevelGeneratorPreset>;
        static THE_VOID: $ResourceKey<$FlatLevelGeneratorPreset>;
        static CLASSIC_FLAT: $ResourceKey<$FlatLevelGeneratorPreset>;
        static BOTTOMLESS_PIT: $ResourceKey<$FlatLevelGeneratorPreset>;
        static DESERT: $ResourceKey<$FlatLevelGeneratorPreset>;
        static REDSTONE_READY: $ResourceKey<$FlatLevelGeneratorPreset>;
        static TUNNELERS_DREAM: $ResourceKey<$FlatLevelGeneratorPreset>;
        static SNOWY_KINGDOM: $ResourceKey<$FlatLevelGeneratorPreset>;
        constructor();
    }
    export class $FlatLayerInfo {
        /**
         * Return the amount of layers for this set of layers.
         */
        getHeight(): number;
        getBlockState(): $BlockState;
        static CODEC: $Codec<$FlatLayerInfo>;
        constructor(height: number, block: $Block_);
        get height(): number;
        get blockState(): $BlockState;
    }
}
