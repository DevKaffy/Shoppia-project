import React from 'react'
import { sellings } from '../../data'
import BestSelling from './BestSelling'

const BestSellingItems = () => {
  return (
    <div className='flex flex-wrap justify-between items-center'>
        {
            sellings.map((selling, index)=>(
                <BestSelling   
                key = {`selling - ${index}`}
                img = {selling.img}
                title = {selling.title}
                price = {selling.price}
                />
                
            ))
        }
    </div>
  )
}

export default BestSellingItems