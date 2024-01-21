import WaitingMessage from "../../components/WaitingMessage";
import ReiRunning from "./components/ReiRunning";
import StartGameMessage from "./components/StartGameMessage";
import StartGameSection from "./components/StartGameSection";

const WaitingRoomMaster = () => {
    return (
        <>
            <ReiRunning/>
            <StartGameSection/>
            <WaitingMessage>
                El adivino al que le compartiste el ID está corriendo como Rei...
            </WaitingMessage>
            <StartGameMessage/>
        </>
    );
}

export default WaitingRoomMaster;