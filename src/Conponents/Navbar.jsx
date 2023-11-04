import React from "react";
import styled from "styled-components";
import { BsDownload } from "react-icons/bs";


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
      <BUTTON href="#" onClick={() => { window.open(`https://firebasestorage.googleapis.com/v0/b/harshdeep-gill-portfolio-websi.appspot.com/o/Harshdeep%20Gill-Full%20Stack%20Web%20Developer%20(1).pdf?alt=media&token=9a8ba35f-77bb-4c95-b278-0c7a3c349109&_gl=1*1j2wsi6*_ga*OTcyNzU4NTcxLjE2OTQxMjAyNjM.*_ga_CW55HF8NVT*MTY5OTAzNTA0Mi42My4xLjE2OTkwMzUwODcuMTUuMC4w`, "_blank"); }} className="nav-link resume"  id="resume-button-1"><p>Resume</p> <BsDownload/></BUTTON>
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
