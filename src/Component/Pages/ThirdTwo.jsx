import React, { useContext } from 'react'
import { DorduncununDatasi } from '../Components/DorduncununDatasi'

export default function ThirdTwo() {
  const userContextDeiwenIki = useContext(DorduncununDatasi)
  // console.log(userContextDeiwenIki.car);
  let con=userContextDeiwenIki.car.map((el)=>
    <p>{el.name}</p>
  )

  return (
<div style={{fontSize:"20px",color:"red",marginLeft:"67%"}}>
  {con}
    </div>
  )
}
