import React from "react";
import { Link } from 'react-router-dom';

// style
import styled from 'styled-components';

const StyledNav = styled.nav`
  height: 100%;
  
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
`;

const Nav = (props) => {
  return(
    <StyledNav propheight={props.propheight} open={props.propopen}>
      <ul className="depth_1">
        <li>
          <Depth1Link to="#">ABOUT</Depth1Link>
          <Depth2 propopen={props.propopen} className="depth_2">
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
            <Depth2 propopen={props.propopen} className="depth_2">
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
            <Depth2 propopen={props.propopen} className="depth_2">
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
            <Depth2 propopen={props.propopen} className="depth_2">
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