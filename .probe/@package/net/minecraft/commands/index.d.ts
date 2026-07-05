import { $RecipeManager } from "@package/net/minecraft/world/item/crafting";
import { $Codec } from "@package/com/mojang/serialization";
import { $ServerFunctionManager, $MinecraftServer } from "@package/net/minecraft/server";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Message, $ResultConsumer, $Message_, $StringReader, $CommandDispatcher, $ParseResults } from "@package/com/mojang/brigadier";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $Map_, $Collection_, $Collection, $Map, $Set } from "@package/java/util";
import { $TaskChainer_, $TaskChainer } from "@package/net/minecraft/util";
import { $AdvancementHolder } from "@package/net/minecraft/advancements";
import { $Predicate, $Function_, $BinaryOperator_, $Consumer_, $UnaryOperator_, $Predicate_ } from "@package/java/util/function";
import { $CharPredicate_ } from "@package/net/minecraft";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $ICommandSourceStackExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Dynamic2CommandExceptionType, $CommandSyntaxException, $DynamicCommandExceptionType, $CommandExceptionType, $SimpleCommandExceptionType, $BuiltInExceptionProvider } from "@package/com/mojang/brigadier/exceptions";
import { $Suggestions, $SuggestionsBuilder } from "@package/com/mojang/brigadier/suggestion";
import { $LiteralArgumentBuilder, $RequiredArgumentBuilder } from "@package/com/mojang/brigadier/builder";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $Iterable_, $Enum, $Record, $Exception } from "@package/java/lang";
import { $Level } from "@package/net/minecraft/world/level";
import { $ExecutionContext, $TraceCallbacks } from "@package/net/minecraft/commands/execution";
import { $Component_, $PlayerChatMessage, $ChatType$Bound_, $Component, $OutgoingChatMessage, $PlayerChatMessage_ } from "@package/net/minecraft/network/chat";
import { $EntityAnchorArgument$Anchor_, $EntityAnchorArgument$Anchor } from "@package/net/minecraft/commands/arguments";
import { $Stream } from "@package/java/util/stream";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Scoreboard } from "@package/net/minecraft/world/scores";
import { $CommandFunction } from "@package/net/minecraft/commands/functions";
import { $LazyComponentKJS_ } from "@package/dev/latvian/mods/kubejs/core";
import { $Vec3, $Vec2, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $ArgumentType_ } from "@package/com/mojang/brigadier/arguments";
export * as execution from "@package/net/minecraft/commands/execution";
export * as functions from "@package/net/minecraft/commands/functions";
export * as arguments from "@package/net/minecraft/commands/arguments";
export * as synchronization from "@package/net/minecraft/commands/synchronization";

