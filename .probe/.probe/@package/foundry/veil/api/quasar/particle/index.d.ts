import { $Colorc } from "@package/foundry/veil/api/client/color";
import { $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $Codec } from "@package/com/mojang/serialization";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $MolangEnvironment } from "@package/gg/moonflower/molangcompiler/api";
import { $Camera } from "@package/net/minecraft/client";
import { $Iterator, $List, $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $BlockPos } from "@package/net/minecraft/core";
import { $TickTaskScheduler } from "@package/foundry/veil/api";
import { $MatrixStack } from "@package/foundry/veil/api/client/render";
import { $Trail } from "@package/foundry/veil/api/quasar/fx";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $CodeModule_ } from "@package/foundry/veil/api/quasar/data/module";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Record } from "@package/java/lang";
import { $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $QuasarParticleData_, $QuasarParticleData, $ParticleSettings, $ParticleSettings_, $EmitterShapeSettings, $ParticleEmitterData, $EmitterShapeSettings_ } from "@package/foundry/veil/api/quasar/data";
import { $Vector4fc, $Vector3dc, $Vector3d, $Vector3f, $Vector4f, $Vector3fc } from "@package/org/joml";
import { $ForceParticleModule, $ParticleModule, $CollisionParticleModule, $UpdateParticleModule, $InitParticleModule, $RenderParticleModule } from "@package/foundry/veil/api/quasar/emitters/module";

