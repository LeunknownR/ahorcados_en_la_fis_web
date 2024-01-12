import PlusIcon from "../../../../../../icons/PlusIcon";
import { Container } from "./styles";

const AddPhraseButton = ({
    phrase, addPhrase
}) => {
    const doAddPhrase = () => {
        if (phrase.isEmpty()) return;
        addPhrase(phrase.value);
        phrase.clear();
    }
    return (
        <Container
            disabled={phrase.isEmpty()}
            onClick={doAddPhrase}>
            <PlusIcon/>
        </Container>
    );
}

export default AddPhraseButton;