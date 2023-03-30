import React, { useContext } from 'react'
import { UserContextDeiwen } from '../Data/MerkeziData';


export default function Second() {
  const userContextDeiwenIki = useContext(UserContextDeiwen)
  let pokaz=userContextDeiwenIki.logged;
  console.log(pokaz);

  return (

    <div>
      <h3>Second</h3>
      <button onClick={userContextDeiwenIki.toggleLogged}>
        Log in
      </button>
      <h1>{pokaz}</h1>

    </div>
  )
}
