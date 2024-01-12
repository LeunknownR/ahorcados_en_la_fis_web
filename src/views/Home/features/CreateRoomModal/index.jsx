import Modal from "../../../../components/Modal";
import usePhrase from "./utils/hooks/usePhrase";
import usePhraseList from "./utils/hooks/usePhraseList";
import { Container } from "./styles";
import { Footer } from "../styles";
import Button from "../../../../components/Button";
import PhraseBlock from "./components/PhraseBlock";
import { ErrorMessage } from "../../../../components/styles";
import PhraseField from "./components/PhraseField";

const CreateRoomModal = ({
    modal
}) => {
    const phrase = usePhrase();
    const phraseList = usePhraseList(phrase);
    return (
        <Modal modal={modal}>
            <Container>
                <PhraseField
                    phrase={phrase}
                    phraseList={phraseList}/>
                {phrase.showErrorMessage.value && 
                    <ErrorMessage>
                        La frase ya se encuentra en la lista
                    </ErrorMessage>}
                <PhraseBlock phraseList={phraseList}/>
                <Footer>
                    <Button
                        className="secondary medium"
                        text="Cancelar"
                        onClick={modal.hide}/>
                    <Button
                        className="medium"
                        text="Crear sala"
                        disabled={phraseList.isEmpty()}/>
                </Footer>
            </Container>
        </Modal>
    );
}

export default CreateRoomModal;