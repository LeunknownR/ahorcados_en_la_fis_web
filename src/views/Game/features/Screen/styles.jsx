import styled from "styled-components";
import { Card } from "../../../../components/styles";

export const Container = styled(Card).attrs({
    padding: "15px 45px"
})`
    grid-area: screen;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 35px;
`;