import Button from "../../../../../../components/Button"
import { Container, ReiPointingToBottomImage, ReiPointingToTopImage } from "./styles";

const StartGameSection = () => {
    return (
        <Container>
            <Button
                className="big"
                text="Iniciar Juego"/>
            <ReiPointingToBottomImage className="left"/>
            <ReiPointingToBottomImage className="right"/>
            <ReiPointingToTopImage className="left"/>
            <ReiPointingToTopImage className="right"/>
        </Container>
    );
}

export default StartGameSection;