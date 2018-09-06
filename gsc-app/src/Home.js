import React, {Component} from 'react';
//import ReactDOM from "react-dom";
import GameList from "./componentes/GamesList";
import './App.css';

class Home extends Component {
  render() {
    return (
      <GameList></GameList>
    );
  }
}

export default Home;
