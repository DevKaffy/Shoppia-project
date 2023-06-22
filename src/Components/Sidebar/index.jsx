import React from 'react'
import SidebarItem from './SidebarItem'
import { items } from '../../data'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div>
      <div className='sidebar'>
       {
        items.map((item, index)=>(
          <SidebarItem 
          key={`items = ${index}`}
          id = {item.id}
          title = {item.title}
          path = {item.path}
          />
        ))
       }
      </div>
    </div>
  )
}

export default Sidebar