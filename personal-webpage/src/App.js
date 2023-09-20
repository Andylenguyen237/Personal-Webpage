import { Nav } from 'react-bootstrap';
import './App.css';
import ParticlesComponent from './components/Particles';
import Home from './pages/Home';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';

function App() {
  return (
    <>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home></Home>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
