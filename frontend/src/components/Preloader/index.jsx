import { createPortal } from "react-dom";
import { Container } from "./styles";
import lightningCrossImg from "../../images/lightning_cross.png";

const $preloaders = document.getElementById("preloaders");
const Preloader = ({
    show
}) => {
    return createPortal(
        <Container className={!show ? "hidden" : ""}>
            <img src={lightningCrossImg} alt="Lightning Cross"/>
        </Container>,
        $preloaders
    );
}

export default Preloader;