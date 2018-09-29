import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

class Revista extends Component {

  constructor(props) {
    super(props);

    this.state = {};

  };

  componentDidMount() {
    this.setState(this.mapRevista(this.props.revista.revista))
  }

  mapRevista(revista) {
    return {slug: revista.slug, type: revista.type, thumbnail: revista.better_featured_image.media_details.sizes.thumbnail.source_url, title: revista.title.rendered}
  }

  render() {

    const {thumbnail, slug, type, title} = this.state;

    return (
      <Link to={`/${type}/${slug}`}>
        <img src={thumbnail
          ? thumbnail
          : undefined}/> {title}</Link>
    )
  }
}

export default Revista;
