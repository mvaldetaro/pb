import React, {Component} from 'react';
import ListGridItem from "./ListGridItem";
import {Grid, Typography, Divider} from "@material-ui/core";

class ListGridRecent extends Component {

  render() {
    return (
      <div>
        <Typography variant={'title'}>{this.props.title}</Typography>

        {this.props.data
          ? (
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
              spacing={16}>
              {this
                .props
                .data
                .map((currentPodcast, i) => (
                  <Grid key={i} item xs={12} sm={3}>
                    <ListGridItem podcast={currentPodcast}/>
                  </Grid>
                ))}
            </Grid>
          )
          : <Typography>Nenhum {this.props.title}
            encontrado</Typography>
}<Divider/>
      </div>

    )
  }
}

export default ListGridRecent;