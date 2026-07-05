import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $AbstractSimiScreen } from "@package/net/createmod/catnip/gui";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Executor } from "@package/java/util/concurrent";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $List, $Map } from "@package/java/util";
import { $PlayerInteractEvent$RightClickBlock } from "@package/net/neoforged/neoforge/event/entity/player";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $BiConsumer_, $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Vec3i, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $IBE, $WrenchableDirectionalBlock } from "@package/com/simibubi/create/foundation/block";
import { $BlockSubLevelAssemblyListener } from "@package/dev/ryanhcode/sable/api/block";
import { $Record, $Class, $Object } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $LevelAccessor, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $BlockItem, $Item, $Item$Properties } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $CycleButton, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $BlockEntityConfigurationPacket } from "@package/com/simibubi/create/foundation/networking";
import { $FactoryPanelSupportBehaviour } from "@package/com/simibubi/create/content/logistics/factoryBoard";
import { $DirectionProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $DisplayTarget, $DisplaySource } from "@package/com/simibubi/create/api/behaviour/display";
import { $Block_, $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $Font } from "@package/net/minecraft/client/gui";
import { $Vec3, $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
export * as source from "@package/com/simibubi/create/content/redstone/displayLink/source";
export * as target from "@package/com/simibubi/create/content/redstone/displayLink/target";

declare module "@package/com/simibubi/create/content/redstone/displayLink" {
    export class $DisplayLinkContext {
        level(): $Level;
        getSourceBlockEntity(): $BlockEntity;
        sourceConfig(): $CompoundTag;
        getSourcePos(): $BlockPos;
        getTargetBlockEntity(): $BlockEntity;
        getTargetPos(): $BlockPos;
        blockEntity(): $DisplayLinkBlockEntity;
        flapDisplayContext: $Object;
        constructor(arg0: $Level_, arg1: $DisplayLinkBlockEntity);
        get sourceBlockEntity(): $BlockEntity;
        get sourcePos(): $BlockPos;
        get targetBlockEntity(): $BlockEntity;
        get targetPos(): $BlockPos;
    }
    export class $DisplayLinkConfigurationPacket extends $BlockEntityConfigurationPacket<$DisplayLinkBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $DisplayLinkConfigurationPacket>;
        constructor(arg0: $BlockPos_, arg1: $CompoundTag_, arg2: number);
    }
    export class $DisplayLinkBlockEntity extends $LinkWithBulbBlockEntity implements $TransformableBlockEntity {
        target(arg0: $BlockPos_): void;
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        handler$cbd001$sable$accountForSubLevels(arg0: $CallbackInfoReturnable<any>): void;
        onNoLongerPowered(): void;
        getTargetPosition(): $BlockPos;
        getSourcePosition(): $BlockPos;
        getDirection(): $Direction;
        tickSource(): void;
        setSourceConfig(arg0: $CompoundTag_): void;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        getSourceConfig(): $CompoundTag;
        updateGatheredData(): void;
        worldPosition: $BlockPos;
        refreshTicks: number;
        level: $Level;
        targetLine: number;
        static ATTACHMENTS_NBT_KEY: string;
        activeTarget: $DisplayTarget;
        computerBehaviour: $AbstractComputerBehaviour;
        factoryPanelSupport: $FactoryPanelSupportBehaviour;
        activeSource: $DisplaySource;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get targetPosition(): $BlockPos;
        get sourcePosition(): $BlockPos;
        get direction(): $Direction;
    }
    export class $ClickToLinkBlockItem extends $BlockItem {
        getMessageTranslationKey(): string;
        wrapOperation$cbc000$sable$accountForSubLevels$mixinextras$bridge$11(arg0: $BlockPos_, arg1: $Vec3i, arg2: number, arg3: $Operation_<any>, arg4: $LocalRef<any>): boolean;
        wrapOperation$cbc000$sable$accountForSubLevels(arg0: $BlockPos_, arg1: $Vec3i, arg2: number, arg3: $Operation_<any>, arg4: $Level_): boolean;
        placeWhenInvalid(): boolean;
        getMaxDistanceFromSelection(): number;
        static clientTick(): void;
        isValidTarget(arg0: $LevelAccessor, arg1: $BlockPos_): boolean;
        getSelectionBounds(arg0: $BlockPos_): $AABB;
        static linkableItemAlwaysPlacesWhenUsed(arg0: $PlayerInteractEvent$RightClickBlock): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Block_, arg1: $Item$Properties);
        get messageTranslationKey(): string;
        get maxDistanceFromSelection(): number;
    }
    export class $DisplayLinkScreen extends $AbstractSimiScreen {
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
        constructor(arg0: $DisplayLinkBlockEntity);
    }
    export class $ClickToLinkBlockItem$ClickToLinkData extends $Record {
        selectedDim(): $ResourceLocation;
        selectedPos(): $BlockPos;
        static CODEC: $Codec<$ClickToLinkBlockItem$ClickToLinkData>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ClickToLinkBlockItem$ClickToLinkData>;
        constructor(selectedPos: $BlockPos_, selectedDim: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $ClickToLinkBlockItem$ClickToLinkData}.
     */
    export type $ClickToLinkBlockItem$ClickToLinkData_ = { selectedDim?: $ResourceLocation_, selectedPos?: $BlockPos_,  } | [selectedDim?: $ResourceLocation_, selectedPos?: $BlockPos_, ];
    export class $DisplayLinkBlockItem extends $ClickToLinkBlockItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Block_, arg1: $Item$Properties);
    }
    export class $LinkWithBulbBlockEntity extends $SmartBlockEntity {
        getBulbOffset(arg0: $BlockState_): $Vec3;
        getBulbFacing(arg0: $BlockState_): $Direction;
        sendPulseNextSync(): void;
        pulse(): void;
        getGlow(arg0: number): number;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $DisplayLinkBlock extends $WrenchableDirectionalBlock implements $IBE<$DisplayLinkBlockEntity>, $BlockSubLevelAssemblyListener {
        afterMove(arg0: $ServerLevel, arg1: $ServerLevel, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockPos_): void;
        static notifyGatherers(arg0: $LevelAccessor, arg1: $BlockPos_): void;
        getBlockEntityType(): $BlockEntityType<$DisplayLinkBlockEntity>;
        static sendToGatherers<T extends $DisplaySource>(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BiConsumer_<$DisplayLinkBlockEntity, T>, arg3: $Class<T>): void;
        getBlockEntityClass(): $Class<$DisplayLinkBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$DisplayLinkBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$DisplayLinkBlockEntity, $InteractionResult>): $InteractionResult;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($DisplayLinkBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$DisplayLinkBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $DisplayLinkBlockEntity;
        beforeMove(arg0: $ServerLevel, arg1: $ServerLevel, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockPos_): void;
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
        static CODEC: $MapCodec<$DisplayLinkBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
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
        get blockEntityType(): $BlockEntityType<$DisplayLinkBlockEntity>;
        get blockEntityClass(): $Class<$DisplayLinkBlockEntity>;
    }
    export class $LinkBulbRenderer extends $SafeBlockEntityRenderer<$LinkWithBulbBlockEntity> {
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
}
