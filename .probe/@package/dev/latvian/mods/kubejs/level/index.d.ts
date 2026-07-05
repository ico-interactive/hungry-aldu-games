import { $Explosion, $Level$ExplosionInteraction, $Level$ExplosionInteraction_, $Level, $ExplosionDamageCalculator, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Fireworks_ } from "@package/net/minecraft/world/item/component";
import { $EntityType_, $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $List, $Map_, $List_, $Map } from "@package/java/util";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $LevelTickEvent$Post } from "@package/net/neoforged/neoforge/event/tick";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockPos, $Holder_, $Holder, $BlockPos_, $Direction_, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $BlockProviderKJS, $InventoryKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Record, $Object } from "@package/java/lang";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $ExplosionEvent$Detonate, $LevelEvent$Unload, $ExplosionEvent$Start, $LevelEvent$Load } from "@package/net/neoforged/neoforge/event/level";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";
export * as ruletest from "@package/dev/latvian/mods/kubejs/level/ruletest";

declare module "@package/dev/latvian/mods/kubejs/level" {
    export class $ExplosionKubeEvent$After extends $ExplosionKubeEvent {
        /**
         * Remove all knockback from all affected *players*.
         */
        removeKnockback(): void;
        /**
         * Gets a list of all entities affected by the explosion.
         */
        getAffectedEntities(): $EntityArrayList;
        /**
         * Gets a list of all blocks affected by the explosion.
         */
        getAffectedBlocks(): $List<$LevelBlock>;
        /**
         * Remove all entities from the list of affected entities.
         */
        removeAllAffectedEntities(): void;
        /**
         * Remove all blocks from the list of affected blocks.
         */
        removeAllAffectedBlocks(): void;
        /**
         * Remove an entity from the list of affected entities.
         */
        removeAffectedEntity(entity: $Entity): void;
        /**
         * Remove a block from the list of affected blocks.
         */
        removeAffectedBlock(block: $LevelBlock): void;
        constructor(level: $Level_, explosion: $Explosion, affectedEntities: $List_<$Entity>);
        get affectedEntities(): $EntityArrayList;
        get affectedBlocks(): $List<$LevelBlock>;
    }
    export class $WrappedSpawner extends $Record {
        static of(spawner: $Either<$BlockEntity, $Entity>): $WrappedSpawner;
        block(): $LevelBlock;
        entity(): $Entity;
        isWorldgen(): boolean;
        constructor(entity: $Entity, block: $LevelBlock);
        get worldgen(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $WrappedSpawner}.
     */
    export type $WrappedSpawner_ = { block?: $LevelBlock, entity?: $Entity,  } | [block?: $LevelBlock, entity?: $Entity, ];
    export class $KubeLevelEvent {
    }
    export interface $KubeLevelEvent extends $KubeEvent {
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    /**
     * Values that may be interpreted as {@link $KubeLevelEvent}.
     */
    export type $KubeLevelEvent_ = (() => $Level_);
    export class $CachedLevelBlock implements $LevelBlock {
        clearCache(): void;
        getLevel(): $Level;
        setBlockState(state: $BlockState_, flags: number): void;
        getEntity(): $BlockEntity;
        getPos(): $BlockPos;
        getBlockState(): $BlockState;
        offset(f: $Direction_, d: number): $LevelBlock;
        offset(x: number, y: number, z: number): $LevelBlock;
        offset(f: $Direction_): $LevelBlock;
        set(block: $Block_, properties: $Map_<never, never>, flags: number): void;
        set(block: $Block_, properties: $Map_<never, never>): void;
        set(block: $Block_): void;
        getProperties(): $Map<string, string>;
        getItem(): $ItemStack;
        getDimension(): $ResourceLocation;
        createEntity(type: $EntityType_<never>): $Entity;
        setEntityData(tag: $CompoundTag_): void;
        getPlayersInRadius(radius: number): $EntityArrayList;
        getPlayersInRadius(): $EntityArrayList;
        getEntityId(): string;
        getBlockLight(): number;
        getCanSeeSky(): boolean;
        spawnLightning(): void;
        spawnLightning(effectOnly: boolean, player: $ServerPlayer): void;
        spawnLightning(effectOnly: boolean): void;
        spawnFireworks(fireworks: $Fireworks_, lifetime: number): void;
        popItemFromFace(item: $ItemStack_, dir: $Direction_): void;
        toBlockStateString(): string;
        mergeEntityData(tag: $CompoundTag_): void;
        getSkyLight(): number;
        setBlockState(state: $BlockState_): void;
        canSeeSkyFromBelowWater(): boolean;
        getCenterX(): number;
        getCenterZ(): number;
        explode(properties: $ExplosionProperties_): $Explosion;
        getY(): number;
        getX(): number;
        getZ(): number;
        getEntityData(): $CompoundTag;
        getDimensionKey(): $ResourceKey<$Level>;
        getBlock(): $Block;
        getDrops(entity: $Entity, heldItem: $ItemStack_): $List<$ItemStack>;
        getDrops(): $List<$ItemStack>;
        getWest(): $LevelBlock;
        getEast(): $LevelBlock;
        getCenterY(): number;
        getLight(): number;
        getUp(): $LevelBlock;
        getBiomeId(): $ResourceLocation;
        popItem(item: $ItemStack_): void;
        getDown(): $LevelBlock;
        getNorth(): $LevelBlock;
        getSouth(): $LevelBlock;
        getInventory(facing: $Direction_): $InventoryKJS;
        getInventory(): $InventoryKJS;
        getTypeData(): $Map<string, $Object>;
        getRegistry(): $Registry<$Block>;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        asHolder(): $Holder<$Block>;
        getId(): string;
        getKey(): $ResourceKey<$Block>;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getIdLocation(): $ResourceLocation;
        getTagKeys(): $List<$TagKey<$Block>>;
        getTags(): $List<$ResourceLocation>;
        hasTag(tag: $ResourceLocation_): boolean;
        getMod(): string;
        minecraftLevel: $Level;
        constructor(w: $Level_, p: $BlockPos_);
        get level(): $Level;
        get entity(): $BlockEntity;
        get pos(): $BlockPos;
        get properties(): $Map<string, string>;
        get item(): $ItemStack;
        get dimension(): $ResourceLocation;
        get entityId(): string;
        get blockLight(): number;
        get canSeeSky(): boolean;
        get skyLight(): number;
        get centerX(): number;
        get centerZ(): number;
        get y(): number;
        get x(): number;
        get z(): number;
        get dimensionKey(): $ResourceKey<$Level>;
        get block(): $Block;
        get west(): $LevelBlock;
        get east(): $LevelBlock;
        get centerY(): number;
        get light(): number;
        get up(): $LevelBlock;
        get biomeId(): $ResourceLocation;
        get down(): $LevelBlock;
        get north(): $LevelBlock;
        get south(): $LevelBlock;
        get typeData(): $Map<string, $Object>;
        get registry(): $Registry<$Block>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get id(): string;
        get key(): $ResourceKey<$Block>;
        get idLocation(): $ResourceLocation;
        get tagKeys(): $List<$TagKey<$Block>>;
        get tags(): $List<$ResourceLocation>;
        get mod(): string;
    }
    export class $ExplosionProperties extends $Record {
        mode(): $Level$ExplosionInteraction;
        source(): $Entity;
        strength(): (number) | undefined;
        largeParticles(): $ParticleOptions;
        smallParticles(): $ParticleOptions;
        explode(level: $Level_, x: number, y: number, z: number): $Explosion;
        damageCalculator(): $ExplosionDamageCalculator;
        explosionSound(): $Holder<$SoundEvent>;
        particles(): (boolean) | undefined;
        damageSource(): $DamageSource;
        causesFire(): (boolean) | undefined;
        constructor(source: $Entity | null, damageSource: $DamageSource_ | null, damageCalculator: $ExplosionDamageCalculator | null, strength: (number) | undefined, causesFire: (boolean) | undefined, mode: $Level$ExplosionInteraction_ | null, particles: (boolean) | undefined, smallParticles: $ParticleOptions_ | null, largeParticles: $ParticleOptions_ | null, explosionSound: $Holder_<$SoundEvent> | null);
    }
    /**
     * Values that may be interpreted as {@link $ExplosionProperties}.
     */
    export type $ExplosionProperties_ = { largeParticles?: $ParticleOptions_, explosionSound?: $Holder_<$SoundEvent>, damageSource?: $DamageSource_, particles?: (boolean) | undefined, causesFire?: (boolean) | undefined, mode?: $Level$ExplosionInteraction_, source?: $Entity, strength?: (number) | undefined, smallParticles?: $ParticleOptions_, damageCalculator?: $ExplosionDamageCalculator,  } | [largeParticles?: $ParticleOptions_, explosionSound?: $Holder_<$SoundEvent>, damageSource?: $DamageSource_, particles?: (boolean) | undefined, causesFire?: (boolean) | undefined, mode?: $Level$ExplosionInteraction_, source?: $Entity, strength?: (number) | undefined, smallParticles?: $ParticleOptions_, damageCalculator?: $ExplosionDamageCalculator, ];
    export class $SimpleLevelKubeEvent implements $KubeLevelEvent {
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(l: $Level_);
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $KubeJSWorldEventHandler {
        static serverTickEvent(event: $LevelTickEvent$Post): void;
        static serverLevelLoad(event: $LevelEvent$Load): void;
        static serverLevelUnload(event: $LevelEvent$Unload): void;
        static preExplosion(event: $ExplosionEvent$Start): void;
        static detonateExplosion(event: $ExplosionEvent$Detonate): void;
        constructor();
    }
    export class $LevelBlock {
    }
    export interface $LevelBlock extends $BlockProviderKJS {
        offset(f: $Direction_, d: number): $LevelBlock;
        offset(x: number, y: number, z: number): $LevelBlock;
        offset(f: $Direction_): $LevelBlock;
        set(block: $Block_, properties: $Map_<never, never>, flags: number): void;
        set(block: $Block_, properties: $Map_<never, never>): void;
        set(block: $Block_): void;
        getProperties(): $Map<string, string>;
        getItem(): $ItemStack;
        getDimension(): $ResourceLocation;
        getLevel(): $Level;
        createEntity(type: $EntityType_<never>): $Entity;
        setEntityData(tag: $CompoundTag_): void;
        getPlayersInRadius(radius: number): $EntityArrayList;
        getPlayersInRadius(): $EntityArrayList;
        getEntityId(): string;
        getBlockLight(): number;
        getCanSeeSky(): boolean;
        spawnLightning(): void;
        spawnLightning(effectOnly: boolean, player: $ServerPlayer): void;
        spawnLightning(effectOnly: boolean): void;
        spawnFireworks(fireworks: $Fireworks_, lifetime: number): void;
        popItemFromFace(item: $ItemStack_, dir: $Direction_): void;
        toBlockStateString(): string;
        mergeEntityData(tag: $CompoundTag_): void;
        getSkyLight(): number;
        setBlockState(state: $BlockState_, flags: number): void;
        setBlockState(state: $BlockState_): void;
        canSeeSkyFromBelowWater(): boolean;
        getCenterX(): number;
        getCenterZ(): number;
        getEntity(): $BlockEntity;
        explode(properties: $ExplosionProperties_): $Explosion;
        getY(): number;
        getPos(): $BlockPos;
        getX(): number;
        getZ(): number;
        getBlockState(): $BlockState;
        getEntityData(): $CompoundTag;
        getDimensionKey(): $ResourceKey<$Level>;
        getBlock(): $Block;
        getDrops(entity: $Entity, heldItem: $ItemStack_): $List<$ItemStack>;
        getDrops(): $List<$ItemStack>;
        getWest(): $LevelBlock;
        getEast(): $LevelBlock;
        getCenterY(): number;
        getLight(): number;
        getUp(): $LevelBlock;
        getBiomeId(): $ResourceLocation;
        popItem(item: $ItemStack_): void;
        getDown(): $LevelBlock;
        getNorth(): $LevelBlock;
        getSouth(): $LevelBlock;
        getInventory(facing: $Direction_): $InventoryKJS;
        getInventory(): $InventoryKJS;
        get properties(): $Map<string, string>;
        get item(): $ItemStack;
        get dimension(): $ResourceLocation;
        get level(): $Level;
        get entityId(): string;
        get blockLight(): number;
        get canSeeSky(): boolean;
        get skyLight(): number;
        get centerX(): number;
        get centerZ(): number;
        get entity(): $BlockEntity;
        get y(): number;
        get pos(): $BlockPos;
        get x(): number;
        get z(): number;
        get dimensionKey(): $ResourceKey<$Level>;
        get block(): $Block;
        get west(): $LevelBlock;
        get east(): $LevelBlock;
        get centerY(): number;
        get light(): number;
        get up(): $LevelBlock;
        get biomeId(): $ResourceLocation;
        get down(): $LevelBlock;
        get north(): $LevelBlock;
        get south(): $LevelBlock;
    }
    export class $ExplosionKubeEvent$Before extends $ExplosionKubeEvent {
        /**
         * Returns the size of the explosion.
         */
        getSize(): number;
        /**
         * Sets the size of the explosion.
         */
        setSize(s: number): void;
        constructor(level: $Level_, explosion: $Explosion);
    }
    export class $ExplosionKubeEvent implements $KubeLevelEvent {
        getBlock(): $LevelBlock;
        getLevel(): $Level;
        getExploder(): $LivingEntity;
        getPosition(): $Vec3;
        getY(): number;
        getX(): number;
        getZ(): number;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(level: $Level_, explosion: $Explosion);
        get block(): $LevelBlock;
        get level(): $Level;
        get exploder(): $LivingEntity;
        get position(): $Vec3;
        get y(): number;
        get x(): number;
        get z(): number;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
}
