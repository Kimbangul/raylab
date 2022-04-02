import React from 'react';

// components
import Logo from './Logo';
import Nav from './Nav';
import MenuBtn from './MenuBtn';

// style
import styled from 'styled-components';
const StyledHeader = styled.header`
  width: 100%;
  max-height: 9.5rem;
  height: auto;
  padding: 0 6.5rem;
  background: #fff;
  position: fixed;
  z-index: 999;
  overflow: hidden;
  & > div{
    flex: 1 0 0;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

const Header =()=> {
  return(
    <StyledHeader className="flex flex-ai-c flex-jc-b">
      <div id="logo-wrap"><Logo/></div>
      <div id="nav-wrap"><Nav/></div>
      <div id="menu-btn-wrap" className="flex flex-jc-e"> <MenuBtn/></div>     
    </StyledHeader>
  );
}
export default Header;