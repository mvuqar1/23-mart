import React from 'react'

import { useState, useEffect } from 'react'
import { useLocation, useNavigate} from 'react-router-dom'

import { getAllApi } from "../API/Api"
import Preloader from "../Components/Preloader"
import AllApiList from '../Components/AllApiList'
import Search from '../Components/Search'

export default function First() {

  const [cataloq, setCataloq] = useState([]);
  const [filteredCataloq, setFilteredCataloq] = useState([]);
  const [strValue, setStrValue] = useState("")
  const{pathname}=useLocation()       //  /products ?search=....
  const navigate = useNavigate();


  const hadlerSearch = (str) => {
    setStrValue(str)
    setFilteredCataloq(
      cataloq.filter((item) => (
        item.title.toLowerCase().includes(str.toLowerCase())
        ))
        )

  }

    useEffect(() => {
      navigate({pathname, search: `?search=${strValue}`})

    }, [strValue] )

  useEffect(() => {
    getAllApi().then((data) => {
      setCataloq(data);
      setFilteredCataloq(data);
    })
  }, [])

  return (

    <div>

      <h1>First</h1>
      <br />

      <Search cb={hadlerSearch} />

      {!cataloq.length ? (
        <Preloader />
      ) : (
        <AllApiList cataloq={filteredCataloq} />
      )
      }
    </div>

  )
}
