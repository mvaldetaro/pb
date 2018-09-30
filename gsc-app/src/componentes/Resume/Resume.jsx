import React, {Fragment} from 'react';
import {Utils as Html, Title} from "../../componentes";
import {Link} from "react-router-dom";

const Resume = (props) => {

  const {url: fonte_url, title: fonte_title} = props.fonte || {}

  return (
    <Fragment>
      <Title type={props.tag}>
        {props.link
          ? <a href={props.link} target="_blank" rel="external">{props.title}</a>
          : props.to
            ? <Link to={props.to}>{props.title}</Link>
            : props.title}
      </Title>
      <Html html={props.content}/>
      <Fragment>
        {props.fonte
          ? <p>
              <b>Fonte:{' '}</b>
              <a href={fonte_url} target="_blank" rel="external">{fonte_title}</a>
            </p>
          : false}
      </Fragment>
    </Fragment>
  )
}

export default Resume;