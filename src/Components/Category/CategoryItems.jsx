import React from 'react'

const CategoryItems = ({icon, title}) => {
  return (
    <div className='category'>
    <img src={icon} alt="" />
    <p>{title}</p>
    </div>
  )
}

export default CategoryItems