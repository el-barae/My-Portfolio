// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
// import Navbar from './Components/Navbar'; // Assure-toi que 'Navbar' est importé
import Portfolio from './Components/Portfolio';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;