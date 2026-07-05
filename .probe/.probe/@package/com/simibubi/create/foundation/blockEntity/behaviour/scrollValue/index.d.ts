import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $PhysicalFloat } from "@package/net/createmod/catnip/animation";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List } from "@package/java/util";
import { $BehaviourType, $ValueSettingsBoard, $ValueSettingsBehaviour, $BlockEntityBehaviour, $ValueSettingsBehaviour$ValueSettings_, $ValueSettingsBehaviour$ValueSettings, $ValueBoxTransform } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $Consumer_, $Supplier_, $Function_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $Direction_ } from "@package/net/minecraft/core";
import { $AllIcons } from "@package/com/simibubi/create/foundation/gui";
import { $Enum, $Class } from "@package/java/lang";
import { $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/com/simibubi/create/foundation/blockEntity/behaviour/scrollValue" {
    export class $ScrollValueRenderer {
        static tick(): void;
        constructor();
    }
    export class $INamedIconOptions {
    }
    export interface $INamedIconOptions {
        getIcon(): $AllIcons;
        getTranslationKey(): string;
        get icon(): $AllIcons;
        get translationKey(): string;
    }
    export class $ScrollValueBehaviour$StepContext {
        forward: boolean;
        shift: boolean;
        control: boolean;
        currentValue: number;
        constructor();
    }
    export class $ScrollValueHandler {
        static tick(): void;
        static getScroll(arg0: number): number;
        static wrenchCog: $PhysicalFloat;
        constructor();
    }
    export class $ScrollValueBehaviour extends $BlockEntityBehaviour implements $ValueSettingsBehaviour {
        getValue(): number;
        setValue(arg0: number): void;
        isActive(): boolean;
        between(arg0: number, arg1: number): $ScrollValueBehaviour;
        setLabel(arg0: $Component_): void;
        onlyActiveWhen(arg0: $Supplier_<boolean>): $ScrollValueBehaviour;
        withFormatter(arg0: $Function_<number, string>): $ScrollValueBehaviour;
        testHit(arg0: $Vec3_): boolean;
        getValueSettings(): $ValueSettingsBehaviour$ValueSettings;
        getSlotPositioning(): $ValueBoxTransform;
        requiresWrench(): $ScrollValueBehaviour;
        createBoard(arg0: $Player, arg1: $BlockHitResult): $ValueSettingsBoard;
        withClientCallback(arg0: $Consumer_<number>): $ScrollValueBehaviour;
        setValueSettings(arg0: $Player, arg1: $ValueSettingsBehaviour$ValueSettings_, arg2: boolean): void;
        onShortInteract(arg0: $Player, arg1: $InteractionHand_, arg2: $Direction_, arg3: $BlockHitResult): void;
        withCallback(arg0: $Consumer_<number>): $ScrollValueBehaviour;
        formatValue(): string;
        onlyVisibleWithWrench(): boolean;
        readFromClipboard(arg0: $HolderLookup$Provider, arg1: $CompoundTag_, arg2: $Player, arg3: $Direction_, arg4: boolean): boolean;
        getClipboardKey(): string;
        writeToClipboard(arg0: $HolderLookup$Provider, arg1: $CompoundTag_, arg2: $Direction_): boolean;
        netId(): number;
        playFeedbackSound(arg0: $BlockEntityBehaviour): void;
        bypassesInput(arg0: $ItemStack_): boolean;
        newSettingHovered(arg0: $ValueSettingsBehaviour$ValueSettings_): void;
        mayInteract(arg0: $Player): boolean;
        acceptsValueSettings(): boolean;
        blockEntity: $SmartBlockEntity;
        label: $Component;
        static TYPE: $BehaviourType<$ScrollValueBehaviour>;
        value: number;
        constructor(arg0: $Component_, arg1: $SmartBlockEntity, arg2: $ValueBoxTransform);
        get active(): boolean;
        get slotPositioning(): $ValueBoxTransform;
        get clipboardKey(): string;
    }
    export class $ScrollOptionBehaviour<E extends $Enum<E>> extends $ScrollValueBehaviour {
        get(): E;
        blockEntity: $SmartBlockEntity;
        label: $Component;
        static TYPE: $BehaviourType<$ScrollValueBehaviour>;
        value: number;
        constructor(arg0: $Class<E>, arg1: $Component_, arg2: $SmartBlockEntity, arg3: $ValueBoxTransform);
    }
    export class $BulkScrollValueBehaviour extends $ScrollValueBehaviour {
        getBulk(): $List<$SmartBlockEntity>;
        blockEntity: $SmartBlockEntity;
        label: $Component;
        static TYPE: $BehaviourType<$ScrollValueBehaviour>;
        value: number;
        constructor(arg0: $Component_, arg1: $SmartBlockEntity, arg2: $ValueBoxTransform, arg3: $Function_<$SmartBlockEntity, $List<$SmartBlockEntity>>);
        get bulk(): $List<$SmartBlockEntity>;
    }
}
