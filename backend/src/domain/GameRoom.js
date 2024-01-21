import randomUUID from "../utils/uuid.js";
import PhraseData from "./PhraseData.js";
import GameRoomStatus from "./GameRoomStatus.js";

export default class GameRoom {
    #currentPhraseIndex;
    constructor({ masterNickname, phrases }) {
        this.id = randomUUID();
        this.master = {
            id: randomUUID(),
            nickname: masterNickname
        };
        this.soothsayer = {
            id: randomUUID(),
            nickname: null
        };
        this.status = GameRoomStatus.Created;
        /**
         * @type {PhraseData[]}
         */
        this.phraseDataList = phrases.map(phrase => new PhraseData(phrase));
        this.#currentPhraseIndex = 0;
    }
    joinSoothsayer(soothsayerNickname) {
        this.soothsayer.nickname = soothsayerNickname;
        this.status = GameRoomStatus.WaitingStart;
        return this.soothsayer.id;
    }
    start() {
        this.status = GameRoomStatus.InGame;
    }
    soothsay(key) {
        const currentPhraseData = this.getCurrentPhraseData();
        currentPhraseData.useKey(key);
        currentPhraseData.searchCharacter(key);
    }
    soothsayerWins() {
        return this.#currentPhraseIndex === this.phraseDataList.length;
    }
    nextPhrase() {
        this.#currentPhraseIndex++;
    }
    getCurrentPhrase() {
        return this.getCurrentPhraseData().phrase;
    }
    isFull() {
        return this.soothsayer.nickname !== null;
    }
    userIsMaster(userId) {
        return userId === this.master.id;
    }
    getCurrentPhraseData() {
        return this.phraseDataList[currentPhraseIdx];
    }
}