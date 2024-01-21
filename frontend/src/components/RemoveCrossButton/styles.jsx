import styled from "styled-components";

export const Container = styled.button`
    border: 0;
    background-color: transparent;
    cursor: pointer;
    & svg {
        transition: 0.35s;
    }
    &:hover svg {
        rotate: 180deg;
    }
`;