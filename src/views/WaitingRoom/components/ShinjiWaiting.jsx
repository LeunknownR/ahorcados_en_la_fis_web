import styled, { keyframes } from "styled-components";
import { Card } from "../../../components/styles";
import shinjiImg from "../../../images/shinji.png";

const animation = keyframes`
    from {
        filter: brightness(100%);
    }
    to {
        filter: brightness(120%);
    }
`;
export const ShinjiWaiting = styled(Card).attrs({
    imageUrl: shinjiImg
})`
    grid-area: shinjiwaiting;
    animation: linear ${animation} 0.5s infinite alternate-reverse;
`;

export default ShinjiWaiting;