import GameRoomRepository from "../../data/GameRoomRepository.js";
import JoinRoomPayload from "./JoinRoomPayload.js";

export default class JoinRoomController {
    #endpoint = "/join-room"
    #app;
    #gameRoomRepository;
    constructor(app) {
        this.#app = app;
        this.#gameRoomRepository = GameRoomRepository.getInstance();
    }
    #invoke(req, res) {
        try {
            const payload = new JoinRoomPayload(req.body);
            const gameRoom = this.#gameRoomRepository.find(payload.roomId);
            if (!gameRoom) {
                res.status(404).json({
                    message: "NOT_FOUND_ROOM",
                    data: null
                });
                return;
            }
            if (gameRoom.isFull()) {
                res.status(404).json({
                    message: "FULL_ROOM",
                    data: null
                });
                return;
            }
            gameRoom.joinSoothsayer(payload.soothsayerNickname);
            res.json({
                message: "SUCCESS",
                data: {
                    roomId: gameRoom.id,
                    userId: gameRoom.soothsayer.id
                }
            });
        }
        catch (err) {
            res.status(400).json({
                message: "INVALID_DATA",
                data: null
            });
        }
    }
    init() {
        this.#app.post(
            this.#endpoint, 
            this.#invoke.bind(this)
        );
    }
}