import React from "react";

// style
import styled from 'styled-components';
const StyledFooter = styled.footer`
  width: 100%;
  height: 60px;
  background: var(--main-color);
  & .copy{
    font-size: 1.8rem;
    color: #fff;
  }
`;

const Footer = () => {
  return(
    <StyledFooter className="flex flex-jc-c flex-ai-c">
      <p className="copy">&copy; 2022 RayLab Test. All rights reserved.</p>
    </StyledFooter>
  );
}
export default Footer;