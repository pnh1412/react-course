import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='w-full h-[64px] flex items-center px-2 border-solid border-b-[1px] border-[#e5e7eb]'>
      <div className='flex justify-end w-full'>
        <Link to='/signin' className='text-lg font-semibold text-[#3d68ff]'>Logout</Link>
      </div>
    </header>
  )
}

export default Header