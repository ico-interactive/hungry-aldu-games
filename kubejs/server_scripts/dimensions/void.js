import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Entity } from "@package/net/minecraft/world/entity";

const DIMENSION_NAME = "javd:void";

PlayerEvents.tick((event) => {
  const { player } = event;
  if (player.fallDistance > 40) {
    player.resetFallDistance();
    player.teleportTo(lobbyLocation.x, lobbyLocation.y, lobbyLocation.z);
    player.runCommandSilent(
      `/title @p title {"text": "noob detected", "color": "gold"}`,
    );
    player.runCommandSilent(
      `/title @p subtitle {"text": "you are the noob", "color": "red"}`,
    );
    player.potionEffects.add("minecraft:blindness", 100, 2, false, false);
    player.runCommandSilent(`/playsound minecraft:entity.armadillo.death`);
  }
});
