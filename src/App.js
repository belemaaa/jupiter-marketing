import './App.css';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import GoogleMap from './components/GoogleMap';
import Index from './components/Index';
import Projects from './components/Projects';
import Team from './components/Team';
import DigitalBranding from './components/DigitalBranding';
import WebSolution from './components/WebSolution'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/jupiter-marketing' exact element={<Index/>} />
        <Route path='/aboutUs' element={<AboutUs/>} />
        <Route path='/digital-branding' element={<DigitalBranding/>} />
        <Route path='/web-solution' element={<WebSolution/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/team' element={<Team/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/map' element={<GoogleMap/>} />
      </Routes>

    </Router>
  );
}

export default App;