import React from 'react'
import OrderItem from '../OrderItem'

function OrderList() {


    // dummy data (orders shall be passed from home page)
    const orders= [{
        ItemID:1,
        image: 'https://i.pinimg.com/236x/a6/e3/4d/a6e34dac0100628559401d1f65327727.jpg',
        name:'Headphones',
        desc: 'Dual noise sensor technology, featuring two microphones on each earcup, captures ambient noise and passes the data to the HD Noise Cancelling Processor QN1',
        price:300,
        quantity:3
    },
        {
        ItemID:2,
        image:'https://i.pinimg.com/236x/8e/b1/0d/8eb10d1ade19d2e8a8348de0139983ae.jpg',
        name:'First Aid kit',
        desc:'This First Aid Box is medium-sized and can be used for the collection of supplies and equipment for use in giving first aid.The box is durable and can serve as a made medical emergency box for the family and office',
        price:7000,
        quantity:1
        },
        {
          ItemID:3,
          image:'https://i.pinimg.com/236x/c9/6d/01/c96d015d5c7c90df8da9ba6f0f9286d5.jpg',
          desc: 'Experience the new kansa Boxing Gloves are built to be the only pair of boxing gloves youll ever need. Whether youre doing Heavy Bag Training, Fitness Workouts, or Sparring with a partner, they are designed to keep your hands and wrists protected from the abuse',
          name:'Boxing gloves',
          price:900,
          quantity:2
          }
]


const tablebody=orders.map(item => <OrderItem key={orders.ItemID} item={item}/>)

// Calculate the total
const total = orders.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);


  return (
    <div className='centre-table'>

      <table className="checkout-table">
      <thead>
        <tr>
          <th></th>
          <th>Product</th>
          <th>Price</th>
          
          <th>Total</th>
      
          <th>Quantity</th>
  
        </tr>
      </thead>

      <tbody>
        {tablebody}
      </ tbody>

      <tfoot>
          <tr>
            <td colSpan="3"></td>
            <td>Total:</td>
            <td>₦{total}</td>
          </tr>
        </tfoot>

      </table>
    
    </div>
  )
}

export default OrderList;
