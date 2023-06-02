import React, { useState } from 'react'

function OrderItem({item}) {

  const [quantity, setQuantity] = useState(item.quantity);
  const [deleteRow, setDeleteRow] = useState(false);

  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    console.log(newQuantity);
    // Update the total based on the new quantity
    const newTotal = item.price * newQuantity;
    setTotal(newTotal);
  };
  

  const decrementQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
    setQuantity(newQuantity);
    console.log(newQuantity);
    // Update the total based on the new quantity
    const newTotal = item.price * newQuantity;
    setTotal(newTotal);
    setDeleteRow(false);

    } else if (quantity === 1) {
      // Display delete icon or perform delete action here
      // For example, you can set a state variable to indicate deletion
      setDeleteRow(true);
    }
  };


    // Assuming you have a 'total' state variable
    const [total, setTotal] = useState(item.price * item.quantity);
  

  return (
    

    <tr >
    <td><img src={item.image} alt="Product Image" className="cart-image"/></td>
    <td>{item.name} <p className='desc'>{item.desc}</p></td>
    <td>{item.price}</td>
    
    <td>{total}</td>
    <td>
      <div className='incdec'>
      <button className="invisible-button" >
      {deleteRow ? <i className="bi bi-trash icon-style"></i> : <i className="bi bi-dash-square-fill icon-style"  onClick={decrementQuantity}></i>}
      </button>
    <p className='quantity'>{quantity}</p>
    <button className="invisible-button" ><i className="bi bi-plus-square-fill icon-style" onClick={incrementQuantity}></i></button>
    </div>
    </td>
    </tr>

  
  
  )
}

export default OrderItem
