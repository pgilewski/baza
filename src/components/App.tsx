import React from 'react'
import '../App.css'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Groups from './Groups'
import AppSpawn from './AppSpawn'
import { AuthProvider } from '../utils/context/AuthContext'
import awsconfig from '../aws-exports'
import Amplify from 'aws-amplify'
import Register from './Register'
import SingleGroup from './SingleGroup'
import Layout from './Layout'
import Policy from './Policy'

Amplify.configure(awsconfig)

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
            <Route path="policy" element={<Policy />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
