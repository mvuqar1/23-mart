import React from 'react'
import { useSelector } from 'react-redux'


export default function FifthTho() {
  const count=useSelector(state=>state.counter)
  return (
    <div style={{marginLeft:"50%"}}>
      <h1>{count}</h1>
      </div>
    
  )
}

