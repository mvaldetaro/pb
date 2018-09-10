import React, {Component} from 'react';
import Lancamento from "./Lancamento";

class Lancamentos extends Component {

  constructor(props) {
    super(props);

    this.state = {
      lancamentos: []
    };
    console.log(props);
  };

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.setState({
        lancamentos: this.mapLancamentos(this.props.data)
      });
      console.log(this.props);
    }
  }

  mapLancamentos(arr) {
    let map = arr.map((currentLancamento, i) => ({"lancamento": currentLancamento.data_lancamento, "slug": currentLancamento.plataforma.slug, "type": currentLancamento.plataforma.type, "title": currentLancamento.plataforma.title.rendered}));
    return map;
  }

  render() {
    return (
      <div>
        <h2>Lançamentos</h2>
        {this.state.lancamentos
          ? (
            <ul>
              {this
                .state
                .lancamentos
                .map((currentLancamento, i) => (
                  <li key={i}>
                    <Lancamento lancamento={currentLancamento}/>
                  </li>
                ))}
            </ul>
          )
          : "Nenhum lançamento encontrado"}
      </div>
    )
  }
}

export default Lancamentos;