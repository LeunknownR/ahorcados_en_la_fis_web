import useGameContext from "../../../Game/utils/context/useGameContext";
import WaitingMessage from "../../components/WaitingMessage";
import ReiRunning from "./components/ReiRunning";
import StartGameMessage from "./components/StartGameMessage";
import StartGameSection from "./components/StartGameSection";
import GameRoomStatus from "../../../../services/gameService/GameRoomStatus";

const WaitingRoomMaster = () => {
    const { gameData } = useGameContext();
    return (
        gameData.status === GameRoomStatus.Created 
        ? <>
            <ReiRunning/>
            <WaitingMessage>
                El adivino al que le compartiste el ID está corriendo como Rei...
            </WaitingMessage>
        </>
        : <>
            <StartGameSection/>
            <StartGameMessage/>
        </>
    );
}

export default WaitingRoomMaster;