import React, { Component } from 'react'


//style={{ backgroundColor: '#ff0000' }}

class AccountSideBar extends Component {
  render() {
    return (



  
        <div className="col-3 custom-sidebar"  style={{background: 'black', marginLeft: '30px', marginTop: '80px', boxShadow: '0 4px 8px rgba(5, 3, 1, 0.2)', width: '200px'}}>
          {/* Sidebar content here */}
          <img src='https://i.pinimg.com/236x/48/61/f6/4861f6c9ed8cc7a81fc665201bcf6ea2.jpg' style={{ backgroundColor: 'white', width: '90px', height: '90px', alignSelf: 'center' }} className="rounded-circle img-fluid" alt="Profile Picture" />
            <h3  className= 'nav-item'>Tim Osmond</h3>
          <ul className="nav flex-column">
            <li className="nav-item">
              <i class="bi bi-house-fill"></i>
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <i class="bi bi-person"></i>
              <a className="nav-link" href="#">Profile</a>
            </li>
            <li className="nav-item">
              <i class="bi bi-box"></i>
              <a className="nav-link" href="#">Products</a>
            </li>
            <li className="nav-item" >
              <i class="bi bi-cart4"></i>
              <a className="nav-link" href="#">Orders</a>
            </li>
            <li className="nav-item" >
              <i class="bi bi-cart2"></i>
              <a className="nav-link" href="#">My Cart</a>
            </li>
            <li className="nav-item">
              <i class="bi bi-box-arrow-right"></i>
              <a className="nav-link" href="#">LogOut</a>
            </li>

            

          </ul>
        </div>
    





      
    )
  }
}

export default AccountSideBar