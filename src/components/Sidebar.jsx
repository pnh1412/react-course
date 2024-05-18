import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className="relative bg-[#3d68ff] w-64 shrink-0 hidden sm:block shadow-xl">
      <div className="p-6">
        <a href="/" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</a>
      </div>
      <nav className="text-white text-base font-semibold pt-3">
        <Link to="/introduction-jsx" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">Introduction JSX</Link>
        <Link to="/props" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">Props</Link>
        <Link to="/state" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">State</Link>
        <Link to="/user" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">User</Link>
        <Link to="/components" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">Components</Link>
        <Link to="/comment" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">Comment</Link>
        <Link to="/compose-component" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">Compose Component</Link>
        <Link to="/hau-compose-component" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">Hau Compose Component</Link>
        <Link to="/hau-conditional-rendering" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">Hau Conditional Rendering</Link>
        <Link to="/hau-list" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">Hau List</Link>
        <Link to="/guest-greeting" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">Guest Greeting</Link>
        <Link to="/css" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">CSS</Link>
        <Link to="/conditional-rendering" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">Conditional Rendering</Link>
        <Link to="/list" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">List</Link>
        <Link to="/lifting-state-up" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">Lifting State Up</Link>
        <Link to="/hau-box" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">Hau Box</Link>
        <Link to="/form" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">Form</Link>
        <Link to="/lifecycle-hook" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">Lifecycle Hook</Link>
        <Link to="/share-state-component" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">Share State Component</Link>
        <Link to="/effect-hook" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">Effect Hook</Link>
        <Link to="/movie" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">Movie</Link>
        <Link to="/ref-hooks" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">Ref Hooks</Link>
        <Link to="/performance-hook" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">Performance Hook</Link>
        <Link to="/collapse" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">Collapse</Link>
        <Link to="/hau-collapse" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">Hau Collapse</Link>
      </nav>
    </aside>
  )
}

export default Sidebar
