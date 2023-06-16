import '../../Account/myStyles.css';
import React, { Component } from 'react'
import OrderList from '../OrderList';
import AccountSideBar from '../../Account/AccountSideBar';
import Navbar from '../../Navbar';
import axios from 'axios';
class CheckOutPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orderConfirmed: false,
      comments: '',
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
  }

  submitHandler = async () => {
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
  
    try {
      await axios.post(
        `https://shoppia-production.up.railway.app/api/v1/users/${userId}/orders`, {},
        {
          headers: {
            Authorization: token,
          },
        }
      );
  
      // Order placed successfully
      this.setState({ orderConfirmed: true });
    } catch (error) {
      console.error(error);
    }
  };
  

  handleCommentChange(event) {
    this.setState({
      comments: event.target.value,
    });
  }

  render() {
    if (this.state.orderConfirmed) {
      return (
        <div id="orderConfirmed">
          <h1>Order Confirmed!</h1>
          <br />
          <p>
              Your order has been placed!. The seller(s) will contact you soon.
          </p>
          <a href="/myaccount">Back to Shop</a>
        </div>
      );
    }

    return (
      <div>
        <Navbar />

        <div className="custom-navbar">
          <div className="back">
            <div className="cart-header">
              <h1>My Shopping Cart</h1>
            </div>
            <div className="leftdiv"></div>

            <div className="container">
              <OrderList />

              <div className="comments">
                <form>
                  <label>Additional Comments to Seller (Optional)</label>
                  <br />
                  <textarea value={this.state.comments} onChange={this.handleCommentChange}></textarea>
                </form>
              </div>

              <button
                className="proceed"
                onClick={this.submitHandler}
                style={{
                  backgroundColor: '#ec644b',
                  color: '#fff',
                }}
              >
                Place Order
              </button>

              <a
                href="/myaccount"
                className="buttonLink"
                style={{
                  backgroundColor: '#ec644b',
                  color: '#fff',
                  cursor: 'pointer',
                }}
              >
                Continue Shopping
              </a>
            </div>
            <div class="rightdiv"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckOutPage;