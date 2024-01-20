import styled from "styled-components";
import { CardImage } from "../../../../../components/styles";
import reiGangnamStyle from "../../../../../images/rei_gangnam_style.gif";

const ReiGangnamStyle = styled(CardImage).attrs({
    imageUrl: reiGangnamStyle
})`
    grid-area: main;
    background-size: contain;
`;

export default ReiGangnamStyle;