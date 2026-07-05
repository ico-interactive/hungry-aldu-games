import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $PackagePortTarget, $PackagePortBlockEntity } from "@package/com/simibubi/create/content/logistics/packagePort";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $List_ } from "@package/java/util";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $SmartBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Class } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $LevelAccessor, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $SmartInventory } from "@package/com/simibubi/create/foundation/item";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $IHaveHoveringInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $SimpleDynamicVisual, $AbstractBlockEntityVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/logistics/packagePort/frogport" {
    export class $FrogportVisual extends $AbstractBlockEntityVisual<$FrogportBlockEntity> implements $SimpleDynamicVisual {
        wrapOperation$cfl002$sable$getExactTargetLocation(arg0: $PackagePortTarget, arg1: $PackagePortBlockEntity, arg2: $LevelAccessor, arg3: $BlockPos_, arg4: $Operation_<any>): $Vec3;
        updateGoggles(): void;
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        constructor(arg0: $VisualizationContext, arg1: $FrogportBlockEntity, arg2: number);
    }
    export class $FrogportBlockEntity extends $PackagePortBlockEntity implements $IHaveHoveringInformation {
        addToTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        wrapOperation$ccc000$sable$getExactTargetLocation(arg0: $PackagePortTarget, arg1: $PackagePortBlockEntity, arg2: $LevelAccessor, arg3: $BlockPos_, arg4: $Operation_<any>): $Vec3;
        tryPullingFromOwnAndAdjacentInventories(): void;
        startAnimation(arg0: $ItemStack_, arg1: boolean): void;
        tryPullingFrom(arg0: $IItemHandler): boolean;
        sendAnticipate(): void;
        getYaw(): number;
        isAnimationInProgress(): boolean;
        anticipate(): void;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        getIcon(arg0: boolean): $ItemStack;
        acceptsPackages: boolean;
        anticipationProgress: $LerpedFloat;
        level: $Level;
        animationProgress: $LerpedFloat;
        static ATTACHMENTS_NBT_KEY: string;
        computerBehaviour: $AbstractComputerBehaviour;
        inventory: $SmartInventory;
        manualOpenAnimationProgress: $LerpedFloat;
        currentlyDepositing: boolean;
        target: $PackagePortTarget;
        animatedPackage: $ItemStack;
        worldPosition: $BlockPos;
        goggles: boolean;
        passiveYaw: number;
        addressFilter: string;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get yaw(): number;
        get animationInProgress(): boolean;
    }
    export class $FrogportBlock extends $Block implements $IBE<$FrogportBlockEntity>, $IWrenchable {
        getBlockEntityType(): $BlockEntityType<$FrogportBlockEntity>;
        getBlockEntityClass(): $Class<$FrogportBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$FrogportBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$FrogportBlockEntity, $InteractionResult>): $InteractionResult;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($FrogportBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$FrogportBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $FrogportBlockEntity;
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
        get blockEntityType(): $BlockEntityType<$FrogportBlockEntity>;
        get blockEntityClass(): $Class<$FrogportBlockEntity>;
    }
    export class $FrogportSounds {
        close(arg0: $Level_, arg1: $BlockPos_): void;
        open(arg0: $Level_, arg1: $BlockPos_): void;
        depositPackage(arg0: $Level_, arg1: $BlockPos_): void;
        catchPackage(arg0: $Level_, arg1: $BlockPos_): void;
        constructor();
    }
    export class $FrogportRenderer extends $SmartBlockEntityRenderer<$FrogportBlockEntity> {
        wrapOperation$cfk001$sable$getExactTargetLocation(arg0: $PackagePortTarget, arg1: $PackagePortBlockEntity, arg2: $LevelAccessor, arg3: $BlockPos_, arg4: $Operation_<any>): $Vec3;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
}
