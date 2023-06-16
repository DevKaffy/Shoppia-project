import React, { useState } from 'react';
import axios from 'axios';
import './Products.css';


const ProductsItems = ({ image, title, price, productId, onAddToCart }) => {
  const [cartCount, setCartCount] = useState(0);
  const userId = localStorage.getItem('userId');

  const handleClick = async () => {
    try {
      const response = await axios.post(
        `https://shoppia-production.up.railway.app/api/v1/users/${userId}/carts`,
        {
          productId: productId,
        },
        {
          headers: {
            Authorization: `${localStorage.getItem('token')}`,
          },
        }
      );
      const { message } = response.data || {};

      alert(message || 'Item added to cart.');

      setCartCount(response.data.count);
      onAddToCart();
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const formattedPrice = `₦${price}`;

  return (
    <div>
      <div>
        <div className="h-[15.6rem] w-[16.8rem] flex items-center justify-center bg-[#F5F5F5] mb-[-2rem]">
          <img src={image} alt={title} />
        </div>
        <button onClick={handleClick} className="product-image">
          Add To Cart
        </button>
        <p className="mb-1 mt-4">{title}</p>
        <p className="mb-4">{formattedPrice}</p>
      </div>
    </div>
  );
};

export default ProductsItems;