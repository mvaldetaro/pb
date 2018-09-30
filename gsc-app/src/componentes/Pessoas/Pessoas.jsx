import React, {Component} from 'react';
import Pessoa from "./Pessoa";

class Pessoas extends Component {

  mapPessoas(arr) {
    let map = arr.map((current, i) => ({"slug": current.pessoa.slug, "type": current.pessoa.type, "title": current.pessoa.title.rendered, "funcao": current.funcao}));
    return map;
  }

  render() {
    return (
      <div>
        <h2>Créditos</h2>
        {this.props.data
          ? (
            <ul>
              {this
                .mapPessoas(this.props.data)
                .map((currentPessoa, i) => (
                  <li key={i}>
                    <Pessoa pessoa={currentPessoa}/>
                  </li>
                ))}
            </ul>
          )
          : "Não há créditos"}
      </div>
    )
  }
}

export default Pessoas;