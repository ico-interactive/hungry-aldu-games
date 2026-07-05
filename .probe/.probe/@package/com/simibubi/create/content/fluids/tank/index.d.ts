import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $IMultiBlockEntityContainer$Fluid, $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $ActorVisual, $ContraptionMatrices } from "@package/com/simibubi/create/content/contraptions/render";
import { $FluidStack_, $FluidStack, $IFluidTank } from "@package/net/neoforged/neoforge/fluids";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $List_, $Map } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $IFluidHandler$FluidAction_, $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $ChatFormatting_ } from "@package/net/minecraft";
import { $HolderLookup$Provider, $BlockPos, $Direction$Axis_, $BlockPos_, $Direction_, $Direction$Axis, $Vec3i, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $SpecialBlockStateGen } from "@package/com/simibubi/create/foundation/data";
import { $SmartFluidTank } from "@package/com/simibubi/create/foundation/fluid";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Class, $Object } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $VirtualRenderWorld } from "@package/com/simibubi/create/foundation/virtualWorld";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $HorizontalCTBehaviour, $CTSpriteShiftEntry, $CTModel } from "@package/com/simibubi/create/foundation/block/connected";
import { $BlockItem, $Item, $ItemStack_, $ItemStack, $Item$Properties } from "@package/net/minecraft/world/item";
import { $MutableComponent, $Component_ } from "@package/net/minecraft/network/chat";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $MovementBehaviour } from "@package/com/simibubi/create/api/behaviour/movement";
import { $EnumProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $IHaveGoggleInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $MovementContext } from "@package/com/simibubi/create/content/contraptions/behaviour";
import { $Block_, $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $FluidTank } from "@package/net/neoforged/neoforge/fluids/capability/templates";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
export * as storage from "@package/com/simibubi/create/content/fluids/tank/storage";

