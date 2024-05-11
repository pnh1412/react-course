import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

function MainLayout({ children }) {
  return (
    <div className='flex'>
      <Sidebar />

      <div className='flex flex-col w-full'>
        <Header />
        <main className='w-full flex-grow p-6'>
          {children}
        </main>
      </div>
      
      
    </div>
  )
}

export default MainLayout