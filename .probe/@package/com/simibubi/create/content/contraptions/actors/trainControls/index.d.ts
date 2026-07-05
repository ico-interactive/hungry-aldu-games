import { $MapCodec } from "@package/com/mojang/serialization";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $ActorVisual, $ContraptionMatrices } from "@package/com/simibubi/create/content/contraptions/render";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $UUID, $List, $UUID_, $Collection_, $List_, $Collection, $Map } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $InteractionResult } from "@package/net/minecraft/world";
import { $AbstractContraptionEntity } from "@package/com/simibubi/create/content/contraptions";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockPos, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ProperWaterloggedBlock } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Record } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $WorldAttached, $IntAttached } from "@package/net/createmod/catnip/data";
import { $LevelAccessor, $BlockGetter } from "@package/net/minecraft/world/level";
import { $VirtualRenderWorld } from "@package/com/simibubi/create/foundation/virtualWorld";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $MovementBehaviour } from "@package/com/simibubi/create/api/behaviour/movement";
import { $MovingInteractionBehaviour } from "@package/com/simibubi/create/api/behaviour/interaction";
import { $DirectionProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $MovementContext } from "@package/com/simibubi/create/content/contraptions/behaviour";
import { $HorizontalDirectionalBlock, $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $ClientboundPacketPayload, $BasePacketPayload$PacketTypeProvider, $ServerboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/contraptions/actors/trainControls" {
    export class $ControlsInteractionBehaviour extends $MovingInteractionBehaviour {
        static REGISTRY: $SimpleRegistry<$Block, $MovingInteractionBehaviour>;
        constructor();
    }
    export class $ControlsHandler {
        static tick(): void;
        static stopControlling(): void;
        static startControlling(arg0: $AbstractContraptionEntity, arg1: $BlockPos_): void;
        static getContraption(): $AbstractContraptionEntity;
        static levelUnloaded(arg0: $LevelAccessor): void;
        static getControlsPos(): $BlockPos;
        static currentlyPressed: $Collection<number>;
        static PACKET_RATE: number;
        constructor();
        static get contraption(): $AbstractContraptionEntity;
        static get controlsPos(): $BlockPos;
    }
    export class $ControlsServerHandler$ManuallyPressedKey extends $IntAttached<number> {
    }
    export class $ControlsMovementBehaviour implements $MovementBehaviour {
        tick(arg0: $MovementContext): void;
        canBeDisabledVia(arg0: $MovementContext): $ItemStack;
        renderInContraption(arg0: $MovementContext, arg1: $VirtualRenderWorld, arg2: $ContraptionMatrices, arg3: $MultiBufferSource_): void;
        stopMoving(arg0: $MovementContext): void;
        isActive(arg0: $MovementContext): boolean;
        disableBlockEntityRendering(): boolean;
        cancelStall(arg0: $MovementContext): void;
        startMoving(arg0: $MovementContext): void;
        collectOrDropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        writeExtraData(arg0: $MovementContext): void;
        createVisual(arg0: $VisualizationContext, arg1: $VirtualRenderWorld, arg2: $MovementContext): $ActorVisual;
        onSpeedChanged(arg0: $MovementContext, arg1: $Vec3_, arg2: $Vec3_): void;
        visitNewPosition(arg0: $MovementContext, arg1: $BlockPos_): void;
        getActiveAreaOffset(arg0: $MovementContext): $Vec3;
        onDisabledByControls(arg0: $MovementContext): void;
        mustTickWhileDisabled(): boolean;
        /**
         * @deprecated
         */
        dropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        constructor();
    }
    export class $ControlsInputPacket extends $Record implements $ServerboundPacketPayload {
        handle(arg0: $ServerPlayer): void;
        stopControlling(): boolean;
        press(): boolean;
        controlsPos(): $BlockPos;
        activatedButtons(): $List<number>;
        contraptionEntityId(): number;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ControlsInputPacket>;
        constructor(arg0: $Collection_<number>, arg1: boolean, arg2: number, arg3: $BlockPos_, arg4: boolean);
        constructor(activatedButtons: $List_<number>, press: boolean, contraptionEntityId: number, controlsPos: $BlockPos_, stopControlling: boolean);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ControlsInputPacket}.
     */
    export type $ControlsInputPacket_ = { press?: boolean, stopControlling?: boolean, controlsPos?: $BlockPos_, activatedButtons?: $List_<number>, contraptionEntityId?: number,  } | [press?: boolean, stopControlling?: boolean, controlsPos?: $BlockPos_, activatedButtons?: $List_<number>, contraptionEntityId?: number, ];
    export class $ControlsServerHandler$ControlsContext {
    }
    export class $ControlsServerHandler {
        static tick(arg0: $LevelAccessor): void;
        static receivePressed(arg0: $LevelAccessor, arg1: $AbstractContraptionEntity, arg2: $BlockPos_, arg3: $UUID_, arg4: $Collection_<number>, arg5: boolean): void;
        static receivedInputs: $WorldAttached<$Map<$UUID, $ControlsServerHandler$ControlsContext>>;
        constructor();
    }
    export class $ControlsStopControllingPacket extends $Enum<$ControlsStopControllingPacket> implements $ClientboundPacketPayload {
        static values(): $ControlsStopControllingPacket[];
        static valueOf(arg0: string): $ControlsStopControllingPacket;
        handle(arg0: $LocalPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static INSTANCE: $ControlsStopControllingPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ControlsStopControllingPacket>;
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ControlsStopControllingPacket}.
     */
    export type $ControlsStopControllingPacket_ = "instance";
    export class $ControlsRenderer {
        static render(arg0: $MovementContext, arg1: $VirtualRenderWorld, arg2: $ContraptionMatrices, arg3: $MultiBufferSource_, arg4: number, arg5: number, arg6: number): void;
        constructor();
    }
    export class $ControlsBlock extends $HorizontalDirectionalBlock implements $IWrenchable, $ProperWaterloggedBlock {
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
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
        static CODEC: $MapCodec<$ControlsBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static OPEN: $BooleanProperty;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        static VIRTUAL: $BooleanProperty;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $ControlsMovementBehaviour$LeverAngles {
    }
}
