import React from 'react'
import { useState } from 'react'

export default function CounterIndex() {
const [valu,SetValu]=useState(0)
const [disableHandle,SetDisableHandle]=useState(false)

function Incriz(){
SetValu(valu + 1)
}
function Dicriz(){
SetValu(valu - 1)
}
const isDisabled = valu>10||valu<-10

// if(valu>10||valu<-10){
//     console.log('nice')

//     // SetDisableHandle(true)
// }

  return (

    <div>
        <h1>Counter</h1>
        <div>{valu}</div>
        <button disabled={isDisabled} onClick={Dicriz}>Dicriment</button>
        <button disabled={isDisabled} onClick={Incriz}>Incriment</button>
    </div>
  )
}
