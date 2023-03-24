import React from 'react'
import CounterIndex from './Component/Pages/CounterIndex'
import First from './Component/Pages/First'
import Second from './Component/Pages/Second'

import { Route,Link, Outlet } from 'react-router-dom'

export default function App() {

    return (
        <>
     <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="CounterIndex">Counter</Link>
            </li>
            <li>
              <Link to="/First">First</Link>
            </li>
            <li>
              <Link to="/second">Second</Link>
            </li>
          </ul>
        </nav>
    
        <Outlet/>

        </>
    )
}
