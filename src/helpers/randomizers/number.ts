var gen = require("random-seed");

const seededRandomBetweenRange = (seed: (number | string), min: number, max: number) => {
    if (!seed) seed = Math.random()

    const _g = new gen(seed.toString());

    return Math.floor(_g.random() * (max - min + 1) + min);
};

const randomBetweenRange = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export { randomBetweenRange, seededRandomBetweenRange };
