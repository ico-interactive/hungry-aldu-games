import { $MapCodec } from "@package/com/mojang/serialization";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $ActorVisual, $ContraptionMatrices } from "@package/com/simibubi/create/content/contraptions/render";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $FilteringBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/filtering";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $ValueBoxTransform$Sided } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $SmartBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $Clearable, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Record, $Class } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $ElevatorContraption } from "@package/com/simibubi/create/content/contraptions/elevator";
import { $VirtualRenderWorld } from "@package/com/simibubi/create/foundation/virtualWorld";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $MovementBehaviour } from "@package/com/simibubi/create/api/behaviour/movement";
import { $MovingInteractionBehaviour } from "@package/com/simibubi/create/api/behaviour/interaction";
import { $DirectionProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $ControlsBlock } from "@package/com/simibubi/create/content/contraptions/actors/trainControls";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $MovementContext } from "@package/com/simibubi/create/content/contraptions/behaviour";
import { $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $ClientboundPacketPayload, $BasePacketPayload$PacketTypeProvider } from "@package/net/createmod/catnip/net/base";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/contraptions/actors/contraptionControls" {
    export class $ContraptionDisableActorPacket extends $Record implements $ClientboundPacketPayload {
        filter(): $ItemStack;
        handle(arg0: $LocalPlayer): void;
        enable(): boolean;
        entityId(): number;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ContraptionDisableActorPacket>;
        constructor(entityId: number, filter: $ItemStack_, enable: boolean);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ContraptionDisableActorPacket}.
     */
    export type $ContraptionDisableActorPacket_ = { enable?: boolean, filter?: $ItemStack_, entityId?: number,  } | [enable?: boolean, filter?: $ItemStack_, entityId?: number, ];
    export class $ContraptionControlsMovement$ElevatorFloorSelection {
        currentTargetY: number;
        currentShortName: string;
        currentLongName: string;
        currentIndex: number;
        targetYEqualsSelection: boolean;
        constructor();
    }
    export class $ContraptionControlsMovement implements $MovementBehaviour {
        static getFilter(arg0: $MovementContext): $ItemStack;
        tick(arg0: $MovementContext): void;
        static isSameFilter(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        static isDisabledInitially(arg0: $MovementContext): boolean;
        canBeDisabledVia(arg0: $MovementContext): $ItemStack;
        startMoving(arg0: $MovementContext): void;
        static tickFloorSelection(arg0: $ContraptionControlsMovement$ElevatorFloorSelection, arg1: $ElevatorContraption): void;
        renderInContraption(arg0: $MovementContext, arg1: $VirtualRenderWorld, arg2: $ContraptionMatrices, arg3: $MultiBufferSource_): void;
        stopMoving(arg0: $MovementContext): void;
        isActive(arg0: $MovementContext): boolean;
        disableBlockEntityRendering(): boolean;
        cancelStall(arg0: $MovementContext): void;
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
    export class $ContraptionControlsBlock extends $ControlsBlock implements $IBE<$ContraptionControlsBlockEntity> {
        getBlockEntityType(): $BlockEntityType<$ContraptionControlsBlockEntity>;
        getBlockEntityClass(): $Class<$ContraptionControlsBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$ContraptionControlsBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$ContraptionControlsBlockEntity, $InteractionResult>): $InteractionResult;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($ContraptionControlsBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$ContraptionControlsBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $ContraptionControlsBlockEntity;
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
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$ContraptionControlsBlock>;
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
        get blockEntityType(): $BlockEntityType<$ContraptionControlsBlockEntity>;
        get blockEntityClass(): $Class<$ContraptionControlsBlockEntity>;
    }
    export class $ContraptionControlsBlockEntity extends $SmartBlockEntity implements $Clearable {
        pressButton(): void;
        updatePoweredState(): void;
        tickAnimations(): void;
        clearContent(): void;
        static sendStatus(arg0: $Player, arg1: $ItemStack_, arg2: boolean): void;
        indicator: $LerpedFloat;
        button: $LerpedFloat;
        worldPosition: $BlockPos;
        powered: boolean;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        disabled: boolean;
        filtering: $FilteringBehaviour;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $ContraptionControlsBlockEntity$ControlsSlot extends $ValueBoxTransform$Sided {
        constructor();
    }
    export class $ContraptionControlsRenderer extends $SmartBlockEntityRenderer<$ContraptionControlsBlockEntity> {
        static renderInContraption(arg0: $MovementContext, arg1: $VirtualRenderWorld, arg2: $ContraptionMatrices, arg3: $MultiBufferSource_): void;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $ContraptionControlsMovingInteraction extends $MovingInteractionBehaviour {
        static REGISTRY: $SimpleRegistry<$Block, $MovingInteractionBehaviour>;
        constructor();
    }
}
