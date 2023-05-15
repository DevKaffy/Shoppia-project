import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <h2>Exclusive</h2>
      <div>
        <span>Home</span>
        <span>Contact</span>
        <span>About</span>
        <span>Sign Up</span>
      </div>
      <div>
        <p>What are you looking for?</p>
        <img src="/Search.svg" alt="" />
      </div>
    </div>
  )
}

export default Navbar