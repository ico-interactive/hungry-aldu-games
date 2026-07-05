import { $MapCodec } from "@package/com/mojang/serialization";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $RecipeType, $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $ActorVisual, $ContraptionMatrices } from "@package/com/simibubi/create/content/contraptions/render";
import { $AbstractBlockBreakQueue } from "@package/com/simibubi/create/foundation/utility";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $Set_, $List_ } from "@package/java/util";
import { $ValueBoxTransform } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $SizedFluidIngredient } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_, $Supplier } from "@package/java/util/function";
import { $InteractionResult, $Clearable, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $SpecialBlockStateGen } from "@package/com/simibubi/create/foundation/data";
import { $DirectionalAxisKineticBlock, $BlockBreakingKineticBlockEntity, $RotatingInstance, $KineticBlockEntityVisual, $BlockBreakingMovementBehaviour } from "@package/com/simibubi/create/content/kinetics/base";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $SequencedAssemblySubCategory } from "@package/com/simibubi/create/compat/jei/category/sequencedAssembly";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Class } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $IAssemblyRecipe } from "@package/com/simibubi/create/content/processing/sequenced";
import { $InstancerProvider_ } from "@package/dev/engine_room/flywheel/api/instance";
import { $ItemLike_, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $VirtualRenderWorld } from "@package/com/simibubi/create/foundation/virtualWorld";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $ProcessingRecipeParams, $ProcessingInventory, $StandardProcessingRecipe } from "@package/com/simibubi/create/content/processing/recipe";
import { $RecipeWrapper } from "@package/net/neoforged/neoforge/items/wrapper";
import { $DirectionProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $PlacementOffset, $IPlacementHelper } from "@package/net/createmod/catnip/placement";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $MovementContext } from "@package/com/simibubi/create/content/contraptions/behaviour";
import { $Block_, $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $AABB_, $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/kinetics/saw" {
    export class $TreeCutter {
        static isRoot(arg0: $BlockState_): boolean;
        static canDynamicTreeCutFrom(arg0: $Block_): boolean;
        static findDynamicTree(arg0: $Block_, arg1: $BlockPos_): ($AbstractBlockBreakQueue) | undefined;
        static findTree(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): $TreeCutter$Tree;
        static isLog(arg0: $BlockState_): boolean;
        static isChorus(arg0: $BlockState_): boolean;
        static isVerticalPlant(arg0: $BlockState_): boolean;
        static NO_TREE: $TreeCutter$Tree;
        constructor();
    }
    export class $SawBlock extends $DirectionalAxisKineticBlock implements $IBE<$SawBlockEntity> {
        wrapOperation$cal000$sable$fixBlockBreakerDamage(arg0: $AABB_, arg1: $AABB_, arg2: $Operation_<any>, arg3: $Level_): boolean;
        getBlockEntityType(): $BlockEntityType<$SawBlockEntity>;
        getBlockEntityClass(): $Class<$SawBlockEntity>;
        wrapOperation$cal000$sable$fixBlockBreakerDamage$mixinextras$bridge$23(arg0: $AABB_, arg1: $AABB_, arg2: $Operation_<any>, arg3: $LocalRef<any>): boolean;
        static isHorizontal(arg0: $BlockState_): boolean;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$SawBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$SawBlockEntity, $InteractionResult>): $InteractionResult;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($SawBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$SawBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $SawBlockEntity;
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
        static FLIPPED: $BooleanProperty;
        friction: number;
        static AXIS_ALONG_FIRST_COORDINATE: $BooleanProperty;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$SawBlockEntity>;
        get blockEntityClass(): $Class<$SawBlockEntity>;
    }
    export class $TreeCutter$SearchDirection extends $Enum<$TreeCutter$SearchDirection> {
    }
    /**
     * Values that may be interpreted as {@link $TreeCutter$SearchDirection}.
     */
    export type $TreeCutter$SearchDirection_ = "up" | "down" | "both";
    export class $SawRenderer extends $SafeBlockEntityRenderer<$SawBlockEntity> {
        static renderInContraption(arg0: $MovementContext, arg1: $VirtualRenderWorld, arg2: $ContraptionMatrices, arg3: $MultiBufferSource_): void;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $SawFilterSlot extends $ValueBoxTransform {
        constructor();
    }
    export class $SawGenerator extends $SpecialBlockStateGen {
        constructor();
    }
    export class $SawMovementBehaviour extends $BlockBreakingMovementBehaviour {
        dropItemFromCutTree(arg0: $MovementContext, arg1: $BlockPos_, arg2: $ItemStack_): void;
        redirect$cag000$sable$fixSpeed$mixinextras$bridge$16(arg0: $Vec3_, arg1: $Vec3_, arg2: $LocalRef<any>): number;
        redirect$cag000$sable$fixRelativeMotion$mixinextras$bridge$17(arg0: $MovementContext, arg1: $LocalRef<any>, arg2: $LocalRef<any>): $Vec3;
        redirect$cag000$sable$fixRelativeMotion(arg0: $MovementContext, arg1: $MovementContext, arg2: $Vec3_): $Vec3;
        redirect$cag000$sable$fixSpeed(arg0: $Vec3_, arg1: $Vec3_, arg2: $MovementContext): number;
        constructor();
    }
    export class $CuttingRecipe extends $StandardProcessingRecipe<$RecipeWrapper> implements $IAssemblyRecipe {
        matches(arg0: $RecipeWrapper, arg1: $Level_): boolean;
        getJEISubCategory(): $Supplier<$Supplier<$SequencedAssemblySubCategory>>;
        addAssemblyIngredients(arg0: $List_<$Ingredient_>): void;
        getDescriptionForAssembly(): $Component;
        addRequiredMachines(arg0: $Set_<$ItemLike_>): void;
        addAssemblyFluidIngredients(arg0: $List_<$SizedFluidIngredient>): void;
        supportsAssembly(): boolean;
        constructor(arg0: $ProcessingRecipeParams);
        get JEISubCategory(): $Supplier<$Supplier<$SequencedAssemblySubCategory>>;
        get descriptionForAssembly(): $Component;
    }
    export class $SawActorVisual extends $ActorVisual {
        constructor(arg0: $VisualizationContext, arg1: $VirtualRenderWorld, arg2: $MovementContext);
    }
    export class $SawVisual extends $KineticBlockEntityVisual<$SawBlockEntity> {
        static shaft(arg0: $InstancerProvider_, arg1: $BlockState_): $RotatingInstance;
        constructor(arg0: $VisualizationContext, arg1: $SawBlockEntity, arg2: number);
    }
    export class $SawBlock$PlacementHelper implements $IPlacementHelper {
        getOffset(arg0: $Player, arg1: $Level_, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockHitResult, arg5: $ItemStack_): $PlacementOffset;
        matchesState(arg0: $BlockState_): boolean;
        displayGhost(arg0: $PlacementOffset): void;
        renderAt(arg0: $BlockPos_, arg1: $BlockState_, arg2: $BlockHitResult, arg3: $PlacementOffset): void;
        matchesItem(arg0: $ItemStack_): boolean;
    }
    export class $TreeCutter$Tree extends $AbstractBlockBreakQueue {
        constructor(arg0: $List_<$BlockPos_>, arg1: $List_<$BlockPos_>, arg2: $List_<$BlockPos_>);
    }
    export class $SawBlockEntity extends $BlockBreakingKineticBlockEntity implements $Clearable {
        start(arg0: $ItemStack_): void;
        dropItemFromCutTree(arg0: $BlockPos_, arg1: $ItemStack_): void;
        static isSawable(arg0: $BlockState_): boolean;
        insertItem(arg0: $ItemEntity): void;
        clearContent(): void;
        getItemMovementVec(): $Vec3;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        inventory: $ProcessingInventory;
        network: number;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        static woodcuttingRecipeType: $Supplier<$RecipeType<never>>;
        updateSpeed: boolean;
        static NEXT_BREAKER_ID: $AtomicInteger;
        preventSpeedUpdate: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get itemMovementVec(): $Vec3;
    }
}
