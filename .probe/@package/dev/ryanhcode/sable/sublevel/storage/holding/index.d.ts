import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Object2ObjectMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SubLevelStorage } from "@package/dev/ryanhcode/sable/sublevel/storage/serialization";
import { $HoldingSubLevel } from "@package/dev/ryanhcode/sable/sublevel/storage";
import { $ServerSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $Iterable, $AutoCloseable, $Record } from "@package/java/lang";
import { $UUID_, $List } from "@package/java/util";
import { $ServerSubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";

declare module "@package/dev/ryanhcode/sable/sublevel/storage/holding" {
    export class $GlobalSavedSubLevelPointer extends $Record {
        subLevelIndex(): number;
        storageIndex(): number;
        local(): $SavedSubLevelPointer;
        chunkPos(): $ChunkPos;
        static CODEC: $Codec<$GlobalSavedSubLevelPointer>;
        constructor(chunkPos: $ChunkPos, storageIndex: number, subLevelIndex: number);
    }
    /**
     * Values that may be interpreted as {@link $GlobalSavedSubLevelPointer}.
     */
    export type $GlobalSavedSubLevelPointer_ = { chunkPos?: $ChunkPos, subLevelIndex?: number, storageIndex?: number,  } | [chunkPos?: $ChunkPos, subLevelIndex?: number, storageIndex?: number, ];
    export class $SubLevelHoldingChunkMap implements $AutoCloseable {
        getHoldingSubLevel(arg0: $UUID_): $HoldingSubLevel;
        processChanges(): void;
        queueDeletion(arg0: $ServerSubLevel): void;
        snatchAndLoad(arg0: $GlobalSavedSubLevelPointer_, arg1: $UUID_): void;
        close(): void;
        moveToUnloaded(arg0: $ServerSubLevel, arg1: $ChunkPos): void;
        updateChunkStatus(arg0: $ChunkPos, arg1: boolean): void;
        getStorage(): $SubLevelStorage;
        saveAll(): void;
        loadHoldingSubLevel(arg0: $HoldingSubLevel): void;
        constructor(arg0: $ServerLevel, arg1: $ServerSubLevelContainer);
        get storage(): $SubLevelStorage;
    }
    export class $SavedSubLevelPointer extends $Record {
        subLevelIndex(): number;
        storageIndex(): number;
        packed(): number;
        static unpack(arg0: number): $SavedSubLevelPointer;
        constructor(storageIndex: number, subLevelIndex: number);
    }
    /**
     * Values that may be interpreted as {@link $SavedSubLevelPointer}.
     */
    export type $SavedSubLevelPointer_ = { subLevelIndex?: number, storageIndex?: number,  } | [subLevelIndex?: number, storageIndex?: number, ];
    export class $SubLevelHoldingChunk {
        shouldKeepLoaded(): boolean;
        markKeepLoaded(): void;
        static from(arg0: $ChunkPos, arg1: $CompoundTag_): $SubLevelHoldingChunk;
        writeTo(arg0: $CompoundTag_): void;
        getSubLevelPointers(): $List<$SavedSubLevelPointer>;
        getChunkPos(): $ChunkPos;
        acceptHoldingSubLevel(arg0: $HoldingSubLevel): void;
        getLoadedHoldingSubLevels(): $Iterable<$HoldingSubLevel>;
        collectReadySubLevels(arg0: $ServerLevel, arg1: $Object2ObjectMap<$UUID_, $HoldingSubLevel>): void;
        constructor(arg0: $ChunkPos);
        get subLevelPointers(): $List<$SavedSubLevelPointer>;
        get chunkPos(): $ChunkPos;
        get loadedHoldingSubLevels(): $Iterable<$HoldingSubLevel>;
    }
}
