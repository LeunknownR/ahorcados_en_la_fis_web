import { useState, Dispatch, SetStateAction, useEffect } from "react";
import io, { Socket } from "socket.io-client";
import GameStorage from "../../GameStorage";

const SERVICE_URL = "ws://localhost:3002";
const useGameService = () => {
    /**
     * @type {[Socket, Dispatch<SetStateAction<Socket>>]}
     */
    const [websocket, setWebsocket] = useState(null);
    useEffect(() => {
        connect();
    }, []);
    function connect() {
        const gameData = GameStorage.getGameData();
        if (!gameData) return;
        const socket = io(`${SERVICE_URL}/game`, {
            extraHeaders: {
                "x-user-id": gameData.userId,
                "x-room-id": gameData.roomId
            }
        });
        setWebsocket(socket);
    }
    const disconnect = () => {
        websocket.disconnect();
        setWebsocket(null);
    }
    const on = (event, handler) => {
        websocket.on(event, handler);
    }
    const emit = (event, body) => {
        websocket.emit(event, body);
    } 
    return {
        connect, disconnect, 
        on, emit,
        isConnected: Boolean(websocket)
    };
}	
    
export default useGameService;