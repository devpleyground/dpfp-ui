import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Header = styled.div`
  position: sticky;
  top: 0;
  width: auto;
  padding: 10px;
  background-color: rgba(252, 252, 252, 0.83);
`;

export const MenuList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 10px;
    `;

export const MenuItem = styled.li`
    flex-grow: 1;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
  
    color: ${props => props.current 
            ? props.theme.fontColor.grayBasic
            : "#C7C7C7C7" };
    `;

export const MenuIcon = styled.div`
    font-size: 1.7em;
    font-weight: 600;
`;

export const MenuName = styled.span`
    font-size: 0.6em;
    font-weight: 700;
`;

export const MenuLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;