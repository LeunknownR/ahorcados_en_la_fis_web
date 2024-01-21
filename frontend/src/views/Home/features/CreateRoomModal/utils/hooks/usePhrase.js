import { useState } from "react";

const usePhrase = () => {
    const [value, setValue] = useState("");
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const change = ({ target }) => setValue(target.value);
    const isEmpty = () => value.length === 0;
    const clear = () => setValue("");
    return {
        value, change, 
        isEmpty, clear,
        showErrorMessage: {
            value: showErrorMessage,
            set: setShowErrorMessage
        }
    };
}	
    
export default usePhrase;