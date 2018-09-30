import React, {Component} from 'react';

class Classificacao extends Component {
  render() {
    const {image_src, alt, title} = this.props.currentselo;

    return (<img
      src={image_src
      ? image_src
      : undefined}
      alt={alt}
      title={title}/>)
  }
}

export default Classificacao;
