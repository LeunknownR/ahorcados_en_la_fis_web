export default class PhraseDataCharacter {
    constructor({
        character, nextCharacter
    }) {
        this.value = character;
        this.found = false;
        this.nextIsSpace = nextCharacter === " ";
    }
    toLiteralObject() {
        return {
            value: this.value,
            found: this.found,
            nextIsSpace: this.nextIsSpace
        };
    }
}