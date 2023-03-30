import React, { useContext } from 'react'
import { DorduncununDatasi } from '../Components/DorduncununDatasi'

export default function ThirdOne() {
  const userContextDeiwenIki = useContext(DorduncununDatasi)
  // console.log(userContextDeiwenIki.car);
  let con=userContextDeiwenIki.car.map((el)=>
    <p>{el.name}</p>
  )

  return (
<div style={{fontSize:"20px",color:"blue",marginLeft:"32%"}}>
  {con}
    </div>
  )
}
