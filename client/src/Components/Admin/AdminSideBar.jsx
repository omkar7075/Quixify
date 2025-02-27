import React from 'react'
// import './AdminDashboard.css';
import SideMenu from './AdminSideMenu';
import { Outlet } from 'react-router-dom';
function AdminSideBar() {
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

export default AdminSideBar
