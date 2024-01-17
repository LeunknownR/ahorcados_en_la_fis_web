import { CardMessage, Divider } from "../../../../components/styles";
import { 
    Container,
    MessageWrapper, 
    ReiShyImage, 
    SoothsayerAboutMessage 
} from "./styles";

const nickname = "lilpepetuterror666";
const StartGameMessage = () => {
    return (
        <Container>
            <SoothsayerAboutMessage title={nickname}>
                Ingresó el adivino<br/>
                <strong>{nickname}</strong>
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