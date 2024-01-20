import styled from "styled-components";
import { Card, Descriptor, Flex } from "../../../../components/styles";

export const Container = styled(Card).attrs({
    padding: "30px 50px"
})`
    grid-area: gamedata;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
`;
export const Value = styled(Flex)`
    flex-grow: 1;
    justify-content: center;
`;
export const Label = styled.span`
    width: 15%;
    font-weight: 600;
    color: var(--primary-dark);
`;
export const SoothsayerNickname = styled.span`
    font-size: 16px;
    font-weight: 700;
    color: var(--primary-dark);
`;