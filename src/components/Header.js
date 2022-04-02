import React, {useState} from 'react';


// components
import Logo from './Logo';
import Nav from './Nav';
import MenuBtn from './MenuBtn';

// style
import styled from 'styled-components';
const StyledHeader = styled.header`
  width: 100%;
  height: ${props => props.propheight};
  padding: 0 6.5rem;
  background: #fff;
  position: fixed;
  z-index: 999;
  &::before{
    /* nav bg */
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    height: ${props => props.propopen ? "125px" : "0px"};
    /* height: 125px; */
    content: "";
    display: block;
    background: var(--main-color);
    z-index: -1;
    transition: all 0.3s;
  }
  & > div{
    flex: 1 0 0;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

const Header =()=> {
  let [open, setNavOpen] = useState(false);
  const NavToggle = () => {
      console.log(open);
      setNavOpen((open) => !open);      
  }

  return(
    <StyledHeader propheight="9.5rem" propopen={open} className="flex flex-ai-c flex-jc-b">
      <div id="logo-wrap"><Logo/></div>
      <div id="nav-wrap"><Nav propopen={open} propheight="9.5rem"/></div>
      <div id="menu-btn-wrap" className="flex flex-jc-e"> <MenuBtn propopener={NavToggle}/></div>     
    </StyledHeader>
  );
}
export default Header;