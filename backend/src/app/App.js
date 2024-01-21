import express from "express"; 
import http from "http";
import dotenv from "dotenv";
import RESTServiceInitializer from "./RESTServiceInitializer.js";
import GameService from "../features/game/GameService.js"
import { Server as WebSocketServer } from "socket.io";

export default class App {
    #server;
    #serviceInitializer;
    #gameService;
    constructor() {
        const app = express();
        this.#server = http.createServer(app);
        this.#serviceInitializer = new RESTServiceInitializer(app);
        const websocketServer = new WebSocketServer(
            this.#server,
            {
                cors: {
                    origin: "*"
                }
            });
        this.#gameService = new GameService(websocketServer);
    }
    #run() {
        const { PORT } = process.env;
        this.#server.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    }
    init() {
        dotenv.config();
        this.#serviceInitializer.init();
        this.#gameService.init();
        this.#run();
    }
}