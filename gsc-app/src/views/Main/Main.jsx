import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";
import {
  Home,
  Page404,
  Calendar,
  Browse,
  Blog,
  News,
  Game,
  Empresa,
  Pessoa,
  Plataforma
} from "../";

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/browse' component={Browse}/>
        <Route path='/calendar' component={Calendar}/>
        <Route path='/blog' component={Blog}/>
        <Route path='/noticias' component={News}/>
        <Route path='/game/:slug' component={Game}/>
        <Route path='/empresas/:slug' component={Empresa}/>
        <Route path='/plataformas/:slug' component={Plataforma}/>
        <Route path='/pessoas/:slug' component={Pessoa}/>
        <Route path='*' component={Page404}/>
      </Switch>
    );
  }
}

export default Main;
