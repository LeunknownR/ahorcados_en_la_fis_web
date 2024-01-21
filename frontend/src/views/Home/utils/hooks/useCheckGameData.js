import { useEffect } from "react";
import GameStorage from "../../../../services/GameStorage";
import { useNavigate } from "react-router-dom";
import ABSOLUTE_PATHS from "../../../../config/absolutePaths";

const useCheckGameData = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (GameStorage.getGameData())
            navigate(ABSOLUTE_PATHS.WAITING_ROOM);
    }, []);
}	
    
export default useCheckGameData;