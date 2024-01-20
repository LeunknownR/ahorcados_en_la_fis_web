import styled from "styled-components";
import RemoveCrossButton from "../../components/RemoveCrossButton";

export const ExitButton = styled(RemoveCrossButton)`
    position: absolute;
    top: 35px;
    left: 40px;
    & svg {
        width: 50px;
        height: 50px;
    }
`;
export const Main = styled.main`
    display: flex;
    justify-content: center;
    min-height: 100vh;
`;
export const Grid = styled.section`
    position: relative;
    padding: 30px 130px;
    flex-grow: 1;
    gap: 20px;
    display: grid;
    grid-template-rows: max-content 1fr max-content;
    grid-template-columns: 1fr 30%;
`;