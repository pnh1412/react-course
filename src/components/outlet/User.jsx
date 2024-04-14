import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function User() {
  return (
    <div>
      <h1>User</h1>
      <div>
        First Name: tony <br />
        Last Name: nguyen <br />
      </div>
      
      <ul className="flex">
        <li className="mr-6" onClick={() => changeTab('account')}>
          <Link to="/user/account" className="text-blue-500 hover:text-blue-800">Account</Link>
        </li>
        <li className="mr-6"  onClick={() => changeTab('profile')}>
          <Link to="/user/profile" className="text-blue-500 hover:text-blue-800">Profile</Link>
        </li>
      </ul>

      <Outlet />

    </div>
  )
}

export default User