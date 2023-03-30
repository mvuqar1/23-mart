import React from 'react'


import { NavLink, Outlet } from 'react-router-dom'

export default function App() {

  return (
    <div className='wrapper'>
      <nav className='header' >
        <ul className='header-items'> 
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/counterIndex">Counter</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/second">Second</NavLink>
          </li>
          <li>
            <NavLink to="/third">Third</NavLink>
          </li>
        </ul>
      </nav>
      <div className='main'>
        <Outlet />
      </div>
      <div className='footer'>
      <h1 style={{ backgroundColor: "blue" }}>Footer</h1>

      </div>
    </div>
  )
}
