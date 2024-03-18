import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import MainPage from './pages/MainPage'

function App() {
  
  return (
    <div className="w-full h-screen">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
