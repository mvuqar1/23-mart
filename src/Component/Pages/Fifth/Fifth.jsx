import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Fifth() {
  return (
    <>
    __________________ Provider , legacy_createStore , combineReducers , Reducer , action(type, creater) 
    <br/>
    __________________ useSelector, useDispatch
    <ul className='header-items'>
        <li><NavLink to="/fifth">Fifth 1</NavLink></li>
        <li><NavLink to="/fifth/two">Fifth 2</NavLink></li>
        <li><NavLink to="/fifth/three">Fifth 3</NavLink></li>
    </ul>
    <Outlet/>
    </>
  )
}
