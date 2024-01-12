import { useContext } from "react";
import HomeContext from "./HomeContext";

const useHomeContext = () => {
    return useContext(HomeContext);
};
    
export default useHomeContext;