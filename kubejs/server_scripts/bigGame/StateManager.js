

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
                global.GameState.set(global.GameState.STATES.LOBBY, ctx.source.server)

                

                server.players.forEach(player => {
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
                server.tell("go forth ")

                global.GameState.set(
                    global.GameState.STATES.KILLING,
                    server
                )

                

                return 1
            })
    )
})

