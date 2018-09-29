import React, {Component} from 'react';
import {Grid, TextField} from "@material-ui/core";
import Game from './Game';
import axios from "axios";
import WP from "../../core/WP";

class GamesList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      games: [],
      searchString: ''
    };
  };

  mapGame(game) {
    return {
      id: game.id,
      slug: game.slug,
      thumbnail: game.better_featured_image.media_details.sizes.thumbnail.source_url,
      title: game.title.rendered,
      excerpt: game.excerpt.rendered,
      plataforma: game.acf.datas_plataforma[0].plataforma.post_title
    }
  }

  componentDidMount() {
    this.getGames();
  }

  getGames = () => {
    axios
      .get(WP.url + WP.types.games, {
      params: {
        search: this.state.searchString
      }
    })
      .then(resp => {
        console.log(resp.data);
        this.setState({
          games: resp
            .data
            .map(this.mapGame)
        })
      });
  }

  onSearchInputChange = (event) => {
    if (event.target.value) {
      this.setState({searchString: event.target.value})
    } else {
      this.setState({searchString: ''})
    }
    this.getGames();
  }

  render() {
    return (
      <div>
        {this.state.games
          ? (
            <div>
              <TextField
                id="searchInput"
                placeholder="Buscar por Games"
                margin="normal"
                onChange={this.onSearchInputChange}/>

              <Grid container spacing={24}>
                {this
                  .state
                  .games
                  .map((currentGame, i) => (
                    <Grid item xs={12} sm={6} lg={4} xl={3} key={i}>
                      <Game game={currentGame}></Game>
                    </Grid>
                  ))}
              </Grid>
            </div>
          )
          : "Nenhum game encontrado"}
      </div>
    )
  }
}

export default GamesList;