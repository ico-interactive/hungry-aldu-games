// Visit the wiki for more info - https://kubejs.com/

const STATES = Object.freeze({
    LOBBY: "lobby",
    START: "start",
    BUILDING: "building",
    KILLING: "killing",
    ENDING: "ending"
})

let currentState = STATES.LOBBY

global.GameState = {
    set(state, server) {
        currentState = state

        const apply = (mode) => {
            server.players.forEach(p => {
                p.gamemode = mode
            })
        }

        if (state === this.STATES.LOBBY) {
            apply("adventure")
        }

        if (state === this.STATES.BUILDING) {
            apply("creative")
        }

        if (state === this.STATES.KILLING) {
            apply("survival")

            //removes every barrier block in the arena
            //red arena
            server.runCommandSilent(
                "fill 7760 60 -3119 7868 138 -3218 minecraft:air replace minecraft:barrier"
            )
            //blue arena
            server.runCommandSilent(
                "fill 6883 60 -2657 6680 138 -2560 minecraft:air replace minecraft:barrier"
            )
        }
    }


}



global.lobby = {}
global.teamState = {

}