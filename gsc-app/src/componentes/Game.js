import React from 'react';
import {Link} from "react-router-dom";

const Game = (props) => {
  const {slug, thumbnail, title, plataforma} = props.game;

  return (
    <div>
      <img src={thumbnail} alt={title}></img>
      <h2>{title}</h2>
      <p>{plataforma}</p>
      <Link to={'game/' + slug}>Vai!</Link>
    </div>
  );
}

export default Game;