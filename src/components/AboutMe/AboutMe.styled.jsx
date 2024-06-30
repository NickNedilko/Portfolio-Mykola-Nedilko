
import styled from 'styled-components';



export const Container = styled.div`
    min-width: 270px;
    width: 100%;
    padding: 0 20px;
    margin-right: auto;
    margin-left: auto;
 
    @media screen and (min-width: 768px) {
        padding: 0 30px;
    }

    @media screen and (min-width: 1280px) {
        padding: 0 40px;
    }
`

export const HeroSection = styled.section`
    display: flex;
    height: 500px;
`;

export const  HeroImg = styled.img`
    width: 550px;
    height: 450px;

`

export const Wrapper = styled.div`
    padding: 60px 0;
    text-align: center;

    @media screen and (min-width: 768px) {
        padding: 100px 0;
    }

    @media screen and (min-width: 1280px) {
        padding: 150px 0;
    }
`

const text = `
    font-weight: 600;
    font-size: 36px;
    line-height: 1.14;
    letter-spacing: 0.02em;
    background: var(--title-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (min-width: 768px) {
        font-size: 50px;
    }

    @media screen and (min-width: 1280px) {
        font-size: 72px;
    }
`;

export const StyledBtn = styled.button`
width: 150px;
    padding: 15px;
    border-radius: 15px;
    background: var(--bgd);
    font-size: 18px;
    color: aliceblue;
    cursor: pointer;
`

export const Title = styled.h1`
    ${text}
    transform: translateY(0);
    animation: move-down 1000ms ease-in;
   
    @keyframes move-down {
        from {
          transform: translateY(-100px);
          opacity: 0;

        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }  
`;

export const Subtitle = styled.h2`
      ${text}
        transform: translateY(0);
        animation: move-up 1000ms ease-in;
        margin-bottom: 30px;

        @media screen and (min-width: 768px) {
            margin-bottom: 40px;
        }
    
        @media screen and (min-width: 1280px) {
            margin-bottom: 60px;
        }

        @keyframes move-up {
            from {
              transform: translateY(100px);
              opacity: 0;
    
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
`;

export const LinksWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 40px;
`
    