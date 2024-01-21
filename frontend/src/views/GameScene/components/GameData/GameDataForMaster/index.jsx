import { ButtonLink, Divider, Flex } from "../../../../../components/styles";
import { Container, Label, SmallDivider, UserNickname, Value } from "../styles";
import { revealPhrase } from "./utils/helpers";

const GameDataForMaster = ({
    soothsayerNickname,
    phrase
}) => {
    return (
        <Container>
            <Flex>
                <Label>Frase</Label>
                <SmallDivider>|</SmallDivider>
                <Value>
                    <ButtonLink onClick={() => revealPhrase(phrase)}>Ver frase</ButtonLink>
                </Value>
            </Flex>
            <Divider className="vertical"/>
            <Flex>
                <Label>Adivino</Label>
                <SmallDivider>|</SmallDivider>
                <Value>
                    <UserNickname>
                        {soothsayerNickname}
                    </UserNickname>
                </Value>
            </Flex>
        </Container>
    );
}

export default GameDataForMaster;