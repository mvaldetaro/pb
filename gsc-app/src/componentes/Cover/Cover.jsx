import React from 'react';

const Cover = (props) => (props.src
  ? <img src={props.src} alt={props.alt}/>
  : false);

export default Cover;