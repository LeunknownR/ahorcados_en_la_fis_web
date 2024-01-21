import { TextField } from "../../../styles";
import AddPhraseButton from "../AddPhraseButton";

const PhraseField = ({
    phrase, phraseList
}) => {
    const addPhrase = newPhrase => {
        if (phraseList.isNew(newPhrase)) phraseList.add(newPhrase);
        else phrase.showErrorMessage.set(true);
    }
    return (
        <TextField
            label="Escribe tu frase"
            placeholder="Feliz jueves"
            value={phrase.value}
            onChange={phrase.change}
            onFocus={() => phrase.showErrorMessage.set(false)}
            decorator={
                <AddPhraseButton 
                    phrase={phrase}
                    addPhrase={addPhrase}/>
            }/>
    );
}

export default PhraseField;