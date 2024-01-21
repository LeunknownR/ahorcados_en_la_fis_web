export const KEYS_OF_KEYBOARD = {
    LETTERS: [
        "A", "B", "C", "D", "E", "F", "G", "H",
        "I", "J", "K", "L", "M", "N", "Ñ", "O",
        "P", "Q", "R", "S", "T", "U", "V", "W",
        "X", "Y", "Z"
    ],
    NUMBERS: [
        "0", "1", "2", "3", "4", "5",
        "6", "7", "8", "9"
    ]
};

export const isKeyOfKeyboard = (key) => {
    return Object.values(KEYS_OF_KEYBOARD).flat().includes(key.toUpperCase());
}