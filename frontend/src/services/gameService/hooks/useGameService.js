import { useState, Dispatch, SetStateAction, useEffect } from "react";
import io, { Socket } from "socket.io-client";
import GameStorage from "../../GameStorage";

const BACKEND_WS_URL = import.meta.env.VITE_BACKEND_WS_URL;
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
        const url = BACKEND_WS_URL || new URL(window.location).origin.replace("https://", "wss://");
        const socket = io(`${url}/api/game`, {
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