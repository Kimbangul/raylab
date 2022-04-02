import React from "react";
import { Link } from 'react-router-dom';

// style
import styled from 'styled-components';

const StyledNav = styled.nav`
  height: 100%;
  
  /* depth 1 */
  & .depth-1{
    position: relative;
    z-index: 5;
    display: flex;
    height: 100%;
    font-family: 'ROKAFSansBold', 'Noto sans KR', sans-serif;
    & > li{
      font-size: 2rem;
      padding: 0 2.5rem;
      color: var(--main-color);
      text-align: center;
      position: relative;
      }
    }
  } 

  @media(max-width: 1280px){
      & .depth-1{
        & > li{
          padding: 0 1.8rem;
        }
      }    
  }

  @media (max-width: 780px){    
    position: fixed;
    top: 0;
    transition: all 0.35s;
    left: ${props => props.open ? "0" : "-120%"};
    opacity: ${props => props.open ? "1" : "0"};
    width: 40%;
    min-width: 280px;
    height: 100%;
    background: var(--main-color); 
    & .depth-1{
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: center;    
      &>li{
        color: #fff;
        height: auto;
        margin-bottom: 2rem;
        & a{
          padding: 1rem 0;
          font-size: 2rem;
          justify-content: left;
          height: auto;
        }
      }      
    } 
    
    & .depth-2{
      height: auto;
      position: static;
      transform: none;
      & > li{
        & a{
          font-size: 1.4rem;
          padding: 0.7rem 0;
          padding-left: 2.5rem;
          text-align: left;  
          &::before{
            content: "-";
            display: inline-block;
            margin-right: 0.7rem;
          }        
        }        
      }
    }
  }
`;

const Depth1Link = styled(Link)`
        /* & > a{ */
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        position: relative;
        transition: font-size 0.35s;
        &::after{
          content: "";
          width: 0%;
          height: 2px;
          display: block;
          position: absolute;
          top: 68%;
          background: var(--main-color);
          transition: all 0.35s;         
        }
        &:hover{
          &::after{
            width: 100%;
          }          
        }

 @media (max-width: 1680px){
      font-size: 1.6rem;    
  }
  @media (max-width: 1280px){
      font-size: 1.4rem;    
  } 

`;

const Depth2 = styled.ul`
    color: #fff;
    height: ${props => props.propopen ? "125px" : "0px"};
    padding: 0.5rem 0;
    position: absolute;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.3s;
    /* max-height:  ${props => props.propopen ? "unset" : props.propheight}; */
    overflow: hidden; 
    & > li{
      font-size: 1.8rem;
      font-weight: 400;
      font-family: 'Noto Sans KR', sans-serif;
      & > a{
        padding: 0.5rem 0;
      }
    }

    @media(max-width:780px){
      & {
        & > li{
          & > a{
            padding: 1.2rem 0;
          }
        }
      }
    }
`;

const Nav = (props) => {
  return(
    <StyledNav propheight={props.propheight} open={props.propopen}>
      <ul className="depth-1">
        <li>
          <Depth1Link to="#">ABOUT</Depth1Link>
          <Depth2 propopen={props.propopen} className="depth-2">
                <li>
                <Link to="#">
                  회사소개
                </Link>
              </li>
              <li>
                <Link to="#">
                  회사연혁
                </Link>
              </li>                
            </Depth2>         
        </li>
        <li>
        <Depth1Link to="#">VISION </Depth1Link>
            <Depth2 propopen={props.propopen} className="depth-2">
              <li>
                <Link to="#">
                  비전
                </Link>
              </li>
              <li>
                <Link to="#">
                  핵심가치
                </Link>
              </li> 
              <li>
                <Link to="#">
                  인재상
                </Link>
              </li>               
            </Depth2>         
        </li>
        <li>
        <Depth1Link to="#">BUSINESS</Depth1Link>
            <Depth2 propopen={props.propopen} className="depth-2">
              <li>
                <Link to="#">
                  사업영역
                </Link>
              </li>
              <li>
                <Link to="#">
                  사업전력
                </Link>
              </li> 
              <li>
                <Link to="#">
                  사업장
                </Link>
              </li>               
            </Depth2>          
        </li>
        <li>
        <Depth1Link to="#">CONTACT</Depth1Link>
            <Depth2 propopen={props.propopen} className="depth-2">
              <li>
                <Link to="#">
                  CONTACT
                </Link>
              </li>                            
            </Depth2>
        </li>
      </ul>
    </StyledNav>
  );  
}

export default Nav;