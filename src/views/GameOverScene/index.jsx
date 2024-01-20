import { ExitButton } from "../components/styles";
import { Container } from "./styles";
import RoomData from "../components/RoomData";
import MasterWinScene from "./features/MasterWinScene";
import MasterLoseScene from "./features/MasterLoseScene";
import SoothsayerWinScene from "./features/SoothsayerWinScene";
import SoothsayerLoseScene from "./features/SoothsayerLoseScene";

const nickname = "leunknownr", roomId = "p0ZoB1FwH6";
const GameOverScene = () => {
    return (
        <Container>
            <ExitButton/>
            <RoomData nickname={nickname} roomId={roomId}/>   
            <MasterWinScene/>
            {/* <MasterLoseScene/> */}
            {/* <SoothsayerWinScene/> */}
            {/* <SoothsayerLoseScene/> */}
        </Container>
    );
}

export default GameOverScene;