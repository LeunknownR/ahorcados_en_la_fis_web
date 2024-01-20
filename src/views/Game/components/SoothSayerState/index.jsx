import { Caption, Container, Life, LifeList } from "./styles";
import { LIFE_STATES } from "./utils/constants";

const SoothSayerState = ({
    currentLifeState
}) => {
    return (
        <Container>
            <Caption>ESTADO DEL ADIVINO</Caption>
            <LifeList>
                {LIFE_STATES.map(lifeState => (
                    <Life 
                        key={lifeState}
                        className={currentLifeState <= lifeState ? "empty" : ""}/>
                ))}
            </LifeList>
        </Container>
    );
}

export default SoothSayerState;