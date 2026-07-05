import { $SideSkipPredicate_ } from "@package/xfacthd/framedblocks/api/predicate/cull";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $List, $List_ } from "@package/java/util";
import { $Supplier_ } from "@package/java/util/function";
import { $ItemInteractionResult, $InteractionHand_ } from "@package/net/minecraft/world";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $BlueprintData_ } from "@package/xfacthd/framedblocks/api/blueprint";
import { $IBlockExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $BlockState_, $BlockBehaviour$Properties, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $CamoList } from "@package/xfacthd/framedblocks/api/util";
import { $Class } from "@package/java/lang";
import { $LootParams$Builder } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockAndTintGetter, $BlockGetter, $Explosion, $LevelAccessor, $Level_, $LevelReader } from "@package/net/minecraft/world/level";
import { $BlockItem, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MapColor, $FluidState } from "@package/net/minecraft/world/level/material";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $IBlockType } from "@package/xfacthd/framedblocks/api/type";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $ShapeProvider } from "@package/xfacthd/framedblocks/api/shapes";
import { $StateCache } from "@package/xfacthd/framedblocks/api/block/cache";
import { $Rotation_, $SoundType, $EntityBlock, $Block } from "@package/net/minecraft/world/level/block";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as cache from "@package/xfacthd/framedblocks/api/block/cache";
export * as blockentity from "@package/xfacthd/framedblocks/api/block/blockentity";

declare module "@package/xfacthd/framedblocks/api/block" {
    export class $IFramedBlock {
        static createProperties(arg0: $IBlockType): $BlockBehaviour$Properties;
        static isCamoEmissiveRendering(arg0: $ModelData): boolean;
        static toggleYSlope(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player): boolean;
        static LOCK_MESSAGE: string;
        static CAMO_LABEL: string;
        static STATE_UNLOCKED: $Component;
        static STATE_LOCKED: $Component;
    }
    export interface $IFramedBlock extends $EntityBlock, $IBlockExtension {
        shouldApplyGuiTransformFromModel(): boolean;
        rotate(arg0: $BlockState_, arg1: $BlockHitResult, arg2: $Rotation_): $BlockState;
        rotate(arg0: $BlockState_, arg1: $Direction_, arg2: $Rotation_): $BlockState;
        getCache(arg0: $BlockState_): $StateCache;
        shouldRenderAsBlockInJadeTooltip(): boolean;
        shouldPreventNeighborCulling(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockState_): boolean;
        initCache(arg0: $BlockState_): $StateCache;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        lockState(arg0: $Level_, arg1: $BlockPos_, arg2: $Player, arg3: $ItemStack_): boolean;
        handleUse(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player, arg4: $InteractionHand_, arg5: $BlockHitResult): $ItemInteractionResult;
        /**
         * @deprecated
         */
        getCamoOcclusionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): $VoxelShape;
        getCamoOcclusionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $ShapeProvider): $VoxelShape;
        handleBlockLeftClick(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player): boolean;
        appendCamoHoverText(arg0: $ItemStack_, arg1: $List_<$Component_>): void;
        isCamoEmissiveRendering(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        getCamoShadeBrightness(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: number): number;
        doesBlockOccludeBeaconBeam(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        updateShapeLockable(arg0: $BlockState_, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $Supplier_<$BlockState>): $BlockState;
        tryApplyCamoImmediately(arg0: $Level_, arg1: $BlockPos_, arg2: $LivingEntity, arg3: $ItemStack_): void;
        unpackNestedModelData(arg0: $ModelData, arg1: $BlockState_, arg2: $BlockState_): $ModelData;
        shouldDisplayFluidOverlay(arg0: $BlockState_, arg1: $BlockAndTintGetter, arg2: $BlockPos_, arg3: $FluidState): boolean;
        getBeaconColorMultiplier(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $BlockPos_): number;
        getExplosionResistance(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Explosion): number;
        hasDynamicLightEmission(arg0: $BlockState_): boolean;
        runOcclusionTestAndGetLookupState(arg0: $SideSkipPredicate_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BlockState_, arg5: $Direction_): $BlockState;
        getComponentBySkipPredicate(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockState_, arg4: $Direction_): $BlockState;
        isSuffocating(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        isIntangible(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): boolean;
        getItemModelSource(): $BlockState;
        getJadeRenderState(arg0: $BlockState_): $BlockState;
        printCamoData(arg0: $CamoList, arg1: boolean): ($MutableComponent) | undefined;
        updateCulling(arg0: $LevelReader, arg1: $BlockPos_): void;
        getComponentAtEdge(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_, arg4: $Direction_): $BlockState;
        getCamoDrops(arg0: $List_<$ItemStack_>, arg1: $LootParams$Builder): $List<$ItemStack>;
        getJadeRenderScale(arg0: $BlockState_): number;
        createBlockItem(): $BlockItem;
        printCamoBlock(arg0: $BlueprintData_): ($MutableComponent) | undefined;
        getCamoVisualShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        getJadeTargetClass(): $Class<$Block>;
        getBlockType(): $IBlockType;
        hidesNeighborFace(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockState_, arg4: $Direction_): boolean;
        getFlammability(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): number;
        getFriction(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Entity): number;
        getLightEmission(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): number;
        addRunningEffects(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Entity): boolean;
        canSustainPlant(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_, arg4: $BlockState_): $TriState;
        addLandingEffects(arg0: $BlockState_, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $BlockState_, arg4: $LivingEntity, arg5: number): boolean;
        getSoundType(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Entity): $SoundType;
        onBlockStateChange(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockState_): void;
        getFireSpreadSpeed(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): number;
        canEntityDestroy(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Entity): boolean;
        isFlammable(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): boolean;
        getAppearance(arg0: $BlockState_, arg1: $BlockAndTintGetter, arg2: $BlockPos_, arg3: $Direction_, arg4: $BlockState_, arg5: $BlockPos_): $BlockState;
        isFireSource(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Direction_): boolean;
        getMapColor(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $MapColor): $MapColor;
        useCamoOcclusionShapeForLightOcclusion(arg0: $BlockState_): boolean;
        get itemModelSource(): $BlockState;
        get jadeTargetClass(): $Class<$Block>;
        get blockType(): $IBlockType;
    }
}
