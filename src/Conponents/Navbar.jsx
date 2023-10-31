import React from "react";

const Navbar = () => {
  return (
    <div id="nav-menu" className="navbar-main">
      <a href="#home" className="nav-link home navbar-main__logo" >
        Harshdeep Gill
      </a>
      <a  className="nav-link about" href="#about">About</a>
      <a className="nav-link skills" href="#skills">Skills</a>
      <a className="nav-link projects" href="#projects">Projects</a>
      <a href="">Contact</a>
    </div>
  );
};

export default Navbar;
