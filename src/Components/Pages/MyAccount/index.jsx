import React from 'react'
import { Link } from 'react-router-dom';
import Category from '../../Category/Category';
import Sidebar from '../../Sidebar';
import Products from '../../Products/Products';

const MyAccount = () => {
  return (
    <div>
      <div className="navbar">
        <h2 className="shoppia">Shoppia</h2>
        <div className="nav-items">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
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
          <img src="/user.svg" alt="" />
        </div>
      </div>
      <main className="home">
        <div className="top-items">
          <Sidebar />
          <img className="pl-[2.8rem] mb-4 w-full" src="/image.jpeg" alt="" />
        </div>
        <div className="main-container">
          <div>
            <div>
              <div className="flex gap-4 items-center mb-[1rem]">
                <img src="/Rectangle 18.png" alt="" />
                <div className="text-[#DB4444] font-semibold">Products</div>
              </div>
              <div className="flex justify-end gap-4 mb-[2.5rem]">
                <img src="/Fill With Left Arrow.png" alt="" />
                <img src="/Fill with Right Arrow.png" alt="" />
              </div>
              <Products />
            </div>
          </div>
          <div className="categories">
            <div className="flex gap-4 items-center mb-[1rem]">
              <img src="/Rectangle 18.png" alt="" />
              <div className="text-[#DB4444] font-semibold">Categories</div>
            </div>
            <div className="text-[2.25rem] font-semibold mb-[3.75rem]">
              Browse By Category
            </div>
            <Category />
          </div>
        </div>
      </main>
    </div>
  );
}

export default MyAccount