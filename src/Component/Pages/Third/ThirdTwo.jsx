import React, { useContext } from 'react'
import { CarContext } from '../../Data/CarData'

export default function ThirdTwo() {
  const { carState } = useContext(CarContext)


  return (
    <div style={{ fontSize: "20px", color: "red", marginLeft: "67%" }}>
      {carState.map((el) =>
        <p key={el.id}>
          {el.name}
        </p>
      )}
    </div>
  )
}
