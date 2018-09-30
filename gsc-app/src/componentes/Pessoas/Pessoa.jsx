import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

class Pessoa extends Component {

  render() {

    const {slug, title, type, funcao} = this.props.pessoa;

    return (
      <Fragment>
        <Link to={`/${type}/${slug}`}>{title}</Link><br/>
        <span>{funcao}</span>
      </Fragment>
    )
  }
}

export default Pessoa;
