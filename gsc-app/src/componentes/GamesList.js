import React, {Component} from 'react';
import {Grid, TextField} from "@material-ui/core";
import * as contentful from 'contentful';
import Game from '../componentes/Game';

const SPACE_ID = 'ongu3hs7kbti';
const ACCESS_TOKEN = '19f207052000c4c451e563e240b70b37d5a1d962d84498d95b77512d45814ac8';

const client = contentful.createClient({space: SPACE_ID, accessToken: ACCESS_TOKEN});

class GamesList extends Component {
  state = {
    games: [],
    searchString: ''
  }

  constructor() {
    super();
    this.getGames()
  }

  getGames = () => {
    client
      .getEntries({content_type: 'games', query: this.state.searchString})
      .then((response) => {
        this.setState({games: response.items})
      })
      .catch((error) => {
        console.log("Ocorreu um erro enquanto fetching data");
        console.error(error);
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
                  .map(currentGame => (
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
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