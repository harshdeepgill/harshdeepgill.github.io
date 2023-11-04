import React from "react";
import styled from "styled-components";
import { BsDownload } from "react-icons/bs";
import resume from "../Sass/resume.pdf";


const Navbar = () => {
  return (
    <div id="nav-menu" className="navbar-main">
      <a href="#home" className="nav-link home navbar-main__logo" >
        Harshdeep Gill
      </a>
      <a  className="nav-link about" href="#about">About</a>
      <a className="nav-link skills" href="#skills">Skills</a>
      <a className="nav-link projects" href="#projects">Projects</a>
      <a className="nav-link contact" href="#contact">Contact</a>
      <BUTTON className="nav-link resume"  id="resume-button-1"><a href={resume} target="_blank" download="resume" rel="noopener noreferrer" id="resume-link-1"><p>Resume</p> <BsDownload/></a></BUTTON>
    </div>
  );
};

export default Navbar;

const BUTTON = styled.button`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 1rem 1.5rem 1rem 1.5rem;
  border-radius: 10px;
  background-color: white;
  color: rgb(22,22,22);
  border: none;
  outline: none;
  font-family: inherit;
  text-transform: uppercase;

  &:hover {
    box-shadow: 0px 3px 10px rgb(220,252,55);
    transform: translateY(-5px);
    cursor: pointer;
  }
`
