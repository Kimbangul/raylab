import React from 'react';

// icon
import {faArrowUp} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// style
import styled from 'styled-components';
const StyledButton = styled.button`
  width: 80px;
  height: 80px;
  background: var(--secondary-color);
  border-radius: 100%;
  border: none;
  font-family: 'ROKAFSansBold', 'Noto Sans KR', sans-serif;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
  &:hover{
    opacity: 0.5;
  }

  @media(max-width: 1280px){
    width: 60px;
    height: 60px;
    font-size: 3rem;
  }
  @media(max-width: 500px){
    width: 45px;
    height: 45px;
    font-size: 2.4rem;
  }
`;

const scrollToTop = () =>{
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
  });
};

const TopBtn = () => {
  return(
    <StyledButton id="top-btn" onClick={scrollToTop}>
      <FontAwesomeIcon icon={faArrowUp} />
    </StyledButton>
  );
}

export default TopBtn;