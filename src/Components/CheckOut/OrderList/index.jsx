import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OrderList() {
  const [products, setProducts] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const token = localStorage.getItem('token');
        const response = await axios.get(`https://shoppia-production.up.railway.app/api/v1/users/${userId}/carts`, {
          headers: {
            Authorization: token,
          },
        });
        if (response.data && response.data.products) {
          const { products, grandTotal } = response.data;
          setProducts(products);
          setGrandTotal(grandTotal);
        } else {
          setProducts([]);
          setGrandTotal(0);
        }
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
      setIsLoading(false);
    };

    fetchCartData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Cart Items</h2>
      {products && products.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img src={product.imageUrl} alt="Product Image" />
                  </td>
                  <td>
                    {product.title}
                    <p className="desc">{product.description}</p>
                  </td>
                  <td>₦{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>₦{product.totalPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>Grand Total: ₦{grandTotal}</p>
        </>
      )}
    </div>
  );
}

export default OrderList;