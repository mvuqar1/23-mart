import React, { useContext } from 'react'
import { UserContext } from '../Components/MerkeziData';



export default function Second() {

  const userContext = useContext(UserContext)
  let pokaz=userContext.logged;
  console.log(pokaz);

  return (

    <div>
      <h3>Second</h3>
      <button onClick={userContext.toggleLogged}>
        Log in
      </button>
      <h1>{pokaz}</h1>

    </div>
  )
}
