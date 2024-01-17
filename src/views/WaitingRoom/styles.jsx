import styled from "styled-components";
import { Container as ContainerBase } from "../components/styles";

export const Container = styled(ContainerBase)`
    grid-template-rows: max-content 1fr max-content;
    grid-template-columns: 1fr 38%;
    grid-template-areas: 
        "header shinjiwaiting"
        "main shinjiwaiting"
        "message message"
`;