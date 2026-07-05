import { $File } from "@package/java/io";
import { $LevelSettings } from "@package/net/minecraft/world/level";
import { $Logger } from "@package/org/slf4j";
import { $Services, $WorldStem_, $RegistryLayer_, $MinecraftServer, $Services_ } from "@package/net/minecraft/server";
import { $GlobalSavedSubLevelPointer_ } from "@package/dev/ryanhcode/sable/sublevel/storage/holding";
import { $SubLevelData } from "@package/dev/ryanhcode/sable/sublevel/storage/serialization";
import { $Component } from "@package/net/minecraft/network/chat";
import { $PlayerList } from "@package/net/minecraft/server/players";
import { $Minecraft } from "@package/net/minecraft/client";
import { $PlayerDataStorage, $WorldData, $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $ServerSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $List, $UUID_ } from "@package/java/util";
import { $LocalSampleLogger } from "@package/net/minecraft/util/debugchart";
import { $ChunkProgressListenerFactory_ } from "@package/net/minecraft/server/level/progress";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $LayeredRegistryAccess } from "@package/net/minecraft/core";
import { $InetAddress, $Proxy } from "@package/java/net";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $Thread } from "@package/java/lang";
import { $SableToastableServer } from "@package/dev/ryanhcode/sable/mixinterface/toast";

declare module "@package/net/minecraft/client/server" {
    export class $LanServerDetection$LanServerList {
        addServer(pingResponse: string, ipAddress: $InetAddress): void;
        takeDirtyServers(): $List<$LanServer>;
        constructor();
    }
    export class $IntegratedPlayerList extends $PlayerList {
        static WHITELIST_FILE: $File;
        maxPlayers: number;
        static USERBANLIST_FILE: $File;
        static IPBANLIST_FILE: $File;
        static OPLIST_FILE: $File;
        static CHAT_FILTERED_FULL: $Component;
        static DUPLICATE_LOGIN_DISCONNECT_MESSAGE: $Component;
        constructor(server: $IntegratedServer, registries: $LayeredRegistryAccess<$RegistryLayer_>, playerIo: $PlayerDataStorage);
    }
    export class $LanServerDetection {
        static UNIQUE_THREAD_ID: $AtomicInteger;
        static LOGGER: $Logger;
        constructor();
    }
    export class $IntegratedServer extends $MinecraftServer implements $SableToastableServer {
        getTickTimeLogger(): $LocalSampleLogger;
        sable$reportSubLevelPhysicsFailure(arg0: $ServerSubLevel): void;
        sable$reportSubLevelLoadFailure(arg0: $GlobalSavedSubLevelPointer_): void;
        setUUID(uuid: $UUID_): void;
        sable$reportSubLevelSaveFailure(arg0: $SubLevelData): void;
        static VANILLA_BRAND: string;
        proxy: $Proxy;
        static ANONYMOUS_PLAYER_PROFILE: $GameProfile;
        nextTickTimeNanos: number;
        worldData: $WorldData;
        services: $Services;
        storageSource: $LevelStorageSource$LevelStorageAccess;
        static ABSOLUTE_MAX_WORLD_SIZE: number;
        static DEMO_SETTINGS: $LevelSettings;
        playerDataStorage: $PlayerDataStorage;
        constructor(serverThread: $Thread, minecraft: $Minecraft, storageSource: $LevelStorageSource$LevelStorageAccess, packRepository: $PackRepository, worldStem: $WorldStem_, services: $Services_, progressListenerFactory: $ChunkProgressListenerFactory_);
        get tickTimeLogger(): $LocalSampleLogger;
        set UUID(value: $UUID_);
    }
    export class $LanServer {
        /**
         * Updates the time this LanServer was last seen.
         */
        updatePingTime(): void;
        getAddress(): string;
        getMotd(): string;
        constructor(motd: string, address: string);
        get address(): string;
        get motd(): string;
    }
    export class $LanServerPinger extends $Thread {
        static parseMotd(pingResponse: string): string;
        static parseAddress(pingResponse: string): string;
        static createPingString(motdMessage: string, adMessage: string): string;
        static MULTICAST_GROUP: string;
        static PING_PORT: number;
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(motd: string, serverAddress: string);
    }
    export class $LanServerDetection$LanServerDetector extends $Thread {
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(serverList: $LanServerDetection$LanServerList);
    }
}
