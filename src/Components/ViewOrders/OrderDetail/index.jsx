import React, { Component } from 'react'
import './orderdetail.css'

class index extends Component {
  render() {
    return (
      <div className='orderdiv'>
        <div className='orderheader'>
          <h3 style={{ textAlign: "center" , paddingLeft: "0px" , fontSize: "17px", fontWeight: 600 }}>Microphones Delux 700</h3>
        </div>
        <div className='orderbody'>

              <div style={{ gridRow: "row1", gridColumn: "desc", paddingTop: "10px"  }}>
                <p>dummydata@gmail.com</p>
              </div>

              <div style={{ gridRow: "row1", gridColumn: "icon-s" }}>
                <i className="bi bi-envelope-fill"></i>
              </div>

              <div style={{ gridRow: "row2", gridColumn: "desc" , paddingTop: "10px" }}>
                <p>Quantity</p>
              </div>

              <div style={{ gridRow: "row2", gridColumn: "icon-s" }}>
              <i class="bi bi-question-square-fill"></i>
              </div>

              <div style={{ gridRow: "row3", gridColumn: "desc" , paddingTop: "10px" }}>
                <p> 02/06/2023</p>
              </div>

              <div style={{ gridRow: "row3", gridColumn: "icon-s" }}>
              <i class="bi bi-calendar4-week"></i>
              </div>

           
          </div>
        

        <div className='orderfooter'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-xMlXkML7D6jOZrDz5lnGpauCLA6u5J3jQ&usqp=CAU' style={{ backgroundColor: 'white', width: '50px', height: '50px', alignSelf: 'center' ,gridColumn: "pic" }} className="rounded-circle img-fluid" alt="Profile Picture" />
          <h2 style={{gridColumn: "namef", paddingTop: '10px', fontWeight: 500}} >Martha Ongoro</h2>
        </div>
      </div>
    )
  }
}

export default index