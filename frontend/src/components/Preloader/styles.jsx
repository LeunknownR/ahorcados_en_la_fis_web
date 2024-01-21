import styled, { keyframes } from "styled-components";

const animation = keyframes`
    from {
        box-shadow: 0 0 50px var(--fourth);
    }
    to {
        box-shadow: 0 0 100px var(--fourth);
    }
`;

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--overlay);
    width: 100%;
    height: 100%;
    transition: 0.3s;
    display: grid;
    place-items: center;
    z-index: 2;
    & span {
        display: block;
        width: 50px;
        height: 50px;
        background-color: var(--fourth);
        border-radius: 100%;
        animation: linear ${animation} 0.4s alternate-reverse infinite;
        filter: blur(5px);
    }
    &.hidden {
        opacity: 0;
        visibility: hidden;
    }
`;