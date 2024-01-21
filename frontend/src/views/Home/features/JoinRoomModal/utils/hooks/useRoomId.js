import { useState } from "react";

const useRoomId = () => {
    const [value, setValue] = useState("");
    const isEmpty = () => value.length === 0;
    function change({ target }) {
        setValue(target.value);
    }
    const clear = () => setValue("");
    return {
        value, change,
        isEmpty, clear
    };
}	
    
export default useRoomId;