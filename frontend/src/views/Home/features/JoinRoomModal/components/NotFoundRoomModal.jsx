import styled from "styled-components";
import NotificationModal from "../../../../../components/NotificationModal";
import shinjiConfusedImg from "../../../../../images/shinji_confused.png"

export const ShinjiConfused = styled.img.attrs({
    src: shinjiConfusedImg
})`
    width: 340px;
    margin: 0 50px;
`;
const NotFoundRoomModal = ({
    modal
}) => {
    return (
        <NotificationModal
            modal={modal}
            title="La sala que buscaste no parece ser real, pero..."
            acceptText="OK"
            image={
                <ShinjiConfused/>
            }/>
    );
}

export default NotFoundRoomModal;