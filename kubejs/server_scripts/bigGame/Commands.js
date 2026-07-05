ServerEvents.commandRegistry(event => {
    const { commands: Commands } = event

    event.register(
        Commands.literal("restart")
            .requires(src => src.hasPermission(4))
            .executes(ctx => {
                const server = ctx.source.server

                server.tell("Restarting server ")

                // simplest possible trigger
                server.runCommandSilent("stop")

                return 1
            })
    )
})