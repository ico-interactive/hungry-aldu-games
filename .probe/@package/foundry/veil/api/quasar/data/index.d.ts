import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $SpriteData, $RenderStyle, $RenderStyle_, $SpriteData_ } from "@package/foundry/veil/api/quasar/particle";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ParticleModuleData } from "@package/foundry/veil/api/quasar/data/module";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $EmitterShape_, $EmitterShape } from "@package/foundry/veil/api/quasar/emitters/shape";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Vector3dc, $Vector3fc, $Vector3d, $Vector3f } from "@package/org/joml";
export * as module from "@package/foundry/veil/api/quasar/data/module";

declare module "@package/foundry/veil/api/quasar/data" {
    export class $QuasarParticleData extends $Record {
        velocityStretchFactor(): number;
        collisionModules(): $List<$Holder<$ParticleModuleData>>;
        updateModules(): $List<$Holder<$ParticleModuleData>>;
        initModules(): $List<$Holder<$ParticleModuleData>>;
        faceVelocity(): boolean;
        renderModules(): $List<$Holder<$ParticleModuleData>>;
        renderStyle(): $RenderStyle;
        getRegistryId(): $ResourceLocation;
        forceModules(): $List<$Holder<$ParticleModuleData>>;
        getAllModules(): $List<$Holder<$ParticleModuleData>>;
        additive(): boolean;
        spriteData(): $SpriteData;
        shouldCollide(): boolean;
        static CODEC: $Codec<$Holder<$QuasarParticleData>>;
        static DIRECT_CODEC: $Codec<$QuasarParticleData>;
        constructor(shouldCollide: boolean, faceVelocity: boolean, velocityStretchFactor: number, initModules: $List_<$Holder_<$ParticleModuleData>>, updateModules: $List_<$Holder_<$ParticleModuleData>>, collisionModules: $List_<$Holder_<$ParticleModuleData>>, forceModules: $List_<$Holder_<$ParticleModuleData>>, renderModules: $List_<$Holder_<$ParticleModuleData>>, spriteData: $SpriteData_, additive: boolean, renderStyle: $RenderStyle_);
        get registryId(): $ResourceLocation;
        get allModules(): $List<$Holder<$ParticleModuleData>>;
    }
    /**
     * Values that may be interpreted as {@link $QuasarParticleData}.
     */
    export type $QuasarParticleData_ = { spriteData?: $SpriteData_, faceVelocity?: boolean, renderModules?: $List_<$Holder_<$ParticleModuleData>>, additive?: boolean, renderStyle?: $RenderStyle_, collisionModules?: $List_<$Holder_<$ParticleModuleData>>, shouldCollide?: boolean, initModules?: $List_<$Holder_<$ParticleModuleData>>, forceModules?: $List_<$Holder_<$ParticleModuleData>>, velocityStretchFactor?: number, updateModules?: $List_<$Holder_<$ParticleModuleData>>,  } | [spriteData?: $SpriteData_, faceVelocity?: boolean, renderModules?: $List_<$Holder_<$ParticleModuleData>>, additive?: boolean, renderStyle?: $RenderStyle_, collisionModules?: $List_<$Holder_<$ParticleModuleData>>, shouldCollide?: boolean, initModules?: $List_<$Holder_<$ParticleModuleData>>, forceModules?: $List_<$Holder_<$ParticleModuleData>>, velocityStretchFactor?: number, updateModules?: $List_<$Holder_<$ParticleModuleData>>, ];
    export class $EmitterShapeSettings extends $Record {
        dimensions(): $Vector3fc;
        shape(): $EmitterShape;
        getRegistryId(): $ResourceLocation;
        fromSurface(): boolean;
        getPos(arg0: $RandomSource, arg1: $Vector3dc): $Vector3d;
        rotation(): $Vector3fc;
        static CODEC: $Codec<$Holder<$EmitterShapeSettings>>;
        static DIRECT_CODEC: $Codec<$EmitterShapeSettings>;
        constructor(shape: $EmitterShape_, dimensions: $Vector3fc, rotation: $Vector3fc, fromSurface: boolean);
        get registryId(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $EmitterShapeSettings}.
     */
    export type $EmitterShapeSettings_ = { shape?: $EmitterShape_, fromSurface?: boolean, dimensions?: $Vector3fc, rotation?: $Vector3fc,  } | [shape?: $EmitterShape_, fromSurface?: boolean, dimensions?: $Vector3fc, rotation?: $Vector3fc, ];
    export class $ParticleEmitterData extends $Record {
        count(): number;
        loop(): boolean;
        particleData(): $QuasarParticleData;
        getRegistryId(): $ResourceLocation;
        maxParticles(): number;
        particleDataHolder(): $Holder<$QuasarParticleData>;
        emitterSettings(): $EmitterSettings;
        maxLifetime(): number;
        rate(): number;
        static CODEC: $Codec<$Holder<$ParticleEmitterData>>;
        static DIRECT_CODEC: $Codec<$ParticleEmitterData>;
        constructor(maxLifetime: number, loop: boolean, rate: number, count: number, maxParticles: number, emitterSettings: $EmitterSettings_, particleDataHolder: $Holder_<$QuasarParticleData>);
        get registryId(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $ParticleEmitterData}.
     */
    export type $ParticleEmitterData_ = { maxParticles?: number, count?: number, emitterSettings?: $EmitterSettings_, maxLifetime?: number, rate?: number, loop?: boolean, particleDataHolder?: $Holder_<$QuasarParticleData>,  } | [maxParticles?: number, count?: number, emitterSettings?: $EmitterSettings_, maxLifetime?: number, rate?: number, loop?: boolean, particleDataHolder?: $Holder_<$QuasarParticleData>, ];
    export class $ParticleSettings extends $Record {
        randomInitialRotation(): boolean;
        particleSizeVariation(): number;
        particleLifetimeVariation(): number;
        randomInitialDirection(): boolean;
        getRegistryId(): $ResourceLocation;
        particleSize(arg0: $RandomSource): number;
        particleSize(): number;
        randomSpeed(): boolean;
        randomLifetime(): boolean;
        particleDirection(arg0: $RandomSource): $Vector3f;
        particleSpeed(arg0: $RandomSource): number;
        particleSpeed(): number;
        particleLifetime(arg0: $RandomSource): number;
        particleLifetime(): number;
        randomSize(): boolean;
        initialDirection(): $Vector3fc;
        initialDirection(arg0: $RandomSource): $Vector3fc;
        static CODEC: $Codec<$Holder<$ParticleSettings>>;
        static DIRECT_CODEC: $Codec<$ParticleSettings>;
        constructor(particleSpeed: number, particleSize: number, particleSizeVariation: number, particleLifetime: number, particleLifetimeVariation: number, initialDirection: $Vector3fc, randomInitialDirection: boolean, randomInitialRotation: boolean, randomSpeed: boolean, randomSize: boolean, randomLifetime: boolean);
        get registryId(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $ParticleSettings}.
     */
    export type $ParticleSettings_ = { randomInitialDirection?: boolean, particleSize?: number, randomSize?: boolean, initialDirection?: $Vector3fc, randomSpeed?: boolean, particleSpeed?: number, particleSizeVariation?: number, randomInitialRotation?: boolean, randomLifetime?: boolean, particleLifetime?: number, particleLifetimeVariation?: number,  } | [randomInitialDirection?: boolean, particleSize?: number, randomSize?: boolean, initialDirection?: $Vector3fc, randomSpeed?: boolean, particleSpeed?: number, particleSizeVariation?: number, randomInitialRotation?: boolean, randomLifetime?: boolean, particleLifetime?: number, particleLifetimeVariation?: number, ];
    export class $EmitterSettings extends $Record {
        particleSettingsHolder(): $Holder<$ParticleSettings>;
        emitterShapeSettings(): $List<$EmitterShapeSettings>;
        particleSettings(): $ParticleSettings;
        forceSpawn(): boolean;
        emitterShapeSettingsHolders(): $List<$Holder<$EmitterShapeSettings>>;
        static CODEC: $Codec<$EmitterSettings>;
        constructor(emitterShapeSettingsHolders: $List_<$Holder_<$EmitterShapeSettings>>, particleSettingsHolder: $Holder_<$ParticleSettings>, forceSpawn: boolean);
    }
    /**
     * Values that may be interpreted as {@link $EmitterSettings}.
     */
    export type $EmitterSettings_ = { forceSpawn?: boolean, particleSettingsHolder?: $Holder_<$ParticleSettings>, emitterShapeSettingsHolders?: $List_<$Holder_<$EmitterShapeSettings>>,  } | [forceSpawn?: boolean, particleSettingsHolder?: $Holder_<$ParticleSettings>, emitterShapeSettingsHolders?: $List_<$Holder_<$EmitterShapeSettings>>, ];
}
