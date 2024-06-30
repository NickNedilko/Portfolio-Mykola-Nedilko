// import CV from '../components/CV';
import {  HeroSection, Title, Wrapper, Subtitle, LinksWrapper, HeroImg, StyledBtn } from './AboutMe.styled';
import homeImg from '../../assets/fullstack_banner.png'
import { CV } from '../CV/CV';
import { Link } from 'react-router-dom';





export const AboutMe = () => {
  return (
      <HeroSection>
          <div>
                <HeroImg src={homeImg} alt="fullStack" />
            </div>
            {/* <Container> */}
                <Wrapper>
                <Title>Mykola Nedilko</Title>
                 <Subtitle>FullStack developer</Subtitle>
                 <LinksWrapper>
                <Link to="projects" 
                aria-label="projects"
                          onClick={(e) => e.target.blur()}>
                      <StyledBtn type='button'>Projects</StyledBtn>
                      </Link>  
                <CV/>
                </LinksWrapper>
                </Wrapper>
            {/* </Container> */}
          
        </HeroSection>

   
  )
}

