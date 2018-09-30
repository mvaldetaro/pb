import React, {Component} from 'react';
import {Resume} from "../";

class Pessoa extends Component {
  render() {
    const {slug, title, type, funcao} = this.props.pessoa;
    return (<Resume tag="p" title={title} content={funcao} to={`/${type}/${slug}`}/>)
  }
}

export default Pessoa;
