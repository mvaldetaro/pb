import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

class Publisher extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  };

  componentDidMount() {
    this.setState(this.props.publisher.publicadora)
  }

  render() {

    const {post_name, post_title, post_type} = this.state;

    return (
      <Fragment>
        <Link to={`/${post_type}/${post_name}`}>{post_title}</Link>
      </Fragment>
    )
  }
}

export default Publisher;
