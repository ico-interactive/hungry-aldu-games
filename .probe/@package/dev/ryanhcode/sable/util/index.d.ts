import { $ChunkPos, $ClipContext, $BlockGetter, $ClipBlockStateContext, $Level_ } from "@package/net/minecraft/world/level";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Supplier_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $Vec3i, $Holder } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Iterable_, $Object } from "@package/java/lang";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $Vec3_, $AABB_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/dev/ryanhcode/sable/util" {
    export class $LevelAccelerator implements $BlockGetter {
        clearCache(): void;
        getHeight(): number;
        isOutsideBuildHeight(arg0: $Vec3i): boolean;
        setBlockFast(arg0: $BlockPos_, arg1: $BlockState_): void;
        getBlockState(arg0: $LevelChunk, arg1: $BlockPos_): $BlockState;
        getBlockState(arg0: $BlockPos_): $BlockState;
        getMinBuildHeight(): number;
        getChunk(arg0: $BlockPos_): $LevelChunk;
        getChunk(arg0: number, arg1: number): $LevelChunk;
        getFluidState(arg0: $BlockPos_): $FluidState;
        getBlockEntity(arg0: $BlockPos_): $BlockEntity;
        isBlockInLine(arg0: $ClipBlockStateContext): $BlockHitResult;
        getBlockFloorHeight(arg0: $BlockPos_): number;
        getBlockFloorHeight(arg0: $VoxelShape, arg1: $Supplier_<$VoxelShape>): number;
        getBlockStates(arg0: $AABB_): $Stream<$BlockState>;
        getLightEmission(arg0: $BlockPos_): number;
        getMaxLightLevel(): number;
        clip(arg0: $ClipContext): $BlockHitResult;
        clipWithInteractionOverride(arg0: $Vec3_, arg1: $Vec3_, arg2: $BlockPos_, arg3: $VoxelShape, arg4: $BlockState_): $BlockHitResult;
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>): (T) | undefined;
        getSectionIndex(arg0: number): number;
        getMinSection(): number;
        getMaxSection(): number;
        getSectionsCount(): number;
        isOutsideBuildHeight(arg0: $BlockPos_): boolean;
        isOutsideBuildHeight(arg0: number): boolean;
        getMaxBuildHeight(): number;
        getSectionYFromSectionIndex(arg0: number): number;
        getSectionIndexFromSectionY(arg0: number): number;
        getModelData(arg0: $BlockPos_): $ModelData;
        getAuxLightManager(arg0: $ChunkPos): $AuxiliaryLightManager;
        getAuxLightManager(arg0: $BlockPos_): $AuxiliaryLightManager;
        getBiomeFabric(arg0: $BlockPos_): $Holder<$Biome>;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        hasBiomes(): boolean;
        static USE_CACHE_MAP: boolean;
        constructor(arg0: $Level_);
        get height(): number;
        get minBuildHeight(): number;
        get maxLightLevel(): number;
        get minSection(): number;
        get maxSection(): number;
        get sectionsCount(): number;
        get maxBuildHeight(): number;
    }
    export class $BoundedBitVolume3i {
        getIndex(arg0: number, arg1: number, arg2: number): number;
        getMaxBlockPos(): $BlockPos;
        getOccupied(arg0: number, arg1: number, arg2: number): boolean;
        getMinBlockPos(): $BlockPos;
        volume(): number;
        zSpan(): number;
        ySpan(): number;
        xSpan(): number;
        setOccupied(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
        static fromBlocks(arg0: $Iterable_<$BlockPos>): $BoundedBitVolume3i;
        isInBounds(arg0: number, arg1: number, arg2: number): boolean;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
        get maxBlockPos(): $BlockPos;
        get minBlockPos(): $BlockPos;
    }
}
