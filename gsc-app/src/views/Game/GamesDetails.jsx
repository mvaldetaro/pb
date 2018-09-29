import React, {Component} from 'react';
import axios from "axios";
import WP from "../../core/WP";

import {
  Reviews,
  Screenshots,
  Videos,
  Podcasts,
  Publishers,
  Lancamentos,
  Plataformas,
  Revistas,
  Developers,
  Classificacoes,
  Pessoas,
  Utils as Html
} from "../../componentes";

class GameDetails extends Component {

  constructor(props) {
    super(props);

    this.state = {
      slug: props.match.params.slug,
      currentGame: {}
    };
  };

  componentDidMount() {
    this.getGame();
  }

  mapGame(game) {
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
  }

  getGame = () => {
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
    } = this.state.currentGame;

    return (
      <section className="game-details">

        <img src={cover} alt={title}/>
        <h1>{title}</h1>
        <Html html={content}/>
        <Plataformas data={plataformas}/>
        <a href={wikipedia} target="_blank" rel="external">Wikipedia</a>

        <h2>Storyline</h2>
        <Html html={storyline}/>
        <p>
          <b>Franquia:</b><br/> {franquia}</p>

        <p>
          <b>Nomes alternativos:</b><br/> {nomes_alternativos}</p>

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

export default GameDetails;
