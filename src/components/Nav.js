import React from "react";
import { Link } from 'react-router-dom';

// style
import styled from 'styled-components';
const StyledNav = styled.nav`
  height: 100%;
  display: flex;
  flex: 1 0 0;
  justify-content: center;
  position: relative;
  &::after{
    /* nav bg */
    position: absolute;
    top: 100%;
    width: 100vw;
    height: 125px;
    content: "";
    display: block;
    background: var(--main-color);
  }
  /* depth 1 */
  & .depth_1{
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
      & > a{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        position: relative;
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
      }
    }
  }
  /* depth 2 */
  & .depth_2{
    color: #fff;
    height: 125px;
    padding: 0.5rem 0;
    & > li{
      font-size: 1.8rem;
      font-weight: 400;
      font-family: 'Noto Sans KR', sans-serif;
      & > a{
        padding: 0.5rem 0;
      }
    }
    /* &::after{
      content: "";
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100%;
      background: var(--main-color);
    } */
  }
`;

const Nav = () => {
  return(
    <StyledNav>
      <ul className="depth_1">
        <li>
          <Link to="#">ABOUT</Link>
            <ul className="depth_2">
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
            </ul>         
        </li>
        <li>
          <Link to="#">VISION </Link>
            <ul className="depth_2">
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
            </ul>         
        </li>
        <li>
          <Link to="#">BUSINESS</Link>
            <ul className="depth_2">
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
            </ul>          
        </li>
        <li>
          <Link to="#">CONTACT</Link>
            <ul className="depth_2">
              <li>
                <Link to="#">
                  CONTACT
                </Link>
              </li>                            
            </ul>
        </li>
      </ul>
    </StyledNav>
  );  
}

export default Nav;