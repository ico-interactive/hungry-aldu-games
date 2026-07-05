console.log("BlockManager loaded")
const PROTECTED_BLOCKS = new Set([
    "minecraft:bedrock",
    "minecraft:barrier",
    "minecraft:white_concrete",
    "minecraft:snow_block"
])

BlockEvents.broken(event => {
    const id = String(event.block.id)

    console.log("BROKE:", id)

    if (PROTECTED_BLOCKS.has(id)) {
        event.cancel()
        event.player.tell("Block protected")
    }
})