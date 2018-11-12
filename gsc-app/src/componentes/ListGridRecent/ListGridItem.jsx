import React, {Component, Fragment} from 'react';
import {Cover} from "..";
import {Paper, Typography} from "@material-ui/core";

class Podcast extends Component {
  render() {

    const {title, thumbnail, slug} = this.props.podcast;

    return (
      <Paper>
        <a href={`/podcasts/${slug}`}>
          <Cover src={thumbnail} alt={title} width='200px'/>
        </a>
        <Typography variant={'body1'}>
          <a href={`/podcasts/${slug}`}>{title}</a>
        </Typography>
      </Paper>
    )
  }
}

export default Podcast;
