import React from 'react'
import { useState } from 'react';


const SidebarItem = () => {
 
  return (
    <div className='sidebar-item'>
      <div className='sidebar-title'>
        <span>Women's Fashion</span>
        <img className='toggle-btn' src="/arrow.svg" alt="" />
      </div>
      <div className='sidebar-content'>
        <div>hello</div>
      </div>
    </div>
  );
}

export default SidebarItem