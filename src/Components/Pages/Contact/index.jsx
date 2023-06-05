import React from 'react'
import Layout from '../../Layout';
import './Contact.css'

const Contact = () => {
  return (
    <Layout>
      <main className='contact'>
        <div>
          <div className='flex items-center gap-4'>
            <img src="/icons-phone.svg" alt="" />
            <div>Call us</div>
          </div>
          <div>ikrifkmdjnmcd</div>
        </div>
        <div className='input-container'>
          <input type="text" placeholder='Your Name' />
          <input type="text" placeholder='Your Email'/>
          <input type="text" placeholder='Your Phone'/>
        </div>
      </main>
    </Layout>
  );
}

export default Contact