import React from 'react'
import Layout from '../../Layout'
import Sidenav from '../../Sidebar'
import './Home.css'

const Home = () => {
  return (
    <Layout>
        <main className='home'>
            <Sidenav />
            <div className='main-container'>
              <img className='pl-[2.8rem]' src="/Frame 560.png" alt="" />
              <div></div>
            </div>
        </main>
    </Layout>
  )
}

export default Home