import React from 'react';

const ImageList = props => {
  return(
    <article>
      <div className="img_box">
        <img src={props.url} alt={props.imgAlt}/>
      </div>
      <div className="text_box">
        <h4>{props.title}</h4>
        <p>{props.content}</p>
      </div>
    </article>
  );
}

ImageList.defaultProps = {
  url : '',
  imgAlt : '',
  title : '타이틀',
  content : '내용',
};

export default ImageList;