import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

class Developer extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  };

  componentDidMount() {
    this.setState(this.props.developer)
  }

  render() {

    const {slug, title, type} = this.state;

    return (
      <Fragment>
        <Link to={`/${type}/${slug}`}>{title}</Link>
      </Fragment>
    )
  }
}

export default Developer;
