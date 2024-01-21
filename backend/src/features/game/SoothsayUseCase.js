import GameWinner from "../../domain/GameWinner.js";
import GameService from "./GameService.js";

export default class SoothsayUseCase {
    #gameService;
    /**
     * @param {GameService} gameService 
     */
    constructor(gameService) {
        this.#gameService = gameService;
    }
    #finishGame(gameRoom, winner) {
        gameRoom.finish(winner);
        this.#gameService.removeGameRoom(gameRoom);
    }
    invoke(socket, body) {
        const gameRoom = this.#gameService.findGameRoom(socket);
        gameRoom.soothsay(body.key);
        const currentPhraseData = gameRoom.currentPhraseData;
        if (currentPhraseData.hanged()) 
            this.#finishGame(gameRoom, GameWinner.Master);
        else if (currentPhraseData.phraseCompleted()) {
            if (gameRoom.soothsayerWins()) 
                this.#finishGame(gameRoom, GameWinner.Soothsayer);
            else 
                gameRoom.nextPhrase();
        }
        this.#gameService.emitSendGameDataEventToRoom(gameRoom);
    }
}