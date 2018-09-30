import React, {Component, Fragment} from 'react';
import {Cover} from "../../componentes";
class Screenshot extends Component {
  render() {

    const {alt, url} = this.props.screenshot;

    return (<Cover src={url} alt={alt} width="200px"/>)
  }
}

export default Screenshot;
