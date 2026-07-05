import { $Level_ } from "@package/net/minecraft/world/level";
import { $AbstractContraptionEntity } from "@package/com/simibubi/create/content/contraptions";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Map, $Set } from "@package/java/util";

declare module "@package/rbasamoyai/createbigcannons/remix" {
    export class $HasFragileContraption {
        static checkForIntersectingBlocks(arg0: $Level_, arg1: $AbstractContraptionEntity, arg2: $HasFragileContraption): boolean;
        static defaultShouldCheck(): boolean;
        static defaultBlockBreaksAssembly(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $HasFragileContraption): boolean;
    }
    export interface $HasFragileContraption {
        createbigcannons$setBrokenDisassembly(arg0: boolean): void;
        createbigcannons$isBrokenDisassembly(): boolean;
        createbigcannons$fragileDisassemble(): void;
        createbigcannons$getEncounteredBlocks(): $Map<$BlockPos, $BlockState>;
        createbigcannons$shouldCheckFragility(): boolean;
        createbigcannons$blockBreaksDisassembly(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        createbigcannons$getFragileBlockPositions(): $Set<$BlockPos>;
    }
    export class $CustomBlockDamageDisplay {
    }
    export interface $CustomBlockDamageDisplay {
        createbigcannons$trackCustomProgress(arg0: $BlockPos_, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $CustomBlockDamageDisplay}.
     */
    export type $CustomBlockDamageDisplay_ = ((arg0: $BlockPos, arg1: number) => void);
}
