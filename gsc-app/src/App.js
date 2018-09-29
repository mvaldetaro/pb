import React, {Component} from 'react';
import Header from "./template/Header";
import Main from './views/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;