declare module "@package/net/minecraft/commands" {
    export class $CacheableFunction {
        get(functionManager: $ServerFunctionManager): ($CommandFunction<$CommandSourceStack>) | undefined;
        getId(): $ResourceLocation;
        static CODEC: $Codec<$CacheableFunction>;
        constructor(id: $ResourceLocation_);
        get id(): $ResourceLocation;
    }
    export class $CommandBuildContext {
        static simple(provider: $HolderLookup$Provider, enabledFeatures: $FeatureFlagSet): $CommandBuildContext;
    }
    export interface $CommandBuildContext extends $HolderLookup$Provider {
    }
    export class $SharedSuggestionProvider {
        static suggest2DCoordinates(remaining: string, coordinates: $Collection_<$SharedSuggestionProvider$TextCoordinates>, builder: $SuggestionsBuilder, validator: $Predicate_<string>): $CompletableFuture<$Suggestions>;
        static matchesSubStr(string: string, arg1: string): boolean;
        static filterResources<T>(resources: $Iterable_<T>, input: string, locationFunction: $Function_<T, $ResourceLocation>, resourceConsumer: $Consumer_<T>): void;
        static filterResources<T>(resources: $Iterable_<T>, remaining: string, prefix: string, locationFunction: $Function_<T, $ResourceLocation>, resourceConsumer: $Consumer_<T>): void;
        static suggestCoordinates(remaining: string, coordinates: $Collection_<$SharedSuggestionProvider$TextCoordinates>, builder: $SuggestionsBuilder, validator: $Predicate_<string>): $CompletableFuture<$Suggestions>;
        static suggest<T>(resources: $Iterable_<T>, builder: $SuggestionsBuilder, stringFunction: $Function_<T, string>, suggestionFunction: $Function_<T, $Message>): $CompletableFuture<$Suggestions>;
        static suggest(strings: string[], builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static suggest(strings: $Stream<string>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static suggest(strings: $Iterable_<string>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static suggestResource(resources: $Stream<$ResourceLocation_>, builder: $SuggestionsBuilder, prefix: string): $CompletableFuture<$Suggestions>;
        static suggestResource<T>(resources: $Iterable_<T>, builder: $SuggestionsBuilder, stringFunction: $Function_<T, $ResourceLocation>, suggestionFunction: $Function_<T, $Message>): $CompletableFuture<$Suggestions>;
        static suggestResource(strings: $Stream<$ResourceLocation_>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static suggestResource<T>(resources: $Stream<T>, builder: $SuggestionsBuilder, locationFunction: $Function_<T, $ResourceLocation>, suggestionFunction: $Function_<T, $Message>): $CompletableFuture<$Suggestions>;
        static suggestResource(strings: $Iterable_<$ResourceLocation>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static suggestResource(resources: $Iterable_<$ResourceLocation>, builder: $SuggestionsBuilder, prefix: string): $CompletableFuture<$Suggestions>;
    }
    export interface $SharedSuggestionProvider {
        suggestRegistryElements(registry: $Registry<never>, type: $SharedSuggestionProvider$ElementSuggestionType_, builder: $SuggestionsBuilder): void;
        suggestRegistryElements(resourceKey: $ResourceKey_<$Registry<never>>, registryKey: $SharedSuggestionProvider$ElementSuggestionType_, builder: $SuggestionsBuilder, context: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        levels(): $Set<$ResourceKey<$Level>>;
        getRecipeNames(): $Stream<$ResourceLocation>;
        getAvailableSounds(): $Stream<$ResourceLocation>;
        getSelectedEntities(): $Collection<string>;
        getOnlinePlayerNames(): $Collection<string>;
        getRelevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        getAbsoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        customSuggestion(context: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        getAllTeams(): $Collection<string>;
        enabledFeatures(): $FeatureFlagSet;
        getCustomTabSugggestions(): $Collection<string>;
        hasPermission(permissionLevel: number): boolean;
        registryAccess(): $RegistryAccess;
        get recipeNames(): $Stream<$ResourceLocation>;
        get availableSounds(): $Stream<$ResourceLocation>;
        get selectedEntities(): $Collection<string>;
        get onlinePlayerNames(): $Collection<string>;
        get relevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get absoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get allTeams(): $Collection<string>;
        get customTabSugggestions(): $Collection<string>;
    }
    export class $CommandSource {
        static NULL: $CommandSource;
    }
    export interface $CommandSource {
        alwaysAccepts(): boolean;
        acceptsSuccess(): boolean;
        acceptsFailure(): boolean;
        shouldInformAdmins(): boolean;
        sendSystemMessage(component: $Component_): void;
    }
    export class $ExecutionCommandSource<T extends $ExecutionCommandSource<T>> {
        static resultConsumer<T extends $ExecutionCommandSource<T>>(): $ResultConsumer<T>;
    }
    export interface $ExecutionCommandSource<T extends $ExecutionCommandSource<T>> {
        callback(): $CommandResultCallback;
        isSilent(): boolean;
        handleError(exception: $CommandSyntaxException, success: boolean, traceCallbacks: $TraceCallbacks | null): void;
        handleError(exceptionType: $CommandExceptionType, message: $Message_, success: boolean, traceCallbacks: $TraceCallbacks | null): void;
        dispatcher(): $CommandDispatcher<T>;
        clearCallbacks(): T;
        hasPermission(permissionLevel: number): boolean;
        withCallback(callback: $CommandResultCallback_): T;
        get silent(): boolean;
    }
    export class $CommandSigningContext$SignedArguments extends $Record implements $CommandSigningContext {
        "arguments"(): $Map<string, $PlayerChatMessage>;
        getArgument(arg0: string): $PlayerChatMessage;
        constructor(arg0: $Map_<string, $PlayerChatMessage_>);
    }
    /**
     * Values that may be interpreted as {@link $CommandSigningContext$SignedArguments}.
     */
    export type $CommandSigningContext$SignedArguments_ = { arguments?: $Map_<string, $PlayerChatMessage_>,  } | [arguments?: $Map_<string, $PlayerChatMessage_>, ];
    export class $CommandResultCallback {
        static chain(first: $CommandResultCallback_, second: $CommandResultCallback_): $CommandResultCallback;
        static EMPTY: $CommandResultCallback;
    }
    export interface $CommandResultCallback {
        onResult(success: boolean, result: number): void;
        onFailure(): void;
        onSuccess(result: number): void;
    }
    /**
     * Values that may be interpreted as {@link $CommandResultCallback}.
     */
    export type $CommandResultCallback_ = ((arg0: boolean, arg1: number) => void);
    export class $CommandSourceStack implements $ExecutionCommandSource<$CommandSourceStack>, $SharedSuggestionProvider, $ICommandSourceStackExtension {
        getDisplayName(): $Component;
        getChatMessageChainer(): $TaskChainer;
        suggestRegistryElements(resourceKey: $ResourceKey_<$Registry<never>>, registryKey: $SharedSuggestionProvider$ElementSuggestionType_, builder: $SuggestionsBuilder, context: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        callback(): $CommandResultCallback;
        levels(): $Set<$ResourceKey<$Level>>;
        getLevel(): $ServerLevel;
        getPosition(): $Vec3;
        withSigningContext(signingContext: $CommandSigningContext_, chatMessageChainer: $TaskChainer_): $CommandSourceStack;
        getPlayerOrException(): $ServerPlayer;
        sendSuccessLazy(component: $LazyComponentKJS_, broadcastToAdmins: boolean): void;
        getEntityOrException(): $Entity;
        withLevel(level: $ServerLevel): $CommandSourceStack;
        withMaximumPermission(permissionLevel: number): $CommandSourceStack;
        withPosition(lookPos: $Vec3_): $CommandSourceStack;
        getTextName(): string;
        getRecipeNames(): $Stream<$ResourceLocation>;
        sendFailure(message: $Component_): void;
        getAvailableSounds(): $Stream<$ResourceLocation>;
        sendSuccess(component: $Component_, broadcastToAdmins: boolean): void;
        withPermission(permissionLevel: number): $CommandSourceStack;
        getEntity(): $Entity;
        withAnchor(anchor: $EntityAnchorArgument$Anchor_): $CommandSourceStack;
        withSource(source: $CommandSource): $CommandSourceStack;
        getOnlinePlayerNames(): $Collection<string>;
        isSilent(): boolean;
        customSuggestion(context: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        getSigningContext(): $CommandSigningContext;
        getAllTeams(): $Collection<string>;
        handleError(exceptionType: $CommandExceptionType, message: $Message_, success: boolean, traceCallbacks: $TraceCallbacks | null): void;
        dispatcher(): $CommandDispatcher<$CommandSourceStack>;
        withEntity(entity: $Entity): $CommandSourceStack;
        enabledFeatures(): $FeatureFlagSet;
        hasPermission(level: number): boolean;
        isPlayer(): boolean;
        withRotation(rotation: $Vec2): $CommandSourceStack;
        withSuppressedOutput(): $CommandSourceStack;
        shouldFilterMessageTo(receiver: $ServerPlayer): boolean;
        sendChatMessage(message: $OutgoingChatMessage, shouldFilter: boolean, boundChatType: $ChatType$Bound_): void;
        sendSystemMessage(message: $Component_): void;
        withCallback(callback: $CommandResultCallback_, operator: $BinaryOperator_<$CommandResultCallback>): $CommandSourceStack;
        getPlayer(): $ServerPlayer;
        getServer(): $MinecraftServer;
        facing(lookPos: $Vec3_): $CommandSourceStack;
        facing(entity: $Entity, anchor: $EntityAnchorArgument$Anchor_): $CommandSourceStack;
        registryAccess(): $RegistryAccess;
        getRotation(): $Vec2;
        getAnchor(): $EntityAnchorArgument$Anchor;
        handleError(exception: $CommandSyntaxException, success: boolean, traceCallbacks: $TraceCallbacks | null): void;
        clearCallbacks(): $CommandSourceStack;
        suggestRegistryElements(registry: $Registry<never>, type: $SharedSuggestionProvider$ElementSuggestionType_, builder: $SuggestionsBuilder): void;
        getSelectedEntities(): $Collection<string>;
        getRelevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        getAbsoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        getCustomTabSugggestions(): $Collection<string>;
        getAdvancement(id: $ResourceLocation_): $AdvancementHolder;
        getUnsidedLevel(): $Level;
        getScoreboard(): $Scoreboard;
        getRecipeManager(): $RecipeManager;
        withCallback(callback: $CommandResultCallback_): $CommandSourceStack;
        source: $CommandSource;
        static ERROR_NOT_ENTITY: $SimpleCommandExceptionType;
        static ERROR_NOT_PLAYER: $SimpleCommandExceptionType;
        constructor(source: $CommandSource, worldPosition: $Vec3_, rotation: $Vec2, level: $ServerLevel, permissionLevel: number, textName: string, displayName: $Component_, server: $MinecraftServer, entity: $Entity | null);
        constructor(source: $CommandSource, worldPosition: $Vec3_, rotation: $Vec2, level: $ServerLevel, permissionLevel: number, textName: string, displayName: $Component_, server: $MinecraftServer, entity: $Entity | null, silent: boolean, resultCallback: $CommandResultCallback_, anchor: $EntityAnchorArgument$Anchor_, signingContext: $CommandSigningContext_, chatMessageChainer: $TaskChainer_);
        get displayName(): $Component;
        get chatMessageChainer(): $TaskChainer;
        get level(): $ServerLevel;
        get position(): $Vec3;
        get playerOrException(): $ServerPlayer;
        get entityOrException(): $Entity;
        get textName(): string;
        get recipeNames(): $Stream<$ResourceLocation>;
        get availableSounds(): $Stream<$ResourceLocation>;
        get entity(): $Entity;
        get onlinePlayerNames(): $Collection<string>;
        get silent(): boolean;
        get signingContext(): $CommandSigningContext;
        get allTeams(): $Collection<string>;
        get server(): $MinecraftServer;
        get rotation(): $Vec2;
        get anchor(): $EntityAnchorArgument$Anchor;
        get selectedEntities(): $Collection<string>;
        get relevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get absoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get customTabSugggestions(): $Collection<string>;
        get unsidedLevel(): $Level;
        get scoreboard(): $Scoreboard;
        get recipeManager(): $RecipeManager;
    }
    export class $SharedSuggestionProvider$ElementSuggestionType extends $Enum<$SharedSuggestionProvider$ElementSuggestionType> {
        static values(): $SharedSuggestionProvider$ElementSuggestionType[];
        static valueOf(arg0: string): $SharedSuggestionProvider$ElementSuggestionType;
        shouldSuggestTags(): boolean;
        shouldSuggestElements(): boolean;
        static ELEMENTS: $SharedSuggestionProvider$ElementSuggestionType;
        static ALL: $SharedSuggestionProvider$ElementSuggestionType;
        static TAGS: $SharedSuggestionProvider$ElementSuggestionType;
    }
    /**
     * Values that may be interpreted as {@link $SharedSuggestionProvider$ElementSuggestionType}.
     */
    export type $SharedSuggestionProvider$ElementSuggestionType_ = "tags" | "elements" | "all";
    export class $Commands$ParseFunction {
    }
    export interface $Commands$ParseFunction {
        parse(input: $StringReader): void;
    }
    /**
     * Values that may be interpreted as {@link $Commands$ParseFunction}.
     */
    export type $Commands$ParseFunction_ = ((arg0: $StringReader) => void);
    export class $Commands {
        static getParseException<S>(result: $ParseResults<S>): $CommandSyntaxException;
        static validate(): void;
        /**
         * Creates a new argument. Intended to be imported statically. The benefit of this over the brigadier `RequiredArgumentBuilder#argument` method is that it is typed to `CommandSource`.
         */
        static argument<T>(name: string, type: $ArgumentType_<T>): $RequiredArgumentBuilder<$CommandSourceStack, T>;
        /**
         * Creates a new argument. Intended to be imported statically. The benefit of this over the brigadier `LiteralArgumentBuilder#literal` method is that it is typed to `CommandSource`.
         */
        static literal(name: string): $LiteralArgumentBuilder<$CommandSourceStack>;
        getDispatcher(): $CommandDispatcher<$CommandSourceStack>;
        static executeCommandInContext(source: $CommandSourceStack, contextConsumer: $Consumer_<$ExecutionContext<$CommandSourceStack>>): void;
        static createValidationContext(provider: $HolderLookup$Provider): $CommandBuildContext;
        static validateParseResults<S>(parseResults: $ParseResults<S>): void;
        sendCommands(player: $ServerPlayer): void;
        static mapSource<S>(parseResults: $ParseResults<S>, mapper: $UnaryOperator_<S>): $ParseResults<S>;
        static createValidator(parser: $Commands$ParseFunction_): $Predicate<string>;
        performPrefixedCommand(source: $CommandSourceStack, command: string): void;
        performCommand(parseResults: $ParseResults<$CommandSourceStack>, command: string): void;
        static LEVEL_MODERATORS: number;
        static LEVEL_ALL: number;
        static LEVEL_ADMINS: number;
        static LEVEL_OWNERS: number;
        static LEVEL_GAMEMASTERS: number;
        constructor(selection: $Commands$CommandSelection_, context: $CommandBuildContext);
        get dispatcher(): $CommandDispatcher<$CommandSourceStack>;
    }
    export class $FunctionInstantiationException extends $Exception {
        messageComponent(): $Component;
        constructor(messageComponent: $Component_);
    }
    export class $SharedSuggestionProvider$TextCoordinates {
        static DEFAULT_GLOBAL: $SharedSuggestionProvider$TextCoordinates;
        static DEFAULT_LOCAL: $SharedSuggestionProvider$TextCoordinates;
        x: string;
        y: string;
        z: string;
        constructor(x: string, y: string, z: string);
    }
    export class $Commands$CommandSelection extends $Enum<$Commands$CommandSelection> {
        static values(): $Commands$CommandSelection[];
        static valueOf(arg0: string): $Commands$CommandSelection;
        static ALL: $Commands$CommandSelection;
        static INTEGRATED: $Commands$CommandSelection;
        static DEDICATED: $Commands$CommandSelection;
        includeIntegrated: boolean;
        includeDedicated: boolean;
    }
    /**
     * Values that may be interpreted as {@link $Commands$CommandSelection}.
     */
    export type $Commands$CommandSelection_ = "all" | "dedicated" | "integrated";
    export class $CommandSigningContext {
        static ANONYMOUS: $CommandSigningContext;
    }
    export interface $CommandSigningContext {
        getArgument(name: string): $PlayerChatMessage;
    }
    /**
     * Values that may be interpreted as {@link $CommandSigningContext}.
     */
    export type $CommandSigningContext_ = ((arg0: string) => $PlayerChatMessage_);
    export class $BrigadierExceptions implements $BuiltInExceptionProvider {
        longTooLow(): $Dynamic2CommandExceptionType;
        readerInvalidDouble(): $DynamicCommandExceptionType;
        dispatcherUnknownCommand(): $SimpleCommandExceptionType;
        readerExpectedFloat(): $SimpleCommandExceptionType;
        readerExpectedStartOfQuote(): $SimpleCommandExceptionType;
        readerInvalidEscape(): $DynamicCommandExceptionType;
        readerExpectedDouble(): $SimpleCommandExceptionType;
        dispatcherParseException(): $DynamicCommandExceptionType;
        readerExpectedEndOfQuote(): $SimpleCommandExceptionType;
        readerExpectedSymbol(): $DynamicCommandExceptionType;
        dispatcherUnknownArgument(): $SimpleCommandExceptionType;
        readerInvalidInt(): $DynamicCommandExceptionType;
        floatTooHigh(): $Dynamic2CommandExceptionType;
        longTooHigh(): $Dynamic2CommandExceptionType;
        doubleTooHigh(): $Dynamic2CommandExceptionType;
        readerInvalidFloat(): $DynamicCommandExceptionType;
        integerTooHigh(): $Dynamic2CommandExceptionType;
        readerInvalidLong(): $DynamicCommandExceptionType;
        readerExpectedLong(): $SimpleCommandExceptionType;
        readerExpectedBool(): $SimpleCommandExceptionType;
        literalIncorrect(): $DynamicCommandExceptionType;
        readerInvalidBool(): $DynamicCommandExceptionType;
        floatTooLow(): $Dynamic2CommandExceptionType;
        doubleTooLow(): $Dynamic2CommandExceptionType;
        integerTooLow(): $Dynamic2CommandExceptionType;
        readerExpectedInt(): $SimpleCommandExceptionType;
        dispatcherExpectedArgumentSeparator(): $SimpleCommandExceptionType;
        constructor();
    }
    export class $ParserUtils {
        static parseJson<T>(registries: $HolderLookup$Provider, reader: $StringReader, codec: $Codec<T>): T;
        static readWhile(reader: $StringReader, predicate: $CharPredicate_): string;
        constructor();
    }
}
