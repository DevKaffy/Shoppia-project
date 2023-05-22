import React from 'react'
import Layout from '../../Layout'

const Login = () => {
  return (
   <Layout>
    <main className= "signup">
      <img className='signup-img' src="/public/Side Image.png" alt="" />
      <div className='right-container'>
    <h2>Log in to Shoppia</h2>
    <p className='detail'>Enter your details below</p>
    <form className='form-wrapper'>
      <input type="text" placeholder='email' />
      <input type="text" placeholder='password'/>
      <div>
        
      </div>
    </form>
      </div>
    </main>
   </Layout>
  )
}

export default Login