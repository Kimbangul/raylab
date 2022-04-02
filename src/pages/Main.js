import React, {useEffect} from 'react';
// style

// Layout
import {MainSlide, ImageList} from 'pages/Layout';

// style
import styled from 'styled-components';
// wow
import WOW from 'wowjs';

const Wrapper = styled.div`
  padding-top: 9.5rem;
  position: relative;
  transition: all 0.35s;
  @media (max-width: 780px){
    &{
      padding-top: 5.5rem;
    }    
  }
  @media (max-width: 500px){
    overflow-x: hidden;
  }
`;


const Introduction = styled.section`
    display: flex;
    padding: 185px 0;
    margin: 0 auto;
    position: relative;
    &::after{
      /* deco */
      width: 100vw;
      height: 2px;
      content: "";
      display: block;
      position: absolute;
      top: 65px;
      right: calc(100% - 386px);
      background: #d8d8d8;
    }
    & .cell{
      /* left */
      width: 50%;
      height: 815px;
    }
    /* sec tit */
    & h1{
      transform: scaleY(0.91);
      letter-spacing: -0.02em;
      font-weight: 700;
      font-size: 2.5rem;
      &::before{
        display: block;
        content: "";
        position: absolute;
        height: 23px;
        background: var(--secondary-color);
        top: 50%;
        right: calc(100% + 30px);
        width: 100vw;
        transform: translateY(-50%);
      }
    }
     /* sub tit */
    & h2{     
      font-size: 6.2rem;
      font-weight: 400;
      letter-spacing: 0.02em;
      transition: all 0.35s;
      & span{
        font-family: sans-serif;
      }
    }
    /* text box */
    & .text-box{
        margin-top: 5.5rem;
        font-size: 2.2rem;
        line-height: 2em;
        letter-spacing: 0.03em;
        word-spacing: 0.02em;
        text-align: justify;
        padding-right: 2%;      
        transition: all 0.35s;
    }
    /* img box */
    & .img-box{
      position: absolute;
      right: 0;
      overflow: visible;
      transition: all 0.35s;
      &::before{
          content: "";
          position: absolute;
          display: block;
          top: 50%;
          left: -135px;
          transform: translateY(-50%);
          width: 100%;
          height: 75%;
          background-color: var(--light-gray-color);
          z-index: -1;
        }
    }
    @media(max-width: 1680px){
      & .img-box{
        width: 30%;
      }
      & .text-box{
        font-size: 2rem;
      }
    }
    @media (max-width: 1280px){
      & h2{
        font-size: 4.8rem;
        margin-top: 1rem;
      }
      & .text-box{
        font-size: 1.8rem;
        margin-top: 3rem;
      }
    }

    @media (max-width: 780px){
      & .con{
        flex-direction: column;
      }
      & .cell{
        width: 100%;
        height: auto;
        margin-bottom: 120px;
      }
      & .text-box{
        padding-right: 0;
      }
      & .img-box{
        position: static;
        position: relative;
        width: 60%;
        align-self: flex-end;
      }
    }

    @media(max-width: 500px){
      padding: 150px 0;
      & h1{
        font-size: 2rem;
      }
      & h2{
        font-size: 3.2rem;
      }
      & .cell{
        margin-bottom: 70px;
      }
      & .img-box{
        width: 80%;
      }
      & .text-box{
        font-size: 1.6rem;
      }
    }
`;
const Business = styled.section`
    width: var(--max-width);
    margin: 0 auto 200px auto;  
    /* main tit */
    & h1{
      font-size: 7.5rem;
      font-weight: 900;
      letter-spacing: -0.01em;
      transition: all 0.35s;
    }
    & hr{
      border: 0;
      height: 1px;
      background: #e5e5e5;
      margin: 8rem 0 6.4rem 0;
    }
    /* sub tit */
    & h2{
      font-size: 5rem;
      font-weight: 400;
      letter-spacing: 0.03em;
      margin-bottom: 6.4rem;   
      transition: all 0.35s;   
    }
    & ul{
      & li{
        transition: all 0.35s;
        & article{
          transition: all 0.35s;
        }
      }
    }

    @media(max-width: 1680px){
      & h1{
        font-size: 5.5rem;
      }
      & ul{
        & li{
          width: 32%;
          & article{
            width: 100%;           
          }
        }
      }
    }

    @media(max-width: 1280px){
      & .text-box{
        & h4{
          font-size: 3.2rem;
        }
        & p{
          font-size: 1.6rem;
        }
      }
    }


    @media(max-width: 960px){
      padding: 0 20px;
      & h1{
        font-size: 4.8rem;
      }
      & h2{
        font-size: 3.6rem;
      }
      & hr{
        margin: 4rem 0 5rem 0;
      }
      & ul{
        /* flex-direction: column; */
        flex-wrap: wrap;
        & li{
          width: 50%;        
          
        }
      }
    }


    @media(max-width: 780px){
      & .text-box{
        & h4{
          font-size: 2rem;
        }
        & p{
          font-size: 1.6rem;
        }
      }
    }

    @media(max-width: 500px){ 
      & h1{
        font-size: 2.8rem;
      }
      & h2{
        font-size: 2.4rem;
        margin-bottom: 4rem;
      }
      & hr{
        margin: 2rem 0 3rem 0;
      }
      margin-bottom: 120px;
      & ul{
        flex-direction: column;
        & li{
          width: 100%;
          margin-bottom: 20px;
        }
      }
      & .text-box{
        & p{
          font-size: 1.4rem;
        }
      }        
    }    
`;

