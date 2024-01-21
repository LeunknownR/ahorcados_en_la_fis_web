import { useContext } from "react";
import GameContext from "./GameContext";

const useGameContext = () => {
    return useContext(GameContext);
}
    
export default useGameContext;