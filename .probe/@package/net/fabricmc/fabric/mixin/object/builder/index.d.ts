import { $Function_, $Function, $ToIntFunction } from "@package/java/util/function";
import { $NoteBlockInstrument } from "@package/net/minecraft/world/level/block/state/properties";
import { $PushReaction, $MapColor } from "@package/net/minecraft/world/level/material";
import { $BlockBehaviour$StateArgumentPredicate, $BlockBehaviour$OffsetFunction_, $BlockBehaviour$Properties, $BlockState, $BlockBehaviour$OffsetFunction, $BlockBehaviour$StatePredicate } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $EntityType, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $SoundType } from "@package/net/minecraft/world/level/block";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $AttributeSupplier } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Map } from "@package/java/util";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/fabricmc/fabric/mixin/object/builder" {
    export class $DefaultAttributeRegistryAccessor {
        static getRegistry(): $Map<$EntityType<$LivingEntity>, $AttributeSupplier>;
        static get registry(): $Map<$EntityType<$LivingEntity>, $AttributeSupplier>;
    }
    export interface $DefaultAttributeRegistryAccessor {
    }
    export class $AbstractBlockSettingsAccessor {
    }
    export interface $AbstractBlockSettingsAccessor {
        getLiquid(): boolean;
        getExplosionResistance(): number;
        setRequiresCorrectToolForDrops(arg0: boolean): void;
        isRequiresCorrectToolForDrops(): boolean;
        getDestroyTime(): number;
        getIsValidSpawn(): $BlockBehaviour$StateArgumentPredicate<$EntityType<never>>;
        getIsSuffocating(): $BlockBehaviour$StatePredicate;
        getCanOcclude(): boolean;
        getIsViewBlocking(): $BlockBehaviour$StatePredicate;
        getDynamicShape(): boolean;
        getLuminance(): $ToIntFunction<$BlockState>;
        setForceSolidOn(arg0: boolean): void;
        setReplaceable(arg0: boolean): void;
        getHasPostProcess(): $BlockBehaviour$StatePredicate;
        getReplaceable(): boolean;
        getOffsetFunction(): $BlockBehaviour$OffsetFunction;
        getForceSolidOn(): boolean;
        setMapColor(arg0: $Function_<$BlockState, $MapColor>): void;
        getForceSolidOff(): boolean;
        setOffsetFunction(arg0: $BlockBehaviour$OffsetFunction_): void;
        getInstrument(): $NoteBlockInstrument;
        setIgnitedByLava(arg0: boolean): void;
        getIgnitedByLava(): boolean;
        getPushReaction(): $PushReaction;
        setHasCollision(arg0: boolean): void;
        setForceSolidOff(arg0: boolean): void;
        setCanOcclude(arg0: boolean): void;
        setDynamicShape(arg0: boolean): void;
        setDrops(arg0: $ResourceKey_<$LootTable>): void;
        setLiquid(arg0: boolean): void;
        getIsAir(): boolean;
        setIsAir(arg0: boolean): void;
        getIsRandomlyTicking(): boolean;
        getSpawnTerrainParticles(): boolean;
        setIsRandomlyTicking(arg0: boolean): void;
        setSpawnTerrainParticles(arg0: boolean): void;
        setRequiredFeatures(arg0: $FeatureFlagSet): void;
        getIsRedstoneConductor(): $BlockBehaviour$StatePredicate;
        getRequiredFeatures(): $FeatureFlagSet;
        getEmissiveRendering(): $BlockBehaviour$StatePredicate;
        getSpeedFactor(): number;
        getFriction(): number;
        getJumpFactor(): number;
        getSoundType(): $SoundType;
        getMapColor(): $Function<$BlockState, $MapColor>;
        getHasCollision(): boolean;
        getDrops(): $ResourceKey<$LootTable>;
        get explosionResistance(): number;
        get destroyTime(): number;
        get isValidSpawn(): $BlockBehaviour$StateArgumentPredicate<$EntityType<never>>;
        get isSuffocating(): $BlockBehaviour$StatePredicate;
        get isViewBlocking(): $BlockBehaviour$StatePredicate;
        get luminance(): $ToIntFunction<$BlockState>;
        get hasPostProcess(): $BlockBehaviour$StatePredicate;
        get instrument(): $NoteBlockInstrument;
        get pushReaction(): $PushReaction;
        get isRedstoneConductor(): $BlockBehaviour$StatePredicate;
        get emissiveRendering(): $BlockBehaviour$StatePredicate;
        get speedFactor(): number;
        get friction(): number;
        get jumpFactor(): number;
        get soundType(): $SoundType;
    }
    export class $AbstractBlockAccessor {
    }
    export interface $AbstractBlockAccessor {
        getProperties(): $BlockBehaviour$Properties;
        get properties(): $BlockBehaviour$Properties;
    }
    /**
     * Values that may be interpreted as {@link $AbstractBlockAccessor}.
     */
    export type $AbstractBlockAccessor_ = (() => $BlockBehaviour$Properties);
}
