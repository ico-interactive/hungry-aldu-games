import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $AbstractSimiScreen } from "@package/net/createmod/catnip/gui";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $ListTag, $CompoundTag, $ListTag_, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Executor } from "@package/java/util/concurrent";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $List, $Vector, $List_ } from "@package/java/util";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction$Axis, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $SpecialBlockStateGen } from "@package/com/simibubi/create/foundation/data";
import { $HorizontalAxisKineticBlock } from "@package/com/simibubi/create/content/kinetics/base";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Record, $Class } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $Component } from "@package/net/minecraft/network/chat";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $CycleButton, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $BlockEntityConfigurationPacket } from "@package/com/simibubi/create/foundation/networking";
import { $Property, $IntegerProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $SplitShaftBlockEntity } from "@package/com/simibubi/create/content/kinetics/transmission";
import { $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $AllGuiTextures } from "@package/com/simibubi/create/foundation/gui";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $TransformableBlock } from "@package/com/simibubi/create/api/contraption/transformable";
import { $Font } from "@package/net/minecraft/client/gui";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/kinetics/transmission/sequencer" {
    export class $ConfigureSequencedGearshiftPacket extends $BlockEntityConfigurationPacket<$SequencedGearshiftBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ConfigureSequencedGearshiftPacket>;
        constructor(arg0: $BlockPos_, arg1: $Vector<$Instruction>);
    }
    export class $Instruction {
        static createDefault(): $Vector<$Instruction>;
        static deserializeAll(arg0: $ListTag_): $Vector<$Instruction>;
        static serializeAll(arg0: $List_<$Instruction>): $ListTag;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $Instruction>;
        constructor(arg0: $SequencerInstructions_, arg1: $InstructionSpeedModifiers_, arg2: number);
        constructor(arg0: $SequencerInstructions_, arg1: number);
        constructor(arg0: $SequencerInstructions_);
    }
    export class $SequencerInstructions extends $Enum<$SequencerInstructions> {
        static values(): $SequencerInstructions[];
        static valueOf(arg0: string): $SequencerInstructions;
        needsPropagation(): boolean;
        translationKey: string;
        maxValue: number;
        defaultValue: number;
        static AWAIT: $SequencerInstructions;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $SequencerInstructions>;
        static TURN_DISTANCE: $SequencerInstructions;
        shiftStep: number;
        descriptiveTranslationKey: string;
        hasValueParameter: boolean;
        background: $AllGuiTextures;
        parameterKey: string;
        hasSpeedParameter: boolean;
        static END: $SequencerInstructions;
        static TURN_ANGLE: $SequencerInstructions;
        static DELAY: $SequencerInstructions;
    }
    /**
     * Values that may be interpreted as {@link $SequencerInstructions}.
     */
    export type $SequencerInstructions_ = "turn_angle" | "turn_distance" | "delay" | "await" | "end";
    export class $OnIsPoweredResult extends $Enum<$OnIsPoweredResult> {
        static values(): $OnIsPoweredResult[];
        static valueOf(arg0: string): $OnIsPoweredResult;
        static CONTINUE: $OnIsPoweredResult;
        static NOTHING: $OnIsPoweredResult;
    }
    /**
     * Values that may be interpreted as {@link $OnIsPoweredResult}.
     */
    export type $OnIsPoweredResult_ = "nothing" | "continue";
    export class $InstructionSpeedModifiers extends $Enum<$InstructionSpeedModifiers> {
        static values(): $InstructionSpeedModifiers[];
        static valueOf(arg0: string): $InstructionSpeedModifiers;
        static getByModifier(arg0: number): $InstructionSpeedModifiers;
        static FORWARD_FAST: $InstructionSpeedModifiers;
        static BACK: $InstructionSpeedModifiers;
        static FORWARD: $InstructionSpeedModifiers;
        static BACK_FAST: $InstructionSpeedModifiers;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $InstructionSpeedModifiers>;
    }
    /**
     * Values that may be interpreted as {@link $InstructionSpeedModifiers}.
     */
    export type $InstructionSpeedModifiers_ = "forward_fast" | "forward" | "back" | "back_fast";
    export class $SequencedGearshiftGenerator extends $SpecialBlockStateGen {
        constructor();
    }
    export class $SequencedGearshiftBlockEntity extends $SplitShaftBlockEntity {
        run(arg0: number): void;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        onRedstoneUpdate(arg0: boolean, arg1: boolean): void;
        getInstructions(): $Vector<$Instruction>;
        getInstruction(arg0: number): $Instruction;
        risingFlank(): void;
        getModifier(): number;
        isIdle(): boolean;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        level: $Level;
        updateSpeed: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        computerBehaviour: $AbstractComputerBehaviour;
        preventSpeedUpdate: number;
        network: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get instructions(): $Vector<$Instruction>;
        get modifier(): number;
        get idle(): boolean;
    }
    export class $SequencedGearshiftBlockEntity$SequenceContext extends $Record {
        static fromGearshift(arg0: $SequencerInstructions_, arg1: number, arg2: number): $SequencedGearshiftBlockEntity$SequenceContext;
        instruction(): $SequencerInstructions;
        getEffectiveValue(arg0: number): number;
        static fromNBT(arg0: $CompoundTag_): $SequencedGearshiftBlockEntity$SequenceContext;
        serializeNBT(): $CompoundTag;
        relativeValue(): number;
        constructor(instruction: $SequencerInstructions_, relativeValue: number);
    }
    /**
     * Values that may be interpreted as {@link $SequencedGearshiftBlockEntity$SequenceContext}.
     */
    export type $SequencedGearshiftBlockEntity$SequenceContext_ = { relativeValue?: number, instruction?: $SequencerInstructions_,  } | [relativeValue?: number, instruction?: $SequencerInstructions_, ];
    export class $SequencedGearshiftScreen extends $AbstractSimiScreen {
        sendPacket(): void;
        updateParamsOfRow(arg0: number): void;
        initInputsOfRow(arg0: number, arg1: number, arg2: number): void;
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
        constructor(arg0: $SequencedGearshiftBlockEntity);
    }
    export class $SequencedGearshiftBlock extends $HorizontalAxisKineticBlock implements $IBE<$SequencedGearshiftBlockEntity>, $TransformableBlock {
        transform(arg0: $BlockState_, arg1: $StructureTransform): $BlockState;
        getBlockEntityType(): $BlockEntityType<$SequencedGearshiftBlockEntity>;
        getBlockEntityClass(): $Class<$SequencedGearshiftBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$SequencedGearshiftBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$SequencedGearshiftBlockEntity, $InteractionResult>): $InteractionResult;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($SequencedGearshiftBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$SequencedGearshiftBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $SequencedGearshiftBlockEntity;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        explosionResistance: number;
        static STATE: $IntegerProperty;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static HORIZONTAL_AXIS: $Property<$Direction$Axis>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        drops: $ResourceKey<$LootTable>;
        static VERTICAL: $BooleanProperty;
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
        get blockEntityType(): $BlockEntityType<$SequencedGearshiftBlockEntity>;
        get blockEntityClass(): $Class<$SequencedGearshiftBlockEntity>;
    }
}
