import { CardMessage } from "../../../../components/styles";
import { Container, ReiApprovingImage } from "./styles";

const WaitingMessage = ({
    children
}) => {
    return (
        <Container>
            <ReiApprovingImage/>
            <CardMessage>{children}</CardMessage>
            <ReiApprovingImage className="right"/>
        </Container>
    );
}

export default WaitingMessage;