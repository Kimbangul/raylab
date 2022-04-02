import React from 'react';

// style
import styled from 'styled-components';
const StyledButton = styled.button`
  width: 37px;
  height: 37px;
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

  @media (max-width: 1680px){
  &{
    width: 21px;
    height: 21px;
    & span{
      height: 2px;
    }
  }
`;

const MenuBtn = props => {
  return(
      <StyledButton type="button" className="flex flex-d-c flex-jc-b" onClick={props.propopener}>
      ALL MENU
      <span></span>
      <span></span>
      <span></span>
      </StyledButton>  
  );  
}
export default MenuBtn;