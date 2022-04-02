import React from 'react';

// components
import Logo from './Logo';
import Nav from './Nav';
import MenuBtn from './MenuBtn';

// style
import styled from 'styled-components';
const StyledHeader = styled.header`
  width: 100%;
  height: 9.5rem;
  padding: 0 6.5rem;
  background: #fff;
  position: fixed;
  z-index: 999;
`;

const Header =()=> {
  return(
    <StyledHeader className="flex flex-ai-c flex-jc-b">
      <Logo/>
      <Nav/>
      <MenuBtn/>
    </StyledHeader>
  );
}
export default Header;