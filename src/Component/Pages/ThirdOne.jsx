import React, { useContext } from 'react'

import { CarContext } from '../Data/CarData'

export default function ThirdOne() {
  const CarContextAldim = useContext(CarContext)
  

  return (
<div style={{fontSize:"20px",color:"blue",marginLeft:"32%"}}>
  {CarContextAldim.car.map((el)=>
    <p key={el.id}>{el.name}</p>
  )}
    </div>
  )
}
