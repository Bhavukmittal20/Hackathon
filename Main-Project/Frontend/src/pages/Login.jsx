import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import AppContextProvider, { AppContext } from '../context/AppContext'
import { useState } from 'react'
import { useContext } from 'react'
import axios from "axios"
function Login() {
  const [password,setpassword]=useState('')
  const [email,setemail]=useState('')
  const {backendUrl}=useContext(AppContext)
  const navigate=useNavigate()
  const onSubmitHandler=async(e)=>{
     e.preventDefault();
     const{data}=await axios.post('http://localhost:3000/api/user/login',{email,password})
     if(data.success){
       navigate('/Home')
     }else{
      toast.error(data.message);
     }

  }
  return (
    <>
      <div className='flex h-[100vh] w-[100vw] justify-center items-center flex-col gap-3 '>
        <p className='text-4xl text-violet-700'>Log<span className='text-blue-300'>in</span></p>
        <form className='flex flex-col gap-4' onSubmit={onSubmitHandler}>
            <div className='flex flex-row gap-15'>
            <p className='text-2xl text-violet-700'>Email:</p>
            <input type="email" placeholder='Enter Email here' className='text-gray-500 h-7 p-3 border border-blue-300 rounded-2xl' onChange={(e)=>{setemail(e.target.value)}}/>
            </div>
            <div className='flex flex-row gap-4'>
            <p className='text-2xl text-violet-700'>Password:</p>
            <input type="password" placeholder='Enter password here' className='text-gray-500 h-7 p-3 border border-blue-300 rounded-2xl' onChange={(e)=>{setpassword(e.target.value)}}/>
            </div>
            <button type='submit' className='bg-violet-700 h-7 p-1 rounded-xl text-white cursor-pointer hover:'>Submit</button>
            <p className='text-violet-700 self-center'>New User?<span className='text-blue-300 underline cursor-pointer'><Link to='/register'>Register here</Link></span></p>
        </form>
      </div>
    </>
  )
}

export default Login
