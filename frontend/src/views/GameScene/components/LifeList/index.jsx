import { Life, LifeHearts } from "./styles";
import { LIFE_STATES } from "./utils/constants";

const LifeList = ({
    lifes
}) => {
    return (
        <LifeHearts>
            {LIFE_STATES.map(lifeState => (
                <Life
                    key={lifeState}
                    className={lifes <= lifeState ? "empty" : ""}/>
            ))}
        </LifeHearts>
    );
}

export default LifeList;