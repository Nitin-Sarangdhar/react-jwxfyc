import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Navbar</div>
      <ul className="navbar-options">
        <li>
          <Link to="/" className="navbar-option">Home</Link>
        </li>
        <li>
          <Link to="/List" className="navbar-option">List</Link>
        </li>
        <li>
          <Link to="/Population" className="navbar-option">Population</Link>
        </li>
        <li>
          <Link to="/Custom" className="navbar-option">Custom</Link>
        </li>
        {/* Add more links for additional pages as needed */}
      </ul>
    </nav>
  );
}

export default Navbar;