/* App.js */
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './component/Navbar'
import Home from './pages/Home';
import Category from './pages/Category';
import Tips from './pages/Tips';
import About from './pages/About';
import DetailPage from './extra/DetailPage';


function App() {
  return (
    <div className="wrap">
      <Navbar />

      <main className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <footer className='site-footer'>
        <small>&copy; {new Date().getFullYear()} VeloGear Finder</small>
      </footer>
    </div>
  );
}

export default App;