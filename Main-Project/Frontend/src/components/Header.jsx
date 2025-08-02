import React from 'react'
import { useEffect } from 'react';
import {Link,NavLink,useNavigate} from "react-router-dom"
import { toast } from 'react-toastify';
import axios from 'axios';
function Header() {
  const navigate=useNavigate()
  const Logout=async (e)=>{
    e.preventDefault()
    const{data}=await axios.get('http://localhost:3000/api/user/logout')
    if(data.success){
      toast.success("Logged Out Successfully")
      navigate('/login')
    }else{
      toast.error('An error occured')
    }
  }
  return (
    <div className='bg-violet-700 w-full h-15 flex flex-row justify-between pt-4 pr-3 pl-6 items-end'>
      <ul className='flex flex-row gap-5'>
      <NavLink
  to="/home"
  className={({ isActive }) =>
    `relative px-4 py-2 text-white 
    ${isActive ? "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-white" : ""}`
  }
>
  Home
</NavLink>

        <NavLink to='/tickets'  className={({ isActive }) =>
    `relative px-4 py-2 text-white 
    ${isActive ? "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-white" : ""}`
  }>Tickets</NavLink>
        <NavLink to='/my-tickets'  className={({ isActive }) =>
    `relative px-4 py-2 text-white 
    ${isActive ? "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-white" : ""}`
  }>My Tickets</NavLink>
        <NavLink to='/Profile'  className={({ isActive }) =>
    `relative px-4 py-2 text-white 
    ${isActive ? "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-white" : ""}`
  }>Profile</NavLink>
      </ul>
        <button className='bg-white rounded-full text-violet-700 pt-2 pr-5 pl-5 pb-2  self-center cursor-pointer' onClick={Logout}>Logout</button>
    </div>
  )
}

export default Header
