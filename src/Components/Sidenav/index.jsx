import React from 'react'
import { Link } from 'react-router-dom'
import { items } from '../../data'

const Sidenav = () => {
  return (
    <div>
    <div>
        {
            items.map((item, index)=>(
                <div>
                    {item.link}
                </div>
            ))
        }
    </div>
    </div>
  )
}

export default Sidenav