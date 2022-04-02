// 전역 스타일 설정
import { createGlobalStyle } from "styled-components";	

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'ROKAFSansBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts2201-3@1.0/ROKAFSansBold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'ROKAFSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts2201-3@1.0/ROKAFSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
:root{
  --max-width: 1680px;
  /* font */
  font-size: 10px;
  /* color */
  --main-color: #2fa8e1;
  --secondary-color: #ffe047;
  --light-gray-color: #f1f1f1;
} 
/* Normalize */
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style: none;
      text-decoration: none;
      color: inherit;
    }
    /* lib */   
    .flex{display:flex;}
    .flex-jc-c{justify-content: center;}
    .flex-jc-e{justify-content: flex-end;}
    .flex-jc-b{justify-content: space-between;}
    .flex-ai-c{align-items: center;} 
    .flex-d-c{flex-direction: column;}
    .con{
      width: var(--max-width);
      margin: 0 auto;
    }
    .img-box{
      overflow: hidden;
      & img{
        width: 100%;
      }
    }
    /* custom */
    html, body{
      min-width: 280px;
      font-size: 1.6rem;
      font-family: 'Noto Sans KR' , 'sans-serif';   
      color: #333; 
    }
    body{
      /* width: 100vw; */
      /* overflow-x: hidden; */
    }
    a,img{display: block;}
    
`;

export default GlobalStyle;