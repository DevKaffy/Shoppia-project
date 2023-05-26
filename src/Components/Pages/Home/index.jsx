import React from 'react'
import Layout from '../../Layout'
import Products from '../../Products/Products'
import Sidebar from '../../Sidebar'
import './Home.css'

const Home = () => {
  return (
    <Layout>
        <main className='home'>
            <Sidebar />
            <div className='main-container'>
              <img className='pl-[2.8rem] mb-[12rem]' src="/Frame 560.png" alt="" />
              <div>
                <div className='arrow'>
                  <img src="/Fill With Left Arrow.png" alt="" />
                  <img src="/Fill with Right Arrow.png" alt="" />
                  <Products />
                </div>
              </div>
            </div>
        </main>
    </Layout>
  )
}

export default Home