import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className="relative bg-[#3d68ff] w-64 shrink-0 hidden sm:block shadow-xl">
      <div className="p-6">
        <a href="index.html" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</a>
      </div>
      <nav className="text-white text-base font-semibold pt-3">
        <Link to="/introduction-jsx"className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
          Introduction JSX
        </Link>
        <Link to="/props" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">Props</Link>
        <Link to="/state" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">State</Link>
        <Link to="/user" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">User</Link>
        <Link to="/components" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">Components</Link>
      </nav>
    </aside>
  )
}

export default Sidebar