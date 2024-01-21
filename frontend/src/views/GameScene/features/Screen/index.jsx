import useGameContext from "../../../Game/utils/context/useGameContext";
import HiddenPhrase from "./components/HiddenPhrase";
import ScreenKeyboard from "./components/ScreenKeyboard";
import { Container } from "./styles";

const Screen = () => {
    const { gameData } = useGameContext();
    return (
        <Container>
            <HiddenPhrase phraseCharsToPrint={gameData.currentPhraseData.dataCharacterList}/>
            <ScreenKeyboard/>
        </Container>
    );
}

export default Screen;