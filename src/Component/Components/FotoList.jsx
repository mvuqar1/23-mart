import React from 'react'

export default function FotoItem(props) {
  const {fotId}=props
  return (
    <div>
      <div>{fotId.title}</div>
      <img style={{width:"500px"}} src={fotId.image} alt={fotId.title}/>
      <span>{fotId.price}</span>
    </div>
  )
}
