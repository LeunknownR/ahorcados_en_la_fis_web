import { useContext } from "react";
import AppContext from "./AppContext";

const useAppContext = () => {
    return useContext(AppContext);
}
    
export default useAppContext;