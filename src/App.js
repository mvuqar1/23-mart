import React from 'react'


import { Link, Outlet } from 'react-router-dom'

export default function App() {

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counterIndex">Counter</Link>
          </li>
          <li>
            <Link to="/first">First</Link>
          </li>
          <li>
            <Link to="/second">Second</Link>
          </li>
        </ul>
      </nav>
      <Outlet />

    </>
  )
}
