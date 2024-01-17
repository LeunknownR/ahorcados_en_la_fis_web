import styled from "styled-components"

export const ErrorMessage = styled.span`
    display: block;
    font-size: 15px;
    color: var(--secondary);
`;
export const Flex = styled.div`
    display: flex;
    flex-direction: ${({ direction = "row" }) => direction};
    gap: ${({ gap = "10px" }) => gap};
    align-items: center;
`;
export const Card = styled(Flex).attrs({
    as: "section"
})`
    position: relative;
    border: 3px solid var(--black);
    box-shadow: 8px 8px var(--black);
    background-color: var(--secondary);
    padding: ${({ padding = "15px 25px" }) => padding};
    transition: scale 0.25s;
`;
export const CardImage = styled(Card).attrs({
    padding: "0"
})`
    background-image: url(${({ imageUrl }) => imageUrl});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;
export const CardMessage = styled.h5`
    font-weight: 400;
    font-size: 20px;
    margin: 0;
    &.center {
        text-align: center;
    }
`;
export const Descriptor = styled.span`
    color: var(--black);
    font-size: 16px;
    font-weight: 400;
    &.small {
        font-size: 14px;
    }
`;
export const DescriptorValue = styled.span`
    color: var(--secondary-dark);
    font-size: 20px;
    font-weight: 700;
    &.small {
        font-size: 16px;
    }
`;
export const Divider = styled.hr`
    width: 5px;
    height: 100%;
    background-color: var(--black);
    border: 0;
    margin: 0;
    &.vertical {
        width: 100%;
        height: 5px;
    }
    /* flex-grow: 1; */
`;