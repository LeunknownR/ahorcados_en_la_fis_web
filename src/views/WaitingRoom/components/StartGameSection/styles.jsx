import styled from "styled-components";
import { Card } from "../../../../components/styles";
import reiPointingTopImg from "../../../../images/rei_pointing_top.png";
import reiPointingBottomImg from "../../../../images/rei_pointing_bottom.png";

export const Container = styled(Card)`
    grid-area: main;
    position: relative;
    display: grid;
    place-items: center;
`;
const ReiPointing = styled.img`
    position: absolute;
    --offset-x: 45px;
    --offset-y: 20px;
    --rotation-angle: 10deg;
    width: 130px;
`;
export const ReiPointingToBottomImage = styled(ReiPointing).attrs({
    src: reiPointingTopImg,
    alt: "Rei apuntando hacia abajo enérgicamente"
})`
    &.left {
        top: var(--offset-y);
        left: var(--offset-x);
        transform: rotate(var(--rotation-angle));
    }
    &.right {
        top: var(--offset-y);
        right: var(--offset-x);
        transform: scaleX(-1) rotate(var(--rotation-angle));
    }
`;
export const ReiPointingToTopImage = styled(ReiPointing).attrs({
    src: reiPointingBottomImg,
    alt: "Rei apuntando hacia arriba enérgicamente"
})`
    &.left {
        bottom: var(--offset-y);
        left: var(--offset-x);
        transform: rotate(calc(-1*var(--rotation-angle))) scaleX(-1);
    }
    &.right {
        bottom: var(--offset-y);
        right: var(--offset-x);
        transform: rotate(var(--rotation-angle));
    }
`;