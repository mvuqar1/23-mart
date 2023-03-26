import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import React from 'react'
import { getIdApi } from '../API/Api'
import Preloader from '../Components/Preloader'
import FotoItem from '../Components/FotoList'


export default function Foto() {

  const {id}=useParams()
  const [fotId,setFotId]=useState([])
  
  useEffect(()=>{
    getIdApi(id).then((data)=>{
      setFotId(data)
    })

  },[setFotId])

  return (
    <div>
      <FotoItem fotId={fotId}/>
      
  
</div>
  )
}
