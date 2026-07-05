import { $WorldStem_ } from "@package/net/minecraft/server";
import { $LevelRenderer, $GameRenderer, $RenderBuffers, $GpuWarnlistManager } from "@package/net/minecraft/client/renderer";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $MinecraftExt } from "@package/com/moulberry/axiom/hooks";
import { $Entity, $HumanoidArm } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SimplePreparableReloadListener, $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $IntegratedServer } from "@package/net/minecraft/client/server";
import { $KeyBindingAccessor as $KeyBindingAccessor$1 } from "@package/net/fabricmc/fabric/mixin/event/interaction/client";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $BlockRenderDispatcher } from "@package/net/minecraft/client/renderer/block";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $ScheduledEvents$Callback_, $ScheduledEvents$ScheduledEvent, $ScheduledEvents, $TickDuration_ } from "@package/dev/latvian/mods/kubejs/util";
import { $Proxy } from "@package/java/net";
import { $Connection } from "@package/net/minecraft/network";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $CameraZoomExtension } from "@package/dev/ryanhcode/sable/mixinterface/camera/camera_zoom";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $TimerAccessor as $TimerAccessor$1 } from "@package/net/createmod/ponder/mixin/accessor";
import { $MessageSignature_, $Component_, $MessageSignature, $FormattedText, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $ChatListener } from "@package/net/minecraft/client/multiplayer/chat";
import { $RecipeBookCategoriesAccessor } from "@package/org/sinytra/connector/mod/mixin/recipebook";
import { $LevelStorageSource, $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $DownloadedPackSource } from "@package/net/minecraft/client/resources/server";
import { $FloatUnaryOperator_ } from "@package/it/unimi/dsi/fastutil/floats";
import { $SkinManager, $MapDecorationTextureManager, $PaintingTextureManager, $SplashManager, $MobEffectTextureManager } from "@package/net/minecraft/client/resources";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $RecipeBook } from "@package/net/minecraft/stats";
import { $Vector3f, $Quaternionf } from "@package/org/joml";
import { $KeyModifier, $KeyModifier_, $IKeyConflictContext } from "@package/net/neoforged/neoforge/client/settings";
import { $GameConfig$QuickPlayData, $SilentInitException, $GameConfig$QuickPlayData_, $GameConfig } from "@package/net/minecraft/client/main";
import { $ItemColors } from "@package/net/minecraft/client/color/item";
import { $KeyBindingAccessor } from "@package/net/fabricmc/fabric/mixin/client/keybinding";
import { $ModelManager } from "@package/net/minecraft/client/resources/model";
import { $TimerAccessor, $MinecraftAccessor, $MouseHandlerAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $RealmsDataFetcher } from "@package/com/mojang/realmsclient/gui";
import { $UUID_, $Map, $TimerTask, $List, $Map_, $List_, $Collection, $Locale, $Set, $UUID } from "@package/java/util";
import { $RealmsClient } from "@package/com/mojang/realmsclient/client";
import { $BlockPos, $BlockPos_, $RegistryAccess } from "@package/net/minecraft/core";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $TextureAtlasSprite, $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $Throwable, $Runnable, $Enum, $Comparable, $Iterable_, $Record, $AutoCloseable, $Object } from "@package/java/lang";
import { $File_, $File } from "@package/java/io";
import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $EntityRenderDispatcher, $ItemRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $FogType } from "@package/net/minecraft/world/level/material";
import { $ToastComponent } from "@package/net/minecraft/client/gui/components/toasts";
import { $EntityModelSet } from "@package/net/minecraft/client/model/geom";
import { $CycleButton$ValueListSupplier, $DebugScreenOverlay, $Tooltip, $AbstractWidget, $AbstractOptionSliderButton } from "@package/net/minecraft/client/gui/components";
import { $Hotbar } from "@package/net/minecraft/client/player/inventory";
import { $TemporalAmount_ } from "@package/java/time/temporal";
import { $CameraWaterOcclusionExtension } from "@package/dev/ryanhcode/sable/mixinterface/water_occlusion";
import { $Screen, $Overlay, $ReceivingLevelScreen$Reason_ } from "@package/net/minecraft/client/gui/screens";
import { $MinecraftClientAccessor } from "@package/net/fabricmc/fabric/mixin/networking/client/accessor";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $KeyMappingsAccessor } from "@package/dev/simulated_team/simulated/mixin/accessor";
import { $DirectoryValidator } from "@package/net/minecraft/world/level/validation";
import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $RecipeCollection } from "@package/net/minecraft/client/gui/screens/recipebook";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $RenderTarget } from "@package/com/mojang/blaze3d/pipeline";
import { $ByteBuffer } from "@package/java/nio";
import { $FormattedCharSequence, $OptionEnum, $FormattedCharSequence_, $StringRepresentable, $FormattedCharSink, $ModCheck, $SignatureValidator } from "@package/net/minecraft/util";
import { $ClientLevel, $ServerData, $ProfileKeyPairManager, $MultiPlayerGameMode, $ClientPacketListener } from "@package/net/minecraft/client/multiplayer";
import { $WorldOpenFlows } from "@package/net/minecraft/client/gui/screens/worldselection";
import { $CrashReport } from "@package/net/minecraft";
import { $SoundSource_, $Music } from "@package/net/minecraft/sounds";
import { $SoundManager, $MusicManager } from "@package/net/minecraft/client/sounds";
import { $Tutorial, $TutorialSteps } from "@package/net/minecraft/client/tutorial";
import { $IMinecraftExtension, $IKeyMappingExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $PackResources, $VanillaPackResources } from "@package/net/minecraft/server/packs";
import { $RecipeBookType_ } from "@package/net/minecraft/world/inventory";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ParticleEngine } from "@package/net/minecraft/client/particle";
import { $ReportEnvironment_, $ReportingContext } from "@package/net/minecraft/client/multiplayer/chat/report";
import { $PlayerModelPart_, $Inventory, $ChatVisiblity } from "@package/net/minecraft/world/entity/player";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $KeyMappingInvoker } from "@package/dev/simulated_team/simulated/mixin/hold_interaction";
import { $LanguageManager } from "@package/net/minecraft/client/resources/language";
import { $MinecraftClientKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Vec3, $Vec3_, $HitResult } from "@package/net/minecraft/world/phys";
import { $MinecraftSessionService, $BanDetails } from "@package/com/mojang/authlib/minecraft";
import { $Gson } from "@package/com/google/gson";
import { $DebugRenderer } from "@package/net/minecraft/client/renderer/debug";
import { $StoringChunkProgressListener } from "@package/net/minecraft/server/level/progress";
import { $Supplier_, $Function, $BiConsumer_, $DoubleFunction_, $BooleanSupplier_, $Supplier, $Consumer_, $IntSupplier_, $ToDoubleFunction_, $IntSupplier, $Function_, $BooleanSupplier } from "@package/java/util/function";
import { $Object2BooleanFunction_ } from "@package/it/unimi/dsi/fastutil/objects";
import { $ClientInformation } from "@package/net/minecraft/server/level";
import { $Path_, $Path } from "@package/java/nio/file";
import { $BlockColors } from "@package/net/minecraft/client/color/block";
import { $BlockEntityRenderDispatcher } from "@package/net/minecraft/client/renderer/blockentity";
import { $Logger } from "@package/org/slf4j";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $WindowEventHandler, $InputConstants$Type_, $InputConstants$Key, $NativeImage, $Window } from "@package/com/mojang/blaze3d/platform";
import { $ClientTelemetryManager } from "@package/net/minecraft/client/telemetry";
import { $QuickPlayLog } from "@package/net/minecraft/client/quickplay";
import { $GuiGraphics, $Gui, $Font, $GuiSpriteManager } from "@package/net/minecraft/client/gui";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $PlayerSocialManager } from "@package/net/minecraft/client/gui/screens/social";
export * as resources from "@package/net/minecraft/client/resources";
export * as renderer from "@package/net/minecraft/client/renderer";
export * as gui from "@package/net/minecraft/client/gui";
export * as particle from "@package/net/minecraft/client/particle";
export * as telemetry from "@package/net/minecraft/client/telemetry";
export * as model from "@package/net/minecraft/client/model";
export * as sounds from "@package/net/minecraft/client/sounds";
export * as animation from "@package/net/minecraft/client/animation";
export * as color from "@package/net/minecraft/client/color";
export * as multiplayer from "@package/net/minecraft/client/multiplayer";
export * as tutorial from "@package/net/minecraft/client/tutorial";
export * as searchtree from "@package/net/minecraft/client/searchtree";
export * as quickplay from "@package/net/minecraft/client/quickplay";
export * as main from "@package/net/minecraft/client/main";
export * as player from "@package/net/minecraft/client/player";
export * as server from "@package/net/minecraft/client/server";
export * as profiling from "@package/net/minecraft/client/profiling";

