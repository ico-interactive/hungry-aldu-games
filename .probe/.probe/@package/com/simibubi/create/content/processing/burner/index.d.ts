import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $ActorVisual, $ContraptionMatrices } from "@package/com/simibubi/create/content/contraptions/render";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $Map } from "@package/java/util";
import { $StockTickerBlockEntity } from "@package/com/simibubi/create/content/logistics/stockTicker";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $SpriteShiftEntry } from "@package/net/createmod/catnip/render";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $InteractionResultHolder, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Vec3i, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Class } from "@package/java/lang";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $LootTable$Builder, $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $ItemAbility } from "@package/net/neoforged/neoforge/common";
import { $InstanceType, $InstanceHandle } from "@package/dev/engine_room/flywheel/api/instance";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $LevelAccessor, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $SpecialBlockItemRequirement } from "@package/com/simibubi/create/api/schematic/requirement";
import { $VirtualRenderWorld } from "@package/com/simibubi/create/foundation/virtualWorld";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $BlockItem, $Item, $ItemStack_, $ItemStack, $Item$Properties } from "@package/net/minecraft/world/item";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $MovementBehaviour } from "@package/com/simibubi/create/api/behaviour/movement";
import { $TransformedInstance, $ColoredLitOverlayInstance } from "@package/dev/engine_room/flywheel/lib/instance";
import { $DirectionProperty, $EnumProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $SimpleDynamicVisual, $AbstractBlockEntityVisual, $SimpleTickableVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $MovementContext } from "@package/com/simibubi/create/content/contraptions/behaviour";
import { $TickableVisual$Context, $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $ProjectileImpactEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $HorizontalDirectionalBlock, $Block_, $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Matrix4f, $Quaternionfc } from "@package/org/joml";

