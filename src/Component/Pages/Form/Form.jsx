import React from 'react'
import FormComponent from '../../Components/FormComponent'
import { NavLink, Outlet } from 'react-router-dom'



export default function Form() {
  return(
    <>
    <ul className='header-items'>
      <li><NavLink to={"/form"}>POST</NavLink></li>
      <li><NavLink to={"/form/get"}>GET</NavLink></li>
      <li><NavLink to={"/form/put"}>PUT</NavLink></li>
      <li><NavLink to={"/form/delete"}>DELETE</NavLink></li>
    </ul>
    
    
    
    
    <Outlet/>
    </>
  )
 
}
