import styled from "styled-components";
import { Grid } from "../components/styles";
import { CardImage } from "../../components/styles";

export const MainImage = styled(CardImage)`
    grid-area: mainimage;
`;
export const Container = styled(Grid)`
    grid-template-areas: 
        "roomdata sideimage"
        "mainimage sideimage"
        "dialog dialog"
`;