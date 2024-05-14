import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import other components that you'll use for routing
import Home from './Components/Home';
import List from './Components/List'; // Import List component
import Population from './Components/Population'; // Import Population component
import Custom from './Components/Custom'; // Import Custom component

// Import Navbar component
import Navbar from './Components/Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>    
        {/* Include the Navbar component */}
        <Navbar />
        {/* Define routes for your application */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/List" element={<List />} /> 
          <Route path="/Population" element={<Population />} />
          <Route path="/Custom" element={<Custom />} /> {/* Route for Contact component */}
        </Routes>
    </Router>
  );
}

export default App;