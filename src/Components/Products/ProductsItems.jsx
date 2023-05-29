import React from 'react'
import './Products.css'

const ProductsItems = ({image, title, price}) => {
  const handleClick = () => {
    console.log('hello, ninjas');
  }
  return (
    <div>
      <div> 
        <div className="h-[15.6rem] w-[16.8rem] flex items-center justify-center bg-[#F5F5F5] mb-[-2rem]">
          <img src={image} alt="" />
        </div>
        <button onClick={handleClick()} className='product-image'>Add To Cart</button>
        <p className="mb-4">{title}</p>
        <p className="mb-4">{price}</p>
      </div>
    </div>
  );
}

export default ProductsItems