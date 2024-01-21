import styled from "styled-components";
import { Card } from "../../../../components/styles";

export const Container = styled(Card).attrs({
    padding: "15px 50px"
})`
    grid-area: soothsayerstate;
    display: flex;
    flex-direction: column;
`;
export const Caption = styled.h5`
    color: var(--primary-dark);
    margin: 0;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
`;