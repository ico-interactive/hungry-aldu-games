import { $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $DirectionProperty, $EnumProperty, $PistonType, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $StateDefinition, $BlockState_, $BlockBehaviour$Properties, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $BaseEntityBlock, $SoundType, $DirectionalBlock, $Block } from "@package/net/minecraft/world/level/block";
import { $List } from "@package/java/util";
import { $AABB_, $AABB } from "@package/net/minecraft/world/phys";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/minecraft/world/level/block/piston" {
    export class $PistonBaseBlock extends $DirectionalBlock {
        /**
         * Checks if the piston can push the given BlockState.
         */
        static isPushable(state: $BlockState_, level: $Level_, pos: $BlockPos_, movementDirection: $Direction_, allowDestroy: boolean, pistonFacing: $Direction_): boolean;
        static SOUTH_AABB: $VoxelShape;
        explosionResistance: number;
        static DOWN_AABB: $VoxelShape;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static UP_AABB: $VoxelShape;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static EAST_AABB: $VoxelShape;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        drops: $ResourceKey<$LootTable>;
        static TRIGGER_EXTEND: number;
        static PLATFORM_THICKNESS: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        dynamicShape: boolean;
        static NORTH_AABB: $VoxelShape;
        soundType: $SoundType;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$PistonBaseBlock>;
        static EXTENDED: $BooleanProperty;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static TRIGGER_CONTRACT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static TRIGGER_DROP: number;
        static WEST_AABB: $VoxelShape;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(isSticky: boolean, properties: $BlockBehaviour$Properties);
    }
    export class $PistonMath {
        static getMovementArea(bounds: $AABB_, dir: $Direction_, delta: number): $AABB;
        constructor();
    }
    export class $MovingPistonBlock extends $BaseEntityBlock {
        static newMovingBlockEntity(pos: $BlockPos_, blockState: $BlockState_, movedState: $BlockState_, direction: $Direction_, extending: boolean, isSourcePiston: boolean): $BlockEntity;
        explosionResistance: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        drops: $ResourceKey<$LootTable>;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        dynamicShape: boolean;
        static TYPE: $EnumProperty<$PistonType>;
        soundType: $SoundType;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$MovingPistonBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $PistonHeadBlock extends $DirectionalBlock {
        explosionResistance: number;
        static DOWN_AABB: $VoxelShape;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static PLATFORM: number;
        static EAST_AABB: $VoxelShape;
        static UPDATE_LIMIT: number;
        static SHORT_EAST_ARM_AABB: $VoxelShape;
        static UPDATE_KNOWN_SHAPE: number;
        static NORTH_AABB: $VoxelShape;
        static TYPE: $EnumProperty<$PistonType>;
        static SHORT_WEST_ARM_AABB: $VoxelShape;
        soundType: $SoundType;
        static CODEC: $MapCodec<$PistonHeadBlock>;
        static SHORT_DOWN_ARM_AABB: $VoxelShape;
        static WEST_ARM_AABB: $VoxelShape;
        static SHORT_NORTH_ARM_AABB: $VoxelShape;
        static UPDATE_ALL_IMMEDIATE: number;
        static NORTH_ARM_AABB: $VoxelShape;
        static SHORT_SOUTH_ARM_AABB: $VoxelShape;
        static WEST_AABB: $VoxelShape;
        static INSTANT: number;
        static EDGE_MAX: number;
        static EAST_ARM_AABB: $VoxelShape;
        static SOUTH_AABB: $VoxelShape;
        static SOUTH_ARM_AABB: $VoxelShape;
        static DOWN_ARM_AABB: $VoxelShape;
        static EDGE_MIN: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static UP_AABB: $VoxelShape;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_ALL: number;
        drops: $ResourceKey<$LootTable>;
        static UP_ARM_AABB: $VoxelShape;
        static UPDATE_SUPPRESS_DROPS: number;
        dynamicShape: boolean;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static SHORT: $BooleanProperty;
        static AABB_OFFSET: number;
        static SHORT_UP_ARM_AABB: $VoxelShape;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $PistonStructureResolver {
        resolve(): boolean;
        /**
         * @return all block positions to be destroyed by the piston
         */
        getToPush(): $List<$BlockPos>;
        /**
         * @return all block positions to be destroyed by the piston
         */
        getToDestroy(): $List<$BlockPos>;
        getPushDirection(): $Direction;
        static MAX_PUSH_DEPTH: number;
        constructor(level: $Level_, pistonPos: $BlockPos_, pistonDirection: $Direction_, extending: boolean);
        get toPush(): $List<$BlockPos>;
        get toDestroy(): $List<$BlockPos>;
        get pushDirection(): $Direction;
    }
    export class $PistonMovingBlockEntity extends $BlockEntity {
        static tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $PistonMovingBlockEntity): void;
        getZOff(progress: number): number;
        getYOff(progress: number): number;
        getXOff(progress: number): number;
        getMovementDirection(): $Direction;
        /**
         * Removes the piston's BlockEntity and stops any movement
         */
        finalTick(): void;
        getMovedState(): $BlockState;
        /**
         * @return whether this piston is extending
         */
        isSourcePiston(): boolean;
        getCollisionShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        getDirection(): $Direction;
        getLastTicked(): number;
        /**
         * @return whether this piston is extending
         */
        isExtending(): boolean;
        getProgress(progress: number): number;
        worldPosition: $BlockPos;
        static TICK_MOVEMENT: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_, movedState: $BlockState_, direction: $Direction_, extending: boolean, isSourcePiston: boolean);
        get movementDirection(): $Direction;
        get movedState(): $BlockState;
        get sourcePiston(): boolean;
        get direction(): $Direction;
        get lastTicked(): number;
        get extending(): boolean;
    }
}
