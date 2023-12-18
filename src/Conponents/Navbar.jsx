import React from "react";
import styled from "styled-components";
import resume from "../Sass/resume.pdf";
import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerOverlay, Link, Stack, StackDivider, useDisclosure } from "@chakra-ui/react";
import { CloseIcon, DownloadIcon, HamburgerIcon } from '@chakra-ui/icons'

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const hanldeResume = () => {
    const redirectLink = "https://drive.google.com/file/d/1E6lslPhmw2lqmSeA7N_HMtRNm-Xy7S-Q/view?usp=sharing";
    window.open(redirectLink, "_blank");
}

  return (
    <div>
    <div id="nav-menu" className="navbar-main">
      <a href="#home" className="nav-link home navbar-main__logo" >
        Harshdeep Gill
      </a>
      <a  className="nav-link about" href="#about">About</a>
      <a className="nav-link skills" href="#skills">Skills</a>
      <a className="nav-link projects" href="#projects">Projects</a>
      <a className="nav-link contact" href="#contact">Contact</a>
      <div className="resume-burger-div">
        <BUTTON className="nav-link resume" onClick={hanldeResume} id="resume-button-1"><a style={{display:"flex", alignItems: "center", textDecoration:"none", gap:"1rem", color: "rgb(22,22,22)"}} href={resume} target="_blank" download="resume" rel="noopener noreferrer" id="resume-link-1"><p>Resume</p> <DownloadIcon/></a></BUTTON>
        <Button onClick={onOpen} className="burger-menu"><HamburgerIcon /></Button>
      </div>
    </div>
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
        <DrawerContent display={"flex"} flexDirection={"column"} justifyContent={"space-between"} bgColor={"rgb(22,22,22)"} p={"3rem"} paddingTop={"12rem"} w={"100vw"}>
          <DrawerBody>
            <Stack direction={"column"} alignItems={"center"} divider={<StackDivider borderColor='white' />}  >
              <Link onClick={onClose} textDecoration={"none"} fontSize={"3rem"} mb={"2.5rem"} color={"#fff"} href="#home" fontFamily={"MyFontThin"} textTransform={"uppercase"} >Home</Link>
              <Link onClick={onClose} textDecoration={"none"} fontSize={"3rem"} mb={"2.5rem"} color={"#fff"} href="#about" fontFamily={"MyFontThin"} textTransform={"uppercase"} >About</Link>
              <Link onClick={onClose} textDecoration={"none"} fontSize={"3rem"} mb={"2.5rem"} color={"#fff"} href="#skills" fontFamily={"MyFontThin"} textTransform={"uppercase"} >Skills</Link>
              <Link onClick={onClose} textDecoration={"none"} fontSize={"3rem"} mb={"2.5rem"} color={"#fff"} href="#projects" fontFamily={"MyFontThin"} textTransform={"uppercase"} >Projects</Link>
              <Link onClick={onClose} textDecoration={"none"} fontSize={"3rem"} mb={"2.5rem"} color={"#fff"} href="#contact" fontFamily={"MyFontThin"} textTransform={"uppercase"} >Contact</Link>
            </Stack>
          </DrawerBody>
          <DrawerFooter display={"flex"} justifyContent={"center"} mb={"8rem"} >
            <Box onClick={onClose} w={"9rem"} h={"9rem"} display={"flex"} justifyContent={"center"} alignItems={"center"} borderRadius={"50%"} border={"3px solid #fff"}>
              <CloseIcon fontSize={"4rem"} color={"#fff"}/>
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
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
  transition: all 0.2s;


  &:hover {
    box-shadow: 0 0 10px rgb(220,252,55), 0 0 40px rgb(220,252,55), 0 0 10px rgb(220,252,55);
    background-color: rgb(220,252,55);
    color: white;
    transform: translateY(-3px);
    cursor: pointer;
  }
`
