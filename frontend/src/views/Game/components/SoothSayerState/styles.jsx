import styled from "styled-components";
import { Card } from "../../../../components/styles";
import HeartIcon from "../../../../icons/HeartIcon";

export const Container = styled(Card).attrs({
    padding: "15px 50px"
})`
    grid-area: soothsayerstate;
    display: flex;
    flex-direction: column;
`;
export const Caption = styled.h5`
    color: var(--primary-dark);
    margin: 0;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
`;
export const LifeList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(55px, 1fr));
    margin: 0 50px;
    width: 100%;
`;
export const Life = styled(HeartIcon)`
    width: 40px;
    margin: auto;
    & path {
        fill: var(--fourth);
        transition: 0.35s;
    }
    &.empty path {
        fill: var(--secondary-dark);
    }
`;