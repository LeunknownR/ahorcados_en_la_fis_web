import { createContext } from "react";

const INIT_CONTEXT = {
    isMaster: false,
    gameData: {
        "id": "x0xxx616X",
        "master": {
            "id": "x0kSAD26",
            "nickname": "leunknown"
        },
        "soothsayer": {
            "id": "zCkSlDb0",
            "nickname": "eldiablo"
        },
        "status": 3,
        "currentPhraseData": {
            "phrase": "GIL",
            "dataCharacterList": [
                {
                    value: "G",
                    found: true,
                    nextIsSpace: false
                },
                {
                    value: "I",
                    found: false,
                    nextIsSpace: false
                },
                {
                    value: "L",
                    found: false,
                    nextIsSpace: false
                }
            ],
            "lifes": 6,
            "usedKeys": ["A", "B", "G"]
        },
        "winner": null
    },
    getUserNickname: () => ""
};
const GameContext = createContext(INIT_CONTEXT);

export default GameContext;