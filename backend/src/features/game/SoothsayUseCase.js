import GameService from "./GameService.js";

export default class SoothsayUseCase {
    #gameService;
    /**
     * @param {GameService} gameService 
     */
    constructor(gameService) {
        this.#gameService = gameService;
    }
    #emitGameOver({ masterWins, reveleadedPhrase }) {
        this.#gameService.server
            .to(gameRoom.id)
            .emit("server:game-over-master", {
                win: masterWins
            });
        this.#gameService.server
            .to(gameRoom.id)
            .emit("server:game-over-soothsayer", {
                win: !masterWins,
                reveleadedPhrase
            });
    }
    #emitNotifyNextPhrase(reveleadedPhrase) {
        this.#gameService.server
            .to(gameRoom.id)
            .emit("server:notify-next-phrase", {
                reveleadedPhrase
            });
    }
    invoke(socket, body) {
        const gameRoom = this.#gameService.findGameRoom(socket);
        gameRoom.soothsay(body.key);
        const currentPhraseData = gameRoom.getCurrentPhraseData();
        const reveleadedPhrase = gameRoom.getCurrentPhrase()
        if (currentPhraseData.hanged()) 
            this.#emitGameOver({
                masterWins: true, 
                reveleadedPhrase
            });
        if (currentPhraseData.phraseCompleted()) {
            gameRoom.nextPhrase();
            if (gameRoom.soothsayerWins()) 
                this.#emitGameOver({
                    masterWins: false, 
                    reveleadedPhrase
                });
            this.#emitNotifyNextPhrase(reveleadedPhrase);
        }
        this.#gameService.emitSendGameDataEventToRoom(gameRoom);
    }
}