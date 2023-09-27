import './App.css';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar'
import Experiences from './pages/Experiences';
import ProficiencyPage from './pages/ProficiencyPage';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/Proficiency' element={<ProficiencyPage/>}/>
          <Route path='/Experiences' element={<Experiences/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
