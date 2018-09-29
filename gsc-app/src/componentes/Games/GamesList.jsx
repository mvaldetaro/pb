import React, {Component} from 'react';
import {Grid} from "@material-ui/core";
import Game from './Game';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import {getGames} from "./GamesListActions";

class GamesList extends Component {

  /*constructor(props) {
    super(props);

    this.state = {
      games: [],
      searchString: ''
    };
  };*/

  /*mapGame(game) {
    return {
      id: game.id,
      slug: game.slug,
      thumbnail: game.better_featured_image.media_details.sizes.thumbnail.source_url,
      title: game.title.rendered,
      excerpt: game.excerpt.rendered,
      plataforma: game.acf.datas_plataforma[0].plataforma.post_title
    }
  }*/

  /*getGames = () => {
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
  }*/

  componentWillMount() {
    this
      .props
      .getGames(this.props.searchString);
  }

  //componentDidUpdate(prevProps, prevState, snapshot) {

  componentDidUpdate(prevProps) {
    if (prevProps.searchString !== this.props.searchString) {
      this
        .props
        .getGames(this.props.searchString);
    }
  }

  render() {
    return (
      <div className="game-list">
        {this.props.games
          ? (
            <Grid container spacing={24}>
              {this
                .props
                .games
                .map((currentGame, i) => (
                  <Grid item xs={12} sm={6} lg={4} xl={3} key={i}>
                    <Game game={currentGame}></Game>
                  </Grid>
                ))}
            </Grid>
          )
          : "Nenhum game encontrado"}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {searchString: state.search.searchString, games: state.games.games}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getGames
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesList);