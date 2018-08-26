import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";

const Game = (props) => {
  return (
    <div>
      {props.game
        ? (
          <Card>
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {props.game.fields.title}
              </Typography>
              <Typography component="p">
                {props.game.fields.resume}
              </Typography>
            </CardContent>
          </Card>
        )
        : null}
    </div>
  )
}

export default Game;