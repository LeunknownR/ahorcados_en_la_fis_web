import styled, { keyframes } from "styled-components";

const animation = keyframes`
    from {
    }
    to {
    }
`;

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--overlay);
    width: 100%;
    height: 100%;
    transition: 0.25s;
    display: grid;
    place-items: center;
    z-index: 3;
    & img {
        display: block;
        width: 40%;
        height: 40%;
        animation: linear ${animation} 0.4s alternate-reverse infinite;
        filter: blur(2px);
    }
    &.hidden {
        opacity: 0;
        visibility: hidden;
    }
`;