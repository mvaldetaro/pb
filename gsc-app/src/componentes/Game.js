import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";

import {withStyles} from '@material-ui/core/styles';
import {Link} from "react-router-dom";

const styles = theme => ({
  card: {
    display: 'flex'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: 151,
    height: 151
  }
});

const Game = (props) => {
  console.log(props.game);
  const {
    excerpt,
    id,
    slug,
    thumbnail,
    title,
    plataforma
  } = props.game;

  const {classes, theme} = props;

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.cover} image={thumbnail} title={title}/>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="headline">{title}</Typography>
          <Typography variant="subheading" color="textSecondary">
            {plataforma}
          </Typography>
          <Link to={'game/' + slug}>Vai!</Link>
        </CardContent>
      </div>

    </Card>
  );
}

export default withStyles(styles, {withTheme: true})(Game);