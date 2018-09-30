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
//import Resume from '../../componentes/Resume';

class GameDetails extends Component {

  /*constructor(props) {
    super(props);

    this.state = {
      slug: props.match.params.slug,
      currentGame: {}
    };
  };*/

  /*mapGame(game) {
    return {
      id: game.id,
      slug: game.slug,
      thumbnail: game.better_featured_image.media_details.sizes.thumbnail.source_url,
      title: game.title.rendered,
      excerpt: game.excerpt.rendered,
      content: game.content.rendered,
      plataformas: game.acf.datas_plataforma,
      cover: game.acf.cover,
      lancamentos: game.acf.datas_plataforma,
      desenvolvedoras: game.acf.desenvolvedores,
      publicadoras: game.acf.publicadoras,
      podcasts: game.acf.podcasts,
      reviews: game.acf.reviews,
      revistas: game.acf.revistas_relacionadas,
      screenshots: game.acf.screenshots,
      storyline: game.acf.storyline,
      videos: game.acf.videos,
      wikipedia: game.acf.wikipedia_page,
      franquia: game.acf.franquia,
      nomes_alternativos: game.acf.nomes_alternativos,
      classificacao: game.acf.classificacao_etaria,
      creditos: game.acf.creditos
    }
  }*/

  /*getGame = () => {
    axios
      .get(WP.url + WP.types.games, {
      params: {
        slug: this.state.slug
      }
    })
      .then(resp => {
        console.log(resp.data[0]);
        this.setState({
          currentGame: this.mapGame(resp.data[0])
        })
      });
  }*/

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
