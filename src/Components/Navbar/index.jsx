import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ cartCount }) => {
  return (
    <div className="navbar">
      <h2 className="hoppia">Shoppia</h2>
      <div className="nav-items">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/signup">Sign Up</Link>
        <select
          className="p-[10px] border-none outline-none rounded-[5px]"
          name="campus"
          id="campus"
        >
          <option>Choose your institution</option>
          <option>University of Ilorin</option>
          <option>University of Ibadan</option>
          <option>University of Lagos</option>
          <option>Obafemi Awolowo University</option>
        </select>
      </div>
      <div className="search">
        <input type="text" placeholder="What are you looking for?" />
        <img src="/Search.svg" alt="" />
      </div>
      <div className="flex items-center gap-4 pl-[1.8rem]">
        <img src="/Wishlist.svg" alt="" />
        <div className="cart-icon">
          <Link to="/checkoutpage">
            <img src="/Cart1.svg" alt="" />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;