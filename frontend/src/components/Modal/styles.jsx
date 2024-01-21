//#region Libraries
import styled from "styled-components";
//#endregion

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--overlay);
    z-index: 0;
`;
export const Window = styled.div`
    position: relative;
    background-color: var(--tertiary);
    padding: 50px;
    transition: scale 0.25s;
    box-shadow: 10px 10px var(--black);
`;
export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    transition: opacity 0.25s, visibility 0.25s;
    z-index: 2;
    &.hidden {
        opacity: 0;
        visibility: hidden;
        & ${Window} {
            scale: 0;
        }
    }
`;