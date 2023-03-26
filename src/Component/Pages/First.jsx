import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getAllApi } from "../../Api"
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

    <div>First<br />
      {!cataloq.length ? (
        <Preloader />
        ):(
          <AllApiList cataloq={cataloq}/>
        )
        }
    </div>

  )
}
