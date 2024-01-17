import styled from "styled-components";
import { Card } from "../../../../components/styles";

export const Container = styled(Card)`
    grid-area: dialog;
    & h4 {
        font-size: 14px;
        font-weight: 600;
        line-height: 25px;
        margin: 10px 40px;
        text-align: ${({ alignment = "center" }) => alignment};
    }
`;