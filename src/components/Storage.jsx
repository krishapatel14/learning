import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Storage = () => {
  const navigate=useNavigate()
    const [id, setid] = useState()
    const storeData=()=>{
        localStorage.setItem("id","101")
        sessionStorage.setItem("id","102")
        navigate("/aboutus")
        
    }
    const getData=()=>{
        setid(localStorage.getItem("id"))
    }
  return (
    <div>
        <h1>Storage</h1>
        <button onClick={()=>storeData()}>StoreData</button>
        <button onClick={()=>getData()}>GetData</button>
        {id}
    </div>
  )
}
