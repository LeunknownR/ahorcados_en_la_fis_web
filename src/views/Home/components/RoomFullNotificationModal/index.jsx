import NotificationModal from "../../../../components/NotificationModal";
import reiCryingImg from "src/images/rei_pipipi.png";
import { ReiCryingImage } from "./styles";

const RoomFullNotificationModal = ({
    modal
}) => {
    return (
        <NotificationModal
            modal={modal}
            title="La sala está llena"
            acceptText="OK"
            image={
                <ReiCryingImage src={reiCryingImg}/>
            }/>
    );
}

export default RoomFullNotificationModal;