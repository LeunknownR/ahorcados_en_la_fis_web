import { Container } from "./styles";

const Dialog = ({
    children,
    alignment
}) => {
    return (
        <Container alignment={alignment}>
            <h4>{children}</h4>
        </Container>
    );
}

export default Dialog;