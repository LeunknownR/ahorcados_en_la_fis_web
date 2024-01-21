import { useState } from "react";

const useModal = (defaultValue = false) => {
    const [show, setShow] = useState(defaultValue);
    const open = () => {
        setShow(true);
    }
    const hide = () => {
        setShow(false);
    }
    return {
        show, open, hide
    };
}	
    
export default useModal;