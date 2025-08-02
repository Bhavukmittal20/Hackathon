import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './pages/Login.jsx'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Register from './pages/Register.jsx'
import { ToastContainer, toast } from 'react-toastify';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ToastContainer />
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
    </>
  )
}

export default App
