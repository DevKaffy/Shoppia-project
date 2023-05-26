import React from 'react'
import { useState } from 'react';


const SidebarItem = () => {
  const [open, setOpen] = useState(true)
  return (
    <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="side-flex">
          <span>Women's fashion</span>
          <img className="toggle-btn open" src="/arrow.svg" alt="" />
        </div>
        <div className='sidebar-content'>hello</div>
      </div>
  );
}

export default SidebarItem