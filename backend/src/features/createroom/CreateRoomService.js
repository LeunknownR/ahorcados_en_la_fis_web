import CreateGameRoomPayload from "./CreateRoomPayload.js";
import GameRoomRepository from "../../data/GameRoomRepository.js";

export default class CreateRoomController {
    #endpoint = "/create-room"
    #router;
    #gameRoomRepository;
    constructor(router) {
        this.#router = router;
        this.#gameRoomRepository = GameRoomRepository.getInstance();
    }
    #invoke(req, res) {
        try {
            const payload = new CreateGameRoomPayload(req.body);
            const masterUser = this.#gameRoomRepository.create(payload);
            res.json({
                message: "SUCCESS",
                data: masterUser
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
        this.#router.post(
            this.#endpoint, 
            this.#invoke.bind(this)
        );
    }
}