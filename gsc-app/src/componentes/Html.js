import React from 'react';

const Html = (props) => {
  const {html} = props;

  return (
    <div dangerouslySetInnerHTML={{
      __html: html
    }}></div>
  )
}

export default Html;