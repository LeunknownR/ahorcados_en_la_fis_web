import PhraseDataCharacter from "./PhraseDataCharacter.js";
import { MAX_LIFES } from "../config/constants.js";
import { simpleStringsAreEquals } from "../utils/string.js";

export default class PhraseData {
    constructor(phrase) {
        this.phrase = phrase;
        this.characterList = this.#toCharacterList();
        this.usedKeys = new Set();
        this.lifes = MAX_LIFES; 
    }
    useKey(key) {
        this.usedKeys.add(key);
    }
    searchCharacter(key) {
        let someCharacterFound = false;
        this.characterList.forEach(character => {
            if (!simpleStringsAreEquals(character.value, key)) return;
            character.found = true;
            someCharacterFound = true;
        });
        if (!someCharacterFound) 
            this.#draw();
    }
    phraseCompleted() {
        return this.characterList.every(character => character.found);
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
    #toCharacterList() {
        const { phrase } = this;
        const characterList = [];
        for (let i = 0; i < characterList.length; i++) {
            const character = phrase.charAt(i);
            if (character === " ") continue;
            characterList.push(
                new PhraseDataCharacter({
                    character,
                    nextCharacter: phrase.charAt(i + 1)
                })
            );
        }
        return characterList;
    }
}