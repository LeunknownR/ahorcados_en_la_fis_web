import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import ABSOLUTE_PATHS from "../../config/absolutePaths";
import WaitingRoom from "../WaitingRoom";
import GameScene from "../GameScene";
import GameOverScene from "../GameOverScene";
import useAppContext from "../../utils/context/useAppContext";
import GameStorage from "../../services/GameStorage";
import { useEffect, useState } from "react";
import GameContext from "./utils/context/GameContext";
import GameRoomStatus from "../../../../backend/src/domain/GameRoomStatus";
import GameWinner from "../../../../backend/src/domain/GameWinner";

const Game = () => {
    const { gameService } = useAppContext();
    const navigate = useNavigate();
    const [isMaster, setIsMaster] = useState(false);
    const [gameData, setGameData] = useState(null);
    useEffect(() => {
        if (!GameStorage.getGameData()) {
            navigate(ABSOLUTE_PATHS.HOME);
            return;
        }
        if (!gameService.isConnected) return;
        gameService.on("server:connect-to-game", ({ isMaster }) => {
            setIsMaster(isMaster);
        });
        gameService.on("server:send-game-data", data => {
            setGameData(data);
            if (data.status === GameRoomStatus.InGame)
                navigate(ABSOLUTE_PATHS.GAME);
            if (data.status === GameRoomStatus.GameOver) {
                sessionStorage.clear();
                navigate(ABSOLUTE_PATHS.GAME_OVER_SCENE);
            }
        });
    }, [gameService.isConnected]);
    const getUserNickname = () => {
        return isMaster ? gameData.master.nickname : gameData.soothsayer.nickname;
    }
    if (!gameData)
        return null;
    return (
        <GameContext.Provider value={{
            isMaster, gameData, getUserNickname
        }}>
            <Routes>
                <Route
                    path={ABSOLUTE_PATHS.WAITING_ROOM}
                    element={<WaitingRoom/>}/>
                <Route
                    path={ABSOLUTE_PATHS.GAME}
                    element={<GameScene/>}/>
                <Route
                    path={ABSOLUTE_PATHS.GAME_OVER_SCENE}
                    element={<GameOverScene/>}/>
                <Route
                    path="*"
                    element={<Navigate to={ABSOLUTE_PATHS.HOME}/>}/>
            </Routes>
        </GameContext.Provider>
    );
}

export default Game;