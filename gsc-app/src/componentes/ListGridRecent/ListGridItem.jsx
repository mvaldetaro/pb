import React, {Component, Fragment} from 'react';
import {Cover} from "..";
import {Paper, Typography} from "@material-ui/core";

class ListGridItem extends Component {
  render() {

    const {title, thumbnail, slug} = this.props.data;

    return (
      <div>
        <a href={`/${this.props.category}/${slug}`}>
          <Cover src={thumbnail} alt={title} width='100%'/>
        </a>
        <Typography variant={'body1'}>
          <a href={`/${this.props.category}/${slug}`}>{title}</a>
        </Typography>
      </div>
    )
  }
}

export default ListGridItem;
