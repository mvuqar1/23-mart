import React from 'react'
import FormComponent from '../Components/FormComponent'
import { useSelector } from 'react-redux'


export default function Form() {
  const siyahi=useSelector(state=>state?.countReducer?.form)
console.log(siyahi);


  return (
    <>
    <FormComponent/>
    <div>
    {siyahi.map((el)=>
    <div>
      {el.name}<br/>
      {el.surname}<br/>
      {el.age}<br/>
      {el.mesag}<br/>
    </div>
  
    )}

    </div>

    </>
    
  )
}
