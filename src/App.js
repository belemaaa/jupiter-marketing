import './App.css';
import CompletedProjects from './components/CompletedProjects';
import ContactNav from './components/ContactNav';
import Footer from './components/Footer';
import Home from './components/Home';
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
      <NavBar/>

      <Routes>
        <Route path='/' exact element={<Home/>} />

        <Route path='/aboutUs' exact element={<IndexAbout/>} />
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;