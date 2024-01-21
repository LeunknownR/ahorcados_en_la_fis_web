import { Fragment } from "react";
import { Character, Text } from "./styles";

const HiddenPhrase = ({
    phraseCharsToPrint
}) => {
    return (
        <Text>
            {phraseCharsToPrint.map(({ 
                character, found, nextIsSpace 
            }, index) => (
                <Fragment key={index}>
                    <Character>
                        {found ? character : " "}
                    </Character>
                    {nextIsSpace && <Character/>}
                </Fragment>
            ))}
        </Text>
    );
}

export default HiddenPhrase;