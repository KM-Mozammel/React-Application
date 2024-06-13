import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../assets/logo.png';
// FontAwesome in React
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const red = () => {
  return {
    color: "red",
  };
};

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><img className='logo' src={Logo}/></Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/data" style={red()}>Get Data</Link></li>
      </ul>
      <div>
        <span className='menu-bars'>
          <FontAwesomeIcon icon = {faBars}/>
          </span>
        </div>
    </nav>
  );
}

export default Navbar;
