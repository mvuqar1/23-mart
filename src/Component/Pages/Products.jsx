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

  const{pathname,search}=useLocation()       //  /products ?search=....
  const navigate = useNavigate();

git 
  const hadlerSearch = (str) => {
    setFilteredCataloq(
      cataloq.filter((item) => (
        item.title.toLowerCase().includes(str.toLowerCase())
        ))
        )
        console.log(`${pathname}-nedir?_____________,${search}`);
        console.log(navigate)
        navigate({pathname,search:`?search=${str}`})

  }


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
