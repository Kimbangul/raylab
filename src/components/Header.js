import React, {useState, useEffect} from 'react';


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
  transition: all 0.35s;
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

  & #nav-wrap{
    animation: fadeIn 0.3s;
  }

  @media (max-width: 1680px){
    &{
      padding: 0 3rem;
    }    
  }

  @media (max-width: 780px){
    &{
      padding: 0 2rem;
      height: 5.5rem;
      &::before{
        display: none;
      }
      & #nav-wrap{
        flex-grow: 0;
        flex-shirink: 1;
      }
    }    
  }

  @media (max-width: 500px){
    &{
      padding: 0 1.5rem;
    }    
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
      <div id="logo-wrap" className="wow fadeInLeft"><Logo/></div>
      <div id="nav-wrap" className="wow fadeIn" data-wow-duration="1s"><Nav propopen={open} propheight="9.5rem"/></div>
      <div id="menu-btn-wrap" className="flex flex-jc-e wow fadeInRight"> <MenuBtn propopener={NavToggle}/></div>     
    </StyledHeader>
  );
}
export default Header;