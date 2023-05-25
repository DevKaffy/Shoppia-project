import React from 'react'
import { useState } from 'react';


const SidebarItem = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="sidebar-item">
        <div className="side-flex">
          <span>Women's fashion</span>
          <img className="toggle-btn open" src="/arrow.svg" alt="" />
        </div>
      </div>
  );
}

export default SidebarItem