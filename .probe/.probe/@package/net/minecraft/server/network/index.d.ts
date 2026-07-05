import { $NioEventLoopGroup } from "@package/io/netty/channel/nio";
import { $Codec } from "@package/com/mojang/serialization";
import { $ServerInfo, $MinecraftServer } from "@package/net/minecraft/server";
import { $ServerStatusPacketListener, $ServerStatus_, $ServerboundStatusRequestPacket } from "@package/net/minecraft/network/protocol/status";
import { $ServerLoginNetworkAddon } from "@package/net/fabricmc/fabric/impl/networking/server";
import { $ExecutorService, $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $ServerGamePacketListenerImplExt } from "@package/com/moulberry/axiom/hooks";
import { $NetworkHandlerExtensions, $PacketCallbackListener } from "@package/net/fabricmc/fabric/impl/networking";
import { $RelativeMovement_ } from "@package/net/minecraft/world/entity";
import { $ServerCommonNetworkHandlerAccessor, $ServerLoginNetworkHandlerAccessor } from "@package/net/fabricmc/fabric/mixin/networking/accessor";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ConnectionType_, $ConnectionType } from "@package/net/neoforged/neoforge/network/connection";
import { $CustomPacketPayload_, $CustomPacketPayload$Type_, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $Set_, $List, $List_ } from "@package/java/util";
import { $ServerboundCookieResponsePacket_ } from "@package/net/minecraft/network/protocol/cookie";
import { $ServerboundKeepAlivePacket, $ServerboundCustomPayloadPacket_, $ServerboundPongPacket, $ServerboundResourcePackPacket_, $ServerCommonPacketListener } from "@package/net/minecraft/network/protocol/common";
import { $Consumer_, $Function_, $Supplier } from "@package/java/util/function";
import { $ClientInformation, $ServerLevel, $ServerPlayer, $ClientInformation_ } from "@package/net/minecraft/server/level";
import { $CrashReport, $CrashReportCategory } from "@package/net/minecraft";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $EpollEventLoopGroup } from "@package/io/netty/channel/epoll";
import { $InetAddress, $SocketAddress, $URL } from "@package/java/net";
import { $PacketSendListener, $Connection, $DisconnectionDetails_, $TickablePacketListener, $DisconnectionDetails, $ConnectionProtocol } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $PacketFlow, $Packet } from "@package/net/minecraft/network/protocol";
import { $Enum, $RuntimeException, $Exception, $Throwable, $Iterable_, $Record, $AutoCloseable } from "@package/java/lang";
import { $FabricServerConfigurationNetworkHandler } from "@package/net/fabricmc/fabric/api/networking/v1";
import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Logger } from "@package/org/slf4j";
import { $Component_, $ChatType$Bound_, $PlayerChatMessage_, $FilterMask, $Component } from "@package/net/minecraft/network/chat";
import { $ServerboundLoginAcknowledgedPacket, $ServerLoginPacketListener, $ServerboundKeyPacket, $ServerboundHelloPacket_, $ServerboundCustomQueryAnswerPacket_ } from "@package/net/minecraft/network/protocol/login";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $ServerHandshakePacketListener, $ClientIntentionPacket_ } from "@package/net/minecraft/network/protocol/handshake";
import { $ServerboundSetCommandMinecartPacket, $ServerboundJigsawGeneratePacket, $ServerboundDebugSampleSubscriptionPacket_, $ServerboundChangeDifficultyPacket, $ServerboundPlaceRecipePacket, $ServerboundUseItemPacket, $ServerboundBlockEntityTagQueryPacket, $ServerboundPickItemPacket, $ServerboundChatPacket_, $ServerboundPlayerActionPacket, $ServerGamePacketListener, $ServerboundPaddleBoatPacket, $ServerboundMoveVehiclePacket, $ServerboundLockDifficultyPacket, $ServerboundSetBeaconPacket_, $ServerboundSetStructureBlockPacket, $ServerboundPlayerInputPacket, $ServerboundEditBookPacket_, $ServerboundConfigurationAcknowledgedPacket, $ServerboundClientCommandPacket, $ServerboundSelectTradePacket, $ServerboundPlayerCommandPacket, $ServerboundSeenAdvancementsPacket, $ServerboundSwingPacket, $ServerboundMovePlayerPacket, $ServerboundSetJigsawBlockPacket, $ServerboundContainerClickPacket, $ServerboundPlayerAbilitiesPacket, $ServerboundCommandSuggestionPacket, $ServerboundRecipeBookChangeSettingsPacket, $ServerboundEntityTagQueryPacket, $ServerboundInteractPacket, $ServerboundChunkBatchReceivedPacket_, $ServerboundSetCarriedItemPacket, $ServerboundChatSessionUpdatePacket_, $ServerboundSetCommandBlockPacket, $ServerboundSignUpdatePacket, $ServerboundAcceptTeleportationPacket, $ServerboundChatAckPacket_, $ServerboundContainerSlotStateChangedPacket_, $ServerboundUseItemOnPacket, $ServerboundContainerClosePacket, $ServerboundTeleportToEntityPacket, $ServerboundChatCommandSignedPacket_, $ServerboundChatCommandPacket_, $ServerboundRenameItemPacket, $ServerboundContainerButtonClickPacket_, $ServerboundRecipeBookSeenRecipePacket, $ServerboundSetCreativeModeSlotPacket_ } from "@package/net/minecraft/network/protocol/game";
import { $ServerConfigurationPacketListener, $ServerboundFinishConfigurationPacket, $ServerboundSelectKnownPacks_ } from "@package/net/minecraft/network/protocol/configuration";
import { $ServerboundPingRequestPacket } from "@package/net/minecraft/network/protocol/ping";
import { $NeoListenableNetworkHandler } from "@package/org/sinytra/fabric/networking_api";
import { $Channel, $ChannelInboundHandlerAdapter } from "@package/io/netty/channel";
import { $SableUDPServer } from "@package/dev/ryanhcode/sable/network/udp";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $ServerConnectionListenerExtension } from "@package/dev/ryanhcode/sable/mixinterface/udp";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as config from "@package/net/minecraft/server/network/config";

