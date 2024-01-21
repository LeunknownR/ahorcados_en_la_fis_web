import styled from "styled-components";

const rowGap = "18px";
export const KeyList = styled.section`
    display: flex;
    flex-direction: column;
    row-gap: ${rowGap};
    margin-bottom: 20px;
    &.disabled {
        pointer-events: none;
    }
`;
export const KeyGroup = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    row-gap: ${rowGap};
    margin: 0;
    padding: 0;
    list-style: none;
`;