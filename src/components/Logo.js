import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
const StyledLogo = styled.h1`
  display: flex;
  & a{
    display: inline-block;
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