import React, {useState} from 'react'
import Layout from '../../Layout';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './SignUp.css'

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    phoneNumber: '',
    password: '',
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    // API request
    axios.post('https://shoppia-production.up.railway.app/api/v1/register', formData)
    .then(response => {
      // Handle the response
      console.log(response.register);
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
  };
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
            <input
              type="text"
              placeholder="First name"
              required
              name="fistName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Last name"
              required
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Username"
              required
              name="userName"
              value={formData.userName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Email"
              required
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Phone Number"
              required
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Password"
              required
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <button className="w-full bg-[rgb(219,68,68)] pt-[1rem] pb-[1rem] rounded-[4px] text-[white] mt-[2.5rem] mb-4" onClick={handleSubmit}>
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