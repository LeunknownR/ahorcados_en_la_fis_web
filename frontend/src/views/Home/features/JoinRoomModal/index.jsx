import Modal from "../../../../components/Modal";
import Button from "../../../../components/Button";
import { Container } from "./styles";
import { Footer, TextField } from "../styles";
import useRoomId from "./utils/hooks/useRoomId";

const JoinRoomModal = ({
    modal
}) => {
    const roomId = useRoomId();
    return (
        <Modal modal={modal}>
            <Container>
                <TextField
                    label="Escribe el ID de la sala"
                    placeholder="ID de la sala"
                    value={roomId.value}
                    onChange={roomId.change}/>
                <Footer>
                    <Button
                        className="secondary medium"
                        text="Cancelar"
                        onClick={modal.hide}/>
                    <Button
                        className="medium"
                        text="Ingresar"/>
                </Footer>
            </Container>   
        </Modal>
    );
}

export default JoinRoomModal;