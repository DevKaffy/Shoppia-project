import React from 'react'

const SidebarItem = () => {
  return (
    <div className='sidebar-item'>
      <div className='sidebar-title'>
        <div className='side-flex .open'>
        <span>Women's fashion</span>
        <img className='toggle-btn' src="/arrow.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default SidebarItem