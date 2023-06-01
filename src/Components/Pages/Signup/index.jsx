import React, {useState} from 'react'
import Layout from '../../Layout';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './SignUp.css'

const SignUp = () => {
  const url = "";
  const [signUp, setSignUp] = useState("")
  return (
    <Layout>
      <main className="signup">
        <div className="signup-img">
          <img src="/accessories.jpeg" alt="" />
        </div>
        <div className="right-container">
          <h2>Create an account</h2>
          <p className="detail">Enter your details below</p>
          <form className="form-wrapper">
            <input type="text" placeholder="First name" required />
            <input type="text" placeholder="Last name" required />
            <input type="text" placeholder="Username" required />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone Number" required />
            <input type="text" placeholder="Password" required />
            <button className="w-full bg-[rgb(219,68,68)] pt-[1rem] pb-[1rem] rounded-[4px] text-[white] mt-[2.5rem] mb-4">
              Create Account
            </button>
          </form>
          <div className="account">
            <p>Already have an account?</p>
            <Link to="/login">Log in</Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default SignUp