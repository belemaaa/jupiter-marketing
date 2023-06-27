import './App.css';
import ContactNav from './components/ContactNav';
import Home from './components/Home';
import IndexAbout from './components/IndexAbout';
import IndexBody from './components/IndexBody';
import NavBar from './components/NavBar';
import WhatWeDo from './components/WhatWeDo';

function App() {
  return (
    <div>
      {/* <Home/> */}
      <ContactNav/>
      <NavBar/>
      <IndexBody/>
      <IndexAbout/>
      <WhatWeDo/>
    </div>
  );
}

export default App;
