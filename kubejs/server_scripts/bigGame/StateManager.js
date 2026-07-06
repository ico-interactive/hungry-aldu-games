//lobby command + should be ran back after ending
ServerEvents.commandRegistry((event) => {
  const { commands: Commands } = event;

  event.register(
    Commands.literal("lobby") //creatin back2lobby command
      .executes((ctx) => {
        console.log("LOBBY COMMAND EXECUTED");
        const server = ctx.source.server;

        setPlayersToGamemode(server, "adventure");
        server.players.forEach((player) => {
          player.teleportToLevel(
            server.getLevel(lobbyLocation.level),
            lobbyLocation.x,
            lobbyLocation.y,
            lobbyLocation.z,
            180,
            0,
          );
        });

        server.tell("game reset");

        return 1;
      }),
  );
});
ServerEvents.commandRegistry((event) => {
  const { commands: Commands } = event;

  event.register(
    Commands.literal("killing").executes((ctx) => {
      const server = ctx.source.server;

      console.log("KILLING COMMAND EXECUTED");
      server.tell("go forth");

      setPlayersToGamemode(server, "survival");

      server.runCommandSilent(
        "fill 7760 60 -3119 7868 138 -3218 minecraft:air replace minecraft:barrier",
      );
      //blue arena
      server.runCommandSilent(
        "fill 6883 60 -2657 6680 138 -2560 minecraft:air replace minecraft:barrier",
      );

      return 1;
    }),
  );
});
