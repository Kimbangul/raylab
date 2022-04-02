import React from 'react';

// style
import styled from 'styled-components';
const StyledImageList = styled.article`
  display: inline-flex;
  width: ${(props) => (props.boxWidth ? props.boxWidth : 'auto')};  

  /* img box */
  & .img-box{
    & img{
      transition: all 0.5s;     
    }
  }

  &:hover{
    & .img-box{     
      & img{
        transform: scale(1.08);  
      }           
    }
  }

  /* text box */
  & .text-box{
    padding: 40px 20px 50px 20px;
    text-align: center;
    background: var(--light-gray-color);
    user-select: none;
    /* title */
    & h4{
      font-size: 4rem;
      font-weight: 400;   
      white-space: nowrap;   
      padding-bottom: 1.8rem;
      margin-bottom: 2.3rem;
      position: relative;
      &::after{
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        content: "";
        width: 117px;
        height: 1px;
        display: block;
        background: #707070;
      }
    } 
    /* contents */
    & p{
      letter-spacing: 0.03em;
    }
  }
`;

const ImageList = props => {
  const splitText = props.content.split("\n").map((txt) => (
    // text 개행 처리
    <>
      {txt}
      <br />
    </>
  ));
  return(
    <StyledImageList {...props} className="flex-d-c">
      <div className="img-box">
        <img src={props.url} alt={props.imgAlt}/>
      </div>
      <div className="text-box">
        <h4>{props.title}</h4>
        <p>{splitText}</p>
      </div>
    </StyledImageList>
  );
}

ImageList.defaultProps = {
  url : '',
  imgAlt : '',
  title : '타이틀',
  content : '내용',
};

export default ImageList;