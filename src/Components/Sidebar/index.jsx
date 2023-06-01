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
          title = {item.title}
          icon = {item.icon}
          
          />
        ))
       }
      </div>
    </div>
  )
}

export default Sidebar