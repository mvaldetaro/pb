import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

class Publisher extends Component {

  /*constructor(props) {
    super(props);
    this.state = {};
  };

  componentDidMount() {
    this.setState(this.props.publisher)
  }*/

  render() {

    const {slug, title, type} = this.props.publisher;

    return (
      <Fragment>
        <Link to={`/${type}/${slug}`}>{title}</Link>
      </Fragment>
    )
  }
}

export default Publisher;
