import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $UseOnContextAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Vec3, $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/item/context" {
    export class $BlockPlaceContext extends $UseOnContext {
        static at(context: $BlockPlaceContext, pos: $BlockPos_, direction: $Direction_): $BlockPlaceContext;
        getNearestLookingDirections(): $Direction[];
        canPlace(): boolean;
        replacingClickedOnBlock(): boolean;
        getNearestLookingDirection(): $Direction;
        getNearestLookingVerticalDirection(): $Direction;
        replaceClicked: boolean;
        constructor(level: $Level_, player: $Player | null, hand: $InteractionHand_, itemStack: $ItemStack_, hitResult: $BlockHitResult);
        constructor(context: $UseOnContext);
        constructor(player: $Player, hand: $InteractionHand_, itemStack: $ItemStack_, hitResult: $BlockHitResult);
        get nearestLookingDirections(): $Direction[];
        get nearestLookingDirection(): $Direction;
        get nearestLookingVerticalDirection(): $Direction;
    }
    export class $DirectionalPlaceContext extends $BlockPlaceContext {
        replaceClicked: boolean;
        constructor(level: $Level_, pos: $BlockPos_, direction: $Direction_, itemStack: $ItemStack_, face: $Direction_);
    }
    export class $UseOnContext implements $UseOnContextAccessor {
        getLevel(): $Level;
        getHitResult(): $BlockHitResult;
        getItemInHand(): $ItemStack;
        isInside(): boolean;
        getClickLocation(): $Vec3;
        getClickedPos(): $BlockPos;
        getClickedFace(): $Direction;
        getPlayer(): $Player;
        getHand(): $InteractionHand;
        getHorizontalDirection(): $Direction;
        getRotation(): number;
        isSecondaryUseActive(): boolean;
        create$getHitResult(): $BlockHitResult;
        constructor(player: $Player, hand: $InteractionHand_, hitResult: $BlockHitResult);
        constructor(level: $Level_, player: $Player | null, hand: $InteractionHand_, itemStack: $ItemStack_, hitResult: $BlockHitResult);
        get level(): $Level;
        get hitResult(): $BlockHitResult;
        get itemInHand(): $ItemStack;
        get inside(): boolean;
        get clickLocation(): $Vec3;
        get clickedPos(): $BlockPos;
        get clickedFace(): $Direction;
        get player(): $Player;
        get hand(): $InteractionHand;
        get horizontalDirection(): $Direction;
        get rotation(): number;
        get secondaryUseActive(): boolean;
    }
}
