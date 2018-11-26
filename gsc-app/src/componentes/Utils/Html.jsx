import React from 'react';

const Html = (props) => {
  const {html, className} = props;

  function escapeHtml(text) {
    var map = {
      '&amp;': '&',
      '&#038;': "&",
      '&lt;': '<',
      '&gt;': '>',
      '&quot;': '"',
      '&#039;': "'",
      '&#8217;': "’",
      '&#8216;': "‘",
      '&#8211;': "–",
      '&#8212;': "—",
      '&#8230;': "…",
      '&#8221;': '"',
      '&#8220;': '"'
    };

    return text.replace(/&[\w\d#]{2,5};/g, function (m) {
      return map[m]
    });

  };

  const content = escapeHtml(html)

  console.log(html);
  console.log(content);

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
      __html: content
    }}></div>
  )
}

export default Html;