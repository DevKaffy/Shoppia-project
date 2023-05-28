import React from 'react'
import './Products.css'

const ProductsItems = ({image, title, price}) => {
  return (
    <div>
      <div>
        <div className="h-[15.6rem] w-[16.8rem] flex items-center justify-center bg-[#F5F5F5] mb-4">
          <img src={image} alt="" />
        </div>
        <p className="mb-4">{title}</p>
        <p className="mb-4">{price}</p>
      </div>
    </div>
  );
}

export default ProductsItems