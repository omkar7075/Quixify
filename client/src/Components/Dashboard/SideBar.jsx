import React from 'react'
// import './Dashboard.css';
import SideMenu from './SideMenu';
import { Outlet } from 'react-router-dom';
function SideBar() {
  return (
    // <div style={{display:'flex'}}>
    <div >
      <div >
      <SideMenu/>
      </div>
      <div className='dash-mainContent'>
            <Outlet/>
        </div>
    </div>
  )
}

export default SideBar
