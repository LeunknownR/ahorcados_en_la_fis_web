import useAppContext from "../../../../../../utils/context/useAppContext";
import RestServices from "../../../../../../services/RestServices";
import ABSOLUTE_PATHS from "../../../../../../config/absolutePaths";
import GameStorage from "../../../../../../services/GameStorage";
import { useNavigate } from "react-router-dom";
import useModal from "../../../../../../components/Modal/utils/hooks/useModal";

const useJoinRoom = ({
    nickname, roomId
}) => {
    const { preloader, gameService } = useAppContext();
    const navigate = useNavigate();
    const notFoundRoomModal = useModal();
    const fullRoomModal = useModal();
    const joinRoom = async () => {
        preloader.open();
        const { data, message } = await RestServices.joinRoom({
            soothsayerNickname: nickname,
            roomId
        });
        preloader.hide();
        switch (message) {
            case "SUCCESS":
                GameStorage.setGameData(data);
                navigate(ABSOLUTE_PATHS.WAITING_ROOM);
                gameService.connect();
                return;
            case "FULL_ROOM":
                fullRoomModal.open();
                return;
            case "NOT_FOUND_ROOM":
                notFoundRoomModal.open();
                return;
            case "INVALID_DATA":
                alert("Tus datos son inválidos.");
                return;
            default:
                alert("Ocurrió un error inesperado.");
        }
    }
    return {
        notFoundRoomModal, fullRoomModal,
        joinRoom
    };
}	
    
export default useJoinRoom;