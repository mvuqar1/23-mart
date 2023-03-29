import React, { useContext } from 'react'
import { UserContext } from '../Components/MerkeziData';



export default function Second() {

  const userContext = useContext(UserContext)
  return (

    <>
      <h3>Second</h3>
      <button onClick={userContext.toggleLogged}>
        Log in
      </button>

    </>
  )
}
