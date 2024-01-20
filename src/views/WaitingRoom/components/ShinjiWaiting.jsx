import styled, { keyframes } from "styled-components";
import { CardImage } from "../../../components/styles";
import shinjiImg from "../../../images/shinji.png";

const animation = keyframes`
    from {
        filter: brightness(100%);
    }
    to {
        filter: brightness(120%);
    }
`;
export const ShinjiWaiting = styled(CardImage).attrs({
    imageUrl: shinjiImg,
    as: "aside"
})`
    grid-area: shinjiwaiting;
    animation: linear ${animation} 0.5s infinite alternate-reverse;
    background-size: contain;
`;

export default ShinjiWaiting;