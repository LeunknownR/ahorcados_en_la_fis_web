import { CardMessage, Divider } from "../../../../../../components/styles";
import useGameContext from "../../../../../Game/utils/context/useGameContext";
import { 
    Container,
    MessageWrapper, 
    ReiShyImage, 
    SoothsayerAboutMessage 
} from "./styles";

const StartGameMessage = () => {
    const { gameData } = useGameContext();
    return (
        <Container>
            <SoothsayerAboutMessage title={gameData.soothsayer.nickname}>
                Ingresó el adivino<br/>
                <strong>{gameData.soothsayer.nickname}</strong>
            </SoothsayerAboutMessage>
            <Divider/>
            <MessageWrapper>
                <CardMessage>¿Le das a Iniciar, por favor?</CardMessage>
                <ReiShyImage/>
            </MessageWrapper>
        </Container>
    );
}

export default StartGameMessage;