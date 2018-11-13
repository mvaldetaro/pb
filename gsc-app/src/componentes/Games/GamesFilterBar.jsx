import React, {Component} from 'react';
import {TextField, Grid, MenuItem, Divider} from "@material-ui/core";

import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import {onSearch} from "./GamesFilterBarActions";

const currencies = [
  {
    value: 'USD',
    label: '$'
  }, {
    value: 'EUR',
    label: '€'
  }, {
    value: 'BTC',
    label: '฿'
  }, {
    value: 'JPY',
    label: '¥'
  }
];

class GamesFilterBar extends Component {

  state = {
    searchString: '',
    plataformas: '',
    years: '',
    genero: ''
  };

  handleChange = name => event => {
    this.setState({[name]: event.target.value});
  };

  render() {

    const {searchString, plataformas, years, genero} = this.props;

    return (
      <div className="root">
        <Grid container spacing={16}>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              id="searchInput"
              placeholder="Buscar por Games"
              margin="normal"
              onChange={this.props.onSearch}
              fullWidth={true}/>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              id="standard-select-currency"
              select
              placeholder="Select"
              value={this.state.plataformas}
              onChange={this.handleChange('plataformas')}
              helperText=""
              margin="normal"
              fullWidth={true}>
              {plataformas.map(option => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              id="standard-select-currency"
              select
              placeholder="Select"
              value={this.state.genero}
              onChange={this.handleChange('genero')}
              helperText=""
              margin="normal"
              fullWidth={true}>
              {genero.map(option => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              id="standard-select-currency"
              select
              placeholder="Select"
              value={this.state.currency}
              onChange={this.handleChange('currency')}
              helperText=""
              margin="normal"
              fullWidth={true}>
              {years.map(option => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Divider/>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {searchString: state.search.searchString, plataformas: state.games.plataformas, years: state.games.years, genero: state.games.genero}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onSearch
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesFilterBar);