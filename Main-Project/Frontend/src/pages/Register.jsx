import React from 'react'
import {Link} from 'react-router-dom'
function Register() {
  return (
    <>
      <div className='flex h-[100vh] w-[100vw] justify-center items-center flex-col gap-3 '>
        <p className='text-4xl text-violet-700'>Reg<span className='text-blue-300'>ister</span></p>
        <form className='flex flex-col gap-4'>
            <div className='flex flex-row gap-22'>
            <p className='text-2xl text-violet-700'>Username:</p>
            <input type="text" placeholder='Enter username here' className='text-gray-500 h-7 p-3 border border-blue-300 rounded-2xl' />
            </div>
            <div className='flex flex-row gap-24'>
            <p className='text-2xl text-violet-700'>Password:</p>
            <input type="password" placeholder='Enter password here' className='text-gray-500 h-7 p-3 border border-blue-300 rounded-2xl'/>
            </div>
            <div className='flex flex-row gap-4'>
            <p className='text-2xl text-violet-700'>Confirm Password:</p>
            <input type="password" placeholder='Enter password here' className='text-gray-500 h-7 p-3 border border-blue-300 rounded-2xl'/>
            </div>
            <div className='flex flex-row gap-37'>
            <p className='text-2xl text-violet-700'>Email:</p>
            <input type="email" placeholder='Enter Email here' className='text-gray-500 h-7 p-3 border border-blue-300 rounded-2xl'/>
            </div>
            <button className='bg-violet-700 h-7 p-1 rounded-xl text-white cursor-pointer hover:'>Submit</button>
            <hr />
            <button className='flex flex-row justify-center border
            border-black rounded-2xl cursor-pointer'> <img src="https://www.google.com/favicon.ico" alt="Google Icon" className='h-7'/> Continue with Google</button>
            <p className='text-violet-700 self-center'>Old User?<span className='text-blue-300 underline cursor-pointer'><Link to='/login'>Login here</Link></span></p>
        </form>
      </div>
    </>
  )
}

export default Register
