import React from 'react'
import FormComponent from '../Components/FormComponent'
import { useSelector } from 'react-redux'


export default function Form() {
  const {name,surname,age,mesag}=useSelector(state=>state?.countReducer?.form)



  return (
    <>
    <FormComponent/>
    <p>{name}</p>
    <p>{surname}</p>
    <p>{age}</p>
    <p>{mesag}</p>
    </>
    
  )
}
