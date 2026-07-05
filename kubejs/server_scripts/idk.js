ServerEvents.commandRegistry(event => {
  const { commands: Commands } = event

  event.register(
    Commands.literal("hi")
      .executes(ctx => {
        const player = ctx.source.player
        player.tell("hello mom")
        return 1
      })
  )
})