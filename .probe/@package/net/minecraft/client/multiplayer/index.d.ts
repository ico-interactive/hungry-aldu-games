import { $ServerLinks_, $ServerLinks } from "@package/net/minecraft/server";
import { $LevelRenderer, $CubeMap, $DimensionSpecialEffects, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ClientLevelExt } from "@package/com/moulberry/axiom/hooks";
import { $Entity, $Entity$RemovalReason_ } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $CustomPacketPayload_, $CustomPacketPayload$Type_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $CloseableResourceManager, $ResourceProvider_ } from "@package/net/minecraft/server/packs/resources";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $DisconnectionDetails_, $ServerboundPacketListener, $TickablePacketListener, $FriendlyByteBuf, $Connection, $DisconnectionDetails, $ConnectionProtocol } from "@package/net/minecraft/network";
import { $InetSocketAddress, $URL } from "@package/java/net";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $KubeAnimatedParticle, $KubeSessionData } from "@package/dev/latvian/mods/kubejs/client";
import { $PlayerChatMessage_, $RemoteChatSession, $RemoteChatSession_, $SignedMessageValidator, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $LevelChunk, $ChunkSource } from "@package/net/minecraft/world/level/chunk";
import { $VeilClientSuggestionProvider } from "@package/foundry/veil/ext";
import { $WritableLevelData } from "@package/net/minecraft/world/level/storage";
import { $Duration_ } from "@package/java/time";
import { $SharedSuggestionProvider$ElementSuggestionType_, $SharedSuggestionProvider, $SharedSuggestionProvider$TextCoordinates } from "@package/net/minecraft/commands";
import { $LocalSampleLogger } from "@package/net/minecraft/util/debugchart";
import { $NeoListenableNetworkHandler } from "@package/org/sinytra/fabric/networking_api";
import { $PlayerSkin } from "@package/net/minecraft/client/resources";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $StatsCounter } from "@package/net/minecraft/stats";
import { $AccessorMultiPlayerGameMode } from "@package/xfacthd/framedblocks/mixin/client";
import { $ServerStatus$Players } from "@package/net/minecraft/network/protocol/status";
import { $ConnectionType_, $ConnectionType } from "@package/net/neoforged/neoforge/network/connection";
import { $BlockStatePredictionHandler } from "@package/net/minecraft/client/multiplayer/prediction";
import { $UUID_, $Set_, $ArrayList, $Map, $List, $Map_, $Collection_, $List_, $Collection, $Set, $UUID } from "@package/java/util";
import { $ClientboundCookieRequestPacket_ } from "@package/net/minecraft/network/protocol/cookie";
import { $BlockPos, $BlockPos_, $HolderLookup$Provider, $RegistryAccess$Frozen, $RegistrySynchronization$PackedRegistryEntry_, $Direction_, $LayeredRegistryAccess, $BlockPos$MutableBlockPos, $RegistryAccess, $Registry, $Holder_ } from "@package/net/minecraft/core";
import { $FabricClientCommandSource } from "@package/net/fabricmc/fabric/api/client/command/v2";
import { $PacketFlow, $Packet } from "@package/net/minecraft/network/protocol";
import { $Exception, $Throwable, $Enum, $Iterable, $Record, $Runnable_, $Object } from "@package/java/lang";
import { $ClientLoginNetworkAddon } from "@package/net/fabricmc/fabric/impl/networking/client";
import { $GameRules, $ChunkPos, $ColorResolver_, $GameType, $GameType_, $EntityGetter, $LevelHeightAccessor, $Level } from "@package/net/minecraft/world/level";
import { $Renderable, $CycleButton, $DebugScreenOverlay, $ChatComponent$State } from "@package/net/minecraft/client/gui/components";
import { $ClientboundGameProfilePacket_, $ClientboundHelloPacket, $ClientboundLoginCompressionPacket, $ClientboundLoginDisconnectPacket, $ClientboundCustomQueryPacket_, $ClientLoginPacketListener } from "@package/net/minecraft/network/protocol/login";
import { $ClientChunkCacheStorageAccessor } from "@package/dev/ryanhcode/sable/mixin/loaded_chunk_debug";
import { $ClientboundPongResponsePacket_ } from "@package/net/minecraft/network/protocol/ping";
import { $ServerAddress } from "@package/net/minecraft/client/multiplayer/resolver";
import { $WaterOcclusionContainerHolder } from "@package/dev/ryanhcode/sable/mixinterface/water_occlusion";
import { $ClientPacketListenerAccessor } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $Screen, $ConfirmScreen } from "@package/net/minecraft/client/gui/screens";
import { $ChannelHandlerContext, $SimpleChannelInboundHandler } from "@package/io/netty/channel";
import { $ClientLoginNetworkHandlerAccessor } from "@package/net/fabricmc/fabric/mixin/networking/client/accessor";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $WaterOcclusionContainer } from "@package/dev/ryanhcode/sable/sublevel/water_occlusion";
import { $RecipeManager, $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeCollection } from "@package/net/minecraft/client/gui/screens/recipebook";
import { $CompletableFuture, $Executor } from "@package/java/util/concurrent";
import { $CommandDispatcher } from "@package/com/mojang/brigadier";
import { $DebugQueryHandler, $Minecraft, $ClientRecipeBook, $NarratorStatus, $User } from "@package/net/minecraft/client";
import { $MultiPlayerGameModeAccessor } from "@package/com/moulberry/axiom/mixin";
import { $RandomSource } from "@package/net/minecraft/util";
import { $AdvancementHolder, $AdvancementProgress, $AdvancementTree$Listener, $AdvancementNode, $AdvancementHolder_, $AdvancementTree } from "@package/net/minecraft/advancements";
import { $InteractionResult, $InteractionHand_, $Difficulty_, $Difficulty } from "@package/net/minecraft/world";
import { $CrashReport, $CrashReportCategory } from "@package/net/minecraft";
import { $ExtendedServerListData } from "@package/net/neoforged/neoforge/client";
import { $BooleanConsumer } from "@package/it/unimi/dsi/fastutil/booleans";
import { $ClickType_ } from "@package/net/minecraft/world/inventory";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $LevelCallback, $EntityTickList } from "@package/net/minecraft/world/level/entity";
import { $NeighborUpdater } from "@package/net/minecraft/world/level/redstone";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $DebugChunkProviderAttachments } from "@package/dev/ryanhcode/sable/mixinterface/loaded_chunk_debug";
import { $SpriteSet } from "@package/net/minecraft/client/particle";
import { $ProfileKeyPair, $Player, $ProfileKeyPair_ } from "@package/net/minecraft/world/entity/player";
import { $SubLevelContainerHolder } from "@package/dev/ryanhcode/sable/mixinterface/plot";
import { $Function_ } from "@package/it/unimi/dsi/fastutil";
import { $ClientLevelAccessor } from "@package/dev/ryanhcode/offroad/mixin/client/multimining_destruction_progress";
import { $KnownPack_, $KnownPack, $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $AtomicReferenceArray } from "@package/java/util/concurrent/atomic";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $ClientPacketListenerKJS, $ClientLevelKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $SearchTree } from "@package/net/minecraft/client/searchtree";
import { $UserApiService } from "@package/com/mojang/authlib/minecraft";
import { $EntityHitResult, $Vec3, $Vec2, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $SubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";
import { $NetworkHandlerExtensions } from "@package/net/fabricmc/fabric/impl/networking";
import { $LevelPoseProviderExtension } from "@package/dev/ryanhcode/sable/mixinterface/clip_overwrite";
import { $ClientboundResourcePackPopPacket_, $ClientboundCustomPayloadPacket_, $ClientboundPingPacket, $ClientboundTransferPacket_, $ClientboundDisconnectPacket_, $ClientboundKeepAlivePacket, $ClientCommonPacketListener, $ClientboundCustomReportDetailsPacket_, $ClientboundServerLinksPacket_, $ClientboundStoreCookiePacket_, $ClientboundResourcePackPushPacket_ } from "@package/net/minecraft/network/protocol/common";
import { $Supplier_, $BooleanSupplier_, $Consumer_ } from "@package/java/util/function";
import { $Path_ } from "@package/java/nio/file";
import { $Suggestions, $SuggestionsBuilder } from "@package/com/mojang/brigadier/suggestion";
import { $ChunkStatus_ } from "@package/net/minecraft/world/level/chunk/status";
import { $MapId_, $MapId, $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $TagNetworkSerialization$NetworkPayload } from "@package/net/minecraft/tags";
import { $Pose3dc } from "@package/dev/ryanhcode/sable/companion/math";
import { $Logger } from "@package/org/slf4j";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $ClientboundSetBorderSizePacket, $ClientboundDamageEventPacket_, $ClientboundUpdateAttributesPacket, $ClientboundHurtAnimationPacket_, $ClientboundPlayerInfoRemovePacket_, $ClientboundSetSimulationDistancePacket_, $ClientboundSetTitleTextPacket_, $ClientboundSetActionBarTextPacket_, $ClientboundTickingStatePacket_, $ClientboundSetCarriedItemPacket, $ClientboundLevelChunkWithLightPacket, $ClientboundDisguisedChatPacket_, $ClientboundPlayerCombatEnterPacket, $ClientboundPlayerLookAtPacket, $ClientboundSetBorderCenterPacket, $ClientboundTickingStepPacket_, $ClientboundSetDisplayObjectivePacket, $ClientboundSectionBlocksUpdatePacket, $ClientboundSetPassengersPacket, $ClientboundUpdateMobEffectPacket, $ClientboundSetExperiencePacket, $ClientboundTakeItemEntityPacket, $ClientboundStartConfigurationPacket, $ClientboundLightUpdatePacket, $ClientboundUpdateRecipesPacket, $ClientboundPlayerInfoUpdatePacket, $ClientboundPlayerCombatEndPacket, $ClientboundBlockDestructionPacket, $ClientboundOpenBookPacket, $ClientboundBlockChangedAckPacket_, $ClientboundBlockUpdatePacket, $ClientboundStopSoundPacket, $ClientboundRemoveEntitiesPacket, $ClientboundLevelChunkPacketData$BlockEntityTagOutput, $ClientboundSetCameraPacket, $ClientboundLoginPacket_, $ClientboundSetEquipmentPacket, $ClientboundSetEntityLinkPacket, $ClientboundPlayerPositionPacket, $ClientboundRespawnPacket_, $ClientboundCustomChatCompletionsPacket$Action_, $ClientboundRecipePacket, $ClientboundAwardStatsPacket_, $ClientboundPlayerCombatKillPacket_, $ClientboundChunksBiomesPacket_, $ClientboundForgetLevelChunkPacket_, $ClientboundContainerClosePacket, $ClientboundAddEntityPacket, $ClientboundSetDefaultSpawnPositionPacket, $ClientboundSetObjectivePacket, $ClientboundSetEntityDataPacket_, $ClientboundPlaceGhostRecipePacket, $ClientboundSetTitlesAnimationPacket, $ClientboundHorseScreenOpenPacket, $ClientboundSetChunkCacheCenterPacket, $ClientboundCommandsPacket, $ClientboundLevelParticlesPacket, $ClientboundLevelEventPacket, $ClientboundSystemChatPacket_, $ClientboundPlayerChatPacket_, $ClientboundContainerSetSlotPacket, $ClientboundClearTitlesPacket, $ClientboundTabListPacket_, $ClientboundProjectilePowerPacket, $ClientboundSetScorePacket_, $ClientboundMerchantOffersPacket, $ClientboundTeleportEntityPacket, $ClientboundBossEventPacket, $ClientboundAddExperienceOrbPacket, $ClientboundGameEventPacket, $ClientboundSetSubtitleTextPacket_, $ClientboundRotateHeadPacket, $ClientboundUpdateAdvancementsPacket, $ClientboundChunkBatchStartPacket, $ClientboundMoveEntityPacket, $ClientboundChangeDifficultyPacket, $ClientboundSetHealthPacket, $ClientboundSetEntityMotionPacket, $ClientboundChunkBatchFinishedPacket_, $ClientboundSetPlayerTeamPacket, $ClientboundContainerSetDataPacket, $ClientboundSetBorderWarningDelayPacket, $ClientboundExplodePacket, $ClientboundRemoveMobEffectPacket_, $ClientboundSelectAdvancementsTabPacket, $ClientboundDebugSamplePacket_, $ClientboundSetTimePacket, $ClientboundResetScorePacket_, $ClientboundSetChunkCacheRadiusPacket, $ClientboundCooldownPacket_, $ClientboundSetBorderWarningDistancePacket, $ClientboundSetBorderLerpSizePacket, $ClientboundSoundEntityPacket, $ClientboundTagQueryPacket, $ClientboundMapItemDataPacket_, $ClientboundBlockEntityDataPacket, $ClientboundAnimatePacket, $ClientboundInitializeBorderPacket, $ClientboundEntityEventPacket, $ClientGamePacketListener, $ClientboundDeleteChatPacket_, $ClientboundServerDataPacket_, $ClientboundContainerSetContentPacket, $ClientboundSoundPacket, $ClientboundOpenScreenPacket, $ClientboundCustomChatCompletionsPacket_, $ClientboundBundlePacket, $ClientboundCommandSuggestionsPacket_, $ClientboundOpenSignEditorPacket, $ClientboundMoveVehiclePacket, $ClientboundBlockEventPacket, $ClientboundPlayerAbilitiesPacket } from "@package/net/minecraft/network/protocol/game";
import { $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $ClientboundResetChatPacket, $ClientboundUpdateEnabledFeaturesPacket_, $ClientConfigurationPacketListener, $ClientboundFinishConfigurationPacket, $ClientboundRegistryDataPacket_, $ClientboundSelectKnownPacks_ } from "@package/net/minecraft/network/protocol/configuration";
import { $Stream } from "@package/java/util/stream";
import { $WorldSessionTelemetryManager } from "@package/net/minecraft/client/telemetry";
import { $PotionBrewing } from "@package/net/minecraft/world/item/alchemy";
import { $Scoreboard, $PlayerTeam } from "@package/net/minecraft/world/scores";
import { $Font } from "@package/net/minecraft/client/gui";
import { $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $ClientLevelAccessor as $ClientLevelAccessor$1 } from "@package/rbasamoyai/createbigcannons/mixin/client";
export * as chat from "@package/net/minecraft/client/multiplayer/chat";
export * as resolver from "@package/net/minecraft/client/multiplayer/resolver";
export * as prediction from "@package/net/minecraft/client/multiplayer/prediction";

