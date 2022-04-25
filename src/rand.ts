import Prando from "prando";

export type Point = {
    x: number;
    y: number;
};

export type Area = {
    x: number;
    y: number;
    w: number;
    h: number;
};

export const rng = new Prando(window.fxhash);

export const rand = (fx: boolean = false):number => {
    if (fx) {
        return window.fxrand();
    }
    return rng.next();
};

export const randBoolean = (fx: boolean = false): boolean => {
    return randInt(2, fx) == 0;
};
export const randInt = (max: number, fx: boolean = false): number => {
    return (rand(fx) * max) << 0;
};

export const randElement = (list: Array<any>, fx: boolean = false): any => {
    return list[randInt(list.length, fx)];
};

export const randPoint = (
    maxX: number,
    maxY: number,
    fx: boolean = false
): Point => {
    return {
        x: randInt(maxX, fx),
        y: randInt(maxY, fx),
    };
};
