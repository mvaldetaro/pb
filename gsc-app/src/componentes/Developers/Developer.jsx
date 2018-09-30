import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

class Developer extends Component {

  render() {

    const {slug, title, type} = this.props.developer;

    return (
      <Fragment>
        <Link to={`/${type}/${slug}`}>{title}</Link>
      </Fragment>
    )
  }
}

export default Developer;
