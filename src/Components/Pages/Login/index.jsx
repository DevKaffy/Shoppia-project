import React from 'react'
import Layout from '../../Layout'

const Login = () => {
  return (
    <Layout>
      <main className="signup">
        <img className="signup-img" src="/public/Side Image.png" alt="" />
        <div className="right-container">
          <h2>Log in to Shoppia</h2>
          <p className="detail">Enter your details below</p>
          <form className="form-wrapper">
            <input type="text" placeholder="Email" required/>
            <input type="text" placeholder="Password" required/>
            <div className='flex items-center justify-between mt-[3.5rem] mb-4'>
              <button className="bg-[#DB4444] pt-[1rem] pb-[1rem] pr-[3rem] pl-[3rem] rounded-[4px] text-[white]">
                Log In
              </button>
              <p className="text-[#DB4444] cursor-pointer">Forget Password?</p>
            </div>
          </form>
        </div>
      </main>
    </Layout>
  );
}

export default Login