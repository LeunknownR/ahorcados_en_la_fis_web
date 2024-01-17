import { Container } from "./styles";
import ReiRunning from "./components/ReiRunning";
import ShinjiWaiting from "./components/ShinjiWaiting";
import WaitingMessage from "./components/WaitingMessage";
import StartGameSection from "./components/StartGameSection";
import StartGameMessage from "./components/StartGameMessage";
import { ExitButton } from "../components/styles";
import RoomData from "../components/RoomData";

const WaitingRoom = () => {
    return (
        <Container>
            <ExitButton/>
            <RoomData/>
            <ReiRunning/>
            {/* <StartGameSection/> */}
            <ShinjiWaiting/>
            {/* <WaitingMessage/> */}
            <StartGameMessage/>
        </Container>
    );
}

export default WaitingRoom;