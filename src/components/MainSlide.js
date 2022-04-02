import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// style
import styled, { keyframes } from 'styled-components';

const slideScale = keyframes`
  0%{
    transform: scale(1);
  }
  100%{
    transform: scale(1.2);
  }
`;
const slideTextUp = keyframes`
  0%{
    transform: translateY(100%);
    opacity: 0;
  }
  80%{
    transform: translateY(0%);
  }
  100%{   
    opacity: 1;
  }
`;

const StyledMain = styled.main`
  width: 100%;
  overflow: hidden;
  position: relative;
  & .slick-list{font-size: 0;}
  /* slide */
  & .slide{
    display: block!important;
    position: relative;
    & img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }   
  } 
   /* active slide */
   & .slick-current{
      & img{
        animation: ${slideScale} 15s both;
      }
      & .text-box{
        animation: ${slideTextUp} 1.4s 1s both;
      }
    }
   /* slide text */
  & .con{    
    position: absolute;
    bottom: 0; 
    left: 50%;
    transform: translateX(-50%);  
    & .text-box{
    width: 792px;
    height: 625px;
    padding: 0 70px;
    background: #ffffffaa;
      & h1{
        font-weight: 400;
        font-size: 4.8rem;
        line-height: 1.4em;
        margin-bottom: 5rem;
      }
      & p{
        font-size: 2.1rem;
      }
    }
  }  

  /* slick dots */
  & .slick-dots{
    position: absolute;
    bottom: 0;
    max-width: var(--max-width);
    margin: 0 auto;
    left: 50%;
    transform: translateX(-50%);
    text-align: left;
    & li{
      width: auto;
      height: auto;
      margin: 0;
      button{
        width: 176px;
        height: 16px;
        background: #cccccc;
        transition: background 0.4s;
        &::before{display: none;}     
      }
     /* active dot */
      &.slick-active{
          button{
            background: var(--secondary-color);
          }
        }
      }
    }
`;

const Slidesettings = {
  dots: true,
  autoplay: true,
  infinite: true,
  pauseOnHover : true,
  speed: 1000,
  autoplaySpeed : 6000, 
  slidesToShow: 1,
  slidesToScroll: 1,
};


const MainSlide = () => {
  return(
    <StyledMain>
    <Slider {...Slidesettings}>
      <div className="slide">
        <img src="img/slider_01.jpg" alt="슬라이드 이미지"/>
        <div className="con flex flex-jc-e">
          <div className="text-box flex flex-d-c flex-jc-c">
            <h1>안정적 가치창출과 만족을, <br/>기업 구성원의 꿈과<br/>성취를 함께하는 기업</h1>
            <p>재화와 서비스의 공급을 혁신하여 산업을 선도합니다.</p>
          </div>
        </div>        
      </div>
      <div className="slide">
       <img src="img/slider_02.jpg" alt="슬라이드 이미지"/>
       <div className="con flex flex-jc-e">
          <div className="text-box flex flex-d-c flex-jc-c">
            <h1>안정적 가치창출과 만족을, <br/>기업 구성원의 꿈과<br/>성취를 함께하는 기업</h1>
            <p>재화와 서비스의 공급을 혁신하여 산업을 선도합니다.</p>
          </div>
        </div>
      </div>
      <div className="slide">
      <img src="img/slider_03.jpg" alt="슬라이드 이미지"/>
        <div className="con flex flex-jc-e">
          <div className="text-box flex flex-d-c flex-jc-c">
            <h1>안정적 가치창출과 만족을, <br/>기업 구성원의 꿈과<br/>성취를 함께하는 기업</h1>
            <p>재화와 서비스의 공급을 혁신하여 산업을 선도합니다.</p>
          </div>
        </div>
      </div>
    </Slider>
  </StyledMain>  
  ) 
}

export default MainSlide;