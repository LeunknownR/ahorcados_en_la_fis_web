import { Container } from "./styles";
import RoomData from "../components/RoomData";
import MasterWinScene from "./features/MasterWinScene";
import MasterLoseScene from "./features/MasterLoseScene";
import SoothsayerWinScene from "./features/SoothsayerWinScene";
import SoothsayerLoseScene from "./features/SoothsayerLoseScene";
import GameRoomStatus from "../../services/gameService/GameRoomStatus";
import useGameContext from "../Game/utils/context/useGameContext";
import GameWinner from "../../../../backend/src/domain/GameWinner";

const GameOverScene = () => {
    const { gameData, isMaster } = useGameContext();
    if (gameData.status !== GameRoomStatus.GameOver)
        return null;
    const nickname = isMaster ? gameData.master.nickname :gameData.soothsayer.nickname;
    return (
        <Container>
            <RoomData nickname={nickname} roomId={gameData.id}/>   
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