// Visit the wiki for more info - https://kubejs.com/

const STATES = Object.freeze({
    LOBBY: "lobby",
    START: "start",
    BUILDING: "building",
    KILLING: "killing",
    ENDING: "ending"
})

global.currentState = "lobby"
global.lobby = {}
global.teamState = {}