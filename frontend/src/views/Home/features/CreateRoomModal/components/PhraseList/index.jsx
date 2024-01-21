import { Container, Content, Phrase } from "./styles";
import RemoveCrossButton from "../../../../../../components/RemoveCrossButton";

const PhraseList = ({
    phraseList
}) => {
    return (
        <Container>
            <Content>
                {phraseList.value.map((phrase, index) => (
                    <Phrase key={index}>
                        <span>{phrase}</span>
                        <RemoveCrossButton 
                            onClick={() => phraseList.remove(phrase)}/>
                    </Phrase>
                ))}
            </Content>
        </Container>
    );
}

export default PhraseList;