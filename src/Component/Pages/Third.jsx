import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


export default function Third() {
    

  return (
    <>
    <ul className='header-items'>
        <li><NavLink to="/third/one">Third One</NavLink></li>
        <li><NavLink to="/third/two">Third Two</NavLink></li>
    </ul>
    <Outlet/>
    </>
  )
}
