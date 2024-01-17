import styled from "styled-components";
import Button from "../../components/Button";
import angelImg from "../../images/angel.png";

export const Container = styled.section`
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 80px;
    width: 100%;
    max-width: 800px;
    & h1 {
        font-family: "DeathNote";
        font-size: 80px;
        font-weight: 200;
        margin: 0;
    }
`;
export const Footer = styled.footer`
    display: flex;
    justify-content: space-evenly;
    gap: 15px;
    width: 50%;
`;
export const HomeButton = styled(Button)`
    width: 150px;
`;
export const AngelImage = styled.img.attrs({
    src: angelImg,
    alt: "Angel"
})`
    position: fixed;
    bottom: 0;
    width: 200px;
    --offset: 5%;
    left: var(--offset);
    &.right {
        left: unset;
        right: var(--offset);
        transform: rotateY(180deg);
    }
`;