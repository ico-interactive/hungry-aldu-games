import { $LevelAccessor, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $DyeColor_, $DyeColor } from "@package/net/minecraft/world/item";
import { $AbstractRegistrate } from "@package/com/tterrag/registrate";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $RegistrateBlockLootTables } from "@package/com/tterrag/registrate/providers/loot";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Spliterator, $Iterator, $Map } from "@package/java/util";
import { $NonNullBiConsumer_, $NonNullFunction } from "@package/com/tterrag/registrate/util/nullness";
import { $PlayerInteractEvent$RightClickBlock } from "@package/net/neoforged/neoforge/event/entity/player";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $BlockEntry } from "@package/com/tterrag/registrate/util/entry";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $Holder_, $Holder, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $DirectionProperty, $Half, $EnumProperty, $StairsShape, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $RegistrateRecipeProvider, $DataGenContext, $RegistrateBlockstateProvider } from "@package/com/tterrag/registrate/providers";
import { $Block_, $WeatheringCopperStairBlock, $DirectionalBlock, $EntityBlock, $WeatheringCopper$WeatherState_, $WeatheringCopper$WeatherState, $SoundType, $SimpleWaterloggedBlock, $StairBlock, $Block, $SlabBlock } from "@package/net/minecraft/world/level/block";
import { $Class, $Iterable } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as connected from "@package/com/simibubi/create/foundation/block/connected";
export * as render from "@package/com/simibubi/create/foundation/block/render";

