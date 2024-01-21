import styled from "styled-components";
import { Grid } from "../components/styles";

const Container = styled(Grid)`
    grid-template-columns: 1fr 28%;
`;
export const ContainerMaster = styled(Container)`
    grid-template-areas: 
        "roomdata shinjionthegallows"
        "screen shinjionthegallows"
        "gamedata soothsayerstate";
`;
export const ContainerSoothsayer = styled(Container)`
    grid-template-areas: 
        "roomdata shinjionthegallows"
        "screen shinjionthegallows"
        "gamedata gamedata";
`;