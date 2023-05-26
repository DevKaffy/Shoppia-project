import React from 'react'
import { categories } from '../../data'
import './Category.css'
import CategoryItems from './CategoryItems'

const Category = () => {
  return (
    <div className='flex items-center flex-wrap justify-between'>
        {
            categories.map((category, index)=>(
                <div className='border pt-[1.5rem] pb-[1.5rem] pr-[2rem] pl-[2rem] flex flex-col items-center justify-center'>
                    <CategoryItems 
                    key={`categories - ${index} `}
                    icon={category.icon}
                    title={category.title}
                    />
                </div>
            ))
        }
    </div>
  )
}

export default Category