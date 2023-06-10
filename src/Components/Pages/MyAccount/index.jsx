import React from 'react'
import { Link } from 'react-router-dom';

const MyAccount = () => {
  return (
    <div>
      <div className="navbar">
        <h2 className="shoppia">Shoppia</h2>
        <div className="nav-items">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <div className='cursor-pointer'>Logout</div>
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
          <img src="/Cart1.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default MyAccount