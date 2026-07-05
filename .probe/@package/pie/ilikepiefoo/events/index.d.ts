import { $Level } from "@package/net/minecraft/world/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Map } from "@package/java/util";
import { $KubePlayerEvent } from "@package/dev/latvian/mods/kubejs/player";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $KubeEntityEvent } from "@package/dev/latvian/mods/kubejs/entity";
import { $Animal } from "@package/net/minecraft/world/entity/animal";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Method } from "@package/java/lang/reflect";
import { $Logger } from "@package/org/apache/logging/log4j";
import { $Object } from "@package/java/lang";
export * as custom from "@package/pie/ilikepiefoo/events/custom";

declare module "@package/pie/ilikepiefoo/events" {
    export class $EntityTameEventJS implements $KubePlayerEvent {
        static of(arg0: $Animal, arg1: $Player): $EntityTameEventJS;
        getAnimal(): $Entity;
        getPlayer(): $Player;
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        getEntity(): $LivingEntity;
        constructor(arg0: $Animal, arg1: $Player);
        get animal(): $Entity;
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
        get entity(): $LivingEntity;
    }
    export class $PlayerChangeDimensionEventJS implements $KubePlayerEvent {
        static of(arg0: $ServerPlayer, arg1: $ResourceKey_<$Level>, arg2: $ResourceKey_<$Level>): $PlayerChangeDimensionEventJS;
        getNewLevel(): $Level;
        getOldLevel(): $Level;
        getNewWorldKey(): $ResourceKey<$Level>;
        getOldWorldKey(): $ResourceKey<$Level>;
        getPlayer(): $Player;
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        getEntity(): $LivingEntity;
        constructor(arg0: $ServerPlayer, arg1: $ResourceKey_<$Level>, arg2: $ResourceKey_<$Level>);
        get newLevel(): $Level;
        get oldLevel(): $Level;
        get newWorldKey(): $ResourceKey<$Level>;
        get oldWorldKey(): $ResourceKey<$Level>;
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
        get entity(): $LivingEntity;
    }
    export class $PlayerCloneEventJS implements $KubePlayerEvent {
        static of(arg0: $ServerPlayer, arg1: $ServerPlayer, arg2: boolean): $PlayerCloneEventJS;
        getNewPlayer(): $Player;
        getOldPlayer(): $Player;
        causedByPortal(): boolean;
        returningFromEnd(): boolean;
        causedByDeath(): boolean;
        leavingEnd(): boolean;
        getPlayer(): $Player;
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        getEntity(): $LivingEntity;
        constructor(arg0: $ServerPlayer, arg1: $ServerPlayer, arg2: boolean);
        get newPlayer(): $Player;
        get oldPlayer(): $Player;
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
        get entity(): $LivingEntity;
    }
    export class $ProxyEventJS implements $KubeEvent {
        getGenericReturnType(): string;
        getParameters(): $Map<string, $Object>;
        getReturnType(): string;
        getMethodName(): string;
        getResult(): $Object;
        getArgs(): $Object[];
        setResult(arg0: $Object): void;
        hasResult(): boolean;
        isResultRequired(): boolean;
        getResultOptional(): (never) | undefined;
        getArg(arg0: number): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        static LOG: $Logger;
        constructor(arg0: $Method, arg1: $Object[]);
        get genericReturnType(): string;
        get parameters(): $Map<string, $Object>;
        get returnType(): string;
        get methodName(): string;
        get args(): $Object[];
        get resultRequired(): boolean;
        get resultOptional(): (never) | undefined;
    }
    export class $EntityEnterChunkEventJS implements $KubeEntityEvent {
        static of(arg0: $Entity, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): $EntityEnterChunkEventJS;
        getEntity(): $Entity;
        getPrevX(): number;
        getPrevZ(): number;
        getPrevY(): number;
        getChunkY(): number;
        getChunkX(): number;
        getChunkZ(): number;
        getLevel(): $Level;
        getPlayer(): $Player;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(arg0: $Entity, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
        get entity(): $Entity;
        get prevX(): number;
        get prevZ(): number;
        get prevY(): number;
        get chunkY(): number;
        get chunkX(): number;
        get chunkZ(): number;
        get level(): $Level;
        get player(): $Player;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $PlayerRespawnEventJS implements $KubePlayerEvent {
        static of(arg0: $ServerPlayer, arg1: boolean): $PlayerRespawnEventJS;
        causedByPortal(): boolean;
        returningFromEnd(): boolean;
        causedByDeath(): boolean;
        leavingEnd(): boolean;
        getPlayer(): $Player;
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        getEntity(): $LivingEntity;
        constructor(arg0: $ServerPlayer, arg1: boolean);
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
        get entity(): $LivingEntity;
    }
}
