import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../Layout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://shoppia-production.up.railway.app/api/v1/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // Successful login
        const token = response.headers.get("authorization");
        // Store the token in localStorage
        localStorage.setItem("token", token);
        navigate("/");
      } else {
        // Error occurred
        if (data && data.errors) {
          if (Array.isArray(data.errors)) {
            // Validation errors
            const errorsMap = {};
            data.errors.forEach((error) => {
              // Map each error to its corresponding field
              errorsMap[error.param] = error.msg;
            });
            setErrors(errorsMap);
          } else {
            // Other errors
            setErrors({ general: data.errors });
          }
        } else {
          setErrors({ general: "An error occurred" });
        }
      }
    } catch (error) {
      setErrors({ general: "An error occurred" });
      console.error(error);
    }
  };

  return (
    <Layout>
      <main className="signup">
        <img className="signup-img" src="/accessories.jpeg" alt="" />
        <div className="right-container">
          <h2>Log in to Shoppia</h2>
          <p className="detail">Enter your details below</p>
          <form className="form-wrapper" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}
            {errors.general && <p style={{ color: "red" }}>{errors.general}</p>}
            <div className="flex items-center justify-between mt-[3.5rem] mb-4">
              <button
                className="bg-[#DB4444] pt-[1rem] pb-[1rem] pr-[3rem] pl-[3rem] rounded-[4px] text-[white]"
                type="submit"
              >
                Log In
              </button>
              <p className="text-[#DB4444] cursor-pointer">Forget Password?</p>
            </div>
          </form>
        </div>
      </main>
    </Layout>
  );
};

export default Login;
