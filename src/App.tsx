import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './components/Contact'
import Projects from './components/Projects'
import AppContainer from './components/AppContainer'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AppContainer />} />

        <Route path="app" element={<Home />}>
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
