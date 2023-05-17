import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import './Layout.css'

const Layout = ({children}) => {
  return (
    <div className='layout-container'>
      <Navbar/>
      <main className='children-wrapper'>{children}
      <Footer/>
      </main>
    </div>
  )
}

export default Layout