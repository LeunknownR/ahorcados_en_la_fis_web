import { Container, Content, Input } from "./styles";

const TextField = ({
    className, 
    label, placeholder, 
    value, onChange, onFocus,
    maxLength, decorator
}) => {
    return (
        <Container className={className}>
            <label>{label}</label>
            <Content>
                <Input 
                    type="text" 
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    onFocus={onFocus}
                    maxLength={maxLength}/>
                {decorator}
            </Content>
        </Container>
    );
}

export default TextField;