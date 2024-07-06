import styled from "styled-components";

export const PageTitle = styled.h1`
    font-size: 36px;
    margin-bottom: 25px;
    background: var(--title-color);
     -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
`

export const List = styled.ul`
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
`

export const Item = styled.li`
    width: 550px;
    overflow: hidden;
    background: var(--bgd-header);
    height: 470px;
    border-radius: 15px;
    
`