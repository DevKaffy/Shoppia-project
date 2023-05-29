import React from 'react'
import { categories } from '../../data'
import './Category.css'
import CategoryItems from './CategoryItems'

const Category = () => {
  return (
    <div className='flex items-center flex-wrap justify-between'>
        {
            categories.map((category, index)=>(
                <div className='categ-container'>
                    <CategoryItems 
                    key={`categories - ${index}`}
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