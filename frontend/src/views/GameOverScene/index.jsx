import { ExitButton } from "../components/styles";
import { Container } from "./styles";
import RoomData from "../components/RoomData";
import MasterWinScene from "./features/MasterWinScene";
import MasterLoseScene from "./features/MasterLoseScene";
import SoothsayerWinScene from "./features/SoothsayerWinScene";
import SoothsayerLoseScene from "./features/SoothsayerLoseScene";
import GameRoomStatus from "../../services/gameService/GameRoomStatus";
import useGameContext from "../Game/utils/context/useGameContext";
import GameWinner from "../../../../backend/src/domain/GameWinner";

const nickname = "leunknownr", roomId = "p0ZoB1FwH6";
const GameOverScene = () => {
    const { gameData, isMaster } = useGameContext();
    if (gameData.status !== GameRoomStatus.GameOver)
        return null;
    return (
        <Container>
            <ExitButton/>
            <RoomData nickname={nickname} roomId={roomId}/>   
            {gameData.winner === GameWinner.Master 
            && (
                isMaster 
                ? <MasterWinScene/>
                : <SoothsayerLoseScene/>
            )}
            {gameData.winner === GameWinner.Soothsayer
            && (
                isMaster 
                ? <MasterLoseScene/>
                : <SoothsayerWinScene/>
            )}
        </Container>
    );
}

export default GameOverScene;