import styled from "styled-components";
import { Card, Flex } from "../../../components/styles";

export const NicknameField = styled(Flex)`
    flex-grow: 1;
`;
export const Container = styled(Card).attrs({ 
    gap: "40px",
    as: "header"
})`
    grid-area: roomdata;
`;