declare module "@package/com/simibubi/create/content/processing/burner" {
    export class $ScrollTransformedInstance extends $TransformedInstance {
        offset(arg0: number, arg1: number): $ScrollTransformedInstance;
        setSpriteShift(arg0: $SpriteShiftEntry): $ScrollTransformedInstance;
        setSpriteShift(arg0: $SpriteShiftEntry, arg1: number, arg2: number): $ScrollTransformedInstance;
        speed(arg0: number, arg1: number): $ScrollTransformedInstance;
        diffU: number;
        diffV: number;
        green: number;
        pose: $Matrix4f;
        red: number;
        scaleV: number;
        blue: number;
        scaleU: number;
        offsetV: number;
        offsetU: number;
        alpha: number;
        speedV: number;
        speedU: number;
        constructor(arg0: $InstanceType<$TransformedInstance>, arg1: $InstanceHandle);
    }
    export class $LitBlazeBurnerBlock extends $Block implements $IWrenchable {
        static getLight(arg0: $BlockState_): number;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        explosionResistance: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        drops: $ResourceKey<$LootTable>;
        static FLAME_TYPE: $EnumProperty<$LitBlazeBurnerBlock$FlameType>;
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
        static EXTINGUISH_FLAME_ACTION: $ItemAbility;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $BlazeBurnerBlockItem extends $BlockItem {
        static empty(arg0: $Item$Properties): $BlazeBurnerBlockItem;
        static withBlaze(arg0: $Block_, arg1: $Item$Properties): $BlazeBurnerBlockItem;
        hasCapturedBlaze(): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        static BY_BLOCK: $Map<$Block, $Item>;
    }
    export class $LitBlazeBurnerBlock$FlameType extends $Enum<$LitBlazeBurnerBlock$FlameType> implements $StringRepresentable {
        static values(): $LitBlazeBurnerBlock$FlameType[];
        static valueOf(arg0: string): $LitBlazeBurnerBlock$FlameType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static REGULAR: $LitBlazeBurnerBlock$FlameType;
        static SOUL: $LitBlazeBurnerBlock$FlameType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $LitBlazeBurnerBlock$FlameType}.
     */
    export type $LitBlazeBurnerBlock$FlameType_ = "regular" | "soul";
    export class $BlazeBurnerVisual extends $AbstractBlockEntityVisual<$BlazeBurnerBlockEntity> implements $SimpleDynamicVisual, $SimpleTickableVisual {
        tick(arg0: $TickableVisual$Context): void;
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        planTick(): $Plan<$TickableVisual$Context>;
        constructor(arg0: $VisualizationContext, arg1: $BlazeBurnerBlockEntity, arg2: number);
    }
    export class $BlazeBurnerBlock$HeatLevel extends $Enum<$BlazeBurnerBlock$HeatLevel> implements $StringRepresentable {
        static values(): $BlazeBurnerBlock$HeatLevel[];
        static valueOf(arg0: string): $BlazeBurnerBlock$HeatLevel;
        static byIndex(arg0: number): $BlazeBurnerBlock$HeatLevel;
        isAtLeast(arg0: $BlazeBurnerBlock$HeatLevel_): boolean;
        nextActiveLevel(): $BlazeBurnerBlock$HeatLevel;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$BlazeBurnerBlock$HeatLevel>;
        static SEETHING: $BlazeBurnerBlock$HeatLevel;
        static KINDLED: $BlazeBurnerBlock$HeatLevel;
        static SMOULDERING: $BlazeBurnerBlock$HeatLevel;
        static NONE: $BlazeBurnerBlock$HeatLevel;
        static FADING: $BlazeBurnerBlock$HeatLevel;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $BlazeBurnerBlock$HeatLevel}.
     */
    export type $BlazeBurnerBlock$HeatLevel_ = "none" | "smouldering" | "fading" | "kindled" | "seething";
    export class $BlazeBurnerBlockEntity$FuelType extends $Enum<$BlazeBurnerBlockEntity$FuelType> {
        static values(): $BlazeBurnerBlockEntity$FuelType[];
        static valueOf(arg0: string): $BlazeBurnerBlockEntity$FuelType;
        static NONE: $BlazeBurnerBlockEntity$FuelType;
        static SPECIAL: $BlazeBurnerBlockEntity$FuelType;
        static NORMAL: $BlazeBurnerBlockEntity$FuelType;
    }
    /**
     * Values that may be interpreted as {@link $BlazeBurnerBlockEntity$FuelType}.
     */
    export type $BlazeBurnerBlockEntity$FuelType_ = "none" | "normal" | "special";
    export class $BlazeBurnerRenderer extends $SafeBlockEntityRenderer<$BlazeBurnerBlockEntity> {
        static getBlazeModel(arg0: $BlazeBurnerBlock$HeatLevel_, arg1: boolean): $PartialModel;
        static renderInContraption(arg0: $MovementContext, arg1: $VirtualRenderWorld, arg2: $ContraptionMatrices, arg3: $MultiBufferSource_, arg4: $LerpedFloat, arg5: boolean): void;
        static renderShared(arg0: $PoseStack, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: $Level_, arg4: $BlockState_, arg5: $BlazeBurnerBlock$HeatLevel_, arg6: number, arg7: number, arg8: boolean, arg9: boolean, arg10: $PartialModel, arg11: number): void;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $BlazeBurnerBlock extends $HorizontalDirectionalBlock implements $IBE<$BlazeBurnerBlockEntity>, $IWrenchable, $SpecialBlockItemRequirement {
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        static tryInsert(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $ItemStack_, arg4: boolean, arg5: boolean, arg6: boolean): $InteractionResultHolder<$ItemStack>;
        static getHeatLevelOf(arg0: $BlockState_): $BlazeBurnerBlock$HeatLevel;
        getBlockEntityType(): $BlockEntityType<$BlazeBurnerBlockEntity>;
        getRequiredItems(arg0: $BlockState_, arg1: $BlockEntity): $ItemRequirement;
        getBlockEntityClass(): $Class<$BlazeBurnerBlockEntity>;
        static getLight(arg0: $BlockState_): number;
        static buildLootTable(): $LootTable$Builder;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$BlazeBurnerBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$BlazeBurnerBlockEntity, $InteractionResult>): $InteractionResult;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($BlazeBurnerBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$BlazeBurnerBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $BlazeBurnerBlockEntity;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
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
        static CODEC: $MapCodec<$BlazeBurnerBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static HEAT_LEVEL: $EnumProperty<$BlazeBurnerBlock$HeatLevel>;
        speedFactor: number;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$BlazeBurnerBlockEntity>;
        get blockEntityClass(): $Class<$BlazeBurnerBlockEntity>;
    }
    export class $BlazeBurnerBlockEntity extends $SmartBlockEntity {
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        isCreativeFuel(arg0: $ItemStack_): boolean;
        static getStockTicker(arg0: $LevelAccessor, arg1: $BlockPos_): $StockTickerBlockEntity;
        getHeatLevelFromBlock(): $BlazeBurnerBlock$HeatLevel;
        getHeatLevelForRender(): $BlazeBurnerBlock$HeatLevel;
        getRemainingBurnTime(): number;
        isCreative(): boolean;
        updateBlockState(): void;
        isValidBlockAbove(): boolean;
        getActiveFuel(): $BlazeBurnerBlockEntity$FuelType;
        spawnParticleBurst(arg0: boolean): void;
        stockKeeper: boolean;
        worldPosition: $BlockPos;
        headAnimation: $LerpedFloat;
        goggles: boolean;
        level: $Level;
        static INSERTION_THRESHOLD: number;
        static ATTACHMENTS_NBT_KEY: string;
        hat: boolean;
        static MAX_HEAT_CAPACITY: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get heatLevelFromBlock(): $BlazeBurnerBlock$HeatLevel;
        get heatLevelForRender(): $BlazeBurnerBlock$HeatLevel;
        get remainingBurnTime(): number;
        get creative(): boolean;
        get validBlockAbove(): boolean;
        get activeFuel(): $BlazeBurnerBlockEntity$FuelType;
    }
    export class $BlazeBurnerHandler {
        static onThrowableImpact(arg0: $ProjectileImpactEvent): void;
        static thrownEggsGetEatenByBurner(arg0: $ProjectileImpactEvent): void;
        static splashExtinguishesBurner(arg0: $ProjectileImpactEvent): void;
        constructor();
    }
    export class $BlazeBurnerMovementBehaviour implements $MovementBehaviour {
        tick(arg0: $MovementContext): void;
        invalidate(arg0: $MovementContext): void;
        disableBlockEntityRendering(): boolean;
        canBeDisabledVia(arg0: $MovementContext): $ItemStack;
        renderInContraption(arg0: $MovementContext, arg1: $VirtualRenderWorld, arg2: $ContraptionMatrices, arg3: $MultiBufferSource_): void;
        isActive(arg0: $MovementContext): boolean;
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
        stopMoving(arg0: $MovementContext): void;
        constructor();
    }
    export class $ScrollInstance extends $ColoredLitOverlayInstance {
        position(arg0: number, arg1: number, arg2: number): $ScrollInstance;
        position(arg0: $Vec3i): $ScrollInstance;
        offset(arg0: number, arg1: number): $ScrollInstance;
        shift(arg0: number, arg1: number, arg2: number): $ScrollInstance;
        setSpriteShift(arg0: $SpriteShiftEntry, arg1: number, arg2: number): $ScrollInstance;
        setSpriteShift(arg0: $SpriteShiftEntry): $ScrollInstance;
        speed(arg0: number, arg1: number): $ScrollInstance;
        rotation(arg0: $Quaternionfc): $ScrollInstance;
        diffU: number;
        diffV: number;
        green: number;
        red: number;
        scaleV: number;
        blue: number;
        scaleU: number;
        offsetV: number;
        offsetU: number;
        alpha: number;
        x: number;
        speedV: number;
        y: number;
        speedU: number;
        z: number;
        constructor(arg0: $InstanceType<$ColoredLitOverlayInstance>, arg1: $InstanceHandle);
    }
}
