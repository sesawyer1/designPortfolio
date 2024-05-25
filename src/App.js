
import './App.css';
import Home from './pages/Home';
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import AboutMe from "./pages/AboutMe"
import NavBar from "./components/NavBar"
import EarthExplorer from "./pages/EarthExplorer"
import PedalPilot from "./pages/PedalPilot"
import Underground from "./pages/Underground"
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="about" element={<AboutMe/>}/>
        <Route path ="projects/earthexplorer" element={<EarthExplorer/>}/>
        <Route path ="projects/pedalpilot" element={<PedalPilot/>}/>
        <Route path ="projects/underground" element={<Underground/>}/>
      </Routes>
       
    </BrowserRouter>
   
  )
}

export default App;
