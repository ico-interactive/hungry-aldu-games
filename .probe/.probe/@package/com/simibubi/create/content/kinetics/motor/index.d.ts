import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $BehaviourType, $ValueSettingsBehaviour$ValueSettings_, $ValueBoxTransform$Sided, $ValueBoxTransform } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $SuperByteBufferCache$Compartment } from "@package/net/createmod/catnip/render";
import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $SpecialBlockStateGen } from "@package/com/simibubi/create/foundation/data";
import { $DirectionalKineticBlock, $GeneratingKineticBlockEntity, $KineticBlockEntityRenderer } from "@package/com/simibubi/create/content/kinetics/base";
import { $StateDefinition, $BlockState_, $BlockBehaviour$Properties, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Class } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $DirectionProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $ScrollValueBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/scrollValue";
import { $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $BlockEntityType, $BlockEntityTicker, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/kinetics/motor" {
    export class $CreativeMotorBlockEntity extends $GeneratingKineticBlockEntity {
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        level: $Level;
        static DEFAULT_SPEED: number;
        reActivateSource: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        computerBehaviour: $AbstractComputerBehaviour;
        network: number;
        generatedSpeed: $ScrollValueBehaviour;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        static MAX_SPEED: number;
        updateSpeed: boolean;
        preventSpeedUpdate: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $CreativeMotorBlock extends $DirectionalKineticBlock implements $IBE<$CreativeMotorBlockEntity> {
        getBlockEntityType(): $BlockEntityType<$CreativeMotorBlockEntity>;
        getBlockEntityClass(): $Class<$CreativeMotorBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$CreativeMotorBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$CreativeMotorBlockEntity, $InteractionResult>): $InteractionResult;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($CreativeMotorBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$CreativeMotorBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $CreativeMotorBlockEntity;
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
        get blockEntityType(): $BlockEntityType<$CreativeMotorBlockEntity>;
        get blockEntityClass(): $Class<$CreativeMotorBlockEntity>;
    }
    export class $CreativeMotorGenerator extends $SpecialBlockStateGen {
        constructor();
    }
    export class $CreativeMotorRenderer extends $KineticBlockEntityRenderer<$CreativeMotorBlockEntity> {
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $CreativeMotorBlockEntity$MotorValueBox extends $ValueBoxTransform$Sided {
    }
    export class $KineticScrollValueBehaviour extends $ScrollValueBehaviour {
        formatSettings(arg0: $ValueSettingsBehaviour$ValueSettings_): $MutableComponent;
        blockEntity: $SmartBlockEntity;
        label: $Component;
        static TYPE: $BehaviourType<$ScrollValueBehaviour>;
        value: number;
        constructor(arg0: $Component_, arg1: $SmartBlockEntity, arg2: $ValueBoxTransform);
    }
}
