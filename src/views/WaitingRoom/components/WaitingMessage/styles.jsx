import styled from "styled-components";
import { Card } from "../../../../components/styles";
import reiApproving from "../../../../images/rei_approving.png";

export const Container = styled(Card).attrs({
    as: "footer"
})`
    grid-area: message;
    display: flex;
    justify-content: space-between;
`;
export const ReiApprovingImage = styled.img.attrs({
    src: reiApproving,
    alt: "Rei aprobando la situación"
})`
    width: 60px;
    &.right {
        transform: rotateY(180deg);
    }
`;