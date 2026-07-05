import { $MinecraftServer } from "@package/net/minecraft/server";

const teams = new Map();
teams.set("minecraft:red_concrete", "red");
teams.set("minecraft:light_blue_concrete", "blue");
teams.set("minecraft:yellow_concrete", "yellow");
teams.set("minecraft:lime_concrete", "green");

const teamLocations = new Map();
teamLocations.set("red", [7822.0, 64.0, -3174.0]);
teamLocations.set("blue", [7648.0, 64.0, -2437.0]);
teamLocations.set("yellow", [6635.0, 64.0, -2637.0]);
teamLocations.set("green", [6871.0, 64.0, -3540.0]);

// WARNING!!!!!: gets cleared on /clear
const teamList = new Map();
teamList.set("red", []);
teamList.set("blue", []);
teamList.set("yellow", []);
teamList.set("green", []);

const COUNTDOWN = 3;

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
      server.scheduleInTicks(20 * COUNTDOWN + 60, () => {
        server.tell("teams assigned");

        // Everything below runs after COUNTDOWN seconds
        server.players.forEach((player) => {
          // pos finder for each team block
          const position = player.getPosition(1).relative("down", 1);
          const level = server.getLevel("minecraft:overworld");
          const block = level.getBlock(
            Math.round(position.x()),
            Math.round(position.y()),
            Math.round(position.z()),
          );
          //gets team from block id sends player to team list
          const toTeam = teams.get(String(block.id));
          const list = teamList.get(String(toTeam));
          list.push(player);

          console.log("BLOCK:", block.id);
          console.log("TEAM:", toTeam);

          // teleportin player
          const spawn = teamLocations.get(toTeam);
          if (spawn) {
            player.teleportTo(spawn[0], spawn[1], spawn[2]);
          }
          // changin states to building
          setPlayersToGamemode(server, "creative");
        });
      });

      return 1;
    }),
  );
});
