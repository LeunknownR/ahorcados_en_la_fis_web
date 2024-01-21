import { useState } from "react";

const useRoomId = () => {
    const [value, setValue] = useState("");
    function change({ target }) {
        setValue(target.value);
    }
    return {
        value, change
    };
}	
    
export default useRoomId;