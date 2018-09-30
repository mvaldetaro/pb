import React from 'react';

const Cover = (props) => {

  const {
    src,
    alt,
    ...attrs
  } = props

  return (src
    ? <img src={src} alt={alt} {...attrs}/>
    : false)
};

export default Cover;