import { json } from "express";
import CreateRoomController from "../features/createroom/CreateRoomService.js";
import JoinRoomController from "../features/joinroom/JoinRoomService.js";
// import cors from "cors";

export default class RESTServiceInitializer {
    #app;
    #controllers;
    constructor(app) {
        this.#app = app;
        this.#controllers = [
            new CreateRoomController(app),
            new JoinRoomController(app)
        ];
    }
    init() {
        this.#app.use(json());
        // this.#app.use(cors());
        this.#controllers.forEach(controller => controller.init());
    }
}