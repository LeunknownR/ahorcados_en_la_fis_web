import express from "express";
import CreateRoomController from "../features/createroom/CreateRoomService.js";
import JoinRoomController from "../features/joinroom/JoinRoomService.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default class ExpressInitializer {
    #app;
    #router;
    #controllers;
    constructor(app) {
        this.#app = app;
        this.#router = express.Router();
        this.#controllers = [
            new CreateRoomController(this.#router),
            new JoinRoomController(this.#router)
        ];
    }
    init() {
        this.#app.use(express.json());
        this.#app.use(cors());
        this.#controllers.forEach(controller => controller.init());
        this.#app.use("/api", this.#router);
        this.initFrontend();
    }
    initFrontend() {
        /*
        API: /api
        */
        const EXP_REG_FOR_EXCLUDING_EXCEPTIONS =  /^(?!\/(api)).*$/;
        this.#app.use(express.static(path.join(path.dirname(__filename), "../../../frontend/dist")));
        this.#app.get(EXP_REG_FOR_EXCLUDING_EXCEPTIONS, (_, res) => {
            res.sendFile(path.join(path.dirname(__filename), "../../../frontend/dist", "index.html"));
        });
    }
}