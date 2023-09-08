import logo from './logo.svg';
import './App.css';
import { Home } from './pages/home/home.js';
import { Login } from './pages/login/login.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar/navbar.js';
import { Footer } from './components/footer/footer';
import { Cart } from './pages/cart/cart';
import { Favorites } from './pages/favorites/favorites';
import { Search } from './pages/search/search';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/cart' element={<Cart />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/search' element={<Search />} />
        
      </Routes>
      <Footer />
    </Router> 
  )
}

export default App;