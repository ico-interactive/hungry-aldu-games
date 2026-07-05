import { $BehaviorControl } from "@package/net/minecraft/world/entity/ai/behavior";
import { $SensorType_, $Sensor } from "@package/net/minecraft/world/entity/ai/sensing";
import { $Logger } from "@package/org/slf4j";
import { $Dynamic, $DataResult, $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $Schedule, $Activity_, $Activity, $Schedule_ } from "@package/net/minecraft/world/entity/schedule";
import { $List, $Map, $Set, $Set_, $Collection_, $List_ } from "@package/java/util";
import { $MemoryModuleType_, $MemoryModuleType, $MemoryStatus_, $ExpirableValue } from "@package/net/minecraft/world/entity/ai/memory";
import { $Supplier_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Stream } from "@package/java/util/stream";
export * as goal from "@package/net/minecraft/world/entity/ai/goal";
export * as behavior from "@package/net/minecraft/world/entity/ai/behavior";
export * as attributes from "@package/net/minecraft/world/entity/ai/attributes";
export * as util from "@package/net/minecraft/world/entity/ai/util";
export * as village from "@package/net/minecraft/world/entity/ai/village";
export * as navigation from "@package/net/minecraft/world/entity/ai/navigation";
export * as sensing from "@package/net/minecraft/world/entity/ai/sensing";
export * as control from "@package/net/minecraft/world/entity/ai/control";
export * as memory from "@package/net/minecraft/world/entity/ai/memory";
export * as gossip from "@package/net/minecraft/world/entity/ai/gossip";
export * as targeting from "@package/net/minecraft/world/entity/ai/targeting";

declare module "@package/net/minecraft/world/entity/ai" {
    export class $Brain$MemoryValue<U> {
    }
    export class $Brain<E extends $LivingEntity> {
        static provider<E extends $LivingEntity>(memoryTypes: $Collection_<$MemoryModuleType_<never>>, sensorTypes: $Collection_<$SensorType_<$Sensor<E>>>): $Brain$Provider<E>;
        setMemory<U>(memoryType: $MemoryModuleType_<U>, memory: (U) | undefined): void;
        setMemory<U>(memoryType: $MemoryModuleType_<U>, memory: U | null): void;
        isActive(activity: $Activity_): boolean;
        setMemoryInternal<U>(memoryType: $MemoryModuleType_<U>, memory: ($ExpirableValue<never>) | undefined): void;
        tick(level: $ServerLevel, entity: E): void;
        copyWithoutBehaviors(): $Brain<E>;
        addActivityWithConditions(activity: $Activity_, tasks: $ImmutableList<$Pair<number, $BehaviorControl<E>>>, memoryStatuses: $Set_<$Pair<$MemoryModuleType_<never>, $MemoryStatus_>>): void;
        updateActivityFromSchedule(dayTime: number, arg1: number): void;
        getActiveNonCoreActivity(): ($Activity) | undefined;
        isMemoryValue<U>(memoryType: $MemoryModuleType_<U>, memory: U): boolean;
        getMemoryInternal<U>(type: $MemoryModuleType_<U>): (U) | undefined;
        /**
         * @deprecated
         */
        getMemories(): $Map<$MemoryModuleType<never>, ($ExpirableValue<never>) | undefined>;
        stopAll(level: $ServerLevel, entity: E): void;
        setCoreActivities(newActivities: $Set_<$Activity_>): void;
        addActivity(activity: $Activity_, priorityStart: number, tasks: $ImmutableList<$BehaviorControl<E>>): void;
        addActivity(activity: $Activity_, tasks: $ImmutableList<$Pair<number, $BehaviorControl<E>>>): void;
        setDefaultActivity(activity: $Activity_): void;
        useDefaultActivity(): void;
        setSchedule(newSchedule: $Schedule_): void;
        getMemory<U>(type: $MemoryModuleType_<U>): (U) | undefined;
        eraseMemory<U>(type: $MemoryModuleType_<U>): void;
        checkMemory(memoryType: $MemoryModuleType_<never>, memoryStatus: $MemoryStatus_): boolean;
        addActivityAndRemoveMemoriesWhenStopped(activity: $Activity_, tasks: $ImmutableList<$Pair<number, $BehaviorControl<E>>>, memorieStatuses: $Set_<$Pair<$MemoryModuleType_<never>, $MemoryStatus_>>, memoryTypes: $Set_<$MemoryModuleType_<never>>): void;
        getSchedule(): $Schedule;
        static codec<E extends $LivingEntity>(memoryTypes: $Collection_<$MemoryModuleType_<never>>, sensorTypes: $Collection_<$SensorType_<$Sensor<E>>>): $Codec<$Brain<E>>;
        createPriorityPairs(priorityStart: number, tasks: $ImmutableList<$BehaviorControl<E>>): $ImmutableList<$Pair<number, $BehaviorControl<E>>>;
        /**
         * @deprecated
         */
        getActiveActivities(): $Set<$Activity>;
        /**
         * @deprecated
         */
        getRunningBehaviors(): $List<$BehaviorControl<E>>;
        getTimeUntilExpiry<U>(memoryType: $MemoryModuleType_<U>): number;
        memories(): $Stream<$Brain$MemoryValue<never>>;
        clearMemories(): void;
        serializeStart<T>(ops: $DynamicOps<T>): $DataResult<T>;
        removeAllBehaviors(): void;
        hasMemoryValue(type: $MemoryModuleType_<never>): boolean;
        addActivityAndRemoveMemoryWhenStopped(activity: $Activity_, priorityStart: number, tasks: $ImmutableList<$BehaviorControl<E>>, memoryType: $MemoryModuleType_<never>): void;
        setActiveActivityToFirstValid(activities: $List_<$Activity_>): void;
        setActiveActivityIfPossible(activity: $Activity_): void;
        setMemoryWithExpiry<U>(memoryType: $MemoryModuleType_<U>, memory: U, timeToLive: number): void;
        static LOGGER: $Logger;
        constructor(memoryModuleTypes: $Collection_<$MemoryModuleType_<never>>, sensorTypes: $Collection_<$SensorType_<$Sensor<E>>>, memoryValues: $ImmutableList<$Brain$MemoryValue<never>>, codec: $Supplier_<$Codec<$Brain<E>>>);
        get activeNonCoreActivity(): ($Activity) | undefined;
        set coreActivities(value: $Set_<$Activity_>);
        set defaultActivity(value: $Activity_);
        get activeActivities(): $Set<$Activity>;
        get runningBehaviors(): $List<$BehaviorControl<E>>;
        set activeActivityToFirstValid(value: $List_<$Activity_>);
        set activeActivityIfPossible(value: $Activity_);
    }
    export class $Brain$Provider<E extends $LivingEntity> {
        makeBrain(ops: $Dynamic<never>): $Brain<E>;
        constructor(memoryTypes: $Collection_<$MemoryModuleType_<never>>, sensorTypes: $Collection_<$SensorType_<$Sensor<E>>>);
    }
}
