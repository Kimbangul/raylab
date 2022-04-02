import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
const StyledLogo = styled.h1`
  display: flex;
  & a{
    display: inline-block;
  }
  & img{
    transition: all 0.35s;
  }
  @media (max-width: 1680px){
    &{
      & img{
        width: 120px;
      }
    }    
  }
`;

const Logo = () => {
  return(
    <StyledLogo>
      <Link to ="/">
        <img src="img/logo.png" alt="Home"/>
     </Link>
    </StyledLogo>    
  );
}

export default Logo;