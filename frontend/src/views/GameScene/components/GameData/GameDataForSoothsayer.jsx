import { Divider, Flex } from "../../../../components/styles";
import { Container, Label, SmallDivider, UserNickname, Value } from "./styles";
import LifeList from "../LifeList";

const GameDataForSoothsayer = ({
    masterNickname, lifes
}) => {
    return (
        <Container>
            <Flex>
                <Label>Adivino</Label>
                <SmallDivider>|</SmallDivider>
                <Value>
                    <LifeList lifes={lifes}/>
                </Value>
            </Flex>
            <Divider className="vertical"/>
            <Flex>
                <Label>Master</Label>
                <SmallDivider>|</SmallDivider>
                <Value>
                    <UserNickname>
                        {masterNickname}
                    </UserNickname>
                </Value>
            </Flex>
        </Container>
    );
}

export default GameDataForSoothsayer;