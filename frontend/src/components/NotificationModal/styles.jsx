import styled from "styled-components";
import Button from "../Button";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
    margin: auto;
    max-width: 500px;
    & h4 {
        margin: 0;
        font-size: 20px;
    }
`;
export const AcceptButton = styled(Button)`
    width: 130px;
`;