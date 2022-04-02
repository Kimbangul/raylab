import React from "react";
import { Link } from 'react-router-dom';

// style
import styled from 'styled-components';
const StyledNav = styled.nav`
  /* depth 1 */
  & .depth_1{
    display: flex;
    & > li{
      padding: 0 2.3rem;
    }
  }
`;

const Nav = () => {
  return(
    <StyledNav>
      <ul className="depth_1">
        <li>
          <Link to="#">
            ABOUT
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
          </Link>
        </li>
        <li>
          <Link to="#">
            VISION
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
          </Link>
        </li>
        <li>
          <Link to="#">
            BUSINESS
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
          </Link>
        </li>
        <li>
          <Link to="#">
            CONTACT
            <ul className="depth_2">
              <li>
                <Link to="#">
                  CONTACT
                </Link>
              </li>                            
            </ul>
          </Link>
        </li>
      </ul>
    </StyledNav>
  );  
}

export default Nav;