import React from 'react'
import {useEffect} from 'react';

import { useNavigate } from 'react-router-dom'

export default function FotoItem(props) {

  const { fotoId } = props
  const navigate = useNavigate()
 
  const goBack = () => navigate("/products")      // const goBack = () => navigate("-1")

  useEffect(() => {
    const keyDownHandler = event => {
      if (event.key === 'Backspace') {
        // event.preventDefault();
        goBack();
      }
    };
    
    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler)
    };
  }, [goBack]);
  return (
    <div>
      <button className='btn-1' onClick={goBack}>Go Back</button>
      <div>{fotoId.title}</div>
      <img style={{ width: "300px" }} src={fotoId.image} alt={fotoId.title} />
      <span>{fotoId.price}</span>
    </div>
  )
}
