import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Pagenotfound from './pages/Pagenotfound';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Dashboard from './pages/user/Dashboard';
import CategoryProducts from './pages/CategoryProducts';
import Ebooks from './pages/Ebooks';
import Products from './pages/Products';
import Podcasts from './pages/Podcasts';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/categories/ebooks' element={<Ebooks/>} />
        <Route path='/categories/products' element={<Products/>} />
        <Route path='/categories/podcasts' element={<Podcasts/>} />
        <Route path='/*' element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
