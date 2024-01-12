import { useState } from "react";

const useNickname = () => {
    const [value, setValue] = useState("");
    const change = ({ target }) => setValue(target.value);
    const isEmpty = () => value.length === 0;
    return {
        value, change, isEmpty
    };
}	
    
export default useNickname;