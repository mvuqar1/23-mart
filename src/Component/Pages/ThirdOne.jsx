import React, { useContext } from 'react'

import { CarContext } from '../Data/CarData'
import { ACTION_TYPES } from '../Data/CarData'

export default function ThirdOne() {
  const {car,dispatc} = useContext(CarContext)
  return (
    <div style={{ fontSize: "20px", color: "blue", marginLeft: "25%" }}>
      {car.map((el) =>
        <div key={el.id}>
          <p>
            <button
              className='btn-2'
              onClick={()=>{
                dispatc({
                  type:ACTION_TYPES.REMOVE,
                  payload:(el.id)
                })
              }}
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
