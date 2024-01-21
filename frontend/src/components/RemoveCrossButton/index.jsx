import { Container } from "./styles";
import CrossIcon from "../../icons/CrossIcon";

const RemoveCrossButton = props => {
    return (
        <Container {...props}>
            <CrossIcon/>
        </Container>
    );
}

export default RemoveCrossButton;