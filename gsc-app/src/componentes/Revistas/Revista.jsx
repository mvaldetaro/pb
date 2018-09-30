import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Cover} from "../../componentes";

class Revista extends Component {

  render() {
    const {thumbnail, slug, type, title} = this.props.revista;

    return (
      <Link to={`/${type}/${slug}`}>
        <Cover src={thumbnail} alt={title}/>
      </Link>
    )
  }
}

export default Revista;
