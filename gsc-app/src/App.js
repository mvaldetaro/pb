import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import NavBar from "./componentes/NavBar";
import Home from "./Home";
import BrowseGames from './BrowseGames';
import Page404 from './Page404';
import './App.css';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar/>
        <Main/>
      </div>
    );
  }
}

export default App;
