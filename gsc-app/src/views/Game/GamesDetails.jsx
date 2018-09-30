import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import {getGame} from "./GameDetailsActions";

import {
  Cover,
  Reviews,
  Screenshots,
  Videos,
  Podcasts,
  Publishers,
  Lancamentos,
  Plataformas,
  Revistas,
  Resume,
  Developers,
  Classificacoes,
  Pessoas
} from "../../componentes";

class GameDetails extends Component {

  componentDidMount() {

    this
      .props
      .getGame(this.props.match.params.slug);
  }

  render() {
    const {
      title,
      content,
      plataformas,
      cover,
      lancamentos,
      desenvolvedoras,
      publicadoras,
      podcasts,
      reviews,
      revistas,
      screenshots,
      storyline,
      videos,
      wikipedia,
      franquia,
      nomes_alternativos,
      classificacao,
      creditos
    } = this.props.currentGame;

    return (
      <section className="game-details">
        <Cover src={cover} alt={title}/>
        <Resume
          tag="h1"
          title={title}
          content={content}
          fonte={{
          "url": wikipedia,
          "title": "Wikipedia"
        }}/>
        <Plataformas data={plataformas}/>
        <Resume tag="h1" title="Storyline" content={storyline}/>
        <Resume title="Franquia:" content={franquia}/>
        <Resume title="Nomes alternativos:" content={nomes_alternativos}/>
        <Reviews data={reviews}/>
        <Screenshots data={screenshots}/>
        <Videos data={videos}/>
        <Podcasts data={podcasts}/>
        <Publishers data={publicadoras}/>
        <Lancamentos data={lancamentos}/>
        <Revistas data={revistas}/>
        <Developers data={desenvolvedoras}/>
        <Classificacoes data={classificacao}/>
        <Pessoas data={creditos}/>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {route: state.gameSelected.route, currentGame: state.gameSelected.currentGame}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getGame
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GameDetails);
