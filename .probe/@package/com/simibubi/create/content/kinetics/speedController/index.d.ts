import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $ValueBoxTransform$Sided } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $SmartBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction$Axis, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $HorizontalAxisKineticBlock, $KineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/base";
import { $StateDefinition, $BlockState_, $BlockBehaviour$Properties, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Class } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $PlacementOffset, $IPlacementHelper } from "@package/net/createmod/catnip/placement";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $ScrollValueBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/scrollValue";
import { $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityType, $BlockEntityTicker, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/kinetics/speedController" {
    export class $SpeedControllerBlock extends $HorizontalAxisKineticBlock implements $IBE<$SpeedControllerBlockEntity> {
        getBlockEntityType(): $BlockEntityType<$SpeedControllerBlockEntity>;
        getBlockEntityClass(): $Class<$SpeedControllerBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$SpeedControllerBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$SpeedControllerBlockEntity, $InteractionResult>): $InteractionResult;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($SpeedControllerBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$SpeedControllerBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $SpeedControllerBlockEntity;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
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
        get blockEntityType(): $BlockEntityType<$SpeedControllerBlockEntity>;
        get blockEntityClass(): $Class<$SpeedControllerBlockEntity>;
    }
    export class $SpeedControllerRenderer extends $SmartBlockEntityRenderer<$SpeedControllerBlockEntity> {
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $SpeedControllerBlock$PlacementHelper implements $IPlacementHelper {
        getOffset(arg0: $Player, arg1: $Level_, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockHitResult, arg5: $ItemStack_): $PlacementOffset;
        matchesState(arg0: $BlockState_): boolean;
        displayGhost(arg0: $PlacementOffset): void;
        renderAt(arg0: $BlockPos_, arg1: $BlockState_, arg2: $BlockHitResult, arg3: $PlacementOffset): void;
        matchesItem(arg0: $ItemStack_): boolean;
    }
    export class $SpeedControllerBlockEntity$ControllerValueBoxTransform extends $ValueBoxTransform$Sided {
    }
    export class $SpeedControllerBlockEntity extends $KineticBlockEntity {
        updateBracket(): void;
        static getConveyedSpeed(arg0: $KineticBlockEntity, arg1: $KineticBlockEntity, arg2: boolean): number;
        static getDesiredOutputSpeed(arg0: $KineticBlockEntity, arg1: $KineticBlockEntity, arg2: boolean): number;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        targetSpeed: $ScrollValueBehaviour;
        level: $Level;
        static DEFAULT_SPEED: number;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        computerBehaviour: $AbstractComputerBehaviour;
        network: number;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        updateSpeed: boolean;
        preventSpeedUpdate: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
}
