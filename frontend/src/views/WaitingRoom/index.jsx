import { Container } from "./styles";
import { ExitButton } from "../components/styles";
import RoomData from "../components/RoomData";
import ShinjiWaiting from "./components/ShinjiWaiting";
import WaitingRoomSoothsayer from "./features/WaitingRoomSoothsayer";
import WaitingRoomMaster from "./features/WaitingRoomMaster";

const nickname = "leunknownr", roomId = "p0ZoB1FwH6";
const WaitingRoom = () => {
    return (
        <Container>
            <ExitButton/>
            <RoomData nickname={nickname} roomId={roomId}/>
            <ShinjiWaiting/>
            <WaitingRoomMaster/>
            {/* <WaitingRoomSoothsayer/> */}
        </Container>
    );
}

export default WaitingRoom;