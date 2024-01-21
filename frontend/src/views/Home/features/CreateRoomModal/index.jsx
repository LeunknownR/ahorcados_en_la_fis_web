import Modal from "../../../../components/Modal";
import usePhrase from "./utils/hooks/usePhrase";
import usePhraseList from "./utils/hooks/usePhraseList";
import { Container } from "./styles";
import { Footer } from "../styles";
import Button from "../../../../components/Button";
import PhraseBlock from "./components/PhraseBlock";
import { ErrorMessage } from "../../../../components/styles";
import PhraseField from "./components/PhraseField";
import useCreateRoom from "./utils/hooks/useCreateRoom";
import { useEffect } from "react";

const CreateRoomModal = ({
    modal, nickname
}) => {
    const phrase = usePhrase();
    const phraseList = usePhraseList(phrase);
    const createRoom = useCreateRoom({
        nickname, phrases: phraseList.value,
    });
    useEffect(() => {
        if (!modal.show) {
            phrase.clear();
            phraseList.clear();
        }
    }, [modal.show]);
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
                        onClick={createRoom}
                        disabled={phraseList.isEmpty()}/>
                </Footer>
            </Container>
        </Modal>
    );
}

export default CreateRoomModal;