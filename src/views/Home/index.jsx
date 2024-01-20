import useModal from "../../components/Modal/utils/hooks/useModal";
import TextField from "../../components/TextField";
import RoomFullNotificationModal from "./components/RoomFullNotificationModal";
import JoinRoomModal from "./features/JoinRoomModal";
import CreateRoomModal from "./features/CreateRoomModal";
import { AngelImage, Container, Footer, HomeButton } from "./styles";
import useNickname from "./utils/hooks/useNickname";
import HomeContext from "./utils/context/HomeContext";
import Preloader from "../../components/Preloader";
import usePreloader from "../../components/Preloader/utils/hooks/usePreloader";

const Home = () => {
    const nickname = useNickname();
    const joinRoomModal = useModal();
    const createRoomModal = useModal();
    const roomFullNotificationModal = useModal();
    const preloader = usePreloader();
    return (
        <HomeContext.Provider value={{
            nickname: nickname.value
        }}>
            <Container>
                <h1>AHORCADOS EN LA FIS</h1>
                <TextField 
                    className="big"
                    label="Escribe tu nickname"
                    placeholder="Longinus"
                    maxLength={20}
                    value={nickname.value}
                    onChange={nickname.change}/>
                <Footer>
                    <HomeButton 
                        text="Crear sala"
                        disabled={nickname.isEmpty()}
                        onClick={createRoomModal.open}/>
                    <HomeButton 
                        text="Unirse"
                        disabled={nickname.isEmpty()}
                        onClick={joinRoomModal.open}/>
                </Footer>
                {/* Decoration */}
                <AngelImage/>
                <AngelImage className="right"/>
                {/* Modals */}
                <CreateRoomModal modal={createRoomModal}/>
                <JoinRoomModal modal={joinRoomModal}/>
                <RoomFullNotificationModal modal={roomFullNotificationModal}/>
            </Container>
            <Preloader show={preloader.show}/>
        </HomeContext.Provider>
    );
}

export default Home;