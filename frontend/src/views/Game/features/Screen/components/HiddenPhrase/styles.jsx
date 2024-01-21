import styled from "styled-components";

export const Text = styled.p`
    font-size: 25px;
    font-weight: 700;
    padding: 5px 0;
    margin: 0 35px;
    text-align: center;
    letter-spacing: 5px;
    line-height: 50px;
    width: 100%;
    text-transform: uppercase;
    color: var(--primary-dark);
    word-break: break-all;
`;
export const Character = styled.span`
    border-bottom: 4px solid var(--primary-dark);
    margin: 10px;
    width: 25px;
    line-height: 35px;
    padding-left: 4px;
    display: inline-block;
    vertical-align: bottom;
    &:empty {
        opacity: 0;
    }
`;