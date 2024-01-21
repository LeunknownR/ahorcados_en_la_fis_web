import { KeyGroup, KeyList } from "./styles";
import { getKeysWithColors } from "./utils/helpers";
import KeyItem from "./components/KeyItem";
import useGameContext from "../../../../../Game/utils/context/useGameContext";
import useAppContext from "../../../../../../utils/context/useAppContext";

const KEYS = getKeysWithColors();
const ScreenKeyboard = () => {
    const { gameService } = useAppContext();
    const { gameData, isMaster } = useGameContext();
    const soothsay = key => {
        gameService.emit("soothsayer:soothsay", { key });
    }
    const isUsedKey = key => gameData.currentPhraseData.usedKeys.includes(key);
    return (
        <KeyList className={isMaster ? "disabled": ""}>
            <KeyGroup>
                {KEYS.LETTERS.map(keyItem => (
                    <KeyItem 
                        key={keyItem.key}
                        text={keyItem.key}
                        color={keyItem.color}
                        disabled={isUsedKey(keyItem.key)}
                        onClick={() => soothsay(keyItem.key)}/>
                ))}
            </KeyGroup>
            <KeyGroup>
                {KEYS.NUMBERS.map(keyItem => (
                    <KeyItem 
                        key={keyItem.key}
                        text={keyItem.key}
                        color={keyItem.color}
                        disabled={isUsedKey(keyItem.key)}
                        onClick={() => soothsay(keyItem.key)}/>
                ))}
            </KeyGroup>
        </KeyList>
    );
}

export default ScreenKeyboard;