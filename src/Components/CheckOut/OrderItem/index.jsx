/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrderList from '../OrderList';

function OrderItem() {
  const [products, setProducts] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const token = localStorage.getItem('token');
        const response = await axios.get(`https://shoppia-production.up.railway.app/api/v1/users/${userId}/carts`, {
          headers: {
            Authorization: `${token}`,
          },
        });
        const { products, grandTotal } = response.data;

        setProducts(products);
        setGrandTotal(grandTotal);
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };

    fetchCartData();
  }, []);

  return (
    <div>
      <h2>Cart Items</h2>
      <OrderList products={products} grandTotal={grandTotal} />
    </div>
  );
}

export default OrderItem;*/
