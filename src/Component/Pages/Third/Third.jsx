import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


export default function Third() {
    

  return (
    <>
    __________________ createContext , (Provider . value . props.children) ,useReducer (state,dispatch=reduser,initialState) , action(type) <br/>
    __________________ useContext
    <ul className='header-items'>
        <li><NavLink to="/third">Third One</NavLink></li>
        <li><NavLink to="/third/two">Third Two</NavLink></li>
    </ul>
    <Outlet/>
    </>
  )
}
