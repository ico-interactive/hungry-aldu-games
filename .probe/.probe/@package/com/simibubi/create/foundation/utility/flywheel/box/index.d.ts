import { $BlockPos_, $Vec3i, $Direction$Axis_, $SectionPos } from "@package/net/minecraft/core";
import { $Collection_ } from "@package/java/util";
import { $AABB, $AABB_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/simibubi/create/foundation/utility/flywheel/box" {
    export class $Box$CoordinateConsumer {
    }
    export interface $Box$CoordinateConsumer {
        accept(arg0: number, arg1: number, arg2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Box$CoordinateConsumer}.
     */
    export type $Box$CoordinateConsumer_ = ((arg0: number, arg1: number, arg2: number) => void);
    export class $MutableBox implements $Box {
        setMax(arg0: $Vec3i): void;
        setMax(arg0: number, arg1: number, arg2: number): void;
        static from(arg0: $AABB_): $MutableBox;
        static from(arg0: $SectionPos): $MutableBox;
        static from(arg0: $Vec3i, arg1: $Vec3i): $MutableBox;
        static from(arg0: $Vec3i): $MutableBox;
        grow(arg0: number): void;
        grow(arg0: number, arg1: number, arg2: number): void;
        getMinX(): number;
        getMinY(): number;
        assign(arg0: $Vec3i, arg1: $Vec3i): void;
        assign(arg0: $AABB_): void;
        assign(arg0: $Box): void;
        setMaxZ(arg0: number): void;
        setMaxY(arg0: number): void;
        setMaxX(arg0: number): void;
        setMinZ(arg0: number): $MutableBox;
        setMinX(arg0: number): void;
        setMinY(arg0: number): void;
        translate(arg0: $Vec3i): void;
        translate(arg0: number, arg1: number, arg2: number): void;
        getMaxX(): number;
        getMaxZ(): number;
        getMinZ(): number;
        getMaxY(): number;
        static ofRadius(arg0: number): $MutableBox;
        setMin(arg0: number, arg1: number, arg2: number): void;
        setMin(arg0: $Vec3i): void;
        fixMinMax(): void;
        nextPowerOf2Centered(): void;
        static containingAll(arg0: $Collection_<$BlockPos_>): $Box;
        nextPowerOf2(): void;
        intersectAssign(arg0: $Box): void;
        unionAssign(arg0: $Box): void;
        unionAssign(arg0: $AABB_): void;
        mirrorAbout(arg0: $Direction$Axis_): void;
        isEmpty(): boolean;
        contains(arg0: number, arg1: number, arg2: number): boolean;
        contains(arg0: $Box): boolean;
        copy(): $MutableBox;
        intersects(arg0: $Box): boolean;
        intersects(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        union(arg0: $Box): $MutableBox;
        intersect(arg0: $Box): $MutableBox;
        sameAs(arg0: $Box): boolean;
        sameAs(arg0: $AABB_): boolean;
        sameAs(arg0: $Box, arg1: number): boolean;
        toAABB(): $AABB;
        volume(): number;
        sizeX(): number;
        sizeY(): number;
        sizeZ(): number;
        hasPowerOf2Sides(): boolean;
        forEachContained(arg0: $Box$CoordinateConsumer_): void;
        constructor();
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
        get empty(): boolean;
    }
    export class $Box {
    }
    export interface $Box {
        isEmpty(): boolean;
        contains(arg0: number, arg1: number, arg2: number): boolean;
        contains(arg0: $Box): boolean;
        copy(): $MutableBox;
        intersects(arg0: $Box): boolean;
        intersects(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        union(arg0: $Box): $MutableBox;
        getMinX(): number;
        getMinY(): number;
        intersect(arg0: $Box): $MutableBox;
        sameAs(arg0: $Box): boolean;
        sameAs(arg0: $AABB_): boolean;
        sameAs(arg0: $Box, arg1: number): boolean;
        toAABB(): $AABB;
        getMaxX(): number;
        getMaxZ(): number;
        getMinZ(): number;
        getMaxY(): number;
        volume(): number;
        sizeX(): number;
        sizeY(): number;
        sizeZ(): number;
        hasPowerOf2Sides(): boolean;
        forEachContained(arg0: $Box$CoordinateConsumer_): void;
        get empty(): boolean;
        get minX(): number;
        get minY(): number;
        get maxX(): number;
        get maxZ(): number;
        get minZ(): number;
        get maxY(): number;
    }
}
