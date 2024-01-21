import styled from "styled-components";
import { Grid } from "../components/styles";

export const Container = styled(Grid)`
    grid-template-areas: 
        "roomdata shinjiwaiting"
        "main shinjiwaiting"
        "message message"
`;