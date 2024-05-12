import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate();
  
  function logout() {
    window.localStorage.clear();
    navigate('/signin')
  }
  
  return (
    <header className='w-full h-[64px] flex items-center px-2 border-solid border-b-[1px] border-[#e5e7eb]'>
      <div className='flex justify-end w-full'>
        <button  className='text-lg font-semibold text-[#3d68ff]' onClick={logout}>Logout</button>
      </div>
    </header>
  )
}

export default Header