declare module "@package/net/minecraft/client/multiplayer" {
    export class $SessionSearchTrees$Key {
        constructor();
    }
    export class $TagCollector {
        append(registryKey: $ResourceKey_<$Registry<never>>, networkPayload: $TagNetworkSerialization$NetworkPayload): void;
        updateTags(registryAccess: $RegistryAccess, isMemoryConnection: boolean): void;
        constructor();
    }
    export class $ServerData$State extends $Enum<$ServerData$State> {
        static values(): $ServerData$State[];
        static valueOf(arg0: string): $ServerData$State;
        static PINGING: $ServerData$State;
        static SUCCESSFUL: $ServerData$State;
        static INITIAL: $ServerData$State;
        static INCOMPATIBLE: $ServerData$State;
        static UNREACHABLE: $ServerData$State;
    }
    /**
     * Values that may be interpreted as {@link $ServerData$State}.
     */
    export type $ServerData$State_ = "initial" | "pinging" | "unreachable" | "incompatible" | "successful";
    export class $AccountProfileKeyPairManager implements $ProfileKeyPairManager {
        shouldRefreshKeyPair(): boolean;
        prepareKeyPair(): $CompletableFuture<($ProfileKeyPair) | undefined>;
        constructor(userApiService: $UserApiService, uuid: $UUID_, gameDirectory: $Path_);
    }
    export class $ClientConfigurationPacketListenerImpl extends $ClientCommonPacketListenerImpl implements $ClientConfigurationPacketListener, $TickablePacketListener, $NeoListenableNetworkHandler {
        handleRegistryData(packet: $ClientboundRegistryDataPacket_): void;
        handleResetChat(packet: $ClientboundResetChatPacket): void;
        tick(): void;
        handleDisconnect(): void;
        handler$cln000$fabric_networking_api_v1$handleComplete(arg0: $ClientboundFinishConfigurationPacket, arg1: $CallbackInfo): void;
        handleConfigurationFinished(packet: $ClientboundFinishConfigurationPacket): void;
        handleSelectKnownPacks(packet: $ClientboundSelectKnownPacks_): void;
        handleEnabledFeatures(packet: $ClientboundUpdateEnabledFeaturesPacket_): void;
        minecraft: $Minecraft;
        /**
         * @deprecated
         */
        strictErrorHandling: boolean;
        isTransferring: boolean;
        customReportDetails: $Map<string, string>;
        postDisconnectScreen: $Screen;
        connectionType: $ConnectionType;
        serverData: $ServerData;
        telemetryManager: $WorldSessionTelemetryManager;
        serverLinks: $ServerLinks;
        serverCookies: $Map<$ResourceLocation, number[]>;
        connection: $Connection;
        chatState: $ChatComponent$State;
        constructor(minecraft: $Minecraft, connection: $Connection, commonListenerCookie: $CommonListenerCookie_);
    }
    export class $ClientHandshakePacketListenerImpl$State extends $Enum<$ClientHandshakePacketListenerImpl$State> {
    }
    /**
     * Values that may be interpreted as {@link $ClientHandshakePacketListenerImpl$State}.
     */
    export type $ClientHandshakePacketListenerImpl$State_ = "connecting" | "authorizing" | "encrypting" | "joining";
    export class $LevelLoadStatusManager {
        tick(): void;
        loadingPacketsReceived(): void;
        levelReady(): boolean;
        constructor(player: $LocalPlayer, level: $ClientLevel, levelRenderer: $LevelRenderer);
    }
    export class $ClientPacketListener extends $ClientCommonPacketListenerImpl implements $ClientGamePacketListener, $TickablePacketListener, $NeoListenableNetworkHandler, $ClientPacketListenerKJS, $ClientPacketListenerAccessor {
        getId(): $UUID;
        close(): void;
        getOnlinePlayerIds(): $Collection<$UUID>;
        getOnlinePlayers(): $Collection<$PlayerInfo>;
        tick(): void;
        levels(): $Set<$ResourceKey<$Level>>;
        getLevel(): $ClientLevel;
        handleSetChunkCacheCenter(packet: $ClientboundSetChunkCacheCenterPacket): void;
        handleLightUpdatePacket(packet: $ClientboundLightUpdatePacket): void;
        markMessageAsProcessed(chatMessage: $PlayerChatMessage_, acknowledged: boolean): void;
        /**
         * Removes or sets the ScoreObjective to be displayed at a particular scoreboard position (list, sidebar, below name)
         */
        handleSetDisplayObjective(packet: $ClientboundSetDisplayObjectivePacket): void;
        /**
         * Spawns a specified number of particles at the specified location with a randomized displacement according to specified bounds
         */
        handleParticleEvent(packet: $ClientboundLevelParticlesPacket): void;
        getDebugQueryHandler(): $DebugQueryHandler;
        /**
         * Updates a team managed by the scoreboard: Create/Remove the team registration, Register/Remove the player-team-memberships, Set team displayname/prefix/suffix and/or whether friendly fire is enabled
         */
        handleSetPlayerTeamPacket(packet: $ClientboundSetPlayerTeamPacket): void;
        /**
         * Updates en entity's attributes and their respective modifiers, which are used for speed bonuses (player sprinting, animals fleeing, baby speed), weapon/tool attackDamage, hostiles followRange randomization, zombie maxHealth and knockback resistance as well as reinforcement spawning chance.
         */
        handleUpdateAttributes(packet: $ClientboundUpdateAttributesPacket): void;
        getListedOnlinePlayers(): $Collection<$PlayerInfo>;
        handleSetChunkCacheRadius(packet: $ClientboundSetChunkCacheRadiusPacket): void;
        handleChunkBatchStart(packet: $ClientboundChunkBatchStartPacket): void;
        handleChunkBatchFinished(packet: $ClientboundChunkBatchFinishedPacket_): void;
        handleMerchantOffers(packet: $ClientboundMerchantOffersPacket): void;
        /**
         * Sets the velocity of the specified entity to the specified value
         */
        handleSetEntityMotion(packet: $ClientboundSetEntityMotionPacket): void;
        /**
         * Invoked when the server registers new proximate objects in your watchlist or when objects in your watchlist have changed -> Registers any changes locally
         */
        handleSetEntityData(packet: $ClientboundSetEntityDataPacket_): void;
        /**
         * Updates an entity's position and rotation as specified by the packet
         */
        handleTeleportEntity(packet: $ClientboundTeleportEntityPacket): void;
        /**
         * Spawns an experience orb and sets its value (amount of XP)
         */
        handleAddExperienceOrb(packet: $ClientboundAddExperienceOrbPacket): void;
        handleRemoveMobEffect(packet: $ClientboundRemoveMobEffectPacket_): void;
        handleSetBorderLerpSize(packet: $ClientboundSetBorderLerpSizePacket): void;
        handleSetExperience(packet: $ClientboundSetExperiencePacket): void;
        handleTabListCustomisation(packet: $ClientboundTabListPacket_): void;
        handlePlayerInfoRemove(packet: $ClientboundPlayerInfoRemovePacket_): void;
        handleHurtAnimation(packet: $ClientboundHurtAnimationPacket_): void;
        /**
         * Updates the NBTTagCompound metadata of instances of the following entitytypes: Mob spawners, command blocks, beacons, skulls, flowerpot
         */
        handleBlockEntityData(packet: $ClientboundBlockEntityDataPacket): void;
        handleUpdateMobEffect(packet: $ClientboundUpdateMobEffectPacket): void;
        handlePlayerInfoUpdate(packet: $ClientboundPlayerInfoUpdatePacket): void;
        handleForgetLevelChunk(packet: $ClientboundForgetLevelChunkPacket_): void;
        /**
         * Handles picking up an ItemStack or dropping one in your inventory or an open (non-creative) container
         */
        handleContainerSetSlot(packet: $ClientboundContainerSetSlotPacket): void;
        /**
         * Updates which hotbar slot of the player is currently selected
         */
        handleSetCarriedItem(packet: $ClientboundSetCarriedItemPacket): void;
        handleHorseScreenOpen(packet: $ClientboundHorseScreenOpenPacket): void;
        /**
         * Received from the servers PlayerManager if between 1 and 64 blocks in a chunk are changed. If only one block requires an update, the server sends S23PacketBlockChange and if 64 or more blocks are changed, the server sends S21PacketChunkData
         */
        handleChunkBlocksUpdate(packet: $ClientboundSectionBlocksUpdatePacket): void;
        handlePlayerCombatKill(packet: $ClientboundPlayerCombatKillPacket_): void;
        handleLevelChunkWithLight(packet: $ClientboundLevelChunkWithLightPacket): void;
        /**
         * Creates a sign in the specified location if it didn't exist and opens the GUI to edit its text
         */
        handleOpenSignEditor(packet: $ClientboundOpenSignEditorPacket): void;
        /**
         * Updates all registered IWorldAccess instances with destroyBlockInWorldPartially
         */
        handleBlockDestruction(packet: $ClientboundBlockDestructionPacket): void;
        handleRemoveEntities(packet: $ClientboundRemoveEntitiesPacket): void;
        /**
         * Handles the placement of a specified ItemStack in a specified container/inventory slot
         */
        handleContainerContent(packet: $ClientboundContainerSetContentPacket): void;
        /**
         * Resets the ItemStack held in hand and closes the window that is opened
         */
        handleContainerClose(packet: $ClientboundContainerClosePacket): void;
        handleDisguisedChat(packet: $ClientboundDisguisedChatPacket_): void;
        handleEntityLinkPacket(packet: $ClientboundSetEntityLinkPacket): void;
        handleTakeItemEntity(packet: $ClientboundTakeItemEntityPacket): void;
        handleUpdateRecipes(packet: $ClientboundUpdateRecipesPacket): void;
        /**
         * Sets the progressbar of the opened window to the specified value
         */
        handleContainerSetData(packet: $ClientboundContainerSetDataPacket): void;
        /**
         * This method is only called for manual tab-completion (the minecraft:ask_server suggestion provider).
         */
        handleCommandSuggestions(packet: $ClientboundCommandSuggestionsPacket_): void;
        handleTagQueryPacket(packet: $ClientboundTagQueryPacket): void;
        handleAddOrRemoveRecipes(packet: $ClientboundRecipePacket): void;
        handleConfigurationStart(packet: $ClientboundStartConfigurationPacket): void;
        handleStopSoundEvent(packet: $ClientboundStopSoundPacket): void;
        handlePlayerCombatEnd(packet: $ClientboundPlayerCombatEndPacket): void;
        handlePlayerCombatEnter(packet: $ClientboundPlayerCombatEnterPacket): void;
        handleChangeDifficulty(packet: $ClientboundChangeDifficultyPacket): void;
        handleInitializeBorder(packet: $ClientboundInitializeBorderPacket): void;
        handleSetBorderCenter(packet: $ClientboundSetBorderCenterPacket): void;
        handleSetBorderSize(packet: $ClientboundSetBorderSizePacket): void;
        handlePlayerAbilities(packet: $ClientboundPlayerAbilitiesPacket): void;
        handleSoundEntityEvent(packet: $ClientboundSoundEntityPacket): void;
        potionBrewing(): $PotionBrewing;
        sendUnsignedCommand(command: string): boolean;
        handleDisconnect(): void;
        handler$cpa000$axiom$handleConfigurationStart(ci: $CallbackInfo): void;
        handler$cpa000$axiom$handleLevelChunkWithLight(packet: $ClientboundLevelChunkWithLightPacket, ci: $CallbackInfo): void;
        handler$cpa000$axiom$handleChunkBlocksUpdate(packet: $ClientboundSectionBlocksUpdatePacket, ci: $CallbackInfo): void;
        handler$cpa000$axiom$handleForgetLevelChunk(packet: $ClientboundForgetLevelChunkPacket_, ci: $CallbackInfo): void;
        getLocalGameProfile(): $GameProfile;
        scoreboard(): $Scoreboard;
        handler$cpa000$axiom$handleSetEntityData(clientboundSetEntityDataPacket: $ClientboundSetEntityDataPacket_, ci: $CallbackInfo): void;
        handler$cpa000$axiom$handleSetCarriedItem(clientboundSetCarriedItemPacket: $ClientboundSetCarriedItemPacket, ci: $CallbackInfo): void;
        handler$cpa000$axiom$handleBlockUpdate(packet: $ClientboundBlockUpdatePacket, ci: $CallbackInfo): void;
        handler$cpa000$axiom$handleChunksBiomes(packet: $ClientboundChunksBiomesPacket_, ci: $CallbackInfo): void;
        handleTickingStep(packet: $ClientboundTickingStepPacket_): void;
        handleTickingState(packet: $ClientboundTickingStatePacket_): void;
        /**
         * Updates the direction in which the specified entity is looking, normally this head rotation is independent of the rotation of the entity itself
         */
        handleRotateMob(packet: $ClientboundRotateHeadPacket): void;
        searchTrees(): $SessionSearchTrees;
        /**
         * Registers some server properties (gametype, hardcore-mode, terraintype, difficulty, player limit), creates a new WorldClient and sets the player initial dimension.
         */
        handleLogin(packet: $ClientboundLoginPacket_): void;
        /**
         * Updates the specified entity's position by the specified relative momentum and absolute rotation. Note that subclassing of the packet allows for the specification of a subset of this data (e.g. only rel. position, abs. rotation or both).
         */
        handleMoveEntity(packet: $ClientboundMoveEntityPacket): void;
        handleChunksBiomes(packet: $ClientboundChunksBiomesPacket_): void;
        /**
         * Updates the block and metadata and generates a blockupdate (and notify the clients)
         */
        handleBlockUpdate(packet: $ClientboundBlockUpdatePacket): void;
        /**
         * Spawns an instance of the objecttype indicated by the packet and sets its position and momentum
         */
        handleAddEntity(packet: $ClientboundAddEntityPacket): void;
        handleMovePlayer(packet: $ClientboundPlayerPositionPacket): void;
        kjs$sessionData(): $KubeSessionData;
        handleLookAt(packet: $ClientboundPlayerLookAtPacket): void;
        handleCommands(packet: $ClientboundCommandsPacket): void;
        /**
         * Triggers Block.onBlockEventReceived, which is implemented in BlockPistonBase for extension/retraction, BlockNote for setting the instrument (including audiovisual feedback) and in BlockContainer to set the number of players accessing a (Ender)Chest
         */
        handleBlockEvent(packet: $ClientboundBlockEventPacket): void;
        /**
         * Updates the worlds MapStorage with the specified MapData for the specified map-identifier and invokes a MapItemRenderer for it
         */
        handleMapItemData(packet: $ClientboundMapItemDataPacket_): void;
        /**
         * Renders a specified animation: Waking up a player, a living entity swinging its currently held item, being hurt or receiving a critical hit by normal or magical means
         */
        handleAnimate(packet: $ClientboundAnimatePacket): void;
        handleLevelEvent(packet: $ClientboundLevelEventPacket): void;
        /**
         * Updates the players statistics or achievements
         */
        handleAwardStats(packet: $ClientboundAwardStatsPacket_): void;
        handleRespawn(packet: $ClientboundRespawnPacket_): void;
        handleDeleteChat(packet: $ClientboundDeleteChatPacket_): void;
        handleSystemChat(packet: $ClientboundSystemChatPacket_): void;
        handleSetSpawn(packet: $ClientboundSetDefaultSpawnPositionPacket): void;
        handleOpenScreen(packet: $ClientboundOpenScreenPacket): void;
        handleSetTime(packet: $ClientboundSetTimePacket): void;
        handlePlayerChat(packet: $ClientboundPlayerChatPacket_): void;
        /**
         * Initiates a new explosion (sound, particles, drop spawn) for the affected blocks indicated by the packet.
         */
        handleExplosion(packet: $ClientboundExplodePacket): void;
        handleSetHealth(packet: $ClientboundSetHealthPacket): void;
        handleSetEquipment(packet: $ClientboundSetEquipmentPacket): void;
        handleItemCooldown(packet: $ClientboundCooldownPacket_): void;
        handleMoveVehicle(packet: $ClientboundMoveVehiclePacket): void;
        handleOpenBook(packet: $ClientboundOpenBookPacket): void;
        handleBossUpdate(packet: $ClientboundBossEventPacket): void;
        setActionBarText(packet: $ClientboundSetActionBarTextPacket_): void;
        setTitleText(packet: $ClientboundSetTitleTextPacket_): void;
        setSubtitleText(packet: $ClientboundSetSubtitleTextPacket_): void;
        handleTitlesClear(packet: $ClientboundClearTitlesPacket): void;
        handleServerData(packet: $ClientboundServerDataPacket_): void;
        handleSetCamera(packet: $ClientboundSetCameraPacket): void;
        setTitlesAnimation(packet: $ClientboundSetTitlesAnimationPacket): void;
        handleSoundEvent(packet: $ClientboundSoundPacket): void;
        handleResetScore(packet: $ClientboundResetScorePacket_): void;
        handlePongResponse(packet: $ClientboundPongResponsePacket_): void;
        handlePlaceRecipe(packet: $ClientboundPlaceGhostRecipePacket): void;
        handleBundlePacket(packet: $ClientboundBundlePacket): void;
        /**
         * May create a scoreboard objective, remove an objective from the scoreboard or update an objectives' displayname
         */
        handleAddObjective(packet: $ClientboundSetObjectivePacket): void;
        /**
         * Either updates the score with a specified value or removes the score for an objective
         */
        handleSetScore(packet: $ClientboundSetScorePacket_): void;
        isFeatureEnabled(enabledFeatures: $FeatureFlagSet): boolean;
        handleDebugSample(packet: $ClientboundDebugSamplePacket_): void;
        enabledFeatures(): $FeatureFlagSet;
        setKeyPair(keyPair: $ProfileKeyPair_): void;
        handleGameEvent(packet: $ClientboundGameEventPacket): void;
        getPlayerInfo(uniqueId: $UUID_): $PlayerInfo;
        /**
         * Gets the client's description information about another player on the server.
         */
        getPlayerInfo(name: string): $PlayerInfo;
        sendCommand(message: string): void;
        clearLevel(): void;
        handleBlockChangedAck(packet: $ClientboundBlockChangedAckPacket_): void;
        getCommands(): $CommandDispatcher<$SharedSuggestionProvider>;
        handleDamageEvent(packet: $ClientboundDamageEventPacket_): void;
        getRecipeManager(): $RecipeManager;
        getSuggestionsProvider(): $ClientSuggestionProvider;
        /**
         * Invokes the entities' handleUpdateHealth method which is implemented in LivingBase (hurt/death), MinecartMobSpawner (spawn delay), FireworkRocket & MinecartTNT (explosion), IronGolem (throwing, ...), Witch (spawn particles), Zombie (villager transformation), Animal (breeding mode particles), Horse (breeding/smoke particles), Sheep (...), Tameable (...), Villager (particles for breeding mode, angry and happy), Wolf (...)
         */
        handleEntityEvent(packet: $ClientboundEntityEventPacket): void;
        sendChat(message: string): void;
        serverLinks(): $ServerLinks;
        updateSearchTrees(): void;
        getServerData(): $ServerData;
        registryAccess(): $RegistryAccess$Frozen;
        getAdvancements(): $ClientAdvancements;
        handler$cpa000$axiom$handleSetTime(clientboundSetTimePacket: $ClientboundSetTimePacket, ci: $CallbackInfo): void;
        handleSetEntityPassengersPacket(packet: $ClientboundSetPassengersPacket): void;
        handler$cpa000$axiom$handleLogin(clientboundLoginPacket: $ClientboundLoginPacket_, ci: $CallbackInfo): void;
        handleSetBorderWarningDistance(packet: $ClientboundSetBorderWarningDistancePacket): void;
        handleSetBorderWarningDelay(packet: $ClientboundSetBorderWarningDelayPacket): void;
        handleSetSimulationDistance(packet: $ClientboundSetSimulationDistancePacket_): void;
        handleUpdateAdvancementsPacket(packet: $ClientboundUpdateAdvancementsPacket): void;
        handler$cpa000$axiom$handleRespawn(clientboundRespawnPacket: $ClientboundRespawnPacket_, ci: $CallbackInfo): void;
        handleSelectAdvancementsTab(packet: $ClientboundSelectAdvancementsTabPacket): void;
        handleProjectilePowerPacket(packet: $ClientboundProjectilePowerPacket): void;
        handleCustomChatCompletions(packet: $ClientboundCustomChatCompletionsPacket_): void;
        catnip$getServerChunkRadius(): number;
        minecraft: $Minecraft;
        /**
         * @deprecated
         */
        strictErrorHandling: boolean;
        serverChunkRadius: number;
        isTransferring: boolean;
        customReportDetails: $Map<string, string>;
        postDisconnectScreen: $Screen;
        connectionType: $ConnectionType;
        serverData: $ServerData;
        telemetryManager: $WorldSessionTelemetryManager;
        serverCookies: $Map<$ResourceLocation, number[]>;
        connection: $Connection;
        commands: $CommandDispatcher<$SharedSuggestionProvider>;
        constructor(minecraft: $Minecraft, connection: $Connection, commonListenerCookie: $CommonListenerCookie_);
        get id(): $UUID;
        get onlinePlayerIds(): $Collection<$UUID>;
        get onlinePlayers(): $Collection<$PlayerInfo>;
        get level(): $ClientLevel;
        get debugQueryHandler(): $DebugQueryHandler;
        get listedOnlinePlayers(): $Collection<$PlayerInfo>;
        get localGameProfile(): $GameProfile;
        set actionBarText(value: $ClientboundSetActionBarTextPacket_);
        set titleText(value: $ClientboundSetTitleTextPacket_);
        set subtitleText(value: $ClientboundSetSubtitleTextPacket_);
        set titlesAnimation(value: $ClientboundSetTitlesAnimationPacket);
        set keyPair(value: $ProfileKeyPair_);
        get recipeManager(): $RecipeManager;
        get suggestionsProvider(): $ClientSuggestionProvider;
        get advancements(): $ClientAdvancements;
    }
    export class $ServerData$ServerPackStatus extends $Enum<$ServerData$ServerPackStatus> {
        getName(): $Component;
        static values(): $ServerData$ServerPackStatus[];
        static valueOf(arg0: string): $ServerData$ServerPackStatus;
        static DISABLED: $ServerData$ServerPackStatus;
        static PROMPT: $ServerData$ServerPackStatus;
        static ENABLED: $ServerData$ServerPackStatus;
    }
    /**
     * Values that may be interpreted as {@link $ServerData$ServerPackStatus}.
     */
    export type $ServerData$ServerPackStatus_ = "enabled" | "disabled" | "prompt";
    export class $ServerData {
        type(): $ServerData$Type;
        /**
         * Returns an NBTTagCompound with the server's name, IP and maybe acceptTextures.
         */
        write(): $CompoundTag;
        /**
         * Takes an NBTTagCompound with 'name' and 'ip' keys, returns a ServerData instance.
         */
        static read(nbtCompound: $CompoundTag_): $ServerData;
        state(): $ServerData$State;
        setState(state: $ServerData$State_): void;
        copyFrom(serverData: $ServerData): void;
        getResourcePackStatus(): $ServerData$ServerPackStatus;
        setResourcePackStatus(packStatus: $ServerData$ServerPackStatus_): void;
        static validateIcon(icon: number[] | null): number[];
        setIconBytes(iconBytes: number[] | null): void;
        getIconBytes(): number[];
        copyNameIconFrom(serverData: $ServerData): void;
        /**
         * Returns `true` if the server is a LAN server.
         */
        isLan(): boolean;
        /**
         * Returns `true` if the server is a LAN server.
         */
        isRealm(): boolean;
        neoForgeData: $ExtendedServerListData;
        motd: $Component;
        protocol: number;
        players: $ServerStatus$Players;
        ping: number;
        ip: string;
        playerList: $List<$Component>;
        name: string;
        version: $Component;
        status: $Component;
        constructor(name: string, ip: string, type: $ServerData$Type_);
        get lan(): boolean;
        get realm(): boolean;
    }
    export class $LegacyServerPinger extends $SimpleChannelInboundHandler<$ByteBuf> {
        channelRead0(context: $ChannelHandlerContext, buffer: $ByteBuf): void;
        constructor(address: $ServerAddress, output: $LegacyServerPinger$Output_);
    }
    export class $ServerList {
        remove(serverData: $ServerData): void;
        /**
         * Counts the number of ServerData instances in the list.
         */
        size(): number;
        /**
         * Gets the ServerData instance stored for the given index in the list.
         */
        get(index: number): $ServerData;
        get(ip: string): $ServerData;
        /**
         * Loads a list of servers from servers.dat, by running ServerData.getServerDataFromNBTCompound on each NBT compound found in the "servers" tag list.
         */
        load(): void;
        replace(index: number, server: $ServerData): void;
        add(server: $ServerData, hidden: boolean): void;
        /**
         * Loads a list of servers from servers.dat, by running ServerData.getServerDataFromNBTCompound on each NBT compound found in the "servers" tag list.
         */
        save(): void;
        /**
         * Takes two list indexes, and swaps their order around.
         */
        swap(pos1: number, pos2: number): void;
        unhide(ip: string): $ServerData;
        static saveSingleServer(serverData: $ServerData): void;
        constructor(minecraft: $Minecraft);
    }
    export class $ClientCommonPacketListenerImpl$PackConfirmScreen extends $ConfirmScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        noButton: $Component;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        callback: $BooleanConsumer;
        static PANORAMA: $PanoramaRenderer;
        yesButton: $Component;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
    }
    export class $ClientChunkCache$Storage implements $ClientChunkCacheStorageAccessor {
        replace(chunkIndex: number, chunk: $LevelChunk, replaceWith: $LevelChunk | null): $LevelChunk;
        replace(chunkIndex: number, chunk: $LevelChunk | null): void;
        getIndex(x: number, z: number): number;
        inRange(x: number, z: number): boolean;
        getChunk(chunkIndex: number): $LevelChunk;
        getChunks(): $AtomicReferenceArray<$LevelChunk>;
        chunkRadius: number;
        viewCenterZ: number;
        chunks: $AtomicReferenceArray<$LevelChunk>;
        chunkCount: number;
        this$0: $ClientChunkCache;
        viewCenterX: number;
        constructor(chunkRadius: $ClientChunkCache, arg1: number);
    }
    export class $ClientLevel$EntityCallbacks implements $LevelCallback<$Entity> {
    }
    export class $PlayerInfo {
        /**
         * Returns the GameProfile for the player represented by this NetworkPlayerInfo instance
         */
        getProfile(): $GameProfile;
        getMessageValidator(): $SignedMessageValidator;
        setTabListDisplayName(displayName: $Component_ | null): void;
        getSkin(): $PlayerSkin;
        getTeam(): $PlayerTeam;
        getLatency(): number;
        setLatency(latency: number): void;
        clearChatSession(enforcesSecureChat: boolean): void;
        getGameMode(): $GameType;
        getTabListDisplayName(): $Component;
        setGameMode(gameMode: $GameType_): void;
        getChatSession(): $RemoteChatSession;
        setChatSession(chatSession: $RemoteChatSession_): void;
        hasVerifiableChat(): boolean;
        constructor(profile: $GameProfile, enforeSecureChat: boolean);
        get profile(): $GameProfile;
        get messageValidator(): $SignedMessageValidator;
        get skin(): $PlayerSkin;
        get team(): $PlayerTeam;
    }
    export class $PingDebugMonitor {
        tick(): void;
        onPongReceived(packet: $ClientboundPongResponsePacket_): void;
        constructor(connection: $ClientPacketListener, delayTimer: $LocalSampleLogger);
    }
    export class $ProfileKeyPairManager {
        static create(userApiService: $UserApiService, user: $User, gameDirectory: $Path_): $ProfileKeyPairManager;
        static EMPTY_KEY_MANAGER: $ProfileKeyPairManager;
    }
    export interface $ProfileKeyPairManager {
        shouldRefreshKeyPair(): boolean;
        prepareKeyPair(): $CompletableFuture<($ProfileKeyPair) | undefined>;
    }
    export class $SessionSearchTrees {
        rebuildAfterLanguageChange(): void;
        updateCreativeTooltips(arg0: $HolderLookup$Provider, arg1: $List_<$ItemStack_>, arg2: $SessionSearchTrees$Key): void;
        updateCreativeTooltips(registries: $HolderLookup$Provider, items: $List_<$ItemStack_>): void;
        recipes(): $SearchTree<$RecipeCollection>;
        updateRecipes(recipeBook: $ClientRecipeBook, registries: $RegistryAccess$Frozen): void;
        updateCreativeTags(items: $List_<$ItemStack_>): void;
        updateCreativeTags(arg0: $List_<$ItemStack_>, arg1: $SessionSearchTrees$Key): void;
        creativeNameSearch(): $SearchTree<$ItemStack>;
        creativeNameSearch(arg0: $SessionSearchTrees$Key): $SearchTree<$ItemStack>;
        creativeTagSearch(): $SearchTree<$ItemStack>;
        creativeTagSearch(arg0: $SessionSearchTrees$Key): $SearchTree<$ItemStack>;
        static CREATIVE_NAMES: $SessionSearchTrees$Key;
        static CREATIVE_TAGS: $SessionSearchTrees$Key;
        constructor();
    }
    export class $ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest}.
     */
    export type $ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest_ = { hash?: string, id?: $UUID_, url?: $URL,  } | [hash?: string, id?: $UUID_, url?: $URL, ];
    export class $ClientAdvancements {
        get(id: $ResourceLocation_): $AdvancementHolder;
        update(packet: $ClientboundUpdateAdvancementsPacket): void;
        getTree(): $AdvancementTree;
        setSelectedTab(advancement: $AdvancementHolder_ | null, tellServer: boolean): void;
        setListener(listener: $ClientAdvancements$Listener | null): void;
        constructor(minecraft: $Minecraft, telemetryManager: $WorldSessionTelemetryManager);
        get tree(): $AdvancementTree;
        set listener(value: $ClientAdvancements$Listener | null);
    }
    export class $MultiPlayerGameMode implements $AccessorMultiPlayerGameMode, $MultiPlayerGameModeAccessor {
        /**
         * Syncs the current player item with the server
         */
        tick(): void;
        getPreviousPlayerMode(): $GameType;
        /**
         * Returns `true` if player is in creative mode.
         */
        isServerControlledInventory(): boolean;
        handler$cpo000$axiom$startDestroyBlock(blockPos: $BlockPos_, direction: $Direction_, cir: $CallbackInfoReturnable<any>): void;
        handler$cpo000$axiom$useItemOnReturn(localPlayer: $LocalPlayer, interactionHand: $InteractionHand_, blockHitResult: $BlockHitResult, cir: $CallbackInfoReturnable<any>): void;
        /**
         * Sends a Packet107 to the server to drop the item on the ground
         */
        handleCreativeModeItemDrop(stack: $ItemStack_): void;
        /**
         * GuiEnchantment uses this during multiplayer to tell PlayerControllerMP to send a packet indicating the enchantment action the player has taken.
         */
        handleInventoryButtonClick(containerId: number, buttonId: number): void;
        /**
         * Returns `true` if player is in creative mode.
         */
        canHurtPlayer(): boolean;
        /**
         * Returns `true` if player is in creative mode.
         */
        hasExperience(): boolean;
        getDestroyStage(): number;
        handleInventoryMouseClick(containerId: number, slotId: number, mouseButton: number, clickType: $ClickType_, player: $Player): void;
        handleSlotStateChanged(slotId: number, containerId: number, newState: boolean): void;
        setLocalMode(localPlayerMode: $GameType_, previousLocalPlayerMode: $GameType_ | null): void;
        /**
         * Sets the game type for the player.
         */
        setLocalMode(type: $GameType_): void;
        /**
         * Sets player capabilities depending on current gametype.
         */
        adjustPlayer(player: $Player): void;
        createPlayer(level: $ClientLevel, statsManager: $StatsCounter, recipes: $ClientRecipeBook, wasShiftKeyDown: boolean, wasSprinting: boolean): $LocalPlayer;
        createPlayer(level: $ClientLevel, statsManager: $StatsCounter, recipes: $ClientRecipeBook): $LocalPlayer;
        handlePlaceRecipe(containerId: number, recipe: $RecipeHolder_<never>, shiftDown: boolean): void;
        /**
         * Returns `true` if player is in creative mode.
         */
        isDestroying(): boolean;
        /**
         * Returns `true` if player is in creative mode.
         */
        hasInfiniteItems(): boolean;
        /**
         * Syncs the current player item with the server
         */
        stopDestroyBlock(): void;
        startDestroyBlock(posBlock: $BlockPos_, directionFacing: $Direction_): boolean;
        /**
         * Returns `true` if player is in creative mode.
         */
        hasMissTime(): boolean;
        /**
         * Returns `true` if player is in creative mode.
         */
        isAlwaysFlying(): boolean;
        useItem(player: $Player, hand: $InteractionHand_): $InteractionResult;
        /**
         * Attacks an entity
         */
        attack(player: $Player, targetEntity: $Entity): void;
        /**
         * Handles right-clicking an entity from the entities side, sends a packet to the server.
         */
        interactAt(player: $Player, target: $Entity, ray: $EntityHitResult, hand: $InteractionHand_): $InteractionResult;
        /**
         * Handles right-clicking an entity, sends a packet to the server.
         */
        interact(player: $Player, target: $Entity, hand: $InteractionHand_): $InteractionResult;
        useItemOn(player: $LocalPlayer, hand: $InteractionHand_, result: $BlockHitResult): $InteractionResult;
        destroyBlock(pos: $BlockPos_): boolean;
        handler$cpo000$axiom$isAlwaysFlying(cir: $CallbackInfoReturnable<any>): void;
        handler$cpo000$axiom$performUseItemOn(localPlayer: $LocalPlayer, interactionHand: $InteractionHand_, blockHitResult: $BlockHitResult, cir: $CallbackInfoReturnable<any>): void;
        continueDestroyBlock(posBlock: $BlockPos_, directionFacing: $Direction_): boolean;
        getPlayerMode(): $GameType;
        handlePickItem(index: number): void;
        /**
         * Sets player capabilities depending on current gametype.
         */
        releaseUsingItem(player: $Player): void;
        /**
         * Used in PlayerControllerMP to update the server with an ItemStack in a slot.
         */
        handleCreativeModeItemAdd(stack: $ItemStack_, slotId: number): void;
        getDestroyDelay(): number;
        setDestroyDelay(index: number): void;
        framedblocks$setDestroyDelay(index: number): void;
        static $assertionsDisabled: boolean;
        constructor(minecraft: $Minecraft, connection: $ClientPacketListener);
        get previousPlayerMode(): $GameType;
        get serverControlledInventory(): boolean;
        get destroyStage(): number;
        get destroying(): boolean;
        get alwaysFlying(): boolean;
        get playerMode(): $GameType;
    }
    export class $ServerData$Type extends $Enum<$ServerData$Type> {
        static values(): $ServerData$Type[];
        static valueOf(arg0: string): $ServerData$Type;
        static OTHER: $ServerData$Type;
        static LAN: $ServerData$Type;
        static REALM: $ServerData$Type;
    }
    /**
     * Values that may be interpreted as {@link $ServerData$Type}.
     */
    export type $ServerData$Type_ = "lan" | "realm" | "other";
    export class $LegacyServerPinger$Output {
    }
    export interface $LegacyServerPinger$Output {
        handleResponse(version: number, motd: string, players: string, capacity: number, arg4: number): void;
    }
    /**
     * Values that may be interpreted as {@link $LegacyServerPinger$Output}.
     */
    export type $LegacyServerPinger$Output_ = ((arg0: number, arg1: string, arg2: string, arg3: number, arg4: number) => void);
    export class $ClientHandshakePacketListenerImpl implements $ClientLoginPacketListener, $ClientLoginNetworkHandlerAccessor, $NetworkHandlerExtensions {
        setMinigameName(minigameName: string | null): void;
        isAcceptingMessages(): boolean;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        handleGameProfile(packet: $ClientboundGameProfilePacket_): void;
        handleCompression(packet: $ClientboundLoginCompressionPacket): void;
        handleCustomQuery(packet: $ClientboundCustomQueryPacket_): void;
        handleDisconnect(packet: $ClientboundLoginDisconnectPacket): void;
        handleHello(packet: $ClientboundHelloPacket): void;
        getAddon(): $ClientLoginNetworkAddon;
        onDisconnect(details: $DisconnectionDetails_): void;
        handleRequestCookie(packet: $ClientboundCookieRequestPacket_): void;
        protocol(): $ConnectionProtocol;
        flow(): $PacketFlow;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        fillCrashReport(crashReport: $CrashReport): void;
        getConnection(): $Connection;
        constructor(connection: $Connection, minecraft: $Minecraft, serverData: $ServerData | null, parent: $Screen | null, newWorld: boolean, worldLoadDuration: $Duration_ | null, updateStatus: $Consumer_<$Component>, cookies: $TransferState_ | null);
        set minigameName(value: string | null);
        get acceptingMessages(): boolean;
        get addon(): $ClientLoginNetworkAddon;
        get connection(): $Connection;
    }
    export class $TransferState extends $Record {
        cookies(): $Map<$ResourceLocation, number[]>;
        constructor(arg0: $Map_<$ResourceLocation_, number[]>);
    }
    /**
     * Values that may be interpreted as {@link $TransferState}.
     */
    export type $TransferState_ = { cookies?: $Map_<$ResourceLocation_, number[]>,  } | [cookies?: $Map_<$ResourceLocation_, number[]>, ];
    export class $DebugSampleSubscriber {
        tick(): void;
        static REQUEST_INTERVAL_MS: number;
        constructor(connection: $ClientPacketListener, debugScreenOverlay: $DebugScreenOverlay);
    }
    export class $ClientAdvancements$Listener {
    }
    export interface $ClientAdvancements$Listener extends $AdvancementTree$Listener {
        onUpdateAdvancementProgress(advancement: $AdvancementNode, advancementProgress: $AdvancementProgress): void;
        onSelectedTabChanged(advancement: $AdvancementHolder_ | null): void;
    }
    export class $RegistryDataCollector$ContentsCollector {
    }
    export class $RegistryDataCollector {
        appendContents(registryKey: $ResourceKey_<$Registry<never>>, registryEntries: $List_<$RegistrySynchronization$PackedRegistryEntry_>): void;
        appendTags(tags: $Map_<$ResourceKey_<$Registry<never>>, $TagNetworkSerialization$NetworkPayload>): void;
        collectGameRegistries(resourceProvider: $ResourceProvider_, registryAccess: $RegistryAccess, isMemoryConnection: boolean): $RegistryAccess$Frozen;
        constructor();
    }
    export class $ClientLevel extends $Level implements $ClientLevelAccessor$1, $ClientLevelKJS, $ClientLevelAccessor, $SubLevelContainerHolder, $WaterOcclusionContainerHolder, $LevelPoseProviderExtension, $ClientLevelExt, $LevelHeightAccessor {
        unload(chunk: $LevelChunk): void;
        /**
         * Runs a single tick for the world
         */
        tick(hasTimeLeft: $BooleanSupplier_): void;
        getSkyColor(pos: $Vec3_, partialTick: number): $Vec3;
        getAllMapData(): $Map<$MapId, $MapItemSavedData>;
        getCloudColor(partialTick: number): $Vec3;
        axiom$isTimeFrozen(): boolean;
        getStarBrightness(partialTick: number): number;
        calculateBlockTint(blockPos: $BlockPos_, colorResolver: $ColorResolver_): number;
        getSkyFlashTime(): number;
        handler$cop000$axiom$setBlock(blockPos: $BlockPos_, blockState: $BlockState_, i: number, j: number, cir: $CallbackInfoReturnable<any>): void;
        addMapData(map: $Map_<$MapId_, $MapItemSavedData>): void;
        sable$getPose(arg0: $SubLevel): $Pose3dc;
        modifyReturnValue$cop000$axiom$getMarkerParticleTarget(block: $Block_): $Block;
        getSkyDarken(partialTick: number): number;
        /**
         * Sets the world time.
         */
        setGameTime(time: number): void;
        sable$getWaterOcclusionContainer(): $WaterOcclusionContainer<any>;
        /**
         * If on MP, sends a quitting packet.
         */
        tickEntities(): void;
        onChunkLoaded(chunkPos: $ChunkPos): void;
        /**
         * If on MP, sends a quitting packet.
         */
        clearTintCaches(): void;
        removeEntity(entityId: number, reason: $Entity$RemovalReason_): void;
        doAnimateTick(posX: number, posY: number, posZ: number, range: number, random: $RandomSource, block: $Block_ | null, blockPos: $BlockPos$MutableBlockPos): void;
        syncBlockState(pos: $BlockPos_, state: $BlockState_, playerPos: $Vec3_): void;
        queueLightUpdate(task: $Runnable_): void;
        /**
         * If on MP, sends a quitting packet.
         */
        pollLightUpdates(): void;
        setServerVerifiedBlockState(pos: $BlockPos_, state: $BlockState_, flags: number): void;
        tickNonPassenger(entity: $Entity): void;
        setDefaultSpawnPos(spawnPos: $BlockPos_, spawnAngle: number): void;
        getBlockStatePredictionHandler(): $BlockStatePredictionHandler;
        effects(): $DimensionSpecialEffects;
        /**
         * Sets the world time.
         */
        setDayTime(time: number): void;
        addEntity(entity: $Entity): void;
        isLightUpdateQueueEmpty(): boolean;
        entitiesForRendering(): $Iterable<$Entity>;
        handleBlockChangedAck(sequence: number): void;
        overrideMapData(mapId: $MapId_, mapData: $MapItemSavedData): void;
        /**
         * Gets the world's chunk provider
         */
        getChunkSource(): $ClientChunkCache;
        getEntityCount(): number;
        /**
         * If on MP, sends a quitting packet.
         */
        sable$popPoseSupplier(): void;
        sable$pushPoseSupplier(arg0: $Function_<any, any>): void;
        setServerSimulationDistance(sequence: number): void;
        getServerSimulationDistance(): number;
        handler$cop000$axiom$onTick(ci: $CallbackInfo): void;
        setSectionDirtyWithNeighbors(posX: number, posY: number, posZ: number): void;
        handler$cop000$axiom$onLevelEvent(player: $Player, event: number, blockPos: $BlockPos_, j: number, ci: $CallbackInfo): void;
        animateTick(posX: number, posY: number, posZ: number): void;
        sable$getPlotContainer(): $SubLevelContainer;
        handler$cim000$entityculling$tickEntity(entity: $Entity, info: $CallbackInfo): void;
        handler$bof000$sable$subLevelAnimateTick(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfo, arg4: $RandomSource, arg5: $Block_, arg6: $BlockPos$MutableBlockPos): void;
        wrapOperation$cop000$axiom$onRemoveEntity(instance: $Entity, original: $Operation_<any>): void;
        kubeParticle(x: number, y: number, z: number, spriteSet: $SpriteSet): $KubeAnimatedParticle;
        self(): $EntityGetter;
        getLevelRenderer(): $LevelRenderer;
        restoringBlockSnapshots: boolean;
        neighborUpdater: $NeighborUpdater;
        tickingEntities: $EntityTickList;
        static LONG_PARTICLE_CLIP_RANGE: number;
        randValue: number;
        levelData: $WritableLevelData;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        static MAX_BRIGHTNESS: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        rainLevel: number;
        oThunderLevel: number;
        static ATTACHMENTS_NBT_KEY: string;
        addend: number;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        oRainLevel: number;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        blockEntityTickers: $List<$TickingBlockEntity>;
        captureBlockSnapshots: boolean;
        constructor(connection: $ClientPacketListener, clientLevelData: $ClientLevel$ClientLevelData, dimension: $ResourceKey_<$Level>, dimensionType: $Holder_<$DimensionType>, viewDistance: number, serverSimulationDistance: number, profiler: $Supplier_<$ProfilerFiller>, levelRenderer: $LevelRenderer, isDebug: boolean, biomeZoomSeed: number);
        get allMapData(): $Map<$MapId, $MapItemSavedData>;
        get skyFlashTime(): number;
        set gameTime(value: number);
        get blockStatePredictionHandler(): $BlockStatePredictionHandler;
        get lightUpdateQueueEmpty(): boolean;
        get chunkSource(): $ClientChunkCache;
        get entityCount(): number;
        get levelRenderer(): $LevelRenderer;
    }
    export class $ClientRegistryLayer extends $Enum<$ClientRegistryLayer> {
        static values(): $ClientRegistryLayer[];
        static valueOf(arg0: string): $ClientRegistryLayer;
        static createRegistryAccess(): $LayeredRegistryAccess<$ClientRegistryLayer>;
        static REMOTE: $ClientRegistryLayer;
        static STATIC: $ClientRegistryLayer;
    }
    /**
     * Values that may be interpreted as {@link $ClientRegistryLayer}.
     */
    export type $ClientRegistryLayer_ = "static" | "remote";
    export class $ClientLevel$ClientLevelData implements $WritableLevelData {
        setDifficultyLocked(difficultyLocked: boolean): void;
        getSpawnPos(): $BlockPos;
        getSpawnAngle(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        setGameTime(dayTime: number): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        setDifficulty(difficulty: $Difficulty_): void;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        /**
         * Get current world time
         */
        getDayTime(): number;
        getClearColorScale(): number;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        setDayTime(dayTime: number): void;
        setRaining(difficultyLocked: boolean): void;
        setSpawn(spawnPoint: $BlockPos_, angle: number): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        getHorizonHeight(level: $LevelHeightAccessor): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        getDifficulty(): $Difficulty;
        /**
         * Get current world time
         */
        getGameTime(): number;
        constructor(difficulty: $Difficulty_, hardcore: boolean, isFlat: boolean);
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
        get thundering(): boolean;
        get clearColorScale(): number;
        get gameRules(): $GameRules;
        get hardcore(): boolean;
    }
    export class $ServerStatusPinger {
        removeAll(): void;
        tick(): void;
        pingLegacyServer(resolvedServerAddress: $InetSocketAddress, serverAddress: $ServerAddress, serverData: $ServerData): void;
        static formatPlayerCount(players: number, capacity: number): $Component;
        onPingFailed(reason: $Component_, serverData: $ServerData): void;
        pingServer(serverData: $ServerData, serverListUpdater: $Runnable_, stateUpdater: $Runnable_): void;
        constructor();
    }
    export class $LevelLoadStatusManager$Status extends $Enum<$LevelLoadStatusManager$Status> {
    }
    /**
     * Values that may be interpreted as {@link $LevelLoadStatusManager$Status}.
     */
    export type $LevelLoadStatusManager$Status_ = "waiting_for_server" | "waiting_for_player_chunk" | "level_ready";
    export class $ClientChunkCache extends $ChunkSource implements $DebugChunkProviderAttachments {
        drop(chunkPos: $ChunkPos): void;
        replaceWithPacketData(x: number, z: number, buffer: $FriendlyByteBuf, tag: $CompoundTag_, consumer: $Consumer_<$ClientboundLevelChunkPacketData$BlockEntityTagOutput>): $LevelChunk;
        updateViewCenter(x: number, z: number): void;
        updateViewRadius(viewDistance: number): void;
        getChunk(x: number, z: number, chunkStatus: $ChunkStatus_, requireChunk: boolean): $LevelChunk;
        replaceBiomes(x: number, z: number, buffer: $FriendlyByteBuf): void;
        sable$loadedChunks(): $Collection<any>;
        level: $ClientLevel;
        static LOGGER: $Logger;
        storage: $ClientChunkCache$Storage;
        constructor(level: $ClientLevel, viewDistance: number);
    }
    export class $KnownPacksManager {
        trySelectingPacks(packs: $List_<$KnownPack_>): $List<$KnownPack>;
        redirect$zgh000$fabric_resource_loader_v0$createClientManager(): $PackRepository;
        modifyReturnValue$zgh000$fabric_resource_loader_v0$getCommonKnownPacksReturn(packs: $List_<any>): $List<any>;
        createResourceManager(): $CloseableResourceManager;
        constructor();
    }
    export class $ClientCommonPacketListenerImpl$DeferredPacket extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ClientCommonPacketListenerImpl$DeferredPacket}.
     */
    export type $ClientCommonPacketListenerImpl$DeferredPacket_ = { sendCondition?: $BooleanSupplier_, packet?: $Packet<$ServerboundPacketListener>, expirationTime?: number,  } | [sendCondition?: $BooleanSupplier_, packet?: $Packet<$ServerboundPacketListener>, expirationTime?: number, ];
    export class $CommonListenerCookie extends $Record {
        serverBrand(): string;
        postDisconnectScreen(): $Screen;
        customReportDetails(): $Map<string, string>;
        /**
         * @deprecated
         */
        strictErrorHandling(): boolean;
        serverData(): $ServerData;
        telemetryManager(): $WorldSessionTelemetryManager;
        connectionType(): $ConnectionType;
        receivedRegistries(): $RegistryAccess$Frozen;
        localGameProfile(): $GameProfile;
        serverCookies(): $Map<$ResourceLocation, number[]>;
        enabledFeatures(): $FeatureFlagSet;
        chatState(): $ChatComponent$State;
        serverLinks(): $ServerLinks;
        /**
         * @deprecated
         */
        constructor(arg0: $GameProfile, arg1: $WorldSessionTelemetryManager, arg2: $RegistryAccess$Frozen, arg3: $FeatureFlagSet, arg4: string | null, arg5: $ServerData | null, arg6: $Screen | null, arg7: $Map_<$ResourceLocation_, number[]>, arg8: $ChatComponent$State | null, arg9: boolean, arg10: $Map_<string, string>, arg11: $ServerLinks_);
        constructor(localGameProfile: $GameProfile, telemetryManager: $WorldSessionTelemetryManager, receivedRegistries: $RegistryAccess$Frozen, enabledFeatures: $FeatureFlagSet, serverBrand: string | null, serverData: $ServerData | null, postDisconnectScreen: $Screen | null, serverCookies: $Map_<$ResourceLocation_, number[]>, chatState: $ChatComponent$State | null, strictErrorHandling: boolean, customReportDetails: $Map_<string, string>, serverLinks: $ServerLinks_, connectionType: $ConnectionType_);
    }
    /**
     * Values that may be interpreted as {@link $CommonListenerCookie}.
     */
    export type $CommonListenerCookie_ = { serverLinks?: $ServerLinks_, serverCookies?: $Map_<$ResourceLocation_, number[]>, chatState?: $ChatComponent$State, enabledFeatures?: $FeatureFlagSet, postDisconnectScreen?: $Screen, connectionType?: $ConnectionType_, serverBrand?: string, customReportDetails?: $Map_<string, string>, strictErrorHandling?: boolean, serverData?: $ServerData, localGameProfile?: $GameProfile, telemetryManager?: $WorldSessionTelemetryManager, receivedRegistries?: $RegistryAccess$Frozen,  } | [serverLinks?: $ServerLinks_, serverCookies?: $Map_<$ResourceLocation_, number[]>, chatState?: $ChatComponent$State, enabledFeatures?: $FeatureFlagSet, postDisconnectScreen?: $Screen, connectionType?: $ConnectionType_, serverBrand?: string, customReportDetails?: $Map_<string, string>, strictErrorHandling?: boolean, serverData?: $ServerData, localGameProfile?: $GameProfile, telemetryManager?: $WorldSessionTelemetryManager, receivedRegistries?: $RegistryAccess$Frozen, ];
    export class $ClientCommonPacketListenerImpl implements $ClientCommonPacketListener {
        /**
         * @return the connection this listener is attached to
         */
        getConnection(): $Connection;
        serverBrand(): string;
        handleResourcePackPop(packet: $ClientboundResourcePackPopPacket_): void;
        sendDeferredPackets(): void;
        handleCustomReportDetails(packet: $ClientboundCustomReportDetailsPacket_): void;
        handleResourcePackPush(packet: $ClientboundResourcePackPushPacket_): void;
        createDisconnectScreen(details: $DisconnectionDetails_): $Screen;
        handleCustomPayload(payload: $CustomPacketPayload_): void;
        handleCustomPayload(packet: $ClientboundCustomPayloadPacket_): void;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        handleDisconnect(packet: $ClientboundDisconnectPacket_): void;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        send(packet: $Packet<never>): void;
        handleServerLinks(packet: $ClientboundServerLinksPacket_): void;
        handleStoreCookie(packet: $ClientboundStoreCookiePacket_): void;
        static preparePackPrompt(line1: $Component_, line2: $Component_ | null): $Component;
        handleTransfer(packet: $ClientboundTransferPacket_): void;
        handleKeepAlive(packet: $ClientboundKeepAlivePacket): void;
        handlePing(packet: $ClientboundPingPacket): void;
        onDisconnect(details: $DisconnectionDetails_): void;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        handleRequestCookie(packet: $ClientboundCookieRequestPacket_): void;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        wrapOperation$clm001$fabric_networking_api_v1$onCustomPayloadUnregisterPacket(arg0: $Connection, arg1: $Set_<any>, arg2: $Operation_<any>): void;
        wrapOperation$clm001$fabric_networking_api_v1$onCustomPayloadRegisterPacket(arg0: $Connection, arg1: $Set_<any>, arg2: $Operation_<any>): void;
        flow(): $PacketFlow;
        /**
         * {@inheritDoc}
         */
        disconnect(reason: $Component_): void;
        /**
         * {@inheritDoc}
         */
        getMainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
        send(payload: $CustomPacketPayload_): void;
        fillCrashReport(crashReport: $CrashReport): void;
        hasChannel(type: $CustomPacketPayload$Type_<never>): boolean;
        hasChannel(payload: $CustomPacketPayload_): boolean;
        /**
         * Checks if the connection has negotiated and opened a channel for the payload.
         */
        hasChannel(payloadId: $ResourceLocation_): boolean;
        minecraft: $Minecraft;
        /**
         * @deprecated
         */
        strictErrorHandling: boolean;
        connection: $Connection;
        isTransferring: boolean;
        customReportDetails: $Map<string, string>;
        postDisconnectScreen: $Screen;
        connectionType: $ConnectionType;
        serverData: $ServerData;
        telemetryManager: $WorldSessionTelemetryManager;
        serverLinks: $ServerLinks;
        serverCookies: $Map<$ResourceLocation, number[]>;
        constructor(minecraft: $Minecraft, connection: $Connection, commonListenerCookie: $CommonListenerCookie_);
        get mainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
    }
    export class $ClientSuggestionProvider implements $SharedSuggestionProvider, $FabricClientCommandSource, $VeilClientSuggestionProvider {
        suggestRegistryElements(resourceKey: $ResourceKey_<$Registry<never>>, registryKey: $SharedSuggestionProvider$ElementSuggestionType_, builder: $SuggestionsBuilder, context: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        levels(): $Set<$ResourceKey<$Level>>;
        completeCustomSuggestions(transaction: number, result: $Suggestions): void;
        modifyCustomCompletions(action: $ClientboundCustomChatCompletionsPacket$Action_, entries: $List_<string>): void;
        sendFeedback(arg0: $Component_): void;
        getRecipeNames(): $Stream<$ResourceLocation>;
        getAvailableSounds(): $Stream<$ResourceLocation>;
        getWorld(): $ClientLevel;
        sendError(arg0: $Component_): void;
        getSelectedEntities(): $Collection<string>;
        getOnlinePlayerNames(): $Collection<string>;
        getRelevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        getAbsoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        veil$getPostPipelineNames(): $Stream<any>;
        customSuggestion(context: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        getAllTeams(): $Collection<string>;
        enabledFeatures(): $FeatureFlagSet;
        getCustomTabSugggestions(): $Collection<string>;
        hasPermission(level: number): boolean;
        getClient(): $Minecraft;
        getPlayer(): $LocalPlayer;
        registryAccess(): $RegistryAccess;
        modifyReturnValue$cpb000$axiom$getSelectedEntities(returnValue: $Collection_<any>): $Collection<any>;
        suggestRegistryElements(registry: $Registry<never>, type: $SharedSuggestionProvider$ElementSuggestionType_, builder: $SuggestionsBuilder): void;
        getPosition(): $Vec3;
        getMeta(arg0: string): $Object;
        getEntity(): $Entity;
        getRotation(): $Vec2;
        constructor(connection: $ClientPacketListener, minecraft: $Minecraft);
        get recipeNames(): $Stream<$ResourceLocation>;
        get availableSounds(): $Stream<$ResourceLocation>;
        get world(): $ClientLevel;
        get selectedEntities(): $Collection<string>;
        get onlinePlayerNames(): $Collection<string>;
        get relevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get absoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get allTeams(): $Collection<string>;
        get customTabSugggestions(): $Collection<string>;
        get client(): $Minecraft;
        get player(): $LocalPlayer;
        get position(): $Vec3;
        get entity(): $Entity;
        get rotation(): $Vec2;
    }
    export class $ChunkBatchSizeCalculator {
        getDesiredChunksPerTick(): number;
        onBatchFinished(batchSize: number): void;
        onBatchStart(): void;
        constructor();
        get desiredChunksPerTick(): number;
    }
}
