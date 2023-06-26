import './App.css';
import IndexAbout from './components/IndexAbout';
import IndexBody from './components/IndexBody';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <IndexBody/>
      <IndexAbout/>
    </div>
  );
}

export default App;
