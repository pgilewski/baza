import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Outlet } from 'react-router-dom';

// TODO: layout if needed

const Groups: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Groups;
