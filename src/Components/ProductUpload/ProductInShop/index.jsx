import React from 'react'


function ProductInShop() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 20px 20px' }} className="product-item">
        <img src='https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/03/b960fb_d7966c40128e4b16830028749603f826mv2.jpeg?resize=1000%2C1000&ssl=1' 
        alt="Product"
         className='imenlarge' />
        <h3 style={{ fontSize: '14px' , textAlign: 'center' , maxWidth: '100px', maxHeight: '100px' }}>CENTELLA AMPOULE</h3>
        <p>500$</p>
    </div>
  )
}

export default ProductInShop
