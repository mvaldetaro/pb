import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Plataformas extends Component {

  constructor(props) {
    super(props);

    this.state = {
      plataformas: []
    };

  };

  mapPlataformas(arr) {
    let map = arr.map((currentPlataforma, i) => ({"slug": currentPlataforma.plataforma.slug, "type": currentPlataforma.plataforma.type, "title": currentPlataforma.plataforma.title.rendered}));

    return map;
  }

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.setState({
        plataformas: this.mapPlataformas(this.props.data)
      })
    }
  }

  render() {
    return (
      <p>
        <b>Plataformas:</b>
        {this.state.plataformas
          ? (this.state.plataformas.map((plataforma, i) => (
            <Link className="label" to={`/${plataforma.type}/${plataforma.slug}`} key={i}>{`${plataforma.title}`}
            </Link>
          )))
          : "Nenhuma plataforma encontrado"}
      </p>
    )
  }
}

export default Plataformas;