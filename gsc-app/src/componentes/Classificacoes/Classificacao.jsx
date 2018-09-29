import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

class Publisher extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  };

  componentDidMount() {
    this.setState(this.props.selo)
  }

  render() {

    const {image_src, alt, title} = this.state;

    return (
      <Fragment>
        <img
          src={image_src
          ? image_src
          : undefined}
          alt={alt}
          title={title}/>
      </Fragment>
    )
  }
}

export default Publisher;
