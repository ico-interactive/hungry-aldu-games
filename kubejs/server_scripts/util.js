const { $MinecraftServer } = require("@package/net/minecraft/server");

/**
 * @param {$MinecraftServer} server - the server instance
 * @param {string} gamemode - gamemode to set the players to
 */
function setPlayersToGamemode(server, gamemode) {
  server.players.forEach((player) => {
    server.runCommand(`/gamemode ${gamemode} ${player.username}`);
  });
}
