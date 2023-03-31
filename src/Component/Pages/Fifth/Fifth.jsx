import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Fifth() {
  return (
    <>
    <ul className='header-items'>
        <li><NavLink to="/fifth/one">Fifth 1</NavLink></li>
        <li><NavLink to="/fifth/two">Fifth 2</NavLink></li>
        <li><NavLink to="/fifth/three">Fifth 3</NavLink></li>
    </ul>
    <Outlet/>
    </>
  )
}
