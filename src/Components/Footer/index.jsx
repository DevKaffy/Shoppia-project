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
      <div className="flex gap-x-[7rem]">
        <span>Subscribe</span>
        <span>
          111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
        </span>
        <span>MY Account</span>
        <span>Privacy Policy</span>
      </div>
      <div className="flex gap-x-[7rem]">
        <span>Get 10% off your first order</span>
      </div>
    </div>
  );
}

export default Footer