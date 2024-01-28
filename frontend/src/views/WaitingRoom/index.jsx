import { Container } from "./styles";
import RoomData from "../components/RoomData";
import ShinjiWaiting from "./components/ShinjiWaiting";
import WaitingRoomSoothsayer from "./features/WaitingRoomSoothsayer";
import WaitingRoomMaster from "./features/WaitingRoomMaster";
import useGameContext from "../Game/utils/context/useGameContext";
import GameRoomStatus from "../../services/gameService/GameRoomStatus";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ABSOLUTE_PATHS from "../../config/absolutePaths";

const WaitingRoom = () => {
    const { gameData, isMaster, getUserNickname } = useGameContext();
    const navigate = useNavigate();
    useEffect(() => {
        if (gameData.status === GameRoomStatus.InGame)
            navigate(ABSOLUTE_PATHS.GAME);
    }, []);
    function isWaiting() {
        return [GameRoomStatus.Created, GameRoomStatus.WaitingStart].includes(gameData.status);
    }
    if (!isWaiting()) 
        return null;
    return (
        <Container>
            <RoomData nickname={getUserNickname()} roomId={gameData.id}/>
            <ShinjiWaiting/>
            {isMaster 
            ? <WaitingRoomMaster/>
            : <WaitingRoomSoothsayer/>}
        </Container>
    );
}

export default WaitingRoom;