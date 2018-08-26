import React, {Component} from 'react';
import ReactDOM from "react-dom";
import NavBar from "./componentes/NavBar";
import GamesList from "./componentes/GamesList";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar/>
        <GamesList/>
      </div>
    );
  }
}

export default App;
