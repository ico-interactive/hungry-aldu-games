import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Executor_ } from "@package/java/util/concurrent";
import { $ChunkStatus_, $ChunkStatus } from "@package/net/minecraft/world/level/chunk/status";

declare module "@package/net/minecraft/server/level/progress" {
    export class $ChunkProgressListener {
        static calculateDiameter(radius: number): number;
    }
    export interface $ChunkProgressListener {
        start(): void;
        stop(): void;
        onStatusChange(chunkPos: $ChunkPos, chunkStatus: $ChunkStatus_ | null): void;
        updateSpawnPos(center: $ChunkPos): void;
    }
    export class $ChunkProgressListenerFactory {
    }
    export interface $ChunkProgressListenerFactory {
        create(radius: number): $ChunkProgressListener;
    }
    /**
     * Values that may be interpreted as {@link $ChunkProgressListenerFactory}.
     */
    export type $ChunkProgressListenerFactory_ = ((arg0: number) => $ChunkProgressListener);
    export class $ProcessorChunkProgressListener implements $ChunkProgressListener {
        start(): void;
        stop(): void;
        onStatusChange(chunkPos: $ChunkPos, chunkStatus: $ChunkStatus_ | null): void;
        updateSpawnPos(center: $ChunkPos): void;
        static createStarted(delegate: $ChunkProgressListener, dispatcher: $Executor_): $ProcessorChunkProgressListener;
    }
    export class $StoringChunkProgressListener implements $ChunkProgressListener {
        start(): void;
        stop(): void;
        static create(radius: number): $StoringChunkProgressListener;
        getDiameter(): number;
        onStatusChange(chunkPos: $ChunkPos, chunkStatus: $ChunkStatus_ | null): void;
        updateSpawnPos(center: $ChunkPos): void;
        getFullDiameter(): number;
        getStatus(x: number, z: number): $ChunkStatus;
        static createCompleted(): $StoringChunkProgressListener;
        getProgress(): number;
        static createFromGameruleRadius(radius: number): $StoringChunkProgressListener;
        get diameter(): number;
        get fullDiameter(): number;
        get progress(): number;
    }
    export class $LoggerChunkProgressListener implements $ChunkProgressListener {
        start(): void;
        stop(): void;
        static create(radius: number): $LoggerChunkProgressListener;
        onStatusChange(chunkPos: $ChunkPos, chunkStatus: $ChunkStatus_ | null): void;
        updateSpawnPos(center: $ChunkPos): void;
        static createCompleted(): $LoggerChunkProgressListener;
        getProgress(): number;
        static createFromGameruleRadius(radius: number): $LoggerChunkProgressListener;
        get progress(): number;
    }
}
