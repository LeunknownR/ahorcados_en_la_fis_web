import { KEY_COLORS } from "./constants";
import { KEYS_OF_KEYBOARD } from "../../../../../../../config/keysOfKeyboard";

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
        LETTERS: KEYS_OF_KEYBOARD.LETTERS.map(toKeyWithColor),
        NUMBERS: KEYS_OF_KEYBOARD.NUMBERS.map(toKeyWithColor),
    };
}