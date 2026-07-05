import { $MapCodec } from "@package/com/mojang/serialization";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $FluidTankBlockEntity } from "@package/com/simibubi/create/content/fluids/tank";
import { $List_ } from "@package/java/util";
import { $WeakReference } from "@package/java/lang/ref";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $SoundSource } from "@package/net/minecraft/sounds";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $SpecialBlockStateGen } from "@package/com/simibubi/create/foundation/data";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Sound, $AbstractTickableSoundInstance, $SoundInstance$Attenuation } from "@package/net/minecraft/client/resources/sounds";
import { $Enum, $Class } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $LevelAccessor, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $DirectionProperty, $EnumProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $IHaveGoggleInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/decoration/steamWhistle" {
    export class $WhistleBlock$WhistleSize extends $Enum<$WhistleBlock$WhistleSize> implements $StringRepresentable {
        static values(): $WhistleBlock$WhistleSize[];
        static valueOf(arg0: string): $WhistleBlock$WhistleSize;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static SMALL: $WhistleBlock$WhistleSize;
        static MEDIUM: $WhistleBlock$WhistleSize;
        static LARGE: $WhistleBlock$WhistleSize;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $WhistleBlock$WhistleSize}.
     */
    export type $WhistleBlock$WhistleSize_ = "small" | "medium" | "large";
    export class $WhistleBlock extends $Block implements $IBE<$WhistleBlockEntity>, $IWrenchable {
        static queuePitchUpdate(arg0: $LevelAccessor, arg1: $BlockPos_): void;
        static incrementSize(arg0: $LevelAccessor, arg1: $BlockPos_): void;
        getBlockEntityType(): $BlockEntityType<$WhistleBlockEntity>;
        static getAttachedDirection(arg0: $BlockState_): $Direction;
        getBlockEntityClass(): $Class<$WhistleBlockEntity>;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$WhistleBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$WhistleBlockEntity, $InteractionResult>): $InteractionResult;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($WhistleBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$WhistleBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $WhistleBlockEntity;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
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
        static WALL: $BooleanProperty;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static SIZE: $EnumProperty<$WhistleBlock$WhistleSize>;
        speedFactor: number;
        friction: number;
        static POWERED: $BooleanProperty;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$WhistleBlockEntity>;
        get blockEntityClass(): $Class<$WhistleBlockEntity>;
    }
    export class $WhistleGenerator extends $SpecialBlockStateGen {
        constructor();
    }
    export class $WhistleExtenderBlock extends $Block implements $IWrenchable {
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        static findRoot(arg0: $LevelAccessor, arg1: $BlockPos_): $BlockPos;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
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
        static SIZE: $EnumProperty<$WhistleBlock$WhistleSize>;
        speedFactor: number;
        friction: number;
        static SHAPE: $EnumProperty<$WhistleExtenderBlock$WhistleExtenderShape>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $WhistleRenderer extends $SafeBlockEntityRenderer<$WhistleBlockEntity> {
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $WhistleSoundInstance extends $AbstractTickableSoundInstance {
        keepAlive(): void;
        fadeOut(): void;
        setPitch(arg0: number): void;
        getOctave(): $WhistleBlock$WhistleSize;
        attenuation: $SoundInstance$Attenuation;
        looping: boolean;
        sound: $Sound;
        source: $SoundSource;
        volume: number;
        random: $RandomSource;
        delay: number;
        x: number;
        y: number;
        location: $ResourceLocation;
        z: number;
        pitch: number;
        relative: boolean;
        constructor(arg0: $WhistleBlock$WhistleSize_, arg1: $BlockPos_);
        get octave(): $WhistleBlock$WhistleSize;
    }
    export class $WhistleBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation {
        updatePitch(): void;
        addToGoggleTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        getTank(): $FluidTankBlockEntity;
        getPitchId(): number;
        containedFluidTooltip(arg0: $List_<$Component_>, arg1: boolean, arg2: $IFluidHandler): boolean;
        getIcon(arg0: boolean): $ItemStack;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        source: $WeakReference<$FluidTankBlockEntity>;
        animation: $LerpedFloat;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get tank(): $FluidTankBlockEntity;
        get pitchId(): number;
    }
    export class $WhistleExtenderBlock$WhistleExtenderShape extends $Enum<$WhistleExtenderBlock$WhistleExtenderShape> implements $StringRepresentable {
        static values(): $WhistleExtenderBlock$WhistleExtenderShape[];
        static valueOf(arg0: string): $WhistleExtenderBlock$WhistleExtenderShape;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static SINGLE: $WhistleExtenderBlock$WhistleExtenderShape;
        static DOUBLE: $WhistleExtenderBlock$WhistleExtenderShape;
        static DOUBLE_CONNECTED: $WhistleExtenderBlock$WhistleExtenderShape;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $WhistleExtenderBlock$WhistleExtenderShape}.
     */
    export type $WhistleExtenderBlock$WhistleExtenderShape_ = "single" | "double" | "double_connected";
}
