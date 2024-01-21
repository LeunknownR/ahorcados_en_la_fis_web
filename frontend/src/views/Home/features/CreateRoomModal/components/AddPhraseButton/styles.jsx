import styled from "styled-components";

export const Container = styled.button`
    border: 0;
    background-color: transparent;
    &:not(:disabled) {
        cursor: pointer;
    }
    & svg {
        fill: var(--secondary-dark);
        width: 15px;
        height: 15px;
        transition: 0.25s;
    }
    &:disabled svg {
        opacity: 0.5;
    }
`;