import React, {Component, Fragment} from 'react';

class Podcast extends Component {

  /*constructor(props) {
    super(props);

    this.state = {
      //podcast: {}
    };

  };

  componentDidMount() {
    this.setState(this.props.podcast)
  }*/

  render() {

    const {thumbnail_podcasts, titulo_podcasts, url_podcasts} = this.props.podcast;

    return (
      <Fragment>
        <a href={url_podcasts}>
          <img
            src={thumbnail_podcasts
            ? thumbnail_podcasts
            : undefined}
            alt={titulo_podcasts}
            width='200px'/>
        </a>
        <h3>{titulo_podcasts}</h3>
      </Fragment>
    )
  }
}

export default Podcast;
