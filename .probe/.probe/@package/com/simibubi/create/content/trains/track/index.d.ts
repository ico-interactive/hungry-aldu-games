import { $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $Ingredient_, $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity, $SyncedBlockEntity, $IMergeableBE } from "@package/com/simibubi/create/foundation/blockEntity";
import { $TrackEdgePoint } from "@package/com/simibubi/create/content/trains/signal";
import { $DeltaTracker } from "@package/net/minecraft/client";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $InputEvent$InteractionKeyMappingTriggered, $RenderHighlightEvent$Block } from "@package/net/neoforged/neoforge/client/event";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $PortalTrackProvider$Exit, $PortalTrackProvider_ } from "@package/com/simibubi/create/api/contraption/train";
import { $SuperRenderTypeBuffer } from "@package/net/createmod/catnip/render";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $InteractionResultHolder, $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $TrackNodeLocation$DiscoveredLocation, $TrackNodeLocation, $TrackGraph, $EdgePointType, $TrackGraphLocation } from "@package/com/simibubi/create/content/trains/graph";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $StateDefinition, $BlockState_, $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $Instance } from "@package/dev/engine_room/flywheel/api/instance";
import { $Item_, $Item, $Item$Properties, $BlockItem, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockEntityConfigurationPacket } from "@package/com/simibubi/create/foundation/networking";
import { $MultiPosDestructionHandler, $ReducedDestroyEffects } from "@package/com/simibubi/create/foundation/block/render";
import { $NonNullBiFunction, $NonNullSupplier_, $NonNullSupplier } from "@package/com/tterrag/registrate/util/nullness";
import { $ModelProperty } from "@package/net/neoforged/neoforge/client/model/data";
import { $BooleanProperty, $EnumProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BakedModelWrapper } from "@package/net/neoforged/neoforge/client/model";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $AbstractVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $ShaderLightVisual, $BlockEntityVisual, $SectionTrackedVisual$SectionCollector_ } from "@package/dev/engine_room/flywheel/api/visual";
import { $Portal_, $Mirror_, $SoundType, $Block, $Block_, $Rotation_, $EntityBlock } from "@package/net/minecraft/world/level/block";
import { $BlockFace } from "@package/net/createmod/catnip/math";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $Vec3, $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BasePacketPayload$PacketTypeProvider, $ServerboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $Affine } from "@package/dev/engine_room/flywheel/lib/transform";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $Random, $Set_, $Map, $Set, $Spliterator, $Iterator, $List, $Collection_, $Collection } from "@package/java/util";
import { $ServerboundCustomPayloadPacket, $ClientboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $BlockEntityBehaviour, $BehaviourType } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $PlayerInteractEvent$RightClickBlock } from "@package/net/neoforged/neoforge/event/entity/player";
import { $Supplier_, $Consumer_, $BiConsumer_, $Function_, $BiFunction_, $Supplier } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction$AxisDirection, $Direction_, $Direction, $IdMapper, $Direction$AxisDirection_ } from "@package/net/minecraft/core";
import { $SpecialBlockStateGen } from "@package/com/simibubi/create/foundation/data";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IHaveBigOutline, $IBE, $ProperWaterloggedBlock } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Iterable, $Record, $Class } from "@package/java/lang";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Pair, $Couple, $WorldAttached } from "@package/net/createmod/catnip/data";
import { $LevelAccessor, $ItemLike_, $BlockGetter, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $SpecialBlockItemRequirement } from "@package/com/simibubi/create/api/schematic/requirement";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $VertexConsumer, $PoseStack, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $LayeredDraw$Layer, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $BlockEntityType_, $BlockEntity, $BlockEntityTicker, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/trains/track" {
    export class $TrackModel extends $BakedModelWrapper<$BakedModel> {
        constructor(arg0: $BakedModel);
    }
    export class $TrackVoxelShapes {
        static longOrthogonalZ(): $VoxelShape;
        static longOrthogonalX(): $VoxelShape;
        static orthogonal(): $VoxelShape;
        static ascending(): $VoxelShape;
        static diagonal(): $VoxelShape;
        static longOrthogonalZOffset(): $VoxelShape;
        constructor();
    }
    export class $CurvedTrackSelectionPacket extends $BlockEntityConfigurationPacket<$TrackBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $CurvedTrackSelectionPacket>;
        constructor(arg0: $BlockPos_, arg1: $BlockPos_, arg2: boolean, arg3: number, arg4: number);
    }
    export class $TrackBlockEntityTilt {
        static compareHandles(arg0: $Vec3_, arg1: $Vec3_): boolean;
        undoSmoothing(): void;
        tryApplySmoothing(): void;
        getYOffsetForAxisEnd(arg0: $Vec3_): number;
        captureSmoothingHandles(): void;
        restoreToOriginalCurve(arg0: $BezierConnection): $BezierConnection;
        static ASCENDING_PROPERTY: $ModelProperty<number>;
        smoothingAngle: (number) | undefined;
        constructor(arg0: $TrackBlockEntity);
    }
    export class $TrackBlock$RenderProperties extends $ReducedDestroyEffects implements $MultiPosDestructionHandler {
        getExtraPositions(arg0: $ClientLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: number): $Set<$BlockPos>;
        constructor();
    }
    export class $FakeTrackBlock extends $Block implements $EntityBlock, $ProperWaterloggedBlock {
        static keepAlive(arg0: $LevelAccessor, arg1: $BlockPos_): void;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getTicker<T extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<T>): $BlockEntityTicker<T>;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        updateWater(arg0: $LevelAccessor, arg1: $BlockState_, arg2: $BlockPos_): void;
        withWater(arg0: $BlockState_, arg1: $BlockPlaceContext): $BlockState;
        fluidState(arg0: $BlockState_): $FluidState;
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
    export class $TrackVisual extends $AbstractVisual implements $BlockEntityVisual<$TrackBlockEntity>, $ShaderLightVisual {
        _delete(): void;
        collectLightSections(): $LongSet;
        collectCrumblingInstances(arg0: $Consumer_<$Instance>): void;
        setSectionCollector(arg0: $SectionTrackedVisual$SectionCollector_): void;
        constructor(arg0: $VisualizationContext, arg1: $TrackBlockEntity, arg2: number);
        set sectionCollector(value: $SectionTrackedVisual$SectionCollector_);
    }
    export class $TrackMaterial {
        static deserialize(arg0: string): $TrackMaterial;
        resourceName(): string;
        getBlock(): $TrackBlock;
        static fromItem(arg0: $Item_): $TrackMaterial;
        static allBlocks(): $List<$NonNullSupplier<$Block>>;
        isFromMod(arg0: string): boolean;
        static allFromMod(arg0: string): $List<$TrackMaterial>;
        asStack(arg0: number): $ItemStack;
        asStack(): $ItemStack;
        static allBlocksFromMod(arg0: string): $List<$NonNullSupplier<$Block>>;
        getModelHolder(): $TrackMaterial$TrackModelHolder;
        getBlockSupplier(): $NonNullSupplier<$TrackBlock>;
        createBlock(arg0: $BlockBehaviour$Properties): $TrackBlock;
        static ALL: $Map<$ResourceLocation, $TrackMaterial>;
        trackBlock: $NonNullSupplier<$NonNullSupplier<$TrackBlock>>;
        trackType: $TrackMaterial$TrackType;
        langName: string;
        static ANDESITE: $TrackMaterial;
        particle: $ResourceLocation;
        id: $ResourceLocation;
        sleeperIngredient: $Ingredient;
        railsIngredient: $Ingredient;
        constructor(arg0: $ResourceLocation_, arg1: string, arg2: $NonNullSupplier_<$NonNullSupplier<$TrackBlock>>, arg3: $ResourceLocation_, arg4: $Ingredient_, arg5: $Ingredient_, arg6: $TrackMaterial$TrackType, arg7: $Supplier_<$Supplier<$TrackMaterial$TrackModelHolder>>, arg8: $TrackMaterial$TrackType$TrackBlockFactory_);
        constructor(arg0: $ResourceLocation_, arg1: string, arg2: $NonNullSupplier_<$NonNullSupplier<$TrackBlock>>, arg3: $ResourceLocation_, arg4: $Ingredient_, arg5: $Ingredient_, arg6: $TrackMaterial$TrackType, arg7: $Supplier_<$Supplier<$TrackMaterial$TrackModelHolder>>);
        get block(): $TrackBlock;
        get modelHolder(): $TrackMaterial$TrackModelHolder;
        get blockSupplier(): $NonNullSupplier<$TrackBlock>;
    }
    export class $BezierConnection$Runtime {
    }
    export class $CurvedTrackDestroyPacket extends $BlockEntityConfigurationPacket<$TrackBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $CurvedTrackDestroyPacket>;
        constructor(arg0: $BlockPos_, arg1: $BlockPos_, arg2: $BlockPos_, arg3: boolean);
    }
    export class $BezierConnection$Bezierator implements $Iterator<$BezierConnection$Segment> {
        remove(): void;
        forEachRemaining(arg0: $Consumer_<$BezierConnection$Segment>): void;
    }
    export class $BezierConnection$GirderAngles {
        beams: $Couple<$PoseStack$Pose>[];
        lightPosition: $BlockPos[];
        length: number;
        beamCaps: $Couple<$Couple<$PoseStack$Pose>>[];
    }
    export class $TrackBlockOutline$BezierPointSelection extends $Record {
        loc(): $BezierTrackPointLocation;
        direction(): $Vec3;
        vec(): $Vec3;
        angles(): $Vec3;
        blockEntity(): $TrackBlockEntity;
        constructor(blockEntity: $TrackBlockEntity, loc: $BezierTrackPointLocation_, vec: $Vec3_, angles: $Vec3_, direction: $Vec3_);
    }
    /**
     * Values that may be interpreted as {@link $TrackBlockOutline$BezierPointSelection}.
     */
    export type $TrackBlockOutline$BezierPointSelection_ = { loc?: $BezierTrackPointLocation_, angles?: $Vec3_, vec?: $Vec3_, direction?: $Vec3_, blockEntity?: $TrackBlockEntity,  } | [loc?: $BezierTrackPointLocation_, angles?: $Vec3_, vec?: $Vec3_, direction?: $Vec3_, blockEntity?: $TrackBlockEntity, ];
    export class $TrackTargetingBlockItem extends $BlockItem {
        getType(arg0: $ItemStack_): $EdgePointType<never>;
        static withGraphLocation(arg0: $Level_, arg1: $BlockPos_, arg2: boolean, arg3: $BezierTrackPointLocation_, arg4: $EdgePointType<never>, arg5: $BiConsumer_<$TrackTargetingBlockItem$OverlapResult, $TrackGraphLocation>): void;
        redirect$ced000$sable$getLookAngle$mixinextras$bridge$9(arg0: $Player, arg1: $LocalRef<any>): $Vec3;
        static ofType<T extends $Block>(arg0: $EdgePointType<never>): $NonNullBiFunction<T, $Item$Properties, $TrackTargetingBlockItem>;
        useOnCurve(arg0: $TrackBlockOutline$BezierPointSelection_, arg1: $ItemStack_): boolean;
        redirect$ced000$sable$getLookAngle(arg0: $Player, arg1: $UseOnContext): $Vec3;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Block_, arg1: $Item$Properties, arg2: $EdgePointType<never>);
    }
    export class $TrackPropagator {
        static onRailAdded(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_): $TrackGraph;
        static onRailRemoved(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_): void;
        static isValidGraphNodeLocation(arg0: $TrackNodeLocation$DiscoveredLocation, arg1: $Collection_<$TrackNodeLocation$DiscoveredLocation>, arg2: boolean): boolean;
        constructor();
    }
    export class $TrackTargetingBehaviour<T extends $TrackEdgePoint> extends $BlockEntityBehaviour {
        createEdgePoint(): T;
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        isOnCurve(): boolean;
        isOrthogonal(): boolean;
        getTargetBezier(): $BezierTrackPointLocation;
        getGlobalPosition(): $BlockPos;
        hasValidTrack(): boolean;
        getEdgePoint(): T;
        getTrackBlockState(): $BlockState;
        static render(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $Direction$AxisDirection_, arg3: $BezierTrackPointLocation_, arg4: $PoseStack, arg5: $MultiBufferSource_, arg6: number, arg7: number, arg8: $TrackTargetingBehaviour$RenderedTrackOverlayType_, arg9: number): void;
        getTrack(): $ITrackBlock;
        getTargetDirection(): $Direction$AxisDirection;
        invalidateEdgePoint(arg0: $CompoundTag_): void;
        determineGraphLocation(): $TrackGraphLocation;
        getPositionForMapMarker(): $BlockPos;
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$TrackTargetingBehaviour<never>>;
        constructor(arg0: $SmartBlockEntity, arg1: $EdgePointType<T>);
        get onCurve(): boolean;
        get orthogonal(): boolean;
        get targetBezier(): $BezierTrackPointLocation;
        get globalPosition(): $BlockPos;
        get edgePoint(): T;
        get trackBlockState(): $BlockState;
        get track(): $ITrackBlock;
        get targetDirection(): $Direction$AxisDirection;
        get positionForMapMarker(): $BlockPos;
    }
    export class $AllPortalTracks {
        static tryRegisterIntegration(arg0: $ResourceLocation_, arg1: $PortalTrackProvider_): void;
        static registerDefaults(): void;
        static fromPortal(arg0: $ServerLevel, arg1: $BlockFace, arg2: $ResourceKey_<$Level>, arg3: $ResourceKey_<$Level>, arg4: $Portal_): $PortalTrackProvider$Exit;
        constructor();
    }
    export class $BezierTrackPointLocation extends $Record {
        segment(): number;
        curveTarget(): $BlockPos;
        static CODEC: $Codec<$BezierTrackPointLocation>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BezierTrackPointLocation>;
        constructor(curveTarget: $BlockPos_, segment: number);
    }
    /**
     * Values that may be interpreted as {@link $BezierTrackPointLocation}.
     */
    export type $BezierTrackPointLocation_ = { curveTarget?: $BlockPos_, segment?: number,  } | [curveTarget?: $BlockPos_, segment?: number, ];
    export class $TrackTargetingBlockItem$OverlapResult extends $Enum<$TrackTargetingBlockItem$OverlapResult> {
        static values(): $TrackTargetingBlockItem$OverlapResult[];
        static valueOf(arg0: string): $TrackTargetingBlockItem$OverlapResult;
        feedback: string;
        static VALID: $TrackTargetingBlockItem$OverlapResult;
        static NO_TRACK: $TrackTargetingBlockItem$OverlapResult;
        static OCCUPIED: $TrackTargetingBlockItem$OverlapResult;
        static JUNCTION: $TrackTargetingBlockItem$OverlapResult;
    }
    /**
     * Values that may be interpreted as {@link $TrackTargetingBlockItem$OverlapResult}.
     */
    export type $TrackTargetingBlockItem$OverlapResult_ = "valid" | "occupied" | "junction" | "no_track";
    export class $TrackPaver {
        static paveStraight(arg0: $Level_, arg1: $BlockPos_, arg2: $Vec3_, arg3: number, arg4: $Block_, arg5: boolean, arg6: $Set_<$BlockPos_>): number;
        static paveCurve(arg0: $Level_, arg1: $BezierConnection, arg2: $Block_, arg3: boolean, arg4: $Set_<$BlockPos_>): number;
        constructor();
    }
    export class $TrackPropagator$FrontierEntry {
    }
    export class $TrackBlockOutline {
        static drawCurveSelection(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: $Vec3_): void;
        static renderShape(arg0: $VoxelShape, arg1: $PoseStack, arg2: $VertexConsumer, arg3: boolean): void;
        static pickCurves(): void;
        static drawCustomBlockSelection(arg0: $RenderHighlightEvent$Block): void;
        static result: $TrackBlockOutline$BezierPointSelection;
        static TRACKS_WITH_TURNS: $WorldAttached<$Map<$BlockPos, $TrackBlockEntity>>;
        constructor();
    }
    export class $TrackTargetingBehaviour$RenderedTrackOverlayType extends $Enum<$TrackTargetingBehaviour$RenderedTrackOverlayType> {
        static values(): $TrackTargetingBehaviour$RenderedTrackOverlayType[];
        static valueOf(arg0: string): $TrackTargetingBehaviour$RenderedTrackOverlayType;
        static SIGNAL: $TrackTargetingBehaviour$RenderedTrackOverlayType;
        static STATION: $TrackTargetingBehaviour$RenderedTrackOverlayType;
        static DUAL_SIGNAL: $TrackTargetingBehaviour$RenderedTrackOverlayType;
        static OBSERVER: $TrackTargetingBehaviour$RenderedTrackOverlayType;
    }
    /**
     * Values that may be interpreted as {@link $TrackTargetingBehaviour$RenderedTrackOverlayType}.
     */
    export type $TrackTargetingBehaviour$RenderedTrackOverlayType_ = "station" | "signal" | "dual_signal" | "observer";
    export class $TrackPlacement$ConnectingFrom extends $Record {
        end(): $Vec3;
        pos(): $BlockPos;
        normal(): $Vec3;
        axis(): $Vec3;
        static CODEC: $Codec<$TrackPlacement$ConnectingFrom>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $TrackPlacement$ConnectingFrom>;
        constructor(pos: $BlockPos_, axis: $Vec3_, normal: $Vec3_, end: $Vec3_);
    }
    /**
     * Values that may be interpreted as {@link $TrackPlacement$ConnectingFrom}.
     */
    export type $TrackPlacement$ConnectingFrom_ = { normal?: $Vec3_, axis?: $Vec3_, end?: $Vec3_, pos?: $BlockPos_,  } | [normal?: $Vec3_, axis?: $Vec3_, end?: $Vec3_, pos?: $BlockPos_, ];
    export class $TrackBlockItem extends $BlockItem {
        getPlacementState(arg0: $UseOnContext): $BlockState;
        static clearSelection(arg0: $ItemStack_, arg1: $Level_, arg2: $Player): $InteractionResultHolder<$ItemStack>;
        static select(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $Vec3_, arg3: $ItemStack_): boolean;
        static sendExtenderPacket(arg0: $PlayerInteractEvent$RightClickBlock): void;
        redirect$ced000$sable$getLookAngle$mixinextras$bridge$9(arg0: $Player, arg1: $LocalRef<any>): $Vec3;
        redirect$ced000$sable$getLookAngle(arg0: $Player, arg1: $UseOnContext): $Vec3;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Block_, arg1: $Item$Properties);
    }
    export class $TrackMaterial$TrackType {
        id: $ResourceLocation;
        static STANDARD: $TrackMaterial$TrackType;
        constructor(arg0: $ResourceLocation_, arg1: $TrackMaterial$TrackType$TrackBlockFactory_);
    }
    export class $BezierConnection implements $Iterable<$BezierConnection$Segment> {
        clone(): $BezierConnection;
        getLength(): number;
        iterator(): $Iterator<$BezierConnection$Segment>;
        getBounds(): $AABB;
        getKey(): $BlockPos;
        write(arg0: $BlockPos_): $CompoundTag;
        write(arg0: $FriendlyByteBuf): void;
        getPosition(arg0: number): $Vec3;
        getRadius(): number;
        isPrimary(): boolean;
        yOffsetAt(arg0: $Vec3_): number;
        incrementT(arg0: number, arg1: number): number;
        getSegmentT(arg0: number): number;
        getBakedSegments(): $BezierConnection$SegmentAngles;
        getBakedGirders(): $BezierConnection$GirderAngles;
        getHandleLength(): number;
        getSegmentCount(): number;
        getTrackItemCost(): number;
        addItemsToPlayer(arg0: $Player): void;
        getGirderItemCost(): number;
        equalsSansMaterial(arg0: $BezierConnection): boolean;
        spawnDestroyParticles(arg0: $Level_): void;
        getNormal(arg0: number): $Vec3;
        rasterise(): $Map<$Pair<number, number>, number>;
        spawnItems(arg0: $Level_): void;
        getStepLUT(): number[];
        setMaterial(arg0: $TrackMaterial): void;
        getMaterial(): $TrackMaterial;
        secondary(): $BezierConnection;
        spliterator(): $Spliterator<$BezierConnection$Segment>;
        forEach(arg0: $Consumer_<$BezierConnection$Segment>): void;
        axes: $Couple<$Vec3>;
        smoothing: $Couple<number>;
        hasGirder: boolean;
        starts: $Couple<$Vec3>;
        normals: $Couple<$Vec3>;
        bePositions: $Couple<$BlockPos>;
        primary: boolean;
        constructor(arg0: $CompoundTag_, arg1: $BlockPos_);
        constructor(arg0: $FriendlyByteBuf);
        constructor(arg0: $Couple<$BlockPos_>, arg1: $Couple<$Vec3_>, arg2: $Couple<$Vec3_>, arg3: $Couple<$Vec3_>, arg4: boolean, arg5: boolean, arg6: $TrackMaterial);
        [Symbol.iterator](): Iterator<$BezierConnection$Segment>
        get length(): number;
        get bounds(): $AABB;
        get key(): $BlockPos;
        get radius(): number;
        get bakedSegments(): $BezierConnection$SegmentAngles;
        get bakedGirders(): $BezierConnection$GirderAngles;
        get handleLength(): number;
        get segmentCount(): number;
        get trackItemCost(): number;
        get girderItemCost(): number;
        get stepLUT(): number[];
    }
    export class $TrackBlock extends $Block implements $IBE<$TrackBlockEntity>, $IWrenchable, $ITrackBlock, $SpecialBlockItemRequirement, $ProperWaterloggedBlock, $IHaveBigOutline {
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getBlockEntityType(): $BlockEntityType<$TrackBlockEntity>;
        getCurveStart(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Vec3_): $Vec3;
        getConnected(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: boolean, arg4: $TrackNodeLocation): $Collection<$TrackNodeLocation$DiscoveredLocation>;
        trackEquals(arg0: $BlockState_, arg1: $BlockState_): boolean;
        getBogeyAnchor(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): $BlockState;
        getYOffsetAt(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Vec3_): number;
        getTrackAxes(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): $List<$Vec3>;
        getUpNormal(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): $Vec3;
        redirect$cee000$sable$getLookAngle$mixinextras$bridge$62(arg0: $Player, arg1: $LocalRef<any>): $Vec3;
        getRequiredItems(arg0: $BlockState_, arg1: $BlockEntity): $ItemRequirement;
        getBlockEntityClass(): $Class<$TrackBlockEntity>;
        overlay(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockState_): $BlockState;
        getMaterial(): $TrackMaterial;
        prepareAssemblyOverlay(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_, arg4: $PoseStack): $PartialModel;
        prepareTrackOverlay<Self extends $Affine<Self>>(arg0: $Affine<Self>, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BezierTrackPointLocation_, arg5: $Direction$AxisDirection_, arg6: $TrackTargetingBehaviour$RenderedTrackOverlayType_): $PartialModel;
        animateTick(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Random): void;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        redirect$cee000$sable$getLookAngle(arg0: $Player, arg1: $BlockPlaceContext): $Vec3;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$TrackBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$TrackBlockEntity, $InteractionResult>): $InteractionResult;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($TrackBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$TrackBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $TrackBlockEntity;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        isSlope(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        getElevationAtCenter(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): number;
        getNearestTrackAxis(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Vec3_): $Pair<$Vec3, $Direction$AxisDirection>;
        updateWater(arg0: $LevelAccessor, arg1: $BlockState_, arg2: $BlockPos_): void;
        withWater(arg0: $BlockState_, arg1: $BlockPlaceContext): $BlockState;
        fluidState(arg0: $BlockState_): $FluidState;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
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
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static HAS_BE: $BooleanProperty;
        static SHAPE: $EnumProperty<$TrackShape>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties, arg1: $TrackMaterial);
        get blockEntityType(): $BlockEntityType<$TrackBlockEntity>;
        get blockEntityClass(): $Class<$TrackBlockEntity>;
        get material(): $TrackMaterial;
    }
    export class $PlaceExtendedCurvePacket extends $Record implements $ServerboundPacketPayload {
        handle(arg0: $ServerPlayer): void;
        ctrlDown(): boolean;
        mainHand(): boolean;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $PlaceExtendedCurvePacket>;
        constructor(mainHand: boolean, ctrlDown: boolean);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $PlaceExtendedCurvePacket}.
     */
    export type $PlaceExtendedCurvePacket_ = { mainHand?: boolean, ctrlDown?: boolean,  } | [mainHand?: boolean, ctrlDown?: boolean, ];
    export class $TrackMaterial$TrackModelHolder extends $Record {
        tie(): $PartialModel;
        leftSegment(): $PartialModel;
        rightSegment(): $PartialModel;
        constructor(tie: $PartialModel, leftSegment: $PartialModel, rightSegment: $PartialModel);
    }
    /**
     * Values that may be interpreted as {@link $TrackMaterial$TrackModelHolder}.
     */
    export type $TrackMaterial$TrackModelHolder_ = { leftSegment?: $PartialModel, rightSegment?: $PartialModel, tie?: $PartialModel,  } | [leftSegment?: $PartialModel, rightSegment?: $PartialModel, tie?: $PartialModel, ];
    export class $FakeTrackBlockEntity extends $SyncedBlockEntity {
        keepAlive(): void;
        randomTick(): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $TrackTargetingClient {
        static render(arg0: $PoseStack, arg1: $SuperRenderTypeBuffer, arg2: $Vec3_): void;
        static clientTick(): void;
        constructor();
    }
    export class $TrackBlockEntity extends $SmartBlockEntity implements $TransformableBlockEntity, $IMergeableBE {
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        accept(arg0: $BlockEntity): void;
        bind(arg0: $ResourceKey_<$Level>, arg1: $BlockPos_): void;
        isTilted(): boolean;
        removeConnection(arg0: $BlockPos_): void;
        addConnection(arg0: $BezierConnection): void;
        getConnections(): $Map<$BlockPos, $BezierConnection>;
        validateConnections(): void;
        removeInboundConnections(arg0: boolean): void;
        hasInteractableConnections(): boolean;
        manageFakeTracksAlong(arg0: $BezierConnection, arg1: boolean): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        boundLocation: $Pair<$ResourceKey<$Level>, $BlockPos>;
        tilt: $TrackBlockEntityTilt;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get tilted(): boolean;
        get connections(): $Map<$BlockPos, $BezierConnection>;
    }
    export class $TrackPlacement {
        static tryConnect(arg0: $Level_, arg1: $Player, arg2: $BlockPos_, arg3: $BlockState_, arg4: $ItemStack_, arg5: boolean, arg6: boolean): $TrackPlacement$PlacementInfo;
        static clientTick(): void;
        static cached: $TrackPlacement$PlacementInfo;
        constructor();
    }
    export class $TrackBlockStateGenerator extends $SpecialBlockStateGen {
        constructor();
    }
    export class $BezierConnection$Segment {
        normal: $Vec3;
        faceNormal: $Vec3;
        index: number;
        derivative: $Vec3;
        position: $Vec3;
        constructor();
    }
    export class $TrackMaterialFactory {
        static make(arg0: $ResourceLocation_): $TrackMaterialFactory;
        block(arg0: $NonNullSupplier_<$NonNullSupplier<$TrackBlock>>): $TrackMaterialFactory;
        lang(arg0: string): $TrackMaterialFactory;
        build(): $TrackMaterial;
        defaultModels(): $TrackMaterialFactory;
        standardModels(): $TrackMaterialFactory;
        customBlockFactory(arg0: $TrackMaterial$TrackType$TrackBlockFactory_): $TrackMaterialFactory;
        customModels(arg0: $Supplier_<$Supplier<$PartialModel>>, arg1: $Supplier_<$Supplier<$PartialModel>>, arg2: $Supplier_<$Supplier<$PartialModel>>): $TrackMaterialFactory;
        noRecipeGen(): $TrackMaterialFactory;
        particle(arg0: $ResourceLocation_): $TrackMaterialFactory;
        sleeper(arg0: $Ingredient_): $TrackMaterialFactory;
        sleeper(...arg0: $ItemLike_[]): $TrackMaterialFactory;
        trackType(arg0: $TrackMaterial$TrackType): $TrackMaterialFactory;
        rails(...arg0: $ItemLike_[]): $TrackMaterialFactory;
        rails(arg0: $Ingredient_): $TrackMaterialFactory;
        constructor(arg0: $ResourceLocation_);
    }
    export class $CurvedTrackInteraction {
        static onClickInput(arg0: $InputEvent$InteractionKeyMappingTriggered): boolean;
        static clientTick(): void;
        constructor();
    }
    export class $TrackShape extends $Enum<$TrackShape> implements $StringRepresentable {
        static values(): $TrackShape[];
        static valueOf(arg0: string): $TrackShape;
        rotate(arg0: $Rotation_): $TrackShape;
        mirror(arg0: $Mirror_): $TrackShape;
        isPortal(): boolean;
        getAxes(): $List<$Vec3>;
        isJunction(): boolean;
        static asPortal(arg0: $Direction_): $TrackShape;
        getModelRotation(): number;
        getNormal(): $Vec3;
        getModel(): string;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CR_O: $TrackShape;
        static TW: $TrackShape;
        static AE: $TrackShape;
        static CR_D: $TrackShape;
        static AN: $TrackShape;
        static CR_PDX: $TrackShape;
        static CR_NDZ: $TrackShape;
        static TE: $TrackShape;
        static AS: $TrackShape;
        static CR_PDZ: $TrackShape;
        static PD: $TrackShape;
        static ZO: $TrackShape;
        static ND: $TrackShape;
        static AW: $TrackShape;
        static CR_NDX: $TrackShape;
        static XO: $TrackShape;
        static TN: $TrackShape;
        static NONE: $TrackShape;
        static TS: $TrackShape;
        get portal(): boolean;
        get axes(): $List<$Vec3>;
        get junction(): boolean;
        get modelRotation(): number;
        get normal(): $Vec3;
        get model(): string;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $TrackShape}.
     */
    export type $TrackShape_ = "none" | "zo" | "xo" | "pd" | "nd" | "an" | "as" | "ae" | "aw" | "tn" | "ts" | "te" | "tw" | "cr_o" | "cr_d" | "cr_pdx" | "cr_pdz" | "cr_ndx" | "cr_ndz";
    export class $TrackVisual$BezierTrackVisual {
    }
    export class $TrackRenderer extends $SafeBlockEntityRenderer<$TrackBlockEntity> {
        shouldRenderOffScreen(arg0: $TrackBlockEntity): boolean;
        static getModelAngles(arg0: $Vec3_, arg1: $Vec3_): $Vec3;
        static renderBezierTurn(arg0: $Level_, arg1: $BezierConnection, arg2: $PoseStack, arg3: $VertexConsumer): void;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $BezierConnection$SegmentAngles {
        lightPosition: $BlockPos[];
        length: number;
        tieTransform: $PoseStack$Pose[];
        railTransforms: $Couple<$PoseStack$Pose>[];
    }
    export class $TrackPlacementOverlay implements $LayeredDraw$Layer {
        render(arg0: $GuiGraphics, arg1: $DeltaTracker): void;
        static INSTANCE: $TrackPlacementOverlay;
        constructor();
    }
    export class $TrackVisual$BezierTrackVisual$GirderVisual {
    }
    export class $ITrackBlock {
        static getMaterialSimple(arg0: $BlockGetter, arg1: $Vec3_): $TrackMaterial;
        static getMaterialSimple(arg0: $BlockGetter, arg1: $Vec3_, arg2: $TrackMaterial): $TrackMaterial;
        static addToListIfConnected(arg0: $TrackNodeLocation, arg1: $Collection_<$TrackNodeLocation$DiscoveredLocation>, arg2: $BiFunction_<number, boolean, $Vec3>, arg3: $Function_<boolean, $Vec3>, arg4: $Function_<boolean, $ResourceKey<$Level>>, arg5: $Function_<$Vec3, number>, arg6: $Vec3_, arg7: $BezierConnection, arg8: $BiFunction_<boolean, $Vec3, $TrackMaterial>): void;
        static walkConnectedTracks(arg0: $BlockGetter, arg1: $TrackNodeLocation, arg2: boolean): $Collection<$TrackNodeLocation$DiscoveredLocation>;
    }
    export interface $ITrackBlock {
        isSlope(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        getCurveStart(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Vec3_): $Vec3;
        getConnected(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: boolean, arg4: $TrackNodeLocation): $Collection<$TrackNodeLocation$DiscoveredLocation>;
        trackEquals(arg0: $BlockState_, arg1: $BlockState_): boolean;
        getBogeyAnchor(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): $BlockState;
        getYOffsetAt(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Vec3_): number;
        getTrackAxes(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): $List<$Vec3>;
        getUpNormal(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): $Vec3;
        overlay(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockState_): $BlockState;
        getMaterial(): $TrackMaterial;
        getElevationAtCenter(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): number;
        getNearestTrackAxis(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Vec3_): $Pair<$Vec3, $Direction$AxisDirection>;
        prepareAssemblyOverlay(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_, arg4: $PoseStack): $PartialModel;
        prepareTrackOverlay<Self extends $Affine<Self>>(arg0: $Affine<Self>, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BezierTrackPointLocation_, arg5: $Direction$AxisDirection_, arg6: $TrackTargetingBehaviour$RenderedTrackOverlayType_): $PartialModel;
        get material(): $TrackMaterial;
    }
    export class $TrackMaterial$TrackType$TrackBlockFactory {
    }
    export interface $TrackMaterial$TrackType$TrackBlockFactory {
        create(arg0: $BlockBehaviour$Properties, arg1: $TrackMaterial): $TrackBlock;
    }
    /**
     * Values that may be interpreted as {@link $TrackMaterial$TrackType$TrackBlockFactory}.
     */
    export type $TrackMaterial$TrackType$TrackBlockFactory_ = ((arg0: $BlockBehaviour$Properties, arg1: $TrackMaterial) => $TrackBlock);
    export class $TrackPlacement$PlacementInfo {
        withMessage(arg0: string): $TrackPlacement$PlacementInfo;
        tooJumbly(): $TrackPlacement$PlacementInfo;
        requiredPavement: number;
        trackMaterial: $TrackMaterial;
        hasRequiredPavement: boolean;
        requiredTracks: number;
        hasRequiredTracks: boolean;
        constructor(arg0: $TrackMaterial);
    }
}
