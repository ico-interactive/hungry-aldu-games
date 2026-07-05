

const lobbyspawn = { x: 7025, y: 226, z: -2951, }


//lobby command + should be ran back after ending
ServerEvents.commandRegistry(event => {
    const { commands: Commands } = event

    event.register(
        Commands.literal("lobby") //creatin back2lobby command
            .executes(ctx => {
                console.log("LOBBY COMMAND EXECUTED")
                const server = ctx.source.server
                const lobby = global.lobby
                global.currentState = "lobby"

                server.players.forEach(player => {
                    server.runCommand(`/gamemode adventure ${p.username}`)
                    player.teleportTo(lobbyspawn.x, lobbyspawn.y, lobbyspawn.z,);
                });

                server.tell("game reset")

                return 1
            })

    )
})
ServerEvents.commandRegistry(event => {
    const { commands: Commands } = event

    event.register(
        Commands.literal("killing")
            .executes(ctx => {
                const server = ctx.source.server

                console.log("KILLING COMMAND EXECUTED")
                server.tell("go forth")

                global.currentState = "killing"
                server.players.forEach(p => {
                    server.runCommand(`/gamemode survival ${p.username}`)
                })

                server.runCommandSilent(
                    "fill 7760 60 -3119 7868 138 -3218 minecraft:air replace minecraft:barrier"
                )
                //blue arena
                server.runCommandSilent(
                    "fill 6883 60 -2657 6680 138 -2560 minecraft:air replace minecraft:barrier"
                )

                return 1
            })
    )
})

