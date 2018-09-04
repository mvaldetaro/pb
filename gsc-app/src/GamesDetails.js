import React, {Component} from 'react';
import ReactDOM from "react-dom";
import './App.css';
import axios from "axios";
import WP from "./classes/WP";

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
      plataforma: game.acf.datas_plataforma[0].plataforma.post_title,
      cover: game.acf.cover,
      lancamento: game.acf.lancamento,
      desenvolvedores: game.acf.desenvolvedora,
      publicadoras: game.acf.publicadoras,
      podcasts: game.acf.podacasts,
      reviews: game.acf.reviews,
      revistas: game.acf.revistas_relacionadas,
      screenshots: game.acf.screenshots,
      storyline: game.acf.storyline,
      videos: game.acf.videos,
      wikipedia: game.acf.wikipedia_page
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
        console.log(resp.data);
        this.setState({
          currentGame: this.mapGame(resp.data[0])
        })
      });
  }

  render() {
    const {slug} = this.state;

    return (
      <section className="game-details">
        <p>GAME {slug}</p>
      </section>
    );
  }
}

export default GameDetails;
