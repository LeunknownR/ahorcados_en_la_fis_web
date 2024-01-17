import { ExitButton } from "../components/styles";
import { Container } from "./styles";
import RoomData from "../components/RoomData";
import MasterWinScene from "./components/MasterWinScene";
import MasterLoseScene from "./components/MasterLoseScene";
import SoothsayerWinScene from "./components/SoothsayerWinScene";
import SoothsayerLoseScene from "./components/SoothsayerLoseScene";

const GameOverScene = () => {
    return (
        <Container>
            <ExitButton/>
            <RoomData/>
            <MasterWinScene/>
            {/* <MasterLoseScene/> */}
            {/* <SoothsayerWinScene/> */}
            {/* <SoothsayerLoseScene/> */}
        </Container>
    );
}

export default GameOverScene;