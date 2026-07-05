import { $GoalSelector } from "@package/net/minecraft/world/entity/ai/goal";
import { $MoveControl, $MoveControl$Operation, $LookControl, $JumpControl, $BodyRotationControl } from "@package/net/minecraft/world/entity/ai/control";
import { $EntityType_, $Pose, $PortalProcessor, $PlayerRideableJumping, $AnimationState, $EntityDimensions, $Entity$RemovalReason, $Saddleable, $WalkAnimationState, $Mob } from "@package/net/minecraft/world/entity";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $AttributeSupplier$Builder } from "@package/net/minecraft/world/entity/ai/attributes";
import { $UUID, $Stack, $Map } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $AbstractHorse } from "@package/net/minecraft/world/entity/animal/horse";
import { $InteractionHand, $SimpleContainer } from "@package/net/minecraft/world";
import { $Predicate } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Object2DoubleMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos } from "@package/net/minecraft/core";
import { $Brain, $Brain$Provider } from "@package/net/minecraft/world/entity/ai";
import { $PathNavigation } from "@package/net/minecraft/world/entity/ai/navigation";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $AnimalPanic, $Behavior } from "@package/net/minecraft/world/entity/ai/behavior";
import { $TagKey } from "@package/net/minecraft/tags";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $MemoryModuleType, $MemoryStatus } from "@package/net/minecraft/world/entity/ai/memory";
import { $EntityDataAccessor, $SynchedEntityData } from "@package/net/minecraft/network/syncher";
import { $DamageContainer } from "@package/net/neoforged/neoforge/common/damagesource";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/entity/animal/camel" {
    export class $Camel$CamelMoveControl extends $MoveControl {
        speedModifier: number;
        mob: $Mob;
        strafeForwards: number;
        static MAX_TURN: number;
        wantedZ: number;
        wantedY: number;
        strafeRight: number;
        wantedX: number;
        static MIN_SPEED_SQR: number;
        operation: $MoveControl$Operation;
        static MIN_SPEED: number;
    }
    export class $Camel$CamelBodyRotationControl extends $BodyRotationControl {
    }
    export class $Camel$CamelLookControl extends $LookControl {
        mob: $Mob;
        wantedZ: number;
        wantedY: number;
        wantedX: number;
        xMaxRotAngle: number;
        yMaxRotSpeed: number;
        lookAtCooldown: number;
    }
    export class $CamelAi {
        static getTemptations(): $Predicate<$ItemStack>;
        static makeBrain(brain: $Brain<$Camel>): $Brain<never>;
        static updateActivity(camel: $Camel): void;
        static brainProvider(): $Brain$Provider<$Camel>;
        static initMemories(camel: $Camel, random: $RandomSource): void;
        constructor();
        static get temptations(): $Predicate<$ItemStack>;
    }
    export class $CamelAi$CamelPanic extends $AnimalPanic<$Camel> {
        start(arg0: $ServerLevel, arg1: $Camel, arg2: number): void;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        constructor(arg0: number);
    }
    export class $CamelAi$RandomSitting extends $Behavior<$Camel> {
        start(level: $ServerLevel, entity: $Camel, gameTime: number): void;
        checkExtraStartConditions(level: $ServerLevel, owner: $Camel): boolean;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        constructor(minimalPoseSeconds: number);
    }
    export class $Camel extends $AbstractHorse implements $PlayerRideableJumping, $Saddleable {
        resetLastPoseChangeTick(lastPoseChangeTick: number): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isCamelVisuallySitting(): boolean;
        setDashing(dashing: boolean): void;
        /**
         * Called to update the entity's position/logic.
         */
        standUp(): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isDashing(): boolean;
        /**
         * Called to update the entity's position/logic.
         */
        sitDown(): void;
        static createAttributes(): $AttributeSupplier$Builder;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isInPoseTransition(): boolean;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        refuseToMove(): boolean;
        getPoseTime(): number;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isCamelSitting(): boolean;
        /**
         * Called to update the entity's position/logic.
         */
        standUpInstantly(): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        canCamelChangePose(): boolean;
        static MAX_WEARING_ARMOR_CHANCE: number;
        lastHurtByPlayerTime: number;
        sitAnimationState: $AnimationState;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        autoSpinAttackItemStack: $ItemStack;
        lerpYRot: number;
        static DEFAULT_BASE_GRAVITY: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static ENTITY_COUNTER: $AtomicInteger;
        static MAX_HEAD_Y_ROT: number;
        lerpYHeadRot: number;
        static DEFAULT_WALK_TARGET_VALUE: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        navigation: $PathNavigation;
        useItem: $ItemStack;
        yHeadRot: number;
        noPhysics: boolean;
        fallFlyTicks: number;
        autoSpinAttackDmg: number;
        yo: number;
        forcedAgeTimer: number;
        static DATA_LIVING_ENTITY_FLAGS: $EntityDataAccessor<number>;
        yBodyRotO: number;
        static FLAG_ONFIRE: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        sitPoseAnimationState: $AnimationState;
        rotOffs: number;
        goalSelector: $GoalSelector;
        handDropChances: number[];
        swingingArm: $InteractionHand;
        static LAST_POSE_CHANGE_TICK: $EntityDataAccessor<number>;
        static INV_BASE_COUNT: number;
        static ID_TAG: string;
        armorDropChances: number[];
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        temper: number;
        boardingCooldown: number;
        zo: number;
        static CHEST_SLOT_OFFSET: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        appliedScale: number;
        yya: number;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        oAttackAnim: number;
        yHeadRotO: number;
        canGallop: boolean;
        static UUID_TAG: string;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        dead: boolean;
        verticalCollision: boolean;
        static RANDOM_SPAWN_BONUS_ID: $ResourceLocation;
        verticalCollisionBelow: boolean;
        static DEFAULT_BABY_SCALE: number;
        tailCounter: number;
        static ATTRIBUTES_FIELD: string;
        static UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: number;
        playerJumpPendingScale: number;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        lerpHeadSteps: number;
        flyDist: number;
        brain: $Brain<never>;
        gallopSoundCounter: number;
        static PASSENGERS_TAG: string;
        stringUUID: string;
        wasOnFire: boolean;
        autoSpinAttackTicks: number;
        attackAnim: number;
        noActionTime: number;
        zOld: number;
        static BABY_START_AGE: number;
        timeOffs: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static LIVING_ENTITY_FLAG_SPIN_ATTACK: number;
        forcedAge: number;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        firstTick: boolean;
        damageContainers: $Stack<$DamageContainer>;
        static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
        static ARMOR_SLOT_OFFSET: number;
        run: number;
        swingTime: number;
        static DASH: $EntityDataAccessor<boolean>;
        static BODY_ARMOR_OFFSET: number;
        uuid: $UUID;
        static PARENT_AGE_AFTER_BREEDING: number;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        static BREEDING_CROSS_FACTOR: number;
        static MAX_ENCHANTED_ARMOR_CHANCE: number;
        static MAX_ENCHANTED_WEAPON_CHANCE: number;
        jumpControl: $JumpControl;
        animStepO: number;
        lastHurtByPlayer: $Player;
        static BOARDING_COOLDOWN: number;
        static PRESERVE_ITEM_DROP_CHANCE: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        static PICKUP_REACH: number;
        ambientSoundTime: number;
        moveDist: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        oRun: number;
        targetSelector: $GoalSelector;
        lookControl: $LookControl;
        static BABY_SCALE: number;
        xOld: number;
        wasInPowderSnow: boolean;
        allowStandSliding: boolean;
        hurtTime: number;
        xpReward: number;
        swinging: boolean;
        hurtMarked: boolean;
        attackStrengthTicker: number;
        useItemRemaining: number;
        entityData: $SynchedEntityData;
        dashAnimationState: $AnimationState;
        static SLEEPING_DIMENSIONS: $EntityDimensions;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        idleAnimationState: $AnimationState;
        moveControl: $MoveControl;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        sitUpAnimationState: $AnimationState;
        sprintCounter: number;
        inventory: $SimpleContainer;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static LIVING_ENTITY_FLAG_OFF_HAND: number;
        random: $RandomSource;
        lerpSteps: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        minorHorizontalCollision: boolean;
        static LIVING_ENTITY_FLAG_IS_USING: number;
        bodyArmorDropChance: number;
        levelCallback: $EntityInLevelCallback;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        lerpX: number;
        static DASH_COOLDOWN_TICKS: number;
        lerpZ: number;
        lerpY: number;
        lerpXRot: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        animStep: number;
        yBodyRot: number;
        blocksBuilding: boolean;
        static INVENTORY_SLOT_OFFSET: number;
        deathScore: number;
        static INV_SLOT_SADDLE: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        age: number;
        constructor(entityType: $EntityType_<$Camel>, level: $Level_);
        get camelVisuallySitting(): boolean;
        get inPoseTransition(): boolean;
        get poseTime(): number;
        get camelSitting(): boolean;
    }
}
