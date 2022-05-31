import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import About from './Component/About';
import Contact from './Component/Contact';
import Error from './Component/Error';

function App() {
  return (
    <>
      <header>
        <Router>
          <Routes>
            <Route path='/' element={<Navbar />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </Router>
      </header>
    </>
  );
}

export default App;
