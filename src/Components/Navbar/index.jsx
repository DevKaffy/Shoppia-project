import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <h2 className="shoppia">Shoppia</h2>
      <div className="nav-items">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
      <div className="search">
        <input type="text" placeholder="What are you looking for?" />
        <img src="/Search.svg" alt="" />
      </div>
    </div>
  );
}

export default Navbar