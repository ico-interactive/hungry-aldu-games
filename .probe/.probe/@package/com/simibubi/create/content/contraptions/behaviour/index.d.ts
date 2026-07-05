import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $VirtualRenderWorld } from "@package/com/simibubi/create/foundation/virtualWorld";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $ActorVisual, $ContraptionMatrices } from "@package/com/simibubi/create/content/contraptions/render";
import { $StructureTemplate$StructureBlockInfo_ } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $MovementBehaviour } from "@package/com/simibubi/create/api/behaviour/movement";
import { $MovingInteractionBehaviour } from "@package/com/simibubi/create/api/behaviour/interaction";
import { $FilterItemStack } from "@package/com/simibubi/create/content/logistics/filter";
import { $UnaryOperator } from "@package/java/util/function";
import { $Contraption } from "@package/com/simibubi/create/content/contraptions";
import { $MountedFluidStorage } from "@package/com/simibubi/create/api/contraption/storage/fluid";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Object } from "@package/java/lang";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $MountedItemStorage } from "@package/com/simibubi/create/api/contraption/storage/item";
export * as dispenser from "@package/com/simibubi/create/content/contraptions/behaviour/dispenser";

declare module "@package/com/simibubi/create/content/contraptions/behaviour" {
    export class $DoorMovingInteraction extends $SimpleBlockMovingInteraction {
        static REGISTRY: $SimpleRegistry<$Block, $MovingInteractionBehaviour>;
        constructor();
    }
    export class $CampfireMovementBehaviour implements $MovementBehaviour {
        tick(arg0: $MovementContext): void;
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
        mustTickWhileDisabled(): boolean;
        /**
         * @deprecated
         */
        dropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        stopMoving(arg0: $MovementContext): void;
        constructor();
    }
    export class $LeverMovingInteraction extends $SimpleBlockMovingInteraction {
        static REGISTRY: $SimpleRegistry<$Block, $MovingInteractionBehaviour>;
        constructor();
    }
    export class $MovementContext {
        getAnimationSpeed(): number;
        getFilterFromBE(): $FilterItemStack;
        static readNBT(arg0: $Level_, arg1: $StructureTemplate$StructureBlockInfo_, arg2: $CompoundTag_, arg3: $Contraption): $MovementContext;
        writeToNBT(arg0: $CompoundTag_): $CompoundTag;
        getItemStorage(): $MountedItemStorage;
        getFluidStorage(): $MountedFluidStorage;
        localPos: $BlockPos;
        motion: $Vec3;
        data: $CompoundTag;
        contraption: $Contraption;
        rotation: $UnaryOperator<$Vec3>;
        stall: boolean;
        firstMovement: boolean;
        temporaryData: $Object;
        world: $Level;
        blockEntityData: $CompoundTag;
        disabled: boolean;
        position: $Vec3;
        state: $BlockState;
        relativeMotion: $Vec3;
        constructor(arg0: $Level_, arg1: $StructureTemplate$StructureBlockInfo_, arg2: $Contraption);
        get animationSpeed(): number;
        get filterFromBE(): $FilterItemStack;
        get itemStorage(): $MountedItemStorage;
        get fluidStorage(): $MountedFluidStorage;
    }
    export class $SimpleBlockMovingInteraction extends $MovingInteractionBehaviour {
        static REGISTRY: $SimpleRegistry<$Block, $MovingInteractionBehaviour>;
        constructor();
    }
    export class $FenceGateMovingInteraction extends $SimpleBlockMovingInteraction {
        static REGISTRY: $SimpleRegistry<$Block, $MovingInteractionBehaviour>;
        constructor();
    }
    export class $TrapdoorMovingInteraction extends $SimpleBlockMovingInteraction {
        static REGISTRY: $SimpleRegistry<$Block, $MovingInteractionBehaviour>;
        constructor();
    }
    export class $BellMovementBehaviour implements $MovementBehaviour {
        isActive(arg0: $MovementContext): boolean;
        tick(arg0: $MovementContext): void;
        onSpeedChanged(arg0: $MovementContext, arg1: $Vec3_, arg2: $Vec3_): void;
        static playSound(arg0: $MovementContext): void;
        stopMoving(arg0: $MovementContext): void;
        disableBlockEntityRendering(): boolean;
        canBeDisabledVia(arg0: $MovementContext): $ItemStack;
        cancelStall(arg0: $MovementContext): void;
        startMoving(arg0: $MovementContext): void;
        collectOrDropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        writeExtraData(arg0: $MovementContext): void;
        createVisual(arg0: $VisualizationContext, arg1: $VirtualRenderWorld, arg2: $MovementContext): $ActorVisual;
        visitNewPosition(arg0: $MovementContext, arg1: $BlockPos_): void;
        renderInContraption(arg0: $MovementContext, arg1: $VirtualRenderWorld, arg2: $ContraptionMatrices, arg3: $MultiBufferSource_): void;
        getActiveAreaOffset(arg0: $MovementContext): $Vec3;
        onDisabledByControls(arg0: $MovementContext): void;
        mustTickWhileDisabled(): boolean;
        /**
         * @deprecated
         */
        dropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        constructor();
    }
}
