import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Facilities from './pages/Facilities';
import Documents from './pages/Documents';
import Contact from './pages/Contact';
import Navbar from './pages/components/Navbar';
import Footer from './pages/components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/facilities' element={<Facilities />} />
        <Route path='/documents' element={<Documents/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
