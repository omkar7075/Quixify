import React from 'react'
import { Outlet } from 'react-router-dom'

function HeaderComponent() {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default HeaderComponent
