import '../Account/myStyles.css';
import React, { Component } from 'react'
import OrderList from './OrderList';
import AccountSideBar from '../Account/AccountSideBar';

class CheckOutPage extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         orderConfirmed: false,
         comments:''
      }
      this.submitHandler=this.submitHandler.bind(this)
    }

    submitHandler(){
        this.setState({
            orderConfirmed: true
        })
    }

    handleCommentChange=(event) =>{
      this.setState({
        comments : event.target.value
      })
    }

  render() {

    if (this.state.orderConfirmed){
        return(
            <div id="orderConfirmed" >
                <h1>Order Confirmed!</h1>
                <br />
                <p>Thank you for choosing our services. We appreciate your business and look forward to serving you again in the future. If you have any questions or need further assistance, please don't hesitate to contact our support team. </p>
                <a href="https://www.example.com">Back to Shop</a>            
            </div>
        )
    }else{


    return (

      <div className='custom-navbar'>
        <div className='custom-navbar-left'>
        <AccountSideBar />

        </div>
      
      <div className='back'>
        <div className='cart-header'>
          <h1>My Shopping Cart</h1>
        </div>
        <div className='leftdiv'>
         
        </div>

      <div className='container'>

        <OrderList />



        <div className='comments'>
        <form>
          <label>Additional Comments to Seller (Optional)</label>
          <br />
          <textarea value={this.state.comments}
            onChange={this.handleCommentChange}>
          </textarea>

        </form>
        </div>

        <button type='submit'
        className='proceed'
        onClick={this.submitHandler}> Proceed to Checkout</button>

        <a href="#" className="buttonLink">Continue Shopping</a>

      </div>
      <div class='rightdiv'>
          
        </div>
      </div>
      </div>


      
    )
    }
  }
}

export default CheckOutPage;