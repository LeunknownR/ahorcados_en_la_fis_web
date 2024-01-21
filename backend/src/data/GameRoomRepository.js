import GameRoom from "../domain/GameRoom.js";
import JoinRoomPayload from "../features/joinroom/JoinRoomPayload.js";

export default class GameRoomRepository {
    /**
     * @type {Map<string, GameRoom>}
     */
    #gameRoomList;
    /**
     * @type {GameRoomRepository}
     */
    static #instance;
    constructor() {
        this.#gameRoomList = new Map();
    }
    static getInstance() {
        if (!GameRoomRepository.#instance)
            GameRoomRepository.#instance = new GameRoomRepository();
        return GameRoomRepository.#instance;
    }
    create(payload) {
        const gameRoom = new GameRoom(payload);
        this.#gameRoomList.set(gameRoom.id, gameRoom);
        return {
            roomId: gameRoom.id,
            userId: gameRoom.master.id
        };
    }
    find(roomId) {
        return this.#gameRoomList.get(roomId) || null;
    }
}