import { $Level_ } from "@package/net/minecraft/world/level";
import { $ItemInteractionResult, $InteractionHand_ } from "@package/net/minecraft/world";
import { $Predicate, $Predicate_, $Function_, $Function } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $Vec3i, $Direction$Axis_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ItemStack, $BlockItem, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Collection_, $List } from "@package/java/util";
import { $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/net/createmod/catnip/placement" {
    export class $IPlacementHelper {
        static renderArrow(arg0: $Vec3_, arg1: $Vec3_, arg2: $Direction_, arg3: number): void;
        static renderArrow(arg0: $Vec3_, arg1: $Vec3_, arg2: $Direction_): void;
        static orderedByDistance(arg0: $BlockPos_, arg1: $Vec3_, arg2: $Predicate_<$Direction>): $List<$Direction>;
        static orderedByDistance(arg0: $BlockPos_, arg1: $Vec3_): $List<$Direction>;
        static orderedByDistance(arg0: $BlockPos_, arg1: $Vec3_, arg2: $Collection_<$Direction_>): $List<$Direction>;
        static orderedByDistanceOnlyAxis(arg0: $BlockPos_, arg1: $Vec3_, arg2: $Direction$Axis_, arg3: $Predicate_<$Direction>): $List<$Direction>;
        static orderedByDistanceOnlyAxis(arg0: $BlockPos_, arg1: $Vec3_, arg2: $Direction$Axis_): $List<$Direction>;
        static orderedByDistanceExceptAxis(arg0: $BlockPos_, arg1: $Vec3_, arg2: $Direction$Axis_): $List<$Direction>;
        static orderedByDistanceExceptAxis(arg0: $BlockPos_, arg1: $Vec3_, arg2: $Direction$Axis_, arg3: $Direction$Axis_, arg4: $Predicate_<$Direction>): $List<$Direction>;
        static orderedByDistanceExceptAxis(arg0: $BlockPos_, arg1: $Vec3_, arg2: $Direction$Axis_, arg3: $Direction$Axis_): $List<$Direction>;
        static orderedByDistanceExceptAxis(arg0: $BlockPos_, arg1: $Vec3_, arg2: $Direction$Axis_, arg3: $Predicate_<$Direction>): $List<$Direction>;
        static ID: $BlockState;
    }
    export interface $IPlacementHelper {
        getOffset(arg0: $Player, arg1: $Level_, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockHitResult, arg5: $ItemStack_): $PlacementOffset;
        getOffset(arg0: $Player, arg1: $Level_, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockHitResult): $PlacementOffset;
        matchesState(arg0: $BlockState_): boolean;
        displayGhost(arg0: $PlacementOffset): void;
        getStatePredicate(): $Predicate<$BlockState>;
        renderAt(arg0: $BlockPos_, arg1: $BlockState_, arg2: $BlockHitResult, arg3: $PlacementOffset): void;
        getItemPredicate(): $Predicate<$ItemStack>;
        matchesItem(arg0: $ItemStack_): boolean;
        get statePredicate(): $Predicate<$BlockState>;
        get itemPredicate(): $Predicate<$ItemStack>;
    }
    export class $PlacementOffset {
        at(arg0: $Vec3i): $PlacementOffset;
        static fail(): $PlacementOffset;
        static success(arg0: $Vec3i, arg1: $Function_<$BlockState, $BlockState>): $PlacementOffset;
        static success(arg0: $Vec3i): $PlacementOffset;
        static success(): $PlacementOffset;
        getTransform(): $Function<$BlockState, $BlockState>;
        isSuccessful(): boolean;
        hasGhostState(): boolean;
        getGhostState(): $BlockState;
        withGhostState(arg0: $BlockState_): $PlacementOffset;
        getPos(): $Vec3i;
        withTransform(arg0: $Function_<$BlockState, $BlockState>): $PlacementOffset;
        getBlockPos(): $BlockPos;
        placeInWorld(arg0: $Level_, arg1: $BlockItem, arg2: $Player, arg3: $InteractionHand_, arg4: $BlockHitResult): $ItemInteractionResult;
        isReplaceable(arg0: $Level_): boolean;
        get transform(): $Function<$BlockState, $BlockState>;
        get successful(): boolean;
        get ghostState(): $BlockState;
        get pos(): $Vec3i;
        get blockPos(): $BlockPos;
    }
}
