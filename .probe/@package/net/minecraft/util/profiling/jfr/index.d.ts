import { $RegionFileVersion, $RegionStorageInfo_ } from "@package/net/minecraft/world/level/chunk/storage";
import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $Recording } from "@package/jdk/jfr";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Path_, $Path } from "@package/java/nio/file";
import { $SocketAddress } from "@package/java/net";
import { $ConnectionProtocol_ } from "@package/net/minecraft/network";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Quantiles$ScaleAndIndexes } from "@package/com/google/common/math";
import { $ProfiledDuration } from "@package/net/minecraft/util/profiling/jfr/callback";
import { $PacketType_ } from "@package/net/minecraft/network/protocol";
import { $Map } from "@package/java/util";
import { $Runnable_, $Enum } from "@package/java/lang";
export * as event from "@package/net/minecraft/util/profiling/jfr/event";
export * as stats from "@package/net/minecraft/util/profiling/jfr/stats";
export * as serialize from "@package/net/minecraft/util/profiling/jfr/serialize";
export * as parse from "@package/net/minecraft/util/profiling/jfr/parse";
export * as callback from "@package/net/minecraft/util/profiling/jfr/callback";

declare module "@package/net/minecraft/util/profiling/jfr" {
    export class $Environment extends $Enum<$Environment> {
        static values(): $Environment[];
        static valueOf(arg0: string): $Environment;
        static from(server: $MinecraftServer): $Environment;
        getDescription(): string;
        static SERVER: $Environment;
        static CLIENT: $Environment;
        get description(): string;
    }
    /**
     * Values that may be interpreted as {@link $Environment}.
     */
    export type $Environment_ = "client" | "server";
    export class $SummaryReporter {
        recordingStopped(outputPath: $Path_ | null): void;
        constructor(onDeregistration: $Runnable_);
    }
    export class $JfrProfiler implements $JvmProfiler {
        onPacketSent(protocol: $ConnectionProtocol_, packetType: $PacketType_<never>, address: $SocketAddress, size: number): void;
        onRegionFileWrite(regionStorageInfo: $RegionStorageInfo_, chunkPos: $ChunkPos, version: $RegionFileVersion, bytes: number): void;
        onRegionFileRead(regionStorageInfo: $RegionStorageInfo_, chunkPos: $ChunkPos, version: $RegionFileVersion, bytes: number): void;
        onPacketReceived(protocol: $ConnectionProtocol_, packetType: $PacketType_<never>, address: $SocketAddress, size: number): void;
        static getInstance(): $JfrProfiler;
        start(environment: $Environment_): boolean;
        stop(): $Path;
        isAvailable(): boolean;
        onServerTick(currentAverageTickTime: number): void;
        onChunkGenerate(chunkPos: $ChunkPos, level: $ResourceKey_<$Level>, name: string): $ProfiledDuration;
        isRunning(): boolean;
        onWorldLoadedStarted(): $ProfiledDuration;
        static TICK_CATEGORY: string;
        static WORLD_GEN_CATEGORY: string;
        static STORAGE_CATEGORY: string;
        static NETWORK_CATEGORY: string;
        recording: $Recording;
        static ROOT_CATEGORY: string;
        static get instance(): $JfrProfiler;
        get available(): boolean;
        get running(): boolean;
    }
    export class $JvmProfiler {
        static INSTANCE: $JvmProfiler;
    }
    export interface $JvmProfiler {
        onPacketSent(protocol: $ConnectionProtocol_, packetType: $PacketType_<never>, address: $SocketAddress, size: number): void;
        onRegionFileWrite(regionStorageInfo: $RegionStorageInfo_, chunkPos: $ChunkPos, version: $RegionFileVersion, bytes: number): void;
        onRegionFileRead(regionStorageInfo: $RegionStorageInfo_, chunkPos: $ChunkPos, version: $RegionFileVersion, bytes: number): void;
        onPacketReceived(protocol: $ConnectionProtocol_, packetType: $PacketType_<never>, address: $SocketAddress, size: number): void;
        start(environment: $Environment_): boolean;
        stop(): $Path;
        isAvailable(): boolean;
        onServerTick(currentAverageTickTime: number): void;
        onChunkGenerate(chunkPos: $ChunkPos, level: $ResourceKey_<$Level>, name: string): $ProfiledDuration;
        isRunning(): boolean;
        onWorldLoadedStarted(): $ProfiledDuration;
        get available(): boolean;
        get running(): boolean;
    }
    export class $Percentiles {
        static evaluate(input: number[]): $Map<number, number>;
        static evaluate(input: number[]): $Map<number, number>;
        static DEFAULT_INDEXES: $Quantiles$ScaleAndIndexes;
    }
    export class $JvmProfiler$NoOpProfiler implements $JvmProfiler {
        onPacketSent(arg0: $ConnectionProtocol_, arg1: $PacketType_<never>, arg2: $SocketAddress, arg3: number): void;
        onRegionFileWrite(arg0: $RegionStorageInfo_, arg1: $ChunkPos, arg2: $RegionFileVersion, arg3: number): void;
        onRegionFileRead(arg0: $RegionStorageInfo_, arg1: $ChunkPos, arg2: $RegionFileVersion, arg3: number): void;
        onPacketReceived(arg0: $ConnectionProtocol_, arg1: $PacketType_<never>, arg2: $SocketAddress, arg3: number): void;
        start(arg0: $Environment_): boolean;
        stop(): $Path;
        isAvailable(): boolean;
        onServerTick(arg0: number): void;
        onChunkGenerate(arg0: $ChunkPos, arg1: $ResourceKey_<$Level>, arg2: string): $ProfiledDuration;
        isRunning(): boolean;
        onWorldLoadedStarted(): $ProfiledDuration;
        static noOpCommit: $ProfiledDuration;
        constructor();
        get available(): boolean;
        get running(): boolean;
    }
}
