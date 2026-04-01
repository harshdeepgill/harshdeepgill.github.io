import Navbar from './components/layout/Navbar';
import HeaderImage from './components/sections/HeaderImage';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Github from './components/sections/Github';
import Contact from './components/sections/Contact';
import './Sass/main.scss';

function App() {
    return (
        <div className="App">
            <Navbar />
            <HeaderImage />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Github />
            <Contact />
        </div>
    );
}

export default App;
