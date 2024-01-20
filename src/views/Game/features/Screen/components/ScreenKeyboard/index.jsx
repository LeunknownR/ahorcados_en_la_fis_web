import { KeyGroup, KeyList } from "./styles";
import { getKeysWithColors } from "./utils/helpers";
import KeyItem from "./components/KeyItem";

const KEYS = getKeysWithColors();
const ScreenKeyboard = () => {
    return (
        <KeyList>
            <KeyGroup>
                {KEYS.LETTERS.map(keyItem => (
                    <KeyItem 
                        key={keyItem.key}
                        text={keyItem.key}
                        color={keyItem.color}/>
                ))}
            </KeyGroup>
            <KeyGroup>
                {KEYS.NUMBERS.map(keyItem => (
                    <KeyItem 
                        key={keyItem.key}
                        text={keyItem.key}
                        color={keyItem.color}/>
                ))}
            </KeyGroup>
        </KeyList>
    );
}

export default ScreenKeyboard;