declare module "@package/net/minecraft/server/network" {
    export class $ServerGamePacketListenerImpl extends $ServerCommonPacketListenerImpl implements $ServerGamePacketListener, $ServerPlayerConnection, $TickablePacketListener, $NeoListenableNetworkHandler, $ServerGamePacketListenerImplExt {
        tick(): void;
        getRemoteAddress(): $SocketAddress;
        ackWorldPropertiesUpTo(sequence: number): void;
        ackBlockChangesUpTo(sequence: number): void;
        /**
         * Updates which quickbar slot is selected
         */
        handleSetCarriedItem(packet: $ServerboundSetCarriedItemPacket): void;
        /**
         * Processes the client closing windows (container)
         */
        handleContainerClose(packet: $ServerboundContainerClosePacket): void;
        handleChangeDifficulty(packet: $ServerboundChangeDifficultyPacket): void;
        /**
         * Processes a player starting/stopping flying
         */
        handlePlayerAbilities(packet: $ServerboundPlayerAbilitiesPacket): void;
        handleRenameItem(packet: $ServerboundRenameItemPacket): void;
        filterTextPacket(texts: $List_<string>): $CompletableFuture<$List<$FilteredText>>;
        /**
         * Processes player movement input. Includes walking, strafing, jumping, and sneaking. Excludes riding and toggling flying/sprinting.
         */
        handlePlayerInput(packet: $ServerboundPlayerInputPacket): void;
        /**
         * Called when a client is using an item while not pointing at a block, but simply using an item
         */
        handleUseItem(packet: $ServerboundUseItemPacket): void;
        handleChatCommand(packet: $ServerboundChatCommandPacket_): void;
        /**
         * Processes the player initiating/stopping digging on a particular spot, as well as a player dropping items
         */
        handlePlayerAction(packet: $ServerboundPlayerActionPacket): void;
        /**
         * Processes left and right clicks on entities
         */
        handleInteract(packet: $ServerboundInteractPacket): void;
        handleEditBook(packet: $ServerboundEditBookPacket_): void;
        handleSelectTrade(packet: $ServerboundSelectTradePacket): void;
        handleSignUpdate(packet: $ServerboundSignUpdatePacket): void;
        addPendingMessage(message: $PlayerChatMessage_): void;
        handlePaddleBoat(packet: $ServerboundPaddleBoatPacket): void;
        handleChatAck(packet: $ServerboundChatAckPacket_): void;
        handlePingRequest(packet: $ServerboundPingRequestPacket): void;
        handleUseItemOn(packet: $ServerboundUseItemOnPacket): void;
        switchToConfig(): void;
        handleDisconnect(): void;
        /**
         * Teleports the player position to the (relative) values specified, and syncs to the client
         */
        teleport(x: number, arg1: number, y: number, arg3: number, z: number, arg5: $Set_<$RelativeMovement_>): void;
        teleport(x: number, arg1: number, y: number, arg3: number, z: number): void;
        handleRecipeBookChangeSettingsPacket(packet: $ServerboundRecipeBookChangeSettingsPacket): void;
        handler$bhl000$sable$handleMovePlayer(arg0: $ServerboundMovePlayerPacket, arg1: $CallbackInfo): void;
        handleDebugSampleSubscription(packet: $ServerboundDebugSampleSubscriptionPacket_): void;
        handleTeleportToEntityPacket(packet: $ServerboundTeleportToEntityPacket): void;
        handleContainerSlotStateChanged(packet: $ServerboundContainerSlotStateChangedPacket_): void;
        handleConfigurationAcknowledged(packet: $ServerboundConfigurationAcknowledgedPacket): void;
        handleRecipeBookSeenRecipePacket(packet: $ServerboundRecipeBookSeenRecipePacket): void;
        /**
         * This method is only called for manual tab-completion (the minecraft:ask_server suggestion provider).
         */
        handleCustomCommandSuggestions(packet: $ServerboundCommandSuggestionPacket): void;
        /**
         * Processes clients perspective on player positioning and/or orientation
         */
        handleMovePlayer(packet: $ServerboundMovePlayerPacket): void;
        handleAnimate(packet: $ServerboundSwingPacket): void;
        handleMoveVehicle(packet: $ServerboundMoveVehiclePacket): void;
        handlePlaceRecipe(packet: $ServerboundPlaceRecipePacket): void;
        handler$cok006$axiom$tick(ci: $CallbackInfo): void;
        handleAcceptTeleportPacket(packet: $ServerboundAcceptTeleportationPacket): void;
        handleSeenAdvancements(packet: $ServerboundSeenAdvancementsPacket): void;
        handleSetCommandBlock(packet: $ServerboundSetCommandBlockPacket): void;
        /**
         * Update the server with an ItemStack in a slot.
         */
        handleSetCreativeModeSlot(packet: $ServerboundSetCreativeModeSlotPacket_): void;
        handleSetStructureBlock(packet: $ServerboundSetStructureBlockPacket): void;
        handleSignedChatCommand(packet: $ServerboundChatCommandSignedPacket_): void;
        sendPlayerChatMessage(chatMessage: $PlayerChatMessage_, boundType: $ChatType$Bound_): void;
        /**
         * Processes the client status updates: respawn attempt from player, opening statistics or achievements, or acquiring 'open inventory' achievement
         */
        handleClientCommand(packet: $ServerboundClientCommandPacket): void;
        handleBlockEntityTagQuery(packet: $ServerboundBlockEntityTagQueryPacket): void;
        handleEntityTagQuery(packet: $ServerboundEntityTagQueryPacket): void;
        sendDisguisedChatMessage(message: $Component_, boundType: $ChatType$Bound_): void;
        /**
         * Processes a range of action-types: sneaking, sprinting, waking from sleep, opening the inventory or setting jump height of the horse the player is riding
         */
        handlePlayerCommand(packet: $ServerboundPlayerCommandPacket): void;
        /**
         * Enchants the item identified by the packet given some convoluted conditions (matching window, which should/shouldn't be in use?)
         */
        handleContainerButtonClick(packet: $ServerboundContainerButtonClickPacket_): void;
        handleLockDifficulty(packet: $ServerboundLockDifficultyPacket): void;
        handleChatSessionUpdate(packet: $ServerboundChatSessionUpdatePacket_): void;
        /**
         * Executes a container/inventory slot manipulation as indicated by the packet. Sends the serverside result if they didn't match the indicated result and prevents further manipulation by the player until he confirms that it has the same open container/inventory
         */
        handleContainerClick(packet: $ServerboundContainerClickPacket): void;
        handleSetJigsawBlock(packet: $ServerboundSetJigsawBlockPacket): void;
        handleChunkBatchReceived(packet: $ServerboundChunkBatchReceivedPacket_): void;
        handleSetBeaconPacket(packet: $ServerboundSetBeaconPacket_): void;
        handleJigsawGenerate(packet: $ServerboundJigsawGeneratePacket): void;
        handleSetCommandMinecart(packet: $ServerboundSetCommandMinecartPacket): void;
        /**
         * Process chat messages (broadcast back to clients) and commands (executes)
         */
        handleChat(packet: $ServerboundChatPacket_): void;
        resetPosition(): void;
        getPlayer(): $ServerPlayer;
        wrapOperation$cnp000$axiom$handleMovePlayerIsSingleplayerOwner(instance: $ServerGamePacketListenerImpl, original: $Operation_<any>): boolean;
        handlePickItem(packet: $ServerboundPickItemPacket): void;
        wrapOperation$cnp000$axiom$handleMovePlayer_noPhysics(instance: $ServerPlayer, original: $Operation_<any>): boolean;
        sendBundled(...arg0: $CustomPacketPayload_[]): void;
        /**
         * Sends all given payloads as a bundle to the client.
         */
        sendBundled(payloads: $Iterable_<$CustomPacketPayload>): void;
        static LATENCY_CHECK_INTERVAL: number;
        server: $MinecraftServer;
        aboveGroundTickCount: number;
        static DISCONNECT_UNEXPECTED_QUERY: $Component;
        static LOGGER: $Logger;
        connection: $Connection;
        aboveGroundVehicleTickCount: number;
        chunkSender: $PlayerChunkSender;
        connectionType: $ConnectionType;
        player: $ServerPlayer;
        constructor(server: $MinecraftServer, connection: $Connection, player: $ServerPlayer, cookie: $CommonListenerCookie_);
        get remoteAddress(): $SocketAddress;
    }
    export class $ServerHandshakePacketListenerImpl implements $ServerHandshakePacketListener {
        /**
         * There are two recognized intentions for initiating a handshake: logging in and acquiring server status. The NetworkManager's protocol will be reconfigured according to the specified intention, although a login-intention must pass a versioncheck or receive a disconnect otherwise
         */
        handleIntention(packet: $ClientIntentionPacket_): void;
        isAcceptingMessages(): boolean;
        onDisconnect(details: $DisconnectionDetails_): void;
        protocol(): $ConnectionProtocol;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        flow(): $PacketFlow;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        fillCrashReport(crashReport: $CrashReport): void;
        constructor(server: $MinecraftServer, connection: $Connection);
        get acceptingMessages(): boolean;
    }
    export class $ConfigurationTask {
    }
    export interface $ConfigurationTask {
        type(): $ConfigurationTask$Type;
        start(task: $Consumer_<$Packet<never>>): void;
    }
    export class $TextFilterClient$JoinOrLeaveEncoder {
    }
    export interface $TextFilterClient$JoinOrLeaveEncoder {
    }
    /**
     * Values that may be interpreted as {@link $TextFilterClient$JoinOrLeaveEncoder}.
     */
    export type $TextFilterClient$JoinOrLeaveEncoder_ = (() => void);
    export class $ServerConnectionListener$LatencySimulator$DelayedMessage {
    }
    export class $ServerLoginPacketListenerImpl$State extends $Enum<$ServerLoginPacketListenerImpl$State> {
    }
    /**
     * Values that may be interpreted as {@link $ServerLoginPacketListenerImpl$State}.
     */
    export type $ServerLoginPacketListenerImpl$State_ = "hello" | "key" | "authenticating" | "negotiating" | "verifying" | "waiting_for_dupe_disconnect" | "protocol_switching" | "accepted";
    export class $ServerConnectionListener implements $ServerConnectionListenerExtension {
        /**
         * Shuts down all open endpoints (with immediate effect?)
         */
        stop(): void;
        /**
         * Shuts down all open endpoints (with immediate effect?)
         */
        tick(): void;
        sable$getServer(): $SableUDPServer;
        getConnections(): $List<$Connection>;
        getServer(): $MinecraftServer;
        /**
         * Adds a channel that listens locally
         */
        startMemoryChannel(): $SocketAddress;
        /**
         * Adds a channel that listens on publicly accessible network ports
         */
        startTcpServerListener(address: $InetAddress | null, port: number): void;
        sable$setupUDPServer(arg0: $Channel): void;
        running: boolean;
        server: $MinecraftServer;
        static SERVER_EVENT_GROUP: $Supplier<$NioEventLoopGroup>;
        static SERVER_EPOLL_EVENT_GROUP: $Supplier<$EpollEventLoopGroup>;
        connections: $List<$Connection>;
        constructor(server: $MinecraftServer);
    }
    export class $LegacyQueryHandler extends $ChannelInboundHandlerAdapter {
        constructor(server: $ServerInfo);
    }
    export class $ServerConnectionListener$LatencySimulator extends $ChannelInboundHandlerAdapter {
    }
    export class $ServerConfigurationPacketListenerImpl extends $ServerCommonPacketListenerImpl implements $ServerConfigurationPacketListener, $TickablePacketListener, $NeoListenableNetworkHandler, $FabricServerConfigurationNetworkHandler {
        tick(): void;
        handleDisconnect(): void;
        returnToWorld(): void;
        completeTask(taskType: $ConfigurationTask$Type_): void;
        handleConfigurationFinished(packet: $ServerboundFinishConfigurationPacket): void;
        handleSelectKnownPacks(packet: $ServerboundSelectKnownPacks_): void;
        addTask(arg0: $ConfigurationTask): void;
        finishCurrentTask(taskType: $ConfigurationTask$Type_): void;
        modify$zfn000$fabric_resource_loader_v0$filterKnownPacks(arg0: $List_<any>): $List<any>;
        startConfiguration(): void;
        static LATENCY_CHECK_INTERVAL: number;
        server: $MinecraftServer;
        static DISCONNECT_UNEXPECTED_QUERY: $Component;
        connection: $Connection;
        connectionType: $ConnectionType;
        constructor(server: $MinecraftServer, connection: $Connection, cookie: $CommonListenerCookie_);
    }
    export class $CommonListenerCookie extends $Record {
        transferred(): boolean;
        connectionType(): $ConnectionType;
        latency(): number;
        gameProfile(): $GameProfile;
        clientInformation(): $ClientInformation;
        static createInitial(gameProfile: $GameProfile, transferred: boolean): $CommonListenerCookie;
        /**
         * @deprecated
         */
        constructor(arg0: $GameProfile, arg1: number, arg2: $ClientInformation_, arg3: boolean);
        constructor(gameProfile: $GameProfile, latency: number, clientInformation: $ClientInformation_, transferred: boolean, connectionType: $ConnectionType_);
    }
    /**
     * Values that may be interpreted as {@link $CommonListenerCookie}.
     */
    export type $CommonListenerCookie_ = { transferred?: boolean, latency?: number, clientInformation?: $ClientInformation_, connectionType?: $ConnectionType_, gameProfile?: $GameProfile,  } | [transferred?: boolean, latency?: number, clientInformation?: $ClientInformation_, connectionType?: $ConnectionType_, gameProfile?: $GameProfile, ];
    export class $ServerGamePacketListenerImpl$EntityInteraction {
    }
    export interface $ServerGamePacketListenerImpl$EntityInteraction {
    }
    /**
     * Values that may be interpreted as {@link $ServerGamePacketListenerImpl$EntityInteraction}.
     */
    export type $ServerGamePacketListenerImpl$EntityInteraction_ = (() => void);
    export class $TextFilterClient$IgnoreStrategy {
        static select(threshold: number): $TextFilterClient$IgnoreStrategy;
        static ignoreOverThreshold(threshold: number): $TextFilterClient$IgnoreStrategy;
        static NEVER_IGNORE: $TextFilterClient$IgnoreStrategy;
        static IGNORE_FULLY_FILTERED: $TextFilterClient$IgnoreStrategy;
    }
    export interface $TextFilterClient$IgnoreStrategy {
        shouldIgnore(text: string, threshold: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TextFilterClient$IgnoreStrategy}.
     */
    export type $TextFilterClient$IgnoreStrategy_ = ((arg0: string, arg1: number) => boolean);
    export class $Filterable<T> extends $Record {
        get(filtered: boolean): T;
        map<U>(mappingFunction: $Function_<T, U>): $Filterable<U>;
        static from(filteredText: $FilteredText_): $Filterable<string>;
        resolve<U>(resolver: $Function_<T, (U) | undefined>): ($Filterable<U>) | undefined;
        raw(): T;
        static passThrough<T>(value: T): $Filterable<T>;
        filtered(): (T) | undefined;
        static streamCodec<B extends $ByteBuf, T>(codec: $StreamCodec<B, T>): $StreamCodec<B, $Filterable<T>>;
        static codec<T>(codec: $Codec<T>): $Codec<$Filterable<T>>;
        constructor(arg0: T, arg1: (T) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $Filterable}.
     */
    export type $Filterable_<T> = { raw?: any, filtered?: (T) | undefined,  } | [raw?: any, filtered?: (T) | undefined, ];
    export class $TextFilter {
        static DUMMY: $TextFilter;
    }
    export interface $TextFilter {
        join(): void;
        processStreamMessage(text: string): $CompletableFuture<$FilteredText>;
        leave(): void;
        processMessageBundle(texts: $List_<string>): $CompletableFuture<$List<$FilteredText>>;
    }
    export class $TextFilterClient$RequestFailedException extends $RuntimeException {
        constructor(message: string);
    }
    export class $TextFilterClient$PlayerContext implements $TextFilter {
    }
    export class $LegacyProtocolUtils {
        static readLegacyString(buffer: $ByteBuf): string;
        static writeLegacyString(buffer: $ByteBuf, string: string): void;
        static GET_INFO_PACKET_VERSION_1: number;
        static GET_INFO_PACKET_ID: number;
        static CUSTOM_PAYLOAD_PACKET_ID: number;
        static FAKE_PROTOCOL_VERSION: number;
        static CUSTOM_PAYLOAD_PACKET_PING_CHANNEL: string;
        static DISCONNECT_PACKET_ID: number;
        constructor();
    }
    export class $ServerStatusPacketListenerImpl implements $ServerStatusPacketListener {
        isAcceptingMessages(): boolean;
        handlePingRequest(packet: $ServerboundPingRequestPacket): void;
        onDisconnect(details: $DisconnectionDetails_): void;
        handleStatusRequest(packet: $ServerboundStatusRequestPacket): void;
        protocol(): $ConnectionProtocol;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        flow(): $PacketFlow;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        fillCrashReport(crashReport: $CrashReport): void;
        constructor(status: $ServerStatus_, connection: $Connection);
        constructor(arg0: $ServerStatus_, arg1: $Connection, arg2: string);
        get acceptingMessages(): boolean;
    }
    export class $ConfigurationTask$Type extends $Record {
        id(): string;
        constructor(arg0: $ResourceLocation_);
        constructor(id: string);
    }
    /**
     * Values that may be interpreted as {@link $ConfigurationTask$Type}.
     */
    export type $ConfigurationTask$Type_ = { id?: string,  } | [id?: string, ];
    export class $PlayerChunkSender {
        dropChunk(player: $ServerPlayer, chunkPos: $ChunkPos): void;
        isPending(chunkPos: number): boolean;
        sendNextChunks(player: $ServerPlayer): void;
        markChunkPendingToSend(chunk: $LevelChunk): void;
        onChunkBatchReceivedByClient(desiredBatchSize: number): void;
        static sendChunk(packetListener: $ServerGamePacketListenerImpl, level: $ServerLevel, chunk: $LevelChunk): void;
        static MIN_CHUNKS_PER_TICK: number;
        static MAX_CHUNKS_PER_TICK: number;
        constructor(memoryConnection: boolean);
    }
    export class $ServerCommonPacketListenerImpl implements $ServerCommonPacketListener, $ServerCommonNetworkHandlerAccessor {
        getOwner(): $GameProfile;
        disconnect(disconnectionDetails: $DisconnectionDetails_): void;
        disconnect(reason: $Component_): void;
        /**
         * @deprecated
         */
        createCookie(clientInformation: $ClientInformation_): $CommonListenerCookie;
        createCookie(arg0: $ClientInformation_, arg1: $ConnectionType_): $CommonListenerCookie;
        /**
         * @return the main thread event loop
         */
        getMainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
        handleCustomPayload(packet: $ServerboundCustomPayloadPacket_): void;
        playerProfile(): $GameProfile;
        suspendFlushing(): void;
        /**
         * @return the connection type of this packet listener
         */
        getConnectionType(): $ConnectionType;
        resumeFlushing(): void;
        latency(): number;
        wrapOperation$cli000$fabric_networking_api_v1$onCustomPayloadRegisterPacket(arg0: $Connection, arg1: $Set_<any>, arg2: $Operation_<any>): void;
        send(packet: $Packet<never>, listener: $PacketSendListener | null): void;
        send(packet: $Packet<never>): void;
        handlePong(packet: $ServerboundPongPacket): void;
        handleKeepAlive(packet: $ServerboundKeepAlivePacket): void;
        wrapOperation$cli000$fabric_networking_api_v1$onCustomPayloadUnregisterPacket(arg0: $Connection, arg1: $Set_<any>, arg2: $Operation_<any>): void;
        keepConnectionAlive(): void;
        handleResourcePackResponse(packet: $ServerboundResourcePackPacket_): void;
        handleCookieResponse(packet: $ServerboundCookieResponsePacket_): void;
        isSingleplayerOwner(): boolean;
        onDisconnect(disconnectionDetails: $DisconnectionDetails_): void;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        /**
         * {@inheritDoc}
         */
        send(payload: $CustomPacketPayload_): void;
        /**
         * Sends a payload to the client of this listener.
         */
        send(payload: $CustomPacketPayload_, listener: $PacketSendListener): void;
        flow(): $PacketFlow;
        hasChannel(type: $CustomPacketPayload$Type_<never>): boolean;
        hasChannel(payload: $CustomPacketPayload_): boolean;
        /**
         * Checks if the connection has negotiated and opened a channel for the payload.
         */
        hasChannel(payloadId: $ResourceLocation_): boolean;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        fillCrashReport(crashReport: $CrashReport): void;
        /**
         * @return the connection this listener is attached to
         */
        getConnection(): $Connection;
        getServer(): $MinecraftServer;
        static LATENCY_CHECK_INTERVAL: number;
        server: $MinecraftServer;
        static DISCONNECT_UNEXPECTED_QUERY: $Component;
        connection: $Connection;
        connectionType: $ConnectionType;
        constructor(server: $MinecraftServer, connection: $Connection, cookie: $CommonListenerCookie_);
        get owner(): $GameProfile;
        get mainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
        get singleplayerOwner(): boolean;
    }
    export class $FilteredText extends $Record {
        mask(): $FilterMask;
        raw(): string;
        static passThrough(raw: string): $FilteredText;
        isFiltered(): boolean;
        filtered(): string;
        filteredOrEmpty(): string;
        static fullyFiltered(raw: string): $FilteredText;
        static EMPTY: $FilteredText;
        constructor(arg0: string, arg1: $FilterMask);
    }
    /**
     * Values that may be interpreted as {@link $FilteredText}.
     */
    export type $FilteredText_ = { raw?: string, mask?: $FilterMask,  } | [raw?: string, mask?: $FilterMask, ];
    export class $TextFilterClient implements $AutoCloseable {
        close(): void;
        createContext(profile: $GameProfile): $TextFilter;
        requestMessageProcessing(profile: $GameProfile, text: string, ignoreStrategy: $TextFilterClient$IgnoreStrategy_, executor: $Executor_): $CompletableFuture<$FilteredText>;
        static createFromConfig(config: string): $TextFilterClient;
        processJoinOrLeave(profile: $GameProfile, url: $URL, encoder: $TextFilterClient$JoinOrLeaveEncoder_, executor: $Executor_): void;
        joinEncoder: $TextFilterClient$JoinOrLeaveEncoder;
        leaveEncoder: $TextFilterClient$JoinOrLeaveEncoder;
        leaveEndpoint: $URL;
        workerPool: $ExecutorService;
        chatIgnoreStrategy: $TextFilterClient$IgnoreStrategy;
        joinEndpoint: $URL;
    }
    export class $ServerLoginPacketListenerImpl implements $ServerLoginPacketListener, $TickablePacketListener, $NetworkHandlerExtensions, $PacketCallbackListener, $ServerLoginNetworkHandlerAccessor {
        disconnect(reason: $Component_): void;
        tick(): void;
        isAcceptingMessages(): boolean;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        handleHello(packet: $ServerboundHelloPacket_): void;
        sent(arg0: $Packet<any>): void;
        getUserName(): string;
        getAddon(): $ServerLoginNetworkAddon;
        startClientVerification(profile: $GameProfile): void;
        handleCookieResponse(packet: $ServerboundCookieResponsePacket_): void;
        handleLoginAcknowledgement(packet: $ServerboundLoginAcknowledgedPacket): void;
        handleCustomQueryPacket(packet: $ServerboundCustomQueryAnswerPacket_): void;
        handleKey(packet: $ServerboundKeyPacket): void;
        onDisconnect(details: $DisconnectionDetails_): void;
        protocol(): $ConnectionProtocol;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        fillCrashReport(crashReport: $CrashReport): void;
        getConnection(): $Connection;
        getServer(): $MinecraftServer;
        server: $MinecraftServer;
        requestedUsername: string;
        static LOGGER: $Logger;
        connection: $Connection;
        constructor(server: $MinecraftServer, connection: $Connection, transferred: boolean);
        get acceptingMessages(): boolean;
        get userName(): string;
        get addon(): $ServerLoginNetworkAddon;
    }
    export class $TextFilterClient$MessageEncoder {
    }
    export interface $TextFilterClient$MessageEncoder {
    }
    /**
     * Values that may be interpreted as {@link $TextFilterClient$MessageEncoder}.
     */
    export type $TextFilterClient$MessageEncoder_ = (() => void);
    export class $ServerPlayerConnection {
    }
    export interface $ServerPlayerConnection {
        send(packet: $Packet<never>): void;
        getPlayer(): $ServerPlayer;
        get player(): $ServerPlayer;
    }
    export class $MemoryServerHandshakePacketListenerImpl implements $ServerHandshakePacketListener {
        /**
         * There are two recognized intentions for initiating a handshake: logging in and acquiring server status. The NetworkManager's protocol will be reconfigured according to the specified intention, although a login-intention must pass a versioncheck or receive a disconnect otherwise
         */
        handleIntention(packet: $ClientIntentionPacket_): void;
        isAcceptingMessages(): boolean;
        onDisconnect(details: $DisconnectionDetails_): void;
        protocol(): $ConnectionProtocol;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        flow(): $PacketFlow;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        fillCrashReport(crashReport: $CrashReport): void;
        constructor(server: $MinecraftServer, connection: $Connection);
        get acceptingMessages(): boolean;
    }
}
