import React, { useContext } from 'react'

import { CarContext } from '../Data/CarData'

export default function ThirdOne() {
  const {car,removeCar} = useContext(CarContext)
  


  return (
    <div style={{ fontSize: "20px", color: "blue", marginLeft: "25%" }}>
      {car.map((el) =>
        <div key={el.id}>
          <p>
            <button
              className='btn-2'
              onClick={()=>removeCar(el.id)}
              style={{ marginRight: "3%" }}>
              Delete
            </button>
              {el.name}
          </p>
        </div>
      )}
    </div>
  )
}
