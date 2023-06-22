import React, { Component } from 'react';
import Navbar from '../../Navbar';
import AccountSideBar from '../../Account/AccountSideBar';
import './vieworders.css';
import OrderDetail from '../OrderDetail';

class index extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='custom-navbar'>
        <div className='custom-navbar-left'>
        <AccountSideBar />

        </div>
        <div className="products">
            <div className="title">

                <div className='ordertitle'>
                    <h1 className='heading'>Orders</h1>
                </div>

                <div className='orderbottom'>
                    <div className='all'>
                        <h2>All</h2>
                    </div>
                        <div className='recent'>
                            <h1>Recent</h1>
                        </div>

                        <div className='slider1'>
                            <button className="slider-button"></button>
                        </div>
                        <div className='slider2'>
                            <button className="slider-button"></button>
                        </div>
                </div>

                <div className='titlesearch-bar'>

                        <div className="search-bar">
                        <input type="text" placeholder="Search by Name" />
                        <i class="bi bi-search"></i>
                        </div>
                </div>
            
            </div>
               
                    <div className="read">
                        <h3 className='header3'>Read</h3>
                        <OrderDetail />
                        <OrderDetail />
                        <OrderDetail />

                       
                    </div>

                    <div className="unread">
                        <h3 className='header3'>Unread</h3>
                        <OrderDetail />
                    </div>
                    <div className="in-progress">
                        <h3 className='header3'>In Progress</h3>
                        <OrderDetail />
                    </div>
                
            
        </div>

        
        </div>
        </div>
      
    )
  }
}

export default index