const Main = () =>{
  useEffect(() => {
    new WOW.WOW().init();
  }, []);
  return(
      <Wrapper>
         {/* main slide */}
      <MainSlide/>
      {/* introduction */}
      <Introduction id="introduction">
        <div className="con flex flex-jc-b flex-ai-c">
          <div className="cell flex flex-d-c flex-jc-c">
            <h1 className="wow fadeIn" data-wow-delay="0.2s">INTRODUCTION</h1>
            <h2 className="wow fadeInUp" data-wow-delay="0.4s">역동성<span>,</span> 열정</h2>
            <p className="text-box wow fadeInUp">
              <span>수원화성은 효율을 우선으로 꼽는 이 시대에도 아름다웠기에 살아남을 수 있었다.</span>&nbsp;
              <span>그러니 장안문이나 팔달문, 화성행궁 등 여러 건물의 아름다움에 대한 의심은 접어도 좋다.</span>&nbsp;
              <span>눈을 돌려 가득 들어오는 조선 건축물의 우아함과 효율이 어느 곳보다 무겁게 남아 있다.</span>&nbsp;
              <span>비록 근자에 복원했더라도 기록의 민족답게 문고리 모양 하나까지 적어놓은 덕에 옛 모습과 지금의 차이를 구별하지 못한다.</span>&nbsp;
              <span>느긋이 행궁터를 걸어도 좋고, 팔달산 비탈 기슭을 걸어 올라가 산자락의 봄바람을 만끽해도 좋을 만큼 일대는 행락의 여유와 운치를 준다.</span>
            </p>
          </div>  
          <div className="img-box wow fadeIn" data-wow-offset="200">
            <img src="img/introduction.jpg" alt="인트로 이미지"/>
          </div>     
        </div>        
      </Introduction>
      {/* business */}
      <Business id="business">
        <h1 className="wow fadeInUp">BUSINESS</h1>
        <hr/>
        <h2 className="wow fadeIn">사업영역</h2>
        <ul className="flex flex-jc-b">
          <li className="wow fadeIn" data-wow-delay="0.2s"><ImageList boxWidth="520px" url="img/card_01.jpg" alt="케미칼 산업" title="케미칼 사업" content={"이른 아침 작은 새들 노랫소리 들려오면\n 언제나 그랬듯 아쉽게 잠을 깬다"}/></li>
          <li className="wow fadeIn" data-wow-delay="0.4s"><ImageList  boxWidth="520px" url="img/card_02.jpg" alt="알루미늄 산업" title="알루미늄 산업" content={"창문 하나 햇살 가득 눈부시게 비쳐오고\n 서늘한 냉기에 재채기할까 말까"}/></li>
          <li className="wow fadeIn" data-wow-delay="0.6s"><ImageList  boxWidth="520px" url="img/card_03.jpg" alt="비료" title="비료(FERTILIZER)" content={"눈 비비며 빼꼼히 창밖을 내다보니 \n삼삼오오 아이들은 재잘대며 학교 가고"}/></li>
        </ul>
        </Business>  
      </Wrapper>        
  );
};

export default Main;