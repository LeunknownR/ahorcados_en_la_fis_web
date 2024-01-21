import { useState } from "react";

const useModal = () => {
    const [show, setShow] = useState(false);
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