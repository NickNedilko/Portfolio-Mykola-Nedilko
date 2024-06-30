import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    
`;

export const Logo = styled.span`
    font-size: 30px;
    padding: 15px 0;
`

export const LogoWrapper = styled.span`
    display: flex;
    gap: 10px;
`
export const Image = styled.img`
    width: 70px;
    height: 70px;
`

export const List = styled.ul`
    display: flex;
    gap: 20px;
    padding: 20px 0;

    @media screen and (min-width: 768px) {
        gap: 30px;
    }
`

export const StyledLink = styled(NavLink)`
    position: relative;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.02em;
    text-decoration: none;
    cursor: pointer;
    color: var(--text-header);
    transition: all 0.35s ease-in-out;

    &.active {
        color: var(--hover-color);
        position: relative;
    }
    &:hover,
    &:focus {
        outline: none;
    }

   

    @media screen and (min-width: 768px) {
        font-size: 18px;
    }

    @media screen and (min-width: 1280px) {
        font-size: 20px;
    }
`