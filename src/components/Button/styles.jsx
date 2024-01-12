import styled from "styled-components";

export const Container = styled.button`
    padding: 1em 1.2em;
    border: 3px solid var(--tertiary-dark);
    color: var(--tertiary-dark);
    background-color: var(--fourth);
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    cursor: pointer;
    transition: 0.25s;
    &:hover {
        box-shadow: 6px 6px var(--tertiary-dark);
    }
    &.medium {
        font-size: 15px;
    }
    &.secondary {
        background-color: transparent;
        border-color: transparent;
        color: var(--tertiary-dark);
        &:hover {
            border-color: var(--tertiary-dark);
        }
    }
    &:disabled {
        background-color: var(--primary-fourth-transparent);
        color: var(--primary-dark-transparent);
        border-color: transparent;
        box-shadow: unset;
        cursor: default;
    }
`;