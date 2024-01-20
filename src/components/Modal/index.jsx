import { createPortal } from "react-dom";
import { Window, Overlay, Container } from "./styles";

const $modals = document.getElementById("modals");
const Modal = ({
    children, modal
}) => {
    return createPortal(
        <Container className={!modal.show ? "hidden" : ""}>
            <Overlay onClick={modal.hide}/>
            <Window>
                {children}
            </Window>
        </Container>, 
        $modals
    );
}

export default Modal;