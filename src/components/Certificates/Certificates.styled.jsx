import styled from 'styled-components';



export const CertificateSection = styled.section`
    padding: 45px 15px;
    border-radius: 15px;
` 

export const SectionTitle = styled.h2`
  margin-bottom: 40px;
  color: blueviolet;
    font-size: 25px;
    font-weight: 600;
    text-align: center;
`

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    @media screen and (min-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
`;

export const Img = styled.img`
    width: 400px;
`;