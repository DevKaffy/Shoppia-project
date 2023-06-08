import React, { Component } from 'react'
import ImageUpload from '../ImageUpload';
import '../../Account/myStyles.css';

import AccountSideBar from '../../Account/AccountSideBar';
import UploadPopup from '../UploadPopup';
import ProductInShop from '../ProductInShop';
import Popup from '../ProductEntryPopup';
import Navbar from '../../Navbar'



class ProductUpload extends Component {

  constructor(props) {
    super(props);
    this.divRef = React.createRef();
    this.state = {
      products: [1, 2, 3, 4, 5], // Sample product data for demonstration
    };
  }

  render() {
    const { products } = this.state; // Access the products array from the state

    return (
      <div>
        <Navbar />
      <div className="custom-navbar">
       
        <div className="custom-navbar-left">
          <AccountSideBar />
        </div>
        <div className="products">
          

          <div className="mainshop-div">
            <img src="https://graphicriver.img.customer.envatousercontent.com/files/256521320/bookmockup_preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=8dbf168b145bbec1aa5f0c7e60d9748b" alt="Shop banner" className="shop-banner" />

            <div className="products-list" style={{ display: 'grid', gridTemplateRows: 'auto 90%' }}>
              <div>
                <h1 style={{ fontSize: '20px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
              paddingLeft: '20px',
              paddingTop:'20px'  }}> Products</h1>
              </div>
              <div className="product-mini-div">
                {products.map((productId, index) => (
                  <ProductInShop key={productId} itemId={productId} />
                ))}
                <Popup />
                
              
               

              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default ProductUpload
