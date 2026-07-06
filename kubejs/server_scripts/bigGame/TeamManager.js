import { $MinecraftServer } from "@package/net/minecraft/server";

const teams = new Map();
teams.set("minecraft:red_concrete", "red");
teams.set("minecraft:light_blue_concrete", "blue");
teams.set("minecraft:yellow_concrete", "yellow");
teams.set("minecraft:lime_concrete", "green");

// WARNING!!!!!: gets cleared on /clear
const teamList = new Map();
teamList.set("red", []);
teamList.set("blue", []);
teamList.set("yellow", []);
teamList.set("green", []);

const COUNTDOWN = 3;

/**
 * @param {$MinecraftServer} server - server instance
 * @param {number} seconds - length of countdown in seconds
 */
function createCountdown(server, seconds) {
  server.scheduleInTicks(20, () => {
    server.tell(`${seconds}`);
    if (seconds > 0) createCountdown(server, seconds - 1);
  });
}

ServerEvents.commandRegistry((event) => {
  const { commands: Commands } = event;

  event.register(
    Commands.literal("start").executes((ctx) => {
      const server = ctx.source.server;

      //resets teamlist
      for (const key of teamList.keys()) {
        teamList.set(key, []);
      }

      // 10 sec timer
      createCountdown(server, COUNTDOWN);

      // after COUNTDOWN seconds, call below function
      server.scheduleInTicks(20 * COUNTDOWN + 20, () => {
        server.tell("teams assigned");

        // Everything below runs after COUNTDOWN seconds
        server.players.forEach((player) => {
          // pos finder for each team block
          const position = player.getPosition(1).relative("down", 1);
          const block = server
            .getLevel("javd:void")
            .getBlock(
              Math.floor(position.x()),
              Math.round(position.y()),
              Math.floor(position.z()),
            );

          // gets team from block id sends player to team list
          const toTeam = teams.get(String(block.id));
          const list = teamList.get(String(toTeam));
          list.push(player);

          console.log("BLOCK:", block.id);
          console.log("TEAM:", toTeam);

          // teleportin player
          const spawn = teamLocations[toTeam];
          if (spawn) {
            player.teleportToLevel(
              server.getLevel(spawn.level),
              spawn.x,
              spawn.y,
              spawn.z,
              0,
              0,
            );
          }
          // changin states to building
          setPlayersToGamemode(server, "creative");
        });
      });

      return 1;
    }),
  );
});
