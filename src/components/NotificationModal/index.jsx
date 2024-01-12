import Modal from "../Modal";
import { AcceptButton, Container } from "./styles";

const NotificationModal = ({
    modal, title, 
    image, acceptText
}) => {
    return (
        <Modal modal={modal}>
            <Container>
                <h4>{title}</h4>
                {image}
                <AcceptButton
                    className="medium"
                    text={acceptText}
                    onClick={modal.hide}/>
            </Container>
        </Modal>
    );
}

export default NotificationModal;