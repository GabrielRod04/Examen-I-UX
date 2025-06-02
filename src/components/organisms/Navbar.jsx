import React from 'react';
import './Navbar.css';
import { FaSearch, FaUserCircle, FaBookmark } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">max</h1>
        <ul className="nav-links">
          <li className="active">Inicio</li>
          <li>Series</li>
          <li>Películas</li>
          <li>HBO</li>
          <li>Niños y familia</li>
        </ul>
      </div>
      <div className="navbar-right">
        <FaSearch className="nav-icon" />
        <FaBookmark className="nav-icon" />
        <FaUserCircle className="nav-icon profile" />
      </div>
    </nav>
  );
};

export default Navbar;
