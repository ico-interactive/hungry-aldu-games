import { $MapCodec } from "@package/com/mojang/serialization";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $LangBuilder } from "@package/net/createmod/catnip/lang";
import { $ActorVisual, $ContraptionMatrices } from "@package/com/simibubi/create/content/contraptions/render";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ParticleType_, $ParticleOptions, $ParticleOptions_, $ParticleType } from "@package/net/minecraft/core/particles";
import { $RegisterParticleProvidersEvent } from "@package/net/neoforged/neoforge/client/event";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $SuperByteBuffer, $SuperByteBufferCache$Compartment } from "@package/net/createmod/catnip/render";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $InteractionResult } from "@package/net/minecraft/world";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $SimpleBlockEntityVisualizer$Factory } from "@package/dev/engine_room/flywheel/lib/visualization";
import { $ChatFormatting } from "@package/net/minecraft";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $StateDefinition, $BlockState_, $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $Color } from "@package/net/createmod/catnip/theme";
import { $InstanceHandle, $InstanceType } from "@package/dev/engine_room/flywheel/api/instance";
import { $BlockHarvester } from "@package/dev/simulated_team/simulated/content/blocks/auger_shaft";
import { $VirtualRenderWorld } from "@package/com/simibubi/create/foundation/virtualWorld";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $SpriteSet, $Particle, $ParticleProvider, $SimpleAnimatedParticle, $ParticleEngine$SpriteParticleRegistration } from "@package/net/minecraft/client/particle";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $KineticBlockAccessor } from "@package/rbasamoyai/createbigcannons/mixin/compat/create/rotation_propagation";
import { $ColoredLitOverlayInstance } from "@package/dev/engine_room/flywheel/lib/instance";
import { $AugerDistributor, $AugerDistributor_ } from "@package/dev/simulated_team/simulated/content/blocks/auger_shaft/auger_groups";
import { $Property, $BooleanProperty, $DirectionProperty, $EnumProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $KineticBlockEntityExtension } from "@package/dev/simulated_team/simulated/mixin_interface/extra_kinetics";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $IHaveHoveringInformation, $IHaveGoggleInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $BlockEntityVisual, $TickableVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $AbstractBlockEntityVisual, $SimpleTickableVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $TransformableBlock } from "@package/com/simibubi/create/api/contraption/transformable";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Vector3f, $Quaternionf } from "@package/org/joml";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $List, $List_ } from "@package/java/util";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $BlockPos, $Direction$Axis_, $BlockPos_, $Vec3i, $HolderLookup$Provider, $Direction_, $Direction$Axis, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $KineticNetwork } from "@package/com/simibubi/create/content/kinetics";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Enum } from "@package/java/lang";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $ICustomParticleDataWithSprite } from "@package/com/simibubi/create/foundation/particle";
import { $GantryShaftBlockEntity } from "@package/com/simibubi/create/content/kinetics/gantry";
import { $LevelAccessor, $LevelReader, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $MovementBehaviour } from "@package/com/simibubi/create/api/behaviour/movement";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $MovementContext } from "@package/com/simibubi/create/content/contraptions/behaviour";
import { $Model } from "@package/dev/engine_room/flywheel/api/model";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/kinetics/base" {
    export class $IRotate {
    }
    export interface $IRotate extends $IWrenchable {
        getMinimumRequiredSpeedLevel(): $IRotate$SpeedLevel;
        hasShaftTowards(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): boolean;
        hideStressImpact(): boolean;
        getRotationAxis(arg0: $BlockState_): $Direction$Axis;
        showCapacityWithAnnotation(): boolean;
        get minimumRequiredSpeedLevel(): $IRotate$SpeedLevel;
    }
    export class $KineticBlockEntityRenderer<T extends $KineticBlockEntity> extends $SafeBlockEntityRenderer<T> {
        static renderRotatingKineticBlock(arg0: $KineticBlockEntity, arg1: $BlockState_, arg2: $PoseStack, arg3: $VertexConsumer, arg4: number): void;
        static renderRotatingBuffer(arg0: $KineticBlockEntity, arg1: $SuperByteBuffer, arg2: $PoseStack, arg3: $VertexConsumer, arg4: number): void;
        static kineticRotationTransform(arg0: $SuperByteBuffer, arg1: $KineticBlockEntity, arg2: $Direction$Axis_, arg3: number, arg4: number): $SuperByteBuffer;
        static getRotationOffsetForPosition(arg0: $KineticBlockEntity, arg1: $BlockPos_, arg2: $Direction$Axis_): number;
        static standardKineticRotationTransform(arg0: $SuperByteBuffer, arg1: $KineticBlockEntity, arg2: number): $SuperByteBuffer;
        static shaft(arg0: $Direction$Axis_): $BlockState;
        static getRotationAxisOf(arg0: $KineticBlockEntity): $Direction$Axis;
        static getAngleForBe(arg0: $KineticBlockEntity, arg1: $BlockPos_, arg2: $Direction$Axis_): number;
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $KineticEffectHandler {
        tick(): void;
        spawnEffect(arg0: $ParticleOptions_, arg1: number, arg2: number): void;
        queueRotationIndicators(): void;
        triggerOverStressedEffect(): void;
        spawnRotationIndicators(): void;
        constructor(arg0: $KineticBlockEntity);
    }
    export class $DirectionalShaftHalvesBlockEntity extends $KineticBlockEntity {
        getSourceFacing(): $Direction;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        level: $Level;
        updateSpeed: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        preventSpeedUpdate: number;
        network: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get sourceFacing(): $Direction;
    }
    export class $OrientedRotatingVisual<T extends $KineticBlockEntity> extends $KineticBlockEntityVisual<T> {
        static of<T extends $KineticBlockEntity>(arg0: $PartialModel): $SimpleBlockEntityVisualizer$Factory<T>;
        static gantryShaft(arg0: $VisualizationContext, arg1: $GantryShaftBlockEntity, arg2: number): $BlockEntityVisual<$GantryShaftBlockEntity>;
        static backHorizontal<T extends $KineticBlockEntity>(arg0: $PartialModel): $SimpleBlockEntityVisualizer$Factory<T>;
        constructor(arg0: $VisualizationContext, arg1: T, arg2: number, arg3: $Direction_, arg4: $Direction_, arg5: $Model);
    }
    export class $ShaftVisual<T extends $KineticBlockEntity> extends $SingleAxisRotatingVisual<T> {
        static rainbowMode: boolean;
        constructor(arg0: $VisualizationContext, arg1: T, arg2: number);
    }
    export class $BlockBreakingMovementBehaviour implements $MovementBehaviour {
        tick(arg0: $MovementContext): void;
        cancelStall(arg0: $MovementContext): void;
        startMoving(arg0: $MovementContext): void;
        visitNewPosition(arg0: $MovementContext, arg1: $BlockPos_): void;
        damageEntities(arg0: $MovementContext, arg1: $BlockPos_, arg2: $Level_): void;
        tickBreaker(arg0: $MovementContext): void;
        canBreak(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        wrapMethod$caf000$sable$checkPosition(arg0: $MovementContext, arg1: $BlockPos_, arg2: $Operation_<any>): void;
        handler$caf000$sable$testBreakingPosDist(arg0: $MovementContext, arg1: $CallbackInfo): void;
        stopMoving(arg0: $MovementContext): void;
        isActive(arg0: $MovementContext): boolean;
        disableBlockEntityRendering(): boolean;
        canBeDisabledVia(arg0: $MovementContext): $ItemStack;
        collectOrDropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        writeExtraData(arg0: $MovementContext): void;
        createVisual(arg0: $VisualizationContext, arg1: $VirtualRenderWorld, arg2: $MovementContext): $ActorVisual;
        onSpeedChanged(arg0: $MovementContext, arg1: $Vec3_, arg2: $Vec3_): void;
        renderInContraption(arg0: $MovementContext, arg1: $VirtualRenderWorld, arg2: $ContraptionMatrices, arg3: $MultiBufferSource_): void;
        getActiveAreaOffset(arg0: $MovementContext): $Vec3;
        onDisabledByControls(arg0: $MovementContext): void;
        mustTickWhileDisabled(): boolean;
        /**
         * @deprecated
         */
        dropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        constructor();
    }
    export class $RotationIndicatorParticle extends $SimpleAnimatedParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        sprites: $SpriteSet;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $SingleAxisRotatingVisual<T extends $KineticBlockEntity> extends $KineticBlockEntityVisual<T> implements $SimpleTickableVisual {
        static of<T extends $KineticBlockEntity>(arg0: $PartialModel): $SimpleBlockEntityVisualizer$Factory<T>;
        tick(arg0: $TickableVisual$Context): void;
        static backtank<T extends $KineticBlockEntity>(arg0: $VisualizationContext, arg1: T, arg2: number): $SingleAxisRotatingVisual<T>;
        static ofZ<T extends $KineticBlockEntity>(arg0: $PartialModel): $SimpleBlockEntityVisualizer$Factory<T>;
        static shaft<T extends $KineticBlockEntity>(arg0: $VisualizationContext, arg1: T, arg2: number): $SingleAxisRotatingVisual<T>;
        planTick(): $Plan<$TickableVisual$Context>;
        static rainbowMode: boolean;
        constructor(arg0: $VisualizationContext, arg1: T, arg2: number, arg3: $Model);
        constructor(arg0: $VisualizationContext, arg1: T, arg2: number, arg3: $Direction_, arg4: $Model);
    }
    export class $ShaftRenderer<T extends $KineticBlockEntity> extends $KineticBlockEntityRenderer<T> {
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $HorizontalKineticBlock extends $KineticBlock {
        getPreferredHorizontalFacing(arg0: $BlockPlaceContext): $Direction;
        wrapOperation$znf000$simulated$handleAutoOrientationWithExtraKinetics(arg0: $IRotate, arg1: $LevelReader, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Direction_, arg5: $Operation_<any>): boolean;
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
        static HORIZONTAL_FACING: $Property<$Direction>;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $KineticBlockEntityVisual<T extends $KineticBlockEntity> extends $AbstractBlockEntityVisual<T> {
        static shouldOffset(arg0: $Direction$Axis_, arg1: $Vec3i): boolean;
        static rotationOffset(arg0: $BlockState_, arg1: $Direction$Axis_, arg2: $Vec3i): number;
        static rotationAxis(arg0: $BlockState_): $Direction$Axis;
        static applyOverstressEffect(arg0: $KineticBlockEntity, ...arg1: $RotatingInstance[]): void;
        constructor(arg0: $VisualizationContext, arg1: T, arg2: number);
    }
    export class $IRotate$StressImpact extends $Enum<$IRotate$StressImpact> {
        static values(): $IRotate$StressImpact[];
        static valueOf(arg0: string): $IRotate$StressImpact;
        static of(arg0: number): $IRotate$StressImpact;
        static isEnabled(): boolean;
        getAbsoluteColor(): $ChatFormatting;
        getRelativeColor(): $ChatFormatting;
        static getFormattedStressText(arg0: number): $LangBuilder;
        static HIGH: $IRotate$StressImpact;
        static MEDIUM: $IRotate$StressImpact;
        static LOW: $IRotate$StressImpact;
        static OVERSTRESSED: $IRotate$StressImpact;
        static get enabled(): boolean;
        get absoluteColor(): $ChatFormatting;
        get relativeColor(): $ChatFormatting;
    }
    /**
     * Values that may be interpreted as {@link $IRotate$StressImpact}.
     */
    export type $IRotate$StressImpact_ = "low" | "medium" | "high" | "overstressed";
    export class $RotationIndicatorParticle$Factory implements $ParticleProvider<$RotationIndicatorParticleData> {
        createParticle(arg0: $RotationIndicatorParticleData, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $RotationIndicatorParticleData implements $ParticleOptions, $ICustomParticleDataWithSprite<$RotationIndicatorParticleData> {
        getCodec(arg0: $ParticleType_<$RotationIndicatorParticleData>): $MapCodec<$RotationIndicatorParticleData>;
        getType(): $ParticleType<never>;
        getMetaFactory(): $ParticleEngine$SpriteParticleRegistration<$RotationIndicatorParticleData>;
        getStreamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $RotationIndicatorParticleData>;
        getAxis(): $Direction$Axis;
        getFactory(): $ParticleProvider<$RotationIndicatorParticleData>;
        register(arg0: $ParticleType_<$RotationIndicatorParticleData>, arg1: $RegisterParticleProvidersEvent): void;
        createType(): $ParticleType<$RotationIndicatorParticleData>;
        static CODEC: $MapCodec<$RotationIndicatorParticleData>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $RotationIndicatorParticleData>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Direction$Axis_);
        constructor();
        get type(): $ParticleType<never>;
        get metaFactory(): $ParticleEngine$SpriteParticleRegistration<$RotationIndicatorParticleData>;
        get streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $RotationIndicatorParticleData>;
        get axis(): $Direction$Axis;
        get factory(): $ParticleProvider<$RotationIndicatorParticleData>;
    }
    export class $KineticBlock extends $Block implements $IRotate, $KineticBlockAccessor {
        hasShaftTowards(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): boolean;
        getParticleTargetRadius(): number;
        handler$znc000$simulated$extraKineticsReset(arg0: $BlockState_, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: number, arg4: number, arg5: $CallbackInfo, arg6: $BlockEntity): void;
        getParticleInitialRadius(): number;
        getMinimumRequiredSpeedLevel(): $IRotate$SpeedLevel;
        hideStressImpact(): boolean;
        showCapacityWithAnnotation(): boolean;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        callAreStatesKineticallyEquivalent(arg0: $BlockState_, arg1: $BlockState_): boolean;
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
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get particleTargetRadius(): number;
        get particleInitialRadius(): number;
        get minimumRequiredSpeedLevel(): $IRotate$SpeedLevel;
    }
    export class $DirectionalAxisKineticBlock extends $DirectionalKineticBlock implements $TransformableBlock {
        transform(arg0: $BlockState_, arg1: $StructureTransform): $BlockState;
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
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $IRotate$SpeedLevel extends $Enum<$IRotate$SpeedLevel> {
        static values(): $IRotate$SpeedLevel[];
        static valueOf(arg0: string): $IRotate$SpeedLevel;
        static of(arg0: number): $IRotate$SpeedLevel;
        getSpeedValue(): number;
        getParticleSpeed(): number;
        getColor(): number;
        getTextColor(): $ChatFormatting;
        static getFormattedSpeedText(arg0: number, arg1: boolean): $LangBuilder;
        static MEDIUM: $IRotate$SpeedLevel;
        static SLOW: $IRotate$SpeedLevel;
        static NONE: $IRotate$SpeedLevel;
        static FAST: $IRotate$SpeedLevel;
        get speedValue(): number;
        get particleSpeed(): number;
        get color(): number;
        get textColor(): $ChatFormatting;
    }
    /**
     * Values that may be interpreted as {@link $IRotate$SpeedLevel}.
     */
    export type $IRotate$SpeedLevel_ = "none" | "slow" | "medium" | "fast";
    export class $DirectionalKineticBlock extends $KineticBlock {
        getPreferredFacing(arg0: $BlockPlaceContext): $Direction;
        wrapOperation$znf000$simulated$handleAutoOrientationWithExtraKinetics(arg0: $IRotate, arg1: $LevelReader, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Direction_, arg5: $Operation_<any>): boolean;
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
        static CODEC: $MapCodec<$Block>;
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
    export class $GeneratingKineticBlockEntity extends $KineticBlockEntity {
        updateGeneratedRotation(): void;
        wrapOperation$zna000$simulated$getExtraKinetics(arg0: $Level_, arg1: $BlockPos_, arg2: $Operation_<any>): $BlockEntity;
        createNetworkId(): number;
        applyNewSpeed(arg0: number, arg1: number): void;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        level: $Level;
        updateSpeed: boolean;
        reActivateSource: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        preventSpeedUpdate: number;
        network: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $RotatingInstance extends $ColoredLitOverlayInstance {
        setup(arg0: $KineticBlockEntity, arg1: $Direction$Axis_): $RotatingInstance;
        setup(arg0: $KineticBlockEntity, arg1: number): $RotatingInstance;
        setup(arg0: $KineticBlockEntity, arg1: $Direction$Axis_, arg2: number): $RotatingInstance;
        setup(arg0: $KineticBlockEntity): $RotatingInstance;
        setColor(arg0: $Color): $RotatingInstance;
        setColor(arg0: $KineticBlockEntity): $RotatingInstance;
        nudge(arg0: number, arg1: number, arg2: number): $RotatingInstance;
        rotateToFace(arg0: $Direction$Axis_): $RotatingInstance;
        rotateToFace(arg0: number, arg1: number, arg2: number): $RotatingInstance;
        rotateToFace(arg0: $Direction_, arg1: $Direction_): $RotatingInstance;
        rotateToFace(arg0: $Direction_): $RotatingInstance;
        rotateToFace(arg0: $Direction_, arg1: $Direction$Axis_): $RotatingInstance;
        setRotationOffset(arg0: number): $RotatingInstance;
        setPosition(arg0: number, arg1: number, arg2: number): $RotatingInstance;
        setPosition(arg0: $Vector3f): $RotatingInstance;
        setPosition(arg0: $Vec3i): $RotatingInstance;
        setRotationAxis(arg0: $Direction$Axis_): $RotatingInstance;
        setRotationAxis(arg0: number, arg1: number, arg2: number): $RotatingInstance;
        setRotationAxis(arg0: $Vector3f): $RotatingInstance;
        static colorFromBE(arg0: $KineticBlockEntity): number;
        setRotationalSpeed(arg0: number): $RotatingInstance;
        rotateTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $RotatingInstance;
        green: number;
        rotation: $Quaternionf;
        static SPEED_MULTIPLIER: number;
        rotationOffset: number;
        red: number;
        rotationalSpeed: number;
        blue: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rotationAxisZ: number;
        rotationAxisY: number;
        rotationAxisX: number;
        constructor(arg0: $InstanceType<$RotatingInstance>, arg1: $InstanceHandle);
    }
    export class $HorizontalAxisKineticBlock extends $KineticBlock {
        static getPreferredHorizontalAxis(arg0: $BlockPlaceContext): $Direction$Axis;
        explosionResistance: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static HORIZONTAL_AXIS: $Property<$Direction$Axis>;
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
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $RotatedPillarKineticBlock extends $KineticBlock {
        static getPreferredAxis(arg0: $BlockPlaceContext): $Direction$Axis;
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
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        static AXIS: $EnumProperty<$Direction$Axis>;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $KineticBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation, $IHaveHoveringInformation, $KineticBlockEntityExtension {
        addToTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        redirect$znb000$simulated$useProperSource(arg0: $Level_, arg1: $BlockPos_): $BlockEntity;
        handler$znb000$simulated$injectRemove(arg0: $CallbackInfo): void;
        handler$znb000$simulated$saveConnected(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean, arg3: $CallbackInfo): void;
        handler$znb000$simulated$readConnected(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean, arg3: $CallbackInfo): void;
        redirect$znb000$simulated$useProperSource2(arg0: $Level_, arg1: $BlockPos_): $BlockEntity;
        handler$znb000$simulated$removeConnected(arg0: $CallbackInfo): void;
        simulated$setConnectedToExtraKinetics(arg0: boolean): void;
        simulated$getConnectedToExtraKinetics(): boolean;
        onSpeedChanged(arg0: number): void;
        static switchToBlockState(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): void;
        warnOfMovement(): void;
        getFlickerScore(): number;
        getGeneratedSpeed(): number;
        addToGoggleTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        attachKinetics(): void;
        removeSource(): void;
        updateFromNetwork(arg0: number, arg1: number, arg2: number): void;
        static convertToLinear(arg0: number): number;
        getOrCreateNetwork(): $KineticNetwork;
        needsSpeedUpdate(): boolean;
        static convertToAngular(arg0: number): number;
        isOverStressed(): boolean;
        clearKineticInformation(): void;
        isSource(): boolean;
        handler$znh000$simulated$addExtraKineticsInfo(arg0: $List_<any>, arg1: boolean, arg2: $CallbackInfoReturnable<any>): void;
        isSpeedRequirementFulfilled(): boolean;
        simulated$setValidationCountdown(arg0: number): void;
        calculateAddedStressCapacity(): number;
        addPropagationLocations(arg0: $IRotate, arg1: $BlockState_, arg2: $List_<$BlockPos_>): $List<$BlockPos>;
        getRotationAngleOffset(arg0: $Direction$Axis_): number;
        propagateRotationTo(arg0: $KineticBlockEntity, arg1: $BlockState_, arg2: $BlockState_, arg3: $BlockPos_, arg4: boolean, arg5: boolean): number;
        calculateStressApplied(): number;
        getTheoreticalSpeed(): number;
        setSpeed(arg0: number): void;
        getSpeed(): number;
        setSource(arg0: $BlockPos_): void;
        detachKinetics(): void;
        hasNetwork(): boolean;
        setNetwork(arg0: number): void;
        tickAudio(): void;
        hasSource(): boolean;
        static convertToDirection(arg0: number, arg1: $Direction_): number;
        isCustomConnection(arg0: $KineticBlockEntity, arg1: $BlockState_, arg2: $BlockState_): boolean;
        containedFluidTooltip(arg0: $List_<$Component_>, arg1: boolean, arg2: $IFluidHandler): boolean;
        getIcon(arg0: boolean): $ItemStack;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        level: $Level;
        updateSpeed: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        preventSpeedUpdate: number;
        network: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get flickerScore(): number;
        get generatedSpeed(): number;
        get orCreateNetwork(): $KineticNetwork;
        get overStressed(): boolean;
        get speedRequirementFulfilled(): boolean;
        get theoreticalSpeed(): number;
    }
    export class $BlockBreakingKineticBlockEntity extends $KineticBlockEntity implements $BlockHarvester {
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        static isBreakable(arg0: $BlockState_, arg1: number): boolean;
        destroyNextTick(): void;
        onBlockBroken(arg0: $BlockState_): void;
        canBreak(arg0: $BlockState_, arg1: number): boolean;
        simulated$setDistributor(arg0: $AugerDistributor_): void;
        simulated$getAssociatedDistributor(): $AugerDistributor;
        depositItemStack(arg0: $BlockPos_, arg1: $ItemStack_): $ItemStack;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        level: $Level;
        updateSpeed: boolean;
        static NEXT_BREAKER_ID: $AtomicInteger;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        preventSpeedUpdate: number;
        network: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $AbstractEncasedShaftBlock extends $RotatedPillarKineticBlock {
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
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        static AXIS: $EnumProperty<$Direction$Axis>;
        constructor(arg0: $BlockBehaviour$Properties);
    }
}
