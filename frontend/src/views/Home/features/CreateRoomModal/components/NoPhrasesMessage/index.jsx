import { Container, Message } from "./styles";

const NoPhrasesMessage = ({
    nickname
}) => {
    return (
        <Container>
            <Message>
                No temas,<br/>
                <span>{nickname}</span><br/>
                Escribe tus frases.
            </Message>
        </Container>
    );
}

export default NoPhrasesMessage;