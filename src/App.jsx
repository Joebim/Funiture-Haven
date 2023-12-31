import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>   
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
