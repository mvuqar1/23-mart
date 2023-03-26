import React from 'react'
import AllApiListItem from "./AllApiListItem"

export default function AllApiList(props) {
  return (
    <div style={{display:"flex",flexWrap:"wrap",gap:"2%"}}>
      {props.cataloq.map(el=>(
        <AllApiListItem key={el.id} {...el} />
      ))}
    </div>
  )
}
