import styled from "styled-components";
import drawnCrossImg from "../../../../../../../images/drawn_cross.png";

export const Container = styled.button`
    position: relative;
    font-weight: bold;
    font-size: 22px;
    width: 1.7em;
    height: 1.7em;
    text-align: center;
    background-color: ${({ color }) => color};
    border: 4px solid var(--black);
    color: var(--tertiary);
    padding: 3px;
    box-shadow: 3px 3px 0 var(--black);
    transition: 0.25s;
    cursor: pointer;
    &:not(:disabled):hover {
        rotate: 360deg;
    }
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${drawnCrossImg});
        background-repeat: no-repeat;
        background-size: 85%;
        background-position: center; 
        transition: 0.25s;
        opacity: 0;
        visibility: hidden;
    }
    &:disabled {
        background-color: var(--gray);
        &::after {
            opacity: 1;
            visibility: visible;
        }
    }
`;

const KeyItem = ({
    text, color, onClick, disabled
}) => {
    return (
        <li>
            <Container 
                type="button" 
                color={color}
                disabled={disabled}
                onClick={onClick}>
                {text}
            </Container>
        </li>
    )
}

export default KeyItem;