import React from 'react'
import Layout from '../../Layout';
import './SignUp.css'

const SignUp = () => {
  return (
    <Layout>
      <main className="signup">
        <div className="signup-img">
          <img src="/Side Image.png" alt="" />
        </div>
        <div className="right-container">
          <h2>Create an account</h2>
          <p className="detail">Enter your details below</p>
          <form className="form-wrapper">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email or Phone Number" />
            <input type="text" placeholder="Password" />
            <button className="w-full bg-[#DB4444] pt-[1rem] pb-[1rem] rounded-[4px] text-[white] mt-[2.5rem]">Create Account</button>
          </form>
            <div className="google-container">
              <img src="/public/Icon-Google.png" alt="" />
              <p>Sign up with Google</p>
            </div>
        </div>
      </main>
    </Layout>
  );
}

export default SignUp