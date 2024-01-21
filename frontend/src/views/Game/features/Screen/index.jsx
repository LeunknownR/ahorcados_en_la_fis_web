import HiddenPhrase from "./components/HiddenPhrase";
import ScreenKeyboard from "./components/ScreenKeyboard";
import { Container } from "./styles";

const phrase = "Los caballeros del zodiaco";
const phraseCharsToPrint = [
        ...phrase
    ]
    .map((character, index) => {
        if (phrase.charAt(index) === " ") 
            return null;
        return {
            character,
            found: Math.random() > 0.7,
            nextIsSpace: phrase.charAt(index + 1) === " "
        };
    }).filter(charData => charData);
const Screen = () => {
    return (
        <Container>
            <HiddenPhrase phraseCharsToPrint={phraseCharsToPrint}/>
            <ScreenKeyboard/>
        </Container>
    );
}

export default Screen;