import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

class Lancamento extends Component {

  render() {

    const {lancamento, slug, title, type} = this.props.lancamento;

    return (
      <Fragment>
        <span>{lancamento}</span><br/>
        <Link to={`/${type}/${slug}`}>{title}</Link>
      </Fragment>
    )
  }
}

export default Lancamento;
