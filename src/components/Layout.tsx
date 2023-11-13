import React, { useState, useContext } from 'react'
import { BrowserRouter as Router, Outlet } from 'react-router-dom'

// cyan-blue layout
const Layout: React.FC = () => {
  return (
    <div className="mediumShadow shadow-strong center text-md m-auto mt-6 w-full items-center justify-center bg-gradient-to-tr from-cyan-700 to-blue-800 p-8 text-center font-mono text-white md:max-w-screen-lg">
      <Outlet />
    </div>
  )
}

export default Layout
