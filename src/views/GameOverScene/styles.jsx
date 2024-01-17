import styled from "styled-components";
import { Container as ContainerBase } from "../components/styles";
import { CardImage } from "../../components/styles";

export const MainImage = styled(CardImage)`
    grid-area: mainimage;
`;
export const Container = styled(ContainerBase)`
    grid-template-rows: max-content 1fr max-content;
    grid-template-columns: 1fr 38%;
    grid-template-areas: 
        "header sideimage"
        "mainimage sideimage"
        "dialog dialog"
`;