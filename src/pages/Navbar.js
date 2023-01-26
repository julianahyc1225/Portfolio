import React from 'react';
import "./HomeNav.css";

function Navbar() {
    return (
        <header className="navbar">
          <div className="navbar-title"><a href="/portfolio">Juliana Han</a></div>
          <div className="navbar-menu">
            <a href="/portfolio">Projects</a>
            <a href="#/art">Art</a>
            {/* <a href="/portfolio/about">About</a> */}
          </div>
        </header>

    );
  }
  
  export default Navbar;