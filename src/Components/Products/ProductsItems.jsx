import React, { useState } from 'react';
import axios from 'axios';
import './Products.css';
import { useNavigate } from 'react-router-dom';

const ProductsItems = ({ image, title, price, productId, onAddToCart, id }) => {
  const [cartCount, setCartCount] = useState(0);
  const userId = localStorage.getItem('userId');

  const navigate = useNavigate();
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
      const { message } = response.data;

      alert(message);

      setCartCount(response.data.count);
      onAddToCart(); // Call the onAddToCart function passed as a prop from Products component
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const formattedPrice = `₦${price}`;

  return (
    <div>
      <div>
        <div>
          <img
            className="h-[15.6rem] w-[16.8rem] flex items-center justify-center bg-[#F5F5F5] mb-[-2rem] cursor-pointer"
            src={image}
            alt={title}
            onClick={() => navigate(`/${id}`)}
          />
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