declare module "@package/com/simibubi/create/foundation/block" {
    export class $DyedBlockList<T extends $Block> implements $Iterable<$BlockEntry<T>> {
        get(arg0: $DyeColor_): $BlockEntry<$BlockEntry<T>>;
        toArray(): $BlockEntry<$BlockEntry<T>>[];
        iterator(): $Iterator<$BlockEntry<$BlockEntry<T>>>;
        contains(arg0: $Block_): boolean;
        spliterator(): $Spliterator<$BlockEntry<T>>;
        forEach(arg0: $Consumer_<$BlockEntry<T>>): void;
        constructor(arg0: $Function_<$DyeColor, $BlockEntry<$BlockEntry<T>>>);
        [Symbol.iterator](): Iterator<$BlockEntry<$BlockEntry<T>>>
    }
    export class $CopperBlockSet$SlabVariant implements $CopperBlockSet$Variant<$SlabBlock> {
        getFactory(arg0: $CopperBlockSet, arg1: $WeatheringCopper$WeatherState_, arg2: boolean): $NonNullFunction<$BlockBehaviour$Properties, $SlabBlock>;
        getSuffix(): string;
        generateBlockState(arg0: $DataGenContext<$Block_, $SlabBlock>, arg1: $RegistrateBlockstateProvider, arg2: $CopperBlockSet, arg3: $WeatheringCopper$WeatherState_, arg4: boolean): void;
        generateLootTable(arg0: $RegistrateBlockLootTables, arg1: $SlabBlock, arg2: $CopperBlockSet, arg3: $WeatheringCopper$WeatherState_, arg4: boolean): void;
        generateRecipes(arg0: $BlockEntry<never>, arg1: $DataGenContext<$Block_, $SlabBlock>, arg2: $RegistrateRecipeProvider): void;
        static INSTANCE: $CopperBlockSet$SlabVariant;
        get suffix(): string;
    }
    export class $WrenchableDirectionalBlock extends $DirectionalBlock implements $IWrenchable {
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        explosionResistance: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        drops: $ResourceKey<$LootTable>;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        dynamicShape: boolean;
        soundType: $SoundType;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$WrenchableDirectionalBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $ProperWaterloggedBlock {
        static withWater(arg0: $LevelAccessor, arg1: $BlockState_, arg2: $BlockPos_): $BlockState;
        static WATERLOGGED: $BooleanProperty;
    }
    export interface $ProperWaterloggedBlock extends $SimpleWaterloggedBlock {
        updateWater(arg0: $LevelAccessor, arg1: $BlockState_, arg2: $BlockPos_): void;
        withWater(arg0: $BlockState_, arg1: $BlockPlaceContext): $BlockState;
        fluidState(arg0: $BlockState_): $FluidState;
    }
    export class $CopperBlockSet$BlockVariant implements $CopperBlockSet$Variant<$Block> {
        getFactory(arg0: $CopperBlockSet, arg1: $WeatheringCopper$WeatherState_, arg2: boolean): $NonNullFunction<$BlockBehaviour$Properties, $Block>;
        getSuffix(): string;
        generateBlockState(arg0: $DataGenContext<$Block_, $Block_>, arg1: $RegistrateBlockstateProvider, arg2: $CopperBlockSet, arg3: $WeatheringCopper$WeatherState_, arg4: boolean): void;
        generateRecipes(arg0: $BlockEntry<never>, arg1: $DataGenContext<$Block_, $Block_>, arg2: $RegistrateRecipeProvider): void;
        generateLootTable(arg0: $RegistrateBlockLootTables, arg1: $Block_, arg2: $CopperBlockSet, arg3: $WeatheringCopper$WeatherState_, arg4: boolean): void;
        static INSTANCE: $CopperBlockSet$BlockVariant;
        get suffix(): string;
    }
    export class $CreateCopperStairBlock extends $StairBlock {
        static TOP_SHAPES: $VoxelShape[];
        explosionResistance: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static HALF: $EnumProperty<$Half>;
        baseState: $BlockState;
        static UPDATE_ALL: number;
        drops: $ResourceKey<$LootTable>;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        dynamicShape: boolean;
        static OCTET_NNN: $VoxelShape;
        static OCTET_NPP: $VoxelShape;
        static OCTET_PPN: $VoxelShape;
        static OCTET_NPN: $VoxelShape;
        soundType: $SoundType;
        jumpFactor: number;
        static OCTET_PNP: $VoxelShape;
        static TOP_AABB: $VoxelShape;
        static UPDATE_IMMEDIATE: number;
        static OCTET_NNP: $VoxelShape;
        static OCTET_PNN: $VoxelShape;
        static OCTET_PPP: $VoxelShape;
        static CODEC: $MapCodec<$StairBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static SHAPE: $EnumProperty<$StairsShape>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static BOTTOM_AABB: $VoxelShape;
        static INSTANT: number;
        static BOTTOM_SHAPES: $VoxelShape[];
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        base: $Block;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $BigOutlines {
        static pick(): void;
        constructor();
    }
    export class $CopperBlockSet$Variant<T extends $Block> {
    }
    export interface $CopperBlockSet$Variant<T extends $Block> {
        getFactory(arg0: $CopperBlockSet, arg1: $WeatheringCopper$WeatherState_, arg2: boolean): $NonNullFunction<$BlockBehaviour$Properties, T>;
        getSuffix(): string;
        generateBlockState(arg0: $DataGenContext<$Block_, T>, arg1: $RegistrateBlockstateProvider, arg2: $CopperBlockSet, arg3: $WeatheringCopper$WeatherState_, arg4: boolean): void;
        generateLootTable(arg0: $RegistrateBlockLootTables, arg1: T, arg2: $CopperBlockSet, arg3: $WeatheringCopper$WeatherState_, arg4: boolean): void;
        generateRecipes(arg0: $BlockEntry<never>, arg1: $DataGenContext<$Block_, T>, arg2: $RegistrateRecipeProvider): void;
        get suffix(): string;
    }
    export class $CopperBlockSet$StairVariant implements $CopperBlockSet$Variant<$StairBlock> {
        getFactory(arg0: $CopperBlockSet, arg1: $WeatheringCopper$WeatherState_, arg2: boolean): $NonNullFunction<$BlockBehaviour$Properties, $StairBlock>;
        getSuffix(): string;
        generateBlockState(arg0: $DataGenContext<$Block_, $StairBlock>, arg1: $RegistrateBlockstateProvider, arg2: $CopperBlockSet, arg3: $WeatheringCopper$WeatherState_, arg4: boolean): void;
        generateRecipes(arg0: $BlockEntry<never>, arg1: $DataGenContext<$Block_, $StairBlock>, arg2: $RegistrateRecipeProvider): void;
        generateLootTable(arg0: $RegistrateBlockLootTables, arg1: $StairBlock, arg2: $CopperBlockSet, arg3: $WeatheringCopper$WeatherState_, arg4: boolean): void;
        static INSTANCE: $CopperBlockSet$StairVariant;
        get suffix(): string;
    }
    export class $ItemUseOverrides {
        static onBlockActivated(arg0: $PlayerInteractEvent$RightClickBlock): void;
        static addBlock(arg0: $Block_): void;
        constructor();
    }
    export class $CopperRegistries {
        static addWaxable(arg0: $Holder_<$Block>, arg1: $Holder_<$Block>): void;
        static addWeathering(arg0: $Holder_<$Block>, arg1: $Holder_<$Block>): void;
        static getWaxableView(): $Map<$Holder<$Block>, $Holder<$Block>>;
        static getWeatheringView(): $Map<$Holder<$Block>, $Holder<$Block>>;
        constructor();
        static get waxableView(): $Map<$Holder<$Block>, $Holder<$Block>>;
        static get weatheringView(): $Map<$Holder<$Block>, $Holder<$Block>>;
    }
    export class $CopperBlockSet {
        getName(): string;
        get(arg0: $CopperBlockSet$Variant<never>, arg1: $WeatheringCopper$WeatherState_, arg2: boolean): $BlockEntry<never>;
        getVariants(): $CopperBlockSet$Variant<never>[];
        static getWeatherStatePrefix(arg0: $WeatheringCopper$WeatherState_): string;
        hasVariant(arg0: $CopperBlockSet$Variant<never>): boolean;
        getStandard(): $BlockEntry<never>;
        getEndTextureName(): string;
        static DEFAULT_VARIANTS: $CopperBlockSet$Variant<never>[];
        constructor(arg0: $AbstractRegistrate<never>, arg1: string, arg2: string, arg3: $CopperBlockSet$Variant<never>[], arg4: $NonNullBiConsumer_<$DataGenContext<$Block, never>, $RegistrateRecipeProvider>, arg5: $NonNullBiConsumer_<$WeatheringCopper$WeatherState, $Block>);
        constructor(arg0: $AbstractRegistrate<never>, arg1: string, arg2: string, arg3: $CopperBlockSet$Variant<never>[], arg4: $NonNullBiConsumer_<$DataGenContext<$Block, never>, $RegistrateRecipeProvider>, arg5: string, arg6: $NonNullBiConsumer_<$WeatheringCopper$WeatherState, $Block>);
        constructor(arg0: $AbstractRegistrate<never>, arg1: string, arg2: string, arg3: $CopperBlockSet$Variant<never>[]);
        constructor(arg0: $AbstractRegistrate<never>, arg1: string, arg2: string, arg3: $CopperBlockSet$Variant<never>[], arg4: $NonNullBiConsumer_<$DataGenContext<$Block, never>, $RegistrateRecipeProvider>);
        constructor(arg0: $AbstractRegistrate<never>, arg1: string, arg2: string, arg3: $CopperBlockSet$Variant<never>[], arg4: string);
        get name(): string;
        get variants(): $CopperBlockSet$Variant<never>[];
        get standard(): $BlockEntry<never>;
        get endTextureName(): string;
    }
    export class $IHaveBigOutline {
    }
    export interface $IHaveBigOutline {
    }
    export class $CreateWeatheringCopperStairBlock extends $WeatheringCopperStairBlock {
        static TOP_SHAPES: $VoxelShape[];
        explosionResistance: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static HALF: $EnumProperty<$Half>;
        baseState: $BlockState;
        static UPDATE_ALL: number;
        drops: $ResourceKey<$LootTable>;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        dynamicShape: boolean;
        static OCTET_NNN: $VoxelShape;
        static OCTET_NPP: $VoxelShape;
        static OCTET_PPN: $VoxelShape;
        static OCTET_NPN: $VoxelShape;
        soundType: $SoundType;
        jumpFactor: number;
        static OCTET_PNP: $VoxelShape;
        static TOP_AABB: $VoxelShape;
        static UPDATE_IMMEDIATE: number;
        static OCTET_NNP: $VoxelShape;
        static OCTET_PNN: $VoxelShape;
        static OCTET_PPP: $VoxelShape;
        static CODEC: $MapCodec<$WeatheringCopperStairBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static SHAPE: $EnumProperty<$StairsShape>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static BOTTOM_AABB: $VoxelShape;
        static INSTANT: number;
        static BOTTOM_SHAPES: $VoxelShape[];
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        base: $Block;
        constructor(arg0: $WeatheringCopper$WeatherState_, arg1: $BlockBehaviour$Properties);
    }
    export class $IBE<T extends $BlockEntity> {
        static onRemove(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_): void;
    }
    export interface $IBE<T extends $BlockEntity> extends $EntityBlock {
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<T>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<T, $InteractionResult>): $InteractionResult;
        getBlockEntityType(): $BlockEntityType<T>;
        getBlockEntityClass(): $Class<T>;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): (T) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<T, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): T;
        get blockEntityType(): $BlockEntityType<T>;
        get blockEntityClass(): $Class<T>;
    }
}
