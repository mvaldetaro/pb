import React, {Component, Fragment} from 'react';
import {Cover} from "../../componentes";

class Podcast extends Component {
  render() {

    const {thumbnail_podcasts, titulo_podcasts, url_podcasts} = this.props.podcast;

    return (
      <Fragment>
        <a href={url_podcasts}>
          <Cover src={thumbnail_podcasts} alt={titulo_podcasts} width='200px'/>
        </a>
        <p>
          <a href={url_podcasts}>{titulo_podcasts}</a>
        </p>
      </Fragment>
    )
  }
}

export default Podcast;
