import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './pages/Login.jsx'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Register from './pages/Register.jsx'
import { ToastContainer, toast } from 'react-toastify';
import Home from './pages/Home.jsx'
import Header from './components/Header.jsx'
import MainLayout from './components/MainLayout.jsx'
function App() {
  return(
  <Routes>
  {/* Pages WITH header */}
  <Route element={<MainLayout />}>
    <Route path="/home" element={<Home />} />
    {/* add more if needed */}
  </Route>

  {/* Pages WITHOUT header */}
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
</Routes>
);
}

export default App
