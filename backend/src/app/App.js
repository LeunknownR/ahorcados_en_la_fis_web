import express from "express"; 
import http from "http";
import dotenv from "dotenv";
import ExpressInitializer from "./ExpressInitializer.js";
import GameService from "../features/game/GameService.js"
import { Server as WebSocketServer } from "socket.io";

export default class App {
    #server;
    #expressInitializer;
    #gameService;
    constructor() {
        const app = express();
        this.#server = http.createServer(app);
        this.#expressInitializer = new ExpressInitializer(app);
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
        this.#expressInitializer.init();
        this.#gameService.init();
        this.#run();
    }
}