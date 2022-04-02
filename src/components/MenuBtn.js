import React from 'react';

// style
import styled from 'styled-components';
const StyledButton = styled.button`
  width: 36px;
  height: 36px;
  font-size: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  &:hover{
    opacity: 0.5;
  }
  & span{    
    display: block;
    width: 100%;
    height: 5px;
    background: var(--main-color);
  } 
`;

const MenuBtn = () => {
  return(
      <StyledButton type="button" className="flex flex-d-c flex-jc-b">
      ALL MENU
      <span></span>
      <span></span>
      <span></span>
      </StyledButton>  
  );  
}
export default MenuBtn;