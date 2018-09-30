import React, {Component} from 'react';
import Lancamento from "./Lancamento";

class Lancamentos extends Component {

  mapLancamentos(arr) {
    let map = arr.map((currentLancamento, i) => ({"lancamento": currentLancamento.data_lancamento, "slug": currentLancamento.plataforma.slug, "type": currentLancamento.plataforma.type, "title": currentLancamento.plataforma.title.rendered}));
    return map;
  }

  render() {
    return (
      <div>
        <h2>Lançamentos</h2>
        {this.props.data
          ? (
            <ul>
              {this
                .mapLancamentos(this.props.data)
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