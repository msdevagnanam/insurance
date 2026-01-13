import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './assets/Pages/Home'
import Login from './assets/Pages/Login'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App