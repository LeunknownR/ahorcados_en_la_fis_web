import { Server, Socket } from "socket.io";
import GameRoomRepository from "../../data/GameRoomRepository.js";
import SoothsayUseCase from "./SoothsayUseCase.js";

export default class GameService {
    #namespace = "/api/game";
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
        if (!gameRoom) {
            socket.disconnect();
            console.log("Room not exists");
            return;
        }
        socket.emit("server:connect-to-game", {
            isMaster: gameRoom.userIsMaster(socketData.userId)
        });
        socket.join(gameRoom.id);
        this.emitSendGameDataEventToRoom(gameRoom);
    }
    #masterStartGame(socket) {
        const gameRoom = this.findGameRoom(socket);
        gameRoom.start();
        this.emitSendGameDataEventToRoom(gameRoom);
    }
    findGameRoom(socket) {
        const socketData = this.getSocketData(socket);
        return this.#gameRoomRepository.find(socketData.roomId);
    }
    removeGameRoom(gameRoom) {
        this.#gameRoomRepository.remove(gameRoom.id);
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
                "soothsayer:soothsay", 
                body => this.#soothsayUseCase.invoke(socket, body)
            );
        });
    }
}