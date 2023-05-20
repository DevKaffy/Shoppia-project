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
        <div className='right-container'>
          <h2>Create an account</h2>
          <p>Enter your details below</p>
          <form>
            <p>Name</p>
            <p>Email or Phone Number</p>
            <p>Password</p>
            <button>Create Account</button>
            <div className='google-container'>
              <img src="/public/Icon-Google.png" alt="" />
              <p>Sign up with Google</p>
            </div>
          </form>
        </div>
      </main>
    </Layout>
  );
}

export default SignUp