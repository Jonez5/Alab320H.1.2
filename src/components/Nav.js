import React from "react";

const Nav = () => {
  return (
    <nav className="main-nav" aria-label="Main Navigation" role="navigation">
      <ul className="nav-list">
        <li><a href="#">Women's</a></li>
        <li><a href="#">Men's</a></li>
        <li><a href="#">On the Street</a></li>
        <li><a href="#">The Catwalk</a></li>
        <li><a href="#">AdWatch</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
  );
};

export default Nav;