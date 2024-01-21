import useAppContext from "../../../../../../utils/context/useAppContext";
import RestServices from "../../../../../../services/RestServices";
import ABSOLUTE_PATHS from "../../../../../../config/absolutePaths";
import GameStorage from "../../../../../../services/GameStorage";
import { useNavigate } from "react-router-dom";

const useCreateRoom = ({
    nickname, phrases
}) => {
    const { preloader, gameService } = useAppContext();
    const navigate = useNavigate();
    const createRoom = async () => {
        preloader.open();
        const { message, data } = await RestServices.createRoom({
            masterNickname: nickname,
            phrases
        });
        preloader.hide();
        switch (message) {
            case "SUCCESS":
                GameStorage.setGameData(data);
                navigate(ABSOLUTE_PATHS.WAITING_ROOM);
                gameService.connect();
                break;
            case "INVALID_DATA":
                alert("Tus datos son inválidos.");
                break;
            default:
                alert("Ocurrió un error inesperado.");
        }
    }
    return createRoom;
}	
    
export default useCreateRoom;