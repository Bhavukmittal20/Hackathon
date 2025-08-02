import React from 'react'
import {Link} from 'react-router-dom'
function Login() {
  return (
    <>
      <div className='flex h-[100vh] w-[100vw] justify-center items-center flex-col gap-3 '>
        <p className='text-4xl text-violet-700'>Log<span className='text-blue-300'>in</span></p>
        <form className='flex flex-col gap-4'>
            <div className='flex flex-row gap-4'>
            <p className='text-2xl text-violet-700'>Username:</p>
            <input type="text" placeholder='Enter username here' className='text-gray-500 h-7 p-3 border border-blue-300 rounded-2xl' />
            </div>
            <div className='flex flex-row gap-4'>
            <p className='text-2xl text-violet-700'>Password:</p>
            <input type="password" placeholder='Enter password here' className='text-gray-500 h-7 p-3 border border-blue-300 rounded-2xl'/>
            </div>
            <button className='bg-violet-700 h-7 p-1 rounded-xl text-white cursor-pointer hover:'>Submit</button>
            <p className='text-violet-700 self-center'>New User?<span className='text-blue-300 underline cursor-pointer'><Link to='/register'>Register here</Link></span></p>
        </form>
      </div>
    </>
  )
}

export default Login
