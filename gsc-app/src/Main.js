import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {Switch, Route} from "react-router-dom";
import Home from "./Home";
import BrowseGames from './BrowseGames';
import Page404 from './Page404';
import './App.css';
import Calendar from './Calendar';
import Blog from './Blog';
import News from './News';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/browse' component={BrowseGames}/>
        <Route path='/calendar' component={Calendar}/>
        <Route path='/blog' component={Blog}/>
        <Route path='/news' component={News}/>
        <Route path='*' component={Page404}/>
      </Switch>
    );
  }
}

export default Main;
