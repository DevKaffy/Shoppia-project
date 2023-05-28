import React from 'react'
import './BestSelling.css'

const BestSelling = ({img, title, price}) => {
  return (
    <div>
      <div className="h-[15.6rem] w-[16.8rem] flex items-center justify-center bg-[#F5F5F5]">
        <img src={img} alt="" />
      </div>
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );
}

export default BestSelling