import { $Consumer_ } from "@package/java/util/function";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $Pose3dc, $Pose3d } from "@package/dev/ryanhcode/sable/companion/math";
import { $PacketReceiveMode_ } from "@package/dev/ryanhcode/sable/network/packets";
import { $ClientSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $Record } from "@package/java/lang";

declare module "@package/dev/ryanhcode/sable/network/client" {
    export class $SubLevelSnapshotInterpolator$Snapshot extends $Record {
        gameTick(): number;
        pose(): $Pose3dc;
        constructor(gameTick: number, pose: $Pose3dc);
    }
    /**
     * Values that may be interpreted as {@link $SubLevelSnapshotInterpolator$Snapshot}.
     */
    export type $SubLevelSnapshotInterpolator$Snapshot_ = { pose?: $Pose3dc, gameTick?: number,  } | [pose?: $Pose3dc, gameTick?: number, ];
    export class $SubLevelSnapshotInterpolator {
        tick(arg0: number): void;
        setFirstPoses(arg0: $Pose3dc, arg1: $Pose3dc): void;
        receiveSnapshot(arg0: number, arg1: $Pose3dc): void;
        splitFrom(arg0: $SubLevelSnapshotInterpolator, arg1: $Pose3dc): void;
        getInterpolatedPose(): $Pose3dc;
        getSampleAt(arg0: number, arg1: $Pose3d): void;
        receiveStop(): void;
        buffer: $ObjectArrayList<$SubLevelSnapshotInterpolator$Snapshot>;
        constructor(arg0: $Pose3d);
        get interpolatedPose(): $Pose3dc;
    }
    export class $ClientSableInterpolationState {
        getInterpolationDelay(): number;
        tick(): void;
        receiveInfo(arg0: number, arg1: number, arg2: boolean): void;
        receiveSnapshot(arg0: $ClientSubLevel, arg1: number, arg2: $Pose3dc, arg3: $PacketReceiveMode_): void;
        isStopped(): boolean;
        getTickPointer(): number;
        addDebugInfo(arg0: $Consumer_<string>): void;
        mostRecentInterpolationTick: number;
        static RENDER_INTERPOLATION_BOUNDS: boolean;
        lastInterpolationTick: number;
        constructor();
        get interpolationDelay(): number;
        get stopped(): boolean;
        get tickPointer(): number;
    }
}
