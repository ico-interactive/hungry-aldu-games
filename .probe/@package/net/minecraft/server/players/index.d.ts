import { $JsonObject_ } from "@package/com/google/gson";
import { $MinecraftServer, $PlayerAdvancements, $RegistryLayer_, $ServerScoreboard } from "@package/net/minecraft/server";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $Entity$RemovalReason_, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $UUID, $List, $Map_, $UUID_, $Date, $List_, $Collection } from "@package/java/util";
import { $SimpleDateFormat } from "@package/java/text";
import { $Function_ } from "@package/java/util/function";
import { $LayeredRegistryAccess } from "@package/net/minecraft/core";
import { $ServerLevel, $ServerPlayer, $ClientInformation_ } from "@package/net/minecraft/server/level";
import { $Connection } from "@package/net/minecraft/network";
import { $SocketAddress } from "@package/java/net";
import { $GameProfileRepository_, $GameProfile } from "@package/com/mojang/authlib";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $RuntimeException } from "@package/java/lang";
import { $Level } from "@package/net/minecraft/world/level";
import { $File, $File_ } from "@package/java/io";
import { $Logger } from "@package/org/slf4j";
import { $Component_, $ChatType$Bound_, $Component, $PlayerChatMessage_ } from "@package/net/minecraft/network/chat";
import { $ServerGamePacketListenerImpl, $CommonListenerCookie_ } from "@package/net/minecraft/server/network";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $PlayerDataStorage } from "@package/net/minecraft/world/level/storage";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $DedicatedServer } from "@package/net/minecraft/server/dedicated";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $ServerStatsCounter } from "@package/net/minecraft/stats";

