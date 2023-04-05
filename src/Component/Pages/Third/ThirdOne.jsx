import React, { useContext } from 'react'

import { CarContext } from '../../Data/CarData'
import { ACTION_TYPES } from '../../Data/CarData'

export default function ThirdOne() {
  const { carState, dispatc } = useContext(CarContext)
  return (
    <div style={{ fontSize: "20px", color: "blue", marginLeft: "25%" }}>
      {carState.map((el) =>
        <div key={el.id}>
          <p>
            <button
              className='btn-2'
              style={{ marginRight: "3%" }}
              onClick={() => { dispatc({ type: ACTION_TYPES.REMOVE, payload: (el.id) }) }}>
              Delete
            </button>
            {el.name}
          </p>
        </div>
      )}
    </div>
  )
}
