import { Container } from "./styles";
import RoomData from "../components/RoomData";
import Screen from "./features/Screen";
import GameData from "./components/GameData";
import SoothSayerState from "./components/SoothSayerState";
import ShinjiOnTheGallows from "./components/ShinjiOnTheGallows";
import { useState } from "react";

const nickname = "leunknownr", roomId = "p0ZoB1FwH6";
const Game = () => {
    const [currentLifeState, setCurrentLifeState] = useState(7);
    return (
        <Container>
            <RoomData nickname={nickname} roomId={roomId}/>
            <Screen/>
            <GameData 
                phrase="Los caballeros del zodiaco"
                soothsayerNickname="LilPepeTuTerror666"/>
            <SoothSayerState currentLifeState={currentLifeState}/>
            <ShinjiOnTheGallows currentLifeState={currentLifeState}/>
        </Container>
    );
}

export default Game;