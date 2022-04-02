// 전역 스타일 설정
import { createGlobalStyle } from "styled-components";	

const GlobalStyle = createGlobalStyle`
:root{
  /* font */
  font-size: 10px;
  /* color */
  --main-color: #2fa8e1;
}
/* Normalize */
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      //color: black;
      list-style: none;
      text-decoration: none;
      /* background: #222; */
    }
    /* lib */   
    .flex{display:flex;}
    .flex-jc-c{justify-content: center;}
    .flex-jc-b{justify-content: space-between;}
    .flex-ai-c{align-items: center;} 
    html, body{
      min-width: 200px;
      font-size: 1.6rem;
      font-family: 'Poppins', 'Noto Sans KR' , 'sans-serif';   
    }
    a,img{display: block;}
`;

export default GlobalStyle;