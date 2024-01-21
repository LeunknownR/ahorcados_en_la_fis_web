import { useEffect } from "react";
import GameStorage from "../../services/GameStorage";
import ABSOLUTE_PATHS from "../../config/absolutePaths";
import { useNavigate } from "react-router-dom";

const useCheckGameInProgress = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (GameStorage.getGameData()) 
            navigate(ABSOLUTE_PATHS.WAITING_ROOM);
    }, []);
}	
    
export default useCheckGameInProgress;