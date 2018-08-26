import React, {Component} from 'react';
import ReactDOM from "react-dom";
import NavBar from "./componentes/NavBar";
import GamesList from "./componentes/GamesList";
import {Link} from "react-router-dom";
import './App.css';

class Home extends Component {
  render() {
    return (
      <div className="app">
        <p>Home</p>
      </div>
    );
  }
}

export default Home;
