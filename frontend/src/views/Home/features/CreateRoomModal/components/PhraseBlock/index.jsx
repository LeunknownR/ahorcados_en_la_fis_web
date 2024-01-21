import useHomeContext from "../../../../utils/context/useHomeContext";
import NoPhrasesMessage from "../NoPhrasesMessage";
import PhraseList from "../PhraseList";

const PhraseBlock = ({
    phraseList
}) => {
    const { nickname } = useHomeContext();
    return (
        phraseList.isEmpty() 
        ? <NoPhrasesMessage nickname={nickname}/>
        : <PhraseList phraseList={phraseList}/>
    );
}

export default PhraseBlock;