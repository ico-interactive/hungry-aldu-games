import { $SpawnData, $Level_, $SpawnData_ } from "@package/net/minecraft/world/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $EntityType_, $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $SimpleParticleType, $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $UUID, $List, $Set, $UUID_, $Set_, $List_ } from "@package/java/util";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $Predicate_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $IOwnedSpawner } from "@package/net/neoforged/neoforge/common/extensions";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $SimpleWeightedRandomList } from "@package/net/minecraft/util/random";
import { $Enum, $Record } from "@package/java/lang";
import { $AABB_ } from "@package/net/minecraft/world/phys";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $EntityTypeTest } from "@package/net/minecraft/world/level/entity";

declare module "@package/net/minecraft/world/level/block/entity/trialspawner" {
    export class $TrialSpawner$StateAccessor {
    }
    export interface $TrialSpawner$StateAccessor {
        getState(): $TrialSpawnerState;
        setState(level: $Level_, state: $TrialSpawnerState_): void;
        markUpdated(): void;
    }
    export class $TrialSpawner implements $IOwnedSpawner {
        getState(): $TrialSpawnerState;
        setState(level: $Level_, state: $TrialSpawnerState_): void;
        /**
         * Returns the block entity or entity which owns this spawner object.
         * 
         * For a `BaseSpawner`, this is the `MobSpawnerBlockEntity` or `MinecartSpawner`.
         * 
         * For a `TrialSpawner`, this is the `TrialSpawnerBlockEntity`.
         */
        getOwner(): $Either<$BlockEntity, $Entity>;
        getData(): $TrialSpawnerData;
        removeOminous(level: $ServerLevel, pos: $BlockPos_): void;
        markUpdated(): void;
        canSpawnInLevel(level: $Level_): boolean;
        getOminousConfig(): $TrialSpawnerConfig;
        ejectReward(level: $ServerLevel, pos: $BlockPos_, lootTable: $ResourceKey_<$LootTable>): void;
        getPlayerDetector(): $PlayerDetector;
        getEntitySelector(): $PlayerDetector$EntitySelector;
        static addSpawnParticles(level: $Level_, pos: $BlockPos_, random: $RandomSource, particleType: $SimpleParticleType): void;
        applyOminous(level: $ServerLevel, pos: $BlockPos_): void;
        getNormalConfig(): $TrialSpawnerConfig;
        /**
         * @deprecated
         */
        setPlayerDetector(playerDetector: $PlayerDetector_): void;
        getConfig(): $TrialSpawnerConfig;
        spawnMob(level: $ServerLevel, pos: $BlockPos_): ($UUID) | undefined;
        isOminous(): boolean;
        tickClient(level: $Level_, pos: $BlockPos_, isOminous: boolean): void;
        tickServer(level: $ServerLevel, pos: $BlockPos_, isOminous: boolean): void;
        codec(): $Codec<$TrialSpawner>;
        /**
         * @deprecated
         */
        overridePeacefulAndMobSpawnRule(): void;
        getRequiredPlayerRange(): number;
        static addBecomeOminousParticles(level: $Level_, pos: $BlockPos_, random: $RandomSource): void;
        static addDetectPlayerParticles(level: $Level_, pos: $BlockPos_, random: $RandomSource, type: number, particle: $ParticleOptions_): void;
        static addEjectItemParticles(level: $Level_, pos: $BlockPos_, random: $RandomSource): void;
        getTargetCooldownLength(): number;
        static DETECT_PLAYER_SPAWN_BUFFER: number;
        static NORMAL_CONFIG_TAG_NAME: string;
        static OMINOUS_CONFIG_TAG_NAME: string;
        constructor(normalConfig: $TrialSpawnerConfig_, ominousConfig: $TrialSpawnerConfig_, data: $TrialSpawnerData, targetCooldownLength: number, requiredPlayerRange: number, stateAccessor: $TrialSpawner$StateAccessor, playerDetector: $PlayerDetector_, entitySelector: $PlayerDetector$EntitySelector);
        constructor(stateAccessor: $TrialSpawner$StateAccessor, playerDetector: $PlayerDetector_, entitySelector: $PlayerDetector$EntitySelector);
        get owner(): $Either<$BlockEntity, $Entity>;
        get data(): $TrialSpawnerData;
        get ominousConfig(): $TrialSpawnerConfig;
        get entitySelector(): $PlayerDetector$EntitySelector;
        get normalConfig(): $TrialSpawnerConfig;
        get config(): $TrialSpawnerConfig;
        get ominous(): boolean;
        get requiredPlayerRange(): number;
        get targetCooldownLength(): number;
    }
    export class $TrialSpawnerState extends $Enum<$TrialSpawnerState> implements $StringRepresentable {
        static values(): $TrialSpawnerState[];
        static valueOf(arg0: string): $TrialSpawnerState;
        tickAndGetNext(pos: $BlockPos_, spawner: $TrialSpawner, level: $ServerLevel): $TrialSpawnerState;
        emitParticles(level: $Level_, pos: $BlockPos_, isOminous: boolean): void;
        spinningMobSpeed(): number;
        hasSpinningMob(): boolean;
        lightLevel(): number;
        isCapableOfSpawning(): boolean;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static COOLDOWN: $TrialSpawnerState;
        static ACTIVE: $TrialSpawnerState;
        static INACTIVE: $TrialSpawnerState;
        static EJECTING_REWARD: $TrialSpawnerState;
        static WAITING_FOR_REWARD_EJECTION: $TrialSpawnerState;
        static WAITING_FOR_PLAYERS: $TrialSpawnerState;
        get capableOfSpawning(): boolean;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $TrialSpawnerState}.
     */
    export type $TrialSpawnerState_ = "inactive" | "waiting_for_players" | "active" | "waiting_for_reward_ejection" | "ejecting_reward" | "cooldown";
    export class $TrialSpawnerState$LightLevel {
    }
    export class $TrialSpawnerState$ParticleEmission {
    }
    export interface $TrialSpawnerState$ParticleEmission {
    }
    /**
     * Values that may be interpreted as {@link $TrialSpawnerState$ParticleEmission}.
     */
    export type $TrialSpawnerState$ParticleEmission_ = (() => void);
    export class $PlayerDetector$EntitySelector {
        static onlySelectPlayers(players: $List_<$Player>): $PlayerDetector$EntitySelector;
        static onlySelectPlayer(player: $Player): $PlayerDetector$EntitySelector;
        static SELECT_FROM_LEVEL: $PlayerDetector$EntitySelector;
    }
    export interface $PlayerDetector$EntitySelector {
        getEntities<T extends $Entity>(level: $ServerLevel, typeTest: $EntityTypeTest<$Entity, T>, boundingBox: $AABB_, predicate: $Predicate_<T>): $List<T>;
        getPlayers(level: $ServerLevel, predicate: $Predicate_<$Player>): $List<$Player>;
    }
    export class $PlayerDetector {
        static INCLUDING_CREATIVE_PLAYERS: $PlayerDetector;
        static NO_CREATIVE_PLAYERS: $PlayerDetector;
        static SHEEP: $PlayerDetector;
    }
    export interface $PlayerDetector {
        detect(level: $ServerLevel, entitySelector: $PlayerDetector$EntitySelector, pos: $BlockPos_, maxDistance: number, arg4: boolean): $List<$UUID>;
    }
    /**
     * Values that may be interpreted as {@link $PlayerDetector}.
     */
    export type $PlayerDetector_ = ((arg0: $ServerLevel, arg1: $PlayerDetector$EntitySelector, arg2: $BlockPos, arg3: number, arg4: boolean) => $List_<$UUID_>);
    export class $TrialSpawnerConfig extends $Record {
        totalMobsAddedPerPlayer(): number;
        itemsToDropWhenOminous(): $ResourceKey<$LootTable>;
        calculateTargetTotalMobs(players: number): number;
        lootTablesToEject(): $SimpleWeightedRandomList<$ResourceKey<$LootTable>>;
        ticksBetweenSpawn(): number;
        spawnRange(): number;
        spawnPotentialsDefinition(): $SimpleWeightedRandomList<$SpawnData>;
        ticksBetweenItemSpawners(): number;
        totalMobs(): number;
        simultaneousMobs(): number;
        calculateTargetSimultaneousMobs(players: number): number;
        simultaneousMobsAddedPerPlayer(): number;
        static CODEC: $Codec<$TrialSpawnerConfig>;
        static DEFAULT: $TrialSpawnerConfig;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $SimpleWeightedRandomList<$SpawnData_>, arg7: $SimpleWeightedRandomList<$ResourceKey_<$LootTable>>, arg8: $ResourceKey_<$LootTable>);
    }
    /**
     * Values that may be interpreted as {@link $TrialSpawnerConfig}.
     */
    export type $TrialSpawnerConfig_ = { itemsToDropWhenOminous?: $ResourceKey_<$LootTable>, totalMobsAddedPerPlayer?: number, simultaneousMobs?: number, spawnPotentialsDefinition?: $SimpleWeightedRandomList<$SpawnData_>, spawnRange?: number, lootTablesToEject?: $SimpleWeightedRandomList<$ResourceKey_<$LootTable>>, ticksBetweenSpawn?: number, totalMobs?: number, simultaneousMobsAddedPerPlayer?: number,  } | [itemsToDropWhenOminous?: $ResourceKey_<$LootTable>, totalMobsAddedPerPlayer?: number, simultaneousMobs?: number, spawnPotentialsDefinition?: $SimpleWeightedRandomList<$SpawnData_>, spawnRange?: number, lootTablesToEject?: $SimpleWeightedRandomList<$ResourceKey_<$LootTable>>, ticksBetweenSpawn?: number, totalMobs?: number, simultaneousMobsAddedPerPlayer?: number, ];
    export class $TrialSpawner$FlameParticle extends $Enum<$TrialSpawner$FlameParticle> {
        static values(): $TrialSpawner$FlameParticle[];
        static valueOf(arg0: string): $TrialSpawner$FlameParticle;
        static decode(id: number): $TrialSpawner$FlameParticle;
        encode(): number;
        static OMINOUS: $TrialSpawner$FlameParticle;
        particleType: $SimpleParticleType;
        static NORMAL: $TrialSpawner$FlameParticle;
    }
    /**
     * Values that may be interpreted as {@link $TrialSpawner$FlameParticle}.
     */
    export type $TrialSpawner$FlameParticle_ = "normal" | "ominous";
    export class $TrialSpawnerData {
        reset(): void;
        hasMobToSpawn(trialSpawner: $TrialSpawner, random: $RandomSource): boolean;
        isCooldownFinished(level: $ServerLevel): boolean;
        getDispensingItems(level: $ServerLevel, config: $TrialSpawnerConfig_, pos: $BlockPos_): $SimpleWeightedRandomList<$ItemStack>;
        tryDetectPlayers(level: $ServerLevel, pos: $BlockPos_, spawner: $TrialSpawner): void;
        getSpin(): number;
        setEntityId(spawner: $TrialSpawner, random: $RandomSource, entityType: $EntityType_<never>): void;
        getUpdateTag(spawnerState: $TrialSpawnerState_): $CompoundTag;
        isReadyToSpawnNextMob(level: $ServerLevel, config: $TrialSpawnerConfig_, players: number): boolean;
        isReadyToOpenShutter(level: $ServerLevel, delay: number, targetCooldownLength: number): boolean;
        countAdditionalPlayers(pos: $BlockPos_): number;
        getOrCreateNextSpawnData(spawner: $TrialSpawner, random: $RandomSource): $SpawnData;
        hasFinishedSpawningAllMobs(config: $TrialSpawnerConfig_, players: number): boolean;
        getOrCreateDisplayEntity(spawner: $TrialSpawner, level: $Level_, spawnerState: $TrialSpawnerState_): $Entity;
        resetAfterBecomingOminous(spawner: $TrialSpawner, level: $ServerLevel): void;
        haveAllCurrentMobsDied(): boolean;
        isReadyToEjectItems(level: $ServerLevel, delay: number, targetCooldownLength: number): boolean;
        getOSpin(): number;
        nextMobSpawnsAt: number;
        oSpin: number;
        totalMobsSpawned: number;
        static MAP_CODEC: $MapCodec<$TrialSpawnerData>;
        detectedPlayers: $Set<$UUID>;
        ejectingLootTable: ($ResourceKey<$LootTable>) | undefined;
        spin: number;
        displayEntity: $Entity;
        static TAG_SPAWN_DATA: string;
        cooldownEndsAt: number;
        currentMobs: $Set<$UUID>;
        nextSpawnData: ($SpawnData) | undefined;
        constructor();
        constructor(detectedPlayers: $Set_<$UUID_>, currentMobs: $Set_<$UUID_>, cooldownEndsAt: number, arg3: number, nextMobSpawnsAt: number, arg5: ($SpawnData_) | undefined, totalMobsSpawned: ($ResourceKey_<$LootTable>) | undefined);
        get OSpin(): number;
    }
    export class $TrialSpawnerState$SpinningMob {
    }
}
