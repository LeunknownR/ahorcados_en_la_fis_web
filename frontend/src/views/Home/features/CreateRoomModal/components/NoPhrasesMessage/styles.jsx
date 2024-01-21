import styled from "styled-components";
import { Container as ContainerBase } from "../PhraseBlock/styles";
import angel2Image from "../../../../../../images/angel_2.png"

export const Container = styled(ContainerBase)`
    background-image: url(${angel2Image});
    background-position: center;
    background-size: 75%;
    background-repeat: no-repeat;
`;
export const Message = styled.h6`
    font-size: 26px;
    font-weight: 200;
    text-align: center;
    & span {
        font-weight: 700;
    }
`;