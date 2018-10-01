import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import {getPlataforma} from "./PlataformaActions";

class Plataforma extends Component {

  componentDidMount() {
    this
      .props
      .getPlataforma(this.props.match.params.slug);
  }

  render() {
    return (
      <div className="app">
        <p>Plataforma</p>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {currentGame: state.plataformaSelected.currentGame}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getPlataforma
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Plataforma);
