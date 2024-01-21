import styled from "styled-components";
import NotificationModal from "../../../../../components/NotificationModal";
import reiCryingImg from "../../../../../images/rei_pipipi.png";

export const ReiCryingImage = styled.img.attrs({
    src: reiCryingImg
})`
    width: 250px;
    margin: 0 50px;
`;
const FullRoomModal = ({
    modal
}) => {
    return (
        <NotificationModal
            modal={modal}
            title="La sala está llena"
            acceptText="OK"
            image={
                <ReiCryingImage/>
            }/>
    );
}

export default FullRoomModal;