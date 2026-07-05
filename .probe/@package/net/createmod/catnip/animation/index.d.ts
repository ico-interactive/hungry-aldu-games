import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";

declare module "@package/net/createmod/catnip/animation" {
    export class $LerpedFloat$Chaser {
        static exp(arg0: number): $LerpedFloat$Chaser;
        static IDLE: $LerpedFloat$Chaser;
        static EXP: $LerpedFloat$Chaser;
        static LINEAR: $LerpedFloat$Chaser;
    }
    export interface $LerpedFloat$Chaser {
        chase(arg0: number, arg1: number, arg2: number): number;
    }
    /**
     * Values that may be interpreted as {@link $LerpedFloat$Chaser}.
     */
    export type $LerpedFloat$Chaser_ = ((arg0: number, arg1: number, arg2: number) => number);
    export class $Force {
    }
    export interface $Force {
        get(arg0: number, arg1: number, arg2: number): number;
        finished(): boolean;
    }
    export class $LerpedFloat {
        getValue(arg0: number): number;
        getValue(): number;
        setValue(arg0: number): void;
        tickChaser(): void;
        static angular(): $LerpedFloat;
        chase(arg0: number, arg1: number, arg2: $LerpedFloat$Chaser_): $LerpedFloat;
        startWithValue(arg0: number): $LerpedFloat;
        forceNextSync(): void;
        readNBT(arg0: $CompoundTag_, arg1: boolean): void;
        writeNBT(): $CompoundTag;
        static linear(): $LerpedFloat;
        getChaseTarget(): number;
        updateChaseTarget(arg0: number): void;
        setValueNoUpdate(arg0: number): void;
        updateChaseSpeed(arg0: number): boolean;
        settled(): boolean;
        chaseTimed(arg0: number, arg1: number): $LerpedFloat;
        disableSmartAngleChasing(): $LerpedFloat;
        constructor(arg0: $LerpedFloat$Interpolator_);
        get chaseTarget(): number;
        set valueNoUpdate(value: number);
    }
    export class $LerpedFloat$Interpolator {
    }
    export interface $LerpedFloat$Interpolator {
        interpolate(arg0: number, arg1: number, arg2: number): number;
    }
    /**
     * Values that may be interpreted as {@link $LerpedFloat$Interpolator}.
     */
    export type $LerpedFloat$Interpolator_ = ((arg0: number, arg1: number, arg2: number) => number);
    export class $PhysicalFloat {
        getValue(arg0: number): number;
        getValue(): number;
        static create(): $PhysicalFloat;
        static create(arg0: number): $PhysicalFloat;
        tick(): void;
        addForce(arg0: $Force): $PhysicalFloat;
        withLimit(arg0: number): $PhysicalFloat;
        withDrag(arg0: number): $PhysicalFloat;
        bump(arg0: number, arg1: number): $PhysicalFloat;
        bump(arg0: number): $PhysicalFloat;
        startAt(arg0: number): $PhysicalFloat;
        zeroing(arg0: number): $PhysicalFloat;
        constructor(arg0: number);
    }
}
