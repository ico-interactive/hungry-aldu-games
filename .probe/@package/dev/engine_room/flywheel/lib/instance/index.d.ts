import { $InstanceType, $InstanceHandle, $Instance } from "@package/dev/engine_room/flywheel/api/instance";
import { $Affine } from "@package/dev/engine_room/flywheel/lib/transform";
import { $Direction_, $Vec3i, $Direction$Axis_ } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $PoseStack, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $Iterable_ } from "@package/java/lang";
import { $Iterator } from "@package/java/util";
import { $Axis_ } from "@package/com/mojang/math";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $AxisAngle4f, $Vector3fc, $Matrix4f, $Matrix4fc, $Vector3ic, $Quaternionfc } from "@package/org/joml";

declare module "@package/dev/engine_room/flywheel/lib/instance" {
    export class $FlatLit {
        static relight(packedLight: number, instances: $Iterable_<$FlatLit>): void;
        static relight(packedLight: number, instances: $Stream<$FlatLit>): void;
        static relight(packedLight: number, instances: $Iterator<$FlatLit>): void;
        static relight(packedLight: number, ...instances: $FlatLit[]): void;
    }
    export interface $FlatLit extends $Instance {
        light(arg0: number): $FlatLit;
        light(blockLight: number, skyLight: number): $FlatLit;
    }
    export class $ColoredLitOverlayInstance extends $ColoredLitInstance {
        overlay(overlay: number): $ColoredLitOverlayInstance;
        red: number;
        green: number;
        blue: number;
        alpha: number;
        constructor(type: $InstanceType<$ColoredLitOverlayInstance>, handle: $InstanceHandle);
    }
    export class $TransformedInstance extends $ColoredLitOverlayInstance implements $Affine<$TransformedInstance> {
        rotate(axisAngle: $AxisAngle4f): $TransformedInstance;
        rotate(radians: number, axisX: number, axisY: number, axisZ: number): $TransformedInstance;
        mul(other: $Matrix4fc): $TransformedInstance;
        mul(stack: $PoseStack): $TransformedInstance;
        mul(other: $PoseStack$Pose): $TransformedInstance;
        rotateAround(quaternion: $Quaternionfc, x: number, y: number, z: number): $TransformedInstance;
        setIdentityTransform(): $TransformedInstance;
        setTransform(pose: $Matrix4fc): $TransformedInstance;
        setTransform(pose: $PoseStack$Pose): $TransformedInstance;
        setTransform(stack: $PoseStack): $TransformedInstance;
        setZeroTransform(): $TransformedInstance;
        rotateZCentered(radians: number): $TransformedInstance;
        rotateCentered(radians: number, axisX: number, axisY: number, axisZ: number): $TransformedInstance;
        rotateZ(radians: number): $TransformedInstance;
        rotateY(radians: number): $TransformedInstance;
        rotateAround(quaternion: $Quaternionfc, vec: $Vector3fc): $TransformedInstance;
        rotateZCenteredDegrees(degrees: number): $TransformedInstance;
        rotateXCenteredDegrees(degrees: number): $TransformedInstance;
        rotateYCenteredDegrees(degrees: number): $TransformedInstance;
        rotateCentered(q: $Quaternionfc): $TransformedInstance;
        rotateCentered(radians: number, axis: $Vector3fc): $TransformedInstance;
        rotateCentered(radians: number, axis: $Axis_): $TransformedInstance;
        rotateCentered(radians: number, axis: $Direction_): $TransformedInstance;
        rotateCentered(radians: number, axis: $Direction$Axis_): $TransformedInstance;
        rotateCenteredDegrees(degrees: number, axis: $Axis_): $TransformedInstance;
        rotateCenteredDegrees(degrees: number, axisX: number, axisY: number, axisZ: number): $TransformedInstance;
        rotateCenteredDegrees(degrees: number, axis: $Vector3fc): $TransformedInstance;
        rotateCenteredDegrees(degrees: number, axis: $Direction_): $TransformedInstance;
        rotateCenteredDegrees(degrees: number, axis: $Direction$Axis_): $TransformedInstance;
        uncenter(): $TransformedInstance;
        nudge(seed: number): $TransformedInstance;
        translateBack(v: number): $TransformedInstance;
        translateBack(vec: $Vec3i): $TransformedInstance;
        translateBack(x: number, y: number, z: number): $TransformedInstance;
        translateBack(x: number, y: number, z: number): $TransformedInstance;
        translateBack(vec: $Vector3ic): $TransformedInstance;
        translateBack(vec: $Vector3fc): $TransformedInstance;
        translateBack(vec: $Vec3_): $TransformedInstance;
        translateZ(z: number): $TransformedInstance;
        translateY(y: number): $TransformedInstance;
        translateX(x: number): $TransformedInstance;
        center(): $TransformedInstance;
        translate(x: number, y: number, z: number): $TransformedInstance;
        translate(v: number): $TransformedInstance;
        translate(vec: $Vector3fc): $TransformedInstance;
        translate(vec: $Vector3ic): $TransformedInstance;
        translate(vec: $Vec3i): $TransformedInstance;
        translate(vec: $Vec3_): $TransformedInstance;
        self(): $TransformedInstance;
        rotate(radians: number, axis: $Vector3fc): $TransformedInstance;
        rotate(radians: number, axis: $Direction_): $TransformedInstance;
        rotate(radians: number, axis: $Direction$Axis_): $TransformedInstance;
        rotate(radians: number, axis: $Axis_): $TransformedInstance;
        rotateToFace(facing: $Direction_): $TransformedInstance;
        rotateTo(fromX: number, fromY: number, fromZ: number, toX: number, toY: number, toZ: number): $TransformedInstance;
        rotateTo(from: $Vector3fc, to: $Vector3fc): $TransformedInstance;
        rotateTo(from: $Direction_, to: $Direction_): $TransformedInstance;
        rotateXDegrees(degrees: number): $TransformedInstance;
        rotateYDegrees(degrees: number): $TransformedInstance;
        rotateDegrees(degrees: number, axis: $Axis_): $TransformedInstance;
        rotateDegrees(degrees: number, axisX: number, axisY: number, axisZ: number): $TransformedInstance;
        rotateDegrees(degrees: number, axis: $Direction$Axis_): $TransformedInstance;
        rotateDegrees(degrees: number, axis: $Vector3fc): $TransformedInstance;
        rotateDegrees(degrees: number, axis: $Direction_): $TransformedInstance;
        rotateZDegrees(degrees: number): $TransformedInstance;
        scale(factors: $Vector3fc): $TransformedInstance;
        scale(factor: number): $TransformedInstance;
        scaleX(factor: number): $TransformedInstance;
        scaleZ(factor: number): $TransformedInstance;
        scaleY(factor: number): $TransformedInstance;
        scale(arg0: number, arg1: number, arg2: number): $TransformedInstance;
        rotateXCentered(radians: number): $TransformedInstance;
        rotateYCentered(radians: number): $TransformedInstance;
        rotateX(radians: number): $TransformedInstance;
        red: number;
        green: number;
        blue: number;
        pose: $Matrix4f;
        alpha: number;
        constructor(type: $InstanceType<$TransformedInstance>, handle: $InstanceHandle);
    }
    export class $ColoredLitInstance extends $AbstractInstance implements $FlatLit {
        color(red: number, green: number, blue: number, alpha: number): $ColoredLitInstance;
        color(red: number, green: number, blue: number): $ColoredLitInstance;
        color(red: number, green: number, blue: number, alpha: number): $ColoredLitInstance;
        color(red: number, green: number, blue: number): $ColoredLitInstance;
        color(red: number, green: number, blue: number): $ColoredLitInstance;
        color(red: number, green: number, blue: number, alpha: number): $ColoredLitInstance;
        colorRgb(rgb: number): $ColoredLitInstance;
        colorArgb(argb: number): $ColoredLitInstance;
        light(blockLight: number, skyLight: number): $FlatLit;
        light(arg0: number): $FlatLit;
        red: number;
        green: number;
        blue: number;
        alpha: number;
        constructor(type: $InstanceType<$ColoredLitInstance>, handle: $InstanceHandle);
    }
    export class $AbstractInstance implements $Instance {
        type(): $InstanceType<never>;
        "delete"(): void;
        handle(): $InstanceHandle;
        setChanged(): void;
        setVisible(visible: boolean): void;
        set visible(value: boolean);
    }
}
