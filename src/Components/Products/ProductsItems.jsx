import React from 'react'
import './Products.css'

const ProductsItems = ({image, title, price}) => {
  return (
    <div className='product-items'>
      <div>
        <img src={image} alt="" />
        <p>{title}</p>
        <p>{price}</p>
      </div>
    </div>
  )
}

export default ProductsItems