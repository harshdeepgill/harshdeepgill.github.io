import React from "react";

const Navbar = () => {
  return (
    <div id="nav-menu" className="navbar-main">
      <a href="#home" className="navbar-main__logo" >
        Harshdeep Gill
      </a>
      <a  className="nav-link about" href="#about">About</a>
      <a href="#skills">Skills</a>
      <a id="projects" href="">Projects</a>
      <a id="contact" href="">Contact</a>
    </div>
  );
};

export default Navbar;
