import randomUUID from "../utils/uuid.js";
import PhraseData from "./PhraseData.js";
import GameRoomStatus from "./GameRoomStatus.js";

export default class GameRoom {
    /**
     * @type {PhraseData[]}
     */
    #phraseDataList;
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
        this.winner = null;
        this.#phraseDataList = phrases.map(phrase => new PhraseData(phrase));
        this.#currentPhraseIndex = 0;
        this.currentPhraseData = this.#phraseDataList[this.#currentPhraseIndex];
    }
    joinSoothsayer(soothsayerNickname) {
        this.soothsayer.nickname = soothsayerNickname;
        this.status = GameRoomStatus.WaitingStart;
        return this.soothsayer.id;
    }
    start() {
        this.status = GameRoomStatus.InGame;
    }
    finish(winner) {
        this.status = GameRoomStatus.GameOver;
        this.winner = winner;
    }
    soothsay(key) {
        const currentPhraseData = this.#phraseDataList[this.#currentPhraseIndex];
        currentPhraseData.useKey(key);
        currentPhraseData.searchCharacter(key);
    }
    soothsayerWins() {
        return this.#currentPhraseIndex === this.#phraseDataList.length - 1;
    }
    nextPhrase() {
        this.#currentPhraseIndex++;
        this.currentPhraseData = this.#phraseDataList[this.#currentPhraseIndex];
    }
    getCurrentPhrase() {
        return this.currentPhraseData.phrase;
    }
    isFull() {
        return this.soothsayer.nickname !== null;
    }
    userIsMaster(userId) {
        return userId === this.master.id;
    }
    toLiteralObject() {
        return {
            master: this.master,
            soothsayer: this.soothsayer,
            status: this.status,
            phraseDataList: this.#phraseDataList.map(phraseData => phraseData.toLiteralObject())
        };
    }
}