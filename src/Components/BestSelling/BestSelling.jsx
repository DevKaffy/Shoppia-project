import React from 'react'
import './BestSelling.css'

const BestSelling = ({img, title, price}) => {
  return (
    <div>
      <div className="h-[15.6rem] w-[16.8rem] flex items-center justify-center bg-[#F5F5F5] mb-4">
        <img src={img} alt="" />
      </div>
      <p className='mb-4'>{title}</p>
      <p className='mb-4'>{price}</p>
    </div>
  );
}

export default BestSelling