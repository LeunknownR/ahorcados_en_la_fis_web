import { Container } from "./styles"

const Button = ({
    className,
    onClick, text,
    disabled
}) => {
    return (
        <Container 
            type="button"
            className={className} 
            onClick={onClick}
            disabled={disabled}>
            {text}
        </Container>
    );
}

export default Button;