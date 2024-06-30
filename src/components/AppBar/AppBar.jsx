
import { Image, List, Logo, LogoWrapper, Nav, StyledLink } from "./AppBar.styled"
import logo from '../../assets/full-stack-programmer.png'

export const AppBar = () => {
    
    return (
      <Nav>
        
        <StyledLink to="/" 
          aria-label='home'
          onClick={(e) => e.target.blur()}>
           <LogoWrapper>
                <Image src={logo} alt="" />
            <Logo>FullStack developer</Logo> 
          </LogoWrapper>
            </StyledLink>
           
        <List>
          <li><StyledLink to="/" 
          aria-label='home'
            onClick={(e) => e.target.blur()}>Home</StyledLink></li>
          <li><StyledLink to="projects" 
          aria-label='projects'
          onClick={(e) => e.target.blur()}>Projects</StyledLink></li>
          <li><StyledLink to="contacts" 
          aria-label='contacts'
          onClick={(e) => e.target.blur()}>Contacts</StyledLink></li>
        </List>
      </Nav>
    )
}