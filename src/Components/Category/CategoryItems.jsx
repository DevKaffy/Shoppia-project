import React from 'react'

const CategoryItems = ({icon, title}) => {
  return (
    <div>
    <img src={icon} alt="" />
    <p>{title}</p>
    </div>
  )
}

export default CategoryItems