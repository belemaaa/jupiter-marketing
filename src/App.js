import './App.css';
import AboutUs from './components/AboutUs';
import CompletedProjects from './components/CompletedProjects';
import ContactNav from './components/ContactNav';
import Footer from './components/Footer';
import Home from './components/Home';
import Index from './components/Index';
import IndexAbout from './components/IndexAbout';
import IndexBody from './components/IndexBody';
import MeetOurTeam from './components/MeetOurTeam';
import NavBar from './components/NavBar';
import WhatWeDo from './components/WhatWeDo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Index/>} />
        <Route path='/aboutUs' element={<AboutUs/>} />
      </Routes>

    </Router>
  );
}

export default App;