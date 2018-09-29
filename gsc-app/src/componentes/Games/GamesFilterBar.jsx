import React, {Component} from 'react';
import {TextField} from "@material-ui/core";

import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import {onSearch} from "./GamesFilterBarActions";

class GamesFilterBar extends Component {

  /*constructor(props) {
    super(props);

    this.state = {
      searchString: ''
    };
  };

  onSearchInputChange = (event) => {
    if (event.target.value) {
      this.setState({searchString: event.target.value})
    } else {
      this.setState({searchString: ''})
    }
  }*/

  render() {
    return (<TextField
      id="searchInput"
      placeholder="Buscar por Games"
      margin="normal"
      onChange={this.props.onSearch}/>)
  }
}

function mapStateToProps(state) {
  return {searchString: state.search.searchString}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onSearch
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesFilterBar);