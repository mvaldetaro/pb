import React from 'react';
import {AppBar, Toolbar, Typography, Menu, MenuItem} from "@material-ui/core";
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">Games Social Club</Link>
          <Link to="/browse">Games</Link>
          <Link to="/calendar">Calendário</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/noticias">Notícias</Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;