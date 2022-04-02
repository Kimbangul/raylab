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
`;

const TopBtn = () => {
  return(
    <StyledButton>
      <FontAwesomeIcon icon={faArrowUp} />
    </StyledButton>
  );
}

export default TopBtn;