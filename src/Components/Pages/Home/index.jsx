import React from 'react'
import Layout from '../../Layout'
import Products from '../../Products/Products'
import Sidebar from '../../Sidebar'
import './Home.css'

const Home = () => {
  return (
    <Layout>
        <main className='home'>
          <div className='top-items'>
            <Sidebar />
            <img className='pl-[2.8rem]' src="/Frame 560.png" alt="" />
          </div>
            <div className='main-container'>
              <div>
                <div className='flex justify-end gap-4 mb-[2.5rem]'>
                  <img src="/Fill With Left Arrow.png" alt="" />
                  <img src="/Fill with Right Arrow.png" alt="" />
                </div>
                  <Products />
              </div>
            </div>
        </main>
    </Layout>
  )
}

export default Home