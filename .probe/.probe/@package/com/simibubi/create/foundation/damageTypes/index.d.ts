import { $Level_ } from "@package/net/minecraft/world/level";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $DamageScaling_, $DamageType, $DeathMessageType_, $DamageEffects_, $DamageType_, $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/com/simibubi/create/foundation/damageTypes" {
    export class $DamageTypeBuilder {
        register(arg0: $BootstrapContext<$DamageType_>): $DamageType;
        build(): $DamageType;
        exhaustion(arg0: number): $DamageTypeBuilder;
        msgId(arg0: string): $DamageTypeBuilder;
        effects(arg0: $DamageEffects_): $DamageTypeBuilder;
        deathMessageType(arg0: $DeathMessageType_): $DamageTypeBuilder;
        scaling(arg0: $DamageScaling_): $DamageTypeBuilder;
        simpleMsgId(): $DamageTypeBuilder;
        constructor(arg0: $ResourceKey_<$DamageType>);
    }
    export class $CreateDamageSources {
        static saw(arg0: $Level_): $DamageSource;
        static drill(arg0: $Level_): $DamageSource;
        static cuckooSurprise(arg0: $Level_): $DamageSource;
        static roller(arg0: $Level_): $DamageSource;
        static runOver(arg0: $Level_, arg1: $Entity): $DamageSource;
        static crush(arg0: $Level_): $DamageSource;
        static potatoCannon(arg0: $Level_, arg1: $Entity, arg2: $Entity): $DamageSource;
        static fanLava(arg0: $Level_): $DamageSource;
        static fanFire(arg0: $Level_): $DamageSource;
        constructor();
    }
}
