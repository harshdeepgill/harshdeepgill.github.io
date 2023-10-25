
import { useDispatch } from "react-redux";
import HeaderImage from "./Conponents/HeaderImage";
import Home from "./Conponents/Home";
import Navbar from "./Conponents/Navbar";
import "./Sass/main.scss"
import About from "./Conponents/About";
import Skills from "./Conponents/Skills";
import Projects from "./Conponents/Projects";

function App() {

  const dispatch = useDispatch();

  const handleScroll = () =>{
    let htmlEl = document.documentElement;
    let scrollFr = htmlEl.scrollTop / htmlEl.clientHeight;
    dispatch({type: "SCROLL_CHANGE", payload: scrollFr})
  }

  window.addEventListener("scroll", handleScroll);


  return (
    <div className="App">
      <Navbar/>
      <HeaderImage/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
