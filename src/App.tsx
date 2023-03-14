import './App.css';
import { Accueil } from './pages/Accueil';
import { Ressources } from './pages/Ressources';
import { Routes, Route, NavLink } from 'react-router-dom'
function App() {
  return (
    <div className='container mt-10'>
      <header>
        <nav>
          <NavLink to={'/'}>Accueil</NavLink> <br />
          <NavLink to={'/ressources'}>Ressources</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Accueil></Accueil>} />
        <Route path='/ressources' element={<Ressources></Ressources>} />
      </Routes>
      <footer>

      </footer>
    </div>
  );
}

export default App;
