import WaitingMessage from "../../components/WaitingMessage";
import ReiGangnamStyle from "./components/ReiGangnamStyle";

const WaitingRoomSoothsayer = () => {
    return (
        <>
            <ReiGangnamStyle/>
            <WaitingMessage>
                Esperando a que el máster inicie el juego...
            </WaitingMessage>
        </>
    );
}

export default WaitingRoomSoothsayer;