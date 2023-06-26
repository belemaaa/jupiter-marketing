import './App.css';
import Home from './components/Home';
import IndexAbout from './components/IndexAbout';
import IndexBody from './components/IndexBody';
import NavBar from './components/NavBar';
import WhatWeDo from './components/WhatWeDo';

function App() {
  return (
    <div>
      <Home/>
      <NavBar/>
      <IndexBody/>
      <IndexAbout/>
      <WhatWeDo/>
    </div>
  );
}

export default App;
