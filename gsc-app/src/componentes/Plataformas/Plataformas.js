import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

class Plataformas extends Component {

  constructor(props) {
    super(props);

    this.state = {
      plataformas: []
    };

  };

  mapPlataformas(arr) {
    let map = arr.map((currentPlataforma, i) => ({"slug": currentPlataforma.plataforma.post_name, "type": currentPlataforma.plataforma.post_type, "title": currentPlataforma.plataforma.post_title}));

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