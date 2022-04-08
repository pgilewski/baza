import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Groups from './components/Groups';
import AppContainer from './components/AppContainer'
import { AuthProvider } from "./context/AuthContext";
import awsconfig from './aws-exports';
import Amplify, { Auth } from 'aws-amplify';
Amplify.configure(awsconfig);
const App: React.FC = () => {
  return (
      <BrowserRouter>
          <AuthProvider>

        <Routes>

              <Route index element={<AppContainer />} />

              <Route path="app" element={<Home />}>
                <Route path="groups/:id" element={<Groups />} />
              </Route>

        </Routes>
        </AuthProvider>

      </BrowserRouter>

  )
}

export default App
