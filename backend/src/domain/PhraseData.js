import PhraseDataCharacter from "./PhraseDataCharacter.js";
import { MAX_LIFES } from "../config/constants.js";
import { simpleStringsAreEquals } from "../utils/string.js";

export default class PhraseData {
    constructor(phrase) {
        this.phrase = phrase;
        this.dataCharacterList = this.#toDataCharacterList();
        this.usedKeys = [];
        this.lifes = MAX_LIFES; 
    }
    useKey(key) {
        this.usedKeys.push(key);
    }
    searchCharacter(key) {
        let someCharacterFound = false;
        this.dataCharacterList.forEach(dataCharacter => {
            if (!simpleStringsAreEquals(dataCharacter.value, key)) return;
            dataCharacter.found = true;
            someCharacterFound = true;
        });
        if (!someCharacterFound) 
            this.#draw();
    }
    phraseCompleted() {
        return this.dataCharacterList.every(dataCharacter => dataCharacter.found);
    }
    #draw() {
        this.lifes--;
    }
    hanged() {
        return this.lifes === 0;
    }
    /**
     * @return {PhraseDataCharacter[]} 
     */
    #toDataCharacterList() {
        const { phrase } = this;
        const dataCharacterList = [];
        for (let i = 0; i < phrase.length; i++) {
            const character = phrase.charAt(i);
            if (character === " ") continue;
            dataCharacterList.push(
                new PhraseDataCharacter({
                    character,
                    nextCharacter: phrase.charAt(i + 1)
                })
            );
        }
        return dataCharacterList;
    }
    toLiteralObject() {
        return {
            phrase: this.phrase,
            dataCharacterList: this.dataCharacterList.map(dataCharacter => dataCharacter.toLiteralObject()),
            lifes: this.lifes,
            usedKeys: this.usedKeys
        };
    }
}