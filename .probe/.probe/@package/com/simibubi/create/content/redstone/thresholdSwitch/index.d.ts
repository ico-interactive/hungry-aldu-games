import { $MapCodec } from "@package/com/mojang/serialization";
import { $AbstractSimiScreen } from "@package/net/createmod/catnip/gui";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Executor } from "@package/java/util/concurrent";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $Clearable, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $SpecialBlockStateGen } from "@package/com/simibubi/create/foundation/data";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Class } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $DirectedDirectionalBlock } from "@package/com/simibubi/create/content/redstone";
import { $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $MutableComponent, $Component } from "@package/net/minecraft/network/chat";
import { $CycleButton, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $BlockEntityConfigurationPacket } from "@package/com/simibubi/create/foundation/networking";
import { $DirectionProperty, $AttachFace, $EnumProperty, $IntegerProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Font } from "@package/net/minecraft/client/gui";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/redstone/thresholdSwitch" {
    export class $ThresholdSwitchScreen extends $AbstractSimiScreen {
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
        constructor(arg0: $ThresholdSwitchBlockEntity);
    }
    export class $ThresholdSwitchBlockEntity extends $SmartBlockEntity implements $Clearable {
        format(arg0: number, arg1: boolean): $MutableComponent;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        getState(): boolean;
        shouldBePowered(): boolean;
        getMaxLevel(): number;
        getMinLevel(): number;
        updateCurrentLevel(): void;
        getStockLevel(): number;
        getLevelForDisplay(): number;
        setInverted(arg0: boolean): void;
        isPowered(): boolean;
        clearContent(): void;
        updatePowerAfterDelay(): void;
        getTypeOfCurrentTarget(): $ThresholdSwitchBlockEntity$ThresholdType;
        getDisplayItemForScreen(): $ItemStack;
        isInverted(): boolean;
        currentLevel: number;
        worldPosition: $BlockPos;
        onWhenAbove: number;
        level: $Level;
        currentMinLevel: number;
        offWhenBelow: number;
        static ATTACHMENTS_NBT_KEY: string;
        currentMaxLevel: number;
        inStacks: boolean;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get state(): boolean;
        get maxLevel(): number;
        get minLevel(): number;
        get stockLevel(): number;
        get levelForDisplay(): number;
        get powered(): boolean;
        get typeOfCurrentTarget(): $ThresholdSwitchBlockEntity$ThresholdType;
        get displayItemForScreen(): $ItemStack;
    }
    export class $ThresholdSwitchBlock extends $DirectedDirectionalBlock implements $IBE<$ThresholdSwitchBlockEntity> {
        getBlockEntityType(): $BlockEntityType<$ThresholdSwitchBlockEntity>;
        getBlockEntityClass(): $Class<$ThresholdSwitchBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$ThresholdSwitchBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$ThresholdSwitchBlockEntity, $InteractionResult>): $InteractionResult;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($ThresholdSwitchBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$ThresholdSwitchBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $ThresholdSwitchBlockEntity;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        static TARGET: $EnumProperty<$AttachFace>;
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
        static CODEC: $MapCodec<$DirectedDirectionalBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        static LEVEL: $IntegerProperty;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$ThresholdSwitchBlockEntity>;
        get blockEntityClass(): $Class<$ThresholdSwitchBlockEntity>;
    }
    export class $ThresholdSwitchGenerator extends $SpecialBlockStateGen {
        constructor();
    }
    export class $ThresholdSwitchBlockEntity$ThresholdType extends $Enum<$ThresholdSwitchBlockEntity$ThresholdType> {
        static values(): $ThresholdSwitchBlockEntity$ThresholdType[];
        static valueOf(arg0: string): $ThresholdSwitchBlockEntity$ThresholdType;
        static ITEM: $ThresholdSwitchBlockEntity$ThresholdType;
        static FLUID: $ThresholdSwitchBlockEntity$ThresholdType;
        static CUSTOM: $ThresholdSwitchBlockEntity$ThresholdType;
        static UNSUPPORTED: $ThresholdSwitchBlockEntity$ThresholdType;
    }
    /**
     * Values that may be interpreted as {@link $ThresholdSwitchBlockEntity$ThresholdType}.
     */
    export type $ThresholdSwitchBlockEntity$ThresholdType_ = "unsupported" | "item" | "fluid" | "custom";
    export class $ConfigureThresholdSwitchPacket extends $BlockEntityConfigurationPacket<$ThresholdSwitchBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ConfigureThresholdSwitchPacket>;
        constructor(arg0: $BlockPos_, arg1: number, arg2: number, arg3: boolean, arg4: boolean);
    }
    export class $ThresholdSwitchObservable {
    }
    export interface $ThresholdSwitchObservable {
        format(arg0: number): $MutableComponent;
        getMinValue(): number;
        getMaxValue(): number;
        getCurrentValue(): number;
        get minValue(): number;
        get maxValue(): number;
        get currentValue(): number;
    }
}
