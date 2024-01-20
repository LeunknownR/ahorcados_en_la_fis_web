import { createPortal } from "react-dom";
import { Container } from "./styles";

const $preloaders = document.getElementById("preloaders");
const Preloader = ({
    show
}) => {
    return createPortal(
        <Container className={!show ? "hidden" : ""}>
            <span></span>
        </Container>,
        $preloaders
    );
}

export default Preloader;