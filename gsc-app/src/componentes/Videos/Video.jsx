import React, {Component, Fragment} from 'react';

class Video extends Component {

  embedUrl() {
    const re = /^(https?:\/\/)?((www\.)?(youtube(-nocookie)?|youtube.googleapis)\.com.*(v\/|v=|vi=|vi\/|e\/|embed\/|user\/.*\/u\/\d+\/)|youtu\.be\/)([_0-9a-z-]+)/i;
    let url = this.props.video.url_video;

    if (this.props.video.url_video) {
      let id = url.match(re)[7];
      return 'https://www.youtube.com/embed/' + id;
    } else {
      return '';
    }
  }

  render() {

    const {titulo_video} = this.props.video;

    return (
      <Fragment>
        <h3>{titulo_video}</h3>
        <iframe
          title={titulo_video}
          width="560"
          height="315"
          src={this.embedUrl()}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen></iframe>
      </Fragment>
    )
  }
}

export default Video;
