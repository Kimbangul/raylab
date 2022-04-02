import React from 'react';
// style

// Layout
import {MainSlide, ImageList} from 'pages/Layout';

// style
import styled from 'styled-components';
const Wrapper = styled.div`
  padding-top: 9.5rem;
`;

const Introduction = styled.section`
    padding: 185px 0;
`;

const Business = styled.section`
    width: var(--max-width);
    margin: 0 auto;
`;

const Main = () =>{
  return(
      <Wrapper>
         {/* main slide */}
      <MainSlide/>
      {/* introduction */}
      <Introduction id="introduction">
        <div className="cell">
          <h1>INTRODUCTION</h1>
          <h2>역동성, 열정</h2>
          <p className="text-box">
            <span>수원화성은 효율을 우선으로 꼽는 이 시대에도 아름다웠기에 살아남을 수 있었다.</span>
            <span>그러니 장안문이나 팔달문, 화성행궁 등 여러 건물의 아름다움에 대한 의심은 접어도 좋다.</span>
            <span>눈을 돌려 가득 들어오는 조선 건축물의 우아함과 효율이 어느 곳보다 무겁게 남아 있다.</span>
            <span>비록 근자에 복원했더라도 기록의 민족답게 문고리 모양 하나까지 적어놓은 덕에 옛 모습과 지금의 차이를 구별하지 못한다.</span>
            <span>느긋이 행궁터를 걸어도 좋고, 팔달산 비탈 기슭을 걸어 올라가 산자락의 봄바람을 만끽해도 좋을 만큼 일대는 행락의 여유와 운치를 준다.</span>
          </p>
        </div>  
        <div className="img-box">
          <img src="img/introduction.jpg" alt="인트로 이미지"/>
        </div>     
      </Introduction>
      {/* business */}
      <Business id="business">
        <h1>BUSINESS</h1>
        <hr/>
        <h2>사업영역</h2>
        <ul className="flex flex-jc-b">
          <li><ImageList boxWidth="520px" url="img/card_01.jpg" alt="케미칼 산업" title="케미칼 사업" content={"이른 아침 작은 새들 노랫소리 들려오면\n 언제나 그랬듯 아쉽게 잠을 깬다"}/></li>
          <li><ImageList boxWidth="520px" url="img/card_02.jpg" alt="알루미늄 산업" title="알루미늄 산업" content={"창문 하나 햇살 가득 눈부시게 비쳐오고\n 서늘한 냉기에 재채기할까 말까"}/></li>
          <li><ImageList boxWidth="520px" url="img/card_03.jpg" alt="비료" title="비료(FERTILIZER)" content={"눈 비비며 빼꼼히 창밖을 내다보니 \n삼삼오오 아이들은 재잘대며 학교 가고"}/></li>
        </ul>
        </Business>  
      </Wrapper>        
  );
};

export default Main;