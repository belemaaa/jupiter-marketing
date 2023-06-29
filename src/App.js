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

function App() {
  return (
    <div>
      <ContactNav/>
      <NavBar/> 
      {/* <Home/> */}
      <IndexBody/>
      <IndexAbout/>
      <WhatWeDo/>
      <CompletedProjects/> 
      <MeetOurTeam/>
      <Footer/>
    </div>
  );
}

export default App;
