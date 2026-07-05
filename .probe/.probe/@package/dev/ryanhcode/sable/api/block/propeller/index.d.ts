import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $Direction } from "@package/net/minecraft/core";
import { $RigidBodyHandle } from "@package/dev/ryanhcode/sable/api/physics/handle";
import { $ServerSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $BlockEntitySubLevelActor } from "@package/dev/ryanhcode/sable/api/block";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Vector3d } from "@package/org/joml";

declare module "@package/dev/ryanhcode/sable/api/block/propeller" {
    export class $BlockEntityPropeller {
    }
    export interface $BlockEntityPropeller {
        isActive(): boolean;
        getLevel(): $Level;
        getCurrentAirPressure(): number;
        getThrust(): number;
        getAirflow(): number;
        getBlockPos(): $BlockPos;
        getAirflowScaling(): number;
        getScaledThrust(): number;
        getBlockDirection(): $Direction;
        get active(): boolean;
        get level(): $Level;
        get currentAirPressure(): number;
        get thrust(): number;
        get airflow(): number;
        get blockPos(): $BlockPos;
        get airflowScaling(): number;
        get scaledThrust(): number;
        get blockDirection(): $Direction;
    }
    export class $BlockEntitySubLevelPropellerActor {
        static THRUST_POSITION: $Vector3d;
        static THRUST_VECTOR: $Vector3d;
    }
    export interface $BlockEntitySubLevelPropellerActor extends $BlockEntitySubLevelActor {
        applyForces(arg0: $ServerSubLevel, arg1: $Vec3_, arg2: number): void;
        sable$physicsTick(arg0: $ServerSubLevel, arg1: $RigidBodyHandle, arg2: number): void;
        getPropeller(): $BlockEntityPropeller;
        get propeller(): $BlockEntityPropeller;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntitySubLevelPropellerActor}.
     */
    export type $BlockEntitySubLevelPropellerActor_ = (() => $BlockEntityPropeller);
}
