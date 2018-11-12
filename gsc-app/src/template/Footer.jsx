import React, {Component} from 'react';
import {Button, Grid} from "@material-ui/core";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          ©2018 - 2019 vgsc3000.com.br. Todos os direitos reservados aos criadores dos
          conteúdos aqui expostos. {/*Uma parte da venda de itens comprados através dos botões Submarino, acima suportam diretamente o VGSC3000.*/}
          <p>
            <a href="#">sobre</a>
            <a href="#">press kit</a>
            <a href="#">contato</a>
            <a href="#">Nossos apoiadores</a>
          </p>

          <p>Social:<br/>
            <a href="#">facebook</a>
            <a href="#">twitter</a>
            <a href="#">instagram</a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
