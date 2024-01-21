import Modal from "../../../../components/Modal";
import Button from "../../../../components/Button";
import { Container } from "./styles";
import { Footer, TextField } from "../styles";
import useRoomId from "./utils/hooks/useRoomId";
import useJoinRoom from "./utils/hooks/useJoinRoom";
import FullRoomModal from "./components/FullRoomModal";
import NotFoundRoomModal from "./components/NotFoundRoomModal";
import { useEffect } from "react";

const JoinRoomModal = ({
    modal, nickname
}) => {
    const roomId = useRoomId();
    useEffect(() => {
        if (!modal.show)
            roomId.clear();
    }, [modal.show]);
    const {
        notFoundRoomModal, fullRoomModal,
        joinRoom
    } = useJoinRoom({
        nickname, roomId: roomId.value
    });
    return (
        <>
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
                        text="Ingresar"
                        onClick={joinRoom}
                        disabled={roomId.isEmpty()}/>
                </Footer>
            </Container>   
        </Modal>
        <FullRoomModal modal={fullRoomModal}/>
        <NotFoundRoomModal modal={notFoundRoomModal}/>
        </>
    );
}

export default JoinRoomModal;