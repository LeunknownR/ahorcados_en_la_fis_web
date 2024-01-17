import { Flex, Descriptor, DescriptorValue, Divider } from "../../../components/styles";
import { Container, NicknameField } from "./styles";

const nickname = "leunknownr", roomId = "p0ZoB1FwH6";
const RoomData = () => {
    return (
        <Container>
            <NicknameField>
                <Descriptor>Nickname:</Descriptor>
                <DescriptorValue>{nickname}</DescriptorValue>
            </NicknameField>
            <Divider/>
            <Flex direction="column">
                <Descriptor className="small">ID de la sala:</Descriptor>
                <DescriptorValue className="small">{roomId}</DescriptorValue>
            </Flex>
        </Container>
    );
}

export default RoomData;