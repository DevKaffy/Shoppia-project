import React from 'react'
import { useState } from 'react';
import { items } from '../../data';


const SidebarItem = ({title, path}) => {
//  const [open, setOpen] = useState(false)

    return (
      <div className={open ? "sidebar-item open": "sidebar-item"}>
        <div className='sidebar-title'>
          <a href={path}>{title}</a>
          {/* <img className='toggle-btn h-6 w-6' onClick={() => setOpen(!open)} src={icon} alt="" /> */}
        </div>
        {/* <div className='sidebar-content'>
          <div>hello</div>
        </div> */}
      </div>
    );

}

export default SidebarItem