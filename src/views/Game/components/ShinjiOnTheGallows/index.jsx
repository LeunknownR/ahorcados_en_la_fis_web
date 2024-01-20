import styled from "styled-components";
import { LIFE_STATE_IMAGES } from "./utils/constants";
import { CardImage } from "../../../../components/styles";
import noHangedImg from "../../../../images/no_hanged.png"

export const Card = styled(CardImage)`
    grid-area: shinjionthegallows;
    background-size: contain;
    transition: 0.35s;
`;
const ShinjiOnTheGallows = ({
    currentLifeState
}) => {
    return (
        <Card imageUrl={LIFE_STATE_IMAGES[currentLifeState] || noHangedImg}/>
    );
}

export default ShinjiOnTheGallows;