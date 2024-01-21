import useModal from "../../components/Modal/utils/hooks/useModal";
import TextField from "../../components/TextField";
import JoinRoomModal from "./features/JoinRoomModal";
import CreateRoomModal from "./features/CreateRoomModal";
import { AngelImage, Container, Footer, HomeButton } from "./styles";
import useNickname from "./utils/hooks/useNickname";
import HomeContext from "./utils/context/HomeContext";
import useCheckGameData from "./utils/hooks/useCheckGameData";

const Decoration = () => (
    <>
    <AngelImage/>
    <AngelImage className="right"/>
    </>
);
const Home = () => {
    const nickname = useNickname();
    const joinRoomModal = useModal();
    const createRoomModal = useModal();
    useCheckGameData();
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
                    maxLength={16}
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
                <Decoration/>
                <CreateRoomModal
                    modal={createRoomModal}
                    nickname={nickname.value}/>
                <JoinRoomModal 
                    modal={joinRoomModal}
                    nickname={nickname.value}/>
            </Container>
        </HomeContext.Provider>
    );
}

export default Home;