import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Outlet } from 'react-router-dom';

// cyan-blue layout
const Layout: React.FC = () => {
  return (
    <div className="mediumShadow text-white text-center shadow-strong m-auto justify-center items-center center md:max-w-screen-lg w-full bg-gradient-to-tr from-cyan-700 to-blue-800 mt-6 font-mono text-md p-8">
      <Outlet />
    </div>
  );
};

export default Layout;
