import styled from "styled-components";
import { Container as ContainerBase } from "../PhraseBlock/styles";
import angel3Image from "../../../../../../images/angel_3.png"

export const Container = styled(ContainerBase)`
    background-image: url(${angel3Image});
    background-position-x: 75%;
    background-position-y: center;
    background-size: 58%;
    background-repeat: no-repeat;
`;
export const Content = styled.ul`
    padding: 0 10px;
    list-style: none;
    overflow-y: auto;
    height: 100%;
    margin: 0;
    &::-webkit-scrollbar {
        width: 12px;
    }
    &::-webkit-scrollbar-thumb,
    &::-webkit-scrollbar-track {
        border: 1px solid var(--black);
    }
    &::-webkit-scrollbar-thumb {
        background-color: var(--secondary);
    }
    &::-webkit-scrollbar-track {
        background-color: var(--tertiary);
    }
`;
export const Phrase = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    border-bottom: 1px solid var(--tertiary);
    &:last-child {
        border: 0;
    }
    & span {
        color: var(--secondary-dark);
    }
`;