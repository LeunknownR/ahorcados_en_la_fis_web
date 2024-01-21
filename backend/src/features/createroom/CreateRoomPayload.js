import { hasText, toStringFullTrimmed } from "../../utils/string.js";
import { isArrayWithItems } from "../../utils/array.js";

export default class CreateGameRoomPayload {
    constructor(body) {
        this.masterNickname = this.#toMasterNickname(body?.masterNickname);
        this.phrases = this.#toPhrases(body?.phrases);
    }
    #toMasterNickname(masterNickname) {
        if (!hasText(masterNickname)) 
            throw new Error("Invalid master nickname");
        return toStringFullTrimmed(masterNickname);
    }
    #toPhrases(phrases) {
        if (!isArrayWithItems(phrases)
            || phrases.some(phrase => !hasText(phrase))
        )
            throw new Error("Invalid phrases");
        return phrases.map(phrase => toStringFullTrimmed(phrase).toUpperCase());
    }
}