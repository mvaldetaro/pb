import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/">Games Social Club</Link>
      <Link to="/browse">Games</Link>
      <Link to="/calendar">Calendário</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/noticias">Notícias</Link>
    </div>
  );
}

export default NavBar;