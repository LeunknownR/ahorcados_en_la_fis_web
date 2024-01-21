import LifeList from "../LifeList";
import { Caption, Container } from "./styles";

const SoothSayerStateForMaster = ({
    lifes
}) => {
    return (
        <Container>
            <Caption>ESTADO DEL ADIVINO</Caption>
            <LifeList lifes={lifes}/>
        </Container>
    );
}

export default SoothSayerStateForMaster;