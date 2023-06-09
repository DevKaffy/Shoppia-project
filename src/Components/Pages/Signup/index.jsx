import React, { useState } from "react";
import Layout from "../../Layout";
import { Link } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phonenumber: "",
    password: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({}); // State to hold form errors

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear the error when the input changes
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    //console.log(formData);

    try {
      const response = await axios.post(
        "https://shoppia-production.up.railway.app/api/v1/register",
        formData
      );
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.Error) {
        const responseErrors = error.response.data.Error;
        const fieldErrors = {};
        responseErrors.forEach((error, index) => {
          const fieldName = error.path;
          fieldErrors[fieldName] = error.msg;
        });
        setErrors({ ...errors, ...fieldErrors });
      } else if (
        error.response &&
        error.response.data &&
        error.response.data.error
      ) {
        // Get the generic error message from the response
        const errorMessage = error.response.data.error;
        setErrors({ ...errors, generic: errorMessage });
      } else {
        // Set a generic error
        setErrors({
          ...errors,
          generic: "An error occurred while signing up. Please try again.",
        });
      }
    }
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
          <form className="form-wrapper" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First name"
              required
              name="firstname"
              value={formData.firstname}
              onChange={handleInputChange}
            />
            {errors.firstname && (
              <span style={{color: 'red'}} className="error">{errors.firstname}</span>
            )}
            <input
              type="text"
              placeholder="Last name"
              required
              name="lastname"
              value={formData.lastname}
              onChange={handleInputChange}
            />
            {errors.lastname && (
              <span style={{color: 'red' }} className="error">{errors.lastname}</span>
            )}
            <input
              type="text"
              placeholder="Username"
              required
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
            {errors.username && (
              <span style={{color: 'red' }} className="error">{errors.username}</span>
            )}
            <input
              type="text"
              placeholder="Email"
              required
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <span style={{color: 'red' }} className="error">{errors.email}</span>}
            <input
              type="text"
              placeholder="Phone Number"
              required
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleInputChange}
            />
            {errors.phonenumber && (
              <span style={{color: 'red' }} className="error">{errors.phonenumber}</span>
            )}
            <input
              type="password"
              placeholder="Password"
              required
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && (
              <span style={{color: 'red' }} className="error">{errors.password}</span>
            )}
            {errors.generic && <span className="error">{errors.generic}</span>}
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
};

export default SignUp;
