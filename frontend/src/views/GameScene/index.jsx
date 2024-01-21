import { ContainerMaster, ContainerSoothsayer } from "./styles";
import RoomData from "../components/RoomData";
import Screen from "./features/Screen";
import GameDataForMaster from "./components/GameData/GameDataForMaster";
import SoothSayerStateForMaster from "./components/SoothSayerStateForMaster";
import ShinjiOnTheGallows from "./components/ShinjiOnTheGallows";
import useGameContext from "../Game/utils/context/useGameContext";
import GameDataForSoothsayer from "./components/GameData/GameDataForSoothsayer";
import GameRoomStatus from "../../services/gameService/GameRoomStatus";

const GameScene = () => {
    const { gameData, isMaster, getUserNickname } = useGameContext();
    const { currentPhraseData, soothsayer, master } = gameData;
    const Container = isMaster ? ContainerMaster : ContainerSoothsayer;
    if (gameData.status !== GameRoomStatus.InGame)
        return null;
    return (
        <Container>
            <RoomData nickname={getUserNickname()} roomId={gameData.id}/>
            <Screen/>
            <ShinjiOnTheGallows currentLifeState={gameData.currentPhraseData.lifes}/>
            {isMaster ? 
            <>
                <GameDataForMaster 
                    phrase={currentPhraseData.phrase}
                    soothsayerNickname={soothsayer.nickname}/>
                <SoothSayerStateForMaster 
                    lifes={currentPhraseData.lifes}/>
            </>
            : <GameDataForSoothsayer
                lifes={currentPhraseData.lifes}
                masterNickname={master.nickname}/>}
        </Container>
    );
}

export default GameScene;