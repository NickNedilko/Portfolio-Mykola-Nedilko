import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 20px;
    /* display: grid; */
    gap: 10px;
    /* grid-auto-flow: row; */
`;


export const Img = styled.img`
    width: 550px;
    height: 350px;
    
`
const text = `
    font-weight: 400;
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0.02em;
    color: white;
    text-align: justify;

    @media screen and (min-width: 768px) {
        font-size: 14px;
    }

    @media screen and (min-width: 1280px) {
        font-size: 16px;    
    }
`;

export const Title = styled.p`
    ${text}
    font-weight: 600;
    margin-bottom: 15px;
`;

export const Description = styled.span`
    ${text}
`;
