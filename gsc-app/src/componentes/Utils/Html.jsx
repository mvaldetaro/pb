import React from 'react';

const Html = (props) => {
  const {html, className} = props;

  return (
    <div className={className} dangerouslySetInnerHTML={{
      __html: html
    }}></div>
  )
}

export default Html;