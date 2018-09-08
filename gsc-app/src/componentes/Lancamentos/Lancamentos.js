import React, {Component} from 'react';
import Lancamento from "./Lancamento";

class Lancamentos extends Component {

  constructor(props) {
    super(props);

    this.state = {
      lancamentos: []
    };

  };

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.setState({lancamentos: this.props.data})
    }
  }

  mapLancamento(data) {
    return {slug: data.plataforma.post_name, title: data.plataforma.post_title, data_lancamento: data.data_lancamento, type: data.plataforma.post_type}
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