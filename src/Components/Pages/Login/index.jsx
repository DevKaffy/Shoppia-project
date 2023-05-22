import React from 'react'
import Layout from '../../Layout'

const Login = () => {
  return (
   <Layout>
    <main>
      <img src="/public/Side Image.png" alt="" />
      <div>
    <h2>Log in to Shoppia</h2>
    <p>Enter your details below</p>
    <form>
      <input type="text" placeholder='email' />
      <input type="text" placeholder='password'/>
    </form>
      </div>
    </main>
   </Layout>
  )
}

export default Login