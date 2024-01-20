import styled from "styled-components";
import { Card, CardImage } from "../../../../components/styles";

const GRID_AREA = "sideimage";
export const SideImageGroup = styled(Card).attrs({
    as: "aside"
})`
    grid-area: ${GRID_AREA};
    background-color: var(--black);
    display: grid;
    grid-template-rows: 65% 30%;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    grid-template-areas: 
        "top top"
        "bottomleft bottomright";
`;
export const SideImageGroupItem = styled.img`
    grid-area: ${({ gridArea }) => gridArea};
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scaleX(-1);
`;
export const SideImage = styled(CardImage).attrs({
    as: "aside"
})`
    grid-area: ${GRID_AREA};
`;