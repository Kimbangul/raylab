import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slidesettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1
};

const MainSlide = () => {
  return(
    <main>
    <Slider {...Slidesettings}>
      <div className="slide">
        <img src="img/slider_01.jpg" alt="슬라이드 이미지"/>
        <div className="text_box">
          <h1>안정적 가치창출과 만족을, <br/>기업 구성원의 꿈과<br/>성취를 함께하는 기업</h1>
          <p>재화와 서비스의 공급을 혁신하여 산업을 선도합니다.</p>
        </div>
      </div>
      <div className="slide">
       <img src="img/slider_02.jpg" alt="슬라이드 이미지"/>
       <div className="text_box">
          <h1>안정적 가치창출과 만족을, <br/>기업 구성원의 꿈과<br/>성취를 함께하는 기업</h1>
          <p>재화와 서비스의 공급을 혁신하여 산업을 선도합니다.</p>
        </div>
      </div>
      <div className="slide">
      <img src="img/slider_03.jpg" alt="슬라이드 이미지"/>
      <div className="text_box">
          <h1>안정적 가치창출과 만족을, <br/>기업 구성원의 꿈과<br/>성취를 함께하는 기업</h1>
          <p>재화와 서비스의 공급을 혁신하여 산업을 선도합니다.</p>
        </div>
      </div>
    </Slider>
  </main>  
  ) 
}

export default MainSlide;