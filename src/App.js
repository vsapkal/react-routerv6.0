import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import About from './Component/About';
import Contact from './Component/Contact';

function App() {
  return (
    <>
      <div className="App">
        <h3>Welcome to the World of React Router V6.0</h3>
      </div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
