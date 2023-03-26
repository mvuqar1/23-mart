import React from 'react'

export default function FotoItem(props) {
  const {fotoId}=props
  return (
    <div>
      <div>{fotoId.title}</div>
      <img style={{width:"500px"}} src={fotoId.image} alt={fotoId.title}/>
      <span>{fotoId.price}</span>
    </div>
  )
}
