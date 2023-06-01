import React from 'react'
import { useState } from 'react';
import { items } from '../../data';


const SidebarItem = ({title, icon}) => {
 const [open, setOpen] = useState(false)
 if(items.childrens){
    return (
      <div className={open ? "sidebar-item open": "sidebar-item"}>
        <div className='sidebar-title'>
          <span>{title}</span>
          <img className='toggle-btn' onClick={() => setOpen(!open)} src={icon} alt="" />
        </div>
        <div className='sidebar-content'>
          <div>hello</div>
        </div>
      </div>
    );
 }else{
  return(
    <a href={items.path || "#"} className="sidebar-item">
      <div className='sidebar-title'>
        <span>{title}</span>
      </div>
    </a>
  )
 }
}

export default SidebarItem