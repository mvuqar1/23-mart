import React from 'react'
import AllApiListItem from "./AllApiListItem"

export default function AllApiList(props) {
  const{cataloq}=props
  
  return (
    <div style={{display:"flex",flexWrap:"wrap",gap:"2%"}}>
      {cataloq.map(el=>(
        <AllApiListItem key={el.id} {...el} />
      ))}
    </div>
  )
}
