import React from 'react'
import './Products.css'

const ProductsItems = ({image, title, price}) => {
  return (
    <div>
      <div>
        <div className='h-[15.6rem] w-[16.8rem] flex items-center justify-center'>
        <img src={image} alt="" />
        </div>
        <p>{title}</p>
        <p>{price}</p>
      </div>
    </div>
  )
}

export default ProductsItems