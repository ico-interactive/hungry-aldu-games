import { $SideSkipPredicate } from "@package/xfacthd/framedblocks/api/predicate/cull";
import { $FullFacePredicate } from "@package/xfacthd/framedblocks/api/predicate/fullface";
import { $ShapeProvider } from "@package/xfacthd/framedblocks/api/shapes";
import { $ConTexMode, $ConnectionPredicate } from "@package/xfacthd/framedblocks/api/predicate/contex";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ImmutableList } from "@package/com/google/common/collect";

declare module "@package/xfacthd/framedblocks/api/type" {
    export class $IBlockType {
    }
    export interface $IBlockType {
        getName(): string;
        compareTo(arg0: $IBlockType): number;
        generateOcclusionShapes(arg0: $ImmutableList<$BlockState_>, arg1: $ShapeProvider): $ShapeProvider;
        getMinimumConTexMode(): $ConTexMode;
        supportsWaterLogging(): boolean;
        getSideSkipPredicate(): $SideSkipPredicate;
        canOccludeWithSolidCamo(): boolean;
        allowMakingIntangible(): boolean;
        consumesTwoCamosInCamoApplicationRecipe(): boolean;
        canLockState(): boolean;
        generateShapes(arg0: $ImmutableList<$BlockState_>): $ShapeProvider;
        hasSpecialHitbox(): boolean;
        hasSpecialTile(): boolean;
        hasBlockItem(): boolean;
        isDoubleBlock(): boolean;
        supportsConnectedTextures(): boolean;
        getConnectionPredicate(): $ConnectionPredicate;
        getFullFacePredicate(): $FullFacePredicate;
        get name(): string;
        get minimumConTexMode(): $ConTexMode;
        get sideSkipPredicate(): $SideSkipPredicate;
        get doubleBlock(): boolean;
        get connectionPredicate(): $ConnectionPredicate;
        get fullFacePredicate(): $FullFacePredicate;
    }
}
