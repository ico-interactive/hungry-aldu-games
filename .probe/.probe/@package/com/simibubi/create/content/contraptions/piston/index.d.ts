import { $MapCodec } from "@package/com/mojang/serialization";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $List_, $Map, $Set } from "@package/java/util";
import { $IControlContraptionExtension } from "@package/dev/simulated_team/simulated/mixin_interface/create_assembly";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $SuperByteBufferCache$Compartment } from "@package/net/createmod/catnip/render";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $Object2BooleanMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $IControlContraption, $TranslatingContraption, $AssemblyException, $ControlledContraptionEntity, $IDisplayAssemblyExceptions, $AbstractContraptionEntity } from "@package/com/simibubi/create/content/contraptions";
import { $SpecialBlockStateGen } from "@package/com/simibubi/create/foundation/data";
import { $DirectionalAxisKineticBlock, $KineticBlockEntityRenderer, $KineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/base";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE, $WrenchableDirectionalBlock } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Class } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $LevelAccessor, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $CollisionList } from "@package/com/simibubi/create/foundation/collision";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $CanLoadBigCannon } from "@package/rbasamoyai/createbigcannons/cannon_loading";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $HasFragileContraption } from "@package/rbasamoyai/createbigcannons/remix";
import { $StructureTemplate$StructureBlockInfo_ } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $DirectionProperty, $EnumProperty, $PistonType_, $PistonType, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $PoleHelper } from "@package/com/simibubi/create/foundation/placement";
import { $SimpleWaterloggedBlock, $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $Vec3, $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/contraptions/piston" {
    export class $MechanicalPistonHeadBlock extends $WrenchableDirectionalBlock implements $SimpleWaterloggedBlock {
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        pickupBlock(arg0: $Player | null, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_): $ItemStack;
        canPlaceLiquid(arg0: $Player | null, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid_): boolean;
        getPickupSound(): ($SoundEvent) | undefined;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
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
        static CODEC: $MapCodec<$WrenchableDirectionalBlock>;
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
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $LinearActuatorBlockEntity extends $KineticBlockEntity implements $IControlContraption, $IDisplayAssemblyExceptions, $IControlContraptionExtension {
        attach(arg0: $ControlledContraptionEntity): void;
        isValid(): boolean;
        getLastAssemblyException(): $AssemblyException;
        disassemble(): void;
        onLengthBroken(): void;
        getMotionVector(): $Vec3;
        isAttachedTo(arg0: $AbstractContraptionEntity): boolean;
        sable$disassemble(): void;
        onStall(): void;
        getInterpolatedOffset(arg0: number): number;
        getBlockPosition(): $BlockPos;
        getMovementSpeed(): number;
        addExceptionToTooltip(arg0: $List_<$Component_>): boolean;
        offset: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        needsContraption: boolean;
        movedContraption: $AbstractContraptionEntity;
        network: number;
        running: boolean;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        assembleNextTick: boolean;
        updateSpeed: boolean;
        preventSpeedUpdate: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get valid(): boolean;
        get lastAssemblyException(): $AssemblyException;
        get motionVector(): $Vec3;
        get blockPosition(): $BlockPos;
        get movementSpeed(): number;
    }
    export class $MechanicalPistonBlockEntity extends $LinearActuatorBlockEntity {
        assemble(): void;
        offset: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        needsContraption: boolean;
        movedContraption: $AbstractContraptionEntity;
        network: number;
        running: boolean;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        assembleNextTick: boolean;
        updateSpeed: boolean;
        preventSpeedUpdate: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $MechanicalPistonRenderer extends $KineticBlockEntityRenderer<$MechanicalPistonBlockEntity> {
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $PistonContraption extends $TranslatingContraption implements $CanLoadBigCannon, $HasFragileContraption {
        createbigcannons$getAssemblyMovementDirection(arg0: $Level_): $Direction;
        createbigcannons$getOriginalForcedDirection(arg0: $Level_): $Direction;
        toLocalPos(arg0: $BlockPos_): $BlockPos;
        createbigcannons$getCannonLoadingColliders(): $Set<any>;
        createbigcannons$toLocalPos(arg0: $BlockPos_): $BlockPos;
        createbigcannons$setBrokenDisassembly(arg0: boolean): void;
        createbigcannons$isBrokenDisassembly(): boolean;
        addBlock(arg0: $Level_, arg1: $BlockPos_, arg2: $Pair<$StructureTemplate$StructureBlockInfo_, $BlockEntity>): void;
        createbigcannons$fragileDisassemble(): void;
        createbigcannons$getEncounteredBlocks(): $Map<any, any>;
        createbigcannons$shouldCheckFragility(): boolean;
        createbigcannons$blockBreaksDisassembly(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        createbigcannons$getFragileBlockPositions(): $Set<any>;
        hasUniversalCreativeCrate: boolean;
        isLegacy: $Object2BooleanMap<$BlockPos>;
        anchor: $BlockPos;
        stalled: boolean;
        bounds: $AABB;
        simplifiedEntityColliders: $CollisionList;
        disassembled: boolean;
        entity: $AbstractContraptionEntity;
        constructor(arg0: $Direction_, arg1: boolean);
        constructor();
    }
    export class $PistonExtensionPoleBlock extends $WrenchableDirectionalBlock implements $IWrenchable, $SimpleWaterloggedBlock {
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        pickupBlock(arg0: $Player | null, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_): $ItemStack;
        canPlaceLiquid(arg0: $Player | null, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid_): boolean;
        getPickupSound(): ($SoundEvent) | undefined;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
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
        soundType: $SoundType;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$WrenchableDirectionalBlock>;
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
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $PistonExtensionPoleBlock$PlacementHelper extends $PoleHelper<$Direction> {
        static get(): $PistonExtensionPoleBlock$PlacementHelper;
    }
    export class $MechanicalPistonGenerator extends $SpecialBlockStateGen {
        constructor(arg0: $PistonType_);
    }
    export class $MechanicalPistonBlock$PistonState extends $Enum<$MechanicalPistonBlock$PistonState> implements $StringRepresentable {
        static values(): $MechanicalPistonBlock$PistonState[];
        static valueOf(arg0: string): $MechanicalPistonBlock$PistonState;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static EXTENDED: $MechanicalPistonBlock$PistonState;
        static MOVING: $MechanicalPistonBlock$PistonState;
        static RETRACTED: $MechanicalPistonBlock$PistonState;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $MechanicalPistonBlock$PistonState}.
     */
    export type $MechanicalPistonBlock$PistonState_ = "retracted" | "moving" | "extended";
    export class $MechanicalPistonBlock extends $DirectionalAxisKineticBlock implements $IBE<$MechanicalPistonBlockEntity> {
        static sticky(arg0: $BlockBehaviour$Properties): $MechanicalPistonBlock;
        static normal(arg0: $BlockBehaviour$Properties): $MechanicalPistonBlock;
        static isExtensionPole(arg0: $BlockState_): boolean;
        static isPistonHead(arg0: $BlockState_): boolean;
        static isStickyPiston(arg0: $BlockState_): boolean;
        getBlockEntityType(): $BlockEntityType<$MechanicalPistonBlockEntity>;
        static maxAllowedPistonPoles(): number;
        getBlockEntityClass(): $Class<$MechanicalPistonBlockEntity>;
        static isPiston(arg0: $BlockState_): boolean;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$MechanicalPistonBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$MechanicalPistonBlockEntity, $InteractionResult>): $InteractionResult;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($MechanicalPistonBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$MechanicalPistonBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $MechanicalPistonBlockEntity;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        explosionResistance: number;
        static STATE: $EnumProperty<$MechanicalPistonBlock$PistonState>;
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
        soundType: $SoundType;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static AXIS_ALONG_FIRST_COORDINATE: $BooleanProperty;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        get blockEntityType(): $BlockEntityType<$MechanicalPistonBlockEntity>;
        get blockEntityClass(): $Class<$MechanicalPistonBlockEntity>;
    }
}
