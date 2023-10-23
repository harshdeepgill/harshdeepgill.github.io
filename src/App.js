
import HeaderImage from "./Conponents/HeaderImage";
import Home from "./Conponents/Home";
import Navbar from "./Conponents/Navbar";
import "./Sass/main.scss"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeaderImage/>
      <Home/>
    </div>
  );
}

export default App;
