import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

class Pessoa extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  };

  componentDidMount() {
    this.setState(this.props.pessoa)
  }

  render() {

    const {slug, title, type, funcao} = this.state;

    return (
      <Fragment>
        <Link to={`/${type}/${slug}`}>{title}</Link><br/>
        <span>{funcao}</span>
      </Fragment>
    )
  }
}

export default Pessoa;
