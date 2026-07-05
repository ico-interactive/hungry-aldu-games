import { $Level_ } from "@package/net/minecraft/world/level";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $UUID, $Map, $Set, $UUID_ } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $PlayerEvent$StartTracking } from "@package/net/neoforged/neoforge/event/entity/player";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $EntityTickEvent } from "@package/net/neoforged/neoforge/event/tick";
import { $IAttachmentSerializer } from "@package/net/neoforged/neoforge/attachment";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $EntityJoinLevelEvent, $EntityLeaveLevelEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $Enum, $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $AbstractMinecart } from "@package/net/minecraft/world/entity/vehicle";
import { $ChunkEvent$Unload } from "@package/net/neoforged/neoforge/event/level";
import { $ClientboundPacketPayload, $BasePacketPayload$PacketTypeProvider } from "@package/net/createmod/catnip/net/base";
import { $WorldAttached } from "@package/net/createmod/catnip/data";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/contraptions/minecart/capability" {
    export class $MinecartControllerUpdatePacket extends $Record implements $ClientboundPacketPayload {
        handle(arg0: $LocalPlayer): void;
        entityId(): number;
        nbt(): $CompoundTag;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $MinecartControllerUpdatePacket>;
        constructor(arg0: $MinecartController, arg1: $HolderLookup$Provider);
        constructor(entityId: number, nbt: $CompoundTag_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $MinecartControllerUpdatePacket}.
     */
    export type $MinecartControllerUpdatePacket_ = { nbt?: $CompoundTag_, entityId?: number,  } | [nbt?: $CompoundTag_, entityId?: number, ];
    export class $MinecartController$CouplingData {
    }
    export class $MinecartController$StallData {
    }
    export class $MinecartController$Type extends $Enum<$MinecartController$Type> implements $StringRepresentable {
        getRemappedEnumConstantName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $MinecartController$Type}.
     */
    export type $MinecartController$Type_ = "empty" | "normal";
    export class $MinecartController$Empty extends $MinecartController {
        static SERIALIZER: $IAttachmentSerializer<$CompoundTag, $MinecartController>;
        static EMPTY: $MinecartController;
    }
    export class $MinecartController implements $INBTSerializable<$CompoundTag> {
        isEmpty(): boolean;
        isPresent(): boolean;
        tick(): void;
        isConnectedToCoupling(): boolean;
        hasContraptionCoupling(arg0: boolean): boolean;
        isStalled(): boolean;
        sendData(arg0: $AbstractMinecart): void;
        sendData(): void;
        getCouplingLength(arg0: boolean): number;
        prepareForCoupling(arg0: boolean): void;
        removeConnection(arg0: boolean): void;
        setStalledExternally(arg0: boolean): void;
        decouple(): void;
        coupleWith(arg0: boolean, arg1: $UUID_, arg2: number, arg3: boolean): void;
        isFullyCoupled(): boolean;
        isLeadingCoupling(): boolean;
        isCoupledThroughContraption(): boolean;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        cart(): $AbstractMinecart;
        getCoupledCart(arg0: boolean): $UUID;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static SERIALIZER: $IAttachmentSerializer<$CompoundTag, $MinecartController>;
        static EMPTY: $MinecartController;
        constructor(arg0: $AbstractMinecart);
        get empty(): boolean;
        get present(): boolean;
        get connectedToCoupling(): boolean;
        get stalled(): boolean;
        set stalledExternally(value: boolean);
        get fullyCoupled(): boolean;
        get leadingCoupling(): boolean;
        get coupledThroughContraption(): boolean;
    }
    export class $CapabilityMinecartController {
        static attach(arg0: $EntityJoinLevelEvent): void;
        static tick(arg0: $Level_): void;
        static startTracking(arg0: $PlayerEvent$StartTracking): void;
        static onEntityDeath(arg0: $EntityLeaveLevelEvent): void;
        static entityTick(arg0: $EntityTickEvent): void;
        static getIfPresent(arg0: $Level_, arg1: $UUID_): $MinecartController;
        static onChunkUnloaded(arg0: $ChunkEvent$Unload): void;
        static loadedMinecartsByUUID: $WorldAttached<$Map<$UUID, $MinecartController>>;
        static loadedMinecartsWithCoupling: $WorldAttached<$Set<$UUID>>;
        constructor();
    }
}
