import { KEYS, KEY_COLORS } from "./constants"

export const getKeysWithColors = () => {
    let index = 0;
    const toKeyWithColor = key => {
        const color = KEY_COLORS[index];
        if (index >= KEY_COLORS.length - 1)
            index = 0;
        else index++;
        return { key, color };
    }
    return {
        LETTERS: KEYS.LETTERS.map(toKeyWithColor),
        NUMBERS: KEYS.NUMBERS.map(toKeyWithColor),
    };
}