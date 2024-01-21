import { Fragment } from "react";
import { Character, Text } from "./styles";

const HiddenPhrase = ({
    phraseCharsToPrint
}) => {
    return (
        <Text>
            {phraseCharsToPrint.map(({ 
                value, found, nextIsSpace 
            }, index) => (
                <Fragment key={index}>
                    <Character>
                        {found ? value : " "}
                    </Character>
                    {nextIsSpace && <Character/>}
                </Fragment>
            ))}
        </Text>
    );
}

export default HiddenPhrase;