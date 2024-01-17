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
export const Container = styled.section`
    position: relative;
    display: grid;
    padding: 30px 130px;
    flex-grow: 1;
    gap: 20px;
`;