import { isKeyOfKeyboard } from "../../../../../../../config/keysOfKeyboard";

const CONTROL_KEYS = [
    " ", "Backspace", 
    "ArrowLeft", "ArrowRight",
    "ArrowUp"
];
export const handleKeys = e => {
    if (!isKeyOfKeyboard(e.key) && !CONTROL_KEYS.includes(e.key))
        e.preventDefault();
};