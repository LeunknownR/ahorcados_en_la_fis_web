import { CardMessage } from "../../../../components/styles";
import { Container, ReiApprovingImage } from "./styles";

const WaitingMessage = () => {
    return (
        <Container>
            <ReiApprovingImage/>
            <CardMessage>
                El adivino al que le compartiste el ID está corriendo como Rei...
            </CardMessage>
            <ReiApprovingImage className="right"/>
        </Container>
    );
}

export default WaitingMessage;