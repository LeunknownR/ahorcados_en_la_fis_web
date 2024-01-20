import { ButtonLink, Divider, Flex } from "../../../../components/styles";
import { Container, Label, SoothsayerNickname, Value } from "./styles";
import { revealPhrase } from "./utils/helpers";

const SmallDivider = () => <Label>|</Label>;
const GameData = ({
    soothsayerNickname,
    phrase
}) => {
    return (
        <Container>
            <Flex>
                <Label>Frase</Label>
                <SmallDivider/>
                <Value>
                    <ButtonLink onClick={() => revealPhrase(phrase)}>Ver frase</ButtonLink>
                </Value>
            </Flex>
            <Divider className="vertical"/>
            <Flex>
                <Label>Adivino</Label>
                <SmallDivider/>
                <Value>
                    <SoothsayerNickname>
                        {soothsayerNickname}
                    </SoothsayerNickname>
                </Value>
            </Flex>
        </Container>
    );
}

export default GameData;