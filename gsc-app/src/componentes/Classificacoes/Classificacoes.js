import React, {Component} from 'react';
import Classificacao from "./Classificacao";

class Classificacoes extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selos: []
    };
  };

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.setState({
        selos: this.mapClassificacoes(this.props.data)
      })
    }
  }

  mapClassificacoes(arr) {
    let map = arr.map((current, i) => ({"image_src": current.selo.better_featured_image.source_url, "alt": current.selo.alt_text, "title": current.selo.title.rendered}));
    return map;
  }

  render() {
    return (
      <div>
        <h2>Classificação</h2>
        {this.state.selos
          ? (
            <ul>
              {this
                .state
                .selos
                .map((currentSelo, i) => (
                  <li key={i}>
                    <Classificacao selo={currentSelo}/>
                  </li>
                ))}
            </ul>
          )
          : "Nenhuma classificação encontrada"}
      </div>
    )
  }
}

export default Classificacoes;