declare module "@package/net/minecraft/server/players" {
    export class $ServerOpListEntry extends $StoredUserEntry<$GameProfile> {
        /**
         * Gets the permission level of the user, as defined in the "level" attribute of the ops.json file
         */
        getLevel(): number;
        getBypassesPlayerLimit(): boolean;
        constructor(user: $GameProfile, level: number, bypassesPlayerLimit: boolean);
        constructor(entryData: $JsonObject_);
        get level(): number;
        get bypassesPlayerLimit(): boolean;
    }
    export class $OldUsersConverter {
        static ensureDirectoryExists(dir: $File_): void;
        static convertMobOwnerIfNecessary(server: $MinecraftServer, username: string): $UUID;
        static parseDate(input: string, defaultValue: $Date): $Date;
        static serverReadyAfterUserconversion(server: $MinecraftServer): boolean;
        static convertIpBanlist(server: $MinecraftServer): boolean;
        static readOldListFormat(inFile: $File_, read: $Map_<string, string[]>): $List<string>;
        static convertUserBanlist(server: $MinecraftServer): boolean;
        static convertOpsList(server: $MinecraftServer): boolean;
        static convertWhiteList(server: $MinecraftServer): boolean;
        static convertPlayers(server: $DedicatedServer): boolean;
        static OLD_OPLIST: $File;
        static OLD_USERBANLIST: $File;
        static LOGGER: $Logger;
        static OLD_IPBANLIST: $File;
        static OLD_WHITELIST: $File;
        constructor();
    }
    export class $GameProfileCache {
        get(uuid: $UUID_): ($GameProfile) | undefined;
        get(profileName: string): ($GameProfile) | undefined;
        load(): $List<$GameProfileCache$GameProfileInfo>;
        /**
         * Add an entry to this cache
         */
        add(gameProfile: $GameProfile): void;
        /**
         * Save the cached profiles to disk
         */
        save(): void;
        /**
         * Save the cached profiles to disk
         */
        clearExecutor(): void;
        getAsync(name: string): $CompletableFuture<($GameProfile) | undefined>;
        static setUsesAuthentication(onlineMode: boolean): void;
        setExecutor(exectutor: $Executor_): void;
        constructor(profileRepository: $GameProfileRepository_, file: $File_);
        static set usesAuthentication(value: boolean);
        set executor(value: $Executor_);
    }
    export class $UserBanListEntry extends $BanListEntry<$GameProfile> {
        reason: string;
        expires: $Date;
        static DATE_FORMAT: $SimpleDateFormat;
        static EXPIRES_NEVER: string;
        created: $Date;
        source: string;
        constructor(entryData: $JsonObject_);
        constructor(profile: $GameProfile | null, created: $Date | null, source: string | null, expires: $Date | null, reason: string | null);
        constructor(user: $GameProfile | null);
    }
    export class $BanListEntry<T> extends $StoredUserEntry<T> {
        getDisplayName(): $Component;
        getSource(): string;
        getReason(): string;
        getCreated(): $Date;
        getExpires(): $Date;
        reason: string;
        expires: $Date;
        static DATE_FORMAT: $SimpleDateFormat;
        static EXPIRES_NEVER: string;
        created: $Date;
        source: string;
        constructor(user: T | null, created: $Date | null, source: string | null, expires: $Date | null, reason: string | null);
        constructor(user: T | null, entryData: $JsonObject_);
        get displayName(): $Component;
    }
    export class $IpBanList extends $StoredUserList<string, $IpBanListEntry> {
        get(address: $SocketAddress): $IpBanListEntry;
        isBanned(address: $SocketAddress): boolean;
        isBanned(address: string): boolean;
        constructor(file: $File_);
    }
    export class $UserWhiteListEntry extends $StoredUserEntry<$GameProfile> {
        constructor(user: $GameProfile);
        constructor(entryData: $JsonObject_);
    }
    export class $SleepStatus {
        update(players: $List_<$ServerPlayer>): boolean;
        areEnoughSleeping(requiredSleepPercentage: number): boolean;
        removeAllSleepers(): void;
        amountSleeping(): number;
        sleepersNeeded(requiredSleepPercentage: number): number;
        areEnoughDeepSleeping(requiredSleepPercentage: number, sleepingPlayers: $List_<$ServerPlayer>): boolean;
        constructor();
    }
    export class $ServerOpList extends $StoredUserList<$GameProfile, $ServerOpListEntry> {
        /**
         * Gets the key value for the given object
         */
        getKeyForUser(obj: $GameProfile): string;
        canBypassPlayerLimit(profile: $GameProfile): boolean;
        constructor(file: $File_);
    }
    export class $GameProfileCache$GameProfileInfo {
    }
    export class $UserBanList extends $StoredUserList<$GameProfile, $UserBanListEntry> {
        /**
         * Gets the key value for the given object
         */
        getKeyForUser(obj: $GameProfile): string;
        isBanned(profile: $GameProfile): boolean;
        constructor(file: $File_);
    }
    export class $UserWhiteList extends $StoredUserList<$GameProfile, $UserWhiteListEntry> {
        /**
         * Gets the key value for the given object
         */
        getKeyForUser(obj: $GameProfile): string;
        /**
         * Returns `true` if the profile is in the whitelist.
         */
        isWhiteListed(profile: $GameProfile): boolean;
        constructor(file: $File_);
    }
    export class $PlayerList {
        /**
         * Called when a player disconnects from the game. Writes player data to disk and removes them from the world.
         */
        remove(player: $ServerPlayer): void;
        load(player: $ServerPlayer): ($CompoundTag) | undefined;
        op(profile: $GameProfile): void;
        /**
         * Called when a player disconnects from the game. Writes player data to disk and removes them from the world.
         */
        save(player: $ServerPlayer): void;
        /**
         * Kicks everyone with "Server closed" as reason.
         */
        removeAll(): void;
        /**
         * Kicks everyone with "Server closed" as reason.
         */
        tick(): void;
        broadcast(except: $Player, x: number, arg2: number, y: number, arg4: number, z: $ResourceKey_<any>, arg6: $Packet<any>): void;
        setAllowCommandsForAllPlayers(allowCommandsForAllPlayers: boolean): void;
        /**
         * Kicks everyone with "Server closed" as reason.
         */
        reloadWhiteList(): void;
        /**
         * Returns an array of the usernames of all the connected players.
         */
        getWhiteListNames(): string[];
        getPlayerForLogin(gameProfile: $GameProfile, clientInformation: $ClientInformation_): $ServerPlayer;
        placeNewPlayer(connection: $Connection, player: $ServerPlayer, cookie: $CommonListenerCookie_): void;
        isUsingWhitelist(): boolean;
        canPlayerLogin(socketAddress: $SocketAddress, gameProfile: $GameProfile): $Component;
        setUsingWhiteList(allowCommandsForAllPlayers: boolean): void;
        /**
         * Kicks everyone with "Server closed" as reason.
         */
        reloadResources(): void;
        getWhiteList(): $UserWhiteList;
        isWhiteListed(profile: $GameProfile): boolean;
        /**
         * Returns the maximum number of players allowed on the server.
         */
        getPlayerCount(): number;
        /**
         * Returns the maximum number of players allowed on the server.
         */
        getMaxPlayers(): number;
        /**
         * Returns an array of the usernames of all the connected players.
         */
        getPlayerNamesArray(): string[];
        disconnectAllPlayersWithProfile(profile: $GameProfile): boolean;
        deop(profile: $GameProfile): void;
        getBans(): $UserBanList;
        getPlayerByName(username: string): $ServerPlayer;
        setViewDistance(simulationDistance: number): void;
        /**
         * Returns the maximum number of players allowed on the server.
         */
        getSimulationDistance(): number;
        getOps(): $ServerOpList;
        broadcastChatMessage(message: $PlayerChatMessage_, sender: $ServerPlayer, boundChatType: $ChatType$Bound_): void;
        broadcastChatMessage(message: $PlayerChatMessage_, sender: $CommandSourceStack, boundChatType: $ChatType$Bound_): void;
        /**
         * Returns the maximum number of players allowed on the server.
         */
        getViewDistance(): number;
        getPlayers(): $List<$ServerPlayer>;
        /**
         * Kicks everyone with "Server closed" as reason.
         */
        saveAll(): void;
        respawn(player: $ServerPlayer, keepInventory: boolean, reason: $Entity$RemovalReason_): $ServerPlayer;
        /**
         * Called when a player disconnects from the game. Writes player data to disk and removes them from the world.
         */
        sendPlayerPermissionLevel(player: $ServerPlayer): void;
        broadcastSystemMessage(serverMessage: $Component_, playerMessageFactory: $Function_<$ServerPlayer, $Component>, bypassHiddenChat: boolean): void;
        broadcastSystemMessage(message: $Component_, bypassHiddenChat: boolean): void;
        broadcastSystemToTeam(player: $Player, message: $Component_): void;
        getPlayerAdvancements(player: $ServerPlayer): $PlayerAdvancements;
        /**
         * Called when a player disconnects from the game. Writes player data to disk and removes them from the world.
         */
        sendActivePlayerEffects(player: $ServerPlayer): void;
        getPlayerStats(player: $Player): $ServerStatsCounter;
        /**
         * Called when a player disconnects from the game. Writes player data to disk and removes them from the world.
         */
        sendAllPlayerInfo(player: $ServerPlayer): void;
        /**
         * Updates the time and weather for the given player to those of the given world
         */
        sendLevelInfo(player: $ServerPlayer, level: $ServerLevel): void;
        sendActiveEffects(entity: $LivingEntity, connection: $ServerGamePacketListenerImpl): void;
        broadcastAll(packet: $Packet<never>, dimension: $ResourceKey_<$Level>): void;
        broadcastAll(packet: $Packet<never>): void;
        /**
         * Gets the ServerPlayer object representing the player with the UUID.
         */
        getPlayer(playerUUID: $UUID_): $ServerPlayer;
        getServer(): $MinecraftServer;
        isOp(profile: $GameProfile): boolean;
        isAllowCommandsForAllPlayers(): boolean;
        getIpBans(): $IpBanList;
        /**
         * Returns an array of the usernames of all the connected players.
         */
        getOpNames(): string[];
        broadcastSystemToAllExceptTeam(player: $Player, message: $Component_): void;
        addWorldborderListener(level: $ServerLevel): void;
        /**
         * On integrated servers, returns the host's player data to be written to level.dat.
         */
        getSingleplayerData(): $CompoundTag;
        setSimulationDistance(simulationDistance: number): void;
        getPlayersWithAddress(address: string): $List<$ServerPlayer>;
        updateEntireScoreboard(scoreboard: $ServerScoreboard, player: $ServerPlayer): void;
        canBypassPlayerLimit(profile: $GameProfile): boolean;
        static WHITELIST_FILE: $File;
        maxPlayers: number;
        static USERBANLIST_FILE: $File;
        static IPBANLIST_FILE: $File;
        static OPLIST_FILE: $File;
        static CHAT_FILTERED_FULL: $Component;
        static DUPLICATE_LOGIN_DISCONNECT_MESSAGE: $Component;
        constructor(server: $MinecraftServer, registries: $LayeredRegistryAccess<$RegistryLayer_>, playerIo: $PlayerDataStorage, maxPlayers: number);
        get whiteListNames(): string[];
        get usingWhitelist(): boolean;
        set usingWhiteList(value: boolean);
        get whiteList(): $UserWhiteList;
        get playerCount(): number;
        get playerNamesArray(): string[];
        get bans(): $UserBanList;
        get ops(): $ServerOpList;
        get players(): $List<$ServerPlayer>;
        get server(): $MinecraftServer;
        get ipBans(): $IpBanList;
        get opNames(): string[];
        get singleplayerData(): $CompoundTag;
    }
    export class $StoredUserList<K, V extends $StoredUserEntry<K>> {
        remove(user: K): void;
        /**
         * Adds an entry to the list
         */
        remove(entry: $StoredUserEntry<K>): void;
        get(obj: K): V;
        /**
         * Removes expired bans from the list. See `BanEntry#hasBanExpired`
         */
        load(): void;
        isEmpty(): boolean;
        /**
         * Adds an entry to the list
         */
        add(entry: V): void;
        contains(entry: K): boolean;
        /**
         * Removes expired bans from the list. See `BanEntry#hasBanExpired`
         */
        save(): void;
        getFile(): $File;
        getEntries(): $Collection<V>;
        createEntry(entryData: $JsonObject_): $StoredUserEntry<K>;
        getUserList(): string[];
        /**
         * Gets the key value for the given object
         */
        getKeyForUser(obj: K): string;
        constructor(file: $File_);
        get empty(): boolean;
        get file(): $File;
        get entries(): $Collection<V>;
        get userList(): string[];
    }
    export class $StoredUserEntry<T> {
        serialize(data: $JsonObject_): void;
        getUser(): T;
        hasExpired(): boolean;
        constructor(user: T | null);
        get user(): T;
    }
    export class $OldUsersConverter$ConversionError extends $RuntimeException {
    }
    export class $IpBanListEntry extends $BanListEntry<string> {
        reason: string;
        expires: $Date;
        static DATE_FORMAT: $SimpleDateFormat;
        static EXPIRES_NEVER: string;
        created: $Date;
        source: string;
        constructor(entryData: $JsonObject_);
        constructor(ip: string, created: $Date | null, source: string | null, expires: $Date | null, reason: string | null);
        constructor(ip: string);
    }
}