declare module "@package/foundry/veil/api/quasar/particle" {
    export class $RenderStyle {
        static CODEC: $Codec<$RenderStyle>;
    }
    export interface $RenderStyle {
        clear(): void;
        setup(arg0: number): boolean;
        render(arg0: $MatrixStack, arg1: $QuasarParticle, arg2: $RenderData, arg3: $Vector3fc, arg4: $VertexConsumer, arg5: number, arg6: number): void;
        getRenderType(arg0: $QuasarParticle, arg1: $RenderData): $RenderType;
        set up(value: number);
    }
    /**
     * Values that may be interpreted as {@link $RenderStyle}.
     */
    export type $RenderStyle_ = RegistryTypes.VeilQuasarRenderStyle | ((arg0: $MatrixStack, arg1: $QuasarParticle, arg2: $RenderData, arg3: $Vector3fc, arg4: $VertexConsumer, arg5: number, arg6: number) => void);
    export class $RenderData {
        setColor(arg0: $Vector4fc): void;
        setColor(arg0: $Colorc): void;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        tick(arg0: $QuasarParticle, arg1: number): void;
        renderTrails(arg0: $MatrixStack, arg1: $MultiBufferSource_, arg2: $Vec3_, arg3: number): void;
        getAlpha(): number;
        getRed(): number;
        getBlue(): number;
        getGreen(): number;
        getRenderPosition(): $Vector3dc;
        getAtlasSprite(): $TextureAtlasSprite;
        getSpriteData(): $SpriteData;
        getRenderRotation(): $Vector3fc;
        getRenderRadius(): number;
        getAgePercent(): number;
        getRenderAge(): number;
        isAdditive(): boolean;
        markDirty(): void;
        setAdditive(arg0: boolean): void;
        setGreen(arg0: number): void;
        setRed(arg0: number): void;
        setBlue(arg0: number): void;
        render(arg0: $QuasarParticle, arg1: number): void;
        setAtlasSprite(arg0: $TextureAtlasSprite): void;
        getRenderType(): $RenderType;
        setAlpha(arg0: number): void;
        setSpriteData(arg0: $SpriteData_): void;
        getPackedLight(): number;
        setFixedPackedLight(arg0: number): void;
        getTrails(): $List<$Trail>;
        getFixedPackedLight(): number;
        /**
         * @deprecated
         */
        static BLANK: $ResourceLocation;
        agePercent: number;
        renderAge: number;
        constructor(arg0: $QuasarParticle, arg1: $QuasarParticleData_);
        get renderPosition(): $Vector3dc;
        get renderRotation(): $Vector3fc;
        get renderRadius(): number;
        get renderType(): $RenderType;
        get packedLight(): number;
        get trails(): $List<$Trail>;
    }
    export interface $RenderStyle extends RegistryMarked<RegistryTypes.VeilQuasarRenderStyleTag, RegistryTypes.VeilQuasarRenderStyle> {}
    export class $ParticleModuleSet {
        static builder(): $ParticleModuleSet$Builder;
        copy(): $ParticleModuleSet;
        getAllModules(): $ParticleModule[];
        getInitModules(): $InitParticleModule[];
        getUpdateModules(): $UpdateParticleModule[];
        getForceModules(): $ForceParticleModule[];
        updateEnabled(): void;
        getCollisionModules(): $CollisionParticleModule[];
        getEnabledRenderModules(): $Iterator<$RenderParticleModule>;
        getRenderModules(): $RenderParticleModule[];
        getEnabledRenderModuleCount(): number;
        getEnabledRenderModulesArray(): $RenderParticleModule[];
        get allModules(): $ParticleModule[];
        get initModules(): $InitParticleModule[];
        get updateModules(): $UpdateParticleModule[];
        get forceModules(): $ForceParticleModule[];
        get collisionModules(): $CollisionParticleModule[];
        get enabledRenderModules(): $Iterator<$RenderParticleModule>;
        get renderModules(): $RenderParticleModule[];
        get enabledRenderModuleCount(): number;
        get enabledRenderModulesArray(): $RenderParticleModule[];
    }
    export class $ParticleModuleSet$Builder {
        build(): $ParticleModuleSet;
        addModule(arg0: $ParticleModule): void;
        constructor();
    }
    export class $QuasarParticle {
        remove(): void;
        init(): void;
        getData(): $QuasarParticleData;
        tick(): void;
        getLevel(): $ClientLevel;
        getPosition(): $Vector3d;
        getSettings(): $ParticleSettings;
        getBlockStateInOrUnder(): $BlockState;
        getRenderData(): $RenderData;
        setRadius(arg0: number): void;
        getRadius(): number;
        getScheduler(): $TickTaskScheduler;
        getEnvironment(): $MolangEnvironment;
        getModules(): $ParticleModuleSet;
        getAge(): number;
        getEmitter(): $ParticleEmitter;
        render(arg0: number): void;
        onRemove(): void;
        setAge(arg0: number): void;
        isRemoved(): boolean;
        getBlockPosition(): $BlockPos;
        getVelocity(): $Vector3d;
        getBoundingBox(): $AABB;
        vectorToRotation(arg0: number, arg1: number, arg2: number): void;
        getLifetime(): number;
        getRotation(): $Vector3f;
        getRandomSource(): $RandomSource;
        constructor(arg0: $ClientLevel, arg1: $RandomSource, arg2: $TickTaskScheduler, arg3: $QuasarParticleData_, arg4: $ParticleModuleSet, arg5: $ParticleSettings_, arg6: $ParticleEmitter);
        get data(): $QuasarParticleData;
        get level(): $ClientLevel;
        get position(): $Vector3d;
        get settings(): $ParticleSettings;
        get blockStateInOrUnder(): $BlockState;
        get renderData(): $RenderData;
        get scheduler(): $TickTaskScheduler;
        get environment(): $MolangEnvironment;
        get modules(): $ParticleModuleSet;
        get emitter(): $ParticleEmitter;
        get removed(): boolean;
        get blockPosition(): $BlockPos;
        get velocity(): $Vector3d;
        get boundingBox(): $AABB;
        get lifetime(): number;
        get rotation(): $Vector3f;
        get randomSource(): $RandomSource;
    }
    export class $ParticleEmitter {
        remove(): void;
        reset(): void;
        trim(arg0: number): number;
        getCount(): number;
        isLoop(): boolean;
        getData(): $ParticleEmitterData;
        getPosition(): $Vector3d;
        isForceSpawn(): boolean;
        setMaxParticles(arg0: number): void;
        addCodeModule(arg0: $CodeModule_): void;
        setForceSpawn(arg0: boolean): void;
        static clearErrors(): void;
        getAttachedEntity(): $Entity;
        getParticleData(): $QuasarParticleData;
        setAttachedEntity(arg0: $Entity): void;
        getMaxParticles(): number;
        getMaxLifetime(): number;
        setParticleData(arg0: $QuasarParticleData_): void;
        setMaxLifetime(arg0: number): void;
        setLoop(arg0: boolean): void;
        setPosition(arg0: $Vec3_): void;
        setPosition(arg0: number, arg1: number, arg2: number): void;
        setPosition(arg0: $Vector3dc): void;
        setRate(arg0: number): void;
        getRate(): number;
        setCount(arg0: number): void;
        getParticleCount(): number;
        render(arg0: $MatrixStack, arg1: $MultiBufferSource_, arg2: $Camera, arg3: number): void;
        setParticleSettings(arg0: $ParticleSettings_): void;
        getParticleSettings(): $ParticleSettings;
        setEmitterShapeSettings(arg0: $List_<$EmitterShapeSettings_>): void;
        getEmitterShapeSettings(): $List<$EmitterShapeSettings>;
        getRegistryName(): $ResourceLocation;
        isRemoved(): boolean;
        get data(): $ParticleEmitterData;
        get particleCount(): number;
        get registryName(): $ResourceLocation;
        get removed(): boolean;
    }
    export class $SpriteData extends $Record {
        v(arg0: number, arg1: number, arg2: number): number;
        u(arg0: number, arg1: number, arg2: number): number;
        frameHeight(): number;
        stretchToLifetime(): boolean;
        sprite(): $ResourceLocation;
        frameWidth(): number;
        uv(arg0: number, arg1: number, arg2: $Vector4f): $Vector4f;
        frameCount(): number;
        frameTime(): number;
        static CODEC: $Codec<$SpriteData>;
        constructor(sprite: $ResourceLocation_, frameCount: number, frameTime: number, frameWidth: number, frameHeight: number, stretchToLifetime: boolean);
    }
    /**
     * Values that may be interpreted as {@link $SpriteData}.
     */
    export type $SpriteData_ = { frameTime?: number, frameHeight?: number, frameCount?: number, stretchToLifetime?: boolean, frameWidth?: number, sprite?: $ResourceLocation_,  } | [frameTime?: number, frameHeight?: number, frameCount?: number, stretchToLifetime?: boolean, frameWidth?: number, sprite?: $ResourceLocation_, ];
}
