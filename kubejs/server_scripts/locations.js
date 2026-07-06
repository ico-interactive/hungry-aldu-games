/**
 * @typedef Location
 * @type {object}
 * @property {string} level - level ID of location.
 * @property {number} x - x coordinates.
 * @property {number} y - y coordinates.
 * @property {number} z - z coordinates.
 */

/** @type {{Location}} */
const lobbyLocation = { level: "javd:void", x: 7025.5, y: 125, z: -2955.5 };

/** @type {{string, Location}} */
const teamLocations = {
  red: {
    level: "minecraft:overworld",
    x: 7822.0,
    y: 64.0,
    z: -3174.0,
  },
  blue: {
    level: "minecraft:overworld",
    x: 7648.0,
    y: 64.0,
    z: -2437.0,
  },
  yellow: {
    level: "minecraft:overworld",
    x: 6635.0,
    y: 64.0,
    z: -2637.0,
  },
  green: {
    level: "minecraft:overworld",
    x: 6871.0,
    y: 64.0,
    z: -3540.0,
  },
};
