import React, {Fragment} from 'react';
import {Utils as Html, Title} from "../../componentes";

const Resume = (props) => (
  <Fragment>
    <Title type={props.tag}>{props.title}</Title>
    <Html html={props.content}/>
    <Fragment>
      {props.fonte
        ? <p>
            <b>Fonte:{' '}</b>
            <a href={props.fonte.url} target="_blank" rel="external">{props.fonte.title}</a>
          </p>
        : false}
    </Fragment>
  </Fragment>
)

export default Resume;