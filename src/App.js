import './App.css';
import AboutUs from './components/AboutUs';
import Index from './components/Index';
import Projects from './components/Projects';
import Team from './components/Team';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Index/>} />
        <Route path='/aboutUs' element={<AboutUs/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/team' element={<Team/>} />
      </Routes>

    </Router>
  );
}

export default App;