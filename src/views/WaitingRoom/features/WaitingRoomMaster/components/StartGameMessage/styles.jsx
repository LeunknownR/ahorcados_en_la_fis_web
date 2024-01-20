import styled from "styled-components";
import { Card, CardMessage, Flex } from "../../../../../../components/styles";
import reiShyImg from "../../../../../../images/rei_shy.png";

export const ReiShyImage = styled.img.attrs({
    src: reiShyImg,
    alt: "Rei tímida"
})`
    width: 90px;
`;
export const MessageWrapper = styled(Flex)`
    flex-grow: 1;
    & ${CardMessage} {
        flex-grow: 1;
        text-align: center;
    }
`;
export const SoothsayerAboutMessage = styled.h4`
    width: 30%;
    font-weight: 400;
    color: var(--primary-dark);
    text-align: center;
    font-size: 18px;
    line-height: 30px;
    text-overflow: ellipsis;
    overflow: hidden;
`;
export const Container = styled(Card).attrs({ 
    gap: "40px",
    as: "footer"
})`
    grid-area: message;
`;