import { Container, Content, Phrase, RemovePhraseButton } from "./styles";
import CrossIcon from "../../../../../../icons/CrossIcon";

const PhraseList = ({
    phraseList
}) => {
    return (
        <Container>
            <Content>
                {phraseList.value.map((phrase, index) => (
                    <Phrase key={index}>
                        <span>{phrase}</span>
                        <RemovePhraseButton onClick={() => phraseList.remove(phrase)}>
                            <CrossIcon/>
                        </RemovePhraseButton>
                    </Phrase>
                ))}
            </Content>
        </Container>
    );
}

export default PhraseList;