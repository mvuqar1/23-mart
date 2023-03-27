import React from 'react'

import { useState, useEffect } from 'react'

import { getAllApi } from "../API/Api"
import Preloader from "../Components/Preloader"
import AllApiList from '../Components/AllApiList'

export default function First() {

  const [cataloq, setCataloq] = useState([])

  useEffect(() => {
    getAllApi().then((data) => {
      setCataloq(data)
    })
  },[])

  return (

    <div>
      <h1>First</h1>
      <br />
      {!cataloq.length ? (
        <Preloader />
        
        ):(
          <AllApiList cataloq={cataloq}/>
        )
        }
    </div>

  )
}
