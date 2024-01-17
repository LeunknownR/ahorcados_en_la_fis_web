import styled from "styled-components";
import { CardImage } from "../../../components/styles";
import reiRunningImg from "../../../images/rei_running.gif";

const ReiRunning = styled(CardImage).attrs({
    imageUrl: reiRunningImg
})`
    grid-area: main;
`;

export default ReiRunning;