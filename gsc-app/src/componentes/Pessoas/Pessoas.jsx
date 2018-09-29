import React, {Component} from 'react';
import Pessoa from "./Pessoa";

class Pessoas extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pessoas: []
    };

  };

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.setState({
        pessoas: this.mapPessoas(this.props.data)
      })
    }
  }

  mapPessoas(arr) {
    let map = arr.map((current, i) => ({"slug": current.pessoa.slug, "type": current.pessoa.type, "title": current.pessoa.title.rendered, "funcao": current.funcao}));
    return map;
  }

  render() {
    return (
      <div>
        <h2>Créditos</h2>
        {this.state.pessoas
          ? (
            <ul>
              {this
                .state
                .pessoas
                .map((currentPessoa, i) => (
                  <li key={i}>
                    <Pessoa pessoa={currentPessoa}/>
                  </li>
                ))}
            </ul>
          )
          : "Nenhuma pessoa encontrada"}
      </div>
    )
  }
}

export default Pessoas;