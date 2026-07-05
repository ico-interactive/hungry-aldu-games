import { $BlockAndTintGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $ToIntFunction_ } from "@package/java/util/function";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ColorProviderRegistryImpl$ColorMapperHolder } from "@package/net/fabricmc/fabric/impl/client/rendering";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Set } from "@package/java/util";

declare module "@package/net/minecraft/client/color/block" {
    export class $BlockTintCache$LatestCacheInfo {
    }
    export class $BlockColor {
    }
    export interface $BlockColor {
        getColor(state: $BlockState_, level: $BlockAndTintGetter | null, pos: $BlockPos_ | null, tintIndex: number): number;
    }
    /**
     * Values that may be interpreted as {@link $BlockColor}.
     */
    export type $BlockColor_ = ((arg0: $BlockState, arg1: $BlockAndTintGetter, arg2: $BlockPos, arg3: number) => number);
    export class $BlockColors implements $ColorProviderRegistryImpl$ColorMapperHolder<any, any> {
        get(arg0: $Block_): $BlockColor;
        /**
         * @deprecated
         */
        register(blockColor: $BlockColor_, ...blocks: $Block_[]): void;
        static createDefault(): $BlockColors;
        getColor(state: $BlockState_, level: $BlockAndTintGetter | null, pos: $BlockPos_ | null, tintIndex: number): number;
        getColor(state: $BlockState_, level: $Level_, pos: $BlockPos_): number;
        getColoringProperties(block: $Block_): $Set<$Property<never>>;
        constructor();
    }
    export class $BlockTintCache$CacheData {
    }
    export class $BlockTintCache {
        invalidateForChunk(chunkX: number, chunkZ: number): void;
        invalidateAll(): void;
        getColor(pos: $BlockPos_): number;
        constructor(source: $ToIntFunction_<$BlockPos>);
    }
}
