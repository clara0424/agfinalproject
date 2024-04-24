import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar"> {/* Add a class to style your navbar */}
      <ul className="navbar-list"> {/* Add a class to style your navbar list */}
        <li className="navbar-item-big"> {/* Add a class to style your navbar item */}
          <Link to="/" className="no-underline">logo</Link> {/* Add a class for styling */}
        </li>
        <li className="navbar-item">
          <Link to="/introduction">Introduction</Link>
        </li>
        <li className="navbar-item">
          <Link to="/geography">Geography</Link>
        </li>
        <li className="navbar-item">
          <Link to="/history">History</Link>
        </li>
        <li className="navbar-item">
          <Link to="/process">Process</Link>
        </li>
        <li className="navbar-item">
          <Link to="/brands">Brands</Link>
        </li> 
      </ul> 
    </nav>
  );
}

export default Navbar;

