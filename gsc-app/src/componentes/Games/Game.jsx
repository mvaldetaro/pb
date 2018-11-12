import React from 'react';
import {Link} from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles';

const Game = (props) => {
  const {slug, thumbnail, title, plataforma} = props.game;

  const link = <Link to={'game/' + slug}>
    <Typography variant="title">{title}</Typography>
  </Link>

  return (
    <Card>
      <CardContent>
        <CardMedia
          component="img"
          alt={title}
          className=""
          height="140"
          image={thumbnail}
          title={title}/>
      </CardContent>

      {link}

    </Card>
  );
}

export default Game;