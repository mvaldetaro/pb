import React, {Component} from 'react';
import {Grid} from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles';
import Game from './Game';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import {getGames, getCategories} from "./GamesListActions";

class GamesList extends Component {

  componentWillMount() {
    this
      .props
      .getGames(this.props.filter);
    this
      .props
      .getCategories(2, 'GET_CATEGORIES');

    this
      .props
      .getCategories(7, 'GET_GENERO');
  }

  //componentDidUpdate(prevProps, prevState, snapshot) {

  componentDidUpdate(prevProps) {
    if (prevProps.filter !== this.props.filter) {
      this
        .props
        .getGames(this.props.filter);
    }
  }

  render() {
    return (
      <div className="game-list">
        {this.props.games
          ? (
            <Grid container spacing={16}>
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
  return {filter: state.search.filter, games: state.games.games}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getGames,
    getCategories
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesList);