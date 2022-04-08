import React from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Groups from './components/Groups';
import AppSpawn from './components/AppSpawn';
import { AuthProvider } from './context/AuthContext';
import awsconfig from './aws-exports';
import Amplify from 'aws-amplify';
import Register from './components/Register';
import SingleGroup from './components/SingleGroup';
import Layout from './components/Layout';

Amplify.configure(awsconfig);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route index element={<AppSpawn />} />
          <Route path="register" element={<Register />} />
          <Route path="app" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="groups" element={<Groups />}>
              <Route path=":groupId" element={<SingleGroup />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