declare module "@package/com/simibubi/create/content/fluids/tank" {
    export class $CreativeFluidTankBlockEntity extends $FluidTankBlockEntity {
        worldPosition: $BlockPos;
        boiler: $BoilerData;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $FluidTankMovementBehavior implements $MovementBehaviour {
        tick(arg0: $MovementContext): void;
        mustTickWhileDisabled(): boolean;
        isActive(arg0: $MovementContext): boolean;
        disableBlockEntityRendering(): boolean;
        canBeDisabledVia(arg0: $MovementContext): $ItemStack;
        cancelStall(arg0: $MovementContext): void;
        startMoving(arg0: $MovementContext): void;
        collectOrDropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        writeExtraData(arg0: $MovementContext): void;
        createVisual(arg0: $VisualizationContext, arg1: $VirtualRenderWorld, arg2: $MovementContext): $ActorVisual;
        onSpeedChanged(arg0: $MovementContext, arg1: $Vec3_, arg2: $Vec3_): void;
        visitNewPosition(arg0: $MovementContext, arg1: $BlockPos_): void;
        renderInContraption(arg0: $MovementContext, arg1: $VirtualRenderWorld, arg2: $ContraptionMatrices, arg3: $MultiBufferSource_): void;
        getActiveAreaOffset(arg0: $MovementContext): $Vec3;
        onDisabledByControls(arg0: $MovementContext): void;
        /**
         * @deprecated
         */
        dropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        stopMoving(arg0: $MovementContext): void;
        constructor();
    }
    export class $FluidTankModel$CullData {
    }
    export class $BoilerData$BoilerFluidHandler implements $IFluidHandler {
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        getTanks(): number;
        getTankCapacity(arg0: number): number;
        getFluidInTank(arg0: number): $FluidStack;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        constructor(arg0: $BoilerData);
        get tanks(): number;
    }
    export class $FluidTankModel extends $CTModel {
        static standard(arg0: $BakedModel): $FluidTankModel;
        static creative(arg0: $BakedModel): $FluidTankModel;
    }
    export class $BoilerData {
        clear(): void;
        write(): $CompoundTag;
        read(arg0: $CompoundTag_, arg1: number): void;
        isActive(): boolean;
        evaluate(arg0: $FluidTankBlockEntity): boolean;
        tick(arg0: $FluidTankBlockEntity): void;
        updateOcclusion(arg0: $FluidTankBlockEntity): void;
        createHandler(): $BoilerData$BoilerFluidHandler;
        addToGoggleTooltip(arg0: $List_<$Component_>, arg1: boolean, arg2: number): boolean;
        handler$cbn000$sable$forceUpdateHeatIfDisconnected(arg0: $FluidTankBlockEntity, arg1: $CallbackInfo): void;
        getWaterComponent(arg0: boolean, arg1: boolean, ...arg2: $ChatFormatting_[]): $MutableComponent;
        calcMinMaxForSize(arg0: number): void;
        getHeatComponent(arg0: boolean, arg1: boolean, ...arg2: $ChatFormatting_[]): $MutableComponent;
        getSizeComponent(arg0: boolean, arg1: boolean, ...arg2: $ChatFormatting_[]): $MutableComponent;
        getEngineEfficiency(arg0: number): number;
        getHeatLevelTextComponent(): $MutableComponent;
        isPassive(): boolean;
        isPassive(arg0: number): boolean;
        checkPipeOrganAdvancement(arg0: $FluidTankBlockEntity): void;
        queueSoundOnSide(arg0: $BlockPos_, arg1: $Direction_): void;
        getTheoreticalHeatLevel(): number;
        wrapOperation$cbn000$sable$subLevelHeating(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Operation_<any>): number;
        updateTemperature(arg0: $FluidTankBlockEntity): boolean;
        getMaxHeatLevelForBoilerSize(arg0: number): number;
        getMaxHeatLevelForWaterSupply(): number;
        attachedEngines: number;
        gauge: $LerpedFloat;
        needsHeatLevelUpdate: boolean;
        passiveHeat: boolean;
        activeHeat: number;
        attachedWhistles: number;
        occludedDirections: boolean[];
        waterSupply: number;
        constructor();
        get active(): boolean;
        get heatLevelTextComponent(): $MutableComponent;
        get theoreticalHeatLevel(): number;
        get maxHeatLevelForWaterSupply(): number;
    }
    export class $FluidTankBlock$Shape extends $Enum<$FluidTankBlock$Shape> implements $StringRepresentable {
        static values(): $FluidTankBlock$Shape[];
        static valueOf(arg0: string): $FluidTankBlock$Shape;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static PLAIN: $FluidTankBlock$Shape;
        static WINDOW_NW: $FluidTankBlock$Shape;
        static WINDOW_SE: $FluidTankBlock$Shape;
        static WINDOW_SW: $FluidTankBlock$Shape;
        static WINDOW: $FluidTankBlock$Shape;
        static WINDOW_NE: $FluidTankBlock$Shape;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $FluidTankBlock$Shape}.
     */
    export type $FluidTankBlock$Shape_ = "plain" | "window" | "window_nw" | "window_sw" | "window_ne" | "window_se";
    export class $FluidTankCTBehaviour extends $HorizontalCTBehaviour {
        constructor(arg0: $CTSpriteShiftEntry, arg1: $CTSpriteShiftEntry, arg2: $CTSpriteShiftEntry);
    }
    export class $BoilerHeaters {
        static registerDefaults(): void;
        static blazeBurner(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): number;
        static passive(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): number;
        constructor();
    }
    export class $FluidTankGenerator extends $SpecialBlockStateGen {
        constructor();
        constructor(arg0: string);
    }
    export class $FluidTankRenderer extends $SafeBlockEntityRenderer<$FluidTankBlockEntity> {
        shouldRenderOffScreen(arg0: $FluidTankBlockEntity): boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $CreativeFluidTankBlockEntity$CreativeSmartFluidTank extends $SmartFluidTank {
        setContainedFluid(arg0: $FluidStack_): void;
        static CODEC: $Codec<$CreativeFluidTankBlockEntity$CreativeSmartFluidTank>;
        constructor(arg0: number, arg1: $Consumer_<$FluidStack>);
        set containedFluid(value: $FluidStack_);
    }
    export class $FluidTankBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation, $IMultiBlockEntityContainer$Fluid {
        setWidth(arg0: number): void;
        setHeight(arg0: number): void;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        getWidth(): number;
        getHeight(): number;
        setController(arg0: $BlockPos_): void;
        getController(): $BlockPos;
        getFluidLevel(): $LerpedFloat;
        getTankInventory(): $FluidTank;
        setFluidLevel(arg0: $LerpedFloat): void;
        getFillState(): number;
        updateBoilerState(): void;
        toggleWindows(): void;
        getLastKnownPos(): $BlockPos;
        applyFluidTankSize(arg0: number): void;
        setTankSize(arg0: number, arg1: number): void;
        setExtraData(arg0: $Object): void;
        getTankSize(arg0: number): number;
        notifyMultiUpdated(): void;
        modifyExtraData(arg0: $Object): $Object;
        removeController(arg0: boolean): void;
        getExtraData(): $Object;
        addToGoggleTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        getFluid(arg0: number): $FluidStack;
        getTotalTankSize(): number;
        static getMaxSize(): number;
        getMaxLength(arg0: $Direction$Axis_, arg1: number): number;
        setWindows(arg0: boolean): void;
        getTank(arg0: number): $IFluidTank;
        hasTank(): boolean;
        sendDataImmediately(): void;
        updateBoilerTemperature(): void;
        getMainConnectionAxis(): $Direction$Axis;
        static getCapacityMultiplier(): number;
        preventConnectivityUpdate(): void;
        isController(): boolean;
        getOtherFluidTankBlockEntity(arg0: $Direction_): $FluidTankBlockEntity;
        getMaxWidth(): number;
        static getMaxHeight(): number;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        containedFluidTooltip(arg0: $List_<$Component_>, arg1: boolean, arg2: $IFluidHandler): boolean;
        getIcon(arg0: boolean): $ItemStack;
        getMainAxisOf(arg0: $BlockEntity): $Direction$Axis;
        getControllerBE<T extends $BlockEntity>(): T;
        worldPosition: $BlockPos;
        boiler: $BoilerData;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get tankInventory(): $FluidTank;
        get fillState(): number;
        get lastKnownPos(): $BlockPos;
        get totalTankSize(): number;
        static get maxSize(): number;
        set windows(value: boolean);
        get mainConnectionAxis(): $Direction$Axis;
        static get capacityMultiplier(): number;
        get maxWidth(): number;
        static get maxHeight(): number;
        get controllerBE(): T;
    }
    export class $SoundPool$Sound {
    }
    export interface $SoundPool$Sound {
        playAt(arg0: $Level_, arg1: $Vec3i): void;
    }
    /**
     * Values that may be interpreted as {@link $SoundPool$Sound}.
     */
    export type $SoundPool$Sound_ = ((arg0: $Level, arg1: $Vec3i) => void);
    export class $FluidTankItem extends $BlockItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Block_, arg1: $Item$Properties);
    }
    export class $SoundPool {
        play(arg0: $Level_): void;
        queueAt(arg0: $BlockPos_): void;
        queueAt(arg0: number): void;
        constructor(arg0: number, arg1: number, arg2: $SoundPool$Sound_);
    }
    export class $FluidTankBlock extends $Block implements $IWrenchable, $IBE<$FluidTankBlockEntity> {
        static updateBoilerState(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): void;
        static creative(arg0: $BlockBehaviour$Properties): $FluidTankBlock;
        static regular(arg0: $BlockBehaviour$Properties): $FluidTankBlock;
        getBlockEntityType(): $BlockEntityType<$FluidTankBlockEntity>;
        static isTank(arg0: $BlockState_): boolean;
        getBlockEntityClass(): $Class<$FluidTankBlockEntity>;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$FluidTankBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$FluidTankBlockEntity, $InteractionResult>): $InteractionResult;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($FluidTankBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$FluidTankBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $FluidTankBlockEntity;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        explosionResistance: number;
        static SILENCED_METAL: $SoundType;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static BOTTOM: $BooleanProperty;
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
        static SHAPE: $EnumProperty<$FluidTankBlock$Shape>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static TOP: $BooleanProperty;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        get blockEntityType(): $BlockEntityType<$FluidTankBlockEntity>;
        get blockEntityClass(): $Class<$FluidTankBlockEntity>;
    }
}
