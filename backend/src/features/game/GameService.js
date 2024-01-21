import { Server, Socket } from "socket.io";
import GameRoomRepository from "../../data/GameRoomRepository.js";
import SoothsayUseCase from "./SoothsayUseCase.js";

export default class GameService {
    #namespace = "/game";
    #gameRoomRepository;
    #soothsayUseCase;
    /**
     * @param {Server} server
     */
    constructor(server) {
        this.server = server.of(this.#namespace);
        this.#gameRoomRepository = GameRoomRepository.getInstance();
        this.#soothsayUseCase = new SoothsayUseCase(this);
    }
    getSocketData(socket) {
        const { headers } = socket.handshake;
        return {
            roomId: headers["x-room-id"],
            userId: headers["x-user-id"]
        };
    }
    /**
     * @param {Socket} socket
     */
    #connectUser(socket) {
        const socketData = this.getSocketData(socket);
        const gameRoom = this.#gameRoomRepository.find(socketData.roomId);
        socket.emit("server:reconnect-to-game", {
            isMaster: gameRoom.userIsMaster(socketData.userId)
        });
        this.emitSendGameDataEventToRoom(gameRoom);
    }
    #masterStartGame(socket) {
        const gameRoom = this.findGameRoom(socket);
        gameRoom.start();
        emitSendGameDataEventToRoom(gameRoom);
    }
    /**
     * @param {Socket} socket
     */
    #requestGameData(socket) {
        const gameRoom = this.findGameRoom(socket);
        socket.emit("server:send-game-data", gameRoom);
    }
    findGameRoom(socket) {
        const socketData = this.getSocketData(socket);
        return this.#gameRoomRepository.find(socketData.roomId);
    }
    emitSendGameDataEventToRoom(gameRoom) {
        this.server
            .to(gameRoom.id)
            .emit("server:send-game-data", gameRoom);
    }
    init() {
        this.server.on("connection", socket => {
            this.#connectUser(socket);
            socket.on(
                "master:start-game", 
                () => this.#masterStartGame(socket)
            );
            socket.on(
                "user:request-game-data", 
                () => this.#requestGameData(socket)
            );
            socket.on(
                "soothsayer:soothsay", 
                body => this.#soothsayUseCase.invoke(socket, body)
            );
        });
    }
}