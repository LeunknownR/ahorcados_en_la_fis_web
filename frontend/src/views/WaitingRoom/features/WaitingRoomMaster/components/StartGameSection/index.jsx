import Button from "../../../../../../components/Button"
import useAppContext from "../../../../../../utils/context/useAppContext";
import { Container, ReiPointingToBottomImage, ReiPointingToTopImage } from "./styles";

const StartGameSection = () => {
    const { gameService } = useAppContext();
    const startGame = () => {
        gameService.emit("master:start-game");
    }
    return (
        <Container>
            <Button
                className="big"
                text="Iniciar Juego"
                onClick={startGame}/>
            <ReiPointingToBottomImage className="left"/>
            <ReiPointingToBottomImage className="right"/>
            <ReiPointingToTopImage className="left"/>
            <ReiPointingToTopImage className="right"/>
        </Container>
    );
}

export default StartGameSection;