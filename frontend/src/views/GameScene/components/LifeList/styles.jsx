import styled from "styled-components";
import HeartIcon from "../../../../icons/HeartIcon";

export const LifeHearts = styled.div`
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