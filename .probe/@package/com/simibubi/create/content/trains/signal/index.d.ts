import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $TrackTargetingBehaviour } from "@package/com/simibubi/create/content/trains/track";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $UUID, $List, $UUID_, $List_, $Map, $Set } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $Train } from "@package/com/simibubi/create/content/trains/entity";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $TrackGraph, $EdgePointType, $EdgeData, $DimensionPalette, $TrackNode, $TrackNodeLocation, $TrackEdge } from "@package/com/simibubi/create/content/trains/graph";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Color } from "@package/net/createmod/catnip/theme";
import { $Enum, $Record, $Class } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Pair, $Couple } from "@package/net/createmod/catnip/data";
import { $LevelAccessor, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $EnumProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $AbstractBlockEntityVisual, $SimpleTickableVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $TickableVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $ClientboundPacketPayload, $BasePacketPayload$PacketTypeProvider } from "@package/net/createmod/catnip/net/base";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/trains/signal" {
    export class $SignalEdgeGroupPacket extends $Record implements $ClientboundPacketPayload {
        add(): boolean;
        handle(arg0: $LocalPlayer): void;
        ids(): $List<$UUID>;
        colors(): $List<$EdgeGroupColor>;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $SignalEdgeGroupPacket>;
        constructor(arg0: $UUID_, arg1: $EdgeGroupColor_);
        constructor(ids: $List_<$UUID_>, colors: $List_<$EdgeGroupColor_>, add: boolean);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $SignalEdgeGroupPacket}.
     */
    export type $SignalEdgeGroupPacket_ = { colors?: $List_<$EdgeGroupColor_>, ids?: $List_<$UUID_>, add?: boolean,  } | [colors?: $List_<$EdgeGroupColor_>, ids?: $List_<$UUID_>, add?: boolean, ];
    export class $SignalEdgeGroup {
        removeIntersection(arg0: $UUID_): void;
        putIntersection(arg0: $UUID_, arg1: $UUID_): void;
        resolveColor(): void;
        write(): $CompoundTag;
        static read(arg0: $CompoundTag_): $SignalEdgeGroup;
        asFallback(): $SignalEdgeGroup;
        isOccupiedUnless(arg0: $SignalBoundary): boolean;
        isOccupiedUnless(arg0: $Train): boolean;
        putAdjacent(arg0: $UUID_): void;
        removeAdjacent(arg0: $UUID_): void;
        fallbackGroup: boolean;
        color: $EdgeGroupColor;
        reserved: $SignalBoundary;
        intersectingResolved: $Set<$SignalEdgeGroup>;
        adjacent: $Set<$UUID>;
        id: $UUID;
        trains: $Set<$Train>;
        intersecting: $Map<$UUID, $UUID>;
        constructor(arg0: $UUID_);
    }
    export class $SignalBlock extends $Block implements $IBE<$SignalBlockEntity>, $IWrenchable {
        getBlockEntityType(): $BlockEntityType<$SignalBlockEntity>;
        getBlockEntityClass(): $Class<$SignalBlockEntity>;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$SignalBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$SignalBlockEntity, $InteractionResult>): $InteractionResult;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($SignalBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$SignalBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $SignalBlockEntity;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
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
        static TYPE: $EnumProperty<$SignalBlock$SignalType>;
        soundType: $SoundType;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static POWERED: $BooleanProperty;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$SignalBlockEntity>;
        get blockEntityClass(): $Class<$SignalBlockEntity>;
    }
    export class $EdgeGroupColor extends $Enum<$EdgeGroupColor> {
        get(): $Color;
        static values(): $EdgeGroupColor[];
        static valueOf(arg0: string): $EdgeGroupColor;
        static getDefault(): $EdgeGroupColor;
        static findNextAvailable(arg0: number): $EdgeGroupColor;
        strikeFrom(arg0: number): number;
        static RED: $EdgeGroupColor;
        static WHITE: $EdgeGroupColor;
        static BLUE: $EdgeGroupColor;
        static LAVENDER: $EdgeGroupColor;
        static YELLOW: $EdgeGroupColor;
        static CYAN: $EdgeGroupColor;
        static GREEN: $EdgeGroupColor;
        static BROWN: $EdgeGroupColor;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $EdgeGroupColor>;
        static ORANGE: $EdgeGroupColor;
        static get default(): $EdgeGroupColor;
    }
    /**
     * Values that may be interpreted as {@link $EdgeGroupColor}.
     */
    export type $EdgeGroupColor_ = "yellow" | "green" | "blue" | "orange" | "lavender" | "red" | "cyan" | "brown" | "white";
    export class $SignalBlock$SignalType extends $Enum<$SignalBlock$SignalType> implements $StringRepresentable {
        static values(): $SignalBlock$SignalType[];
        static valueOf(arg0: string): $SignalBlock$SignalType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static ENTRY_SIGNAL: $SignalBlock$SignalType;
        static CROSS_SIGNAL: $SignalBlock$SignalType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SignalBlock$SignalType}.
     */
    export type $SignalBlock$SignalType_ = "entry_signal" | "cross_signal";
    export class $SignalBoundary extends $TrackEdgePoint {
        setGroup(arg0: boolean, arg1: $UUID_): void;
        getStateFor(arg0: $BlockPos_): $SignalBlockEntity$SignalState;
        getOverlayFor(arg0: $BlockPos_): $SignalBlockEntity$OverlayState;
        cycleSignalType(arg0: $BlockPos_): void;
        isForcedRed(arg0: $TrackNode): boolean;
        isForcedRed(arg0: boolean): boolean;
        setGroupAndUpdate(arg0: $TrackNode, arg1: $UUID_): void;
        getGroup(arg0: $TrackNode): $UUID;
        queueUpdate(arg0: $TrackNode): void;
        getTypeFor(arg0: $BlockPos_): $SignalBlock$SignalType;
        updateBlockEntityPower(arg0: $SignalBlockEntity): void;
        edgeLocation: $Couple<$TrackNodeLocation>;
        sidesToUpdate: $Couple<boolean>;
        types: $Couple<$SignalBlock$SignalType>;
        cachedStates: $Couple<$SignalBlockEntity$SignalState>;
        groups: $Couple<$UUID>;
        id: $UUID;
        position: number;
        blockEntities: $Couple<$Map<$BlockPos, boolean>>;
        constructor();
    }
    export class $TrackEdgePoint {
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $DimensionPalette): void;
        write(arg0: $FriendlyByteBuf, arg1: $DimensionPalette): void;
        read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean, arg3: $DimensionPalette): void;
        read(arg0: $FriendlyByteBuf, arg1: $DimensionPalette): void;
        getId(): $UUID;
        getType(): $EdgePointType<never>;
        setType(arg0: $EdgePointType<never>): void;
        tick(arg0: $TrackGraph, arg1: boolean): void;
        invalidate(arg0: $LevelAccessor): void;
        canMerge(): boolean;
        setLocation(arg0: $Couple<$TrackNodeLocation>, arg1: number): void;
        isPrimary(arg0: $TrackNode): boolean;
        setId(arg0: $UUID_): void;
        getLocationOn(arg0: $TrackEdge): number;
        blockEntityRemoved(arg0: $BlockPos_, arg1: boolean): void;
        blockEntityAdded(arg0: $BlockEntity, arg1: boolean): void;
        canNavigateVia(arg0: $TrackNode): boolean;
        canCoexistWith(arg0: $EdgePointType<never>, arg1: boolean): boolean;
        onRemoved(arg0: $TrackGraph): void;
        edgeLocation: $Couple<$TrackNodeLocation>;
        id: $UUID;
        position: number;
        constructor();
    }
    export class $SingleBlockEntityEdgePoint extends $TrackEdgePoint {
        getBlockEntityPos(): $BlockPos;
        getBlockEntityDimension(): $ResourceKey<$Level>;
        edgeLocation: $Couple<$TrackNodeLocation>;
        blockEntityPos: $BlockPos;
        blockEntityDimension: $ResourceKey<$Level>;
        id: $UUID;
        position: number;
        constructor();
    }
    export class $SignalBlockEntity$OverlayState extends $Enum<$SignalBlockEntity$OverlayState> {
        static values(): $SignalBlockEntity$OverlayState[];
        static valueOf(arg0: string): $SignalBlockEntity$OverlayState;
        static RENDER: $SignalBlockEntity$OverlayState;
        static SKIP: $SignalBlockEntity$OverlayState;
        static DUAL: $SignalBlockEntity$OverlayState;
    }
    /**
     * Values that may be interpreted as {@link $SignalBlockEntity$OverlayState}.
     */
    export type $SignalBlockEntity$OverlayState_ = "render" | "skip" | "dual";
    export class $SignalBlockEntity$SignalState extends $Enum<$SignalBlockEntity$SignalState> {
        static values(): $SignalBlockEntity$SignalState[];
        static valueOf(arg0: string): $SignalBlockEntity$SignalState;
        isYellowLight(arg0: number): boolean;
        isGreenLight(arg0: number): boolean;
        isRedLight(arg0: number): boolean;
        static RED: $SignalBlockEntity$SignalState;
        static YELLOW: $SignalBlockEntity$SignalState;
        static INVALID: $SignalBlockEntity$SignalState;
        static GREEN: $SignalBlockEntity$SignalState;
    }
    /**
     * Values that may be interpreted as {@link $SignalBlockEntity$SignalState}.
     */
    export type $SignalBlockEntity$SignalState_ = "red" | "yellow" | "green" | "invalid";
    export class $SignalPropagator {
        static walkSignals(arg0: $TrackGraph, arg1: $SignalBoundary, arg2: boolean, arg3: $Predicate_<$Pair<$TrackNode, $SignalBoundary>>, arg4: $Predicate_<$EdgeData>, arg5: boolean): void;
        static notifyTrains(arg0: $TrackGraph, ...arg1: $TrackEdge[]): void;
        static onSignalRemoved(arg0: $TrackGraph, arg1: $SignalBoundary): void;
        static collectChainedSignals(arg0: $TrackGraph, arg1: $SignalBoundary, arg2: boolean): $Map<$UUID, boolean>;
        static propagateSignalGroup(arg0: $TrackGraph, arg1: $SignalBoundary, arg2: boolean): void;
        static notifySignalsOfNewNode(arg0: $TrackGraph, arg1: $TrackNode): void;
        constructor();
    }
    export class $SignalBlockEntity extends $SmartBlockEntity implements $TransformableBlockEntity {
        getOverlay(): $SignalBlockEntity$OverlayState;
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        getState(): $SignalBlockEntity$SignalState;
        setOverlay(arg0: $SignalBlockEntity$OverlayState_): void;
        getReportedPower(): boolean;
        isPowered(): boolean;
        enterState(arg0: $SignalBlockEntity$SignalState_): void;
        getSignal(): $SignalBoundary;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        computerBehaviour: $AbstractComputerBehaviour;
        edgePoint: $TrackTargetingBehaviour<$SignalBoundary>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get state(): $SignalBlockEntity$SignalState;
        get reportedPower(): boolean;
        get powered(): boolean;
        get signal(): $SignalBoundary;
    }
    export class $SignalVisual extends $AbstractBlockEntityVisual<$SignalBlockEntity> implements $SimpleTickableVisual {
        tick(arg0: $TickableVisual$Context): void;
        planTick(): $Plan<$TickableVisual$Context>;
        constructor(arg0: $VisualizationContext, arg1: $SignalBlockEntity, arg2: number);
    }
    export class $SignalRenderer extends $SafeBlockEntityRenderer<$SignalBlockEntity> {
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
}
