import { Container, Content, Input } from "./styles";

const TextField = ({
    className, 
    label, placeholder, 
    value, onChange, onKeyDown, onFocus,
    blockPaste, maxLength, decorator
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
                    onKeyDown={onKeyDown}
                    onFocus={onFocus}
                    onPaste={blockPaste ? e => e.preventDefault() : null}
                    maxLength={maxLength}/>
                {decorator}
            </Content>
        </Container>
    );
}

export default TextField;