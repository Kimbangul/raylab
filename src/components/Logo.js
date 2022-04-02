import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return(
    <h1>
      <Link to ="/">
        <img src="img/logo.png" alt="Home"/>
     </Link>
    </h1>    
  );
}

export default Logo;