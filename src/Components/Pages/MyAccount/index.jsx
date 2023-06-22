import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Category from '../../Category/Category';
import Sidebar from '../../Sidebar';
import Products from '../../Products/Products';
import './MyAccount.css'

const MyAccount = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="navbar">
        <h2 className="hoppia">Shoppia</h2>
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
          <img className="cursor-pointer" src="/Wishlist.svg" alt="" />
          <Link to="/checkoutpage">
          <img className="cursor-pointer" src="/Cart1.svg" alt="" />
          </Link>
          <img
            src="/user.svg"
            className="dropdown-trigger"
            onClick={toggleDropdown}
            alt=""
          />

          {isOpen && (
            <div className="dropdown-content">
              {/* Dropdown profile content */}
              <ul>
                <li className="side-list">
                  <img src="/profilr.svg" alt="" />
                  <Link to="/productupload">Manage My Account</Link>
                </li>
                <li className="side-list">
                  <img src="/order.svg" alt="" />
                  <p>Order</p>
                </li>
                <li className="side-list">
                  <img src="/icon-cancel.svg" alt="" />
                  <p>My cancellations</p>
                </li>
                <li className="side-list">
                  <img src="/Icon-Reviews.svg" alt="" />
                  <p>My Reviews</p>
                </li>
                <li className="side-list">
                  <img src="/public/Icon-logout.svg" alt="" />
                  <p>Logout</p>
                </li>
              </ul>
            </div>
          )}
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
              <div className="flex gap-4 items-center mb-[2rem]">
                <img src="/Rectangle 18.png" alt="" />
                <div className="text-[#DB4444] font-semibold">Products</div>
              </div>
              {/* <div className="flex justify-end gap-4 mb-[2.5rem]">
                <img src="/Fill With Left Arrow.png" alt="" />
                <img src="/Fill with Right Arrow.png" alt="" />
              </div> */}
              <Products />
            </div>
          </div>
          <div className="categories">
            <div className="flex gap-4 items-center mb-[2rem]">
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
      <div className="footer">
        <div className="title">
          <span className="text-[1.5rem]">Shoppia</span>
          <span>Support</span>
          <span>Account</span>
          <span>Quick Link</span>
        </div>
        <div className="flex gap-x-[11rem]">
          <span>Subscribe</span>
          <span>111 Bijoy sarani, Dhaka</span>
          <span>MY Account</span>
          <span>Privacy Policy</span>
        </div>
        <div className="flex gap-x-[8rem]">
          <span>Get 10% off your first order</span>
          <span>shoppia@gmail.com</span>
          <span>Terms of Use</span>
        </div>
        <div className="flex gap-x-[17rem] border-b pb-[2rem]">
          <span>Cart</span>
          <span>Contact</span>
          <span>FAQ</span>
          <span>Social media handles</span>
        </div>
        <div className="flex items-center justify-center pt-4">
          {" "}
          © Copyright Kafilat, Mathew and Tracy. All right reserved
        </div>
      </div>
    </div>
  );
}

export default MyAccount;