declare module "@package/net/minecraft/client" {
    export class $MouseHandler implements $MouseHandlerAccessor {
        setup(windowPointer: number): void;
        ypos(): number;
        xpos(): number;
        getXVelocity(): number;
        getYVelocity(): number;
        /**
         * Returns `true` if the mouse is grabbed.
         */
        isLeftPressed(): boolean;
        /**
         * Returns `true` if the mouse is grabbed.
         */
        isMiddlePressed(): boolean;
        /**
         * Returns `true` if the mouse is grabbed.
         */
        isRightPressed(): boolean;
        handler$cpn000$axiom$releaseMouse(ci: $CallbackInfo): void;
        handler$cpn000$axiom$grabMouse(ci: $CallbackInfo): void;
        handler$cpn000$axiom$onTurnPlayer(ci: $CallbackInfo): void;
        handler$cpn000$axiom$isMouseGrabbed(cir: $CallbackInfoReturnable<any>): void;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        setIgnoreFirstMove(): void;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        releaseMouse(): void;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        cursorEntered(): void;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        grabMouse(): void;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        handleAccumulatedMovement(): void;
        /**
         * Returns `true` if the mouse is grabbed.
         */
        isMouseGrabbed(): boolean;
        create$setYPos(movementTime: number): void;
        create$setXPos(movementTime: number): void;
        constructor(minecraft: $Minecraft);
        set up(value: number);
        get XVelocity(): number;
        get YVelocity(): number;
        get leftPressed(): boolean;
        get middlePressed(): boolean;
        get rightPressed(): boolean;
        get mouseGrabbed(): boolean;
    }
    export class $User {
        getName(): string;
        getType(): $User$Type;
        getAccessToken(): string;
        getProfileId(): $UUID;
        getXuid(): (string) | undefined;
        getSessionId(): string;
        getClientId(): (string) | undefined;
        constructor(name: string, uuid: $UUID_, accessToken: string, xuid: (string) | undefined, clientId: (string) | undefined, type: $User$Type_);
        get name(): string;
        get type(): $User$Type;
        get accessToken(): string;
        get profileId(): $UUID;
        get xuid(): (string) | undefined;
        get sessionId(): string;
        get clientId(): (string) | undefined;
    }
    export class $ClientRecipeBook extends $RecipeBook {
        setupCollections(recipes: $Iterable_<$RecipeHolder<never>>, registryAccess: $RegistryAccess): void;
        getCollections(): $List<$RecipeCollection>;
        getCollection(categories: $RecipeBookCategories_): $List<$RecipeCollection>;
        highlight: $Set<$ResourceLocation>;
        known: $Set<$ResourceLocation>;
        constructor();
        get collections(): $List<$RecipeCollection>;
    }
    export class $CloudStatus extends $Enum<$CloudStatus> implements $OptionEnum, $StringRepresentable {
        static values(): $CloudStatus[];
        static valueOf(arg0: string): $CloudStatus;
        getKey(): string;
        getId(): number;
        getSerializedName(): string;
        getCaption(): $Component;
        getRemappedEnumConstantName(): string;
        static FANCY: $CloudStatus;
        static CODEC: $Codec<$CloudStatus>;
        static FAST: $CloudStatus;
        static OFF: $CloudStatus;
        get key(): string;
        get id(): number;
        get serializedName(): string;
        get caption(): $Component;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CloudStatus}.
     */
    export type $CloudStatus_ = "false" | "fast" | "true";
    export class $OptionInstance$OptionInstanceSliderButton<N> extends $AbstractOptionSliderButton {
        applyUnsavedValue(): void;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        options: $Options;
        width: number;
        active: boolean;
        value: number;
        static TEXT_MARGIN: number;
        height: number;
        constructor(options: $Options, x: number, y: number, width: number, height: number, instance: $OptionInstance<N>, values: $OptionInstance$SliderableValueSet<N>, tooltipSupplier: $OptionInstance$TooltipSupplier_<N>, onValueChanged: $Consumer_<N>, applyValueImmediately: boolean);
    }
    export class $HotbarManager {
        get(index: number): $Hotbar;
        save(): void;
        static NUM_HOTBAR_GROUPS: number;
        constructor(gameDirectory: $Path_, fixerUpper: $DataFixer);
    }
    export class $GraphicsStatus extends $Enum<$GraphicsStatus> implements $OptionEnum {
        static values(): $GraphicsStatus[];
        static valueOf(arg0: string): $GraphicsStatus;
        getKey(): string;
        getId(): number;
        static byId(id: number): $GraphicsStatus;
        getCaption(): $Component;
        static FANCY: $GraphicsStatus;
        static FABULOUS: $GraphicsStatus;
        static FAST: $GraphicsStatus;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $GraphicsStatus}.
     */
    export type $GraphicsStatus_ = "fast" | "fancy" | "fabulous";
    export class $InputType extends $Enum<$InputType> {
        static values(): $InputType[];
        static valueOf(arg0: string): $InputType;
        isKeyboard(): boolean;
        isMouse(): boolean;
        static MOUSE: $InputType;
        static KEYBOARD_TAB: $InputType;
        static NONE: $InputType;
        static KEYBOARD_ARROW: $InputType;
        get keyboard(): boolean;
        get mouse(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $InputType}.
     */
    export type $InputType_ = "none" | "mouse" | "keyboard_arrow" | "keyboard_tab";
    export class $AttackIndicatorStatus extends $Enum<$AttackIndicatorStatus> implements $OptionEnum {
        static values(): $AttackIndicatorStatus[];
        static valueOf(arg0: string): $AttackIndicatorStatus;
        getKey(): string;
        getId(): number;
        static byId(id: number): $AttackIndicatorStatus;
        getCaption(): $Component;
        static CROSSHAIR: $AttackIndicatorStatus;
        static HOTBAR: $AttackIndicatorStatus;
        static OFF: $AttackIndicatorStatus;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $AttackIndicatorStatus}.
     */
    export type $AttackIndicatorStatus_ = "off" | "crosshair" | "hotbar";
    export class $OptionInstance$LazyEnum<T> extends $Record implements $OptionInstance$CycleableValueSet<T> {
        values(): $Supplier<$List<T>>;
        validateValue(): $Function<T, (T) | undefined>;
        validateValue(arg0: T): (T) | undefined;
        codec(): $Codec<T>;
        valueListSupplier(): $CycleButton$ValueListSupplier<T>;
        constructor(arg0: $Supplier_<$List<T>>, arg1: $Function_<T, (T) | undefined>, arg2: $Codec<T>);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$LazyEnum}.
     */
    export type $OptionInstance$LazyEnum_<T> = { codec?: $Codec<any>, validateValue?: $Function_<any, (T) | undefined>, values?: $Supplier_<$List<any>>,  } | [codec?: $Codec<any>, validateValue?: $Function_<any, (T) | undefined>, values?: $Supplier_<$List<any>>, ];
    export class $PeriodicNotificationManager$Notification extends $Record {
        message(): string;
        delay(): number;
        period(): number;
        title(): string;
        constructor(delay: number, arg1: number, period: string, arg3: string);
    }
    /**
     * Values that may be interpreted as {@link $PeriodicNotificationManager$Notification}.
     */
    export type $PeriodicNotificationManager$Notification_ = { message?: string, title?: string, period?: number, delay?: number,  } | [message?: string, title?: string, period?: number, delay?: number, ];
    export class $StringSplitter$WidthLimitedCharSink implements $FormattedCharSink {
    }
    export class $GameNarrator$NarratorInitException extends $SilentInitException {
        constructor(arg0: string);
    }
    export class $DeltaTracker {
        static ZERO: $DeltaTracker;
        static ONE: $DeltaTracker;
    }
    export interface $DeltaTracker {
        getGameTimeDeltaPartialTick(runsNormally: boolean): number;
        getGameTimeDeltaTicks(): number;
        getRealtimeDeltaTicks(): number;
        get gameTimeDeltaTicks(): number;
        get realtimeDeltaTicks(): number;
    }
    export class $Screenshot {
        /**
         * Saves a screenshot in the game directory with a time-stamped filename.
         */
        static grab(gameDirectory: $File_, buffer: $RenderTarget, messageConsumer: $Consumer_<$Component>): void;
        static grab(gameDirectory: $File_, screenshotName: string | null, buffer: $RenderTarget, messageConsumer: $Consumer_<$Component>): void;
        addRegion(buffer: $ByteBuffer, width: number, height: number, rowWidth: number, rowHeight: number): void;
        saveRow(): void;
        close(): $File;
        static takeScreenshot(framebuffer: $RenderTarget): $NativeImage;
        static SCREENSHOT_DIR: string;
        constructor(gameDirectory: $File_, width: number, height: number, rowHeight: number);
    }
    export class $OptionInstance$IntRangeBase {
    }
    export interface $OptionInstance$IntRangeBase extends $OptionInstance$SliderableValueSet<number> {
    }
    export class $Options {
        load(arg0: boolean): void;
        /**
         * Send a client info packet with settings information to the server
         */
        load(): void;
        /**
         * Send a client info packet with settings information to the server
         */
        save(): void;
        getFile(): $File;
        hideLightningFlash(): $OptionInstance<boolean>;
        rawMouseInput(): $OptionInstance<boolean>;
        enableVsync(): $OptionInstance<boolean>;
        mipmapLevels(): $OptionInstance<number>;
        framerateLimit(): $OptionInstance<number>;
        static isTrue(value: string): boolean;
        chatLinksPrompt(): $OptionInstance<boolean>;
        setServerRenderDistance(serverRenderDistance: number): void;
        gamma(): $OptionInstance<number>;
        autoJump(): $OptionInstance<boolean>;
        chatLinks(): $OptionInstance<boolean>;
        forceUnicodeFont(): $OptionInstance<boolean>;
        graphicsMode(): $OptionInstance<$GraphicsStatus>;
        cloudStatus(): $OptionInstance<$CloudStatus>;
        biomeBlendRadius(): $OptionInstance<number>;
        getSoundSourceOptionInstance(soundSource: $SoundSource_): $OptionInstance<number>;
        getMenuBackgroundBlurriness(): number;
        handler$cpp000$axiom$getCameraType(cir: $CallbackInfoReturnable<any>): void;
        static isFalse(value: string): boolean;
        notificationDisplayTime(): $OptionInstance<number>;
        chatColors(): $OptionInstance<boolean>;
        mainHand(): $OptionInstance<$HumanoidArm>;
        setKey(keyBinding: $KeyMapping, input: $InputConstants$Key): void;
        menuBackgroundBlurriness(): $OptionInstance<number>;
        /**
         * Send a client info packet with settings information to the server
         */
        onboardingAccessibilityFinished(): void;
        simulationDistance(): $OptionInstance<number>;
        getBackgroundOpacity(opacity: number): number;
        buildPlayerInformation(): $ClientInformation;
        prioritizeChunkUpdates(): $OptionInstance<$PrioritizeChunkUpdates>;
        darknessEffectScale(): $OptionInstance<number>;
        getSoundSourceVolume(category: $SoundSource_): number;
        discreteMouseScroll(): $OptionInstance<boolean>;
        updateResourcePacks(resourcePackList: $PackRepository): void;
        entityDistanceScaling(): $OptionInstance<number>;
        backgroundForChatOnly(): $OptionInstance<boolean>;
        japaneseGlyphVariants(): $OptionInstance<boolean>;
        showAutosaveIndicator(): $OptionInstance<boolean>;
        chatHeightUnfocused(): $OptionInstance<number>;
        mouseWheelSensitivity(): $OptionInstance<number>;
        realmsNotifications(): $OptionInstance<boolean>;
        static genericValueOrOffLabel(text: $Component_, value: number): $Component;
        getBackgroundColor(chatColor: number): number;
        getBackgroundColor(opacity: number): number;
        darkMojangStudiosBackground(): $OptionInstance<boolean>;
        fov(): $OptionInstance<number>;
        chatScale(): $OptionInstance<number>;
        chatWidth(): $OptionInstance<number>;
        bobView(): $OptionInstance<boolean>;
        glintSpeed(): $OptionInstance<number>;
        glintStrength(): $OptionInstance<number>;
        particles(): $OptionInstance<$ParticleStatus>;
        guiScale(): $OptionInstance<number>;
        narrator(): $OptionInstance<$NarratorStatus>;
        fullscreen(): $OptionInstance<boolean>;
        chatDelay(): $OptionInstance<number>;
        loadSelectedResourcePacks(resourcePackList: $PackRepository): void;
        chatOpacity(): $OptionInstance<number>;
        dumpOptionsForReport(): string;
        telemetryOptInExtra(): $OptionInstance<boolean>;
        touchscreen(): $OptionInstance<boolean>;
        narratorHotkey(): $OptionInstance<boolean>;
        /**
         * Returns `true` if the client connect to a server using the native transport system.
         */
        useNativeTransport(): boolean;
        chatLineSpacing(): $OptionInstance<number>;
        panoramaSpeed(): $OptionInstance<number>;
        sensitivity(): $OptionInstance<number>;
        highContrast(): $OptionInstance<boolean>;
        chatHeightFocused(): $OptionInstance<number>;
        attackIndicator(): $OptionInstance<$AttackIndicatorStatus>;
        directionalAudio(): $OptionInstance<boolean>;
        onlyShowSecureChat(): $OptionInstance<boolean>;
        hideMatchedNames(): $OptionInstance<boolean>;
        fovEffectScale(): $OptionInstance<number>;
        invertYMouse(): $OptionInstance<boolean>;
        toggleCrouch(): $OptionInstance<boolean>;
        toggleSprint(): $OptionInstance<boolean>;
        soundDevice(): $OptionInstance<string>;
        damageTiltStrength(): $OptionInstance<number>;
        screenEffectScale(): $OptionInstance<number>;
        allowServerListing(): $OptionInstance<boolean>;
        autoSuggestions(): $OptionInstance<boolean>;
        showSubtitles(): $OptionInstance<boolean>;
        entityShadows(): $OptionInstance<boolean>;
        isModelPartEnabled(playerModelPart: $PlayerModelPart_): boolean;
        static genericValueLabel(text: $Component_, value: number): $Component;
        static genericValueLabel(text: $Component_, value: $Component_): $Component;
        /**
         * Send a client info packet with settings information to the server
         */
        broadcastOptions(): void;
        getCloudsType(): $CloudStatus;
        toggleModelPart(modelPart: $PlayerModelPart_, enable: boolean): void;
        hideSplashTexts(): $OptionInstance<boolean>;
        operatorItemsTab(): $OptionInstance<boolean>;
        reducedDebugInfo(): $OptionInstance<boolean>;
        renderDistance(): $OptionInstance<number>;
        chatVisibility(): $OptionInstance<$ChatVisiblity>;
        ambientOcclusion(): $OptionInstance<boolean>;
        getCameraType(): $CameraType;
        setCameraType(pointOfView: $CameraType_): void;
        getEffectiveRenderDistance(): number;
        textBackgroundOpacity(): $OptionInstance<number>;
        tutorialStep: $TutorialSteps;
        static RENDER_DISTANCE_REALLY_FAR: number;
        static DEFAULT_SOUND_DEVICE: string;
        keyChat: $KeyMapping;
        resourcePacks: $List<string>;
        keyInventory: $KeyMapping;
        keyCommand: $KeyMapping;
        keySwapOffhand: $KeyMapping;
        keyHotbarSlots: $KeyMapping[];
        keySpectatorOutlines: $KeyMapping;
        static RENDER_DISTANCE_NORMAL: number;
        keySprint: $KeyMapping;
        keyAdvancements: $KeyMapping;
        static RENDER_DISTANCE_EXTREME: number;
        keySaveHotbarActivator: $KeyMapping;
        advancedItemTooltips: boolean;
        fullscreenVideoModeString: string;
        keyFullscreen: $KeyMapping;
        incompatibleResourcePacks: $List<string>;
        languageCode: string;
        static RENDER_DISTANCE_SHORT: number;
        keyDrop: $KeyMapping;
        overrideHeight: number;
        static LOGGER: $Logger;
        keyMappings: $KeyMapping[];
        minecraft: $Minecraft;
        keyAttack: $KeyMapping;
        skipMultiplayerWarning: boolean;
        static RENDER_DISTANCE_FAR: number;
        keyUp: $KeyMapping;
        keyJump: $KeyMapping;
        keyLoadHotbarActivator: $KeyMapping;
        onboardAccessibility: boolean;
        keyShift: $KeyMapping;
        smoothCamera: boolean;
        keyScreenshot: $KeyMapping;
        static AUTO_GUI_SCALE: number;
        keyTogglePerspective: $KeyMapping;
        keySocialInteractions: $KeyMapping;
        pauseOnLostFocus: boolean;
        keyRight: $KeyMapping;
        lastMpIp: string;
        syncWrites: boolean;
        keySmoothCamera: $KeyMapping;
        overrideWidth: number;
        keyLeft: $KeyMapping;
        static GSON: $Gson;
        hideServerAddress: boolean;
        glDebugVerbosity: number;
        static RENDER_DISTANCE_TINY: number;
        keyPlayerList: $KeyMapping;
        static UNLIMITED_FRAMERATE_CUTOFF: number;
        joinedFirstServer: boolean;
        hideBundleTutorial: boolean;
        keyUse: $KeyMapping;
        keyPickItem: $KeyMapping;
        keyDown: $KeyMapping;
        hideGui: boolean;
        constructor(minecraft: $Minecraft, gameDirectory: $File_);
        get file(): $File;
        set serverRenderDistance(value: number);
        get cloudsType(): $CloudStatus;
        get effectiveRenderDistance(): number;
    }
    export class $ResourceLoadStateTracker$ReloadState {
    }
    export class $OptionInstance$IntRange extends $Record implements $OptionInstance$IntRangeBase {
        validateValue(value: number): (number) | undefined;
        codec(): $Codec<number>;
        applyValueImmediately(): boolean;
        minInclusive(): number;
        maxInclusive(): number;
        constructor(minInclusive: number, maxInclusive: number);
        constructor(arg0: number, arg1: number, arg2: boolean);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$IntRange}.
     */
    export type $OptionInstance$IntRange_ = { minInclusive?: number, applyValueImmediately?: boolean, maxInclusive?: number,  } | [minInclusive?: number, applyValueImmediately?: boolean, maxInclusive?: number, ];
    export class $ToggleKeyMapping extends $KeyMapping {
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        reset(): void;
        static CATEGORY_INTERFACE: string;
        static CATEGORY_MULTIPLAYER: string;
        static CATEGORY_CREATIVE: string;
        static CATEGORY_MOVEMENT: string;
        static CATEGORY_GAMEPLAY: string;
        static CATEGORY_MISC: string;
        key: $InputConstants$Key;
        static CATEGORY_INVENTORY: string;
        constructor(name: string, keyCode: number, category: string, needsToggle: $BooleanSupplier_);
    }
    export class $PrioritizeChunkUpdates extends $Enum<$PrioritizeChunkUpdates> implements $OptionEnum {
        static values(): $PrioritizeChunkUpdates[];
        static valueOf(arg0: string): $PrioritizeChunkUpdates;
        getKey(): string;
        getId(): number;
        static byId(id: number): $PrioritizeChunkUpdates;
        getCaption(): $Component;
        static NEARBY: $PrioritizeChunkUpdates;
        static NONE: $PrioritizeChunkUpdates;
        static PLAYER_AFFECTED: $PrioritizeChunkUpdates;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $PrioritizeChunkUpdates}.
     */
    export type $PrioritizeChunkUpdates_ = "none" | "player_affected" | "nearby";
    export class $OptionInstance$UnitDouble extends $Enum<$OptionInstance$UnitDouble> implements $OptionInstance$SliderableValueSet<number> {
        static values(): $OptionInstance$UnitDouble[];
        static valueOf(arg0: string): $OptionInstance$UnitDouble;
        validateValue(value: number): (number) | undefined;
        codec(): $Codec<number>;
        xmap<R>(encoder: $DoubleFunction_<R>, decoder: $ToDoubleFunction_<R>): $OptionInstance$SliderableValueSet<R>;
        fromSliderValue(value: number): $Object;
        toSliderValue(value: number): number;
        static INSTANCE: $OptionInstance$UnitDouble;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$UnitDouble}.
     */
    export type $OptionInstance$UnitDouble_ = "instance";
    export class $DeltaTracker$Timer implements $DeltaTracker, $TimerAccessor$1, $TimerAccessor {
        updatePauseState(frozen: boolean): void;
        advanceTime(time: number, arg1: boolean): number;
        updateFrozenState(frozen: boolean): void;
        getGameTimeDeltaPartialTick(runsNormally: boolean): number;
        getGameTimeDeltaTicks(): number;
        getRealtimeDeltaTicks(): number;
        catnip$getDeltaTickResidual(): number;
        getDeltaTickResidual(): number;
        constructor(ticksPerSecond: number, time: number, arg2: $FloatUnaryOperator_);
        get gameTimeDeltaTicks(): number;
        get realtimeDeltaTicks(): number;
        get deltaTickResidual(): number;
    }
    export class $CameraType extends $Enum<$CameraType> {
        static values(): $CameraType[];
        static valueOf(arg0: string): $CameraType;
        isMirrored(): boolean;
        cycle(): $CameraType;
        isFirstPerson(): boolean;
        static THIRD_PERSON_BACK: $CameraType;
        static THIRD_PERSON_FRONT: $CameraType;
        static FIRST_PERSON: $CameraType;
        get mirrored(): boolean;
        get firstPerson(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CameraType}.
     */
    export type $CameraType_ = "first_person" | "third_person_back" | "third_person_front" | "sub_level_view" | "sub_level_view_unlocked";
    export class $GuiMessage$Line extends $Record {
        tag(): $GuiMessageTag;
        content(): $FormattedCharSequence;
        addedTime(): number;
        endOfEntry(): boolean;
        constructor(arg0: number, arg1: $FormattedCharSequence_, arg2: $GuiMessageTag_ | null, arg3: boolean);
    }
    /**
     * Values that may be interpreted as {@link $GuiMessage$Line}.
     */
    export type $GuiMessage$Line_ = { endOfEntry?: boolean, content?: $FormattedCharSequence_, tag?: $GuiMessageTag_, addedTime?: number,  } | [endOfEntry?: boolean, content?: $FormattedCharSequence_, tag?: $GuiMessageTag_, addedTime?: number, ];
    export class $GameNarrator {
        clear(): void;
        destroy(): void;
        isActive(): boolean;
        checkStatus(narratorEnabled: boolean): void;
        sayChat(message: $Component_): void;
        say(message: $Component_): void;
        updateNarratorStatus(status: $NarratorStatus_): void;
        sayNow(message: $Component_): void;
        sayNow(message: string): void;
        static NO_TITLE: $Component;
        constructor(minecraft: $Minecraft);
        get active(): boolean;
    }
    export class $OptionInstance$ClampingLazyMaxIntRange extends $Record implements $OptionInstance$IntRangeBase, $OptionInstance$SliderableOrCyclableValueSet<number> {
        validateValue(value: number): (number) | undefined;
        encodableMaxInclusive(): number;
        codec(): $Codec<number>;
        minInclusive(): number;
        maxInclusive(): number;
        maxSupplier(): $IntSupplier;
        createCycleButton(): boolean;
        valueListSupplier(): $CycleButton$ValueListSupplier<number>;
        constructor(arg0: number, arg1: $IntSupplier_, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$ClampingLazyMaxIntRange}.
     */
    export type $OptionInstance$ClampingLazyMaxIntRange_ = { maxSupplier?: $IntSupplier_, encodableMaxInclusive?: number, minInclusive?: number,  } | [maxSupplier?: $IntSupplier_, encodableMaxInclusive?: number, minInclusive?: number, ];
    export class $OptionInstance$SliderableValueSet<T> {
    }
    export interface $OptionInstance$SliderableValueSet<T> extends $OptionInstance$ValueSet<T> {
    }
    export class $GuiMessageTag extends $Record {
        static system(): $GuiMessageTag;
        text(): $Component;
        icon(): $GuiMessageTag$Icon;
        static chatError(): $GuiMessageTag;
        logTag(): string;
        indicatorColor(): number;
        static systemSinglePlayer(): $GuiMessageTag;
        static chatModified(originalText: string): $GuiMessageTag;
        static chatNotSecure(): $GuiMessageTag;
        constructor(arg0: number, arg1: $GuiMessageTag$Icon_ | null, arg2: $Component_ | null, arg3: string | null);
    }
    /**
     * Values that may be interpreted as {@link $GuiMessageTag}.
     */
    export type $GuiMessageTag_ = { icon?: $GuiMessageTag$Icon_, indicatorColor?: number, text?: $Component_, logTag?: string,  } | [icon?: $GuiMessageTag$Icon_, indicatorColor?: number, text?: $Component_, logTag?: string, ];
    export class $Options$OptionAccess {
    }
    export interface $Options$OptionAccess {
    }
    /**
     * Values that may be interpreted as {@link $Options$OptionAccess}.
     */
    export type $Options$OptionAccess_ = (() => void);
    export class $PeriodicNotificationManager extends $SimplePreparableReloadListener<$Map<string, $List<$PeriodicNotificationManager$Notification>>> implements $AutoCloseable {
        apply(object: $Map_<string, $List_<$PeriodicNotificationManager$Notification_>>, resourceManager: $ResourceManager, profiler: $ProfilerFiller): void;
        close(): void;
        constructor(notifications: $ResourceLocation_, selector: $Object2BooleanFunction_<string>);
    }
    export class $GuiMessage extends $Record {
        signature(): $MessageSignature;
        tag(): $GuiMessageTag;
        content(): $Component;
        icon(): $GuiMessageTag$Icon;
        addedTime(): number;
        constructor(arg0: number, arg1: $Component_, arg2: $MessageSignature_ | null, arg3: $GuiMessageTag_ | null);
    }
    /**
     * Values that may be interpreted as {@link $GuiMessage}.
     */
    export type $GuiMessage_ = { signature?: $MessageSignature_, content?: $Component_, tag?: $GuiMessageTag_, addedTime?: number,  } | [signature?: $MessageSignature_, content?: $Component_, tag?: $GuiMessageTag_, addedTime?: number, ];
    export class $RecipeBookCategories extends $Enum<$RecipeBookCategories> implements $IExtensibleEnum, $RecipeBookCategoriesAccessor {
        static values(): $RecipeBookCategories[];
        static valueOf(arg0: string): $RecipeBookCategories;
        getIconItems(): $List<$ItemStack>;
        static getExtensionInfo(): $ExtensionInfo;
        static getCategories(recipeBookType: $RecipeBookType_): $List<$RecipeBookCategories>;
        static setAGGREGATE_CATEGORIES$connector_$md$961d4f$0(arg0: $Map_<any, any>): void;
        static CRAFTING_EQUIPMENT: $RecipeBookCategories;
        static BLAST_FURNACE_BLOCKS: $RecipeBookCategories;
        static BLAST_FURNACE_CATEGORIES: $List<$RecipeBookCategories>;
        static CRAFTING_REDSTONE: $RecipeBookCategories;
        static CRAFTING_MISC: $RecipeBookCategories;
        static CAMPFIRE: $RecipeBookCategories;
        static FURNACE_CATEGORIES: $List<$RecipeBookCategories>;
        static CRAFTING_CATEGORIES: $List<$RecipeBookCategories>;
        static SMITHING: $RecipeBookCategories;
        static FURNACE_FOOD: $RecipeBookCategories;
        static CRAFTING_SEARCH: $RecipeBookCategories;
        static BLAST_FURNACE_MISC: $RecipeBookCategories;
        static SMOKER_FOOD: $RecipeBookCategories;
        static CRAFTING_BUILDING_BLOCKS: $RecipeBookCategories;
        static SMOKER_CATEGORIES: $List<$RecipeBookCategories>;
        static FURNACE_BLOCKS: $RecipeBookCategories;
        static SMOKER_SEARCH: $RecipeBookCategories;
        static STONECUTTER: $RecipeBookCategories;
        static FURNACE_SEARCH: $RecipeBookCategories;
        static BLAST_FURNACE_SEARCH: $RecipeBookCategories;
        static UNKNOWN: $RecipeBookCategories;
        static FURNACE_MISC: $RecipeBookCategories;
        static AGGREGATE_CATEGORIES: $Map<$RecipeBookCategories, $List<$RecipeBookCategories>>;
        get iconItems(): $List<$ItemStack>;
        static get extensionInfo(): $ExtensionInfo;
        static set AGGREGATE_CATEGORIES$connector_$md$961d4f$0(value: $Map_<any, any>);
    }
    /**
     * Values that may be interpreted as {@link $RecipeBookCategories}.
     */
    export type $RecipeBookCategories_ = "crafting_search" | "crafting_building_blocks" | "crafting_redstone" | "crafting_equipment" | "crafting_misc" | "furnace_search" | "furnace_food" | "furnace_blocks" | "furnace_misc" | "blast_furnace_search" | "blast_furnace_blocks" | "blast_furnace_misc" | "smoker_search" | "smoker_food" | "stonecutter" | "smithing" | "campfire" | "unknown";
    export class $OptionInstance$Enum<T> extends $Record implements $OptionInstance$CycleableValueSet<T> {
        values(): $List<T>;
        validateValue(arg0: T): (T) | undefined;
        codec(): $Codec<T>;
        valueListSupplier(): $CycleButton$ValueListSupplier<T>;
        constructor(arg0: $List_<T>, arg1: $Codec<T>);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$Enum}.
     */
    export type $OptionInstance$Enum_<T> = { codec?: $Codec<any>, values?: $List_<any>,  } | [codec?: $Codec<any>, values?: $List_<any>, ];
    export class $OptionInstance$TooltipSupplier<T> {
    }
    export interface $OptionInstance$TooltipSupplier<T> {
        apply(value: T): $Tooltip;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$TooltipSupplier}.
     */
    export type $OptionInstance$TooltipSupplier_<T> = ((arg0: T) => $Tooltip);
    export class $CommandHistory {
        addCommand(command: string): void;
        history(): $Collection<string>;
        constructor(path: $Path_);
    }
    export class $Camera implements $CameraZoomExtension, $CameraWaterOcclusionExtension {
        getYRot(): number;
        getXRot(): number;
        reset(): void;
        setup(level: $BlockGetter, entity: $Entity, detached: boolean, thirdPersonReverse: boolean, partialTick: number): void;
        move(zoom: number, dy: number, dx: number): void;
        tick(): void;
        getPosition(): $Vec3;
        getBlockAtCamera(): $BlockState;
        getLeftVector(): $Vector3f;
        getNearPlane(): $Camera$NearPlane;
        getLookVector(): $Vector3f;
        handler$boa000$sable$getFluidInCamera(arg0: $CallbackInfoReturnable<any>): void;
        handler$bpn001$sable$getFluidInCamera(arg0: $CallbackInfoReturnable<any>): void;
        sable$isOccluded(): boolean;
        sable$getZoomAmount(): number;
        setPosition(pos: $Vec3_): void;
        /**
         * Sets the position and blockpos of the active render
         */
        setPosition(x: number, arg1: number, y: number): void;
        getEntity(): $Entity;
        getRoll(): number;
        isInitialized(): boolean;
        sable$setIgnoreOcclusion(arg0: boolean): void;
        sable$isIgnoreOcclusion(): boolean;
        isDetached(): boolean;
        getUpVector(): $Vector3f;
        getBlockPosition(): $BlockPos;
        getFluidInCamera(): $FogType;
        getPartialTickTime(): number;
        rotation(): $Quaternionf;
        sable$setZoomAmount(arg0: number): void;
        handler$ceo000$sable$rotateView(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfo): void;
        handler$coo000$axiom$getMaxZoom(d: number, cir: $CallbackInfoReturnable<any>): void;
        /**
         * @deprecated
         */
        setRotation(yRot: number, xRot: number): void;
        setRotation(zoom: number, dy: number, dx: number): void;
        eyeHeightOld: number;
        static FOG_DISTANCE_SCALE: number;
        eyeHeight: number;
        static $assertionsDisabled: boolean;
        constructor();
        get YRot(): number;
        get XRot(): number;
        get blockAtCamera(): $BlockState;
        get leftVector(): $Vector3f;
        get nearPlane(): $Camera$NearPlane;
        get lookVector(): $Vector3f;
        get entity(): $Entity;
        get roll(): number;
        get initialized(): boolean;
        get detached(): boolean;
        get upVector(): $Vector3f;
        get blockPosition(): $BlockPos;
        get fluidInCamera(): $FogType;
        get partialTickTime(): number;
    }
    export class $StringSplitter$LinePosConsumer {
    }
    export interface $StringSplitter$LinePosConsumer {
        accept(style: $Style, currentPos: number, contentWidth: number): void;
    }
    /**
     * Values that may be interpreted as {@link $StringSplitter$LinePosConsumer}.
     */
    export type $StringSplitter$LinePosConsumer_ = ((arg0: $Style, arg1: number, arg2: number) => void);
    export class $User$Type extends $Enum<$User$Type> {
        getName(): string;
        static values(): $User$Type[];
        static valueOf(typeName: string): $User$Type;
        static byName(typeName: string): $User$Type;
        static MOJANG: $User$Type;
        static LEGACY: $User$Type;
        static MSA: $User$Type;
    }
    /**
     * Values that may be interpreted as {@link $User$Type}.
     */
    export type $User$Type_ = "legacy" | "mojang" | "msa";
    export class $Minecraft$GameLoadCookie extends $Record {
        realmsClient(): $RealmsClient;
        quickPlayData(): $GameConfig$QuickPlayData;
        constructor(realmsClient: $RealmsClient, quickPlayData: $GameConfig$QuickPlayData_);
    }
    /**
     * Values that may be interpreted as {@link $Minecraft$GameLoadCookie}.
     */
    export type $Minecraft$GameLoadCookie_ = { quickPlayData?: $GameConfig$QuickPlayData_, realmsClient?: $RealmsClient,  } | [quickPlayData?: $GameConfig$QuickPlayData_, realmsClient?: $RealmsClient, ];
    export class $OptionInstance<T> {
        get(): T;
        values(): $OptionInstance$ValueSet<T>;
        set(value: T): void;
        codec(): $Codec<T>;
        static cachedConstantTooltip<T>(message: $Component_): $OptionInstance$TooltipSupplier<T>;
        static createBoolean(key: string, initialValue: boolean, onValueUpdate: $Consumer_<boolean>): $OptionInstance<boolean>;
        static createBoolean(key: string, initialValue: boolean): $OptionInstance<boolean>;
        static createBoolean(caption: string, tooltip: $OptionInstance$TooltipSupplier_<boolean>, initialValue: boolean, onValueUpdate: $Consumer_<boolean>): $OptionInstance<boolean>;
        static createBoolean(caption: string, tooltip: $OptionInstance$TooltipSupplier_<boolean>, initialValue: boolean): $OptionInstance<boolean>;
        static createBoolean(caption: string, tooltip: $OptionInstance$TooltipSupplier_<boolean>, valueStringifier: $OptionInstance$CaptionBasedToString_<boolean>, initialValue: boolean, onValueUpdate: $Consumer_<boolean>): $OptionInstance<boolean>;
        static noTooltip<T>(): $OptionInstance$TooltipSupplier<T>;
        createButton(options: $Options): $AbstractWidget;
        createButton(options: $Options, x: number, y: number, width: number, onValueChanged: $Consumer_<T>): $AbstractWidget;
        createButton(options: $Options, x: number, y: number, width: number): $AbstractWidget;
        static forOptionEnum<T extends $OptionEnum>(): $OptionInstance$CaptionBasedToString<T>;
        caption: $Component;
        static BOOLEAN_VALUES: $OptionInstance$Enum<boolean>;
        value: T;
        static BOOLEAN_TO_STRING: $OptionInstance$CaptionBasedToString<boolean>;
        constructor(caption: string, tooltip: $OptionInstance$TooltipSupplier_<T>, valueStringifier: $OptionInstance$CaptionBasedToString_<T>, values: $OptionInstance$ValueSet<T>, initialValue: T, onValueUpdate: $Consumer_<T>);
        constructor(caption: string, tooltip: $OptionInstance$TooltipSupplier_<T>, valueStringifier: $OptionInstance$CaptionBasedToString_<T>, values: $OptionInstance$ValueSet<T>, codec: $Codec<T>, initialValue: T, onValueUpdate: $Consumer_<T>);
    }
    export class $StringSplitter$LineComponent implements $FormattedText {
        /**
         * Get the plain text of this FormattedText, without any styling or formatting codes.
         */
        getString(): string;
        get string(): string;
    }
    export class $Minecraft extends $ReentrantBlockableEventLoop<$Runnable> implements $WindowEventHandler, $IMinecraftExtension, $MinecraftClientKJS, $MinecraftAccessor, $MinecraftClientAccessor, $MinecraftExt {
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isPaused(): boolean;
        getOverlay(): $Overlay;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        run(): void;
        /**
         * Return the singleton Minecraft instance for the game
         */
        static getInstance(): $Minecraft;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        stop(): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        destroy(): void;
        setLevel(level: $ClientLevel, reason: $ReceivingLevelScreen$Reason_): void;
        disconnect(nextScreen: $Screen, keepResourcePacks: boolean): void;
        disconnect(nextScreen: $Screen): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        disconnect(): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        tick(): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        resizeDisplay(): void;
        setWindowActive(leftClick: boolean): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        updateFontOptions(): void;
        getBlockRenderer(): $BlockRenderDispatcher;
        setScreen(nextScreen: $Screen | null): void;
        getUser(): $User;
        handler$cnn000$fabric_events_interaction_v0$cancelItemPick(arg0: $CallbackInfo): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isLocalServer(): boolean;
        realmsDataFetcher(): $RealmsDataFetcher;
        quickPlayLog(): $QuickPlayLog;
        getProxy(): $Proxy;
        wrapWithCondition$cpl000$axiom$handleKeybindsSendPacket(instance: $ClientPacketListener, packet: $Packet<any>): boolean;
        wrapOperation$cpl000$axiom$handleKeybinds_setScreen(instance: $Minecraft, screen: $Screen, original: $Operation_<any>): void;
        renderBuffers(): $RenderBuffers;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        allowsMultiplayer(): boolean;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        getLaunchedVersion(): string;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        updateTitle(): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isEnforceUnicode(): boolean;
        static checkModStatus(): $ModCheck;
        getModelManager(): $ModelManager;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isGameLoadFinished(): boolean;
        delayCrashRaw(report: $CrashReport): void;
        multiplayerBan(): $BanDetails;
        getCurrentServer(): $ServerData;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        getVersionType(): string;
        getDebugOverlay(): $DebugScreenOverlay;
        handler$cpl000$axiom$setLevel(ci: $CallbackInfo): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        clearDownloadedResourcePacks(): void;
        handler$cpm000$axiom$pickBlock(ci: $CallbackInfo): void;
        handler$cpl000$axiom$startAttack(ci: $CallbackInfoReturnable<any>): void;
        handler$cpl000$axiom$startUseItem(ci: $CallbackInfo): void;
        handler$cpl000$axiom$onRightClick(ci: $CallbackInfo): void;
        getProfiler(): $ProfilerFiller;
        /**
         * Returns the save loader that is currently being used
         */
        getLevelSource(): $LevelStorageSource;
        getChatStatus(): $Minecraft$ChatStatus;
        setLastInputType(lastInputType: $InputType_): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        cursorEntered(): void;
        getFrameTimeNs(): number;
        getWindow(): $Window;
        setOverlay(loadingGui: $Overlay | null): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isRunning(): boolean;
        getTextureManager(): $TextureManager;
        /**
         * Return the musicTicker's instance
         */
        getMusicManager(): $MusicManager;
        getGuiSprites(): $GuiSpriteManager;
        getItemRenderer(): $ItemRenderer;
        static crash(minecraft: $Minecraft | null, gameDirectory: $File_, crashReport: $CrashReport): void;
        getTimer(): $DeltaTracker;
        handler$cpl000$axiom$afterMainBlit(ci: $CallbackInfo): void;
        handler$zlb000$veil$endFrame(arg0: $CallbackInfo): void;
        handler$cpl000$axiom$setScreen(screen: $Screen, ci: $CallbackInfo): void;
        handler$cpl000$axiom$resizeDisplay(ci: $CallbackInfo): void;
        handler$zlb000$veil$beginFrame(arg0: $CallbackInfo): void;
        commandHistory(): $CommandHistory;
        directoryValidator(): $DirectoryValidator;
        getFps(): number;
        pauseGame(leftClick: boolean): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isDemo(): boolean;
        isBlocked(playerUUID: $UUID_): boolean;
        getToasts(): $ToastComponent;
        delayCrash(report: $CrashReport): void;
        /**
         * Adds core server Info (GL version, Texture pack, isModded, type), and the worldInfo to the crash report.
         */
        fillReport(theCrash: $CrashReport): $CrashReport;
        static fillReport(minecraft: $Minecraft | null, languageManager: $LanguageManager | null, launchVersion: string, options: $Options | null, report: $CrashReport): void;
        getVanillaPackResources(): $VanillaPackResources;
        handler$cpl000$axiom$getMainRenderTarget(cir: $CallbackInfoReturnable<any>): void;
        handler$cla000$transition$fillReport(theCrash: $CrashReport, ci: $CallbackInfoReturnable<any>): void;
        handler$cpl000$axiom$handleKeyboards(ci: $CallbackInfo): void;
        redirect$cpl000$axiom$updateSelectedSlot(instance: $Inventory, value: number): void;
        handler$cpl000$axiom$pickBlockInfinite(ci: $CallbackInfo): void;
        handler$bml000$sable$postCycleCameraType(arg0: $CallbackInfo): void;
        handler$cpl000$axiom$continueAttack(attacking: boolean, ci: $CallbackInfo): void;
        getMainRenderTarget(): $RenderTarget;
        debugClientMetricsStart(logger: $Consumer_<$Component>): boolean;
        /**
         * Returns the currently running integrated server
         */
        getSingleplayerServer(): $IntegratedServer;
        reloadResourcePacks(): $CompletableFuture<void>;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        hasSingleplayerServer(): boolean;
        clearResourcePacksOnError(throwable: $Throwable, errorMessage: $Component_ | null, gameLoadCookie: $Minecraft$GameLoadCookie_ | null): void;
        getEntityRenderDispatcher(): $EntityRenderDispatcher;
        handler$zmd002$veil$close(arg0: $CallbackInfo): void;
        emergencySaveAndCrash(report: $CrashReport): void;
        updateReportEnvironment(reportEnvironment: $ReportEnvironment_): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        telemetryOptInExtra(): boolean;
        /**
         * Update debugProfilerName in response to number keys in debug screen
         */
        debugFpsMeterKeyPress(keyCount: number): void;
        createWorldOpenFlows(): $WorldOpenFlows;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        extraTelemetryAvailable(): boolean;
        getTelemetryManager(): $ClientTelemetryManager;
        getProfileKeyPairManager(): $ProfileKeyPairManager;
        getProfileKeySignatureValidator(): $SignatureValidator;
        getBlockEntityRenderDispatcher(): $BlockEntityRenderDispatcher;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        getTitle(): string;
        getChatListener(): $ChatListener;
        getSoundManager(): $SoundManager;
        getItemColors(): $ItemColors;
        getLastInputType(): $InputType;
        getFixerUpper(): $DataFixer;
        getSplashManager(): $SplashManager;
        setCameraEntity(viewingEntity: $Entity): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isWindowActive(): boolean;
        getNarrator(): $GameNarrator;
        getHotbarManager(): $HotbarManager;
        getBlockColors(): $BlockColors;
        getTextureAtlas(location: $ResourceLocation_): $Function<$ResourceLocation, $TextureAtlasSprite>;
        getSkinManager(): $SkinManager;
        getTutorial(): $Tutorial;
        /**
         * Update debugProfilerName in response to number keys in debug screen
         */
        updateMaxMipLevel(keyCount: number): void;
        getEntityModels(): $EntityModelSet;
        delayTextureReload(): $CompletableFuture<void>;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        static useFancyGraphics(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        allowsRealms(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isSingleplayer(): boolean;
        getResourceManager(): $ResourceManager;
        isLocalPlayer(playerUUID: $UUID_): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        static renderNames(): boolean;
        getGameProfile(): $GameProfile;
        getLanguageManager(): $LanguageManager;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isNameBanned(): boolean;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        static getLauncherBrand(): string;
        localvar$cnn000$fabric_events_interaction_v0$modifyItemPick(arg0: $ItemStack_): $ItemStack;
        clearClientLevel(nextScreen: $Screen): void;
        doWorldLoad(levelStorage: $LevelStorageSource$LevelStorageAccess, packRepository: $PackRepository, worldStem: $WorldStem_, newWorld: boolean): void;
        getCameraEntity(): $Entity;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        allowsTelemetry(): boolean;
        forceSetScreen(nextScreen: $Screen): void;
        getGpuUtilization(): number;
        /**
         * Update debugProfilerName in response to number keys in debug screen
         */
        axiom$setRightClickDelay(keyCount: number): void;
        getMapDecorationTextures(): $MapDecorationTextureManager;
        getPlayerSocialManager(): $PlayerSocialManager;
        axiom$getRightClickDelay(): number;
        axiom$addCustomNbtData(stack: $ItemStack_, blockEntity: $BlockEntity, registryAccess: $RegistryAccess): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isTextFilteringEnabled(): boolean;
        axiom$pushMainRenderTarget(renderTarget: $RenderTarget): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        canValidateProfileKeys(): boolean;
        getProgressListener(): $StoringChunkProgressListener;
        getReportingContext(): $ReportingContext;
        grabPanoramixScreenshot(gameDirectory: $File_, width: number, height: number): $Component;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        axiom$popMainRenderTarget(): void;
        getScheduledEvents(): $ScheduledEvents;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        prepareForMultiplayer(): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        static useAmbientOcclusion(): boolean;
        getResourcePackRepository(): $PackRepository;
        getMinecraftSessionService(): $MinecraftSessionService;
        shouldEntityAppearGlowing(entity: $Entity): boolean;
        getSituationalMusic(): $Music;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        showOnlyReducedInfo(): boolean;
        /**
         * Gets the sprite uploader used for potions.
         */
        getMobEffectTextures(): $MobEffectTextureManager;
        /**
         * Gets the sprite uploader used for paintings.
         */
        getPaintingTextures(): $PaintingTextureManager;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        static useShaderTransparency(): boolean;
        getDownloadedPackSource(): $DownloadedPackSource;
        getResourcePackDirectory(): $Path;
        getGpuWarnlistManager(): $GpuWarnlistManager;
        /**
         * Retrieves the `Locale` set by the player.
         * Useful for creating string and number formatters.
         */
        getLocale(): $Locale;
        pushGuiLayer(nextScreen: $Screen): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        popGuiLayer(): void;
        getParticleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        tell(message: $Component_): void;
        /**
         * Return the singleton Minecraft instance for the game
         */
        self(): $Minecraft;
        setTitle(defaultText: string): void;
        /**
         * Runs the specified console command client-side with the player's permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(defaultText: string): void;
        isKeyDown(keyName: string): boolean;
        isKeyDown(key: number): boolean;
        getName(): $Component;
        isKeyBindDown(id: string): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isCtrlDown(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isShiftDown(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isAltDown(): boolean;
        setStatusMessage(message: $Component_): void;
        /**
         * Runs the specified console command client-side with the player's permission level. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(defaultText: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        setCurrentScreen(nextScreen: $Screen): void;
        getKeyBindPressedTicks(id: string): number;
        getCurrentScreen(): $Screen;
        getBlockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        getCurrentWorldName(): string;
        isKeyMappingDown(key: $KeyMapping): boolean;
        scheduleRepeating(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeatingInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        schedule(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        getDisplayName(): $Component;
        getConnection(): $Connection;
        /**
         * Update debugProfilerName in response to number keys in debug screen
         */
        create$setMissTime(keyCount: number): void;
        static instance: $Minecraft;
        crosshairPickEntity: $Entity;
        screen: $Screen;
        cameraEntity: $Entity;
        sectionVisibility: boolean;
        static ON_OSX: boolean;
        mouseHandler: $MouseHandler;
        static UNIFORM_FONT: $ResourceLocation;
        gameRenderer: $GameRenderer;
        wireframe: boolean;
        options: $Options;
        levelRenderer: $LevelRenderer;
        player: $LocalPlayer;
        pendingConnection: $Connection;
        fontFilterFishy: $Font;
        missTime: number;
        level: $ClientLevel;
        gameDirectory: $File;
        sectionPath: boolean;
        debugRenderer: $DebugRenderer;
        noRender: boolean;
        static DEFAULT_FONT: $ResourceLocation;
        fpsString: string;
        keyboardHandler: $KeyboardHandler;
        static UPDATE_DRIVERS_ADVICE: string;
        particleEngine: $ParticleEngine;
        gui: $Gui;
        gameMode: $MultiPlayerGameMode;
        static ALT_FONT: $ResourceLocation;
        hitResult: $HitResult;
        smartCull: boolean;
        font: $Font;
        constructor(gameConfig: $GameConfig);
        get paused(): boolean;
        get blockRenderer(): $BlockRenderDispatcher;
        get user(): $User;
        get localServer(): boolean;
        get proxy(): $Proxy;
        get launchedVersion(): string;
        get enforceUnicode(): boolean;
        get modelManager(): $ModelManager;
        get gameLoadFinished(): boolean;
        get currentServer(): $ServerData;
        get versionType(): string;
        get debugOverlay(): $DebugScreenOverlay;
        get profiler(): $ProfilerFiller;
        get levelSource(): $LevelStorageSource;
        get chatStatus(): $Minecraft$ChatStatus;
        get frameTimeNs(): number;
        get window(): $Window;
        get running(): boolean;
        get textureManager(): $TextureManager;
        get musicManager(): $MusicManager;
        get guiSprites(): $GuiSpriteManager;
        get itemRenderer(): $ItemRenderer;
        get timer(): $DeltaTracker;
        get fps(): number;
        get demo(): boolean;
        get toasts(): $ToastComponent;
        get vanillaPackResources(): $VanillaPackResources;
        get mainRenderTarget(): $RenderTarget;
        get singleplayerServer(): $IntegratedServer;
        get entityRenderDispatcher(): $EntityRenderDispatcher;
        get telemetryManager(): $ClientTelemetryManager;
        get profileKeyPairManager(): $ProfileKeyPairManager;
        get profileKeySignatureValidator(): $SignatureValidator;
        get blockEntityRenderDispatcher(): $BlockEntityRenderDispatcher;
        get chatListener(): $ChatListener;
        get soundManager(): $SoundManager;
        get itemColors(): $ItemColors;
        get fixerUpper(): $DataFixer;
        get splashManager(): $SplashManager;
        get narrator(): $GameNarrator;
        get hotbarManager(): $HotbarManager;
        get blockColors(): $BlockColors;
        get skinManager(): $SkinManager;
        get tutorial(): $Tutorial;
        get entityModels(): $EntityModelSet;
        get singleplayer(): boolean;
        get resourceManager(): $ResourceManager;
        get gameProfile(): $GameProfile;
        get languageManager(): $LanguageManager;
        get nameBanned(): boolean;
        static get launcherBrand(): string;
        get gpuUtilization(): number;
        get mapDecorationTextures(): $MapDecorationTextureManager;
        get playerSocialManager(): $PlayerSocialManager;
        get textFilteringEnabled(): boolean;
        get progressListener(): $StoringChunkProgressListener;
        get reportingContext(): $ReportingContext;
        get scheduledEvents(): $ScheduledEvents;
        get resourcePackRepository(): $PackRepository;
        get minecraftSessionService(): $MinecraftSessionService;
        get situationalMusic(): $Music;
        get mobEffectTextures(): $MobEffectTextureManager;
        get paintingTextures(): $PaintingTextureManager;
        get downloadedPackSource(): $DownloadedPackSource;
        get resourcePackDirectory(): $Path;
        get gpuWarnlistManager(): $GpuWarnlistManager;
        get locale(): $Locale;
        get particleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        get ctrlDown(): boolean;
        get shiftDown(): boolean;
        get altDown(): boolean;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get blockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        get currentWorldName(): string;
        get displayName(): $Component;
        get connection(): $Connection;
    }
    export class $Camera$NearPlane {
        getTopLeft(): $Vec3;
        getBottomLeft(): $Vec3;
        getTopRight(): $Vec3;
        getBottomRight(): $Vec3;
        getPointOnPlane(leftScale: number, upScale: number): $Vec3;
        forward: $Vec3;
        constructor(forward: $Vec3_, left: $Vec3_, up: $Vec3_);
        get topLeft(): $Vec3;
        get bottomLeft(): $Vec3;
        get topRight(): $Vec3;
        get bottomRight(): $Vec3;
    }
    export class $GuiMessageTag$Icon extends $Enum<$GuiMessageTag$Icon> {
        static values(): $GuiMessageTag$Icon[];
        static valueOf(arg0: string): $GuiMessageTag$Icon;
        draw(guiGraphics: $GuiGraphics, x: number, y: number): void;
        static CHAT_MODIFIED: $GuiMessageTag$Icon;
        sprite: $ResourceLocation;
        width: number;
        height: number;
    }
    /**
     * Values that may be interpreted as {@link $GuiMessageTag$Icon}.
     */
    export type $GuiMessageTag$Icon_ = "chat_modified";
    export class $KeyboardHandler {
        setup(window: number): void;
        tick(): void;
        setClipboard(string: string): void;
        keyPress(windowPointer: number, arg1: number, key: number, scanCode: number, action: number): void;
        handler$zjl000$veil$handleChunkDebugKeys(arg0: number, arg1: $CallbackInfoReturnable<any>): void;
        handler$zjl000$veil$printChunkDebugKeys(arg0: number, arg1: $CallbackInfoReturnable<any>): void;
        getClipboard(): string;
        static DEBUG_CRASH_TIME: number;
        constructor(minecraft: $Minecraft);
        set up(value: number);
    }
    export class $StringSplitter$WidthProvider {
    }
    export interface $StringSplitter$WidthProvider {
        getWidth(codePoint: number, style: $Style): number;
    }
    /**
     * Values that may be interpreted as {@link $StringSplitter$WidthProvider}.
     */
    export type $StringSplitter$WidthProvider_ = ((arg0: number, arg1: $Style) => number);
    export class $ResourceLoadStateTracker {
        startRecovery(error: $Throwable): void;
        startReload(reloadReason: $ResourceLoadStateTracker$ReloadReason_, packs: $List_<$PackResources>): void;
        finishReload(): void;
        fillCrashReport(report: $CrashReport): void;
        constructor();
    }
    export class $StringSplitter$LineBreakFinder implements $FormattedCharSink {
    }
    export class $ResourceLoadStateTracker$ReloadReason extends $Enum<$ResourceLoadStateTracker$ReloadReason> {
        static values(): $ResourceLoadStateTracker$ReloadReason[];
        static valueOf(arg0: string): $ResourceLoadStateTracker$ReloadReason;
        static INITIAL: $ResourceLoadStateTracker$ReloadReason;
        static MANUAL: $ResourceLoadStateTracker$ReloadReason;
        static UNKNOWN: $ResourceLoadStateTracker$ReloadReason;
    }
    /**
     * Values that may be interpreted as {@link $ResourceLoadStateTracker$ReloadReason}.
     */
    export type $ResourceLoadStateTracker$ReloadReason_ = "initial" | "manual" | "unknown";
    export class $OptionInstance$SliderableOrCyclableValueSet<T> {
    }
    export interface $OptionInstance$SliderableOrCyclableValueSet<T> extends $OptionInstance$CycleableValueSet<T>, $OptionInstance$SliderableValueSet<T> {
    }
    export class $OptionInstance$ValueSet<T> {
    }
    export interface $OptionInstance$ValueSet<T> {
        validateValue(value: T): (T) | undefined;
        codec(): $Codec<T>;
        createButton(tooltipSupplier: $OptionInstance$TooltipSupplier_<T>, options: $Options, x: number, y: number, width: number, onValueChanged: $Consumer_<T>): $Function<$OptionInstance<T>, $AbstractWidget>;
    }
    export class $ComponentCollector {
        reset(): void;
        append(part: $FormattedText): void;
        getResult(): $FormattedText;
        getResultOrEmpty(): $FormattedText;
        constructor();
        get result(): $FormattedText;
        get resultOrEmpty(): $FormattedText;
    }
    export class $ClientBrandRetriever {
        static getClientModName(): string;
        static VANILLA_NAME: string;
        constructor();
        static get clientModName(): string;
    }
    export class $OptionInstance$AltEnum<T> extends $Record implements $OptionInstance$CycleableValueSet<T> {
        values(): $List<T>;
        altValues(): $List<T>;
        validateValue(arg0: T): (T) | undefined;
        codec(): $Codec<T>;
        valueSetter(): $OptionInstance$CycleableValueSet$ValueSetter<T>;
        valueListSupplier(): $CycleButton$ValueListSupplier<T>;
        altCondition(): $BooleanSupplier;
        constructor(arg0: $List_<T>, arg1: $List_<T>, arg2: $BooleanSupplier_, arg3: $OptionInstance$CycleableValueSet$ValueSetter_<T>, arg4: $Codec<T>);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$AltEnum}.
     */
    export type $OptionInstance$AltEnum_<T> = { codec?: $Codec<any>, altValues?: $List_<any>, values?: $List_<any>, altCondition?: $BooleanSupplier_, valueSetter?: $OptionInstance$CycleableValueSet$ValueSetter_<any>,  } | [codec?: $Codec<any>, altValues?: $List_<any>, values?: $List_<any>, altCondition?: $BooleanSupplier_, valueSetter?: $OptionInstance$CycleableValueSet$ValueSetter_<any>, ];
    export class $StringSplitter$FlatComponents {
    }
    export class $StringSplitter {
        static getWordPosition(content: string, skipCount: number, cursorPoint: number, includeWhitespace: boolean): number;
        headByWidth(content: $FormattedText, maxWidth: number, style: $Style): $FormattedText;
        plainHeadByWidth(content: string, maxWidth: number, style: $Style): string;
        plainTailByWidth(content: string, maxWidth: number, style: $Style): string;
        splitLines(content: $FormattedText, maxWidth: number, style: $Style): $List<$FormattedText>;
        splitLines(content: $FormattedText, maxWidth: number, style: $Style, splitifier: $BiConsumer_<$FormattedText, boolean>): void;
        splitLines(content: string, maxWidth: number, style: $Style, withNewLines: boolean, linePos: $StringSplitter$LinePosConsumer_): void;
        splitLines(content: string, maxWidth: number, style: $Style): $List<$FormattedText>;
        splitLines(content: $FormattedText, maxWidth: number, style: $Style, prefix: $FormattedText): $List<$FormattedText>;
        componentStyleAtWidth(content: $FormattedText, maxWidth: number): $Style;
        componentStyleAtWidth(content: $FormattedCharSequence_, maxWidth: number): $Style;
        stringWidth(content: $FormattedText): number;
        stringWidth(content: $FormattedCharSequence_): number;
        stringWidth(content: string | null): number;
        plainIndexAtWidth(content: string, maxWidth: number, style: $Style): number;
        findLineBreak(content: string, maxWidth: number, style: $Style): number;
        formattedHeadByWidth(content: string, maxWidth: number, style: $Style): string;
        formattedIndexByWidth(content: string, maxWidth: number, style: $Style): number;
        widthProvider: $StringSplitter$WidthProvider;
        constructor(widthProvider: $StringSplitter$WidthProvider_);
    }
    export class $PeriodicNotificationManager$NotificationTask extends $TimerTask {
    }
    export class $KeyMapping implements $Comparable<$KeyMapping>, $IKeyMappingExtension, $KeyMappingsAccessor, $KeyMappingInvoker, $KeyBindingAccessor$1, $KeyBindingAccessor {
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        isDefault(): boolean;
        getName(): string;
        compareTo(arg0: $KeyMapping): number;
        matches(keysym: number, scancode: number): boolean;
        static set(key: $InputConstants$Key, held: boolean): void;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        static setAll(): void;
        handler$cpj000$axiom$isPressed(cir: $CallbackInfoReturnable<any>): void;
        handler$cpj000$axiom$isDown(cir: $CallbackInfoReturnable<any>): void;
        setDown(value: boolean): void;
        saveString(): string;
        getKeyModifier(): $KeyModifier;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        static resetMapping(): void;
        setKeyConflictContext(keyConflictContext: $IKeyConflictContext): void;
        getKeyConflictContext(): $IKeyConflictContext;
        /**
         * @return the display name of this key mapping
         * Defaults to a translatable component of the name.
         */
        getTranslatedKeyMessage(): $Component;
        setKeyModifierAndCode(keyModifier: $KeyModifier_, keyCode: $InputConstants$Key): void;
        getDefaultKeyModifier(): $KeyModifier;
        setKey(key: $InputConstants$Key): void;
        getCategory(): string;
        getDefaultKey(): $InputConstants$Key;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        static resetToggleKeys(): void;
        /**
         * Returns `true` if the supplied `KeyMapping` conflicts with this
         */
        same(binding: $KeyMapping): boolean;
        /**
         * Returns a supplier which gets a keybind's current binding (eg, `key.forward` returns W by default), or the keybind's name if no such keybind exists (eg, `key.invalid` returns key.invalid)
         */
        static createNameSupplier(key: string): $Supplier<$Component>;
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        isDown(): boolean;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        static releaseAll(): void;
        static click(key: $InputConstants$Key): void;
        /**
         * Returns `true` if the `KeyMapping` is set to a mouse key and the key matches.
         */
        matchesMouse(key: number): boolean;
        static fabric_getCategoryMap$fabric_key_binding_api_v1_$md$961d4f$0(): $Map<any, any>;
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        isUnbound(): boolean;
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        consumeClick(): boolean;
        /**
         * @return the display name of this key mapping
         * Defaults to a translatable component of the name.
         */
        getDisplayName(): $Component;
        /**
         * Returns `true` if the supplied `KeyMapping` conflicts with this
         */
        hasKeyModifierConflict(binding: $KeyMapping): boolean;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        setToDefault(): void;
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        isConflictContextAndModifierActive(): boolean;
        /**
         * @return true if the key conflict context and modifier are active and the keyCode matches this binding, false otherwise
         */
        isActiveAndMatches(keyCode: $InputConstants$Key): boolean;
        getKey(): $InputConstants$Key;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        invokeRelease(): void;
        fabric_getBoundKey(): $InputConstants$Key;
        fabric_getTimesPressed(): number;
        static CATEGORY_INTERFACE: string;
        static CATEGORY_MULTIPLAYER: string;
        static CATEGORY_CREATIVE: string;
        static CATEGORY_MOVEMENT: string;
        static CATEGORY_GAMEPLAY: string;
        static CATEGORY_MISC: string;
        key: $InputConstants$Key;
        static CATEGORY_INVENTORY: string;
        constructor(name: string, keyCode: number, category: string);
        constructor(name: string, type: $InputConstants$Type_, keyCode: number, category: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $KeyModifier_, arg3: $InputConstants$Type_, arg4: number, arg5: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $KeyModifier_, arg3: $InputConstants$Key, arg4: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $InputConstants$Key, arg3: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $InputConstants$Type_, arg3: number, arg4: string);
        get default(): boolean;
        get name(): string;
        get keyModifier(): $KeyModifier;
        get translatedKeyMessage(): $Component;
        get defaultKeyModifier(): $KeyModifier;
        get category(): string;
        get defaultKey(): $InputConstants$Key;
        get unbound(): boolean;
        get displayName(): $Component;
        get conflictContextAndModifierActive(): boolean;
    }
    export class $DeltaTracker$DefaultValue implements $DeltaTracker {
        getGameTimeDeltaPartialTick(runsNormally: boolean): number;
        getGameTimeDeltaTicks(): number;
        getRealtimeDeltaTicks(): number;
        constructor(value: number);
        get gameTimeDeltaTicks(): number;
        get realtimeDeltaTicks(): number;
    }
    export class $Options$FieldAccess {
    }
    export interface $Options$FieldAccess extends $Options$OptionAccess {
        process<T>(name: string, value: T, stringValuefier: $Function_<string, T>, valueStringifier: $Function_<T, string>): T;
        process(name: string, value: number): number;
        process(name: string, value: string): string;
        process(name: string, value: boolean): boolean;
        process(name: string, value: number): number;
    }
    export class $DebugQueryHandler {
        queryEntityTag(entId: number, tag: $Consumer_<$CompoundTag>): void;
        queryBlockEntityTag(pos: $BlockPos_, tag: $Consumer_<$CompoundTag>): void;
        handleResponse(transactionId: number, tag: $CompoundTag_ | null): boolean;
        constructor(connection: $ClientPacketListener);
    }
    export class $NarratorStatus extends $Enum<$NarratorStatus> {
        getName(): $Component;
        static values(): $NarratorStatus[];
        static valueOf(arg0: string): $NarratorStatus;
        getId(): number;
        shouldNarrateSystem(): boolean;
        shouldNarrateChat(): boolean;
        static byId(id: number): $NarratorStatus;
        static SYSTEM: $NarratorStatus;
        static ALL: $NarratorStatus;
        static CHAT: $NarratorStatus;
        static OFF: $NarratorStatus;
        get id(): number;
    }
    /**
     * Values that may be interpreted as {@link $NarratorStatus}.
     */
    export type $NarratorStatus_ = "off" | "all" | "chat" | "system";
    export class $ResourceLoadStateTracker$RecoveryInfo {
    }
    export class $Minecraft$ChatStatus extends $Enum<$Minecraft$ChatStatus> {
        static values(): $Minecraft$ChatStatus[];
        static valueOf(arg0: string): $Minecraft$ChatStatus;
        getMessage(): $Component;
        isChatAllowed(isLocalServer: boolean): boolean;
        static DISABLED_BY_OPTIONS: $Minecraft$ChatStatus;
        static INFO_DISABLED_BY_PROFILE: $Component;
        static DISABLED_BY_PROFILE: $Minecraft$ChatStatus;
        static ENABLED: $Minecraft$ChatStatus;
        static DISABLED_BY_LAUNCHER: $Minecraft$ChatStatus;
        get message(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $Minecraft$ChatStatus}.
     */
    export type $Minecraft$ChatStatus_ = "enabled" | "disabled_by_options" | "disabled_by_launcher" | "disabled_by_profile";
    export class $OptionInstance$CaptionBasedToString<T> {
    }
    export interface $OptionInstance$CaptionBasedToString<T> {
        toString(caption: $Component_, value: T): $Component;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$CaptionBasedToString}.
     */
    export type $OptionInstance$CaptionBasedToString_<T> = ((arg0: $Component, arg1: T) => $Component_);
    export class $ParticleStatus extends $Enum<$ParticleStatus> implements $OptionEnum {
        static values(): $ParticleStatus[];
        static valueOf(arg0: string): $ParticleStatus;
        getKey(): string;
        getId(): number;
        static byId(id: number): $ParticleStatus;
        getCaption(): $Component;
        static ALL: $ParticleStatus;
        static DECREASED: $ParticleStatus;
        static MINIMAL: $ParticleStatus;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $ParticleStatus}.
     */
    export type $ParticleStatus_ = "all" | "decreased" | "minimal";
    export class $OptionInstance$CycleableValueSet$ValueSetter<T> {
    }
    export interface $OptionInstance$CycleableValueSet$ValueSetter<T> {
        set(instance: $OptionInstance<T>, value: T): void;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$CycleableValueSet$ValueSetter}.
     */
    export type $OptionInstance$CycleableValueSet$ValueSetter_<T> = ((arg0: $OptionInstance<T>, arg1: T) => void);
    export class $OptionInstance$CycleableValueSet<T> {
    }
    export interface $OptionInstance$CycleableValueSet<T> extends $OptionInstance$ValueSet<T> {
    }
}
