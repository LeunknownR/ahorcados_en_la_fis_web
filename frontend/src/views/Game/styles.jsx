import styled from "styled-components";
import { Grid } from "../components/styles";

export const Container = styled(Grid)`
    grid-template-columns: 1fr 28%;
    grid-template-areas: 
        "roomdata shinjionthegallows"
        "screen shinjionthegallows"
        "gamedata soothsayerstate";
`;