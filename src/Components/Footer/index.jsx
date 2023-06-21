import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="title">
        <span className="text-[1.5rem]">Shoppia</span>
        <span>Support</span>
        <span>Account</span>
        <span>Quick Link</span>
      </div>
      <div className="lg:flex lg:flex-row flex flex-col gap-x-[11rem] gap-y-4">
        <span>Subscribe</span>
        <span>
          111 Bijoy sarani, Dhaka 
          </span>
        <span>MY Account</span>
        <span>Privacy Policy</span>
      </div>
      <div className="flex flex-col lg:flex lg:flex-row gap-x-[8rem] gap-y-4">
        <span>Get 10% off your first order</span>
        <span>shoppia@gmail.com</span>
        <span>Login/Register</span>
        <span>Terms of Use</span>
      </div>
      <div className=" flex flex-col lg:flex lg:flex-row gap-x-[17rem] gap-y-4 border-b pb-[2rem]">
        <span>Cart</span>
        <span>Contact</span>
        <span>FAQ</span>
        <span>Social media handles</span>
      </div>
      <div className="block lg:flex items-center justify-center pt-4">
        {" "}
        © Copyright Kafilat, Mathew and Tracy. All right reserved
      </div>
    </div>
  );
}

export default Footer