import { $AbstractSimiScreen } from "@package/net/createmod/catnip/gui";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Executor } from "@package/java/util/concurrent";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $NarratorStatus, $Minecraft } from "@package/net/minecraft/client";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $IControlContraptionExtension } from "@package/dev/simulated_team/simulated/mixin_interface/create_assembly";
import { $WeakReference } from "@package/java/lang/ref";
import { $SuperByteBufferCache$Compartment } from "@package/net/createmod/catnip/render";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $AbstractContraptionEntity } from "@package/com/simibubi/create/content/contraptions";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $StateDefinition, $BlockState_, $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $DoorControl_, $DoorControlBehaviour } from "@package/com/simibubi/create/content/decoration/slidingDoor";
import { $ContraptionControlsBlockEntity$ControlsSlot } from "@package/com/simibubi/create/content/contraptions/actors/contraptionControls";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockEntityConfigurationPacket } from "@package/com/simibubi/create/foundation/networking";
import { $Property, $BooleanProperty, $DirectionProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $SimpleDynamicVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $ShaderLightVisual, $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BasePacketPayload$PacketTypeProvider, $ServerboundPacketPayload, $ClientboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $Map, $List, $List_, $Collection } from "@package/java/util";
import { $ServerboundCustomPayloadPacket, $ClientboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $Object2BooleanMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $KineticBlockEntityRenderer, $ShaftVisual, $HorizontalKineticBlock } from "@package/com/simibubi/create/content/kinetics/base";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE, $WrenchableDirectionalBlock } from "@package/com/simibubi/create/foundation/block";
import { $Record, $Class } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Couple, $WorldAttached, $IntAttached } from "@package/net/createmod/catnip/data";
import { $LevelAccessor, $BlockGetter, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $CollisionList } from "@package/com/simibubi/create/foundation/collision";
import { $SpecialBlockItemRequirement } from "@package/com/simibubi/create/api/schematic/requirement";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Renderable, $CycleButton } from "@package/net/minecraft/client/gui/components";
import { $PulleyBlockEntity, $PulleyContraption } from "@package/com/simibubi/create/content/contraptions/pulley";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Font } from "@package/net/minecraft/client/gui";
import { $BlockEntityType_, $BlockEntity, $BlockEntityTicker, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/contraptions/elevator" {
    export class $ElevatorFloorListPacket extends $Record implements $ClientboundPacketPayload {
        handle(arg0: $LocalPlayer): void;
        entityId(): number;
        floors(): $List<$IntAttached<$Couple<string>>>;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ElevatorFloorListPacket>;
        constructor(arg0: $AbstractContraptionEntity, arg1: $List_<$IntAttached<$Couple<string>>>);
        constructor(entityId: number, floors: $List_<$IntAttached<$Couple<string>>>);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ElevatorFloorListPacket}.
     */
    export type $ElevatorFloorListPacket_ = { entityId?: number, floors?: $List_<$IntAttached<$Couple<string>>>,  } | [entityId?: number, floors?: $List_<$IntAttached<$Couple<string>>>, ];
    export class $ElevatorControlsHandler {
        static onScroll(arg0: number): boolean;
        constructor();
    }
    export class $ElevatorPulleyRenderer extends $KineticBlockEntityRenderer<$ElevatorPulleyBlockEntity> {
        shouldRenderOffScreen(arg0: $ElevatorPulleyBlockEntity): boolean;
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $ElevatorContactScreen extends $AbstractSimiScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $BlockPos_, arg1: string, arg2: string, arg3: $DoorControl_);
    }
    export class $ElevatorTargetFloorPacket extends $Record implements $ServerboundPacketPayload {
        handle(arg0: $ServerPlayer): void;
        entityId(): number;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        targetY(): number;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ElevatorTargetFloorPacket>;
        constructor(arg0: $AbstractContraptionEntity, arg1: number);
        constructor(entityId: number, targetY: number);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ElevatorTargetFloorPacket}.
     */
    export type $ElevatorTargetFloorPacket_ = { targetY?: number, entityId?: number,  } | [targetY?: number, entityId?: number, ];
    export class $ElevatorColumn$ColumnCoords extends $Record {
        x(): number;
        write(): $CompoundTag;
        static read(arg0: $CompoundTag_): $ElevatorColumn$ColumnCoords;
        z(): number;
        side(): $Direction;
        relative(arg0: $BlockPos_): $ElevatorColumn$ColumnCoords;
        constructor(x: number, z: number, side: $Direction_);
    }
    /**
     * Values that may be interpreted as {@link $ElevatorColumn$ColumnCoords}.
     */
    export type $ElevatorColumn$ColumnCoords_ = { x?: number, side?: $Direction_, z?: number,  } | [x?: number, side?: $Direction_, z?: number, ];
    export class $ElevatorColumn {
        remove(arg0: $BlockPos_): void;
        static get(arg0: $LevelAccessor, arg1: $ElevatorColumn$ColumnCoords_): $ElevatorColumn;
        target(arg0: number): void;
        add(arg0: $BlockPos_): void;
        isActive(): boolean;
        initNames(arg0: $Level_): void;
        static getOrCreate(arg0: $LevelAccessor, arg1: $ElevatorColumn$ColumnCoords_): $ElevatorColumn;
        getContacts(): $Collection<$BlockPos>;
        compileNamesList(): $List<$IntAttached<$Couple<string>>>;
        namesChanged(): void;
        isTargetAvailable(): boolean;
        floorReached(arg0: $LevelAccessor, arg1: string): void;
        getTargetedYLevel(): number;
        markDirty(): void;
        setActive(arg0: boolean): void;
        gatherAll(): void;
        contactAt(arg0: number): $BlockPos;
        static LOADED_COLUMNS: $WorldAttached<$Map<$ElevatorColumn$ColumnCoords, $ElevatorColumn>>;
        namesListVersion: number;
        constructor(arg0: $LevelAccessor, arg1: $ElevatorColumn$ColumnCoords_);
        get contacts(): $Collection<$BlockPos>;
        get targetAvailable(): boolean;
        get targetedYLevel(): number;
    }
    export class $ElevatorContactBlock extends $WrenchableDirectionalBlock implements $IBE<$ElevatorContactBlockEntity>, $SpecialBlockItemRequirement {
        callToContactAndUpdate(arg0: $ElevatorColumn, arg1: $BlockState_, arg2: $Level_, arg3: $BlockPos_, arg4: boolean): void;
        static getColumnCoords(arg0: $LevelAccessor, arg1: $BlockPos_): $ElevatorColumn$ColumnCoords;
        scheduleActivation(arg0: $LevelAccessor, arg1: $BlockPos_): void;
        getBlockEntityType(): $BlockEntityType<$ElevatorContactBlockEntity>;
        getRequiredItems(arg0: $BlockState_, arg1: $BlockEntity): $ItemRequirement;
        getBlockEntityClass(): $Class<$ElevatorContactBlockEntity>;
        static getLight(arg0: $BlockState_): number;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$ElevatorContactBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$ElevatorContactBlockEntity, $InteractionResult>): $InteractionResult;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($ElevatorContactBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$ElevatorContactBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $ElevatorContactBlockEntity;
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
        static CALLING: $BooleanProperty;
        soundType: $SoundType;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$ElevatorContactBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static POWERED: $BooleanProperty;
        static POWERING: $BooleanProperty;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$ElevatorContactBlockEntity>;
        get blockEntityClass(): $Class<$ElevatorContactBlockEntity>;
    }
    export class $ElevatorContraption extends $PulleyContraption {
        syncControlDisplays(): void;
        setAllControlsToFloor(arg0: number): void;
        isTargetUnreachable(arg0: number): boolean;
        broadcastFloorData(arg0: $Level_, arg1: $BlockPos_): void;
        getContactYOffset(): number;
        setClientYTarget(arg0: number): void;
        getGlobalColumn(): $ElevatorColumn$ColumnCoords;
        getCurrentTargetY(arg0: $Level_): number;
        hasUniversalCreativeCrate: boolean;
        isLegacy: $Object2BooleanMap<$BlockPos>;
        minContactY: number;
        simplifiedEntityColliders: $CollisionList;
        arrived: boolean;
        maxContactY: number;
        namesList: $List<$IntAttached<$Couple<string>>>;
        anchor: $BlockPos;
        stalled: boolean;
        bounds: $AABB;
        clientYTarget: number;
        disassembled: boolean;
        entity: $AbstractContraptionEntity;
        constructor();
        constructor(arg0: number);
        set allControlsToFloor(value: number);
        get contactYOffset(): number;
        get globalColumn(): $ElevatorColumn$ColumnCoords;
    }
    export class $ElevatorContactEditPacket extends $BlockEntityConfigurationPacket<$ElevatorContactBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ElevatorContactEditPacket>;
        constructor(arg0: $BlockPos_, arg1: string, arg2: string, arg3: $DoorControl_);
    }
    export class $ElevatorPulleyBlock extends $HorizontalKineticBlock implements $IBE<$ElevatorPulleyBlockEntity> {
        getBlockEntityType(): $BlockEntityType<$ElevatorPulleyBlockEntity>;
        getBlockEntityClass(): $Class<$ElevatorPulleyBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$ElevatorPulleyBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$ElevatorPulleyBlockEntity, $InteractionResult>): $InteractionResult;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($ElevatorPulleyBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$ElevatorPulleyBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $ElevatorPulleyBlockEntity;
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
        get blockEntityType(): $BlockEntityType<$ElevatorPulleyBlockEntity>;
        get blockEntityClass(): $Class<$ElevatorPulleyBlockEntity>;
    }
    export class $ElevatorFloorListPacket$RequestFloorList extends $Record implements $ServerboundPacketPayload {
        handle(arg0: $ServerPlayer): void;
        entityId(): number;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ElevatorFloorListPacket$RequestFloorList>;
        constructor(arg0: $AbstractContraptionEntity);
        constructor(entityId: number);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ElevatorFloorListPacket$RequestFloorList}.
     */
    export type $ElevatorFloorListPacket$RequestFloorList_ = { entityId?: number,  } | [entityId?: number, ];
    export class $ElevatorPulleyVisual extends $ShaftVisual<$ElevatorPulleyBlockEntity> implements $SimpleDynamicVisual, $ShaderLightVisual {
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        static rainbowMode: boolean;
        constructor(arg0: $VisualizationContext, arg1: $ElevatorPulleyBlockEntity, arg2: number);
    }
    export class $ElevatorControlsHandler$ElevatorControlsSlot extends $ContraptionControlsBlockEntity$ControlsSlot {
    }
    export class $ElevatorContactBlockEntity extends $SmartBlockEntity {
        updateDisplayedFloor(arg0: string): void;
        getNames(): $Couple<string>;
        updateName(arg0: string, arg1: string): void;
        worldPosition: $BlockPos;
        columnCoords: $ElevatorColumn$ColumnCoords;
        level: $Level;
        lastReportedCurrentFloor: string;
        static ATTACHMENTS_NBT_KEY: string;
        doorControls: $DoorControlBehaviour;
        shortName: string;
        activateBlock: boolean;
        longName: string;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get names(): $Couple<string>;
    }
    export class $ElevatorPulleyBlockEntity extends $PulleyBlockEntity implements $IControlContraptionExtension {
        clicked(): void;
        offset: number;
        level: $Level;
        sharedMirrorContraption: $WeakReference<$AbstractContraptionEntity>;
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
}
