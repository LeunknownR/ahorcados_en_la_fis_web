import styled from "styled-components";

export const Input = styled.input`
    background-color: transparent;
    outline: none;
    border: 0;
    flex-grow: 1;
    &::placeholder {
        color: var(--placeholder);
    }
`;
export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    padding: 10px 15px;
    border: 3px solid var(--primary-dark);
    transition: 0.25s;
    &:has(${Input}:focus) {
        box-shadow: 6px 6px var(--primary-dark);
    }
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    & label {
        color: var(--primary-dark);
        text-align: center;
        font-weight: 600;
        font-size: 18px;        
    }
    &.big ${Content} {
        padding: 15px;
    }
`;