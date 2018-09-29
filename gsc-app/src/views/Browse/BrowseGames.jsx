import React, {Component} from 'react';
import GameList from "../../componentes/Games/GamesList";

class BrowseGames extends Component {
  render() {
    return (
      <div className="browse">
        <GameList></GameList>
      </div>
    );
  }
}

export default BrowseGames;
