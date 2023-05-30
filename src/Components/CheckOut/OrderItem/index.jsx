import React, { useState } from 'react'

function OrderItem({item}) {

  const [quantity, setQuantity] = useState(item.quantity);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
    console.log(quantity)
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };


  return (
    

    <tr >
    <td><img src={item.image} alt="Product Image" className="cart-image"/></td>
    <td>{item.name} <p className='desc'>{item.desc}</p></td>
    <td>${item.price}</td>
    
    <td>${item.price * item.quantity}</td>
    <td>
      <div className='incdec'>
        <button className="invisible-button" ><i className="bi bi-plus-square-fill icon-style" onClick={incrementQuantity}></i></button>
    <p className='quantity'>{quantity}</p>
    <button className="invisible-button" ><i className="bi bi-dash-square-fill icon-style1" onClick={decrementQuantity}></i></button>
    </div>
    </td>
    </tr>

  
  
  )
}

export default OrderItem
