import { createPortal } from "react-dom";
import { Window, Overlay, Container } from "./styles";

const $portals = document.getElementById("portals");
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
        $portals
    );
}

export default Modal;