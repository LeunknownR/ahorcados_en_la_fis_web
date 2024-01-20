import { useState } from "react";

const usePreloader = () => {
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
    
export default usePreloader;