import { $Reference2ObjectMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $Table } from "@package/com/google/common/collect";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Comparable, $Comparable_ } from "@package/java/lang";
import { $FastMap } from "@package/malte0811/ferritecore/fastmap";

declare module "@package/malte0811/ferritecore/ducks" {
    export class $FastMapStateHolder<S> {
    }
    export interface $FastMapStateHolder<S> {
        setNeighborTable(arg0: $Table<$Property<never>, $Comparable_<never>, S>): void;
        getStateMap(): $FastMap<S>;
        setStateIndex(arg0: number): void;
        getNeighborTable(): $Table<$Property<never>, $Comparable<never>, S>;
        getStateIndex(): number;
        setStateMap(arg0: $FastMap<S>): void;
        getVanillaPropertyMap(): $Reference2ObjectMap<$Property<never>, $Comparable<never>>;
        replacePropertyMap(arg0: $Reference2ObjectMap<$Property<never>, $Comparable_<never>>): void;
        get vanillaPropertyMap(): $Reference2ObjectMap<$Property<never>, $Comparable<never>>;
    }
    export class $BlockStateCacheAccess {
    }
    export interface $BlockStateCacheAccess {
        getCollisionShape(): $VoxelShape;
        getOcclusionShapes(): $VoxelShape[];
        getFaceSturdy(): boolean[];
        setFaceSturdy(arg0: boolean[]): void;
        setCollisionShape(arg0: $VoxelShape): void;
        setOcclusionShapes(arg0: $VoxelShape[]): void;
    }
}
